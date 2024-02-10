import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal, throws } from 'uvu/assert'
import { attach, multi_hyop, single_hyop, tags } from '../index.js'
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
test('single_hyop', with_connected_dom(async connected_dom=>{
	const el_a:[string, Element][] = []
	const fn0 = (el:Element)=>el_a.push(['fn0', el])
	const div0 = div({ 'hyop': 'fn0' })
	const fn1 = (el:Element)=>el_a.push(['fn1', el])
	const div1 = div({ 'hyop': 'fn1' })
	attach(connected_dom, div(), div0, div1, div())
	single_hyop(document, { fn0, fn1 })
	equal(el_a, [['fn0', div0], ['fn1', div1]])
}))
test('single_hyop|error', with_connected_dom(async connected_dom=>{
	const el_a:[string, Element][] = []
	const div0 = div({ 'hyop': 'no-fn' })
	const fn1 = (el:Element)=>el_a.push(['fn1', el])
	const div1 = div({ 'hyop': 'fn1' })
	attach(connected_dom, div(), div0, div1, div())
	throws(()=>single_hyop(document, { fn1 }), 'missing key: no-fn')
}))
test('multi_hyop', with_connected_dom(async connected_dom=>{
	const el_a:[string, Element][] = []
	const fn0 = (el:Element)=>el_a.push(['fn0', el])
	const fn1 = (el:Element)=>el_a.push(['fn1', el])
	const div0 = div({ 'hyop': 'fn0 fn1' })
	attach(connected_dom, div(), div0, div())
	multi_hyop(document, { fn0, fn1 })
	equal(el_a, [['fn0', div0], ['fn1', div0]])
}))
test('multi_hyop|error', with_connected_dom(async connected_dom=>{
	const el_a:[string, Element][] = []
	const fn1 = (el:Element)=>el_a.push(['fn1', el])
	const div0 = div({ 'hyop': 'no-fn fn1' })
	attach(connected_dom, div(), div0, div())
	throws(()=>multi_hyop(document, { fn1 }), 'missing key: no-fn')
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
