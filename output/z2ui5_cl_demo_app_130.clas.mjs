const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_130.clas.abap
class z2ui5_cl_demo_app_130 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_130';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_FILTER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp1_279441b868");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_MAPPING": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SCREENS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_SCREENS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_screens", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp2_279441b868");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_VARIANTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp3_279441b868");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_VARIANTS_POP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"}), "selkz": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_130=>ty_s_var_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp4_279441b868");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_ACTIV_ELEMNT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SCREEN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_BUTTON_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_DESCRIPTION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SCREEN_DESCR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VARIANT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_DESCRIPTION_COPY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VARIANT_COPY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_PARENT_VIEW": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp5_279441b868");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_INIT": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "RENDER_MAIN": {"visibility": "O", "parameters": {}},
  "RENDER_POPUP_FILTER": {"visibility": "O", "parameters": {}},
  "GET_FIELDS": {"visibility": "O", "parameters": {}},
  "GET_VALUES": {"visibility": "O", "parameters": {}},
  "POPUP_FILTER_OK": {"visibility": "O", "parameters": {}},
  "RENDER_POP_COPY": {"visibility": "O", "parameters": {}},
  "GET_VARIANTS": {"visibility": "O", "parameters": {}},
  "RENDER_POPUP_VARAINT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "POPUP_COPY_SAVE": {"visibility": "O", "parameters": {}},
  "SET_TOKEN": {"visibility": "O", "parameters": {"FIELD": {"type": () => {return new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}));}, "is_optional": " "}}},
  "GET_TXT": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ROLL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"});}, "is_optional": " "}}},
  "GET_TXT_L": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ROLL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "VARAINT_PAGE": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_filter = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp1_279441b868");
    this.mt_mapping = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    this.mt_screens = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_SCREENS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_screens", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp2_279441b868");
    this.mt_variants = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp3_279441b868");
    this.mt_variants_pop = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"}), "selkz": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_130=>ty_s_var_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp4_279441b868");
    this.mv_activ_elemnt = new abap.types.String({qualifiedName: "STRING"});
    this.mv_screen = new abap.types.String({qualifiedName: "STRING"});
    this.mv_button_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_description = new abap.types.String({qualifiedName: "STRING"});
    this.mv_screen_descr = new abap.types.String({qualifiedName: "STRING"});
    this.mv_variant = new abap.types.String({qualifiedName: "STRING"});
    this.mv_description_copy = new abap.types.String({qualifiedName: "STRING"});
    this.mv_variant_copy = new abap.types.String({qualifiedName: "STRING"});
    this.mo_parent_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mt_fields = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp5_279441b868");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async get_fields() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"})}, "z2ui5_cl_demo_app_130=>ty_s_fieldsdb", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_fieldsdb");
    let temp2 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"})}, "z2ui5_cl_demo_app_130=>ty_s_fieldsdb", undefined, {}, {});
    let db_fields = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"})}, "z2ui5_cl_demo_app_130=>ty_s_fieldsdb", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_fieldsdb");
    let temp3 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"})}, "z2ui5_cl_demo_app_130=>ty_s_fieldsdb", undefined, {}, {});
    let lr_fields = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"})}, "z2ui5_cl_demo_app_130=>ty_s_fieldsdb", undefined, {}, {}));
    let field = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}));
    abap.statements.clear(temp1);
    temp2.get().screen_name.set(new abap.types.Character(3).set('INV'));
    temp2.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp2.get().field_doma.set(new abap.types.Character(11).set('/SCWM/LGNUM'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(4).set('LAGP'));
    temp2.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp2.get().field_doma.set(new abap.types.Character(11).set('/SCWM/LGNUM'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(4).set('LAGP'));
    temp2.get().field.set(new abap.types.Character(5).set('LGPLA'));
    temp2.get().field_doma.set(new abap.types.Character(14).set('/SCWM/DE_LGPLA'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(4).set('LAGP'));
    temp2.get().field.set(new abap.types.Character(5).set('LGTYP'));
    temp2.get().field_doma.set(new abap.types.Character(14).set('/SCWM/DE_LGTYP'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp2.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp2.get().field_doma.set(new abap.types.Character(11).set('/SCWM/LGNUM'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp2.get().field.set(new abap.types.Character(5).set('LGPLA'));
    temp2.get().field_doma.set(new abap.types.Character(14).set('/SCWM/DE_LGPLA'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp2.get().field.set(new abap.types.Character(5).set('MATNR'));
    temp2.get().field_doma.set(new abap.types.Character(14).set('/SCWM/DE_MATNR'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp2.get().field.set(new abap.types.Character(5).set('OWNER'));
    temp2.get().field_doma.set(new abap.types.Character(14).set('/SCWM/DE_OWNER'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp2.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp2.get().field_doma.set(new abap.types.Character(11).set('/SCWM/LGNUM'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp2.get().field.set(new abap.types.Character(5).set('MATNR'));
    temp2.get().field_doma.set(new abap.types.Character(14).set('/SCWM/DE_MATNR'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp2.get().field.set(new abap.types.Character(6).set('PROCTY'));
    temp2.get().field_doma.set(new abap.types.Character(15).set('/SCWM/DE_PROCTY'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp2.get().field.set(new abap.types.Character(6).set('TOSTAT'));
    temp2.get().field_doma.set(new abap.types.Character(15).set('/SCWM/DE_TOSTAT'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp2.get().field.set(new abap.types.Character(5).set('VLPLA'));
    temp2.get().field_doma.set(new abap.types.Character(16).set('/SCWM/LTAP_VLPLA'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    db_fields.set(temp1);
    abap.statements.clear(this.mt_fields);
    for await (const unique368 of abap.statements.loop(db_fields,{where: async (I) => {return abap.compare.eq(I.screen_name, this.mv_screen);},topEquals: {"screen_name": this.mv_screen}})) {
      lr_fields.assign(unique368);
      field.assign(this.mt_fields.appendInitial());
      abap.statements.moveCorresponding(lr_fields.dereference(), field.dereference());
    }
  }
  async get_txt(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let roll = INPUT?.roll;
    if (roll?.getQualifiedName === undefined || roll.getQualifiedName() !== "STRING") { roll = undefined; }
    if (roll === undefined) { roll = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.roll); }
    let type = new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"});
    if (INPUT && INPUT.type) {type.set(INPUT.type);}
    result.set(new abap.types.Character(4).set('Text'));
    return result;
  }
  async get_txt_l(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let roll = INPUT?.roll;
    if (roll?.getQualifiedName === undefined || roll.getQualifiedName() !== "STRING") { roll = undefined; }
    if (roll === undefined) { roll = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.roll); }
    result.set(new abap.types.Character(4).set('Text'));
    return result;
  }
  async get_values() {
    let temp4 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_variants");
    let temp5 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {});
    let l_variants = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_variants");
    let $var = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_variants");
    let a = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {});
    let temp6 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_var_val");
    let temp7 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {});
    let var_vall_all = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_var_val");
    let var_val = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_var_val");
    let b = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {});
    let temp8 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {});
    let field = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}));
    let temp9 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {});
    let val = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {}));
    let temp10 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {});
    let filter = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {});
    abap.statements.clear(temp4);
    temp5.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp5.get().var.set(new abap.types.Character(10).set('E001 - ALL'));
    temp5.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp5.get().var.set(new abap.types.Character(4).set('E001'));
    temp5.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp5.get().var.set(new abap.types.Character(10).set('E001 - All'));
    temp5.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp5, table: temp4});
    l_variants.set(temp4);
    for await (const unique369 of abap.statements.loop(l_variants,{where: async (I) => {return abap.compare.eq(I.screen_name, this.mv_screen) && abap.compare.eq(I.var, this.mv_variant);},topEquals: {"screen_name": this.mv_screen,"var": this.mv_variant}})) {
      a.set(unique369);
      abap.statements.append({source: a, target: $var});
      this.mv_description.set(a.get().descr);
    }
    abap.statements.clear(temp6);
    temp7.get().screen_name.set(new abap.types.Character(4).set('LTAP'));
    temp7.get().var.set(new abap.types.Character(10).set('E001 - All'));
    temp7.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8CC06B0F98CD81A3'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(4).set('LTAP'));
    temp7.get().var.set(new abap.types.Character(10).set('E001 - All'));
    temp7.get().field.set(new abap.types.Character(5).set('MATNR'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8CD4E9389CB11403'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(4).set('LTAP'));
    temp7.get().var.set(new abap.types.Character(10).set('E001 - All'));
    temp7.get().field.set(new abap.types.Character(6).set('TOSTAT'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8CC06BC66AD581A3'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('NE'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(4).set('LTAP'));
    temp7.get().var.set(new abap.types.Character(10).set('E002 - All'));
    temp7.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8CC06B0F98CD81A3'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(4).set('LTAP'));
    temp7.get().var.set(new abap.types.Character(10).set('E002 - All'));
    temp7.get().field.set(new abap.types.Character(5).set('MATNR'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8CD4E9389CB11403'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(4).set('LTAP'));
    temp7.get().var.set(new abap.types.Character(10).set('E002 - All'));
    temp7.get().field.set(new abap.types.Character(6).set('TOSTAT'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8CC06BC66AD581A3'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('NE'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp7.get().var.set(new abap.types.Character(10).set('E001 - ALL'));
    temp7.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE90CEE2FA658C51EE'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp7.get().var.set(new abap.types.Character(10).set('E001 - ALL'));
    temp7.get().field.set(new abap.types.Character(5).set('LGPLA'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE90CEEF4750FD91EE'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp7.get().var.set(new abap.types.Character(10).set('E001      '));
    temp7.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8E87DE5FF8CC512A'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp7.get().var.set(new abap.types.Character(10).set('E001      '));
    temp7.get().field.set(new abap.types.Character(6).set('PROCTY'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8E87DD8D1EB8C7F5'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    temp7.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp7.get().var.set(new abap.types.Character(10).set('E001 - All'));
    temp7.get().field.set(new abap.types.Character(5).set('LGNUM'));
    temp7.get().guid.set(new abap.types.Character(32).set('663192E9D70C1EEE8E86552847635198'));
    temp7.get().sign.set(new abap.types.Character(1).set('I'));
    temp7.get().opt.set(new abap.types.Character(2).set('EQ'));
    abap.statements.insertInternal({data: temp7, table: temp6});
    var_vall_all.set(temp6);
    for await (const unique370 of abap.statements.loop(var_vall_all,{where: async (I) => {return abap.compare.eq(I.screen_name, this.mv_screen) && abap.compare.eq(I.var, this.mv_variant);},topEquals: {"screen_name": this.mv_screen,"var": this.mv_variant}})) {
      b.set(unique370);
      abap.statements.append({source: b, target: var_val});
    }
    for await (const unique371 of abap.statements.loop(this.mt_fields)) {
      field.assign(unique371);
      abap.statements.clear(field.get().t_filter);
      abap.statements.clear(field.get().t_token);
      for await (const unique372 of abap.statements.loop(var_val,{where: async (I) => {return abap.compare.eq(I.field, field.get().field);},topEquals: {"field": field.get().field}})) {
        val.assign(unique372);
        abap.statements.clear(temp10);
        temp10.get().key.set(val.get().guid);
        temp10.get().option.set(val.get().opt);
        temp10.get().low.set(val.get().low);
        temp10.get().high.set(val.get().high);
        filter.set(temp10);
        abap.statements.append({source: filter, target: field.get().t_filter});
        await this.set_token({field: field});
      }
    }
  }
  async get_variants() {
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp3_279441b868");
    let temp12 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {});
    abap.statements.clear(temp11);
    temp12.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp12.get().var.set(new abap.types.Character(10).set('E001 - ALL'));
    temp12.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp12.get().var.set(new abap.types.Character(4).set('E001'));
    temp12.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp12.get().var.set(new abap.types.Character(10).set('E001 - All'));
    temp12.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp12, table: temp11});
    this.mt_variants.set(temp11);
  }
  async on_event() {
    await this.varaint_page();
  }
  async on_init() {
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_SCREENS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_screens", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp2_279441b868");
    let temp14 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_SCREENS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_screens", undefined, {}, {});
    let temp15 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp16 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp13);
    temp14.get().screen_name.set(new abap.types.Character(3).set('INV'));
    temp14.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().screen_name.set(new abap.types.Character(4).set('LAGP'));
    temp14.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().screen_name.set(new abap.types.Character(2).set('PO'));
    temp14.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().screen_name.set(new abap.types.Character(4).set('QUAN'));
    temp14.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().screen_name.set(new abap.types.Character(2).set('TO'));
    temp14.get().descr.set(new abap.types.Character(3).set('123'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    this.mt_screens.set(temp13);
    await this.render_main();
    abap.statements.clear(temp15);
    temp16.get().n.set(new abap.types.String().set(`EQ`));
    temp16.get().v.set(new abap.types.String().set(`={LOW}`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`LT`));
    temp16.get().v.set(new abap.types.String().set(`<{LOW}`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`LE`));
    temp16.get().v.set(new abap.types.String().set(`<={LOW}`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`GT`));
    temp16.get().v.set(new abap.types.String().set(`>{LOW}`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`GE`));
    temp16.get().v.set(new abap.types.String().set(`>={LOW}`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`CP`));
    temp16.get().v.set(new abap.types.String().set(`*{LOW}*`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`BT`));
    temp16.get().v.set(new abap.types.String().set(`{LOW}...{HIGH}`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`NE`));
    temp16.get().v.set(new abap.types.String().set(`!(={LOW})`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().n.set(new abap.types.String().set(`<leer>`));
    temp16.get().v.set(new abap.types.String().set(`<leer>`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    this.mt_mapping.set(temp15);
  }
  async popup_copy_save() {
    this.mv_variant.set(this.mv_variant_copy);
    this.mv_description.set(this.mv_description_copy);
  }
  async popup_filter_ok() {
    let lr_field = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}));
    abap.statements.readTable(this.mt_fields,{referenceInto: lr_field,
      withKey: (i) => {return abap.compare.eq(i.field, this.mv_activ_elemnt);},
      withKeyValue: [{key: (i) => {return i.field}, value: this.mv_activ_elemnt}],
      usesTableLine: false,
      withKeySimple: {"field": this.mv_activ_elemnt}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      await abap.statements.deleteInternal(this.mt_filter,{where: async (I) => {return abap.compare.initial(I.option);}});
      lr_field.get().t_filter.set(this.mt_filter);
      abap.statements.clear(lr_field.get().t_token);
      await this.set_token({field: lr_field});
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.render_main();
    }
  }
  async render_main() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp17 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {});
    let lr_tab = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}));
    let temp18 = new abap.types.String({qualifiedName: "STRING"});
    let scrtext = new abap.types.String({qualifiedName: "STRING"});
    let temp19 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.initial(this.mo_parent_view)) {
      view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: (await this.get_txt({roll: new abap.types.Character(29).set('/SCWM/DE_TW_COND_CHECK_SELECT')})), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    } else {
      page.set((await this.mo_parent_view.get().get({name: new abap.types.String().set(`Page`)})));
    }
    await (await page.get().header_content()).get().get_parent();
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await (await (await (await (await grid.get().simple_form({title: (await this.get_txt({roll: new abap.types.Character(8).set('BU_DYNID')}))})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: (await this.get_txt({roll: new abap.types.Character(8).set('BU_DYNID')}))})).get().combobox({change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(19).set('INPUT_SCREEN_CHANGE')})), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_screens})), selectedkey: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_screen}))})).get().item({key: new abap.types.Character(13).set('{SCREEN_NAME}'), text: new abap.types.Character(23).set('{SCREEN_NAME} - {DESCR}')})).get().get_parent()).get().label({text: (await this.get_txt({roll: new abap.types.Character(8).set('DESCR_40')}))})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_screen_descr})), showvaluehelp: abap.builtin.abap_false, enabled: abap.builtin.abap_false});
    await (await (await (await (await (await grid.get().simple_form({title: (await this.get_txt({roll: new abap.types.Character(16).set('/SCWM/WB_VARIANT')}))})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: (await this.get_txt({roll: new abap.types.Character(16).set('/SCWM/WB_VARIANT')}))})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_variant})), showvaluehelp: abap.builtin.abap_true, valuehelprequest: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('CALL_POPUP_VARIANT')})), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('INPUT_VARIANT_CHANGE')}))})).get().label({text: (await this.get_txt({roll: new abap.types.Character(8).set('DESCR_40')}))})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_description})), showvaluehelp: abap.builtin.abap_false});
    content.set((await (await grid.get().simple_form({title: (await this.get_txt({roll: new abap.types.Character(8).set('CLASSFEL')}))})).get().content({ns: new abap.types.Character(4).set('form')})));
    if (abap.compare.initial(this.mt_fields) === false) {
      for await (const unique373 of abap.statements.loop(this.mt_fields)) {
        lr_tab.assign(unique373);
        temp18.set(lr_tab.get().field_doma);
        scrtext.set((await this.get_txt({roll: temp18})));
        abap.statements.clear(temp19);
        temp1.set(lr_tab.get().field);
        abap.statements.insertInternal({data: temp1, table: temp19});
        await (await (await (await (await content.get().label({text: scrtext})).get().multi_input({tokens: (await this.client.get().z2ui5_if_client$_bind_local({val: lr_tab.get().t_token})), showclearicon: abap.builtin.abap_true, id: lr_tab.get().field, valuehelprequest: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('CALL_POPUP_FILTER'), t_arg: temp19}))})).get().item({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`)})).get().tokens()).get().token({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`), visible: new abap.types.String().set(`{VISIBLE}`), selected: new abap.types.String().set(`{SELKZ}`), editable: new abap.types.String().set(`{EDITABLE}`)});
      }
    }
    await (await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: (await this.get_txt({roll: new abap.types.Character(14).set('/SCWM/DE_HUDEL')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_DELETE')})), type: new abap.types.Character(6).set('Reject'), icon: new abap.types.Character(17).set('sap-icon://delete'), enabled: this.mv_button_active})).get().button({text: (await this.get_txt({roll: new abap.types.Character(7).set('B_KOPIE')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_COPY')})), type: new abap.types.Character(7).set('Default'), enabled: this.mv_button_active})).get().button({text: (await this.get_txt({roll: new abap.types.Character(19).set('/SCWM/DE_LM_LOGSAVE')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SAVE')})), type: new abap.types.Character(7).set('Success'), enabled: this.mv_button_active});
    if (abap.compare.initial(this.mo_parent_view)) {
      await this.client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
    }
  }
  async render_popup_filter() {
    let lo_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let item = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp21 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    lo_popup.set((await lo_popup.get().dialog({contentheight: new abap.types.String().set(`50%`), contentwidth: new abap.types.String().set(`50%`), title: (await this.get_txt_l({roll: new abap.types.Character(27).set('/SCWM/DE_TW_COND_CHECK_COND')}))})));
    vbox.set((await lo_popup.get().vbox({height: new abap.types.String().set(`100%`), justifycontent: new abap.types.Character(12).set('SpaceBetween')})));
    item.set((await (await vbox.get().list({nodata: (await this.get_txt({roll: new abap.types.Character(22).set('/SCWM/DE_IND_BIN_EMPTY')})), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_filter})), selectionchange: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().custom_list_item()));
    grid.set((await item.get().grid()));
    abap.statements.clear(temp21);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${KEY}`), table: temp21});
    await (await (await (await (await (await grid.get().combobox({selectedkey: new abap.types.String().set(`{OPTION}`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_mapping}))})).get().item({key: new abap.types.Character(3).set('{N}'), text: new abap.types.Character(3).set('{N}')})).get().get_parent()).get().input({value: new abap.types.String().set(`{LOW}`)})).get().input({value: new abap.types.String().set(`{HIGH}`), visible: new abap.types.String().set(`{= \${OPTION} === 'BT' }`)})).get().button({icon: new abap.types.Character(18).set('sap-icon://decline'), type: new abap.types.String().set(`Transparent`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_FILTER_DELETE`), t_arg: temp21}))});
    await (await (await (await (await (await lo_popup.get().footer()).get().overflow_toolbar()).get().button({text: (await this.get_txt({roll: new abap.types.Character(9).set('FC_DELALL')})), icon: new abap.types.Character(17).set('sap-icon://delete'), type: new abap.types.String().set(`Transparent`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_FILTER_DELETE_ALL`)}))})).get().button({text: (await this.get_txt({roll: new abap.types.Character(17).set('RSLPO_GUI_ADDPART')})), icon: new abap.types.String().set(`sap-icon://add`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_FILTER_ADD`)}))})).get().toolbar_spacer()).get().button({text: (await this.get_txt({roll: new abap.types.Character(13).set('MSSRCF_ACTION')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('POPUP_FILTER_OK')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await lo_popup.get().stringify())});
  }
  async render_popup_varaint(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await popup.get().dialog({title: (await this.get_txt({roll: new abap.types.Character(16).set('/SCWM/WB_VARIANT')})), contentwidth: new abap.types.Character(3).set('30%')})).get().table({mode: new abap.types.Character(16).set('SingleSelectLeft'), items: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_variants_pop}))})).get().columns()).get().column({width: new abap.types.Character(5).set('20rem')})).get().text({text: (await this.get_txt({roll: new abap.types.Character(16).set('/SCWM/WB_VARIANT')}))})).get().get_parent()).get().column()).get().text({text: (await this.get_txt({roll: new abap.types.Character(8).set('DESCR_40')}))})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().text({text: new abap.types.Character(5).set('{VAR}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: (await this.get_txt({roll: new abap.types.Character(13).set('MSSRCF_ACTION')})), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(19).set('POPUP_VARIANT_CLOSE')})), type: new abap.types.Character(10).set('Emphasized')});
    await client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async render_pop_copy() {
    let lo_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    lo_popup.set((await lo_popup.get().dialog({contentheight: new abap.types.String().set(`50%`), contentwidth: new abap.types.String().set(`50%`), title: (await this.get_txt({roll: new abap.types.Character(20).set('/SCWM/DE_COPY_NUMBER')}))})));
    await (await (await (await (await (await lo_popup.get().simple_form({title: (await this.get_txt({roll: new abap.types.Character(16).set('/SCWM/WB_VARIANT')}))})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: (await this.get_txt({roll: new abap.types.Character(16).set('/SCWM/WB_VARIANT')}))})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_variant_copy})), showvaluehelp: abap.builtin.abap_false})).get().label({text: (await this.get_txt({roll: new abap.types.Character(8).set('DESCR_40')}))})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_description_copy})), showvaluehelp: abap.builtin.abap_false});
    await (await (await (await (await lo_popup.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: (await this.get_txt({roll: new abap.types.Character(5).set('XEXIT')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('POPUP_COPY_EXIT')})), type: new abap.types.Character(6).set('Reject')})).get().button({text: (await this.get_txt({roll: new abap.types.Character(19).set('/SCWM/DE_LM_LOGSAVE')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('POPUP_COPY_SAVE')})), type: new abap.types.Character(10).set('Emphasized'), enabled: new abap.types.String().set(`{= \${MV_VARIANT_COPY} !== "" }`)});
    await this.client.get().z2ui5_if_client$popup_display({val: (await lo_popup.get().stringify())});
  }
  async set_token(INPUT) {
    let field = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}));
    if (INPUT && INPUT.field) {field = INPUT.field;}
    let temp23 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {});
    let lr_filter = new abap.types.DataReference(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}));
    let lv_value = new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"});
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp3 = new abap.types.Integer({qualifiedName: "I"});
    let temp24 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {});
    for await (const unique374 of abap.statements.loop(field.get().t_filter)) {
      lr_filter.assign(unique374);
      temp3.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.mt_mapping,{into: temp2,
        withKey: (i) => {return abap.compare.eq(i.n, lr_filter.get().option);},
        withKeyValue: [{key: (i) => {return i.n}, value: lr_filter.get().option}],
        usesTableLine: false,
        withKeySimple: {"n": lr_filter.get().option}});
      abap.builtin.sy.get().tabix.set(temp3);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_value.set(temp2.get().v);
      abap.statements.replace({target: lv_value, all: false, with: lr_filter.get().low, of: new abap.types.String().set(`{LOW}`)});
      abap.statements.replace({target: lv_value, all: false, with: lr_filter.get().high, of: new abap.types.String().set(`{HIGH}`)});
      abap.statements.clear(temp24);
      temp24.get().key.set(lv_value);
      temp24.get().text.set(lv_value);
      temp24.get().visible.set(abap.builtin.abap_true);
      temp24.get().editable.set(abap.builtin.abap_false);
      abap.statements.insertInternal({data: temp24, table: field.get().t_token});
    }
  }
  async varaint_page() {
    let temp25 = new abap.types.String({qualifiedName: "STRING"});
    let temp26 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_SCREENS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_screens", undefined, {}, {});
    let temp27 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {});
    let lt_item = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp28 = new abap.types.String({qualifiedName: "STRING"});
    let temp29 = new abap.types.Integer({qualifiedName: "I"});
    let temp30 = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp1_279441b868");
    let arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp31 = new abap.types.String({qualifiedName: "STRING"});
    let temp32 = new abap.types.String({qualifiedName: "STRING"});
    let lr_field = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}));
    let temp33 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {});
    let lr_fields = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}));
    let field = new abap.types.DataReference(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"}), "selkz": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_130=>ty_s_var_pop", undefined, {}, {}));
    let temp34 = new abap.types.String({qualifiedName: "STRING"});
    let temp35 = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"}), "selkz": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_130=>ty_s_var_pop", undefined, {}, {});
    let unique375 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique375, new abap.types.String().set(`INPUT_SCREEN_CHANGE`))) {
      abap.statements.clear(temp25);
      abap.statements.readTable(this.mt_screens,{into: temp26,
        withKey: (i) => {return abap.compare.eq(i.screen_name, this.mv_screen);},
        withKeyValue: [{key: (i) => {return i.screen_name}, value: this.mv_screen}],
        usesTableLine: false,
        withKeySimple: {"screen_name": this.mv_screen}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        temp25.set(temp26.get().descr);
      }
      this.mv_screen_descr.set(temp25);
      await this.get_fields();
      abap.statements.clear(this.mv_variant);
      abap.statements.clear(this.mv_description);
      await this.get_variants();
      await this.render_main();
    } else if (abap.compare.eq(unique375, new abap.types.String().set(`INPUT_VARIANT_CHANGE`))) {
      await this.get_values();
      await this.render_main();
    } else if (abap.compare.eq(unique375, new abap.types.String().set(`POPUP_FILTER_OK`))) {
      await this.popup_filter_ok();
    } else if (abap.compare.eq(unique375, new abap.types.String().set(`POPUP_FILTER_ADD`))) {
      abap.statements.clear(temp27);
      temp27.get().key.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
      abap.statements.insertInternal({data: temp27, table: this.mt_filter});
      await this.client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique375, new abap.types.String().set(`POPUP_FILTER_DELETE`))) {
      lt_item.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp29.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_item,{index: abap.IntegerFactory.get(1),
        into: temp28});
      abap.builtin.sy.get().tabix.set(temp29);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await abap.statements.deleteInternal(this.mt_filter,{where: async (I) => {return abap.compare.eq(I.key, temp28);}});
      await this.client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique375, new abap.types.String().set(`POPUP_FILTER_DELETE_ALL`))) {
      abap.statements.clear(temp30);
      this.mt_filter.set(temp30);
      await this.client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique375, new abap.types.String().set(`CALL_POPUP_FILTER`))) {
      arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      abap.statements.clear(temp31);
      abap.statements.readTable(arg,{index: abap.IntegerFactory.get(1),
        into: temp32});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        temp31.set(temp32);
      }
      this.mv_activ_elemnt.set(temp31);
      abap.statements.readTable(this.mt_fields,{referenceInto: lr_field,
        withKey: (i) => {return abap.compare.eq(i.field, this.mv_activ_elemnt);},
        withKeyValue: [{key: (i) => {return i.field}, value: this.mv_activ_elemnt}],
        usesTableLine: false,
        withKeySimple: {"field": this.mv_activ_elemnt}});
      this.mt_filter.set(lr_field.get().t_filter);
      await this.render_popup_filter();
    } else if (abap.compare.eq(unique375, new abap.types.Character(18).set('CALL_POPUP_VARIANT'))) {
      for await (const unique376 of abap.statements.loop(this.mt_variants)) {
        lr_fields.assign(unique376);
        field.assign(this.mt_variants_pop.appendInitial());
        abap.statements.moveCorresponding(lr_fields.dereference(), field.dereference());
      }
      await this.render_popup_varaint({client: this.client});
    } else if (abap.compare.eq(unique375, new abap.types.Character(19).set('POPUP_VARIANT_CLOSE'))) {
      abap.statements.clear(temp34);
      abap.statements.readTable(this.mt_variants_pop,{into: temp35,
        withKey: (i) => {return abap.compare.eq(i.selkz, abap.builtin.abap_true);},
        withKeyValue: [{key: (i) => {return i.selkz}, value: abap.builtin.abap_true}],
        usesTableLine: false,
        withKeySimple: {"selkz": abap.builtin.abap_true}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        temp34.set(temp35.get().var);
      }
      this.mv_variant.set(temp34);
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.get_values();
      await this.render_main();
    } else if (abap.compare.eq(unique375, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique375, new abap.types.Character(11).set('BUTTON_SAVE'))) {
    } else if (abap.compare.eq(unique375, new abap.types.Character(13).set('BUTTON_DELETE'))) {
      await this.render_main();
    } else if (abap.compare.eq(unique375, new abap.types.Character(11).set('BUTTON_COPY'))) {
      await this.render_pop_copy();
      await this.render_main();
    } else if (abap.compare.eq(unique375, new abap.types.Character(15).set('POPUP_COPY_EXIT'))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
    } else if (abap.compare.eq(unique375, new abap.types.Character(15).set('POPUP_COPY_SAVE'))) {
      await this.popup_copy_save();
      await this.client.get().z2ui5_if_client$popup_destroy();
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.on_init();
      return;
    }
    await this.on_event();
    temp1.set(abap.builtin.boolc(abap.compare.initial(this.mv_screen) === false && abap.compare.initial(this.mv_variant) === false));
    this.mv_button_active.set(temp1);
    await client.get().z2ui5_if_client$view_model_update();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_130'] = z2ui5_cl_demo_app_130;
z2ui5_cl_demo_app_130.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_130.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_130.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_130.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_130.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_130.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_130.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_130.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_130.ty_s_token = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {});
z2ui5_cl_demo_app_130.ty_t_token = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token");
z2ui5_cl_demo_app_130.ty_t_range = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_range");
z2ui5_cl_demo_app_130.ty_s_range = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
z2ui5_cl_demo_app_130.ty_s_filter_pop = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {});
z2ui5_cl_demo_app_130.ty_t_filter_pop = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop");
z2ui5_cl_demo_app_130.ty_s_fieldsdb = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"})}, "z2ui5_cl_demo_app_130=>ty_s_fieldsdb", undefined, {}, {});
z2ui5_cl_demo_app_130.ty_t_fieldsdb = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"})}, "z2ui5_cl_demo_app_130=>ty_s_fieldsdb", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_fieldsdb");
z2ui5_cl_demo_app_130.ty_s_fields = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {});
z2ui5_cl_demo_app_130.ty_s_var_val = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {});
z2ui5_cl_demo_app_130.ty_t_var_val = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "guid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VAR_VAL-GUID"}), "sign": new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"}), "opt": new abap.types.Character(2, {"qualifiedName":"CHAR2","ddicName":"CHAR2"}), "low": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"}), "high": new abap.types.Character(255, {"qualifiedName":"CHAR255","ddicName":"CHAR255"})}, "z2ui5_cl_demo_app_130=>ty_s_var_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_var_val");
z2ui5_cl_demo_app_130.ty_s_variants = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {});
z2ui5_cl_demo_app_130.ty_t_variants = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_variants");
z2ui5_cl_demo_app_130.ty_s_var_pop = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"}), "selkz": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_130=>ty_s_var_pop", undefined, {}, {});
z2ui5_cl_demo_app_130.ty_s_screens = new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_SCREENS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_screens", undefined, {}, {});
z2ui5_cl_demo_app_130.temp1_279441b868 = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp1_279441b868");
z2ui5_cl_demo_app_130.temp2_279441b868 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_SCREENS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_screens", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp2_279441b868");
z2ui5_cl_demo_app_130.temp3_279441b868 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"})}, "z2ui5_cl_demo_app_130=>ty_s_variants", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp3_279441b868");
z2ui5_cl_demo_app_130.temp4_279441b868 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "var": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_VARIANTS-DESCR"}), "selkz": new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"})}, "z2ui5_cl_demo_app_130=>ty_s_var_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp4_279441b868");
z2ui5_cl_demo_app_130.temp5_279441b868 = abap.types.TableFactory.construct(new abap.types.Structure({"screen_name": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "field_doma": new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"}), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_130=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_token"), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_130=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_130=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>ty_t_filter_pop")}, "z2ui5_cl_demo_app_130=>ty_s_fields", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_130=>temp5_279441b868");
export {z2ui5_cl_demo_app_130};
//# sourceMappingURL=z2ui5_cl_demo_app_130.clas.mjs.map