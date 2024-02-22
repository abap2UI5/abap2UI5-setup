const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_popup_file_upload.clas.abap
class z2ui5_cl_popup_file_upload {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POPUP_FILE_UPLOAD';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_RESULT": {"type": () => {return new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_FILE_UPLOAD=>TY_S_RESULT-VALUE"}), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_file_upload=>ty_s_result", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_CONFIRM_ENABLED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "ICON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "QUESTION_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "BUTTON_TEXT_CONFIRM": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "BUTTON_TEXT_CANCEL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_FILE_UPLOAD", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_FILE_UPLOAD"});}, "is_optional": " "}, "I_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_BUTTON_TEXT_CONFIRM": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_BUTTON_TEXT_CANCEL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_FILE_UPLOAD=>TY_S_RESULT-VALUE"}), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_file_upload=>ty_s_result", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_result = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_FILE_UPLOAD=>TY_S_RESULT-VALUE"}), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_file_upload=>ty_s_result", undefined, {}, {});
    this.mv_path = new abap.types.String({qualifiedName: "STRING"});
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.check_confirm_enabled = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.title = new abap.types.String({qualifiedName: "STRING"});
    this.icon = new abap.types.String({qualifiedName: "STRING"});
    this.question_text = new abap.types.String({qualifiedName: "STRING"});
    this.button_text_confirm = new abap.types.String({qualifiedName: "STRING"});
    this.button_text_cancel = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
    return z2ui5_cl_popup_file_upload.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_FILE_UPLOAD", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_FILE_UPLOAD"});
    let i_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_text) {i_text.set(INPUT.i_text);}
    if (INPUT === undefined || INPUT.i_text === undefined) {i_text = new abap.types.String().set(`Choose the file to upload:`);}
    let i_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_title) {i_title.set(INPUT.i_title);}
    if (INPUT === undefined || INPUT.i_title === undefined) {i_title = new abap.types.String().set(`File Upload`);}
    let i_button_text_confirm = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_button_text_confirm) {i_button_text_confirm.set(INPUT.i_button_text_confirm);}
    if (INPUT === undefined || INPUT.i_button_text_confirm === undefined) {i_button_text_confirm = new abap.types.String().set(`OK`);}
    let i_button_text_cancel = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_button_text_cancel) {i_button_text_cancel.set(INPUT.i_button_text_cancel);}
    if (INPUT === undefined || INPUT.i_button_text_cancel === undefined) {i_button_text_cancel = new abap.types.String().set(`Cancel`);}
    let i_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_path) {i_path.set(INPUT.i_path);}
    r_result.set(await (new abap.Classes['Z2UI5_CL_POPUP_FILE_UPLOAD']()).constructor_());
    r_result.get().title.set(i_title);
    r_result.get().question_text.set(i_text);
    r_result.get().button_text_confirm.set(i_button_text_confirm);
    r_result.get().button_text_cancel.set(i_button_text_cancel);
    r_result.get().mv_path.set(i_path);
    return r_result;
  }
  async result() {
    let result = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_FILE_UPLOAD=>TY_S_RESULT-VALUE"}), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_file_upload=>ty_s_result", undefined, {}, {});
    result.set(this.ms_result);
    return result;
  }
  async view_display() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: this.title, icon: this.icon, afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')}))})).get().content()).get().vbox({class_: new abap.types.Character(17).set('sapUiMediumMargin')})).get().label({text: this.question_text})).get()._z2ui5()).get().file_uploader({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_value})), path: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_path})), placeholder: new abap.types.Character(16).set('filepath here...'), upload: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('UPLOAD')}))})).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: this.button_text_cancel, press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')}))})).get().button({text: this.button_text_confirm, press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), enabled: (await this.client.get().z2ui5_if_client$_bind({val: this.check_confirm_enabled})), type: new abap.types.Character(10).set('Emphasized')})));
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let lv_dummy = new abap.types.String({qualifiedName: "STRING"});
    let lv_data = new abap.types.String({qualifiedName: "STRING"});
    let lv_data2 = new abap.types.XString({qualifiedName: "XSTRING"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.view_display();
      return;
    }
    let unique159 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique159, new abap.types.String().set(`UPLOAD`))) {
      abap.statements.split({source: this.mv_value, at: new abap.types.String().set(`;`), targets: [lv_dummy,lv_data]});
      abap.statements.split({source: lv_data, at: new abap.types.String().set(`,`), targets: [lv_dummy,lv_data]});
      lv_data2.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_decode_x_base64({val: lv_data})));
      this.ms_result.get().value.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_get_string_by_xstring({val: lv_data2})));
      this.check_confirm_enabled.set(abap.builtin.abap_true);
      abap.statements.clear(this.mv_value);
      abap.statements.clear(this.mv_path);
      await client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique159, new abap.types.String().set(`BUTTON_CONFIRM`))) {
      this.ms_result.get().check_confirmed.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique159, new abap.types.String().set(`BUTTON_CANCEL`))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
  }
}
abap.Classes['Z2UI5_CL_POPUP_FILE_UPLOAD'] = z2ui5_cl_popup_file_upload;
z2ui5_cl_popup_file_upload.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_file_upload.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_popup_file_upload.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_file_upload.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_popup_file_upload.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_file_upload.z2ui5_if_app$license.set('MIT');
z2ui5_cl_popup_file_upload.ty_s_result = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_FILE_UPLOAD=>TY_S_RESULT-VALUE"}), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_file_upload=>ty_s_result", undefined, {}, {});
export {z2ui5_cl_popup_file_upload};
//# sourceMappingURL=z2ui5_cl_popup_file_upload.clas.mjs.map