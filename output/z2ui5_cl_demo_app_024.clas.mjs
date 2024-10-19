const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_024.clas.abap
class z2ui5_cl_demo_app_024 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_024';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_INPUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INPUT2": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_BACKEND_EVENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_input = new abap.types.String({qualifiedName: "STRING"});
    this.mv_input2 = new abap.types.String({qualifiedName: "STRING"});
    this.mv_backend_event = new abap.types.String({qualifiedName: "STRING"});
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
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - flow logic - APP 01'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(10).set('Controller')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(25).set('call new app (first View)'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('CALL_NEW_APP')}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(26).set('call new app (second View)'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('CALL_NEW_APP_VIEW')}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(24).set('call new app (set Event)'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('CALL_NEW_APP_EVENT')}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_input}))})).get().button({text: new abap.types.Character(23).set('call new app (set data)'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('CALL_NEW_APP_READ')}))})).get().label({text: new abap.types.Character(39).set('some data, you can read in the next app')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_input2}))});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_025", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_025"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_025", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_025"});
    let lo_app_next = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_025", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_025"});
    let lo_prev_stack_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_025", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_025"});
    let lo_called_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_025", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_025"});
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.display_view({client: client});
    }
    let unique216 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique216, new abap.types.Character(12).set('CALL_NEW_APP'))) {
      temp1.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_025']()).constructor_());
      await client.get().z2ui5_if_client$nav_app_call({app: temp1});
    } else if (abap.compare.eq(unique216, new abap.types.Character(17).set('CALL_NEW_APP_VIEW'))) {
      lo_app.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_025']()).constructor_());
      lo_app.get().mv_show_view.set(new abap.types.Character(6).set('SECOND'));
      await client.get().z2ui5_if_client$nav_app_call({app: lo_app});
    } else if (abap.compare.eq(unique216, new abap.types.Character(17).set('CALL_NEW_APP_READ'))) {
      lo_app_next.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_025']()).constructor_());
      lo_app_next.get().mv_input_previous_set.set(this.mv_input);
      await client.get().z2ui5_if_client$nav_app_call({app: lo_app_next});
    } else if (abap.compare.eq(unique216, new abap.types.Character(18).set('CALL_NEW_APP_EVENT'))) {
      lo_app_next.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_025']()).constructor_());
      lo_app_next.get().mv_event_backend.set(new abap.types.Character(13).set('NEW_APP_EVENT'));
      await client.get().z2ui5_if_client$nav_app_call({app: lo_app_next});
    } else if (abap.compare.eq(unique216, new abap.types.Character(4).set('BACK'))) {
      lo_prev_stack_app.set((await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack})));
      await client.get().z2ui5_if_client$nav_app_leave({app: lo_prev_stack_app});
    } else {
      let unique217 = this.mv_backend_event;
      if (abap.compare.eq(unique217, new abap.types.Character(30).set('CALL_PREVIOUS_APP_INPUT_RETURN'))) {
        await abap.statements.cast(temp2, (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
        lo_called_app.set(temp2);
        abap.statements.clear(this.mv_backend_event);
        await client.get().z2ui5_if_client$message_box_display({text: abap.operators.concat(new abap.types.String().set(`Input made in the previous app:`),lo_called_app.get().mv_input)});
      }
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_024'] = z2ui5_cl_demo_app_024;
z2ui5_cl_demo_app_024.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_024.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_024.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_024.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_024.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_024.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_024.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_024.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_024};
//# sourceMappingURL=z2ui5_cl_demo_app_024.clas.mjs.map