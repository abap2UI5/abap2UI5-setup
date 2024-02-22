const {z2ui5_cl_ajson} = await import("./z2ui5_cl_ajson.clas.mjs");
const {lcl_utils,lcl_json_parser,lcl_json_serializer,lcl_json_to_abap,lcl_abap_to_json,lcl_filter_runner,lcl_mapper_runner,lcl_mutator_queue} = await import("./z2ui5_cl_ajson.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson.clas.testclasses.abap
class lcl_nodes_helper {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"ADD": {"visibility": "U", "parameters": {"IV_STR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CLEAR": {"visibility": "U", "parameters": {}},
  "SORTED": {"visibility": "U", "parameters": {"RT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async add(INPUT) {
    let iv_str = INPUT?.iv_str;
    if (iv_str?.getQualifiedName === undefined || iv_str.getQualifiedName() !== "STRING") { iv_str = undefined; }
    if (iv_str === undefined) { iv_str = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_str); }
    let fs_n_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lv_children = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.String({qualifiedName: "STRING"});
    let lv_order = new abap.types.String({qualifiedName: "STRING"});
    fs_n_.assign(this.mt_nodes.appendInitial());
    abap.statements.split({source: iv_str, at: new abap.types.Character(1).set('|'), targets: [fs_n_.get().path,fs_n_.get().name,fs_n_.get().type,fs_n_.get().value,lv_index,lv_children,lv_order]});
    abap.statements.condense(fs_n_.get().path, {nogaps: false});
    abap.statements.condense(fs_n_.get().name, {nogaps: false});
    abap.statements.condense(fs_n_.get().type, {nogaps: false});
    abap.statements.condense(fs_n_.get().value, {nogaps: false});
    fs_n_.get().index.set(lv_index);
    fs_n_.get().children.set(lv_children);
    fs_n_.get().order.set(lv_order);
  }
  async sorted() {
    let rt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
    rt_nodes.set(this.mt_nodes);
    return rt_nodes;
  }
  async clear() {
    abap.statements.clear(this.mt_nodes);
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER'] = lcl_nodes_helper;
class ltcl_parser_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_CUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_PARSER"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_NODES": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"SETUP": {"visibility": "I", "parameters": {}},
  "PARSE": {"visibility": "I", "parameters": {}},
  "PARSE_KEEPING_ORDER": {"visibility": "I", "parameters": {}},
  "PARSE_STRING": {"visibility": "I", "parameters": {}},
  "PARSE_NUMBER": {"visibility": "I", "parameters": {}},
  "PARSE_FLOAT": {"visibility": "I", "parameters": {}},
  "PARSE_BOOLEAN": {"visibility": "I", "parameters": {}},
  "PARSE_FALSE": {"visibility": "I", "parameters": {}},
  "PARSE_NULL": {"visibility": "I", "parameters": {}},
  "PARSE_DATE": {"visibility": "I", "parameters": {}},
  "PARSE_BARE_VALUES": {"visibility": "I", "parameters": {}},
  "PARSE_ERROR": {"visibility": "I", "parameters": {}},
  "DUPLICATE_KEY": {"visibility": "I", "parameters": {}},
  "NON_JSON": {"visibility": "I", "parameters": {}},
  "SAMPLE_JSON": {"visibility": "U", "parameters": {"RV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_SEPARATOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_PARSER"});
    this.mo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async setup() {
    this.mo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER']()).constructor_());
    this.mo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
  }
  async parse_bare_values() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(17).set(' | |str |abc | |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(5).set('"abc"')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
    await this.mo_nodes.get().clear();
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(18).set(' | |num |-123 | |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(4).set('-123')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
    await this.mo_nodes.get().clear();
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(19).set(' | |bool |true | |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(4).set('true')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
    await this.mo_nodes.get().clear();
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(20).set(' | |bool |false | |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(5).set('false')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
    await this.mo_nodes.get().clear();
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(15).set(' | |null | | |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(4).set('null')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async parse_error() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lx_err = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    try {
      lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(3).set('abc')})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(45).set('Parsing of string w/o quotes must fail (spec)')});
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx_err.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_char_cp({act: (await lx_err.get().if_message$get_text()), exp: new abap.types.Character(15).set('*parsing error*')});
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_char_cp({act: lx_err.get().location, exp: new abap.types.Character(16).set('Line 1, Offset 1')});
      } else {
        throw e;
      }
    }
    try {
      lt_act.set((await this.mo_cut.get().parse({iv_json: abap.operators.concat(new abap.types.Character(1).set('{'),abap.operators.concat(abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline,abap.operators.concat(new abap.types.Character(12).set('"ok": "abc",'),abap.operators.concat(abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline,abap.operators.concat(new abap.types.Character(7).set('"error"'),abap.operators.concat(abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline,new abap.types.Character(1).set('}')))))))})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(40).set('Parsing of invalid JSON must fail (spec)')});
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx_err.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_char_cp({act: (await lx_err.get().if_message$get_text()), exp: new abap.types.Character(15).set('*parsing error*')});
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_char_cp({act: lx_err.get().location, exp: new abap.types.Character(16).set('Line 3, Offset 8')});
      } else {
        throw e;
      }
    }
  }
  async parse_string() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |string   |str    |abc                     |  |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(17).set('{"string": "abc"}')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async parse_number() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |number   |num    |123                     |  |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(15).set('{"number": 123}')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async parse_float() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |float    |num    |123.45                  |  |0')});
    this.mo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER']()).constructor_());
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(17).set('{"float": 123.45}')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async parse_boolean() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |boolean  |bool   |true                    |  |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(17).set('{"boolean": true}')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async parse_false() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |false    |bool   |false                   |  |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(16).set('{"false": false}')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async parse_null() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |null     |null   |                        |  |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(14).set('{"null": null}')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async parse_date() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await this.mo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |date     |str    |2020-03-15              |  |0')});
    lt_act.set((await this.mo_cut.get().parse({iv_json: new abap.types.Character(22).set('{"date": "2020-03-15"}')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: this.mo_nodes.get().mt_nodes});
  }
  async sample_json(INPUT) {
    return ltcl_parser_test.sample_json(INPUT);
  }
  static async sample_json(INPUT) {
    let rv_json = new abap.types.String({qualifiedName: "STRING"});
    let iv_separator = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_separator) {iv_separator.set(INPUT.iv_separator);}
    rv_json.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(20).set('  "string": "abc",\\n'),abap.operators.concat(new abap.types.Character(18).set('  "number": 123,\\n'),abap.operators.concat(new abap.types.Character(20).set('  "float": 123.45,\\n'),abap.operators.concat(new abap.types.Character(20).set('  "boolean": true,\\n'),abap.operators.concat(new abap.types.Character(19).set('  "false": false,\\n'),abap.operators.concat(new abap.types.Character(17).set('  "null": null,\\n'),abap.operators.concat(new abap.types.Character(25).set('  "date": "2020-03-15",\\n'),abap.operators.concat(new abap.types.Character(15).set('  "issues": [\\n'),abap.operators.concat(new abap.types.Character(7).set('    {\\n'),abap.operators.concat(new abap.types.Character(45).set('      "message": "Indentation problem ...",\\n'),abap.operators.concat(new abap.types.Character(29).set('      "key": "indentation",\\n'),abap.operators.concat(new abap.types.Character(18).set('      "start": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "row": 4,\\n'),abap.operators.concat(new abap.types.Character(18).set('        "col": 3\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(16).set('      "end": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "row": 4,\\n'),abap.operators.concat(new abap.types.Character(19).set('        "col": 26\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(38).set('      "filename": "./zxxx.prog.abap"\\n'),abap.operators.concat(new abap.types.Character(8).set('    },\\n'),abap.operators.concat(new abap.types.Character(7).set('    {\\n'),abap.operators.concat(new abap.types.Character(45).set('      "message": "Remove space before XXX",\\n'),abap.operators.concat(new abap.types.Character(34).set('      "key": "space_before_dot",\\n'),abap.operators.concat(new abap.types.Character(18).set('      "start": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "row": 3,\\n'),abap.operators.concat(new abap.types.Character(19).set('        "col": 21\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(16).set('      "end": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "row": 3,\\n'),abap.operators.concat(new abap.types.Character(19).set('        "col": 22\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(38).set('      "filename": "./zxxx.prog.abap"\\n'),abap.operators.concat(new abap.types.Character(7).set('    }\\n'),abap.operators.concat(new abap.types.Character(5).set('  ]\\n'),new abap.types.Character(1).set('}'))))))))))))))))))))))))))))))))))))));
    abap.statements.replace({target: rv_json, all: true, with: iv_separator, of: new abap.types.Character(2).set('\\n')});
    return rv_json;
  }
  async parse() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_PARSER"});
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |8')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |string   |str    |abc                     |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |number   |num    |123                     |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |float    |num    |123.45                  |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |boolean  |bool   |true                    |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |false    |bool   |false                   |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |null     |null   |                        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |date     |str    |2020-03-15              |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |issues   |array  |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/         |1        |object |                        |1 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |message  |str    |Indentation problem ... |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |key      |str    |indentation             |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/start/ |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/start/ |col      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |col      |num    |26                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |filename |str    |./zxxx.prog.abap        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/         |2        |object |                        |2 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |message  |str    |Remove space before XXX |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |key      |str    |space_before_dot        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/start/ |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/start/ |col      |num    |21                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |col      |num    |22                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |filename |str    |./zxxx.prog.abap        |  |0')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER']()).constructor_());
    lt_act.set((await lo_cut.get().parse({iv_json: (await this.sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lo_nodes.get().mt_nodes});
    lt_act.set((await lo_cut.get().parse({iv_json: (await this.sample_json({iv_separator: new abap.types.String().set(`${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline)}`)}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lo_nodes.get().mt_nodes});
    lt_act.set((await lo_cut.get().parse({iv_json: (await this.sample_json({iv_separator: new abap.types.String().set(`${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf)}`)}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lo_nodes.get().mt_nodes});
  }
  async parse_keeping_order() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_PARSER"});
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('                 |         |object |                        |  |8 |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |string   |str    |abc                     |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |number   |num    |123                     |  |0 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |float    |num    |123.45                  |  |0 |3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |boolean  |bool   |true                    |  |0 |4')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |false    |bool   |false                   |  |0 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |null     |null   |                        |  |0 |6')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |date     |str    |2020-03-15              |  |0 |7')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/                |issues   |array  |                        |  |2 |8')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/         |1        |object |                        |1 |5 |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/       |message  |str    |Indentation problem ... |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/       |key      |str    |indentation             |  |0 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/       |start    |object |                        |  |2 |3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/start/ |row      |num    |4                       |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/start/ |col      |num    |3                       |  |0 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/       |end      |object |                        |  |2 |4')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/end/   |row      |num    |4                       |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/end/   |col      |num    |26                      |  |0 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/1/       |filename |str    |./zxxx.prog.abap        |  |0 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/         |2        |object |                        |2 |5 |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/       |message  |str    |Remove space before XXX |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/       |key      |str    |space_before_dot        |  |0 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/       |start    |object |                        |  |2 |3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/start/ |row      |num    |3                       |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/start/ |col      |num    |21                      |  |0 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/       |end      |object |                        |  |2 |4')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/end/   |row      |num    |3                       |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/end/   |col      |num    |22                      |  |0 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(68).set('/issues/2/       |filename |str    |./zxxx.prog.abap        |  |0 |5')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER']()).constructor_());
    lt_act.set((await lo_cut.get().parse({iv_json: (await this.sample_json()), iv_keep_item_order: abap.builtin.abap_true})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lo_nodes.get().mt_nodes});
    lt_act.set((await lo_cut.get().parse({iv_json: (await this.sample_json({iv_separator: new abap.types.String().set(`${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline)}`)})), iv_keep_item_order: abap.builtin.abap_true})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lo_nodes.get().mt_nodes});
    lt_act.set((await lo_cut.get().parse({iv_json: (await this.sample_json({iv_separator: new abap.types.String().set(`${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf)}`)})), iv_keep_item_order: abap.builtin.abap_true})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lo_nodes.get().mt_nodes});
  }
  async duplicate_key() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_PARSER"});
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    try {
      lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER']()).constructor_());
      await lo_cut.get().parse({iv_json: new abap.types.Character(20).set('{ "a" = 1, "a" = 1 }')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lx});
      } else {
        throw e;
      }
    }
  }
  async non_json() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_PARSER"});
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    try {
      lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER']()).constructor_());
      await lo_cut.get().parse({iv_json: new abap.types.Character(65).set('<html><head><title>X</title></head><body><h1>Y</h1></body></html>')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lx});
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'] = ltcl_parser_test;
class ltcl_serializer_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_SERIALIZER_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"STRINGIFY_CONDENSED": {"visibility": "I", "parameters": {}},
  "STRINGIFY_INDENTED": {"visibility": "I", "parameters": {}},
  "ARRAY_INDEX": {"visibility": "I", "parameters": {}},
  "ITEM_ORDER": {"visibility": "I", "parameters": {}},
  "SIMPLE_INDENTED": {"visibility": "I", "parameters": {}},
  "EMPTY_SET": {"visibility": "I", "parameters": {}},
  "ESCAPE_STRING": {"visibility": "I", "parameters": {}},
  "EMPTY": {"visibility": "I", "parameters": {}},
  "SAMPLE_JSON": {"visibility": "U", "parameters": {"RV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SAMPLE_NODES": {"visibility": "U", "parameters": {"RT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async sample_json() {
    return ltcl_serializer_test.sample_json();
  }
  static async sample_json() {
    let rv_json = new abap.types.String({qualifiedName: "STRING"});
    rv_json.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(20).set('  "boolean": true,\\n'),abap.operators.concat(new abap.types.Character(25).set('  "date": "2020-03-15",\\n'),abap.operators.concat(new abap.types.Character(19).set('  "false": false,\\n'),abap.operators.concat(new abap.types.Character(20).set('  "float": 123.45,\\n'),abap.operators.concat(new abap.types.Character(15).set('  "issues": [\\n'),abap.operators.concat(new abap.types.Character(7).set('    {\\n'),abap.operators.concat(new abap.types.Character(16).set('      "end": {\\n'),abap.operators.concat(new abap.types.Character(20).set('        "col": 26,\\n'),abap.operators.concat(new abap.types.Character(18).set('        "row": 4\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(39).set('      "filename": "./zxxx.prog.abap",\\n'),abap.operators.concat(new abap.types.Character(29).set('      "key": "indentation",\\n'),abap.operators.concat(new abap.types.Character(45).set('      "message": "Indentation problem ...",\\n'),abap.operators.concat(new abap.types.Character(18).set('      "start": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "col": 3,\\n'),abap.operators.concat(new abap.types.Character(18).set('        "row": 4\\n'),abap.operators.concat(new abap.types.Character(9).set('      }\\n'),abap.operators.concat(new abap.types.Character(8).set('    },\\n'),abap.operators.concat(new abap.types.Character(7).set('    {\\n'),abap.operators.concat(new abap.types.Character(16).set('      "end": {\\n'),abap.operators.concat(new abap.types.Character(20).set('        "col": 22,\\n'),abap.operators.concat(new abap.types.Character(18).set('        "row": 3\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(39).set('      "filename": "./zxxx.prog.abap",\\n'),abap.operators.concat(new abap.types.Character(34).set('      "key": "space_before_dot",\\n'),abap.operators.concat(new abap.types.Character(45).set('      "message": "Remove space before XXX",\\n'),abap.operators.concat(new abap.types.Character(18).set('      "start": {\\n'),abap.operators.concat(new abap.types.Character(20).set('        "col": 21,\\n'),abap.operators.concat(new abap.types.Character(18).set('        "row": 3\\n'),abap.operators.concat(new abap.types.Character(9).set('      }\\n'),abap.operators.concat(new abap.types.Character(7).set('    }\\n'),abap.operators.concat(new abap.types.Character(6).set('  ],\\n'),abap.operators.concat(new abap.types.Character(17).set('  "null": null,\\n'),abap.operators.concat(new abap.types.Character(18).set('  "number": 123,\\n'),abap.operators.concat(new abap.types.Character(19).set('  "string": "abc"\\n'),new abap.types.Character(1).set('}'))))))))))))))))))))))))))))))))))))));
    rv_json.set(abap.builtin.replace({val: rv_json, sub: new abap.types.Character(2).set('\\n'), with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, occ: abap.IntegerFactory.get(0)}));
    return rv_json;
  }
  async sample_nodes() {
    return ltcl_serializer_test.sample_nodes();
  }
  static async sample_nodes() {
    let rt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |8')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |string   |str    |abc                     |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |number   |num    |123                     |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |float    |num    |123.45                  |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |boolean  |bool   |true                    |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |false    |bool   |false                   |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |null     |null   |                        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |date     |str    |2020-03-15              |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |issues   |array  |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/         |1        |object |                        |1 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |message  |str    |Indentation problem ... |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |key      |str    |indentation             |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/start/ |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/start/ |col      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |col      |num    |26                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |filename |str    |./zxxx.prog.abap        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/         |2        |object |                        |2 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |message  |str    |Remove space before XXX |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |key      |str    |space_before_dot        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/start/ |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/start/ |col      |num    |21                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |col      |num    |22                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |filename |str    |./zxxx.prog.abap        |  |0')});
    rt_nodes.set((await lo_nodes.get().sorted()));
    return rt_nodes;
  }
  async stringify_condensed() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await this.sample_nodes())})));
    lv_exp.set((await this.sample_json()));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, with: new abap.types.Character(1).set(''), occ: abap.IntegerFactory.get(0)}));
    abap.statements.condense(lv_exp, {nogaps: false});
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.String().set(`: `), with: new abap.types.Character(1).set(':'), occ: abap.IntegerFactory.get(0)}));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.String().set(`{ `), with: new abap.types.Character(1).set('{'), occ: abap.IntegerFactory.get(0)}));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.String().set(`[ `), with: new abap.types.Character(1).set('['), occ: abap.IntegerFactory.get(0)}));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.String().set(` }`), with: new abap.types.Character(1).set('}'), occ: abap.IntegerFactory.get(0)}));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.String().set(` ]`), with: new abap.types.Character(1).set(']'), occ: abap.IntegerFactory.get(0)}));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.String().set(`, `), with: new abap.types.Character(1).set(','), occ: abap.IntegerFactory.get(0)}));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async stringify_indented() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await this.sample_nodes()), iv_indent: abap.IntegerFactory.get(2)})));
    lv_exp.set((await this.sample_json()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async array_index() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('                |    |array  |                        |  |3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/               |1   |str    |abc                     |2 |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/               |2   |num    |123                     |1 |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/               |3   |num    |123.45                  |3 |0')});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted())})));
    lv_exp.set(new abap.types.Character(18).set('[123,"abc",123.45]'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async item_order() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(60).set('                |       |object |                   |  |3 |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(60).set('/               |beta   |str    |b                  |  |0 |3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(60).set('/               |zulu   |str    |z                  |  |0 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(60).set('/               |alpha  |str    |a                  |  |0 |2')});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted())})));
    lv_exp.set(new abap.types.Character(35).set('{"alpha":"a","beta":"b","zulu":"z"}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted()), iv_keep_item_order: abap.builtin.abap_true})));
    lv_exp.set(new abap.types.Character(35).set('{"zulu":"z","alpha":"a","beta":"b"}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async simple_indented() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('                |    |array  |                        |  |3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/               |1   |object |                        |2 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/1/             |a   |num    |1                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/1/             |b   |num    |2                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/               |2   |num    |123                     |1 |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('/               |3   |num    |123.45                  |3 |0')});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted()), iv_indent: abap.IntegerFactory.get(2)})));
    lv_exp.set(abap.operators.concat(new abap.types.Character(3).set('[\\n'),abap.operators.concat(new abap.types.Character(8).set('  123,\\n'),abap.operators.concat(new abap.types.Character(5).set('  {\\n'),abap.operators.concat(new abap.types.Character(13).set('    "a": 1,\\n'),abap.operators.concat(new abap.types.Character(12).set('    "b": 2\\n'),abap.operators.concat(new abap.types.Character(6).set('  },\\n'),abap.operators.concat(new abap.types.Character(10).set('  123.45\\n'),new abap.types.Character(1).set(']')))))))));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.Character(2).set('\\n'), with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, occ: abap.IntegerFactory.get(0)}));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async empty_set() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(59).set('                |    |array  |                        |  |0')});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted()), iv_indent: abap.IntegerFactory.get(0)})));
    lv_exp.set(new abap.types.Character(2).set('[]'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted()), iv_indent: abap.IntegerFactory.get(2)})));
    lv_exp.set(new abap.types.Character(2).set('[]'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async escape_string() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lv_val = new abap.types.String({qualifiedName: "STRING"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    lv_val.set(abap.operators.concat(new abap.types.Character(1).set('a'),abap.operators.concat(new abap.types.Character(1).set('"'),abap.operators.concat(new abap.types.Character(1).set('\\'),abap.operators.concat(abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab,abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf)))));
    await lo_nodes.get().add({iv_str: new abap.types.String().set(` \| \|str \|${abap.templateFormatting(lv_val)}\| \|0`)});
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted())})));
    lv_exp.set(new abap.types.Character(13).set('"a\\"\\\\\\t\\r\\n"'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async empty() {
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    lv_act.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: (await lo_nodes.get().sorted())})));
    lv_exp.set(new abap.types.Character(1).set(''));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_SERIALIZER_TEST'] = ltcl_serializer_test;

class ltcl_utils_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_UTILS_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"NORMALIZE_PATH": {"visibility": "I", "parameters": {}},
  "SPLIT_PATH": {"visibility": "I", "parameters": {}},
  "VALIDATE_ARRAY_INDEX": {"visibility": "I", "parameters": {}},
  "STRING_TO_XSTRING_UTF8": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async string_to_xstring_utf8() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].string_to_xstring_utf8({iv_str: new abap.types.Character(3).set('123')})), exp: new abap.types.Character(6).set('313233')});
  }
  async validate_array_index() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].validate_array_index({iv_path: new abap.types.Character(1).set('x'), iv_index: new abap.types.Character(3).set('123')})), exp: abap.IntegerFactory.get(123)});
    try {
      await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].validate_array_index({iv_path: new abap.types.Character(1).set('x'), iv_index: new abap.types.Character(1).set('a')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
    try {
      await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].validate_array_index({iv_path: new abap.types.Character(1).set('x'), iv_index: new abap.types.Character(1).set('0')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
  }
  async normalize_path() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: new abap.types.Character(1).set('')})), exp: new abap.types.Character(1).set('/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: new abap.types.Character(1).set('/')})), exp: new abap.types.Character(1).set('/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: new abap.types.Character(3).set('abc')})), exp: new abap.types.Character(5).set('/abc/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: new abap.types.Character(4).set('/abc')})), exp: new abap.types.Character(5).set('/abc/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: new abap.types.Character(4).set('abc/')})), exp: new abap.types.Character(5).set('/abc/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: new abap.types.Character(5).set('/abc/')})), exp: new abap.types.Character(5).set('/abc/')});
  }
  async split_path() {
    let ls_exp = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    let lv_path = new abap.types.String({qualifiedName: "STRING"});
    lv_path.set(new abap.types.Character(1).set(''));
    ls_exp.get().path.set(new abap.types.Character(1).set(''));
    ls_exp.get().name.set(new abap.types.Character(1).set(''));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
    lv_path.set(new abap.types.Character(1).set('/'));
    ls_exp.get().path.set(new abap.types.Character(1).set(''));
    ls_exp.get().name.set(new abap.types.Character(1).set(''));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
    lv_path.set(new abap.types.Character(5).set('/abc/'));
    ls_exp.get().path.set(new abap.types.Character(1).set('/'));
    ls_exp.get().name.set(new abap.types.Character(3).set('abc'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
    lv_path.set(new abap.types.Character(3).set('abc'));
    ls_exp.get().path.set(new abap.types.Character(1).set('/'));
    ls_exp.get().name.set(new abap.types.Character(3).set('abc'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
    lv_path.set(new abap.types.Character(4).set('/abc'));
    ls_exp.get().path.set(new abap.types.Character(1).set('/'));
    ls_exp.get().name.set(new abap.types.Character(3).set('abc'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
    lv_path.set(new abap.types.Character(4).set('abc/'));
    ls_exp.get().path.set(new abap.types.Character(1).set('/'));
    ls_exp.get().name.set(new abap.types.Character(3).set('abc'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
    lv_path.set(new abap.types.Character(8).set('/abc/xyz'));
    ls_exp.get().path.set(new abap.types.Character(5).set('/abc/'));
    ls_exp.get().name.set(new abap.types.Character(3).set('xyz'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
    lv_path.set(new abap.types.Character(9).set('/abc/xyz/'));
    ls_exp.get().path.set(new abap.types.Character(5).set('/abc/'));
    ls_exp.get().name.set(new abap.types.Character(3).set('xyz'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_path})), exp: ls_exp});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_UTILS_TEST'] = ltcl_utils_test;

class ltcl_reader_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_READER_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_VALUE": {"visibility": "I", "parameters": {}},
  "GET_NODE_TYPE": {"visibility": "I", "parameters": {}},
  "EXISTS": {"visibility": "I", "parameters": {}},
  "VALUE_INTEGER": {"visibility": "I", "parameters": {}},
  "VALUE_NUMBER": {"visibility": "I", "parameters": {}},
  "VALUE_BOOLEAN": {"visibility": "I", "parameters": {}},
  "VALUE_STRING": {"visibility": "I", "parameters": {}},
  "MEMBERS": {"visibility": "I", "parameters": {}},
  "SLICE": {"visibility": "I", "parameters": {}},
  "ARRAY_TO_STRING_TABLE": {"visibility": "I", "parameters": {}},
  "GET_DATE": {"visibility": "I", "parameters": {}},
  "GET_TIMESTAMP": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async slice() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('          |         |array  |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/         |1        |object |                        |1 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/       |message  |str    |Indentation problem ... |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/       |key      |str    |indentation             |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/start/ |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/start/ |col      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/end/   |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/end/   |col      |num    |26                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/1/       |filename |str    |./zxxx.prog.abap        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/         |2        |object |                        |2 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/       |message  |str    |Remove space before XXX |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/       |key      |str    |space_before_dot        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/start/ |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/start/ |col      |num    |21                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/end/   |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/end/   |col      |num    |22                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(58).set('/2/       |filename |str    |./zxxx.prog.abap        |  |0')});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.statements.cast(lo_cut, (await lo_cut.get().z2ui5_if_ajson$slice({iv_path: new abap.types.Character(7).set('/issues')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |8')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |string   |str    |abc                     |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |number   |num    |123                     |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |float    |num    |123.45                  |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |boolean  |bool   |true                    |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |false    |bool   |false                   |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |null     |null   |                        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |date     |str    |2020-03-15              |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/                |issues   |array  |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/         |1        |object |                        |1 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |message  |str    |Indentation problem ... |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |key      |str    |indentation             |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/start/ |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/start/ |col      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |row      |num    |4                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |col      |num    |26                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |filename |str    |./zxxx.prog.abap        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/         |2        |object |                        |2 |5')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |message  |str    |Remove space before XXX |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |key      |str    |space_before_dot        |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |start    |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/start/ |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/start/ |col      |num    |21                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |end      |object |                        |  |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |row      |num    |3                       |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |col      |num    |22                      |  |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |filename |str    |./zxxx.prog.abap        |  |0')});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.statements.cast(lo_cut, (await lo_cut.get().z2ui5_if_ajson$slice({iv_path: new abap.types.Character(1).set('/')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |object |                        | |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |row      |num    |3                       | |0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |col      |num    |21                      | |0')});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.statements.cast(lo_cut, (await lo_cut.get().z2ui5_if_ajson$slice({iv_path: new abap.types.Character(16).set('/issues/2/start/')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async get_value() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await abap.statements.cast(lo_cut, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get({iv_path: new abap.types.Character(7).set('/string')})), exp: new abap.types.Character(3).set('abc')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get({iv_path: new abap.types.Character(8).set('/string/')})), exp: new abap.types.Character(3).set('abc')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get({iv_path: new abap.types.Character(8).set('/boolean')})), exp: new abap.types.Character(4).set('true')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get({iv_path: new abap.types.Character(19).set('/issues/2/start/row')})), exp: new abap.types.Character(1).set('3')});
  }
  async get_node_type() {
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(1).set('/')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(7).set('/string')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(7).set('/number')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(6).set('/float')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(8).set('/boolean')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(6).set('/false')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(5).set('/null')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(5).set('/date')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$get_node_type({iv_path: new abap.types.Character(7).set('/issues')})), exp: abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array});
  }
  async get_date() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lv_exp = new abap.types.Date({qualifiedName: "D"});
    lo_cut.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_());
    lv_exp.set(new abap.types.Character(8).set('20200728'));
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |object |                        | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |date1    |str    |2020-07-28              | |0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_date({iv_path: new abap.types.Character(6).set('/date1')})), exp: lv_exp});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |object |                        | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |date1    |str    |2020-07-28T01:00:00Z    | |0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_date({iv_path: new abap.types.Character(6).set('/date1')})), exp: lv_exp});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |object |                        | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |date1    |str    |20200728                | |0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_date({iv_path: new abap.types.Character(6).set('/date1')})), exp: new abap.types.Character(1).set('')});
  }
  async get_timestamp() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lv_exp = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    lv_exp.set(`20200728000000`);
    lo_cut.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_());
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |object |                        | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |timestamp|str    |2020-07-28T00:00:00Z    | |0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_timestamp({iv_path: new abap.types.Character(10).set('/timestamp')})), exp: lv_exp});
  }
  async exists() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await abap.statements.cast(lo_cut, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$exists({iv_path: new abap.types.Character(7).set('/string')})), exp: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$exists({iv_path: new abap.types.Character(8).set('/string/')})), exp: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$exists({iv_path: new abap.types.Character(4).set('/xxx')})), exp: abap.builtin.abap_false});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$exists({iv_path: new abap.types.Character(19).set('/issues/2/start/row')})), exp: abap.builtin.abap_true});
  }
  async value_integer() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await abap.statements.cast(lo_cut, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_integer({iv_path: new abap.types.Character(7).set('/string')})), exp: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_integer({iv_path: new abap.types.Character(7).set('/number')})), exp: abap.IntegerFactory.get(123)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_integer({iv_path: new abap.types.Character(6).set('/float')})), exp: abap.IntegerFactory.get(123)});
  }
  async value_number() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await abap.statements.cast(lo_cut, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_number({iv_path: new abap.types.Character(7).set('/string')})), exp: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_number({iv_path: new abap.types.Character(7).set('/number')})), exp: new abap.types.Character(5).set('123.0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_number({iv_path: new abap.types.Character(6).set('/float')})), exp: new abap.types.Character(6).set('123.45')});
  }
  async value_boolean() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await abap.statements.cast(lo_cut, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_boolean({iv_path: new abap.types.Character(7).set('/string')})), exp: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_boolean({iv_path: new abap.types.Character(7).set('/number')})), exp: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_boolean({iv_path: new abap.types.Character(4).set('/xxx')})), exp: abap.builtin.abap_false});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_boolean({iv_path: new abap.types.Character(8).set('/boolean')})), exp: abap.builtin.abap_true});
  }
  async value_string() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await abap.statements.cast(lo_cut, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_string({iv_path: new abap.types.Character(7).set('/string')})), exp: new abap.types.Character(3).set('abc')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_string({iv_path: new abap.types.Character(7).set('/number')})), exp: new abap.types.Character(3).set('123')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_string({iv_path: new abap.types.Character(4).set('/xxx')})), exp: new abap.types.Character(1).set('')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$get_string({iv_path: new abap.types.Character(8).set('/boolean')})), exp: new abap.types.Character(4).set('true')});
  }
  async members() {
    let lt_exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await abap.statements.cast(lo_cut, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    abap.statements.clear(lt_exp);
    abap.statements.append({source: new abap.types.Character(1).set('1'), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(1).set('2'), target: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$members({iv_path: new abap.types.Character(7).set('/issues')})), exp: lt_exp});
    abap.statements.clear(lt_exp);
    abap.statements.append({source: new abap.types.Character(3).set('col'), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(3).set('row'), target: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$members({iv_path: new abap.types.Character(16).set('/issues/1/start/')})), exp: lt_exp});
  }
  async array_to_string_table() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_act = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lt_exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |array  |                        | |6')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |1        |num    |123                     |1|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |2        |num    |234                     |2|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |3        |str    |abc                     |3|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |4        |bool   |true                    |4|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |5        |bool   |false                   |5|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |6        |null   |null                    |6|0')});
    abap.statements.append({source: new abap.types.Character(3).set('123'), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(3).set('234'), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(3).set('abc'), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(1).set('X'), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(1).set(''), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(1).set(''), target: lt_exp});
    lo_cut.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_());
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    lt_act.set((await lo_cut.get().z2ui5_if_ajson$array_to_string_table({iv_path: new abap.types.Character(1).set('/')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lt_exp});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |object |                        | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |a        |str    |abc                     | |0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    try {
      await lo_cut.get().z2ui5_if_ajson$array_to_string_table({iv_path: new abap.types.Character(2).set('/x')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(18).set('Path not found: /x')});
      } else {
        throw e;
      }
    }
    try {
      await lo_cut.get().z2ui5_if_ajson$array_to_string_table({iv_path: new abap.types.Character(1).set('/')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(20).set('Array expected at: /')});
      } else {
        throw e;
      }
    }
    try {
      await lo_cut.get().z2ui5_if_ajson$array_to_string_table({iv_path: new abap.types.Character(2).set('/a')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(21).set('Array expected at: /a')});
      } else {
        throw e;
      }
    }
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('  |         |array  |                        | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(49).set('/ |1        |object |                        |1|0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    try {
      await lo_cut.get().z2ui5_if_ajson$array_to_string_table({iv_path: new abap.types.Character(1).set('/')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(41).set('Cannot convert [object] to string at [/1]')});
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_READER_TEST'] = ltcl_reader_test;

class ltcl_json_to_abap {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_JSON_TO_ABAP';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TO_ABAP_STRUC": {"visibility": "I", "parameters": {}},
  "TO_ABAP_TIMESTAMP_INITIAL": {"visibility": "I", "parameters": {}},
  "TO_ABAP_VALUE": {"visibility": "I", "parameters": {}},
  "TO_ABAP_ARRAY": {"visibility": "I", "parameters": {}},
  "TO_ABAP_ARRAY_OF_ARRAYS_SIMPLE": {"visibility": "I", "parameters": {}},
  "TO_ABAP_ARRAY_OF_ARRAYS": {"visibility": "I", "parameters": {}},
  "TO_ABAP_W_TAB_OF_STRUC": {"visibility": "I", "parameters": {}},
  "TO_ABAP_W_PLAIN_TAB": {"visibility": "I", "parameters": {}},
  "TO_ABAP_HASHED_TAB": {"visibility": "I", "parameters": {}},
  "TO_ABAP_SORTED_TAB": {"visibility": "I", "parameters": {}},
  "TO_ABAP_HASHED_PLAIN_TAB": {"visibility": "I", "parameters": {}},
  "TO_ABAP_NEGATIVE": {"visibility": "I", "parameters": {}},
  "TO_ABAP_CORRESPONDING": {"visibility": "I", "parameters": {}},
  "TO_ABAP_CORRESPONDING_NEGATIVE": {"visibility": "I", "parameters": {}},
  "TO_ABAP_CORRESPONDING_PUBLIC": {"visibility": "I", "parameters": {}},
  "TO_ABAP_CORRESPONDING_PUB_NEG": {"visibility": "I", "parameters": {}},
  "TO_ABAP_TIME": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async to_abap_struc() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let ls_mock = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});
    let lv_exp_date = new abap.types.Date({qualifiedName: "D"});
    lv_exp_date.set('20200728');
    let lv_exp_timestamp = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    lv_exp_timestamp.set('20200728000000');
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('       |           |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |str        |str    |hello                     | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |int        |num    |5                         | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |float      |num    |5.5                       | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |bool       |bool   |true                      | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |obj        |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/obj/  |a          |str    |world                     | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |tab        |array  |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |date1      |str    |2020-07-28                | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |date2      |str    |2020-07-28T00:00:00Z      | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |timestamp1 |str    |2020-07-28T00:00:00       | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |timestamp2 |str    |2020-07-28T00:00:00Z      | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |timestamp3 |str    |2020-07-28T01:00:00+01:00 | ')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
    ls_exp.get().str.set(new abap.types.Character(5).set('hello'));
    ls_exp.get().int.set(abap.IntegerFactory.get(5));
    ls_exp.get().float.set(new abap.types.Character(3).set('5.5'));
    ls_exp.get().bool.set(abap.builtin.abap_true);
    ls_exp.get().obj.get().a.set(new abap.types.Character(5).set('world'));
    ls_exp.get().date1.set(lv_exp_date);
    ls_exp.get().date2.set(lv_exp_date);
    ls_exp.get().timestamp1.set(lv_exp_timestamp);
    ls_exp.get().timestamp2.set(lv_exp_timestamp);
    ls_exp.get().timestamp3.set(lv_exp_timestamp);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_mock, exp: ls_exp});
  }
  async to_abap_timestamp_initial() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lv_mock = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(50).set('       |           |str    |0000-00-00T00:00:00Z| ')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lv_mock});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_mock, exp: abap.IntegerFactory.get(0)});
  }
  async to_abap_time() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lv_mock = new abap.types.Time({qualifiedName: "T"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('       |           |str    |11:11:11| ')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lv_mock});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_mock, exp: new abap.types.Character(6).set('111111')});
  }
  async to_abap_value() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lv_mock = new abap.types.String({qualifiedName: "STRING"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('       |           |str    |hello                     | ')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lv_mock});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_mock, exp: new abap.types.Character(5).set('hello')});
  }
  async to_abap_array() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lt_mock = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lt_exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(53).set('       |           |array    |                     | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(53).set('/      |1          |str      |One                  |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(53).set('/      |2          |str      |Two                  |2')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_mock});
    abap.statements.append({source: new abap.types.Character(3).set('One'), target: lt_exp});
    abap.statements.append({source: new abap.types.Character(3).set('Two'), target: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_mock, exp: lt_exp});
  }
  async to_abap_array_of_arrays_simple() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lt_mock = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lt_exp = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lt_tmp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('       |           |array    |                    | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/      |1          |array    |                    |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/      |2          |array    |                    |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/1/    |1          |str      |One                 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/2/    |1          |str      |Two                 |1')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_mock});
    abap.statements.append({source: new abap.types.Character(3).set('One'), target: lt_tmp});
    abap.statements.append({source: lt_tmp, target: lt_exp});
    abap.statements.clear(lt_tmp);
    abap.statements.append({source: new abap.types.Character(3).set('Two'), target: lt_tmp});
    abap.statements.append({source: lt_tmp, target: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_mock, exp: lt_exp});
  }
  async to_abap_array_of_arrays() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lt_mock = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lt_exp = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lt_tmp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('       |           |array    |                    | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/      |1          |array    |                    |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/      |2          |array    |                    |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/1/    |1          |str      |One                 |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/1/    |2          |str      |Two                 |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/2/    |1          |str      |Three               |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(52).set('/2/    |2          |str      |Four                |2')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_mock});
    abap.statements.append({source: new abap.types.Character(3).set('One'), target: lt_tmp});
    abap.statements.append({source: new abap.types.Character(3).set('Two'), target: lt_tmp});
    abap.statements.append({source: lt_tmp, target: lt_exp});
    abap.statements.clear(lt_tmp);
    abap.statements.append({source: new abap.types.Character(5).set('Three'), target: lt_tmp});
    abap.statements.append({source: new abap.types.Character(4).set('Four'), target: lt_tmp});
    abap.statements.append({source: lt_tmp, target: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_mock, exp: lt_exp});
  }
  async to_abap_w_tab_of_struc() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let ls_mock = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let ls_elem = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('       |           |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |tab        |array  |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/tab/  |1          |object |                          |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/tab/1/|a          |str    |One                       | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/tab/  |2          |object |                          |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/tab/2/|a          |str    |Two                       | ')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
    ls_elem.get().a.set(new abap.types.Character(3).set('One'));
    abap.statements.append({source: ls_elem, target: ls_exp.get().tab});
    ls_elem.get().a.set(new abap.types.Character(3).set('Two'));
    abap.statements.append({source: ls_elem, target: ls_exp.get().tab});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_mock, exp: ls_exp});
  }
  async to_abap_w_plain_tab() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let ls_mock = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(62).set('             |           |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(62).set('/            |tab_plain  |array  |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(62).set('/tab_plain/  |1          |str    |One                       |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(62).set('/tab_plain/  |2          |str    |Two                       |2')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
    abap.statements.append({source: new abap.types.Character(3).set('One'), target: ls_exp.get().tab_plain});
    abap.statements.append({source: new abap.types.Character(3).set('Two'), target: ls_exp.get().tab_plain});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_mock, exp: ls_exp});
  }
  async to_abap_hashed_plain_tab() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lt_mock = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");
    let lt_exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(61).set('            |           |array  |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(61).set('/           |1          |str    |One                       |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(61).set('/           |2          |str    |Two                       |2')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_mock});
    abap.statements.insertInternal({data: new abap.types.String().set(`One`), table: lt_exp});
    abap.statements.insertInternal({data: new abap.types.String().set(`Two`), table: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_mock, exp: lt_exp});
  }
  async to_abap_hashed_tab() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lt_mock = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed");
    let lt_exp = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let ls_elem = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('              |           |array  |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/             |1          |object |                          |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/             |2          |object |                          |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/1/           |a          |str    |One                       | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/1/           |b          |num    |1                         | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/2/           |a          |str    |Two                       | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/2/           |b          |num    |2                         | ')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_mock});
    ls_elem.get().a.set(new abap.types.Character(3).set('One'));
    ls_elem.get().b.set(abap.IntegerFactory.get(1));
    abap.statements.insertInternal({data: ls_elem, table: lt_exp});
    ls_elem.get().a.set(new abap.types.Character(3).set('Two'));
    ls_elem.get().b.set(abap.IntegerFactory.get(2));
    abap.statements.insertInternal({data: ls_elem, table: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_mock, exp: lt_exp});
  }
  async to_abap_sorted_tab() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lt_mock = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_sorted");
    let lt_exp = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_sorted");
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let ls_elem = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('              |           |array  |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/             |1          |object |                          |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/             |2          |object |                          |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/1/           |a          |str    |One                       | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/1/           |b          |num    |1                         | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/2/           |a          |str    |Two                       | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(63).set('/2/           |b          |num    |2                         | ')});
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_mock});
    ls_elem.get().a.set(new abap.types.Character(3).set('One'));
    ls_elem.get().b.set(abap.IntegerFactory.get(1));
    abap.statements.insertInternal({data: ls_elem, table: lt_exp});
    ls_elem.get().a.set(new abap.types.Character(3).set('Two'));
    ls_elem.get().b.set(abap.IntegerFactory.get(2));
    abap.statements.insertInternal({data: ls_elem, table: lt_exp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_mock, exp: lt_exp});
  }
  async to_abap_negative() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    let ls_mock = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_str = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lr_obj = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let lr_data = new abap.types.DataReference(new abap.types.Character(4));
    let lt_hashed = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(22).set('     |      |object | ')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(22).set('/    |str   |object | ')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(18).set('Expected structure')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(22).set('     |      |object | ')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(22).set('/    |str   |array  | ')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(14).set('Expected table')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(27).set('     |      |object |      ')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(27).set('/    |int   |str    |hello ')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(22).set('Source is not a number')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(29).set('     |      |object |        ')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(29).set('/    |date1 |str    |baddate ')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(22).set('Unexpected date format')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(30).set('    |        |object |        ')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(30).set('/   |missing |str    |123     ')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_mock});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(14).set('Path not found')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(29).set('      |     |array  |      | ')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(29).set('/     |a    |str    |hello |1')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_str});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(27).set('Need index to access tables')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('      |     |str  |hello      | ')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lr_obj});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(20).set('Cannot assign to ref')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('      |     |str  |hello      | ')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lr_data});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(20).set('Cannot assign to ref')});
      } else {
        throw e;
      }
    }
    try {
      lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
      await lo_nodes.get().add({iv_str: new abap.types.Character(61).set('            |           |array  |                          | ')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(61).set('/           |1          |str    |One                       |1')});
      await lo_nodes.get().add({iv_str: new abap.types.Character(61).set('/           |2          |str    |One                       |2')});
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: lt_hashed});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(19).set('Duplicate insertion')});
      } else {
        throw e;
      }
    }
  }
  async to_abap_corresponding() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let ls_act = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('       |           |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |a          |str    |test                      | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |c          |num    |24022022                  | ')});
    ls_exp.get().a.set(new abap.types.Character(4).set('test'));
    lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_({iv_corresponding: abap.builtin.abap_true}));
    await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_act, exp: ls_exp});
  }
  async to_abap_corresponding_negative() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let ls_act = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('       |           |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |a          |str    |test                      | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |c          |num    |24022022                  | ')});
    ls_exp.get().a.set(new abap.types.Character(4).set('test'));
    ls_exp.get().b.set(new abap.types.Integer().set(24022022));
    try {
      lo_cut.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
      await lo_cut.get().to_abap({it_nodes: (await lo_nodes.get().sorted()), c_container: ls_act});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(14).set('Path not found')});
      } else {
        throw e;
      }
    }
  }
  async to_abap_corresponding_public() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let ls_act = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('       |           |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |a          |str    |test                      | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |c          |num    |24022022                  | ')});
    ls_exp.get().a.set(new abap.types.Character(4).set('test'));
    lo_cut.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_());
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    await lo_cut.get().z2ui5_if_ajson$to_abap({iv_corresponding: abap.builtin.abap_true, ev_container: ls_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_act, exp: ls_exp});
    abap.statements.clear(ls_act);
    li_json.set((await lo_cut.get().z2ui5_if_ajson$to_abap_corresponding_only()));
    await li_json.get().z2ui5_if_ajson$to_abap({ev_container: ls_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_act, exp: ls_exp});
  }
  async to_abap_corresponding_pub_neg() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let ls_act = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('       |           |object |                          | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |a          |str    |test                      | ')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(56).set('/      |c          |num    |24022022                  | ')});
    ls_exp.get().a.set(new abap.types.Character(4).set('test'));
    lo_cut.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_());
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    try {
      await lo_cut.get().z2ui5_if_ajson$to_abap({ev_container: ls_act});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(14).set('Path not found')});
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_JSON_TO_ABAP'] = ltcl_json_to_abap;
ltcl_json_to_abap.ty_struc = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {});
ltcl_json_to_abap.tty_struc = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc");
ltcl_json_to_abap.tty_struc_sorted = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_sorted");
ltcl_json_to_abap.tty_struc_hashed = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed");
ltcl_json_to_abap.ty_complex = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-STR"}), "int": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-INT"}), "float": new abap.types.Float({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-FLOAT"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "obj": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc"), "tab_plain": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "tab_hashed": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_STRUC-B"})}, "ltcl_json_to_abap=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["A"]},"secondary":[]}, "ltcl_json_to_abap=>tty_struc_hashed"), "oref": new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}), "date1": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE1"}), "date2": new abap.types.Date({qualifiedName: "LTCL_JSON_TO_ABAP=>TY_COMPLEX-DATE2"}), "timestamp1": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp2": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "timestamp3": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"})}, "ltcl_json_to_abap=>ty_complex", undefined, {}, {});

class ltcl_writer_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_WRITER_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"SET_AJSON": {"visibility": "I", "parameters": {}},
  "SET_VALUE": {"visibility": "I", "parameters": {}},
  "IGNORE_EMPTY": {"visibility": "I", "parameters": {}},
  "SET_OBJ": {"visibility": "I", "parameters": {}},
  "SET_OBJ_W_DATE_TIME": {"visibility": "I", "parameters": {}},
  "SET_TAB": {"visibility": "I", "parameters": {}},
  "SET_TAB_HASHED": {"visibility": "I", "parameters": {}},
  "SET_TAB_NESTED_STRUCT": {"visibility": "I", "parameters": {}},
  "PROVE_PATH_EXISTS": {"visibility": "I", "parameters": {}},
  "DELETE_SUBTREE": {"visibility": "I", "parameters": {}},
  "DELETE_": {"visibility": "I", "parameters": {}},
  "ARRAYS": {"visibility": "I", "parameters": {}},
  "ARRAYS_NEGATIVE": {"visibility": "I", "parameters": {}},
  "ROOT_ASSIGNMENT": {"visibility": "I", "parameters": {}},
  "SET_BOOL_ABAP_BOOL": {"visibility": "I", "parameters": {}},
  "SET_BOOL_INT": {"visibility": "I", "parameters": {}},
  "SET_BOOL_TAB": {"visibility": "I", "parameters": {}},
  "SET_STR": {"visibility": "I", "parameters": {}},
  "SET_INT": {"visibility": "I", "parameters": {}},
  "SET_DATE": {"visibility": "I", "parameters": {}},
  "SET_TIMESTAMP": {"visibility": "I", "parameters": {}},
  "READ_ONLY": {"visibility": "I", "parameters": {}},
  "SET_ARRAY_OBJ": {"visibility": "I", "parameters": {}},
  "SET_WITH_TYPE": {"visibility": "I", "parameters": {}},
  "OVERWRITE_W_KEEP_ORDER_TOUCH": {"visibility": "I", "parameters": {}},
  "OVERWRITE_W_KEEP_ORDER_SET": {"visibility": "I", "parameters": {}},
  "SETX": {"visibility": "I", "parameters": {}},
  "SETX_FLOAT": {"visibility": "I", "parameters": {}},
  "SETX_COMPLEX": {"visibility": "I", "parameters": {}},
  "SETX_COMPLEX_W_KEEP_ORDER": {"visibility": "I", "parameters": {}},
  "SET_WITH_TYPE_SLICE": {"visibility": "I", "parameters": {"IO_JSON_IN": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});}, "is_optional": " "}, "IO_JSON_OUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async prove_path_exists() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/     |b     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/   |c     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/c/ |d     |object |     ||0')});
    await lo_cut.get().prove_path_exists({iv_path: new abap.types.Character(9).set('/a/b/c/d/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('         |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/        |a     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/      |b     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/b/    |c     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/b/c/  |d     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/b/c/d |e     |object |     ||0')});
    await lo_cut.get().prove_path_exists({iv_path: new abap.types.Character(11).set('/a/b/c/d/e/')});
  }
  async delete_subtree() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/     |b     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/   |c     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/c/ |d     |object |     ||0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes_exp.get().mt_nodes);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||0')});
    await lo_cut.get().delete_subtree({iv_path: new abap.types.Character(3).set('/a/'), iv_name: new abap.types.Character(1).set('b')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async delete_() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/     |b     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/   |c     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/c/ |d     |object |     ||0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes_exp.get().mt_nodes);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||0')});
    await lo_cut.get().z2ui5_if_ajson$delete_({iv_path: new abap.types.Character(4).set('/a/b')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/     |b     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/   |c     |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/a/b/c/ |d     |object |     ||0')});
    lo_cut.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes_exp.get().mt_nodes);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||0')});
    await lo_cut.get().z2ui5_if_ajson$delete_({iv_path: new abap.types.Character(5).set('/a/b/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_ajson() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lo_src = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_src.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |x     |object |     ||2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/x/     |b     |str    |abc  ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/x/     |c     |num    |10   ||0')});
    lo_src.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set(''), iv_val: lo_src});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: lo_src});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/a/     |b     |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/b/     |c     |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/b/c/   |x     |object |     ||2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/b/c/x/ |b     |str    |abc  ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/b/c/x/ |c     |num    |10   ||0')});
    await li_writer.get().z2ui5_if_ajson$clear();
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(6).set('/a/b/c'), iv_val: lo_src});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/       |b     |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/b/     |x     |object |     ||2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/b/x/   |b     |str    |abc  ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(34).set('/a/b/x/   |c     |num    |10   ||0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/a/b'), iv_val: lo_src});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async set_value() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |x     |object |     ||2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/x/     |b     |str    |abc  ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/x/     |c     |num    |10   ||0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/x/b'), iv_val: new abap.types.Character(3).set('abc')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/x/c'), iv_val: abap.IntegerFactory.get(10)});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/x/d'), iv_val: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async ignore_empty() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |a     |num    |1    ||0')});
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(1)});
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/b'), iv_val: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |a     |num    |1    ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |b     |num    |0    ||0')});
    await li_cut.get().z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: new abap.types.Character(2).set('/b'), iv_val: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async set_obj() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_struc = new abap.types.Structure({"b": new abap.types.String({qualifiedName: "STRING"}), "c": new abap.types.Integer({qualifiedName: "I"}), "d": new abap.types.Date({qualifiedName: "D"})}, undefined, undefined, {}, {});
    ls_struc.get().b.set('abc');
    ls_struc.get().c.set(10);
    ls_struc.get().d.set('20220401');
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('        |      |object |           ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/       |x     |object |           ||3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/x/     |b     |str    |abc        ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/x/     |c     |num    |10         ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/x/     |d     |str    |2022-04-01 ||0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/x'), iv_val: ls_struc});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async set_obj_w_date_time() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_struc = new abap.types.Structure({"d": new abap.types.Date({qualifiedName: "D"}), "d_empty": new abap.types.Date({qualifiedName: "D"}), "t": new abap.types.Time({qualifiedName: "T"}), "t_empty": new abap.types.Time({qualifiedName: "T"}), "ts": new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}), "p": new abap.types.Packed({length: 5, decimals: 2})}, undefined, undefined, {}, {});
    ls_struc.get().d.set('20220401');
    ls_struc.get().t.set('200103');
    ls_struc.get().ts.set('20220401200103');
    ls_struc.get().p.set('123.45');
    lo_cut.set((await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$format_datetime()));
    li_writer.set(lo_cut);
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('      |        |object |           ||6')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/     |d       |str    |2022-04-01 ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/     |d_empty |str    |           ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/     |t       |str    |20:01:03   ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/     |t_empty |str    |           ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(48).set('/     |ts      |str    |2022-04-01T20:01:03Z ||0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(38).set('/     |p       |num    |123.45     ||0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_struc});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async set_tab() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lt_tab = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    abap.statements.append({source: new abap.types.Character(5).set('hello'), target: lt_tab});
    abap.statements.append({source: new abap.types.Character(5).set('world'), target: lt_tab});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('        |      |object |     | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/       |x     |array  |     | |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/x/     |1     |str    |hello|1|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/x/     |2     |str    |world|2|0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/x'), iv_val: lt_tab});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async set_tab_hashed() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lt_tab = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    abap.statements.insertInternal({data: new abap.types.String().set(`hello`), table: lt_tab});
    abap.statements.insertInternal({data: new abap.types.String().set(`world`), table: lt_tab});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('        |      |object |     | |1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/       |x     |array  |     | |2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/x/     |1     |str    |hello|1|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/x/     |2     |str    |world|2|0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/x'), iv_val: lt_tab});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async set_tab_nested_struct() {
    
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_tab = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "TY_INCLUDE-STR"}), "int": new abap.types.Integer({qualifiedName: "TY_INCLUDE-INT"}), "dat": new abap.types.XString({qualifiedName: "TY_STRUCT-DAT"})}, "ty_struct", undefined, {}, {});
    let lt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "TY_INCLUDE-STR"}), "int": new abap.types.Integer({qualifiedName: "TY_INCLUDE-INT"}), "dat": new abap.types.XString({qualifiedName: "TY_STRUCT-DAT"})}, "ty_struct", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["STR"]},"secondary":[]}, "ty_tab");
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    ls_tab.get().str.set(new abap.types.Character(5).set('hello'));
    ls_tab.get().int.set(abap.IntegerFactory.get(123));
    ls_tab.get().dat.set(new abap.types.Character(4).set('4041'));
    abap.statements.insertInternal({data: ls_tab, table: lt_tab});
    ls_tab.get().str.set(new abap.types.Character(5).set('world'));
    ls_tab.get().int.set(new abap.types.Integer().set(456));
    ls_tab.get().dat.set(new abap.types.Character(4).set('6061'));
    abap.statements.insertInternal({data: ls_tab, table: lt_tab});
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('        |      |array  |     |0|2')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/       |1     |object |     |1|3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/       |2     |object |     |2|3')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/1/     |dat   |str    |4041 |0|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/1/     |int   |num    |123  |0|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/1/     |str   |str    |hello|0|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/2/     |dat   |str    |6061 |0|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/2/     |int   |num    |456  |0|0')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(33).set('/2/     |str   |str    |world|0|0')});
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: lt_tab});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes.get().sorted())});
  }
  async arrays() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_dummy = new abap.types.Structure({"x": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    ls_dummy.get().x.set('world');
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |array  |     | |0')});
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/a')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |array  |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/     |1     |str    |hello|1|0')});
    await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(5).set('hello')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/     |1     |str    |hello|1|0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/     |2     |object |     |2|1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/2/   |x     |str    |world| |0')});
    await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/a'), iv_val: ls_dummy});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/a')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |array  |     | |0')});
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/a'), iv_clear: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/     |1     |object |     |1|1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/1/   |x     |num    |123  | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/a/     |2     |num    |234  |2|0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(6).set('/a/1/x'), iv_val: abap.IntegerFactory.get(123)});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/a/2'), iv_val: new abap.types.Integer().set(234)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async arrays_negative() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/a')});
    await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(123)});
    try {
      await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(4).set('/a/1')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(41).set('Path [/a/1] already used and is not array')});
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(4).set('/a/1'), iv_val: abap.IntegerFactory.get(123)});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(24).set('Path [/a/1] is not array')});
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/x'), iv_val: abap.IntegerFactory.get(123)});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(24).set('Path [/x] does not exist')});
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(8).set('/a/abc/x'), iv_val: abap.IntegerFactory.get(123)});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(47).set('Cannot add non-numeric key [abc] to array [/a/]')});
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(6).set('/a/abc'), iv_val: abap.IntegerFactory.get(123)});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(47).set('Cannot add non-numeric key [abc] to array [/a/]')});
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/a/0'), iv_val: abap.IntegerFactory.get(123)});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lx.get().message, exp: new abap.types.Character(34).set('Cannot add zero key to array [/a/]')});
      } else {
        throw e;
      }
    }
  }
  async root_assignment() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_dummy = new abap.types.Structure({"x": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    ls_dummy.get().x.set('hello');
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |x     |str    |hello||0')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/       |x     |str    |hello||0')});
    await li_writer.get().z2ui5_if_ajson$clear();
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set(''), iv_val: ls_dummy});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |array  |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |1     |str    |hello|1|0')});
    await li_writer.get().z2ui5_if_ajson$clear();
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(1).set('')});
    await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(1).set(''), iv_val: new abap.types.Character(5).set('hello')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('        |      |str    |hello||0')});
    await li_writer.get().z2ui5_if_ajson$clear();
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set(''), iv_val: new abap.types.Character(5).set('hello')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_bool_abap_bool() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |      ||2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |bool   |true  ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |b     |bool   |false ||0')});
    await li_writer.get().z2ui5_if_ajson$set_boolean({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.builtin.abap_true});
    await li_writer.get().z2ui5_if_ajson$set_boolean({iv_path: new abap.types.Character(2).set('/b'), iv_val: abap.builtin.abap_false});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_bool_int() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |      ||2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |bool   |true  ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |b     |bool   |false ||0')});
    await li_writer.get().z2ui5_if_ajson$set_boolean({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(1)});
    await li_writer.get().z2ui5_if_ajson$set_boolean({iv_path: new abap.types.Character(2).set('/b'), iv_val: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_bool_tab() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lt_tab = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |object |      ||2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |a     |bool   |true  ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('/       |b     |bool   |false ||0')});
    abap.statements.append({source: new abap.types.Character(5).set('hello'), target: lt_tab});
    await li_writer.get().z2ui5_if_ajson$set_boolean({iv_path: new abap.types.Character(2).set('/a'), iv_val: lt_tab});
    abap.statements.clear(lt_tab);
    await li_writer.get().z2ui5_if_ajson$set_boolean({iv_path: new abap.types.Character(2).set('/b'), iv_val: lt_tab});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_str() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lv_date = new abap.types.Date({qualifiedName: "D"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(36).set('        |      |object |         ||3')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(36).set('/       |a     |str    |123      ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(36).set('/       |b     |str    |X        ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(36).set('/       |c     |str    |20200705 ||0')});
    await li_writer.get().z2ui5_if_ajson$set_string({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(3).set('123')});
    await li_writer.get().z2ui5_if_ajson$set_string({iv_path: new abap.types.Character(2).set('/b'), iv_val: abap.builtin.abap_true});
    lv_date.set(new abap.types.Character(8).set('20200705'));
    await li_writer.get().z2ui5_if_ajson$set_string({iv_path: new abap.types.Character(2).set('/c'), iv_val: lv_date});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_int() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(36).set('        |      |object |         ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(36).set('/       |a     |num    |123      ||0')});
    await li_writer.get().z2ui5_if_ajson$set_integer({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(123)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_date() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lv_date = new abap.types.Date({qualifiedName: "D"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(38).set('        |      |object |           ||2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(38).set('/       |a     |str    |2020-07-05 ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(38).set('/       |b     |str    |           ||0')});
    lv_date.set(new abap.types.Character(8).set('20200705'));
    await li_writer.get().z2ui5_if_ajson$set_date({iv_path: new abap.types.Character(2).set('/a'), iv_val: lv_date});
    abap.statements.clear(lv_date);
    await li_writer.get().z2ui5_if_ajson$set_date({iv_path: new abap.types.Character(2).set('/b'), iv_val: lv_date});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_timestamp() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lv_timestamp = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(48).set('        |      |object |                     ||1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(48).set('/       |a     |str    |2021-05-05T12:00:00Z ||0')});
    lv_timestamp.set(new abap.types.Character(14).set('20210505120000'));
    await li_writer.get().z2ui5_if_ajson$set_timestamp({iv_path: new abap.types.Character(2).set('/a'), iv_val: lv_timestamp});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async read_only() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(3).set('abc')});
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/b')});
    await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/b'), iv_val: new abap.types.Character(3).set('abc')});
    await lo_cut.get().z2ui5_if_ajson$freeze();
    try {
      await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/c'), iv_val: new abap.types.Character(3).set('abc')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/d')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/b'), iv_val: new abap.types.Character(3).set('xyz')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$delete_({iv_path: new abap.types.Character(2).set('/a')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
    try {
      await li_writer.get().z2ui5_if_ajson$clear();
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
  }
  async set_array_obj() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('                 |         |object |                        |  |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/                |issues   |array  |                        |  |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/         |1        |object |                        |1 |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/         |2        |object |                        |2 |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/1/       |end      |object |                        |  |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |col      |num    |26                      |  |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/1/end/   |row      |num    |4                       |  |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/2/       |end      |object |                        |  |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |col      |num    |22                      |  |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(65).set('/issues/2/end/   |row      |num    |3                       |  |0')});
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(7).set('/issues')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(17).set('/issues/1/end/col'), iv_val: abap.IntegerFactory.get(26)});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(17).set('/issues/1/end/row'), iv_val: abap.IntegerFactory.get(4)});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(17).set('/issues/2/end/col'), iv_val: abap.IntegerFactory.get(22)});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(17).set('/issues/2/end/row'), iv_val: abap.IntegerFactory.get(3)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async set_with_type() {
    let lo_sample = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_sample.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json())})));
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    await this.set_with_type_slice({io_json_in: lo_sample, io_json_out: li_writer, iv_path: new abap.types.Character(1).set('/')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_cut.get().z2ui5_if_ajson$mt_json_tree, exp: lo_sample.get().z2ui5_if_ajson$mt_json_tree});
  }
  async set_with_type_slice(INPUT) {
    let io_json_in = INPUT?.io_json_in;
    if (io_json_in?.getQualifiedName === undefined || io_json_in.getQualifiedName() !== "Z2UI5_CL_AJSON") { io_json_in = undefined; }
    if (io_json_in === undefined) { io_json_in = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"}).set(INPUT.io_json_in); }
    let io_json_out = INPUT?.io_json_out;
    if (io_json_out?.getQualifiedName === undefined || io_json_out.getQualifiedName() !== "Z2UI5_IF_AJSON") { io_json_out = undefined; }
    if (io_json_out === undefined) { io_json_out = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}).set(INPUT.io_json_out); }
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lv_path = new abap.types.String({qualifiedName: "STRING"});
    let fs_node_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    for await (const unique27 of abap.statements.loop(io_json_in.get().z2ui5_if_ajson$mt_json_tree,{where: async (I) => {return abap.compare.eq(I.path, iv_path);},topEquals: {"path": iv_path}})) {
      fs_node_.assign(unique27);
      lv_path.set(abap.operators.concat(fs_node_.get().path,abap.operators.concat(fs_node_.get().name,new abap.types.Character(1).set('/'))));
      let unique28 = fs_node_.get().type;
      if (abap.compare.eq(unique28, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
        await io_json_out.get().z2ui5_if_ajson$touch_array({iv_path: lv_path});
        await this.set_with_type_slice({io_json_in: io_json_in, io_json_out: io_json_out, iv_path: lv_path});
      } else if (abap.compare.eq(unique28, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
        await this.set_with_type_slice({io_json_in: io_json_in, io_json_out: io_json_out, iv_path: lv_path});
      } else {
        await io_json_out.get().z2ui5_if_ajson$set({iv_path: lv_path, iv_val: fs_node_.get().value, iv_node_type: fs_node_.get().type});
      }
    }
  }
  async overwrite_w_keep_order_set() {
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_dummy = new abap.types.Structure({"b": new abap.types.Integer({qualifiedName: "I"}), "a": new abap.types.Integer({qualifiedName: "I"})}, undefined, undefined, {}, {});
    li_cut.set((await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(13).set('{"a":0,"b":0}')});
    li_cut.set((await (await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$keep_item_order()).get().z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(13).set('{"b":0,"a":0}')});
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(1)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(13).set('{"b":0,"a":1}')});
  }
  async overwrite_w_keep_order_touch() {
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_dummy = new abap.types.Structure({"b": new abap.types.Integer({qualifiedName: "I"}), "a": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, undefined, undefined, {}, {});
    li_cut.set((await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(14).set('{"a":[],"b":0}')});
    li_cut.set((await (await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$keep_item_order()).get().z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(14).set('{"b":0,"a":[]}')});
    await li_cut.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/a'), iv_clear: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(14).set('{"b":0,"a":[]}')});
  }
  async setx() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(4).set('/a:1')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(7).set('{"a":1}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(6).set('/a : 1')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(7).set('{"a":1}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(6).set('/a:"1"')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(9).set('{"a":"1"}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(6).set('/a:abc')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(11).set('{"a":"abc"}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(7).set('/a:null')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(10).set('{"a":null}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(7).set('/a:true')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(10).set('{"a":true}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(9).set('/a:"true"')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(12).set('{"a":"true"}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(8).set('/a:false')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(11).set('{"a":false}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(6).set('/a/b:1')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(13).set('{"a":{"b":1}}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(3).set('/:1')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(1).set('1')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(2).set(':1')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(1).set('1')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(5).set('/a:""')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(8).set('{"a":""}')});
  }
  async setx_float() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(8).set('/a:1.123')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(11).set('{"a":1.123}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(9).set('/a:00.123')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(14).set('{"a":"00.123"}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(7).set('/a:.123')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(12).set('{"a":".123"}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(7).set('/a:123.')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(12).set('{"a":"123."}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(9).set('/a:1..123')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(14).set('{"a":"1..123"}')});
  }
  async setx_complex() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(12).set('/a:{"b" : 1}')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(13).set('{"a":{"b":1}}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(5).set('/a:{}')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(8).set('{"a":{}}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(9).set('/a:[1, 2]')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(11).set('{"a":[1,2]}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(5).set('/a:[]')})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(8).set('{"a":[]}')});
    try {
      await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(11).set('/a:{"b" : 1')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
    try {
      await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(8).set('/a:[1, 2')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
      } else {
        throw e;
      }
    }
  }
  async setx_complex_w_keep_order() {
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_dummy = new abap.types.Structure({"f": new abap.types.Integer({qualifiedName: "I"}), "e": new abap.types.Integer({qualifiedName: "I"})}, undefined, undefined, {}, {});
    ls_dummy.get().f.set(5);
    ls_dummy.get().e.set(6);
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].new({iv_keep_item_order: abap.builtin.abap_true})));
    await li_cut.get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(4).set('/c:3')});
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/b'), iv_val: ls_dummy});
    await li_cut.get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(4).set('/a:1')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(31).set('{"c":3,"b":{"f":5,"e":6},"a":1}')});
    await li_cut.get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(16).set('/b:{"z":9,"y":8}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(31).set('{"c":3,"b":{"z":9,"y":8},"a":1}')});
    await li_cut.get().z2ui5_if_ajson$setx({iv_param: new abap.types.Character(4).set('/0:9')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_cut.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(37).set('{"c":3,"b":{"z":9,"y":8},"a":1,"0":9}')});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_WRITER_TEST'] = ltcl_writer_test;
class ltcl_integrated {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_INTEGRATED';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"READER": {"visibility": "I", "parameters": {}},
  "ARRAY_INDEX": {"visibility": "I", "parameters": {}},
  "ARRAY_SIMPLE": {"visibility": "I", "parameters": {}},
  "STRINGIFY": {"visibility": "I", "parameters": {}},
  "ITEM_ORDER_INTEGRATED": {"visibility": "I", "parameters": {}},
  "CHAINING": {"visibility": "I", "parameters": {}},
  "PUSH_JSON": {"visibility": "I", "parameters": {}},
  "IS_EMPTY": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async array_simple() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lt_exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lv_src = new abap.types.String({qualifiedName: "STRING"});
    let li_reader = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lv_src.set(new abap.types.Character(1).set('['));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique29 = abap.IntegerFactory.get(10).get();
    for (let unique30 = 0; unique30 < unique29; unique30++) {
      abap.builtin.sy.get().index.set(unique30 + 1);
      if (abap.compare.ne(abap.builtin.sy.get().index, abap.IntegerFactory.get(1))) {
        lv_src.set(abap.operators.concat(lv_src,new abap.types.String().set(`, `)));
      }
      lv_src.set(abap.operators.concat(lv_src,new abap.types.String().set(`"${abap.templateFormatting(abap.builtin.sy.get().index)}"`)));
      lv_exp.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.sy.get().index)}`));
      abap.statements.append({source: lv_exp, target: lt_exp});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    lv_src.set(abap.operators.concat(lv_src,new abap.types.Character(1).set(']')));
    li_reader.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: lv_src})));
    await li_reader.get().z2ui5_if_ajson$to_abap({ev_container: lt_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lt_exp});
  }
  async array_index() {
    let lt_act = abap.types.TableFactory.construct(new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lt_exp = abap.types.TableFactory.construct(new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let ls_exp = new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {});
    let lv_src = new abap.types.String({qualifiedName: "STRING"});
    let li_reader = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lv_src.set(new abap.types.Character(1).set('['));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique31 = abap.IntegerFactory.get(10).get();
    for (let unique32 = 0; unique32 < unique31; unique32++) {
      abap.builtin.sy.get().index.set(unique32 + 1);
      if (abap.compare.ne(abap.builtin.sy.get().index, abap.IntegerFactory.get(1))) {
        lv_src.set(abap.operators.concat(lv_src,new abap.types.String().set(`, `)));
      }
      lv_src.set(abap.operators.concat(lv_src,new abap.types.String().set(`\{ "row": ${abap.templateFormatting(abap.builtin.sy.get().index)} \}`)));
      ls_exp.get().row.set(abap.builtin.sy.get().index);
      abap.statements.append({source: ls_exp, target: lt_exp});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    lv_src.set(abap.operators.concat(lv_src,new abap.types.Character(1).set(']')));
    li_reader.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: lv_src})));
    await li_reader.get().z2ui5_if_ajson$to_abap({ev_container: lt_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_act, exp: lt_exp});
  }
  async reader() {
    let lv_source = new abap.types.String({qualifiedName: "STRING"});
    let li_reader = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ls_act = new abap.types.Structure({"string": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-STRING"}), "number": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-NUMBER"}), "float": new abap.types.Float({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-FLOAT"}), "boolean": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "false": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "null": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-NULL"}), "date": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-DATE"}), "issues": abap.types.TableFactory.construct(new abap.types.Structure({"message": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-MESSAGE"}), "key": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-KEY"}), "filename": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-FILENAME"}), "start": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), "end": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {})}, "ltcl_integrated=>ty_issue", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["MESSAGE","KEY"]},"secondary":[]}, "ltcl_integrated=>tt_issues")}, "ltcl_integrated=>ty_target", undefined, {}, {});
    let ls_exp = new abap.types.Structure({"string": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-STRING"}), "number": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-NUMBER"}), "float": new abap.types.Float({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-FLOAT"}), "boolean": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "false": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "null": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-NULL"}), "date": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-DATE"}), "issues": abap.types.TableFactory.construct(new abap.types.Structure({"message": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-MESSAGE"}), "key": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-KEY"}), "filename": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-FILENAME"}), "start": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), "end": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {})}, "ltcl_integrated=>ty_issue", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["MESSAGE","KEY"]},"secondary":[]}, "ltcl_integrated=>tt_issues")}, "ltcl_integrated=>ty_target", undefined, {}, {});
    let fs_i_ = new abap.types.FieldSymbol(new abap.types.Structure({"message": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-MESSAGE"}), "key": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-KEY"}), "filename": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-FILENAME"}), "start": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), "end": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {})}, "ltcl_integrated=>ty_issue", undefined, {}, {}));
    lv_source.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_PARSER_TEST'].sample_json()));
    li_reader.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: lv_source})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_reader.get().z2ui5_if_ajson$get({iv_path: new abap.types.Character(7).set('/string')})), exp: new abap.types.Character(3).set('abc')});
    ls_exp.get().string.set(new abap.types.Character(3).set('abc'));
    ls_exp.get().number.set(abap.IntegerFactory.get(123));
    ls_exp.get().float.set(new abap.types.Character(6).set('123.45'));
    ls_exp.get().boolean.set(abap.builtin.abap_true);
    ls_exp.get().false.set(abap.builtin.abap_false);
    ls_exp.get().date.set(new abap.types.Character(10).set('2020-03-15'));
    fs_i_.assign(ls_exp.get().issues.appendInitial());
    fs_i_.get().message.set(new abap.types.Character(23).set('Indentation problem ...'));
    fs_i_.get().key.set(new abap.types.Character(11).set('indentation'));
    fs_i_.get().filename.set(new abap.types.Character(16).set('./zxxx.prog.abap'));
    fs_i_.get().start.get().row.set(abap.IntegerFactory.get(4));
    fs_i_.get().start.get().col.set(abap.IntegerFactory.get(3));
    fs_i_.get().end.get().row.set(abap.IntegerFactory.get(4));
    fs_i_.get().end.get().col.set(abap.IntegerFactory.get(26));
    fs_i_.assign(ls_exp.get().issues.appendInitial());
    fs_i_.get().message.set(new abap.types.Character(23).set('Remove space before XXX'));
    fs_i_.get().key.set(new abap.types.Character(16).set('space_before_dot'));
    fs_i_.get().filename.set(new abap.types.Character(16).set('./zxxx.prog.abap'));
    fs_i_.get().start.get().row.set(abap.IntegerFactory.get(3));
    fs_i_.get().start.get().col.set(abap.IntegerFactory.get(21));
    fs_i_.get().end.get().row.set(abap.IntegerFactory.get(3));
    fs_i_.get().end.get().col.set(abap.IntegerFactory.get(22));
    await li_reader.get().z2ui5_if_ajson$to_abap({ev_container: ls_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_act, exp: ls_exp});
  }
  async stringify() {
    let lo_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_writer = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let ls_dummy = new abap.types.Structure({"x": new abap.types.Integer({qualifiedName: "I"})}, undefined, undefined, {}, {});
    let ls_data = new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "cls": new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"})}, undefined, undefined, {}, {});
    ls_dummy.get().x.set(abap.IntegerFactory.get(1));
    lo_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_writer.set(lo_cut);
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(1)});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/b'), iv_val: new abap.types.Character(1).set('B')});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/c'), iv_val: abap.builtin.abap_true});
    await li_writer.get().z2ui5_if_ajson$set_null({iv_path: new abap.types.Character(2).set('/d')});
    lv_exp.set(new abap.types.Character(33).set('{"a":1,"b":"B","c":true,"d":null}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$stringify()), exp: lv_exp});
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/e')});
    await li_writer.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(2).set('/f')});
    await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/f'), iv_val: abap.IntegerFactory.get(5)});
    await li_writer.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(2).set('/f'), iv_val: ls_dummy});
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/g'), iv_val: ls_dummy});
    lv_exp.set(new abap.types.Character(68).set('{"a":1,"b":"B","c":true,"d":null,"e":[],"f":[5,{"x":1}],"g":{"x":1}}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$stringify()), exp: lv_exp});
    lv_exp.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(11).set('  "a": 1,\\n'),abap.operators.concat(new abap.types.Character(13).set('  "b": "B",\\n'),abap.operators.concat(new abap.types.Character(14).set('  "c": true,\\n'),abap.operators.concat(new abap.types.Character(14).set('  "d": null,\\n'),abap.operators.concat(new abap.types.Character(12).set('  "e": [],\\n'),abap.operators.concat(new abap.types.Character(10).set('  "f": [\\n'),abap.operators.concat(new abap.types.Character(8).set('    5,\\n'),abap.operators.concat(new abap.types.Character(7).set('    {\\n'),abap.operators.concat(new abap.types.Character(14).set('      "x": 1\\n'),abap.operators.concat(new abap.types.Character(7).set('    }\\n'),abap.operators.concat(new abap.types.Character(6).set('  ],\\n'),abap.operators.concat(new abap.types.Character(10).set('  "g": {\\n'),abap.operators.concat(new abap.types.Character(12).set('    "x": 1\\n'),abap.operators.concat(new abap.types.Character(5).set('  }\\n'),new abap.types.Character(1).set('}')))))))))))))))));
    lv_exp.set(abap.builtin.replace({val: lv_exp, sub: new abap.types.Character(2).set('\\n'), with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, occ: abap.IntegerFactory.get(0)}));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$stringify({iv_indent: abap.IntegerFactory.get(2)})), exp: lv_exp});
    ls_data.get().str.set(new abap.types.Character(4).set('test'));
    li_writer.set(lo_cut);
    await li_writer.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_data});
    lv_exp.set(new abap.types.Character(25).set('{"cls":null,"str":"test"}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_cut.get().z2ui5_if_ajson$stringify()), exp: lv_exp});
  }
  async item_order_integrated() {
    let ls_dummy = new abap.types.Structure({"zulu": new abap.types.String({qualifiedName: "STRING"}), "alpha": new abap.types.String({qualifiedName: "STRING"}), "beta": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    ls_dummy.get().alpha.set(new abap.types.Character(1).set('a'));
    ls_dummy.get().beta.set(new abap.types.Character(1).set('b'));
    ls_dummy.get().zulu.set(new abap.types.Character(1).set('z'));
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy});
    lv_act.set((await li_cut.get().z2ui5_if_ajson$stringify()));
    lv_exp.set(new abap.types.Character(35).set('{"alpha":"a","beta":"b","zulu":"z"}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_cut.get().z2ui5_if_ajson$keep_item_order();
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy});
    lv_act.set((await li_cut.get().z2ui5_if_ajson$stringify()));
    lv_exp.set(new abap.types.Character(35).set('{"zulu":"z","alpha":"a","beta":"b"}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async chaining() {
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_bound({act: (await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(1)}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_bound({act: (await li_cut.get().z2ui5_if_ajson$delete_({iv_path: new abap.types.Character(2).set('/a')}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_bound({act: (await li_cut.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(6).set('/array')}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_bound({act: (await li_cut.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(6).set('/array'), iv_val: new abap.types.Character(1).set('1')}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_bound({act: (await li_cut.get().z2ui5_if_ajson$keep_item_order())});
  }
  async push_json() {
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_sub = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    li_sub.set((await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('a'), iv_val: new abap.types.Character(1).set('1')})));
    await li_cut.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(5).set('/list')});
    await li_cut.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(5).set('/list'), iv_val: new abap.types.Character(5).set('hello')});
    await li_cut.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(5).set('/list'), iv_val: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('a'), iv_val: new abap.types.Character(1).set('1')}))});
    await li_cut.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(5).set('/list'), iv_val: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()).get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: new abap.types.Character(5).set('world')}))});
    lv_act.set((await li_cut.get().z2ui5_if_ajson$stringify()));
    lv_exp.set(new abap.types.Character(36).set('{"list":["hello",{"a":"1"},"world"]}'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_act, exp: lv_exp});
  }
  async is_empty() {
    let li_cut = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_cut.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.builtin.abap_true, act: (await li_cut.get().z2ui5_if_ajson$is_empty())});
    await li_cut.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/x'), iv_val: new abap.types.Character(3).set('123')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.builtin.abap_false, act: (await li_cut.get().z2ui5_if_ajson$is_empty())});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_INTEGRATED'] = ltcl_integrated;
ltcl_integrated.ty_loc = new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {});
ltcl_integrated.ty_issue = new abap.types.Structure({"message": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-MESSAGE"}), "key": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-KEY"}), "filename": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-FILENAME"}), "start": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), "end": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {})}, "ltcl_integrated=>ty_issue", undefined, {}, {});
ltcl_integrated.tt_issues = abap.types.TableFactory.construct(new abap.types.Structure({"message": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-MESSAGE"}), "key": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-KEY"}), "filename": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-FILENAME"}), "start": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), "end": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {})}, "ltcl_integrated=>ty_issue", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["MESSAGE","KEY"]},"secondary":[]}, "ltcl_integrated=>tt_issues");
ltcl_integrated.ty_target = new abap.types.Structure({"string": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-STRING"}), "number": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-NUMBER"}), "float": new abap.types.Float({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-FLOAT"}), "boolean": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "false": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "null": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-NULL"}), "date": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_TARGET-DATE"}), "issues": abap.types.TableFactory.construct(new abap.types.Structure({"message": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-MESSAGE"}), "key": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-KEY"}), "filename": new abap.types.String({qualifiedName: "LTCL_INTEGRATED=>TY_ISSUE-FILENAME"}), "start": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {}), "end": new abap.types.Structure({"row": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-ROW"}), "col": new abap.types.Integer({qualifiedName: "LTCL_INTEGRATED=>TY_LOC-COL"})}, "ltcl_integrated=>ty_loc", undefined, {}, {})}, "ltcl_integrated=>ty_issue", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["MESSAGE","KEY"]},"secondary":[]}, "ltcl_integrated=>tt_issues")}, "ltcl_integrated=>ty_target", undefined, {}, {});

class ltcl_abap_to_json {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_ABAP_TO_JSON';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"SET_AJSON": {"visibility": "I", "parameters": {}},
  "SET_VALUE_NUMBER": {"visibility": "I", "parameters": {}},
  "SET_VALUE_STRING": {"visibility": "I", "parameters": {}},
  "SET_VALUE_TRUE": {"visibility": "I", "parameters": {}},
  "SET_VALUE_FALSE": {"visibility": "I", "parameters": {}},
  "SET_VALUE_XSDBOOLEAN": {"visibility": "I", "parameters": {}},
  "SET_VALUE_TIMESTAMP": {"visibility": "I", "parameters": {}},
  "SET_VALUE_TIMESTAMP_INITIAL": {"visibility": "I", "parameters": {}},
  "SET_NULL": {"visibility": "I", "parameters": {}},
  "SET_OBJ": {"visibility": "I", "parameters": {}},
  "SET_ARRAY": {"visibility": "I", "parameters": {}},
  "SET_COMPLEX_OBJ": {"visibility": "I", "parameters": {}},
  "SET_INCLUDE_WITH_SUFFIX": {"visibility": "I", "parameters": {}},
  "PREFIX": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async set_ajson() {
    let lo_nodes = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lo_src = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    lo_src.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    lo_nodes.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('        |      |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/       |a     |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/a/     |b     |object |     ||1')});
    await lo_nodes.get().add({iv_str: new abap.types.Character(32).set('/a/b/   |c     |object |     ||0')});
    lo_src.get().z2ui5_if_ajson$mt_json_tree.set(lo_nodes.get().mt_nodes);
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: lo_src})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes.get().mt_nodes});
  }
  async set_value_number() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(29).set('        |      |num |1     ||')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: abap.IntegerFactory.get(1)})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_value_string() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('        |      |str |abc     ||')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: new abap.types.Character(3).set('abc')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_value_true() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |bool |true     ||')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: abap.builtin.abap_true})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_value_false() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |bool |false    ||')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: abap.builtin.abap_false})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_value_xsdboolean() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lv_xsdboolean = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(33).set('        |      |bool |true     ||')});
    lv_xsdboolean.set(new abap.types.Character(1).set('X'));
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: lv_xsdboolean})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_null() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lv_null_ref = new abap.types.DataReference(new abap.types.Character(4));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(28).set('       |      |null |null ||')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: lv_null_ref})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_value_timestamp() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lv_timezone = new abap.types.Character(6, {"qualifiedName":"TIMEZONE","ddicName":"TIMEZONE"});
    lv_timezone.set('');
    let lv_timestamp = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(43).set('        |      |str |2022-08-31T00:00:00Z||')});
    abap.statements.convert({date: new abap.types.Character(8).set('20220831'),time: new abap.types.Character(6).set('000000'),zone: lv_timezone}, {stamp: lv_timestamp});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].format_timestamp({iv_ts: lv_timestamp}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_value_timestamp_initial() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lv_timestamp = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(43).set('        |      |str |0000-00-00T00:00:00Z||')});
    lv_timestamp.set(abap.IntegerFactory.get(0));
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].format_timestamp({iv_ts: lv_timestamp}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async prefix() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let ls_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    ls_prefix.get().path.set(new abap.types.Character(3).set('/a/'));
    ls_prefix.get().name.set(new abap.types.Character(1).set('b'));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/a/       |b     |num |1     ||')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: abap.IntegerFactory.get(1), is_prefix: ls_prefix})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_obj() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let ls_struc = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    ls_struc.get().a.set(new abap.types.Character(3).set('abc'));
    ls_struc.get().b.set(abap.IntegerFactory.get(10));
    ls_struc.get().c.set(abap.builtin.abap_true);
    ls_struc.get().d.set(new abap.types.Character(1).set('X'));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('       |      |object |     ||4')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |a     |str    |abc  ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |b     |num    |10   ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |c     |bool   |true ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |d     |bool   |true ||0')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: ls_struc})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_complex_obj() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let ls_struc = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "el": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC_COMPLEX-EL"}), "struc": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_abap_to_json=>tt_struc"), "stab": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "ltcl_abap_to_json=>ty_struc_complex", undefined, {}, {});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let fs_i_ = new abap.types.FieldSymbol(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}));
    ls_struc.get().a.set(new abap.types.Character(3).set('abc'));
    ls_struc.get().b.set(abap.IntegerFactory.get(10));
    ls_struc.get().c.set(abap.builtin.abap_true);
    ls_struc.get().d.set(new abap.types.Character(1).set('X'));
    ls_struc.get().el.set(new abap.types.Character(4).set('elem'));
    ls_struc.get().struc.get().a.set(new abap.types.Character(4).set('deep'));
    ls_struc.get().struc.get().b.set(abap.IntegerFactory.get(123));
    abap.statements.append({source: new abap.types.Character(5).set('hello'), target: ls_struc.get().stab});
    abap.statements.append({source: new abap.types.Character(5).set('world'), target: ls_struc.get().stab});
    fs_i_.assign(ls_struc.get().tab.appendInitial());
    fs_i_.get().a.set(new abap.types.Character(3).set('abc'));
    fs_i_.assign(ls_struc.get().tab.appendInitial());
    fs_i_.get().a.set(new abap.types.Character(3).set('bcd'));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('       |      |object |     ||8')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |a     |str    |abc  ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |b     |num    |10   ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |c     |bool   |true ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |d     |bool   |true ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |el    |str    |elem ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |struc |object |     ||4')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/struc/|a     |str    |deep ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/struc/|b     |num    |123  ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/struc/|c     |bool   |false||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/struc/|d     |bool   |false||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |tab   |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/  |1     |object |     |1|4')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/1/|a     |str    |abc  | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/1/|b     |num    |0    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/1/|c     |bool   |false| |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/1/|d     |bool   |false| |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/  |2     |object |     |2|4')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/2/|a     |str    |bcd  | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/2/|b     |num    |0    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/2/|c     |bool   |false| |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/tab/2/|d     |bool   |false| |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |stab  |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/stab/ |1     |str    |hello|1|0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/stab/ |2     |str    |world|2|0')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: ls_struc})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_include_with_suffix() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let ls_struc = new abap.types.Structure({"a_suf": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b_suf": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c_suf": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d_suf": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "named_with_suffix": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), "el": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_NAMED_INCLUDE-EL"})}, "ltcl_abap_to_json=>ty_named_include", undefined, {"named_with_suffix":"_suf"}, {"named_with_suffix":true});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    ls_struc.get().a_suf.set(new abap.types.Character(3).set('abc'));
    ls_struc.get().b_suf.set(abap.IntegerFactory.get(10));
    ls_struc.get().c_suf.set(abap.builtin.abap_true);
    ls_struc.get().d_suf.set(new abap.types.Character(1).set('X'));
    ls_struc.get().el.set(new abap.types.Character(4).set('elem'));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('       |      |object |     ||5')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |a_suf |str    |abc  ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |b_suf |num    |10   ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |c_suf |bool   |true ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |d_suf |bool   |true ||0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(31).set('/      |el    |str    |elem ||0')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: ls_struc})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
  async set_array() {
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    let lt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let fs_s_ = new abap.types.FieldSymbol(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}));
    let lt_strtab = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    fs_s_.assign(lt_tab.appendInitial());
    fs_s_.get().a.set(new abap.types.Character(3).set('abc'));
    fs_s_.get().b.set(abap.IntegerFactory.get(10));
    fs_s_.assign(lt_tab.appendInitial());
    fs_s_.get().a.set(new abap.types.Character(3).set('bcd'));
    fs_s_.get().b.set(abap.IntegerFactory.get(20));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |1     |object |     |1|4')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/1/    |a     |str    |abc  | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/1/    |b     |num    |10   | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/1/    |c     |bool   |false| |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/1/    |d     |bool   |false| |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |2     |object |     |2|4')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/2/    |a     |str    |bcd  | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/2/    |b     |num    |20   | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/2/    |c     |bool   |false| |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/2/    |d     |bool   |false| |0')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: lt_tab})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
    abap.statements.append({source: new abap.types.Character(3).set('abc'), target: lt_strtab});
    abap.statements.append({source: new abap.types.Character(3).set('bcd'), target: lt_strtab});
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |1     |str    |abc  |1|0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |2     |str    |bcd  |2|0')});
    lt_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({iv_data: lt_strtab})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_nodes, exp: lo_nodes_exp.get().mt_nodes});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_ABAP_TO_JSON'] = ltcl_abap_to_json;
ltcl_abap_to_json.ty_struc = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {});
ltcl_abap_to_json.tt_struc = abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_abap_to_json=>tt_struc");
ltcl_abap_to_json.ty_struc_complex = new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "el": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC_COMPLEX-EL"}), "struc": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), "tab": abap.types.TableFactory.construct(new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["A"]},"secondary":[]}, "ltcl_abap_to_json=>tt_struc"), "stab": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "ltcl_abap_to_json=>ty_struc_complex", undefined, {}, {});
ltcl_abap_to_json.ty_named_include = new abap.types.Structure({"a_suf": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b_suf": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c_suf": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d_suf": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "named_with_suffix": new abap.types.Structure({"a": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-A"}), "b": new abap.types.Integer({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_STRUC-B"}), "c": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "d": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"})}, "ltcl_abap_to_json=>ty_struc", undefined, {}, {}), "el": new abap.types.String({qualifiedName: "LTCL_ABAP_TO_JSON=>TY_NAMED_INCLUDE-EL"})}, "ltcl_abap_to_json=>ty_named_include", undefined, {"named_with_suffix":"_suf"}, {"named_with_suffix":true});
class ltcl_filter_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_FILTER_TEST';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_FILTER"];
  static ATTRIBUTES = {"MT_VISIT_HISTORY": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "LTCL_FILTER_TEST=>TY_VISIT_HISTORY-PATH"}), "type": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, "ltcl_filter_test=>ty_visit_history", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_AJSON_FILTER~VISIT_TYPE": {"type": () => {return new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SIMPLE_TEST": {"visibility": "I", "parameters": {}},
  "ARRAY_TEST": {"visibility": "I", "parameters": {}},
  "VISIT_TYPES": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_visit_history = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "LTCL_FILTER_TEST=>TY_VISIT_HISTORY-PATH"}), "type": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, "ltcl_filter_test=>ty_visit_history", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.z2ui5_if_ajson_filter$visit_type = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async z2ui5_if_ajson_filter$keep_node(INPUT) {
    let rv_keep = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let iv_visit = new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"});
    if (INPUT && INPUT.iv_visit) {iv_visit.set(INPUT.iv_visit);}
    if (INPUT === undefined || INPUT.iv_visit === undefined) {iv_visit = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value;}
    let ls_visit_history = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "LTCL_FILTER_TEST=>TY_VISIT_HISTORY-PATH"}), "type": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, "ltcl_filter_test=>ty_visit_history", undefined, {}, {});
    if (abap.compare.gt(iv_visit, abap.IntegerFactory.get(0))) {
      ls_visit_history.get().type.set(iv_visit);
      ls_visit_history.get().path.set(abap.operators.concat(is_node.get().path,abap.operators.concat(is_node.get().name,new abap.types.Character(1).set('/'))));
      abap.statements.append({source: ls_visit_history, target: this.mt_visit_history});
    }
    rv_keep.set(abap.builtin.boolc(!abap.compare.ca(is_node.get().name, new abap.types.Character(2).set('xX')) && !abap.compare.ca(is_node.get().value, new abap.types.Character(2).set('xX'))));
    return rv_keep;
  }
  async simple_test() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: abap.IntegerFactory.get(1)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/b'), iv_val: abap.IntegerFactory.get(1)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/x'), iv_val: abap.IntegerFactory.get(1)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/c/x'), iv_val: abap.IntegerFactory.get(1)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/c/y'), iv_val: abap.IntegerFactory.get(1)});
    lo_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_filter: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |object |     | |3')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |a     |num    |1    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |b     |num    |1    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |c     |object |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/c/    |y     |num    |1    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_json_filtered.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async array_test() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await lo_json.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(1).set('/')});
    await lo_json.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(1).set('/'), iv_val: new abap.types.Character(1).set('a')});
    await lo_json.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(1).set('/'), iv_val: new abap.types.Character(1).set('x')});
    await lo_json.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(1).set('/'), iv_val: new abap.types.Character(1).set('b')});
    lo_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_filter: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |1     |str    |a    |1|0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |2     |str    |b    |2|0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_json_filtered.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async visit_types() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lt_visits_exp = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "LTCL_FILTER_TEST=>TY_VISIT_HISTORY-PATH"}), "type": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, "ltcl_filter_test=>ty_visit_history", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let fs_v_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "LTCL_FILTER_TEST=>TY_VISIT_HISTORY-PATH"}), "type": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, "ltcl_filter_test=>ty_visit_history", undefined, {}, {}));
    let ls_dummy = new abap.types.Structure({"d": new abap.types.Integer({qualifiedName: "I"}), "e": new abap.types.Integer({qualifiedName: "I"})}, undefined, undefined, {}, {});
    ls_dummy.get().d.set(10);
    ls_dummy.get().e.set(20);
    abap.statements.clear(this.mt_visit_history);
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await lo_json.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(1).set('/')});
    await lo_json.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(1).set('/'), iv_val: new abap.types.Character(1).set('a')});
    await lo_json.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(1).set('/'), iv_val: new abap.types.Character(1).set('b')});
    await lo_json.get().z2ui5_if_ajson$push({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_dummy});
    lo_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_filter: this.me})));
    fs_v_.assign(lt_visits_exp.appendInitial());
    fs_v_.get().path.set(new abap.types.Character(1).set('/'));
    fs_v_.get().type.set(abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().open);
    fs_v_.assign(lt_visits_exp.appendInitial());
    fs_v_.get().path.set(new abap.types.Character(3).set('/3/'));
    fs_v_.get().type.set(abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().open);
    fs_v_.assign(lt_visits_exp.appendInitial());
    fs_v_.get().path.set(new abap.types.Character(3).set('/3/'));
    fs_v_.get().type.set(abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().close);
    fs_v_.assign(lt_visits_exp.appendInitial());
    fs_v_.get().path.set(new abap.types.Character(1).set('/'));
    fs_v_.get().type.set(abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().close);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: this.mt_visit_history, exp: lt_visits_exp});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_FILTER_TEST'] = ltcl_filter_test;
ltcl_filter_test.z2ui5_if_ajson_filter$visit_type = new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});
ltcl_filter_test.z2ui5_if_ajson_filter$visit_type.get().value.set(0);
ltcl_filter_test.z2ui5_if_ajson_filter$visit_type.get().open.set(1);
ltcl_filter_test.z2ui5_if_ajson_filter$visit_type.get().close.set(2);
ltcl_filter_test.ty_visit_history = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "LTCL_FILTER_TEST=>TY_VISIT_HISTORY-PATH"}), "type": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, "ltcl_filter_test=>ty_visit_history", undefined, {}, {});
class ltcl_mapper_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_MAPPER_TEST';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {};
  static METHODS = {"SIMPLE_TEST": {"visibility": "I", "parameters": {}},
  "ARRAY_TEST": {"visibility": "I", "parameters": {}},
  "DUPLICATION_TEST": {"visibility": "I", "parameters": {}},
  "EMPTY_NAME_TEST": {"visibility": "I", "parameters": {}},
  "TRIVIAL": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
    if (abap.compare.eq(cv_name.getOffset({offset: 0, length: 1}), new abap.types.Character(1).set('a'))) {
      cv_name.set(abap.builtin.to_upper({val: cv_name}));
    }
    if (abap.compare.eq(cv_name, new abap.types.Character(14).set('set_this_empty'))) {
      abap.statements.clear(cv_name);
    }
    if (abap.compare.ne(is_node.get().index, abap.IntegerFactory.get(0))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('rename must not be called for direct array items')});
    }
  }
  async z2ui5_if_ajson_mapping$to_abap(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    return rv_result;
  }
  async z2ui5_if_ajson_mapping$to_json(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    return rv_result;
  }
  async simple_test() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(1)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/bc'), iv_val: abap.IntegerFactory.get(2)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/c/ax'), iv_val: abap.IntegerFactory.get(3)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/c/by'), iv_val: abap.IntegerFactory.get(4)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/a/ax'), iv_val: abap.IntegerFactory.get(5)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/a/by'), iv_val: abap.IntegerFactory.get(6)});
    lo_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_mapper: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |object |     | |4')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |AB    |num    |1    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |bc    |num    |2    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |c     |object |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/c/    |AX    |num    |3    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/c/    |by    |num    |4    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |A     |object |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/A/    |AX    |num    |5    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/A/    |by    |num    |6    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_json_filtered.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async array_test() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await lo_json.get().z2ui5_if_ajson$touch_array({iv_path: new abap.types.Character(1).set('/')});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/1/ab'), iv_val: abap.IntegerFactory.get(1)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/1/bc'), iv_val: abap.IntegerFactory.get(2)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/2/ax'), iv_val: abap.IntegerFactory.get(3)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(5).set('/2/by'), iv_val: abap.IntegerFactory.get(4)});
    lo_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_mapper: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |array  |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |1     |object |     |1|2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |2     |object |     |2|2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/1/    |AB    |num    |1    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/1/    |bc    |num    |2    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/2/    |AX    |num    |3    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/2/    |by    |num    |4    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_json_filtered.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async duplication_test() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lx_err = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(1)});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/AB'), iv_val: abap.IntegerFactory.get(2)});
    try {
      await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_mapper: this.me});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx_err.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_char_cp({act: (await lx_err.get().if_message$get_text()), exp: new abap.types.Character(33).set('Renamed node has a duplicate @/AB')});
      } else {
        throw e;
      }
    }
  }
  async trivial() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    lo_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_mapper: this.me})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_initial({act: lo_json_filtered.get().z2ui5_if_ajson$mt_json_tree});
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: abap.IntegerFactory.get(1)});
    lo_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_mapper: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |num    |1    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_json_filtered.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async empty_name_test() {
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let lx_err = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    lo_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(15).set('/set_this_empty'), iv_val: abap.IntegerFactory.get(1)});
    try {
      await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: lo_json, ii_mapper: this.me});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx_err.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_char_cp({act: (await lx_err.get().if_message$get_text()), exp: new abap.types.Character(50).set('Renamed node name cannot be empty @/set_this_empty')});
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_MAPPER_TEST'] = ltcl_mapper_test;
class ltcl_cloning_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LTCL_CLONING_TEST';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","Z2UI5_IF_AJSON_FILTER","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"Z2UI5_IF_AJSON_FILTER~VISIT_TYPE": {"type": () => {return new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CLONE_TEST": {"visibility": "I", "parameters": {}},
  "FILTER_TEST": {"visibility": "I", "parameters": {}},
  "MAPPER_TEST": {"visibility": "I", "parameters": {}},
  "MAPPER_AND_FILTER": {"visibility": "I", "parameters": {}},
  "OPTS_COPYING": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.z2ui5_if_ajson_filter$visit_type = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async clone_test() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_new = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(1)});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/xy'), iv_val: abap.IntegerFactory.get(2)});
    li_json_new.set((await li_json.get().z2ui5_if_ajson$clone()));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |object |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |ab    |num    |1    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |xy    |num    |2    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_json.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_json_new.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(5)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json.get().z2ui5_if_ajson$get_integer({iv_path: new abap.types.Character(3).set('/ab')})), exp: abap.IntegerFactory.get(5)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_new.get().z2ui5_if_ajson$get_integer({iv_path: new abap.types.Character(3).set('/ab')})), exp: abap.IntegerFactory.get(1)});
  }
  async filter_test() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_new = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(1)});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/xy'), iv_val: abap.IntegerFactory.get(2)});
    li_json_new.set((await li_json.get().z2ui5_if_ajson$filter({ii_filter: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |object |     | |1')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |ab    |num    |1    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_json_new.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async mapper_test() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_new = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(1)});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/xy'), iv_val: abap.IntegerFactory.get(2)});
    li_json_new.set((await li_json.get().z2ui5_if_ajson$map({ii_mapper: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |object |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |AB    |num    |1    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |xy    |num    |2    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_json_new.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
    if (abap.compare.eq(cv_name.getOffset({offset: 0, length: 1}), new abap.types.Character(1).set('a'))) {
      cv_name.set(abap.builtin.to_upper({val: cv_name}));
    }
  }
  async z2ui5_if_ajson_mapping$to_abap(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    return rv_result;
  }
  async z2ui5_if_ajson_mapping$to_json(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    return rv_result;
  }
  async z2ui5_if_ajson_filter$keep_node(INPUT) {
    let rv_keep = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let iv_visit = new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"});
    if (INPUT && INPUT.iv_visit) {iv_visit.set(INPUT.iv_visit);}
    if (INPUT === undefined || INPUT.iv_visit === undefined) {iv_visit = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value;}
    rv_keep.set(abap.builtin.boolc(abap.compare.initial(is_node.get().name) || abap.compare.ne(is_node.get().name.getOffset({offset: 0, length: 1}), new abap.types.Character(1).set('x'))));
    return rv_keep;
  }
  async mapper_and_filter() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_new = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_nodes_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_NODES_HELPER"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].new()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(1)});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/bc'), iv_val: abap.IntegerFactory.get(2)});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/xy'), iv_val: abap.IntegerFactory.get(3)});
    li_json_new.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: this.me, ii_mapper: this.me})));
    lo_nodes_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_NODES_HELPER']()).constructor_());
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('       |      |object |     | |2')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |AB    |num    |1    | |0')});
    await lo_nodes_exp.get().add({iv_str: new abap.types.Character(32).set('/      |bc    |num    |2    | |0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: li_json_new.get().z2ui5_if_ajson$mt_json_tree, exp: (await lo_nodes_exp.get().sorted())});
  }
  async opts_copying() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_new = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_json.set((await (await abap.Classes['Z2UI5_CL_AJSON'].new()).get().z2ui5_if_ajson$keep_item_order()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(3).set('/ab'), iv_val: abap.IntegerFactory.get(1)});
    li_json_new.set((await li_json.get().z2ui5_if_ajson$clone()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ((await li_json_new.get().z2ui5_if_ajson$opts())).get().keep_item_order, exp: abap.builtin.abap_true});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LTCL_CLONING_TEST'] = ltcl_cloning_test;
ltcl_cloning_test.z2ui5_if_ajson_filter$visit_type = new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});
ltcl_cloning_test.z2ui5_if_ajson_filter$visit_type.get().value.set(0);
ltcl_cloning_test.z2ui5_if_ajson_filter$visit_type.get().open.set(1);
ltcl_cloning_test.z2ui5_if_ajson_filter$visit_type.get().close.set(2);
export {lcl_nodes_helper, ltcl_parser_test, ltcl_serializer_test, ltcl_utils_test, ltcl_reader_test, ltcl_json_to_abap, ltcl_writer_test, ltcl_integrated, ltcl_abap_to_json, ltcl_filter_test, ltcl_mapper_test, ltcl_cloning_test};
//# sourceMappingURL=z2ui5_cl_ajson.clas.testclasses.mjs.map