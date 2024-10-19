const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_010.clas.abap
class z2ui5_cl_demo_app_010 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_010';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let unique201 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique201, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(22).set('abap2UI5 - Demo Layout'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page.get().header_content()).get().button({text: new abap.types.Character(6).set('button')});
    await (await (await (await (await (await (await (await (await (await (await page.get().sub_header()).get().overflow_toolbar()).get().button({text: new abap.types.Character(6).set('button')})).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')})).get().toolbar_spacer()).get().text({text: new abap.types.Character(9).set('subheader')})).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('button')})).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')});
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(8).set('L4 M4 S4')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await (await grid.get().simple_form({title: new abap.types.Character(14).set('Grid width 33%')})).get().content({ns: new abap.types.Character(4).set('form')})).get().button({text: new abap.types.Character(6).set('button')})).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')});
    await (await (await (await (await grid.get().simple_form({title: new abap.types.Character(14).set('Grid width 33%')})).get().content({ns: new abap.types.Character(4).set('form')})).get().button({text: new abap.types.Character(6).set('button')})).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')});
    await (await (await (await (await grid.get().simple_form({title: new abap.types.Character(14).set('Grid width 33%')})).get().content({ns: new abap.types.Character(4).set('form')})).get().button({text: new abap.types.Character(6).set('button')})).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')});
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(11).set('L12 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await (await grid.get().simple_form({title: new abap.types.Character(15).set('grid width 100%')})).get().content({ns: new abap.types.Character(4).set('form')})).get().button({text: new abap.types.Character(6).set('button')})).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')});
    await (await (await (await (await (await (await (await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().button({text: new abap.types.Character(6).set('button')})).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')})).get().toolbar_spacer()).get().text({text: new abap.types.Character(6).set('footer')})).get().toolbar_spacer()).get().text({text: new abap.types.Character(4).set('text')})).get().link({text: new abap.types.Character(4).set('link'), href: new abap.types.Character(28).set('https://twitter.com/abap2UI5')})).get().button({text: new abap.types.Character(6).set('reject'), type: new abap.types.Character(6).set('Reject')})).get().button({text: new abap.types.Character(6).set('accept'), type: new abap.types.Character(7).set('Success')});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_010'] = z2ui5_cl_demo_app_010;
z2ui5_cl_demo_app_010.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_010.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_010.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_010.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_010.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_010.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_010.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_010.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_010};
//# sourceMappingURL=z2ui5_cl_demo_app_010.clas.mjs.map