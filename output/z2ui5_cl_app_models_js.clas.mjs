const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_app_models_js.clas.abap
class z2ui5_cl_app_models_js {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_APP_MODELS_JS';
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
    return z2ui5_cl_app_models_js.get();
  }
  static async get() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`sap.ui.define([`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    "sap/ui/model/json/JSONModel",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    "sap/ui/Device"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`],`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`function (JSONModel, Device) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    "use strict";`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(``),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    return {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        /**`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`         * Provides runtime info for the device the UI5 app is running on as JSONModel`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`         */`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        createDeviceModel: function () {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            var oModel = new JSONModel(Device);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            oModel.setDefaultBindingMode("OneWay");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            return oModel;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    };`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(``),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`});`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(``))))))))))))))))))))))))))))))))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_APP_MODELS_JS'] = z2ui5_cl_app_models_js;
export {z2ui5_cl_app_models_js};
//# sourceMappingURL=z2ui5_cl_app_models_js.clas.mjs.map