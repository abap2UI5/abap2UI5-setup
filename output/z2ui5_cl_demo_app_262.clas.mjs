const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_262.clas.abap
class z2ui5_cl_demo_app_262 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_262';
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
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(54).set('abap2UI5 - Sample: Numeric Content of Different Colors'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page.get().header_content()).get().button({id: new abap.types.String().set(`hint_icon`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('POPOVER')}))});
    await (await page.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(110).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.NumericContent/sample/sap.m.sample.NumericContentDifColors')});
    await page.get().numeric_content({value: new abap.types.String().set(`888.8`), scale: new abap.types.String().set(`MM`), class: new abap.types.String().set(`sapUiSmallMargin`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('press')})), truncatevalueto: new abap.types.String().set(`4`)});
    await page.get().numeric_content({value: new abap.types.String().set(`65.5`), scale: new abap.types.String().set(`MM`), valuecolor: new abap.types.String().set(`Good`), indicator: new abap.types.String().set(`Up`), class: new abap.types.String().set(`sapUiSmallMargin`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('press')}))});
    await page.get().numeric_content({value: new abap.types.String().set(`6666`), scale: new abap.types.String().set(`MM`), valuecolor: new abap.types.String().set(`Critical`), indicator: new abap.types.String().set(`Up`), class: new abap.types.String().set(`sapUiSmallMargin`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('press')}))});
    await page.get().numeric_content({value: new abap.types.String().set(`65.5`), scale: new abap.types.String().set(`MMill`), valuecolor: new abap.types.String().set(`Error`), indicator: new abap.types.String().set(`Down`), class: new abap.types.String().set(`sapUiSmallMargin`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('press')}))});
    await (await (await page.get().generic_tile({class: new abap.types.String().set(`sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout`), header: new abap.types.String().set(`Country-Specific Profit Margin`), subheader: new abap.types.String().set(`Expenses`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('press')}))})).get().tile_content({unit: new abap.types.String().set(`EUR`), footer: new abap.types.String().set(`Current Quarter`)})).get().numeric_content({scale: new abap.types.String().set(`M`), value: new abap.types.String().set(`1.96`), valuecolor: new abap.types.String().set(`Error`), indicator: new abap.types.String().set(`Up`), withmargin: abap.builtin.abap_false});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique558 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique558, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique558, new abap.types.Character(5).set('press'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`The numeric content is pressed.`)});
    } else if (abap.compare.eq(unique558, new abap.types.Character(7).set('POPOVER'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`hint_icon`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: abap.operators.concat(new abap.types.String().set(`Shows NumericContent including numbers, units of measurement, and status arrows indicating a trend. `),new abap.types.String().set(`The numbers can be colored according to their meaning.`))});
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
abap.Classes['Z2UI5_CL_DEMO_APP_262'] = z2ui5_cl_demo_app_262;
z2ui5_cl_demo_app_262.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_262.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_262.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_262.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_262.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_262.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_262.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_262.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_262};
//# sourceMappingURL=z2ui5_cl_demo_app_262.clas.mjs.map