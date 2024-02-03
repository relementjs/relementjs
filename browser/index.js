// originally forked from https://github.com/vanjs-org/van/blob/main/src/van.js
// This file consistently uses `let` keyword instead of `const` for reducing the bundle size.
export * from 'ctx-core/rmemo'
// Global variables - aliasing some builtin symbols to reduce the bundle size.
let _undefined
let I = f=>f
let obj__cache = {}
export function attach(dom, ...children) {
	for (let child_val of children.flat(Infinity)) {
		let child
		if (typeof child_val === 'function') {
			(child_val.memo_ ?? I)(child_val_memo=>{
				try {
					let _child = child_val(child)
					_child = _child?.nodeType ? _child : new Text(_child ?? '')
					child?.replaceWith(_child)
					if (child_val_memo) (_child._m ||= []).push(child_val_memo)
					child = _child
				} catch (e) {
					console.error(e)
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
		obj__cache[ns + ',' + name] ??=
			ns
				? document.createElementNS(ns, name)
				: document.createElement(name)
	).cloneNode()
	for (let k in params) {
		let v = params[k]
		let PropertyDescriptor_ = proto=>
			proto
			&& (
				Object.getOwnPropertyDescriptor(proto, k)
				?? PropertyDescriptor_(Object.getPrototypeOf(proto)))
		// TODO: why do private variable names affect bundle size?
		// attr name size optimization
		// obj__cache name size optimization
		let attr =
			obj__cache[ns + ',' + name + ',' + k] ??=
				!PropertyDescriptor_(Object.getPrototypeOf(dom))?.set
		let setter_memo = (v?.memo_ ?? I)(_setter_memo=>{
			let val =
				typeof v === 'function' && !k.startsWith('on') || _setter_memo
					? v()
					: v
			attr
				? val != _undefined // != ternary is a size optimization
					? dom.setAttribute(k, val)
					: dom.removeAttribute(k, val) // unused 2nd argument is a size optimization
				: dom[k] = val ?? ''
			return _setter_memo
		})()
		if (setter_memo) {
			(dom._m ||= []).push(setter_memo)
		}
	}
	return attach(dom, ...c)
}, {
	get: (tag, name)=>tag.bind(_undefined, name)
})
/** @type {browser__tags_T<'html'>} */
export let tags = tagsNS('')
export let fragment_ = (...children)=>attach(document.createDocumentFragment(), ...children)
/**
 * Reactive raw elements
 * @param {browser__tag_dom_T}html
 * @returns {DocumentFragment}
 * @private
 */
export let raw_ = html=>{
	let div = tags.div()
	let fragment = document.createDocumentFragment()
	;(html?.memo_ ?? I)(memo=>{
		div.innerHTML = (typeof html === 'function' ? html(fragment) : html) ?? ''
		fragment.replaceChildren(...div.children)
		let c = [...fragment.children]
		c.map(child=>child._m = [memo])
		let prev_c = fragment.c
		fragment.c = c
		if (prev_c) {
			let cur_child
			for (let prev_child of prev_c) {
				cur_child = fragment.firstChild
				if (cur_child) {
					prev_child.replaceWith(/** @type {Node} */cur_child)
				} else {
					prev_child.remove()
				}
			}
			(cur_child ?? fragment.firstChild)?.after(...fragment.children)
		}
	})()
	return fragment
}
/**
 * @param {Element}dom
 * @param {()=>unknown}f
 */
export function hydrate(dom, f) {
	(f.memo_ ?? I)(memo=>{
		try {
			let _dom = f(dom)
			_dom = _dom?.nodeType ? _dom : new Text(_dom ?? '')
			dom.replaceWith(_dom)
			if (memo) (_dom._m ||= []).push(memo)
			dom = _dom
		} catch (e) {
			console.error(e)
		}
	})()
}
/**
 * @param {Element}doc
 * @param {Record<string, (el:Node)=>unknown}key_R_fn
 */
export function hy__bind(doc, key_R_fn) {
	for (let el of doc.querySelectorAll('[hy__bind]')) {
		doc = el.getAttribute('hy__bind')
		if (!key_R_fn[doc]) throw Error('no key: ' + doc)
		key_R_fn[doc](el)
	}
}
export let browser__relement = { attach, tags, tagsNS, fragment_, raw_, }
