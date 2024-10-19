const {z2ui5_cl_abap_api} = await import("./z2ui5_cl_abap_api.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_abap_api.clas.testclasses.abap
class ltcl_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_ABAP_API-LTCL_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TEST_FUNC_GET_UUID_32": {"visibility": "I", "parameters": {}},
  "TEST_FUNC_GET_UUID_22": {"visibility": "I", "parameters": {}},
  "TEST_ENCODING": {"visibility": "I", "parameters": {}},
  "TEST_ELEMENT_TEXT": {"visibility": "I", "parameters": {}},
  "TEST_CLASSES_IMPL_INTF": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_func_get_uuid_32() {
    let lv_uuid = new abap.types.String({qualifiedName: "STRING"});
    lv_uuid.set((await abap.Classes['Z2UI5_CL_ABAP_API'].uuid_get_c32()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lv_uuid});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.IntegerFactory.get(32), exp: abap.builtin.strlen({val: lv_uuid})});
  }
  async test_func_get_uuid_22() {
    let lv_uuid = new abap.types.String({qualifiedName: "STRING"});
    lv_uuid.set((await abap.Classes['Z2UI5_CL_ABAP_API'].uuid_get_c22()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lv_uuid});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.IntegerFactory.get(22), exp: abap.builtin.strlen({val: lv_uuid})});
  }
  async test_encoding() {
    let lv_string = new abap.types.String({qualifiedName: "STRING"});
    let lv_xstring = new abap.types.XString({qualifiedName: "XSTRING"});
    let lv_string2 = new abap.types.String({qualifiedName: "STRING"});
    let lv_xstring2 = new abap.types.XString({qualifiedName: "XSTRING"});
    let lv_string3 = new abap.types.String({qualifiedName: "STRING"});
    lv_string.set(new abap.types.String().set(`my string`));
    lv_xstring.set((await abap.Classes['Z2UI5_CL_ABAP_API'].conv_get_xstring_by_string({val: lv_string})));
    lv_string2.set((await abap.Classes['Z2UI5_CL_ABAP_API'].conv_encode_x_base64({val: lv_xstring})));
    lv_xstring2.set((await abap.Classes['Z2UI5_CL_ABAP_API'].conv_decode_x_base64({val: lv_string2})));
    lv_string3.set((await abap.Classes['Z2UI5_CL_ABAP_API'].conv_get_string_by_xstring({val: lv_xstring2})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_string3, exp: lv_string});
  }
  async test_element_text() {
    let ls_result = new abap.types.Structure({"header": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-HEADER"}), "short": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-SHORT"}), "medium": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-MEDIUM"}), "long": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-LONG"})}, "z2ui5_cl_abap_api=>ty_s_data_element_text", undefined, {}, {});
    if (abap.compare.eq(abap.builtin.sy.get().sysid, new abap.types.Character(3).set('ABC'))) {
      return;
    }
    ls_result.set((await abap.Classes['Z2UI5_CL_ABAP_API'].rtti_get_data_element_texts({i_data_element_name: new abap.types.String().set(`UNAME`)})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: ls_result});
  }
  async test_classes_impl_intf() {
    let mt_classes = abap.types.TableFactory.construct(new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_classes");
    if (abap.compare.eq(abap.builtin.sy.get().sysid, new abap.types.Character(3).set('ABC'))) {
      return;
    }
    mt_classes.set((await abap.Classes['Z2UI5_CL_ABAP_API'].rtti_get_classes_impl_intf({val: new abap.types.String().set(`IF_SERIALIZABLE_OBJECT`)})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: mt_classes});
  }
}
abap.Classes['CLAS-Z2UI5_CL_ABAP_API-LTCL_TEST'] = ltcl_test;
export {ltcl_test};
//# sourceMappingURL=z2ui5_cl_abap_api.clas.testclasses.mjs.map