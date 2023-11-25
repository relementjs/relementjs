// originally forked from https://github.com/vanjs-org/van/blob/main/src/van.js
// This file consistently uses `let` keyword instead of `const` for reducing the bundle size.
import { memo_ } from 'ctx-core/rmemo'
export * from 'ctx-core/rmemo'
// Global variables - aliasing some builtin symbols to reduce the bundle size.
let _undefined
let prop_setter_cache = {}
let obj__proto = Object.getPrototypeOf(prop_setter_cache)
function dom__run(f, _dom) {
	let val
	try {
		val = f(_dom)
	} catch (e) {
		console.error(e)
		return _dom
	}
	return val?.nodeType ? val : new Text(val ?? '')
}
export let _ = s=>s?.rmr ? s() : s
export function attach(dom, ...children) {
	for (let child_val of children.flat(Infinity)) {
		let child
		let child_val_ =
			child_val?.rmr
				? ()=>child_val()
				: typeof child_val === 'function'
					? child_val
					: 0
		let child_val_rmemo =
			child_val_
				? memo_(child_val_rmemo=>{
					let _child = dom__run(child_val_, child)
					if (child) child.replaceWith(_child)
					child = _child
					return child_val_rmemo
				})()
				: 0
		if (!child_val_rmemo) {
			child = child_val
		} else if (child) {
			(child._m ||= []).push(child_val_rmemo)
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
		Object.getPrototypeOf(args[0] ?? 0) === obj__proto && !args[0].rmr
			? args
			: [{}, ...args]
	let dom =
		ns
			? document.createElementNS(ns, name)
			: document.createElement(name)
	for (let [k, v] of Object.entries(params)) {
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
		let v_ =
			v?.rmr
				? ()=>v()
				: typeof v === 'function' && (!k.startsWith('on') || v.b)
					? v
					: 0
		let setter_rmemo =
			v_
				? memo_(()=>dom__run(()=>param__setter(v_(dom), dom)))
				: 0
		if (v_) {
			(dom._m ||= []).push(setter_rmemo)
			setter_rmemo()
		} else {
			param__setter(v)
		}
	}
	return attach(dom, ...children)
}, { get: (tag, name)=>tag.bind(_undefined, name) })
export let tags = tagsNS()
export function hydrate(dom, f) {
	memo_(rmemo=>{
		let _dom = dom__run(f, dom)
		if (!_dom) {
			dom.remove()
		} else if (dom !== _dom) {
			dom.replaceWith(_dom)
			dom = _dom
			;(dom._m ||= []).push(rmemo)
		}
	})()
}
export let browser__rel = { _, attach, bind_, tags, tagsNS, hydrate, }
