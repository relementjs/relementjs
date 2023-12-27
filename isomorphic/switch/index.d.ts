import type { relement_env_T, tag__dom_T } from '../../index.d.ts'
export declare function switch_<env_T extends relement_env_T>(
	config:{ case_aa:[unknown, ()=>tag__dom_T<env_T>][] },
	...children:tag__dom_T<env_T>[]
):tag__dom_T<env_T>[]
