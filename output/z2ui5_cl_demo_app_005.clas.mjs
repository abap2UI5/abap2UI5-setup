const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_005.clas.abap
class z2ui5_cl_demo_app_005 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_005';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"VALUE1": {"type": () => {return new abap.types.Integer({qualifiedName: "INT4"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "VALUE2": {"type": () => {return new abap.types.Integer({qualifiedName: "INT4"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.value1 = new abap.types.Integer({qualifiedName: "INT4"});
    this.value2 = new abap.types.Integer({qualifiedName: "INT4"});
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.initialized, abap.builtin.abap_false)) {
      this.initialized.set(abap.builtin.abap_true);
      this.value1.set(abap.IntegerFactory.get(10));
      this.value2.set(abap.IntegerFactory.get(90));
    }
    let unique194 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique194, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique194, new abap.types.Character(13).set('SLIDER_CHANGE'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Range Slider ${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline)}value1 ${abap.templateFormatting(this.value1)} ${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline)}value2 ${abap.templateFormatting(this.value2)}`)});
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(31).set('abap2UI5 - Range Slider Example'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(11).set('L12 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await grid.get().simple_form({title: new abap.types.Character(13).set('More Controls'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(12).set('Range Slider')})).get().range_slider({max: new abap.types.Character(3).set('100'), min: new abap.types.Character(1).set('0'), step: new abap.types.Character(2).set('10'), startvalue: new abap.types.Character(2).set('10'), endvalue: new abap.types.Character(2).set('20'), showtickmarks: abap.builtin.abap_true, labelinterval: new abap.types.Character(1).set('2'), width: new abap.types.Character(3).set('80%'), class: new abap.types.Character(15).set('sapUiTinyMargin'), value: (await client.get().z2ui5_if_client$_bind_edit({val: this.value1})), value2: (await client.get().z2ui5_if_client$_bind_edit({val: this.value2})), change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('SLIDER_CHANGE')}))});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_005'] = z2ui5_cl_demo_app_005;
z2ui5_cl_demo_app_005.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_005.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_005.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_005.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_005.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_005.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_005.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_005.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_005};
//# sourceMappingURL=z2ui5_cl_demo_app_005.clas.mjs.map