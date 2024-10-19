const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_154.clas.abap
class z2ui5_cl_demo_app_154 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_154';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_DISPLAY": {"visibility": "U", "parameters": {}},
  "UI5_EVENT": {"visibility": "U", "parameters": {}},
  "UI5_CALLBACK": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async ui5_event() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_pop_messages=>ty_t_msg");
    let temp2 = new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_MESSAGES", RTTIName: "\\CLASS=Z2UI5_CL_POP_MESSAGES"});
    let unique409 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique409, new abap.types.Character(5).set('POPUP'))) {
      abap.statements.clear(temp1);
      temp2.get().message.set(new abap.types.Character(60).set('An empty Report field causes an empty XML Message to be sent'));
      temp2.get().type.set(new abap.types.Character(1).set('E'));
      temp2.get().id.set(new abap.types.Character(4).set('MSG1'));
      temp2.get().number.set(new abap.types.Character(3).set('001'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().message.set(new abap.types.Character(37).set('Check was executed for wrong Scenario'));
      temp2.get().type.set(new abap.types.Character(1).set('E'));
      temp2.get().id.set(new abap.types.Character(4).set('MSG1'));
      temp2.get().number.set(new abap.types.Character(3).set('002'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().message.set(new abap.types.Character(34).set('Request was handled without errors'));
      temp2.get().type.set(new abap.types.Character(1).set('S'));
      temp2.get().id.set(new abap.types.Character(4).set('MSG1'));
      temp2.get().number.set(new abap.types.Character(3).set('003'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().message.set(new abap.types.Character(17).set('product activated'));
      temp2.get().type.set(new abap.types.Character(1).set('S'));
      temp2.get().id.set(new abap.types.Character(4).set('MSG4'));
      temp2.get().number.set(new abap.types.Character(3).set('375'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().message.set(new abap.types.Character(22).set('check the input values'));
      temp2.get().type.set(new abap.types.Character(1).set('W'));
      temp2.get().id.set(new abap.types.Character(4).set('MSG2'));
      temp2.get().number.set(new abap.types.Character(3).set('375'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().message.set(new abap.types.Character(22).set('product already in use'));
      temp2.get().type.set(new abap.types.Character(1).set('I'));
      temp2.get().id.set(new abap.types.Character(4).set('MSG2'));
      temp2.get().number.set(new abap.types.Character(3).set('375'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      lo_app.set((await abap.Classes['Z2UI5_CL_POP_MESSAGES'].factory({i_messages: temp1})));
      await this.client.get().z2ui5_if_client$nav_app_call({app: lo_app});
    } else if (abap.compare.eq(unique409, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async ui5_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await view.get().shell()).get().page({title: new abap.types.Character(25).set('abap2UI5 - Popup Messages'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().button({text: new abap.types.Character(13).set('Open Popup...'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('POPUP')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      if (abap.compare.eq(this.mv_check_initialized, abap.builtin.abap_false)) {
        this.mv_check_initialized.set(abap.builtin.abap_true);
        await this.ui5_display();
      } else {
        await this.ui5_callback();
      }
      return;
    }
    await this.ui5_event();
  }
  async ui5_callback() {
    let lo_prev = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let temp3 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_MESSAGES", RTTIName: "\\CLASS=Z2UI5_CL_POP_MESSAGES"});
    let lo_dummy = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_MESSAGES", RTTIName: "\\CLASS=Z2UI5_CL_POP_MESSAGES"});
    try {
      lo_prev.set((await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
      await abap.statements.cast(temp3, lo_prev);
      lo_dummy.set(temp3);
      await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`callback after popup messages`)});
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_154'] = z2ui5_cl_demo_app_154;
z2ui5_cl_demo_app_154.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_154.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_154.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_154.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_154.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_154.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_154.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_154.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_154};
//# sourceMappingURL=z2ui5_cl_demo_app_154.clas.mjs.map