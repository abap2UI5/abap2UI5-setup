const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_144.clas.abap
class z2ui5_cl_demo_app_144 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_144';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_144=>temp1_23c3e7b34e");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_VIEW": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_144=>temp1_23c3e7b34e");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async set_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp10 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {});
    let lr_row = new abap.types.DataReference(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {}));
    let lv_tabix = new abap.types.Integer({qualifiedName: "I"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {});
    let temp3 = new abap.types.Integer({qualifiedName: "I"});
    let temp4 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {});
    let temp5 = new abap.types.Integer({qualifiedName: "I"});
    let temp6 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {});
    let temp7 = new abap.types.Integer({qualifiedName: "I"});
    let temp8 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {});
    let temp9 = new abap.types.Integer({qualifiedName: "I"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp10.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(29).set('abap2UI5 - Binding Cell Level'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp10})));
    for await (const unique400 of abap.statements.loop(this.t_tab)) {
      lr_row.assign(unique400);
      lv_tabix.set(abap.builtin.sy.get().tabix);
      await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: lr_row.get().title, tab: this.t_tab, tab_index: lv_tabix}))});
      await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: lr_row.get().value, tab: this.t_tab, tab_index: lv_tabix}))});
    }
    tab.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().table({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab})), mode: new abap.types.Character(11).set('MultiSelect')})).get().header_toolbar()).get().overflow_toolbar()).get().title({text: new abap.types.Character(18).set('title of the table')})).get().get_parent()).get().get_parent()).get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Value')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().input({value: new abap.types.Character(7).set('{TITLE}')})).get().input({value: new abap.types.Character(7).set('{VALUE}')})));
    temp3.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.t_tab,{index: abap.IntegerFactory.get(1),
      into: temp2});
    abap.builtin.sy.get().tabix.set(temp3);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: temp2.get().title, tab: this.t_tab, tab_index: abap.IntegerFactory.get(1)}))});
    temp5.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.t_tab,{index: abap.IntegerFactory.get(1),
      into: temp4});
    abap.builtin.sy.get().tabix.set(temp5);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: temp4.get().value, tab: this.t_tab, tab_index: abap.IntegerFactory.get(1)}))});
    temp7.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.t_tab,{index: abap.IntegerFactory.get(2),
      into: temp6});
    abap.builtin.sy.get().tabix.set(temp7);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: temp6.get().title, tab: this.t_tab, tab_index: abap.IntegerFactory.get(2)}))});
    temp9.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.t_tab,{index: abap.IntegerFactory.get(2),
      into: temp8});
    abap.builtin.sy.get().tabix.set(temp9);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: temp8.get().value, tab: this.t_tab, tab_index: abap.IntegerFactory.get(2)}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp10 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_144=>temp1_23c3e7b34e");
    let temp11 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      const indexBackup1 = abap.builtin.sy.get().index.get();
      const unique401 = abap.IntegerFactory.get(1).get();
      for (let unique402 = 0; unique402 < unique401; unique402++) {
        abap.builtin.sy.get().index.set(unique402 + 1);
        abap.statements.clear(temp10);
        temp10.set(this.t_tab);
        temp11.get().title.set(new abap.types.Character(8).set('entry 01'));
        temp11.get().value.set(new abap.types.Character(3).set('red'));
        abap.statements.insertInternal({data: temp11, table: temp10});
        temp11.get().title.set(new abap.types.Character(8).set('entry 02'));
        temp11.get().value.set(new abap.types.Character(4).set('blue'));
        abap.statements.insertInternal({data: temp11, table: temp10});
        this.t_tab.set(temp10);
      }
      abap.builtin.sy.get().index.set(indexBackup1);
      await this.set_view();
    }
    let unique403 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique403, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    await client.get().z2ui5_if_client$view_model_update();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_144'] = z2ui5_cl_demo_app_144;
z2ui5_cl_demo_app_144.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_144.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_144.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_144.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_144.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_144.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_144.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_144.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_144.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_144.temp1_23c3e7b34e = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_144=>TY_ROW-VALUE"})}, "z2ui5_cl_demo_app_144=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_144=>temp1_23c3e7b34e");
export {z2ui5_cl_demo_app_144};
//# sourceMappingURL=z2ui5_cl_demo_app_144.clas.mjs.map