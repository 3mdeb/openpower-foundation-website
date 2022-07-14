#!Makefile

HUGO=hugo-extended
BUILDNAME:=$(shell git rev-parse --abbrev-ref HEAD)
BASEURL:=$(shell basename `pwd` | sed 's/_/./g')

default all: build

.PHONY: build
build:
	$(HUGO) --environment=production --minify --templateMetrics
	@find public/ -name '*.html' ! -name '*.gz' -type f -exec sh -c "gzip -c -9 < {} > {}.gz" \;
	@find public/ -name '*.css' ! -name '*.gz' -type f -exec sh -c "gzip -c -9 < {} > {}.gz" \;
	@find public/ -name '*.js' ! -name '*.gz' -type f -exec sh -c "gzip -c -9 < {} > {}.gz" \;

.PHONY: build-staging
build-staging:
	$(HUGO) --environment=production --minify --templateMetrics --baseURL https://$(BASEURL)/$(BUILDNAME)/ --destination builds/$(BUILDNAME)

.PHONY: test
test: clean
	$(HUGO) --environment=development --minify

.PHONY: draft
draft:
	$(HUGO) --environment=development --minify --buildDrafts --buildFuture --buildExpired

.PHONY: debug
debug:
	$(HUGO) --debug

.PHONY: serve
serve:
	$(HUGO) server --environment=development --port 1314 --noHTTPCache --disableFastRender --watch

.PHONY: servedraft
servedraft:
	$(HUGO) server --environment=development --buildFuture --buildExpired --noHTTPCache --disableFastRender --watch

.PHONY: clean
clean:
	@rm -rf public/
	@rm -rf builds/
	@rm -rf resources/

