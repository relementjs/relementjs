import type { tag_env_T, tag_namespaceURI_T, tag_primitive_T, tag_props_T, } from '../any/index.js'
import type {
	browser__attach_T,
	browser__fragment__T,
	browser__raw__T,
	browser__relement_T,
	browser__tag_dom_T,
	browser__tags_T
} from '../browser/index.js'
import type {
	server__attach_T,
	server__fragment__T,
	server__Node_T,
	server__raw__T,
	server__relement_T,
	server__tag_dom_T,
	server__tags_T
} from '../server/index.js'
export * from 'ctx-core/be'
export * from 'ctx-core/rmemo'
export * from './for/index.js'
export * from './list/index.js'
export * from './switch/index.js'
export declare function relement__use(
	render_api:browser__relement_T|server__relement_T|null|undefined
):void
export type relement_env_T = 'any'|'browser'|'server'
export declare function attach<env_T extends relement_env_T = 'any'>(
	...arg_a:Parameters<attach_T<env_T>>
):ReturnType<attach_T<env_T>>
export type attach_T<env_T extends relement_env_T = 'any'> =
	env_T extends 'browser'
		? browser__attach_T
		: env_T extends 'server'
			? server__attach_T
			: browser__attach_T|server__attach_T
export declare let tags:tags_T<'any'>
export type tags_T<
	env_T extends relement_env_T = 'any',
	tags_env_T extends tag_env_T = 'html'
> =
	env_T extends 'browser'
		? browser__tags_T<tags_env_T>
		: env_T extends 'server'
			? server__tags_T<tags_env_T>
			: browser__tags_T<tags_env_T>|server__tags_T<tags_env_T>
export declare function tagsNS<
	env_T extends relement_env_T = 'any',
	tags_env_T extends tag_env_T = 'html'
>(
	namespaceURI:tag_namespaceURI_T<tags_env_T>
):tags_T<env_T, tags_env_T>
export type tag_T<env_T extends relement_env_T = 'any', node_T extends Node = Node> =
	(...arg_a:|[]
		|[tag_props_T<node_T>, ...tag_dom_T<'any'>[]]
		|tag_dom_T<'any'>[]
	)=>Node_T<env_T, node_T>
export type Node_T<env_T extends relement_env_T = 'any', node_T extends Node = Node> =
	env_T extends 'browser'
		? node_T
		: env_T extends 'server'
			? server__Node_T
			: node_T|server__Node_T
export declare function fragment_<env_T extends relement_env_T = 'any'>(...children:tag_dom_T<'any'>[]):
	env_T extends 'browser'
		? ReturnType<browser__fragment__T>
		: env_T extends 'server'
			? ReturnType<server__fragment__T>
			: ReturnType<browser__fragment__T>|ReturnType<server__fragment__T>
export declare function raw_<env_T extends relement_env_T = 'any'>(...children:tag_dom_T<'any'>[]):
	env_T extends 'browser'
		? ReturnType<browser__raw__T>
		: env_T extends 'server'
			? ReturnType<server__raw__T>
			: ReturnType<browser__raw__T>|ReturnType<server__raw__T>
export type fragment_T<env_T extends relement_env_T = 'any'> =
	env_T extends 'browser'
		? DocumentFragment
		: env_T extends 'server'
			? server__Node_T
			: DocumentFragment|server__Node_T
// @formatter:off
export type tag_dom_T<env_T extends relement_env_T = 'any'> =
	&(
		|browser__tag_dom_T
		|server__tag_dom_T)
	&(
		|tag_primitive_T
		|env_T extends 'browser'
			? browser__tag_dom_T
			: env_T extends 'server'
				? server__tag_dom_T
				: browser__tag_dom_T|server__tag_dom_T)
// @formatter:on
