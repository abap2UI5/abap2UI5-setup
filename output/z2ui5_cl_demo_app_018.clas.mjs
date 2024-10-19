const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_018.clas.abap
class z2ui5_cl_demo_app_018 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_018';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"QUANTITY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TEXTAREA": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_DISPLAY_VIEW_MAIN": {"visibility": "O", "parameters": {}},
  "Z2UI5_DISPLAY_VIEW_SECOND": {"visibility": "O", "parameters": {}},
  "Z2UI5_DISPLAY_POPUP_INPUT": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.quantity = new abap.types.String({qualifiedName: "STRING"});
    this.mv_textarea = new abap.types.String({qualifiedName: "STRING"});
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
  async z2ui5_display_popup_input() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await (await (await view.get().dialog({title: new abap.types.Character(5).set('Title'), icon: new abap.types.Character(15).set('sap-icon://edit')})).get().content()).get().text_area({height: new abap.types.Character(4).set('100%'), width: new abap.types.Character(4).set('100%'), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_textarea}))})).get().button({text: new abap.types.Character(6).set('Cancel'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('POPUP_CANCEL')}))})).get().button({text: new abap.types.Character(7).set('Confirm'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('POPUP_CONFIRM')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await view.get().stringify())});
  }
  async z2ui5_display_view_main() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(19).set('abap2UI5 - Template'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().simple_form({title: new abap.types.Character(9).set('VIEW_MAIN'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(8).set('quantity')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.quantity}))})).get().label({text: new abap.types.Character(4).set('text')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_textarea})), enabled: abap.builtin.abap_false})).get().button({text: new abap.types.Character(16).set('show popup input'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('SHOW_POPUP')}))})).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().overflow_toolbar_button({text: new abap.types.Character(5).set('Clear'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('BUTTON_CLEAR')})), type: new abap.types.Character(6).set('Reject'), icon: new abap.types.Character(17).set('sap-icon://delete')})).get().button({text: new abap.types.Character(17).set('Go to View Second'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(16).set('SHOW_VIEW_SECOND')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_display_view_second() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(19).set('abap2UI5 - Template'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})).get().simple_form({title: new abap.types.Character(11).set('VIEW_SECOND')})).get().content({ns: new abap.types.Character(4).set('form')})).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().overflow_toolbar_button({text: new abap.types.Character(5).set('Clear'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('BUTTON_CLEAR')})), type: new abap.types.Character(6).set('Reject'), icon: new abap.types.Character(17).set('sap-icon://delete')})).get().button({text: new abap.types.Character(15).set('Go to View Main'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('SHOW_VIEW_MAIN')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
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
    let unique211 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique211, new abap.types.Character(10).set('SHOW_POPUP'))) {
      await this.z2ui5_display_popup_input();
    } else if (abap.compare.eq(unique211, new abap.types.Character(13).set('POPUP_CONFIRM'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`confirm`)});
      await this.client.get().z2ui5_if_client$popup_destroy();
    } else if (abap.compare.eq(unique211, new abap.types.Character(12).set('POPUP_CANCEL'))) {
      abap.statements.clear(this.mv_textarea);
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`cancel`)});
      await this.client.get().z2ui5_if_client$popup_destroy();
    } else if (abap.compare.eq(unique211, new abap.types.Character(14).set('SHOW_VIEW_MAIN'))) {
      await this.z2ui5_display_view_main();
    } else if (abap.compare.eq(unique211, new abap.types.Character(16).set('SHOW_VIEW_SECOND'))) {
      await this.z2ui5_display_view_second();
    } else if (abap.compare.eq(unique211, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    this.quantity.set(new abap.types.Character(3).set('500'));
    await this.z2ui5_display_view_main();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_018'] = z2ui5_cl_demo_app_018;
z2ui5_cl_demo_app_018.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_018.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_018.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_018.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_018.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_018.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_018.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_018.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_018};
//# sourceMappingURL=z2ui5_cl_demo_app_018.clas.mjs.map