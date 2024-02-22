const {z2ui5_cl_core_action} = await import("./z2ui5_cl_core_action.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_action.clas.testclasses.abap

class ltcl_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_ACTION-LTCL_TEST';
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
    let lo_http = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});
    let lo_action = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    lo_http.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_POST']()).constructor_({val: new abap.types.String().set(``)}));
    lo_action.set(await (new abap.Classes['Z2UI5_CL_CORE_ACTION']()).constructor_({val: lo_http}));
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_ACTION-LTCL_TEST'] = ltcl_test;
export {ltcl_test};
//# sourceMappingURL=z2ui5_cl_core_action.clas.testclasses.mjs.map