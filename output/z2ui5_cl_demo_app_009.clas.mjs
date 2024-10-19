const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_009.clas.abap
class z2ui5_cl_demo_app_009 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_009';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"SCREEN": {"type": () => {return new abap.types.Structure({"color_01": new abap.types.String({qualifiedName: "STRING"}), "color_02": new abap.types.String({qualifiedName: "STRING"}), "color_03": new abap.types.String({qualifiedName: "STRING"}), "city": new abap.types.String({qualifiedName: "STRING"}), "name": new abap.types.String({qualifiedName: "STRING"}), "lastname": new abap.types.String({qualifiedName: "STRING"}), "quantity": new abap.types.String({qualifiedName: "STRING"}), "unit": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SUGGESTION": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp1_6d1f103a38");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SUGGESTION_SEL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp2_6d1f103a38");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SUGGESTION_CITY": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items_city", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp3_6d1f103a38");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_EMPLOYEES_SEL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp4_6d1f103a38");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_EMPLOYEES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp5_6d1f103a38");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VIEW_POPUP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_RENDERING": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "POPUP_F4_TABLE": {"visibility": "U", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "POPUP_F4_TABLE_CUSTOM": {"visibility": "U", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.screen = new abap.types.Structure({"color_01": new abap.types.String({qualifiedName: "STRING"}), "color_02": new abap.types.String({qualifiedName: "STRING"}), "color_03": new abap.types.String({qualifiedName: "STRING"}), "city": new abap.types.String({qualifiedName: "STRING"}), "name": new abap.types.String({qualifiedName: "STRING"}), "lastname": new abap.types.String({qualifiedName: "STRING"}), "quantity": new abap.types.String({qualifiedName: "STRING"}), "unit": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.mt_suggestion = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp1_6d1f103a38");
    this.mt_suggestion_sel = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp2_6d1f103a38");
    this.mt_suggestion_city = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items_city", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp3_6d1f103a38");
    this.mt_employees_sel = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp4_6d1f103a38");
    this.mt_employees = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp5_6d1f103a38");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_view_popup = new abap.types.String({qualifiedName: "STRING"});
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
  async popup_f4_table(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await popup.get().dialog({title: new abap.types.Character(24).set('abap2UI5 - F4 Value Help')})).get().table({mode: new abap.types.Character(16).set('SingleSelectLeft'), items: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_suggestion_sel}))})).get().columns()).get().column({width: new abap.types.Character(5).set('20rem')})).get().text({text: new abap.types.Character(5).set('Color')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().text({text: new abap.types.Character(7).set('{VALUE}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().buttons()).get().button({text: new abap.types.Character(8).set('continue'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(23).set('POPUP_TABLE_F4_CONTINUE')})), type: new abap.types.Character(10).set('Emphasized')});
    await client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async popup_f4_table_custom(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let popup2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup2.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    popup2.set((await popup2.get().dialog({title: new abap.types.Character(24).set('abap2UI5 - F4 Value Help')})));
    await (await (await (await (await (await (await (await (await (await popup2.get().simple_form()).get().label({text: new abap.types.Character(8).set('Location')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().city})), suggestionitems: (await client.get().z2ui5_if_client$_bind({val: this.mt_suggestion_city})), showsuggestion: abap.builtin.abap_true})).get().get()).get().suggestion_items()).get().get()).get().list_item({text: new abap.types.Character(7).set('{VALUE}'), additionaltext: new abap.types.Character(7).set('{DESCR}')})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.Character(9).set('search...'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('SEARCH')}))});
    tab.set((await popup2.get().table({headertext: new abap.types.Character(9).set('Employees'), mode: new abap.types.Character(16).set('SingleSelectLeft'), items: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_employees_sel}))})));
    await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column({width: new abap.types.Character(5).set('10rem')})).get().text({text: new abap.types.Character(4).set('City')})).get().get_parent()).get().column({width: new abap.types.Character(5).set('10rem')})).get().text({text: new abap.types.Character(2).set('Nr')})).get().get_parent()).get().column({width: new abap.types.Character(5).set('15rem')})).get().text({text: new abap.types.Character(4).set('Name')})).get().get_parent()).get().column({width: new abap.types.Character(5).set('30rem')})).get().text({text: new abap.types.Character(8).set('Lastname')})).get().get_parent();
    await (await (await (await (await (await (await tab.get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().text({text: new abap.types.Character(6).set('{CITY}')})).get().text({text: new abap.types.Character(4).set('{NR}')})).get().text({text: new abap.types.Character(6).set('{NAME}')})).get().text({text: new abap.types.Character(10).set('{LASTNAME}')});
    await (await popup2.get().buttons()).get().button({text: new abap.types.Character(8).set('continue'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(30).set('POPUP_TABLE_F4_CUSTOM_CONTINUE')})), type: new abap.types.Character(10).set('Emphasized')});
    await client.get().z2ui5_if_client$popup_display({val: (await popup2.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    abap.statements.clear(this.mv_view_popup);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
    }
    await this.z2ui5_on_event({client: client});
    await this.z2ui5_on_rendering({client: client});
  }
  async z2ui5_on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp4_6d1f103a38");
    let temp2 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp4_6d1f103a38");
    let temp3 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp5 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {});
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    let temp7 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {});
    let temp8 = new abap.types.Integer({qualifiedName: "I"});
    let unique199 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique199, new abap.types.Character(14).set('POPUP_TABLE_F4'))) {
      this.mt_suggestion_sel.set(this.mt_suggestion);
      await this.popup_f4_table({client: client});
    } else if (abap.compare.eq(unique199, new abap.types.Character(21).set('POPUP_TABLE_F4_CUSTOM'))) {
      abap.statements.clear(temp1);
      this.mt_employees_sel.set(temp1);
      abap.statements.clear(temp2);
      this.mt_employees_sel.set(temp2);
      await this.popup_f4_table_custom({client: client});
    } else if (abap.compare.eq(unique199, new abap.types.Character(6).set('SEARCH'))) {
      this.mt_employees_sel.set(this.mt_employees);
      if (abap.compare.initial(this.screen.get().city) === false) {
        await abap.statements.deleteInternal(this.mt_employees_sel,{where: async (I) => {return abap.compare.ne(I.city, this.screen.get().city);}});
      }
      await this.popup_f4_table_custom({client: client});
    } else if (abap.compare.eq(unique199, new abap.types.Character(30).set('POPUP_TABLE_F4_CUSTOM_CONTINUE'))) {
      await abap.statements.deleteInternal(this.mt_employees_sel,{where: async (I) => {return abap.compare.eq(I.selkz, abap.builtin.abap_false);}});
      if (abap.compare.eq(abap.builtin.lines({val: this.mt_employees_sel}), abap.IntegerFactory.get(1))) {
        temp4.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(this.mt_employees_sel,{index: abap.IntegerFactory.get(1),
          into: temp3});
        abap.builtin.sy.get().tabix.set(temp4);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        this.screen.get().name.set(temp3.get().name);
        temp6.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(this.mt_employees_sel,{index: abap.IntegerFactory.get(1),
          into: temp5});
        abap.builtin.sy.get().tabix.set(temp6);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        this.screen.get().lastname.set(temp5.get().lastname);
        await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(17).set('f4 value selected')});
        await client.get().z2ui5_if_client$popup_destroy();
      }
    } else if (abap.compare.eq(unique199, new abap.types.Character(23).set('POPUP_TABLE_F4_CONTINUE'))) {
      await abap.statements.deleteInternal(this.mt_suggestion_sel,{where: async (I) => {return abap.compare.eq(I.selkz, abap.builtin.abap_false);}});
      if (abap.compare.eq(abap.builtin.lines({val: this.mt_suggestion_sel}), abap.IntegerFactory.get(1))) {
        temp8.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(this.mt_suggestion_sel,{index: abap.IntegerFactory.get(1),
          into: temp7});
        abap.builtin.sy.get().tabix.set(temp8);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        this.screen.get().color_02.set(temp7.get().value);
        await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(17).set('f4 value selected')});
        await client.get().z2ui5_if_client$popup_destroy();
      }
    } else if (abap.compare.eq(unique199, new abap.types.Character(11).set('BUTTON_SEND'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(35).set('success - values send to the server')});
    } else if (abap.compare.eq(unique199, new abap.types.Character(12).set('BUTTON_CLEAR'))) {
      abap.statements.clear(this.screen);
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(16).set('View initialized')});
    } else if (abap.compare.eq(unique199, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp1_6d1f103a38");
    let temp10 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items_city", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp3_6d1f103a38");
    let temp12 = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items_city", undefined, {}, {});
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp5_6d1f103a38");
    let temp14 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {});
    abap.statements.clear(temp9);
    temp10.get().descr.set(new abap.types.Character(23).set('this is the color Green'));
    temp10.get().value.set(new abap.types.Character(5).set('GREEN'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().descr.set(new abap.types.Character(22).set('this is the color Blue'));
    temp10.get().value.set(new abap.types.Character(4).set('BLUE'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().descr.set(new abap.types.Character(23).set('this is the color Black'));
    temp10.get().value.set(new abap.types.Character(5).set('BLACK'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().descr.set(new abap.types.Character(22).set('this is the color Grey'));
    temp10.get().value.set(new abap.types.Character(4).set('GREY'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().descr.set(new abap.types.Character(23).set('this is the color Blue2'));
    temp10.get().value.set(new abap.types.Character(5).set('BLUE2'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().descr.set(new abap.types.Character(23).set('this is the color Blue3'));
    temp10.get().value.set(new abap.types.Character(5).set('BLUE3'));
    abap.statements.insertInternal({data: temp10, table: temp9});
    this.mt_suggestion.set(temp9);
    abap.statements.clear(temp11);
    temp12.get().value.set(new abap.types.Character(6).set('London'));
    temp12.get().descr.set(new abap.types.Character(6).set('London'));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().value.set(new abap.types.Character(5).set('Paris'));
    temp12.get().descr.set(new abap.types.Character(5).set('Paris'));
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().value.set(new abap.types.Character(4).set('Rome'));
    temp12.get().descr.set(new abap.types.Character(4).set('Rome'));
    abap.statements.insertInternal({data: temp12, table: temp11});
    this.mt_suggestion_city.set(temp11);
    abap.statements.clear(temp13);
    temp14.get().city.set(new abap.types.Character(6).set('London'));
    temp14.get().name.set(new abap.types.Character(3).set('Tom'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname1'));
    temp14.get().nr.set(new abap.types.Character(5).set('00001'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(6).set('London'));
    temp14.get().name.set(new abap.types.Character(4).set('Tom2'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname2'));
    temp14.get().nr.set(new abap.types.Character(5).set('00002'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(6).set('London'));
    temp14.get().name.set(new abap.types.Character(4).set('Tom3'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname3'));
    temp14.get().nr.set(new abap.types.Character(5).set('00003'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(6).set('London'));
    temp14.get().name.set(new abap.types.Character(4).set('Tom4'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname4'));
    temp14.get().nr.set(new abap.types.Character(5).set('00004'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(4).set('Rome'));
    temp14.get().name.set(new abap.types.Character(9).set('Michaela1'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname5'));
    temp14.get().nr.set(new abap.types.Character(5).set('00005'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(4).set('Rome'));
    temp14.get().name.set(new abap.types.Character(9).set('Michaela2'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname6'));
    temp14.get().nr.set(new abap.types.Character(5).set('00006'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(4).set('Rome'));
    temp14.get().name.set(new abap.types.Character(9).set('Michaela3'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname7'));
    temp14.get().nr.set(new abap.types.Character(5).set('00007'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(4).set('Rome'));
    temp14.get().name.set(new abap.types.Character(9).set('Michaela4'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname8'));
    temp14.get().nr.set(new abap.types.Character(5).set('00008'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine1'));
    temp14.get().lastname.set(new abap.types.Character(9).set('lastname9'));
    temp14.get().nr.set(new abap.types.Character(5).set('00009'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine2'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname10'));
    temp14.get().nr.set(new abap.types.Character(5).set('00010'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().city.set(new abap.types.Character(5).set('Paris'));
    temp14.get().name.set(new abap.types.Character(8).set('Hermine3'));
    temp14.get().lastname.set(new abap.types.Character(10).set('lastname11'));
    temp14.get().nr.set(new abap.types.Character(5).set('00011'));
    abap.statements.insertInternal({data: temp14, table: temp13});
    this.mt_employees.set(temp13);
  }
  async z2ui5_on_rendering(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let form = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - Value Help Examples'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    form.set((await (await (await (await page.get().grid({default_span: new abap.types.Character(8).set('L7 M7 S7')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(21).set('Input with Value Help')})).get().content({ns: new abap.types.Character(4).set('form')})));
    await (await (await (await (await (await form.get().label({text: new abap.types.Character(26).set('Input with sugestion items')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().color_01})), placeholder: new abap.types.Character(28).set('fill in your favorite colour'), suggestionitems: (await client.get().z2ui5_if_client$_bind({val: this.mt_suggestion})), showsuggestion: abap.builtin.abap_true})).get().get()).get().suggestion_items()).get().get()).get().list_item({text: new abap.types.Character(7).set('{VALUE}'), additionaltext: new abap.types.Character(7).set('{DESCR}')});
    await (await form.get().label({text: new abap.types.Character(26).set('Input only numbers allowed')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().quantity})), type: new abap.types.Character(6).set('Number'), placeholder: new abap.types.Character(8).set('quantity')});
    await (await form.get().label({text: new abap.types.Character(13).set('Input with F4')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().color_02})), placeholder: new abap.types.Character(28).set('fill in your favorite colour'), showvaluehelp: abap.builtin.abap_true, valuehelprequest: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('POPUP_TABLE_F4')}))});
    await (await (await form.get().label({text: new abap.types.Character(15).set('Custom F4 Popup')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().name})), placeholder: new abap.types.Character(4).set('name'), showvaluehelp: abap.builtin.abap_true, valuehelprequest: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('POPUP_TABLE_F4_CUSTOM')}))})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().lastname})), placeholder: new abap.types.Character(8).set('lastname'), showvaluehelp: abap.builtin.abap_true, valuehelprequest: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('POPUP_TABLE_F4_CUSTOM')}))});
    await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(5).set('Clear'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('BUTTON_CLEAR')})), type: new abap.types.Character(6).set('Reject'), enabled: abap.builtin.abap_false, icon: new abap.types.Character(17).set('sap-icon://delete')})).get().button({text: new abap.types.Character(14).set('Send to Server'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SEND')})), enabled: abap.builtin.abap_false, type: new abap.types.Character(7).set('Success')});
    let unique200 = this.mv_view_popup;
    if (abap.compare.eq(unique200, new abap.types.Character(14).set('POPUP_TABLE_F4'))) {
      await this.popup_f4_table({client: client});
    } else if (abap.compare.eq(unique200, new abap.types.Character(21).set('POPUP_TABLE_F4_CUSTOM'))) {
      await this.popup_f4_table_custom({client: client});
    }
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_009'] = z2ui5_cl_demo_app_009;
z2ui5_cl_demo_app_009.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_009.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_009.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_009.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_009.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_009.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_009.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_009.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_009.s_suggestion_items = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {});
z2ui5_cl_demo_app_009.temp1_6d1f103a38 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp1_6d1f103a38");
z2ui5_cl_demo_app_009.temp2_6d1f103a38 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp2_6d1f103a38");
z2ui5_cl_demo_app_009.s_suggestion_items_city = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items_city", undefined, {}, {});
z2ui5_cl_demo_app_009.temp3_6d1f103a38 = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_SUGGESTION_ITEMS_CITY-DESCR"})}, "Z2UI5_CL_DEMO_APP_009=>s_suggestion_items_city", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp3_6d1f103a38");
z2ui5_cl_demo_app_009.s_employee = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {});
z2ui5_cl_demo_app_009.temp4_6d1f103a38 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp4_6d1f103a38");
z2ui5_cl_demo_app_009.temp5_6d1f103a38 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-CITY"}), "nr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NR"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-NAME"}), "lastname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_009=>S_EMPLOYEE-LASTNAME"})}, "Z2UI5_CL_DEMO_APP_009=>s_employee", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_009=>temp5_6d1f103a38");
export {z2ui5_cl_demo_app_009};
//# sourceMappingURL=z2ui5_cl_demo_app_009.clas.mjs.map