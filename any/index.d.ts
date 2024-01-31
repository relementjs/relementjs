import type { rmemo_T } from 'ctx-core/rmemo'
export type tag_primitive_T =
	|string
	|number
	|boolean
	|bigint
export type tag_props_val_T =
	|tag_primitive_T
	|((e:never)=>unknown)
	|null
	|undefined
export type tag_props_val_OR_rmemo_T_OR_Fn =
	|tag_props_val_T
	|rmemo_T<tag_props_val_T>
	|(()=>tag_props_val_T)
export type bind__T = (f:()=>tag_props_val_T)=>()=>tag_props_val_T
// @formatter:off
export type tag_props_T<ElementType = unknown> = (
	unknown extends ElementType
		? Record<string, tag_props_val_OR_rmemo_T_OR_Fn>
		: |Partial<{ [K in keyof ElementType]:tag_props_val_OR_rmemo_T_OR_Fn }>
			|Record<string, tag_props_val_OR_rmemo_T_OR_Fn>
)&{ class?:tag_props_val_OR_rmemo_T_OR_Fn }
// @formatter:on
export type tag_env_T = 'any'|'html'|'svg'|'mathml'
export type tag_namespaceURI_T<tags_env_T extends tag_env_T> =
	tags_env_T extends 'svg'
		? 'http://www.w3.org/2000/svg'
		: tags_env_T extends 'mathml'
			? 'http://www.w3.org/1998/Math/MathML'
			: tags_env_T extends 'html'
				? 'http://www.w3.org/1999/xhtml'
				: string
