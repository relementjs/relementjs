/**
 * Hydrate server rendered elements with the hy_op attribute using the associated value function.
 * Using @ctx-core/preprocess with the DEBUG env will call verify_hy_op.
 * @param {Element}doc
 * @param {Record<string, (el:Node)=>unknown}op_R_fn
 */
export function hy_op(doc, op_R_fn) {
	/* @if DEBUG **
	 verify_hy_op(doc, op_R_fn)
	/* @endif */
	/* @if !DEBUG */
	for (let el of doc.querySelectorAll('[hy_op]')) {
		doc = el.getAttribute('hy_op')
		op_R_fn[doc](el)
	}
	/* @endif */
}
/**
 * Hydrate server rendered elements with the hy_op attribute using the associated value function.
 * Verify all the hy_op keys are used. Primarily for development & debugging.
 * @param {Element}doc
 * @param {Record<string, (el:Node)=>unknown}op_R_fn
 */
export function verify_hy_op(doc, op_R_fn) {
	let op_S = new Set
	for (let el of doc.querySelectorAll('[hy_op]')) {
		doc = el.getAttribute('hy_op')
		if (!op_R_fn[doc]) throw Error('hy_op: ' + doc)
		op_R_fn[doc](el)
		op_S.add(doc)
	}
	for (let key in op_R_fn) {
		op_S.delete(key)
	}
	if (op_S) throw Error('unused hy_op: ' + op_S.keys())
}
