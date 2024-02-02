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
	svg_tags = tagsNS?.('http://www.w3.org/2000/svg')
	mathml_tags = tagsNS?.('http://www.w3.org/1998/Math/MathML')
	fragment_ = relement?.fragment_ || '*__fragment__relement'
	raw_ = relement?.raw_ || '*__fragment__relement'
}
export let attach
export let tagsNS
export let tags
export let svg_tags
export let mathml_tags
export let fragment_ = '*__fragment__relement'
export let raw_ = '*__fragment__relement'
export function svg_tags_() {
	return svg_tags
}
export function mathml_tags_() {
	return mathml_tags
}
