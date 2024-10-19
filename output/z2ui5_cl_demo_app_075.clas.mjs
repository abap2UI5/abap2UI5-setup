const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_075.clas.abap
class z2ui5_cl_demo_app_075 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_075';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_TABLE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_EDIT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_DOWNLOAD": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_FILE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "UI5_VIEW_MAIN_DISPLAY": {"visibility": "O", "parameters": {}},
  "UI5_VIEW_INIT_DISPLAY": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_path = new abap.types.String({qualifiedName: "STRING"});
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.mr_table = new abap.types.DataReference(new abap.types.Character(4));
    this.mv_check_edit = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_download = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_file = new abap.types.String({qualifiedName: "STRING"});
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
  async ui5_on_event() {
    let lv_dummy = new abap.types.String({qualifiedName: "STRING"});
    let lv_data = new abap.types.String({qualifiedName: "STRING"});
    let lv_data2 = new abap.types.XString({qualifiedName: "XSTRING"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      let unique299 = ((await this.client.get().z2ui5_if_client$get())).get().event;
      if (abap.compare.eq(unique299, new abap.types.Character(5).set('START')) || abap.compare.eq(unique299, new abap.types.Character(6).set('CHANGE'))) {
        await this.ui5_view_main_display();
      } else if (abap.compare.eq(unique299, new abap.types.Character(6).set('UPLOAD'))) {
        abap.statements.split({source: this.mv_value, at: new abap.types.String().set(`;`), targets: [lv_dummy,lv_data]});
        abap.statements.split({source: lv_data, at: new abap.types.String().set(`,`), targets: [lv_dummy,lv_data]});
        lv_data2.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_decode_x_base64({val: lv_data})));
        this.mv_file.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_get_string_by_xstring({val: lv_data2})));
        await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`CSV loaded to table`)});
        await this.ui5_view_main_display();
        abap.statements.clear(this.mv_value);
        abap.statements.clear(this.mv_path);
      } else if (abap.compare.eq(unique299, new abap.types.Character(4).set('BACK'))) {
        await this.client.get().z2ui5_if_client$nav_app_leave();
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        await this.client.get().z2ui5_if_client$message_box_display({text: (await x.get().if_message$get_text()), type: new abap.types.String().set(`error`)});
      } else {
        throw e;
      }
    }
  }
  async ui5_on_init() {
    await this.ui5_view_init_display();
  }
  async ui5_view_init_display() {
    await this.ui5_view_main_display();
  }
  async ui5_view_main_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let footer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(23).set('abap2UI5 - Upload Files'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    if (abap.compare.initial(this.mv_file) === false) {
      await page.get().code_editor({value: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_file})), editable: abap.builtin.abap_false});
    }
    footer.set((await (await page.get().footer()).get().overflow_toolbar()));
    await (await footer.get()._z2ui5()).get().file_uploader({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_value})), path: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_path})), placeholder: new abap.types.Character(16).set('filepath here...'), upload: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('UPLOAD')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.ui5_on_init();
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.ui5_view_main_display();
    }
    await this.ui5_on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_075'] = z2ui5_cl_demo_app_075;
z2ui5_cl_demo_app_075.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_075.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_075.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_075.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_075.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_075.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_075.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_075.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_075};
//# sourceMappingURL=z2ui5_cl_demo_app_075.clas.mjs.map