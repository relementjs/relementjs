/// <reference types="../../index.d.ts" />
export function for_({ each }, fn) {
	return each.map(fn)
}
