const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_061.clas.abap
class z2ui5_cl_demo_app_061 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_061';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_VIEW": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = new abap.types.DataReference(new abap.types.Character(4));
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
  async set_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let temp1 = new abap.types.Structure({"check_view_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_allow_multi_req": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_types=>ty_s_event_control", undefined, {}, {});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(29).set('abap2UI5 - RTTI created Table'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    abap.statements.assign({target: fs_tab_, source: this.t_tab.dereference()});
    abap.statements.clear(temp1);
    temp1.get().check_view_destroy.set(abap.builtin.abap_true);
    tab.set((await (await (await (await (await (await (await (await page.get().table({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: fs_tab_})), mode: new abap.types.Character(11).set('MultiSelect')})).get().header_toolbar()).get().overflow_toolbar()).get().title({text: new abap.types.Character(19).set('Dynamic typed table')})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`server <-> client`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('SEND'), s_ctrl: temp1}))})).get().get_parent()).get().get_parent()));
    await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(4).set('uuid')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('time')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(8).set('previous')})).get().get_parent();
    await (await (await (await (await (await tab.get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().input({value: new abap.types.Character(4).set('{ID}')})).get().input({value: new abap.types.Character(12).set('{TIMESTAMPL}')})).get().input({value: new abap.types.Character(9).set('{ID_PREV}')});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let temp2 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    let temp3 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    let temp4 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.createData(this.t_tab,{"name": 'Z2UI5_T_01',"table": true});
      abap.statements.assign({target: fs_tab_, source: this.t_tab.dereference()});
      abap.statements.clear(temp2);
      temp2.get().id.set(new abap.types.Character(15).set('this is an uuid'));
      temp2.get().timestampl.set(new abap.types.Character(10).set('2023234243'));
      temp2.get().id_prev.set(new abap.types.Character(8).set('previous'));
      abap.statements.insertInternal({data: temp2, table: fs_tab_});
      abap.statements.clear(temp3);
      temp3.get().id.set(new abap.types.Character(15).set('this is an uuid'));
      temp3.get().timestampl.set(new abap.types.Character(10).set('2023234243'));
      temp3.get().id_prev.set(new abap.types.Character(8).set('previous'));
      abap.statements.insertInternal({data: temp3, table: fs_tab_});
      abap.statements.clear(temp4);
      temp4.get().id.set(new abap.types.Character(15).set('this is an uuid'));
      temp4.get().timestampl.set(new abap.types.Character(10).set('2023234243'));
      temp4.get().id_prev.set(new abap.types.Character(8).set('previous'));
      abap.statements.insertInternal({data: temp4, table: fs_tab_});
    }
    let unique273 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique273, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    await this.set_view();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_061'] = z2ui5_cl_demo_app_061;
z2ui5_cl_demo_app_061.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_061.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_061.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_061.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_061.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_061.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_061.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_061.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_061};
//# sourceMappingURL=z2ui5_cl_demo_app_061.clas.mjs.map