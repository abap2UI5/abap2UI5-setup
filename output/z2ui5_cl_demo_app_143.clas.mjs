const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_143.clas.abap
class z2ui5_cl_demo_app_143 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_143';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"GT_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"field1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD1"}), "field2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD2"}), "field3": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD3"})}, "z2ui5_cl_demo_app_143=>t_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_143=>ty_t_data");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_ON_INIT": {"visibility": "U", "parameters": {}},
  "UI5_ON_EVENT": {"visibility": "U", "parameters": {}},
  "UI5_VIEW_MAIN_DISPLAY": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.gt_data = abap.types.TableFactory.construct(new abap.types.Structure({"field1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD1"}), "field2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD2"}), "field3": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD3"})}, "z2ui5_cl_demo_app_143=>t_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_143=>ty_t_data");
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async ui5_on_event() {
    let ok_code = new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-EVENT"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      ok_code.set(((await this.client.get().z2ui5_if_client$get())).get().event);
      let unique399 = ok_code;
      if (abap.compare.eq(unique399, new abap.types.Character(19).set('ROW_ACTION_ITEM_ADD'))) {
        await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(9).set('Something')});
        await this.client.get().z2ui5_if_client$view_model_update();
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        await this.client.get().z2ui5_if_client$message_box_display({text: (await x.get().if_message$get_text()), type: new abap.types.String().set(`error`)});
      } else {
        throw e;
      }
    }
  }
  async ui5_on_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"field1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD1"}), "field2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD2"}), "field3": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD3"})}, "z2ui5_cl_demo_app_143=>t_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_143=>ty_t_data");
    let temp2 = new abap.types.Structure({"field1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD1"}), "field2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD2"}), "field3": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD3"})}, "z2ui5_cl_demo_app_143=>t_data", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().field1.set(new abap.types.Character(2).set('21'));
    temp2.get().field2.set(new abap.types.Character(2).set('T1'));
    temp2.get().field3.set(new abap.types.Character(5).set('TEXT1'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().field1.set(new abap.types.Character(2).set('22'));
    temp2.get().field2.set(new abap.types.Character(2).set('T1'));
    temp2.get().field3.set(new abap.types.Character(5).set('TEXT1'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().field1.set(new abap.types.Character(2).set('23'));
    temp2.get().field2.set(new abap.types.Character(2).set('T2'));
    temp2.get().field3.set(new abap.types.Character(5).set('TEXT1'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().field1.set(new abap.types.Character(2).set('24'));
    temp2.get().field2.set(new abap.types.Character(2).set('T2'));
    temp2.get().field3.set(new abap.types.Character(5).set('TEXT2'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().field1.set(new abap.types.Character(2).set('25'));
    temp2.get().field2.set(new abap.types.Character(2).set('T3'));
    temp2.get().field3.set(new abap.types.Character(5).set('TEXT2'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.gt_data.set(temp1);
  }
  async ui5_view_main_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_title = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let cont = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page1.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(37).set('Table Filters Reset after view Update'), class: new abap.types.Character(19).set('sapUiContentPadding')})));
    page.set((await page1.get().dynamic_page({headerexpanded: abap.builtin.abap_true, headerpinned: abap.builtin.abap_true})));
    await (await page1.get()._z2ui5()).get().uitableext({tableid: new abap.types.String().set(`Table1`)});
    header_title.set((await (await (await page.get().title({ns: new abap.types.Character(1).set('f')})).get().get()).get().dynamic_page_title()));
    await (await (await header_title.get().heading({ns: new abap.types.Character(1).set('f')})).get().hbox()).get().title({text: new abap.types.String().set(`Table`)});
    await header_title.get().expanded_content({ns: new abap.types.Character(1).set('f')});
    await header_title.get().snapped_content({ns: new abap.types.Character(1).set('f')});
    cont.set((await page.get().content({ns: new abap.types.Character(1).set('f')})));
    abap.statements.clear(temp3);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${MATNR}`), table: temp3});
    tab.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await cont.get().vbox()).get().ui_table({rows: (await this.client.get().z2ui5_if_client$_bind({val: this.gt_data})), id: new abap.types.Character(6).set('Table1'), editable: abap.builtin.abap_false, alternaterowcolors: abap.builtin.abap_true, enablecellfilter: abap.builtin.abap_true, rowactioncount: new abap.types.Character(1).set('1'), visiblerowcount: new abap.types.Character(1).set('7'), enablegrouping: abap.builtin.abap_false, fixedcolumncount: new abap.types.Character(1).set('1'), selectionmode: new abap.types.Character(4).set('None')})).get().ui_columns()).get().ui_column({sortproperty: new abap.types.Character(6).set('FIELD1'), filterproperty: new abap.types.Character(6).set('FIELD1'), autoresizable: new abap.types.Character(4).set('true')})).get().text({text: new abap.types.String().set(`Field1`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{FIELD1}`)})).get().get_parent()).get().get_parent()).get().ui_column({sortproperty: new abap.types.Character(6).set('FIELD2'), filterproperty: new abap.types.Character(6).set('FIELD2'), autoresizable: new abap.types.Character(4).set('true')})).get().text({text: new abap.types.String().set(`Field2`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{FIELD2}`)})).get().get_parent()).get().get_parent()).get().ui_column({sortproperty: new abap.types.Character(6).set('FIELD3'), filterproperty: new abap.types.Character(6).set('FIELD3'), autoresizable: new abap.types.Character(4).set('true')})).get().text({text: new abap.types.String().set(`Field3`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{FIELD3}`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().ui_row_action_template()).get().ui_row_action()).get().ui_row_action_item({icon: new abap.types.Character(14).set('sap-icon://add'), text: new abap.types.Character(3).set('Add'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(19).set('ROW_ACTION_ITEM_ADD'), t_arg: temp3}))})));
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.ui5_on_init();
    }
    await this.ui5_view_main_display();
    await this.ui5_on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_143'] = z2ui5_cl_demo_app_143;
z2ui5_cl_demo_app_143.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_143.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_143.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_143.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_143.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_143.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_143.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_143.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_143.t_data = new abap.types.Structure({"field1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD1"}), "field2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD2"}), "field3": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD3"})}, "z2ui5_cl_demo_app_143=>t_data", undefined, {}, {});
z2ui5_cl_demo_app_143.ty_t_data = abap.types.TableFactory.construct(new abap.types.Structure({"field1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD1"}), "field2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD2"}), "field3": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_143=>T_DATA-FIELD3"})}, "z2ui5_cl_demo_app_143=>t_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_143=>ty_t_data");
export {z2ui5_cl_demo_app_143};
//# sourceMappingURL=z2ui5_cl_demo_app_143.clas.mjs.map