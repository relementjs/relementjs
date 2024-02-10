export declare function single_hyop(
	doc:{ querySelectorAll(selectors:string):NodeList },
	key_R_fn:Record<string, hy__bind_fn_T<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]|SVGElementTagNameMap[keyof SVGElementTagNameMap]|MathMLElementTagNameMap[keyof MathMLElementTagNameMap]>>
):void
export declare function verify_single_hyop(
	doc:{ querySelectorAll(selectors:string):NodeList },
	key_R_fn:Record<string, hy__bind_fn_T<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]|SVGElementTagNameMap[keyof SVGElementTagNameMap]|MathMLElementTagNameMap[keyof MathMLElementTagNameMap]>>
):void
export declare function multi_hyop(
	doc:{ querySelectorAll(selectors:string):NodeList },
	key_R_fn:Record<string, hy__bind_fn_T<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]|SVGElementTagNameMap[keyof SVGElementTagNameMap]|MathMLElementTagNameMap[keyof MathMLElementTagNameMap]>>
):void
export declare function verify_multi_hyop(
	doc:{ querySelectorAll(selectors:string):NodeList },
	key_R_fn:Record<string, hy__bind_fn_T<HTMLElementTagNameMap[keyof HTMLElementTagNameMap]|SVGElementTagNameMap[keyof SVGElementTagNameMap]|MathMLElementTagNameMap[keyof MathMLElementTagNameMap]>>
):void
export type hy__bind_fn_T<E> = E extends unknown ? (el:E)=>unknown : never
