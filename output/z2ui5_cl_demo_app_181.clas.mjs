const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_181.clas.abap
class z2ui5_cl_demo_app_181 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_181';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_URL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_EVENT": {"visibility": "U", "parameters": {}},
  "VIEW_DISPLAY": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_url = new abap.types.String({qualifiedName: "STRING"});
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
  async on_event() {
    let unique441 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique441, new abap.types.Character(4).set('BOOK'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(16).set('BOOKED !!! ENJOY')});
    } else if (abap.compare.eq(unique441, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
      return;
    }
  }
  async view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp7 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-KEY"})}, "z2ui5_cl_demo_app_181=>ty_cities", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_181=>t_cities");
    let temp2 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-KEY"})}, "z2ui5_cl_demo_app_181=>ty_cities", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-KEY"})}, "z2ui5_cl_demo_app_181=>ty_cities", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_181=>t_cities");
    let temp6 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-KEY"})}, "z2ui5_cl_demo_app_181=>ty_cities", undefined, {}, {});
    let card_1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-SUBTITLE"}), "revenue": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-REVENUE"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS"}), "status_schema": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS_SCHEMA"})}, "z2ui5_cl_demo_app_181=>ty_product_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_181=>t_product_items");
    let temp4 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-SUBTITLE"}), "revenue": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-REVENUE"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS"}), "status_schema": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS_SCHEMA"})}, "z2ui5_cl_demo_app_181=>ty_product_items", undefined, {}, {});
    let card_2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp7.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.String().set(`Cards Demo`), class: new abap.types.String().set(`sapUiContentPadding`), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp7})));
    abap.statements.clear(temp1);
    temp2.get().text.set(new abap.types.String().set(`Berlin`));
    temp2.get().key.set(new abap.types.String().set(`BR`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().text.set(new abap.types.String().set(`London`));
    temp2.get().key.set(new abap.types.String().set(`LN`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().text.set(new abap.types.String().set(`Madrid`));
    temp2.get().key.set(new abap.types.String().set(`MD`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().text.set(new abap.types.String().set(`Prague`));
    temp2.get().key.set(new abap.types.String().set(`PR`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().text.set(new abap.types.String().set(`Paris`));
    temp2.get().key.set(new abap.types.String().set(`PS`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().text.set(new abap.types.String().set(`Sofia`));
    temp2.get().key.set(new abap.types.String().set(`SF`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().text.set(new abap.types.String().set(`Vienna`));
    temp2.get().key.set(new abap.types.String().set(`VN`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    abap.statements.clear(temp5);
    temp6.get().text.set(new abap.types.String().set(`Berlin`));
    temp6.get().key.set(new abap.types.String().set(`BR`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`London`));
    temp6.get().key.set(new abap.types.String().set(`LN`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`Madrid`));
    temp6.get().key.set(new abap.types.String().set(`MD`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`Prague`));
    temp6.get().key.set(new abap.types.String().set(`PR`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`Paris`));
    temp6.get().key.set(new abap.types.String().set(`PS`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`Sofia`));
    temp6.get().key.set(new abap.types.String().set(`SF`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`Vienna`));
    temp6.get().key.set(new abap.types.String().set(`VN`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    card_1.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().card({width: new abap.types.String().set(`300px`), class: new abap.types.String().set(`sapUiMediumMargin`)})).get().header({ns: new abap.types.String().set(`f`)})).get().card_header({title: new abap.types.String().set(`Buy bus ticket on-line`), subtitle: new abap.types.String().set(`Buy a single-ride ticket for a date`), iconsrc: new abap.types.String().set(`sap-icon://bus-public-transport`)})).get().get_parent()).get().get_parent()).get().content({ns: new abap.types.String().set(`f`)})).get().vbox({height: new abap.types.String().set(`110px`), class: new abap.types.String().set(`sapUiSmallMargin`), justifycontent: new abap.types.String().set(`SpaceBetween`)})).get().hbox({justifycontent: new abap.types.String().set(`SpaceBetween`)})).get().combobox({width: new abap.types.String().set(`120px`), placeholder: new abap.types.String().set(`From City`), items: abap.operators.concat(new abap.types.String().set(`{path:'`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind_local({val: temp1, path: abap.builtin.abap_true})),new abap.types.String().set(`', sorter: { path: 'TEXT' } }`)))})).get().get()).get().item({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`)})).get().get_parent()).get().combobox({width: new abap.types.String().set(`120px`), placeholder: new abap.types.String().set(`To City`), items: abap.operators.concat(new abap.types.String().set(`{path:'`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind_local({val: temp5, path: abap.builtin.abap_true})),new abap.types.String().set(`', sorter: { path: 'TEXT' } }`)))})).get().get()).get().item({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`)})).get().get_parent()).get().get_parent()).get().hbox({rendertype: new abap.types.String().set(`Bare`), justifycontent: new abap.types.String().set(`SpaceBetween`)})).get().date_picker({width: new abap.types.String().set(`200px`), placeholder: new abap.types.String().set(`Choose Date ...`)})).get().button({text: new abap.types.String().set(`Book`), type: new abap.types.String().set(`Emphasized`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`BOOK`)})), class: new abap.types.String().set(`sapUiTinyMarginBegin`)})));
    abap.statements.clear(temp3);
    temp4.get().title.set(new abap.types.String().set(`Notebook HT`));
    temp4.get().subtitle.set(new abap.types.String().set(`ID23452256-D44`));
    temp4.get().revenue.set(new abap.types.String().set(`27.25K EUR`));
    temp4.get().status.set(new abap.types.String().set(`success`));
    temp4.get().status_schema.set(new abap.types.String().set(`Success`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().title.set(new abap.types.String().set(`Notebook XT`));
    temp4.get().subtitle.set(new abap.types.String().set(`ID27852256-D47`));
    temp4.get().revenue.set(new abap.types.String().set(`7.35K EUR`));
    temp4.get().status.set(new abap.types.String().set(`exceeded`));
    temp4.get().status_schema.set(new abap.types.String().set(`Error`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().title.set(new abap.types.String().set(`Notebook ST`));
    temp4.get().subtitle.set(new abap.types.String().set(`ID123555587-I05`));
    temp4.get().revenue.set(new abap.types.String().set(`22.89K EUR`));
    temp4.get().status.set(new abap.types.String().set(`warning`));
    temp4.get().status_schema.set(new abap.types.String().set(`Warning`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    card_2.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().card({width: new abap.types.String().set(`300px`), class: new abap.types.String().set(`sapUiMediumMargin`)})).get().header({ns: new abap.types.String().set(`f`)})).get().card_header({title: new abap.types.String().set(`Project Cloud Transformation`), subtitle: new abap.types.String().set(`Revenue per Product | EUR`)})).get().get_parent()).get().get_parent()).get().content({ns: new abap.types.String().set(`f`)})).get().list({class: new abap.types.String().set(`sapUiSmallMarginBottom`), showseparators: new abap.types.String().set(`None`), items: (await this.client.get().z2ui5_if_client$_bind_local({val: temp3}))})).get().custom_list_item()).get().hbox({alignitems: new abap.types.String().set(`Center`), justifycontent: new abap.types.String().set(`SpaceBetween`)})).get().vbox({class: new abap.types.String().set(`sapUiSmallMarginBegin sapUiSmallMarginTopBottom`)})).get().title({text: new abap.types.String().set(`{TITLE}`), titlestyle: new abap.types.String().set(`H3`)})).get().text({text: new abap.types.String().set(`{SUBTITLE}`)})).get().get_parent()).get().object_status({class: new abap.types.String().set(`sapUiTinyMargin sapUiSmallMarginEnd`), text: new abap.types.String().set(`{REVENUE}`), state: new abap.types.String().set(`{STATUS_SCHEMA}`)})));
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_initialized, abap.builtin.abap_false)) {
      this.mv_initialized.set(abap.builtin.abap_true);
      await this.view_display();
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_181'] = z2ui5_cl_demo_app_181;
z2ui5_cl_demo_app_181.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_181.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_181.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_181.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_181.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_181.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_181.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_181.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_181.ty_cities = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-KEY"})}, "z2ui5_cl_demo_app_181=>ty_cities", undefined, {}, {});
z2ui5_cl_demo_app_181.t_cities = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_CITIES-KEY"})}, "z2ui5_cl_demo_app_181=>ty_cities", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_181=>t_cities");
z2ui5_cl_demo_app_181.ty_product_items = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-SUBTITLE"}), "revenue": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-REVENUE"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS"}), "status_schema": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS_SCHEMA"})}, "z2ui5_cl_demo_app_181=>ty_product_items", undefined, {}, {});
z2ui5_cl_demo_app_181.t_product_items = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-SUBTITLE"}), "revenue": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-REVENUE"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS"}), "status_schema": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_181=>TY_PRODUCT_ITEMS-STATUS_SCHEMA"})}, "z2ui5_cl_demo_app_181=>ty_product_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_181=>t_product_items");
export {z2ui5_cl_demo_app_181};
//# sourceMappingURL=z2ui5_cl_demo_app_181.clas.mjs.map