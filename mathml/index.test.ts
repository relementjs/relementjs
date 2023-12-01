import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { browser__base__relement } from '../browser/index.js'
import { relement__use } from '../isomorphic/index.js'
import { server__base__relement } from '../server/index.js'
import { math_, mi_, mn_, mo_, mrow_, msup_ } from './index.js'
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
	relement__use(undefined)
})
test('server|mathml', ()=>{
	relement__use(server__base__relement)
	equal(
		math_<'server'>(
			msup_(
				mi_('e'),
				mrow_(
					mi_('i'),
					mi_('π'))),
			mo_('+'),
			mn_('1'),
			mo_('='),
			mn_('0')
		).toString(),
		'<math><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></math>')
})
test('browser|mathml', ()=>{
	jsdom = new JSDOM()
	// @ts-expect-error TS2322
	globalThis.window = jsdom.window
	globalThis.document = jsdom.window.document
	globalThis.Text = jsdom.window.Text
	globalThis.Node = jsdom.window.Node
	relement__use(browser__base__relement)
	equal(
		math_<'browser'>(
			msup_(
				mi_('e'),
				mrow_(
					mi_('i'),
					mi_('π'))),
			mo_('+'),
			mn_('1'),
			mo_('='),
			mn_('0')
		).outerHTML,
		'<math><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></math>')
})
test.run()
