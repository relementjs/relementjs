/// <reference types="./index.d.ts" />
// originally forked from https://github.com/vanjs-org/mini-van/blob/main/src/van-plate.js
export * from 'ctx-core/rmemo'
const tag_R_no_child = {
	input: 1,
	meta: 1,
	br: 1,
	link: 1,
	img: 1,
	hr: 1,
	area: 1,
	base: 1,
	col: 1,
	param: 1,
	wbr: 1,
	track: 1,
	source: 1,
	embed: 1,
	command: 1,
	keygen: 1,
}
const char_R_escape_char = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
}
const escape = s=>s.replace(/[&<>]/g, tag=>char_R_escape_char[tag] || tag)
const proto_ = Object.getPrototypeOf
const obj__proto = proto_(tag_R_no_child)
export const server__element__proto = {
	buf__push(buf) {
		buf.push(`<${this.name}${this.props_str}>`)
		if (tag_R_no_child[this.name]) return
		for (const c of this.children) {
			const plain_c = plain_val_(c)
			proto_(plain_c) === server__element__proto
				? plain_c.buf__push(buf)
				: buf.push(escape(plain_c.toString()))
		}
		buf.push(`</${this.name}>`)
	},
	toString() {
		const buf = []
		this.buf__push(buf)
		return buf.join('')
	},
}
const plain_val_ = (v, k)=>{
	return (
		typeof v === 'function' && (v.memor || !k?.startsWith('on') || v._is_bind)
			? v()
			: v)
}
export function attach(dom, ...children) {
	dom.children.push(...children.flat(Infinity).filter(c=>c != null))
	return dom
}
export const bind_ = f=>(f._is_bind = 1, f)
export const tags = new Proxy((name, ...args)=>{
	const [props, ...children] =
		Object.getPrototypeOf(args[0] ?? 0) === obj__proto
			? args
			: [{}, ...args]
	const props_str = Object.entries(props).map(([k, v])=>{
		const plain_v = plain_val_(v, k), lower_k = k.toLowerCase()
		return (
			typeof plain_v === 'boolean'
				? (plain_v ? ' ' + lower_k : '')
				// Disable setting attribute for function-valued properties (mostly event handlers),
				// as they're usually not useful for SSR (server-side rendering).
				: typeof plain_v !== 'function' && plain_v != null
					? ` ${lower_k}="${plain_v.toString().replace(/"/g, '&quot;')}"`
					: '')
	}).join('')
	return {
		__proto__: server__element__proto,
		name,
		props_str,
		children: children.flat(Infinity).filter(c=>c != null)
	}
}, { get: (tag, name)=>tag.bind(null, name) })
export const tagsNS = ()=>tags
export const fragment_ = (...children)=>({
	__proto__: server__element__proto,
	buf__push(buf) {
		for (let c of children.flat(Infinity)) {
			let plain_c = plain_val_(c)
			proto_(plain_c ?? 0) === server__element__proto
				? plain_c.buf__push(buf)
				: buf.push(escape((plain_c ?? '').toString()))
		}
	},
})
export const raw_ = html=>({
	__proto__: server__element__proto,
	buf__push(buf) {
		buf.push(html)
	},
})
export const doc_html_ = (...args)=>{
	const buf = ['<!DOCTYPE html>']
	tags.html(...args).buf__push(buf)
	return buf.join('')
}
export let server__base__relement = { attach, bind_, tags, tagsNS }
export let server__fragment__relement = { attach, bind_, tags, tagsNS, fragment_, raw_ }
