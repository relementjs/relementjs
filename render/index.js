/** @typedef {import('@ctx-core/ui--browser').browser__render_api_T} */
/** @typedef {import('@ctx-core/ui--server').server__render_api_T} */
/** @type {browser__render_api_T|server__render_api_T} */
export function render_api__use(render_api) {
	_ = render_api?._
	attach = render_api?.attach
	bind_ = render_api?.bind_
	tags = render_api?.tags
	tagsNS = render_api?.tagsNS
	html_ = render_api?.doc_html_ || 'server-only'
	server__element__proto = render_api?.server__element__proto || 'server-only'
	hydrate = render_api?.hydrate || 'browser-only'
}
export let _
export let attach
export let bind_
export let tags
export let tagsNS
export let html_
export let server__element__proto
export let hydrate
