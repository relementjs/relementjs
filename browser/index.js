// originally forked from https://github.com/vanjs-org/van/blob/main/src/van.js
// This file consistently uses `let` keyword instead of `const` for reducing the bundle size.
export * from 'ctx-core/rmemo'
// Global variables - aliasing some builtin symbols to reduce the bundle size.
let _undefined
let obj__cache = {}
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
		if (typeof child_val === 'function') {
			(child_val.memo_ ?? (f=>f))(child_val_memo=>{
				let _child = dom__run(child_val, child)
				child?.replaceWith?.(_child)
				child = _child
				if (child) {
					(child._m ||= []).push(child_val_memo)
				}
			})()
		} else {
			child = child_val
		}
		if (child) {
			dom.append(child)
		}
	}
	return dom
}
export let tagsNS = ns=>new Proxy((name, ...a)=>{
	let [params, ...c] =
		// DOM elements are objects with a custom prototype
		Object.getPrototypeOf(a[0] ?? 0) === Object.prototype
			? a
			: [{}, ...a]
	let dom = (
		// inlined el_ckey
		// TODO: consider using ns as-is
		// It would be ~2 B smaller to use ns as-is.
		// undefined ns is represented as '' instead of 'undefined'
		// Negligibly more efficient in the runtime performance & RAM
		obj__cache[(ns ?? '') + ',' + name] ??=
			ns
				? document.createElementNS(ns, name)
				: document.createElement(name)
	).cloneNode()
	for (let k in params) {
		let v = params[k]
		let k__PropertyDescriptor_ = proto=>
			proto
				? Object.getOwnPropertyDescriptor(proto, k) ?? k__PropertyDescriptor_(Object.getPrototypeOf(proto))
				: _undefined
		// TODO: why do private variable names affect bundle size?
		// attr name size optimization
		// obj__cache name size optimization
		let attr =
			// inlined el_ckey + ',' + k
			obj__cache[(ns ?? '') + ',' + name + ',' + k] ??=
				!k__PropertyDescriptor_(Object.getPrototypeOf(dom))?.set
		let setter_memo = (v?.memo_ ?? (fn=>fn))(_setter_memo=>{
			(val=>
				attr
					? val != _undefined // != ternary is a size optimization
						? dom.setAttribute(k, val)
						: dom.removeAttribute(k, val) // unused 2nd argument is a size optimization
					: dom[k] = val ?? ''
			)(
				typeof v === 'function' && !k.startsWith('on') || _setter_memo
					? v()
					: v)
			return _setter_memo
		})()
		if (setter_memo) {
			(dom._m ||= []).push(setter_memo)
		}
	}
	return attach(dom, ...c)
}, { get: (tag, name)=>tag.bind(_undefined, name) })
export let tags = tagsNS()
export let fragment_ = (...children)=>attach(document.createDocumentFragment(), ...children)
export let raw_ = html=>{
	let div = tags.div()
	div.innerHTML = html ?? ''
	let fragment = document.createDocumentFragment()
	while (div.firstChild) {
		fragment.appendChild(div.firstChild)
	}
	return fragment
}
export function hydrate(dom, f) {
	(f.memo_ ?? (f=>f))(memo=>{
		let _dom = dom__run(f, dom)
		if (!_dom) {
			dom.remove()
		} else if (dom !== _dom) {
			dom.replaceWith(_dom)
			dom = _dom
			if (memo) {
				(_dom._m ||= []).push(memo)
			}
		}
	})()
}
export function hy__bind(doc, key_R_fn) {
	let el_a = doc.querySelectorAll('[hy__bind]')
	for (let el of el_a) {
		let key = el.getAttribute('hy__bind')
		let fn = key_R_fn[key]
		if (!fn) throw new Error('no key: ' + key)
		fn(el)
	}
}
export let browser__relement = { attach, tags, tagsNS, fragment_, raw_, }
