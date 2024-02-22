const {z2ui5_cl_http_handler} = await import("./z2ui5_cl_http_handler.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_http_handler.clas.testclasses.abap
class ltcl_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_HTTP_HANDLER-LTCL_UNIT_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TEST_GET": {"visibility": "I", "parameters": {}},
  "TEST_POST": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_get() {
    let lv_resp = new abap.types.String({qualifiedName: "STRING"});
    lv_resp.set((await abap.Classes['Z2UI5_CL_HTTP_HANDLER'].http_get()));
    if (abap.compare.initial(lv_resp)) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(8).set('HTTP GET')});
    }
  }
  async test_post() {
  }
}
abap.Classes['CLAS-Z2UI5_CL_HTTP_HANDLER-LTCL_UNIT_TEST'] = ltcl_unit_test;
export {ltcl_unit_test};
//# sourceMappingURL=z2ui5_cl_http_handler.clas.testclasses.mjs.map