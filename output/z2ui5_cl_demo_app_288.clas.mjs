const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_288.clas.abap
class z2ui5_cl_demo_app_288 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_288';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "EDITABLE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "ENABLED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LT_PRODUCT_COLLECTION": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp1_2e54214ed7");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LT_PRODUCT_COLLECTION2": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp2_2e54214ed7");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LT_PRODUCT_COLLECTION3": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp3_2e54214ed7");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTED_PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTED_PRODUCT2": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELECTED_PRODUCT3": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.editable = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.enabled = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.lt_product_collection = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp1_2e54214ed7");
    this.lt_product_collection2 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp2_2e54214ed7");
    this.lt_product_collection3 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp3_2e54214ed7");
    this.selected_product = new abap.types.String({qualifiedName: "STRING"});
    this.selected_product2 = new abap.types.String({qualifiedName: "STRING"});
    this.selected_product3 = new abap.types.String({qualifiedName: "STRING"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page_01 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let page_02 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page_01.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Sample: Select`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page_01.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page_01.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(85).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.Select/sample/sap.m.sample.Select')});
    page_02.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page_01.get().page({showheader: abap.builtin.abap_false, class: new abap.types.String().set(`sapUiContentPadding`)})).get().sub_header()).get().toolbar()).get().toolbar_spacer()).get().select({forceselection: abap.builtin.abap_false, selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selected_product})), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_product_collection}))})).get().item({key: new abap.types.Character(12).set('{PRODUCT_ID}'), text: new abap.types.Character(6).set('{NAME}')})).get().get_parent()).get().get_parent()).get().get_parent()).get().content()).get().hbox({justifycontent: new abap.types.String().set(`SpaceAround`)})).get().select({enabled: (await client.get().z2ui5_if_client$_bind({val: this.enabled})), editable: (await client.get().z2ui5_if_client$_bind({val: this.editable})), forceselection: abap.builtin.abap_false, selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selected_product2})), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_product_collection2}))})).get().item({key: new abap.types.Character(12).set('{PRODUCT_ID}'), text: new abap.types.Character(6).set('{NAME}')})).get().get_parent()).get().vbox()).get().hbox({alignitems: new abap.types.String().set(`Center`)})).get().label({text: new abap.types.String().set(`Enabled:`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().switch({type: new abap.types.String().set(`AcceptReject`), state: (await client.get().z2ui5_if_client$_bind({val: this.enabled}))})).get().get_parent()).get().hbox({alignitems: new abap.types.String().set(`Center`)})).get().label({text: new abap.types.String().set(`Editable:`), class: new abap.types.String().set(`sapUiTinyMarginEnd`)})).get().switch({type: new abap.types.String().set(`AcceptReject`), state: (await client.get().z2ui5_if_client$_bind({val: this.editable}))})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().footer()).get().toolbar()).get().toolbar_spacer()).get().select({forceselection: abap.builtin.abap_false, selectedkey: (await client.get().z2ui5_if_client$_bind({val: this.selected_product3})), type: new abap.types.String().set(`IconOnly`), icon: new abap.types.String().set(`sap-icon://filter`), autoadjustwidth: abap.builtin.abap_true, items: (await client.get().z2ui5_if_client$_bind({val: this.lt_product_collection3}))})).get().item({key: new abap.types.Character(12).set('{PRODUCT_ID}'), text: new abap.types.Character(6).set('{NAME}')})));
    await client.get().z2ui5_if_client$view_display({val: (await page_02.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique585 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique585, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique585, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`Illustrates the usage of a Select in header, footer and content of a page. Note the different display options.`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp1_2e54214ed7");
    let temp2 = new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp2_2e54214ed7");
    let temp4 = new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp3_2e54214ed7");
    let temp6 = new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
      this.selected_product.set(new abap.types.String().set(`HT-1001`));
      this.selected_product2.set(new abap.types.String().set(`HT-1001`));
      this.selected_product3.set(new abap.types.String().set(`HT-1001`));
      abap.statements.clear(temp1);
      temp2.get().product_id.set(new abap.types.Character(7).set('HT-1000'));
      temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 15'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().product_id.set(new abap.types.Character(7).set('HT-1001'));
      temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 17'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().product_id.set(new abap.types.Character(7).set('HT-1002'));
      temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 18'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().product_id.set(new abap.types.Character(7).set('HT-1003'));
      temp2.get().name.set(new abap.types.Character(17).set('Notebook Basic 19'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().product_id.set(new abap.types.Character(7).set('HT-1007'));
      temp2.get().name.set(new abap.types.Character(11).set('ITelO Vault'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.lt_product_collection.set(temp1);
      abap.statements.sort(this.lt_product_collection,{by: [{component: "name"}]});
      abap.statements.clear(temp3);
      temp4.get().product_id.set(new abap.types.Character(7).set('HT-1000'));
      temp4.get().name.set(new abap.types.Character(17).set('Notebook Basic 15'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product_id.set(new abap.types.Character(7).set('HT-1001'));
      temp4.get().name.set(new abap.types.Character(17).set('Notebook Basic 17'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product_id.set(new abap.types.Character(7).set('HT-1002'));
      temp4.get().name.set(new abap.types.Character(17).set('Notebook Basic 18'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product_id.set(new abap.types.Character(7).set('HT-1003'));
      temp4.get().name.set(new abap.types.Character(17).set('Notebook Basic 19'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product_id.set(new abap.types.Character(7).set('HT-1007'));
      temp4.get().name.set(new abap.types.Character(11).set('ITelO Vault'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.lt_product_collection2.set(temp3);
      abap.statements.sort(this.lt_product_collection2,{by: [{component: "name"}]});
      abap.statements.clear(temp5);
      temp6.get().product_id.set(new abap.types.Character(7).set('HT-1000'));
      temp6.get().name.set(new abap.types.Character(17).set('Notebook Basic 15'));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().product_id.set(new abap.types.Character(7).set('HT-1001'));
      temp6.get().name.set(new abap.types.Character(17).set('Notebook Basic 17'));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().product_id.set(new abap.types.Character(7).set('HT-1002'));
      temp6.get().name.set(new abap.types.Character(17).set('Notebook Basic 18'));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().product_id.set(new abap.types.Character(7).set('HT-1003'));
      temp6.get().name.set(new abap.types.Character(17).set('Notebook Basic 19'));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().product_id.set(new abap.types.Character(7).set('HT-1007'));
      temp6.get().name.set(new abap.types.Character(11).set('ITelO Vault'));
      abap.statements.insertInternal({data: temp6, table: temp5});
      this.lt_product_collection3.set(temp5);
      abap.statements.sort(this.lt_product_collection3,{by: [{component: "name"}]});
      this.editable.set(abap.builtin.abap_true);
      this.enabled.set(abap.builtin.abap_true);
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_288'] = z2ui5_cl_demo_app_288;
z2ui5_cl_demo_app_288.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_288.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_288.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_288.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_288.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_288.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_288.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_288.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_288.ty_product_collection = new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {});
z2ui5_cl_demo_app_288.temp1_2e54214ed7 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp1_2e54214ed7");
z2ui5_cl_demo_app_288.temp2_2e54214ed7 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp2_2e54214ed7");
z2ui5_cl_demo_app_288.temp3_2e54214ed7 = abap.types.TableFactory.construct(new abap.types.Structure({"product_id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-PRODUCT_ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_288=>TY_PRODUCT_COLLECTION-NAME"})}, "z2ui5_cl_demo_app_288=>ty_product_collection", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_288=>temp3_2e54214ed7");
export {z2ui5_cl_demo_app_288};
//# sourceMappingURL=z2ui5_cl_demo_app_288.clas.mjs.map