const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_235.clas.abap
class z2ui5_cl_demo_app_235 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_235';
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
    let page_01 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let page_02 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page_01.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(52).set('abap2UI5 - Sample: Toolbar vs Bar vs OverflowToolbar'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    page_02.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page_01.get().page({title: new abap.types.String().set(`Bar can center a Title.`), titlelevel: new abap.types.String().set(`H2`), class: new abap.types.String().set(`sapUiContentPadding`), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().button({icon: new abap.types.String().set(`sap-icon://action`)})).get().get_parent()).get().sub_header()).get().toolbar()).get().button({type: new abap.types.String().set(`Back`), tooltip: new abap.types.String().set(`Back`)})).get().toolbar_spacer()).get().title({text: new abap.types.String().set(`Toolbar center`), level: new abap.types.String().set(`H3`)})).get().toolbar_spacer()).get().get_parent()).get().get_parent()).get().content()).get().message_strip({text: new abap.types.String().set(`A Toolbar's centering technique will be slightly off the center if there is a button on the left.`), class: new abap.types.String().set(`sapUiTinyMargin`)})).get().toolbar()).get().label({text: new abap.types.String().set(`Toolbar can shrink content in case of overflow.`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_false})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.String().set(`Accept`), type: new abap.types.String().set(`Accept`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_true})).get().get_parent()).get().get_parent()).get().label({text: new abap.types.String().set(`This is a long non-shrinkable label.`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_false})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.String().set(`Reject`), type: new abap.types.String().set(`Reject`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_true})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.String().set(`Big Big Big Big Big Big Big Big Button`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_true})).get().get_parent()).get().get_parent()).get().get_parent()).get().label()).get().bar()).get().content_left()).get().label({text: new abap.types.String().set(`Bar cannot really handle overflow it just cuts the content.`)})).get().get_parent()).get().content_middle()).get().button({text: new abap.types.String().set(`Accept`), type: new abap.types.String().set(`Accept`)})).get().label({text: new abap.types.String().set(`This is a long non-shrinkable label.`)})).get().button({text: new abap.types.String().set(`Reject`), type: new abap.types.String().set(`Reject`)})).get().button({text: new abap.types.String().set(`Edit`)})).get().button({text: new abap.types.String().set(`Big Big Big Big Big Big Big Big Button`)})).get().get_parent()).get().get_parent()).get().label()).get().overflow_toolbar()).get().label({text: new abap.types.String().set(`OverflowToolbar provides a See more (...) button for overflow.`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_false})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.String().set(`Accept`), type: new abap.types.String().set(`Accept`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_true})).get().get_parent()).get().get_parent()).get().label({text: new abap.types.String().set(`This is a long non-shrinkable label.`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_false})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.String().set(`Reject`), type: new abap.types.String().set(`Reject`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_true})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.String().set(`Big Big Big Big Big Big Big Big Button`)})).get().layout_data()).get().toolbar_layout_data({shrinkable: abap.builtin.abap_true})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().footer()).get().toolbar()));
    await client.get().z2ui5_if_client$view_display({val: (await page_02.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique530 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique530, new abap.types.Character(4).set('BACK'))) {
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
abap.Classes['Z2UI5_CL_DEMO_APP_235'] = z2ui5_cl_demo_app_235;
z2ui5_cl_demo_app_235.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_235.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_235.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_235.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_235.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_235.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_235.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_235.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_235};
//# sourceMappingURL=z2ui5_cl_demo_app_235.clas.mjs.map