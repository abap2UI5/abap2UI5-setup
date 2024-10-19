const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_285.clas.abap
class z2ui5_cl_demo_app_285 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_285';
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
    page_01.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(49).set('abap2UI5 - Sample: Flexible sizing - Icon Tab Bar'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page_01.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page_01.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(101).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.Page/sample/sap.m.sample.PageListReportIconTabBar')});
    page_02.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page_01.get().page({title: new abap.types.String().set(`Title`), enablescrolling: abap.builtin.abap_true, class: new abap.types.String().set(`sapUiResponsivePadding--header sapUiResponsivePadding--footer`)})).get().content()).get().vbox({fitcontainer: abap.builtin.abap_true})).get().simple_form({id: new abap.types.String().set(`SimpleFormDisplay480`), editable: abap.builtin.abap_false, layout: new abap.types.String().set(`ResponsiveGridLayout`), title: new abap.types.String().set(`Address`), labelspanl: new abap.types.String().set(`4`), labelspanm: new abap.types.String().set(`4`), emptyspanl: new abap.types.String().set(`0`), emptyspanm: new abap.types.String().set(`0`), columnsl: new abap.types.String().set(`2`), columnsm: new abap.types.String().set(`2`)})).get().content({ns: new abap.types.String().set(`form`)})).get().title({ns: new abap.types.String().set(`core`), text: new abap.types.String().set(`Office`)})).get().label({text: new abap.types.String().set(`Name`)})).get().text({text: new abap.types.String().set(`Red Point Stores`)})).get().label({text: new abap.types.String().set(`Street/No.`)})).get().text({text: new abap.types.String().set(`Main St 1618`)})).get().label({text: new abap.types.String().set(`ZIP Code/City`)})).get().text({text: new abap.types.String().set(`31415 Maintown`)})).get().label({text: new abap.types.String().set(`Country`)})).get().text({text: new abap.types.String().set(`Germany`)})).get().title({ns: new abap.types.String().set(`core`), text: new abap.types.String().set(`Online`)})).get().label({text: new abap.types.String().set(`Web`)})).get().text({text: new abap.types.String().set(`http://www.sap.com`)})).get().label({text: new abap.types.String().set(`Twitter`)})).get().text({text: new abap.types.String().set(`@sap`)})).get().get_parent()).get().layout_data({ns: new abap.types.String().set(`form`)})).get().flex_item_data({shrinkfactor: new abap.types.String().set(`0`), backgrounddesign: new abap.types.String().set(`Solid`), styleclass: new abap.types.String().set(`sapContrastPlus`)})).get().get_parent()).get().get_parent()).get().icon_tab_bar({uppercase: abap.builtin.abap_true, expandable: abap.builtin.abap_false, applycontentpadding: abap.builtin.abap_true, stretchcontentheight: abap.builtin.abap_true, class: new abap.types.String().set(`sapUiResponsiveContentPadding`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`balances`), text: new abap.types.String().set(`Balances`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`compare`), text: new abap.types.String().set(`Compare`)})).get().get_parent()).get().get_parent()).get().content()).get().analytical_table({ns: new abap.types.String().set(`table`), selectionmode: new abap.types.String().set(`MultiToggle`)})).get().rowmode({ns: new abap.types.String().set(`table`)})).get().auto({ns: new abap.types.String().set(`trm`), rowcontentheight: new abap.types.String().set(`32`)})).get().get_parent()).get().get_parent()).get().toolbar({ns: new abap.types.String().set(`table`)})).get().overflow_toolbar()).get().toolbar_spacer()).get().search_field({width: new abap.types.String().set(`12rem`)})).get().toolbar_spacer({width: new abap.types.String().set(`1rem`)})).get().segmented_button()).get().items()).get().segmented_button_item({icon: new abap.types.String().set(`sap-icon://table-view`)})).get().segmented_button_item({icon: new abap.types.String().set(`sap-icon://bar-chart`)})).get().get_parent()).get().get_parent()).get().toolbar_spacer({width: new abap.types.String().set(`1rem`)})).get().button({icon: new abap.types.String().set(`sap-icon://group-2`), type: new abap.types.String().set(`Transparent`)})).get().button({icon: new abap.types.String().set(`sap-icon://action-settings`), type: new abap.types.String().set(`Transparent`)})).get().get_parent()).get().get_parent()).get().columns({ns: new abap.types.String().set(`table`)})).get().analytical_column({ns: new abap.types.String().set(`table`)})).get().get_parent()).get().analytical_column({ns: new abap.types.String().set(`table`)})).get().get_parent()).get().analytical_column({ns: new abap.types.String().set(`table`)})).get().get_parent()).get().analytical_column({ns: new abap.types.String().set(`table`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().layout_data()).get().flex_item_data({growfactor: new abap.types.String().set(`1`), basesize: new abap.types.String().set(`0%`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().content()).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Grouped View`)})).get().button({text: new abap.types.String().set(`Classical Table`)})));
    await client.get().z2ui5_if_client$view_display({val: (await page_02.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique582 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique582, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique582, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: abap.operators.concat(new abap.types.String().set(`This page shows flexible sizing with an Icon Tab Bar: `),abap.operators.concat(new abap.types.String().set(`The upper part extends with its content, but doesn't react to viewport changes. `),abap.operators.concat(new abap.types.String().set(`The Icon Tab Bar reacts to the viewport size. `),abap.operators.concat(new abap.types.String().set(`The table inside takes the available space. `),new abap.types.String().set(`If the minimum size of the table is reached, the page begins to scroll.`)))))});
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
abap.Classes['Z2UI5_CL_DEMO_APP_285'] = z2ui5_cl_demo_app_285;
z2ui5_cl_demo_app_285.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_285.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_285.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_285.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_285.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_285.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_285.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_285.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_285};
//# sourceMappingURL=z2ui5_cl_demo_app_285.clas.mjs.map