import type { bind__T, render__namespaceURI_T, render__tags_env_T, render_primitive_T } from '@ctx-core/ui--any'
import type {
	browser__attach_T,
	browser__render_api_T,
	browser__tag_T,
	browser__tags_T,
	rmemo_T
} from '@ctx-core/ui--browser'
import type {
	server__attach_T,
	server__element__proto_T,
	server__doc_html__T,
	server__render_api_T,
	server__tag_T,
	server__tags_T
} from '@ctx-core/ui--server'
export declare function render_api__use(
	render_api:browser__render_api_T|server__render_api_T
):void
export type render__env_T = 'any'|'browser'|'server'
export declare function _<T>(s:T|rmemo_T<T>):T
export declare function attach<env_T extends render__env_T>(
	...arg_a:Parameters<attach_T<env_T>>
):ReturnType<attach_T<env_T>>
export type attach_T<env_T extends render__env_T> =
	env_T extends 'browser'
		? browser__attach_T
		: env_T extends 'server'
			? server__attach_T
			: browser__attach_T|server__attach_T
export declare function bind_():bind__T
export declare let tags:tags_T<'any'>
export type tags_T<env_T extends render__env_T, tags_env_T extends render__tags_env_T = 'html'> =
	env_T extends 'browser'
		? browser__tags_T<tags_env_T>
		: env_T extends 'server'
			? server__tags_T<tags_env_T>
			: browser__tags_T<tags_env_T>|server__tags_T<tags_env_T>
export declare function tagsNS<env_T extends render__env_T, tags_env_T extends render__tags_env_T>(
	namespaceURI:render__namespaceURI_T<tags_env_T>
):tags_T<env_T, tags_env_T>
export type tag_T<env_T extends render__env_T, Tag> =
	env_T extends 'browser'
		? browser__tag_T<Tag>
		: env_T extends 'server'
			? server__tag_T<Tag>
			: browser__tag_T<Tag>|server__tag_T<Tag>
export declare let doc_html_: server__doc_html__T
export declare let server__element__proto:server__element__proto_T
export declare function hydrate<T extends Node>(dom:T, f:(dom:T)=>T|null|undefined|render_primitive_T):void
