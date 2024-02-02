import type { memo_T, relement_env_T, tag_dom_T } from '../index.js'
export declare function item_list_<
	env_T extends relement_env_T = 'any',
	root_T extends tag_dom_T<env_T> = tag_dom_T<env_T>,
	I extends object = object
>(
	root:root_T&{ loop$?:memo_T<void> },
	item_a1_:()=>I[],
	node_:(item:I, idx$:memo_T<number>)=>tag_dom_T,
):root_T
