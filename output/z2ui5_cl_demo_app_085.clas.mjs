const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_085.clas.abap
class z2ui5_cl_demo_app_085 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_085';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE_SUPPLIER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table_supplier");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SEARCH_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "LV_LAYOUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "LS_DETAIL": {"type": () => {return new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "LV_SORT_DESC": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "C_PIC_URL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "LS_DETAIL_SUPPLIER": {"type": () => {return new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "CHECK_DETAIL_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SORT": {"visibility": "I", "parameters": {}},
  "VIEW_DISPLAY_MASTER": {"visibility": "O", "parameters": {}},
  "VIEW_DISPLAY_DETAIL": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_SEARCH": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table");
    this.mt_table_supplier = abap.types.TableFactory.construct(new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table_supplier");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_search_value = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.lv_layout = new abap.types.String({qualifiedName: "STRING"});
    this.ls_detail = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {});
    this.lv_sort_desc = new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN"});
    this.lv_sort_desc.set('X');
    this.c_pic_url = new abap.types.String({qualifiedName: "STRING"});
    this.c_pic_url.set('https://sapui5.hana.ondemand.com/sdk/test-resources/sap/ui/documentation/sdk/images/');
    this.ls_detail_supplier = new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {});
    this.check_detail_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async sort() {
    if (abap.compare.eq(this.lv_sort_desc, abap.builtin.abap_true)) {
      abap.statements.sort(this.mt_table,{by: [{component: "productid"}]});
      this.lv_sort_desc.set(abap.builtin.abap_false);
    } else {
      abap.statements.sort(this.mt_table,{by: [{component: "productid", descending: true}]});
      this.lv_sort_desc.set(abap.builtin.abap_true);
    }
  }
  async view_display_detail() {
    let lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_title = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let header_content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let sections = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_view_nested.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await lo_view_nested.get().object_page_layout({showtitleinheadercontent: abap.builtin.abap_true, showeditheaderbutton: abap.builtin.abap_true, editheaderbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('EDIT_HEADER_PRESS')})), uppercaseanchorbar: abap.builtin.abap_false})));
    header_title.set((await (await page.get().header_title()).get().object_page_dyn_header_title()));
    await (await (await header_title.get().expanded_heading()).get().hbox()).get().info_label({text: abap.operators.concat(new abap.types.String().set(`Product Id `),(await this.client.get().z2ui5_if_client$_bind_local({val: this.ls_detail.get().productid}))), colorscheme: new abap.types.Character(1).set('9'), width: new abap.types.Character(5).set('200px'), icon: new abap.types.Character(21).set('sap-icon://home-share')});
    await (await (await (await header_title.get().snapped_heading()).get().flex_box({alignitems: new abap.types.String().set(`Center`)})).get().avatar({src: abap.operators.concat(this.c_pic_url,this.ls_detail.get().pic), class: new abap.types.Character(18).set('sapUiTinyMarginEnd')})).get().info_label({text: abap.operators.concat(new abap.types.String().set(`Product Id `),(await this.client.get().z2ui5_if_client$_bind_local({val: this.ls_detail.get().productid}))), colorscheme: new abap.types.Character(1).set('9'), width: new abap.types.Character(5).set('200px'), icon: new abap.types.Character(21).set('sap-icon://home-share')});
    await (await header_title.get().expanded_content({ns: new abap.types.String().set(`uxap`)})).get().text({text: (await this.client.get().z2ui5_if_client$_bind_local({val: this.ls_detail.get().productname}))});
    await (await header_title.get().snapped_content({ns: new abap.types.String().set(`uxap`)})).get().text({text: (await this.client.get().z2ui5_if_client$_bind_local({val: this.ls_detail.get().productname}))});
    await (await header_title.get().snapped_title_on_mobile()).get().title({text: (await this.client.get().z2ui5_if_client$_bind_local({val: this.ls_detail.get().productname}))});
    let unique314 = this.lv_layout;
    if (abap.compare.eq(unique314, new abap.types.Character(21).set('TwoColumnsMidExpanded'))) {
      temp1.set(new abap.types.Character(5).set('false'));
    } else if (abap.compare.eq(unique314, new abap.types.Character(19).set('MidColumnFullScreen'))) {
      temp1.set(new abap.types.Character(4).set('true'));
    }
    let unique315 = this.lv_layout;
    if (abap.compare.eq(unique315, new abap.types.Character(21).set('TwoColumnsMidExpanded'))) {
      temp4.set(new abap.types.Character(4).set('true'));
    } else if (abap.compare.eq(unique315, new abap.types.Character(19).set('MidColumnFullScreen'))) {
      temp4.set(new abap.types.Character(5).set('false'));
    }
    await (await (await (await (await (await header_title.get().actions({ns: new abap.types.String().set(`uxap`)})).get().overflow_toolbar()).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://supplier`), text: new abap.types.Character(15).set('Supplier Detail'), type: new abap.types.Character(11).set('Transparent'), enabled: new abap.types.Character(4).set('true'), tooltip: new abap.types.Character(13).set('Goto Supplier'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('ONGOTOSUPPLIER')}))})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://exit-full-screen`), text: new abap.types.Character(20).set('Exit Fullscreen Mode'), type: new abap.types.Character(11).set('Transparent'), tooltip: new abap.types.Character(21).set('Close Fullscreen Mode'), enabled: temp1, press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('ONEXITFULLSCREENMODE')}))})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://full-screen`), text: new abap.types.Character(21).set('Enter Fullscreen Mode'), type: new abap.types.Character(11).set('Transparent'), enabled: temp4, tooltip: new abap.types.Character(15).set('Fullscreen Mode'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(16).set('ONFULLSCREENMODE')}))})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://decline`), text: new abap.types.Character(18).set('Exit Detail Screen'), type: new abap.types.Character(11).set('Transparent'), enabled: new abap.types.Character(4).set('true'), tooltip: new abap.types.Character(12).set('Close Detail'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('ONCLOSEDETAIL')}))});
    header_content.set((await page.get().header_content({ns: new abap.types.Character(4).set('uxap')})));
    temp2.set(this.ls_detail.get().measure);
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await header_content.get().flex_box({wrap: new abap.types.Character(4).set('Wrap')})).get().avatar({src: abap.operators.concat(this.c_pic_url,this.ls_detail.get().pic), class: new abap.types.Character(19).set('sapUiSmallMarginEnd'), displaysize: new abap.types.Character(6).set('layout')})).get().vertical_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().label({text: new abap.types.Character(9).set('Dimension')})).get().label({text: new abap.types.Character(6).set('Weight')})).get().label({text: new abap.types.Character(5).set('Price')})).get().label({text: new abap.types.Character(6).set('Rating')})).get().label({text: new abap.types.Character(13).set('Achived goals')})).get().get_parent()).get().vertical_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().text({text: new abap.types.String().set(` ${abap.templateFormatting(this.ls_detail.get().width)} x ${abap.templateFormatting(this.ls_detail.get().depth)} x ${abap.templateFormatting(this.ls_detail.get().height)} ${abap.templateFormatting(this.ls_detail.get().dimunit)}`)})).get().object_number({number: temp2, unit: this.ls_detail.get().unit, state: this.ls_detail.get().state_measure})).get().text({text: new abap.types.String().set(`${abap.templateFormatting(this.ls_detail.get().price)} ${abap.templateFormatting(this.ls_detail.get().waers)} `)})).get().vbox()).get().rating_indicator({class: new abap.types.Character(22).set('sapUiSmallMarginBottom'), value: this.ls_detail.get().rating, maxvalue: new abap.types.Character(1).set('6'), displayonly: new abap.types.Character(4).set('true')})).get().get_parent()).get().progress_indicator({percentvalue: this.ls_detail.get().process, displayvalue: new abap.types.String().set(`${abap.templateFormatting(this.ls_detail.get().process)} %`), state: this.ls_detail.get().state_price, showvalue: new abap.types.Character(4).set('true')})).get().get_parent()).get().get_parent()).get().vertical_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().label({text: new abap.types.Character(8).set('Supplier')})).get().label({text: new abap.types.Character(7).set('Country')})).get().label({text: new abap.types.Character(4).set('City')})).get().label({text: new abap.types.Character(6).set('Street')})).get().label({text: new abap.types.Character(4).set('Mail')})).get().label({text: new abap.types.Character(5).set('Phone')})).get().get_parent()).get().vertical_layout({class: new abap.types.Character(24).set('sapUiSmallMarginBeginEnd')})).get().label({text: this.ls_detail_supplier.get().suppliername})).get().label({text: this.ls_detail_supplier.get().country})).get().label({text: new abap.types.String().set(`${abap.templateFormatting(this.ls_detail_supplier.get().zipcode)}-${abap.templateFormatting(this.ls_detail_supplier.get().city)} `)})).get().link({text: this.ls_detail_supplier.get().street, href: new abap.types.String().set(`https://www.google.com/maps/search/?api=1&query=${abap.templateFormatting(this.ls_detail_supplier.get().street)},${abap.templateFormatting(this.ls_detail_supplier.get().city)},${abap.templateFormatting(this.ls_detail_supplier.get().country)}`), target: new abap.types.Character(6).set('_blank')})).get().link({text: this.ls_detail_supplier.get().email, href: new abap.types.String().set(`mailto:${abap.templateFormatting(this.ls_detail_supplier.get().email)}`), target: new abap.types.Character(6).set('_blank')})).get().link({text: this.ls_detail_supplier.get().phone, href: new abap.types.String().set(`tel:${abap.templateFormatting(this.ls_detail_supplier.get().phone)}`)})).get().get_parent();
    sections.set((await page.get().sections()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await sections.get().object_page_section({titleuppercase: abap.builtin.abap_false, id: new abap.types.Character(18).set('SectionDescription'), title: new abap.types.Character(11).set('Description')})).get().heading({ns: new abap.types.String().set(`uxap`)})).get().get_parent()).get().sub_sections()).get().object_page_sub_section({id: new abap.types.Character(19).set('SectionDescription1'), title: new abap.types.Character(11).set('Description')})).get().blocks()).get().vbox()).get().text_area({rows: new abap.types.Character(2).set('10'), value: new abap.types.Character(4).set('Text'), editable: new abap.types.Character(5).set('false'), width: new abap.types.Character(4).set('100%')})).get().get_parent()).get().get_parent()).get().get_parent()).get().object_page_sub_section({id: new abap.types.Character(19).set('SectionDescription2'), title: new abap.types.Character(7).set('Picture')})).get().blocks()).get().vbox()).get().image({src: abap.operators.concat(this.c_pic_url,this.ls_detail.get().pic)});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await sections.get().object_page_section({titleuppercase: abap.builtin.abap_false, id: new abap.types.Character(15).set('SupplierSection'), title: new abap.types.Character(8).set('Supplier')})).get().heading({ns: new abap.types.String().set(`uxap`)})).get().get_parent()).get().sub_sections()).get().object_page_sub_section({id: new abap.types.Character(16).set('SupplierSection1'), title: new abap.types.Character(7).set('Connect')})).get().blocks()).get().label({text: new abap.types.String().set(`Phone ${abap.templateFormatting(this.ls_detail_supplier.get().phone)}`)})).get().label({text: new abap.types.String().set(`Mail  ${abap.templateFormatting(this.ls_detail_supplier.get().email)}`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().object_page_sub_section({id: new abap.types.Character(16).set('SupplierSection2'), title: new abap.types.Character(21).set('Payment information  ')})).get().blocks()).get().label({text: new abap.types.Character(11).set('20 Days Net')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await sections.get().object_page_section({titleuppercase: abap.builtin.abap_false, id: new abap.types.Character(6).set('Others'), title: new abap.types.Character(6).set('Others')})).get().heading({ns: new abap.types.String().set(`uxap`)})).get().get_parent()).get().sub_sections()).get().object_page_sub_section({id: new abap.types.Character(7).set('Others1'), title: new abap.types.Character(11).set('Information')})).get().blocks()).get().vbox()).get().label({text: new abap.types.Character(4).set('info')})).get().label({text: new abap.types.Character(4).set('info')})).get().get_parent()).get().get_parent()).get().get_parent()).get().object_page_sub_section({id: new abap.types.Character(7).set('Others2'), title: new abap.types.Character(8).set('Details ')})).get().blocks()).get().vbox()).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')})).get().label({text: new abap.types.Character(7).set('details')});
    abap.statements.clear(temp3);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${SUPPLIERNAME}`), table: temp3});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await sections.get().object_page_section({titleuppercase: abap.builtin.abap_false, id: new abap.types.Character(14).set('OtherSuppliers'), title: new abap.types.Character(14).set('Other Supplier')})).get().heading({ns: new abap.types.String().set(`uxap`)})).get().get_parent()).get().sub_sections()).get().object_page_sub_section({id: new abap.types.Character(14).set('OtherSupplier1'), title: new abap.types.Character(13).set('Supplier List')})).get().scroll_container({height: new abap.types.Character(4).set('100%'), vertical: abap.builtin.abap_true})).get().table({inset: abap.builtin.abap_false, showseparators: new abap.types.Character(5).set('Inner'), headertext: new abap.types.Character(9).set('Suppliers'), items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table_supplier})), sticky: new abap.types.Character(27).set('ColumnHeaders,HeaderToolbar')})).get().columns()).get().column()).get().text({text: new abap.types.Character(8).set('Supplier')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(7).set('Country')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('City')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({type: new abap.types.Character(10).set('Navigation'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ONPRESSSUPPLIER`), t_arg: temp3}))})).get().cells()).get().text({text: new abap.types.Character(14).set('{SUPPLIERNAME}')})).get().get_parent()).get().text({text: new abap.types.Character(9).set('{COUNTRY}')})).get().text({text: new abap.types.Character(6).set('{CITY}')});
    this.check_detail_active.set(abap.builtin.abap_true);
    await this.client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`Detail`), method_insert: new abap.types.Character(16).set('addMidColumnPage'), method_destroy: new abap.types.Character(23).set('removeAllMidColumnPages')});
  }
  async view_display_master() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_master = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - Master Detail'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link({text: new abap.types.Character(4).set('Demo'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://twitter.com/abap2UI5/status/1691003695654133760`)})).get().link()).get().get_parent()));
    lr_master.set((await (await page.get().flexible_column_layout({layout: this.lv_layout, id: new abap.types.Character(6).set('Detail')})).get().begin_column_pages()));
    tab.set((await (await lr_master.get().scroll_container({height: new abap.types.Character(4).set('100%'), vertical: abap.builtin.abap_true})).get().table({inset: abap.builtin.abap_false, showseparators: new abap.types.Character(5).set('Inner'), headertext: new abap.types.Character(8).set('Products'), items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table})), sticky: new abap.types.Character(27).set('ColumnHeaders,HeaderToolbar')})));
    await (await (await (await (await tab.get().header_toolbar()).get().overflow_toolbar()).get().search_field({id: new abap.types.String().set(`SEARCH`), width: new abap.types.Character(7).set('17.5rem'), search: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(8).set('ONSEARCH')})), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(8).set('ONSEARCH')})), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_search_value}))})).get().toolbar_spacer()).get().overflow_toolbar_button({icon: new abap.types.Character(15).set('sap-icon://sort'), type: new abap.types.Character(11).set('Transparent'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('ONSORT')}))});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column({width: new abap.types.Character(4).set('12em')})).get().text({text: new abap.types.Character(7).set('Product')})).get().get_parent()).get().column({minscreenwidth: new abap.types.Character(6).set('Tablet'), demandpopin: abap.builtin.abap_true})).get().text({text: new abap.types.Character(8).set('Supplier')})).get().get_parent()).get().column({minscreenwidth: new abap.types.Character(7).set('Desktop'), demandpopin: abap.builtin.abap_true, halign: new abap.types.Character(3).set('End')})).get().text({text: new abap.types.Character(10).set('Dimensions')})).get().get_parent()).get().column({minscreenwidth: new abap.types.Character(7).set('Desktop'), demandpopin: abap.builtin.abap_true, halign: new abap.types.Character(6).set('Center')})).get().text({text: new abap.types.Character(6).set('Weight')})).get().get_parent()).get().column({halign: new abap.types.Character(3).set('End')})).get().text({text: new abap.types.Character(5).set('Price')});
    abap.statements.clear(temp5);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${KEY}`), table: temp5});
    await (await (await (await (await (await (await (await (await (await tab.get().items()).get().column_list_item({type: new abap.types.Character(10).set('Navigation'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ONPRESSMASTER`), t_arg: temp5}))})).get().cells()).get().object_identifier({text: new abap.types.Character(13).set('{PRODUCTNAME}'), title: new abap.types.Character(11).set('{PRODUCTID}')})).get().get_parent()).get().text({text: new abap.types.Character(14).set('{SUPPLIERNAME}')})).get().get_parent()).get().text({text: new abap.types.Character(38).set('{WIDTH} x {DEPTH} x {HEIGHT} {DIMUNIT}')})).get().object_number({number: new abap.types.Character(9).set('{MEASURE}'), unit: new abap.types.Character(6).set('{UNIT}'), state: new abap.types.Character(15).set('{STATE_MEASURE}')})).get().object_number({state: new abap.types.Character(13).set('{STATE_PRICE}'), number: new abap.types.String().set(`{ parts: [ { path : 'PRICE' } , { path : 'WAERS' } ] } `)});
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_set_data();
      await this.sort();
      await this.z2ui5_on_init();
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.view_display_master();
      await this.view_display_detail();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let lo_app_next = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_086", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_086"});
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp7 = new abap.types.String({qualifiedName: "STRING"});
    let temp8 = new abap.types.Integer({qualifiedName: "I"});
    let temp9 = new abap.types.String({qualifiedName: "STRING"});
    let temp10 = new abap.types.Integer({qualifiedName: "I"});
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let temp12 = new abap.types.Integer({qualifiedName: "I"});
    let temp13 = new abap.types.String({qualifiedName: "STRING"});
    let temp14 = new abap.types.Integer({qualifiedName: "I"});
    let unique316 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique316, new abap.types.Character(14).set('ONGOTOSUPPLIER'))) {
      lo_app_next.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_086']()).constructor_());
      lo_app_next.get().ls_detail_supplier.set(this.ls_detail_supplier);
      await this.client.get().z2ui5_if_client$nav_app_call({app: lo_app_next});
    } else if (abap.compare.eq(unique316, new abap.types.Character(20).set('ONEXITFULLSCREENMODE'))) {
      this.lv_layout.set(new abap.types.Character(21).set('TwoColumnsMidExpanded'));
      await this.view_display_master();
      await this.view_display_detail();
      await this.client.get().z2ui5_if_client$nest_view_model_update();
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event Close FullScreen Mode `)});
    } else if (abap.compare.eq(unique316, new abap.types.Character(16).set('ONFULLSCREENMODE'))) {
      this.lv_layout.set(new abap.types.Character(19).set('MidColumnFullScreen'));
      await this.view_display_master();
      await this.view_display_detail();
      await this.client.get().z2ui5_if_client$nest_view_model_update();
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event FullScreen Detail `)});
    } else if (abap.compare.eq(unique316, new abap.types.Character(13).set('ONCLOSEDETAIL'))) {
      this.lv_layout.set(new abap.types.Character(9).set('OneColumn'));
      await this.view_display_master();
      await this.view_display_detail();
      this.check_detail_active.set(abap.builtin.abap_false);
      await this.client.get().z2ui5_if_client$nest_view_model_update();
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event Close Detail `)});
    } else if (abap.compare.eq(unique316, new abap.types.Character(15).set('ONPRESSSUPPLIER'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp8.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp7});
      abap.builtin.sy.get().tabix.set(temp8);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      abap.statements.readTable(this.mt_table_supplier,{into: this.ls_detail_supplier,
        withKey: (i) => {return abap.compare.eq(i.suppliername, temp7);},
        withKeyValue: [{key: (i) => {return i.suppliername}, value: temp7}],
        usesTableLine: false,
        withKeySimple: {"suppliername": temp7}});
      temp10.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp9});
      abap.builtin.sy.get().tabix.set(temp10);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event Press Supplier List Name: ${abap.templateFormatting(temp9)} `)});
      lo_app_next.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_086']()).constructor_());
      lo_app_next.get().ls_detail_supplier.set(this.ls_detail_supplier);
      await this.client.get().z2ui5_if_client$nav_app_call({app: lo_app_next});
    } else if (abap.compare.eq(unique316, new abap.types.String().set(`ONPRESSMASTER`))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp12.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp11});
      abap.builtin.sy.get().tabix.set(temp12);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event Press Master - Product Id ${abap.templateFormatting(temp11)} `)});
      temp14.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp13});
      abap.builtin.sy.get().tabix.set(temp14);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      abap.statements.readTable(this.mt_table,{into: this.ls_detail,
        withKey: (i) => {return abap.compare.eq(i.key, temp13);},
        withKeyValue: [{key: (i) => {return i.key}, value: temp13}],
        usesTableLine: false,
        withKeySimple: {"key": temp13}});
      abap.statements.readTable(this.mt_table_supplier,{into: this.ls_detail_supplier,
        withKey: (i) => {return abap.compare.eq(i.suppliername, this.ls_detail.get().suppliername);},
        withKeyValue: [{key: (i) => {return i.suppliername}, value: this.ls_detail.get().suppliername}],
        usesTableLine: false,
        withKeySimple: {"suppliername": this.ls_detail.get().suppliername}});
      this.lv_layout.set(new abap.types.Character(21).set('TwoColumnsMidExpanded'));
      if (abap.compare.eq(this.check_detail_active, abap.builtin.abap_false)) {
        await this.view_display_master();
      }
      await this.view_display_detail();
      await this.client.get().z2ui5_if_client$view_model_update();
      await this.client.get().z2ui5_if_client$nest_view_model_update();
    } else if (abap.compare.eq(unique316, new abap.types.String().set(`UPDATE_DETAIL`))) {
      await this.view_display_detail();
    } else if (abap.compare.eq(unique316, new abap.types.Character(6).set('ONSORT'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(12).set('Sort Entries')});
      await this.sort();
      abap.statements.readTable(this.mt_table,{index: abap.IntegerFactory.get(1),
        into: this.ls_detail});
      await this.view_display_master();
      await this.view_display_detail();
      await this.client.get().z2ui5_if_client$view_model_update();
      await this.client.get().z2ui5_if_client$nest_view_model_update();
    } else if (abap.compare.eq(unique316, new abap.types.Character(8).set('ONSEARCH'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(14).set('Search Entries')});
      await this.z2ui5_set_data();
      await this.z2ui5_set_search();
      await this.client.get().z2ui5_if_client$view_model_update();
      await this.client.get().z2ui5_if_client$nest_view_model_update();
    } else if (abap.compare.eq(unique316, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    await this.view_display_master();
  }
  async z2ui5_set_data() {
    let temp15 = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table");
    let temp16 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {});
    let temp17 = abap.types.TableFactory.construct(new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table_supplier");
    let temp18 = new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {});
    let temp19 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {});
    let temp20 = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.clear(temp15);
    temp16.get().key.set(new abap.types.Character(1).set('1'));
    temp16.get().productid.set(new abap.types.Character(1).set('1'));
    temp16.get().productname.set(new abap.types.Character(5).set('table'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 1'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(abap.IntegerFactory.get(100));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('1000.50'));
    temp16.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp16.get().state_price.set(new abap.types.String().set(`Success`));
    temp16.get().state_measure.set(new abap.types.String().set(`Warning`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-1010.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('0'));
    temp16.get().process.set(new abap.types.Character(1).set('0'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('2'));
    temp16.get().productid.set(new abap.types.Character(1).set('2'));
    temp16.get().productname.set(new abap.types.Character(5).set('chair'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 2'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(abap.IntegerFactory.get(123));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('2000.55'));
    temp16.get().waers.set(new abap.types.Character(3).set('USD'));
    temp16.get().state_price.set(new abap.types.String().set(`Error`));
    temp16.get().state_measure.set(new abap.types.String().set(`Error`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-2001.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('1'));
    temp16.get().process.set(new abap.types.Character(2).set('10'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('3'));
    temp16.get().productid.set(new abap.types.Character(1).set('3'));
    temp16.get().productname.set(new abap.types.Character(4).set('sofa'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 3'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(new abap.types.Integer().set(700));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('3000.11'));
    temp16.get().waers.set(new abap.types.Character(3).set('CNY'));
    temp16.get().state_price.set(new abap.types.String().set(`Success`));
    temp16.get().state_measure.set(new abap.types.String().set(`Warning`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-1251.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('2'));
    temp16.get().process.set(new abap.types.Character(2).set('15'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('4'));
    temp16.get().productid.set(new abap.types.Character(1).set('4'));
    temp16.get().productname.set(new abap.types.Character(8).set('computer'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 4'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(abap.IntegerFactory.get(200));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('4000.88'));
    temp16.get().waers.set(new abap.types.Character(3).set('USD'));
    temp16.get().state_price.set(new abap.types.String().set(`Success`));
    temp16.get().state_measure.set(new abap.types.String().set(`Success`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-6100.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('3'));
    temp16.get().process.set(new abap.types.Character(2).set('38'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('5'));
    temp16.get().productid.set(new abap.types.Character(1).set('5'));
    temp16.get().productname.set(new abap.types.Character(7).set('printer'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 5'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(abap.IntegerFactory.get(90));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('5000.47'));
    temp16.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp16.get().state_price.set(new abap.types.String().set(`Error`));
    temp16.get().state_measure.set(new abap.types.String().set(`Warning`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-1000.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('4'));
    temp16.get().process.set(new abap.types.Character(2).set('66'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('6'));
    temp16.get().productid.set(new abap.types.Character(1).set('6'));
    temp16.get().productname.set(new abap.types.Character(6).set('table2'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 6'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(new abap.types.Integer().set(600));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp16.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp16.get().state_price.set(new abap.types.String().set(`Success`));
    temp16.get().state_measure.set(new abap.types.String().set(`Information`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-1137.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('2'));
    temp16.get().process.set(new abap.types.Character(2).set('91'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('7'));
    temp16.get().productid.set(new abap.types.Character(1).set('7'));
    temp16.get().productname.set(new abap.types.Character(6).set('table3'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 7'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(new abap.types.Integer().set(600));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp16.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp16.get().state_price.set(new abap.types.String().set(`Success`));
    temp16.get().state_measure.set(new abap.types.String().set(`Warning`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-7000.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('6'));
    temp16.get().process.set(new abap.types.Character(1).set('5'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('8'));
    temp16.get().productid.set(new abap.types.Character(1).set('8'));
    temp16.get().productname.set(new abap.types.Character(6).set('table4'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 8'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(new abap.types.Integer().set(600));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp16.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp16.get().state_price.set(new abap.types.String().set(`Warning`));
    temp16.get().state_measure.set(new abap.types.String().set(`Error`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-9997.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('0'));
    temp16.get().process.set(new abap.types.Character(2).set('75'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(1).set('9'));
    temp16.get().productid.set(new abap.types.Character(1).set('9'));
    temp16.get().productname.set(new abap.types.Character(6).set('table5'));
    temp16.get().suppliername.set(new abap.types.Character(9).set('Company 9'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(new abap.types.Integer().set(600));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp16.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp16.get().state_price.set(new abap.types.String().set(`Information`));
    temp16.get().state_measure.set(new abap.types.String().set(`Success`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-7020.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('1'));
    temp16.get().process.set(new abap.types.Character(2).set('81'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(2).set('10'));
    temp16.get().productid.set(new abap.types.Character(2).set('10'));
    temp16.get().productname.set(new abap.types.Character(6).set('table6'));
    temp16.get().suppliername.set(new abap.types.Character(10).set('Company 10'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(new abap.types.Integer().set(600));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp16.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp16.get().state_price.set(new abap.types.String().set(`Success`));
    temp16.get().state_measure.set(new abap.types.String().set(`Information`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-1023.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('4'));
    temp16.get().process.set(new abap.types.Character(2).set('24'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    temp16.get().key.set(new abap.types.Character(2).set('11'));
    temp16.get().productid.set(new abap.types.Character(2).set('11'));
    temp16.get().productname.set(new abap.types.Character(6).set('table7'));
    temp16.get().suppliername.set(new abap.types.Character(10).set('Company 11'));
    temp16.get().width.set(new abap.types.Character(2).set('10'));
    temp16.get().depth.set(new abap.types.Character(2).set('20'));
    temp16.get().height.set(new abap.types.Character(2).set('30'));
    temp16.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp16.get().measure.set(new abap.types.Integer().set(600));
    temp16.get().unit.set(new abap.types.Character(2).set('ST'));
    temp16.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp16.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp16.get().state_price.set(new abap.types.String().set(`Information`));
    temp16.get().state_measure.set(new abap.types.String().set(`Success`));
    temp16.get().pic.set(new abap.types.Character(11).set('HT-1085.jpg'));
    temp16.get().rating.set(new abap.types.Character(1).set('5'));
    temp16.get().process.set(new abap.types.Character(2).set('46'));
    abap.statements.insertInternal({data: temp16, table: temp15});
    this.mt_table.set(temp15);
    abap.statements.clear(temp17);
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 1'));
    temp18.get().email.set(new abap.types.Character(16).set('company1@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(7).set('Dresden'));
    temp18.get().street.set(new abap.types.Character(8).set('Neumarkt'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('01067'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 2'));
    temp18.get().email.set(new abap.types.Character(16).set('company2@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(6).set('Erfurt'));
    temp18.get().street.set(new abap.types.Character(8).set('Domplatz'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('99084'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 3'));
    temp18.get().email.set(new abap.types.Character(16).set('company3@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(4).set('Suhl'));
    temp18.get().street.set(new abap.types.Character(22).set('Carl-Fiedler-Straße 58'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('98527'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 4'));
    temp18.get().email.set(new abap.types.Character(16).set('company4@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(14).set('Hildburgheusen'));
    temp18.get().street.set(new abap.types.Character(5).set('Markt'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('98646'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 5'));
    temp18.get().email.set(new abap.types.Character(16).set('company5@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(9).set('Sonneberg'));
    temp18.get().street.set(new abap.types.Character(18).set('Beethovenstraße 10'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('96515'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 6'));
    temp18.get().email.set(new abap.types.Character(16).set('company6@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(9).set('Meiningen'));
    temp18.get().street.set(new abap.types.Character(13).set('Schloßplatz 1'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('98617'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 7'));
    temp18.get().email.set(new abap.types.Character(16).set('company7@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(7).set('Leipzig'));
    temp18.get().street.set(new abap.types.Character(21).set('Pfaffendorfer Str. 29'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('04105'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 8'));
    temp18.get().email.set(new abap.types.Character(16).set('company8@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(9).set('Magdeburg'));
    temp18.get().street.set(new abap.types.Character(8).set('Am Dom 1'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('39104'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(9).set('Company 9'));
    temp18.get().email.set(new abap.types.Character(16).set('company9@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(8).set('Schwerin'));
    temp18.get().street.set(new abap.types.Character(13).set('Lennéstraße 1'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('19053'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(10).set('Company 10'));
    temp18.get().email.set(new abap.types.Character(17).set('company10@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(7).set('Rostock'));
    temp18.get().street.set(new abap.types.Character(17).set('Rungestraße 79-78'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('18055'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(10).set('Company 11'));
    temp18.get().email.set(new abap.types.Character(17).set('company11@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(7).set('Cottbus'));
    temp18.get().street.set(new abap.types.Character(11).set('Marktstraße'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('03046'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().suppliername.set(new abap.types.Character(10).set('Company 12'));
    temp18.get().email.set(new abap.types.Character(17).set('company12@sap.com'));
    temp18.get().phone.set(new abap.types.Character(14).set('+49 1234567890'));
    temp18.get().country.set(new abap.types.Character(7).set('Germany'));
    temp18.get().city.set(new abap.types.Character(13).set('Halle (Saale)'));
    temp18.get().street.set(new abap.types.Character(10).set('Marktpl. 1'));
    temp18.get().zipcode.set(new abap.types.Character(5).set('06108'));
    abap.statements.insertInternal({data: temp18, table: temp17});
    this.mt_table_supplier.set(temp17);
    temp20.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.mt_table,{index: abap.IntegerFactory.get(1),
      into: temp19});
    abap.builtin.sy.get().tabix.set(temp20);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    this.ls_detail.set(temp19);
  }
  async z2ui5_set_search() {
    let temp21 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {});
    let lr_row = new abap.types.DataReference(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {}));
    let lv_row = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    if (abap.compare.initial(this.mv_search_value) === false) {
      for await (const unique317 of abap.statements.loop(this.mt_table)) {
        lr_row.assign(unique317);
        lv_row.set(new abap.types.String().set(``));
        lv_index.set(abap.IntegerFactory.get(1));
        const indexBackup1 = abap.builtin.sy.get().index.get();
        let unique318 = 1;
        while (true) {
          abap.builtin.sy.get().index.set(unique318++);
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
abap.Classes['Z2UI5_CL_DEMO_APP_085'] = z2ui5_cl_demo_app_085;
z2ui5_cl_demo_app_085.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_085.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_085.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_085.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_085.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_085.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_085.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_085.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_085.ty_s_tab = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_085.ty_s_tab_supplier = new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {});
z2ui5_cl_demo_app_085.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-KEY"}), "productid": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_085=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-STATE_MEASURE"}), "pic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PIC"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-RATING"}), "process": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB-PROCESS"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table");
z2ui5_cl_demo_app_085.ty_t_table_supplier = abap.types.TableFactory.construct(new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_085=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_085=>ty_s_tab_supplier", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_085=>ty_t_table_supplier");
export {z2ui5_cl_demo_app_085};
//# sourceMappingURL=z2ui5_cl_demo_app_085.clas.mjs.map