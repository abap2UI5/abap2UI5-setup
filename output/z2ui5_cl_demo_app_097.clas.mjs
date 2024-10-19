const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_097.clas.abap
class z2ui5_cl_demo_app_097 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_097';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB2": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_LAYOUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ENABLED_01": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ENABLED_02": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY_MASTER": {"visibility": "O", "parameters": {}},
  "VIEW_DISPLAY_DETAIL": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.t_tab2 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.mv_layout = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_enabled_01 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_enabled_01.set('X');
    this.mv_check_enabled_02 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async view_display_detail() {
    let lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_view_nested.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await lo_view_nested.get().page({title: new abap.types.String().set(`Nested View`)})));
    tab.set((await page.get().ui_table({rows: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab2, view: this.client.get().z2ui5_if_client$cs_view.get().nested})), editable: abap.builtin.abap_false, alternaterowcolors: abap.builtin.abap_true, rowactioncount: new abap.types.Character(1).set('1'), enablegrouping: abap.builtin.abap_false, fixedcolumncount: new abap.types.Character(1).set('1'), selectionmode: new abap.types.Character(4).set('None'), sort: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('SORT')})), filter: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('FILTER')})), customfilter: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('CUSTOMFILTER')}))})));
    await (await (await tab.get().ui_extension()).get().overflow_toolbar()).get().title({text: new abap.types.Character(8).set('Products')});
    lo_columns.set((await tab.get().ui_columns()));
    await (await (await (await lo_columns.get().ui_column({sortproperty: new abap.types.Character(5).set('TITLE'), filterproperty: new abap.types.Character(5).set('TITLE')})).get().text({text: new abap.types.String().set(`Index`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{TITLE}`)});
    await (await (await (await lo_columns.get().ui_column({sortproperty: new abap.types.Character(5).set('DESCR'), filterproperty: new abap.types.Character(5).set('DESCR')})).get().text({text: new abap.types.String().set(`DESCR`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{DESCR}`)});
    await (await (await (await lo_columns.get().ui_column({sortproperty: new abap.types.Character(4).set('INFO'), filterproperty: new abap.types.Character(4).set('INFO')})).get().text({text: new abap.types.String().set(`INFO`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{INFO}`)});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${TITLE}`), table: temp1});
    await (await (await (await lo_columns.get().get_parent()).get().ui_row_action_template()).get().ui_row_action()).get().ui_row_action_item({icon: new abap.types.String().set(`sap-icon://delete`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('ROW_DELETE'), t_arg: temp1}))});
    await this.client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`test`), method_insert: new abap.types.Character(16).set('addMidColumnPage'), method_destroy: new abap.types.Character(23).set('removeAllMidColumnPages')});
  }
  async view_display_master() {
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let col_layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_master = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_list = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    page.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().page({title: new abap.types.Character(46).set('abap2UI5 - Master Detail Page with Nested View'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    await (await (await (await page.get().header_content()).get().link({text: new abap.types.Character(4).set('Demo'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://twitter.com/abap2UI5/status/1628701535222865922`)})).get().link()).get().get_parent();
    col_layout.set((await page.get().flexible_column_layout({layout: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_layout})), id: new abap.types.Character(4).set('test')})));
    lr_master.set((await col_layout.get().begin_column_pages()));
    lr_list.set((await (await lr_master.get().list({headertext: new abap.types.Character(10).set('List Ouput'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab, view: this.client.get().z2ui5_if_client$cs_view.get().main})), mode: new abap.types.String().set(`SingleSelectMaster`), selectionchange: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().standard_list_item({title: new abap.types.Character(7).set('{TITLE}'), description: new abap.types.Character(7).set('{DESCR}'), icon: new abap.types.Character(6).set('{ICON}'), info: new abap.types.Character(6).set('{INFO}'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('TEST')})), selected: new abap.types.String().set(`{SELECTED}`)})));
    await this.client.get().z2ui5_if_client$view_display({val: (await lr_list.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp4 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {});
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let ls_arg = new abap.types.String({qualifiedName: "STRING"});
    let lt_sel = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let ls_sel = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp3);
      temp4.get().title.set(new abap.types.Character(6).set('row_01'));
      temp4.get().info.set(new abap.types.Character(9).set('completed'));
      temp4.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp4.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().title.set(new abap.types.Character(6).set('row_02'));
      temp4.get().info.set(new abap.types.Character(11).set('incompleted'));
      temp4.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp4.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().title.set(new abap.types.Character(6).set('row_03'));
      temp4.get().info.set(new abap.types.Character(7).set('working'));
      temp4.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp4.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().title.set(new abap.types.Character(6).set('row_04'));
      temp4.get().info.set(new abap.types.Character(7).set('working'));
      temp4.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp4.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().title.set(new abap.types.Character(6).set('row_05'));
      temp4.get().info.set(new abap.types.Character(9).set('completed'));
      temp4.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp4.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().title.set(new abap.types.Character(6).set('row_06'));
      temp4.get().info.set(new abap.types.Character(9).set('completed'));
      temp4.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp4.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.t_tab.set(temp3);
      this.mv_layout.set(new abap.types.String().set(`OneColumn`));
      await this.view_display_master();
      await this.view_display_detail();
    }
    let unique329 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique329, new abap.types.Character(10).set('ROW_DELETE'))) {
      lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: ls_arg});
      if (abap.compare.initial(ls_arg) === false) {
        await abap.statements.deleteInternal(this.t_tab2,{where: async (I) => {return abap.compare.eq(I.title, ls_arg);}});
      }
      await client.get().z2ui5_if_client$nest_view_model_update();
    } else if (abap.compare.eq(unique329, new abap.types.String().set(`SELCHANGE`))) {
      lt_sel.set(this.t_tab);
      await abap.statements.deleteInternal(lt_sel,{where: async (I) => {return abap.compare.eq(I.selected, abap.builtin.abap_false);}});
      abap.statements.readTable(lt_sel,{index: abap.IntegerFactory.get(1),
        into: ls_sel});
      abap.statements.append({source: ls_sel, target: this.t_tab2});
      this.mv_layout.set(new abap.types.String().set(`TwoColumnsMidExpanded`));
      await client.get().z2ui5_if_client$nest_view_model_update();
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique329, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_097'] = z2ui5_cl_demo_app_097;
z2ui5_cl_demo_app_097.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_097.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_097.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_097.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_097.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_097.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_097.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_097.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_097.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_097=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_097=>ty_row", undefined, {}, {});
export {z2ui5_cl_demo_app_097};
//# sourceMappingURL=z2ui5_cl_demo_app_097.clas.mjs.map