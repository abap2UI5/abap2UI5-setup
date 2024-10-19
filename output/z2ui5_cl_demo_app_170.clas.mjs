const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_170.clas.abap
class z2ui5_cl_demo_app_170 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_170';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SELECTED_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_DISPLAY": {"visibility": "U", "parameters": {}},
  "UI5_EVENT": {"visibility": "U", "parameters": {}},
  "SIMPLE_POPUP1": {"visibility": "U", "parameters": {}},
  "SIMPLE_POPUP2": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_selected_key = new abap.types.String({qualifiedName: "STRING"});
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
  async simple_popup1() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    dialog.set((await (await popup.get().dialog({stretch: abap.builtin.abap_true, afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BTN_OK_1ND')}))})).get().content()));
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`NavCon`), table: temp1});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/selectedKey}`), table: temp1});
    content.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await dialog.get().icon_tab_bar({selectedkey: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_selected_key})), select: (await this.client.get().z2ui5_if_client$_event_client({val: new abap.types.String().set(`POPUP_NAV_CONTAINER_TO`), t_arg: temp1})), headermode: new abap.types.String().set(`Inline`), expanded: abap.builtin.abap_true, expandable: abap.builtin.abap_false})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`page1`), text: new abap.types.String().set(`Home`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`page2`), text: new abap.types.String().set(`Applications`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`page3`), text: new abap.types.String().set(`Users and Groups`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`page11`), text: new abap.types.String().set(`User 1`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`page32`), text: new abap.types.String().set(`User 2`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`page33`), text: new abap.types.String().set(`User 3`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().content()).get().vbox({height: new abap.types.String().set(`100%`)})).get().nav_container({id: new abap.types.String().set(`NavCon`), initialpage: new abap.types.String().set(`page1`), defaulttransitionname: new abap.types.String().set(`flip`), height: new abap.types.Character(5).set('400px')})).get().pages()).get().page({title: new abap.types.Character(10).set('first page'), id: new abap.types.String().set(`page1`)})).get().get_parent()).get().page({title: new abap.types.Character(11).set('second page'), id: new abap.types.String().set(`page2`)})).get().get_parent()).get().page({title: new abap.types.Character(10).set('third page'), id: new abap.types.String().set(`page3`)})));
    await (await (await (await (await dialog.get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(2).set('OK'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BTN_OK_1ND')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async simple_popup2() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    dialog.set((await (await popup.get().dialog({afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BTN_OK_2ND')}))})).get().content()));
    content.set((await dialog.get().label({text: new abap.types.Character(22).set('this is a second popup')})));
    await (await (await (await (await dialog.get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(14).set('GOTO 1ST POPUP'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BTN_OK_2ND')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async ui5_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await view.get().shell()).get().page({title: new abap.types.Character(25).set('abap2UI5 - Popup To Popup'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().button({text: new abap.types.Character(13).set('Open Popup...'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('POPUP')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async ui5_event() {
    let unique427 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique427, new abap.types.Character(8).set('GOTO_2ND'))) {
      await this.simple_popup2();
    } else if (abap.compare.eq(unique427, new abap.types.Character(10).set('BTN_OK_2ND'))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.simple_popup1();
    } else if (abap.compare.eq(unique427, new abap.types.Character(10).set('BTN_OK_1ND'))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
    } else if (abap.compare.eq(unique427, new abap.types.Character(5).set('POPUP'))) {
      await this.simple_popup1();
    } else if (abap.compare.eq(unique427, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.ui5_display();
      return;
    }
    await this.ui5_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_170'] = z2ui5_cl_demo_app_170;
z2ui5_cl_demo_app_170.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_170.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_170.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_170.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_170.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_170.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_170.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_170.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_170};
//# sourceMappingURL=z2ui5_cl_demo_app_170.clas.mjs.map