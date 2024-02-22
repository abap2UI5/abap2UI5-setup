const {z2ui5_cl_core_app_error} = await import("./z2ui5_cl_core_app_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app_error.clas.testclasses.abap
class ltcl_app_error_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_APP_ERROR-LTCL_APP_ERROR_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"FIRST_TEST": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async first_test() {
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_UTIL_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_UTIL_ERROR"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_ERROR", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_ERROR"});
    lx.set(await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_());
    lo_app.set((await abap.Classes['Z2UI5_CL_CORE_APP_ERROR'].factory({error: lx})));
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_APP_ERROR-LTCL_APP_ERROR_TEST'] = ltcl_app_error_test;
export {ltcl_app_error_test};
//# sourceMappingURL=z2ui5_cl_core_app_error.clas.testclasses.mjs.map