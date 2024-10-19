const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_013.clas.abap
class z2ui5_cl_demo_app_013 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_013';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL4": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL5": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL6": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TAB_DONUT_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "TOTAL_COUNT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "COUNTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_013=>TY_CHART-TEXT"}), "percent": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_013=>ty_chart-percent"})}, "z2ui5_cl_demo_app_013=>ty_chart", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"RENDER_TAB_DONUT": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel4 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel5 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_sel6 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_tab_donut_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.total_count = new abap.types.Integer({qualifiedName: "I"});
    this.counts = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_013=>TY_CHART-TEXT"}), "percent": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_013=>ty_chart-percent"})}, "z2ui5_cl_demo_app_013=>ty_chart", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
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
  async render_tab_donut() {
    let container = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let seg = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let donut_chart = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    container.set((await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - Visualization'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().tab_container()));
    grid.set((await (await container.get().tab({text: new abap.types.Character(11).set('Donut Chart'), selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_tab_donut_active}))})).get().grid({default_span: new abap.types.Character(13).set('XL6 L6 M6 S12')})));
    await (await (await (await (await grid.get().link({text: new abap.types.Character(56).set('Go to the SAP Demos for Interactive Donut Charts here...'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(147).set('https://sapui5.hana.ondemand.com/#/entity/sap.suite.ui.microchart.InteractiveDonutChart/sample/sap.suite.ui.microchart.sample.InteractiveDonutChart')})).get().text({text: new abap.types.Character(14).set('Three segments'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().get()).get().layout_data()).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')});
    seg.set((await (await (await (await grid.get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(5).set('Start'), justifycontent: new abap.types.Character(12).set('SpaceBetween')})).get().items()).get().interact_donut_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('DONUT_CHANGED')}))})).get().segments()));
    await seg.get().interact_donut_chart_segment({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel4})), label: new abap.types.Character(11).set('Impl. Phase'), value: new abap.types.Character(4).set('40.0'), displayedvalue: new abap.types.Character(5).set('40.0%')});
    await seg.get().interact_donut_chart_segment({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel5})), label: new abap.types.Character(12).set('Design Phase'), value: new abap.types.Character(4).set('21.5'), displayedvalue: new abap.types.Character(5).set('21.5%')});
    await seg.get().interact_donut_chart_segment({selected: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_sel6})), label: new abap.types.Character(10).set('Test Phase'), value: new abap.types.Character(4).set('38.5'), displayedvalue: new abap.types.Character(5).set('38.5%')});
    await (await (await (await grid.get().text({text: new abap.types.Character(13).set('Four segments'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().get()).get().layout_data()).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')});
    seg.set((await (await (await (await grid.get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(5).set('Start'), justifycontent: new abap.types.Character(12).set('SpaceBetween')})).get().items()).get().interact_donut_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('DONUT_CHANGED')})), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('DONUT_PRESS')})), displayedsegments: new abap.types.Character(1).set('4')})).get().segments()));
    await seg.get().interact_donut_chart_segment({label: new abap.types.Character(12).set('Design Phase'), value: new abap.types.Character(4).set('32.0'), displayedvalue: new abap.types.Character(5).set('32.0%')});
    await seg.get().interact_donut_chart_segment({label: new abap.types.Character(20).set('Implementation Phase'), value: new abap.types.Character(2).set('28'), displayedvalue: new abap.types.Character(3).set('28%')});
    await seg.get().interact_donut_chart_segment({label: new abap.types.Character(10).set('Test Phase'), value: new abap.types.Character(2).set('25'), displayedvalue: new abap.types.Character(3).set('25%')});
    await seg.get().interact_donut_chart_segment({label: new abap.types.Character(12).set('Launch Phase'), value: new abap.types.Character(2).set('15'), displayedvalue: new abap.types.Character(3).set('15%')});
    await (await (await (await grid.get().text({text: new abap.types.Character(14).set('Error Messages'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().get()).get().layout_data()).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')});
    seg.set((await (await (await (await grid.get().flex_box({width: new abap.types.Character(5).set('22rem'), height: new abap.types.Character(5).set('13rem'), alignitems: new abap.types.Character(5).set('Start'), justifycontent: new abap.types.Character(12).set('SpaceBetween')})).get().items()).get().interact_donut_chart({selectionchanged: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('DONUT_CHANGED')})), showerror: abap.builtin.abap_true, errormessagetitle: new abap.types.Character(7).set('No data'), errormessage: new abap.types.Character(30).set('Currently no data is available')})).get().segments()));
    await seg.get().interact_donut_chart_segment({label: new abap.types.Character(20).set('Implementation Phase'), value: new abap.types.Character(4).set('40.0'), displayedvalue: new abap.types.Character(5).set('40.0%')});
    await seg.get().interact_donut_chart_segment({label: new abap.types.Character(12).set('Design Phase'), value: new abap.types.Character(4).set('21.5'), displayedvalue: new abap.types.Character(5).set('21.5%')});
    await seg.get().interact_donut_chart_segment({label: new abap.types.Character(10).set('Test Phase'), value: new abap.types.Character(4).set('38.5'), displayedvalue: new abap.types.Character(5).set('38.5%')});
    await (await (await (await grid.get().text({text: new abap.types.Character(23).set('Model Update Table Data'), class: new abap.types.Character(16).set('sapUiSmallMargin')})).get().get()).get().layout_data()).get().grid_data({span: new abap.types.Character(16).set('XL12 L12 M12 S12')});
    donut_chart.set((await (await (await (await (await grid.get().button({text: new abap.types.String().set(`update chart`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('UPDATE_CHART_DATA')}))})).get().get_parent()).get().flex_box({width: new abap.types.Character(5).set('30rem'), height: new abap.types.Character(5).set('18rem'), alignitems: new abap.types.Character(5).set('Start'), justifycontent: new abap.types.Character(12).set('SpaceBetween')})).get().items()).get().interact_donut_chart({displayedsegments: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.total_count})), segments: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.counts}))})));
    await donut_chart.get().interact_donut_chart_segment({label: new abap.types.String().set(`{TEXT}`), value: new abap.types.String().set(`{PERCENT}`), displayedvalue: new abap.types.String().set(`{PERCENT}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await container.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_013=>TY_CHART-TEXT"}), "percent": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_013=>ty_chart-percent"})}, "z2ui5_cl_demo_app_013=>ty_chart", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp2 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_013=>TY_CHART-TEXT"}), "percent": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_013=>ty_chart-percent"})}, "z2ui5_cl_demo_app_013=>ty_chart", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_013=>TY_CHART-TEXT"}), "percent": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_013=>ty_chart-percent"})}, "z2ui5_cl_demo_app_013=>ty_chart", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp4 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_013=>TY_CHART-TEXT"}), "percent": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_013=>ty_chart-percent"})}, "z2ui5_cl_demo_app_013=>ty_chart", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp1);
      temp2.get().text.set(new abap.types.Character(3).set('1st'));
      temp2.get().percent.set(new abap.types.Character(4).set('10.0'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().text.set(new abap.types.Character(3).set('2nd'));
      temp2.get().percent.set(new abap.types.Character(4).set('60.0'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().text.set(new abap.types.Character(3).set('3rd'));
      temp2.get().percent.set(new abap.types.Character(4).set('30.0'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.counts.set(temp1);
      this.total_count.set(abap.builtin.lines({val: this.counts}));
      await this.render_tab_donut();
    }
    let unique206 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique206, new abap.types.Character(17).set('UPDATE_CHART_DATA'))) {
      abap.statements.clear(this.counts);
      abap.statements.clear(temp3);
      temp4.get().text.set(new abap.types.Character(3).set('1st'));
      temp4.get().percent.set(new abap.types.Character(4).set('60.0'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().text.set(new abap.types.Character(3).set('2nd'));
      temp4.get().percent.set(new abap.types.Character(4).set('10.0'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().text.set(new abap.types.Character(3).set('3rd'));
      temp4.get().percent.set(new abap.types.Character(4).set('15.0'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().text.set(new abap.types.Character(3).set('4th'));
      temp4.get().percent.set(new abap.types.Character(4).set('15.0'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.counts.set(temp3);
      this.total_count.set(abap.builtin.lines({val: this.counts}));
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique206, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_013'] = z2ui5_cl_demo_app_013;
z2ui5_cl_demo_app_013.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_013.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_013.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_013.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_013.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_013.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_013.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_013.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_013.ty_chart = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_013=>TY_CHART-TEXT"}), "percent": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_013=>ty_chart-percent"})}, "z2ui5_cl_demo_app_013=>ty_chart", undefined, {}, {});
export {z2ui5_cl_demo_app_013};
//# sourceMappingURL=z2ui5_cl_demo_app_013.clas.mjs.map