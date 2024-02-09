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
