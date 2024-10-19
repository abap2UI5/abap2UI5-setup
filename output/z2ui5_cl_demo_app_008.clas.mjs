const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_008.clas.abap
class z2ui5_cl_demo_app_008 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_008';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_STRIP_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "STRIP_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.check_strip_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.strip_type = new abap.types.String({qualifiedName: "STRING"});
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
    let unique198 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique198, new abap.types.Character(26).set('BUTTON_MESSAGE_BOX_CONFIRM'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(29).set('Approve purchase order 12345?'), type: new abap.types.Character(7).set('confirm')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(24).set('BUTTON_MESSAGE_BOX_ALERT'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(60).set('The quantity you have reported exceeds the quantity planned.'), type: new abap.types.Character(5).set('alert')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(24).set('BUTTON_MESSAGE_BOX_ERROR'))) {
      await client.get().z2ui5_if_client$message_box_display({text: abap.operators.concat(new abap.types.Character(40).set('Select a team in the "Development" area.'),abap.operators.concat(abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf,new abap.types.Character(40).set('"Marketing" isn’t assigned to this area.'))), type: new abap.types.Character(5).set('error')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(23).set('BUTTON_MESSAGE_BOX_INFO'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(43).set('Your booking will be reserved for 24 hours.')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(26).set('BUTTON_MESSAGE_BOX_WARNING'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(54).set('The project schedule was last updated over a year ago.'), type: new abap.types.Character(7).set('warning')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(26).set('BUTTON_MESSAGE_BOX_SUCCESS'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(55).set('Project 1234567 was created and assigned to team "ABC".'), type: new abap.types.Character(7).set('success')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(20).set('BUTTON_MESSAGE_TOAST'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(23).set('this is a message toast')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(21).set('BUTTON_MESSAGE_TOAST2'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(23).set('this is a message toast'), at: new abap.types.Character(11).set('left bottom'), offset: new abap.types.Character(5).set('0 -15'), animationtimingfunction: new abap.types.String().set(`ease-in`), class: new abap.types.Character(8).set('my-style')});
    } else if (abap.compare.eq(unique198, new abap.types.Character(25).set('BUTTON_MESSAGE_STRIP_INFO'))) {
      this.check_strip_active.set(abap.builtin.abap_true);
      this.strip_type.set(new abap.types.Character(11).set('Information'));
    } else if (abap.compare.eq(unique198, new abap.types.Character(26).set('BUTTON_MESSAGE_STRIP_ERROR'))) {
      this.check_strip_active.set(abap.builtin.abap_true);
      this.strip_type.set(new abap.types.Character(5).set('Error'));
    } else if (abap.compare.eq(unique198, new abap.types.Character(28).set('BUTTON_MESSAGE_STRIP_SUCCESS'))) {
      this.check_strip_active.set(abap.builtin.abap_true);
      this.strip_type.set(new abap.types.Character(7).set('Success'));
    } else if (abap.compare.eq(unique198, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await view.get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`style`)})).get()._cc_plain_xml({val: new abap.types.String().set(`.my-style{ background: black !important; opacity: 0.6; color: white; }`)});
    page.set((await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(19).set('abap2UI5 - Messages'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link()).get().get_parent()));
    if (abap.compare.eq(this.check_strip_active, abap.builtin.abap_true)) {
      await page.get().message_strip({text: new abap.types.Character(23).set('This is a Message Strip'), type: this.strip_type});
    }
    await (await (await (await (await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(11).set('Message Box')})).get().content({ns: new abap.types.Character(4).set('form')})).get().button({text: new abap.types.Character(7).set('Confirm'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(26).set('BUTTON_MESSAGE_BOX_CONFIRM')}))})).get().button({text: new abap.types.Character(5).set('Alert'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(24).set('BUTTON_MESSAGE_BOX_ALERT')}))})).get().button({text: new abap.types.Character(5).set('Error'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(24).set('BUTTON_MESSAGE_BOX_ERROR')}))})).get().button({text: new abap.types.Character(4).set('Info'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(23).set('BUTTON_MESSAGE_BOX_INFO')}))})).get().button({text: new abap.types.Character(7).set('Warning'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(26).set('BUTTON_MESSAGE_BOX_WARNING')}))})).get().button({text: new abap.types.Character(7).set('Success'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(26).set('BUTTON_MESSAGE_BOX_SUCCESS')}))});
    await (await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(13).set('Message Strip')})).get().content({ns: new abap.types.Character(4).set('form')})).get().button({text: new abap.types.Character(7).set('success'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(28).set('BUTTON_MESSAGE_STRIP_SUCCESS')}))})).get().button({text: new abap.types.Character(5).set('error'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(26).set('BUTTON_MESSAGE_STRIP_ERROR')}))})).get().button({text: new abap.types.Character(11).set('information'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(25).set('BUTTON_MESSAGE_STRIP_INFO')}))});
    await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(7).set('Display')})).get().content({ns: new abap.types.Character(4).set('form')})).get().button({text: new abap.types.Character(13).set('Message Toast'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('BUTTON_MESSAGE_TOAST')}))})).get().button({text: new abap.types.Character(24).set('Message Toast Customized'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('BUTTON_MESSAGE_TOAST2')}))});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_008'] = z2ui5_cl_demo_app_008;
z2ui5_cl_demo_app_008.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_008.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_008.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_008.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_008.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_008.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_008.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_008.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_008};
//# sourceMappingURL=z2ui5_cl_demo_app_008.clas.mjs.map