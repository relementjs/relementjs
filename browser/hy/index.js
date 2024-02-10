/**
 * Hydrate server rendered elements with the hyop attribute using the associated value function.
 * Using @ctx-core/preprocess with the DEBUG env will call verify_hyop.
 * @param {Element}doc
 * @param {Record<string, (el:Node)=>unknown}op_R_fn
 */
export function single_hyop(doc, op_R_fn) {
	/* @if DEBUG **
	 verify_hyop(doc, op_R_fn)
	/* @endif */
	/* @if !DEBUG */
	for (let el of doc.querySelectorAll('[hyop]')) {
		doc = el.getAttribute('hyop')
		op_R_fn[doc](el)
	}
	/* @endif */
}
/**
 * Hydrate server rendered elements with the hyop attribute using the associated value function.
 * Verify all the hyop keys are used. Primarily for development & debugging.
 * @param {Element}doc
 * @param {Record<string, (el:Node)=>unknown}op_R_fn
 */
export function verify_single_hyop(doc, op_R_fn) {
	let op_S = new Set
	for (let el of doc.querySelectorAll('[hyop]')) {
		doc = el.getAttribute('hyop')
		if (!op_R_fn[doc]) throw Error('hyop: ' + doc)
		op_R_fn[doc](el)
		op_S.add(doc)
	}
	for (let key in op_R_fn) {
		op_S.delete(key)
	}
	if (op_S) throw Error('unused hyop: ' + op_S.keys())
}
export function multi_hyop(doc, op_R_fn) {
	/* @if DEBUG **
	 verify_hyops(doc, op_R_fn)
	 /* @endif */
	/* @if !DEBUG */
	for (let el of doc.querySelectorAll('[hyop]')) {
		doc = el.getAttribute('hyop')
		for (let op of doc.split(/\s+/)) {
			op_R_fn[op](el)
		}
	}
	/* @endif */
}
export function verify_multi_hyop(doc, op_R_fn) {
	let op_S = new Set
	for (let el of doc.querySelectorAll('[hyop]')) {
		doc = el.getAttribute('hyop')
		for (let op of doc.split(/\s+/)) {
			op_R_fn[op](el)
			op_S.add(doc)
		}
	}
	for (let key in op_R_fn) {
		op_S.delete(key)
	}
	if (op_S) throw Error('unused hyop: ' + op_S.keys())
}
