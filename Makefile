# Minimal makefile for Sphinx documentation
#

# Use virtualenv binaries if present, otherwise system binaries
VENV                := $(shell if [ -f .venv/bin/sphinx-build ]; then echo .venv/bin/; fi)
SPHINXOPTS          ?=
SPHINXBUILD         ?= $(VENV)sphinx-build
SPHINXMULTIVERSION  ?= $(VENV)sphinx-multiversion
SPHINXAUTOBUILD     ?= $(VENV)sphinx-autobuild
SOURCEDIR           = .
BUILDDIR            = _build
ACTIVE_BRANCH       := $(shell git symbolic-ref --short -q HEAD 2>/dev/null || git describe --tags --exact-match 2>/dev/null || echo "upload-docs")

# Put it first so that "make" without argument is like "make help".
help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile multiversion livehtml clean

# Build multi-version documentation using sphinx-multiversion
multiversion:
	$(SPHINXMULTIVERSION) "$(SOURCEDIR)" "$(BUILDDIR)/html" $(SPHINXOPTS)
	@echo '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=$(ACTIVE_BRANCH)/index.html"><script>window.location.replace("$(ACTIVE_BRANCH)/index.html" + window.location.search + window.location.hash);</script></head><body><p>Redirecting to <a href="$(ACTIVE_BRANCH)/index.html">$(ACTIVE_BRANCH)</a>...</p></body></html>' > $(BUILDDIR)/html/index.html
	@echo "[✓] Multi-version build complete. Root redirect -> $(ACTIVE_BRANCH)/index.html"

# Live preview server with auto-rebuild (official sphinx-doc/sphinx-autobuild)
livehtml:
	$(SPHINXAUTOBUILD) "$(SOURCEDIR)" "$(BUILDDIR)/html" $(SPHINXOPTS)

# Clean build directory
clean:
	rm -rf $(BUILDDIR)/*

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)
