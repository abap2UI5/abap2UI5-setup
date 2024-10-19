const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_091.clas.abap
class z2ui5_cl_demo_app_091 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_091';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-ID"}), "lane": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-LANE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLE"}), "titleabbreviation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLEABBREVIATION"}), "children": abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array"), "state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATE"}), "statetext": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATETEXT"}), "focused": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "highlighted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "texts": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array")}, "Z2UI5_CL_DEMO_APP_091=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_nodes2");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_LANES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ID"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ICON"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-LABEL"}), "position": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-POSITION"})}, "Z2UI5_CL_DEMO_APP_091=>t_lanes5", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_lanes5");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-ID"}), "lane": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-LANE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLE"}), "titleabbreviation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLEABBREVIATION"}), "children": abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array"), "state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATE"}), "statetext": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATETEXT"}), "focused": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "highlighted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "texts": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array")}, "Z2UI5_CL_DEMO_APP_091=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_nodes2");
    this.mt_lanes = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ID"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ICON"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-LABEL"}), "position": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-POSITION"})}, "Z2UI5_CL_DEMO_APP_091=>t_lanes5", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_lanes5");
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_set_data();
      await this.z2ui5_view_display();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique325 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique325, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-ID"}), "lane": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-LANE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLE"}), "titleabbreviation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLEABBREVIATION"}), "children": abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array"), "state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATE"}), "statetext": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATETEXT"}), "focused": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "highlighted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "texts": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array")}, "Z2UI5_CL_DEMO_APP_091=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_nodes2");
    let temp2 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-ID"}), "lane": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-LANE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLE"}), "titleabbreviation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLEABBREVIATION"}), "children": abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array"), "state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATE"}), "statetext": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATETEXT"}), "focused": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "highlighted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "texts": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array")}, "Z2UI5_CL_DEMO_APP_091=>t_nodes2", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array");
    let temp7 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array");
    let temp9 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array");
    let temp11 = abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array");
    let temp13 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array");
    let temp15 = abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array");
    let temp17 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array");
    let temp19 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array");
    let temp21 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array");
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ID"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ICON"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-LABEL"}), "position": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-POSITION"})}, "Z2UI5_CL_DEMO_APP_091=>t_lanes5", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_lanes5");
    let temp4 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ID"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ICON"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-LABEL"}), "position": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-POSITION"})}, "Z2UI5_CL_DEMO_APP_091=>t_lanes5", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().id.set(new abap.types.String().set(`1`));
    temp2.get().lane.set(new abap.types.String().set(`0`));
    temp2.get().title.set(new abap.types.String().set(`Sales Order 1`));
    temp2.get().titleabbreviation.set(new abap.types.String().set(`SO 1`));
    abap.statements.clear(temp5);
    abap.statements.insertInternal({data: abap.IntegerFactory.get(10), table: temp5});
    abap.statements.insertInternal({data: abap.IntegerFactory.get(11), table: temp5});
    abap.statements.insertInternal({data: abap.IntegerFactory.get(12), table: temp5});
    temp2.get().children.set(temp5);
    temp2.get().state.set(new abap.types.String().set(`Positive`));
    temp2.get().statetext.set(new abap.types.String().set(`OK status`));
    temp2.get().focused.set(abap.builtin.abap_true);
    temp2.get().highlighted.set(abap.builtin.abap_false);
    abap.statements.clear(temp7);
    abap.statements.insertInternal({data: new abap.types.String().set(`Sales Order Document Overdue long text for the wrap up all the aspects`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`Not cleared`), table: temp7});
    temp2.get().texts.set(temp7);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`10`));
    temp2.get().lane.set(new abap.types.String().set(`1`));
    temp2.get().title.set(new abap.types.String().set(`Outbound Delivery 40`));
    temp2.get().titleabbreviation.set(new abap.types.String().set(`OD 40`));
    temp2.get().state.set(new abap.types.String().set(`Positive`));
    temp2.get().statetext.set(new abap.types.String().set(`OK status`));
    temp2.get().focused.set(abap.builtin.abap_true);
    temp2.get().highlighted.set(abap.builtin.abap_false);
    abap.statements.clear(temp9);
    abap.statements.insertInternal({data: new abap.types.String().set(`Sales Order Document Overdue long text for the wrap up all the aspects`), table: temp9});
    abap.statements.insertInternal({data: new abap.types.String().set(`Not cleared`), table: temp9});
    temp2.get().texts.set(temp9);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`11`));
    temp2.get().lane.set(new abap.types.String().set(`1`));
    temp2.get().title.set(new abap.types.String().set(`Outbound Delivery 43`));
    temp2.get().titleabbreviation.set(new abap.types.String().set(`OD 43`));
    abap.statements.clear(temp11);
    abap.statements.insertInternal({data: abap.IntegerFactory.get(21), table: temp11});
    temp2.get().children.set(temp11);
    temp2.get().state.set(new abap.types.String().set(`Neutral`));
    temp2.get().statetext.set(new abap.types.String().set(`OK status`));
    temp2.get().focused.set(abap.builtin.abap_true);
    temp2.get().highlighted.set(abap.builtin.abap_false);
    abap.statements.clear(temp13);
    abap.statements.insertInternal({data: new abap.types.String().set(`Sales Order Document Overdue long text for the wrap up all the aspects`), table: temp13});
    abap.statements.insertInternal({data: new abap.types.String().set(`Not cleared`), table: temp13});
    temp2.get().texts.set(temp13);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`12`));
    temp2.get().lane.set(new abap.types.String().set(`1`));
    temp2.get().title.set(new abap.types.String().set(`Outbound Delivery 45`));
    temp2.get().titleabbreviation.set(new abap.types.String().set(`OD 45`));
    abap.statements.clear(temp15);
    abap.statements.insertInternal({data: abap.IntegerFactory.get(20), table: temp15});
    temp2.get().children.set(temp15);
    temp2.get().state.set(new abap.types.String().set(`Neutral`));
    temp2.get().focused.set(abap.builtin.abap_false);
    temp2.get().highlighted.set(abap.builtin.abap_false);
    abap.statements.clear(temp17);
    abap.statements.insertInternal({data: new abap.types.String().set(`Sales Order Document Overdue long text for the wrap up all the aspects`), table: temp17});
    abap.statements.insertInternal({data: new abap.types.String().set(`Not cleared`), table: temp17});
    temp2.get().texts.set(temp17);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`20`));
    temp2.get().lane.set(new abap.types.String().set(`2`));
    temp2.get().title.set(new abap.types.String().set(`Invoice 9`));
    temp2.get().titleabbreviation.set(new abap.types.String().set(`I 9`));
    temp2.get().state.set(new abap.types.String().set(`Positive`));
    temp2.get().statetext.set(new abap.types.String().set(`OK status`));
    temp2.get().focused.set(abap.builtin.abap_false);
    temp2.get().highlighted.set(abap.builtin.abap_false);
    abap.statements.clear(temp19);
    abap.statements.insertInternal({data: new abap.types.String().set(`Sales Order Document Overdue long text for the wrap up all the aspects`), table: temp19});
    abap.statements.insertInternal({data: new abap.types.String().set(`Not cleared`), table: temp19});
    temp2.get().texts.set(temp19);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`21`));
    temp2.get().lane.set(new abap.types.String().set(`2`));
    temp2.get().title.set(new abap.types.String().set(`Invoice Planned`));
    temp2.get().titleabbreviation.set(new abap.types.String().set(`IP`));
    temp2.get().state.set(new abap.types.String().set(`PlannedNegative`));
    temp2.get().focused.set(abap.builtin.abap_false);
    temp2.get().highlighted.set(abap.builtin.abap_false);
    abap.statements.clear(temp21);
    abap.statements.insertInternal({data: new abap.types.String().set(`Sales Order Document Overdue long text for the wrap up all the aspects`), table: temp21});
    abap.statements.insertInternal({data: new abap.types.String().set(`Not cleared`), table: temp21});
    temp2.get().texts.set(temp21);
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_nodes.set(temp1);
    abap.statements.clear(temp3);
    temp4.get().id.set(new abap.types.String().set(`0`));
    temp4.get().icon.set(new abap.types.String().set(`sap-icon://order-status`));
    temp4.get().label.set(new abap.types.String().set(`Order Processing`));
    temp4.get().position.set(abap.IntegerFactory.get(0));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().id.set(new abap.types.String().set(`1`));
    temp4.get().icon.set(new abap.types.String().set(`sap-icon://monitor-payments`));
    temp4.get().label.set(new abap.types.String().set(`Delivery Processing`));
    temp4.get().position.set(abap.IntegerFactory.get(1));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().id.set(new abap.types.String().set(`2`));
    temp4.get().icon.set(new abap.types.String().set(`sap-icon://payment-approval`));
    temp4.get().label.set(new abap.types.String().set(`Invoicing`));
    temp4.get().position.set(abap.IntegerFactory.get(2));
    abap.statements.insertInternal({data: temp4, table: temp3});
    this.mt_lanes.set(temp3);
  }
  async z2ui5_view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let process_flow = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(23).set('abap2UI5 - Process Flow'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    process_flow.set((await (await (await (await (await (await (await page.get().process_flow({id: new abap.types.String().set(`processflow1`), scrollable: abap.builtin.abap_true, wheelzoomable: abap.builtin.abap_false, foldedcorners: abap.builtin.abap_true, nodepress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`NODE_PRESS`)})), nodes: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_nodes})), lanes: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_lanes}))})).get().nodes({ns: new abap.types.String().set(`commons`)})).get().process_flow_node({laneid: new abap.types.String().set(`{LANE}`), nodeid: new abap.types.String().set(`{ID}`), title: new abap.types.String().set(`{TITLE}`), titleabbreviation: new abap.types.String().set(`{TITLEABBREVIATION}`), children: new abap.types.String().set(`{CHILDREN}`), state: new abap.types.String().set(`{STATE}`), statetext: new abap.types.String().set(`{STATETEXT}`), highlighted: new abap.types.String().set(`{HIGHLIGHTED}`), focused: new abap.types.String().set(`{FOCUSED}`)})).get().get_parent()).get().get_parent()).get().lanes()).get().process_flow_lane_header({laneid: new abap.types.String().set(`{ID}`), iconsrc: new abap.types.String().set(`{ICON}`), text: new abap.types.String().set(`{LABEL}`), position: new abap.types.String().set(`{POSITION}`)})));
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_091'] = z2ui5_cl_demo_app_091;
z2ui5_cl_demo_app_091.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_091.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_091.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_091.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_091.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_091.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_091.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_091.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_091.children_array = abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array");
z2ui5_cl_demo_app_091.texts_array = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array");
z2ui5_cl_demo_app_091.t_children3 = new abap.types.Structure({"children": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_CHILDREN3-CHILDREN"})}, "Z2UI5_CL_DEMO_APP_091=>t_children3", undefined, {}, {});
z2ui5_cl_demo_app_091.t_texts4 = new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_TEXTS4"});
z2ui5_cl_demo_app_091.tt_children3 = abap.types.TableFactory.construct(new abap.types.Structure({"children": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_CHILDREN3-CHILDREN"})}, "Z2UI5_CL_DEMO_APP_091=>t_children3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_children3");
z2ui5_cl_demo_app_091.tt_texts4 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_TEXTS4"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_texts4");
z2ui5_cl_demo_app_091.t_nodes2 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-ID"}), "lane": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-LANE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLE"}), "titleabbreviation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLEABBREVIATION"}), "children": abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array"), "state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATE"}), "statetext": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATETEXT"}), "focused": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "highlighted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "texts": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array")}, "Z2UI5_CL_DEMO_APP_091=>t_nodes2", undefined, {}, {});
z2ui5_cl_demo_app_091.t_lanes5 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ID"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ICON"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-LABEL"}), "position": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-POSITION"})}, "Z2UI5_CL_DEMO_APP_091=>t_lanes5", undefined, {}, {});
z2ui5_cl_demo_app_091.tt_nodes2 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-ID"}), "lane": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-LANE"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLE"}), "titleabbreviation": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-TITLEABBREVIATION"}), "children": abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "INT4"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>children_array"), "state": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATE"}), "statetext": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_NODES2-STATETEXT"}), "focused": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "highlighted": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "texts": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>texts_array")}, "Z2UI5_CL_DEMO_APP_091=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_nodes2");
z2ui5_cl_demo_app_091.tt_lanes5 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ID"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-ICON"}), "label": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-LABEL"}), "position": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_091=>T_LANES5-POSITION"})}, "Z2UI5_CL_DEMO_APP_091=>t_lanes5", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_091=>tt_lanes5");
export {z2ui5_cl_demo_app_091};
//# sourceMappingURL=z2ui5_cl_demo_app_091.clas.mjs.map