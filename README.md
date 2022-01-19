# KWS3 packages

Currently this monorepo contains 2 packages.
 - UI  [view](packages/@kws3/ui/README.md)
 - kws-cli  [view](packages/@kws3/kws-cli/README.md)


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