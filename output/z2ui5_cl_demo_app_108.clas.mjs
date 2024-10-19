const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_108.clas.abap
class z2ui5_cl_demo_app_108 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_108';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"SCREEN": {"type": () => {return new abap.types.Structure({"input1": new abap.types.String({qualifiedName: "STRING"}), "input2": new abap.types.String({qualifiedName: "STRING"}), "input3": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_RENDERING": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.screen = new abap.types.Structure({"input1": new abap.types.String({qualifiedName: "STRING"}), "input2": new abap.types.String({qualifiedName: "STRING"}), "input3": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      await this.z2ui5_on_rendering({client: client});
    }
    await this.z2ui5_on_event({client: client});
  }
  async z2ui5_on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique341 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique341, new abap.types.Character(11).set('BUTTON_SEND'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(35).set('success - values send to the server')});
    } else if (abap.compare.eq(unique341, new abap.types.Character(12).set('BUTTON_CLEAR'))) {
      abap.statements.clear(this.screen);
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(16).set('View initialized')});
    } else if (abap.compare.eq(unique341, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
  }
  async z2ui5_on_rendering(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let side_panel = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(29).set('abap2UI5 - Side Panel Example'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    await (await (await page.get().header_content()).get().link()).get().get_parent();
    side_panel.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().side_panel({sidepanelposition: new abap.types.String().set(`Left`)})).get().main_content()).get().button({text: new abap.types.String().set(`Button 1`)})).get().button({text: new abap.types.String().set(`Button 2`)})).get().vbox()).get().label({text: new abap.types.String().set(`Switch 1`)})).get().switch()).get().get_parent()).get().text({text: abap.operators.concat(new abap.types.String().set(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`),abap.operators.concat(new abap.types.String().set(`labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`),abap.operators.concat(new abap.types.String().set(`nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse`),abap.operators.concat(new abap.types.String().set(`cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui`),new abap.types.String().set(`officia deserunt mollit anim id est laborum`)))))})).get().get_parent()).get().items({ns: new abap.types.String().set(`f`)})).get().side_panel_item({icon: new abap.types.String().set(`sap-icon://physical-activity`), text: new abap.types.String().set(`Run`)})).get().vbox()).get().text({text: new abap.types.String().set(`Static Content`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().switch()).get().button({text: new abap.types.String().set(`Press Me`)})).get().get_parent()).get().get_parent()).get().side_panel_item({icon: new abap.types.String().set(`sap-icon://addresses`), text: new abap.types.String().set(`Go Home`)})).get().vbox()).get().text({text: new abap.types.String().set(`Static Content`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().button({text: new abap.types.String().set(`Press Me`)})).get().button({text: new abap.types.String().set(`Hit Me`)})).get().get_parent()).get().get_parent()).get().side_panel_item({icon: new abap.types.String().set(`sap-icon://flight`), text: new abap.types.String().set(`Fly abroad`)})));
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_108'] = z2ui5_cl_demo_app_108;
z2ui5_cl_demo_app_108.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_108.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_108.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_108.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_108.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_108.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_108.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_108.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_108};
//# sourceMappingURL=z2ui5_cl_demo_app_108.clas.mjs.map