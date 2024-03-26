// originally forked from https://github.com/vanjs-org/mini-van/blob/main/src/van-plate.d.ts
import type { memo__bind_T, memo_T } from 'ctx-core/rmemo'
import type {
	tag_env_T,
	tag_namespaceURI_T,
	tag_primitive_T,
	tag_props_T,
	tag_props_val_OR_rmemo_T_OR_fn_T,
	tag_props_val_T
} from '../any/index.js'
export * from 'ctx-core/rmemo'
export { tag_props_val_OR_rmemo_T_OR_fn_T, tag_props_val_T, tag_primitive_T }
export const attach:server__attach_T
export type server__attach_T = (dom:server__Node_T, ...children:readonly server__tag_dom_T[])=>server__Node_T
export const tags:server__tags_T<'html'>
export declare function tagsNS<tags_env_T extends tag_env_T>(
	namespaceURI:tag_namespaceURI_T<tags_env_T>
):server__tags_T<tags_env_T>
export type void_tags_T = 'area'|'base'|'br'|'col'|'embed'|'hr'|'img'|'input'|'link'|'meta'|'source'|'track'|'wbr'
// @formatter:off
export type server__tags_T<tags_env_T extends tag_env_T = 'html'> =
	(tags_env_T extends 'html'
		? {
				[K in keyof HTMLElementTagNameMap]:server__tag_T<
					HTMLElementTagNameMap[K],
					K extends void_tags_T ? true : false
				>
			}
		: tags_env_T extends 'svg'
			? {
					[K in keyof SVGElementTagNameMap]:server__tag_T<SVGElementTagNameMap[K]>
				}
			: tags_env_T extends 'mathml'
				? {
						[K in keyof MathMLElementTagNameMap]:server__tag_T<MathMLElementTagNameMap[K]>
					}
				: Record<string, server__tag_T<Element>>)
// @formatter:on
export type server__tagsNS_T<
	tags_env_T extends tag_env_T = 'svg'
> = (namespaceURI:tag_namespaceURI_T<tags_env_T>)=>server__tags_T<tags_env_T>
// @formatter:off
export type server__tag_T<Node, is_void_tag_T extends boolean = false> = (
	// TODO: Can we narrow first argument?
	first?:
		is_void_tag_T extends false
			? |tag_props_T<Node>
				|server__tag_dom_T
			: tag_props_T<Node>,
	...rest:(
		is_void_tag_T extends false
			? readonly server__tag_dom_T[]
			: [])
)=>server__Node_T
// @formatter:on
export type server__tag_dom_T =
	|server__tag__dom__val_T
	|memo_T<server__tag__dom__val_T>
	|memo__bind_T<[], server__tag__dom__val_T>
	|server__tag__dom__bind_T
	|readonly server__tag_dom_T[]
export type server__tag__dom__bind_T =
	((dom?:server__tag__dom__val_T)=>server__tag__dom__val_T)
export declare const fragment_:server__fragment__T
export type server__fragment__T = (
	...children:readonly server__tag_dom_T[]
)=>server__Node_T
export declare const raw_:server__raw__T
export type server__raw__T = (html:server__tag_dom_T)=>server__Node_T
export const doc_html_:server__doc_html__T
export type server__doc_html__T = (
	first?:
		|tag_props_T<HTMLHtmlElement>
		|server__tag_dom_T,
	...rest:readonly server__tag_dom_T[]
)=>string
export type server__tag__dom__val_T =
	|tag_primitive_T
	|server__Node_T
	|null
	|undefined
export declare const server__element__proto:server__element__proto_T
export type server__element__proto_T = {
	buf__render(buf:string[]):void
	render:string
}
export type server__Node_T = {
	toString():string
}
export declare const server__relement:server__relement_T
export type server__relement_T = {
	attach:server__attach_T
	tags:server__tags_T<'html'>
	tagsNS<tags_env_T extends tag_env_T>(
		namespaceURI:tag_namespaceURI_T<tags_env_T>
	):server__tags_T<tags_env_T>
	fragment_:server__fragment__T
	raw_:server__raw__T
}
