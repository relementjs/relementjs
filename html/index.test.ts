import { browser__render_api } from '@rrenjs/browser'
import { server__render_api } from '@rrenjs/server'
import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { render_api__use } from '../render/index.js'
import { a_ } from '../svg/index.js'
import { body_, div_, head_, html_ } from './index.js'
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
	render_api__use(undefined)
})
test('server|html_ head_ body_ div_ a_', ()=>{
	render_api__use(server__render_api)
	equal(
		html_<'server'>(
			head_(),
			body_(
				div_({ id: 'div-id' },
					a_({ href: 'https://github.com/rrenjs/all' }, 'rrenjs'))
			)).render(),
		`<html><head></head><body><div id="div-id"><a href="https://github.com/rrenjs/all">rrenjs</a></div></body></html>`
	)
})
test('browser|html_ head_ body_ div_ a_', ()=>{
	jsdom = new JSDOM()
	// @ts-expect-error TS2322
	globalThis.window = jsdom.window
	globalThis.document = jsdom.window.document
	globalThis.Text = jsdom.window.Text
	globalThis.Node = jsdom.window.Node
	render_api__use(browser__render_api)
	equal(
		html_<'browser'>(
			head_(),
			body_(
				div_({ id: 'div-id' },
					a_({ href: 'https://github.com/rrenjs/all' }, 'rrenjs'))
			)).outerHTML,
		`<html><head></head><body><div id="div-id"><a href="https://github.com/rrenjs/all">rrenjs</a></div></body></html>`
	)
})
test.run()
