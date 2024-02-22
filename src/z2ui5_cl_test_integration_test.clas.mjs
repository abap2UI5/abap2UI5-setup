const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_test_integration_test.clas.abap
class z2ui5_cl_test_integration_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_TEST_INTEGRATION_TEST';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"SV_STATE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.sv_state = z2ui5_cl_test_integration_test.sv_state;
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
    let lv_test = new abap.types.Integer({qualifiedName: "I"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_TEST_INTEGRATION_TEST", RTTIName: "\\CLASS=Z2UI5_CL_TEST_INTEGRATION_TEST"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.product.set(new abap.types.Character(6).set('tomato'));
      this.quantity.set(new abap.types.Character(3).set('500'));
    }
    let unique144 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique144, new abap.types.Character(11).set('BUTTON_POST'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`${abap.templateFormatting(this.product)} ${abap.templateFormatting(this.quantity)} - send to the server`)});
    } else if (abap.compare.eq(unique144, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
    if (abap.compare.eq(z2ui5_cl_test_integration_test.sv_state, new abap.types.Character(16).set('TEST_MESSAGE_BOX'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(16).set('test message box')});
    }
    if (abap.compare.eq(z2ui5_cl_test_integration_test.sv_state, new abap.types.Character(18).set('TEST_MESSAGE_TOAST'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(18).set('test message toast')});
    }
    let unique145 = z2ui5_cl_test_integration_test.sv_state;
    if (abap.compare.eq(unique145, new abap.types.String().set(`ERROR`))) {
      lv_test.set(abap.operators.divide(abap.IntegerFactory.get(1),abap.IntegerFactory.get(0)));
    } else if (abap.compare.eq(unique145, new abap.types.Character(12).set('TEST_ONE_WAY'))) {
      await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - First Example'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().simple_form({title: new abap.types.Character(10).set('Form Title'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(8).set('quantity')})).get().input({value: (await client.get().z2ui5_if_client$_bind({val: this.quantity}))})).get().label({text: new abap.types.Character(7).set('product')})).get().input({value: this.product, enabled: abap.builtin.abap_false})).get().button({text: new abap.types.Character(4).set('post'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_POST')}))})).get().get_root()).get().xml_get())});
    } else if (abap.compare.eq(unique145, new abap.types.Character(10).set('TEST_POPUP'))) {
      await client.get().z2ui5_if_client$popup_display({val: (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().dialog({title: new abap.types.Character(24).set('abap2UI5 - First Example')})).get().simple_form({title: new abap.types.Character(10).set('Form Title'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(8).set('quantity')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.quantity}))})).get().label({text: new abap.types.Character(7).set('product')})).get().input({value: this.product, enabled: abap.builtin.abap_false})).get().button({text: new abap.types.Character(4).set('post'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_POST')}))})).get().get_root()).get().xml_get())});
    } else {
      await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - First Example'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().simple_form({title: new abap.types.Character(10).set('Form Title'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(8).set('quantity')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.quantity}))})).get().label({text: new abap.types.Character(7).set('product')})).get().input({value: this.product, enabled: abap.builtin.abap_false})).get().button({text: new abap.types.Character(4).set('post'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_POST')}))})).get().get_root()).get().xml_get())});
    }
    if (abap.compare.eq(z2ui5_cl_test_integration_test.sv_state, new abap.types.Character(13).set('TEST_NAVIGATE'))) {
      lo_app.set(await (new abap.Classes['Z2UI5_CL_TEST_INTEGRATION_TEST']()).constructor_());
      z2ui5_cl_test_integration_test.sv_state.set(new abap.types.Character(9).set('LEAVE_APP'));
      await client.get().z2ui5_if_client$nav_app_call({app: lo_app});
      return;
    }
    if (abap.compare.eq(z2ui5_cl_test_integration_test.sv_state, new abap.types.Character(9).set('LEAVE_APP'))) {
      abap.statements.clear(z2ui5_cl_test_integration_test.sv_state);
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app}))});
    }
  }
}
abap.Classes['Z2UI5_CL_TEST_INTEGRATION_TEST'] = z2ui5_cl_test_integration_test;
z2ui5_cl_test_integration_test.sv_state = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_test_integration_test.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_test_integration_test.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_test_integration_test.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_test_integration_test.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_test_integration_test.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_test_integration_test.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_test_integration_test};
//# sourceMappingURL=z2ui5_cl_test_integration_test.clas.mjs.map