import type { relement_env_T, tag_dom_T } from '../../index.d.ts'
export declare function switch_<env_T extends relement_env_T>(
	config:{ case_aa:[unknown, ()=>tag_dom_T<'any'>][] },
	...children:tag_dom_T<'any'>[]
):tag_dom_T<env_T>[]
