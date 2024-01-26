import type { known_keys__render_props_T, render_props_T } from '../any/index.js'
import type { Node_T, relement_env_T, tag__dom_T } from '../isomorphic/index.js'
type arg_a_T<tag_name_T extends keyof SVGElementTagNameMap> =
	|[]
	|[known_keys__render_props_T<SVGElementTagNameMap[tag_name_T]>|render_props_T, ...tag__dom_T<'any'>[]]
	|tag__dom_T<'any'>[]
type ret_T<env_T extends relement_env_T, tag_name_T extends keyof SVGElementTagNameMap> =
	Node_T<env_T, SVGElementTagNameMap[tag_name_T]>
export declare function a_<env_T extends relement_env_T>(...arg_a:arg_a_T<'a'>):ret_T<env_T, 'a'>
export declare function animate_<env_T extends relement_env_T>(...arg_a:arg_a_T<'animate'>):ret_T<env_T, 'animate'>
export declare function animateMotion_<env_T extends relement_env_T>(...arg_a:arg_a_T<'animateMotion'>):ret_T<env_T, 'animateMotion'>
export declare function animateTransform_<env_T extends relement_env_T>(...arg_a:arg_a_T<'animateTransform'>):ret_T<env_T, 'animateTransform'>
export declare function circle_<env_T extends relement_env_T>(...arg_a:arg_a_T<'circle'>):ret_T<env_T, 'circle'>
export declare function clipPath_<env_T extends relement_env_T>(...arg_a:arg_a_T<'clipPath'>):ret_T<env_T, 'clipPath'>
export declare function defs_<env_T extends relement_env_T>(...arg_a:arg_a_T<'defs'>):ret_T<env_T, 'defs'>
export declare function desc_<env_T extends relement_env_T>(...arg_a:arg_a_T<'desc'>):ret_T<env_T, 'desc'>
export declare function ellipse_<env_T extends relement_env_T>(...arg_a:arg_a_T<'ellipse'>):ret_T<env_T, 'ellipse'>
export declare function feBlend_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feBlend'>):ret_T<env_T, 'feBlend'>
export declare function feColorMatrix_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feColorMatrix'>):ret_T<env_T, 'feColorMatrix'>
export declare function feComponentTransfer_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feComponentTransfer'>):ret_T<env_T, 'feComponentTransfer'>
export declare function feComposite_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feComposite'>):ret_T<env_T, 'feComposite'>
export declare function feConvolveMatrix_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feConvolveMatrix'>):ret_T<env_T, 'feConvolveMatrix'>
export declare function feDiffuseLighting_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feDiffuseLighting'>):ret_T<env_T, 'feDiffuseLighting'>
export declare function feDisplacementMap_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feDisplacementMap'>):ret_T<env_T, 'feDisplacementMap'>
export declare function feDistantLight_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feDistantLight'>):ret_T<env_T, 'feDistantLight'>
export declare function feDropShadow_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feDropShadow'>):ret_T<env_T, 'feDropShadow'>
export declare function feFlood_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feFlood'>):ret_T<env_T, 'feFlood'>
export declare function feFuncA_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feFuncA'>):ret_T<env_T, 'feFuncA'>
export declare function feFuncB_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feFuncB'>):ret_T<env_T, 'feFuncB'>
export declare function feFuncG_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feFuncG'>):ret_T<env_T, 'feFuncG'>
export declare function feFuncR_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feFuncR'>):ret_T<env_T, 'feFuncR'>
export declare function feGaussianBlur_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feGaussianBlur'>):ret_T<env_T, 'feGaussianBlur'>
export declare function feImage_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feImage'>):ret_T<env_T, 'feImage'>
export declare function feMerge_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feMerge'>):ret_T<env_T, 'feMerge'>
export declare function feMergeNode_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feMergeNode'>):ret_T<env_T, 'feMergeNode'>
export declare function feMorphology_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feMorphology'>):ret_T<env_T, 'feMorphology'>
export declare function feOffset_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feOffset'>):ret_T<env_T, 'feOffset'>
export declare function fePointLight_<env_T extends relement_env_T>(...arg_a:arg_a_T<'fePointLight'>):ret_T<env_T, 'fePointLight'>
export declare function feSpecularLighting_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feSpecularLighting'>):ret_T<env_T, 'feSpecularLighting'>
export declare function feSpotLight_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feSpotLight'>):ret_T<env_T, 'feSpotLight'>
export declare function feTile_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feTile'>):ret_T<env_T, 'feTile'>
export declare function feTurbulence_<env_T extends relement_env_T>(...arg_a:arg_a_T<'feTurbulence'>):ret_T<env_T, 'feTurbulence'>
export declare function filter_<env_T extends relement_env_T>(...arg_a:arg_a_T<'filter'>):ret_T<env_T, 'filter'>
export declare function foreignObject_<env_T extends relement_env_T>(...arg_a:arg_a_T<'foreignObject'>):ret_T<env_T, 'foreignObject'>
export declare function g_<env_T extends relement_env_T>(...arg_a:arg_a_T<'g'>):ret_T<env_T, 'g'>
export declare function image_<env_T extends relement_env_T>(...arg_a:arg_a_T<'image'>):ret_T<env_T, 'image'>
export declare function line_<env_T extends relement_env_T>(...arg_a:arg_a_T<'line'>):ret_T<env_T, 'line'>
export declare function linearGradient_<env_T extends relement_env_T>(...arg_a:arg_a_T<'linearGradient'>):ret_T<env_T, 'linearGradient'>
export declare function marker_<env_T extends relement_env_T>(...arg_a:arg_a_T<'marker'>):ret_T<env_T, 'marker'>
export declare function mask_<env_T extends relement_env_T>(...arg_a:arg_a_T<'mask'>):ret_T<env_T, 'mask'>
export declare function metadata_<env_T extends relement_env_T>(...arg_a:arg_a_T<'metadata'>):ret_T<env_T, 'metadata'>
export declare function mpath_<env_T extends relement_env_T>(...arg_a:arg_a_T<'mpath'>):ret_T<env_T, 'mpath'>
export declare function path_<env_T extends relement_env_T>(...arg_a:arg_a_T<'path'>):ret_T<env_T, 'path'>
export declare function pattern_<env_T extends relement_env_T>(...arg_a:arg_a_T<'pattern'>):ret_T<env_T, 'pattern'>
export declare function polygon_<env_T extends relement_env_T>(...arg_a:arg_a_T<'polygon'>):ret_T<env_T, 'polygon'>
export declare function polyline_<env_T extends relement_env_T>(...arg_a:arg_a_T<'polyline'>):ret_T<env_T, 'polyline'>
export declare function radialGradient_<env_T extends relement_env_T>(...arg_a:arg_a_T<'radialGradient'>):ret_T<env_T, 'radialGradient'>
export declare function rect_<env_T extends relement_env_T>(...arg_a:arg_a_T<'rect'>):ret_T<env_T, 'rect'>
export declare function script_<env_T extends relement_env_T>(...arg_a:arg_a_T<'script'>):ret_T<env_T, 'script'>
export declare function set_<env_T extends relement_env_T>(...arg_a:arg_a_T<'set'>):ret_T<env_T, 'set'>
export declare function stop_<env_T extends relement_env_T>(...arg_a:arg_a_T<'stop'>):ret_T<env_T, 'stop'>
export declare function style_<env_T extends relement_env_T>(...arg_a:arg_a_T<'style'>):ret_T<env_T, 'style'>
export declare function svg_<env_T extends relement_env_T>(...arg_a:arg_a_T<'svg'>):ret_T<env_T, 'svg'>
export declare function switch_<env_T extends relement_env_T>(...arg_a:arg_a_T<'switch'>):ret_T<env_T, 'switch'>
export declare function symbol_<env_T extends relement_env_T>(...arg_a:arg_a_T<'symbol'>):ret_T<env_T, 'symbol'>
export declare function text_<env_T extends relement_env_T>(...arg_a:arg_a_T<'text'>):ret_T<env_T, 'text'>
export declare function textPath_<env_T extends relement_env_T>(...arg_a:arg_a_T<'textPath'>):ret_T<env_T, 'textPath'>
export declare function title_<env_T extends relement_env_T>(...arg_a:arg_a_T<'title'>):ret_T<env_T, 'title'>
export declare function tspan_<env_T extends relement_env_T>(...arg_a:arg_a_T<'tspan'>):ret_T<env_T, 'tspan'>
export declare function use_<env_T extends relement_env_T>(...arg_a:arg_a_T<'use'>):ret_T<env_T, 'use'>
export declare function view_<env_T extends relement_env_T>(...arg_a:arg_a_T<'view'>):ret_T<env_T, 'view'>
