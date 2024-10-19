const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_196.clas.abap
class z2ui5_cl_demo_app_196 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_196';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"IS_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SLIDER_VALUE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SHAPES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_196=>TY_SHAPE-ID"})}, "z2ui5_cl_demo_app_196=>ty_shape", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_196=>temp1_0d13b3c262");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"INITIALIZE": {"visibility": "I", "parameters": {}},
  "ON_EVENT": {"visibility": "I", "parameters": {}},
  "RENDER_SCREEN": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.is_initialized = new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN"});
    this.mv_slider_value = new abap.types.Integer({qualifiedName: "I"});
    this.mt_shapes = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_196=>TY_SHAPE-ID"})}, "z2ui5_cl_demo_app_196=>ty_shape", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_196=>temp1_0d13b3c262");
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
  async initialize() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_196=>TY_SHAPE-ID"})}, "z2ui5_cl_demo_app_196=>ty_shape", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_196=>temp1_0d13b3c262");
    let temp2 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_196=>TY_SHAPE-ID"})}, "z2ui5_cl_demo_app_196=>ty_shape", undefined, {}, {});
    this.mv_slider_value.set(abap.IntegerFactory.get(0));
    abap.statements.clear(temp1);
    temp2.get().id.set(new abap.types.String().set(`arrow_down`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`arrow_left`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`arrow_right`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`arrow_up`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`attention_1`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`attention_2`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`building`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`bulb`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`bull`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`calendar`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`car`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`cart`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`cereals`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`circle`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`clock`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`cloud`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`conveyor`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`desk`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`document`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`documents`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`dollar`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`donut`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`drop`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`envelope`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`euro`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`factory`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`female`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`fish`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`flag`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`folder_1`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`folder_2`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`gear`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`heart`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`honey`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`house`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`information`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`letter`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`lung`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`machine`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`male`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`pen`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`person`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`pin`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`plane`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`printer`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`progress`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`question`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`robot`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`sandclock`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`speed`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`stomach`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`success`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`tank_diesel`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`tank_lpg`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`thermo`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`tool`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`transfusion`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`travel`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`turnip`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`vehicle_construction`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`vehicle_tank`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`vehicle_tractor`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`vehicle_truck_1`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`vehicle_truck_2`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`vehicle_truck_3`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`warehouse`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_shapes.set(temp1);
  }
  async on_event() {
    let unique482 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique482, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async render_screen() {
    let lv_script = new abap.types.String({qualifiedName: "STRING"});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let panel = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let fb = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await view.get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`style`)})).get()._cc_plain_xml({val: abap.operators.concat(new abap.types.String().set(`.SICursorStyle:hover {`),abap.operators.concat(new abap.types.String().set(`  cursor: pointer;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.SIBorderStyle {`),abap.operators.concat(new abap.types.String().set(`  border: 1px solid #cccccc;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.SIPanelStyle .sapMPanelContent{`),abap.operators.concat(new abap.types.String().set(`  overflow: visible;`),new abap.types.String().set(`}`)))))))))});
    temp1.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.abap_false, ((await this.client.get().z2ui5_if_client$get())).get().check_launchpad_active)));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({showheader: temp1, title: new abap.types.Character(36).set('abap2UI5 - Status Indicators Library'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    panel.set((await page.get().panel({class: new abap.types.String().set(`sapUiResponsiveMargin SIPanelStyle`), width: new abap.types.String().set(`95%`)})));
    await panel.get().text({text: new abap.types.String().set(`Use the slider for adjusting the fill`)});
    await (await (await panel.get().slider({class: new abap.types.String().set(`sapUiLargeMarginBottom`), enabletickmarks: abap.builtin.abap_true, value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_slider_value}))})).get().get()).get().responsive_scale({tickmarksbetweenlabels: new abap.types.String().set(`10`)});
    fb.set((await panel.get().flex_box({wrap: new abap.types.String().set(`Wrap`), items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_shapes}))})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await fb.get().items()).get().flex_box({direction: new abap.types.String().set(`Column`), class: new abap.types.String().set(`sapUiTinyMargin SIBorderStyle`)})).get().items()).get().status_indicator({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_slider_value})), width: new abap.types.String().set(`120px`), height: new abap.types.String().set(`120px`), class: new abap.types.String().set(`sapUiTinyMargin SICursorStyle`)})).get().property_thresholds()).get().property_threshold({fillcolor: new abap.types.String().set(`Error`), tovalue: new abap.types.String().set(`25`)})).get().get_parent()).get().property_threshold({fillcolor: new abap.types.String().set(`Critical`), tovalue: new abap.types.String().set(`60`)})).get().get_parent()).get().property_threshold({fillcolor: new abap.types.String().set(`Good`), tovalue: new abap.types.String().set(`100`)})).get().get_parent()).get().get_parent()).get().shape_group()).get().library_shape({shapeid: new abap.types.String().set(`{ID}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.is_initialized, abap.builtin.abap_false)) {
      await this.initialize();
      await this.render_screen();
      this.is_initialized.set(abap.builtin.abap_true);
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_196'] = z2ui5_cl_demo_app_196;
z2ui5_cl_demo_app_196.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_196.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_196.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_196.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_196.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_196.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_196.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_196.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_196.ty_shape = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_196=>TY_SHAPE-ID"})}, "z2ui5_cl_demo_app_196=>ty_shape", undefined, {}, {});
z2ui5_cl_demo_app_196.temp1_0d13b3c262 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_196=>TY_SHAPE-ID"})}, "z2ui5_cl_demo_app_196=>ty_shape", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_196=>temp1_0d13b3c262");
export {z2ui5_cl_demo_app_196};
//# sourceMappingURL=z2ui5_cl_demo_app_196.clas.mjs.map