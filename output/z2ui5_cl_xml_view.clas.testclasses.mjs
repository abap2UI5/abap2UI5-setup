const {z2ui5_cl_xml_view} = await import("./z2ui5_cl_xml_view.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_xml_view.clas.testclasses.abap
class ltcl_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_XML_VIEW-LTCL_UNIT_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TEST_CREATE": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_create() {
    let lo_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lv_xml = new abap.types.String({qualifiedName: "STRING"});
    lo_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    lv_xml.set((await (await lo_view.get().page({title: new abap.types.String().set(`test`)})).get().stringify()));
    if (abap.compare.initial(lv_xml)) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({quit: abap.IntegerFactory.get(5)});
    }
  }
}
abap.Classes['CLAS-Z2UI5_CL_XML_VIEW-LTCL_UNIT_TEST'] = ltcl_unit_test;
export {ltcl_unit_test};
//# sourceMappingURL=z2ui5_cl_xml_view.clas.testclasses.mjs.map