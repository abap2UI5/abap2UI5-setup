const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_279.clas.abap
class z2ui5_cl_demo_app_279 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_279';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"TEXT_INPUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DIRTY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "I", "parameters": {}},
  "ON_EVENT": {"visibility": "I", "parameters": {}},
  "SECURITY_CHECK_POPUP": {"visibility": "I", "parameters": {}},
  "UI5_CALLBACK": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.text_input = new abap.types.String({qualifiedName: "STRING"});
    this.dirty = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async display_view() {
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let box = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(31).set('abap2UI5 - data loss protection'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    box.set((await page.get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.Character(15).set('sapUiTinyMargin')})));
    await box.get().input({id: new abap.types.String().set(`input`), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.text_input})), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('submit')})), width: new abap.types.String().set(`40rem`), placeholder: new abap.types.String().set(`Enter data, submit and navigate back to trigger data loss protection`)});
    await box.get().info_label({text: new abap.types.Character(5).set('dirty'), colorscheme: new abap.types.Character(1).set('8'), icon: new abap.types.Character(26).set('sap-icon://message-success'), class: new abap.types.String().set(`sapUiSmallMarginBegin sapUiTinyMarginTop`), visible: (await this.client.get().z2ui5_if_client$_bind({val: this.dirty}))});
    await box.get().button({text: new abap.types.Character(5).set('Reset'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('reset')})), class: new abap.types.String().set(`sapUiSmallMarginBegin`), visible: (await this.client.get().z2ui5_if_client$_bind({val: this.dirty}))});
    await (await page.get()._z2ui5()).get().focus({focusid: new abap.types.String().set(`input`)});
    await (await page.get()._z2ui5()).get().dirty({isdirty: (await this.client.get().z2ui5_if_client$_bind({val: this.dirty}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event() {
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let unique576 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique576, new abap.types.Character(4).set('BACK'))) {
      if (abap.compare.eq(this.dirty, abap.builtin.abap_true)) {
        await this.security_check_popup();
      } else {
        await this.client.get().z2ui5_if_client$nav_app_leave();
      }
    } else if (abap.compare.eq(unique576, new abap.types.Character(6).set('submit'))) {
      temp2.set(abap.builtin.boolc(abap.compare.initial(this.text_input) === false));
      this.dirty.set(temp2);
    } else if (abap.compare.eq(unique576, new abap.types.Character(5).set('reset'))) {
      abap.statements.clear(this.dirty);
      abap.statements.clear(this.text_input);
    }
  }
  async security_check_popup() {
    await this.client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POP_TO_CONFIRM'].factory({i_question_text: new abap.types.String().set(`Your entries will be lost when you leave this page.`), i_title: new abap.types.String().set(`Warning`), i_icon: new abap.types.String().set(`sap-icon://status-critical`), i_button_text_confirm: new abap.types.String().set(`Leave Page`), i_button_text_cancel: new abap.types.String().set(`Cancel`)}))});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.ui5_callback();
    }
    await this.on_event();
    if (abap.compare.eq(this.initialized, abap.builtin.abap_false)) {
      this.initialized.set(abap.builtin.abap_true);
      await this.display_view();
    } else {
      await client.get().z2ui5_if_client$view_model_update();
    }
  }
  async ui5_callback() {
    let prev = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_TO_CONFIRM", RTTIName: "\\CLASS=Z2UI5_CL_POP_TO_CONFIRM"});
    let confirm_leave = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    try {
      prev.set((await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
      await abap.statements.cast(temp1, prev);
      confirm_leave.set((await temp1.get().result()));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    if (abap.compare.eq(confirm_leave, abap.builtin.abap_true)) {
      abap.statements.clear(this.dirty);
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_279'] = z2ui5_cl_demo_app_279;
z2ui5_cl_demo_app_279.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_279.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_279.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_279.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_279.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_279.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_279.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_279.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_279};
//# sourceMappingURL=z2ui5_cl_demo_app_279.clas.mjs.map