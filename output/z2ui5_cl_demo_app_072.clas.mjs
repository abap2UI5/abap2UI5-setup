const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_072.clas.abap
class z2ui5_cl_demo_app_072 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_072';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_072=>ty_t_table");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LV_CNT_TOTAL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LV_CNT_POS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LV_CNT_HEAVY": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LV_CNT_NEG": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LV_SELECTEDKEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "C_LCB": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "C_RCB": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_FILTER": {"visibility": "I", "parameters": {}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_table = abap.types.TableFactory.construct(new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_072=>ty_t_table");
    this.lv_cnt_total = new abap.types.Integer({qualifiedName: "I"});
    this.lv_cnt_pos = new abap.types.Integer({qualifiedName: "I"});
    this.lv_cnt_heavy = new abap.types.Integer({qualifiedName: "I"});
    this.lv_cnt_neg = new abap.types.Integer({qualifiedName: "I"});
    this.lv_selectedkey = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$author = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$author;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$check_sticky === undefined) this.z2ui5_if_app$check_sticky = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.c_lcb = z2ui5_cl_demo_app_072.c_lcb;
    this.c_rcb = z2ui5_cl_demo_app_072.c_rcb;
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
      await this.z2ui5_on_init();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique290 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique290, new abap.types.Character(18).set('OnSelectIconTabBar'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`Event SelectedTabBar Key ${abap.templateFormatting(this.lv_selectedkey)} `)});
      await this.set_filter();
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique290, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lo_items = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp2.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.abap_false, ((await this.client.get().z2ui5_if_client$get())).get().check_launchpad_active)));
    temp3.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({id: new abap.types.String().set(`page_main`), showheader: temp2, title: new abap.types.Character(21).set('abap2UI5 - IconTabBar'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp3, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${LV_SELECTEDKEY}`), table: temp1});
    lo_items.set((await (await page.get().icon_tab_bar({class: new abap.types.Character(29).set('sapUiResponsiveContentPadding'), selectedkey: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.lv_selectedkey})), select: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('OnSelectIconTabBar'), t_arg: temp1}))})).get().items()));
    await lo_items.get().icon_tab_filter({count: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.lv_cnt_total})), text: new abap.types.Character(8).set('Products'), key: new abap.types.Character(3).set('ALL'), showall: abap.builtin.abap_true});
    await lo_items.get().icon_tab_separator();
    await lo_items.get().icon_tab_filter({icon: new abap.types.Character(16).set('sap-icon://begin'), iconcolor: new abap.types.Character(8).set('Positive'), count: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.lv_cnt_pos})), text: new abap.types.Character(2).set('OK'), key: new abap.types.Character(2).set('OK')});
    await lo_items.get().icon_tab_filter({icon: new abap.types.Character(18).set('sap-icon://compare'), iconcolor: new abap.types.Character(8).set('Critical'), count: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.lv_cnt_heavy})), text: new abap.types.Character(5).set('Heavy'), key: new abap.types.Character(5).set('HEAVY')});
    await lo_items.get().icon_tab_filter({icon: new abap.types.Character(20).set('sap-icon://inventory'), iconcolor: new abap.types.Character(8).set('Negative'), count: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.lv_cnt_neg})), text: new abap.types.Character(10).set('Overweight'), key: new abap.types.Character(10).set('OVERWEIGHT')});
    tab.set((await (await page.get().scroll_container({height: new abap.types.Character(3).set('70%'), vertical: abap.builtin.abap_true})).get().table({inset: abap.builtin.abap_false, showseparators: new abap.types.Character(5).set('Inner'), headertext: new abap.types.Character(8).set('Products'), items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_table}))})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column({width: new abap.types.Character(4).set('12em')})).get().text({text: new abap.types.Character(7).set('Product')})).get().get_parent()).get().column({minscreenwidth: new abap.types.Character(6).set('Tablet'), demandpopin: abap.builtin.abap_true})).get().text({text: new abap.types.Character(8).set('Supplier')})).get().get_parent()).get().column({minscreenwidth: new abap.types.Character(7).set('Desktop'), demandpopin: abap.builtin.abap_true, halign: new abap.types.Character(3).set('End')})).get().text({text: new abap.types.Character(10).set('Dimensions')})).get().get_parent()).get().column({minscreenwidth: new abap.types.Character(7).set('Desktop'), demandpopin: abap.builtin.abap_true, halign: new abap.types.Character(6).set('Center')})).get().text({text: new abap.types.Character(6).set('Weight')})).get().get_parent()).get().column({halign: new abap.types.Character(3).set('End')})).get().text({text: new abap.types.Character(5).set('Price')})).get().get_parent()).get().column({halign: new abap.types.Character(3).set('End')})).get().text({text: new abap.types.Character(6).set('Rating')});
    await (await (await (await (await (await (await (await (await (await tab.get().items()).get().column_list_item()).get().cells()).get().object_identifier({text: new abap.types.Character(13).set('{PRODUCTNAME}'), title: new abap.types.Character(11).set('{PRODUCTID}')})).get().get_parent()).get().text({text: new abap.types.Character(14).set('{SUPPLIERNAME}')})).get().get_parent()).get().text({text: new abap.types.Character(38).set('{WIDTH} x {DEPTH} x {HEIGHT} {DIMUNIT}')})).get().object_number({number: new abap.types.Character(9).set('{MEASURE}'), unit: new abap.types.Character(6).set('{UNIT}'), state: new abap.types.Character(15).set('{STATE_MEASURE}')})).get().object_number({state: new abap.types.Character(13).set('{STATE_PRICE}'), number: new abap.types.String().set(`{ parts: [ { path : 'PRICE' } , { path : 'WAERS' } ] } `)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_set_data() {
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_072=>ty_t_table");
    let temp4 = new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {});
    let temp1 = new abap.types.Integer({qualifiedName: "I"});
    let i = new abap.types.Integer({qualifiedName: "I"});
    let temp6 = new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let j = new abap.types.Integer({qualifiedName: "I"});
    let temp5 = new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {});
    let temp7 = new abap.types.Integer({qualifiedName: "I"});
    let k = new abap.types.Integer({qualifiedName: "I"});
    let wa = new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {});
    abap.statements.clear(temp3);
    temp4.get().productid.set(new abap.types.Character(1).set('1'));
    temp4.get().productname.set(new abap.types.Character(5).set('table'));
    temp4.get().suppliername.set(new abap.types.Character(9).set('Company 1'));
    temp4.get().width.set(new abap.types.Character(2).set('10'));
    temp4.get().depth.set(new abap.types.Character(2).set('20'));
    temp4.get().height.set(new abap.types.Character(2).set('30'));
    temp4.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp4.get().measure.set(abap.IntegerFactory.get(100));
    temp4.get().unit.set(new abap.types.Character(2).set('ST'));
    temp4.get().price.set(new abap.types.Character(7).set('1000.50'));
    temp4.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp4.get().state_price.set(new abap.types.String().set(`Success`));
    temp4.get().rating.set(new abap.types.Character(1).set('0'));
    temp4.get().state_measure.set(new abap.types.String().set(`Warning`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().productid.set(new abap.types.Character(1).set('2'));
    temp4.get().productname.set(new abap.types.Character(5).set('chair'));
    temp4.get().suppliername.set(new abap.types.Character(9).set('Company 2'));
    temp4.get().width.set(new abap.types.Character(2).set('10'));
    temp4.get().depth.set(new abap.types.Character(2).set('20'));
    temp4.get().height.set(new abap.types.Character(2).set('30'));
    temp4.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp4.get().measure.set(abap.IntegerFactory.get(123));
    temp4.get().unit.set(new abap.types.Character(2).set('ST'));
    temp4.get().price.set(new abap.types.Character(7).set('2000.55'));
    temp4.get().waers.set(new abap.types.Character(3).set('USD'));
    temp4.get().state_price.set(new abap.types.String().set(`Error`));
    temp4.get().rating.set(new abap.types.Character(1).set('1'));
    temp4.get().state_measure.set(new abap.types.String().set(`Warning`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().productid.set(new abap.types.Character(1).set('3'));
    temp4.get().productname.set(new abap.types.Character(4).set('sofa'));
    temp4.get().suppliername.set(new abap.types.Character(9).set('Company 3'));
    temp4.get().width.set(new abap.types.Character(2).set('10'));
    temp4.get().depth.set(new abap.types.Character(2).set('20'));
    temp4.get().height.set(new abap.types.Character(2).set('30'));
    temp4.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp4.get().measure.set(new abap.types.Integer().set(700));
    temp4.get().unit.set(new abap.types.Character(2).set('ST'));
    temp4.get().price.set(new abap.types.Character(7).set('3000.11'));
    temp4.get().waers.set(new abap.types.Character(3).set('CNY'));
    temp4.get().state_price.set(new abap.types.String().set(`Success`));
    temp4.get().rating.set(new abap.types.Character(1).set('2'));
    temp4.get().state_measure.set(new abap.types.String().set(`Warning`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().productid.set(new abap.types.Character(1).set('4'));
    temp4.get().productname.set(new abap.types.Character(8).set('computer'));
    temp4.get().suppliername.set(new abap.types.Character(9).set('Company 4'));
    temp4.get().width.set(new abap.types.Character(2).set('10'));
    temp4.get().depth.set(new abap.types.Character(2).set('20'));
    temp4.get().height.set(new abap.types.Character(2).set('30'));
    temp4.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp4.get().measure.set(abap.IntegerFactory.get(200));
    temp4.get().unit.set(new abap.types.Character(2).set('ST'));
    temp4.get().price.set(new abap.types.Character(7).set('4000.88'));
    temp4.get().waers.set(new abap.types.Character(3).set('USD'));
    temp4.get().state_price.set(new abap.types.String().set(`Success`));
    temp4.get().rating.set(new abap.types.Character(1).set('3'));
    temp4.get().state_measure.set(new abap.types.String().set(`Success`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().productid.set(new abap.types.Character(1).set('5'));
    temp4.get().productname.set(new abap.types.Character(7).set('printer'));
    temp4.get().suppliername.set(new abap.types.Character(9).set('Company 5'));
    temp4.get().width.set(new abap.types.Character(2).set('10'));
    temp4.get().depth.set(new abap.types.Character(2).set('20'));
    temp4.get().height.set(new abap.types.Character(2).set('30'));
    temp4.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp4.get().measure.set(abap.IntegerFactory.get(90));
    temp4.get().unit.set(new abap.types.Character(2).set('ST'));
    temp4.get().price.set(new abap.types.Character(7).set('5000.47'));
    temp4.get().waers.set(new abap.types.Character(3).set('EUR'));
    temp4.get().state_price.set(new abap.types.String().set(`Error`));
    temp4.get().rating.set(new abap.types.Character(1).set('4'));
    temp4.get().state_measure.set(new abap.types.String().set(`Warning`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().productid.set(new abap.types.Character(1).set('6'));
    temp4.get().productname.set(new abap.types.Character(6).set('table2'));
    temp4.get().suppliername.set(new abap.types.Character(9).set('Company 6'));
    temp4.get().width.set(new abap.types.Character(2).set('10'));
    temp4.get().depth.set(new abap.types.Character(2).set('20'));
    temp4.get().height.set(new abap.types.Character(2).set('30'));
    temp4.get().dimunit.set(new abap.types.Character(2).set('CM'));
    temp4.get().measure.set(new abap.types.Integer().set(600));
    temp4.get().unit.set(new abap.types.Character(2).set('ST'));
    temp4.get().price.set(new abap.types.Character(7).set('6000.33'));
    temp4.get().waers.set(new abap.types.Character(3).set('GBP'));
    temp4.get().state_price.set(new abap.types.String().set(`Success`));
    temp4.get().rating.set(new abap.types.Character(1).set('5'));
    temp4.get().state_measure.set(new abap.types.String().set(`Information`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    this.mt_table.set(temp3);
    this.lv_cnt_total.set(abap.builtin.lines({val: this.mt_table}));
    i.set(abap.IntegerFactory.get(0));
    for await (const unique291 of abap.statements.loop(this.mt_table,{where: async (I) => {return abap.compare.gt(I.measure, abap.IntegerFactory.get(0)) && abap.compare.le(I.measure, abap.IntegerFactory.get(100));}})) {
      temp6.set(unique291);
      i.set(abap.operators.add(i,abap.IntegerFactory.get(1)));
    }
    temp1.set(i);
    this.lv_cnt_pos.set(temp1);
    j.set(abap.IntegerFactory.get(0));
    for await (const unique292 of abap.statements.loop(this.mt_table,{where: async (I) => {return abap.compare.gt(I.measure, abap.IntegerFactory.get(100)) && abap.compare.le(I.measure, new abap.types.Integer().set(500));}})) {
      temp5.set(unique292);
      j.set(abap.operators.add(j,abap.IntegerFactory.get(1)));
    }
    temp2.set(j);
    this.lv_cnt_heavy.set(temp2);
    k.set(abap.IntegerFactory.get(0));
    for await (const unique293 of abap.statements.loop(this.mt_table,{where: async (I) => {return abap.compare.gt(I.measure, new abap.types.Integer().set(500));}})) {
      wa.set(unique293);
      k.set(abap.operators.add(k,abap.IntegerFactory.get(1)));
    }
    temp7.set(k);
    this.lv_cnt_neg.set(temp7);
  }
  async set_filter() {
    await this.z2ui5_set_data();
    let unique294 = this.lv_selectedkey;
    if (abap.compare.eq(unique294, new abap.types.Character(3).set('ALL'))) {
    } else if (abap.compare.eq(unique294, new abap.types.Character(2).set('OK'))) {
      await abap.statements.deleteInternal(this.mt_table,{where: async (I) => {return ComponentCompareTodo;}});
    } else if (abap.compare.eq(unique294, new abap.types.Character(5).set('HEAVY'))) {
      await abap.statements.deleteInternal(this.mt_table,{where: async (I) => {return ComponentCompareTodo;}});
    } else if (abap.compare.eq(unique294, new abap.types.Character(10).set('OVERWEIGHT'))) {
      await abap.statements.deleteInternal(this.mt_table,{where: async (I) => {return !abap.compare.gt(I.measure, new abap.types.Integer().set(500));}});
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_072'] = z2ui5_cl_demo_app_072;
z2ui5_cl_demo_app_072.c_lcb = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_072.c_lcb.set('{');
z2ui5_cl_demo_app_072.c_rcb = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_072.c_rcb.set('}');
z2ui5_cl_demo_app_072.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_072.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_072.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_072.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_072.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_072.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_072.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_072.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_072.ty_s_tab = new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {});
z2ui5_cl_demo_app_072.ty_t_table = abap.types.TableFactory.construct(new abap.types.Structure({"productid": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTID"}), "productname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-PRODUCTNAME"}), "suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-SUPPLIERNAME"}), "measure": new abap.types.Packed({length: 10, decimals: 2, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-Measure"}), "unit": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-UNIT"}), "price": new abap.types.Packed({length: 14, decimals: 3, qualifiedName: "Z2UI5_CL_DEMO_APP_072=>ty_s_tab-price"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"}), "width": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-WIDTH"}), "depth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-DEPTH"}), "height": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-HEIGHT"}), "dimunit": new abap.types.Character(3, {"qualifiedName":"MEINS","ddicName":"MEINS"}), "state_price": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_PRICE"}), "state_measure": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-STATE_MEASURE"}), "rating": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_072=>TY_S_TAB-RATING"})}, "Z2UI5_CL_DEMO_APP_072=>ty_s_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_072=>ty_t_table");
export {z2ui5_cl_demo_app_072};
//# sourceMappingURL=z2ui5_cl_demo_app_072.clas.mjs.map