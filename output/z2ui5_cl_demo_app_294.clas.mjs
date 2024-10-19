const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_294.clas.abap
class z2ui5_cl_demo_app_294 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_294';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"LT_A_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_294=>temp1_2fb714d2bc");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "S_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.lt_a_data = abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_294=>temp1_2fb714d2bc");
    this.s_text = new abap.types.String({qualifiedName: "STRING"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(37).set('abap2UI5 - Date Picker - Value States'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(103).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.DatePicker/sample/sap.m.sample.DatePickerValueState')});
    await (await (await (await (await (await page.get().flex_box({items: (await client.get().z2ui5_if_client$_bind({val: this.lt_a_data})), direction: new abap.types.String().set(`Column`)})).get().vbox({class: new abap.types.String().set(`sapUiTinyMargin`)})).get().label({text: new abap.types.Character(7).set('{LABEL}'), labelfor: new abap.types.String().set(`SI`)})).get().date_picker({id: new abap.types.String().set(`DP`), width: new abap.types.String().set(`100%`), valuestate: new abap.types.Character(13).set('{VALUE_STATE}'), valuestatetext: new abap.types.Character(18).set('{VALUE_STATE_TEXT}')})).get().get_parent()).get().get_parent();
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique591 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique591, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique591, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`This example shows different DatePicker value states.`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
      await this.z2ui5_set_data();
    }
    await this.on_event({client: client});
  }
  async z2ui5_set_data() {
    let temp1 = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {});
    let temp2 = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {});
    let temp3 = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {});
    let temp4 = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {});
    let temp5 = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {});
    abap.statements.clear(this.s_text);
    abap.statements.clear(this.lt_a_data);
    this.s_text.set(new abap.types.Character(27).set('DatePicker with valueState '));
    abap.statements.clear(temp1);
    temp1.get().label.set(abap.operators.concat(this.s_text,new abap.types.Character(4).set('None')));
    temp1.get().value_state.set(new abap.types.Character(4).set('None'));
    abap.statements.append({source: temp1, target: this.lt_a_data});
    abap.statements.clear(temp2);
    temp2.get().label.set(abap.operators.concat(this.s_text,new abap.types.Character(11).set('Information')));
    temp2.get().value_state.set(new abap.types.Character(11).set('Information'));
    abap.statements.append({source: temp2, target: this.lt_a_data});
    abap.statements.clear(temp3);
    temp3.get().label.set(abap.operators.concat(this.s_text,new abap.types.Character(7).set('Success')));
    temp3.get().value_state.set(new abap.types.Character(7).set('Success'));
    abap.statements.append({source: temp3, target: this.lt_a_data});
    abap.statements.clear(temp4);
    temp4.get().label.set(abap.operators.concat(this.s_text,new abap.types.Character(31).set('Warning and long valueStateText')));
    temp4.get().value_state.set(new abap.types.Character(7).set('Warning'));
    temp4.get().value_state_text.set(abap.operators.concat(new abap.types.Character(71).set('Warning message. This is an extra long text used as a warning message. '),new abap.types.Character(115).set('It illustrates how the text wraps into two or more lines without truncation to show the full length of the message.')));
    abap.statements.append({source: temp4, target: this.lt_a_data});
    abap.statements.clear(temp5);
    temp5.get().label.set(abap.operators.concat(this.s_text,new abap.types.Character(5).set('Error')));
    temp5.get().value_state.set(new abap.types.Character(5).set('Error'));
    abap.statements.append({source: temp5, target: this.lt_a_data});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_294'] = z2ui5_cl_demo_app_294;
z2ui5_cl_demo_app_294.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_294.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_294.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_294.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_294.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_294.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_294.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_294.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_294.ty_a_data = new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {});
z2ui5_cl_demo_app_294.temp1_2fb714d2bc = abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-LABEL"}), "value_state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE"}), "value_state_text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_294=>TY_A_DATA-VALUE_STATE_TEXT"})}, "z2ui5_cl_demo_app_294=>ty_a_data", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_294=>temp1_2fb714d2bc");
export {z2ui5_cl_demo_app_294};
//# sourceMappingURL=z2ui5_cl_demo_app_294.clas.mjs.map