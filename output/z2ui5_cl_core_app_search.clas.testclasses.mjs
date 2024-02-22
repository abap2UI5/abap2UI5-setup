const {z2ui5_cl_core_app_search} = await import("./z2ui5_cl_core_app_search.clas.mjs");
const {lcl_github} = await import("./z2ui5_cl_core_app_search.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app_search.clas.testclasses.abap
class ltcl_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_APP_SEARCH-LTCL_UNIT_TEST';
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
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_SEARCH"});
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP_SEARCH']()).constructor_());
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_APP_SEARCH-LTCL_UNIT_TEST'] = ltcl_unit_test;
export {ltcl_unit_test};
//# sourceMappingURL=z2ui5_cl_core_app_search.clas.testclasses.mjs.map