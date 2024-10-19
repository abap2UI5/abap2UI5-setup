const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_020.clas.abap
class z2ui5_cl_demo_app_020 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_020';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CANCEL_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CANCEL_EVENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CONFIRM_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CONFIRM_EVENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_EVENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_020", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_020"});}, "is_optional": " "}, "I_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_CANCEL_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_CANCEL_EVENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_CONFIRM_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_CONFIRM_EVENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_text = new abap.types.String({qualifiedName: "STRING"});
    this.mv_cancel_text = new abap.types.String({qualifiedName: "STRING"});
    this.mv_cancel_event = new abap.types.String({qualifiedName: "STRING"});
    this.mv_confirm_text = new abap.types.String({qualifiedName: "STRING"});
    this.mv_confirm_event = new abap.types.String({qualifiedName: "STRING"});
    this.mv_event = new abap.types.String({qualifiedName: "STRING"});
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
    return z2ui5_cl_demo_app_020.factory(INPUT);
  }
  static async factory(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_020", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_020"});
    let i_text = INPUT?.i_text;
    if (i_text?.getQualifiedName === undefined || i_text.getQualifiedName() !== "STRING") { i_text = undefined; }
    if (i_text === undefined) { i_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_text); }
    let i_cancel_text = INPUT?.i_cancel_text;
    if (i_cancel_text?.getQualifiedName === undefined || i_cancel_text.getQualifiedName() !== "STRING") { i_cancel_text = undefined; }
    if (i_cancel_text === undefined) { i_cancel_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_cancel_text); }
    let i_cancel_event = INPUT?.i_cancel_event;
    if (i_cancel_event?.getQualifiedName === undefined || i_cancel_event.getQualifiedName() !== "STRING") { i_cancel_event = undefined; }
    if (i_cancel_event === undefined) { i_cancel_event = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_cancel_event); }
    let i_confirm_text = INPUT?.i_confirm_text;
    if (i_confirm_text?.getQualifiedName === undefined || i_confirm_text.getQualifiedName() !== "STRING") { i_confirm_text = undefined; }
    if (i_confirm_text === undefined) { i_confirm_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_confirm_text); }
    let i_confirm_event = INPUT?.i_confirm_event;
    if (i_confirm_event?.getQualifiedName === undefined || i_confirm_event.getQualifiedName() !== "STRING") { i_confirm_event = undefined; }
    if (i_confirm_event === undefined) { i_confirm_event = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_confirm_event); }
    result.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_020']()).constructor_());
    result.get().mv_text.set(i_text);
    result.get().mv_cancel_text.set(i_cancel_text);
    result.get().mv_cancel_event.set(i_cancel_event);
    result.get().mv_confirm_text.set(i_confirm_text);
    result.get().mv_confirm_event.set(i_confirm_event);
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
    }
    let unique213 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique213, this.mv_cancel_event) || abap.compare.eq(unique213, this.mv_confirm_event)) {
      this.mv_event.set(((await client.get().z2ui5_if_client$get())).get().event);
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave();
      return;
    }
    await client.get().z2ui5_if_client$popup_display({val: (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: new abap.types.Character(26).set('abap2UI5 - Popup to decide')})).get().vbox()).get().text({text: this.mv_text})).get().get_parent()).get().buttons()).get().button({text: this.mv_cancel_text, press: (await client.get().z2ui5_if_client$_event({val: this.mv_cancel_event}))})).get().button({text: this.mv_confirm_text, press: (await client.get().z2ui5_if_client$_event({val: this.mv_confirm_event})), type: new abap.types.Character(10).set('Emphasized')})).get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_020'] = z2ui5_cl_demo_app_020;
z2ui5_cl_demo_app_020.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_020.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_020.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_020.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_020.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_020.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_020.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_020.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_020};
//# sourceMappingURL=z2ui5_cl_demo_app_020.clas.mjs.map