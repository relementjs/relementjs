import { browser__render_api } from '@ctx-core/ui--browser'
import { server__render_api } from '@ctx-core/ui--server'
import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import {
	_,
	attach,
	bind_,
	doc_html_,
	hydrate,
	mathml_tags,
	mathml_tags_,
	render_api__use,
	server__element__proto,
	svg_tags,
	svg_tags_,
	tags,
	type tags_T,
	tagsNS
} from './index.js'
let jsdom:JSDOM, prev__window:Window, prev__document:Document, prev__Text:typeof Text, prev__Node:typeof Node
test.before(()=>{
	jsdom = new JSDOM()
	prev__window = globalThis.window
	prev__document = globalThis.document
	prev__Text = globalThis.Text
	prev__Node = globalThis.Node
	// @ts-expect-error TS2322
	globalThis.window = jsdom.window
	globalThis.document = jsdom.window.document
	globalThis.Text = jsdom.window.Text
	globalThis.Node = jsdom.window.Node
})
test.after(()=>{
	// @ts-expect-error TS2790
	globalThis.window = prev__window
	globalThis.document = prev__document
	globalThis.Text = prev__Text
	globalThis.Node = prev__Node
	render_api__use(undefined)
})
test('render_api__use', ()=>{
	equal(_, undefined)
	equal(attach, undefined)
	equal(bind_, undefined)
	equal(tagsNS, undefined)
	equal(tags, undefined)
	equal(svg_tags, undefined)
	equal(mathml_tags, undefined)
	equal(doc_html_, 'server-only')
	equal(server__element__proto, 'server-only')
	equal(hydrate, 'browser-only')
	render_api__use(browser__render_api)
	equal(_, browser__render_api._)
	equal(attach, browser__render_api.attach)
	equal(bind_, browser__render_api.bind_)
	equal(tagsNS, browser__render_api.tagsNS)
	equal(tags, browser__render_api.tags)
	equal((<tags_T<'browser', 'svg'>>svg_tags).svg().outerHTML, '<svg></svg>')
	equal(svg_tags_<'browser'>().svg().outerHTML, '<svg></svg>')
	equal((<tags_T<'browser', 'mathml'>>mathml_tags).math().outerHTML, '<math></math>')
	equal(mathml_tags_<'browser'>().math().outerHTML, '<math></math>')
	equal(doc_html_, 'server-only')
	equal(server__element__proto, 'server-only')
	equal(hydrate, browser__render_api.hydrate)
	render_api__use(server__render_api)
	equal(_, server__render_api._)
	equal(attach, server__render_api.attach)
	equal(bind_, server__render_api.bind_)
	equal(tagsNS, server__render_api.tagsNS)
	equal(tags, server__render_api.tags)
	equal(svg_tags, server__render_api.tagsNS('http://www.w3.org/2000/svg'))
	equal(mathml_tags, server__render_api.tagsNS('http://www.w3.org/1998/Math/MathML'))
	equal(doc_html_, server__render_api.doc_html_)
	equal(server__element__proto, server__render_api.server__element__proto)
	equal(hydrate, 'browser-only')
})
test.run()
