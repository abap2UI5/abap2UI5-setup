const {cx_no_check} = await import("./cx_no_check.clas.mjs");
const {z2ui5_cx_util_error} = await import("./z2ui5_cx_util_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cx_util_error.clas.testclasses.abap
class ltcl_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CX_UTIL_ERROR-LTCL_UNIT_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TEST_RAISE": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_raise() {
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_UTIL_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_UTIL_ERROR"});
    try {
      const unique85 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`this is an error text`)});
      unique85.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cx_util_error.clas.testclasses.abap","INTERNAL_LINE": 17};
      throw unique85;
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_UTIL_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_UTIL_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lx.get().if_message$get_text()), exp: new abap.types.String().set(`this is an error text`)});
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['CLAS-Z2UI5_CX_UTIL_ERROR-LTCL_UNIT_TEST'] = ltcl_unit_test;
export {ltcl_unit_test};
//# sourceMappingURL=z2ui5_cx_util_error.clas.testclasses.mjs.map