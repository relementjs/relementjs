import type { rmemo_T } from 'ctx-core/rmemo'
export type render_primitive_T = string|number|boolean|bigint
export type render_props_val_T = render_primitive_T|((e:unknown)=>void)|null
export type render_props_val_OR_rmemo_T_OR_Fn = render_props_val_T|rmemo_T<render_props_val_T>|(()=>render_props_val_T)
export type bind__T = (f:()=>render_props_val_T)=>()=>render_props_val_T
export type render_props_T =
	Record<string, render_props_val_OR_rmemo_T_OR_Fn>
	&{ class?:render_props_val_OR_rmemo_T_OR_Fn }
export type known_keys__render_props_T<ElementType> =
	Partial<{ [K in keyof ElementType]:render_props_val_OR_rmemo_T_OR_Fn }>
	&{ class?:render_props_val_OR_rmemo_T_OR_Fn }
export type render__tags_env_T = 'any'|'html'|'svg'|'mathml'
export type render__namespaceURI_T<tags_env_T extends render__tags_env_T> =
	tags_env_T extends 'svg'
		? 'http://www.w3.org/2000/svg'
		: tags_env_T extends 'mathml'
			? 'http://www.w3.org/1998/Math/MathML'
			: tags_env_T extends 'html'
				? 'http://www.w3.org/1999/xhtml'
				: string
export type render____T<T> = (s:T|rmemo_T<T>)=>T
