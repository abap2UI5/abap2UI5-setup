const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_popup_js_loader.clas.abap
class z2ui5_cl_popup_js_loader {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POPUP_JS_LOADER';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_IS_OPEN_UI5": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "UI5_GAV": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "JS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "USER_COMMAND": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_OPEN_UI5": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_JS_LOADER", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_JS_LOADER"});}, "is_optional": " "}, "I_JS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FACTORY_CHECK_OPEN_UI5": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_JS_LOADER", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_JS_LOADER"});}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT3": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_is_open_ui5 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.ui5_gav = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.js = new abap.types.String({qualifiedName: "STRING"});
    this.user_command = new abap.types.String({qualifiedName: "STRING"});
    this.check_open_ui5 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
    return z2ui5_cl_popup_js_loader.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_JS_LOADER", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_JS_LOADER"});
    let i_js = INPUT?.i_js;
    if (i_js?.getQualifiedName === undefined || i_js.getQualifiedName() !== "STRING") { i_js = undefined; }
    if (i_js === undefined) { i_js = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_js); }
    let i_result = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_result) {i_result.set(INPUT.i_result);}
    if (INPUT === undefined || INPUT.i_result === undefined) {i_result = new abap.types.String().set(`LOADED`);}
    r_result.set(await (new abap.Classes['Z2UI5_CL_POPUP_JS_LOADER']()).constructor_());
    r_result.get().js.set(i_js);
    r_result.get().user_command.set(i_result);
    return r_result;
  }
  async factory_check_open_ui5() {
    return z2ui5_cl_popup_js_loader.factory_check_open_ui5();
  }
  static async factory_check_open_ui5() {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_JS_LOADER", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_JS_LOADER"});
    r_result.set(await (new abap.Classes['Z2UI5_CL_POPUP_JS_LOADER']()).constructor_());
    r_result.get().check_open_ui5.set(abap.builtin.abap_true);
    return r_result;
  }
  async result() {
    let result3 = new abap.types.String({qualifiedName: "STRING"});
    result3.set(this.user_command);
    return result3;
  }
  async view_display() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: new abap.types.String().set(`Setup UI...`)})).get().content()));
    if (abap.compare.initial(this.js) === false) {
      await (await (await (await popup.get()._z2ui5()).get().timer({finished: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('TIMER_FINISHED')}))})).get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`script`)})).get()._cc_plain_xml({val: this.js});
    }
    if (abap.compare.eq(this.check_open_ui5, abap.builtin.abap_true)) {
      await (await popup.get()._z2ui5()).get().info_frontend({finished: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`INFO_FINISHED`)})), ui5_gav: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ui5_gav}))});
    }
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
    let unique168 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique168, new abap.types.String().set(`INFO_FINISHED`))) {
      if (abap.compare.cs(abap.builtin.to_upper({val: this.ui5_gav}), new abap.types.String().set(`OPEN`))) {
        this.mv_is_open_ui5.set(abap.builtin.abap_true);
      }
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique168, new abap.types.String().set(`TIMER_FINISHED`))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else {
    }
  }
}
abap.Classes['Z2UI5_CL_POPUP_JS_LOADER'] = z2ui5_cl_popup_js_loader;
z2ui5_cl_popup_js_loader.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_js_loader.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_popup_js_loader.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_js_loader.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_popup_js_loader.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_js_loader.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_popup_js_loader};
//# sourceMappingURL=z2ui5_cl_popup_js_loader.clas.mjs.map