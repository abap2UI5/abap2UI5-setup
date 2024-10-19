const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_030.clas.abap
class z2ui5_cl_demo_app_030 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_030';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_030=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_030=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
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
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_030=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_030=>ty_row", undefined, {}, {});
    let lv_dummy = new abap.types.Character(68, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let header_title = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let cont = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp1);
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(11).set('incompleted'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(7).set('working'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(7).set('working'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.t_tab.set(temp1);
    }
    let unique225 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique225, new abap.types.Character(16).set('BUTTON_ROUNDTRIP'))) {
      lv_dummy.set(new abap.types.Character(68).set('user pressed a button, your custom implementation can be called here'));
    } else if (abap.compare.eq(unique225, new abap.types.Character(14).set('BUTTON_MSG_BOX'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(40).set('this is a message box with a custom text'), type: new abap.types.Character(7).set('success')});
    } else if (abap.compare.eq(unique225, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await view.get().dynamic_page({showfooter: abap.builtin.abap_true})));
    header_title.set((await (await (await page.get().title({ns: new abap.types.Character(1).set('f')})).get().get()).get().dynamic_page_title()));
    await (await header_title.get().heading({ns: new abap.types.Character(1).set('f')})).get().title({text: new abap.types.Character(12).set('Header Title')});
    await (await header_title.get().expanded_content({ns: new abap.types.Character(1).set('f')})).get().label({text: new abap.types.Character(20).set('this is a subheading')});
    await (await header_title.get().snapped_content({ns: new abap.types.Character(1).set('f')})).get().label({text: new abap.types.Character(20).set('this is a subheading')});
    await (await (await (await (await (await header_title.get().actions({ns: new abap.types.Character(1).set('f')})).get().overflow_toolbar()).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://edit`), text: new abap.types.Character(11).set('edit header'), type: new abap.types.Character(10).set('Emphasized'), tooltip: new abap.types.Character(4).set('edit')})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://pull-down`), text: new abap.types.Character(12).set('show section'), type: new abap.types.Character(10).set('Emphasized'), tooltip: new abap.types.Character(9).set('pull-down')})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://show`), text: new abap.types.Character(10).set('show state'), tooltip: new abap.types.Character(4).set('show')})).get().button({text: new abap.types.Character(7).set('Go Back'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')}))});
    await (await (await (await header_title.get().navigation_actions()).get().button({icon: new abap.types.Character(22).set('sap-icon://full-screen'), type: new abap.types.Character(11).set('Transparent')})).get().button({icon: new abap.types.Character(27).set('sap-icon://exit-full-screen'), type: new abap.types.Character(11).set('Transparent')})).get().button({icon: new abap.types.Character(18).set('sap-icon://decline'), type: new abap.types.Character(11).set('Transparent')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().header()).get().dynamic_page_header({pinnable: abap.builtin.abap_true})).get().horizontal_layout()).get().vertical_layout()).get().object_attribute({title: new abap.types.Character(8).set('Location'), text: new abap.types.Character(11).set('Warehouse A')})).get().object_attribute({title: new abap.types.Character(6).set('Halway'), text: new abap.types.Character(3).set('23L')})).get().object_attribute({title: new abap.types.Character(4).set('Rack'), text: new abap.types.Character(2).set('34')})).get().get_parent()).get().vertical_layout()).get().object_attribute({title: new abap.types.Character(8).set('Location'), text: new abap.types.Character(11).set('Warehouse A')})).get().object_attribute({title: new abap.types.Character(6).set('Halway'), text: new abap.types.Character(3).set('23L')})).get().object_attribute({title: new abap.types.Character(4).set('Rack'), text: new abap.types.Character(2).set('34')})).get().get_parent()).get().vertical_layout()).get().object_attribute({title: new abap.types.Character(8).set('Location'), text: new abap.types.Character(11).set('Warehouse A')})).get().object_attribute({title: new abap.types.Character(6).set('Halway'), text: new abap.types.Character(3).set('23L')})).get().object_attribute({title: new abap.types.Character(4).set('Rack'), text: new abap.types.Character(2).set('34')});
    cont.set((await page.get().content({ns: new abap.types.Character(1).set('f')})));
    await (await cont.get().list({headertext: new abap.types.Character(10).set('List Ouput'), items: (await client.get().z2ui5_if_client$_bind({val: this.t_tab}))})).get().standard_list_item({title: new abap.types.Character(7).set('{TITLE}'), description: new abap.types.Character(7).set('{DESCR}'), icon: new abap.types.Character(6).set('{ICON}'), info: new abap.types.Character(6).set('{INFO}')});
    await (await (await (await page.get().footer({ns: new abap.types.String().set(`f`)})).get().overflow_toolbar()).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://edit`), text: new abap.types.Character(11).set('edit header'), type: new abap.types.Character(10).set('Emphasized'), tooltip: new abap.types.Character(4).set('edit')})).get().overflow_toolbar_button({icon: new abap.types.String().set(`sap-icon://pull-down`), text: new abap.types.Character(12).set('show section'), type: new abap.types.Character(10).set('Emphasized'), tooltip: new abap.types.Character(9).set('pull-down')});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_030'] = z2ui5_cl_demo_app_030;
z2ui5_cl_demo_app_030.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_030.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_030.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_030.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_030.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_030.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_030.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_030.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_030.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_030=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_030=>ty_row", undefined, {}, {});
export {z2ui5_cl_demo_app_030};
//# sourceMappingURL=z2ui5_cl_demo_app_030.clas.mjs.map