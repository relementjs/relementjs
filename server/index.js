/// <reference types="./index.d.ts" />
// originally forked from https://github.com/vanjs-org/mini-van/blob/main/src/van-plate.js
export * from 'ctx-core/rmemo'
const char_R_escape_char = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
}
const expand_tags = {
	script: 1
}
export let server__element__proto = {
	buf__push(buf) {
		buf.push('<' + this.name + this.props_str)
		if (expand_tags[this.name]) this.children.push('')
		let plain_c
		for (let c of this.children) {
			plain_c ?? buf.push('>')
			plain_c = plain_val_(c) ?? ''
			plain_c.buf__push
				? plain_c.buf__push(buf)
				: buf.push(
					('' + plain_c)
						.replace(/[&<>]/g, tag=>char_R_escape_char[tag] || tag))
		}
		buf.push(plain_c != null ? '</' + this.name + '>' : '/>')
	},
	toString() {
		let buf = []
		this.buf__push(buf)
		return buf.join('')
	},
}
let plain_val_ = (v, k)=>{
	return (
		typeof v === 'function' && (v.memor || !k?.startsWith('on') || v._is_bind)
			? v()
			: v)
}
export function attach(dom, ...children) {
	dom.children.push(...children.flat(Infinity).filter(c=>c != null))
	return dom
}
export let bind_ = f=>(f._is_bind = 1, f)
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
		children: children.flat(Infinity).filter(c=>c != null)
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
export let server__relement = { attach, bind_, tags, tagsNS, fragment_, raw_ }
