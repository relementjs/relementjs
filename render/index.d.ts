import { render__tags_env_T } from '@ctx-core/ui--any'
import type { browser__add_T, browser__bind__T, browser__Tags } from '@ctx-core/ui--browser'
import type { server__add_T, server__bind__T, server__Tags } from '@ctx-core/ui--server'
import type { rmemo_T } from 'ctx-core/all'
export declare function isomorphic__render__set<env_T extends render__env_T>(api:isomorphic__render__api_T<env_T>):void
export type render__env_T = 'any'|'browser'|'server'
export type isomorphic__render__api_T<env_T extends render__env_T> =
	env_T extends 'browser'
		? browser__isomorphic__render__api_T
		: env_T extends 'server'
			? server__isomorphic__render__api_T
			: browser__isomorphic__render__api_T|server__isomorphic__render__api_T
export type browser__isomorphic__render__api_T = {
	_?:<T>(s:T|rmemo_T<T>)=>T
	add?:browser__add_T
	bind_?:browser__bind__T
	tags?:browser__Tags<'html'>
}
export type server__isomorphic__render__api_T = {
	_?:<T>(s:T|rmemo_T<T>)=>T
	add?:server__add_T
	bind_?:server__bind__T
	tags?:server__Tags
}
export type add_T<env_T extends render__env_T> =
	env_T extends 'browser'
		? browser__add_T
		: env_T extends 'server'
			? server__add_T
			: browser__add_T|server__add_T
export type bind__T<env_T extends render__env_T> =
	env_T extends 'browser'
		? browser__bind__T
		: env_T extends 'server'
			? server__bind__T
			: browser__bind__T|server__bind__T
export type tags_T<env_T extends render__env_T, tags_env_T extends render__tags_env_T = 'html'> =
	env_T extends 'browser'
		? browser__Tags<tags_env_T>
		: env_T extends 'server'
			? server__Tags
			: browser__Tags<tags_env_T>|server__Tags
