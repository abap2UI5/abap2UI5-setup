const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_058.clas.abap
class z2ui5_cl_demo_app_058 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_058';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_DB_LAYOUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>temp1_2c3f88f5df");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_LAYOUT": {"type": () => {return new abap.types.Structure({"check_zebra": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "STRING"}), "sticky_header": new abap.types.String({qualifiedName: "STRING"}), "selmode": new abap.types.String({qualifiedName: "STRING"}), "t_cols": abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>temp2_2c3f88f5df")}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_TABLE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_COLUMNS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_058=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_LAYOUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_SORT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "APP": {"type": () => {return new abap.types.Structure({"check_initialized": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view_main": new abap.types.String({qualifiedName: "STRING"}), "view_popup": new abap.types.String({qualifiedName: "STRING"}), "get": new abap.types.Structure({"event": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-EVENT"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "check_launchpad_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_on_navigated": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "viewname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-VIEWNAME"}), "s_draft": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {}), "s_config": new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-HASH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_config", undefined, {}, {}), "t_comp_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_get", undefined, {}, {})}, undefined, undefined, {}, {});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER_MAIN": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER_POPUP": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER_POPUP_SAVE": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_db_layout = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>temp1_2c3f88f5df");
    this.ms_layout = new abap.types.Structure({"check_zebra": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "STRING"}), "sticky_header": new abap.types.String({qualifiedName: "STRING"}), "selmode": new abap.types.String({qualifiedName: "STRING"}), "t_cols": abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>temp2_2c3f88f5df")}, undefined, undefined, {}, {});
    this.mv_check_table = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_columns = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_058=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>ty_t_table");
    this.mv_layout = new abap.types.String({qualifiedName: "STRING"});
    this.mv_check_sort = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.app = new abap.types.Structure({"check_initialized": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view_main": new abap.types.String({qualifiedName: "STRING"}), "view_popup": new abap.types.String({qualifiedName: "STRING"}), "get": new abap.types.Structure({"event": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-EVENT"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "check_launchpad_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_on_navigated": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "viewname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-VIEWNAME"}), "s_draft": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {}), "s_config": new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-HASH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_config", undefined, {}, {}), "t_comp_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_get", undefined, {}, {})}, undefined, undefined, {}, {});
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
    this.app.get().get.set((await client.get().z2ui5_if_client$get()));
    this.app.get().view_popup.set(new abap.types.String().set(``));
    if (abap.compare.eq(this.app.get().check_initialized, abap.builtin.abap_false)) {
      this.app.get().check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
    }
    if (abap.compare.initial(this.app.get().get.get().event) === false) {
      await this.z2ui5_on_event();
    }
    await this.z2ui5_on_render();
    abap.statements.clear(this.app.get().get);
  }
  async z2ui5_on_event() {
    let ls_layout2 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {});
    let temp2 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {});
    let temp3 = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {});
    let ls_layout = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {});
    let unique263 = this.app.get().get.get().event;
    if (abap.compare.eq(unique263, new abap.types.String().set(`BUTTON_START`))) {
      await this.z2ui5_set_data();
    } else if (abap.compare.eq(unique263, new abap.types.String().set(`BUTTON_SETUP`))) {
      this.app.get().view_popup.set(new abap.types.String().set(`POPUP`));
    } else if (abap.compare.eq(unique263, new abap.types.String().set(`BUTTON_SAVE`))) {
      this.app.get().view_popup.set(new abap.types.String().set(`POPUP_SAVE`));
    } else if (abap.compare.eq(unique263, new abap.types.String().set(`POPUP_LAYOUT_LOAD`))) {
      temp3.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.mt_db_layout,{into: temp2,
        withKey: (i) => {return abap.compare.eq(i.selkz, abap.builtin.abap_true);},
        withKeyValue: [{key: (i) => {return i.selkz}, value: abap.builtin.abap_true}],
        usesTableLine: false,
        withKeySimple: {"selkz": abap.builtin.abap_true}});
      abap.builtin.sy.get().tabix.set(temp3);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      ls_layout2.set(temp2);
      await abap.Classes['Z2UI5_CL_UTIL'].xml_parse({xml: ls_layout2.get().data, any: this.ms_layout});
      this.app.get().view_popup.set(new abap.types.String().set(`POPUP_SAVE`));
    } else if (abap.compare.eq(unique263, new abap.types.String().set(`BUTTON_SAVE_LAYOUT`))) {
      abap.statements.clear(temp1);
      temp1.get().data.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_stringify({any: this.ms_layout})));
      temp1.get().name.set(this.mv_layout);
      ls_layout.set(temp1);
      abap.statements.insertInternal({data: ls_layout, table: this.mt_db_layout});
      this.app.get().view_popup.set(new abap.types.String().set(`POPUP_SAVE`));
    } else if (abap.compare.eq(unique263, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave({app: (await this.client.get().z2ui5_if_client$get_app({id: this.app.get().get.get().s_draft.get().id_prev_app_stack}))});
    }
  }
  async z2ui5_on_init() {
    let temp2 = abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>temp2_2c3f88f5df");
    let temp3 = new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {});
    await this.z2ui5_set_data();
    this.app.get().view_main.set(new abap.types.String().set(`MAIN`));
    this.ms_layout.get().title.set(new abap.types.String().set(`data`));
    abap.statements.clear(temp2);
    temp3.get().name.set(new abap.types.String().set(`PRODUCT`));
    temp3.get().title.set(new abap.types.String().set(`PRODUCT`));
    temp3.get().visible.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp3, table: temp2});
    temp3.get().name.set(new abap.types.String().set(`CREATE_DAT`));
    temp3.get().title.set(new abap.types.String().set(`CREATE_DAT`));
    temp3.get().visible.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp3, table: temp2});
    temp3.get().name.set(new abap.types.String().set(`CREATE_BY`));
    temp3.get().title.set(new abap.types.String().set(`CREATE_BY`));
    temp3.get().visible.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp3, table: temp2});
    temp3.get().name.set(new abap.types.String().set(`STORAGE_LOCATION`));
    temp3.get().title.set(new abap.types.String().set(`STORAGE_LOCATION`));
    temp3.get().visible.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp3, table: temp2});
    temp3.get().name.set(new abap.types.String().set(`QUANTITY`));
    temp3.get().title.set(new abap.types.String().set(`QUANTITY`));
    temp3.get().visible.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp3, table: temp2});
    this.ms_layout.get().t_cols.set(temp2);
  }
  async z2ui5_on_render() {
    let unique264 = this.app.get().view_popup;
    if (abap.compare.eq(unique264, new abap.types.String().set(`POPUP`))) {
      await this.z2ui5_on_render_popup();
    } else if (abap.compare.eq(unique264, new abap.types.String().set(`POPUP_SAVE`))) {
      await this.z2ui5_on_render_popup_save();
    }
    let unique265 = this.app.get().view_main;
    if (abap.compare.eq(unique265, new abap.types.Character(4).set('MAIN'))) {
      await this.z2ui5_on_render_main();
    }
  }
  async z2ui5_on_render_main() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let lv_width = new abap.types.Integer({qualifiedName: "I"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {});
    let lr_field = new abap.types.DataReference(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {}));
    let temp6 = new abap.types.String({qualifiedName: "STRING"});
    let temp8 = new abap.types.Character(10, {"qualifiedName":"CHAR10","ddicName":"CHAR10"});
    let temp7 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lo_cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    view.set((await (await view.get().shell()).get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(30).set('abap2UI5 - Table Layout Sample'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    tab.set((await view.get().table({headertext: this.ms_layout.get().title, items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table})), alternaterowcolors: this.ms_layout.get().check_zebra, sticky: this.ms_layout.get().sticky_header, mode: this.ms_layout.get().selmode})));
    temp4.set(abap.builtin.lines({val: this.mt_table}));
    await (await (await (await (await (await tab.get().header_toolbar()).get().toolbar()).get().title({text: abap.operators.concat(this.ms_layout.get().title,abap.operators.concat(new abap.types.String().set(` (`),abap.operators.concat(abap.builtin.shift_right({val: temp4}),new abap.types.String().set(`)`))))})).get().toolbar_spacer()).get().button({icon: new abap.types.Character(15).set('sap-icon://save'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SAVE')}))})).get().button({icon: new abap.types.Character(26).set('sap-icon://action-settings'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('BUTTON_SETUP')}))});
    lv_width.set(abap.IntegerFactory.get(10));
    lo_columns.set((await tab.get().columns()));
    for await (const unique266 of abap.statements.loop(this.ms_layout.get().t_cols,{where: async (I) => {return abap.compare.eq(I.visible, abap.builtin.abap_true);},topEquals: {"visible": abap.builtin.abap_true}})) {
      lr_field.assign(unique266);
      temp6.set(lv_width);
      temp8.set(lr_field.get().title);
      await (await lo_columns.get().column({minscreenwidth: abap.operators.concat(abap.builtin.shift_right({val: temp6}),new abap.types.String().set(`px`)), demandpopin: abap.builtin.abap_true, width: lr_field.get().length})).get().text({text: temp8});
      lv_width.set(abap.operators.add(lv_width,abap.IntegerFactory.get(10)));
    }
    abap.statements.clear(temp7);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${UUID}`), table: temp7});
    lo_cells.set((await (await (await tab.get().items()).get().column_list_item({press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('DETAIL'), t_arg: temp7})), selected: new abap.types.String().set(`{SELKZ}`)})).get().cells()));
    for await (const unique267 of abap.statements.loop(this.ms_layout.get().t_cols,{where: async (I) => {return abap.compare.eq(I.visible, abap.builtin.abap_true);},topEquals: {"visible": abap.builtin.abap_true}})) {
      lr_field.assign(unique267);
      if (abap.compare.eq(lr_field.get().editable, abap.builtin.abap_true)) {
        await lo_cells.get().input({value: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(lr_field.get().name,new abap.types.String().set(`}`)))});
      } else {
        await lo_cells.get().text({text: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(lr_field.get().name,new abap.types.String().set(`}`)))});
      }
    }
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_on_render_popup() {
    let ro_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_058=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>ty_t_combo");
    let temp10 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_058=>s_combobox", undefined, {}, {});
    ro_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    ro_popup.set((await ro_popup.get().dialog({title: new abap.types.Character(10).set('View Setup'), resizable: abap.builtin.abap_true, contentheight: new abap.types.String().set(`50%`), contentwidth: new abap.types.String().set(`50%`)})));
    await (await (await (await ro_popup.get().custom_header()).get().bar()).get().content_right()).get().button({text: new abap.types.String().set(`zurücksetzten`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_INIT')}))});
    lo_tab.set((await ro_popup.get().tab_container()));
    abap.statements.clear(temp9);
    temp10.get().key.set(new abap.types.Character(4).set('None'));
    temp10.get().text.set(new abap.types.Character(4).set('None'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().key.set(new abap.types.Character(12).set('SingleSelect'));
    temp10.get().text.set(new abap.types.Character(12).set('SingleSelect'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().key.set(new abap.types.Character(16).set('SingleSelectLeft'));
    temp10.get().text.set(new abap.types.Character(16).set('SingleSelectLeft'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().key.set(new abap.types.Character(11).set('MultiSelect'));
    temp10.get().text.set(new abap.types.Character(11).set('MultiSelect'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    await (await (await (await (await (await (await (await (await (await (await (await lo_tab.get().tab({text: new abap.types.Character(5).set('Table'), selected: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_check_table}))})).get().simple_form({editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(10).set('zebra mode')})).get().checkbox({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_layout.get().check_zebra}))})).get().label({text: new abap.types.Character(13).set('sticky header')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_layout.get().sticky_header}))})).get().label({text: new abap.types.String().set(`Title`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_layout.get().title}))})).get().label({text: new abap.types.Character(8).set('sel mode')})).get().combobox({selectedkey: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_layout.get().selmode})), items: (await this.client.get().z2ui5_if_client$_bind_local({val: temp9}))})).get().item({key: new abap.types.Character(5).set('{KEY}'), text: new abap.types.Character(6).set('{TEXT}')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await lo_tab.get().tab({text: new abap.types.Character(7).set('Columns'), selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_check_columns}))})).get().table({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_layout.get().t_cols}))})).get().columns()).get().column()).get().text({text: new abap.types.Character(7).set('Visible')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Name')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(8).set('Editable')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(6).set('Length')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item()).get().cells()).get().checkbox({selected: new abap.types.Character(9).set('{VISIBLE}')})).get().text({text: new abap.types.Character(6).set('{NAME}')})).get().input({value: new abap.types.Character(7).set('{TITLE}')})).get().checkbox({selected: new abap.types.Character(10).set('{EDITABLE}')})).get().input({value: new abap.types.Character(8).set('{LENGTH}')})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent();
    await lo_tab.get().tab({text: new abap.types.Character(4).set('Sort'), selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_check_sort}))});
    await (await ro_popup.get().end_button()).get().button({text: new abap.types.Character(8).set('continue'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('POPUP_FILTER_CONTINUE')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await (await ro_popup.get().get_root()).get().xml_get())});
  }
  async z2ui5_on_render_popup_save() {
    let lo_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    lo_popup.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await lo_popup.get().dialog({title: new abap.types.Character(17).set('abap2UI5 - Layout'), contentwidth: new abap.types.String().set(`50%`)})).get().input({description: new abap.types.String().set(`Name`), value: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_layout}))})).get().button({text: new abap.types.String().set(`Save`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`BUTTON_SAVE_LAYOUT`)}))})).get().table({mode: new abap.types.Character(16).set('SingleSelectLeft'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_db_layout}))})).get().columns()).get().column()).get().text({text: new abap.types.Character(4).set('Name')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('User')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(7).set('Default')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().text({text: new abap.types.Character(6).set('{NAME}')})).get().text({text: new abap.types.Character(6).set('{USER}')})).get().text({text: new abap.types.Character(9).set('{DEFAULT}')})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(4).set('load'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('POPUP_LAYOUT_LOAD')})), type: new abap.types.Character(10).set('Emphasized')})).get().button({text: new abap.types.Character(5).set('close'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('POPUP_LAYOUT_CONTINUE')})), type: new abap.types.Character(10).set('Emphasized')})));
    await this.client.get().z2ui5_if_client$popup_display({val: (await (await lo_popup.get().get_root()).get().xml_get())});
  }
  async z2ui5_set_data() {
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_058=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>ty_t_table");
    let temp12 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_058=>ty_s_tab", undefined, {}, {});
    abap.statements.clear(temp11);
    temp12.get().product.set(new abap.types.Character(5).set('table'));
    temp12.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp12.get().create_by.set(new abap.types.String().set(`Peter`));
    temp12.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp12.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().product.set(new abap.types.Character(5).set('chair'));
    temp12.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp12.get().create_by.set(new abap.types.String().set(`Peter`));
    temp12.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp12.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().product.set(new abap.types.Character(4).set('sofa'));
    temp12.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp12.get().create_by.set(new abap.types.String().set(`Peter`));
    temp12.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp12.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().product.set(new abap.types.Character(8).set('computer'));
    temp12.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp12.get().create_by.set(new abap.types.String().set(`Peter`));
    temp12.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp12.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().product.set(new abap.types.Character(4).set('oven'));
    temp12.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp12.get().create_by.set(new abap.types.String().set(`Peter`));
    temp12.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp12.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().product.set(new abap.types.Character(6).set('table2'));
    temp12.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp12.get().create_by.set(new abap.types.String().set(`Peter`));
    temp12.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp12.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp12, table: temp11});
    this.mt_table.set(temp11);
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_058'] = z2ui5_cl_demo_app_058;
z2ui5_cl_demo_app_058.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_058.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_058.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_058.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_058.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_058.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_058.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_058.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_058.s_combobox = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_058=>s_combobox", undefined, {}, {});
z2ui5_cl_demo_app_058.ty_t_combo = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_058=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>ty_t_combo");
z2ui5_cl_demo_app_058.ty_s_cols = new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {});
z2ui5_cl_demo_app_058.ty_s_db_layout = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {});
z2ui5_cl_demo_app_058.temp1_2c3f88f5df = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-NAME"}), "user": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-USER"}), "default": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "data": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_DB_LAYOUT-DATA"})}, "z2ui5_cl_demo_app_058=>ty_s_db_layout", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>temp1_2c3f88f5df");
z2ui5_cl_demo_app_058.temp2_2c3f88f5df = abap.types.TableFactory.construct(new abap.types.Structure({"visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-NAME"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-LENGTH"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_COLS-TITLE"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_058=>ty_s_cols", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>temp2_2c3f88f5df");
z2ui5_cl_demo_app_058.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_058=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_058.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_058=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_058=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_058=>ty_t_table");
export {z2ui5_cl_demo_app_058};
//# sourceMappingURL=z2ui5_cl_demo_app_058.clas.mjs.map