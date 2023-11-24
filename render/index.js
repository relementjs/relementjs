/** @typedef {import('@ctx-core/ui--browser').browser__render_api_T} */
/** @typedef {import('@ctx-core/ui--server').server__render_api_T} */
/** @type {browser__render_api_T|server__render_api_T} */
export function render_api__use(render_api) {
	_ = render_api?._
	attach = render_api?.attach
	bind_ = render_api?.bind_
	tagsNS = render_api?.tagsNS
	tags = render_api?.tags
	svg_tags = tagsNS?.('http://www.w3.org/2000/svg')
	mathml_tags = tagsNS?.('http://www.w3.org/1998/Math/MathML')
	html_ = render_api?.doc_html_ || 'server-only'
	server__element__proto = render_api?.server__element__proto || 'server-only'
	hydrate = render_api?.hydrate || 'browser-only'
}
export let _
export let attach
export let bind_
export let tagsNS
export let tags
export let svg_tags
export let mathml_tags
export let html_
export let server__element__proto
export let hydrate
