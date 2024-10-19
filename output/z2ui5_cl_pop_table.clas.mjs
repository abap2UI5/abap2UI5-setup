const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_pop_table.clas.abap
class z2ui5_cl_pop_table {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POP_TABLE';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_RESULT": {"type": () => {return new abap.types.Structure({"row": new abap.types.DataReference(new abap.types.Character(4)), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_pop_table=>ty_s_result", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_TAB": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_EVENT": {"visibility": "O", "parameters": {}},
  "DISPLAY": {"visibility": "O", "parameters": {}},
  "ON_EVENT_CONFIRM": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_TABLE", RTTIName: "\\CLASS=Z2UI5_CL_POP_TABLE"});}, "is_optional": " "}, "I_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}, "I_TITLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"row": new abap.types.DataReference(new abap.types.Character(4)), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_pop_table=>ty_s_result", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_result = new abap.types.Structure({"row": new abap.types.DataReference(new abap.types.Character(4)), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_pop_table=>ty_s_result", undefined, {}, {});
    this.mr_tab = new abap.types.DataReference(new abap.types.Character(4));
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.title = new abap.types.String({qualifiedName: "STRING"});
    this.title.set('Table View');
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
  async display() {
    let fs_tab_out_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let list = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let ls_comp = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    abap.statements.assign({target: fs_tab_out_, source: this.mr_tab.dereference()});
    popup.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), stretch: abap.builtin.abap_true, title: this.title})).get().content()));
    tab.set((await popup.get().table({items: (await this.client.get().z2ui5_if_client$_bind({val: fs_tab_out_}))})));
    lt_comp.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_any({val: fs_tab_out_})));
    list.set((await tab.get().column_list_item({valign: new abap.types.String().set(`Top`)})));
    cells.set((await list.get().cells()));
    for await (const unique161 of abap.statements.loop(lt_comp)) {
      ls_comp.set(unique161);
      await cells.get().text({text: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(ls_comp.get().name,new abap.types.String().set(`}`)))});
    }
    columns.set((await tab.get().columns()));
    for await (const unique162 of abap.statements.loop(lt_comp)) {
      ls_comp.set(unique162);
      await (await (await columns.get().column({width: new abap.types.Character(4).set('8rem')})).get().header({ns: new abap.types.String().set(``)})).get().text({text: ls_comp.get().name});
    }
    await (await (await popup.get().get_parent()).get().buttons()).get().button({text: new abap.types.Character(2).set('OK'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async factory(INPUT) {
    return z2ui5_cl_pop_table.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_TABLE", RTTIName: "\\CLASS=Z2UI5_CL_POP_TABLE"});
    let i_tab = INPUT?.i_tab;
    let i_title = INPUT?.i_title || new abap.types.Character();
    let fs_tab_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    r_result.set(await (new abap.Classes['Z2UI5_CL_POP_TABLE']()).constructor_());
    if (abap.compare.initial(i_title) === false) {
      r_result.get().title.set(i_title);
    }
    abap.statements.createData(r_result.get().mr_tab,{"like": i_tab});
    abap.statements.createData(r_result.get().ms_result.get().row,{"likeLineOf": i_tab});
    abap.statements.assign({target: fs_tab_, source: r_result.get().mr_tab.dereference()});
    fs_tab_.set(i_tab);
    return r_result;
  }
  async on_event() {
    let unique163 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique163, new abap.types.Character(14).set('BUTTON_CONFIRM'))) {
      this.ms_result.get().check_confirmed.set(abap.builtin.abap_true);
      await this.on_event_confirm();
    } else if (abap.compare.eq(unique163, new abap.types.Character(6).set('CANCEL'))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.client.get().z2ui5_if_client$nav_app_leave({app: (await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
  }
  async on_event_confirm() {
    await this.client.get().z2ui5_if_client$popup_destroy();
    await this.client.get().z2ui5_if_client$nav_app_leave({app: (await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
  }
  async result() {
    let result = new abap.types.Structure({"row": new abap.types.DataReference(new abap.types.Character(4)), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_pop_table=>ty_s_result", undefined, {}, {});
    result.set(this.ms_result);
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display();
      return;
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_POP_TABLE'] = z2ui5_cl_pop_table;
z2ui5_cl_pop_table.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_table.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_pop_table.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_table.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_pop_table.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_table.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_pop_table.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_pop_table.z2ui5_if_app$license.set('MIT');
z2ui5_cl_pop_table.ty_s_result = new abap.types.Structure({"row": new abap.types.DataReference(new abap.types.Character(4)), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_pop_table=>ty_s_result", undefined, {}, {});
export {z2ui5_cl_pop_table};
//# sourceMappingURL=z2ui5_cl_pop_table.clas.mjs.map