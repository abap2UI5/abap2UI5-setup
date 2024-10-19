const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_pop_messages.clas.abap
class z2ui5_cl_pop_messages {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POP_MESSAGES';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_MSG": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_pop_messages=>ty_t_msg");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_MESSAGES", RTTIName: "\\CLASS=Z2UI5_CL_POP_MESSAGES"});}, "is_optional": " "}, "I_MESSAGES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_pop_messages=>ty_t_msg");}, "is_optional": " "}, "I_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_msg = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_pop_messages=>ty_t_msg");
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.title = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async factory(INPUT) {
    return z2ui5_cl_pop_messages.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_MESSAGES", RTTIName: "\\CLASS=Z2UI5_CL_POP_MESSAGES"});
    let i_messages = INPUT?.i_messages;
    if (i_messages?.getQualifiedName === undefined || i_messages.getQualifiedName() !== "Z2UI5_CL_POP_MESSAGES=>TY_T_MSG") { i_messages = undefined; }
    if (i_messages === undefined) { i_messages = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_pop_messages=>ty_t_msg").set(INPUT.i_messages); }
    let i_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_title) {i_title.set(INPUT.i_title);}
    if (INPUT === undefined || INPUT.i_title === undefined) {i_title = new abap.types.String().set(`abap2UI5 - Message Popup`);}
    r_result.set(await (new abap.Classes['Z2UI5_CL_POP_MESSAGES']()).constructor_());
    r_result.get().mt_msg.set(i_messages);
    r_result.get().title.set(i_title);
    return r_result;
  }
  async view_display() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: this.title, afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_CONTINUE')}))})).get().table({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_msg}))})).get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Color')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Info')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(6).set('{TYPE}')})).get().text({text: new abap.types.Character(4).set('{ID}')})).get().text({text: new abap.types.Character(8).set('{NUMBER}')})).get().text({text: new abap.types.Character(9).set('{MESSAGE}')})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().buttons()).get().button({text: new abap.types.Character(8).set('continue'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_CONTINUE')})), type: new abap.types.Character(10).set('Emphasized')})));
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.view_display();
      return;
    }
    let unique159 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique159, new abap.types.String().set(`BUTTON_CONTINUE`))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else {
    }
  }
}
abap.Classes['Z2UI5_CL_POP_MESSAGES'] = z2ui5_cl_pop_messages;
z2ui5_cl_pop_messages.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_messages.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_pop_messages.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_messages.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_pop_messages.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_messages.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_pop_messages.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_messages.z2ui5_if_app$license.set('MIT');
z2ui5_cl_pop_messages.ty_s_msg = new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {});
z2ui5_cl_pop_messages.ty_t_msg = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-TYPE"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-ID"}), "number": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-NUMBER"}), "message": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE"}), "message_v1": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V1"}), "message_v2": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V2"}), "message_v3": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V3"}), "message_v4": new abap.types.String({qualifiedName: "Z2UI5_CL_POP_MESSAGES=>TY_S_MSG-MESSAGE_V4"})}, "z2ui5_cl_pop_messages=>ty_s_msg", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_pop_messages=>ty_t_msg");
export {z2ui5_cl_pop_messages};
//# sourceMappingURL=z2ui5_cl_pop_messages.clas.mjs.map