const {z2ui5_cl_ui5} = await import("./z2ui5_cl_ui5.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5.clas.testclasses.abap
class ltcl_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UI5-LTCL_UNIT_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TEST_FACTORY": {"visibility": "I", "parameters": {}},
  "TEST_FACTORY_POPUP": {"visibility": "I", "parameters": {}},
  "TEST_ADD": {"visibility": "I", "parameters": {}},
  "TEST_ADD_P": {"visibility": "I", "parameters": {}},
  "TEST_NS": {"visibility": "I", "parameters": {}},
  "TEST_ADD_ADD": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_factory() {
    let lo_tree = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_tree.set((await abap.Classes['Z2UI5_CL_UI5']._factory()));
    lv_result.set((await lo_tree.get()._stringify()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`<mvc:View displayBlock="true" height="100%" xmlns:mvc="sap.ui.core.mvc"/>`)});
  }
  async test_factory_popup() {
    let lo_tree = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_tree.set((await abap.Classes['Z2UI5_CL_UI5']._factory({check_popup: abap.builtin.abap_true})));
    lv_result.set((await lo_tree.get()._stringify()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`<core:FragmentDefinition xmlns:core="sap.ui.core"/>`)});
  }
  async test_add() {
    let lo_tree = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp12 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_tree.set((await abap.Classes['Z2UI5_CL_UI5']._factory()));
    abap.statements.clear(temp11);
    temp12.get().n.set(new abap.types.String().set(`test`));
    temp12.get().v.set(new abap.types.String().set(`test_value`));
    abap.statements.insertInternal({data: temp12, table: temp11});
    await lo_tree.get()._add({n: new abap.types.Character(3).set('XML'), ns: new abap.types.String().set(`sap.ui.core`), t_p: temp11});
    lv_result.set((await lo_tree.get()._stringify()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`<mvc:View displayBlock="true" height="100%" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><core:XML test="test_value"/></mvc:View>`)});
  }
  async test_add_p() {
    let lo_tree = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_tree.set((await abap.Classes['Z2UI5_CL_UI5']._factory()));
    await (await lo_tree.get()._add({n: new abap.types.Character(4).set('Test'), ns: new abap.types.String().set(`sap.ui.core`)})).get()._add_p({n: new abap.types.String().set(`test_p`), v: new abap.types.String().set(`test_p_v`)});
    lv_result.set((await lo_tree.get()._stringify()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`<mvc:View displayBlock="true" height="100%" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><core:Test test_p="test_p_v"/></mvc:View>`)});
  }
  async test_add_add() {
    let lo_tree = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_tree.set((await abap.Classes['Z2UI5_CL_UI5']._factory()));
    await (await lo_tree.get()._add({n: new abap.types.Character(4).set('Test'), ns: new abap.types.String().set(`sap.ui.core`)})).get()._add({n: new abap.types.String().set(`test_p`), ns: new abap.types.String().set(`sap.ui.core`)});
    lv_result.set((await lo_tree.get()._stringify()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`<mvc:View displayBlock="true" height="100%" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><core:Test><core:test_p/></core:Test></mvc:View>`)});
  }
  async test_ns() {
    let lo_html = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});
    let temp12 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lo_m = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_M", RTTIName: "\\CLASS=Z2UI5_CL_UI5_M"});
    let temp13 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lo_ndc = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_NDC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_NDC"});
    let temp14 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lo_suite = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});
    let temp15 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let lo_zcc = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_Z2UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5_Z2UI5"});
    let temp16 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    temp12.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_());
    lo_html.set((await temp12.get()._ns_html()));
    temp13.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_());
    lo_m.set((await temp13.get()._ns_m()));
    temp14.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_());
    lo_ndc.set((await temp14.get()._ns_ndc()));
    temp15.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_());
    lo_suite.set((await temp15.get()._ns_suite()));
    temp16.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_());
    lo_zcc.set((await temp16.get()._ns_z2ui5()));
  }
}
abap.Classes['CLAS-Z2UI5_CL_UI5-LTCL_UNIT_TEST'] = ltcl_unit_test;
export {ltcl_unit_test};
//# sourceMappingURL=z2ui5_cl_ui5.clas.testclasses.mjs.map