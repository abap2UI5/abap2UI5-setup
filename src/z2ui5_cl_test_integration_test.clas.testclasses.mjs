const {z2ui5_cl_test_integration_test} = await import("./z2ui5_cl_test_integration_test.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_test_integration_test.clas.testclasses.abap
class ltcl_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_TEST_INTEGRATION_TEST-LTCL_UNIT_TEST';
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
  }
}
abap.Classes['CLAS-Z2UI5_CL_TEST_INTEGRATION_TEST-LTCL_UNIT_TEST'] = ltcl_unit_test;
export {ltcl_unit_test};
//# sourceMappingURL=z2ui5_cl_test_integration_test.clas.testclasses.mjs.map