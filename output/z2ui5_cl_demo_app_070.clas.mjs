const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_070.clas.abap
class z2ui5_cl_demo_app_070 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_070';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_MAPPING": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEARCH_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_070=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
  static METHODS = {"SET_SELKZ": {"visibility": "I", "parameters": {"IV_SELKZ": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_SEARCH": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_mapping = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    this.mv_search_value = new abap.types.String({qualifiedName: "STRING"});
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_070=>ty_t_table");
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
  async set_selkz(INPUT) {
    let iv_selkz = INPUT?.iv_selkz;
    if (iv_selkz?.getQualifiedName === undefined || iv_selkz.getQualifiedName() !== "ABAP_BOOL") { iv_selkz = undefined; }
    if (iv_selkz === undefined) { iv_selkz = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_selkz); }
    let fs_ls_table_ = new abap.types.FieldSymbol(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {}));
    for await (const unique283 of abap.statements.loop(this.mt_table)) {
      fs_ls_table_.assign(unique283);
      fs_ls_table_.get().selkz.set(iv_selkz);
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let ls_arg = new abap.types.String({qualifiedName: "STRING"});
    let unique284 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique284, new abap.types.Character(13).set('BUTTON_SEARCH')) || abap.compare.eq(unique284, new abap.types.Character(12).set('BUTTON_START'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(14).set('Search Entries')});
      await this.z2ui5_set_data();
      await this.z2ui5_set_search();
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique284, new abap.types.Character(4).set('SORT'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(10).set('Event SORT')});
    } else if (abap.compare.eq(unique284, new abap.types.Character(6).set('FILTER'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(12).set('Event FILTER')});
    } else if (abap.compare.eq(unique284, new abap.types.Character(5).set('SELKZ'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`'Event SELKZ' ${abap.templateFormatting(this.lv_selkz)} `)});
      await this.set_selkz({iv_selkz: this.lv_selkz});
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique284, new abap.types.Character(12).set('CUSTOMFILTER'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(18).set('Event CUSTOMFILTER')});
    } else if (abap.compare.eq(unique284, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique284, new abap.types.Character(7).set('ROWEDIT'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: ls_arg});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event ROWEDIT Row Index ${abap.templateFormatting(ls_arg)} `)});
      }
    } else if (abap.compare.eq(unique284, new abap.types.Character(26).set('ROW_ACTION_ITEM_NAVIGATION'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: ls_arg});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event ROW_ACTION_ITEM_NAVIGATION Row Index ${abap.templateFormatting(ls_arg)} `)});
      }
    } else if (abap.compare.eq(unique284, new abap.types.Character(20).set('ROW_ACTION_ITEM_EDIT'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: ls_arg});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event ROW_ACTION_ITEM_EDIT Row Index ${abap.templateFormatting(ls_arg)} `)});
      }
    }
  }
  async z2ui5_on_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_title = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_box = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let cont = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp4 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`EQ`));
    temp2.get().v.set(new abap.types.String().set(`={LOW}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`LT`));
    temp2.get().v.set(new abap.types.String().set(`<{LOW}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`LE`));
    temp2.get().v.set(new abap.types.String().set(`<={LOW}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`GT`));
    temp2.get().v.set(new abap.types.String().set(`>{LOW}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`GE`));
    temp2.get().v.set(new abap.types.String().set(`>={LOW}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`CP`));
    temp2.get().v.set(new abap.types.String().set(`*{LOW}*`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`BT`));
    temp2.get().v.set(new abap.types.String().set(`{LOW}...{HIGH}`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`NE`));
    temp2.get().v.set(new abap.types.String().set(`!(={LOW})`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`NE`));
    temp2.get().v.set(new abap.types.String().set(`!(<leer>)`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`<leer>`));
    temp2.get().v.set(new abap.types.String().set(`<leer>`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_mapping.set(temp1);
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp5.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page1.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(38).set('abap2UI5 - sap.ui.table.Table Features'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp5, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    page.set((await page1.get().dynamic_page({headerexpanded: abap.builtin.abap_true, headerpinned: abap.builtin.abap_true})));
    header_title.set((await (await (await page.get().title({ns: new abap.types.Character(1).set('f')})).get().get()).get().dynamic_page_title()));
    await (await (await header_title.get().heading({ns: new abap.types.Character(1).set('f')})).get().hbox()).get().title({text: new abap.types.String().set(`Search Field`)});
    await header_title.get().expanded_content({ns: new abap.types.Character(1).set('f')});
    await header_title.get().snapped_content({ns: new abap.types.Character(1).set('f')});
    lo_box.set((await (await (await (await page.get().header()).get().dynamic_page_header({pinnable: abap.builtin.abap_true})).get().flex_box({alignitems: new abap.types.String().set(`Start`), justifycontent: new abap.types.String().set(`SpaceBetween`)})).get().flex_box({alignitems: new abap.types.String().set(`Start`)})));
    await (await (await lo_box.get().vbox()).get().text({text: new abap.types.String().set(`Search`)})).get().search_field({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_search_value})), search: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_SEARCH')})), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_SEARCH')})), width: new abap.types.String().set(`17.5rem`), id: new abap.types.String().set(`SEARCH`)});
    await (await (await lo_box.get().get_parent()).get().hbox({justifycontent: new abap.types.String().set(`End`)})).get().button({text: new abap.types.String().set(`Go`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`BUTTON_START`)})), type: new abap.types.String().set(`Emphasized`)});
    cont.set((await page.get().content({ns: new abap.types.Character(1).set('f')})));
    tab.set((await cont.get().ui_table({rows: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table})), editable: abap.builtin.abap_false, alternaterowcolors: abap.builtin.abap_true, rowactioncount: new abap.types.Character(1).set('2'), enablegrouping: abap.builtin.abap_false, fixedcolumncount: new abap.types.Character(1).set('1'), selectionmode: new abap.types.Character(4).set('None'), sort: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('SORT')})), filter: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('FILTER')})), customfilter: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('CUSTOMFILTER')}))})));
    await (await (await tab.get().ui_extension()).get().overflow_toolbar()).get().title({text: new abap.types.Character(8).set('Products')});
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
    abap.statements.clear(temp4);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${ROW_ID}`), table: temp4});
    await (await (await (await (await (await lo_columns.get().get_parent()).get().ui_row_action_template()).get().ui_row_action()).get().ui_row_action_item({type: new abap.types.Character(10).set('Navigation'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(26).set('ROW_ACTION_ITEM_NAVIGATION'), t_arg: temp3}))})).get().get_parent()).get().ui_row_action_item({icon: new abap.types.Character(15).set('sap-icon://edit'), text: new abap.types.Character(4).set('Edit'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('ROW_ACTION_ITEM_EDIT'), t_arg: temp4}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_set_data() {
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_070=>ty_t_table");
    let temp6 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {});
    abap.statements.clear(temp5);
    temp6.get().selkz.set(abap.builtin.abap_false);
    temp6.get().row_id.set(new abap.types.Character(1).set('1'));
    temp6.get().product.set(new abap.types.Character(5).set('table'));
    temp6.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp6.get().create_by.set(new abap.types.String().set(`Olaf`));
    temp6.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp6.get().quantity.set(new abap.types.Integer().set(400));
    temp6.get().meins.set(new abap.types.Character(2).set('ST'));
    temp6.get().price.set(new abap.types.Character(7).set('1000.50'));
    temp6.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp6.get().process.set(new abap.types.Character(2).set('10'));
    temp6.get().process_state.set(new abap.types.Character(4).set('None'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().selkz.set(abap.builtin.abap_false);
    temp6.get().row_id.set(new abap.types.Character(1).set('2'));
    temp6.get().product.set(new abap.types.Character(5).set('chair'));
    temp6.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp6.get().create_by.set(new abap.types.String().set(`Karlo`));
    temp6.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp6.get().quantity.set(abap.IntegerFactory.get(123));
    temp6.get().meins.set(new abap.types.Character(2).set('ST'));
    temp6.get().price.set(new abap.types.Character(7).set('2000.55'));
    temp6.get().waers.set(new abap.types.Character(3).set('USD'));
    temp6.get().process.set(new abap.types.Character(2).set('20'));
    temp6.get().process_state.set(new abap.types.Character(7).set('Warning'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().selkz.set(abap.builtin.abap_false);
    temp6.get().row_id.set(new abap.types.Character(1).set('3'));
    temp6.get().product.set(new abap.types.Character(4).set('sofa'));
    temp6.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp6.get().create_by.set(new abap.types.String().set(`Elin`));
    temp6.get().storage_location.set(new abap.types.String().set(`AREA_002`));
    temp6.get().quantity.set(new abap.types.Integer().set(700));
    temp6.get().meins.set(new abap.types.Character(2).set('ST'));
    temp6.get().price.set(new abap.types.Character(7).set('3000.11'));
    temp6.get().waers.set(new abap.types.Character(3).set('CNY'));
    temp6.get().process.set(new abap.types.Character(2).set('30'));
    temp6.get().process_state.set(new abap.types.Character(7).set('Success'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().selkz.set(abap.builtin.abap_false);
    temp6.get().row_id.set(new abap.types.Character(1).set('4'));
    temp6.get().product.set(new abap.types.Character(8).set('computer'));
    temp6.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp6.get().create_by.set(new abap.types.String().set(`Theo`));
    temp6.get().storage_location.set(new abap.types.String().set(`AREA_002`));
    temp6.get().quantity.set(abap.IntegerFactory.get(200));
    temp6.get().meins.set(new abap.types.Character(2).set('ST'));
    temp6.get().price.set(new abap.types.Character(7).set('4000.88'));
    temp6.get().waers.set(new abap.types.Character(3).set('USD'));
    temp6.get().process.set(new abap.types.Character(2).set('40'));
    temp6.get().process_state.set(new abap.types.Character(11).set('Information'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().selkz.set(abap.builtin.abap_false);
    temp6.get().row_id.set(new abap.types.Character(1).set('5'));
    temp6.get().product.set(new abap.types.Character(7).set('printer'));
    temp6.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp6.get().create_by.set(new abap.types.String().set(`Renate`));
    temp6.get().storage_location.set(new abap.types.String().set(`AREA_003`));
    temp6.get().quantity.set(abap.IntegerFactory.get(90));
    temp6.get().meins.set(new abap.types.Character(2).set('ST'));
    temp6.get().price.set(new abap.types.Character(7).set('5000.47'));
    temp6.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp6.get().process.set(new abap.types.Character(2).set('70'));
    temp6.get().process_state.set(new abap.types.Character(7).set('Warning'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().selkz.set(abap.builtin.abap_false);
    temp6.get().row_id.set(new abap.types.Character(1).set('6'));
    temp6.get().product.set(new abap.types.Character(6).set('table2'));
    temp6.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp6.get().create_by.set(new abap.types.String().set(`Angela`));
    temp6.get().storage_location.set(new abap.types.String().set(`AREA_003`));
    temp6.get().quantity.set(abap.IntegerFactory.get(110));
    temp6.get().meins.set(new abap.types.Character(2).set('ST'));
    temp6.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp6.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp6.get().process.set(new abap.types.Character(2).set('90'));
    temp6.get().process_state.set(new abap.types.Character(5).set('Error'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    this.mt_table.set(temp5);
  }
  async z2ui5_set_search() {
    let temp7 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {});
    let lr_row = new abap.types.DataReference(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {}));
    let lv_row = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    if (abap.compare.initial(this.mv_search_value) === false) {
      for await (const unique285 of abap.statements.loop(this.mt_table)) {
        lr_row.assign(unique285);
        lv_row.set(new abap.types.String().set(``));
        lv_index.set(abap.IntegerFactory.get(1));
        const indexBackup1 = abap.builtin.sy.get().index.get();
        let unique286 = 1;
        while (true) {
          abap.builtin.sy.get().index.set(unique286++);
          abap.statements.assign({component: lv_index, target: fs_field_, source: lr_row.dereference()});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            break;
          }
          lv_row.set(abap.operators.concat(lv_row,fs_field_));
          lv_index.set(abap.operators.add(lv_index,abap.IntegerFactory.get(1)));
        }
        abap.builtin.sy.get().index.set(indexBackup1);
        if (abap.compare.ns(lv_row, this.mv_search_value)) {
          await abap.statements.deleteInternal(this.mt_table);
        }
      }
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_070'] = z2ui5_cl_demo_app_070;
z2ui5_cl_demo_app_070.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_070.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_070.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_070.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_070.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_070.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_070.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_070.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_070.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_070.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "row_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-ROW_ID"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-QUANTITY"}), "meins": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "price": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_070=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS"}), "process_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_TAB-PROCESS_STATE"})}, "z2ui5_cl_demo_app_070=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_070=>ty_t_table");
z2ui5_cl_demo_app_070.ty_s_filter_pop = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_070=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_demo_app_070=>ty_s_filter_pop", undefined, {}, {});
export {z2ui5_cl_demo_app_070};
//# sourceMappingURL=z2ui5_cl_demo_app_070.clas.mjs.map