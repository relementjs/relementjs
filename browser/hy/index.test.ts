import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal, throws } from 'uvu/assert'
import { attach, hy__bind, tags } from '../index.js'
let jsdom:JSDOM
let prev__window:Window
let prev__document:Document
let prev__Text:typeof Text
let prev__Node:typeof Node
const { div } = tags
test.before(()=>{
	jsdom = new JSDOM()
	prev__window = globalThis.window
	// @ts-expect-error TS2322
	globalThis.window = jsdom.window
	prev__document = globalThis.document
	globalThis.document = jsdom.window.document
	prev__Text = globalThis.Text
	globalThis.Text = jsdom.window.Text
	prev__Node = globalThis.Node
	globalThis.Node = jsdom.window.Node
})
test.after(()=>{
	// @ts-expect-error TS2790
	globalThis.window = prev__window
	globalThis.document = prev__document
	globalThis.Text = prev__Text
	globalThis.Node = prev__Node
})
test('hy__bind', with_connected_dom(async connected_dom=>{
	const el_a:Element[] = []
	const fn0 = (el:Element)=>el_a.push(el)
	const div0 = div({ 'hy__bind': 'fn0' })
	const fn1 = (el:Element)=>el_a.push(el)
	const div1 = div({ 'hy__bind': 'fn1' })
	attach(connected_dom, div(), div0, div1, div())
	hy__bind(document, { fn0, fn1 })
	equal(el_a, [div0, div1])
}))
test('hy__bind|error', with_connected_dom(async connected_dom=>{
	const el_a:Element[] = []
	const div0 = div({ 'hy__bind': 'no-fn' })
	const fn1 = (el:Element)=>el_a.push(el)
	const div1 = div({ 'hy__bind': 'fn1' })
	attach(connected_dom, div(), div0, div1, div())
	throws(()=>hy__bind(document, { fn1 }), 'missing key: no-fn')
}))
test.run()
function with_connected_dom(func:(dom:Element)=>void|Promise<void>) {
	return async ()=>{
		const dom = div({ class: 'hidden' })
		attach(document.body, dom)
		try {
			await func(dom)
		} finally {
			dom.remove()
		}
	}
}
