// originally forked from https://github.com/vanjs-org/van/blob/main/src/van.js
// This file consistently uses `let` keyword instead of `const` for reducing the bundle size.
import { memo_ } from 'ctx-core/rmemo'
export * from 'ctx-core/rmemo'
// Global variables - aliasing some builtin symbols to reduce the bundle size.
let _undefined
let prop_setter_cache = {}
let obj__proto = Object.getPrototypeOf(prop_setter_cache)
function dom__run(f, dom) {
	let val
	try {
		val = f(dom)
	} catch (e) {
		console.error(e)
		return dom
	}
	return val?.nodeType ? val : new Text(val ?? '')
}
export function attach(dom, ...children) {
	for (let child_val of children.flat(Infinity)) {
		let child
		let child_val_memo =
			typeof child_val === 'function'
			&& memo_(child_val_memo=>{
				let _child = dom__run(child_val, child)
				if (child) child.replaceWith(_child)
				child = _child
				return child_val_memo
			})()
		if (!child_val_memo) {
			child = child_val
		} else if (child) {
			(child._m ||= []).push(child_val_memo)
		}
		if (child != _undefined) {
			dom.append(child)
		}
	}
	return dom
}
export function bind_(f) {
	f.b = 1
	return f
}
export let tagsNS = ns=>new Proxy((name, ...args)=>{
	let [params, ...children] =
		// DOM elements are objects with different prototypes
		Object.getPrototypeOf(args[0] ?? 0) === obj__proto
			? args
			: [{}, ...args]
	let dom =
		ns
			? document.createElementNS(ns, name)
			: document.createElement(name)
	for (let k in params) {
		let v = params[k]
		let k__PropertyDescriptor_ = proto=>
			proto
				? Object.getOwnPropertyDescriptor(proto, k) ?? k__PropertyDescriptor_(Object.getPrototypeOf(proto))
				: _undefined
		let cache_key = name + ',' + k
		let prop_setter =
			prop_setter_cache[cache_key]
			?? (prop_setter_cache[cache_key] = k__PropertyDescriptor_(Object.getPrototypeOf(dom))?.set ?? 0)
		let param__setter =
			prop_setter
				? prop_setter.bind(dom) // prop setter
				: dom.setAttribute.bind(dom, k) // attribute setter
		let setter_memo =
			typeof v === 'function'
			&& (v.memor || !k.startsWith('on') || v.b)
			&& memo_(()=>dom__run(()=>param__setter(v(dom))))
		if (setter_memo) {
			(dom._m ||= []).push(setter_memo)
			setter_memo()
		} else {
			param__setter(v)
		}
	}
	return attach(dom, ...children)
}, { get: (tag, name)=>tag.bind(_undefined, name) })
export let tags = tagsNS()
export let fragment_ = (...children)=>attach(document.createDocumentFragment(), ...children)
export let raw_ = html=>{
	let div = tags.div()
	div.innerHTML = html
	let fragment = document.createDocumentFragment()
	while (div.firstChild) {
		fragment.appendChild(div.firstChild)
	}
	return fragment
}
export function hydrate(dom, f) {
	memo_(memo=>{
		let _dom = dom__run(f, dom)
		if (!_dom) {
			dom.remove()
		} else if (dom !== _dom) {
			dom.replaceWith(_dom)
			dom = _dom
			;(dom._m ||= []).push(memo)
		}
	})()
}
export let browser__base__relement = { attach, bind_, tags, tagsNS, }
export let browser__fragment__relement = { attach, bind_, tags, tagsNS, fragment_, raw_, }
export let browser__full__relement = { attach, bind_, tags, tagsNS, fragment_, raw_, hydrate, }
