const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_111.clas.abap
class z2ui5_cl_demo_app_111 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_111';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_SEARCH_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_111=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CREATE_DATE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CREATE_BY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_STORAGE_LOCATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_QUANTITY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_SEARCH": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "GET_CUSTOM_JS": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_search_value = new abap.types.String({qualifiedName: "STRING"});
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_111=>ty_t_table");
    this.mv_key = new abap.types.String({qualifiedName: "STRING"});
    this.mv_product = new abap.types.String({qualifiedName: "STRING"});
    this.mv_create_date = new abap.types.String({qualifiedName: "STRING"});
    this.mv_create_by = new abap.types.String({qualifiedName: "STRING"});
    this.mv_storage_location = new abap.types.String({qualifiedName: "STRING"});
    this.mv_quantity = new abap.types.String({qualifiedName: "STRING"});
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
      await client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POP_JS_LOADER'].factory({i_js: (await this.get_custom_js())}))});
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.z2ui5_view_display();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique344 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique344, new abap.types.Character(13).set('BUTTON_SEARCH')) || abap.compare.eq(unique344, new abap.types.Character(12).set('BUTTON_START'))) {
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique344, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_111=>ty_t_table");
    let temp2 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {});
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
    let temp3 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {});
    let lr_row = new abap.types.DataReference(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {}));
    let lv_row = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    if (abap.compare.initial(this.mv_search_value) === false) {
      for await (const unique345 of abap.statements.loop(this.mt_table)) {
        lr_row.assign(unique345);
        lv_row.set(new abap.types.String().set(``));
        lv_index.set(abap.IntegerFactory.get(1));
        const indexBackup1 = abap.builtin.sy.get().index.get();
        let unique346 = 1;
        while (true) {
          abap.builtin.sy.get().index.set(unique346++);
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
  async z2ui5_view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_title = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_fb = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let cont = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await this.client.get().z2ui5_if_client$view_display({val: (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`script`)})).get()._cc_plain_xml({val: new abap.types.String().set(`sap.z2ui5.InitSvm();`)})).get().stringify())});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page1.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(31).set('abap2UI5 - List Report Features'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    page.set((await page1.get().dynamic_page({headerexpanded: abap.builtin.abap_true, headerpinned: abap.builtin.abap_true})));
    header_title.set((await (await (await page.get().title({ns: new abap.types.Character(1).set('f')})).get().get()).get().dynamic_page_title()));
    await (await header_title.get().heading({ns: new abap.types.Character(1).set('f')})).get().smart_variant_management({id: new abap.types.String().set(`svm`), showexecuteonselection: abap.builtin.abap_true});
    await header_title.get().expanded_content({ns: new abap.types.Character(1).set('f')});
    await header_title.get().snapped_content({ns: new abap.types.Character(1).set('f')});
    lo_fb.set((await (await page.get().header()).get().dynamic_page_header({pinnable: abap.builtin.abap_true})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await lo_fb.get().filter_bar({id: new abap.types.String().set(`fbar`), persistencykey: new abap.types.String().set(`myPersKey`), usetoolbar: abap.builtin.abap_false, search: new abap.types.String().set(`sap.z2ui5.onSearch();`)})).get().filter_group_items()).get().filter_group_item({name: new abap.types.String().set(`PRODUCT`), label: new abap.types.String().set(`Product`), groupname: new abap.types.String().set(`group1`), visibleinfilterbar: abap.builtin.abap_true})).get().fb_control()).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_product})), suggest: abap.builtin.abap_true, suggestionitems: new abap.types.String().set(`{/EDIT/MT_TABLE}`), change: new abap.types.String().set(`sap.z2ui5.onChange();`)})).get().get()).get().suggestion_items()).get().item({text: new abap.types.String().set(`{PRODUCT}`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().filter_group_item({name: new abap.types.String().set(`CREATE_DATE`), label: new abap.types.String().set(`Create Date`), groupname: new abap.types.String().set(`group1`), visibleinfilterbar: abap.builtin.abap_true})).get().fb_control()).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_create_date})), change: new abap.types.String().set(`sap.z2ui5.onChange();`)})).get().get_parent()).get().get_parent()).get().filter_group_item({name: new abap.types.String().set(`CREATE_BY`), label: new abap.types.String().set(`Create By`), groupname: new abap.types.String().set(`group1`), visibleinfilterbar: abap.builtin.abap_true})).get().fb_control()).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_create_by})), change: new abap.types.String().set(`sap.z2ui5.onChange();`)})).get().get_parent()).get().get_parent()).get().filter_group_item({name: new abap.types.String().set(`STORAGE_LOCATION`), label: new abap.types.String().set(`Storage Location`), groupname: new abap.types.String().set(`group1`), visibleinfilterbar: abap.builtin.abap_true})).get().fb_control()).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_storage_location})), change: new abap.types.String().set(`sap.z2ui5.onChange();`)})).get().get_parent()).get().get_parent()).get().filter_group_item({name: new abap.types.String().set(`QUANTITY`), label: new abap.types.String().set(`Quantity`), groupname: new abap.types.String().set(`group1`), visibleinfilterbar: abap.builtin.abap_true})).get().fb_control()).get().input({suggest: abap.builtin.abap_true, suggestionitems: new abap.types.String().set(`{/EDIT/MT_TABLE}`), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_quantity})), change: new abap.types.String().set(`sap.z2ui5.onChange($event);`)})).get().get()).get().suggestion_items()).get().item({text: new abap.types.String().set(`{QUANTITY}`)})).get().get_parent()).get().get_parent()).get().get_parent();
    cont.set((await page.get().content({ns: new abap.types.Character(1).set('f')})));
    tab.set((await cont.get().table({id: new abap.types.String().set(`table1`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_table}))})));
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
  async get_custom_js() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`sap.z2ui5.InitSvm = () => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oView = sap.z2ui5.oView`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oSmartVariantManagement = oView.byId("svm");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oFilterBar = oView.byId("fbar");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var aData = _registerFetchData(oFilterBar);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` oFilterBar.registerFetchData( aData );`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` oFilterBar.registerApplyData( _registerApplyData(oFilterBar, aData));`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` oFilterBar.registerGetFiltersWithValues( _registerGetFiltersWithValues(oFilterBar));`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oPersInfo = new sap.ui.comp.smartvariants.PersonalizableInfo({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   type: "filterBar",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   keyName: "persistencyKey",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   dataSource: "",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   control: oFilterBar`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` oSmartVariantManagement.addPersonalizableControl(oPersInfo);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` oSmartVariantManagement.initialise(function () {oSmartVariantManagement.currentVariantSetModified(false);}, oFilterBar);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`_registerFetchData = (oFilterBar) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var aData = oFilterBar.getAllFilterItems().reduce(function (aResult, oFilterItem) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   aResult.push({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     groupName: oFilterItem.getGroupName(),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     fieldName: oFilterItem.getName(),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     fieldData: oFilterItem.getControl().getValue()`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   return aResult;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` }, []);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` return aData;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`_registerApplyData = (oFilterBar, aData) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` aData.forEach(function (oDataObject) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   var oControl = oFilterBar.determineControlByName(oDataObject.fieldName, oDataObject.groupName);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   oControl.setValue(oDataObject.fieldData);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`_registerGetFiltersWithValues = (oFilterBar) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var aFiltersWithValue = oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   var oControl = oFilterGroupItem.getControl();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   if (oControl &amp;&amp; oControl.getValue &amp;&amp; oControl.getValue().length > 0) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       aResult.push(oFilterGroupItem);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   return aResult;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` }, []);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` return aFiltersWithValue;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`sap.z2ui5.onSearch = () => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oView = sap.z2ui5.oView`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oFilterBar = oView.byId("fbar");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oTable = oView.byId("table1");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var aTableFilters = oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   var oControl = oFilterGroupItem.getControl(),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       aSelectedKey = oControl.getValue(),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       aFilters = return new sap.ui.model.Filter({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   path: oFilterGroupItem.getName(),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   operator: "Contains",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   value1: sSelectedKey`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` if (aSelectedKey.length > 0) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     aResult.push(new sap.ui.model.Filter({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   filters: aFilters,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   and: false`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                 }));`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` return aResult;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     }, []);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  oTable.getBinding("items").filter(aTableFilters);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`sap.z2ui5.onChange = (oEvent) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oView = sap.z2ui5.oView`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oFilterBar = oView.byId("fbar");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oSmartVariantManagement = oView.byId("svm");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` oSmartVariantManagement.currentVariantSetModified(true);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` oFilterBar.fireFilterChange(oEvent);`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`}`))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_111'] = z2ui5_cl_demo_app_111;
z2ui5_cl_demo_app_111.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_111.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_111.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_111.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_111.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_111.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_111.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_111.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_111.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_111.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_111=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_111=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_111=>ty_t_table");
export {z2ui5_cl_demo_app_111};
//# sourceMappingURL=z2ui5_cl_demo_app_111.clas.mjs.map