const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_053.clas.abap
class z2ui5_cl_demo_app_053 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_053';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_SEARCH_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_053=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_053=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_SEARCH": {"visibility": "O", "parameters": {}},
  "SET_DATA": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_search_value = new abap.types.String({qualifiedName: "STRING"});
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_053=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_053=>ty_t_table");
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.set_data();
      await this.view_display();
      return;
    }
    await this.on_event();
  }
  async on_event() {
    let unique253 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique253, new abap.types.Character(13).set('BUTTON_SEARCH')) || abap.compare.eq(unique253, new abap.types.Character(12).set('BUTTON_START'))) {
      await this.set_data();
      await this.z2ui5_set_search();
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique253, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(28).set('abap2UI5 - Search with Enter'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    vbox.set((await page.get().vbox()));
    await (await (await vbox.get().hbox()).get().search_field({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_search_value})), search: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_SEARCH')})), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_SEARCH')})), width: new abap.types.String().set(`17.5rem`), id: new abap.types.String().set(`SEARCH`)})).get().button({text: new abap.types.String().set(`Go`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`BUTTON_START`)})), type: new abap.types.String().set(`Emphasized`)});
    tab.set((await vbox.get().table({items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table}))})));
    lo_columns.set((await tab.get().columns()));
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Product`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Date`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Name`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Location`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Quantity`)});
    lo_cells.set((await (await tab.get().items()).get().column_list_item()));
    await lo_cells.get().text({text: new abap.types.String().set(`{PRODUCT}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{CREATE_DATE}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{CREATE_BY}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{STORAGE_LOCATION}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{QUANTITY}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_053=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_053=>ty_t_table");
    let temp2 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_053=>ty_s_tab", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().product.set(new abap.types.Character(5).set('table'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Peter`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product.set(new abap.types.Character(5).set('chair'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp2.get().create_by.set(new abap.types.String().set(`James`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product.set(new abap.types.Character(4).set('sofa'));
    temp2.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp2.get().create_by.set(new abap.types.String().set(`Simone`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product.set(new abap.types.Character(8).set('computer'));
    temp2.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Theo`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product.set(new abap.types.Character(7).set('printer'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().product.set(new abap.types.Character(6).set('table2'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Julia`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_table.set(temp1);
  }
  async z2ui5_set_search() {
    if (abap.compare.initial(this.mv_search_value) === false) {
      await abap.Classes['Z2UI5_CL_UTIL'].itab_filter_by_val({val: this.mv_search_value, tab: this.mt_table});
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_053'] = z2ui5_cl_demo_app_053;
z2ui5_cl_demo_app_053.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_053.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_053.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_053.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_053.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_053.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_053.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_053.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_053.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_053=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_053.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_053=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_053=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_053=>ty_t_table");
export {z2ui5_cl_demo_app_053};
//# sourceMappingURL=z2ui5_cl_demo_app_053.clas.mjs.map