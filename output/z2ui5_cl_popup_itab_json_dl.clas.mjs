const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_popup_itab_json_dl.clas.abap
class z2ui5_cl_popup_itab_json_dl {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POPUP_ITAB_JSON_DL';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MR_ITAB": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "ICON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "BUTTON_TEXT_CONFIRM": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "BUTTON_TEXT_CANCEL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_RESULT_CONFIRMED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_ITAB_JSON_DL", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_ITAB_JSON_DL"});}, "is_optional": " "}, "ITAB": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "I_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_ICON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_BUTTON_TEXT_CONFIRM": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_BUTTON_TEXT_CANCEL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mr_itab = new abap.types.DataReference(new abap.types.Character(4));
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.title = new abap.types.String({qualifiedName: "STRING"});
    this.icon = new abap.types.String({qualifiedName: "STRING"});
    this.button_text_confirm = new abap.types.String({qualifiedName: "STRING"});
    this.button_text_cancel = new abap.types.String({qualifiedName: "STRING"});
    this.check_result_confirmed = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async factory(INPUT) {
    return z2ui5_cl_popup_itab_json_dl.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_ITAB_JSON_DL", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_ITAB_JSON_DL"});
    let itab = INPUT?.itab;
    let i_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_title) {i_title.set(INPUT.i_title);}
    if (INPUT === undefined || INPUT.i_title === undefined) {i_title = new abap.types.String().set(`Popup To Confirm`);}
    let i_icon = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_icon) {i_icon.set(INPUT.i_icon);}
    if (INPUT === undefined || INPUT.i_icon === undefined) {i_icon = new abap.types.Character(24).set('sap-icon://question-mark');}
    let i_button_text_confirm = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_button_text_confirm) {i_button_text_confirm.set(INPUT.i_button_text_confirm);}
    if (INPUT === undefined || INPUT.i_button_text_confirm === undefined) {i_button_text_confirm = new abap.types.String().set(`OK`);}
    let i_button_text_cancel = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_button_text_cancel) {i_button_text_cancel.set(INPUT.i_button_text_cancel);}
    if (INPUT === undefined || INPUT.i_button_text_cancel === undefined) {i_button_text_cancel = new abap.types.String().set(`Cancel`);}
    r_result.set(await (new abap.Classes['Z2UI5_CL_POPUP_ITAB_JSON_DL']()).constructor_());
    r_result.get().mr_itab.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_copy_ref_data({from: itab})));
    r_result.get().title.set(i_title);
    r_result.get().icon.set(i_icon);
    r_result.get().button_text_confirm.set(i_button_text_confirm);
    r_result.get().button_text_cancel.set(i_button_text_cancel);
    return r_result;
  }
  async result() {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    result.set(this.check_result_confirmed);
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let app = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let lv_link = new abap.types.String({qualifiedName: "STRING"});
    let lv_text = new abap.types.String({qualifiedName: "STRING"});
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_UTIL_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_UTIL_ERROR"});
    let lv_classname = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    this.me.get().client.set(client);
    try {
      if (abap.compare.eq((await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_class_exists({val: new abap.types.String().set(`z2ui5_dbt_cl_app_03`)})), abap.builtin.abap_false)) {
        lv_link.set(new abap.types.String().set(`https://github.com/oblomov-dev/a2UI5-db_table_loader`));
        lv_text.set(abap.operators.concat(new abap.types.String().set(`<p>Please install the open-source project a2UI5-db_table_loader and try again: <a href="`),abap.operators.concat(lv_link,new abap.types.String().set(`" style="color:blue; font-weight:600;" target="_blank">(link)</a></p>`))));
        lx.set(await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: lv_text}));
        await client.get().z2ui5_if_client$nav_app_leave({app: (await abap.Classes['Z2UI5_CL_POPUP_ERROR'].factory({error: lx}))});
      } else {
        lv_classname.set(new abap.types.String().set(`Z2UI5_DBT_CL_APP_03`));
        if (abap.Classes[lv_classname.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
        if (abap.Classes[lv_classname.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
        if (abap.Classes[lv_classname.get().trimEnd()].factory_popup_by_itab === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (abap.Classes[lv_classname.get().trimEnd()].factory_popup_by_itab === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        app.set(await abap.Classes[lv_classname.get().trimEnd()].factory_popup_by_itab({itab: this.mr_itab}));
        await abap.statements.cast(temp1, app);
        await client.get().z2ui5_if_client$nav_app_leave({app: temp1});
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        await client.get().z2ui5_if_client$nav_app_leave({app: (await abap.Classes['Z2UI5_CL_POPUP_TO_INFORM'].factory({i_text: (await x.get().if_message$get_text())}))});
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['Z2UI5_CL_POPUP_ITAB_JSON_DL'] = z2ui5_cl_popup_itab_json_dl;
z2ui5_cl_popup_itab_json_dl.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_itab_json_dl.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_popup_itab_json_dl.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_itab_json_dl.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_popup_itab_json_dl.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_itab_json_dl.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_popup_itab_json_dl};
//# sourceMappingURL=z2ui5_cl_popup_itab_json_dl.clas.mjs.map