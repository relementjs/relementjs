// originally forked from https://github.com/vanjs-org/mini-van/blob/main/src/van-plate.d.ts
import type { memo_T, rmemo_T } from 'ctx-core/rmemo'
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
export const attach:server__attach_T
export type server__attach_T = (dom:server__Node_T, ...children:readonly server__tag__dom_T[])=>server__Node_T
export const bind_:bind__T
export const tags:server__tags_T<'html'>
export declare function tagsNS<tags_env_T extends render__tags_env_T>(
	namespaceURI:render__namespaceURI_T<tags_env_T>
):server__tags_T<tags_env_T>
export type server__tags_T<tags_env_T extends render__tags_env_T = 'html'> =
	(tags_env_T extends 'html'
		? { [K in keyof HTMLElementTagNameMap]:server__tag_T<HTMLElementTagNameMap[K]> }
		: tags_env_T extends 'svg'
			? { [K in keyof SVGElementTagNameMap]:server__tag_T<SVGElementTagNameMap[K]> }
			: tags_env_T extends 'mathml'
				? { [K in keyof MathMLElementTagNameMap]:server__tag_T<MathMLElementTagNameMap[K]> }
				: Record<string, server__tag_T<Element>>)
export type server__tagsNS_T<
	tags_env_T extends render__tags_env_T = 'svg'
> = (namespaceURI:render__namespaceURI_T<tags_env_T>)=>server__tags_T<tags_env_T>
export type server__tag_T<Tag> = (
	// TODO: Can we narrow first argument?
	// first?:(known_keys__render_props_T<Result>)|server__tags_dom_T,
	first?:
		|(known_keys__render_props_T<Tag>&Record<string, render_props_val_OR_rmemo_T_OR_Fn>)
		|server__tag__dom_T,
	...rest:readonly server__tag__dom_T[]
)=>server__Node_T
export type server__tag__dom_T =
	|server__tag__dom__val_T
	|memo_T<server__tag__dom__val_T>
	|server__tag__dom__bind_T
	|readonly server__tag__dom_T[]
	|unknown // This is necessary for isomorphic compatability. TODO: is there a narrower type solution?
export declare const fragment_:server__fragment__T
export type server__fragment__T = (...children:readonly server__tag__dom_T[])=>server__Node_T
export declare const raw_:server__raw__T
export type server__raw__T = (html:string)=>server__Node_T
export const doc_html_:server__doc_html__T
export type server__doc_html__T = (first?:render_props_T|server__tag__dom_T, ...rest:readonly server__tag__dom_T[])=>string
export type server__tag__dom__bind_T = (dom:server__tag__dom__val_T)=>server__tag__dom__val_T
export type server__tag__dom__val_T = render_primitive_T|server__Node_T|null|undefined
export declare const server__element__proto:server__element__proto_T
export type server__element__proto_T = {
	buf__render(buf:string[]):void
	render:string
}
export type server__Node_T = {
	render():string
	addEventListener:unknown
}
export declare const server__base__relement:server__base__relement_T
export type server__base__relement_T = {
	attach:server__attach_T
	bind_:bind__T
	tags:server__tags_T<'html'>
	tagsNS<tags_env_T extends render__tags_env_T>(
		namespaceURI:render__namespaceURI_T<tags_env_T>
	):server__tags_T<tags_env_T>
}
export declare const server__fragment__relement:server__fragment__relement_T
export type server__fragment__relement_T = server__base__relement_T&{
	fragment_:server__fragment__T
	raw_:server__raw__T
}
export declare const server__full__relement:server__full__relement_T
export type server__full__relement_T = server__fragment__relement_T&{
	attach:server__attach_T
	doc_html_:server__doc_html__T
	server__element__proto:server__element__proto_T
}
export type server__relement_T = server__base__relement_T&Partial<server__full__relement_T>
