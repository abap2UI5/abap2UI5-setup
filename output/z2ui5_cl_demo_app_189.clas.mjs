const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_189.clas.abap
class z2ui5_cl_demo_app_189 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_189';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"ONE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "TWO": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "THREE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "FOCUS_FIELD": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"RENDER": {"visibility": "I", "parameters": {}},
  "DISPATCH": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.one = new abap.types.String({qualifiedName: "STRING"});
    this.two = new abap.types.String({qualifiedName: "STRING"});
    this.three = new abap.types.String({qualifiedName: "STRING"});
    this.focus_field = new abap.types.String({qualifiedName: "STRING"});
    this.initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async dispatch() {
    let unique456 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique456, new abap.types.Character(9).set('one_enter'))) {
      this.focus_field.set(new abap.types.Character(5).set('IdTwo'));
    } else if (abap.compare.eq(unique456, new abap.types.Character(9).set('two_enter'))) {
      this.focus_field.set(new abap.types.Character(7).set('IdThree'));
    } else if (abap.compare.eq(unique456, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
    await this.client.get().z2ui5_if_client$view_model_update();
  }
  async render() {
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(19).set('abap2UI5 - Focus II'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await (await (await (await (await (await (await page.get().simple_form()).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(17).set('One (Press Enter)')})).get().input({id: new abap.types.Character(5).set('IdOne'), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.one})), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('one_enter')}))})).get().label({text: new abap.types.Character(3).set('Two')})).get().input({id: new abap.types.Character(5).set('IdTwo'), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.two})), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('two_enter')}))})).get().label({text: new abap.types.Character(5).set('Three')})).get().input({id: new abap.types.Character(7).set('IdThree'), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.three}))});
    await (await page.get()._z2ui5()).get().focus({focusid: (await this.client.get().z2ui5_if_client$_bind({val: this.focus_field}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.initialized, abap.builtin.abap_false)) {
      this.initialized.set(abap.builtin.abap_true);
      this.focus_field.set(new abap.types.Character(5).set('IdOne'));
      await this.render();
    }
    await this.dispatch();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_189'] = z2ui5_cl_demo_app_189;
z2ui5_cl_demo_app_189.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_189.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_189.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_189.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_189.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_189.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_189.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_189.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_189};
//# sourceMappingURL=z2ui5_cl_demo_app_189.clas.mjs.map