const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_208.clas.abap
class z2ui5_cl_demo_app_208 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_208';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Sample: Radio Button Group`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    layout.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().vbox({class: new abap.types.String().set(`sapUiSmallMargin`)})).get().label({labelfor: new abap.types.String().set(`rbg1`), text: new abap.types.String().set(`An example with 'matrix' layout`)})).get().radio_button_group({id: new abap.types.String().set(`rbg1`), columns: new abap.types.String().set(`3`), width: new abap.types.String().set(`100%`), class: new abap.types.String().set(`sapUiMediumMarginBottom`)})).get().radio_button({id: new abap.types.String().set(`RB1-1`), text: new abap.types.String().set(`Long Option Number 1`)})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB1-2`), text: new abap.types.String().set(`Option 2`), enabled: abap.builtin.abap_false})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB1-3`), text: new abap.types.String().set(`Nr. 3`), editable: abap.builtin.abap_false})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB1-4`), text: new abap.types.String().set(`Long Option 4`)})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB1-5`), text: new abap.types.String().set(`Option 5`)})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB1-6`), text: new abap.types.String().set(`Nr. 6`)})).get().get_parent()).get().get_parent()).get().label({labelfor: new abap.types.String().set(`rbg2`), text: new abap.types.String().set(`An example with 3 buttons and 2 columns`)})).get().radio_button_group({id: new abap.types.String().set(`rbg2`), columns: new abap.types.String().set(`2`), selectedindex: new abap.types.String().set(`2`), class: new abap.types.String().set(`sapUiMediumMarginBottom`)})).get().radio_button({id: new abap.types.String().set(`RB2-1`), text: new abap.types.String().set(`Option 1`)})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB2-2`), text: new abap.types.String().set(`Option 2`), editable: abap.builtin.abap_false})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB2-3`), text: new abap.types.String().set(`Option 3`)})).get().get_parent()).get().get_parent()).get().label({labelfor: new abap.types.String().set(`rbg3`), text: new abap.types.String().set(`If the number of columns is equal to or exceeds the number of radio buttons they align horizontally`)})).get().radio_button_group({id: new abap.types.String().set(`rbg3`), columns: new abap.types.String().set(`5`), valuestate: new abap.types.String().set(`Error`), class: new abap.types.String().set(`sapUiMediumMarginBottom`)})).get().radio_button({id: new abap.types.String().set(`RB3-1`), text: new abap.types.String().set(`Option 1`)})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB3-2`), text: new abap.types.String().set(`Option 2`)})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB3-3`), text: new abap.types.String().set(`Option 3`)})).get().get_parent()).get().get_parent()).get().label({labelfor: new abap.types.String().set(`rbg4`), text: new abap.types.String().set(`An example of a group in warning state`)})).get().radio_button_group({id: new abap.types.String().set(`rbg4`), valuestate: new abap.types.String().set(`Warning`)})).get().radio_button({id: new abap.types.String().set(`RB4-1`), text: new abap.types.String().set(`Option 1`)})).get().get_parent()).get().radio_button({id: new abap.types.String().set(`RB4-2`), text: new abap.types.String().set(`Option 2`)})).get().get_parent()));
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique496 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique496, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_208'] = z2ui5_cl_demo_app_208;
z2ui5_cl_demo_app_208.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_208.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_208.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_208.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_208.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_208.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_208.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_208.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_208};
//# sourceMappingURL=z2ui5_cl_demo_app_208.clas.mjs.map