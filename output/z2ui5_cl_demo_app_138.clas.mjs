const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_138.clas.abap
class z2ui5_cl_demo_app_138 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_138';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_DATA": {"type": () => {return new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"val": new abap.types.String({qualifiedName: "STRING"}), "ms_data2": new abap.types.Structure({"val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val2": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "QUANTITY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.ms_data = new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"ms_data2": new abap.types.Structure({"val": new abap.types.String({qualifiedName: "STRING"}), "ms_data2": new abap.types.Structure({"val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), "val2": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.quantity = new abap.types.String({qualifiedName: "STRING"});
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
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.ms_data.get().ms_data2.get().ms_data2.get().ms_data2.get().ms_data2.get().ms_data2.get().ms_data2.get().val.set(new abap.types.Character(6).set('tomato'));
      this.quantity.set(new abap.types.Character(3).set('500'));
      view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
      await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - First Example'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().simple_form({title: new abap.types.Character(10).set('Form Title'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(8).set('quantity')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.quantity}))})).get().label({text: new abap.types.String().set(`product`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.ms_data.get().ms_data2.get().ms_data2.get().ms_data2.get().ms_data2.get().ms_data2.get().ms_data2.get().val}))})).get().button({text: new abap.types.Character(4).set('post'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_POST')}))})).get().stringify())});
    }
    let unique395 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique395, new abap.types.Character(11).set('BUTTON_POST'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`${abap.templateFormatting(this.quantity)} - send to the server`)});
    } else if (abap.compare.eq(unique395, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_138'] = z2ui5_cl_demo_app_138;
z2ui5_cl_demo_app_138.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_138.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_138.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_138.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_138.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_138.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_138.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_138.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_138};
//# sourceMappingURL=z2ui5_cl_demo_app_138.clas.mjs.map