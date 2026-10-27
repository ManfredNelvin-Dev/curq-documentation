import subprocess
from pathlib import Path
from typing import Dict

_GIT_FILE_DATES_CACHE: Dict[str, Dict[str, str]] = {}


def get_git_file_dates_for_ref(ref: str = "HEAD") -> Dict[str, str]:
    """
    Extract and cache the exact last commit date for all repository files
    for a specific Git reference (e.g. 'main', '0.1', '0.2', or 'HEAD').
    """
    global _GIT_FILE_DATES_CACHE
    if ref in _GIT_FILE_DATES_CACHE:
        return _GIT_FILE_DATES_CACHE[ref]

    repo_root = Path(__file__).resolve().parent.parent
    dates: Dict[str, str] = {}
    try:
        cmd = [
            "git",
            "log",
            ref,
            "--name-only",
            "--format=DATE:%cd",
            "--date=format:%B %d, %Y",
        ]
        res = subprocess.check_output(
            cmd,
            cwd=repo_root,
            stderr=subprocess.DEVNULL,
            text=True,
        )
        current_date = None
        for line in res.splitlines():
            line = line.strip()
            if line.startswith("DATE:"):
                current_date = line[5:]
            elif line and current_date:
                if line not in dates:
                    dates[line] = current_date
    except Exception:
        pass

    _GIT_FILE_DATES_CACHE[ref] = dates
    return dates
