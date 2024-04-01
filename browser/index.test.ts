import { sleep, tup } from 'ctx-core/function'
import { JSDOM } from 'jsdom'
import { test } from 'uvu'
import { equal, ok } from 'uvu/assert'
import { prop_data__div_html, prop_data__div_o } from '../_test/index.js'
import {
	_,
	attach,
	browser__relement,
	fragment_,
	hydrate,
	memo_,
	memosig_,
	raw_,
	sig_,
	type sig_T,
	tags,
	tagsNS
} from './index.js'
const skip_long = process.env.SKIP_LONG ? parseInt(process.env.SKIP_LONG) : false
const skip_long_test = skip_long ? test.skip : test
let jsdom:JSDOM
let prev__window:Window
let prev__document:Document
let prev__Text:typeof Text
let prev__Node:typeof Node
const waitMsOnDomUpdates = 5
const dom_M_custom = new WeakMap<Node, never>
const {
	a,
	button,
	div,
	input,
	li,
	p,
	pre,
	span,
	ul
} = tags
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
test('browser__relement', ()=>{
	equal(browser__relement, { attach, tags, tagsNS, fragment_, raw_, })
})
test('tags|basic', ()=>{
	const dom = div(
		p('👋Hello'),
		ul(
			li('🗺️World'),
			li(a({ href: 'https://github.com/relementjs/browser' }, '🍦ctx-core/ui--browser')),
		),
	)
	equal(dom.outerHTML,
		'<div><p>👋Hello</p><ul><li>🗺️World</li><li><a href="https://github.com/relementjs/browser">🍦ctx-core/ui--browser</a></li></ul></div>')
})
test('tags|undefined & null prop', ()=>{
	equal(div({ id: undefined }).outerHTML, '<div id=""></div>')
	equal(div({ id: null }).outerHTML, '<div id=""></div>')
	equal(div({ custom: undefined }).outerHTML, '<div></div>')
	equal(div({ custom: null }).outerHTML, '<div></div>')
})
test('tags|onclick', ()=>{
	{
		const dom = div(
			button({ onclick: ()=>attach(dom, p('Button clicked!')) }))
		dom.querySelector('button')!.click()
		equal(dom.outerHTML, '<div><button></button><p>Button clicked!</p></div>')
	}
	{
		// Use `onClick` instead of `onclick` so that attribute instead of property will be set.
		const dom = div(button({ onClick: 'alert("Hello")' }, 'Click me'))
		equal(dom.outerHTML, '<div><button onclick="alert(&quot;Hello&quot;)">Click me</button></div>')
	}
})
test('tags|escape', ()=>{
	equal(p('<input>').outerHTML, '<p>&lt;input&gt;</p>')
	equal(div('a && b').outerHTML, '<div>a &amp;&amp; b</div>')
	equal(div('<input a && b>').outerHTML, '<div>&lt;input a &amp;&amp; b&gt;</div>')
})
test('tags|nested children', ()=>{
	equal(ul([li('Item 1'), li('Item 2'), li('Item 3')]).outerHTML,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	// Deeply nested
	equal(ul([[li('Item 1'), [li('Item 2')]], li('Item 3')]).outerHTML,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
})
test('tags|null or undefined are ignored', ()=>{
	equal(ul(li('Item 1'), li('Item 2'), undefined, li('Item 3'), null).outerHTML,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	equal(ul([li('Item 1'), li('Item 2'), undefined, li('Item 3'), null]).outerHTML,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	// Deeply nested
	equal(ul([[undefined, li('Item 1'), null, [li('Item 2')]], null, li('Item 3'), undefined]).outerHTML,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
})
test('tags|null prop value', ()=>{
	const dom = button({ onclick: null })
	ok(dom.onclick === null)
})
test('tags|prop|data-*', ()=>{
	const dom = tags.section()
	dom.innerHTML = prop_data__div_html
	equal(JSON.parse((dom.firstChild! as HTMLDivElement).dataset.foo!), prop_data__div_o)
})
test('tags|prop|sig|connected', with_connected_dom(async connected_dom=>{
	const href = sig_('http://example.com/')
	const dom = a({ href }, 'Test Link')
	attach(connected_dom, dom)
	equal(dom.href, 'http://example.com/')
	href.set('https://github.com/ctx-core/rmemo/')
	await sleep(waitMsOnDomUpdates)
	equal(dom.href, 'https://github.com/ctx-core/rmemo/')
}))
test('tags|prop|sig|disconnected', async ()=>{
	const href = sig_('http://example.com/')
	const dom = a({ href }, 'Test Link')
	equal(dom.href, 'http://example.com/')
	href.set('https://github.com/ctx-core/rmemo/')
	await sleep(waitMsOnDomUpdates)
	// href won't change as dom is not connected to document
	equal(dom.href, 'https://github.com/ctx-core/rmemo/')
})
test('tags|onclick|sig|connected', with_connected_dom(async connected_dom=>{
	const dom = div()
	attach(connected_dom, dom)
	const onclick = sig_<(()=>Element)|null>(()=>
		attach(dom, p('Button clicked!')))
	attach(dom, button({ onclick }))
	dom.querySelector('button')!.click()
	equal(dom.outerHTML, '<div><button></button><p>Button clicked!</p></div>')
	onclick.set(()=>attach(dom, div('Button clicked!')))
	await sleep(waitMsOnDomUpdates)
	dom.querySelector('button')!.click()
	equal(dom.outerHTML, '<div><button></button><p>Button clicked!</p><div>Button clicked!</div></div>')
	onclick.set(null)
	await sleep(waitMsOnDomUpdates)
	dom.querySelector('button')!.click()
	equal(dom.outerHTML, '<div><button></button><p>Button clicked!</p><div>Button clicked!</div></div>')
}))
test('tags|onclick|sig|disconnected', async ()=>{
	const dom = div()
	const handler = sig_(()=>attach(dom, p('Button clicked!')))
	attach(dom, button({ onclick: handler }))
	dom.querySelector('button')!.click()
	equal(dom.outerHTML, '<div><button></button><p>Button clicked!</p></div>')
	handler.set(()=>attach(dom, div('Button clicked!')))
	await sleep(waitMsOnDomUpdates)
	dom.querySelector('button')!.click()
	equal(dom.outerHTML, '<div><button></button><p>Button clicked!</p><div>Button clicked!</div></div>')
})
test('tags|prop|fn|rmemo deps|connected', with_connected_dom(async connected_dom=>{
	const host$ = sig_('example.com')
	const path$ = sig_('/hello')
	const dom = a({ href: memo_(()=>`https://${host$()}${path$()}`) }, 'Test Link')
	attach(connected_dom, dom)
	equal(dom.href, 'https://example.com/hello')
	host$.set('github.com/ctx-core/rmemo')
	path$.set('/start')
	await sleep(waitMsOnDomUpdates)
	equal(dom.href, 'https://github.com/ctx-core/rmemo/start')
}))
test('tags|prop|fn|rmemo deps|disconnected', async ()=>{
	const host$ = sig_('example.com')
	const path$ = sig_('/hello')
	const dom = a({ href: memo_(()=>`https://${host$()}${path$()}`) }, 'Test Link')
	equal(dom.href, 'https://example.com/hello')
	host$.set('github.com/ctx-core/rmemo')
	path$.set('/start')
	await sleep(waitMsOnDomUpdates)
	equal(dom.href, 'https://github.com/ctx-core/rmemo/start')
})
test('tags|prop|fn|non-rmemo deps|connected', with_connected_dom(async connected_dom=>{
	const host$ = sig_('example.com')
	const path = '/hello'
	const dom = a({ href: memo_(()=>`https://${host$()}${path}`) }, 'Test Link')
	attach(connected_dom, dom)
	equal(dom.href, 'https://example.com/hello')
	host$.set('github.com/ctx-core/rmemo')
	await sleep(waitMsOnDomUpdates)
	equal(dom.href, 'https://github.com/ctx-core/rmemo/hello')
}))
test('tags|prop|fn|non-rmemo deps|disconnected', with_connected_dom(async connected_dom=>{
	const host = sig_('example.com')
	const path = '/hello'
	const dom = a({ href: _(()=>`https://${host()}${path}`) }, 'Test Link')
	attach(connected_dom, dom)
	equal(dom.href, 'https://example.com/hello')
	host.set('github.com/ctx-core/rmemo')
	await sleep(waitMsOnDomUpdates)
	equal(dom.href, 'https://github.com/ctx-core/rmemo/hello')
}))
test('tags|prop|fn|rmemo deps|error|connected', with_connected_dom(async root_dom=>{
	const text$ = sig_('hello')
	const dom = div([
		div({
			class: ()=>{
				if (text$() === 'fail') throw new Error()
				return text$()
			},
			'data-name': text$,
		}, text$),
		div({
			class: ()=>{
				if (text$() === 'fail') throw new Error()
				return text$()
			},
			'data-name': text$,
		}, text$)
	])
	attach(root_dom, dom)
	equal(dom.outerHTML,
		'<div><div class="hello" data-name="hello">hello</div><div class="hello" data-name="hello">hello</div></div>')
	text$.set('fail')
	await sleep(waitMsOnDomUpdates)
	// The binding function for `class` property throws an error.
	// We want to validate the `class` property won't be updated because of the error,
	// but other properties and child nodes are updated as usual.
	equal(dom.outerHTML,
		'<div><div class="hello" data-name="fail">fail</div><div class="hello" data-name="fail">fail</div></div>')
}))
test('tags|prop|fn|rmemo deps|error|disconnected', async ()=>{
	const text = sig_('hello')
	const dom = div(
		div(
			{
				class: ()=>{
					if (text() === 'fail') throw new Error()
					return text()
				},
				'data-name': text,
			},
			text,
		),
		div(
			{
				class: ()=>{
					if (text() === 'fail') throw new Error()
					return text()
				},
				'data-name': text,
			},
			text,
		),
	)
	equal(dom.outerHTML,
		'<div><div class="hello" data-name="hello">hello</div><div class="hello" data-name="hello">hello</div></div>')
	text.set('fail')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML,
		'<div><div class="hello" data-name="fail">fail</div><div class="hello" data-name="fail">fail</div></div>')
})
test('tags|onclick|rmemo deps|connected', with_connected_dom(async connected_dom=>{
	const elementName = sig_<keyof HTMLElementTagNameMap|''>('p')
	attach(connected_dom, button({
		onclick: memo_(()=>{
			const name = elementName() as 'p'|'div'
			return name ? ()=>attach(connected_dom, tags[name]('Button clicked!')) : null
		}),
	}))
	connected_dom.querySelector('button')!.click()
	equal(connected_dom.innerHTML, '<button></button><p>Button clicked!</p>')
	elementName.set('div')
	await sleep(waitMsOnDomUpdates)
	connected_dom.querySelector('button')!.click()
	equal(connected_dom.innerHTML, '<button></button><p>Button clicked!</p><div>Button clicked!</div>')
	elementName.set('')
	await sleep(waitMsOnDomUpdates)
	connected_dom.querySelector('button')!.click()
	equal(connected_dom.innerHTML, '<button></button><p>Button clicked!</p><div>Button clicked!</div>')
}))
test('tags|onclick|rmemo deps|disconnected', async ()=>{
	const dom = div()
	const elementName = sig_('p')
	attach(dom, button({
		onclick: memo_(()=>{
			return ()=>{
				const name = elementName() as 'p'|'div'
				return name ? attach(dom, tags[name]('Button clicked!')) : null
			}
		}),
	}))
	dom.querySelector('button')!.click()
	equal(dom.innerHTML, '<button></button><p>Button clicked!</p>')
	elementName.set('div')
	await sleep(waitMsOnDomUpdates)
	dom.querySelector('button')!.click()
	equal(dom.innerHTML, '<button></button><p>Button clicked!</p><div>Button clicked!</div>')
	elementName.set('')
	await sleep(waitMsOnDomUpdates)
	dom.querySelector('button')!.click()
	equal(dom.innerHTML, '<button></button><p>Button clicked!</p><div>Button clicked!</div>')
})
test('tags|attributes|data-|connected', with_connected_dom(async connected_dom=>{
	const lineNum = sig_(1)
	const dom = div({
		'data-type': 'line',
		'data-id': lineNum,
		'data-line': _(()=>`line=${lineNum()}`),
	},
	'This is a test line')
	attach(connected_dom, dom)
	equal(dom.outerHTML, '<div data-type="line" data-id="1" data-line="line=1">This is a test line</div>')
	lineNum.set(3)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div data-type="line" data-id="3" data-line="line=3">This is a test line</div>')
}))
test('tags|attributes|data-|disconnected', async ()=>{
	const lineNum = sig_(1)
	const dom = div({
		'data-type': 'line',
		'data-id': lineNum,
		'data-line': _(()=>`line=${lineNum()}`),
	},
	'This is a test line',
	)
	equal(dom.outerHTML, '<div data-type="line" data-id="1" data-line="line=1">This is a test line</div>')
	lineNum.set(3)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div data-type="line" data-id="3" data-line="line=3">This is a test line</div>')
})
test('tags|props|read-only|connected', with_connected_dom(async connected_dom=>{
	const form = sig_('form1')
	const dom = button({ form }, 'Button')
	attach(connected_dom, dom)
	equal(dom.outerHTML, '<button form="form1">Button</button>')
	form.set('form2')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<button form="form2">Button</button>')
	equal(input({ list: 'datalist1' }).outerHTML, '<input list="datalist1">')
}))
test('tags|props|read-only|disconnected', async ()=>{
	const form = sig_('form1')
	const dom = button({ form }, 'Button')
	equal(dom.outerHTML, '<button form="form1">Button</button>')
	form.set('form2')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<button form="form2">Button</button>')
	equal(input({ list: 'datalist1' }).outerHTML, '<input list="datalist1">')
})
test('tags|children|first argument|rmemo|connected', with_connected_dom(async connected_dom=>{
	const line2 = sig_(<string|null>'Line 2')
	const dom = div(
		pre('Line 1'),
		pre(line2),
		pre('Line 3')
	)
	attach(connected_dom, dom)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
	line2.set('Line 2: Extra Stuff')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2: Extra Stuff</pre><pre>Line 3</pre></div>')
	// null to remove text DOM
	line2.set(null)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre></pre><pre>Line 3</pre></div>')
	line2.set('Line 2')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
}))
test('tags|children|first argument|rmemo|disconnected', async ()=>{
	const line2 = sig_(<string|null>'Line 2')
	const dom = div(
		pre('Line 1'),
		pre(line2),
		pre('Line 3')
	)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
	line2.set('Line 2: Extra Stuff')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2: Extra Stuff</pre><pre>Line 3</pre></div>')
	// null to remove text DOM
	line2.set(null)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre></pre><pre>Line 3</pre></div>')
	line2.set('Line 2')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
})
test('tags|children|rmemo|empty string|connected', with_connected_dom(async connected_dom=>{
	const text = sig_('Text')
	const dom = p(text)
	attach(connected_dom, dom)
	equal(dom.outerHTML, '<p>Text</p>')
	text.set('')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<p></p>')
	text.set('Text')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<p>Text</p>')
}))
test('tagsNS|svg', ()=>{
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
	equal(dom.outerHTML,
		'<svg width="16px" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="black" stroke-width="2" fill="yellow"></circle><circle cx="16" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><circle cx="34" cy="20" r="2" stroke="black" stroke-width="2" fill="black"></circle><path d="M 15 30 Q 25 40, 35 30" stroke="black" stroke-width="2" fill="transparent"></path></svg>')
})
test('tagsNS|math', ()=>{
	const {
		math,
		mi,
		mn,
		mo,
		mrow,
		msup
	} = tagsNS<'mathml'>('http://www.w3.org/1998/Math/MathML')
	const dom = math(msup(mi('e'), mrow(mi('i'), mi('π'))), mo('+'), mn('1'), mo('='), mn('0'))
	equal(dom.outerHTML,
		'<math><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></math>')
})
test('fragment_', ()=>{
	const root = tags.div(
		fragment_(
			'<div>Yo!</div>',
			undefined,
			null,
			div(
				p('👋Hello'),
				ul(
					li('🗺️World'),
					li(a({ href: 'https://github.com/relementjs/server/' }, '🍦relement')),
				),)))
	equal(root.innerHTML,
		'&lt;div&gt;Yo!&lt;/div&gt;<div><p>👋Hello</p><ul><li>🗺️World</li><li><a href="https://github.com/relementjs/server/">🍦relement</a></li></ul></div>')
})
test('raw_', ()=>{
	const root = tags.div(raw_('<div>row 0</div><div>row 1</div><div>row 2</div>'))
	equal(root.innerHTML, '<div>row 0</div><div>row 1</div><div>row 2</div>')
	equal(div(raw_(undefined)).innerHTML, '')
	equal(div(raw_(null)).innerHTML, '')
})
test('raw_|memo', ()=>{
	const html$ = sig_('<div>row 0</div><div>row 1</div><div>row 2</div>')
	const _div = div(raw_(html$))
	equal(_div.innerHTML, '<div>row 0</div><div>row 1</div><div>row 2</div>')
	html$.set('<div>row 0</div><div>row 1</div>')
	equal(_div.innerHTML, '<div>row 0</div><div>row 1</div>')
})
test('attach|basic', ()=>{
	const dom = ul()
	equal(attach(dom, li('Item 1'), li('Item 2')), dom)
	equal(dom.outerHTML, '<ul><li>Item 1</li><li>Item 2</li></ul>')
	equal(attach(dom, li('Item 3'), li('Item 4'), li('Item 5')), dom)
	equal(dom.outerHTML, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
	// No-op if no children specified
	equal(attach(dom), dom)
	equal(dom.outerHTML, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
})
test('attach|nested children', ()=>{
	const dom = ul()
	equal(attach(dom, [li('Item 1'), li('Item 2')]), dom)
	equal(dom.outerHTML, '<ul><li>Item 1</li><li>Item 2</li></ul>')
	// Deeply nested
	equal(attach(dom, [[li('Item 3'), [li('Item 4')]], li('Item 5')]), dom)
	equal(dom.outerHTML, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
	// No-op if no children specified
	equal(attach(dom, [[[]]]), dom)
	equal(dom.outerHTML, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>')
})
test('attach|null or undefined value', ()=>{
	const dom = ul()
	equal(attach(dom, li('Item 1'), li('Item 2'), undefined, li('Item 3'), null), dom)
	equal(dom.outerHTML, '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>')
	equal(attach(dom, [li('Item 4'), li('Item 5'), undefined, li('Item 6'), null]), dom)
	equal(dom.outerHTML,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li></ul>')
	// Deeply nested
	equal(attach(dom, [[undefined, li('Item 7'), null, [li('Item 8')]], null, li('Item 9'), undefined]), dom)
	equal(dom.outerHTML,
		'<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li></ul>')
})
test('attach|rmemo|connected', with_connected_dom(async connected_dom=>{
	const line2 = sig_(<string|null>'Line 2')
	equal(attach(connected_dom,
		pre('Line 1'),
		pre(line2),
		pre('Line 3')
	), connected_dom)
	equal(connected_dom.outerHTML, '<div class="hidden"><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
	line2.set('Line 2: Extra Stuff')
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.outerHTML,
		'<div class="hidden"><pre>Line 1</pre><pre>Line 2: Extra Stuff</pre><pre>Line 3</pre></div>')
	// null to remove text DOM
	line2.set(null)
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.outerHTML, '<div class="hidden"><pre>Line 1</pre><pre></pre><pre>Line 3</pre></div>')
	line2.set('Line 2')
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.outerHTML, '<div class="hidden"><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
}))
test('attach|rmemo|disconnected', async ()=>{
	const line2 = sig_(<string|null>'Line 2')
	const dom = div()
	equal(attach(dom,
		pre('Line 1'),
		pre(line2),
		pre('Line 3')
	), dom)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
	line2.set('Line 2: Extra Stuff')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML,
		'<div><pre>Line 1</pre><pre>Line 2: Extra Stuff</pre><pre>Line 3</pre></div>')
	// null to remove text DOM
	line2.set(null)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre></pre><pre>Line 3</pre></div>')
	line2.set('Line 2')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><pre>Line 1</pre><pre>Line 2</pre><pre>Line 3</pre></div>')
})
test('attach|rmemo', with_connected_dom(async connected_dom=>{
	const s = sig_('State Version 1')
	equal(s(), 'State Version 1')
	s.set('State Version 2')
	equal(s(), 'State Version 2')
	attach(connected_dom, s)
	s.set('State Version 3')
	equal(s(), 'State Version 3')
	await sleep(waitMsOnDomUpdates)
	equal(s(), 'State Version 3')
}))
test('attach|fn|child|dynamic dom', with_connected_dom(async connected_dom=>{
	const verticalPlacement = sig_(false)
	const button1Text = sig_('Button 1')
	const button2Text = sig_('Button 2')
	const button3Text = sig_('Button 3')
	equal(attach(connected_dom, _(()=>
		verticalPlacement()
			? div(
				div(button(button1Text)),
				div(button(button2Text)),
				div(button(button3Text)))
			: div(button(button1Text), button(button2Text), button(button3Text)))),
	connected_dom)
	const dom = <Element>connected_dom.firstChild
	equal(dom.outerHTML, '<div><button>Button 1</button><button>Button 2</button><button>Button 3</button></div>')
	button2Text.set('Button 2: Extra')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><button>Button 1</button><button>Button 2: Extra</button><button>Button 3</button></div>')
	verticalPlacement.set(true)
	await sleep(waitMsOnDomUpdates)
	// dom is disconnected from the document thus it won't be updated
	equal(dom.outerHTML, '<div><button>Button 1</button><button>Button 2: Extra</button><button>Button 3</button></div>')
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><div><button>Button 1</button></div><div><button>Button 2: Extra</button></div><div><button>Button 3</button></div></div>')
	button2Text.set('Button 2: Extra Extra')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML,
		'<div><button>Button 1</button><button>Button 2: Extra Extra</button><button>Button 3</button></div>')
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><div><button>Button 1</button></div><div><button>Button 2: Extra Extra</button></div><div><button>Button 3</button></div></div>')
}))
test('attach|fn|child|fn|conditional', with_connected_dom(async connected_dom=>{
	const cond = sig_(true)
	const button1 = sig_('Button 1')
	const button2 = sig_('Button 2')
	const button3 = sig_('Button 3')
	const button4 = sig_('Button 4')
	let numFuncCalled = 0
	equal(
		attach(connected_dom,
			_(()=>(
				++numFuncCalled,
				cond() ?
					div(button(button1()), button(button2())) :
					div(button(button3()), button(button4()))))),
		connected_dom)
	equal((<Element>connected_dom.firstChild).outerHTML, '<div><button>Button 1</button><button>Button 2</button></div>')
	equal(numFuncCalled, 1)
	button1.set('Button 1-1')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 1-1</button><button>Button 2</button></div>')
	equal(numFuncCalled, 2)
	button2.set('Button 2-1')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 1-1</button><button>Button 2-1</button></div>')
	equal(numFuncCalled, 3)
	// Changing button3 or button4 won't triggered the effect as they're not its current dependencies
	button3.set('Button 3-1')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 1-1</button><button>Button 2-1</button></div>')
	equal(numFuncCalled, 3)
	button4.set('Button 4-1')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 1-1</button><button>Button 2-1</button></div>')
	equal(numFuncCalled, 3)
	cond.set(false)
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 3-1</button><button>Button 4-1</button></div>')
	equal(numFuncCalled, 4)
	button3.set('Button 3-2')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 3-2</button><button>Button 4-1</button></div>')
	equal(numFuncCalled, 5)
	button4.set('Button 4-2')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 3-2</button><button>Button 4-2</button></div>')
	equal(numFuncCalled, 6)
	// Changing button1 or button2 won't triggered the effect as they're not its current dependencies
	button1.set('Button 1-2')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 3-2</button><button>Button 4-2</button></div>')
	equal(numFuncCalled, 6)
	button1.set('Button 2-2')
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<div><button>Button 3-2</button><button>Button 4-2</button></div>')
	equal(numFuncCalled, 6)
}))
test('derive|child|state|dynamic', with_connected_dom(async connected_dom=>{
	const numItems$ = sig_(0)
	const items$ = memo_(()=>[...Array(numItems$()).keys()].map(i=>`Item ${i + 1}`))
	const selectedIndex$ = memosig_(()=>(items$(), 0))
	const _dom_M_custom = dom_M_custom as WeakMap<Node, {
		items:string[]
		selectedIndex:number
	}>
	attach(connected_dom, _((dom?:Element)=>{
		// If items$ aren't changed, we don't need to regenerate the entire dom
		// dom_M_custom test fixture WeakMap is a use case pattern
		// TODO: consider an implementation of previous value for rmemo
		if (dom && items$() === _dom_M_custom.get(dom)?.items) {
			const itemDoms = dom.childNodes
			;(<Element>itemDoms[_dom_M_custom.get(dom)!.selectedIndex]).classList.remove('selected')
			;(<Element>itemDoms[selectedIndex$()]).classList.add('selected')
			_dom_M_custom.get(dom)!.selectedIndex = selectedIndex$()
			return dom
		}
		dom = ul(
			items$().map((item, i)=>li({ class: i === selectedIndex$() ? 'selected' : '' }, item))
		)
		_dom_M_custom.set(dom, {
			items: items$(),
			selectedIndex: selectedIndex$(),
		})
		return dom
	}))
	numItems$.set(3)
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<ul><li class="selected">Item 1</li><li class="">Item 2</li><li class="">Item 3</li></ul>')
	const rootDom1stIteration = <Element>connected_dom.firstChild
	selectedIndex$.set(1)
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<ul><li class="">Item 1</li><li class="selected">Item 2</li><li class="">Item 3</li></ul>')
	// Items aren't changed, thus we don't need to regenerate the dom
	equal(connected_dom.firstChild!, rootDom1stIteration)
	numItems$.set(5)
	await sleep(waitMsOnDomUpdates)
	// Items are changed, thus the dom for the list is regenerated
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<ul><li class="selected">Item 1</li><li class="">Item 2</li><li class="">Item 3</li><li class="">Item 4</li><li class="">Item 5</li></ul>')
	ok(connected_dom.firstChild !== rootDom1stIteration)
	// rootDom1stIteration is disconnected from the document and remain unchanged
	equal(rootDom1stIteration.outerHTML,
		'<ul><li class="">Item 1</li><li class="selected">Item 2</li><li class="">Item 3</li></ul>')
	const rootDom2ndIteration = connected_dom.firstChild!
	selectedIndex$.set(2)
	await sleep(waitMsOnDomUpdates)
	equal((<Element>connected_dom.firstChild).outerHTML,
		'<ul><li class="">Item 1</li><li class="">Item 2</li><li class="selected">Item 3</li><li class="">Item 4</li><li class="">Item 5</li></ul>')
	// Items aren't changed, thus we don't need to regenerate the dom
	equal(connected_dom.firstChild!, rootDom2ndIteration)
	// rootDom1stIteration won't be updated as it has already been disconnected from the document
	equal(rootDom1stIteration.outerHTML,
		'<ul><li class="">Item 1</li><li class="selected">Item 2</li><li class="">Item 3</li></ul>')
}))
test('tags|child|dom|null|removes child', with_connected_dom(async connected_dom=>{
	const line1 = sig_('Line 1')
	const line2 = sig_('Line 2')
	const line3 = sig_(<string|null>'Line 3')
	const line4 = sig_('')
	const line5 = sig_(null)
	const dom = div(
		_(()=>line1() === '' ? null : p(line1)),
		_(()=>line2() === '' ? null : p(line2)),
		p(line3),
		// line4 won't appear in the DOM tree as its initial value is null
		_(()=>line4() === '' ? null : p(line4)),
		// line5 won't appear in the DOM tree as its initial value is null
		p(line5),
	)
	attach(connected_dom, dom)
	//last <p></p> is line 5
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p>Line 3</p><p></p></div>')
	// Delete Line 2
	line2.set('')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 3</p><p></p></div>')
	// Bring back Line 2
	line2.set('Line 2')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p>Line 3</p><p></p></div>')
	// Delete Line 3
	line3.set(null)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p></p><p></p></div>')
	// Deleted dom won't be brought back, even the underlying state is changed back
	line3.set('Line 3')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p>Line 3</p><p></p></div>')
}))
test('tags|child|dom|undefined|removes child', with_connected_dom(async connected_dom=>{
	const line1 = sig_('Line 1')
	const line2 = sig_('Line 2')
	const line3 = sig_(<string|undefined>'Line 3')
	const line4 = sig_('')
	const line5 = sig_(undefined)
	const dom = div(
		_(()=>line1() === '' ? null : p(line1)),
		_(()=>line2() === '' ? null : p(line2)),
		p(line3),
		// line4 won't appear in the DOM tree as its initial value is null
		_(()=>line4() === '' ? null : p(line4)),
		// line5 won't appear in the DOM tree as its initial value is null
		p(line5),
	)
	attach(connected_dom, dom)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p>Line 3</p><p></p></div>')
	// Delete Line 2
	line2.set('')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 3</p><p></p></div>')
	// Deleted dom won't be brought back, even the underlying state is changed back
	line2.set('Line 2')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p>Line 3</p><p></p></div>')
	// Delete Line 3
	line3.set(undefined)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p></p><p></p></div>')
	// Deleted dom won't be brought back, even the underlying state is changed back
	line3.set('Line 3')
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div><p>Line 1</p><p>Line 2</p><p>Line 3</p><p></p></div>')
}))
test('tags|child|dom|0|keeps child', with_connected_dom(async connected_dom=>{
	const state1 = sig_(0)
	const state2 = sig_(1)
	const dom = div(
		state1,
		_(()=>1 - state1()),
		state2,
		_(()=>1 - state2()))
	attach(connected_dom, dom)
	equal(dom.outerHTML, '<div>0110</div>')
	state1.set(1)
	state2.set(0)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div>1001</div>')
}))
test('tags|child|primitive|dynamic', with_connected_dom(async connected_dom=>{
	const a = sig_(1)
	const b = sig_(2)
	const deleted = sig_(false)
	const dom = div(_(()=>deleted() ? null : a() + b()))
	equal(dom.outerHTML, '<div>3</div>')
	attach(connected_dom, dom)
	a.set(6)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div>8</div>')
	b.set(5)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div>11</div>')
	deleted.set(true)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div></div>')
	deleted.set(false)
	await sleep(waitMsOnDomUpdates)
	equal(dom.outerHTML, '<div>11</div>')
}))
test('tags|child|non-state deps', with_connected_dom(async connected_dom=>{
	const part1 = '👋Hello '
	const part2 = sig_('🗺️World')
	equal(
		attach(connected_dom,
			_(()=>`${part1}${part2()}`)),
		connected_dom)
	const dom = <Element>connected_dom.firstChild
	equal(dom.textContent!, '👋Hello 🗺️World')
	equal(connected_dom.innerHTML, '👋Hello 🗺️World')
	part2.set('🍦ctx-core')
	await sleep(waitMsOnDomUpdates)
	// dom is disconnected from the document thus it won't be updated
	equal(dom.textContent!, '👋Hello 🗺️World')
	equal(connected_dom.innerHTML, '👋Hello 🍦ctx-core')
}))
test('tags|child|error', with_connected_dom(async connected_dom=>{
	const num = sig_(0)
	equal(attach(connected_dom,
		num,
		()=>{
			if (num() > 0) throw new Error()
			return span('ok')
		},
		num
	), connected_dom)
	equal(connected_dom.innerHTML, '0<span>ok</span>0')
	num.set(1)
	await sleep(waitMsOnDomUpdates)
	// The binding function 2nd child of connected_dom throws an error.
	// We want to validate the 2nd child won't be updated because of the error,
	// but other DOM nodes are updated as usual
	equal(connected_dom.innerHTML, '1<span>ok</span>1')
}))
test('hydrate|normal', with_connected_dom(async connected_dom=>{
	const Counter = (init:number)=>{
		const counter = sig_(init)
		return button({ 'data-counter': counter, onclick: ()=>counter.set(counter() + 1) },
			_(()=>`Count: ${counter()}`),
		)
	}
	// Static DOM before hydration
	connected_dom.innerHTML = Counter(5).outerHTML
	// Before hydration, the counter is not reactive
	connected_dom.querySelector('button')!.click()
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.innerHTML, '<button data-counter="5">Count: 5</button>')
	hydrate(connected_dom.querySelector('button')!,
		dom=>
			Counter(Number(dom.getAttribute('data-counter'))))
	// After hydration, the counter is reactive
	connected_dom.querySelector('button')!.click()
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.innerHTML, '<button data-counter="6">Count: 6</button>')
}))
test('hydrate|null|remove dom', with_connected_dom(async connected_dom=>{
	// Remove the DOM node upon hydration
	attach(connected_dom, div())
	hydrate(connected_dom.querySelector('div')!, ()=>null)
	equal(connected_dom.innerHTML, '')
	// Remove the DOM node after the state update
	attach(connected_dom, div())
	const s = sig_(1)
	hydrate(<HTMLElement>connected_dom.querySelector('div'),
		_(()=>s() === 1 ? pre() : null))
	equal(connected_dom.innerHTML, '<pre></pre>')
	s.set(2)
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.innerHTML, '')
}))
test('hydrate|undefined|remove dom', with_connected_dom(async connected_dom=>{
	// Remove the DOM node upon hydration
	attach(connected_dom, div())
	hydrate(connected_dom.querySelector('div')!, ()=>undefined)
	equal(connected_dom.innerHTML, '')
	// Remove the DOM node after the state update
	attach(connected_dom, div())
	const s = sig_(1)
	hydrate(<HTMLElement>connected_dom.querySelector('div'),
		_(()=>s() === 1 ? pre() : undefined))
	equal(connected_dom.innerHTML, '<pre></pre>')
	s.set(2)
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.innerHTML, '')
}))
test('hydrate|0|keep dom', with_connected_dom(async connected_dom=>{
	attach(connected_dom, div(), div())
	const s = sig_(0)
	const [dom1, dom2] = connected_dom.querySelectorAll('div')
	hydrate(dom1, s)
	hydrate(dom2, _(()=>1 - s()))
	equal(connected_dom.innerHTML, '01')
	s.set(1)
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.innerHTML, '10')
}))
test('gc|binding|basic', with_connected_dom(async connected_dom=>{
	const counter = sig_(0)
	attach(connected_dom, _(()=>span(`Counter: ${counter()}`)))
	for (let i = 0; i < 100; ++i) counter.set(counter() + 1)
	await sleep(waitMsOnDomUpdates)
	equal(connected_dom.innerHTML, '<span>Counter: 100</span>')
	let count = 0
	for (const rmr of counter.r) {
		if (rmr.deref()) count++
	}
	ok(count >= 1)
	ok(count <= 3)
}))
skip_long_test('gc|binding|nested|long', with_connected_dom(async connected_dom=>{
	const renderPre = sig_(false)
	const text = sig_('Text')
	const dom = div(
		_(()=>(renderPre() ? pre : div)(()=>`--${text()}--`)))
	attach(connected_dom, dom)
	for (let i = 0; i < 20; ++i) {
		renderPre.set(!renderPre())
		await sleep(waitMsOnDomUpdates)
	}
	// Wait until GC kicks in
	await sleep(1000)
	let count = 0
	for (const rmr of renderPre.r) {
		if (rmr.deref()) count++
	}
	ok(count >= 1)
	ok(count <= 3)
}))
// skip_long_test('gc|binding|conditional|long', with_connected_dom(async connected_dom=>{
test('gc|binding|conditional|long', with_connected_dom(async connected_dom=>{
	const cond = sig_(true)
	const a = sig_(0)
	const b = sig_(0)
	const c = sig_(0)
	const d = sig_(0)
	const dom = div(_(()=>cond() ? a() + b() : c() + d()))
	attach(connected_dom, dom)
	const allStates = tup(cond, a, b, c, d)
	for (let i = 0; i < 100; ++i) {
		const randomState = allStates[Math.floor(Math.random() * allStates.length)]
		if (randomState === cond) {
			randomState.set(!randomState())
		} else {
			(<sig_T<number>>randomState).set(<number>randomState() + 1)
		}
		await sleep(waitMsOnDomUpdates)
	}
	for (const s of allStates) {
		let count = 0
		for (const rmr of s.r) {
			if (rmr.deref()) count++
		}
		ok(count >= 1)
		ok(count <= 15)
	}
	// Wait until GC kicks in
	await sleep(1000)
	for (const s of allStates) {
		let count = 0
		for (const rmr of s.r) {
			if (rmr.deref()) count++
		}
		ok(count >= 1)
		ok(count <= 3)
	}
}))
test('gc|memo_|basic', ()=>{
	const history:unknown[] = []
	const a:sig_T<number> = sig_(0, [()=>memo_(()=>history.push(a()))])
	for (let i = 0; i < 100; ++i) a.set(a() + 1)
	equal(history.length, 101)
	let count = 0
	for (const rmr of a.r) {
		if (rmr.deref()) count++
	}
	ok(count >= 1)
	ok(count <= 3)
})
skip_long_test('gc|binding|derive inside|long', with_connected_dom(async connected_dom=>{
	const renderPre = sig_(false)
	const prefix = sig_('Prefix')
	const dom = div(_(()=>{
		const text = memo_(()=>`${prefix()} - Suffix`)
		return (renderPre() ? pre : div)(()=>`--${text()}--`)
	}))
	attach(connected_dom, dom)
	for (let i = 0; i < 20; ++i) {
		renderPre.set(!renderPre())
		await sleep(waitMsOnDomUpdates)
	}
	// Wait until GC kicks in
	await sleep(1000)
	let count = 0
	for (const rmr of renderPre.r) {
		if (rmr.deref()) count++
	}
	ok(count >= 1)
	ok(count <= 3)
}))
skip_long_test('gc|derived|conditional|long', async ()=>{
	const cond = sig_(true)
	const a = sig_(0)
	const b = sig_(0)
	const c = sig_(0)
	const d = sig_(0)
	memo_(()=>cond() ? a() + b() : c() + d())()
	const allStates = [cond, a, b, c, d]
	for (let i = 0; i < 100; ++i) {
		const randomState = allStates[Math.floor(Math.random() * allStates.length)]
		if (randomState === cond) randomState.set(!randomState())
		else (<sig_T<number>>randomState).set(<number>randomState() + 1)
	}
	for (const s of allStates) {
		let count = 0
		for (const rmr of s.r) {
			if (rmr.deref()) count++
		}
		ok(count >= 1)
		ok(count <= 10)
	}
	// Wait until GC kicks in
	await sleep(1000)
	for (const s of allStates) {
		let count = 0
		for (const rmr of s.r) {
			if (rmr.deref()) count++
		}
		ok(count >= 1)
		ok(count <= 3)
	}
})
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
