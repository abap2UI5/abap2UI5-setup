const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_025.clas.abap
class z2ui5_cl_demo_app_025 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_025';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_INPUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INPUT_PREVIOUS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INPUT_PREVIOUS_SET": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SHOW_VIEW": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_EVENT_BACKEND": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.mv_input = new abap.types.String({qualifiedName: "STRING"});
    this.mv_input_previous = new abap.types.String({qualifiedName: "STRING"});
    this.mv_input_previous_set = new abap.types.String({qualifiedName: "STRING"});
    this.mv_show_view = new abap.types.String({qualifiedName: "STRING"});
    this.mv_event_backend = new abap.types.String({qualifiedName: "STRING"});
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
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_025", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_025"});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_001", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_001"});
    let temp3 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_024", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_024"});
    let lo_previous_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_024", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_024"});
    let temp4 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_024", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_024"});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let unique218 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique218, new abap.types.Character(16).set('BUTTON_ROUNDTRIP'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(74).set('server-client roundtrip, method on_event of the abap controller was called')});
    } else if (abap.compare.eq(unique218, new abap.types.Character(14).set('BUTTON_RESTART'))) {
      temp1.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_025']()).constructor_());
      await client.get().z2ui5_if_client$nav_app_call({app: temp1});
    } else if (abap.compare.eq(unique218, new abap.types.Character(17).set('BUTTON_CHANGE_APP'))) {
      temp2.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_001']()).constructor_());
      await client.get().z2ui5_if_client$nav_app_call({app: temp2});
    } else if (abap.compare.eq(unique218, new abap.types.Character(20).set('BUTTON_READ_PREVIOUS'))) {
      await abap.statements.cast(temp3, (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
      lo_previous_app.set(temp3);
      this.mv_input_previous.set(lo_previous_app.get().mv_input2);
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`data of previous app read`)});
    } else if (abap.compare.eq(unique218, new abap.types.Character(14).set('SHOW_VIEW_MAIN'))) {
      this.mv_show_view.set(new abap.types.Character(4).set('MAIN'));
    } else if (abap.compare.eq(unique218, new abap.types.Character(15).set('BACK_WITH_EVENT'))) {
      await abap.statements.cast(temp4, (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack})));
      lo_previous_app.set(temp4);
      lo_previous_app.get().mv_backend_event.set(new abap.types.Character(30).set('CALL_PREVIOUS_APP_INPUT_RETURN'));
      await client.get().z2ui5_if_client$nav_app_leave({app: lo_previous_app});
    } else if (abap.compare.eq(unique218, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else {
      let unique219 = this.mv_event_backend;
      if (abap.compare.eq(unique219, new abap.types.Character(13).set('NEW_APP_EVENT'))) {
        await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(45).set('new app called and event NEW_APP_EVENT raised')});
      }
    }
    let unique220 = this.mv_show_view;
    if (abap.compare.eq(unique220, new abap.types.Character(4).set('MAIN')) || abap.compare.eq(unique220, new abap.types.Character(1).set(''))) {
      view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - flow logic - APP 02'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
      await (await (await (await (await (await (await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(11).set('View: FIRST')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(25).set('Input set by previous app')})).get().input({value: this.mv_input_previous_set})).get().label({text: new abap.types.Character(20).set('Data of previous app')})).get().input({value: this.mv_input_previous})).get().button({text: new abap.types.Character(4).set('read'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('BUTTON_READ_PREVIOUS')}))})).get().label({text: new abap.types.Character(43).set('Call previous app and show data of this app')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_input}))})).get().button({text: new abap.types.Character(4).set('back'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BACK_WITH_EVENT')}))});
    } else if (abap.compare.eq(unique220, new abap.types.Character(6).set('SECOND'))) {
      view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - flow logic - APP 02'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
      await (await (await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(12).set('View: SECOND')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(21).set('leave to previous app'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')}))})).get().label({text: new abap.types.Character(4).set('Demo')})).get().button({text: new abap.types.Character(14).set('show view main'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('SHOW_VIEW_MAIN')}))});
    }
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_025'] = z2ui5_cl_demo_app_025;
z2ui5_cl_demo_app_025.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_025.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_025.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_025.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_025.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_025.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_025.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_025.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_025};
//# sourceMappingURL=z2ui5_cl_demo_app_025.clas.mjs.map