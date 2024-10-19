const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_004.clas.abap
class z2ui5_cl_demo_app_004 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_004';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VIEW_MAIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_VIEW_MAIN_DISPLAY": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_SECOND_DISPLAY": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_view_main = new abap.types.String({qualifiedName: "STRING"});
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_004", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_004"});
    let lv_dummy = new abap.types.Integer({qualifiedName: "I"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_view_main_display();
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(28).set('app started, init values set')});
      return;
    }
    let unique192 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique192, new abap.types.Character(16).set('BUTTON_ROUNDTRIP'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(74).set('server-client roundtrip, method on_event of the abap controller was called')});
    } else if (abap.compare.eq(unique192, new abap.types.Character(14).set('BUTTON_RESTART'))) {
      temp1.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_004']()).constructor_());
      await client.get().z2ui5_if_client$nav_app_leave({app: temp1});
    } else if (abap.compare.eq(unique192, new abap.types.Character(18).set('BUTTON_CHANGE_VIEW'))) {
      let unique193 = this.mv_view_main;
      if (abap.compare.eq(unique193, new abap.types.Character(4).set('MAIN'))) {
        await this.z2ui5_view_second_display();
      } else if (abap.compare.eq(unique193, new abap.types.Character(6).set('SECOND'))) {
        await this.z2ui5_view_main_display();
      }
    } else if (abap.compare.eq(unique192, new abap.types.Character(12).set('BUTTON_ERROR'))) {
      lv_dummy.set(abap.operators.divide(abap.IntegerFactory.get(1),abap.IntegerFactory.get(0)));
    } else if (abap.compare.eq(unique192, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_view_main_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    this.mv_view_main.set(new abap.types.Character(4).set('MAIN'));
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(21).set('abap2UI5 - Controller'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await (await (await (await (await (await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(10).set('Controller'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(9).set('Roundtrip')})).get().button({text: new abap.types.Character(25).set('Client/Server Interaction'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(16).set('BUTTON_ROUNDTRIP')}))})).get().label({text: new abap.types.Character(6).set('System')})).get().button({text: new abap.types.Character(11).set('Restart App'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_RESTART')}))})).get().label({text: new abap.types.Character(11).set('Change View')})).get().button({text: new abap.types.Character(19).set('Display View SECOND'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('BUTTON_CHANGE_VIEW')}))})).get().label({text: new abap.types.Character(17).set('CX_SY_ZERO_DIVIDE')})).get().button({text: new abap.types.Character(29).set('Error not catched by the user'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('BUTTON_ERROR')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_view_second_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.mv_view_main.set(new abap.types.Character(6).set('SECOND'));
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(21).set('abap2UI5 - Controller'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(11).set('L12 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(11).set('View Second')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(11).set('Change View')})).get().button({text: new abap.types.Character(17).set('Display View MAIN'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('BUTTON_CHANGE_VIEW')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_004'] = z2ui5_cl_demo_app_004;
z2ui5_cl_demo_app_004.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_004.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_004.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_004.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_004.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_004.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_004.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_004.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_004};
//# sourceMappingURL=z2ui5_cl_demo_app_004.clas.mjs.map