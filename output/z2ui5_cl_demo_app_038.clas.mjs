const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_038.clas.abap
class z2ui5_cl_demo_app_038 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_038';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_MSG": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TYPE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-SUBTITLE"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-DESCRIPTION"}), "group": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-GROUP"})}, "z2ui5_cl_demo_app_038=>ty_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_DISPLAY_VIEW": {"visibility": "U", "parameters": {}},
  "Z2UI5_DISPLAY_POPUP": {"visibility": "U", "parameters": {}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "U", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_msg = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TYPE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-SUBTITLE"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-DESCRIPTION"}), "group": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-GROUP"})}, "z2ui5_cl_demo_app_038=>ty_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Structure({"check_view_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_allow_multi_req": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_types=>ty_s_event_control", undefined, {}, {});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    abap.statements.clear(temp1);
    temp1.get().check_view_destroy.set(abap.builtin.abap_false);
    await (await popup.get().message_popover({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_msg})), groupitems: abap.builtin.abap_true, placement: new abap.types.String().set(`Top`), initiallyexpanded: abap.builtin.abap_true, beforeclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('POPOVER_CLOSE'), s_ctrl: temp1}))})).get().message_item({type: new abap.types.String().set(`{TYPE}`), title: new abap.types.String().set(`{TITLE}`), subtitle: new abap.types.String().set(`{SUBTITLE}`), description: new abap.types.String().set(`{DESCRIPTION}`), groupname: new abap.types.String().set(`{GROUP}`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await popup.get().stringify()), by_id: id});
  }
  async z2ui5_display_popup() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    popup.set((await popup.get().dialog({title: new abap.types.String().set(`Messages`), contentheight: new abap.types.Character(3).set('50%'), contentwidth: new abap.types.Character(3).set('50%')})));
    await (await popup.get().message_view({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_msg})), groupitems: abap.builtin.abap_true})).get().message_item({type: new abap.types.String().set(`{TYPE}`), title: new abap.types.String().set(`{TITLE}`), subtitle: new abap.types.String().set(`{SUBTITLE}`), description: new abap.types.String().set(`{DESCRIPTION}`), groupname: new abap.types.String().set(`{GROUP}`)});
    await (await (await (await (await popup.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({id: new abap.types.String().set(`test2`), text: new abap.types.Character(4).set('test'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`TEST`)}))})).get().button({text: new abap.types.Character(5).set('close'), press: (await this.client.get().z2ui5_if_client$_event_client({val: this.client.get().z2ui5_if_client$cs_event.get().popup_close}))});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async z2ui5_display_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await view.get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`style`)})).get()._cc_plain_xml({val: new abap.types.String().set(`.sapMDialogScroll { height:100%; }`)});
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(15).set('abap2UI5 - List'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    await page.get().button({text: new abap.types.Character(17).set('Messages in Popup'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('POPUP')}))});
    await (await page.get().message_view({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_msg})), groupitems: abap.builtin.abap_true})).get().message_item({type: new abap.types.String().set(`{TYPE}`), title: new abap.types.String().set(`{TITLE}`), subtitle: new abap.types.String().set(`{SUBTITLE}`), description: new abap.types.String().set(`{DESCRIPTION}`), groupname: new abap.types.String().set(`{GROUP}`)});
    await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().button({id: new abap.types.Character(4).set('test'), text: new abap.types.Character(12).set('Messages (6)'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('POPOVER')})), type: new abap.types.Character(10).set('Emphasized')})).get().toolbar_spacer()).get().button({text: new abap.types.Character(14).set('Send to Server'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SEND')})), type: new abap.types.Character(7).set('Success')});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp2 = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TYPE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-SUBTITLE"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-DESCRIPTION"}), "group": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-GROUP"})}, "z2ui5_cl_demo_app_038=>ty_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp3 = new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TYPE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-SUBTITLE"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-DESCRIPTION"}), "group": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-GROUP"})}, "z2ui5_cl_demo_app_038=>ty_msg", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp2);
      temp3.get().description.set(new abap.types.Character(5).set('descr'));
      temp3.get().subtitle.set(new abap.types.Character(8).set('subtitle'));
      temp3.get().title.set(new abap.types.Character(5).set('title'));
      temp3.get().type.set(new abap.types.Character(5).set('Error'));
      temp3.get().group.set(new abap.types.Character(8).set('group 01'));
      abap.statements.insertInternal({data: temp3, table: temp2});
      temp3.get().description.set(new abap.types.Character(5).set('descr'));
      temp3.get().subtitle.set(new abap.types.Character(8).set('subtitle'));
      temp3.get().title.set(new abap.types.Character(5).set('title'));
      temp3.get().type.set(new abap.types.Character(11).set('Information'));
      temp3.get().group.set(new abap.types.Character(8).set('group 01'));
      abap.statements.insertInternal({data: temp3, table: temp2});
      temp3.get().description.set(new abap.types.Character(5).set('descr'));
      temp3.get().subtitle.set(new abap.types.Character(8).set('subtitle'));
      temp3.get().title.set(new abap.types.Character(5).set('title'));
      temp3.get().type.set(new abap.types.Character(11).set('Information'));
      temp3.get().group.set(new abap.types.Character(8).set('group 02'));
      abap.statements.insertInternal({data: temp3, table: temp2});
      temp3.get().description.set(new abap.types.Character(5).set('descr'));
      temp3.get().subtitle.set(new abap.types.Character(8).set('subtitle'));
      temp3.get().title.set(new abap.types.Character(5).set('title'));
      temp3.get().type.set(new abap.types.Character(7).set('Success'));
      temp3.get().group.set(new abap.types.Character(8).set('group 03'));
      abap.statements.insertInternal({data: temp3, table: temp2});
      this.t_msg.set(temp2);
      await this.z2ui5_display_view();
    }
    let unique235 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique235, new abap.types.Character(13).set('POPOVER_CLOSE'))) {
      await client.get().z2ui5_if_client$popover_destroy();
    } else if (abap.compare.eq(unique235, new abap.types.Character(5).set('POPUP'))) {
      await this.z2ui5_display_popup();
    } else if (abap.compare.eq(unique235, new abap.types.Character(4).set('TEST'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`test2`)});
    } else if (abap.compare.eq(unique235, new abap.types.Character(7).set('POPOVER'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`test`)});
    } else if (abap.compare.eq(unique235, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_038'] = z2ui5_cl_demo_app_038;
z2ui5_cl_demo_app_038.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_038.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_038.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_038.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_038.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_038.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_038.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_038.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_038.ty_msg = new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TYPE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-TITLE"}), "subtitle": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-SUBTITLE"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-DESCRIPTION"}), "group": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_038=>TY_MSG-GROUP"})}, "z2ui5_cl_demo_app_038=>ty_msg", undefined, {}, {});
export {z2ui5_cl_demo_app_038};
//# sourceMappingURL=z2ui5_cl_demo_app_038.clas.mjs.map