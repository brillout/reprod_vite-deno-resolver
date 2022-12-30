```bash
git clone git@github.com:brillout/reprod_vite-deno-resolver
cd reprod_vite-deno-resolver/
deno task dev
```

Same as single line (copy-paste me):

```shell
git clone git@github.com:brillout/reprod_vite-deno-resolver && cd reprod_vite-deno-resolver/ && deno task dev
```

Observe the thrown errors:

```
failed to load config from /home/rom/tmp/react/vite.config.mjs
error when starting dev server:
TypeError: Unsupported scheme "node" for module "node:os". Supported schemes: [
    "data",
    "blob",
    "file",
    "http",
    "https",
]
    at file:///home/rom/tmp/react/node_modules/.deno/vite@4.0.3/node_modules/vite/dist/node/chunks/dep-0bae2027.js:20:18
    at async loadConfigFromBundledFile (file:///home/rom/tmp/react/node_modules/.deno/vite@4.0.3/node_modules/vite/dist/node/chunks/dep-0bae2027.js:62058:21)
    at async loadConfigFromFile (file:///home/rom/tmp/react/node_modules/.deno/vite@4.0.3/node_modules/vite/dist/node/chunks/dep-0bae2027.js:61943:28)
    at async resolveConfig (file:///home/rom/tmp/react/node_modules/.deno/vite@4.0.3/node_modules/vite/dist/node/chunks/dep-0bae2027.js:61564:28)
    at async createServer (file:///home/rom/tmp/react/node_modules/.deno/vite@4.0.3/node_modules/vite/dist/node/chunks/dep-0bae2027.js:60884:20)
    at async CAC.<anonymous> (file:///home/rom/tmp/react/node_modules/.deno/vite@4.0.3/node_modules/vite/dist/node/cli.js:729:24)
```
