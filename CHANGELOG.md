# @ctx-core/ui--all

## 0.14.0

### Minor Changes

- tags,tagsNS:

  nullish attributes are removed
  nullish props are set to ''

  size-limit:

      isomorphic browser: base: + 10 B
      isomorphic browser: fragment: + 15 B
      isomorphic server: base: + 3 B
      isomorphic server: fragment: + 3 B
      browser-only minimal: + 1 B
      browser-only hydrate + helpers: + 12 B
      browser-only hydrate + helpers + rmemo: + 8 B
      browser-only hydrate + helpers + rmemo + ctx: + 3 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: + 11 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: + 10 B
      server-only minimal: - 2 B
      server-only render doc + helpers: + 3 B
      server-only render doc + helpers + rmemo: - 1 B
      server-only render doc + helpers + rmemo + ctx: + 2 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: + 2 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: + 6 B

### Patch Changes

- Updated dependencies
  - ctx-core@4.8.0

## 0.13.1

### Patch Changes

- tag**dom_T: +(browser**tag**dom_T|server**tag\_\_dom_T)&: fix: fragment_T declaration

## 0.13.0

### Minor Changes

- - fragment_T: isomorphic fragment type: DocumentFragment|server\_\_Node_T

## 0.12.0

### Minor Changes

- minor:

      relement__env_T→relement_env_T
      + Node_T

## 0.11.0

### Minor Changes

- render**env_T→relement**env_T

## 0.10.0

### Minor Changes

- - rmemo\_\_wait

### Patch Changes

- Updated dependencies
  - ctx-core@4.7.0

## 0.9.1

### Patch Changes

- be*memo_pair*: subscriber receives a memosig argument: allows memosig.\_ = val in subscriber
- Updated dependencies
  - ctx-core@4.6.3

## 0.9.0

### Minor Changes

- minor: be*memo_pair*,be*sig_triple*: subscriber functions have get a ctx passed in:

      be_memo_pair_: (ctx:Ctx, memo:memo_T)
      be_sig_pair_: (ctx:Ctx, memo:sig_T)

  size-limit:

      browser-only minimal: + 4 B
      browser-only hydrate + helpers: - 5 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: + 2 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: - 1 B

### Patch Changes

- Updated dependencies
  - ctx-core@4.6.2

## 0.8.1

### Patch Changes

- ctx-core: ^4.6.0 -> ^4.6.1

## 0.8.0

### Minor Changes

- minor: isomorphic api on common browser/server api only: remove unique exports from browser or server:

      - browser__full__relement_T
      - server__full__relement_T
      isomorphic:
      	- doc_html_
      	- server__element__proto
      	- hydrate

  size-limit:

      isomorphic browser: base: - 53 B
      isomorphic browser: fragment: - 53 B
      isomorphic server: base: - 50 B
      isomorphic server: fragment: - 54 B
      isomorphic helpers: - 44 B
      browser-only minimal: + 4 B
      browser-only hydrate + helpers: + 7 B
      browser-only hydrate + helpers + rmemo: - 5 B
      browser-only hydrate + helpers + rmemo + ctx: + 5 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: - 17 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: - 11 B
      server-only render doc + helpers + rmemo + ctx: - 2 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: - 13 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: - 19 B

## 0.7.0

### Minor Changes

- minor:

      + fragment_
      + raw_
      browser__relement→browser__full__relement
      + browser__base__relement
      + browser__fragment__relement
      server__relement→browser__full__relement
      + server__base__relement
      + server__fragment__relement

## 0.6.0

### Minor Changes

- renames to match relement project name:

  rel**use→relement**use  
   browser**rel→browser**relement  
   server**rel→server**relement

  size-limit:

      isomorphic browser: + 4 B
      browser-only minimal: - 2 B
      browser-only hydrate + helpers: - 3 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 3 B

## 0.5.1

### Patch Changes

- tagsNS: remove superfluous && !args[0].rmr check

  size-limit:

      isomorphic server: - 5 B
      server-only minimal: - 6 B
      server-only render doc + helpers: - 3 B
      server-only render doc + helpers + rmemo: - 7 B
      server-only render doc + helpers + rmemo + ctx: - 5 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 1 B

## 0.5.0

### Minor Changes

- minor:

      browser,server,isomorphic: - _ module function: superfluous

  patch:

      README: readability:
      	remove some rows from bundle size table
      	format code examples
      rmemo lazy loading WeakRef update
      rmemo updates: .rmrs→.memor
      rmemo update: memo_ with undefined value is cached

  size-limit:

      isomorphic browser: - 19 B
      isomorphic server: - 17 B
      isomorphic helpers: - 7 B
      browser-only minimal: + 11 B
      browser-only hydrate + helpers: - 7 B
      browser-only hydrate + helpers + rmemo: - 19 B
      browser-only hydrate + helpers + rmemo + ctx: - 6 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 23 B
      server-only minimal: + 4 B
      server-only render doc + helpers: - 7 B
      server-only render doc + helpers + rmemo: - 7 B
      server-only render doc + helpers + rmemo + ctx: - 4 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 17 B

### Patch Changes

- Updated dependencies
  - ctx-core@4.6.0

## 0.4.0

### Minor Changes

- package name: relementjs

## 0.3.1

### Patch Changes

- tsx: ^4.4.0 -> ^4.5.0

## 0.3.0

### Minor Changes

- minor:

      pacakage name: reljs
      consolidate packages:
      	+ browser
      		browser__render_api→browser__rel
      		browser__render_api_T→browser__rel_T
      	+ server
      		server__render_api→server__rel
      		server__render_api_T→server__rel_T
      render→isomorphic:
      	render_api__use→rel__use
      rmemo read-only .() + ._ property update

  patch:

      performance optimizations
      README:
      	+ (Reactive Element)
      	+ size chart
      	+ simple examples
      bind_: f.b instead of f._is_bind
      dom→memo reference optimization: ._m instead of ._rma
      tagsNS: memos are functions so no need to check for .rmr
      tagsNS: size optimization: for in loop instead of Object.entries

### Patch Changes

- Updated dependencies
  - ctx-core@4.5.0

## 0.2.0

### Minor Changes

- package name: rren

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @rrenjs/browser@0.2.0
  - @rrenjs/server@0.3.0
  - @rrenjs/any@0.2.0

## 0.1.1

### Patch Changes

- tsx: ^4.3.0 -> ^4.4.0
- Updated dependencies
  - @ctx-core/ui--any@0.1.1
  - @ctx-core/ui--browser@0.1.1
  - @ctx-core/ui--server@0.2.1

## 0.1.0

### Minor Changes

- minor:

      initial version
      ∋ ctx-core
      ∋ @ctx-core/ui--any
      ∋ @ctx-core/ui--browser
      ∋ @ctx-core/ui--server
      + ./render:
      	+ render_api__use
      	+ _
      	+ attach
      	+ bind_
      	+ tags
      	+ svg_tags
      	+ mathml_tags
      	+ tagsNS
      	+ doc_html_
      	+ server__element__proto
      	+ hydrate
      	+ render__env_T
      	+ bind__T
      	+ tags_T
      	+ tag_T
      + ./html: *_ functions for each html tag
      + ./mathml: *_ functions for each mathml tag
      + ./svg: *_ functions for each svg tag

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/ui--browser@0.1.0
  - @ctx-core/ui--server@0.2.0
  - @ctx-core/ui--any@0.1.0
