/// <reference types="./index.d.ts" />
import { tagsNS } from '../isomorphic/index.js'
let _tagsNS, mathml_tags
export function mathml_tags_() {
	if (_tagsNS !== tagsNS) {
		_tagsNS = tagsNS
		mathml_tags = _tagsNS?.('http://www.w3.org/1998/Math/MathML')
	}
	return mathml_tags
}
export let annotation_ = (...arg_a)=>mathml_tags_().annotation(...arg_a)
export let annotation_xml_ = (...arg_a)=>mathml_tags_()['annotation-xml'](...arg_a)
export let maction_ = (...arg_a)=>mathml_tags_().maction(...arg_a)
export let math_ = (...arg_a)=>mathml_tags_().math(...arg_a)
export let merror_ = (...arg_a)=>mathml_tags_().merror(...arg_a)
export let mfrac_ = (...arg_a)=>mathml_tags_().mfrac(...arg_a)
export let mi_ = (...arg_a)=>mathml_tags_().mi(...arg_a)
export let mmultiscripts_ = (...arg_a)=>mathml_tags_().mmultiscripts(...arg_a)
export let mn_ = (...arg_a)=>mathml_tags_().mn(...arg_a)
export let mo_ = (...arg_a)=>mathml_tags_().mo(...arg_a)
export let mover_ = (...arg_a)=>mathml_tags_().mover(...arg_a)
export let mpadded_ = (...arg_a)=>mathml_tags_().mpadded(...arg_a)
export let mphantom_ = (...arg_a)=>mathml_tags_().mphantom(...arg_a)
export let mprescripts_ = (...arg_a)=>mathml_tags_().mprescripts(...arg_a)
export let mroot_ = (...arg_a)=>mathml_tags_().mroot(...arg_a)
export let mrow_ = (...arg_a)=>mathml_tags_().mrow(...arg_a)
export let ms_ = (...arg_a)=>mathml_tags_().ms(...arg_a)
export let mspace_ = (...arg_a)=>mathml_tags_().mspace(...arg_a)
export let msqrt_ = (...arg_a)=>mathml_tags_().msqrt(...arg_a)
export let mstyle_ = (...arg_a)=>mathml_tags_().mstyle(...arg_a)
export let msub_ = (...arg_a)=>mathml_tags_().msub(...arg_a)
export let msubsup_ = (...arg_a)=>mathml_tags_().msubsup(...arg_a)
export let msup_ = (...arg_a)=>mathml_tags_().msup(...arg_a)
export let mtable_ = (...arg_a)=>mathml_tags_().mtable(...arg_a)
export let mtd_ = (...arg_a)=>mathml_tags_().mtd(...arg_a)
export let mtext_ = (...arg_a)=>mathml_tags_().mtext(...arg_a)
export let mtr_ = (...arg_a)=>mathml_tags_().mtr(...arg_a)
export let munder_ = (...arg_a)=>mathml_tags_().munder(...arg_a)
export let munderover_ = (...arg_a)=>mathml_tags_().munderover(...arg_a)
export let semantics_ = (...arg_a)=>mathml_tags_().semantics(...arg_a)
