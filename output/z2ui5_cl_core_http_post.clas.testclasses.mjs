const {z2ui5_cl_core_http_post} = await import("./z2ui5_cl_core_http_post.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_http_post.clas.testclasses.abap

class ltcl_test_handler_post {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_HTTP_POST-LTCL_TEST_HANDLER_POST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"LOAD_STARTUP_APP": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async load_startup_app() {
    let lv_payload = new abap.types.String({qualifiedName: "STRING"});
    let lo_post = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});
    let temp4 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_STARTUP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_STARTUP"});
    let lo_startup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_STARTUP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_STARTUP"});
    if (abap.compare.eq(abap.builtin.sy.get().sysid, new abap.types.Character(3).set('ABC'))) {
      return;
    }
    lv_payload.set(new abap.types.String().set(`{"S_FRONT":{"ORIGIN":"ORIGIN","PATHNAME":"PATHNAME","SEARCH":""}}`));
    lo_post.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_POST']()).constructor_({val: lv_payload}));
    await lo_post.get().main_begin();
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_bound({act: lo_post.get().mo_action});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_post.get().ms_request.get().s_front.get().origin, exp: new abap.types.String().set(`ORIGIN`)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_post.get().ms_request.get().s_front.get().pathname, exp: new abap.types.String().set(`PATHNAME`)});
    await abap.statements.cast(temp4, lo_post.get().mo_action.get().mo_app.get().mo_app);
    lo_startup.set(temp4);
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_HTTP_POST-LTCL_TEST_HANDLER_POST'] = ltcl_test_handler_post;
export {ltcl_test_handler_post};
//# sourceMappingURL=z2ui5_cl_core_http_post.clas.testclasses.mjs.map