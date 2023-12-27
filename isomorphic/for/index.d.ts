import type { relement_env_T, tag__dom_T } from '../../index.d.ts'
export declare function for_<
	env_T extends relement_env_T,
	each_T extends unknown[]
>(
	config:{ each:each_T },
	fn:(
		item:each_T[number],
		i:number,
		a:each_T
	)=>tag__dom_T<env_T>
):tag__dom_T<env_T>[]
