const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_122.clas.abap
class z2ui5_cl_demo_app_122 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_122';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"UI5_VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "UI5_THEME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "UI5_GAV": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_SYSTEMTYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_OS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_BROWSER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_PHONE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_DESKTOP": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_TABLET": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_COMBI": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_HEIGHT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEVICE_WIDTH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ui5_version = new abap.types.String({qualifiedName: "STRING"});
    this.ui5_theme = new abap.types.String({qualifiedName: "STRING"});
    this.ui5_gav = new abap.types.String({qualifiedName: "STRING"});
    this.device_systemtype = new abap.types.String({qualifiedName: "STRING"});
    this.device_os = new abap.types.String({qualifiedName: "STRING"});
    this.device_browser = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.device_phone = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.device_desktop = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.device_tablet = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.device_combi = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.device_height = new abap.types.String({qualifiedName: "STRING"});
    this.device_width = new abap.types.String({qualifiedName: "STRING"});
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
  async display_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await this.client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(8).set('abap2UI5'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get()._z2ui5()).get().info_frontend({finished: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`INFO_FINISHED`)})), device_browser: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_browser})), device_os: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_os})), device_systemtype: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_systemtype})), ui5_gav: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ui5_gav})), ui5_theme: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ui5_theme})), ui5_version: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ui5_version})), device_phone: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_phone})), device_desktop: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_desktop})), device_tablet: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_tablet})), device_combi: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_combi})), device_height: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_height})), device_width: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_width}))})).get().simple_form({title: new abap.types.Character(11).set('Information'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(14).set('device_browser')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_browser}))})).get().label({text: new abap.types.String().set(`device_os`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_os}))})).get().label({text: new abap.types.String().set(`device_systemtype`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_systemtype}))})).get().label({text: new abap.types.String().set(`ui5_gav`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ui5_gav}))})).get().label({text: new abap.types.String().set(`ui5_theme`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ui5_theme}))})).get().label({text: new abap.types.String().set(`ui5_version`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ui5_version}))})).get().label({text: new abap.types.String().set(`device_phone`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_phone}))})).get().label({text: new abap.types.String().set(`device_desktop`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_desktop}))})).get().label({text: new abap.types.String().set(`device_tablet`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_tablet}))})).get().label({text: new abap.types.String().set(`device_combi`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_combi}))})).get().label({text: new abap.types.String().set(`device_height`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_height}))})).get().label({text: new abap.types.String().set(`device_width`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.device_width}))})).get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view();
    }
    let unique361 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique361, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_122'] = z2ui5_cl_demo_app_122;
z2ui5_cl_demo_app_122.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_122.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_122.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_122.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_122.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_122.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_122.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_122.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_122};
//# sourceMappingURL=z2ui5_cl_demo_app_122.clas.mjs.map