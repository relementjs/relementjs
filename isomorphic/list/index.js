import { memo_, sig_ } from 'ctx-core/rmemo'
import { attach } from '../index.js'
let _undefined
/**
 * @param {tag_dom_T&{ loop$?:memo_T<void> }}root
 * @param {()=>unknown[]}item_a1_
 * @param {(item:unknown, i$:memo_T<number>)=>tag_dom_T}node_
 * @returns {tag_dom_T}
 * @private
 */
export function item_list_(root, item_a1_, node_) {
	let item_M_state$ = new WeakMap
	let slot$_a = []
	;(root._m ||= []).push(
		memo_(loop$=>{
			let _slot$_a = [...slot$_a]
			let idx = 0
			for (let item of item_a1_()) {
				let state = item_M_state$.get(item) ?? {}
				let i = state.i ?? sig_(0)
				i._ = idx
				let n = state.n ?? node_(item, i)
				let t = _slot$_a[idx] ??= sig_(_undefined)
				t.i = idx
				if (state.t && state.t.i > idx && t !== state.t) {
					state.t._ = _undefined
				}
				t._ = n
				item_M_state$.set(item, { i, n, t })
				idx++
			}
			attach(root, _slot$_a.slice(slot$_a.length))
			for (let t of _slot$_a.slice(idx)) {
				t._ = _undefined
			}
			slot$_a = _slot$_a.slice(0, idx)
			return loop$
		})()
	)
	return root
}
