# @ctx-core/ui--all

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
