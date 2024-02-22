const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_test_app_hello_world.clas.abap
class z2ui5_cl_test_app_hello_world {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_TEST_APP_HELLO_WORLD';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "QUANTITY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.product = new abap.types.String({qualifiedName: "STRING"});
    this.quantity = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
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
      this.product.set(new abap.types.Character(8).set('products'));
      this.quantity.set(new abap.types.Character(3).set('500'));
    }
    let unique143 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique143, new abap.types.Character(11).set('BUTTON_POST'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`${abap.templateFormatting(this.product)} ${abap.templateFormatting(this.quantity)} - send to the server`)});
    } else {
    }
    await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_UI5']._factory()).get()._ns_m()).get().shell()).get().page({title: new abap.types.Character(35).set('abap2UI5 - z2ui5_cl_app_hello_world')})).get()._ns_ui()).get().simpleform({title: new abap.types.Character(11).set('Hello World'), editable: abap.builtin.abap_true})).get().content()).get()._ns_m()).get().title({text: new abap.types.Character(47).set('Make an input here and send it to the server...')})).get().label({text: new abap.types.Character(8).set('quantity')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.quantity}))})).get().label({text: new abap.types.Character(7).set('product')})).get().input({value: this.product, enabled: abap.builtin.abap_false})).get().button({text: new abap.types.Character(4).set('post'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_POST')}))})).get()._stringify())});
  }
}
abap.Classes['Z2UI5_CL_TEST_APP_HELLO_WORLD'] = z2ui5_cl_test_app_hello_world;
z2ui5_cl_test_app_hello_world.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_test_app_hello_world.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_test_app_hello_world.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_test_app_hello_world.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_test_app_hello_world.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_test_app_hello_world.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_test_app_hello_world};
//# sourceMappingURL=z2ui5_cl_test_app_hello_world.clas.mjs.map