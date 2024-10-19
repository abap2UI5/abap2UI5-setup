const {z2ui5_cl_ajson_utilities} = await import("./z2ui5_cl_ajson_utilities.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_utilities.clas.testclasses.abap
class lcl_nodes_helper {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"ADD": {"visibility": "U", "parameters": {"IV_STR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
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
    fs_n_.assign(this.mt_nodes.appendInitial());
    abap.statements.split({source: iv_str, at: new abap.types.Character(1).set('|'), targets: [fs_n_.get().path,fs_n_.get().name,fs_n_.get().type,fs_n_.get().value,lv_index,lv_children]});
    abap.statements.condense(fs_n_.get().path, {nogaps: false});
    abap.statements.condense(fs_n_.get().name, {nogaps: false});
    abap.statements.condense(fs_n_.get().type, {nogaps: false});
    abap.statements.condense(fs_n_.get().value, {nogaps: false});
    fs_n_.get().index.set(lv_index);
    fs_n_.get().children.set(lv_children);
  }
  async sorted() {
    let rt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
    rt_nodes.set(this.mt_nodes);
    return rt_nodes;
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER'] = lcl_nodes_helper;
class ltcl_parser_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_UTILITIES-LTCL_PARSER_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"SAMPLE_JSON": {"visibility": "U", "parameters": {"RV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_SEPARATOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
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
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LTCL_PARSER_TEST'] = ltcl_parser_test;
class ltcl_json_utils {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_UTILITIES-LTCL_JSON_UTILS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"JSON_DIFF": {"visibility": "I", "parameters": {}},
  "JSON_DIFF_TYPES": {"visibility": "I", "parameters": {}},
  "JSON_DIFF_ARRAYS": {"visibility": "I", "parameters": {}},
  "JSON_MERGE": {"visibility": "I", "parameters": {}},
  "JSON_SORT": {"visibility": "I", "parameters": {}},
  "IS_EQUAL": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async json_diff() {
    let lv_json = new abap.types.String({qualifiedName: "STRING"});
    let lo_util = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON_UTILITIES", RTTIName: "\\CLASS=Z2UI5_CL_AJSON_UTILITIES"});
    let lo_insert = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_delete = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_change = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_insert_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON_UTILITIES\\CLASS=LCL_NODES_HELPER"});
    let lo_delete_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON_UTILITIES\\CLASS=LCL_NODES_HELPER"});
    let lo_change_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON_UTILITIES\\CLASS=LCL_NODES_HELPER"});
    lv_json.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(20).set('  "string": "abc",\\n'),abap.operators.concat(new abap.types.Character(18).set('  "number": 789,\\n'),abap.operators.concat(new abap.types.Character(20).set('  "float": 123.45,\\n'),abap.operators.concat(new abap.types.Character(22).set('  "boolean": "true",\\n'),abap.operators.concat(new abap.types.Character(17).set('  "true": true,\\n'),abap.operators.concat(new abap.types.Character(17).set('  "null": null,\\n'),abap.operators.concat(new abap.types.Character(25).set('  "date": "2020-03-15",\\n'),abap.operators.concat(new abap.types.Character(15).set('  "issues": [\\n'),abap.operators.concat(new abap.types.Character(7).set('    {\\n'),abap.operators.concat(new abap.types.Character(45).set('      "message": "Indentation problem ...",\\n'),abap.operators.concat(new abap.types.Character(29).set('      "key": "indentation",\\n'),abap.operators.concat(new abap.types.Character(18).set('      "start": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "row": 5,\\n'),abap.operators.concat(new abap.types.Character(18).set('        "col": 3\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(16).set('      "end": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "new": 1,\\n'),abap.operators.concat(new abap.types.Character(19).set('        "col": 26\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(38).set('      "filename": "./zxxx.prog.abap"\\n'),abap.operators.concat(new abap.types.Character(8).set('    },\\n'),abap.operators.concat(new abap.types.Character(7).set('    {\\n'),abap.operators.concat(new abap.types.Character(45).set('      "message": "Remove space before XXX",\\n'),abap.operators.concat(new abap.types.Character(34).set('      "key": "space_before_dot",\\n'),abap.operators.concat(new abap.types.Character(18).set('      "start": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "row": 3,\\n'),abap.operators.concat(new abap.types.Character(19).set('        "col": 21\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(16).set('      "end": {\\n'),abap.operators.concat(new abap.types.Character(19).set('        "row": 3,\\n'),abap.operators.concat(new abap.types.Character(19).set('        "col": 22\\n'),abap.operators.concat(new abap.types.Character(10).set('      },\\n'),abap.operators.concat(new abap.types.Character(38).set('      "filename": "./zxxx.prog.abap"\\n'),abap.operators.concat(new abap.types.Character(7).set('    }\\n'),abap.operators.concat(new abap.types.Character(5).set('  ]\\n'),new abap.types.Character(1).set('}'))))))))))))))))))))))))))))))))))))));
    abap.statements.replace({target: lv_json, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    lo_insert_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER']()).constructor_());
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('                |        |object |        |0|3')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/               |boolean |str    |true    |0|0')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/               |issues  |array  |        |0|1')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/               |true    |bool   |true    |0|0')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/        |1       |object |        |1|1')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/1/      |end     |object |        |0|1')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/1/end/  |new     |num    |1       |0|0')});
    lo_delete_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER']()).constructor_());
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('                |        |object |        |0|3')});
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('/               |boolean |bool   |true    |0|0')});
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('/               |false   |bool   |false   |0|0')});
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('/               |issues  |array  |        |0|1')});
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/        |1       |object |        |1|1')});
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/1/      |end     |object |        |0|1')});
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/1/end/  |row     |num    |4       |0|0')});
    lo_change_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER']()).constructor_());
    await lo_change_exp.get().add({iv_str: new abap.types.Character(46).set('                |        |object |        |0|2')});
    await lo_change_exp.get().add({iv_str: new abap.types.Character(46).set('/               |issues  |array  |        |0|1')});
    await lo_change_exp.get().add({iv_str: new abap.types.Character(46).set('/               |number  |num    |789     |0|0')});
    await lo_change_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/        |1       |object |        |1|1')});
    await lo_change_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/1/      |start   |object |        |0|1')});
    await lo_change_exp.get().add({iv_str: new abap.types.Character(46).set('/issues/1/start/|row     |num    |5       |0|0')});
    lo_util.set(await (new abap.Classes['Z2UI5_CL_AJSON_UTILITIES']()).constructor_());
    await lo_util.get().diff({iv_json_a: (await abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LTCL_PARSER_TEST'].sample_json()), iv_json_b: lv_json, eo_insert: lo_insert, eo_delete: lo_delete, eo_change: lo_change});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_insert.get().z2ui5_if_ajson$mt_json_tree, exp: lo_insert_exp.get().mt_nodes});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_delete.get().z2ui5_if_ajson$mt_json_tree, exp: lo_delete_exp.get().mt_nodes});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_change.get().z2ui5_if_ajson$mt_json_tree, exp: lo_change_exp.get().mt_nodes});
  }
  async json_diff_types() {
    let lv_json_a = new abap.types.String({qualifiedName: "STRING"});
    let lv_json_b = new abap.types.String({qualifiedName: "STRING"});
    let lo_util = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON_UTILITIES", RTTIName: "\\CLASS=Z2UI5_CL_AJSON_UTILITIES"});
    let lo_insert = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_delete = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_change = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_insert_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON_UTILITIES\\CLASS=LCL_NODES_HELPER"});
    let lo_delete_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON_UTILITIES\\CLASS=LCL_NODES_HELPER"});
    lv_json_a.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(20).set('  "string": "abc",\\n'),abap.operators.concat(new abap.types.Character(17).set('  "number": 123\\n'),new abap.types.Character(1).set('}')))));
    lv_json_b.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(15).set('  "string": [\\n'),abap.operators.concat(new abap.types.Character(10).set('    "a",\\n'),abap.operators.concat(new abap.types.Character(10).set('    "b",\\n'),abap.operators.concat(new abap.types.Character(9).set('    "c"\\n'),abap.operators.concat(new abap.types.Character(6).set('  ],\\n'),abap.operators.concat(new abap.types.Character(17).set('  "number": 123\\n'),new abap.types.Character(1).set('}')))))))));
    abap.statements.replace({target: lv_json_a, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    abap.statements.replace({target: lv_json_b, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    lo_insert_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER']()).constructor_());
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('                |        |object |        |0|1')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/               |string  |array  |        |0|3')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/string/        |1       |str    |a       |1|0')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/string/        |2       |str    |b       |2|0')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/string/        |3       |str    |c       |3|0')});
    lo_delete_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER']()).constructor_());
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('                |        |object |        |0|1')});
    await lo_delete_exp.get().add({iv_str: new abap.types.Character(46).set('/               |string  |str    |abc     |0|0')});
    lo_util.set(await (new abap.Classes['Z2UI5_CL_AJSON_UTILITIES']()).constructor_());
    await lo_util.get().diff({iv_json_a: lv_json_a, iv_json_b: lv_json_b, eo_insert: lo_insert, eo_delete: lo_delete, eo_change: lo_change});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_insert.get().z2ui5_if_ajson$mt_json_tree, exp: lo_insert_exp.get().mt_nodes});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_delete.get().z2ui5_if_ajson$mt_json_tree, exp: lo_delete_exp.get().mt_nodes});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lo_change.get().z2ui5_if_ajson$mt_json_tree}), exp: abap.IntegerFactory.get(0)});
    await lo_util.get().diff({iv_json_a: lv_json_b, iv_json_b: lv_json_a, eo_insert: lo_insert, eo_delete: lo_delete, eo_change: lo_change});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_insert.get().z2ui5_if_ajson$mt_json_tree, exp: lo_delete_exp.get().mt_nodes});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_delete.get().z2ui5_if_ajson$mt_json_tree, exp: lo_insert_exp.get().mt_nodes});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lo_change.get().z2ui5_if_ajson$mt_json_tree}), exp: abap.IntegerFactory.get(0)});
  }
  async json_diff_arrays() {
    let lv_json_a = new abap.types.String({qualifiedName: "STRING"});
    let lv_json_b = new abap.types.String({qualifiedName: "STRING"});
    let lo_util = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON_UTILITIES", RTTIName: "\\CLASS=Z2UI5_CL_AJSON_UTILITIES"});
    let lo_insert = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_delete = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_change = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_insert_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON_UTILITIES\\CLASS=LCL_NODES_HELPER"});
    lv_json_a.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(17).set('  "number": 123\\n'),new abap.types.Character(1).set('}'))));
    lv_json_b.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(16).set('  "names": [],\\n'),abap.operators.concat(new abap.types.Character(17).set('  "number": 123\\n'),new abap.types.Character(1).set('}')))));
    abap.statements.replace({target: lv_json_a, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    abap.statements.replace({target: lv_json_b, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    lo_util.set(await (new abap.Classes['Z2UI5_CL_AJSON_UTILITIES']()).constructor_());
    await lo_util.get().diff({iv_json_a: lv_json_a, iv_json_b: lv_json_b, eo_insert: lo_insert, eo_delete: lo_delete, eo_change: lo_change});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lo_insert.get().z2ui5_if_ajson$mt_json_tree}), exp: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lo_delete.get().z2ui5_if_ajson$mt_json_tree}), exp: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lo_change.get().z2ui5_if_ajson$mt_json_tree}), exp: abap.IntegerFactory.get(0)});
    await lo_util.get().diff({iv_json_a: lv_json_a, iv_json_b: lv_json_b, iv_keep_empty_arrays: abap.builtin.abap_true, eo_insert: lo_insert, eo_delete: lo_delete, eo_change: lo_change});
    lo_insert_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER']()).constructor_());
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('                |        |object |        |0|1')});
    await lo_insert_exp.get().add({iv_str: new abap.types.Character(46).set('/               |names   |array  |        |0|0')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_insert.get().z2ui5_if_ajson$mt_json_tree, exp: lo_insert_exp.get().mt_nodes});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lo_delete.get().z2ui5_if_ajson$mt_json_tree}), exp: abap.IntegerFactory.get(0)});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.lines({val: lo_change.get().z2ui5_if_ajson$mt_json_tree}), exp: abap.IntegerFactory.get(0)});
  }
  async json_merge() {
    let lv_json_a = new abap.types.String({qualifiedName: "STRING"});
    let lv_json_b = new abap.types.String({qualifiedName: "STRING"});
    let lo_util = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON_UTILITIES", RTTIName: "\\CLASS=Z2UI5_CL_AJSON_UTILITIES"});
    let lo_merge = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_merge_exp = new abap.types.ABAPObject({qualifiedName: "LCL_NODES_HELPER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON_UTILITIES\\CLASS=LCL_NODES_HELPER"});
    lv_json_a.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(15).set('  "string": [\\n'),abap.operators.concat(new abap.types.Character(10).set('    "a",\\n'),abap.operators.concat(new abap.types.Character(9).set('    "c"\\n'),abap.operators.concat(new abap.types.Character(6).set('  ],\\n'),abap.operators.concat(new abap.types.Character(17).set('  "number": 123\\n'),new abap.types.Character(1).set('}'))))))));
    lv_json_b.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(15).set('  "string": [\\n'),abap.operators.concat(new abap.types.Character(10).set('    "a",\\n'),abap.operators.concat(new abap.types.Character(9).set('    "b"\\n'),abap.operators.concat(new abap.types.Character(6).set('  ],\\n'),abap.operators.concat(new abap.types.Character(18).set('  "number": 456,\\n'),abap.operators.concat(new abap.types.Character(19).set('  "float": 123.45\\n'),new abap.types.Character(1).set('}')))))))));
    abap.statements.replace({target: lv_json_a, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    abap.statements.replace({target: lv_json_b, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    lo_merge_exp.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LCL_NODES_HELPER']()).constructor_());
    await lo_merge_exp.get().add({iv_str: new abap.types.Character(46).set('                |        |object |        |0|3')});
    await lo_merge_exp.get().add({iv_str: new abap.types.Character(46).set('/               |float   |num    |123.45  |0|0')});
    await lo_merge_exp.get().add({iv_str: new abap.types.Character(46).set('/               |number  |num    |123     |0|0')});
    await lo_merge_exp.get().add({iv_str: new abap.types.Character(46).set('/               |string  |array  |        |0|3')});
    await lo_merge_exp.get().add({iv_str: new abap.types.Character(46).set('/string/        |1       |str    |a       |1|0')});
    await lo_merge_exp.get().add({iv_str: new abap.types.Character(46).set('/string/        |2       |str    |c       |2|0')});
    await lo_merge_exp.get().add({iv_str: new abap.types.Character(46).set('/string/        |3       |str    |b       |3|0')});
    lo_util.set(await (new abap.Classes['Z2UI5_CL_AJSON_UTILITIES']()).constructor_());
    lo_merge.set((await lo_util.get().merge({iv_json_a: lv_json_a, iv_json_b: lv_json_b})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_merge.get().z2ui5_if_ajson$mt_json_tree, exp: lo_merge_exp.get().mt_nodes});
  }
  async json_sort() {
    let lv_json = new abap.types.String({qualifiedName: "STRING"});
    let lo_util = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON_UTILITIES", RTTIName: "\\CLASS=Z2UI5_CL_AJSON_UTILITIES"});
    let lv_sorted = new abap.types.String({qualifiedName: "STRING"});
    let lv_sorted_exp = new abap.types.String({qualifiedName: "STRING"});
    lv_json.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(20).set('  "string": "abc",\\n'),abap.operators.concat(new abap.types.Character(18).set('  "number": 789,\\n'),abap.operators.concat(new abap.types.Character(20).set('  "float": 123.45,\\n'),abap.operators.concat(new abap.types.Character(22).set('  "boolean": "true",\\n'),abap.operators.concat(new abap.types.Character(17).set('  "true": true,\\n'),abap.operators.concat(new abap.types.Character(19).set('  "false": false,\\n'),abap.operators.concat(new abap.types.Character(17).set('  "null": null,\\n'),abap.operators.concat(new abap.types.Character(24).set('  "date": "2020-03-15"\\n'),new abap.types.Character(1).set('}')))))))))));
    abap.statements.replace({target: lv_json, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    lv_sorted_exp.set(abap.operators.concat(new abap.types.Character(3).set('{\\n'),abap.operators.concat(new abap.types.Character(22).set('  "boolean": "true",\\n'),abap.operators.concat(new abap.types.Character(25).set('  "date": "2020-03-15",\\n'),abap.operators.concat(new abap.types.Character(19).set('  "false": false,\\n'),abap.operators.concat(new abap.types.Character(20).set('  "float": 123.45,\\n'),abap.operators.concat(new abap.types.Character(17).set('  "null": null,\\n'),abap.operators.concat(new abap.types.Character(18).set('  "number": 789,\\n'),abap.operators.concat(new abap.types.Character(20).set('  "string": "abc",\\n'),abap.operators.concat(new abap.types.Character(16).set('  "true": true\\n'),new abap.types.Character(1).set('}')))))))))));
    abap.statements.replace({target: lv_sorted_exp, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: new abap.types.Character(2).set('\\n')});
    lo_util.set(await (new abap.Classes['Z2UI5_CL_AJSON_UTILITIES']()).constructor_());
    lv_sorted.set((await lo_util.get().sort({iv_json: lv_json})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_sorted, exp: lv_sorted_exp});
  }
  async is_equal() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON_UTILITIES'].new()).get().is_equal({ii_json_a: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(13).set('{"a":1,"b":2}')})), ii_json_b: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(13).set('{"a":1,"b":2}')}))})), exp: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON_UTILITIES'].new()).get().is_equal({iv_json_a: new abap.types.Character(13).set('{"a":1,"b":2}'), iv_json_b: new abap.types.Character(13).set('{"a":1,"b":2}')})), exp: abap.builtin.abap_true});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON_UTILITIES'].new()).get().is_equal({iv_json_a: new abap.types.Character(13).set('{"a":1,"b":2}'), iv_json_b: new abap.types.Character(13).set('{"a":1,"b":3}')})), exp: abap.builtin.abap_false});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON_UTILITIES'].new()).get().is_equal({iv_json_a: new abap.types.Character(13).set('{"a":1,"b":2}'), iv_json_b: new abap.types.Character(19).set('{"a":1,"b":2,"c":3}')})), exp: abap.builtin.abap_false});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON_UTILITIES'].new()).get().is_equal({iv_json_a: new abap.types.Character(19).set('{"a":1,"b":2,"c":3}'), iv_json_b: new abap.types.Character(13).set('{"a":1,"b":2}')})), exp: abap.builtin.abap_false});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_UTILITIES-LTCL_JSON_UTILS'] = ltcl_json_utils;
export {lcl_nodes_helper, ltcl_parser_test, ltcl_json_utils};
//# sourceMappingURL=z2ui5_cl_ajson_utilities.clas.testclasses.mjs.map