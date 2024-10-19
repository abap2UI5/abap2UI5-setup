const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_141.clas.abap
class z2ui5_cl_demo_app_141 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_141';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_141=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_141=>temp1_4540ab214f");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TEXTAREA": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_STRETCH_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_POPUP_INPUT": {"type": () => {return new abap.types.Structure({"value1": new abap.types.String({qualifiedName: "STRING"}), "value2": new abap.types.String({qualifiedName: "STRING"}), "check_is_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "combo_key": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_BAPIRET": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "BAPIRETTAB");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_VIEW_DISPLAY": {"visibility": "U", "parameters": {}},
  "UI5_POPUP_INPUT": {"visibility": "U", "parameters": {}},
  "UI5_HANDLE_EVENT": {"visibility": "U", "parameters": {}},
  "UI5_INIT": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_141=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_141=>temp1_4540ab214f");
    this.mv_textarea = new abap.types.String({qualifiedName: "STRING"});
    this.mv_stretch_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.ms_popup_input = new abap.types.Structure({"value1": new abap.types.String({qualifiedName: "STRING"}), "value2": new abap.types.String({qualifiedName: "STRING"}), "check_is_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "combo_key": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.t_bapiret = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "BAPIRETTAB");
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
  async ui5_handle_event() {
    let unique398 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique398, new abap.types.Character(14).set('POPUP_TO_INPUT'))) {
      this.ms_popup_input.get().value1.set(new abap.types.Character(6).set('value1'));
      await this.ui5_popup_input();
    } else if (abap.compare.eq(unique398, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async ui5_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "BAPIRETTAB");
    let temp2 = new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {});
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
    this.t_bapiret.set(temp1);
  }
  async ui5_popup_input() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    dialog.set((await popup.get().dialog({contentheight: new abap.types.Character(5).set('500px'), contentwidth: new abap.types.Character(5).set('500px'), title: new abap.types.Character(5).set('Title')})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await dialog.get().content()).get().simple_form()).get().label({text: new abap.types.Character(6).set('Input1'), id: new abap.types.Character(4).set('lbl1')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_popup_input.get().value1}))})).get().label({text: new abap.types.Character(6).set('Input2')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_popup_input.get().value2}))})).get().label({text: new abap.types.Character(8).set('Checkbox')})).get().checkbox({selected: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_popup_input.get().check_is_active})), text: new abap.types.Character(18).set('this is a checkbox'), enabled: abap.builtin.abap_true})).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('Cancel'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(22).set('BUTTON_TEXTAREA_CANCEL')}))})).get().button({text: new abap.types.Character(7).set('Confirm'), press: (await this.client.get().z2ui5_if_client$_event_client({val: this.client.get().z2ui5_if_client$cs_event.get().popup_close})), type: new abap.types.Character(10).set('Emphasized')});
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`content`));
    temp4.get().v.set(new abap.types.String().set(`<script> sap.z2ui5.setBlackColor();  </script>`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`preferDOM`));
    temp4.get().v.set(new abap.types.String().set(`true`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    await (await dialog.get()._generic({name: new abap.types.String().set(`HTML`), ns: new abap.types.String().set(`core`), t_prop: temp3})).get().get_parent();
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async ui5_view_display() {
    let css = new abap.types.String({qualifiedName: "STRING"});
    let script = new abap.types.String({qualifiedName: "STRING"});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    css.set(abap.operators.concat(new abap.types.String().set(``),new abap.types.String().set(`.lbl-color { color: red !important; font-size: 30px !important; }`)));
    script.set(abap.operators.concat(new abap.types.String().set(``),abap.operators.concat(new abap.types.String().set(`sap.z2ui5.setBlackColor = function() {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  var lbl = sap.ui.getCore().byId('popupId--lbl1');`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  lbl.setText('changed from js');`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  lbl.addStyleClass('lbl-color');`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`};`)))))))))));
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await (await view.get()._generic({name: new abap.types.String().set(`style`), ns: new abap.types.String().set(`html`)})).get()._cc_plain_xml({val: css})).get().get_parent();
    await (await (await view.get()._generic({name: new abap.types.String().set(`script`), ns: new abap.types.String().set(`html`)})).get()._cc_plain_xml({val: script})).get().get_parent();
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(17).set('abap2UI5 - Popups'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(10).set('L8 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await grid.get().simple_form({title: new abap.types.Character(6).set('Inputs')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(2).set('01')})).get().button({text: new abap.types.Character(22).set('Popup Get Input Values'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('POPUP_TO_INPUT')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.ui5_view_display();
    }
    await this.ui5_handle_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_141'] = z2ui5_cl_demo_app_141;
z2ui5_cl_demo_app_141.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_141.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_141.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_141.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_141.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_141.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_141.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_141.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_141.ty_row = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_141=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_141.temp1_4540ab214f = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_141=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_141=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_141=>temp1_4540ab214f");
export {z2ui5_cl_demo_app_141};
//# sourceMappingURL=z2ui5_cl_demo_app_141.clas.mjs.map