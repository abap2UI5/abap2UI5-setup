# abap2UI5-web

Run abap2UI5 with [**open-abap**](https://github.com/open-abap) on Node.js

## Start
```
npm install
npm test
```

## Demo
![gif_open_abap](https://github.com/abap2UI5/abap2UI5-web/assets/102328295/7d0fa7e5-2c5b-46c4-b2e8-0ffd70350370)

## Build Strategy

1. Clone repositories into `/src/`
2. Downport `/src/` into `/downport/`
3. Transpile with [express-icf-shim](https://github.com/open-abap/express-icf-shim) into `/output/`
4. Webpack backend + frontend + database into folder `build`