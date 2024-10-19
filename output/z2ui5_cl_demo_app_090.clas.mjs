const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_090.clas.abap
class z2ui5_cl_demo_app_090 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_090';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_COLUMNS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items2");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_COLUMNS1": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items2");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_GROUPS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-COLUMNKEY"}), "operation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-OPERATION"}), "showifgrouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-TEXT"})}, "z2ui5_cl_demo_app_090=>t_items3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items3");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_COLUMNS_P13N": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items22", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items22");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SORT_P13N": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"sorted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-LABEL"}), "descending": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_090=>t_items32", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items32");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_GROUPS_P13N": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"grouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items33", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items33");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_CC_LOADED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MV_PAGE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_P13N": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_P13N_POPUP": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "INIT_DATA_SET": {"visibility": "O", "parameters": {}},
  "GET_CUSTOM_JS": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_columns = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items2");
    this.mt_columns1 = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items2");
    this.mt_groups = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-COLUMNKEY"}), "operation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-OPERATION"}), "showifgrouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-TEXT"})}, "z2ui5_cl_demo_app_090=>t_items3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items3");
    this.mt_columns_p13n = abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items22", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items22");
    this.mt_sort_p13n = abap.types.TableFactory.construct(new abap.types.Structure({"sorted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-LABEL"}), "descending": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_090=>t_items32", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items32");
    this.mt_groups_p13n = abap.types.TableFactory.construct(new abap.types.Structure({"grouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items33", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items33");
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.check_cc_loaded = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_page = new abap.types.String({qualifiedName: "STRING"});
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
    if (abap.compare.eq(this.check_cc_loaded, abap.builtin.abap_false)) {
      this.check_cc_loaded.set(abap.builtin.abap_true);
      await this.init_data_set();
      await client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POP_JS_LOADER'].factory({i_js: (await this.get_custom_js())}))});
      return;
    } else if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.init_data_set();
      await this.z2ui5_view_display();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique324 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique324, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique324, new abap.types.Character(9).set('P13N_OPEN'))) {
      await this.z2ui5_view_p13n();
    } else if (abap.compare.eq(unique324, new abap.types.Character(10).set('P13N_POPUP'))) {
      await this.z2ui5_view_p13n_popup();
    } else if (abap.compare.eq(unique324, new abap.types.Character(2).set('OK')) || abap.compare.eq(unique324, new abap.types.Character(6).set('CANCEL'))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
    }
  }
  async z2ui5_view_display() {
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp11 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp8 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp10 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_columns_p13n, custom_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())});
    await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_sort_p13n, custom_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())});
    await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_groups_p13n, custom_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())});
    page.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp11.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await page.get().shell()).get().page({title: new abap.types.Character(22).set('abap2UI5 - P13N Dialog'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp11, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    page.set((await page.get().vbox()));
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`title`));
    temp2.get().v.set(new abap.types.String().set(`My Custom View Settings`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`close`));
    temp2.get().v.set(new abap.types.String().set(`sap.z2ui5.updateData(\${$parameters>/reason})`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`id`));
    temp2.get().v.set(new abap.types.String().set(`p13nPopup`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`id`));
    temp4.get().v.set(new abap.types.String().set(`columnsPanel`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`title`));
    temp4.get().v.set(new abap.types.String().set(`Columns`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    abap.statements.clear(temp5);
    temp6.get().n.set(new abap.types.String().set(`id`));
    temp6.get().v.set(new abap.types.String().set(`sortPanel`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`title`));
    temp6.get().v.set(new abap.types.String().set(`Sort`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    abap.statements.clear(temp7);
    temp8.get().n.set(new abap.types.String().set(`id`));
    temp8.get().v.set(new abap.types.String().set(`filterPanel`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`title`));
    temp8.get().v.set(new abap.types.String().set(`Filter`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    abap.statements.clear(temp9);
    temp10.get().n.set(new abap.types.String().set(`id`));
    temp10.get().v.set(new abap.types.String().set(`groupPanel`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`title`));
    temp10.get().v.set(new abap.types.String().set(`Group`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get()._generic({name: new abap.types.String().set(`Popup`), ns: new abap.types.String().set(`p13n`), t_prop: temp1})).get()._generic({name: new abap.types.String().set(`panels`), ns: new abap.types.String().set(`p13n`)})).get()._generic({name: new abap.types.String().set(`SelectionPanel`), ns: new abap.types.String().set(`p13n`), t_prop: temp3})).get().get_parent()).get()._generic({name: new abap.types.String().set(`SortPanel`), ns: new abap.types.String().set(`p13n`), t_prop: temp5})).get().get_parent()).get()._generic({name: new abap.types.String().set(`P13nFilterPanel`), ns: new abap.types.String().set(``), t_prop: temp7})).get().get_parent()).get()._generic({name: new abap.types.String().set(`GroupPanel`), ns: new abap.types.String().set(`p13n`), t_prop: temp9})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent();
    await (await (await (await page.get().button({text: new abap.types.String().set(`Open P13N Dialog`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('P13N_OPEN')})), class: new abap.types.String().set(`sapUiTinyMarginBeginEnd`)})).get().button({text: new abap.types.String().set(`Open P13N.POPUP`), press: new abap.types.String().set(`sap.z2ui5.setInitialData()`)})).get().get_parent()).get().get_parent();
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async z2ui5_view_p13n() {
    let p13n_dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp8 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp10 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp12 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp14 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let p13n = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    p13n_dialog.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`ok`));
    temp4.get().v.set((await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`OK`)})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`cancel`));
    temp4.get().v.set((await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CANCEL`)})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`reset`));
    temp4.get().v.set((await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`RESET`)})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`showReset`));
    temp4.get().v.set(new abap.types.String().set(`true`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`initialVisiblePanelType`));
    temp4.get().v.set(new abap.types.String().set(`sort`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    abap.statements.clear(temp5);
    temp6.get().n.set(new abap.types.String().set(`items`));
    temp6.get().v.set(abap.operators.concat(new abap.types.String().set(`{path:'`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_columns, path: abap.builtin.abap_true, custom_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())})),new abap.types.String().set(`'}`))));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`columnsItems`));
    temp6.get().v.set(abap.operators.concat(new abap.types.String().set(`{path:'`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_columns1, path: abap.builtin.abap_true, custom_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())})),new abap.types.String().set(`'}`))));
    abap.statements.insertInternal({data: temp6, table: temp5});
    abap.statements.clear(temp7);
    temp8.get().n.set(new abap.types.String().set(`columnKey`));
    temp8.get().v.set(new abap.types.String().set(`{columnkey}`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`text`));
    temp8.get().v.set(new abap.types.String().set(`{text}`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    abap.statements.clear(temp9);
    temp10.get().n.set(new abap.types.String().set(`columnKey`));
    temp10.get().v.set(new abap.types.String().set(`{columnkey}`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`visible`));
    temp10.get().v.set(new abap.types.String().set(`{visible}`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`index`));
    temp10.get().v.set(new abap.types.String().set(`{index}`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    abap.statements.clear(temp11);
    temp12.get().n.set(new abap.types.String().set(`groupItems`));
    temp12.get().v.set(abap.operators.concat(new abap.types.String().set(`{path:'`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_groups, path: abap.builtin.abap_true, custom_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())})),new abap.types.String().set(`'}`))));
    abap.statements.insertInternal({data: temp12, table: temp11});
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`columnKey`));
    temp2.get().v.set(new abap.types.String().set(`{columnkey}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`text`));
    temp2.get().v.set(new abap.types.String().set(`{text}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    abap.statements.clear(temp13);
    temp14.get().n.set(new abap.types.String().set(`columnKey`));
    temp14.get().v.set(new abap.types.String().set(`{columnkey}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`operation`));
    temp14.get().v.set(new abap.types.String().set(`{operation}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`showIfGrouped`));
    temp14.get().v.set(new abap.types.String().set(`{showifgrouped}`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    p13n.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await p13n_dialog.get()._generic({name: new abap.types.String().set(`P13nDialog`), t_prop: temp3})).get()._generic({name: new abap.types.String().set(`panels`)})).get()._generic({name: new abap.types.String().set(`P13nColumnsPanel`), t_prop: temp5})).get().items()).get()._generic({name: new abap.types.String().set(`P13nItem`), t_prop: temp7})).get().get_parent()).get().get_parent()).get()._generic({name: new abap.types.String().set(`columnsItems`)})).get()._generic({name: new abap.types.String().set(`P13nColumnsItem`), t_prop: temp9})).get().get_parent()).get().get_parent()).get().get_parent()).get()._generic({name: new abap.types.String().set(`P13nGroupPanel`), t_prop: temp11})).get().items()).get()._generic({name: new abap.types.String().set(`P13nItem`), t_prop: temp1})).get().get_parent()).get().get_parent()).get()._generic({name: new abap.types.String().set(`groupItems`)})).get()._generic({name: new abap.types.String().set(`P13nGroupItem`), t_prop: temp13})));
    await this.client.get().z2ui5_if_client$popup_display({val: (await p13n.get().stringify())});
  }
  async z2ui5_view_p13n_popup() {
    let p13n_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp8 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp10 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp12 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    p13n_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    abap.statements.clear(temp5);
    temp6.get().n.set(new abap.types.String().set(`title`));
    temp6.get().v.set(new abap.types.String().set(`My Custom View Settings`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`id`));
    temp6.get().v.set(new abap.types.String().set(`p13nPopup`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    abap.statements.clear(temp7);
    temp8.get().n.set(new abap.types.String().set(`id`));
    temp8.get().v.set(new abap.types.String().set(`columnsPanel`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`title`));
    temp8.get().v.set(new abap.types.String().set(`Columns`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    abap.statements.clear(temp9);
    temp10.get().n.set(new abap.types.String().set(`id`));
    temp10.get().v.set(new abap.types.String().set(`sortPanel`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`title`));
    temp10.get().v.set(new abap.types.String().set(`Sort`));
    abap.statements.insertInternal({data: temp10, table: temp9});
    abap.statements.clear(temp11);
    temp12.get().n.set(new abap.types.String().set(`id`));
    temp12.get().v.set(new abap.types.String().set(`groupPanel`));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`title`));
    temp12.get().v.set(new abap.types.String().set(`Group`));
    abap.statements.insertInternal({data: temp12, table: temp11});
    await (await (await (await (await (await (await (await (await (await p13n_popup.get()._generic({name: new abap.types.String().set(`Popup`), ns: new abap.types.String().set(`p13n`), t_prop: temp5})).get()._generic({name: new abap.types.String().set(`panels`), ns: new abap.types.String().set(`p13n`)})).get()._generic({name: new abap.types.String().set(`SelectionPanel`), ns: new abap.types.String().set(`p13n`), t_prop: temp7})).get().get_parent()).get()._generic({name: new abap.types.String().set(`SortPanel`), ns: new abap.types.String().set(`p13n`), t_prop: temp9})).get().get_parent()).get()._generic({name: new abap.types.String().set(`GroupPanel`), ns: new abap.types.String().set(`p13n`), t_prop: temp11})).get().get_parent()).get().get_parent()).get().get_parent();
    await this.client.get().z2ui5_if_client$view_display({val: (await p13n_popup.get().stringify())});
  }
  async init_data_set() {
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items2");
    let temp8 = new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items2");
    let temp10 = new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-COLUMNKEY"}), "operation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-OPERATION"}), "showifgrouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-TEXT"})}, "z2ui5_cl_demo_app_090=>t_items3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items3");
    let temp12 = new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-COLUMNKEY"}), "operation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-OPERATION"}), "showifgrouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-TEXT"})}, "z2ui5_cl_demo_app_090=>t_items3", undefined, {}, {});
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items22", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items22");
    let temp14 = new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items22", undefined, {}, {});
    let temp15 = abap.types.TableFactory.construct(new abap.types.Structure({"sorted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-LABEL"}), "descending": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_090=>t_items32", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items32");
    let temp16 = new abap.types.Structure({"sorted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-LABEL"}), "descending": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_090=>t_items32", undefined, {}, {});
    let temp17 = abap.types.TableFactory.construct(new abap.types.Structure({"grouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items33", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items33");
    let temp18 = new abap.types.Structure({"grouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items33", undefined, {}, {});
    abap.statements.clear(temp7);
    temp8.get().columnkey.set(new abap.types.String().set(`productId`));
    temp8.get().text.set(new abap.types.String().set(`Product ID`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().columnkey.set(new abap.types.String().set(`name`));
    temp8.get().text.set(new abap.types.String().set(`Name`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().columnkey.set(new abap.types.String().set(`category`));
    temp8.get().text.set(new abap.types.String().set(`Category`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().columnkey.set(new abap.types.String().set(`supplierName`));
    temp8.get().text.set(new abap.types.String().set(`Supplier Name`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    this.mt_columns.set(temp7);
    abap.statements.clear(temp9);
    temp10.get().columnkey.set(new abap.types.String().set(`name`));
    temp10.get().visible.set(abap.builtin.abap_true);
    temp10.get().index.set(abap.IntegerFactory.get(0));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().columnkey.set(new abap.types.String().set(`category`));
    temp10.get().visible.set(abap.builtin.abap_true);
    temp10.get().index.set(abap.IntegerFactory.get(1));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().columnkey.set(new abap.types.String().set(`productId`));
    temp10.get().visible.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().columnkey.set(new abap.types.String().set(`supplierName`));
    temp10.get().visible.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp10, table: temp9});
    this.mt_columns1.set(temp9);
    abap.statements.clear(temp11);
    temp12.get().columnkey.set(new abap.types.String().set(`name`));
    temp12.get().text.set(new abap.types.String().set(`Name`));
    temp12.get().showifgrouped.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().columnkey.set(new abap.types.String().set(`category`));
    temp12.get().text.set(new abap.types.String().set(`Category`));
    temp12.get().showifgrouped.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().columnkey.set(new abap.types.String().set(`productId`));
    temp12.get().showifgrouped.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().columnkey.set(new abap.types.String().set(`supplierName`));
    temp12.get().showifgrouped.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp12, table: temp11});
    this.mt_groups.set(temp11);
    abap.statements.clear(temp13);
    temp14.get().visible.set(new abap.types.String().set(`true`));
    temp14.get().name.set(new abap.types.String().set(`key1`));
    temp14.get().label.set(new abap.types.String().set(`City`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().visible.set(new abap.types.String().set(`false`));
    temp14.get().name.set(new abap.types.String().set(`key2`));
    temp14.get().label.set(new abap.types.String().set(`Country`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().visible.set(new abap.types.String().set(`false`));
    temp14.get().name.set(new abap.types.String().set(`key2`));
    temp14.get().label.set(new abap.types.String().set(`Region`));
    abap.statements.insertInternal({data: temp14, table: temp13});
    this.mt_columns_p13n.set(temp13);
    abap.statements.clear(temp15);
    temp16.get().sorted.set(new abap.types.String().set(`true`));
    temp16.get().name.set(new abap.types.String().set(`key1`));
    temp16.get().label.set(new abap.types.String().set(`City`));
    temp16.get().descending.set(new abap.types.String().set(`true`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().sorted.set(new abap.types.String().set(`false`));
    temp16.get().name.set(new abap.types.String().set(`key2`));
    temp16.get().label.set(new abap.types.String().set(`Country`));
    temp16.get().descending.set(new abap.types.String().set(`false`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().sorted.set(new abap.types.String().set(`false`));
    temp16.get().name.set(new abap.types.String().set(`key2`));
    temp16.get().label.set(new abap.types.String().set(`Region`));
    temp16.get().descending.set(new abap.types.String().set(`false`));
    abap.statements.insertInternal({data: temp16, table: temp15});
    this.mt_sort_p13n.set(temp15);
    abap.statements.clear(temp17);
    temp18.get().grouped.set(new abap.types.String().set(`true`));
    temp18.get().name.set(new abap.types.String().set(`key1`));
    temp18.get().label.set(new abap.types.String().set(`City`));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().grouped.set(new abap.types.String().set(`false`));
    temp18.get().name.set(new abap.types.String().set(`key2`));
    temp18.get().label.set(new abap.types.String().set(`Country`));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().grouped.set(new abap.types.String().set(`false`));
    temp18.get().name.set(new abap.types.String().set(`key2`));
    temp18.get().label.set(new abap.types.String().set(`Region`));
    abap.statements.insertInternal({data: temp18, table: temp17});
    this.mt_groups_p13n.set(temp17);
  }
  async get_custom_js() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`sap.z2ui5.setInitialData = () => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oView = sap.z2ui5.oView`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oSelectionPanel = oView.byId("columnsPanel");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oSortPanel = oView.byId("sortPanel");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oGroupPanel = oView.byId("groupPanel");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    oSelectionPanel.setP13nData(oView.getModel().oData.EDIT.MT_COLUMNS_P13N);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    oSortPanel.setP13nData(oView.getModel().oData.EDIT.MT_SORT_P13N);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    oGroupPanel.setP13nData(oView.getModel().oData.EDIT.MT_GROUPS_P13N);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oPopup = oView.byId("p13nPopup");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    oPopup.open();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`sap.z2ui5.updateData = (oReason) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  if( oReason === "Ok" ) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oView = sap.z2ui5.oView`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oSelectionPanel = oView.byId("columnsPanel");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oSortPanel = oView.byId("sortPanel");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    var oGroupPanel = oView.byId("groupPanel");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    oView.getModel().oData.EDIT.MT_COLUMNS_P13N = oSelectionPanel.getP13nData();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    oView.getModel().oData.EDIT.MT_SORT_P13N = oSortPanel.getP13nData();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    oView.getModel().oData.EDIT.MT_GROUPS_P13N = oGroupPanel.getP13nData();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  };`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`};`))))))))))))))))))))))))))))))))))))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_090'] = z2ui5_cl_demo_app_090;
z2ui5_cl_demo_app_090.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_090.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_090.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_090.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_090.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_090.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_090.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_090.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_090.t_items2 = new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {});
z2ui5_cl_demo_app_090.tt_items2 = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-COLUMNKEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS2-INDEX"})}, "z2ui5_cl_demo_app_090=>t_items2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items2");
z2ui5_cl_demo_app_090.t_items3 = new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-COLUMNKEY"}), "operation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-OPERATION"}), "showifgrouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-TEXT"})}, "z2ui5_cl_demo_app_090=>t_items3", undefined, {}, {});
z2ui5_cl_demo_app_090.tt_items3 = abap.types.TableFactory.construct(new abap.types.Structure({"columnkey": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-COLUMNKEY"}), "operation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-OPERATION"}), "showifgrouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS3-TEXT"})}, "z2ui5_cl_demo_app_090=>t_items3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items3");
z2ui5_cl_demo_app_090.t_items22 = new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items22", undefined, {}, {});
z2ui5_cl_demo_app_090.tt_items22 = abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS22-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items22", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items22");
z2ui5_cl_demo_app_090.t_items32 = new abap.types.Structure({"sorted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-LABEL"}), "descending": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_090=>t_items32", undefined, {}, {});
z2ui5_cl_demo_app_090.tt_items32 = abap.types.TableFactory.construct(new abap.types.Structure({"sorted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS32-LABEL"}), "descending": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_090=>t_items32", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items32");
z2ui5_cl_demo_app_090.t_items33 = new abap.types.Structure({"grouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items33", undefined, {}, {});
z2ui5_cl_demo_app_090.tt_items33 = abap.types.TableFactory.construct(new abap.types.Structure({"grouped": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-NAME"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_090=>T_ITEMS33-LABEL"})}, "z2ui5_cl_demo_app_090=>t_items33", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_090=>tt_items33");
export {z2ui5_cl_demo_app_090};
//# sourceMappingURL=z2ui5_cl_demo_app_090.clas.mjs.map