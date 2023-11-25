import { browser__rel } from '../browser/index.js'
import { server__rel } from '../server/index.js'
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
	rel__use,
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
	rel__use(undefined)
})
test('rel__use', ()=>{
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
	rel__use(browser__rel)
	equal(_, browser__rel._)
	equal(attach, browser__rel.attach)
	equal(bind_, browser__rel.bind_)
	equal(tagsNS, browser__rel.tagsNS)
	equal(tags, browser__rel.tags)
	equal((<tags_T<'browser', 'svg'>>svg_tags).svg().outerHTML, '<svg></svg>')
	equal(svg_tags_<'browser'>().svg().outerHTML, '<svg></svg>')
	equal((<tags_T<'browser', 'mathml'>>mathml_tags).math().outerHTML, '<math></math>')
	equal(mathml_tags_<'browser'>().math().outerHTML, '<math></math>')
	equal(doc_html_, 'server-only')
	equal(server__element__proto, 'server-only')
	equal(hydrate, browser__rel.hydrate)
	rel__use(server__rel)
	equal(_, server__rel._)
	equal(attach, server__rel.attach)
	equal(bind_, server__rel.bind_)
	equal(tagsNS, server__rel.tagsNS)
	equal(tags, server__rel.tags)
	equal(svg_tags, server__rel.tagsNS('http://www.w3.org/2000/svg'))
	equal(mathml_tags, server__rel.tagsNS('http://www.w3.org/1998/Math/MathML'))
	equal(doc_html_, server__rel.doc_html_)
	equal(server__element__proto, server__rel.server__element__proto)
	equal(hydrate, 'browser-only')
})
test.run()
