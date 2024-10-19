const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_016.clas.abap
class z2ui5_cl_demo_app_016 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_016';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL1": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL2": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL3": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TAB_BAR_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"RENDER_TAB_BAR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel1 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel2 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel3 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_tab_bar_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async render_tab_bar() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let container = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let bar = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.abap_false, ((await this.client.get().z2ui5_if_client$get())).get().check_launchpad_active)));
    container.set((await (await (await view.get().shell()).get().page({showheader: temp1, title: new abap.types.Character(24).set('abap2UI5 - Visualization'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().tab_container()));
    grid.set((await (await container.get().tab({text: new abap.types.Character(9).set('Bar Chart'), selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_tab_bar_active}))})).get().grid({default_span: new abap.types.Character(13).set('XL6 L6 M6 S12')})));
    await (await (await (await (await grid.get().link({text: new abap.types.Character(54).set('Go to the SAP Demos for Interactive bar Charts here...'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(143).set('https://sapui5.hana.ondemand.com/#/entity/sap.suite.ui.microchart.InteractiveBarChart/sample/sap.suite.ui.microchart.sample.InteractiveBarChart')})).get().text({text: new abap.types.Character(29).set('Absolute and Percentage value'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().get()).get().layout_data()).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')});
    bar.set((await (await (await (await grid.get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(6).set('Center'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().items()).get().interact_bar_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BAR_CHANGED')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BAR_CHANGED')})), labelwidth: new abap.types.Character(3).set('25%'), displayedbars: new abap.types.String().set(`4`)})).get().bars()));
    await bar.get().interact_bar_chart_bar({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel1})), label: new abap.types.Character(9).set('Product 1'), value: new abap.types.Character(2).set('10')});
    await bar.get().interact_bar_chart_bar({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel2})), label: new abap.types.Character(9).set('Product 2'), value: new abap.types.Character(2).set('20')});
    await bar.get().interact_bar_chart_bar({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel3})), label: new abap.types.Character(9).set('Product 3'), value: new abap.types.Character(2).set('70')});
    bar.set((await (await (await (await grid.get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(6).set('Center'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().items()).get().interact_bar_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BAR_CHANGED')}))})).get().bars()));
    await bar.get().interact_bar_chart_bar({label: new abap.types.Character(9).set('Product 1'), value: new abap.types.Character(2).set('10'), displayedvalue: new abap.types.Character(3).set('10%')});
    await bar.get().interact_bar_chart_bar({label: new abap.types.Character(9).set('Product 2'), value: new abap.types.Character(2).set('20'), displayedvalue: new abap.types.Character(3).set('20%')});
    await bar.get().interact_bar_chart_bar({label: new abap.types.Character(9).set('Product 3'), value: new abap.types.Character(2).set('70'), displayedvalue: new abap.types.Character(3).set('70%')});
    bar.set((await (await (await (await (await (await (await (await (await grid.get().vertical_layout()).get().layout_data({ns: new abap.types.Character(6).set('layout')})).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')})).get().get_parent()).get().text({text: new abap.types.Character(28).set('Positive and Negative values'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().flex_box({width: new abap.types.Character(5).set('20rem'), height: new abap.types.Character(5).set('10rem'), alignitems: new abap.types.Character(6).set('Center'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().items()).get().interact_bar_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BAR_CHANGED')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('BAR_PRESS')})), labelwidth: new abap.types.Character(3).set('25%')})).get().bars()));
    await bar.get().interact_bar_chart_bar({label: new abap.types.Character(9).set('Product 1'), value: new abap.types.Character(2).set('25')});
    await bar.get().interact_bar_chart_bar({label: new abap.types.Character(9).set('Product 2'), value: new abap.types.Character(3).set('-50')});
    await bar.get().interact_bar_chart_bar({label: new abap.types.Character(9).set('Product 3'), value: new abap.types.Character(4).set('-100')});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.render_tab_bar();
    }
    let unique209 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique209, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_016'] = z2ui5_cl_demo_app_016;
z2ui5_cl_demo_app_016.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_016.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_016.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_016.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_016.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_016.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_016.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_016.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_016};
//# sourceMappingURL=z2ui5_cl_demo_app_016.clas.mjs.map