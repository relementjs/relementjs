import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { div_ } from '../../html/index.js'
import { server__relement } from '../../server/index.js'
import { fragment_, relement__use } from '../index.js'
import { for_ } from './index.js'
test.after.each(()=>{
	relement__use(null)
})
test('for_', ()=>{
	relement__use(server__relement)
	equal(
		'' + fragment_(
			for_({
				each: ['foo', 'bar', 'baz']
			}, (item, i)=>div_(item + '-' + i))),
		'<div>foo-0</div><div>bar-1</div><div>baz-2</div>')
})
test.run()
