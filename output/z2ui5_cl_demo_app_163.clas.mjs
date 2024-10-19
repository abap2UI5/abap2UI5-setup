const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_163.clas.abap
class z2ui5_cl_demo_app_163 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_163';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MV_CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_EVENT": {"visibility": "O", "parameters": {}},
  "VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "VIEW_ACTION_SHEET": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async on_event() {
    let unique420 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique420, new abap.types.Character(17).set('OPEN_ACTION_SHEET'))) {
      await this.view_action_sheet();
    } else if (abap.compare.eq(unique420, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async view_action_sheet() {
    let action_sheet_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    action_sheet_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    abap.statements.clear(temp1);
    temp1.get().n.set(new abap.types.String().set(`core:require`));
    temp1.get().v.set(new abap.types.String().set(`{ MessageToast: 'sap/m/MessageToast' }`));
    await action_sheet_view.get()._generic_property({val: temp1});
    await (await (await (await (await (await (await action_sheet_view.get().action_sheet({placement: new abap.types.String().set(`Botton`), showcancelbutton: abap.builtin.abap_true, title: new abap.types.String().set(`Choose Your Action`)})).get().button({text: new abap.types.String().set(`Accept`), icon: new abap.types.String().set(`sap-icon://accept`), press: new abap.types.String().set(`MessageToast.show('selected action is ' + \${$source>/text})`)})).get().button({text: new abap.types.String().set(`Reject`), icon: new abap.types.String().set(`sap-icon://decline`), press: new abap.types.String().set(`MessageToast.show('selected action is ' + \${$source>/text})`)})).get().button({text: new abap.types.String().set(`Email`), icon: new abap.types.String().set(`sap-icon://email`), press: new abap.types.String().set(`MessageToast.show('selected action is ' + \${$source>/text})`)})).get().button({text: new abap.types.String().set(`Forward`), icon: new abap.types.String().set(`sap-icon://forward`), press: new abap.types.String().set(`MessageToast.show('selected action is ' + \${$source>/text})`)})).get().button({text: new abap.types.String().set(`Delete`), icon: new abap.types.String().set(`sap-icon://delete`), press: new abap.types.String().set(`MessageToast.show('selected action is ' + \${$source>/text})`)})).get().button({text: new abap.types.String().set(`Other`), press: new abap.types.String().set(`MessageToast.show('selected action is ' + \${$source>/text})`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await action_sheet_view.get().stringify()), by_id: new abap.types.String().set(`actionSheet`)});
  }
  async view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    view.set((await (await view.get().shell()).get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(23).set('abap2UI5 - Action Sheet'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    vbox.set((await view.get().vbox()));
    await vbox.get().button({text: new abap.types.Character(17).set('Open Action Sheet'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('OPEN_ACTION_SHEET')})), id: new abap.types.String().set(`actionSheet`), class: new abap.types.String().set(`sapUiSmallMargin`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_check_initialized, abap.builtin.abap_false)) {
      this.mv_check_initialized.set(abap.builtin.abap_true);
      await this.view_display();
      return;
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_163'] = z2ui5_cl_demo_app_163;
z2ui5_cl_demo_app_163.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_163.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_163.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_163.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_163.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_163.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_163.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_163.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_163};
//# sourceMappingURL=z2ui5_cl_demo_app_163.clas.mjs.map