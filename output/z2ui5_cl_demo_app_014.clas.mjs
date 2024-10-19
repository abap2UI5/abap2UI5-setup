const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_014.clas.abap
class z2ui5_cl_demo_app_014 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_014';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL7": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL8": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL9": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL10": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL11": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL12": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TAB_LINE_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"RENDER_TAB_LINE": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel7 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel8 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel9 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel10 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel11 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel12 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_tab_line_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async render_tab_line() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let container = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let point = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    container.set((await (await (await view.get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - Visualization'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().tab_container()));
    tab.set((await container.get().tab({text: new abap.types.Character(10).set('Line Chart'), selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_tab_line_active}))})));
    grid.set((await tab.get().grid({default_span: new abap.types.Character(13).set('XL6 L6 M6 S12')})));
    await grid.get().link({text: new abap.types.Character(55).set('Go to the SAP Demos for Interactive Line Charts here...'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(145).set('https://sapui5.hana.ondemand.com/#/entity/sap.suite.ui.microchart.InteractiveLineChart/sample/sap.suite.ui.microchart.sample.InteractiveLineChart')});
    await (await (await (await grid.get().text({text: new abap.types.Character(30).set('Absolute and Percentage values'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().get()).get().layout_data()).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')});
    point.set((await (await (await (await grid.get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(6).set('Center'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().items()).get().interact_line_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('LINE_CHANGED')})), precedingpoint: new abap.types.Character(2).set('15'), succeddingpoint: new abap.types.Character(2).set('89')})).get().points()));
    await point.get().interact_line_chart_point({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel7})), label: new abap.types.Character(3).set('May'), value: new abap.types.Character(4).set('33.1'), secondarylabel: new abap.types.Character(2).set('Q2')});
    await point.get().interact_line_chart_point({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel8})), label: new abap.types.Character(4).set('June'), value: new abap.types.Character(2).set('12')});
    await point.get().interact_line_chart_point({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel9})), label: new abap.types.Character(4).set('July'), value: new abap.types.Character(4).set('51.4'), secondarylabel: new abap.types.Character(2).set('Q3')});
    await point.get().interact_line_chart_point({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel10})), label: new abap.types.Character(3).set('Aug'), value: new abap.types.Character(2).set('52')});
    await point.get().interact_line_chart_point({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel11})), label: new abap.types.Character(3).set('Sep'), value: new abap.types.Character(4).set('69.9')});
    await point.get().interact_line_chart_point({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel12})), label: new abap.types.Character(3).set('Oct'), value: new abap.types.Character(3).set('0.9'), secondarylabel: new abap.types.Character(2).set('Q4')});
    point.set((await (await (await (await grid.get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(5).set('Start'), class: new abap.types.Character(12).set('SpaceBetween')})).get().items()).get().interact_line_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('LINE_CHANGED')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('LINE_PRESS')})), precedingpoint: new abap.types.Character(3).set('-20')})).get().points()));
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('May'), value: new abap.types.Character(4).set('33.1'), displayedvalue: new abap.types.Character(5).set('33.1%'), secondarylabel: new abap.types.Character(4).set('2015')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(4).set('June'), value: new abap.types.Character(3).set('2.2'), displayedvalue: new abap.types.Character(4).set('2.2%'), secondarylabel: new abap.types.Character(4).set('2015')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(4).set('July'), value: new abap.types.Character(4).set('51.4'), displayedvalue: new abap.types.Character(5).set('51.4%'), secondarylabel: new abap.types.Character(4).set('2015')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('Aug'), value: new abap.types.Character(4).set('19.9'), displayedvalue: new abap.types.Character(5).set('19.9%')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('Sep'), value: new abap.types.Character(4).set('69.9'), displayedvalue: new abap.types.Character(5).set('69.9%')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('Oct'), value: new abap.types.Character(3).set('0.9'), displayedvalue: new abap.types.Character(4).set('9.9%')});
    point.set((await (await (await (await (await (await (await (await (await grid.get().vertical_layout()).get().layout_data({ns: new abap.types.Character(6).set('layout')})).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')})).get().get_parent()).get().text({text: new abap.types.Character(18).set('Preselected values'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(5).set('Start'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().items()).get().interact_line_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('LINE_CHANGED')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('LINE_PRESS')}))})).get().points()));
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('May'), value: new abap.types.Character(4).set('33.1'), displayedvalue: new abap.types.Character(5).set('33.1%'), selected: abap.builtin.abap_true});
    await point.get().interact_line_chart_point({label: new abap.types.Character(4).set('June'), value: new abap.types.Character(3).set('2.2'), displayedvalue: new abap.types.Character(4).set('2.2%')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(4).set('July'), value: new abap.types.Character(4).set('51.4'), displayedvalue: new abap.types.Character(5).set('51.4%')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('Aug'), value: new abap.types.Character(4).set('19.9'), displayedvalue: new abap.types.Character(5).set('19.9%'), selected: abap.builtin.abap_true});
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('Sep'), value: new abap.types.Character(4).set('69.9'), displayedvalue: new abap.types.Character(5).set('69.9%')});
    await point.get().interact_line_chart_point({label: new abap.types.Character(3).set('Oct'), value: new abap.types.Character(3).set('0.9'), displayedvalue: new abap.types.Character(4).set('9.9%')});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.render_tab_line();
    }
    let unique207 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique207, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_014'] = z2ui5_cl_demo_app_014;
z2ui5_cl_demo_app_014.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_014.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_014.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_014.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_014.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_014.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_014.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_014.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_014};
//# sourceMappingURL=z2ui5_cl_demo_app_014.clas.mjs.map