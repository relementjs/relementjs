# relementjs (Reactive Element)

Isomorphic ui rendering & state management on the browser & server.
The smallest reactive UI library on the browser & server.
relementjs scales large & small with tree-shakable modules for rendering, reactivity, contexts, & hydration.

| use case                         | reactive |   size    | imports                              |
|----------------------------------|:--------:|:---------:|--------------------------------------|
| browser-only minimal             |    ❌     |   443 B   | tags                                 |
| browser-only hydrate             |    ❌     |   490 B   | tags hydrate                         |
| browser-only hy__bind            |    ❌     |   512 B   | tags hy__bind                        |
| **browser-only hydrate + rmemo** |    ✅     | **818 B** | **tags hydrate _ memo_ sig_**        |
| browser-only hy__bind + rmemo    |    ✅     |   841 B   | tags hy__bind _ memo_ sig_           |
| server-only minimal              |    ❌     |   454 B   | tags                                 |
| **server-only render doc**       |    ❌     | **493 B** | **tags doc_html_ tagsNS**            |
| server-only render doc + rmemo   |    ✅     |   829 B   | tags doc_html_ tagsNS _ memo_ sig_   |
| isomorphic browser               |    ❌     |   748 B   | relement__use browser__relement      |
| isomorphic browser + rmemo       |    ✅     |  1051 B   | relement__use browser__relement      |
| isomorphic server                |    ❌     |   686 B   | relement__use server__base__relement |
| isomorphic server + rmemo        |    ✅     |  1013 B   | relement__use server__base__relement |
| isomorphic html tag              |    ❌     |   34 B    | html_                                |

relementjs was originally forked from VanJS. The bold use cases are roughly equivalent to what VanJS provides. The 
browser-only library is smaller than vanjs & the server-only library is smaller than mini-van-plate/van-plate.  
relementjs exports rmemo for reactivity & ctx-core/be for contexts.

## TODO: More Documentation & Examples

I have been busy creating a fast & scalable stack. The scalability is along the axes of small-large & simple-complex 
apps.

The stack I'm working on includes:

* ctx-core
  * no-dependency macro repo of various modules which includes ctx-core/be
* rmemo
  * reactive memo & signal library with Garbage Collection integration & graceful handling of async
* relementjs
* rebuildjs
  * esbuild-based isomorphic full-stack MPA library focused on:
    * reactive build state
    * namespaced (app, middleware, & route) contexts
    * a file-based middleware routing api
    * clean server/browser separation for small bundles
* relysjs
  * rebuildjs + Elysiajs full-stack app server

Rather than promoting libraries with a few good isolated traits, I am creating an isomorphic stack that is optimal 
for my development needs.
These needs include simple light-weight integrations to complex web apps in multiple industries.

I have to pay the bills with my work, but I am also perfecting these apis with real-world usage.
There is still work to do but the approach is looking great.
My biased perspective is that this is the best stack I have seen, because I'm making it for my needs.
There is still some churn in some of the apis, so I'm not ready to write comprehensive documentation, promote these 
libraries, & support a community until these changes shake out.
Throughout my career, I have gone through much effort & pain with dependency upgrades having breaking api changes. 
I do not want to subject a community of developers to this pain with these libraries.

I will include links to open source apps when they are ready to show.

If you would like to learn more, please feel free to
[contact me](mailto:brian.takita@gmail.com?subject=relementjs).

## isomorphic rendering

```ts
import { relement__use } from 'relementjs'
import { browser__relement } from 'relementjs/browser'
import { a_, div_ } from 'relementjs/html'
relement__use(browser__relement)
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
