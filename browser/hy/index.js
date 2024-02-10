/**
 * @param {Element}doc
 * @param {Record<string, (el:Node)=>unknown}key_R_fn
 */
export function hy_op(doc, key_R_fn) {
	for (let el of doc.querySelectorAll('[hy_op]')) {
		doc = el.getAttribute('hy_op')
		if (!key_R_fn[doc]) throw Error('hy_op: ' + doc)
		key_R_fn[doc](el)
	}
}
