import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { browser__full__relement } from '../browser/index.js'
import { relement__use } from '../isomorphic/index.js'
import { server__full__relement } from '../server/index.js'
import { circle_, path_, svg_ } from './index.js'
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
test('server|svg ', ()=>{
	relement__use(server__full__relement)
	equal(
		svg_<'server'>({ width: '16px', viewBox: '0 0 50 50' },
			circle_({ cx: '25', cy: '25', 'r': '20', stroke: 'black', 'stroke-width': '2', fill: 'yellow' }),
			circle_({ cx: '16', cy: '20', 'r': '2', stroke: 'black', 'stroke-width': '2', fill: 'black' }),
			circle_({ cx: '34', cy: '20', 'r': '2', stroke: 'black', 'stroke-width': '2', fill: 'black' }),
			path_({ 'd': 'M 15 30 Q 25 40, 35 30', stroke: 'black', 'stroke-width': '2', fill: 'transparent' }),
		).render(),
		'<svg width="16px" viewbox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="yellow"></circle><circle cx="16" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><circle cx="34" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><path d="M 15 30 Q 25 40, 35 30" stroke="black" stroke-width="2" fill="transparent"></path></svg>')
})
test('browser|svg ', ()=>{
	jsdom = new JSDOM()
	// @ts-expect-error TS2322
	globalThis.window = jsdom.window
	globalThis.document = jsdom.window.document
	globalThis.Text = jsdom.window.Text
	globalThis.Node = jsdom.window.Node
	relement__use(browser__full__relement)
	equal(
		svg_<'browser'>({ width: '16px', viewBox: '0 0 50 50' }).outerHTML,
		'<svg width="16px" viewBox="0 0 50 50"></svg>')
	equal(
		svg_<'browser'>({ width: '16px', viewBox: '0 0 50 50' },
			circle_({ cx: '25', cy: '25', 'r': '20', stroke: 'black', 'stroke-width': '2', fill: 'yellow' }),
			circle_({ cx: '16', cy: '20', 'r': '2', stroke: 'black', 'stroke-width': '2', fill: 'black' }),
			circle_({ cx: '34', cy: '20', 'r': '2', stroke: 'black', 'stroke-width': '2', fill: 'black' }),
			path_({ 'd': 'M 15 30 Q 25 40, 35 30', stroke: 'black', 'stroke-width': '2', fill: 'transparent' }),
		).outerHTML,
		'<svg width="16px" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="yellow"></circle><circle cx="16" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><circle cx="34" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><path d="M 15 30 Q 25 40, 35 30" stroke="black" stroke-width="2" fill="transparent"></path></svg>')
})
test.run()
