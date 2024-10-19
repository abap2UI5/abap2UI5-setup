const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_257.clas.abap
class z2ui5_cl_demo_app_257 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_257';
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
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(60).set('abap2UI5 - Sample: Generic Tag with Different Configurations'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page.get().header_content()).get().button({id: new abap.types.String().set(`hint_icon`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('POPOVER')}))});
    await (await page.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(93).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.GenericTag/sample/sap.m.sample.GenericTag')});
    layout.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().vertical_layout({class: new abap.types.String().set(`sapUiContentPadding`), width: new abap.types.String().set(`100%`)})).get().grid({class: new abap.types.String().set(`sapUiSmallMarginBottom`), hspacing: new abap.types.String().set(`0`), vspacing: new abap.types.String().set(`0`), default_span: new abap.types.String().set(`L4 M6 S12`), width: new abap.types.String().set(`100%`)})).get().flex_box({class: new abap.types.String().set(`sapUiTinyMarginBottom`), direction: new abap.types.String().set(`Column`), fitcontainer: abap.builtin.abap_true, alignitems: new abap.types.String().set(`Start`), justifycontent: new abap.types.String().set(`Start`)})).get().text({text: new abap.types.String().set(`Generic Tag - KPI`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().generic_tag({text: new abap.types.String().set(`Project Cost`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Error`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().object_number({state: new abap.types.String().set(`Error`), emphasized: abap.builtin.abap_false, number: new abap.types.String().set(`3.5M`), unit: new abap.types.String().set(`EUR`)})).get().get_parent()).get().generic_tag({text: new abap.types.String().set(`Project Cost`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Warning`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().object_number({state: new abap.types.String().set(`Warning`), emphasized: abap.builtin.abap_false, number: new abap.types.String().set(`2.4M`), unit: new abap.types.String().set(`EUR`)})).get().get_parent()).get().generic_tag({text: new abap.types.String().set(`Project Cost`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Success`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().object_number({state: new abap.types.String().set(`Success`), emphasized: abap.builtin.abap_false, number: new abap.types.String().set(`1.6M`), unit: new abap.types.String().set(`EUR`)})).get().get_parent()).get().generic_tag({text: new abap.types.String().set(`PC`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Error`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().object_number({state: new abap.types.String().set(`Error`), emphasized: new abap.types.String().set(`false`), number: new abap.types.String().set(`35`), unit: new abap.types.String().set(`%`)})).get().get_parent()).get().generic_tag({text: new abap.types.String().set(`PC`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Warning`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().object_number({state: new abap.types.String().set(`Warning`), emphasized: abap.builtin.abap_false, number: new abap.types.String().set(`71`), unit: new abap.types.String().set(`%`)})).get().get_parent()).get().generic_tag({text: new abap.types.String().set(`PC`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Success`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().object_number({state: new abap.types.String().set(`Success`), emphasized: abap.builtin.abap_false, number: new abap.types.String().set(`96`), unit: new abap.types.String().set(`%`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Column`), fitcontainer: new abap.types.String().set(`true`), alignitems: new abap.types.String().set(`Start`), justifycontent: new abap.types.String().set(`Start`)})).get().text({text: new abap.types.String().set(`Generic Tag - KPI (error handling)`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().generic_tag({text: new abap.types.String().set(`Project Cost`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Error`), valuestate: new abap.types.String().set(`Error`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Column`), fitcontainer: abap.builtin.abap_true, alignitems: new abap.types.String().set(`Start`), justifycontent: new abap.types.String().set(`Start`)})).get().text({text: new abap.types.String().set(`Generic Tag - Situation`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().generic_tag({text: new abap.types.String().set(`Shortage Expected`), status: new abap.types.String().set(`Warning`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().get_parent()).get().generic_tag({text: new abap.types.String().set(`Material Shortage`), status: new abap.types.String().set(`Warning`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Column`), fitcontainer: abap.builtin.abap_true, alignitems: new abap.types.String().set(`Start`), justifycontent: new abap.types.String().set(`Start`)})).get().text({text: new abap.types.String().set(`Generic Tag with label`), id: new abap.types.String().set(`genericTagLabel`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().generic_tag({arialabelledby: new abap.types.String().set(`genericTagLabel`), text: new abap.types.String().set(`Project Cost`), design: new abap.types.String().set(`StatusIconHidden`), status: new abap.types.String().set(`Error`), class: new abap.types.String().set(`sapUiSmallMarginBottom`)})).get().object_number({state: new abap.types.String().set(`Error`), emphasized: new abap.types.String().set(`false`), number: new abap.types.String().set(`3.5M`), unit: new abap.types.String().set(`EUR`)})));
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique552 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique552, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique552, new abap.types.Character(7).set('POPOVER'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`hint_icon`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`Previews of the GenericTag control based on combinations of different sets of properties.`)});
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
abap.Classes['Z2UI5_CL_DEMO_APP_257'] = z2ui5_cl_demo_app_257;
z2ui5_cl_demo_app_257.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_257.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_257.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_257.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_257.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_257.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_257.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_257.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_257};
//# sourceMappingURL=z2ui5_cl_demo_app_257.clas.mjs.map