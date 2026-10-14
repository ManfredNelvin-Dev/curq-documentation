#!/usr/bin/env python3
"""
CURQ Documentation Multi-Version Builder
Builds documentation versions based on Git tags and branches.
"""

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path


def run_command(cmd, cwd=None, env=None, check=True):
    """Run a shell command and return its stdout."""
    res = subprocess.run(
        cmd,
        cwd=cwd,
        env=env,
        capture_output=True,
        text=True,
        check=check,
    )
    return res.stdout.strip()


def get_git_tags(tag_pattern=None):
    """Retrieve git tags sorted by creation date (newest first)."""
    try:
        raw = run_command(["git", "tag", "--sort=-creatordate"])
        tags = [t.strip() for t in raw.splitlines() if t.strip()]
        if tag_pattern:
            reg = re.compile(tag_pattern)
            tags = [t for t in tags if reg.search(t)]
        return tags
    except Exception as e:
        print(f"[!] Warning: Could not read git tags: {e}")
        return []


def get_current_git_ref():
    """Retrieve current branch name or commit hash."""
    try:
        branch = run_command(["git", "rev-parse", "--abbrev-ref", "HEAD"])
        return branch if branch != "HEAD" else run_command(["git", "rev-parse", "--short", "HEAD"])
    except Exception:
        return "HEAD"


def get_current_git_version():
    """Retrieve current version code dynamically from git."""
    try:
        tag = run_command(["git", "describe", "--tags", "--exact-match"])
        if tag:
            return tag
    except Exception:
        pass
    try:
        tag = run_command(["git", "describe", "--tags", "--abbrev=0"])
        if tag:
            return tag
    except Exception:
        pass
    try:
        branch = run_command(["git", "rev-parse", "--abbrev-ref", "HEAD"])
        if branch and branch != "HEAD":
            return branch
    except Exception:
        pass
    return "latest"


def format_version_info(ref_name):
    """Format a git tag or branch into a clean code and display name."""
    clean_code = re.sub(r"^v", "", ref_name)
    name = clean_code

    return {
        "code": clean_code,
        "name": name,
        "ref": ref_name,
        "url": f"/{clean_code}/",
    }


def build_sphinx_version(source_dir, output_dir, version_info, all_versions_json, sphinx_bin="sphinx-build"):
    """Run sphinx-build for a specific version directory."""
    env = os.environ.copy()
    env["SPHINX_CURRENT_VERSION"] = version_info["name"]
    env["SPHINX_CURRENT_VERSION_CODE"] = version_info["code"]
    env["SPHINX_SUPPORTED_VERSIONS_JSON"] = json.dumps(all_versions_json)

    cmd = [
        sphinx_bin,
        "-b", "html",
        "-D", f"current_version={version_info['name']}",
        "-D", f"current_version_code={version_info['code']}",
        source_dir,
        output_dir,
    ]

    print(f"\n==> Building {version_info['name']} (from ref '{version_info['ref']}') -> {output_dir}")
    res = subprocess.run(cmd, env=env)
    if res.returncode != 0:
        print(f"[X] Build failed for {version_info['name']}")
        return False
    return True


def create_root_redirect(output_dir, target_version_code):
    """Create root index.html that redirects to the latest/default version."""
    redirect_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Redirecting to CURQ Documentation...</title>
    <meta http-equiv="refresh" content="0; url={target_version_code}/index.html">
    <link rel="canonical" href="{target_version_code}/index.html">
    <script>
        window.location.replace("{target_version_code}/index.html" + window.location.search + window.location.hash);
    </script>
</head>
<body>
    <p>Redirecting to <a href="{target_version_code}/index.html">CURQ Documentation ({target_version_code})</a>...</p>
</body>
</html>
"""
    with open(os.path.join(output_dir, "index.html"), "w", encoding="utf-8") as f:
        f.write(redirect_html)


def main():
    git_cur_ver = get_current_git_version()
    parser = argparse.ArgumentParser(description="Build multi-version Sphinx documentation using Git tags.")
    parser.add_argument("--output", "-o", default="_build/html", help="Root build output directory (default: _build/html)")
    parser.add_argument("--tag-pattern", default=None, help="Regex pattern to filter git tags (default: all tags)")
    parser.add_argument("--include-current", action="store_true", default=True, help="Include current working tree as an active version")
    parser.add_argument("--current-version-name", default=git_cur_ver, help="Display name for current workspace version")
    parser.add_argument("--current-version-code", default=git_cur_ver, help="Folder code for current workspace version")
    parser.add_argument("--tags", nargs="*", help="Explicit list of git tags to build instead of auto-discovering")
    parser.add_argument("--dry-run", action="store_true", help="Preview version discovery and versions.json without running sphinx-build")
    args = parser.parse_args()

    # Resolve repository root (supports running from root or scripts/ directory)
    script_dir = os.path.abspath(os.path.dirname(__file__))
    if os.path.basename(script_dir) == "scripts":
        repo_root = os.path.dirname(script_dir)
    else:
        repo_root = script_dir

    output_root = os.path.abspath(os.path.join(repo_root, args.output))
    os.makedirs(output_root, exist_ok=True)

    # Determine which tags to build
    if args.tags is not None:
        tags = args.tags
    else:
        tags = get_git_tags(args.tag_pattern)

    # Prepare version list
    versions_to_build = []
    
    # Add git tags
    for tag in tags:
        v_info = format_version_info(tag)
        if v_info["code"] == args.current_version_code:
            v_info["is_current_workspace"] = True
        else:
            v_info["is_current_workspace"] = False
        versions_to_build.append(v_info)

    # If no tags exist or current version wasn't in tags, ensure current workspace is included
    current_ref = get_current_git_ref()
    current_info = {
        "code": args.current_version_code,
        "name": args.current_version_code,
        "ref": current_ref,
        "url": f"/{args.current_version_code}/",
        "is_current_workspace": True,
    }

    if not any(v["code"] == current_info["code"] for v in versions_to_build):
        versions_to_build.insert(0, current_info)

    # Mark the latest version
    for i, v in enumerate(versions_to_build):
        v["latest"] = (i == 0)

    # Clean payload for versions.json
    versions_json = [
        {"code": v["code"], "name": v["name"], "url": v["url"], "latest": v.get("latest", False)}
        for v in versions_to_build
    ]

    print(f"=== CURQ Documentation Multi-Version Build ===")
    print(f"Total versions to build: {len(versions_to_build)}")
    for v in versions_to_build:
        print(f" - Version {v['code']} (ref: {v['ref']}, current_workspace: {v['is_current_workspace']})")

    if args.dry_run:
        print("\n[✓ Dry Run] Discovered versions.json payload:")
        print(json.dumps(versions_json, indent=2))
        latest_code = versions_to_build[0]["code"] if versions_to_build else args.current_version_code
        print(f"\n[✓ Dry Run] Root redirect index.html will point to: /{latest_code}/index.html")
        print("[✓ Dry Run] Dry run complete. No files were written and no builds were executed.")
        return

    # Virtualenv sphinx-build if available
    venv_sphinx = os.path.join(repo_root, ".venv", "bin", "sphinx-build")
    sphinx_bin = venv_sphinx if os.path.exists(venv_sphinx) else "sphinx-build"

    worktrees_root = os.path.join(repo_root, ".worktrees")

    for v in versions_to_build:
        ver_output = os.path.join(output_root, v["code"])
        
        if v["is_current_workspace"]:
            # Build current workspace directly
            build_sphinx_version(repo_root, ver_output, v, versions_json, sphinx_bin)
        else:
            # Check out tag into a temporary git worktree
            ref_check = subprocess.run(["git", "rev-parse", "--verify", f"refs/tags/{v['ref']}"], capture_output=True, text=True)
            if ref_check.returncode != 0:
                ref_check = subprocess.run(["git", "rev-parse", "--verify", v['ref']], capture_output=True, text=True)

            if ref_check.returncode != 0:
                print(f"[!] Warning: Git tag/ref '{v['ref']}' does not exist in the repository. Skipping.")
                continue

            os.makedirs(worktrees_root, exist_ok=True)
            worktree_dir = os.path.join(worktrees_root, v["code"])
            
            try:
                if os.path.exists(worktree_dir):
                    run_command(["git", "worktree", "remove", "--force", worktree_dir], check=False)
                    shutil.rmtree(worktree_dir, ignore_errors=True)

                print(f"--> Checking out git tag '{v['ref']}' into worktree: {worktree_dir}")
                run_command(["git", "worktree", "add", "--detach", worktree_dir, v["ref"]], cwd=repo_root)

                # Overlay current modern templates, static files, conf.py, and module_registry.py to ensure consistent UI across all historical versions
                overlay_templates = os.path.join(repo_root, "_templates")
                overlay_static = os.path.join(repo_root, "_static")
                overlay_conf = os.path.join(repo_root, "conf.py")
                overlay_module_registry = os.path.join(repo_root, "module_registry.py")
                if os.path.exists(overlay_templates):
                    shutil.copytree(overlay_templates, os.path.join(worktree_dir, "_templates"), dirs_exist_ok=True)
                if os.path.exists(overlay_static):
                    shutil.copytree(overlay_static, os.path.join(worktree_dir, "_static"), dirs_exist_ok=True)
                if os.path.exists(overlay_conf):
                    shutil.copyfile(overlay_conf, os.path.join(worktree_dir, "conf.py"))
                if os.path.exists(overlay_module_registry):
                    shutil.copyfile(overlay_module_registry, os.path.join(worktree_dir, "module_registry.py"))

                build_sphinx_version(worktree_dir, ver_output, v, versions_json, sphinx_bin)
            finally:
                if os.path.exists(worktree_dir):
                    print(f"--> Cleaning up worktree: {worktree_dir}")
                    run_command(["git", "worktree", "remove", "--force", worktree_dir], cwd=repo_root, check=False)
                    shutil.rmtree(worktree_dir, ignore_errors=True)

    # Clean up empty .worktrees dir
    if os.path.exists(worktrees_root):
        shutil.rmtree(worktrees_root, ignore_errors=True)

    # Write versions.json at root
    versions_file_path = os.path.join(output_root, "versions.json")
    with open(versions_file_path, "w", encoding="utf-8") as f:
        json.dump(versions_json, f, indent=2)
    print(f"\n[✓] Wrote {versions_file_path}")

    # Copy versions.json inside each version build as well for relative path access
    for v in versions_to_build:
        ver_dir = os.path.join(output_root, v["code"])
        if os.path.isdir(ver_dir):
            shutil.copyfile(versions_file_path, os.path.join(ver_dir, "versions.json"))

    # Create root redirect index.html
    latest_code = versions_to_build[0]["code"]
    create_root_redirect(output_root, latest_code)
    print(f"[✓] Created root redirect at {output_root}/index.html -> {latest_code}/index.html")

    print("\n[✓] Multi-version build completed successfully!")


if __name__ == "__main__":
    main()
