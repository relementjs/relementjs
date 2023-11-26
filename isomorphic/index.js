export * from 'ctx-core/be'
export * from 'ctx-core/rmemo'
/** @typedef {import('../browser/index.js').browser__render_api_T} */
/** @typedef {import('../server/index.js').server__render_api_T} */
/** @type {browser__render_api_T|server__render_api_T} */
export function rel__use(render_api) {
	attach = render_api?.attach
	bind_ = render_api?.bind_
	tagsNS = render_api?.tagsNS
	tags = render_api?.tags
	svg_tags = tagsNS?.('http://www.w3.org/2000/svg')
	mathml_tags = tagsNS?.('http://www.w3.org/1998/Math/MathML')
	doc_html_ = render_api?.doc_html_ || 'server-only'
	server__element__proto = render_api?.server__element__proto || 'server-only'
	hydrate = render_api?.hydrate || 'browser-only'
}
export let attach
export let bind_
export let tagsNS
export let tags
export let svg_tags
export let mathml_tags
export let doc_html_ = 'server-only'
export let server__element__proto = 'server-only'
export let hydrate = 'browser-only'
export function svg_tags_() {
	return svg_tags
}
export function mathml_tags_() {
	return mathml_tags
}
