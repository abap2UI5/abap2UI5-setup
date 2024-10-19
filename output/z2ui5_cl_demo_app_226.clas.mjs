const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_226.clas.abap
class z2ui5_cl_demo_app_226 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_226';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(42).set('abap2UI5 - Sample: Icon Tab Bar - Sub tabs'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    layout.set((await page.get().label({wrapping: new abap.types.String().set(`true`), text: new abap.types.String().set(`IconTabBar with filters with own content and sub tabs. The click area is split to allow the user to display the content or alternatively to expand/collapse the sub tabs.`), class: new abap.types.String().set(`sapUiSmallMargin`)})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await layout.get().icon_tab_bar({class: new abap.types.String().set(`sapUiResponsiveContentPadding`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`info`), text: new abap.types.String().set(`Info`)})).get().items()).get().icon_tab_filter({text: new abap.types.String().set(`Info one`)})).get().text({text: new abap.types.String().set(`Info one content goes here...`)})).get().text({text: new abap.types.String().set(`Select another sub tab to see its content...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Info two`)})).get().text({text: new abap.types.String().set(`Info two content goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Info three`)})).get().text({text: new abap.types.String().set(`Info three content goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Info four`)})).get().text({text: new abap.types.String().set(`Info four content goes here...`)})).get().get_parent()).get().get_parent()).get().text({text: new abap.types.String().set(`Info own content goes here...`)})).get().text({text: new abap.types.String().set(`Select a sub tab to see its content...`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`attachments`), text: new abap.types.String().set(`Attachments`)})).get().items()).get().icon_tab_filter({text: new abap.types.String().set(`Attachment one`)})).get().text({text: new abap.types.String().set(`Attachment one goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Attachment two`)})).get().text({text: new abap.types.String().set(`Attachment two goes here...`)})).get().get_parent()).get().get_parent()).get().text({text: new abap.types.String().set(`Attachments own content goes here...`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`notes`), text: new abap.types.String().set(`Notes`)})).get().items()).get().icon_tab_filter({text: new abap.types.String().set(`Note one`)})).get().text({text: new abap.types.String().set(`Note one goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Note two`)})).get().text({text: new abap.types.String().set(`Note two goes here...`)})).get().get_parent()).get().get_parent()).get().text({text: new abap.types.String().set(`Notes own content goes here...`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().label({wrapping: new abap.types.String().set(`true`), text: new abap.types.String().set(`IconTabBar with filters without own content - only sub tabs`), class: new abap.types.String().set(`sapUiSmallMargin`)})).get().icon_tab_bar({class: new abap.types.String().set(`sapUiResponsiveContentPadding`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`info`), text: new abap.types.String().set(`Info`)})).get().items()).get().icon_tab_filter({text: new abap.types.String().set(`Info one`)})).get().text({text: new abap.types.String().set(`Info one content goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Info two`)})).get().text({text: new abap.types.String().set(`Info two content goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Info three`)})).get().text({text: new abap.types.String().set(`Info three content goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Info four`)})).get().text({text: new abap.types.String().set(`Info four content goes here...`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`attachments`), text: new abap.types.String().set(`Attachments`)})).get().items()).get().icon_tab_filter({text: new abap.types.String().set(`Attachment one`)})).get().text({text: new abap.types.String().set(`Attachment one goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Attachment two`)})).get().text({text: new abap.types.String().set(`Attachment two goes here...`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`notes`), text: new abap.types.String().set(`Notes`)})).get().items()).get().icon_tab_filter({text: new abap.types.String().set(`Note one`)})).get().text({text: new abap.types.String().set(`Note one content goes here...`)})).get().get_parent()).get().icon_tab_filter({text: new abap.types.String().set(`Note two`)})).get().text({text: new abap.types.String().set(`Note two content goes here...`)})).get().get_parent()).get().get_parent();
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique521 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique521, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_226'] = z2ui5_cl_demo_app_226;
z2ui5_cl_demo_app_226.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_226.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_226.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_226.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_226.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_226.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_226.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_226.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_226};
//# sourceMappingURL=z2ui5_cl_demo_app_226.clas.mjs.map