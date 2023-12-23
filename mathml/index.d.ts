import { relement_env_T, tag_T } from '../isomorphic/index.js'
type arg_a_T<env_T extends relement_env_T, tag_name_T extends keyof MathMLElementTagNameMap> =
	Parameters<tag_T<env_T, MathMLElementTagNameMap[tag_name_T]>>
type ret_T<env_T extends relement_env_T, tag_name_T extends keyof MathMLElementTagNameMap> =
	ReturnType<tag_T<env_T, MathMLElementTagNameMap[tag_name_T]>>
export declare function annotation_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'annotation'>):ret_T<env_T, 'annotation'>
export declare function annotation_xml_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'annotation-xml'>):ret_T<env_T, 'annotation-xml'>
export declare function maction_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'maction'>):ret_T<env_T, 'maction'>
export declare function math_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'math'>):ret_T<env_T, 'math'>
export declare function merror_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'merror'>):ret_T<env_T, 'merror'>
export declare function mfrac_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mfrac'>):ret_T<env_T, 'mfrac'>
export declare function mi_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mi'>):ret_T<env_T, 'mi'>
export declare function mmultiscripts_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mmultiscripts'>):ret_T<env_T, 'mmultiscripts'>
export declare function mn_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mn'>):ret_T<env_T, 'mn'>
export declare function mo_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mo'>):ret_T<env_T, 'mo'>
export declare function mover_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mover'>):ret_T<env_T, 'mover'>
export declare function mpadded_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mpadded'>):ret_T<env_T, 'mpadded'>
export declare function mphantom_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mphantom'>):ret_T<env_T, 'mphantom'>
export declare function mprescripts_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mprescripts'>):ret_T<env_T, 'mprescripts'>
export declare function mroot_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mroot'>):ret_T<env_T, 'mroot'>
export declare function mrow_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mrow'>):ret_T<env_T, 'mrow'>
export declare function ms_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'ms'>):ret_T<env_T, 'ms'>
export declare function mspace_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mspace'>):ret_T<env_T, 'mspace'>
export declare function msqrt_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'msqrt'>):ret_T<env_T, 'msqrt'>
export declare function mstyle_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mstyle'>):ret_T<env_T, 'mstyle'>
export declare function msub_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'msub'>):ret_T<env_T, 'msub'>
export declare function msubsup_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'msubsup'>):ret_T<env_T, 'msubsup'>
export declare function msup_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'msup'>):ret_T<env_T, 'msup'>
export declare function mtable_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mtable'>):ret_T<env_T, 'mtable'>
export declare function mtd_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mtd'>):ret_T<env_T, 'mtd'>
export declare function mtext_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mtext'>):ret_T<env_T, 'mtext'>
export declare function mtr_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'mtr'>):ret_T<env_T, 'mtr'>
export declare function munder_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'munder'>):ret_T<env_T, 'munder'>
export declare function munderover_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'munderover'>):ret_T<env_T, 'munderover'>
export declare function semantics_<env_T extends relement_env_T>(...arg_a:arg_a_T<env_T, 'semantics'>):ret_T<env_T, 'semantics'>
