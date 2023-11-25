# reljs (Reactive Element)

Isomorphic reactive uis for the browser & server.
The smallest reactive UI library on the browser & server.
Tiny tree-shakable modules originally forked from VanJS.

reljs scales large & small with tree-shakable modules & no-fluff implementation.
reljs includes rmemo as a reactive core & ctx-core for contexts...

| use case                                                     |   size    | imports                                                            |
|--------------------------------------------------------------|:---------:|--------------------------------------------------------------------|
| isomorphic browser                                           |  991 B   | rel__use browser__rel                                              |
| isomorphic server                                            |   765 B   | rel__use server__rel                                               |
| browser-only minimal                                         |   748 B   | tags                                                               |
| browser-only hydrate + helpers                               |   818 B   | tags hydrate _ bind_                                               |
| **browser-only hydrate + helpers + rmemo**                   | **838 B** | **tags hydrate _ bind_ memo_ sig_**                                |
| browser-only hydrate + helpers + rmemo + ctx                 |  990 B   | tags hydrate use _ bind_ memo_ sig_ be_ ctx_                       |
| isomorphic browser helpers + hydrate + helpers + rmemo + ctx |  1167 B   | rel__use browser__rel tags hydrate use _ bind_ memo_ sig_ be_ ctx_ |
| server-only minimal                                          |   511 B   | tags                                                               |
| **server-only render doc + helpers**                         | **562 B** | **tags doc_html_ tagsNS _ bind_**                                  |
| server-only render doc + helpers + rmemo                     |   897 B   | tags doc_html_ tagsNS _ bind_ memo_ sig_                           |
| server-only render doc + helpers + rmemo + ctx               |  1052 B   | tags doc_html_ tagsNS _ bind_ memo_ sig_ be_ ctx_                  |
| isomorphic server helpers + hydrate + helpers + rmemo + ctx  |  1249 B   | rel__use server__rel tags hydrate use _ bind_ memo_ sig_ be_ ctx_  |
| isomorphic html tag                                          |   34 B    | html_                                                              |
| isomorphic math tag                                          |   34 B    | math_                                                              |
| isomorphic svg tag                                           |   33 B    | svg_                                                               |

Note that the bold use cases are roughly equivalent to what VanJS provides. The browser-only library is smaller than
vanjs & the server-only library is smaller than mini-van-plate/van-plate. mini-van-plate & mini-van-plate/van-plate
does not provide server-side reactivity.

## isomorphic rendering

```ts
import { rel__use } from 'reljs'
import { browser__rel } from 'reljs/browser'
import { a_, div_ } from 'reljs/html'
rel__use(browser__rel)
// import { server__rel } from 'reljs/server'
// rel__use(server__rel)
div_(
	a_({ href: 'https://github.com/reljs/reljs' }, 'reljs github page')
)
```

## browser rendering

```ts
import { tags } from 'reljs/browser'
const { a, div } = tags
div(
	a({ href: 'https://github.com/reljs/reljs' }, 'reljs github page')
)
```

## server rendering

```ts
import { tags } from 'reljs/server'
const { a, div } = tags
div(
	a({ href: 'https://github.com/reljs/reljs' }, 'reljs github page')
)
```
