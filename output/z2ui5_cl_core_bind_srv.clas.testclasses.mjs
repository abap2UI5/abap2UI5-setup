const {z2ui5_cl_core_bind_srv} = await import("./z2ui5_cl_core_bind_srv.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_bind_srv.clas.testclasses.abap


class ltcl_test_app {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MS_STRUC": {"type": () => {return new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_app=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02", undefined, {}, {})}, "ltcl_test_app=>s_01", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_VALUE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_STRUC": {"type": () => {return new abap.types.DataReference(new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_app=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02", undefined, {}, {})}, "ltcl_test_app=>s_01", undefined, {}, {}));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_BIND", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_BIND"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "XX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_struc = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_app=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02", undefined, {}, {})}, "ltcl_test_app=>s_01", undefined, {}, {});
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.mr_value = new abap.types.DataReference(new abap.types.Character(4));
    this.mr_struc = new abap.types.DataReference(new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_app=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02", undefined, {}, {})}, "ltcl_test_app=>s_01", undefined, {}, {}));
    this.mo_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_BIND", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_BIND"});
    this.xx = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    return this;
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP'] = ltcl_test_app;
ltcl_test_app.s_01 = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_app=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_app=>s_01-s_02", undefined, {}, {})}, "ltcl_test_app=>s_01", undefined, {}, {});
class ltcl_test_bind {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_BIND';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TEST_ONE_WAY": {"visibility": "I", "parameters": {}},
  "TEST_ONE_WAY_W_X_ERROR": {"visibility": "I", "parameters": {}},
  "TEST_ERROR_DIFF": {"visibility": "I", "parameters": {}},
  "TEST_TWO_WAY": {"visibility": "I", "parameters": {}},
  "TEST_LOCAL": {"visibility": "I", "parameters": {}},
  "TEST_LOCAL_ONE": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_one_way_w_x_error() {
    let lo_app_client = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_APP"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp18 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    lo_app_client.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_app_client);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    try {
      temp18.assign(lo_app_client.get().xx);
      await lo_bind.get().main({val: temp18, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].abort();
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
  }
  async test_one_way() {
    let lo_app_client = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_APP"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp19 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    let lv_bind = new abap.types.String({qualifiedName: "STRING"});
    lo_app_client.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_app_client);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp19.assign(lo_app_client.get().mv_value);
    lv_bind.set((await lo_bind.get().main({val: temp19, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_bind, exp: new abap.types.String().set(`{/MV_VALUE}`)});
  }
  async test_error_diff() {
    let lo_app_client = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_APP"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp20 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    let temp21 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    lo_app_client.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_app_client);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp20.assign(lo_app_client.get().mv_value);
    await lo_bind.get().main({val: temp20, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way});
    try {
      temp21.assign(lo_app_client.get().mv_value);
      await lo_bind.get().main({val: temp21, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].abort();
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
  }
  async test_two_way() {
    let lo_app_client = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_APP"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp22 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    let lv_bind = new abap.types.String({qualifiedName: "STRING"});
    let temp23 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    let lv_bind2 = new abap.types.String({qualifiedName: "STRING"});
    lo_app_client.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_app_client);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp22.assign(lo_app_client.get().mv_value);
    lv_bind.set((await lo_bind.get().main({val: temp22, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way})));
    temp23.assign(lo_app_client.get().mv_value);
    lv_bind2.set((await lo_bind.get().main({val: temp23, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_bind, exp: lv_bind2});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lv_bind});
  }
  async test_local() {
    let lo_app_client = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_APP"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let lv_bind = new abap.types.String({qualifiedName: "STRING"});
    lo_app_client.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_app_client);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    lv_bind.set((await lo_bind.get().main_local({val: lo_app_client.get().mv_value})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lv_bind});
  }
  async test_local_one() {
    let lo_app_client = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_APP"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let lv_bind = new abap.types.String({qualifiedName: "STRING"});
    let temp24 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    let lv_bind2 = new abap.types.String({qualifiedName: "STRING"});
    lo_app_client.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_APP']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_app_client);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    lv_bind.set((await lo_bind.get().main_local({val: lo_app_client.get().mv_value})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lv_bind});
    temp24.assign(lo_app_client.get().mv_value);
    lv_bind2.set((await lo_bind.get().main({val: temp24, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lv_bind2});
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_BIND'] = ltcl_test_bind;
class ltcl_test_main_structure {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_STRUCTURE';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MS_STRUC": {"type": () => {return new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_main_structure=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_main_structure=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_main_structure=>s_01-s_02", undefined, {}, {})}, "ltcl_test_main_structure=>s_01", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"TEST_ONE_WAY_LEV1": {"visibility": "I", "parameters": {}},
  "TEST_ONE_WAY_LEV2": {"visibility": "I", "parameters": {}},
  "TEST_ONE_WAY_LEV3": {"visibility": "I", "parameters": {}},
  "TEST_ONE_WAY_LEV4_LONG_NAME": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_struc = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_main_structure=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_main_structure=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_main_structure=>s_01-s_02", undefined, {}, {})}, "ltcl_test_main_structure=>s_01", undefined, {}, {});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_one_way_lev1() {
    let lo_test_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_STRUCTURE"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp25 = new abap.types.DataReference(new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-INPUT"}));
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    let temp26 = new abap.types.DataReference(new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-INPUT"}));
    let temp1 = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    lo_test_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_STRUCTURE']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_test_app);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp25.assign(lo_test_app.get().ms_struc.get().input);
    lv_result.set((await lo_bind.get().main({val: temp25, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`{/MS_STRUC/INPUT}`)});
    temp26.assign(lo_test_app.get().ms_struc.get().input);
    abap.statements.clear(temp1);
    temp1.get().path_only.set(abap.builtin.abap_true);
    lv_result.set((await lo_bind.get().main({val: temp26, config: temp1, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`/MS_STRUC/INPUT`)});
  }
  async test_one_way_lev2() {
    let lo_test_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_STRUCTURE"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp27 = new abap.types.DataReference(new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-INPUT"}));
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_test_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_STRUCTURE']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_test_app);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp27.assign(lo_test_app.get().ms_struc.get().s_02.get().input);
    lv_result.set((await lo_bind.get().main({val: temp27, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`{/MS_STRUC/S_02/INPUT}`)});
  }
  async test_one_way_lev3() {
    let lo_test_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_STRUCTURE"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp28 = new abap.types.DataReference(new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-INPUT"}));
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_test_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_STRUCTURE']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_test_app);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp28.assign(lo_test_app.get().ms_struc.get().s_02.get().s_03.get().input);
    lv_result.set((await lo_bind.get().main({val: temp28, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`{/MS_STRUC/S_02/S_03/INPUT}`)});
  }
  async test_one_way_lev4_long_name() {
    let lo_test_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_STRUCTURE"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp29 = new abap.types.DataReference(new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-S_04-INPUT"}));
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_test_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_STRUCTURE']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_test_app);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp29.assign(lo_test_app.get().ms_struc.get().s_02.get().s_03.get().s_04.get().input);
    lv_result.set((await lo_bind.get().main({val: temp29, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`{/MS_STRUC/S_02/S_03/S_04/INPUT}`)});
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_STRUCTURE'] = ltcl_test_main_structure;
ltcl_test_main_structure.s_01 = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_STRUCTURE=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_main_structure=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_main_structure=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_main_structure=>s_01-s_02", undefined, {}, {})}, "ltcl_test_main_structure=>s_01", undefined, {}, {});
class ltcl_test_main_object {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_OBJECT';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_OBJ": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_OBJECT", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_OBJECT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_STRUC": {"type": () => {return new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_main_object=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_main_object=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_main_object=>s_01-s_02", undefined, {}, {})}, "ltcl_test_main_object=>s_01", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"TEST_ONE_WAY_VALUE": {"visibility": "I", "parameters": {}},
  "TEST_ONE_WAY_STRUC": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_obj = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_OBJECT", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_OBJECT"});
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.ms_struc = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_main_object=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_main_object=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_main_object=>s_01-s_02", undefined, {}, {})}, "ltcl_test_main_object=>s_01", undefined, {}, {});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_one_way_value() {
    let lo_test_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_OBJECT", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_OBJECT"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp30 = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_test_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_OBJECT']()).constructor_());
    lo_test_app.get().mo_obj.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_OBJECT']()).constructor_());
    lo_test_app.get().mo_obj.get().mv_value.set(new abap.types.String().set(`test`));
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_test_app);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp30.assign(lo_test_app.get().mo_obj.get().mv_value);
    lv_result.set((await lo_bind.get().main({val: temp30, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`{/MO_OBJ/MV_VALUE}`)});
  }
  async test_one_way_struc() {
    let lo_test_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_MAIN_OBJECT", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_BIND_SRV\\CLASS=LTCL_TEST_MAIN_OBJECT"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp31 = new abap.types.DataReference(new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-INPUT"}));
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    lo_test_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_OBJECT']()).constructor_());
    lo_test_app.get().mo_obj.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_OBJECT']()).constructor_());
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().mo_app.set(lo_test_app);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: lo_app}));
    temp31.assign(lo_test_app.get().mo_obj.get().ms_struc.get().input);
    lv_result.set((await lo_bind.get().main({val: temp31, type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_result, exp: new abap.types.String().set(`{/MO_OBJ/MS_STRUC/INPUT}`)});
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_BIND_SRV-LTCL_TEST_MAIN_OBJECT'] = ltcl_test_main_object;
ltcl_test_main_object.s_01 = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-INPUT"}), "s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-INPUT"}), "s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-S_03-INPUT"}), "s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "LTCL_TEST_MAIN_OBJECT=>S_01-S_02-S_03-S_04-INPUT"})}, "ltcl_test_main_object=>s_01-s_02-s_03-s_04", undefined, {}, {})}, "ltcl_test_main_object=>s_01-s_02-s_03", undefined, {}, {})}, "ltcl_test_main_object=>s_01-s_02", undefined, {}, {})}, "ltcl_test_main_object=>s_01", undefined, {}, {});
export {ltcl_test_app, ltcl_test_bind, ltcl_test_main_structure, ltcl_test_main_object};
//# sourceMappingURL=z2ui5_cl_core_bind_srv.clas.testclasses.mjs.map