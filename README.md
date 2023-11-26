# relementjs (Reactive Element)

Isomorphic reactive uis for the browser & server.
The smallest reactive UI library on the browser & server.
Tiny tree-shakable modules originally forked from VanJS.

relementjs scales large & small with tree-shakable modules & no-fluff implementation.
relementjs includes rmemo as a reactive core & ctx-core for contexts...

| use case                                                     |   size    | imports                                                            |
|--------------------------------------------------------------|:---------:|--------------------------------------------------------------------|
| isomorphic browser                                           |  968 B   | rel__use browser__rel                                              |
| isomorphic server                                            |   765 B   | rel__use server__rel                                               |
| browser-only minimal                                         |   723 B   | tags                                                               |
| browser-only hydrate + helpers                               |   788 B   | tags hydrate _ bind_                                               |
| **browser-only hydrate + helpers + rmemo**                   | **818 B** | **tags hydrate _ bind_ memo_ sig_**                                |
| browser-only hydrate + helpers + rmemo + ctx                 |  965 B   | tags hydrate use _ bind_ memo_ sig_ be_ ctx_                       |
| isomorphic browser helpers + hydrate + helpers + rmemo + ctx |  1146 B   | rel__use browser__rel tags hydrate use _ bind_ memo_ sig_ be_ ctx_ |
| server-only minimal                                          |   511 B   | tags                                                               |
| **server-only render doc + helpers**                         | **562 B** | **tags doc_html_ tagsNS _ bind_**                                  |
| server-only render doc + helpers + rmemo                     |   898 B   | tags doc_html_ tagsNS _ bind_ memo_ sig_                           |
| server-only render doc + helpers + rmemo + ctx               |  1056 B   | tags doc_html_ tagsNS _ bind_ memo_ sig_ be_ ctx_                  |
| isomorphic server helpers + hydrate + helpers + rmemo + ctx  |  1259 B   | rel__use server__rel tags hydrate use _ bind_ memo_ sig_ be_ ctx_  |
| isomorphic html tag                                          |   34 B    | html_                                                              |
| isomorphic math tag                                          |   34 B    | math_                                                              |
| isomorphic svg tag                                           |   33 B    | svg_                                                               |

Note that the bold use cases are roughly equivalent to what VanJS provides. The browser-only library is smaller than
vanjs & the server-only library is smaller than mini-van-plate/van-plate. mini-van-plate & mini-van-plate/van-plate
does not provide server-side reactivity.

## isomorphic rendering

```ts
import { rel__use } from 'relementjs'
import { browser__rel } from 'relementjs/browser'
import { a_, div_ } from 'relementjs/html'
rel__use(browser__rel)
// import { server__rel } from 'relementjs/server'
// rel__use(server__rel)
div_(
	a_({ href: 'https://github.com/relementjs/relementjs' }, 'relementjs github page')
)
```

## browser rendering

```ts
import { tags } from 'relementjs/browser'
const { a, div } = tags
div(
	a({ href: 'https://github.com/relementjs/relementjs' }, 'relementjs github page')
)
```

## server rendering

```ts
import { tags } from 'relementjs/server'
const { a, div } = tags
div(
	a({ href: 'https://github.com/relementjs/relementjs' }, 'relementjs github page')
)
```
