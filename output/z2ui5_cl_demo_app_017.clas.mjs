await import("./z2ui5_cl_demo_app_017.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_017.clas.abap
class z2ui5_cl_demo_app_017 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_017';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    let lv_dummy = new abap.types.Character(68, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_title = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let sections = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
    }
    let unique210 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique210, new abap.types.Character(16).set('BUTTON_ROUNDTRIP'))) {
      lv_dummy.set(new abap.types.Character(68).set('user pressed a button, your custom implementation can be called here'));
    } else if (abap.compare.eq(unique210, new abap.types.Character(14).set('BUTTON_MSG_BOX'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(40).set('this is a message box with a custom text'), type: new abap.types.Character(7).set('success')});
    } else if (abap.compare.eq(unique210, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await view.get().object_page_layout({showtitleinheadercontent: abap.builtin.abap_true, showeditheaderbutton: abap.builtin.abap_true, editheaderbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('EDIT_HEADER_PRESS')})), uppercaseanchorbar: abap.builtin.abap_false})));
    header_title.set((await (await page.get().header_title()).get().object_page_dyn_header_title()));
    await (await (await header_title.get().expanded_heading()).get().hbox()).get().title({text: new abap.types.Character(11).set('Oblomov Dev'), wrapping: abap.builtin.abap_true});
    await (await (await (await header_title.get().snapped_heading()).get().flex_box({alignitems: new abap.types.String().set(`Center`)})).get().avatar({src: (await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_017-LCL_HELP'].get_avatar()), class: new abap.types.Character(18).set('sapUiTinyMarginEnd')})).get().title({text: new abap.types.Character(11).set('Oblomov Dev'), wrapping: abap.builtin.abap_true});
    await (await header_title.get().expanded_content({ns: new abap.types.String().set(`uxap`)})).get().text({text: new abap.types.String().set(`abap2UI5 Developer`)});
    await (await header_title.get().snapped_content({ns: new abap.types.String().set(`uxap`)})).get().text({text: new abap.types.String().set(`abap2UI5 Developer`)});
    await (await header_title.get().snapped_title_on_mobile()).get().title({text: new abap.types.String().set(`abap2UI5 Developer`)});
    await (await (await (await (await (await header_title.get().actions({ns: new abap.types.String().set(`uxap`)})).get().overflow_toolbar()).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://edit`), text: new abap.types.Character(11).set('edit header'), type: new abap.types.Character(10).set('Emphasized'), tooltip: new abap.types.Character(4).set('edit')})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://pull-down`), text: new abap.types.Character(12).set('show section'), type: new abap.types.Character(10).set('Emphasized'), tooltip: new abap.types.Character(9).set('pull-down')})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://show`), text: new abap.types.Character(10).set('show state'), tooltip: new abap.types.Character(4).set('show')})).get().button({text: new abap.types.Character(7).set('Go Back'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')}))});
    header_content.set((await page.get().header_content({ns: new abap.types.Character(4).set('uxap')})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await header_content.get().flex_box({wrap: new abap.types.Character(4).set('Wrap')})).get().avatar({src: (await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_017-LCL_HELP'].get_avatar()), class: new abap.types.Character(19).set('sapUiSmallMarginEnd'), displaysize: new abap.types.Character(6).set('layout')})).get().vertical_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().link({text: new abap.types.Character(15).set('+33 6 4512 5158')})).get().link({text: new abap.types.Character(15).set('email@email.com')})).get().get_parent()).get().horizontal_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().label({text: new abap.types.Character(30).set('Hello! I an abap2UI5 developer')})).get().label({text: new abap.types.Character(13).set('San Jose, USA')})).get().get_parent()).get().vertical_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().label({text: new abap.types.Character(30).set('Hello! I an abap2UI5 developer')})).get().vbox()).get().label({text: new abap.types.Character(13).set('Achived goals')})).get().progress_indicator({percentvalue: new abap.types.Character(3).set('30%'), displayvalue: new abap.types.Character(3).set('30%')})).get().get_parent()).get().get_parent()).get().vertical_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().label({text: new abap.types.Character(13).set('San Jose, USA')})).get().get_parent();
    sections.set((await page.get().sections()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await sections.get().object_page_section({titleuppercase: abap.builtin.abap_false, id: new abap.types.Character(15).set('goalsSectionSS1'), title: new abap.types.Character(15).set('2014 Goals Plan')})).get().heading({ns: new abap.types.String().set(`uxap`)})).get().message_strip({text: new abap.types.Character(23).set('this is a message strip')})).get().get_parent()).get().sub_sections()).get().object_page_sub_section({id: new abap.types.Character(18).set('goalssubSectionSS1'), title: new abap.types.Character(6).set('goals1')})).get().blocks()).get().vbox()).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().label({text: new abap.types.Character(6).set('goals1')})).get().get_parent()).get().get_parent()).get().get_parent()).get().object_page_sub_section({id: new abap.types.Character(15).set('goalsSectionWS1'), title: new abap.types.Character(6).set('goals2')})).get().blocks()).get().vbox()).get().label({text: new abap.types.Character(6).set('goals2')})).get().label({text: new abap.types.Character(6).set('goals2')})).get().label({text: new abap.types.Character(6).set('goals2')})).get().label({text: new abap.types.Character(6).set('goals2')})).get().label({text: new abap.types.Character(6).set('goals2')})).get().label({text: new abap.types.Character(6).set('goals2')})).get().label({text: new abap.types.Character(6).set('goals2')})).get().label({text: new abap.types.Character(6).set('goals2')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await sections.get().object_page_section({titleuppercase: abap.builtin.abap_false, id: new abap.types.Character(15).set('PersonalSection'), title: new abap.types.Character(8).set('Personal')})).get().heading({ns: new abap.types.String().set(`uxap`)})).get().get_parent()).get().sub_sections()).get().object_page_sub_section({id: new abap.types.Character(18).set('personalSectionSS1'), title: new abap.types.Character(7).set('Connect')})).get().blocks()).get().label({text: new abap.types.Character(7).set('telefon')})).get().label({text: new abap.types.Character(5).set('email')})).get().get_parent()).get().get_parent()).get().object_page_sub_section({id: new abap.types.Character(18).set('personalSectionWS2'), title: new abap.types.Character(21).set('Payment information  ')})).get().blocks()).get().label({text: new abap.types.Character(30).set('Hello! I an abap2UI5 developer')})).get().label({text: new abap.types.Character(13).set('San Jose, USA')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await sections.get().object_page_section({titleuppercase: abap.builtin.abap_false, id: new abap.types.Character(17).set('employmentSection'), title: new abap.types.Character(10).set('Employment')})).get().heading({ns: new abap.types.String().set(`uxap`)})).get().get_parent()).get().sub_sections()).get().object_page_sub_section({id: new abap.types.Character(13).set('empSectionSS1'), title: new abap.types.Character(15).set('Job information')})).get().blocks()).get().label({text: new abap.types.Character(4).set('info')})).get().label({text: new abap.types.Character(4).set('info')})).get().label({text: new abap.types.Character(4).set('info')})).get().label({text: new abap.types.Character(4).set('info')})).get().label({text: new abap.types.Character(4).set('info')})).get().get_parent()).get().get_parent()).get().object_page_sub_section({id: new abap.types.Character(13).set('empSectionWS2'), title: new abap.types.Character(17).set('Employee Details ')})).get().blocks()).get().vbox()).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_017'] = z2ui5_cl_demo_app_017;
z2ui5_cl_demo_app_017.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_017.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_017.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_017.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_017.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_017.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_017.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_017.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_017};
//# sourceMappingURL=z2ui5_cl_demo_app_017.clas.mjs.map