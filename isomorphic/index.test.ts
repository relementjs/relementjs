import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { browser__relement } from '../browser/index.js'
import { div_ } from '../html/index.js'
import { server__relement } from '../server/index.js'
import {
	attach,
	fragment_,
	mathml_tags,
	mathml_tags_,
	raw_,
	relement__use,
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
	relement__use(undefined)
})
test('relement__use', ()=>{
	relement__use(undefined)
	equal(attach, undefined)
	equal(tagsNS, undefined)
	equal(tags, undefined)
	equal(svg_tags, undefined)
	equal(mathml_tags, undefined)
	relement__use(browser__relement)
	equal(attach, browser__relement.attach)
	equal(tagsNS, browser__relement.tagsNS)
	equal(tags, browser__relement.tags)
	equal((<tags_T<'browser', 'svg'>>svg_tags).svg().outerHTML, '<svg></svg>')
	equal(svg_tags_<'browser'>().svg().outerHTML, '<svg></svg>')
	equal((<tags_T<'browser', 'mathml'>>mathml_tags).math().outerHTML, '<math></math>')
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
	equal(svg_tags, server__relement.tagsNS('http://www.w3.org/2000/svg'))
	equal(mathml_tags, server__relement.tagsNS('http://www.w3.org/1998/Math/MathML'))
	equal(
		fragment_<'server'>(div_('row0'), div_('row1'), div_('row2')).toString(),
		'<div>row0</div><div>row1</div><div>row2</div>')
	equal(
		raw_<'server'>('<div>row0</div><div>row1</div><div>row2</div>').toString(),
		'<div>row0</div><div>row1</div><div>row2</div>')
})
test.run()
