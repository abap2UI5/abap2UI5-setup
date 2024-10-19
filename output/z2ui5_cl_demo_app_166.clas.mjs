const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_166.clas.abap
class z2ui5_cl_demo_app_166 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_166';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_STRUC": {"type": () => {return new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE"}), "value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE2"})}, "z2ui5_cl_demo_app_166=>ty_struc", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_STRUC2": {"type": () => {return new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE"}), "value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE2"}), "incl_title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_TITLE"}), "incl_value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_VALUE"}), "incl_value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_VALUE2"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_VIEW": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_struc = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE"}), "value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE2"})}, "z2ui5_cl_demo_app_166=>ty_struc", undefined, {}, {});
    this.ms_struc2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE"}), "value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE2"}), "incl_title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_TITLE"}), "incl_value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_VALUE"}), "incl_value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_VALUE2"})}, undefined, undefined, {}, {});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async set_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(34).set('abap2UI5 - Binding Structure Level'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc.get().title}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc.get().value}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc.get().value2}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc2.get().title}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc2.get().value}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc2.get().value2}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc2.get().incl_title}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc2.get().incl_value}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_struc2.get().incl_value2}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.ms_struc.get().title.set(new abap.types.String().set(`title`));
      this.ms_struc.get().value.set(new abap.types.String().set(`val01`));
      this.ms_struc.get().value2.set(new abap.types.String().set(`val02`));
      this.ms_struc2.get().title.set(new abap.types.String().set(`title`));
      this.ms_struc2.get().value.set(new abap.types.String().set(`val01`));
      this.ms_struc2.get().value2.set(new abap.types.String().set(`val02`));
      this.ms_struc2.get().incl_title.set(new abap.types.String().set(`title_incl`));
      this.ms_struc2.get().incl_value.set(new abap.types.String().set(`val01_incl`));
      this.ms_struc2.get().incl_value2.set(new abap.types.String().set(`val02_incl`));
      await this.set_view();
    }
    let unique423 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique423, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    await client.get().z2ui5_if_client$view_model_update();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_166'] = z2ui5_cl_demo_app_166;
z2ui5_cl_demo_app_166.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_166.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_166.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_166.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_166.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_166.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_166.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_166.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_166.ty_struc_incl = new abap.types.Structure({"incl_title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_TITLE"}), "incl_value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_VALUE"}), "incl_value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC_INCL-INCL_VALUE2"})}, "z2ui5_cl_demo_app_166=>ty_struc_incl", undefined, {}, {});
z2ui5_cl_demo_app_166.ty_struc = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE"}), "value2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_166=>TY_STRUC-VALUE2"})}, "z2ui5_cl_demo_app_166=>ty_struc", undefined, {}, {});
export {z2ui5_cl_demo_app_166};
//# sourceMappingURL=z2ui5_cl_demo_app_166.clas.mjs.map