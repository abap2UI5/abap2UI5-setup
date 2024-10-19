const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_045.clas.abap
class z2ui5_cl_demo_app_045 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_045';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_045=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_045=>temp1_f361827078");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INFO_FILTER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_045=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_045=>temp1_f361827078");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_info_filter = new abap.types.String({qualifiedName: "STRING"});
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
    let temp1 = new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_045=>ty_row", undefined, {}, {});
    let temp2 = new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-INFO"});
    let ls_row = new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_045=>ty_row", undefined, {}, {});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique240 = new abap.types.Integer().set(1000).get();
    for (let unique241 = 0; unique241 < unique240; unique241++) {
      abap.builtin.sy.get().index.set(unique241 + 1);
      abap.statements.clear(temp1);
      temp1.get().count.set(abap.builtin.sy.get().index);
      temp1.get().value.set(new abap.types.Character(3).set('red'));
      if (abap.compare.lt(abap.builtin.sy.get().index, abap.IntegerFactory.get(50))) {
        temp2.set(new abap.types.Character(9).set('completed'));
      } else {
        temp2.set(new abap.types.Character(11).set('uncompleted'));
      }
      temp1.get().info.set(temp2);
      temp1.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp1.get().checkbox.set(abap.builtin.abap_true);
      ls_row.set(temp1);
      abap.statements.insertInternal({data: ls_row, table: this.t_tab});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.refresh_data();
    }
    let unique242 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique242, new abap.types.Character(10).set('FLTER_INFO'))) {
      await this.refresh_data();
      if (abap.compare.ne(this.mv_info_filter, new abap.types.Character(1).set(''))) {
        await abap.statements.deleteInternal(this.t_tab,{where: async (I) => {return abap.compare.ne(I.info, this.mv_info_filter);}});
      }
    } else if (abap.compare.eq(unique242, new abap.types.Character(11).set('BUTTON_POST'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(23).set('button post was pressed')});
    } else if (abap.compare.eq(unique242, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(50).set('abap2UI5 - Scroll Container with Table and Toolbar'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().header_content()).get().link()).get().get_parent()));
    await (await (await (await (await (await page.get().simple_form({title: new abap.types.Character(10).set('Form Title'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(6).set('Filter')})).get().label({text: new abap.types.Character(4).set('info')})).get().input({value: (await client.get().z2ui5_if_client$_bind({val: this.mv_info_filter}))})).get().button({text: new abap.types.Character(6).set('filter'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('FLTER_INFO')}))});
    tab.set((await (await page.get().scroll_container({height: new abap.types.Character(3).set('70%'), vertical: abap.builtin.abap_true})).get().table({growing: abap.builtin.abap_true, growingthreshold: new abap.types.Character(2).set('20'), growingscrolltoload: abap.builtin.abap_true, items: (await client.get().z2ui5_if_client$_bind({val: this.t_tab})), sticky: new abap.types.Character(27).set('ColumnHeaders,HeaderToolbar')})));
    await (await (await tab.get().header_toolbar()).get().overflow_toolbar()).get().toolbar_spacer();
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Color')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Info')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(8).set('Checkbox')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(7).set('Counter')});
    await (await (await (await (await (await (await (await tab.get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(7).set('{VALUE}')})).get().text({text: new abap.types.Character(6).set('{INFO}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().checkbox({selected: new abap.types.Character(10).set('{CHECKBOX}'), enabled: abap.builtin.abap_false})).get().text({text: new abap.types.Character(7).set('{COUNT}')});
    await client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_045'] = z2ui5_cl_demo_app_045;
z2ui5_cl_demo_app_045.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_045.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_045.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_045.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_045.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_045.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_045.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_045.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_045.ty_row = new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_045=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_045.temp1_f361827078 = abap.types.TableFactory.construct(new abap.types.Structure({"count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-COUNT"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_045=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_045=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_045=>temp1_f361827078");
export {z2ui5_cl_demo_app_045};
//# sourceMappingURL=z2ui5_cl_demo_app_045.clas.mjs.map