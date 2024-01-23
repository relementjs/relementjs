import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { prop_data__div_html, prop_data__div_o } from '../_test/index.js'
import { attach, doc_html_, fragment_, memo_, raw_, server__relement, sig_, tags, tagsNS } from './index.js'
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
	script,
	span,
	title,
	ul
} = tags
test('server__relement', ()=>{
	equal(server__relement, { attach, tags, tagsNS, fragment_, raw_ })
})
test('tags', ()=>{
	equal(
		div(
			p('👋Hello'),
			ul(
				li('🗺️World'),
				li(a({ href: 'https://github.com/relementjs/server/' }, '🍦relement')),
			),
		).toString(),
		'<div><p>👋Hello</p><ul><li>🗺️World</li><li><a href="https://github.com/relementjs/server/">🍦relement</a></li></ul></div>')
})
test('tags|undefined & null prop', ()=>{
	equal('' + div({ id: undefined }), '<div></div>')
	equal('' + div({ id: null }), '<div></div>')
})
test('tags|script|expand', ()=>{
	equal('' + script(), '<script></script>')
})
test('tags|prop|data- props', ()=>{
	equal('' + div({ 'data-foo': JSON.stringify(prop_data__div_o) }), prop_data__div_html)
})
test('tags|void', ()=>{
	equal('' + br(), '<br>')
	equal('' + hr({ class: 'large' }), '<hr class="large">')
	// children are not rendered
	// @ts-expect-error TS2554
	equal('' + br(div('foo'), 'bar'), '<br>')
	// @ts-expect-error TS2554
	equal('' + hr({ class: 'large' }, div('foo'), 'bar'), '<hr class="large">')
})
test('boolean prop', ()=>{
	equal('' + input({ type: 'checkbox', checked: false }), '<input type="checkbox">')
	equal('' + input({ type: 'checkbox', checked: true }), '<input type="checkbox" checked>')
	equal('' + input({ checked: false }), '<input>')
	equal('' + input({ checked: true }), '<input checked>')
})
test('escape', ()=>{
	equal('' + p('<input>'), '<p>&lt;input&gt;</p>')
	equal('' + div('a && b'), '<div>a &amp;&amp; b</div>')
	equal('' + div('<input a && b>'), '<div>&lt;input a &amp;&amp; b&gt;</div>')
})
test('escape|attr', ()=>{
	equal('' + input({ value: '"text"' }), '<input value="&quot;text&quot;">')
})
test('nested children', ()=>{
	equal('' + ul([li('Item 1'), li('Item 2'), li('Item 3')]),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	// Deeply nested
	equal('' + ul([[li('Item 1'), [li('Item 2')]], li('Item 3')]),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
})
test('null or undefined are ignored', ()=>{
	equal('' + ul(li('Item 1'), li('Item 2'), undefined, li('Item 3'), null),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	equal('' + ul([li('Item 1'), li('Item 2'), undefined, li('Item 3'), null]),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	// Deeply nested
	equal('' + ul([[undefined, li('Item 1'), null, [li('Item 2')]], null, li('Item 3'), undefined]),
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
})
test('inside template strings', ()=>{
	equal(`${
		div(
			p('👋Hello'),
			ul(
				li('🗺️World'),
				li(a({ href: 'https://github.com/relementjs/server/' }, '🍦relement')),
			),)
	}`,
	'<div><p>👋Hello</p><ul><li>🗺️World</li><li><a href="https://github.com/relementjs/server/">🍦relement</a></li></ul></div>')
})
test('fragment_', ()=>{
	equal('' + fragment_([
		'<div>Yo!</div>',
		undefined,
		null,
	],
	div(
		p('👋Hello'),
		ul(
			li('🗺️World'),
			li(a({ href: 'https://github.com/relementjs/server/' }, '🍦relement'))))
	),
	'&lt;div&gt;Yo!&lt;/div&gt;<div><p>👋Hello</p><ul><li>🗺️World</li><li><a href="https://github.com/relementjs/server/">🍦relement</a></li></ul></div>')
})
test('raw_', ()=>{
	equal('' + raw_('<div>row 0</div><div>row 1</div><div>row 2</div>'),
		'<div>row 0</div><div>row 1</div><div>row 2</div>')
	equal('' + raw_(undefined), '')
	equal('' + raw_(null), '')
})
test('raw_|memo', ()=>{
	const html$ = sig_('<div>row 0</div><div>row 1</div><div>row 2</div>')
	const raw = raw_(html$)
	equal('' + raw, '<div>row 0</div><div>row 1</div><div>row 2</div>')
	html$._ = '<div>row 0</div><div>row 1</div>'
	equal('' + raw, '<div>row 0</div><div>row 1</div>')
})
test('attach|basic', ()=>{
	const dom = ul()
	equal(attach(dom, li('Item 1'), li('Item 2')), dom)
	equal('' + dom, '<ul><li>Item 1</li><li>Item 2</li></ul>')
	equal(attach(dom, li('Item 3'), li('Item 4'), li('Item 5')), dom)
	equal('' + dom, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
	// No-op if no children specified
	equal(attach(dom), dom)
	equal('' + dom, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
})
test('attach|nested children', ()=>{
	const dom = ul()
	equal(attach(dom, [li('Item 1'), li('Item 2')]), dom)
	equal('' + dom, '<ul><li>Item 1</li><li>Item 2</li></ul>')
	// Deeply nested
	equal(attach(dom, [[li('Item 3'), [li('Item 4')]], li('Item 5')]), dom)
	equal('' + dom, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
	// No-op if no children specified
	equal(attach(dom, [[[]]]), dom)
	equal('' + dom, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
})
test('attach|null or undefined are ignored', ()=>{
	const dom = ul()
	equal(attach(dom, li('Item 1'), li('Item 2'), undefined, li('Item 3'), null), dom)
	equal('' + dom, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	equal(attach(dom, [li('Item 4'), li('Item 5'), undefined, li('Item 6'), null]), dom)
	equal('' + dom,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li></ul>')
	// Deeply nested
	equal(attach(dom, [[undefined, li('Item 7'), null, [li('Item 8')]], null, li('Item 9'), undefined]), dom)
	equal('' + dom,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li></ul>')
	// No-op if no non-empty children specified
	equal(attach(dom, [[null, [undefined]], undefined], null), dom)
	equal('' + dom,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li></ul>')
})
test('onclick handler', ()=>{
	{
		const dom = div(button({ onclick: 'alert("Hello")' }, 'Click me'))
		equal('' + dom, '<div><button onclick="alert(&quot;Hello&quot;)">Click me</button></div>')
	}
	{
		const dom = div(button({ onClick: 'alert("Hello")' }, 'Click me'))
		equal('' + dom, '<div><button onclick="alert(&quot;Hello&quot;)">Click me</button></div>')
	}
	{
		// Function-valued onclick handler will be skipped
		const dom = div(button({ onclick: ()=>alert('Hello') }, 'Click me'))
		equal('' + dom, '<div><button>Click me</button></div>')
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
	equal('' + dom,
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
	equal('' + dom,
		'<math><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></math>')
})
test('reactive', ()=>{
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
		button({ onclick: memo_(()=>state5() ? 'console.log("Hello")' : 'alert("Hello")') },
			'Button1'),
		button({
			onclick: memo_(()=>(state6() ? ()=>console.log('Hello') : ()=>alert('Hello'))),
			onhover: memo_(()=>()=>alert('Hover')),
		},
		'Button2'
		),
		()=>(state5() ? pre : div)(state3),
	)
	equal('' + dom,
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
test('example: server', ()=>{
	equal('' + a({ href: 'https://github.com/relementjs/server/' }, '🍦relement'),
		`<a href="https://github.com/relementjs/server/">🍦relement</a>`)
	equal('' + button({ onclick: 'alert("Hello")' }, 'Click'),
		`<button onclick="alert(&quot;Hello&quot;)">Click</button>`)
	equal('' + input({ type: 'text', value: 'value' }), `<input type="text" value="value">`)
})
test.run()
