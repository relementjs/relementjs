import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { browser__relement, memo_, sig_ } from '../../browser/index.js'
import { li_, ul_ } from '../../html/index.js'
import { server__relement } from '../../server/index.js'
import { item_list_, relement__use } from '../index.js'
let jsdom:JSDOM
let prev__window:Window
let prev__document:Document
let prev__Text:typeof Text
let prev__Node:typeof Node
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
	relement__use(null)
})
test('item_list_|browser', async ()=>{
	relement__use(browser__relement)
	const ta = { t: 'a' }
	const tb = { t: 'b' }
	const tc = { t: 'c' }
	const td = { t: 'd' }
	const te = { t: 'e' }
	const tA = { t: 'A' }
	const a1$ = sig_([ta, tb, tc, td,])
	const ul = item_list_<
		'browser',
		HTMLUListElement,
		{ t:string }
	>(
		ul_<'browser'>(),
		a1$,
		(item, idx$)=>
			li_({
				id: item.t
			}, memo_(()=>item.t + '-' + idx$()))
	)
	equal(ul.outerHTML, '<ul><li id="a">a-0</li><li id="b">b-1</li><li id="c">c-2</li><li id="d">d-3</li></ul>')
	ul.querySelector('#b')!.classList.add('text-bold')
	equal(ul.outerHTML, '<ul><li id="a">a-0</li><li id="b" class="text-bold">b-1</li><li id="c">c-2</li><li' +
		' id="d">d-3</li></ul>')
	a1$._ = [tA, tb, te, tc,]
	equal(ul.outerHTML, '<ul><li id="A">A-0</li><li id="b" class="text-bold">b-1</li><li id="e">e-2</li><li' +
		' id="c">c-3</li></ul>')
})
test('item_list_|server', async ()=>{
	relement__use(server__relement)
	const ta = { t: 'a' }
	const tb = { t: 'b' }
	const tc = { t: 'c' }
	const td = { t: 'd' }
	const te = { t: 'e' }
	const tA = { t: 'A' }
	const a1$ = sig_([ta, tb, tc, td,])
	const ul = item_list_(
		ul_<'browser'>(),
		a1$,
		(item, idx$)=>
			li_({
				id: item.t
			}, memo_(()=>item.t + '-' + idx$()))
	)
	equal('' + ul, '<ul><li id="a">a-0</li><li id="b">b-1</li><li id="c">c-2</li><li id="d">d-3</li></ul>')
	a1$._ = [tA, tb, te, tc,]
	equal('' + ul, '<ul><li id="A">A-0</li><li id="b">b-1</li><li id="e">e-2</li><li' +
		' id="c">c-3</li></ul>')
})
test.run()
