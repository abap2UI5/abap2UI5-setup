## abap2UI5-Setup

### Functionality
* Downporting with [abaplint](https://abaplint.org/)
* Transpiling to JS with [abaplint/transpiler](https://github.com/abaplint/transpiler)
* Running on Node.js with [open-abap](https://github.com/open-abap/express-icf-shim)
* Service exposing via [express-icf-shim](https://github.com/open-abap/express-icf-shim)
* Browser Tests with [Playwright](https://playwright.dev/)
* Webpacking, Unit Testing...

### Tasks
#### Downport & Transpile
```
npm run init
npm run build
```
#### Run Unit Tests
```
npm run unit
```
#### Run Webservice
```
npm run express
```
#### Run Playwright Tests
```
npm run init_play
npx playwright install --with-deps && npm i
npx playwright test
```

#### Webpack Build Strategy

1. Clone repositories into /src/
2. Downport /src/ into /downport/
3. Transpile with express-icf-shim into /output/
4. Webpack backend + frontend + database into folder build

```
npm run webpack:build
```
### Overview
<img width="800" alt="image" src="https://github.com/user-attachments/assets/97cc8b91-4a0b-4f22-9501-6655117c9c24">

### Demo
#### Running on Node.js
![306716361-7d0fa7e5-2c5b-46c4-b2e8-0ffd70350370](https://github.com/user-attachments/assets/a170cc1e-2521-4f86-b59e-d852bbd656ee)

#### Backend Runnning in Browser
[https://abap2ui5.github.io/web-abap2ui5-samples/](https://abap2ui5.github.io/web-abap2ui5-samples/)


### Credits
* abaplint, open-abap, express-icf-shim etc. all by [larshp](https://github.com/larshp)
