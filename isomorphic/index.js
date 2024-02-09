/// <reference types="./index.d.ts" />
export * from 'ctx-core/be'
export * from 'ctx-core/rmemo'
export * from './for/index.js'
export * from './list/index.js'
export * from './switch/index.js'
/** @type {browser__relement_T|server__relement_T} */
export function relement__use(relement) {
	attach = relement?.attach
	tagsNS = relement?.tagsNS
	tags = relement?.tags
	fragment_ = relement?.fragment_
	raw_ = relement?.raw_
}
export let attach
export let tagsNS
export let tags
export let fragment_
export let raw_
