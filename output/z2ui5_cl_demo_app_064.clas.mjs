const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_064.clas.abap
class z2ui5_cl_demo_app_064 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_064';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_MAPPING": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEARCH_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-ROW_ID"}), "carrid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CARRID"}), "connid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CONNID"}), "fldate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-FLDATE"}), "planetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-PLANETYPE"})}, "z2ui5_cl_demo_app_064=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_064=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LV_SELKZ": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SCREEN": {"type": () => {return new abap.types.Structure({"progress_value": new abap.types.String({qualifiedName: "STRING"}), "display_value": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PERCENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ENABLED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_SELKZ": {"visibility": "I", "parameters": {"IV_SELKZ": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_mapping = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    this.mv_search_value = new abap.types.String({qualifiedName: "STRING"});
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-ROW_ID"}), "carrid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CARRID"}), "connid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CONNID"}), "fldate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-FLDATE"}), "planetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-PLANETYPE"})}, "z2ui5_cl_demo_app_064=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_064=>ty_t_table");
    this.lv_selkz = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.screen = new abap.types.Structure({"progress_value": new abap.types.String({qualifiedName: "STRING"}), "display_value": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.screen.get().progress_value.set('0');
    this.screen.get().display_value.set('');
    this.mv_percent = new abap.types.Integer({qualifiedName: "I"});
    this.mv_check_enabled = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async set_selkz(INPUT) {
    let iv_selkz = INPUT?.iv_selkz;
    if (iv_selkz?.getQualifiedName === undefined || iv_selkz.getQualifiedName() !== "ABAP_BOOL") { iv_selkz = undefined; }
    if (iv_selkz === undefined) { iv_selkz = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_selkz); }
    let fs_ls_table_ = new abap.types.FieldSymbol(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-ROW_ID"}), "carrid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CARRID"}), "connid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CONNID"}), "fldate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-FLDATE"}), "planetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-PLANETYPE"})}, "z2ui5_cl_demo_app_064=>ty_s_tab", undefined, {}, {}));
    for await (const unique276 of abap.statements.loop(this.mt_table)) {
      fs_ls_table_.assign(unique276);
      fs_ls_table_.get().selkz.set(iv_selkz);
    }
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
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let ls_arg = new abap.types.String({qualifiedName: "STRING"});
    let unique277 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique277, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique277, new abap.types.String().set(`LOAD`))) {
      this.mv_percent.set(abap.operators.add(this.mv_percent,abap.IntegerFactory.get(25)));
      this.mv_check_active.set(abap.builtin.abap_true);
      this.mv_check_enabled.set(abap.builtin.abap_false);
      if (abap.compare.gt(this.mv_percent, abap.IntegerFactory.get(100))) {
        this.mv_percent.set(abap.IntegerFactory.get(0));
        this.mv_check_active.set(abap.builtin.abap_false);
        this.mv_check_enabled.set(abap.builtin.abap_true);
      }
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`loaded`)});
      await new Promise(r => setTimeout(r, abap.IntegerFactory.get(2).get() * 1000));
      await this.client.get().z2ui5_if_client$view_model_update();
    }
  }
  async z2ui5_on_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    abap.statements.clear(temp1);
    this.mv_check_enabled.set(abap.builtin.abap_true);
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await view.get()._z2ui5()).get().timer({finished: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('LOAD')})), checkactive: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_check_active}))});
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    temp5.set(temp2);
    page1.set((await (await view.get().shell()).get().page({id: new abap.types.Character(9).set('page_main'), title: new abap.types.Character(44).set('abap2UI5 - Progress Bar while Server Request'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp5, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    layout.set((await page1.get().vertical_layout({class: new abap.types.Character(19).set('sapuicontentpadding'), width: new abap.types.Character(4).set('100%')})));
    await (await layout.get().vbox()).get().progress_indicator({percentvalue: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_percent})), displayvalue: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().display_value})), showvalue: abap.builtin.abap_true, state: new abap.types.Character(7).set('Success')});
    await layout.get().button({text: new abap.types.String().set(`Load`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('LOAD')})), enabled: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_check_enabled}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_064'] = z2ui5_cl_demo_app_064;
z2ui5_cl_demo_app_064.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_064.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_064.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_064.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_064.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_064.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_064.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_064.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_064.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-ROW_ID"}), "carrid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CARRID"}), "connid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CONNID"}), "fldate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-FLDATE"}), "planetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-PLANETYPE"})}, "z2ui5_cl_demo_app_064=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_064.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-ROW_ID"}), "carrid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CARRID"}), "connid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-CONNID"}), "fldate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-FLDATE"}), "planetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_TAB-PLANETYPE"})}, "z2ui5_cl_demo_app_064=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_064=>ty_t_table");
z2ui5_cl_demo_app_064.ty_s_filter_pop = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_064=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_064=>ty_s_filter_pop", undefined, {}, {});
export {z2ui5_cl_demo_app_064};
//# sourceMappingURL=z2ui5_cl_demo_app_064.clas.mjs.map