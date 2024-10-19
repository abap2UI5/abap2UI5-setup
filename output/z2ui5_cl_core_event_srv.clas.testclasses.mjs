const {z2ui5_cl_core_event_srv} = await import("./z2ui5_cl_core_event_srv.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_event_srv.clas.testclasses.abap
class ltcl_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_EVENT_SRV-LTCL_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"EVENT": {"visibility": "U", "parameters": {}},
  "EVENT_BACKEND": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async event() {
    let lo_event = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_EVENT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_EVENT_SRV"});
    let lv_event = new abap.types.String({qualifiedName: "STRING"});
    lo_event.set(await (new abap.Classes['Z2UI5_CL_CORE_EVENT_SRV']()).constructor_());
    lv_event.set((await lo_event.get().get_event({val: new abap.types.String().set(`POST`)})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_event, exp: new abap.types.String().set(`.eB(['POST'])`)});
  }
  async event_backend() {
    let lo_event = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_EVENT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_EVENT_SRV"});
    let lv_event = new abap.types.String({qualifiedName: "STRING"});
    lo_event.set(await (new abap.Classes['Z2UI5_CL_CORE_EVENT_SRV']()).constructor_());
    lv_event.set((await lo_event.get().get_event_client({val: abap.Classes['Z2UI5_IF_CLIENT'].z2ui5_if_client$cs_event.get().popover_close})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_event, exp: new abap.types.String().set(`.eF('POPOVER_CLOSE')`)});
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_EVENT_SRV-LTCL_TEST'] = ltcl_test;
export {ltcl_test};
//# sourceMappingURL=z2ui5_cl_core_event_srv.clas.testclasses.mjs.map