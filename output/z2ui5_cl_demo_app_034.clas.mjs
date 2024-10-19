const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_034.clas.abap
class z2ui5_cl_demo_app_034 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_034';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_BAPIRET": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "BAPIRETTAB");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_POPUP_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_MAIN_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_POPUP_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_MAIN": {"visibility": "U", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "VIEW_POPUP_BAL": {"visibility": "U", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_bapiret = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "BAPIRETTAB");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_popup_name = new abap.types.String({qualifiedName: "STRING"});
    this.mv_main_xml = new abap.types.String({qualifiedName: "STRING"});
    this.mv_popup_xml = new abap.types.String({qualifiedName: "STRING"});
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
  async view_main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(17).set('abap2UI5 - Popups'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(10).set('L8 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await grid.get().simple_form({title: new abap.types.Character(6).set('Tables')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(2).set('01')})).get().button({text: new abap.types.Character(16).set('Show bapiret tab'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('POPUP_BAL')}))});
    this.mv_main_xml.set((await (await page.get().get_root()).get().xml_get()));
  }
  async view_popup_bal(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: new abap.types.Character(28).set('abap2ui5 - Popup Message Log')})).get().table({items: (await client.get().z2ui5_if_client$_bind({val: this.t_bapiret}))})).get().columns()).get().column({width: new abap.types.Character(4).set('5rem')})).get().text({text: new abap.types.Character(4).set('Type')})).get().get_parent()).get().column({width: new abap.types.Character(4).set('5rem')})).get().text({text: new abap.types.Character(6).set('Number')})).get().get_parent()).get().column({width: new abap.types.Character(4).set('5rem')})).get().text({text: new abap.types.Character(2).set('ID')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(7).set('Message')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(6).set('{TYPE}')})).get().text({text: new abap.types.Character(8).set('{NUMBER}')})).get().text({text: new abap.types.Character(4).set('{ID}')})).get().text({text: new abap.types.Character(9).set('{MESSAGE}')})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(5).set('close'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('POPUP_BAL_CLOSE')})), type: new abap.types.Character(10).set('Emphasized')})));
    this.mv_popup_xml.set((await (await popup.get().get_root()).get().xml_get()));
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "BAPIRETTAB");
    let temp2 = new abap.types.Structure({"type": new abap.types.Character(1, {"qualifiedName":"BAPI_MTYPE","ddicName":"BAPI_MTYPE"}), "id": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "number": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "message": new abap.types.Character(220, {"qualifiedName":"BAPI_MSG","ddicName":"BAPI_MSG"}), "log_no": new abap.types.Character(20, {"qualifiedName":"BALOGNR","ddicName":"BALOGNR"}), "log_msg_no": new abap.types.Numc({length: 6, qualifiedName: "BALMNR"}), "message_v1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "message_v4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "parameter": new abap.types.Character(32, {"qualifiedName":"BAPI_PARAM","ddicName":"BAPI_PARAM"}), "row": new abap.types.Integer({qualifiedName: "BAPI_LINE"}), "field": new abap.types.Character(30, {"qualifiedName":"BAPI_FLD","ddicName":"BAPI_FLD"}), "system": new abap.types.Character(10, {"qualifiedName":"BAPILOGSYS","ddicName":"BAPILOGSYS"})}, "BAPIRET2", "BAPIRET2", {}, {});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
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
    this.mv_popup_name.set(new abap.types.Character(1).set(''));
    let unique229 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique229, new abap.types.Character(9).set('POPUP_BAL'))) {
      this.mv_popup_name.set(new abap.types.Character(9).set('POPUP_BAL'));
    } else if (abap.compare.eq(unique229, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    await this.view_main({client: client});
    let unique230 = this.mv_popup_name;
    if (abap.compare.eq(unique230, new abap.types.Character(9).set('POPUP_BAL'))) {
      await this.view_popup_bal({client: client});
    }
    await client.get().z2ui5_if_client$view_display({val: this.mv_main_xml});
    await client.get().z2ui5_if_client$popup_display({val: this.mv_popup_xml});
    abap.statements.clear(this.mv_main_xml);
    abap.statements.clear(this.mv_popup_xml);
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_034'] = z2ui5_cl_demo_app_034;
z2ui5_cl_demo_app_034.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_034.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_034.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_034.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_034.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_034.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_034.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_034.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_034};
//# sourceMappingURL=z2ui5_cl_demo_app_034.clas.mjs.map