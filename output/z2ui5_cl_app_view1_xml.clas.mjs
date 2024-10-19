const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_app_view1_xml.clas.abap
class z2ui5_cl_app_view1_xml {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_APP_VIEW1_XML';
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
    return z2ui5_cl_app_view1_xml.get();
  }
  static async get() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`<mvc:View controllerName="z2ui5.controller.View1"`),abap.operators.concat(new abap.types.String().set(`    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"`),abap.operators.concat(new abap.types.String().set(`    xmlns="sap.m">`),abap.operators.concat(new abap.types.String().set(`</mvc:View>`),abap.operators.concat(new abap.types.String().set(``),new abap.types.String().set(``)))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_APP_VIEW1_XML'] = z2ui5_cl_app_view1_xml;
export {z2ui5_cl_app_view1_xml};
//# sourceMappingURL=z2ui5_cl_app_view1_xml.clas.mjs.map