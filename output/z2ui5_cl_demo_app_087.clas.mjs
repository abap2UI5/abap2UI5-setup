const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_087.clas.abap
class z2ui5_cl_demo_app_087 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_087';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_087=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_087=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_087=>temp1_de99bde8a9");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_UI5": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"REFRESH_DATA": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_087=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_087=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_087=>temp1_de99bde8a9");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.check_ui5 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_key = new abap.types.String({qualifiedName: "STRING"});
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
  async refresh_data() {
    let ls_row = new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_087=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_087=>ty_row", undefined, {}, {});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique320 = abap.IntegerFactory.get(100).get();
    for (let unique321 = 0; unique321 < unique320; unique321++) {
      abap.builtin.sy.get().index.set(unique321 + 1);
      ls_row.get().count.set(abap.builtin.sy.get().index);
      ls_row.get().value.set(new abap.types.Character(3).set('red'));
      ls_row.get().descr.set(new abap.types.Character(21).set('this is a description'));
      ls_row.get().checkbox.set(abap.builtin.abap_true);
      ls_row.get().valuecolor.set(new abap.types.String().set(`Good`));
      abap.statements.insertInternal({data: ls_row, table: this.t_tab});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.refresh_data();
    }
    let unique322 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique322, new abap.types.Character(14).set('SORT_ASCENDING'))) {
      abap.statements.sort(this.t_tab,{by: [{component: "count"}]});
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(14).set('sort ascending')});
    } else if (abap.compare.eq(unique322, new abap.types.Character(15).set('SORT_DESCENDING'))) {
      abap.statements.sort(this.t_tab,{by: [{component: "count", descending: true}]});
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(15).set('sort descending')});
    } else if (abap.compare.eq(unique322, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(31).set('abap2UI5 - Table with Cell Copy'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    tab.set((await page.get().table({growing: abap.builtin.abap_true, growingthreshold: new abap.types.Character(2).set('20'), growingscrolltoload: abap.builtin.abap_true, items: (await client.get().z2ui5_if_client$_bind_edit({val: this.t_tab})), sticky: new abap.types.Character(27).set('ColumnHeaders,HeaderToolbar')})));
    await (await (await (await (await (await (await tab.get().header_toolbar()).get().toolbar()).get().title({text: new abap.types.Character(18).set('title of the table')})).get().button({text: new abap.types.Character(16).set('letf side button'), icon: new abap.types.Character(18).set('sap-icon://account'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SORT')}))})).get().toolbar_spacer()).get().button({icon: new abap.types.Character(26).set('sap-icon://sort-descending'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('SORT_DESCENDING')}))})).get().button({icon: new abap.types.Character(25).set('sap-icon://sort-ascending'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('SORT_ASCENDING')}))});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Color')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Info')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(8).set('Checkbox')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(7).set('Counter')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(18).set('Radial Micro Chart')});
    await (await (await (await (await (await (await (await tab.get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(7).set('{VALUE}')})).get().text({text: new abap.types.Character(6).set('{INFO}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().checkbox({selected: new abap.types.Character(10).set('{CHECKBOX}'), enabled: abap.builtin.abap_false})).get().text({text: new abap.types.Character(7).set('{COUNT}')});
    await tab.get().dependents();
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_087'] = z2ui5_cl_demo_app_087;
z2ui5_cl_demo_app_087.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_087.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_087.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_087.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_087.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_087.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_087.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_087.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_087.ty_row = new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_087=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_087=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_087.temp1_de99bde8a9 = abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_087=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_087=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_087=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_087=>temp1_de99bde8a9");
export {z2ui5_cl_demo_app_087};
//# sourceMappingURL=z2ui5_cl_demo_app_087.clas.mjs.map