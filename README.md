# KWS3 packages

Currently this monorepo contains 3 packages.
 - [KWS3 svelte3 UI components](packages/@kws3/ui/)
 - [kws-cli](packages/@kws3/kws-cli/)
 - [eslint-plugin-svelte3](packages/@kws3/eslint-plugin-svelte3/)


## Development
Install `Lerna` globally
 ```bash
 > npm install -g lerna
 ```
 After pulling repo run
 ```bash
 > npm install
 > npm run bootstrap
 ```
 It will download internal dependencies and all dependencies for packages

 Then run HMR
  ```bash
 > npm run dev:hmr
 ```
 App will run on http://localhost:9009/

## See package list
To see packages run
 ```bash
 > npm run list
 ```


## Publish a package
To publish packages run
 ```bash
 > npm run publish
 ```
 and follow the prompts on the screen

 It will automatically track updated packages and bump versions by asking user from cli