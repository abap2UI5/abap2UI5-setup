const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_250.clas.abap
class z2ui5_cl_demo_app_250 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_250';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page_01 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let page_02 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page_01.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(46).set('abap2UI5 - Sample: OverflowToolbar - Alignment'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page_01.get().header_content()).get().button({id: new abap.types.String().set(`hint_icon`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('POPOVER')}))});
    await (await page_01.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(104).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.OverflowToolbar/sample/sap.m.sample.ToolbarAlignment')});
    page_02.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page_01.get().page()).get().invisible_text({ns: new abap.types.String().set(`core`), id: new abap.types.String().set(`inputLabel`), text: new abap.types.String().set(`Input label`)})).get().get_parent()).get().message_strip({text: new abap.types.String().set(`Left and Right aligned content.`), class: new abap.types.String().set(`sapUiTinyMargin`)})).get().overflow_toolbar({class: new abap.types.String().set(`sapUiMediumMarginTop`)})).get().button({text: new abap.types.String().set(`Reject`), type: new abap.types.String().set(`Reject`)})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Accept`), type: new abap.types.String().set(`Accept`)})).get().get_parent()).get().message_strip({text: new abap.types.String().set(`Centered content.`), class: new abap.types.String().set(`sapUiTinyMargin`)})).get().overflow_toolbar({class: new abap.types.String().set(`sapUiMediumMarginTop`)})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Centered content`), type: new abap.types.String().set(`Accept`)})).get().toolbar_spacer()).get().get_parent()).get().message_strip({text: new abap.types.String().set(`Right aligned content.`), class: new abap.types.String().set(`sapUiTinyMargin`)})).get().overflow_toolbar({class: new abap.types.String().set(`sapUiMediumMarginTop`)})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Right aligned content`), type: new abap.types.String().set(`Accept`)})).get().get_parent()).get().message_strip({text: new abap.types.String().set(`You can have as many sections as you want with ToolbarSpacer.`), class: new abap.types.String().set(`sapUiTinyMargin`)})).get().overflow_toolbar({class: new abap.types.String().set(`sapUiMediumMarginTop`)})).get().button({text: new abap.types.String().set(`Accept`), type: new abap.types.String().set(`Accept`)})).get().toolbar_spacer()).get().checkbox({text: new abap.types.String().set(`CheckBox`)})).get().toolbar_spacer()).get().button({tooltip: new abap.types.String().set(`Dropdown`), icon: new abap.types.String().set(`sap-icon://drop-down-list`)})).get().toolbar_spacer()).get().radio_button({text: new abap.types.String().set(`RadioButton`)})).get().get_parent()).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Reject`), type: new abap.types.String().set(`Reject`)})).get().get_parent()).get().message_strip({text: new abap.types.String().set(`Flexible Toolbar Spacers share the free horizontal space equally, thus content centering is not as precise as in Bar.`), class: new abap.types.String().set(`sapUiTinyMargin`)})).get().overflow_toolbar({class: new abap.types.String().set(`sapUiMediumMarginTop`)})).get().button({text: new abap.types.String().set(`This is a very long button text. This is a very long button text.`)})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Centered Button`)})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Short Button`)})).get().get_parent()).get().message_strip({text: new abap.types.String().set(`ToolbarSpacer does not have to be flexible, a fixed width can be specified too.`), class: new abap.types.String().set(`sapUiTinyMargin`)})).get().overflow_toolbar({class: new abap.types.String().set(`sapUiMediumMarginTop`)})).get().input({arialabelledby: new abap.types.String().set(`inputLabel`), width: new abap.types.String().set(`100px`), placeholder: new abap.types.String().set(`First Name`)})).get().input({arialabelledby: new abap.types.String().set(`inputLabel`), width: new abap.types.String().set(`100px`), placeholder: new abap.types.String().set(`Last Name`)})).get().toolbar_spacer({width: new abap.types.String().set(`40px`)})).get().input({arialabelledby: new abap.types.String().set(`inputLabel`), type: new abap.types.String().set(`Email`), width: new abap.types.String().set(`100px`), placeholder: new abap.types.String().set(`Email`)})).get().input({arialabelledby: new abap.types.String().set(`inputLabel`), type: new abap.types.String().set(`Number`), width: new abap.types.String().set(`80px`), placeholder: new abap.types.String().set(`Age`)})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Submit`), type: new abap.types.String().set(`Accept`)})).get().get_parent()));
    await client.get().z2ui5_if_client$view_display({val: (await page_02.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique545 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique545, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique545, new abap.types.Character(7).set('POPOVER'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`hint_icon`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`OverflowToolbar and Toolbar are often used for left/right alignment. This is easily achieved with ToolbarSpacer.`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_250'] = z2ui5_cl_demo_app_250;
z2ui5_cl_demo_app_250.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_250.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_250.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_250.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_250.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_250.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_250.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_250.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_250};
//# sourceMappingURL=z2ui5_cl_demo_app_250.clas.mjs.map