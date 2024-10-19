const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_197.clas.abap
class z2ui5_cl_demo_app_197 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_197';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE_FULL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE_PRODUCTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_POPOVER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "U", "parameters": {}},
  "Z2UI5_DISPLAY_VIEW": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");
    this.mt_table_full = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");
    this.mt_table_products = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_check_popover = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_product = new abap.types.String({qualifiedName: "STRING"});
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
  async z2ui5_display_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let facet = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lo_cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(31).set('abap2UI5 - List Report Features'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`$event.mParameters.selectedItems`), table: temp1});
    facet.set((await (await (await page.get().facet_filter({id: new abap.types.String().set(`idFacetFilter`), type: new abap.types.String().set(`Light`), showpersonalization: abap.builtin.abap_true, showreset: abap.builtin.abap_true, reset: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`RESET`)}))})).get().facet_filter_list({title: new abap.types.String().set(`Products`), mode: new abap.types.String().set(`MultiSelect`), items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table_products})), listclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`FILTER`), t_arg: temp1}))})).get().facet_filter_item({text: new abap.types.String().set(`{PRODUCT}`)})));
    tab.set((await page.get().table({id: new abap.types.String().set(`tab`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_table}))})));
    lo_columns.set((await tab.get().columns()));
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Product`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Date`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Name`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Location`)});
    await (await lo_columns.get().column()).get().text({text: new abap.types.String().set(`Quantity`)});
    lo_cells.set((await (await tab.get().items()).get().column_list_item()));
    await lo_cells.get().link({id: new abap.types.String().set(`link`), text: new abap.types.Character(9).set('{PRODUCT}'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPOVER_DETAIL`)}))});
    await lo_cells.get().text({text: new abap.types.String().set(`{CREATE_DATE}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{CREATE_BY}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{STORAGE_LOCATION}`)});
    await lo_cells.get().text({text: new abap.types.String().set(`{QUANTITY}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    
    let lt_range = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp4");
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lv_json = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let l_members = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let l_member = new abap.types.String({qualifiedName: "STRING"});
    let lv_val = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    let ls_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_display_view();
      await this.z2ui5_set_data();
      return;
    }
    let unique483 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique483, new abap.types.Character(5).set('RESET'))) {
      this.mt_table.set(this.mt_table_full);
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique483, new abap.types.Character(6).set('FILTER'))) {
      lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_json.set(temp1);
      try {
        lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: lv_json})));
        l_members.set((await lo_json.get().z2ui5_if_ajson$members({iv_path: new abap.types.Character(1).set('/')})));
        for await (const unique484 of abap.statements.loop(l_members)) {
          l_member.set(unique484);
          lv_val.set((await lo_json.get().z2ui5_if_ajson$get({iv_path: abap.operators.concat(new abap.types.Character(1).set('/'),abap.operators.concat(l_member,new abap.types.Character(17).set('/mProperties/text')))})));
          abap.statements.clear(temp3);
          temp3.get().sign.set(new abap.types.Character(1).set('I'));
          temp3.get().option.set(new abap.types.Character(2).set('EQ'));
          temp3.get().low.set(lv_val);
          abap.statements.append({source: temp3, target: lt_range});
        }
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
      this.mt_table.set(this.mt_table_full);
      for await (const unique485 of abap.statements.loop(this.mt_table)) {
        ls_tab.set(unique485);
        if (!abap.compare.in(ls_tab.get().product, lt_range)) {
          await abap.statements.deleteInternal(this.mt_table);
        }
      }
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique483, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_set_data() {
    let temp4 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");
    let temp5 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {});
    abap.statements.clear(temp4);
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('table'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Peter`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(400));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(5).set('chair'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2022`));
    temp5.get().create_by.set(new abap.types.String().set(`James`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(123));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(4).set('sofa'));
    temp5.get().create_date.set(new abap.types.String().set(`01.05.2021`));
    temp5.get().create_by.set(new abap.types.String().set(`Simone`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(new abap.types.Integer().set(700));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(8).set('computer'));
    temp5.get().create_date.set(new abap.types.String().set(`27.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Theo`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(200));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(7).set('printer'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Hannah`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(90));
    abap.statements.insertInternal({data: temp5, table: temp4});
    temp5.get().product.set(new abap.types.Character(6).set('table2'));
    temp5.get().create_date.set(new abap.types.String().set(`01.01.2023`));
    temp5.get().create_by.set(new abap.types.String().set(`Julia`));
    temp5.get().storage_location.set(new abap.types.String().set(`AREA_001`));
    temp5.get().quantity.set(abap.IntegerFactory.get(110));
    abap.statements.insertInternal({data: temp5, table: temp4});
    this.mt_table.set(temp4);
    abap.statements.sort(this.mt_table,{by: [{component: "product"}]});
    this.mt_table_full.set(this.mt_table);
    this.mt_table_products.set(this.mt_table);
    await abap.statements.deleteInternal(this.mt_table_products,{adjacent: true,comparing: ['product']});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_197'] = z2ui5_cl_demo_app_197;
z2ui5_cl_demo_app_197.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_197.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_197.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_197.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_197.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_197.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_197.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_197.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_197.ty_s_tab = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_197.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-PRODUCT"}), "create_date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_DATE"}), "create_by": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-CREATE_BY"}), "storage_location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-STORAGE_LOCATION"}), "quantity": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_197=>TY_S_TAB-QUANTITY"})}, "z2ui5_cl_demo_app_197=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_197=>ty_t_table");
export {z2ui5_cl_demo_app_197};
//# sourceMappingURL=z2ui5_cl_demo_app_197.clas.mjs.map