const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_095.clas.abap
class z2ui5_cl_demo_app_095 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_095';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_SCREEN": {"type": () => {return new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_APP_SUB": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_096", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_096"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INIT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_GRID_SUB": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_INPUT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_SCREEN": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "PAGE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_INIT": {"visibility": "U", "parameters": {}},
  "ON_EVENT": {"visibility": "U", "parameters": {}},
  "VIEW_BUILD": {"visibility": "U", "parameters": {}},
  "ON_INIT_SUB": {"visibility": "U", "parameters": {}},
  "ON_EVENT_SUB": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_screen = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01", undefined, {}, {});
    this.mo_app_sub = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_096", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_096"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_init = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mo_grid_sub = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.mr_input = new abap.types.DataReference(new abap.types.Character(4));
    this.mr_screen = new abap.types.DataReference(new abap.types.Character(4));
    this.page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
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
    let unique327 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique327, new abap.types.Character(11).set('BUTTON_SAVE'))) {
      await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`event main app`)});
    } else if (abap.compare.eq(unique327, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async on_event_sub() {
    this.mo_app_sub.get().mo_view_parent.set(this.mo_grid_sub);
    await this.mo_app_sub.get().z2ui5_if_app$main({client: this.client});
  }
  async on_init() {
    this.ms_screen.get().input.set(new abap.types.String().set(`app main`));
    await this.view_build();
  }
  async on_init_sub() {
    this.mo_app_sub.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_096']()).constructor_());
    this.mo_app_sub.get().mo_view_parent.set(this.mo_grid_sub);
    await this.mo_app_sub.get().z2ui5_if_app$main({client: this.client});
    await this.client.get().z2ui5_if_client$view_display({val: (await (await this.page.get().get_root()).get().xml_get())});
  }
  async view_build() {
    let o_grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(32).set('abap2UI5 - Main App with Sub App'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    o_grid.set((await (await this.page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    content.set((await (await o_grid.get().simple_form({title: new abap.types.Character(5).set('Input')})).get().content({ns: new abap.types.Character(4).set('form')})));
    await (await content.get().label({text: new abap.types.Character(8).set('main app')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_screen.get().input})), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('INPUT')}))});
    this.mo_grid_sub.set((await (await this.page.get().grid({default_span: new abap.types.Character(11).set('L12 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await (await (await this.page.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('Delete'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_DELETE')})), type: new abap.types.Character(6).set('Reject'), icon: new abap.types.Character(17).set('sap-icon://delete')})).get().button({text: new abap.types.Character(3).set('Add'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BUTTON_ADD')})), type: new abap.types.Character(7).set('Default'), icon: new abap.types.Character(14).set('sap-icon://add')})).get().button({text: new abap.types.Character(4).set('Save'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SAVE')})), type: new abap.types.Character(7).set('Success')});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_init, abap.builtin.abap_false)) {
      this.mv_init.set(abap.builtin.abap_true);
      await this.on_init();
      await this.on_init_sub();
      await client.get().z2ui5_if_client$view_display({val: (await (await this.page.get().get_root()).get().xml_get())});
      return;
    }
    await this.on_event();
    await this.on_event_sub();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_095'] = z2ui5_cl_demo_app_095;
z2ui5_cl_demo_app_095.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_095.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_095.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_095.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_095.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_095.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_095.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_095.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_095.ty_s_01 = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_095=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_095=>ty_s_01", undefined, {}, {});
export {z2ui5_cl_demo_app_095};
//# sourceMappingURL=z2ui5_cl_demo_app_095.clas.mjs.map