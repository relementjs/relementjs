# relementjs

## 0.73.4

### Patch Changes

- ctx-core: ^6.4.3 -> ^6.4.4

## 0.73.3

### Patch Changes

- hyop: ^0.2.5 -> ^0.2.6
- ctx-core: ^6.4.2 -> ^6.4.3

## 0.73.2

### Patch Changes

- ctx-core: ^6.4.1 -> ^6.4.2

## 0.73.1

### Patch Changes

- ctx-core: ^6.3.0 -> ^6.4.0
- Updated dependencies

  - ctx-core@6.4.1

  size-limit:

      browser-only hydrate + rmemo + ctx: - 10 B
      browser-only single_hyop + rmemo + ctx: + 6 B
      server-only render doc + rmemo + ctx: + 4 B

## 0.73.0

### Minor Changes

- - rmemolike_T

  rmemo\_\_wait: argument: rmemolike_T<unknown> instead of rmemo_T<unknown>

### Patch Changes

- Updated dependencies
  - ctx-core@6.3.0

## 0.72.3

### Patch Changes

- ctx-core: ^6.2.1 -> ^6.2.2
- Updated dependencies
  - ctx-core@6.2.3

## 0.72.2

### Patch Changes

- hyop: ^0.2.4 -> ^0.2.5

## 0.72.1

### Patch Changes

- ctx-core: ^6.2.0 -> ^6.2.1

## 0.72.0

### Minor Changes

- timeout_promise: + handle Infinity ms argument: remove timeout from ∋ Promise.race

### Patch Changes

- Updated dependencies
  - ctx-core@6.2.0

## 0.71.11

### Patch Changes

- hyop: ^0.2.3 -> ^0.2.4

## 0.71.10

### Patch Changes

- ctx-core: ^6.1.2 -> ^6.1.3

## 0.71.9

### Patch Changes

- hyop: ^0.2.2 -> ^0.2.3

## 0.71.8

### Patch Changes

- hyop: ^0.2.1 -> ^0.2.2

## 0.71.7

### Patch Changes

- hyop: ^0.2.0 -> ^0.2.1

## 0.71.6

### Patch Changes

- Updated dependencies

  - hyop@0.2.0

  size-limit:

      browser-only single_hyop: - 1 B

## 0.71.5

### Patch Changes

- hyop: ^0.1.3 -> ^0.1.4

## 0.71.4

### Patch Changes

- hyop: ^0.1.2 -> ^0.1.3

## 0.71.3

### Patch Changes

- hyop: ^0.1.1 -> ^0.1.2

## 0.71.2

### Patch Changes

- hyop: ^0.1.0 -> ^0.1.1

## 0.71.1

### Patch Changes

- ./browser/hy: ∋ hyop: verify_single_hyop,verify_multi_hyop: fix: implementation

  size-limit:

      single_hyop only: - 1 B
      browser-only single_hyop + rmemo: - 3 B
      browser-only single_hyop + rmemo + ctx: - 2 B
      isomorphic browser single_hyop + rmemo + ctx: - 4 B

## 0.71.0

### Minor Changes

- minor: rename the hy_op attribute to hyop

      hy_op→single_hyop
      + multi_hyop
      [hy_op]→[hyop]

  size-limit:

      single_hyop only: - 2 B
      + multi_hyop only: 81 B
      browser-only single_hyop + rmemo: + 2 B
      browser-only single_hyop + rmemo + ctx: - 1 B

## 0.70.1

### Patch Changes

- hy_op\_\_verify_all_used→verify_hy_op

  fix: type definition of verify_hy_op

  size-limit:

      browser-only hy_op: - 19 B
      hy_op only: - 20 B
      browser-only hy_op + rmemo: - 17 B
      browser-only hy_op + rmemo + ctx: - 32 B
      isomorphic browser hy_op + rmemo + ctx: - 20 B

## 0.70.0

### Minor Changes

- ./browser,./browser/hy: + hy_op\_\_verify_all_used:

  size-limit:

      browser-only hy_op: + 1 B
      hy_op only: - 1 B
      browser-only hy_op + rmemo: - 6 B
      browser-only hy_op + rmemo + ctx: + 1 B
      isomorphic browser hy_op + rmemo + ctx: + 7 B

## 0.69.1

### Patch Changes

- tsx: ^4.7.0 -> ^4.7.1
- Updated dependencies
  - ctx-core@6.1.2

## 0.69.0

### Minor Changes

- ./browser,./browser/hy: hy\_\_bind→hy_op

  size-limit:

      browser-only hy_op: - 4 B
      hy_op only: - 22 B
      browser-only hy_op + rmemo: - 11 B
      browser-only hy_op + rmemo + ctx: - 2 B
      isomorphic browser hy_op + rmemo + ctx: - 10 B

## 0.68.1

### Patch Changes

- ctx-core: ^6.1.0 -> ^6.1.1

## 0.68.0

### Minor Changes

- minor: + ./browser/hy: hy\_\_bind: supports smaller bundles with limited tree-shaking:

      + ./browser/hy: + hy__bind

  size-limit:

      isomorphic browser: + 3 B
      isomorphic browser + rmemo: - 5 B
      isomorphic browser + rmemo + item_list_: + 4 B
      browser-only hy__bind: - 7 B
      + hy__bind: 107 B
      browser-only minimal: + 17 B
      browser-only hy__bind + rmemo: + 4 B
      browser-only hydrate + rmemo + ctx: + 13 B
      browser-only hy__bind + rmemo + ctx: + 3 B
      isomorphic browser hy__bind + rmemo + ctx: + 1 B

## 0.67.0

### Minor Changes

- minor: isomorphic tags: encapsulate svg*tags* in ./svg export & mathml*tags* in ./mathml export:

      ./isomorphic:
      	- mathml_tags
      	- mathml_tags_
      	- svg_tags
      	- svg_tags_
      ./mathml: + mathml_tags_
      ./svg: + svg_tags_

  size-limit:

      isomorphic browser: - 65 B
      isomorphic browser + rmemo: - 52 B
      isomorphic browser + rmemo + item_list_: - 62 B
      isomorphic server: - 70 B
      isomorphic server + rmemo: - 68 B
      isomorphic helpers: - 67 B
      isomorphic browser hydrate + rmemo + ctx: - 60 B
      isomorphic browser hy__bind + rmemo + ctx: - 58 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: - 60 B
      mathml: math_: + 49 B
      svg: svg_: + 44 B

## 0.66.0

### Minor Changes

- wide_ctx_T<ns_union_T extends string = ''>: default ns_union_T to ''

### Patch Changes

- Updated dependencies
  - ctx-core@6.1.0

## 0.65.0

### Minor Changes

- type rename:

      Ctx→ctx_T
      Ctx_wide_T→wide_ctx_T
      Ctx_s_T→ctx_s_T
      Ctx_s_wide_T→wide_ctx_s_T

### Patch Changes

- Updated dependencies
  - ctx-core@6.0.0

## 0.64.3

### Patch Changes

- ctx-core: ^5.38.1 -> ^5.38.2

## 0.64.2

### Patch Changes

- optimize imports

## 0.64.1

### Patch Changes

- ctx-core: ^5.38.0 -> ^5.38.1

## 0.64.0

### Minor Changes

- - calling: calls & returns argument function

### Patch Changes

- Updated dependencies
  - ctx-core@5.38.0

## 0.63.0

### Minor Changes

- minor:

      state is stored in globalThis.rmemo: fix: issue when multiple instances of rmemo is in the codebase: bundles
      rmemo__wait: fix: Garbage Collection prematurely collecting memo
      rmemo_f_T:
      	readonly l:number
      	readonly s:rmemo_T<unknown>[]
      	readonly t:rmemo_T<unknown>[]
      size optimizations

  size-limit:

      isomorphic browser: - 16 B
      isomorphic browser + rmemo: - 11 B
      isomorphic browser + rmemo + item_list_: - 2 B
      isomorphic server + rmemo: + 22 B
      browser-only minimal: - 22 B
      browser-only hydrate: - 23 B
      browser-only hy__bind: - 18 B
      browser-only hydrate + rmemo: - 7 B
      browser-only hy__bind + rmemo: + 5 B
      browser-only hydrate + rmemo + ctx: - 9 B
      browser-only hy__bind + rmemo + ctx: - 7 B
      isomorphic browser hydrate + rmemo + ctx: - 7 B
      isomorphic browser hy__bind + rmemo + ctx: - 15 B
      server-only render doc + rmemo: + 22 B
      server-only render doc + rmemo + ctx: + 24 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: + 15 B

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.37.0

## 0.62.0

### Minor Changes

- minor: ./isomorphic: + item*list*: reactive list rendering & reording

      ./browser: attach: only add memo into _child._m when the child changes

  size-limit:

      isomorphic browser: - 4 B
      + isomorphic browser + rmemo + item_list_: 1112 B
      browser-only minimal: + 8 B
      browser-only hydrate: + 3 B
      browser-only hy__bind: + 7 B
      browser-only hydrate + rmemo: + 5 B
      browser-only hy__bind + rmemo: + 3 B
      browser-only hydrate + rmemo + ctx: - 3 B
      browser-only hy__bind + rmemo + ctx: + 15 B
      isomorphic browser hydrate + rmemo + ctx: + 7 B
      isomorphic browser hy__bind + rmemo + ctx: + 1 B

## 0.61.6

### Patch Changes

- ctx-core: ^5.36.3 -> ^5.36.4

## 0.61.5

### Patch Changes

- ctx-core: ^5.36.2 -> ^5.36.3

## 0.61.4

### Patch Changes

- ctx-core: ^5.36.1 -> ^5.36.2

## 0.61.3

### Patch Changes

- ctx-core: ^5.36.0 -> ^5.36.1

## 0.61.2

### Patch Changes

- ./server: fix: no void tags for non-html outputs:

      tags = tagsNS()
      tagsNS: void_tags: ns ? {} : html_void_tags
      void_tags→html_void_tags

  size-limit:

      isomorphic server: + 26 B
      isomorphic server + rmemo: + 30 B
      server-only minimal: + 30 B
      server-only render doc: + 25 B
      server-only render doc + rmemo: + 28 B
      server-only render doc + rmemo + ctx: + 32 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: + 30 B

## 0.61.1

### Patch Changes

- tag_props_val_T: fix: widen event handler type: |((e:never)=>unknown)

## 0.61.0

### Minor Changes

- minor:

      tag__dom_T->tag_dom_T
      browser__tag__dom_T→browser__tag_dom_T
      server__tag__dom_T→server__tag_dom_T

## 0.60.2

### Patch Changes

- ctx-core: ^5.35.2 -> ^5.36.0

## 0.60.1

### Patch Changes

- ctx-core: ^5.35.1 -> ^5.35.2

## 0.60.0

### Minor Changes

- minor:

      ./any:
      	render_primitive_T→tag_primitive_T
      	render_props_val_T→tag_props_val_T
      	render_props_val_OR_rmemo_T_OR_Fn→tag_props_val_OR_rmemo_T_OR_Fn
      	render_props_T→tag_props_T:
      		<Element = unknown>:
      			unknown extends ElementType
      				? Record<string, tag_props_val_OR_rmemo_T_OR_Fn>
      				: |Partial<{ [K in keyof ElementType]:tag_props_val_OR_rmemo_T_OR_Fn }>
      					|Record<string, tag_props_val_OR_rmemo_T_OR_Fn>
      		render__tags_env_T→tag_env_T
      		render__namespaceURI_T→tag_namespaceURI_T
      ./server: server__doc_html__T: fix:
      	first?:
      		|tag_props_T<HTMLHtmlElement>
      		|server__tag__dom_T,

## 0.59.1

### Patch Changes

- ctx-core: ^5.35.0 -> ^5.35.1

## 0.59.0

### Minor Changes

- - ctx\_\_get

  size-limit:

      browser-only hydrate + rmemo + ctx: + 9 B
      browser-only hy__bind + rmemo + ctx: - 1 B
      isomorphic browser hy__bind + rmemo + ctx: + 7 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: + 3 B

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.35.0

## 0.58.1

### Patch Changes

- ctx-core: ^5.33.0 -> ^5.34.0

## 0.58.0

### Minor Changes

- Cancel: name: 'Cancel'
- - promise\_\_cancel

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.33.0

## 0.57.6

### Patch Changes

- ctx-core: ^5.32.0 -> ^5.32.1

## 0.57.5

### Patch Changes

- ctx-core: ^5.31.2 -> ^5.32.0

## 0.57.4

### Patch Changes

- ./isomorphic: widen children types: ...children:

      fragment_
      raw_

## 0.57.3

### Patch Changes

- ctx-core: ^5.31.1 -> ^5.31.2

## 0.57.2

### Patch Changes

- fix: widen argument tag**dom_T types: tag**dom_T<'any'>:

      for_
      switch_

## 0.57.1

### Patch Changes

- be\_: argument type: ...config→...config_arg_a
- Updated dependencies
  - ctx-core@5.31.1

## 0.57.0

### Minor Changes

- - rmemo\_\_unset: delete rmemo.val

  size-limit:

      isomorphic browser + rmemo: + 8 B
      isomorphic server + rmemo: - 1 B
      browser-only hydrate + rmemo: - 10 B
      server-only render doc + rmemo: - 1 B
      isomorphic browser hydrate + rmemo + ctx: - 1 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: - 3 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.31.0

## 0.56.1

### Patch Changes

- ./isomorphic: tag_T: fix: type: specific type instead of delegating to browser**tag_T,server**tag_T

## 0.56.0

### Minor Changes

- isomorphic types: default generic types:

      attach<env_T extends relement_env_T = 'any'>
      attach_T<env_T extends relement_env_T = 'any'>
      tags_T<env_T extends relement_env_T = 'any', tags_env_T extends render__tags_env_T = 'html'>
      tagsNS<env_T extends relement_env_T = 'any', tags_env_T extends render__tags_env_T = 'html'>
      tag_T<env_T extends relement_env_T = 'any', Tag = Node>
      Node_T<env_T extends relement_env_T = 'any', node_T extends Node = Node>
      svg_tags_<env_T extends relement_env_T = 'any'>
      mathml_tags_<env_T extends relement_env_T = 'any'>
      fragment_<env_T extends relement_env_T = 'any'>
      raw_<env_T extends relement_env_T = 'any'>
      fragment_T<env_T extends relement_env_T = 'any'>
      tag__dom_T<env_T extends relement_env_T = 'any'>

## 0.55.0

### Minor Changes

- - memo\_\_bind_T<A extends unknown[], R, E = unknown>

### Patch Changes

- fix: isomorphic types:

      ./html:
      	arg_a_T: precise definition instead of Parameters<tag_T<env_T, HTMLElementTagNameMap<env_T>>>
      	ret_T: precisen definition instead of ReturnType<tag_T<env_T, HTMLElementTagNameMap<env_T>>>
      ./svg:
      	arg_a_T: precise definition instead of Parameters<tag_T<env_T, SVGElementTagNameMap<env_T>>>
      	ret_T: precisen definition instead of ReturnType<tag_T<env_T, SVGElementTagNameMap<env_T>>>
      ./mathml:
      	arg_a_T: precise definition instead of Parameters<tag_T<env_T, MathMLElementTagNameMap<env_T>>>
      	ret_T: precisen definition instead of ReturnType<tag_T<env_T, MathMLElementTagNameMap<env_T>>>
      ./browser:
      	browser__tag__dom__val_T: union order
      	browser__tag_T<Node>:
      		|render_props_T|known_keys__render_props_T<Node>|browser__tag__dom_T:
      			instead of: |render_props_T&known_keys__render_props_T<Node>|browser__tag__dom_T
      	browser__tag__dom_T:
      		+ |memo__bind_T<[], browser__tag__dom__val_T>|((dom?:browser__tag__dom__val_T)=>browser__tag__dom__val_T)
      		- |unknown
      ./server:
      	server__tag__dom_T:
      		+ |memo__bind_T<[], server__tag__dom__val_T>
      		- |unknown

- Updated dependencies
  - ctx-core@5.30.0

## 0.54.3

### Patch Changes

- ctx-core: ^5.28.1 -> ^5.29.0

## 0.54.2

### Patch Changes

- ./browser: hy\_\_bind: key_R_fn argument: fix: type matching value functions with different Element types arguments

## 0.54.1

### Patch Changes

- ctx-core: ^5.28.0 -> ^5.28.1

## 0.54.0

### Minor Changes

- - run*or_val*

  size-limit:

      browser-only hydrate + rmemo: + 10 B
      browser-only hydrate + rmemo + ctx: - 3 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: + 3 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.28.0

## 0.53.7

### Patch Changes

- ctx-core: ^5.27.1 -> ^5.27.2

## 0.53.6

### Patch Changes

- ctx-core: ^5.27.0 -> ^5.27.1

## 0.53.5

### Patch Changes

- ctx-core: ^5.26.0 -> ^5.27.0

## 0.53.4

### Patch Changes

- ctx-core: ^5.25.5 -> ^5.26.0

## 0.53.3

### Patch Changes

- ctx-core: ^5.25.4 -> ^5.25.5

## 0.53.2

### Patch Changes

- ctx-core: ^5.25.3 -> ^5.25.4

## 0.53.1

### Patch Changes

- remove unused imports,format

## 0.53.0

### Minor Changes

- minor:

      + ./any export
      fix: include ./any directory in package.json files

## 0.52.4

### Patch Changes

- jsdom: ^23.2.0 -> ^24.0.0

## 0.52.3

### Patch Changes

- memo_T: fix: readonly a?:rmemo_a_T
- Updated dependencies
  - ctx-core@5.25.3

## 0.52.2

### Patch Changes

- val\_\_new: + rmemo argument:

      be_sig_triple_
      ns_be_sig_triple_
      id_be_sig_triple_
      ns_id_be_sig_triple_
      ns_be_memo_pair_
      id_be_memo_pair_
      ns_id_be_memo_pair_
      ns_be_memosig_triple_
      id_be_memosig_triple_
      ns_id_be_memosig_triple_
      ns_be_lock_memosig_triple_
      id_be_lock_memosig_triple_
      ns_id_be_lock_memosig_triple_

- Updated dependencies
  - ctx-core@5.25.2

## 0.52.1

### Patch Changes

- generics: ns_T extends string: remove default:

      ns_be_sig_triple_
      ns_id_be_sig_triple_
      ns_be_memo_pair_
      ns_id_be_memo_pair_
      ns_be_memosig_triple_
      ns_id_be_memosig_triple_
      ns_be_lock_memosig_triple_
      ns_id_be_lock_memosig_triple_

- Updated dependencies
  - ctx-core@5.25.1

## 0.52.0

### Minor Changes

- - be_config_arg_a_T
- minor:

      + ns_be_sig_triple_
      + id_be_sig_triple_
      + ns_id_be_sig_triple_
      + ns_be_memo_pair_
      + id_be_memo_pair_
      + ns_id_be_memo_pair_
      + ns_be_memosig_triple_
      + id_be_memosig_triple_
      + ns_id_be_memosig_triple_
      + ns_be_lock_memosig_triple_
      + id_be_lock_memosig_triple_
      + ns_id_be_lock_memosig_triple_

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.25.0

## 0.51.0

### Minor Changes

- minor:

      + ns_be_
      + id_be_
      + ns_id_be_
      be_: ns_T generic type specified: config:be_config_T is required
      be_memo_pair_: config?:be_config_T<ns_T> argument: fix: generic type

  size-limit:

      isomorphic browser hydrate + rmemo + ctx: - 3 B
      server-only render doc + rmemo + ctx: - 11 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: - 3 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.24.0

## 0.50.0

### Minor Changes

- minor:

      generics: + E = unknown:
      	memo_
      	sig_
      	memosig_
      	lock_memosig_
      	memo__bind
      	rmemo__on
      	rmemo__off
      	rmemo__off__add
      	rmemo__add
      	rmemo_T
      	circular_rmemo_T
      	memo_T
      	circular_memo_T
      	sig_T
      	circular_sig_T
      	lock_memosig_T
      	circular_lock_memosig_T
      	memo_def_T
      	rmemo_add_def_T
      be_lock_memosig_triple_:
      be_lock_memosig_triple_T:
      	generics: E = unknown instead of _sig_T extends lock_memosig_T<val_T> = lock_memosig_T<val_T>
      be_memo_pair_:
      be_memo_pair_T:
      	generics: E = unknown instead of _memo_T extends memo_T<val_T> = memo_T<val_T>
      be_sig_triple_:
      be_sig_triple_T:
      be_memosig_triple_:
      be_memosig_triple_T:
      	generics: E = unknown instead of _sig_T extends sig_T<val_T> = sig_T<val_T>

### Patch Changes

- Updated dependencies
  - ctx-core@5.23.0

## 0.49.1

### Patch Changes

- fix: type errors:

      be_lock_memosig_triple
      be_memo_pair
      be_memosig_triple
      be_sig_triple

- Updated dependencies
  - ctx-core@5.22.1

## 0.49.0

### Minor Changes

- minor: make type generics more ergonomic:

      ctx__be_T: <be_val_T, ns_T extends string = '', ctx_T extends Ctx = Ctx_wide_T<ns_T>>
      ctx__get_T: <val_T, ns_T extends string = '', ctx_T extends Ctx = Ctx_wide_T<ns_T>>
      ctx__set_T: <val_T, ns_T extends string = '', ctx_T extends Ctx = Ctx_wide_T<ns_T>>

### Patch Changes

- Updated dependencies
  - ctx-core@5.22.0

## 0.48.14

### Patch Changes

- ctx-core: ^5.20.0 -> ^5.21.0

## 0.48.13

### Patch Changes

- ctx-core: ^5.19.2 -> ^5.20.0

## 0.48.12

### Patch Changes

- ctx-core: ^5.19.1 -> ^5.19.2

## 0.48.11

### Patch Changes

- size-limit: ^11.0.1 -> ^11.0.2
- @size-limit/preset-small-lib: ^11.0.1 -> ^11.0.2
- Updated dependencies
- Updated dependencies
  - ctx-core@5.19.1

## 0.48.10

### Patch Changes

- ctx-core: ^5.18.9 -> ^5.19.0

## 0.48.9

### Patch Changes

- ctx-core: ^5.18.8 -> ^5.18.9

## 0.48.8

### Patch Changes

- Updated dependencies
  - ctx-core@5.18.8

## 0.48.7

### Patch Changes

- ctx-core: ^5.18.6 -> ^5.18.7

## 0.48.6

### Patch Changes

- ctx-core: ^5.18.5 -> ^5.18.6

## 0.48.5

### Patch Changes

- ctx-core: ^5.18.4 -> ^5.18.5

## 0.48.4

### Patch Changes

- ctx-core: ^5.18.3 -> ^5.18.4

## 0.48.3

### Patch Changes

- patch:

      hy__bind bundle size optimization
      size-limit measurements:
      	+ browser-only hy__bind
      	+ browser-only hy__bind + rmemo
      	+ browser-only hy__bind + rmemo + ctx
      	+ isomorphic browser hy__bind + rmemo + ctx
      	+ isomorphic browser + rmemo
      	+ isomorphic server + rmemo

  size-limit:

      isomorphic browser: + 2 B
      browser-only minimal: - 3 B
      browser-only hydrate: - 2 B
      browser-only hydrate + rmemo: - 2 B
      browser-only hydrate + rmemo + ctx: - 4 B
      isomorphic browser hydrate + rmemo + ctx: + 2 B

## 0.48.2

### Patch Changes

- ctx-core: ^5.18.1 -> ^5.18.2
- Updated dependencies
  - ctx-core@5.18.3

## 0.48.1

### Patch Changes

- ctx-core: ^5.18.0 -> ^5.18.1

## 0.48.0

### Minor Changes

- raw*: + support for reactivity using memo*

  size-limit:

      isomorphic browser: + 97 B
      isomorphic server: + 8 B
      browser-only minimal: + 2 B
      browser-only hydrate: + 1 B
      browser-only hydrate + rmemo: + 2 B
      browser-only hydrate + rmemo + ctx: + 1 B
      isomorphic browser hydrate + rmemo + ctx: + 79 B
      server-only minimal: + 1 B
      server-only render doc: - 17 B
      server-only render doc + rmemo + ctx: + 11 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: + 5 B

## 0.47.0

### Minor Changes

- minor:

      + memo__bind:
      	+ _
      	+ bind

- minor: enable usage without rmemo for smaller bundles:

      + memo__bind:
      	+ _
      	+ bind

  size-limit:

      isomorphic browser: - 308 B
      browser-only minimal: - 298 B
      browser-only hydrate: - 291 B
      browser-only hydrate + rmemo: + 17 B
      browser-only hydrate + rmemo + ctx: + 11 B
      isomorphic browser hydrate + rmemo + ctx: + 13 B
      server-only render doc + rmemo: + 9 B
      server-only render doc + rmemo + ctx: + 6 B
      isomorphic server helpers + doc_html_ + rmemo + ctx: 10 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.18.0

## 0.46.1

### Patch Changes

- memo\_: add: fix: error when return value is nullish

  size-limit:

      isomorphic browser: + 5 B
      browser-only minimal: + 6 B
      browser-only hydrate + helpers: + 1 B
      browser-only hydrate + helpers + rmemo: - 1 B
      browser-only hydrate + helpers + rmemo + ctx: - 2 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: + 9 B
      server-only render doc + helpers + rmemo: + 1 B
      server-only render doc + helpers + rmemo + ctx: + 1 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: + 1 B

- Updated dependencies
  - ctx-core@5.17.1

## 0.46.0

### Minor Changes

- minor:

      memo_:
      	rename internals:
      		.r→.s
      		.memor→.t
      		.f.S→.f.t
      	+ .memo_: support limiting dependent library bundle sizes by not requiring the rmemo to be imported
      	.add: no longer wraps rmemo_add_def argument with a memo_: user can return a memo from the rmemo_add_def function
      + rmemo__off__add
      rmemo__on: arguments: + off_fn?:(rmemo:rmemo_T<val_T>)=>unknown
      rmemo__on:
      rmemo__off:
      	+ <val_T> generic type
      - rmemo__add_T
      rmemo_add_def_T: arguments: - old_val

  size-limit:

      isomorphic browser: - 8 B
      isomorphic server: - 4 B
      browser-only minimal: - 7 B
      browser-only hydrate + helpers: - 3 B
      browser-only hydrate + helpers + rmemo: - 9 B
      browser-only hydrate + helpers + rmemo + ctx: + 10 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 6 B
      server-only minimal: - 1 B
      server-only render doc + helpers: + 13 B
      server-only render doc + helpers + rmemo: - 15 B
      server-only render doc + helpers + rmemo + ctx: - 5 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: + 5 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.17.0

## 0.45.1

### Patch Changes

- rmemo\_\_add: fix: arguments match the .add method

  size-limit:

      browser-only hydrate + helpers + rmemo: + 3 B
      server-only render doc + helpers + rmemo: - 1 B

- Updated dependencies
  - ctx-core@5.16.2

## 0.45.0

### Minor Changes

- - bind*: use memo* instead

size-limit:

    isomorphic browser: - 38 B
    isomorphic server: - 35 B
    isomorphic helpers: - 9 B
    browser-only minimal: - 4 B
    browser-only hydrate + helpers: - 27 B
    browser-only hydrate + helpers + rmemo: - 20 B
    browser-only hydrate + helpers + rmemo + ctx: - 33 B
    isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 30 B
    server-only minimal: - 16 B
    server-only render doc + helpers: - 20 B
    server-only render doc + helpers + rmemo: - 19 B
    server-only render doc + helpers + rmemo + ctx: - 23 B
    isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: - 43 B

## 0.44.1

### Patch Changes

- lock*memosig*: .get: fix: return value
- Updated dependencies
  - ctx-core@5.16.1

## 0.44.0

### Minor Changes

- minor:

      memo_T:
      sig_T:
      	+ .add<add_val_T>(add_def:(sig:sig_T<val_T>, prev_val:add_val_T|undefined)=>add_val_T):memo_T<val_T>
      memo_:
      sig_:
      memosig_:
      lock_memosig_:
      	arguments: - ...subscriber_a
      rmemo__subscribe→rmemo__add

  patch:

      rmemo__add: fix: add_def is not called until memo argument is called

  size-limit:

      isomorphic browser: + 22 B
      browser-only minimal: + 14 B
      browser-only hydrate + helpers: + 27 B
      browser-only hydrate + helpers + rmemo: + 19 B
      browser-only hydrate + helpers + rmemo + ctx: + 23 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: + 13 B
      server-only render doc + helpers + rmemo: + 22 B
      server-only render doc + helpers + rmemo + ctx: + 12 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: + 15 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.16.0

## 0.43.0

### Minor Changes

- minor:

      subscribers: + strong reference to return value: prevent GC
      memo_T:
      sig_T:
      	+ b?:[unknown, memo_T<unknown>][]

  size-limit:

      isomorphic browser: + 1 B
      browser-only minimal: + 4 B
      browser-only hydrate + helpers: - 4 B
      browser-only hydrate + helpers + rmemo + ctx: - 3 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: + 1 B
      server-only render doc + helpers + rmemo: + 2 B
      server-only render doc + helpers + rmemo + ctx: + 4 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: + 2 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.15.0

## 0.42.0

### Minor Changes

- ondelete*be*: .d: fix: clear ondelete callbacks when run

### Patch Changes

- Updated dependencies
  - ctx-core@5.14.0

## 0.41.1

### Patch Changes

- jsdom: ^23.1.0 -> ^23.2.0

## 0.41.0

### Minor Changes

- minor:

      Cancel
      nullish
      nullish__none_
      run
      sleep
      Timeout
      tup

### Patch Changes

- Updated dependencies
  - ctx-core@5.13.0

## 0.40.1

### Patch Changes

- ctx-core: ^5.11.0 -> ^5.12.0

## 0.40.0

### Minor Changes

- minor:

      + rmemo__on: aliased by on
      + rmemo__off: aliased by off

  size-limit:

      isomorphic browser: - 8 B
      browser-only hydrate + helpers: - 1 B
      browser-only hydrate + helpers + rmemo + ctx: + 1 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 5 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.11.0

## 0.39.0

### Minor Changes

- minor:

      + circular_rmemo_T
      + circular_memo_T
      + circular_sig_T
      + circular_lock_memosig_T

### Patch Changes

- Updated dependencies
  - ctx-core@5.10.0

## 0.38.1

### Patch Changes

- be*memo_pair*:
  be*sig_triple*:

      fix: jsdoc type

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.9.0

## 0.38.0

### Minor Changes

- rmemo\_\_wait:

      always calls promise_timeout
      + .cancel(val:rmemo_val_T<_rmemo_T>)

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.8.0

## 0.37.0

### Minor Changes

- rmemo\_\_wait: arguments: + error?:Error

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.7.0

## 0.36.1

### Patch Changes

- ctx-core: ^5.6.0 -> ^5.6.1

## 0.36.0

### Minor Changes

- minor: rmemo: + be

  patch: be: arguments: fix: + config?:be_config_T<ns_T>

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@5.6.0

## 0.35.0

### Minor Changes

- minor: ./isomorphic:

      + for_
      + switch_

  size-limit:

      isomorphic server: + 1 B

## 0.34.0

### Minor Changes

- minor:

      + rmemo__subscribe
      + subscribe

  size-limit:

      isomorphic browser: + 10 B
      browser-only minimal: + 3 B
      browser-only hydrate + helpers: + 1 B
      browser-only hydrate + helpers + rmemo + ctx: - 1 B

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@5.5.0

## 0.33.0

### Minor Changes

- support html void tags: all non-void tags have a closing tag
- fix: various type errors

  size-limit:

      isomorphic server: + 34 B
      server-only minimal: + 33 B
      server-only render doc + helpers: + 30 B
      server-only render doc + helpers + rmemo: + 37 B
      server-only render doc + helpers + rmemo + ctx: + 37 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: + 36 B

## 0.32.0

### Minor Changes

- minor:

      server: always expand <script></script> tag
      server__element__proto: - ._rele

  size-limit:

      isomorphic server: + 22 B
      server-only minimal: + 14 B
      server-only render doc + helpers: + 14 B
      server-only render doc + helpers + rmemo: + 12 B
      server-only render doc + helpers + rmemo + ctx: + 15 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: + 13 B

## 0.31.11

### Patch Changes

- rmemo\_\_wait: fix: prevent early GC of internal memo
- Updated dependencies
  - ctx-core@5.4.1

## 0.31.10

### Patch Changes

- ctx-core: ^5.3.1 -> ^5.4.0

## 0.31.9

### Patch Changes

- size optimization

  size-limit:

      isomorphic browser: - 13 B
      browser-only minimal: - 12 B
      browser-only hydrate + helpers: - 8 B
      browser-only hydrate + helpers + rmemo: - 2 B
      browser-only hydrate + helpers + rmemo + ctx: - 4 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 2 B

## 0.31.8

### Patch Changes

- size optimization

  size-limit:

      isomorphic browser: - 9 B
      browser-only hydrate + helpers: - 2 B
      browser-only hydrate + helpers + rmemo: + 1 B
      browser-only hydrate + helpers + rmemo + ctx: + 1 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 1 B

## 0.31.7

### Patch Changes

- size optimization

  size-limit:

      browser-only hydrate + helpers: - 1 B
      browser-only hydrate + helpers + rmemo: - 4 B
      browser-only hydrate + helpers + rmemo + ctx: - 11 B

## 0.31.6

### Patch Changes

- ctx-core: ^5.3.0 -> ^5.3.1

## 0.31.5

### Patch Changes

- ctx-core: ^5.2.3 -> ^5.3.0

## 0.31.4

### Patch Changes

- rmemo: fix: imports
- Updated dependencies
  - ctx-core@5.2.3

## 0.31.3

### Patch Changes

- ctx-core: ^5.2.1 -> ^5.2.2

## 0.31.2

### Patch Changes

- ctx-core: ^5.2.0 -> ^5.2.1

## 0.31.1

### Patch Changes

- ctx-core: ^5.1.0 -> ^5.2.0

## 0.31.0

### Minor Changes

- minor:

      + ctx__clear
      + ondelete_be_
      + ondelete_be__val__new_T

  size-limit:

      browser-only hydrate + helpers + rmemo + ctx: + 12 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: + 5 B
      server-only render doc + helpers + rmemo + ctx: - 1 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: - 1 B

## 0.30.3

### Patch Changes

- tsx: ^4.6.2 -> ^4.7.0
- ctx-core: ^5.0.2 -> ^5.1.0

## 0.30.2

### Patch Changes

- ctx-core: ^5.0.1 -> ^5.0.2

## 0.30.1

### Patch Changes

- ctx-core: ^5.0.0 -> ^5.0.1

## 0.30.0

### Minor Changes

- minor: + Ctx ns (namespace):

      be_:
      Be:
      be_o_T:
      be_config_T
      Ctx:
      	generics: + ns_T
      	+ ns:ns_T
      	- is_source_
      be__has_:
      be_map__find:
      be__val_:
      be_lock_memosig_triple_:
      be_lock_memosig_triple_T:
      be_memo_pair_:
      be_memo_pair_T:
      be_memosig_triple_:
      be_memosig_triple_T:
      be_sig_triple_:
      be_sig_triple_T:
      	generics: + ns_T
      be: generics:
      	+ ns_T
      	+ ctx_T
      ctx__set:
      ctx__delete:
      	generics:
      		+ ns_T
      		+ ctx_T
      	arguments: + ns?:string
      ctx__new:
      ctx_:
      	returns Ctx<''>
      + BeMap
      + BeMapO
      + Ctx_wide_T
      + Ctx_s_T
      + Ctx_s_wide_T
      + ctx__be_T
      + ctx__get_T
      + ctx__set_T
      + ns_ctx__new
      rmemo: bundle size optimizations: .includes instead of .indexOf
      exports: + ./test
      + Expect
      + Equal
      TupleExclude: fix: type error
      + TupleMemberExtends
      + TupleValues
      + TupleConcat
      + TupleToUnion
      - be___T
      - be__return_T

  size-limit:

      isomorphic browser: + 1 B
      browser-only minimal: - 2 B
      browser-only hydrate + helpers: - 1 B
      browser-only hydrate + helpers + rmemo: - 3 B
      browser-only hydrate + helpers + rmemo + ctx: - 32 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 38 B
      server-only render doc + helpers + rmemo: - 5 B
      server-only render doc + helpers + rmemo + ctx: - 45 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: - 35 B

### Patch Changes

- Updated dependencies
  - ctx-core@5.0.0

## 0.29.3

### Patch Changes

- ctx-core: ^4.18.0 -> ^4.19.0

## 0.29.2

### Patch Changes

- package.json: fix: links to https://github.com/relementjs/relementjs

## 0.29.1

### Patch Changes

- rmemo_T: fix: + |lock_memosig_T<val_T>
- Updated dependencies
- Updated dependencies
  - ctx-core@4.18.0

## 0.29.0

### Minor Changes

- lock*memosi*\*: \_=: sets .lock = 1 to prevent the memo_def from running

  size-limit:

      isomorphic browser: - 4 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 1 B

### Patch Changes

- Updated dependencies
- Updated dependencies
  - ctx-core@4.17.0

## 0.28.1

### Patch Changes

- ctx-core: ^4.15.0 -> ^4.16.0

## 0.28.0

### Minor Changes

- minor:

      + lock_memosig_
      + be_lock_memsig_
      + be_lock_memsig_T

  size-limit:

      isomorphic browser: + 3 B
      browser-only hydrate + helpers: + 4 B
      server-only render doc + helpers + rmemo: - 1 B
      server-only render doc + helpers + rmemo + ctx: + 6 B

### Patch Changes

- Updated dependencies
  - ctx-core@4.15.0

## 0.27.1

### Patch Changes

- browser: size optimization: \_undefined instead of null

  size-limit:

      isomorphic browser: - 4 B
      browser-only minimal: - 1 B
      browser-only hydrate + helpers: - 3 B
      browser-only hydrate + helpers + rmemo: + 3 B
      browser-only hydrate + helpers + rmemo + ctx: - 2 B

## 0.27.0

### Minor Changes

- minor:

      remove element without child logic: save bytes: the programmer is responsible for ensuring the following tags are empty:
      	<input/>
      	<meta/>
      	<br/>
      	<link/>
      	<img/>
      	<hr/>
      	<area/>
      	<base/>
      	<col/>
      	<param/>
      	<wbr/>
      	<track/>
      	<source/>
      	<embed/>
      	<command/>
      	<keygen/>
      empty tags use void closing tag (/>)

  size-limit:

      isomorphic server: - 76 B
      server-only minimal: - 73 B
      server-only render doc + helpers: - 70 B
      server-only render doc + helpers + rmemo: - 79 B
      server-only render doc + helpers + rmemo + ctx: - 81 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: - 64 B

## 0.26.0

### Minor Changes

- consolidate relement\_\_use browser/server object:

      browser__fragment__relement→browser__relement
      - browser__base__relement
      server__fragment__relement→server__relement
      - server__base__relement

  size-limit:

      isomorphic browser: - 6 B
      browser-only minimal: + 1 B
      browser-only hydrate + helpers: + 2 B
      browser-only hydrate + helpers + rmemo: - 3 B
      browser-only hydrate + helpers + rmemo + ctx: - 1 B
      isomorphic browser helpers + hydrate + helpers + rmemo + ctx: - 1 B
      server-only minimal: - 2 B
      server-only render doc + helpers: + 1 B
      server-only render doc + helpers + rmemo: - 1 B
      server-only render doc + helpers + rmemo + ctx: + 1 B
      isomorphic server helpers + doc_html_ + helpers + rmemo + ctx: + 9 B

## 0.25.0

### Minor Changes

- hy\_\_bind:

      hy-bind attribute changed to hy__bind:
      change error message

  size-limit:

      browser-only minimal: - 1 B
      browser-only hydrate + helpers: - 5 B
      browser-only hydrate + helpers + rmemo: + 3 B

## 0.24.2

### Patch Changes

- ctx-core: ^4.14.0 -> ^4.14.1

## 0.24.1

### Patch Changes

- ctx-core: ^4.13.0 -> ^4.14.0

## 0.24.0

### Minor Changes

- minor:

      be_:
      	store val into ctx as an id string or id as the be_...not both
      	fix: be with an id can be transplied multiple times & use the same ctx val as another transpiled be with the same id
      Be: id: string|Be

  size-limit:

      browser-only hydrate + helpers + rmemo + ctx: - 19 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: - 27 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: - 20 B
      server-only render doc + helpers + rmemo + ctx: - 25 B
      isomorphic (base) server helpers + doc_html_ + helpers + rmemo + ctx: - 12 B
      isomorphic (fragment) server helpers + doc_html_ + helpers + rmemo + ctx: - 19 B

### Patch Changes

- Updated dependencies
  - ctx-core@4.13.0

## 0.23.0

### Minor Changes

- globalThis\__be_: arguments match be\_

  size-limit:

      browser-only hydrate + helpers + rmemo + ctx: - 1 B
      isomorphic (base) browser helpers + hydrate + helpers + rmemo + ctx: - 1 B
      isomorphic (fragment) browser helpers + hydrate + helpers + rmemo + ctx: + 9 B

### Patch Changes

- Updated dependencies
  - ctx-core@4.12.0

## 0.22.6

### Patch Changes

- globalThis\__be_: fix: arguments type: + config?:be_config_T
- Updated dependencies
  - ctx-core@4.11.4

## 0.22.5

### Patch Changes

- ctx-core: ^4.11.2 -> ^4.11.3

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

  size-limit:

      isomorphic browser: + 2 B
      browser-only hydrate + helpers: + 1 B
      browser-only hydrate + helpers + rmemo: + 2 B
      server-only render doc + helpers + rmemo: + 3 B

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
      + browser__relement
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
