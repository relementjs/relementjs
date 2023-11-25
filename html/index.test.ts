import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { browser__rel } from '../browser/index.js'
import { rel__use } from '../isomorphic/index.js'
import { server__rel } from '../server/index.js'
import { a_, body_, div_, head_, html_ } from './index.js'
let jsdom:JSDOM, prev__window:Window, prev__document:Document, prev__Text:typeof Text, prev__Node:typeof Node
test.before(()=>{
	prev__window = globalThis.window
	prev__document = globalThis.document
	prev__Text = globalThis.Text
	prev__Node = globalThis.Node
})
test.after(()=>{
	// @ts-expect-error TS2790
	globalThis.window = prev__window
	globalThis.document = prev__document
	globalThis.Text = prev__Text
	globalThis.Node = prev__Node
	rel__use(undefined)
})
test('server|html_ head_ body_ div_ a_', ()=>{
	rel__use(server__rel)
	equal(
		html_<'server'>(
			head_(),
			body_(
				div_({ id: 'div-id' },
					a_({ href: 'https://github.com/reljs/all' }, 'reljs'))
			)).render(),
		`<html><head></head><body><div id="div-id"><a href="https://github.com/reljs/all">reljs</a></div></body></html>`
	)
})
test('browser|html_ head_ body_ div_ a_', ()=>{
	jsdom = new JSDOM()
	// @ts-expect-error TS2322
	globalThis.window = jsdom.window
	globalThis.document = jsdom.window.document
	globalThis.Text = jsdom.window.Text
	globalThis.Node = jsdom.window.Node
	rel__use(browser__rel)
	equal(
		html_<'browser'>(
			head_(),
			body_(
				div_({ id: 'div-id' },
					a_({ href: 'https://github.com/reljs/all' }, 'reljs'))
			)).outerHTML,
		`<html><head></head><body><div id="div-id"><a href="https://github.com/reljs/all">reljs</a></div></body></html>`
	)
})
test.run()
