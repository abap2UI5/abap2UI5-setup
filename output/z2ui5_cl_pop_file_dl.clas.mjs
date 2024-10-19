const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_pop_file_dl.clas.abap
class z2ui5_cl_pop_file_dl {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POP_FILE_DL';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SIZE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_DOWNLOAD": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_CONFIRMED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "ICON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "QUESTION_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "BUTTON_TEXT_CONFIRM": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "BUTTON_TEXT_CANCEL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_FILE_DL", RTTIName: "\\CLASS=Z2UI5_CL_POP_FILE_DL"});}, "is_optional": " "}, "I_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_BUTTON_TEXT_CONFIRM": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_BUTTON_TEXT_CANCEL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_FILE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_name = new abap.types.String({qualifiedName: "STRING"});
    this.mv_type = new abap.types.String({qualifiedName: "STRING"});
    this.mv_size = new abap.types.String({qualifiedName: "STRING"});
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.mv_check_download = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.check_confirmed = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.title = new abap.types.String({qualifiedName: "STRING"});
    this.icon = new abap.types.String({qualifiedName: "STRING"});
    this.question_text = new abap.types.String({qualifiedName: "STRING"});
    this.button_text_confirm = new abap.types.String({qualifiedName: "STRING"});
    this.button_text_cancel = new abap.types.String({qualifiedName: "STRING"});
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
  async factory(INPUT) {
    return z2ui5_cl_pop_file_dl.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_FILE_DL", RTTIName: "\\CLASS=Z2UI5_CL_POP_FILE_DL"});
    let i_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_text) {i_text.set(INPUT.i_text);}
    if (INPUT === undefined || INPUT.i_text === undefined) {i_text = new abap.types.String().set(`Choose the file to upload:`);}
    let i_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_title) {i_title.set(INPUT.i_title);}
    if (INPUT === undefined || INPUT.i_title === undefined) {i_title = new abap.types.String().set(`File Download`);}
    let i_button_text_confirm = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_button_text_confirm) {i_button_text_confirm.set(INPUT.i_button_text_confirm);}
    if (INPUT === undefined || INPUT.i_button_text_confirm === undefined) {i_button_text_confirm = new abap.types.String().set(`OK`);}
    let i_button_text_cancel = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_button_text_cancel) {i_button_text_cancel.set(INPUT.i_button_text_cancel);}
    if (INPUT === undefined || INPUT.i_button_text_cancel === undefined) {i_button_text_cancel = new abap.types.String().set(`Cancel`);}
    let i_file = INPUT?.i_file;
    if (i_file?.getQualifiedName === undefined || i_file.getQualifiedName() !== "STRING") { i_file = undefined; }
    if (i_file === undefined) { i_file = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_file); }
    let i_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_type) {i_type.set(INPUT.i_type);}
    if (INPUT === undefined || INPUT.i_type === undefined) {i_type = new abap.types.String().set(`data:text/csv;base64,`);}
    r_result.set(await (new abap.Classes['Z2UI5_CL_POP_FILE_DL']()).constructor_());
    r_result.get().title.set(i_title);
    r_result.get().question_text.set(i_text);
    r_result.get().button_text_confirm.set(i_button_text_confirm);
    r_result.get().button_text_cancel.set(i_button_text_cancel);
    r_result.get().mv_type.set(i_type);
    r_result.get().mv_value.set(i_file);
    r_result.get().mv_size.set(abap.operators.divide(abap.builtin.strlen({val: i_file}),new abap.types.Integer().set(1000)));
    return r_result;
  }
  async result() {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    result.set(this.check_confirmed);
    return result;
  }
  async view_display() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lv_csv_x = new abap.types.XString({qualifiedName: "XSTRING"});
    let lv_base64 = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    popup.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: this.title, icon: this.icon, afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')}))})).get().content()));
    if (abap.compare.eq(this.mv_check_download, abap.builtin.abap_true)) {
      lv_csv_x.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_get_xstring_by_string({val: this.mv_value})));
      lv_base64.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_encode_x_base64({val: lv_csv_x})));
      abap.statements.clear(temp1);
      temp2.get().n.set(new abap.types.String().set(`src`));
      temp2.get().v.set(abap.operators.concat(this.mv_type,lv_base64));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().n.set(new abap.types.String().set(`hidden`));
      temp2.get().v.set(new abap.types.String().set(`hidden`));
      abap.statements.insertInternal({data: temp2, table: temp1});
      await popup.get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`iframe`), t_prop: temp1});
      await (await popup.get()._z2ui5()).get().timer({finished: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CALLBACK_DOWNLOAD`)}))});
    }
    await (await (await (await (await (await (await (await (await (await (await (await popup.get().vbox({class: new abap.types.Character(17).set('sapUiMediumMargin')})).get().label({text: new abap.types.String().set(`Name`)})).get().input({value: this.mv_name, enabled: abap.builtin.abap_false})).get().label({text: new abap.types.String().set(`Type`)})).get().input({value: this.mv_type, enabled: abap.builtin.abap_false})).get().label({text: new abap.types.String().set(`Size`)})).get().input({value: this.mv_size, enabled: abap.builtin.abap_false})).get().get_parent()).get().get_parent()).get().buttons()).get().button({text: this.button_text_cancel, press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')}))})).get().button({text: new abap.types.String().set(`Download`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.view_display();
      return;
    }
    let unique149 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique149, new abap.types.String().set(`CALLBACK_DOWNLOAD`))) {
      this.check_confirmed.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique149, new abap.types.String().set(`BUTTON_CONFIRM`))) {
      this.mv_check_download.set(abap.builtin.abap_true);
      await this.view_display();
    } else if (abap.compare.eq(unique149, new abap.types.String().set(`BUTTON_CANCEL`))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
  }
}
abap.Classes['Z2UI5_CL_POP_FILE_DL'] = z2ui5_cl_pop_file_dl;
z2ui5_cl_pop_file_dl.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_file_dl.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_pop_file_dl.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_file_dl.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_pop_file_dl.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_file_dl.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_pop_file_dl.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_file_dl.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_pop_file_dl};
//# sourceMappingURL=z2ui5_cl_pop_file_dl.clas.mjs.map