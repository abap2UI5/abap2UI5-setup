const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_100.clas.abap
class z2ui5_cl_demo_app_100 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_100';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_100=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS_STATE"})}, "Z2UI5_CL_DEMO_APP_100=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_100=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LV_SELKZ": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_VM_POPUP": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_100=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS_STATE"})}, "Z2UI5_CL_DEMO_APP_100=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_100=>ty_t_table");
    this.lv_selkz = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
      await this.z2ui5_set_data();
      await this.z2ui5_view_display();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique333 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique333, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_100=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS_STATE"})}, "Z2UI5_CL_DEMO_APP_100=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_100=>ty_t_table");
    let temp2 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_100=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS_STATE"})}, "Z2UI5_CL_DEMO_APP_100=>ty_s_tab", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().selkz.set(abap.builtin.abap_false);
    temp2.get().row_id.set(new abap.types.Character(1).set('1'));
    temp2.get().product.set(new abap.types.Character(5).set('table'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Olaf`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(new abap.types.Integer().set(400));
    temp2.get().meins.set(new abap.types.Character(2).set('ST'));
    temp2.get().price.set(new abap.types.Character(7).set('1000.50'));
    temp2.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp2.get().process.set(new abap.types.Character(2).set('10'));
    temp2.get().process_state.set(new abap.types.Character(4).set('None'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().selkz.set(abap.builtin.abap_false);
    temp2.get().row_id.set(new abap.types.Character(1).set('2'));
    temp2.get().product.set(new abap.types.Character(5).set('chair'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp2.get().create_by.set(new abap.types.String().set(`Karlo`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp2.get().quantity.set(abap.IntegerFactory.get(123));
    temp2.get().meins.set(new abap.types.Character(2).set('ST'));
    temp2.get().price.set(new abap.types.Character(7).set('2000.55'));
    temp2.get().waers.set(new abap.types.Character(3).set('USD'));
    temp2.get().process.set(new abap.types.Character(2).set('20'));
    temp2.get().process_state.set(new abap.types.Character(7).set('Warning'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().selkz.set(abap.builtin.abap_false);
    temp2.get().row_id.set(new abap.types.Character(1).set('3'));
    temp2.get().product.set(new abap.types.Character(4).set('sofa'));
    temp2.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp2.get().create_by.set(new abap.types.String().set(`Elin`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_002`));
    temp2.get().quantity.set(new abap.types.Integer().set(700));
    temp2.get().meins.set(new abap.types.Character(2).set('ST'));
    temp2.get().price.set(new abap.types.Character(7).set('3000.11'));
    temp2.get().waers.set(new abap.types.Character(3).set('CNY'));
    temp2.get().process.set(new abap.types.Character(2).set('30'));
    temp2.get().process_state.set(new abap.types.Character(7).set('Success'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().selkz.set(abap.builtin.abap_false);
    temp2.get().row_id.set(new abap.types.Character(1).set('4'));
    temp2.get().product.set(new abap.types.Character(8).set('computer'));
    temp2.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Theo`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_002`));
    temp2.get().quantity.set(abap.IntegerFactory.get(200));
    temp2.get().meins.set(new abap.types.Character(2).set('ST'));
    temp2.get().price.set(new abap.types.Character(7).set('4000.88'));
    temp2.get().waers.set(new abap.types.Character(3).set('USD'));
    temp2.get().process.set(new abap.types.Character(2).set('40'));
    temp2.get().process_state.set(new abap.types.Character(11).set('Information'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().selkz.set(abap.builtin.abap_false);
    temp2.get().row_id.set(new abap.types.Character(1).set('5'));
    temp2.get().product.set(new abap.types.Character(7).set('printer'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Renate`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_003`));
    temp2.get().quantity.set(abap.IntegerFactory.get(90));
    temp2.get().meins.set(new abap.types.Character(2).set('ST'));
    temp2.get().price.set(new abap.types.Character(7).set('5000.47'));
    temp2.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp2.get().process.set(new abap.types.Character(2).set('70'));
    temp2.get().process_state.set(new abap.types.Character(7).set('Warning'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().selkz.set(abap.builtin.abap_false);
    temp2.get().row_id.set(new abap.types.Character(1).set('6'));
    temp2.get().product.set(new abap.types.Character(6).set('table2'));
    temp2.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp2.get().create_by.set(new abap.types.String().set(`Angela`));
    temp2.get().storage_location.set(new abap.types.String().set(`AREA_003`));
    temp2.get().quantity.set(abap.IntegerFactory.get(110));
    temp2.get().meins.set(new abap.types.Character(2).set('ST'));
    temp2.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp2.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp2.get().process.set(new abap.types.Character(2).set('90'));
    temp2.get().process_state.set(new abap.types.Character(5).set('Error'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_table.set(temp1);
  }
  async z2ui5_view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(15).set('abap2UI5 - List'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link()).get().get_parent()));
    tab.set((await page.get().ui_table({rows: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table})), id: new abap.types.String().set(`persoTable`), editable: abap.builtin.abap_false, alternaterowcolors: abap.builtin.abap_true, rowactioncount: new abap.types.Character(1).set('2'), enablegrouping: abap.builtin.abap_false, fixedcolumncount: new abap.types.Character(1).set('1'), selectionmode: new abap.types.Character(4).set('None'), sort: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('SORT')})), filter: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('FILTER')})), customfilter: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('CUSTOMFILTER')}))})));
    await (await (await (await (await (await (await (await tab.get().ui_extension()).get().overflow_toolbar()).get().title({text: new abap.types.Character(8).set('Products')})).get().toolbar_spacer()).get().variant_management({showexecuteonselection: abap.builtin.abap_true})).get().variant_items()).get().variant_item({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`), executeonselection: abap.builtin.abap_true})).get().get_parent();
    lo_columns.set((await tab.get().ui_columns()));
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(4).set('4rem')})).get().checkbox({selected: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.lv_selkz})), enabled: abap.builtin.abap_true, select: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`SELKZ`)}))})).get().ui_template()).get().checkbox({selected: new abap.types.String().set(`{SELKZ}`)});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(4).set('5rem'), sortproperty: new abap.types.Character(6).set('ROW_ID'), filterproperty: new abap.types.Character(6).set('ROW_ID')})).get().text({text: new abap.types.String().set(`Index`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{ROW_ID}`)});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(5).set('11rem'), sortproperty: new abap.types.Character(7).set('PROCESS'), filterproperty: new abap.types.Character(7).set('PROCESS')})).get().text({text: new abap.types.String().set(`Process Indicator`)})).get().ui_template()).get().progress_indicator({class: new abap.types.Character(22).set('sapUiSmallMarginBottom'), percentvalue: new abap.types.String().set(`{PROCESS}`), displayvalue: new abap.types.Character(11).set('{PROCESS} %'), showvalue: new abap.types.Character(4).set('true'), state: new abap.types.Character(15).set('{PROCESS_STATE}')});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(5).set('11rem'), sortproperty: new abap.types.Character(7).set('PRODUCT'), filterproperty: new abap.types.Character(7).set('PRODUCT')})).get().text({text: new abap.types.String().set(`Product`)})).get().ui_template()).get().input({value: new abap.types.String().set(`{PRODUCT}`), editable: abap.builtin.abap_false});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(5).set('11rem'), sortproperty: new abap.types.Character(11).set('CREATE_DATE'), filterproperty: new abap.types.Character(11).set('CREATE_DATE')})).get().text({text: new abap.types.String().set(`Date`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{CREATE_DATE}`)});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(5).set('11rem'), sortproperty: new abap.types.Character(9).set('CREATE_BY'), filterproperty: new abap.types.Character(9).set('CREATE_BY')})).get().text({text: new abap.types.String().set(`Name`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{CREATE_BY}`)});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(5).set('11rem'), sortproperty: new abap.types.Character(16).set('STORAGE_LOCATION'), filterproperty: new abap.types.Character(16).set('STORAGE_LOCATION')})).get().text({text: new abap.types.String().set(`Location`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{STORAGE_LOCATION}`)});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(5).set('11rem'), sortproperty: new abap.types.Character(8).set('QUANTITY'), filterproperty: new abap.types.Character(8).set('QUANTITY')})).get().text({text: new abap.types.String().set(`Quantity`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{QUANTITY}`)});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(4).set('6rem'), sortproperty: new abap.types.Character(5).set('MEINS'), filterproperty: new abap.types.Character(5).set('MEINS')})).get().text({text: new abap.types.String().set(`Unit`)})).get().ui_template()).get().text({text: new abap.types.String().set(`{MEINS}`)});
    await (await (await (await lo_columns.get().ui_column({width: new abap.types.Character(5).set('11rem'), sortproperty: new abap.types.Character(5).set('PRICE'), filterproperty: new abap.types.Character(5).set('PRICE')})).get().text({text: new abap.types.String().set(`Price`)})).get().ui_template()).get().currency({value: new abap.types.String().set(`{PRICE}`), currency: new abap.types.String().set(`{WAERS}`)});
    abap.statements.clear(temp3);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${ROW_ID}`), table: temp3});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${ROW_ID}`), table: temp1});
    await (await (await (await (await (await lo_columns.get().get_parent()).get().ui_row_action_template()).get().ui_row_action()).get().ui_row_action_item({type: new abap.types.Character(10).set('Navigation'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(26).set('ROW_ACTION_ITEM_NAVIGATION'), t_arg: temp3}))})).get().get_parent()).get().ui_row_action_item({icon: new abap.types.Character(15).set('sap-icon://edit'), text: new abap.types.Character(4).set('Edit'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('ROW_ACTION_ITEM_EDIT'), t_arg: temp1}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_view_vm_popup() {
    let popup_sort = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup_sort.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup_sort.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_100'] = z2ui5_cl_demo_app_100;
z2ui5_cl_demo_app_100.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_100.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_100.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_100.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_100.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_100.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_100.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_100.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_100.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_100=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS_STATE"})}, "Z2UI5_CL_DEMO_APP_100=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_100.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_100=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_100=>TY_S_TAB-PROCESS_STATE"})}, "Z2UI5_CL_DEMO_APP_100=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_100=>ty_t_table");
export {z2ui5_cl_demo_app_100};
//# sourceMappingURL=z2ui5_cl_demo_app_100.clas.mjs.map