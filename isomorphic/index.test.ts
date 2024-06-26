import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { browser__relement } from '../browser/index.js'
import { div_ } from '../html/index.js'
import { mathml_tags_ } from '../mathml/index.js'
import { server__relement } from '../server/index.js'
import { svg_tags_ } from '../svg/index.js'
import { attach, fragment_, raw_, relement__use, tags, tagsNS } from './index.js'
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
	relement__use(undefined)
})
test('relement__use', ()=>{
	relement__use(undefined)
	equal(attach, undefined)
	equal(tagsNS, undefined)
	equal(tags, undefined)
	relement__use(browser__relement)
	equal(attach, browser__relement.attach)
	equal(tagsNS, browser__relement.tagsNS)
	equal(tags, browser__relement.tags)
	equal(svg_tags_<'browser'>().svg().outerHTML, '<svg></svg>')
	equal(mathml_tags_<'browser'>().math().outerHTML, '<math></math>')
	equal(
		div_<'browser'>(fragment_(div_('row0'), div_('row1'), div_('row2'))).innerHTML,
		'<div>row0</div><div>row1</div><div>row2</div>')
	equal(
		div_<'browser'>(raw_('<div>row0</div><div>row1</div><div>row2</div>')).innerHTML,
		'<div>row0</div><div>row1</div><div>row2</div>')
	relement__use(server__relement)
	equal(attach, server__relement.attach)
	equal(tagsNS, server__relement.tagsNS)
	equal(tags, server__relement.tags)
	equal(tagsNS, server__relement.tagsNS)
	equal(
		fragment_<'server'>(div_('row0'), div_('row1'), div_('row2')).toString(),
		'<div>row0</div><div>row1</div><div>row2</div>')
	equal(
		raw_<'server'>('<div>row0</div><div>row1</div><div>row2</div>').toString(),
		'<div>row0</div><div>row1</div><div>row2</div>')
})
test.run()
