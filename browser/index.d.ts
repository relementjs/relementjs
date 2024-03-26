// originally forked from https://github.com/vanjs-org/van/blob/main/src/van.d.ts
import type { memo__bind_T, rmemo_T } from 'ctx-core/rmemo'
import type {
	tag_env_T,
	tag_namespaceURI_T,
	tag_primitive_T,
	tag_props_T,
	tag_props_val_OR_rmemo_T_OR_fn_T,
	tag_props_val_T
} from '../any/index.js'
export * from 'ctx-core/rmemo'
export * from './hy/index.js'
export { tag_props_val_OR_rmemo_T_OR_fn_T, tag_props_val_T, tag_primitive_T }
export declare const attach:browser__attach_T
export type browser__attach_T = (dom:Element, ...children:readonly browser__tag_dom_T[])=>Element
export type browser__tag__dom__val_T =
	|Node
	|tag_primitive_T
	|null
	|undefined
export declare const tags:browser__tags_T<'html'>
export declare function tagsNS<tags_env_T extends tag_env_T>(
	namespaceURI:tag_namespaceURI_T<tags_env_T>
):browser__tags_T<tags_env_T>
export type browser__tags_T<tags_env_T extends tag_env_T = 'html'> =
	(tags_env_T extends 'html'
		? Readonly<{ [K in keyof HTMLElementTagNameMap]:browser__tag_T<HTMLElementTagNameMap[K]> }>
		: tags_env_T extends 'svg'
			? Readonly<{ [K in keyof SVGElementTagNameMap]:browser__tag_T<SVGElementTagNameMap[K]> }>
			: tags_env_T extends 'mathml'
				? Readonly<{ [K in keyof MathMLElementTagNameMap]:browser__tag_T<MathMLElementTagNameMap[K]> }>
				: Readonly<Record<string, browser__tag_T<Element>>>)
export type browser__tagsNS_T = <tags_env_T extends tag_env_T>(
	namespaceURI:string
)=>browser__tags_T<tags_env_T>
export type browser__tag_T<Node> = (
	first?:
		|tag_props_T<Node>
		|browser__tag_dom_T,
	...rest:readonly browser__tag_dom_T[]
)=>Node
export type browser__tag_dom_T =
	|browser__tag__dom__val_T
	|rmemo_T<browser__tag__dom__val_T>
	|memo__bind_T<[], browser__tag__dom__val_T>
	|browser__tag__dom__bind_T
	|readonly browser__tag_dom_T[]
export type browser__tag__dom__bind_T =
	|((dom?:Node)=>browser__tag__dom__val_T)
	|((dom?:Element)=>Element)
export declare const fragment_:browser__fragment__T
export type browser__fragment__T = (...children:readonly browser__tag_dom_T[])=>DocumentFragment
export declare const raw_:browser__raw__T
export type browser__raw__T = (html:browser__tag_dom_T)=>DocumentFragment
export declare function hydrate<T extends Node>(dom:T, f:(dom:T)=>T|null|undefined|tag_primitive_T):void
export type browser__hydrate_T<T extends Node> = (dom:T, f:(dom:T)=>T|null|undefined|tag_primitive_T)=>void
export declare const browser__relement:browser__relement_T
export type browser__relement_T = {
	attach:browser__attach_T
	tags:browser__tags_T<'html'>
	tagsNS:<tags_env_T extends tag_env_T>(
		namespaceURI:tag_namespaceURI_T<tags_env_T>
	)=>browser__tags_T<tags_env_T>
	fragment_:browser__fragment__T
	raw_:browser__raw__T
}
