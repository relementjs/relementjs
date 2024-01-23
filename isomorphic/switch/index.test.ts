import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { div_ } from '../../html/index.js'
import { server__relement } from '../../server/index.js'
import { relement__use } from '../index.js'
import { switch_ } from './index.js'
test.after.each(()=>{
	relement__use(null)
})
test('switch_', ()=>{
	relement__use(server__relement)
	equal(
		'' + switch_({
			case_aa: [
				[true, ()=>div_('case0')],
				[true, ()=>div_('case1')],
			]
		}, div_('default')),
		'<div>case0</div>')
	equal(
		'' + switch_({
			case_aa: [
				[false, ()=>div_('case0')],
				[true, ()=>div_('case1')],
			]
		}, div_('default')),
		'<div>case1</div>')
	equal(
		'' + switch_({
			case_aa: [
				[false, ()=>div_('case0')],
				[false, ()=>div_('case1')],
			]
		}, div_('default')),
		'<div>default</div>')
})
test.run()
