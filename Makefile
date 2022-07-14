#!Makefile

HUGO=hugo-extended
BUILDNAME:=$(shell git rev-parse --abbrev-ref HEAD)
BASEURL:=$(shell basename `pwd` | sed 's/_/./g')
BRANCHES:=$(shell git branch -r | sed 's/origin\///g' | sed 's/pr\//pr-/' | sed '/HEAD/d' | sed '/master/d' | sed '/main/d')
BRANCHNAMES:=$(foreach branch,$(BRANCHES),$(branch))

default all: build

.PHONY: build
build:
	$(HUGO) --environment=production --minify --templateMetrics
	@find public/ -name '*.html' ! -name '*.gz' -type f -exec sh -c "gzip -c -9 < {} > {}.gz" \;
	@find public/ -name '*.css' ! -name '*.gz' -type f -exec sh -c "gzip -c -9 < {} > {}.gz" \;
	@find public/ -name '*.js' ! -name '*.gz' -type f -exec sh -c "gzip -c -9 < {} > {}.gz" \;

.PHONY: build-staging
build-staging:
	rm -rf builds/*
	@for branch in $(BRANCHNAMES) ; do \
		echo -e "Building branch \e[1;33m"$${branch}"\e[0m" ; \
		git checkout $${branch} ; \
		$(HUGO) --environment=production --minify --templateMetrics --baseURL https://$(BASEURL)/$${branch}/ --destination builds/$${branch} ; \
	done
	@git checkout master

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
	@rm -rf resources/
