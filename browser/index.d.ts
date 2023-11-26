/// <reference types="./index.d.ts" />
// originally forked from https://github.com/vanjs-org/van/blob/main/src/van.d.ts
import type { rmemo_T } from 'ctx-core/rmemo'
import type {
	bind__T,
	known_keys__render_props_T,
	render__namespaceURI_T,
	render__tags_env_T,
	render_primitive_T,
	render_props_T,
	render_props_val_OR_rmemo_T_OR_Fn,
	render_props_val_T
} from '../any/index.js'
export * from 'ctx-core/rmemo'
export { render_props_T, render_props_val_OR_rmemo_T_OR_Fn, render_props_val_T, render_primitive_T }
export declare const attach:browser__attach_T
export type browser__attach_T = (dom:Element, ...children:readonly browser__tag__dom_T[])=>Element
export const bind_:bind__T
export type browser__tag__dom__val_T = render_primitive_T|Node|null|undefined
export declare const tags:browser__tags_T<'html'>
export declare function tagsNS<tags_env_T extends render__tags_env_T>(
	namespaceURI:render__namespaceURI_T<tags_env_T>
):browser__tags_T<tags_env_T>
export type browser__tags_T<tags_env_T extends render__tags_env_T = 'html'> =
	(tags_env_T extends 'html'
		? Readonly<{ [K in keyof HTMLElementTagNameMap]:browser__tag_T<HTMLElementTagNameMap[K]> }>
		: tags_env_T extends 'svg'
			? Readonly<{ [K in keyof SVGElementTagNameMap]:browser__tag_T<SVGElementTagNameMap[K]> }>
			: tags_env_T extends 'mathml'
				? Readonly<{ [K in keyof MathMLElementTagNameMap]:browser__tag_T<MathMLElementTagNameMap[K]> }>
				: Readonly<Record<string, browser__tag_T<Element>>>)
export type browser__tagsNS_T = <tags_env_T extends render__tags_env_T>(
	namespaceURI:string
)=>browser__tags_T<tags_env_T>
export type browser__tag_T<Tag> = (
	first?:
		|render_props_T&known_keys__render_props_T<Tag>
		|browser__tag__dom_T,
	...rest:readonly browser__tag__dom_T[]
)=>Tag
export type browser__tag__dom_T =
	|browser__tag__dom__val_T
	|rmemo_T<browser__tag__dom__val_T>
	|browser__tag__dom__bind_T
	|readonly browser__tag__dom_T[]
	|unknown // This is necessary for isomorphic compatability. TODO: is there a narrower type solution?
export type browser__tag__dom__bind_T = ((dom?:Node)=>browser__tag__dom__val_T)|((dom?:Element)=>Element)
export declare const fragment_:browser__fragment__T
export type browser__fragment__T = (...children:readonly browser__tag__dom_T[])=>DocumentFragment
export declare const raw_:browser__raw__T
export type browser__raw__T = (html:string)=>DocumentFragment
export declare function hydrate<T extends Node>(dom:T, f:(dom:T)=>T|null|undefined|render_primitive_T):void
export type browser__hydrate_T<T extends Node> = (dom:T, f:(dom:T)=>T|null|undefined|render_primitive_T)=>void
export declare const browser__base__relement:browser__base__relement_T
export type browser__base__relement_T = {
	attach:browser__attach_T
	bind_:bind__T
	tags:browser__tags_T<'html'>
	tagsNS:<tags_env_T extends render__tags_env_T>(
		namespaceURI:render__namespaceURI_T<tags_env_T>
	)=>browser__tags_T<tags_env_T>
}
export declare const browser__fragment__relement:browser__fragment__relement_T
export type browser__fragment__relement_T = browser__base__relement_T&{
	fragment_:browser__fragment__T
	raw_:browser__raw__T
}
export declare const browser__full__relement:Full<browser__relement_T>
export type browser__full__relement_T = browser__fragment__relement_T&{
	hydrate<T extends Node>(dom:T, f:(dom:T)=>T|null|undefined|render_primitive_T):void
}
export type browser__relement_T = browser__base__relement_T&Partial<browser__full__relement_T>
