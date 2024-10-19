await import("./z2ui5_cl_demo_app_137.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_137.clas.abap
class z2ui5_cl_demo_app_137 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_137';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"INSTANCE_COUNTER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SESSION_IS_STATEFUL": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SESSION_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"INITIALIZE_VIEW": {"visibility": "I", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "I", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "SET_SESSION_STATEFUL": {"visibility": "I", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}, "STATEFUL": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.instance_counter = new abap.types.Integer({qualifiedName: "I"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.session_is_stateful = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.session_text = new abap.types.String({qualifiedName: "STRING"});
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
    let lx = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
        this.check_initialized.set(abap.builtin.abap_true);
        await this.initialize_view({client: client});
      }
      await this.on_event({client: client});
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        lx.set(e);
        await client.get().z2ui5_if_client$message_box_display({text: (await lx.get().if_message$get_text())});
      } else {
        throw e;
      }
    }
  }
  async initialize_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let hbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    await this.set_session_stateful({client: client, stateful: abap.builtin.abap_true});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Sample: Sticky Session`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    vbox.set((await page.get().vbox()));
    await vbox.get().info_label({text: (await client.get().z2ui5_if_client$_bind({val: this.session_text}))});
    hbox.set((await vbox.get().hbox({alignitems: new abap.types.Character(6).set('Center')})));
    await hbox.get().label({text: new abap.types.Character(52).set('press button to increment counter in backend session'), class: new abap.types.Character(18).set('sapUiTinyMarginEnd')});
    await hbox.get().button({text: (await client.get().z2ui5_if_client$_bind({val: this.instance_counter})), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('INCREMENT')})), type: new abap.types.Character(10).set('Emphasized')});
    hbox.set((await vbox.get().hbox()));
    await hbox.get().button({text: new abap.types.Character(11).set('End session'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('END_SESSION')}))});
    await hbox.get().button({text: new abap.types.Character(19).set('Start session again'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('START_SESSION')}))});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique394 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique394, new abap.types.Character(4).set('BACK'))) {
      await this.set_session_stateful({client: client, stateful: abap.builtin.abap_false});
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique394, new abap.types.Character(9).set('INCREMENT'))) {
      this.instance_counter.set((await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_137-LCL_STATIC_CONTAINER'].increment()));
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique394, new abap.types.Character(11).set('END_SESSION'))) {
      await this.set_session_stateful({client: client, stateful: abap.builtin.abap_false});
    } else if (abap.compare.eq(unique394, new abap.types.Character(13).set('START_SESSION'))) {
      await this.set_session_stateful({client: client, stateful: abap.builtin.abap_true});
    }
  }
  async set_session_stateful(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let stateful = INPUT?.stateful;
    if (stateful?.getQualifiedName === undefined || stateful.getQualifiedName() !== "ABAP_BOOL") { stateful = undefined; }
    if (stateful === undefined) { stateful = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.stateful); }
    await client.get().z2ui5_if_client$set_session_stateful({stateful: stateful});
    this.session_is_stateful.set(stateful);
    if (abap.compare.eq(stateful, abap.builtin.abap_true)) {
      this.session_text.set(new abap.types.Character(21).set('Session ON (stateful)'));
    } else {
      this.session_text.set(new abap.types.Character(23).set('Session OFF (stateless)'));
    }
    await client.get().z2ui5_if_client$view_model_update();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_137'] = z2ui5_cl_demo_app_137;
z2ui5_cl_demo_app_137.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_137.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_137.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_137.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_137.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_137.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_137.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_137.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_137};
//# sourceMappingURL=z2ui5_cl_demo_app_137.clas.mjs.map