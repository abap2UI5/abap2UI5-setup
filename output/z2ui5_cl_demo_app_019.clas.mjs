const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_019.clas.abap
class z2ui5_cl_demo_app_019 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_019';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_019=>temp1_49ac77ef2f");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB_SEL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_019=>temp2_49ac77ef2f");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEL_MODE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_019=>temp1_49ac77ef2f");
    this.t_tab_sel = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_019=>temp2_49ac77ef2f");
    this.mv_sel_mode = new abap.types.String({qualifiedName: "STRING"});
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_019=>temp1_49ac77ef2f");
    let temp2 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.mv_sel_mode.set(new abap.types.Character(4).set('None'));
      abap.statements.clear(temp1);
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().title.set(new abap.types.Character(8).set('title_01'));
      temp2.get().value.set(new abap.types.Character(8).set('value_01'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('title_02'));
      temp2.get().value.set(new abap.types.Character(8).set('value_02'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('title_03'));
      temp2.get().value.set(new abap.types.Character(8).set('value_03'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('title_04'));
      temp2.get().value.set(new abap.types.Character(8).set('value_04'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('title_05'));
      temp2.get().value.set(new abap.types.Character(8).set('value_05'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.t_tab.set(temp1);
    }
    let unique212 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique212, new abap.types.Character(21).set('BUTTON_SEGMENT_CHANGE'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Selection Mode changed`)});
    } else if (abap.compare.eq(unique212, new abap.types.Character(15).set('BUTTON_READ_SEL'))) {
      this.t_tab_sel.set(this.t_tab);
      await abap.statements.deleteInternal(this.t_tab_sel,{where: async (I) => {return abap.compare.ne(I.selkz, abap.builtin.abap_true);}});
    } else if (abap.compare.eq(unique212, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp3.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(47).set('abap2UI5 - Table with different Selection Modes'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp3})));
    await (await (await (await (await (await (await (await (await page.get().segmented_button({selected_key: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_sel_mode})), selection_change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('BUTTON_SEGMENT_CHANGE')}))})).get().get()).get().items()).get().get()).get().segmented_button_item({key: new abap.types.Character(4).set('None'), text: new abap.types.Character(4).set('None')})).get().segmented_button_item({key: new abap.types.Character(12).set('SingleSelect'), text: new abap.types.Character(12).set('SingleSelect')})).get().segmented_button_item({key: new abap.types.Character(16).set('SingleSelectLeft'), text: new abap.types.Character(16).set('SingleSelectLeft')})).get().segmented_button_item({key: new abap.types.Character(18).set('SingleSelectMaster'), text: new abap.types.Character(18).set('SingleSelectMaster')})).get().segmented_button_item({key: new abap.types.Character(11).set('MultiSelect'), text: new abap.types.Character(11).set('MultiSelect')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().table({headertext: new abap.types.Character(5).set('Table'), mode: this.mv_sel_mode, items: (await client.get().z2ui5_if_client$_bind_edit({val: this.t_tab}))})).get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Value')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().text({text: new abap.types.Character(7).set('{TITLE}')})).get().text({text: new abap.types.Character(7).set('{VALUE}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().table({items: (await client.get().z2ui5_if_client$_bind({val: this.t_tab_sel}))})).get().header_toolbar()).get().overflow_toolbar()).get().title({text: new abap.types.Character(16).set('Selected Entries')})).get().button({icon: new abap.types.Character(20).set('sap-icon://pull-down'), text: new abap.types.Character(21).set('copy selected entries'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_READ_SEL')}))})).get().get_parent()).get().get_parent()).get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Value')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(7).set('{TITLE}')})).get().text({text: new abap.types.Character(7).set('{VALUE}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_019'] = z2ui5_cl_demo_app_019;
z2ui5_cl_demo_app_019.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_019.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_019.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_019.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_019.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_019.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_019.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_019.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_019.ty_row = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_019.temp1_49ac77ef2f = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_019=>temp1_49ac77ef2f");
z2ui5_cl_demo_app_019.temp2_49ac77ef2f = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_019=>TY_ROW-DESCR"})}, "Z2UI5_CL_DEMO_APP_019=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_019=>temp2_49ac77ef2f");
export {z2ui5_cl_demo_app_019};
//# sourceMappingURL=z2ui5_cl_demo_app_019.clas.mjs.map