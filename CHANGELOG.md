# relementjs

## 0.22.4

### Patch Changes

- ctx-core: ^4.11.1 -> ^4.11.2

## 0.22.3

### Patch Changes

- ctx-core: ^4.11.0 -> ^4.11.1

## 0.22.2

### Patch Changes

- ctx-core: ^4.10.1 -> ^4.11.0

## 0.22.1

### Patch Changes

- hy\_\_bind: key_R_fn argument: fix: allow functions to receive narrower type than Element

## 0.22.0

### Minor Changes

- browser: + hy\_\_bind

  size-limit:

      isomorphic browser: fragment: + 10 B
      browser-only minimal: - 2 B
      browser-only hydrate + helpers: - 3 B
      browser-only hydrate + helpers + rmemo: - 9 B
      browser-only hydrate + helpers + rmemo + ctx: - 1 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: + 2 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: - 5 B

## 0.21.2

### Patch Changes

- ctx-core: ^4.10.0 -> ^4.10.1

## 0.21.1

### Patch Changes

- ctx-core: ^4.9.1 -> ^4.10.0

## 0.21.0

### Minor Changes

- minor:

      + .on: Call the rmemo & enable updates from it's parents.
      + .off: Disable updates from the rmemo's parents.

  size-limit:

      isomorphic browser: base: - 6 B
      isomorphic browser: fragment: - 6 B
      browser-only minimal: + 4 B
      browser-only hydrate + helpers: + 7 B
      browser-only hydrate + helpers + rmemo: + 8 B
      browser-only hydrate + helpers + rmemo + ctx: + 2 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: + 8 B
      server-only render doc + helpers + rmemo: + 3 B
      isomorphic (base) server helpers + doc_html_ + helpers + rmemo + ctx: - 8 B
      isomorphic (fragment) server helpers + doc_html_ + helpers + rmemo + ctx: - 10 B

## 0.20.4

### Patch Changes

- internal: tags: args→a,children->c

  size-limit:

      isomorphic browser: base: + 5 B
      browser-only minimal: - 3 B
      browser-only hydrate + helpers + rmemo + ctx: - 4 B

## 0.20.3

### Patch Changes

- internals: prop_ckey→attr_ckey

  size-limit:

      isomorphic browser: fragment: - 6 B

## 0.20.2

### Patch Changes

- patch:

      fix: prop cache collision between elements with the same name in different namespaces
      use cloneNode for render performance optimization
      use Object.prototype for size optimization

  size-limit:

      isomorphic browser: base: + 20 B
      isomorphic browser: fragment: + 30 B
      browser-only minimal: + 13 B
      browser-only hydrate + helpers: + 9 B
      browser-only hydrate + helpers + rmemo: + 6 B
      browser-only hydrate + helpers + rmemo + ctx: + 26 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: + 14 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: + 18 B

## 0.20.1

### Patch Changes

- fix: sig*,memosi*\*: subscribers are notified if sig is set before read

  size-limit:

      isomorphic browser: base: - 3 B
      isomorphic browser: fragment: + 2 B
      browser-only minimal: - 4 B
      browser-only hydrate + helpers: - 3 B
      browser-only hydrate + helpers + rmemo: + 2 B
      browser-only hydrate + helpers + rmemo + ctx: + 3 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: - 9 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: - 8 B
      server-only render doc + helpers + rmemo: - 1 B
      server-only render doc + helpers + rmemo + ctx: + 3 B
      isomorphic (base) server helpers + doc_html_ + helpers + rmemo + ctx: - 1 B
      isomorphic (fragment) server helpers + doc_html_ + helpers + rmemo + ctx: + 9 B

- Updated dependencies
  - ctx-core@4.9.1

## 0.20.0

### Minor Changes

- astro: props: $ instead of \_

## 0.19.2

### Patch Changes

- patch: server:

      fix: detect relements when using a different copy of relementjs:
      	use ._rele prop to determine if the object has a prototype of server__element__proto

  size-limit:

      isomorphic server: base: - 7 B
      isomorphic server: fragment: - 13 B
      server-only minimal: - 3 B
      server-only render doc + helpers: - 6 B
      server-only render doc + helpers + rmemo: - 12 B
      server-only render doc + helpers + rmemo + ctx: - 5 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: - 2 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: - 6 B

## 0.19.1

### Patch Changes

- astro: fix: import fragment\_ from server

## 0.19.0

### Minor Changes

- minor:

      astro: accepts array of relements
      fragment_: accepts array of relements

  size-limit:

      isomorphic server: fragment: + 1 B
      server-only render doc + helpers + rmemo + ctx: + 2 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: - 2 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: - 1 B

## 0.18.0

### Minor Changes

- astro: <Relement>: + \_: aliased by dom

## 0.17.3

### Patch Changes

- ctx-core: ^4.8.2 -> ^4.9.0

## 0.17.2

### Patch Changes

- ctx-core: ^4.8.1 -> ^4.8.2

## 0.17.1

### Patch Changes

- jsdom: ^23.0.0 -> ^23.0.1

## 0.17.0

### Minor Changes

- server: tags: converts to string when called within a template string:

      server__Node_T:
      	render→toString
      	buf__render→buf__push

  size-limit:

      isomorphic server: base: - 1 B
      isomorphic server: fragment: - 4 B
      server-only minimal: - 3 B
      server-only render doc + helpers: + 2 B
      server-only render doc + helpers + rmemo + ctx: - 1 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: - 2 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: - 4 B

## 0.16.1

### Patch Changes

- server: tags: props: fix: escaping

  size-limit:

      isomorphic server: base: - 9 B
      isomorphic server: fragment: - 11 B
      server-only minimal: - 4 B
      server-only render doc + helpers: - 8 B
      server-only render doc + helpers + rmemo: - 6 B
      server-only render doc + helpers + rmemo + ctx: - 9 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: - 8 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: - 13 B

## 0.16.0

### Minor Changes

- - relement/astro: astro component to render relement dom

## 0.15.2

### Patch Changes

- ctx-core: ^4.8.0 -> ^4.8.1

## 0.15.1

### Patch Changes

- memo\_: fix: run all listeners when a listener is garbage collected

  size-limit:

      isomorphic browser: base: - 2 B
      isomorphic browser: fragment: - 17 B
      browser-only hydrate + helpers: - 4 B
      browser-only hydrate + helpers + rmemo: - 6 B
      browser-only hydrate + helpers + rmemo + ctx: - 23 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: - 4 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: - 3 B
      server-only render doc + helpers + rmemo: - 11 B
      server-only render doc + helpers + rmemo + ctx: - 14 B
      isomorphic (base) browser helpers + doc_html_ + helpers + rmemo + ctx: - 12 B
      isomorphic (fragment) browser helpers + doc_html_ + helpers + rmemo + ctx: - 12 B

## 0.15.0

### Minor Changes

- fragment*,raw*: nullish values are rendered as an empty string

  size-limit:

  isomorphic browser: fragment: + 9 B
  isomorphic server: base: + 1 B
  isomorphic server: fragment: + 12 B
  isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: + 3 B
  server-only minimal: + 1 B
  server-only render doc + helpers: + 4 B
  server-only render doc + helpers + rmemo: + 1 B
  server-only render doc + helpers + rmemo + ctx: + 6 B
  isomorphic (base) browser helpers + doc*html* + helpers + rmemo + ctx: + 1 B
  isomorphic (fragment) browser helpers + doc*html* + helpers + rmemo + ctx: + 3 B

## 0.14.1

### Patch Changes

- CHANGELOG:

      fix: package name: relementjs
      fix: size-limit from 0.14.0

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
