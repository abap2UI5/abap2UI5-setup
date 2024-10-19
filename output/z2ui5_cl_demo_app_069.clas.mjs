const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_069.clas.abap
class z2ui5_cl_demo_app_069 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_069';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE1-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ENABLED_01": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ENABLED_02": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY_MASTER": {"visibility": "O", "parameters": {}},
  "VIEW_DISPLAY_APP_01": {"visibility": "O", "parameters": {}},
  "VIEW_DISPLAY_APP_02": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_tree = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE1-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_enabled_01 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_enabled_01.set('X');
    this.mv_check_enabled_02 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async view_display_app_01() {
    let lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_view_nested.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await lo_view_nested.get().page({title: new abap.types.String().set(`APP_01`)})));
    await page.get().button({text: new abap.types.Character(16).set('Update this view'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('UPDATE_DETAIL')}))});
    await this.client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`test`), method_insert: new abap.types.Character(16).set('addMidColumnPage'), method_destroy: new abap.types.Character(23).set('removeAllMidColumnPages')});
  }
  async view_display_app_02() {
    let lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_view_nested.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await lo_view_nested.get().page({title: new abap.types.String().set(`APP_02`)})));
    await (await page.get().button({text: new abap.types.Character(16).set('Update this view'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('UPDATE_DETAIL')}))})).get().input();
    await page.get().button({text: new abap.types.Character(9).set('button 01'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`NEST_TEST`)})), enabled: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_check_enabled_01}))});
    await page.get().button({text: new abap.types.Character(9).set('button 01'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`NEST_TEST`)})), enabled: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_check_enabled_01}))});
    await page.get().button({text: new abap.types.Character(9).set('button 02'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`NEST_TEST`)})), enabled: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_check_enabled_02}))});
    await this.client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`test`), method_insert: new abap.types.Character(16).set('addMidColumnPage'), method_destroy: new abap.types.Character(23).set('removeAllMidColumnPages')});
  }
  async view_display_master() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_master = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(47).set('abap2UI5 - Master-Detail View with Nested Views'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link({text: new abap.types.Character(4).set('Demo'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://twitter.com/abap2UI5/status/1680907265891618817`)})).get().link()).get().get_parent()));
    lr_master.set((await (await page.get().flexible_column_layout({layout: new abap.types.Character(23).set('TwoColumnsBeginExpanded'), id: new abap.types.Character(4).set('test')})).get().begin_column_pages()));
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${TEXT}`), table: temp1});
    await (await (await lr_master.get().tree({items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_tree}))})).get().items()).get().standard_tree_item({type: new abap.types.Character(6).set('Active'), title: new abap.types.Character(6).set('{TEXT}'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`EVENT_ITEM`), t_arg: temp1}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE1-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree");
    let temp4 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE1-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1", undefined, {}, {});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes");
    let temp2 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes");
    let temp10 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes");
    let temp8 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes");
    let temp12 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {});
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes");
    let temp14 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {});
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    let temp15 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp16 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp3);
      temp4.get().text.set(new abap.types.Character(4).set('Apps'));
      abap.statements.clear(temp1);
      temp2.get().text.set(new abap.types.Character(8).set('Frontend'));
      abap.statements.clear(temp9);
      temp10.get().text.set(new abap.types.Character(7).set('App_001'));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().text.set(new abap.types.Character(7).set('App_002'));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp2.get().nodes.set(temp9);
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp4.get().nodes.set(temp1);
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().text.set(new abap.types.Character(13).set('Configuration'));
      abap.statements.clear(temp7);
      temp8.get().text.set(new abap.types.Character(14).set('User Interface'));
      abap.statements.clear(temp11);
      temp12.get().text.set(new abap.types.Character(5).set('Theme'));
      abap.statements.insertInternal({data: temp12, table: temp11});
      temp12.get().text.set(new abap.types.Character(7).set('Library'));
      abap.statements.insertInternal({data: temp12, table: temp11});
      temp8.get().nodes.set(temp11);
      abap.statements.insertInternal({data: temp8, table: temp7});
      temp8.get().text.set(new abap.types.Character(8).set('Database'));
      abap.statements.clear(temp13);
      temp14.get().text.set(new abap.types.Character(4).set('HANA'));
      abap.statements.insertInternal({data: temp14, table: temp13});
      temp14.get().text.set(new abap.types.Character(6).set('ANY DB'));
      abap.statements.insertInternal({data: temp14, table: temp13});
      temp8.get().nodes.set(temp13);
      abap.statements.insertInternal({data: temp8, table: temp7});
      temp4.get().nodes.set(temp7);
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.mt_tree.set(temp3);
      await this.view_display_master();
    }
    let unique281 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique281, new abap.types.String().set(`UPDATE_DETAIL`))) {
      await this.view_display_app_01();
    } else if (abap.compare.eq(unique281, new abap.types.String().set(`EVENT_ITEM`))) {
      lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp6.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp5});
      abap.builtin.sy.get().tabix.set(temp6);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      let unique282 = temp5;
      if (abap.compare.eq(unique282, new abap.types.Character(7).set('App_001'))) {
        await this.view_display_app_01();
      } else if (abap.compare.eq(unique282, new abap.types.Character(7).set('App_002'))) {
        await this.view_display_app_02();
      }
    } else if (abap.compare.eq(unique281, new abap.types.String().set(`NEST_TEST`))) {
      temp15.set(abap.builtin.boolc(abap.compare.eq(this.mv_check_enabled_01, abap.builtin.abap_false)));
      this.mv_check_enabled_01.set(temp15);
      temp16.set(abap.builtin.boolc(abap.compare.eq(this.mv_check_enabled_01, abap.builtin.abap_false)));
      this.mv_check_enabled_02.set(temp16);
      await client.get().z2ui5_if_client$nest_view_model_update();
    } else if (abap.compare.eq(unique281, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_069'] = z2ui5_cl_demo_app_069;
z2ui5_cl_demo_app_069.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_069.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_069.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_069.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_069.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_069.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_069.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_069.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_069.ty_t_tree3 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {});
z2ui5_cl_demo_app_069.ty_t_tree2 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {});
z2ui5_cl_demo_app_069.ty_t_tree1 = new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE1-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1", undefined, {}, {});
z2ui5_cl_demo_app_069.ty_t_tree = abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE1-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE2-TEXT"}), "nodes": abap.types.TableFactory.construct(new abap.types.Structure({"is_selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_069=>TY_T_TREE3-TEXT"})}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1-nodes")}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree1", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_069=>ty_t_tree");
export {z2ui5_cl_demo_app_069};
//# sourceMappingURL=z2ui5_cl_demo_app_069.clas.mjs.map