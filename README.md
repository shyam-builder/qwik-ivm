# Qwik + Azure SWA = ivm error ⚡️

Steps taken:

- `npm create qwik@latest`
- `npm run qwik add builder.io`
- `npm start` and then connect to a Builder.io space that has a page that renders a symbol with bindings
- `npm run qwik add azure-swa`
- `npm run build`
- `npm run serve` everything appears to work fine with the Azure SWA emulator
- `npx swa deploy --api-version 18 --env production` use the wizard to deploy the site

Expected output:

![Expected](/docs/expected.png)

Actual output:

![Actual](/docs/actual.png)

Deployed SWA demonstrating the issue:

[https://red-pond-0cb6b551e.5.azurestaticapps.net](https://red-pond-0cb6b551e.5.azurestaticapps.net)

Logs in Application Insights:

![Logs](/docs/logs.png)

Attempting to add an import for `isolated-vm` within a Qwik app produces this build error:

```text
error during build:
Could not resolve "./out/isolated_vm" from "./out/isolated_vm?commonjs-external"
file: ./out/isolated_vm?commonjs-external
```