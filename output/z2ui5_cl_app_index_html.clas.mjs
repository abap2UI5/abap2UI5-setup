const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_app_index_html.clas.abap
class z2ui5_cl_app_index_html {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_APP_INDEX_HTML';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get() {
    return z2ui5_cl_app_index_html.get();
  }
  static async get() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`<!DOCTYPE html>`),abap.operators.concat(new abap.types.String().set(`<html lang="en">`),abap.operators.concat(new abap.types.String().set(`<head>`),abap.operators.concat(new abap.types.String().set(`    <meta charset="UTF-8">`),abap.operators.concat(new abap.types.String().set(`    <meta name="viewport" content="width=device-width, initial-scale=1.0">`),abap.operators.concat(new abap.types.String().set(`    <meta http-equiv="X-UA-Compatible" content="IE=edge">`),abap.operators.concat(new abap.types.String().set(`    <title></title>`),abap.operators.concat(new abap.types.String().set(`    <style>`),abap.operators.concat(new abap.types.String().set(`        html, body, body > div, #container, #container-uiarea {`),abap.operators.concat(new abap.types.String().set(`            height: 100%;`),abap.operators.concat(new abap.types.String().set(`        }`),abap.operators.concat(new abap.types.String().set(`    </style>`),abap.operators.concat(new abap.types.String().set(`    <script`),abap.operators.concat(new abap.types.String().set(`        id="sap-ui-bootstrap"`),abap.operators.concat(new abap.types.String().set(`        src="https://openui5.hana.ondemand.com/resources/sap-ui-core.js"`),abap.operators.concat(new abap.types.String().set(`        data-sap-ui-theme="sap_horizon"`),abap.operators.concat(new abap.types.String().set(`        data-sap-ui-resourceroots='{`),abap.operators.concat(new abap.types.String().set(`            "z2ui5": "./"`),abap.operators.concat(new abap.types.String().set(`        }'`),abap.operators.concat(new abap.types.String().set(`        data-sap-ui-oninit="module:sap/ui/core/ComponentSupport"`),abap.operators.concat(new abap.types.String().set(`        data-sap-ui-compatVersion="edge"`),abap.operators.concat(new abap.types.String().set(`        data-sap-ui-async="true"`),abap.operators.concat(new abap.types.String().set(`        data-sap-ui-frameOptions="trusted"`),abap.operators.concat(new abap.types.String().set(`    ></script>`),abap.operators.concat(new abap.types.String().set(`</head>`),abap.operators.concat(new abap.types.String().set(`<body class="sapUiBody sapUiSizeCompact" id="content">`),abap.operators.concat(new abap.types.String().set(`    <div`),abap.operators.concat(new abap.types.String().set(`        data-sap-ui-component`),abap.operators.concat(new abap.types.String().set(`        data-name="z2ui5"`),abap.operators.concat(new abap.types.String().set(`        data-id="container"`),abap.operators.concat(new abap.types.String().set(`        data-settings='{"id" : "z2ui5"}'`),abap.operators.concat(new abap.types.String().set(`        data-handle-validation="true"`),abap.operators.concat(new abap.types.String().set(`    ></div>`),abap.operators.concat(new abap.types.String().set(`</body>`),abap.operators.concat(new abap.types.String().set(`</html>`),new abap.types.String().set(``)))))))))))))))))))))))))))))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_APP_INDEX_HTML'] = z2ui5_cl_app_index_html;
export {z2ui5_cl_app_index_html};
//# sourceMappingURL=z2ui5_cl_app_index_html.clas.mjs.map