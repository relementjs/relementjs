# relementjs (Reactive Element)

Isomorphic ui rendering & state management on the browser & server. The smallest reactive UI library on the browser & server. relementjs scales large & small with tree-shakable modules for rendering, reactivity, contexts, & hydration.

| use case                         | reactive |   size    | imports                              |
|----------------------------------|:--------:|:---------:|--------------------------------------|
| browser-only minimal             |    ❌     |   446 B   | tags                                 |
| browser-only hydrate             |    ❌     |   470 B   | tags hydrate                         |
| browser-only hyop                |    -     |   471 B   | tags hyop                            |
| single_hyop only                 |    -     |   61 B    | single_hyop                          |
| multi_hyop only                  |    -     |   81 B    | multi_hyop                           |
| **browser-only hydrate + rmemo** |    ✅     | **816 B** | **tags hydrate _ memo_ sig_**        |
| browser-only hyop + rmemo        |    ✅     |   818 B   | tags hyop _ memo_ sig_               |
| server-only minimal              |    ❌     |   454 B   | tags                                 |
| **server-only render doc**       |    ❌     | **470 B** | **tags doc_html_ tagsNS**            |
| server-only render doc + rmemo   |    ✅     |   828 B   | tags doc_html_ tagsNS _ memo_ sig_   |
| isomorphic browser               |    ❌     |   666 B   | relement__use browser__relement      |
| isomorphic browser + rmemo       |    ✅     |  1051 B   | relement__use browser__relement      |
| isomorphic server                |    ❌     |   686 B   | relement__use server__base__relement |
| isomorphic server + rmemo        |    ✅     |  1012 B   | relement__use server__base__relement |
| isomorphic html tag              |    ❌     |   34 B    | html_                                |

relementjs started as a fork from VanJS. The bold use cases have rough equivalence to what VanJS provides. The browser export is smaller than VanJS. The server export is smaller than mini-van-plate/van-plate. relementjs exports [rmemo](https://github.com/ctx-core/rmemo) for reactivity & [ctx-core/be](https://github.com/ctx-core/be) for contexts.

## isomorphic rendering

[//]: @formatter:off
```ts
import { relement__use } from 'relementjs'
import { browser__relement } from 'relementjs/browser'
import { a_, div_ } from 'relementjs/html'
relement__use(browser__relement)
div_(
  a_({ href: 'https://github.com/relementjs/relementjs' }, 'relementjs github page'))
```
[//]: @formatter:on

## browser rendering

[//]: @formatter:off
```ts
import { tags } from 'relementjs/browser'
const { a, div } = tags
div(
  a({ href: 'https://github.com/relementjs/relementjs' }, 'relementjs github page'))
```
[//]: @formatter:on

## server rendering

[//]: @formatter:off
```ts
import { tags } from 'relementjs/server'
const { a, div } = tags
div(
  a({ href: 'https://github.com/relementjs/relementjs' },
    'relementjs github page'))
```
[//]: @formatter:on

## rectivity

relementjs uses rmemo for reactivity on the browser & server.
