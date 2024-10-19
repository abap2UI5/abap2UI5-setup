const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_183.clas.abap
class z2ui5_cl_demo_app_183 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_183';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_183=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_183=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_183=>temp1_2eadad6e11");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_UI5": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SORTORDER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_183=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_183=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_183=>temp1_2eadad6e11");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.check_ui5 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_key = new abap.types.String({qualifiedName: "STRING"});
    this.sortorder = new abap.types.String({qualifiedName: "STRING"});
    this.sortorder.set(`None`);
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
    let ls_row = new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_183=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_183=>ty_row", undefined, {}, {});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique443 = abap.IntegerFactory.get(100).get();
    for (let unique444 = 0; unique444 < unique443; unique444++) {
      abap.builtin.sy.get().index.set(unique444 + 1);
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
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.refresh_data();
    }
    let unique445 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique445, new abap.types.Character(14).set('GET_OPENED_COL'))) {
      lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      return;
    } else if (abap.compare.eq(unique445, new abap.types.Character(6).set('ONSORT'))) {
      lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
    } else if (abap.compare.eq(unique445, new abap.types.Character(7).set('ONGROUP'))) {
    } else if (abap.compare.eq(unique445, new abap.types.Character(14).set('SORT_ASCENDING'))) {
      abap.statements.sort(this.t_tab,{by: [{component: "count"}]});
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(14).set('sort ascending')});
    } else if (abap.compare.eq(unique445, new abap.types.Character(15).set('SORT_DESCENDING'))) {
      abap.statements.sort(this.t_tab,{by: [{component: "count", descending: true}]});
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(15).set('sort descending')});
    } else if (abap.compare.eq(unique445, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(57).set('abap2UI5 - table with column menu (press a column header)'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    tab.set((await (await page.get().scroll_container({height: new abap.types.Character(3).set('70%'), vertical: abap.builtin.abap_true})).get().table({growing: abap.builtin.abap_true, growingthreshold: new abap.types.Character(2).set('20'), growingscrolltoload: abap.builtin.abap_true, items: (await client.get().z2ui5_if_client$_bind_edit({val: this.t_tab})), sticky: new abap.types.Character(27).set('ColumnHeaders,HeaderToolbar')})));
    await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().header_toolbar()).get().toolbar()).get().title({text: new abap.types.Character(18).set('title of the table')})).get().button({text: new abap.types.Character(16).set('letf side button'), icon: new abap.types.Character(18).set('sap-icon://account'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SORT')}))})).get().segmented_button({selected_key: this.mv_key})).get().items()).get().segmented_button_item({key: new abap.types.Character(4).set('BLUE'), icon: new abap.types.Character(17).set('sap-icon://accept'), text: new abap.types.Character(4).set('blue')})).get().segmented_button_item({key: new abap.types.Character(5).set('GREEN'), icon: new abap.types.Character(23).set('sap-icon://add-favorite'), text: new abap.types.Character(5).set('green')})).get().get_parent()).get().get_parent()).get().toolbar_spacer()).get().button({icon: new abap.types.Character(26).set('sap-icon://sort-descending'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('SORT_DESCENDING')}))})).get().button({icon: new abap.types.Character(25).set('sap-icon://sort-ascending'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('SORT_ASCENDING')}))});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`$event.mParameters.openBy.getId()`), table: temp1});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().dependents()).get().column_menu({id: new abap.types.String().set(`menu`), beforeopen: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`GET_OPENED_COL`), t_arg: temp1}))})).get().column_menu_quick_sort({change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('ONSORT')}))})).get().items({ns: new abap.types.String().set(`columnmenu`)})).get().column_menu_quick_sort_item({sortorder: (await client.get().z2ui5_if_client$_bind_edit({val: this.sortorder}))})).get().get_parent()).get().get_parent()).get().get_parent()).get().column_menu_quick_group({change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('ONGROUP')}))})).get().items({ns: new abap.types.String().set(`columnmenu`)})).get().column_menu_quick_group_item()).get().get_parent()).get().get_parent()).get().get_parent()).get().items({ns: new abap.types.String().set(`columnmenu`)})).get().column_menu_action_item({icon: new abap.types.String().set(`sap-icon://sort`), label: new abap.types.String().set(`Sort`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(16).set('ONSORTACTIONITEM')}))})).get().get_parent()).get().column_menu_action_item({icon: new abap.types.String().set(`sap-icon://group-2`), label: new abap.types.String().set(`Group`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('ONSGROUPACTIONITEM')}))})).get().get_parent()).get().column_menu_action_item({icon: new abap.types.String().set(`sap-icon://filter`), label: new abap.types.String().set(`Filter`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(19).set('ONSFILTERACTIONITEM')}))})).get().get_parent()).get().column_menu_action_item({icon: new abap.types.String().set(`sap-icon://table-column`), label: new abap.types.String().set(`Columns`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('ONSCOLUMNSACTIONITEM')}))});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column({headermenu: new abap.types.String().set(`menu`), id: new abap.types.String().set(`color_col`)})).get().text({text: new abap.types.Character(5).set('Color')})).get().get_parent()).get().column({headermenu: new abap.types.String().set(`menu`), id: new abap.types.String().set(`info_col`)})).get().text({text: new abap.types.Character(4).set('Info')})).get().get_parent()).get().column({headermenu: new abap.types.String().set(`menu`), id: new abap.types.String().set(`description_col`)})).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().column({headermenu: new abap.types.String().set(`menu`), id: new abap.types.String().set(`checkbox_col`)})).get().text({text: new abap.types.Character(8).set('Checkbox')})).get().get_parent()).get().column({headermenu: new abap.types.String().set(`menu`), id: new abap.types.String().set(`counter_col`)})).get().text({text: new abap.types.Character(7).set('Counter')})).get().get_parent()).get().column({headermenu: new abap.types.String().set(`menu`), id: new abap.types.String().set(`chart_col`)})).get().text({text: new abap.types.Character(18).set('Radial Micro Chart')});
    await (await (await (await (await (await (await (await tab.get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(7).set('{VALUE}')})).get().text({text: new abap.types.Character(6).set('{INFO}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().checkbox({selected: new abap.types.Character(10).set('{CHECKBOX}'), enabled: abap.builtin.abap_false})).get().text({text: new abap.types.Character(7).set('{COUNT}')});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_183'] = z2ui5_cl_demo_app_183;
z2ui5_cl_demo_app_183.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_183.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_183.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_183.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_183.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_183.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_183.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_183.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_183.ty_row = new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_183=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_183=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_183.temp1_2eadad6e11 = abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "percentage": new abap.types.Packed({length: 5, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_183=>ty_row-percentage"}), "valuecolor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_183=>TY_ROW-VALUECOLOR"})}, "z2ui5_cl_demo_app_183=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_183=>temp1_2eadad6e11");
export {z2ui5_cl_demo_app_183};
//# sourceMappingURL=z2ui5_cl_demo_app_183.clas.mjs.map