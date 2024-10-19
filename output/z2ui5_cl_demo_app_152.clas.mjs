const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_152.clas.abap
class z2ui5_cl_demo_app_152 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_152';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"zzselkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-DESCR"})}, "z2ui5_cl_demo_app_152=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_152=>temp1_eeb45a0adc");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_MULTISELECT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PRESELECT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_DISPLAY": {"visibility": "U", "parameters": {}},
  "UI5_EVENT": {"visibility": "U", "parameters": {}},
  "UI5_CALLBACK": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"zzselkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-DESCR"})}, "z2ui5_cl_demo_app_152=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_152=>temp1_eeb45a0adc");
    this.mv_check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_multiselect = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_preselect = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async ui5_event() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"zzselkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-DESCR"})}, "z2ui5_cl_demo_app_152=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_152=>temp1_eeb45a0adc");
    let temp2 = new abap.types.Structure({"zzselkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-DESCR"})}, "z2ui5_cl_demo_app_152=>ty_row", undefined, {}, {});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_TO_SELECT", RTTIName: "\\CLASS=Z2UI5_CL_POP_TO_SELECT"});
    let temp4 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let unique407 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique407, new abap.types.Character(5).set('POPUP'))) {
      abap.statements.clear(temp1);
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().zzselkz.set(this.mv_preselect);
      temp2.get().title.set(new abap.types.Character(8).set('title_01'));
      temp2.get().value.set(new abap.types.Character(8).set('value_01'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().zzselkz.set(this.mv_preselect);
      temp2.get().title.set(new abap.types.Character(8).set('title_02'));
      temp2.get().value.set(new abap.types.Character(8).set('value_02'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().zzselkz.set(this.mv_preselect);
      temp2.get().title.set(new abap.types.Character(8).set('title_03'));
      temp2.get().value.set(new abap.types.Character(8).set('value_03'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().zzselkz.set(this.mv_preselect);
      temp2.get().title.set(new abap.types.Character(8).set('title_04'));
      temp2.get().value.set(new abap.types.Character(8).set('value_04'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().zzselkz.set(this.mv_preselect);
      temp2.get().title.set(new abap.types.Character(8).set('title_05'));
      temp2.get().value.set(new abap.types.Character(8).set('value_05'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.mt_tab.set(temp1);
      if (abap.compare.eq(this.mv_multiselect, abap.builtin.abap_true)) {
        temp3.set(new abap.types.String().set(`Multi select`));
      } else {
        temp3.set(new abap.types.String().set(`Single select`));
      }
      lo_app.set((await abap.Classes['Z2UI5_CL_POP_TO_SELECT'].factory({i_tab: this.mt_tab, i_multiselect: this.mv_multiselect, i_title: temp3})));
      await this.client.get().z2ui5_if_client$nav_app_call({app: lo_app});
    } else if (abap.compare.eq(unique407, new abap.types.Character(18).set('MULTISELECT_TOGGLE'))) {
      if (abap.compare.eq(this.mv_multiselect, abap.builtin.abap_false)) {
        temp4.set(abap.builtin.abap_false);
      } else {
        temp4.set(this.mv_preselect);
      }
      this.mv_preselect.set(temp4);
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique407, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async ui5_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(26).set('abap2UI5 - Popup To Select'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().hbox()).get().text({text: new abap.types.Character(13).set('Multiselect: '), class: new abap.types.Character(15).set('sapUiTinyMargin')})).get().switch({state: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_multiselect})), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`MULTISELECT_TOGGLE`)}))})).get().get_parent()).get().hbox()).get().text({text: new abap.types.Character(23).set('Preselect all entries: '), class: new abap.types.Character(15).set('sapUiTinyMargin')})).get().switch({state: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_preselect})), enabled: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_multiselect}))})).get().get_parent()).get().button({text: new abap.types.Character(13).set('Open Popup...'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('POPUP')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      if (abap.compare.eq(this.mv_check_initialized, abap.builtin.abap_false)) {
        this.mv_check_initialized.set(abap.builtin.abap_true);
        await this.ui5_display();
      } else {
        await this.ui5_callback();
      }
      return;
    }
    await this.ui5_event();
  }
  async ui5_callback() {
    let lo_prev = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let temp5 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_TO_SELECT", RTTIName: "\\CLASS=Z2UI5_CL_POP_TO_SELECT"});
    let ls_result = new abap.types.Structure({"row": new abap.types.DataReference(new abap.types.Character(4)), "table": new abap.types.DataReference(new abap.types.Character(4)), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_pop_to_select=>ty_s_result", undefined, {}, {});
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Structure({"zzselkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-DESCR"})}, "z2ui5_cl_demo_app_152=>ty_row", undefined, {}, {}));
    let fs_table_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    try {
      lo_prev.set((await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
      await abap.statements.cast(temp5, lo_prev);
      ls_result.set((await temp5.get().result()));
      if (abap.compare.eq(ls_result.get().check_confirmed, abap.builtin.abap_false)) {
        await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`Popup was cancelled`)});
        return;
      }
      if (abap.compare.eq(this.mv_multiselect, abap.builtin.abap_false)) {
        abap.statements.assign({target: fs_row_, source: ls_result.get().row.dereference()});
        await this.client.get().z2ui5_if_client$message_box_display({text: abap.operators.concat(new abap.types.String().set(`callback after popup to select: `),fs_row_.get().title)});
      } else {
        abap.statements.assign({target: fs_table_, source: ls_result.get().table.dereference()});
        await this.client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POP_TABLE'].factory({i_tab: fs_table_, i_title: new abap.types.Character(13).set('Selected rows')}))});
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_152'] = z2ui5_cl_demo_app_152;
z2ui5_cl_demo_app_152.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_152.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_152.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_152.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_152.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_152.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_152.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_152.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_152.ty_row = new abap.types.Structure({"zzselkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-DESCR"})}, "z2ui5_cl_demo_app_152=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_152.temp1_eeb45a0adc = abap.types.TableFactory.construct(new abap.types.Structure({"zzselkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_152=>TY_ROW-DESCR"})}, "z2ui5_cl_demo_app_152=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_152=>temp1_eeb45a0adc");
export {z2ui5_cl_demo_app_152};
//# sourceMappingURL=z2ui5_cl_demo_app_152.clas.mjs.map