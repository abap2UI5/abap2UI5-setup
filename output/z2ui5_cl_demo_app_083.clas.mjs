const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_083.clas.abap
class z2ui5_cl_demo_app_083 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_083';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_01": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_01-SCREEN_NAME"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_01", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp1_ccb5cca2d1");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_02": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp2_ccb5cca2d1");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_02_DISPLAY": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp3_ccb5cca2d1");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TAB_02_INPUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-NAME"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-VALUE"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02_input", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp4_ccb5cca2d1");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_FILTER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp5_ccb5cca2d1");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VALUE2": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TOKEN": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_083=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp6_ccb5cca2d1");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_MAPPING": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_FILTER": {"type": () => {return new abap.types.Structure({"product": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>ty_t_range")}, "z2ui5_cl_demo_app_083=>ty_s_filter", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MT_COLS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER_MAIN": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER_POP_FILTER": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_01 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_01-SCREEN_NAME"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_01", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp1_ccb5cca2d1");
    this.mt_02 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp2_ccb5cca2d1");
    this.mt_02_display = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp3_ccb5cca2d1");
    this.mt_tab_02_input = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-NAME"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-VALUE"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02_input", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp4_ccb5cca2d1");
    this.mt_filter = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp5_ccb5cca2d1");
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.mv_value2 = new abap.types.String({qualifiedName: "STRING"});
    this.mt_token = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_083=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp6_ccb5cca2d1");
    this.mt_mapping = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    this.ms_filter = new abap.types.Structure({"product": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>ty_t_range")}, "z2ui5_cl_demo_app_083=>ty_s_filter", undefined, {}, {});
    this.mv_name = new abap.types.String({qualifiedName: "STRING"});
    this.mt_table = new abap.types.DataReference(new abap.types.Character(4));
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_cols = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$author = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$author;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$check_sticky === undefined) this.z2ui5_if_app$check_sticky = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let ls_range = new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {});
    let temp1 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {});
    let lr_filter = new abap.types.DataReference(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {}));
    let temp2 = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    let temp3 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {});
    let lt_item = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = new abap.types.Integer({qualifiedName: "I"});
    let temp6 = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp5_ccb5cca2d1");
    let temp7 = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    let lr_product = new abap.types.DataReference(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}));
    let temp8 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {});
    let unique308 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique308, new abap.types.Character(11).set('BUTTON_POST'))) {
      abap.statements.createData(this.mt_table,{"name": this.mv_name.get()});
      await this.z2ui5_on_render_main();
    } else if (abap.compare.eq(unique308, new abap.types.String().set(`FILTER_UPDATE`))) {
      if (abap.compare.initial(this.mv_value) === false) {
        ls_range.set((await abap.Classes['Z2UI5_CL_UTIL'].filter_get_range_by_token({value: this.mv_value})));
        abap.statements.insertInternal({data: ls_range, table: this.ms_filter.get().product});
      }
    } else if (abap.compare.eq(unique308, new abap.types.String().set(`FILTER_VALUE_HELP_OK`))) {
      abap.statements.clear(this.ms_filter.get().product);
      for await (const unique309 of abap.statements.loop(this.mt_filter)) {
        lr_filter.assign(unique309);
        abap.statements.clear(temp2);
        temp2.get().sign.set(new abap.types.String().set(`I`));
        temp2.get().option.set(lr_filter.get().option);
        temp2.get().low.set(lr_filter.get().low);
        temp2.get().high.set(lr_filter.get().high);
        abap.statements.insertInternal({data: temp2, table: this.ms_filter.get().product});
      }
      await this.client.get().z2ui5_if_client$popup_destroy();
    } else if (abap.compare.eq(unique308, new abap.types.String().set(`POPUP_ADD`))) {
      abap.statements.clear(temp3);
      temp3.get().key.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
      abap.statements.insertInternal({data: temp3, table: this.mt_filter});
      await this.client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique308, new abap.types.String().set(`POPUP_DELETE`))) {
      lt_item.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp5.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_item,{index: abap.IntegerFactory.get(1),
        into: temp4});
      abap.builtin.sy.get().tabix.set(temp5);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await abap.statements.deleteInternal(this.mt_filter,{where: async (I) => {return abap.compare.eq(I.key, temp4);}});
      await this.client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique308, new abap.types.String().set(`POPUP_DELETE_ALL`))) {
      abap.statements.clear(temp6);
      this.mt_filter.set(temp6);
      await this.client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique308, new abap.types.String().set(`FILTER_VALUE_HELP`))) {
      await this.z2ui5_on_render_pop_filter();
      abap.statements.clear(this.mt_filter);
      for await (const unique310 of abap.statements.loop(this.ms_filter.get().product)) {
        lr_product.assign(unique310);
        abap.statements.clear(temp8);
        temp8.get().low.set(lr_product.get().low);
        temp8.get().high.set(lr_product.get().high);
        temp8.get().option.set(lr_product.get().option);
        temp8.get().key.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
        abap.statements.insertInternal({data: temp8, table: this.mt_filter});
      }
    } else if (abap.compare.eq(unique308, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_01-SCREEN_NAME"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_01", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp1_ccb5cca2d1");
    let temp10 = new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_01-SCREEN_NAME"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_01", undefined, {}, {});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp2_ccb5cca2d1");
    let temp12 = new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {});
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp14 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp9);
    temp10.get().screen_name.set(new abap.types.String().set(`screen_01`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().screen_name.set(new abap.types.String().set(`screen_02`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    this.mt_01.set(temp9);
    abap.statements.clear(temp11);
    temp12.get().screen_name.set(new abap.types.String().set(`screen_01`));
    temp12.get().field_doma.set(new abap.types.String().set(`CHAR30`));
    temp12.get().field.set(new abap.types.String().set(`MATNR`));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().screen_name.set(new abap.types.String().set(`screen_01`));
    temp12.get().field_doma.set(new abap.types.String().set(`STRING`));
    temp12.get().field.set(new abap.types.String().set(`LGNUM`));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().screen_name.set(new abap.types.String().set(`screen_02`));
    temp12.get().field_doma.set(new abap.types.String().set(`PRODUCT`));
    temp12.get().field.set(new abap.types.String().set(`PRODUCT`));
    abap.statements.insertInternal({data: temp12, table: temp11});
    this.mt_02.set(temp11);
    this.mv_name.set(new abap.types.String().set(`screen_01`));
    await this.z2ui5_on_render_main();
    abap.statements.clear(temp13);
    temp14.get().n.set(new abap.types.String().set(`EQ`));
    temp14.get().v.set(new abap.types.String().set(`={LOW}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`LT`));
    temp14.get().v.set(new abap.types.String().set(`<{LOW}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`LE`));
    temp14.get().v.set(new abap.types.String().set(`<={LOW}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`GT`));
    temp14.get().v.set(new abap.types.String().set(`>{LOW}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`GE`));
    temp14.get().v.set(new abap.types.String().set(`>={LOW}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`CP`));
    temp14.get().v.set(new abap.types.String().set(`*{LOW}*`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`BT`));
    temp14.get().v.set(new abap.types.String().set(`{LOW}...{HIGH}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`NE`));
    temp14.get().v.set(new abap.types.String().set(`!(={LOW})`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`NE`));
    temp14.get().v.set(new abap.types.String().set(`!(<leer>)`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`<leer>`));
    temp14.get().v.set(new abap.types.String().set(`<leer>`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    this.mt_mapping.set(temp13);
  }
  async z2ui5_on_render_main() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_title = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_box = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp15 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-NAME"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-VALUE"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02_input", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp4_ccb5cca2d1");
    let line = new abap.types.String({qualifiedName: "STRING"});
    let temp16 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-NAME"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-VALUE"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02_input", undefined, {}, {});
    let temp17 = new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {});
    let lr_tab = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}));
    let temp18 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-NAME"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-VALUE"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02_input", undefined, {}, {});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    view.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(25).set('abap2UI5 - Select-Options'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    page.set((await view.get().dynamic_page({headerexpanded: abap.builtin.abap_true, headerpinned: abap.builtin.abap_true})));
    header_title.set((await (await (await page.get().title({ns: new abap.types.Character(1).set('f')})).get().get()).get().dynamic_page_title()));
    await (await (await header_title.get().heading({ns: new abap.types.Character(1).set('f')})).get().hbox()).get().title({text: new abap.types.String().set(`Select-Option`)});
    await header_title.get().expanded_content({ns: new abap.types.Character(1).set('f')});
    await header_title.get().snapped_content({ns: new abap.types.Character(1).set('f')});
    lo_box.set((await (await (await (await page.get().header()).get().dynamic_page_header({pinnable: abap.builtin.abap_true})).get().flex_box({alignitems: new abap.types.String().set(`Start`), justifycontent: new abap.types.String().set(`SpaceBetween`)})).get().flex_box({alignitems: new abap.types.String().set(`Start`)})));
    vbox.set((await lo_box.get().vbox()));
    await (await (await (await vbox.get().simple_form({editable: abap.builtin.abap_true})).get().content({ns: new abap.types.String().set(`form`)})).get().title({text: new abap.types.Character(5).set('Table')})).get().label({text: new abap.types.Character(4).set('Name')});
    await vbox.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_name}))});
    await vbox.get().button({text: new abap.types.Character(4).set('read'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_POST')}))});
    vbox.set((await lo_box.get().vbox()));
    if (abap.compare.initial(this.mt_02) === false) {
      this.mt_02_display.set(this.mt_02);
      await abap.statements.deleteInternal(this.mt_02_display,{where: async (I) => {return abap.compare.ne(I.screen_name, this.mv_name);}});
      abap.statements.clear(temp15);
      for await (const unique311 of abap.statements.loop(this.mt_cols)) {
        line.set(unique311);
        temp16.get().name.set(line);
        abap.statements.insertInternal({data: temp16, table: temp15});
      }
      this.mt_tab_02_input.set(temp15);
      for await (const unique312 of abap.statements.loop(this.mt_02_display)) {
        lr_tab.assign(unique312);
        abap.statements.clear(temp18);
        temp18.get().name.set(lr_tab.get().field);
        abap.statements.insertInternal({data: temp18, table: this.mt_tab_02_input});
      }
      await (await (await (await (await (await (await (await vbox.get().list({items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_tab_02_input})), headertext: new abap.types.String().set(`Filter`)})).get().custom_list_item()).get().hbox()).get().text({text: new abap.types.String().set(`{NAME}`)})).get().multi_input({tokens: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_token})), showclearicon: abap.builtin.abap_true, value: new abap.types.String().set(`{VALUE}`), tokenupdate: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('FILTER_UPDATE1')})), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('FILTER_UPDATE')})), id: new abap.types.String().set(`FILTER`), valuehelprequest: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('FILTER_VALUE_HELP')}))})).get().item({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`)})).get().tokens()).get().token({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`), visible: new abap.types.String().set(`{VISIBLE}`), selected: new abap.types.String().set(`{SELKZ}`), editable: new abap.types.String().set(`{EDITABLE}`)});
    }
    await this.client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
  }
  async z2ui5_on_render_pop_filter() {
    let lo_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let pan = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let item = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp19 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    lo_popup.set((await lo_popup.get().dialog({contentheight: new abap.types.String().set(`50%`), contentwidth: new abap.types.String().set(`50%`), title: new abap.types.Character(26).set('Define Conditons - Product')})));
    vbox.set((await lo_popup.get().vbox({height: new abap.types.String().set(`100%`), justifycontent: new abap.types.Character(12).set('SpaceBetween')})));
    pan.set((await vbox.get().panel({expandable: abap.builtin.abap_false, expanded: abap.builtin.abap_true, headertext: new abap.types.String().set(`Product`)})));
    item.set((await (await pan.get().list({nodata: new abap.types.String().set(`no conditions defined`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_filter})), selectionchange: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().custom_list_item()));
    grid.set((await item.get().grid()));
    abap.statements.clear(temp19);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${KEY}`), table: temp19});
    await (await (await (await (await (await grid.get().combobox({selectedkey: new abap.types.String().set(`{OPTION}`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_mapping}))})).get().item({key: new abap.types.Character(3).set('{N}'), text: new abap.types.Character(3).set('{N}')})).get().get_parent()).get().input({value: new abap.types.String().set(`{LOW}`)})).get().input({value: new abap.types.String().set(`{HIGH}`), visible: new abap.types.String().set(`{= \${OPTION} === 'BT' }`)})).get().button({icon: new abap.types.Character(18).set('sap-icon://decline'), type: new abap.types.String().set(`Transparent`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_DELETE`), t_arg: temp19}))});
    await (await (await (await (await (await (await lo_popup.get().footer()).get().overflow_toolbar()).get().button({text: new abap.types.String().set(`Delete All`), icon: new abap.types.Character(17).set('sap-icon://delete'), type: new abap.types.String().set(`Transparent`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_DELETE_ALL`)}))})).get().button({text: new abap.types.String().set(`Add Item`), icon: new abap.types.String().set(`sap-icon://add`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_ADD`)}))})).get().toolbar_spacer()).get().button({text: new abap.types.Character(2).set('OK'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('FILTER_VALUE_HELP_OK')})), type: new abap.types.Character(10).set('Emphasized')})).get().button({text: new abap.types.Character(6).set('Cancel'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(24).set('FILTER_VALUE_HELP_CANCEL')}))});
    await this.client.get().z2ui5_if_client$popup_display({val: (await lo_popup.get().stringify())});
  }
  async z2ui5_set_data() {
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_083'] = z2ui5_cl_demo_app_083;
z2ui5_cl_demo_app_083.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_083.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_083.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_083.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_083.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_083.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_083.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_083.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_083.ty_s_tab_01 = new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_01-SCREEN_NAME"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_01", undefined, {}, {});
z2ui5_cl_demo_app_083.temp1_ccb5cca2d1 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_01-SCREEN_NAME"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_01", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp1_ccb5cca2d1");
z2ui5_cl_demo_app_083.ty_s_tab_02 = new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {});
z2ui5_cl_demo_app_083.temp2_ccb5cca2d1 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp2_ccb5cca2d1");
z2ui5_cl_demo_app_083.temp3_ccb5cca2d1 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-SCREEN_NAME"}), "field": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD"}), "field_doma": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02-FIELD_DOMA"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp3_ccb5cca2d1");
z2ui5_cl_demo_app_083.ty_s_tab_02_input = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-NAME"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-VALUE"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02_input", undefined, {}, {});
z2ui5_cl_demo_app_083.temp4_ccb5cca2d1 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-NAME"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TAB_02_INPUT-VALUE"})}, "z2ui5_cl_demo_app_083=>ty_s_tab_02_input", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp4_ccb5cca2d1");
z2ui5_cl_demo_app_083.ty_s_filter_pop = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {});
z2ui5_cl_demo_app_083.temp5_ccb5cca2d1 = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_083=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp5_ccb5cca2d1");
z2ui5_cl_demo_app_083.ty_s_token = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_083=>ty_s_token", undefined, {}, {});
z2ui5_cl_demo_app_083.temp6_ccb5cca2d1 = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_083=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_083=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>temp6_ccb5cca2d1");
z2ui5_cl_demo_app_083.ty_t_range = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>ty_t_range");
z2ui5_cl_demo_app_083.ty_s_range = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
z2ui5_cl_demo_app_083.ty_s_filter = new abap.types.Structure({"product": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_083=>ty_t_range")}, "z2ui5_cl_demo_app_083=>ty_s_filter", undefined, {}, {});
export {z2ui5_cl_demo_app_083};
//# sourceMappingURL=z2ui5_cl_demo_app_083.clas.mjs.map