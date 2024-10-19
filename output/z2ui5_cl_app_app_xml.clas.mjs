const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_app_app_xml.clas.abap
class z2ui5_cl_app_app_xml {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_APP_APP_XML';
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
    return z2ui5_cl_app_app_xml.get();
  }
  static async get() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`<mvc:View controllerName="z2ui5.controller.App"`),abap.operators.concat(new abap.types.String().set(`    xmlns:html="http://www.w3.org/1999/xhtml"`),abap.operators.concat(new abap.types.String().set(`    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"`),abap.operators.concat(new abap.types.String().set(`    xmlns="sap.m">`),abap.operators.concat(new abap.types.String().set(`    <App id="app">`),abap.operators.concat(new abap.types.String().set(`    </App>`),abap.operators.concat(new abap.types.String().set(`</mvc:View>`),abap.operators.concat(new abap.types.String().set(``),new abap.types.String().set(``))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_APP_APP_XML'] = z2ui5_cl_app_app_xml;
export {z2ui5_cl_app_app_xml};
//# sourceMappingURL=z2ui5_cl_app_app_xml.clas.mjs.map