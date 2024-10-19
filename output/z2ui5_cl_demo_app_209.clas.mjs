const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_209.clas.abap
class z2ui5_cl_demo_app_209 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_209';
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
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(28).set('abap2UI5 - Sample: InfoLabel'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    layout.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().scroll_container({vertical: abap.builtin.abap_true, height: new abap.types.String().set(`100%`)})).get().flex_box({direction: new abap.types.String().set(`Column`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiMediumMargin`)})).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 1`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il1`), text: new abap.types.String().set(`2`), rendermode: new abap.types.String().set(`Narrow`), colorscheme: new abap.types.String().set(`1`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 2`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il2`), text: new abap.types.String().set(`5`), rendermode: new abap.types.String().set(`Narrow`), colorscheme: new abap.types.String().set(`2`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 3`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il3`), text: new abap.types.String().set(`12.5`), rendermode: new abap.types.String().set(`Narrow`), colorscheme: new abap.types.String().set(`3`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 4`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il4`), text: new abap.types.String().set(`2K`), rendermode: new abap.types.String().set(`Narrow`), colorscheme: new abap.types.String().set(`4`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 5`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il5`), text: new abap.types.String().set(`text info label`), rendermode: new abap.types.String().set(`Loose`), colorscheme: new abap.types.String().set(`5`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 6`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il6`), text: new abap.types.String().set(`just a long info label`), colorscheme: new abap.types.String().set(`6`), width: new abap.types.String().set(`140px`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 7`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il7`), text: new abap.types.String().set(`label shorter than width`), colorscheme: new abap.types.String().set(`7`), width: new abap.types.String().set(`250px`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 8`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il8`), text: new abap.types.String().set(`with icon`), colorscheme: new abap.types.String().set(`8`), icon: new abap.types.String().set(`sap-icon://home-share`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Color Scheme 9`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il9`), text: new abap.types.String().set(`in warehouse`), colorscheme: new abap.types.String().set(`9`)})).get().get_parent()).get().get_parent()).get().flex_box({direction: new abap.types.String().set(`Row`), alignitems: new abap.types.String().set(`Start`), class: new abap.types.String().set(`sapUiTinyMarginBottom`)})).get().text({text: new abap.types.String().set(`Any Color Scheme in Display Only Mode`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().info_label({id: new abap.types.String().set(`il10`), text: new abap.types.String().set(`display only in form`), colorscheme: new abap.types.String().set(`1`), displayonly: abap.builtin.abap_true})));
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique497 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique497, new abap.types.Character(4).set('BACK'))) {
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
abap.Classes['Z2UI5_CL_DEMO_APP_209'] = z2ui5_cl_demo_app_209;
z2ui5_cl_demo_app_209.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_209.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_209.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_209.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_209.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_209.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_209.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_209.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_209};
//# sourceMappingURL=z2ui5_cl_demo_app_209.clas.mjs.map