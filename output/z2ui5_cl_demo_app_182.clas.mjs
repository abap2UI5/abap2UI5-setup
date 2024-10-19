const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_182.clas.abap
class z2ui5_cl_demo_app_182 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_182';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_DATA": {"type": () => {return new abap.types.Structure({"nodes": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_nodes2"), "lines": abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-TO"})}, "z2ui5_cl_demo_app_182=>t_lines4", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_lines4")}, "z2ui5_cl_demo_app_182=>t_json1", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_EVENT": {"visibility": "U", "parameters": {}},
  "VIEW_DISPLAY": {"visibility": "U", "parameters": {}},
  "DETAIL_POPOVER": {"visibility": "U", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NODE": {"type": () => {return new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_data = new abap.types.Structure({"nodes": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_nodes2"), "lines": abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-TO"})}, "z2ui5_cl_demo_app_182=>t_lines4", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_lines4")}, "z2ui5_cl_demo_app_182=>t_json1", undefined, {}, {});
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
  async detail_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let node = INPUT?.node;
    if (node?.getQualifiedName === undefined || node.getQualifiedName() !== "Z2UI5_CL_DEMO_APP_182=>T_NODES2") { node = undefined; }
    if (node === undefined) { node = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {}).set(INPUT.node); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let qv = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    qv.set((await (await (await (await (await (await (await (await (await (await (await (await view.get().quick_view({placement: new abap.types.String().set(`Left`)})).get().quick_view_page({header: new abap.types.String().set(`Employee`), title: node.get().title, description: node.get().position})).get().get()).get().quick_view_page_avatar()).get().avatar({src: node.get().src, displayshape: new abap.types.String().set(`Square`)})).get().get_parent()).get().quick_view_group({heading: new abap.types.String().set(`Contact Detail`)})).get().quick_view_group_element({label: new abap.types.String().set(`Location`), value: node.get().location})).get().get_parent()).get().quick_view_group_element({label: new abap.types.String().set(`Mobile`), value: node.get().phone, type: new abap.types.String().set(`phone`)})).get().get_parent()).get().quick_view_group_element({label: new abap.types.String().set(`Email`), value: node.get().email, type: new abap.types.String().set(`email`), emailsubject: abap.operators.concat(new abap.types.String().set(`Contact`),node.get().id)})));
    if (abap.compare.initial(node.get().team) === false) {
      temp1.set(node.get().team);
      qv.set((await (await (await (await qv.get().get_parent()).get().get_parent()).get().quick_view_group({heading: new abap.types.String().set(`Team`)})).get().quick_view_group_element({label: new abap.types.String().set(`Size`), value: temp1})));
    }
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async on_event() {
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let ls_node = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.Integer({qualifiedName: "I"});
    let unique442 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique442, new abap.types.Character(10).set('LINE_PRESS'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(12).set('LINE_PRESSED')});
    } else if (abap.compare.eq(unique442, new abap.types.Character(14).set('DETAIL_POPOVER'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(2),
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      abap.statements.readTable(this.mt_data.get().nodes,{into: ls_node,
        withKey: (i) => {return abap.compare.eq(i.id, temp1);},
        withKeyValue: [{key: (i) => {return i.id}, value: temp1}],
        usesTableLine: false,
        withKeySimple: {"id": temp1}});
      temp3.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp2});
      abap.builtin.sy.get().tabix.set(temp3);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await this.detail_popover({id: temp2, node: ls_node});
    } else if (abap.compare.eq(unique442, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
      return;
    }
  }
  async view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp4 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let graph = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await view.get().page({title: new abap.types.Character(35).set('abap2UI5 - Network Graph - Org Tree'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    abap.statements.clear(temp4);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp4});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${ID}`), table: temp4});
    graph.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().network_graph({enablewheelzoom: abap.builtin.abap_false, orientation: new abap.types.String().set(`TopBottom`), nodes: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_data.get().nodes})), lines: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_data.get().lines})), layout: new abap.types.String().set(`Layered`), searchsuggest: new abap.types.String().set(`suggest`), search: new abap.types.String().set(`search`), id: new abap.types.String().set(`graph`)})).get().get()).get().layout_algorithm()).get().layered_layout({mergeedges: abap.builtin.abap_true, nodeplacement: new abap.types.String().set(`Simple`), nodespacing: new abap.types.String().set(`40`)})).get().get_parent()).get().get_parent()).get().nodes({ns: new abap.types.String().set(`networkgraph`)})).get().node({icon: new abap.types.String().set(`sap-icon://action-settings`), key: new abap.types.String().set(`{ID}`), description: new abap.types.String().set(`{TITLE}`), title: new abap.types.String().set(`{TITLE}`), width: new abap.types.String().set(`90`), collapsed: new abap.types.String().set(`{COLLAPSED}`), attributes: new abap.types.String().set(`{ATTRIBUTES}`), showactionlinksbutton: abap.builtin.abap_false, showdetailbutton: abap.builtin.abap_false, descriptionlinesize: new abap.types.String().set(`0`), shape: new abap.types.String().set(`Box`)})).get().get()).get().attributes({ns: new abap.types.String().set(`networkgraph`)})).get().element_attribute({label: new abap.types.String().set(`{LABEL}`), value: new abap.types.String().set(`{VALUE}`)})).get().get_parent()).get().get_parent()).get().get()).get().get_parent()).get().get_parent()).get().action_buttons()).get().action_button({position: new abap.types.String().set(`Left`), title: new abap.types.String().set(`Detail`), icon: new abap.types.String().set(`sap-icon://employee`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`DETAIL_POPOVER`), t_arg: temp4}))})).get().get_parent()).get().get_parent()).get().get()).get().get_parent()).get().get_parent()).get()._generic({ns: new abap.types.String().set(`networkgraph`), name: new abap.types.String().set(`image`)})).get().node_image({src: new abap.types.String().set(`{SRC}`), width: new abap.types.String().set(`80`), height: new abap.types.String().set(`100`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().lines()).get().line({from: new abap.types.String().set(`{FROM}`), to: new abap.types.String().set(`{TO}`), arroworientation: new abap.types.String().set(`None`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`LINE_PRESS`)}))})));
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_nodes2");
    let temp6 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3");
    let temp2 = new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3");
    let temp4 = new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {});
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3");
    let temp10 = new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-TO"})}, "z2ui5_cl_demo_app_182=>t_lines4", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_lines4");
    let temp8 = new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-TO"})}, "z2ui5_cl_demo_app_182=>t_lines4", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_initialized, abap.builtin.abap_false)) {
      this.mv_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(this.mt_data);
      abap.statements.clear(temp5);
      temp6.get().id.set(new abap.types.String().set(`Dinter`));
      temp6.get().title.set(new abap.types.String().set(`Sophie Dinter`));
      temp6.get().src.set(new abap.types.String().set(`https://ui5.sap.com/test-resources/sap/suite/ui/commons/demokit/images/people/female_IngallsB.jpg`));
      abap.statements.clear(temp1);
      temp2.get().label.set(abap.IntegerFactory.get(35));
      temp2.get().value.set(new abap.types.String().set(``));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp6.get().attributes.set(temp1);
      temp6.get().team.set(abap.IntegerFactory.get(13));
      temp6.get().location.set(new abap.types.String().set(`Walldorf`));
      temp6.get().position.set(new abap.types.String().set(`lobal Solutions Manager`));
      temp6.get().email.set(new abap.types.String().set(`sophie.dinter@example.com`));
      temp6.get().phone.set(new abap.types.String().set(`+000 423 230 000`));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().id.set(new abap.types.String().set(`Ninsei`));
      temp6.get().title.set(new abap.types.String().set(`Yamasaki Ninsei`));
      temp6.get().src.set(new abap.types.String().set(`https://ui5.sap.com/test-resources/sap/suite/ui/commons/demokit/images/people/male_GordonR.jpg`));
      abap.statements.clear(temp3);
      temp4.get().label.set(abap.IntegerFactory.get(9));
      temp4.get().value.set(new abap.types.String().set(``));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp6.get().attributes.set(temp3);
      temp6.get().supervisor.set(new abap.types.String().set(`Dinter`));
      temp6.get().team.set(abap.IntegerFactory.get(9));
      temp6.get().location.set(new abap.types.String().set(`Walldorf`));
      temp6.get().position.set(new abap.types.String().set(`Lead Markets Manage`));
      temp6.get().email.set(new abap.types.String().set(`yamasaki.ninsei@example.com`));
      temp6.get().phone.set(new abap.types.String().set(`+000 423 230 002`));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().id.set(new abap.types.String().set(`Mills`));
      temp6.get().title.set(new abap.types.String().set(`Henry Mills`));
      temp6.get().src.set(new abap.types.String().set(`https://ui5.sap.com/test-resources/sap/suite/ui/commons/demokit/images/people/male_MillerM.jpg`));
      abap.statements.clear(temp9);
      temp10.get().label.set(abap.IntegerFactory.get(4));
      temp10.get().value.set(new abap.types.String().set(``));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp6.get().attributes.set(temp9);
      temp6.get().supervisor.set(new abap.types.String().set(`Ninsei`));
      temp6.get().team.set(abap.IntegerFactory.get(4));
      temp6.get().location.set(new abap.types.String().set(`Praha`));
      temp6.get().position.set(new abap.types.String().set(`Sales Manager`));
      temp6.get().email.set(new abap.types.String().set(`henry.mills@example.com`));
      temp6.get().phone.set(new abap.types.String().set(`+000 423 232 003`));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().id.set(new abap.types.String().set(`Polak`));
      temp6.get().title.set(new abap.types.String().set(`Adam Polak`));
      temp6.get().src.set(new abap.types.String().set(`https://ui5.sap.com/test-resources/sap/suite/ui/commons/demokit/images/people/male_PlatteR.jpg`));
      temp6.get().supervisor.set(new abap.types.String().set(`Mills`));
      temp6.get().location.set(new abap.types.String().set(`Praha`));
      temp6.get().position.set(new abap.types.String().set(`Marketing Specialist`));
      temp6.get().email.set(new abap.types.String().set(`adam.polak@example.com`));
      temp6.get().phone.set(new abap.types.String().set(`+000 423 232 004`));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().id.set(new abap.types.String().set(`Sykorova`));
      temp6.get().title.set(new abap.types.String().set(`Vlasta Sykorova`));
      temp6.get().src.set(new abap.types.String().set(`https://ui5.sap.com/test-resources/sap/suite/ui/commons/demokit/images/people/female_SpringS.jpg`));
      temp6.get().supervisor.set(new abap.types.String().set(`Mills`));
      temp6.get().location.set(new abap.types.String().set(`Praha`));
      temp6.get().position.set(new abap.types.String().set(`Human Assurance Officer`));
      temp6.get().email.set(new abap.types.String().set(`vlasta.sykorova@example.com`));
      temp6.get().phone.set(new abap.types.String().set(`+000 423 232 005`));
      abap.statements.insertInternal({data: temp6, table: temp5});
      this.mt_data.get().nodes.set(temp5);
      abap.statements.clear(temp7);
      temp8.get().from.set(new abap.types.String().set(`Dinter`));
      temp8.get().to.set(new abap.types.String().set(`Ninsei`));
      abap.statements.insertInternal({data: temp8, table: temp7});
      temp8.get().from.set(new abap.types.String().set(`Ninsei`));
      temp8.get().to.set(new abap.types.String().set(`Mills`));
      abap.statements.insertInternal({data: temp8, table: temp7});
      temp8.get().from.set(new abap.types.String().set(`Mills`));
      temp8.get().to.set(new abap.types.String().set(`Polak`));
      abap.statements.insertInternal({data: temp8, table: temp7});
      temp8.get().from.set(new abap.types.String().set(`Mills`));
      temp8.get().to.set(new abap.types.String().set(`Sykorova`));
      abap.statements.insertInternal({data: temp8, table: temp7});
      this.mt_data.get().lines.set(temp7);
      await this.view_display();
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_182'] = z2ui5_cl_demo_app_182;
z2ui5_cl_demo_app_182.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_182.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_182.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_182.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_182.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_182.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_182.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_182.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_182.t_attributes3 = new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {});
z2ui5_cl_demo_app_182.tt_attributes3 = abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3");
z2ui5_cl_demo_app_182.t_nodes2 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {});
z2ui5_cl_demo_app_182.t_lines4 = new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-TO"})}, "z2ui5_cl_demo_app_182=>t_lines4", undefined, {}, {});
z2ui5_cl_demo_app_182.tt_nodes2 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_nodes2");
z2ui5_cl_demo_app_182.tt_lines4 = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-TO"})}, "z2ui5_cl_demo_app_182=>t_lines4", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_lines4");
z2ui5_cl_demo_app_182.t_json1 = new abap.types.Structure({"nodes": abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-ID"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TITLE"}), "src": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SRC"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"label": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-LABEL"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_ATTRIBUTES3-VALUE"})}, "z2ui5_cl_demo_app_182=>t_attributes3", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_attributes3"), "team": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-TEAM"}), "supervisor": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-SUPERVISOR"}), "location": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-LOCATION"}), "position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-POSITION"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_NODES2-PHONE"})}, "z2ui5_cl_demo_app_182=>t_nodes2", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_nodes2"), "lines": abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_182=>T_LINES4-TO"})}, "z2ui5_cl_demo_app_182=>t_lines4", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_182=>tt_lines4")}, "z2ui5_cl_demo_app_182=>t_json1", undefined, {}, {});
export {z2ui5_cl_demo_app_182};
//# sourceMappingURL=z2ui5_cl_demo_app_182.clas.mjs.map