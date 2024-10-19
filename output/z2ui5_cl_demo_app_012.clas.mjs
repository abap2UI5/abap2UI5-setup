const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_012.clas.abap
class z2ui5_cl_demo_app_012 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_012';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_POPUP": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_POPUP_DECIDE": {"visibility": "U", "parameters": {}},
  "UI5_POPUP_INFO_FRONTEND_CLOSE": {"visibility": "U", "parameters": {}},
  "UI5_VIEW_DISPLAY": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_check_popup = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async ui5_popup_decide() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await (await (await (await (await popup.get().dialog({title: new abap.types.Character(14).set('Popup - Decide')})).get().vbox()).get().text({text: new abap.types.Character(61).set('this is a popup to decide, you have to make a decision now...')})).get().get_parent()).get().buttons()).get().button({text: new abap.types.Character(6).set('Cancel'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(19).set('POPUP_DECIDE_CANCEL')}))})).get().button({text: new abap.types.Character(8).set('Continue'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('POPUP_DECIDE_CONTINUE')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async ui5_popup_info_frontend_close() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await (await (await (await popup.get().dialog({title: new abap.types.Character(12).set('Popup - Info')})).get().vbox()).get().text({text: new abap.types.Character(90).set('this is an information, press close to go back to the main view without a server roundtrip')})).get().get_parent()).get().buttons()).get().button({text: new abap.types.Character(5).set('close'), press: (await this.client.get().z2ui5_if_client$_event_client({val: this.client.get().z2ui5_if_client$cs_event.get().popup_close})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async ui5_view_display() {
    let lo_main = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = new abap.types.Structure({"check_view_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_allow_multi_req": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_types=>ty_s_event_control", undefined, {}, {});
    let temp2 = new abap.types.Structure({"check_view_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_allow_multi_req": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_types=>ty_s_event_control", undefined, {}, {});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_main.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()));
    temp3.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await lo_main.get().page({title: new abap.types.Character(17).set('abap2UI5 - Popups'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp3})));
    abap.statements.clear(temp1);
    temp1.get().check_view_destroy.set(abap.builtin.abap_true);
    abap.statements.clear(temp2);
    temp2.get().check_view_destroy.set(abap.builtin.abap_true);
    grid.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L7 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(17).set('Popup in same App')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(40).set('popup rendering, no background rendering'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_POPUP_01'), s_ctrl: temp1}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(53).set('popup rendering, background destroyed and rerendering'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_POPUP_02'), s_ctrl: temp2}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(60).set('popup, background unchanged (default) - close (no roundtrip)'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_POPUP_03')}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(57).set('popup, background unchanged (default) - close with server'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_POPUP_04')}))})).get().get_parent()).get().get_parent()));
    await (await (await (await (await (await grid.get().simple_form({title: new abap.types.Character(16).set('Popup in new App')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(30).set('popup rendering, no background'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_POPUP_05')}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(35).set('popup rendering, hold previous view'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_POPUP_06')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await lo_main.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_020", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_020"});
    let app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_020", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_020"});
    this.me.get().client.set(client);
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.ui5_view_display();
    }
    if (abap.compare.eq(this.mv_check_popup, abap.builtin.abap_true)) {
      this.mv_check_popup.set(abap.builtin.abap_false);
      await abap.statements.cast(temp2, (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
      app.set(temp2);
      await client.get().z2ui5_if_client$message_toast_display({text: abap.operators.concat(app.get().mv_event,new abap.types.String().set(` pressed`))});
    }
    let unique205 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique205, new abap.types.Character(15).set('BUTTON_POPUP_01'))) {
      await this.ui5_popup_decide();
    } else if (abap.compare.eq(unique205, new abap.types.Character(21).set('POPUP_DECIDE_CONTINUE'))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await this.ui5_view_display();
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(16).set('continue pressed')});
    } else if (abap.compare.eq(unique205, new abap.types.Character(19).set('POPUP_DECIDE_CANCEL'))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await this.ui5_view_display();
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(14).set('cancel pressed')});
    } else if (abap.compare.eq(unique205, new abap.types.Character(15).set('BUTTON_POPUP_02'))) {
      await this.ui5_view_display();
      await this.ui5_popup_decide();
    } else if (abap.compare.eq(unique205, new abap.types.Character(15).set('BUTTON_POPUP_03'))) {
      await this.ui5_popup_info_frontend_close();
    } else if (abap.compare.eq(unique205, new abap.types.Character(15).set('BUTTON_POPUP_04'))) {
      await this.ui5_popup_decide();
    } else if (abap.compare.eq(unique205, new abap.types.Character(15).set('BUTTON_POPUP_05'))) {
      this.mv_check_popup.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$view_destroy();
      await client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_DEMO_APP_020'].factory({i_text: new abap.types.Character(108).set('(new app )this is a popup to decide, the text is send from the previous app and the answer will be send back'), i_cancel_text: new abap.types.Character(7).set('Cancel '), i_cancel_event: new abap.types.Character(19).set('POPUP_DECIDE_CANCEL'), i_confirm_text: new abap.types.Character(8).set('Continue'), i_confirm_event: new abap.types.Character(21).set('POPUP_DECIDE_CONTINUE')}))});
    } else if (abap.compare.eq(unique205, new abap.types.Character(15).set('BUTTON_POPUP_06'))) {
      this.mv_check_popup.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_DEMO_APP_020'].factory({i_text: new abap.types.Character(108).set('(new app )this is a popup to decide, the text is send from the previous app and the answer will be send back'), i_cancel_text: new abap.types.Character(6).set('Cancel'), i_cancel_event: new abap.types.Character(19).set('POPUP_DECIDE_CANCEL'), i_confirm_text: new abap.types.Character(8).set('Continue'), i_confirm_event: new abap.types.Character(21).set('POPUP_DECIDE_CONTINUE')}))});
    } else if (abap.compare.eq(unique205, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_012'] = z2ui5_cl_demo_app_012;
z2ui5_cl_demo_app_012.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_012.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_012.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_012.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_012.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_012.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_012.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_012.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_012};
//# sourceMappingURL=z2ui5_cl_demo_app_012.clas.mjs.map