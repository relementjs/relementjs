/// <reference types="./index.d.ts" />
// originally forked from https://github.com/vanjs-org/mini-van/blob/main/src/van-plate.js
export * from 'ctx-core/rmemo'
/**
 * area, base, br, col, embed, hr, img, input, link, meta, source, track, wbr
 * @see {@link https://html.spec.whatwg.org/multipage/syntax.html#void-elements}
 */
const void_tags = {
	area: 1,
	base: 1,
	br: 1,
	col: 1,
	embed: 1,
	hr: 1,
	img: 1,
	input: 1,
	link: 1,
	meta: 1,
	source: 1,
	track: 1,
	wbr: 1,
}
const char_R_escape_char = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
}
/*
 * HTML5 elements do not support self-closing tags
 * TODO: Consider supporting self-closing tags for xml formats such as SVG & MathML
 * @see {@link https://stackoverflow.com/questions/69913/why-dont-self-closing-script-elements-work}
 */
export let server__element__proto = {
	buf__push(buf) {
		buf.push('<' + this.name + this.props_str + '>')
		if (void_tags[this.name]) return
		for (const c of this.children) {
			let plain_c = plain_val_(c) ?? ''
			plain_c.buf__push
				? plain_c.buf__push(buf)
				: buf.push(
					('' + plain_c)
						.replace(/[&<>]/g, tag=>char_R_escape_char[tag] || tag))
		}
		buf.push('</' + this.name + '>')
	},
	toString() {
		let buf = []
		this.buf__push(buf)
		return buf.join('')
	},
}
let plain_val_ = (v, k)=>(
	typeof v === 'function' && (v.memor || !k?.startsWith('on'))
		? v()
		: v)
export function attach(dom, ...children) {
	dom.children.push(...children.flat(Infinity).filter(c=>c != null))
	return dom
}
export let tags = new Proxy((name, ...args)=>{
	let [props, ...children] =
		Object.getPrototypeOf(args[0] ?? 0) === Object.prototype
			? args
			: [{}, ...args]
	let props_str = ''
	for (let k in props) {
		let plain_v = plain_val_(props[k], k), lower_k = k.toLowerCase()
		props_str +=
			typeof plain_v === 'boolean'
				? (plain_v ? ' ' + lower_k : '')
				// Disable setting attribute for function-valued properties (mostly event handlers),
				// as they're usually not useful for SSR (server-side rendering).
				: typeof plain_v !== 'function' && plain_v != null
					? ' ' + lower_k + '="' + ('' + plain_v).replace(/"/g, '&quot;') + '"'
					: ''
	}
	return {
		__proto__: server__element__proto,
		name,
		props_str,
		children: children.flat(Infinity).filter(c=>c != null),
	}
}, { get: (tag, name)=>tag.bind(null, name) })
export let tagsNS = ()=>tags
export let fragment_ = (...children)=>({
	__proto__: server__element__proto,
	buf__push(buf) {
		for (let c of children.flat(Infinity)) {
			let plain_c = plain_val_(c) ?? ''
			plain_c.buf__push
				? plain_c.buf__push(buf)
				: buf.push(
					('' + plain_c)
						.replace(/[&<>]/g, tag=>char_R_escape_char[tag] || tag))
		}
	},
})
export let raw_ = html=>({
	__proto__: server__element__proto,
	buf__push(buf) {
		buf.push(html)
	},
})
export let doc_html_ = (...args)=>{
	let buf = ['<!DOCTYPE html>']
	tags.html(...args).buf__push(buf)
	return buf.join('')
}
export let server__relement = { attach, tags, tagsNS, fragment_, raw_ }
