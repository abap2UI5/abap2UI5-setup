const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_258.clas.abap
class z2ui5_cl_demo_app_258 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_258';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTED_MENU_ENTRY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "RENDER_MAIN_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "RENDER_SITE_CONTENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}, "SITE_CONTENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.selected_menu_entry = new abap.types.String({qualifiedName: "STRING"});
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
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique553 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique553, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique553, new abap.types.Character(9).set('MENU_HOME'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(19).set('Home Button pressed')});
      this.selected_menu_entry.set(new abap.types.Character(4).set('Home'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(11).set('MENU_HOME_1'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(25).set('Home Sub 1 Button pressed')});
      this.selected_menu_entry.set(new abap.types.Character(5).set('Home1'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(11).set('MENU_HOME_2'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(25).set('Home Sub 2 Button pressed')});
      this.selected_menu_entry.set(new abap.types.Character(5).set('Home2'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(11).set('MENU_HOME_3'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(25).set('Home Sub 3 Button pressed')});
      this.selected_menu_entry.set(new abap.types.Character(5).set('Home3'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(13).set('MENU_CUSTOMER'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(23).set('Customer Button pressed')});
      this.selected_menu_entry.set(new abap.types.Character(9).set('Customers'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(13).set('MENU_SUPPLIER'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(23).set('Supplier Button pressed')});
      this.selected_menu_entry.set(new abap.types.Character(9).set('Suppliers'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(9).set('MENU_FIX1'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(22).set('Fixed Button 1 pressed')});
      this.selected_menu_entry.set(new abap.types.Character(4).set('Fix1'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(9).set('MENU_FIX2'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(22).set('Fixed Button 2 pressed')});
      this.selected_menu_entry.set(new abap.types.Character(4).set('Fix2'));
    } else if (abap.compare.eq(unique553, new abap.types.Character(9).set('MENU_FIX3'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(22).set('Fixed Button 3 pressed')});
      this.selected_menu_entry.set(new abap.types.Character(4).set('Fix3'));
    }
  }
  async render_main_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let navlist = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let site_content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await view.get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`style`)})).get()._cc_plain_xml({val: abap.operators.concat(new abap.types.String().set(`.sapMPage>section { height: 100% }`),new abap.types.String().set(`#mainView--site_content { border-radius: 0.75em }`))});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await view.get().page({title: new abap.types.Character(34).set('abap2UI5 - Sample: Side Navigation'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), enablescrolling: abap.builtin.abap_false, class: new abap.types.Character(93).set('sapUiResponsivePadding--header sapUiResponsivePadding--content sapUiResponsivePadding--footer'), shownavbutton: temp1})));
    content.set((await page.get().flex_box({width: new abap.types.Character(4).set('100%'), height: new abap.types.Character(3).set('90%'), alignitems: new abap.types.Character(5).set('Start')})));
    navlist.set((await (await (await (await (await (await content.get().flex_box({width: new abap.types.Character(4).set('100%'), height: new abap.types.Character(4).set('100%'), direction: new abap.types.Character(6).set('Column')})).get().layout_data()).get().flex_item_data({growfactor: new abap.types.Character(1).set('1'), basesize: new abap.types.Character(1).set('0')})).get().get_parent()).get().side_navigation({id: new abap.types.Character(14).set('sideNavigation'), class: new abap.types.Character(18).set('sapUiTinyMarginTop'), selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selected_menu_entry}))})).get().navigation_list()));
    await (await (await (await (await navlist.get().navigation_list_item({text: new abap.types.Character(4).set('Home'), icon: new abap.types.Character(15).set('sap-icon://home'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('MENU_HOME')})), key: new abap.types.Character(4).set('Home')})).get().get_child()).get().navigation_list_item({text: new abap.types.Character(10).set('Home Sub 1'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('MENU_HOME_1')})), key: new abap.types.Character(5).set('Home1')})).get().navigation_list_item({text: new abap.types.Character(10).set('Home Sub 2'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('MENU_HOME_2')})), key: new abap.types.Character(5).set('Home2')})).get().navigation_list_item({text: new abap.types.Character(10).set('Home Sub 3'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('MENU_HOME_3')})), key: new abap.types.Character(5).set('Home3')});
    await navlist.get().navigation_list_item({text: new abap.types.Character(9).set('Customers'), icon: new abap.types.Character(19).set('sap-icon://customer'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('MENU_CUSTOMER')})), key: new abap.types.Character(9).set('Customers')});
    await navlist.get().navigation_list_item({text: new abap.types.Character(9).set('Suppliers'), icon: new abap.types.Character(19).set('sap-icon://supplier'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('MENU_SUPPLIER')})), key: new abap.types.Character(9).set('Suppliers')});
    await (await (await (await (await (await (await navlist.get().get_parent()).get().fixed_item()).get().navigation_list()).get().navigation_list_item({text: new abap.types.Character(13).set('Fixed Entry 1'), icon: new abap.types.Character(16).set('sap-icon://heart'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('MENU_FIX1')})), key: new abap.types.Character(4).set('Fix1')})).get().navigation_list_item({text: new abap.types.Character(13).set('Fixed Entry 2'), icon: new abap.types.Character(17).set('sap-icon://flight'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('MENU_FIX2')})), key: new abap.types.Character(4).set('Fix2')})).get().navigation_list_item({text: new abap.types.Character(13).set('Fixed Entry 3'), icon: new abap.types.Character(21).set('sap-icon://email-read'), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('MENU_FIX3')})), key: new abap.types.Character(4).set('Fix3')})).get().navigation_list_item({text: new abap.types.Character(4).set('Link'), icon: new abap.types.Character(21).set('sap-icon://chain-link'), href: new abap.types.Character(36).set('https://github.com/abap2UI5/abap2UI5')});
    site_content.set((await (await (await (await content.get().flex_box({id: new abap.types.Character(12).set('site_content'), class: new abap.types.Character(39).set('sapUiTinyMarginTop sapUiTinyMarginBegin'), width: new abap.types.Character(4).set('100%'), height: new abap.types.Character(4).set('100%'), backgrounddesign: new abap.types.Character(5).set('Solid'), alignitems: new abap.types.Character(6).set('Center'), justifycontent: new abap.types.Character(6).set('Center')})).get().layout_data()).get().flex_item_data({growfactor: new abap.types.Character(1).set('4'), backgrounddesign: new abap.types.Character(5).set('Solid')})).get().get_parent()));
    await this.me.get().render_site_content({client: client, site_content: site_content});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async render_site_content(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let site_content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (INPUT && INPUT.site_content) {site_content = INPUT.site_content;}
    let unique554 = this.selected_menu_entry;
    if (abap.compare.eq(unique554, new abap.types.Character(4).set('Home'))) {
      await site_content.get().text({text: new abap.types.Character(24).set('Welcome to the Home Page')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(5).set('Home1'))) {
      await site_content.get().text({text: new abap.types.Character(30).set('Welcome to the Home Sub Page 1')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(5).set('Home2'))) {
      await site_content.get().text({text: new abap.types.Character(30).set('Welcome to the Home Sub Page 2')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(5).set('Home3'))) {
      await site_content.get().text({text: new abap.types.Character(30).set('Welcome to the Home Sub Page 3')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(9).set('Customers'))) {
      await site_content.get().text({text: new abap.types.Character(29).set('Welcome to the Customers Page')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(9).set('Suppliers'))) {
      await site_content.get().text({text: new abap.types.Character(29).set('Welcome to the Suppliers Page')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(4).set('Fix1'))) {
      await site_content.get().text({text: new abap.types.Character(31).set('Welcome to the first fixed Page')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(4).set('Fix2'))) {
      await site_content.get().text({text: new abap.types.Character(32).set('Welcome to the second fixed Page')});
    } else if (abap.compare.eq(unique554, new abap.types.Character(4).set('Fix3'))) {
      await site_content.get().text({text: new abap.types.Character(31).set('Welcome to the third fixed Page')});
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.selected_menu_entry.set(new abap.types.Character(4).set('Home'));
    }
    await this.on_event({client: client});
    await this.render_main_view({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_258'] = z2ui5_cl_demo_app_258;
z2ui5_cl_demo_app_258.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_258.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_258.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_258.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_258.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_258.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_258.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_258.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_258};
//# sourceMappingURL=z2ui5_cl_demo_app_258.clas.mjs.map