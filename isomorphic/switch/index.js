/// <reference types="../../index.d.ts" />
export function switch_({ case_aa }, ...children) {
	for (let i = 0; i < case_aa.length; i++) {
		const a = case_aa[i]
		if (a[0]) return a[1]()
	}
	return children
}
