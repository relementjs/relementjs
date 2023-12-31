# relementjs (Reactive Element)

Isomorphic reactive uis for the browser & server.
The smallest reactive UI library on the browser & server.
Tiny tree-shakable modules originally forked from VanJS.

relementjs scales large & small with tree-shakable modules & no-fluff implementation.
relementjs includes rmemo as a reactive core & ctx-core for contexts...

| use case                                   |   size    | imports                                  |
|--------------------------------------------|:---------:|------------------------------------------|
| browser-only minimal                       |   747 B   | tags                                     |
| browser-only hydrate + helpers             |   811 B   | tags hydrate _ bind_                     |
| **browser-only hydrate + helpers + rmemo** | **828 B** | **tags hydrate _ bind_ memo_ sig_**      |
| server-only minimal                        |   470 B   | tags                                     |
| **server-only render doc + helpers**       | **517 B** | **tags doc_html_ tagsNS _ bind_**        |
| server-only render doc + helpers + rmemo   |   854 B   | tags doc_html_ tagsNS _ bind_ memo_ sig_ |
| isomorphic browser                         |   998 B   | relement__use browser__relement    |
| isomorphic server                          |   717 B   | relement__use server__base__relement     |
| isomorphic html tag                        |   34 B    | html_                                    |

Note that the bold use cases are roughly equivalent to what VanJS provides. The browser-only library is smaller than
vanjs & the server-only library is smaller than mini-van-plate/van-plate. mini-van-plate & mini-van-plate/van-plate
does not provide server-side reactivity.

## isomorphic rendering

```ts
import { relement__use } from 'relementjs'
import { browser__relement } from 'relementjs/browser'
import { a_, div_ } from 'relementjs/html'
relement__use(browser__relement)
// import { server__base__relement } from 'relementjs/server'
// relement__use(server__base__relement)
div_(
  a_({ href: 'https://github.com/relementjs/relementjs' },
    'relementjs github page'))
```

## browser rendering

```ts
import { tags } from 'relementjs/browser'
const { a, div } = tags
div(
  a({ href: 'https://github.com/relementjs/relementjs' },
    'relementjs github page'))
```

## server rendering

```ts
import { tags } from 'relementjs/server'
const { a, div } = tags
div(
  a({ href: 'https://github.com/relementjs/relementjs' },
    'relementjs github page'))
```
