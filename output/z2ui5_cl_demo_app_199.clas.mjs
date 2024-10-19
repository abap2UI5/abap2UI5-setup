const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_199.clas.abap
class z2ui5_cl_demo_app_199 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_199';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_TABLE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_COUNTER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_COMP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"REFRESH_DATA": {"visibility": "I", "parameters": {}},
  "ADD_DATA": {"visibility": "I", "parameters": {}},
  "ON_INIT": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "RENDER_MAIN": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_table = new abap.types.DataReference(new abap.types.Character(4));
    this.mv_counter = new abap.types.String({qualifiedName: "STRING"});
    this.mt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async on_event() {
    let unique487 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique487, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique487, new abap.types.Character(5).set('CLEAR'))) {
      await this.refresh_data();
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique487, new abap.types.Character(3).set('ADD'))) {
      await this.add_data();
      await this.client.get().z2ui5_if_client$view_model_update();
    }
  }
  async on_init() {
    await this.refresh_data();
    await this.render_main();
  }
  async render_main() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let fs_tab_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let table = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let comp = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    abap.statements.assign({target: fs_tab_, source: this.mt_table.dereference()});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(7).set('Refresh'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    table.set((await page.get().table({growing: new abap.types.Character(4).set('true'), width: new abap.types.Character(4).set('auto'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: fs_tab_}))})));
    columns.set((await table.get().columns()));
    for await (const unique488 of abap.statements.loop(this.mt_comp)) {
      comp.set(unique488);
      await (await columns.get().column()).get().text({text: comp.get().name});
    }
    cells.set((await (await (await (await columns.get().get_parent()).get().items()).get().column_list_item({valign: new abap.types.Character(6).set('Middle'), type: new abap.types.Character(10).set('Navigation')})).get().cells()));
    for await (const unique489 of abap.statements.loop(this.mt_comp)) {
      comp.set(unique489);
      await cells.get().object_identifier({text: abap.operators.concat(new abap.types.Character(1).set('{'),abap.operators.concat(comp.get().name,new abap.types.Character(1).set('}')))});
    }
    await (await page.get().button({text: new abap.types.Character(5).set('Clear'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLEAR')}))})).get().button({text: new abap.types.Character(3).set('Add'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(3).set('ADD')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.on_init();
    }
    abap.statements.assign({target: fs_tab_, source: this.mt_table.dereference()});
    if (abap.compare.ne(this.mv_counter, abap.builtin.lines({val: fs_tab_})) && abap.compare.initial(this.mv_counter) === false) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(26).set('Frontend Lines <> Backend!'), type: new abap.types.Character(5).set('error')});
    }
    await this.on_event();
    this.mv_counter.set(abap.builtin.lines({val: fs_tab_}));
  }
  async refresh_data() {
    let fs_table_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    
    try {
      abap.statements.createData(this.mt_table,{"type": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ty_t_01")});
      abap.statements.assign({target: fs_table_, source: this.mt_table.dereference()});
      this.mt_comp.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_any({val: fs_table_})));
      await abap.statements.select(fs_table_, {select: "SELECT \"id\", \"id_prev\" FROM " + abap.buildDbTableName("z2ui5_t_01") + " UP TO " + abap.IntegerFactory.get(2).get() + " ROWS", primaryKey: ["mandt","id"]});
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
  }
  async add_data() {
    let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    abap.statements.assign({target: fs_tab_, source: this.mt_table.dereference()});
    abap.statements.append({source: fs_tab_, lines: true, target: fs_tab_});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_199'] = z2ui5_cl_demo_app_199;
z2ui5_cl_demo_app_199.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_199.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_199.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_199.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_199.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_199.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_199.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_199.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_199};
//# sourceMappingURL=z2ui5_cl_demo_app_199.clas.mjs.map