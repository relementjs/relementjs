import { memo_, sig_ } from 'ctx-core/rmemo'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { attach, bind_, doc_html_, server__element__proto, server__relement, tags, tagsNS } from './index.js'
const {
	a,
	body,
	br,
	button,
	div,
	head,
	input,
	hr,
	li,
	p,
	pre,
	span,
	title,
	ul
} = tags
test('server__relement', ()=>{
	equal(server__relement, { attach, bind_, tags, tagsNS, doc_html_, server__element__proto })
})
test('tags', ()=>{
	equal(div(
		p('👋Hello'),
		ul(
			li('🗺️World'),
			li(a({ href: 'https://github.com/relementjs/server/' }, '🍦ctx-core')),
		),
	).render(), '<div><p>👋Hello</p><ul><li>🗺️World</li><li><a href="https://github.com/relementjs/server/">🍦ctx-core</a></li></ul></div>')
})
test('elements without child', ()=>{
	equal(br().render(), '<br>')
	equal(hr({ class: 'large' }).render(), '<hr class="large">')
	// Children are ignored even when they are provided
	equal(br(div('Line')).render(), '<br>')
})
test('boolean prop', ()=>{
	equal(input({ type: 'checkbox', checked: false }).render(), '<input type="checkbox">')
	equal(input({ type: 'checkbox', checked: true }).render(), '<input type="checkbox" checked>')
	equal(input({ checked: false }).render(), '<input>')
	equal(input({ checked: true }).render(), '<input checked>')
})
test('escape', ()=>{
	equal(p('<input>').render(), '<p>&lt;input&gt;</p>')
	equal(div('a && b').render(), '<div>a &amp;&amp; b</div>')
	equal(div('<input a && b>').render(), '<div>&lt;input a &amp;&amp; b&gt;</div>')
})
test('escapeAttr', ()=>{
	equal(input({ value: '"text"' }).render(), '<input value="&quot;text&quot;">')
})
test('nested children', ()=>{
	equal(ul([li('Item 1'), li('Item 2'), li('Item 3')]).render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	// Deeply nested
	equal(ul([[li('Item 1'), [li('Item 2')]], li('Item 3')]).render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
})
test('null or undefined are ignored', ()=>{
	equal(ul(li('Item 1'), li('Item 2'), undefined, li('Item 3'), null).render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	equal(ul([li('Item 1'), li('Item 2'), undefined, li('Item 3'), null]).render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	// Deeply nested
	equal(ul([[undefined, li('Item 1'), null, [li('Item 2')]], null, li('Item 3'), undefined]).render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
})
test('attach|basic', ()=>{
	const dom = ul()
	equal(attach(dom, li('Item 1'), li('Item 2')), dom)
	equal(dom.render(), '<ul><li>Item 1</li><li>Item 2</li></ul>')
	equal(attach(dom, li('Item 3'), li('Item 4'), li('Item 5')), dom)
	equal(dom.render(), '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
	// No-op if no children specified
	equal(attach(dom), dom)
	equal(dom.render(), '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
})
test('attach|nested children', ()=>{
	const dom = ul()
	equal(attach(dom, [li('Item 1'), li('Item 2')]), dom)
	equal(dom.render(), '<ul><li>Item 1</li><li>Item 2</li></ul>')
	// Deeply nested
	equal(attach(dom, [[li('Item 3'), [li('Item 4')]], li('Item 5')]), dom)
	equal(dom.render(), '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
	// No-op if no children specified
	equal(attach(dom, [[[]]]), dom)
	equal(dom.render(), '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
})
test('attach|null or undefined are ignored', ()=>{
	const dom = ul()
	equal(attach(dom, li('Item 1'), li('Item 2'), undefined, li('Item 3'), null), dom)
	equal(dom.render(), '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	equal(attach(dom, [li('Item 4'), li('Item 5'), undefined, li('Item 6'), null]), dom)
	equal(dom.render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li></ul>')
	// Deeply nested
	equal(attach(dom, [[undefined, li('Item 7'), null, [li('Item 8')]], null, li('Item 9'), undefined]), dom)
	equal(dom.render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li></ul>')
	// No-op if no non-empty children specified
	equal(attach(dom, [[null, [undefined]], undefined], null), dom)
	equal(dom.render(),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li></ul>')
})
test('onclick handler', ()=>{
	{
		const dom = div(button({ onclick: 'alert("Hello")' }, 'Click me'))
		equal(dom.render(), '<div><button onclick="alert(&quot;Hello&quot;)">Click me</button></div>')
	}
	// {
	// 	const dom = div(button({ onClick: 'alert("Hello")' }, 'Click me'))
	// 	equal(dom.render(), '<div><button onclick="alert(&quot;Hello&quot;)">Click me</button></div>')
	// }
	{
		// Function-valued onclick handler will be skipped
		const dom = div(button({ onclick: ()=>alert('Hello') }, 'Click me'))
		equal(dom.render(), '<div><button>Click me</button></div>')
	}
})
test('tagsNS: svg', ()=>{
	const {
		circle,
		path,
		svg
	} = tagsNS<'svg'>('http://www.w3.org/2000/svg')
	const dom = svg({ width: '16px', viewBox: '0 0 50 50' },
		circle({ cx: '25', cy: '25', 'r': '20', stroke: 'black', 'stroke-width': '2', fill: 'yellow' }),
		circle({ cx: '16', cy: '20', 'r': '2', stroke: 'black', 'stroke-width': '2', fill: 'black' }),
		circle({ cx: '34', cy: '20', 'r': '2', stroke: 'black', 'stroke-width': '2', fill: 'black' }),
		path({ 'd': 'M 15 30 Q 25 40, 35 30', stroke: 'black', 'stroke-width': '2', fill: 'transparent' }),
	)
	equal(dom.render(),
		'<svg width="16px" viewbox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="yellow"></circle><circle cx="16" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><circle cx="34" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><path d="M 15 30 Q 25 40, 35 30" stroke="black" stroke-width="2" fill="transparent"></path></svg>')
})
test('tagsNS: math', ()=>{
	const {
		math,
		mi,
		mn,
		mo,
		mrow,
		msup
	} = tagsNS<'mathml'>('http://www.w3.org/1998/Math/MathML')
	const dom = math(msup(mi('e'), mrow(mi('i'), mi('π'))), mo('+'), mn('1'), mo('='), mn('0'))
	equal(dom.render(),
		'<math><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></math>')
})
test('dummy reactive', ()=>{
	const state1 = sig_(1)
	const state2 = memo_(()=>state1() * 2)
	const state3 = sig_('abc')
	const state4 = memo_(()=>state3().repeat(2))
	const state5 = sig_(false)
	const state6 = memo_(()=>!state5())
	const dom = div(
		state1, span(state2), p(()=>`Prefix - ${state3()}`), ()=>`- Suffix`,
		p({
			'data-index': state1,
			'data-id': ()=>state2() + 2,
			'data-title': state3,
			'data-text': ()=>`${'Prefix'} - ${'Suffix'}`,
		}, state1, state3, state4),
		button({ onclick: bind_(()=>state5() ? 'console.log("Hello")' : 'alert("Hello")') },
			'Button1'
		),
		button({
			onclick: bind_(
				()=>state6() ? ()=>console.log('Hello') : ()=>alert('Hello'))
		},
		'Button2'
		),
		()=>(state5() ? pre : div)(state3),
	)
	equal(dom.render(),
		'<div>1<span>2</span><p>Prefix - abc</p>- Suffix<p data-index="1" data-id="4" data-title="abc" data-text="Prefix - Suffix">1abcabcabc</p><button onclick="alert(&quot;Hello&quot;)">Button1</button><button>Button2</button><div>abc</div></div>')
})
test('html_', ()=>{
	equal(doc_html_(
		head(title('Hello')),
		body(div('World')),
	), '<!DOCTYPE html><html><head><title>Hello</title></head><body><div>World</div></body></html>')
	equal(doc_html_({ lang: 'en' },
		head(title('Hello')),
		body(div('World')),
	), '<!DOCTYPE html><html lang="en"><head><title>Hello</title></head><body><div>World</div></body></html>')
})
// Test cases for examples used in the documentation. Having the tests to ensure the examples
// are always correct.
test('example: van-plate-server', ()=>{
	equal(a({ href: 'https://github.com/relementjs/server/' }, '🍦ctx-core').render(), `<a href="https://github.com/relementjs/server/">🍦ctx-core</a>`)
	equal(button({ onclick: 'alert("Hello")' }, 'Click').render(),
		`<button onclick="alert(&quot;Hello&quot;)">Click</button>`)
	equal(input({ type: 'text', value: 'value' }).render(), `<input type="text" value="value">`)
})
test.run()
