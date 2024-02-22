await import("./z2ui5_cl_ajson.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson.clas.abap
class z2ui5_cl_ajson {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_AJSON';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON"];
  static ATTRIBUTES = {"GO_FLOAT_REGEX": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REGEX", RTTIName: "\\CLASS=CL_ABAP_REGEX"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "MS_OPTS": {"type": () => {return new abap.types.Structure({"read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "keep_item_order": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "format_datetime": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "to_abap_corresponding_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_ajson=>ty_opts", undefined, {}, {});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_AJSON~MT_JSON_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_AJSON~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_AJSON~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_AJSON~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"GET_ITEM": {"visibility": "I", "parameters": {"RV_ITEM": {"type": () => {return new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PROVE_PATH_EXISTS": {"visibility": "I", "parameters": {"RR_END_NODE": {"type": () => {return new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DELETE_SUBTREE": {"visibility": "I", "parameters": {"RS_TOP_NODE": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IR_PARENT": {"type": () => {return new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));}, "is_optional": " "}}},
  "READ_ONLY_WATCHDOG": {"visibility": "I", "parameters": {}},
  "PARSE": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_FREEZE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "II_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "CREATE_EMPTY": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});}, "is_optional": " "}, "II_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IV_FORMAT_DATETIME": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IV_TO_ABAP_CORRESPONDING_ONLY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "CREATE_FROM": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});}, "is_optional": " "}, "II_SOURCE_JSON": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "II_FILTER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});}, "is_optional": " "}, "II_MAPPER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IV_FORMAT_DATETIME": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IV_TO_ABAP_CORRESPONDING_ONLY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "NEW": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});}, "is_optional": " "}, "IV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IV_FORMAT_DATETIME": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IV_TO_ABAP_CORRESPONDING_ONLY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.go_float_regex = z2ui5_cl_ajson.go_float_regex;
    this.ms_opts = new abap.types.Structure({"read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "keep_item_order": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "format_datetime": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "to_abap_corresponding_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_ajson=>ty_opts", undefined, {}, {});
    this.mi_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    this.z2ui5_if_ajson$version = abap.Classes['Z2UI5_IF_AJSON'].z2ui5_if_ajson$version;
    this.z2ui5_if_ajson$origin = abap.Classes['Z2UI5_IF_AJSON'].z2ui5_if_ajson$origin;
    this.z2ui5_if_ajson$license = abap.Classes['Z2UI5_IF_AJSON'].z2ui5_if_ajson$license;
    if (this.z2ui5_if_ajson$mt_json_tree === undefined) this.z2ui5_if_ajson$mt_json_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
    this.is_empty = this.z2ui5_if_ajson$is_empty;
    this.exists = this.z2ui5_if_ajson$exists;
    this.members = this.z2ui5_if_ajson$members;
    this.get = this.z2ui5_if_ajson$get;
    this.get_boolean = this.z2ui5_if_ajson$get_boolean;
    this.get_integer = this.z2ui5_if_ajson$get_integer;
    this.get_number = this.z2ui5_if_ajson$get_number;
    this.get_date = this.z2ui5_if_ajson$get_date;
    this.get_timestamp = this.z2ui5_if_ajson$get_timestamp;
    this.get_string = this.z2ui5_if_ajson$get_string;
    this.slice = this.z2ui5_if_ajson$slice;
    this.to_abap = this.z2ui5_if_ajson$to_abap;
    this.array_to_string_table = this.z2ui5_if_ajson$array_to_string_table;
    this.clear = this.z2ui5_if_ajson$clear;
    this.set = this.z2ui5_if_ajson$set;
    this.setx = this.z2ui5_if_ajson$setx;
    this.set_boolean = this.z2ui5_if_ajson$set_boolean;
    this.set_string = this.z2ui5_if_ajson$set_string;
    this.set_integer = this.z2ui5_if_ajson$set_integer;
    this.set_date = this.z2ui5_if_ajson$set_date;
    this.set_timestamp = this.z2ui5_if_ajson$set_timestamp;
    this.set_null = this.z2ui5_if_ajson$set_null;
    this.delete_ = this.z2ui5_if_ajson$delete_;
    this.touch_array = this.z2ui5_if_ajson$touch_array;
    this.push = this.z2ui5_if_ajson$push;
    this.stringify = this.z2ui5_if_ajson$stringify;
    this.clone = this.z2ui5_if_ajson$clone;
    this.filter = this.z2ui5_if_ajson$filter;
    this.map = this.z2ui5_if_ajson$map;
    this.mt_json_tree = this.z2ui5_if_ajson$mt_json_tree;
    this.keep_item_order = this.z2ui5_if_ajson$keep_item_order;
    this.format_datetime = this.z2ui5_if_ajson$format_datetime;
    this.to_abap_corresponding_only = this.z2ui5_if_ajson$to_abap_corresponding_only;
    this.freeze = this.z2ui5_if_ajson$freeze;
  }
  async constructor_(INPUT) {
    let iv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_item_order) {iv_keep_item_order.set(INPUT.iv_keep_item_order);}
    if (INPUT === undefined || INPUT.iv_keep_item_order === undefined) {iv_keep_item_order = abap.builtin.abap_false;}
    let iv_format_datetime = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_format_datetime) {iv_format_datetime.set(INPUT.iv_format_datetime);}
    if (INPUT === undefined || INPUT.iv_format_datetime === undefined) {iv_format_datetime = abap.builtin.abap_true;}
    let iv_to_abap_corresponding_only = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_to_abap_corresponding_only) {iv_to_abap_corresponding_only.set(INPUT.iv_to_abap_corresponding_only);}
    if (INPUT === undefined || INPUT.iv_to_abap_corresponding_only === undefined) {iv_to_abap_corresponding_only = abap.builtin.abap_false;}
    this.ms_opts.get().keep_item_order.set(iv_keep_item_order);
    this.ms_opts.get().to_abap_corresponding_only.set(iv_to_abap_corresponding_only);
    await this.z2ui5_if_ajson$format_datetime({iv_use_iso: iv_format_datetime});
    return this;
  }
  async create_empty(INPUT) {
    return z2ui5_cl_ajson.create_empty(INPUT);
  }
  static async create_empty(INPUT) {
    let ro_instance = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let ii_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.ii_custom_mapping) {ii_custom_mapping.set(INPUT.ii_custom_mapping);}
    let iv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_item_order) {iv_keep_item_order.set(INPUT.iv_keep_item_order);}
    if (INPUT === undefined || INPUT.iv_keep_item_order === undefined) {iv_keep_item_order = abap.builtin.abap_false;}
    let iv_format_datetime = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_format_datetime) {iv_format_datetime.set(INPUT.iv_format_datetime);}
    if (INPUT === undefined || INPUT.iv_format_datetime === undefined) {iv_format_datetime = abap.builtin.abap_true;}
    let iv_to_abap_corresponding_only = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_to_abap_corresponding_only) {iv_to_abap_corresponding_only.set(INPUT.iv_to_abap_corresponding_only);}
    if (INPUT === undefined || INPUT.iv_to_abap_corresponding_only === undefined) {iv_to_abap_corresponding_only = abap.builtin.abap_false;}
    ro_instance.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_({iv_to_abap_corresponding_only: iv_to_abap_corresponding_only, iv_format_datetime: iv_format_datetime, iv_keep_item_order: iv_keep_item_order}));
    ro_instance.get().mi_custom_mapping.set(ii_custom_mapping);
    return ro_instance;
  }
  async create_from(INPUT) {
    return z2ui5_cl_ajson.create_from(INPUT);
  }
  static async create_from(INPUT) {
    let ro_instance = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let ii_source_json = INPUT?.ii_source_json;
    if (ii_source_json?.getQualifiedName === undefined || ii_source_json.getQualifiedName() !== "Z2UI5_IF_AJSON") { ii_source_json = undefined; }
    if (ii_source_json === undefined) { ii_source_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}).set(INPUT.ii_source_json); }
    let ii_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    if (INPUT && INPUT.ii_filter) {ii_filter.set(INPUT.ii_filter);}
    let ii_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.ii_mapper) {ii_mapper.set(INPUT.ii_mapper);}
    let lo_mutator_queue = new abap.types.ABAPObject({qualifiedName: "LCL_MUTATOR_QUEUE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_MUTATOR_QUEUE"});
    if (abap.compare.initial(ii_source_json)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(16).set('Source not bound')});
    }
    ro_instance.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_({iv_to_abap_corresponding_only: ((await ii_source_json.get().z2ui5_if_ajson$opts())).get().to_abap_corresponding_only, iv_format_datetime: ((await ii_source_json.get().z2ui5_if_ajson$opts())).get().format_datetime, iv_keep_item_order: ((await ii_source_json.get().z2ui5_if_ajson$opts())).get().keep_item_order}));
    if (abap.compare.initial(ii_filter) && abap.compare.initial(ii_mapper)) {
      ro_instance.get().z2ui5_if_ajson$mt_json_tree.set(ii_source_json.get().z2ui5_if_ajson$mt_json_tree);
    } else {
      lo_mutator_queue.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_MUTATOR_QUEUE']()).constructor_());
      if (abap.compare.initial(ii_mapper) === false) {
        await lo_mutator_queue.get().add({ii_mutator: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_MAPPER_RUNNER'].new({ii_mapper: ii_mapper}))});
      }
      if (abap.compare.initial(ii_filter) === false) {
        await lo_mutator_queue.get().add({ii_mutator: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_FILTER_RUNNER'].new({ii_filter: ii_filter}))});
      }
      await lo_mutator_queue.get().lif_mutator_runner$run({it_source_tree: ii_source_json.get().z2ui5_if_ajson$mt_json_tree, et_dest_tree: ro_instance.get().z2ui5_if_ajson$mt_json_tree});
    }
    return ro_instance;
  }
  async delete_subtree(INPUT) {
    let rs_top_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    let ir_parent = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    if (INPUT && INPUT.ir_parent) {ir_parent.set(INPUT.ir_parent);}
    let lv_parent_path = new abap.types.String({qualifiedName: "STRING"});
    let lr_parent = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    abap.statements.readTable(this.mt_json_tree,{into: rs_top_node,
      withKey: (i) => {return abap.compare.eq(i.path, iv_path) && abap.compare.eq(i.name, iv_name);},
      withKeyValue: [{key: (i) => {return i.path}, value: iv_path},{key: (i) => {return i.name}, value: iv_name}],
      usesTableLine: false,
      withKeySimple: {"path": iv_path,"name": iv_name}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      return rs_top_node;
    }
    await abap.statements.deleteInternal(this.mt_json_tree,{index: abap.builtin.sy.get().tabix});
    if (abap.compare.gt(rs_top_node.get().children, abap.IntegerFactory.get(0))) {
      lv_parent_path.set(abap.operators.concat(iv_path,abap.operators.concat(iv_name,new abap.types.Character(2).set('/*'))));
      await abap.statements.deleteInternal(this.mt_json_tree,{where: (I) => {return abap.compare.cp(I.path, lv_parent_path);}});
    }
    if (INPUT && INPUT.ir_parent) {
      ir_parent.get().children.set(abap.operators.minus(ir_parent.get().children,abap.IntegerFactory.get(1)));
    } else {
      lr_parent.set((await this.get_item({iv_path: iv_path})));
      if (abap.compare.initial(lr_parent) === false) {
        lr_parent.get().children.set(abap.operators.minus(lr_parent.get().children,abap.IntegerFactory.get(1)));
      }
    }
    return rs_top_node;
  }
  async get_item(INPUT) {
    let rv_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let fs_item_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let ls_path_name = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    ls_path_name.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: iv_path})));
    abap.statements.readTable(this.mt_json_tree,{assigning: fs_item_,
      withKey: (i) => {return abap.compare.eq(i.path, ls_path_name.get().path) && abap.compare.eq(i.name, ls_path_name.get().name);},
      withKeyValue: [{key: (i) => {return i.path}, value: ls_path_name.get().path},{key: (i) => {return i.name}, value: ls_path_name.get().name}],
      usesTableLine: false,
      withKeySimple: {"path": ls_path_name.get().path,"name": ls_path_name.get().name}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      rv_item.assign(fs_item_.getPointer());
    }
    return rv_item;
  }
  async new(INPUT) {
    return z2ui5_cl_ajson.new(INPUT);
  }
  static async new(INPUT) {
    let ro_instance = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let iv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_item_order) {iv_keep_item_order.set(INPUT.iv_keep_item_order);}
    if (INPUT === undefined || INPUT.iv_keep_item_order === undefined) {iv_keep_item_order = abap.builtin.abap_false;}
    let iv_format_datetime = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_format_datetime) {iv_format_datetime.set(INPUT.iv_format_datetime);}
    if (INPUT === undefined || INPUT.iv_format_datetime === undefined) {iv_format_datetime = abap.builtin.abap_true;}
    let iv_to_abap_corresponding_only = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_to_abap_corresponding_only) {iv_to_abap_corresponding_only.set(INPUT.iv_to_abap_corresponding_only);}
    if (INPUT === undefined || INPUT.iv_to_abap_corresponding_only === undefined) {iv_to_abap_corresponding_only = abap.builtin.abap_false;}
    ro_instance.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_({iv_to_abap_corresponding_only: iv_to_abap_corresponding_only, iv_format_datetime: iv_format_datetime, iv_keep_item_order: iv_keep_item_order}));
    return ro_instance;
  }
  async parse(INPUT) {
    return z2ui5_cl_ajson.parse(INPUT);
  }
  static async parse(INPUT) {
    let ro_instance = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let iv_json = INPUT?.iv_json;
    if (iv_json?.getQualifiedName === undefined || iv_json.getQualifiedName() !== "STRING") { iv_json = undefined; }
    if (iv_json === undefined) { iv_json = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_json); }
    let iv_freeze = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_freeze) {iv_freeze.set(INPUT.iv_freeze);}
    if (INPUT === undefined || INPUT.iv_freeze === undefined) {iv_freeze = abap.builtin.abap_false;}
    let ii_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.ii_custom_mapping) {ii_custom_mapping.set(INPUT.ii_custom_mapping);}
    let iv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_item_order) {iv_keep_item_order.set(INPUT.iv_keep_item_order);}
    if (INPUT === undefined || INPUT.iv_keep_item_order === undefined) {iv_keep_item_order = abap.builtin.abap_false;}
    let lo_parser = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_PARSER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_PARSER"});
    ro_instance.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_());
    lo_parser.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER']()).constructor_());
    ro_instance.get().z2ui5_if_ajson$mt_json_tree.set((await lo_parser.get().parse({iv_json: iv_json, iv_keep_item_order: iv_keep_item_order})));
    ro_instance.get().mi_custom_mapping.set(ii_custom_mapping);
    ro_instance.get().ms_opts.get().keep_item_order.set(iv_keep_item_order);
    if (abap.compare.eq(iv_freeze, abap.builtin.abap_true)) {
      await ro_instance.get().z2ui5_if_ajson$freeze();
    }
    return ro_instance;
  }
  async prove_path_exists(INPUT) {
    let rr_end_node = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lt_path = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lr_node_parent = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lv_cur_path = new abap.types.String({qualifiedName: "STRING"});
    let lv_cur_name = new abap.types.String({qualifiedName: "STRING"});
    let ls_new_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    abap.statements.split({source: iv_path, at: new abap.types.Character(1).set('/'), table: lt_path});
    await abap.statements.deleteInternal(lt_path,{where: (I) => {return abap.compare.initial(I.table_line);}});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique22 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique22++);
      lr_node_parent.set(rr_end_node);
      abap.statements.readTable(this.mt_json_tree,{referenceInto: rr_end_node,
        withKey: (i) => {return abap.compare.eq(i.path, lv_cur_path) && abap.compare.eq(i.name, lv_cur_name);},
        withKeyValue: [{key: (i) => {return i.path}, value: lv_cur_path},{key: (i) => {return i.name}, value: lv_cur_name}],
        usesTableLine: false,
        withKeySimple: {"path": lv_cur_path,"name": lv_cur_name}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.clear(ls_new_node);
        if (abap.compare.initial(lr_node_parent) === false) {
          lr_node_parent.get().children.set(abap.operators.add(lr_node_parent.get().children,abap.IntegerFactory.get(1)));
          if (abap.compare.eq(lr_node_parent.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
            ls_new_node.get().index.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].validate_array_index({iv_path: lv_cur_path, iv_index: lv_cur_name})));
          }
        }
        ls_new_node.get().path.set(lv_cur_path);
        ls_new_node.get().name.set(lv_cur_name);
        ls_new_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object);
        abap.statements.insertInternal({data: ls_new_node, referenceInto: rr_end_node, table: this.mt_json_tree});
      }
      lv_cur_path.set(abap.operators.concat(lv_cur_path,abap.operators.concat(lv_cur_name,new abap.types.Character(1).set('/'))));
      abap.statements.readTable(lt_path,{index: abap.builtin.sy.get().index,
        into: lv_cur_name});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        break;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return rr_end_node;
  }
  async read_only_watchdog() {
    if (abap.compare.eq(this.ms_opts.get().read_only, abap.builtin.abap_true)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(31).set('This json instance is read only')});
    }
  }
  async z2ui5_if_ajson$array_to_string_table(INPUT) {
    let rt_string_table = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lv_normalized_path = new abap.types.String({qualifiedName: "STRING"});
    let lr_node = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let fs_item_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lv_tmp = new abap.types.String({qualifiedName: "STRING"});
    lv_normalized_path.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: iv_path})));
    lr_node.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_node)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Path not found: ${abap.templateFormatting(iv_path)}`)});
    }
    if (abap.compare.ne(lr_node.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Array expected at: ${abap.templateFormatting(iv_path)}`)});
    }
    for await (const unique23 of abap.statements.loop(this.mt_json_tree,{where: async (I) => {return abap.compare.eq(I.path, lv_normalized_path);},topEquals: {"path": lv_normalized_path}})) {
      fs_item_.assign(unique23);
      let unique24 = fs_item_.get().type;
      if (abap.compare.eq(unique24, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number) || abap.compare.eq(unique24, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string)) {
        abap.statements.append({source: fs_item_.get().value, target: rt_string_table});
      } else if (abap.compare.eq(unique24, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null)) {
        abap.statements.append({source: new abap.types.Character(1).set(''), target: rt_string_table});
      } else if (abap.compare.eq(unique24, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean)) {
        if (abap.compare.eq(fs_item_.get().value, new abap.types.Character(4).set('true'))) {
          lv_tmp.set(abap.builtin.abap_true);
        } else {
          abap.statements.clear(lv_tmp);
        }
        abap.statements.append({source: lv_tmp, target: rt_string_table});
      } else {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Cannot convert [${abap.templateFormatting(fs_item_.get().type)}] to string at [${abap.templateFormatting(fs_item_.get().path)}${abap.templateFormatting(fs_item_.get().name)}]`)});
      }
    }
    return rt_string_table;
  }
  async z2ui5_if_ajson$clear() {
    await this.read_only_watchdog();
    abap.statements.clear(this.mt_json_tree);
  }
  async z2ui5_if_ajson$clone() {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    ri_json.set((await this.create_from({ii_source_json: this.me})));
    return ri_json;
  }
  async z2ui5_if_ajson$delete_(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let ls_split_path = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    await this.read_only_watchdog();
    ls_split_path.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: iv_path})));
    await this.delete_subtree({iv_path: ls_split_path.get().path, iv_name: ls_split_path.get().name});
    ri_json.set(this.me);
    return ri_json;
  }
  async z2ui5_if_ajson$exists(INPUT) {
    let rv_exists = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    rv_exists.set(abap.builtin.boolc(abap.compare.initial((await this.get_item({iv_path: iv_path}))) === false));
    return rv_exists;
  }
  async z2ui5_if_ajson$filter(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ii_filter = INPUT?.ii_filter;
    if (ii_filter?.getQualifiedName === undefined || ii_filter.getQualifiedName() !== "Z2UI5_IF_AJSON_FILTER") { ii_filter = undefined; }
    if (ii_filter === undefined) { ii_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}).set(INPUT.ii_filter); }
    ri_json.set((await this.create_from({ii_source_json: this.me, ii_filter: ii_filter})));
    return ri_json;
  }
  async z2ui5_if_ajson$format_datetime(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_use_iso = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_use_iso) {iv_use_iso.set(INPUT.iv_use_iso);}
    if (INPUT === undefined || INPUT.iv_use_iso === undefined) {iv_use_iso = abap.builtin.abap_true;}
    this.ms_opts.get().format_datetime.set(iv_use_iso);
    ri_json.set(this.me);
    return ri_json;
  }
  async z2ui5_if_ajson$freeze() {
    this.ms_opts.get().read_only.set(abap.builtin.abap_true);
  }
  async z2ui5_if_ajson$get(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item) === false) {
      rv_value.set(lr_item.get().value);
    }
    return rv_value;
  }
  async z2ui5_if_ajson$get_boolean(INPUT) {
    let rv_value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item) || abap.compare.eq(lr_item.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null)) {
      return rv_value;
    } else if (abap.compare.eq(lr_item.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean)) {
      rv_value.set(abap.builtin.boolc(abap.compare.eq(lr_item.get().value, new abap.types.Character(4).set('true'))));
    } else if (abap.compare.initial(lr_item.get().value) === false) {
      rv_value.set(abap.builtin.abap_true);
    }
    return rv_value;
  }
  async z2ui5_if_ajson$get_date(INPUT) {
    let rv_value = new abap.types.Date({qualifiedName: "D"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lv_y = new abap.types.Character(4, {});
    let lv_m = new abap.types.Character(2, {});
    let lv_d = new abap.types.Character(2, {});
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item) === false && abap.compare.eq(lr_item.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string)) {
      abap.statements.find(lr_item.get().value, {regex: new abap.types.Character(29).set('^(\\d{4})-(\\d{2})-(\\d{2})(T|$)'), first: true, submatches: [lv_y,lv_m,lv_d]});
      abap.statements.concatenate({source: [lv_y, lv_m, lv_d], target: rv_value});
    }
    return rv_value;
  }
  async z2ui5_if_ajson$get_integer(INPUT) {
    let rv_value = new abap.types.Integer({qualifiedName: "I"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item) === false && abap.compare.eq(lr_item.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number)) {
      rv_value.set(lr_item.get().value);
    }
    return rv_value;
  }
  async z2ui5_if_ajson$get_node_type(INPUT) {
    let rv_node_type = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item) === false) {
      rv_node_type.set(lr_item.get().type);
    }
    return rv_node_type;
  }
  async z2ui5_if_ajson$get_number(INPUT) {
    let rv_value = new abap.types.Float({qualifiedName: "F"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item) === false && abap.compare.eq(lr_item.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number)) {
      rv_value.set(lr_item.get().value);
    }
    return rv_value;
  }
  async z2ui5_if_ajson$get_string(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item) === false && abap.compare.ne(lr_item.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null)) {
      rv_value.set(lr_item.get().value);
    }
    return rv_value;
  }
  async z2ui5_if_ajson$get_timestamp(INPUT) {
    let rv_value = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lo_to_abap = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    let lr_item = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lr_item.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_item)) {
      return rv_value;
    }
    lo_to_abap.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_());
    try {
      rv_value.set((await lo_to_abap.get().to_timestamp({iv_value: lr_item.get().value})));
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        return rv_value;
      } else {
        throw e;
      }
    }
    return rv_value;
  }
  async z2ui5_if_ajson$is_empty() {
    let rv_yes = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    rv_yes.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.lines({val: this.mt_json_tree}), abap.IntegerFactory.get(0))));
    return rv_yes;
  }
  async z2ui5_if_ajson$keep_item_order() {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    this.ms_opts.get().keep_item_order.set(abap.builtin.abap_true);
    ri_json.set(this.me);
    return ri_json;
  }
  async z2ui5_if_ajson$map(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ii_mapper = INPUT?.ii_mapper;
    if (ii_mapper?.getQualifiedName === undefined || ii_mapper.getQualifiedName() !== "Z2UI5_IF_AJSON_MAPPING") { ii_mapper = undefined; }
    if (ii_mapper === undefined) { ii_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}).set(INPUT.ii_mapper); }
    ri_json.set((await this.create_from({ii_source_json: this.me, ii_mapper: ii_mapper})));
    return ri_json;
  }
  async z2ui5_if_ajson$members(INPUT) {
    let rt_members = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lv_normalized_path = new abap.types.String({qualifiedName: "STRING"});
    let fs_item_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    lv_normalized_path.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: iv_path})));
    for await (const unique25 of abap.statements.loop(this.mt_json_tree,{where: async (I) => {return abap.compare.eq(I.path, lv_normalized_path);},topEquals: {"path": lv_normalized_path}})) {
      fs_item_.assign(unique25);
      abap.statements.append({source: fs_item_.get().name, target: rt_members});
    }
    return rt_members;
  }
  async z2ui5_if_ajson$opts() {
    let rs_opts = new abap.types.Structure({"read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "keep_item_order": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "format_datetime": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "to_abap_corresponding_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_ajson=>ty_opts", undefined, {}, {});
    rs_opts.set(this.ms_opts);
    return rs_opts;
  }
  async z2ui5_if_ajson$push(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_val = INPUT?.iv_val;
    let lr_parent = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lr_new_node = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lt_new_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let ls_new_path = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    let lv_new_index = new abap.types.Integer({qualifiedName: "I"});
    await this.read_only_watchdog();
    lr_parent.set((await this.get_item({iv_path: iv_path})));
    if (abap.compare.initial(lr_parent)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Path [${abap.templateFormatting(iv_path)}] does not exist`)});
    }
    if (abap.compare.ne(lr_parent.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Path [${abap.templateFormatting(iv_path)}] is not array`)});
    }
    lv_new_index.set(abap.operators.add(lr_parent.get().children,abap.IntegerFactory.get(1)));
    ls_new_path.get().path.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: iv_path})));
    ls_new_path.get().name.set(new abap.types.String().set(`${abap.templateFormatting(lv_new_index)}`));
    lt_new_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({is_opts: this.ms_opts, iv_data: iv_val, is_prefix: ls_new_path})));
    abap.statements.readTable(lt_new_nodes,{index: abap.IntegerFactory.get(1),
      referenceInto: lr_new_node});
    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
    lr_new_node.get().index.set(lv_new_index);
    lr_parent.get().children.set(lv_new_index);
    abap.statements.insertInternal({lines: true, data: lt_new_nodes, table: this.mt_json_tree});
    ri_json.set(this.me);
    return ri_json;
  }
  async z2ui5_if_ajson$set(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_val = INPUT?.iv_val;
    let iv_ignore_empty = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_ignore_empty) {iv_ignore_empty.set(INPUT.iv_ignore_empty);}
    if (INPUT === undefined || INPUT.iv_ignore_empty === undefined) {iv_ignore_empty = abap.builtin.abap_true;}
    let iv_node_type = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"});
    if (INPUT && INPUT.iv_node_type) {iv_node_type.set(INPUT.iv_node_type);}
    let ls_split_path = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    let lr_parent = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let ls_deleted_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let lv_item_order = new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"});
    let lt_new_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let lv_array_index = new abap.types.Integer({qualifiedName: "I"});
    await this.read_only_watchdog();
    ri_json.set(this.me);
    if (abap.compare.initial(iv_val) && abap.compare.eq(iv_ignore_empty, abap.builtin.abap_true) && abap.compare.initial(iv_node_type)) {
      return ri_json;
    }
    if (abap.compare.initial(iv_node_type) === false && abap.compare.ne(iv_node_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean) && abap.compare.ne(iv_node_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null) && abap.compare.ne(iv_node_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number) && abap.compare.ne(iv_node_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected type ${abap.templateFormatting(iv_node_type)}`)});
    }
    ls_split_path.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: iv_path})));
    if (abap.compare.initial(ls_split_path)) {
      if (abap.compare.initial(iv_node_type) === false) {
        this.mt_json_tree.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].insert_with_type({is_opts: this.ms_opts, iv_data: iv_val, iv_type: iv_node_type, is_prefix: ls_split_path, ii_custom_mapping: this.mi_custom_mapping})));
      } else {
        this.mt_json_tree.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({is_opts: this.ms_opts, iv_data: iv_val, is_prefix: ls_split_path, ii_custom_mapping: this.mi_custom_mapping})));
      }
      return ri_json;
    }
    lr_parent.set((await this.prove_path_exists({iv_path: ls_split_path.get().path})));
    abap.statements.assert(abap.compare.initial(lr_parent) === false);
    ls_deleted_node.set((await this.delete_subtree({ir_parent: lr_parent, iv_path: ls_split_path.get().path, iv_name: ls_split_path.get().name})));
    lv_item_order.set(ls_deleted_node.get().order);
    if (abap.compare.eq(lr_parent.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
      lv_array_index.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].validate_array_index({iv_path: ls_split_path.get().path, iv_index: ls_split_path.get().name})));
    } else if (abap.compare.eq(lr_parent.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object) && abap.compare.eq(lv_item_order, abap.IntegerFactory.get(0)) && abap.compare.eq(this.ms_opts.get().keep_item_order, abap.builtin.abap_true)) {
      lv_item_order.set(abap.operators.add(lr_parent.get().children,abap.IntegerFactory.get(1)));
    }
    if (abap.compare.initial(iv_node_type) === false) {
      lt_new_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].insert_with_type({is_opts: this.ms_opts, iv_item_order: lv_item_order, iv_data: iv_val, iv_type: iv_node_type, iv_array_index: lv_array_index, is_prefix: ls_split_path, ii_custom_mapping: this.mi_custom_mapping})));
    } else {
      lt_new_nodes.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].convert({is_opts: this.ms_opts, iv_item_order: lv_item_order, iv_data: iv_val, iv_array_index: lv_array_index, is_prefix: ls_split_path, ii_custom_mapping: this.mi_custom_mapping})));
    }
    if (abap.compare.gt(abap.builtin.lines({val: lt_new_nodes}), abap.IntegerFactory.get(0))) {
      lr_parent.get().children.set(abap.operators.add(lr_parent.get().children,abap.IntegerFactory.get(1)));
      abap.statements.insertInternal({lines: true, data: lt_new_nodes, table: this.mt_json_tree});
    }
    return ri_json;
  }
  async z2ui5_if_ajson$setx(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_param = INPUT?.iv_param;
    if (iv_param?.getQualifiedName === undefined || iv_param.getQualifiedName() !== "STRING") { iv_param = undefined; }
    if (iv_param === undefined) { iv_param = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_param); }
    let lv_path = new abap.types.String({qualifiedName: "STRING"});
    let lv_val = new abap.types.String({qualifiedName: "STRING"});
    let lv_int = new abap.types.Integer({qualifiedName: "I"});
    let lv_dec = new abap.types.DecFloat34();
    let lv_last = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.initial(iv_param)) {
      ri_json.set(this.me);
      return ri_json;
    }
    abap.statements.split({source: iv_param, at: new abap.types.Character(1).set(':'), targets: [lv_path,lv_val]});
    abap.statements.condense(lv_path, {nogaps: false});
    abap.statements.condense(lv_val, {nogaps: false});
    if (abap.compare.initial(lv_val)) {
      ri_json.set(this.me);
      return ri_json;
    }
    if (abap.compare.initial(z2ui5_cl_ajson.go_float_regex)) {
      z2ui5_cl_ajson.go_float_regex.set(await (new abap.Classes['CL_ABAP_REGEX']()).constructor_({pattern: new abap.types.Character(25).set('^([1-9][0-9]*|0)\\.[0-9]+$')}));
    }
    if (abap.compare.eq(lv_val, new abap.types.Character(4).set('null'))) {
      await this.z2ui5_if_ajson$set_null({iv_path: lv_path});
    } else if (abap.compare.eq(lv_val, new abap.types.Character(4).set('true'))) {
      await this.z2ui5_if_ajson$set_boolean({iv_path: lv_path, iv_val: abap.builtin.abap_true});
    } else if (abap.compare.eq(lv_val, new abap.types.Character(5).set('false'))) {
      await this.z2ui5_if_ajson$set_boolean({iv_path: lv_path, iv_val: abap.builtin.abap_false});
    } else if (abap.compare.co(lv_val, new abap.types.Character(10).set('0123456789'))) {
      lv_int.set(lv_val);
      await this.z2ui5_if_ajson$set_integer({iv_path: lv_path, iv_val: lv_int});
    } else if (abap.compare.co(lv_val, new abap.types.Character(11).set('0123456789.')) && abap.compare.eq((await (await z2ui5_cl_ajson.go_float_regex.get().create_matcher({text: lv_val})).get().match()), abap.builtin.abap_true)) {
      lv_dec.set(lv_val);
      await this.z2ui5_if_ajson$set({iv_path: lv_path, iv_val: lv_dec});
    } else if (abap.compare.eq(lv_val.getOffset({offset: 0, length: 1}), new abap.types.Character(1).set('{')) || abap.compare.eq(lv_val.getOffset({offset: 0, length: 1}), new abap.types.Character(1).set('['))) {
      await this.z2ui5_if_ajson$set({iv_path: lv_path, iv_val: (await this.parse({iv_json: lv_val, iv_keep_item_order: this.ms_opts.get().keep_item_order}))});
    } else {
      lv_last.set(abap.operators.minus(abap.builtin.strlen({val: lv_val}),abap.IntegerFactory.get(1)));
      if (abap.compare.eq(lv_val.getOffset({offset: 0, length: 1}), new abap.types.Character(1).set('"')) && abap.compare.eq(lv_val.getOffset({offset: lv_last, length: 1}), new abap.types.Character(1).set('"'))) {
        lv_val.set(abap.builtin.substring({val: lv_val, off: abap.IntegerFactory.get(1), len: abap.operators.minus(lv_last,abap.IntegerFactory.get(1))}));
      }
      await this.z2ui5_if_ajson$set_string({iv_path: lv_path, iv_val: lv_val});
    }
    ri_json.set(this.me);
    return ri_json;
  }
  async z2ui5_if_ajson$set_boolean(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_val = INPUT?.iv_val;
    let lv_bool = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    ri_json.set(this.me);
    lv_bool.set(abap.builtin.boolc(abap.compare.initial(iv_val) === false));
    await this.z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: iv_path, iv_val: lv_bool});
    return ri_json;
  }
  async z2ui5_if_ajson$set_date(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_val = INPUT?.iv_val;
    if (iv_val?.getQualifiedName === undefined || iv_val.getQualifiedName() !== "D") { iv_val = undefined; }
    if (iv_val === undefined) { iv_val = new abap.types.Date({qualifiedName: "D"}).set(INPUT.iv_val); }
    let lv_val = new abap.types.String({qualifiedName: "STRING"});
    ri_json.set(this.me);
    lv_val.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].format_date({iv_date: iv_val})));
    await this.z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: iv_path, iv_val: lv_val});
    return ri_json;
  }
  async z2ui5_if_ajson$set_integer(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_val = INPUT?.iv_val;
    if (iv_val?.getQualifiedName === undefined || iv_val.getQualifiedName() !== "I") { iv_val = undefined; }
    if (iv_val === undefined) { iv_val = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_val); }
    ri_json.set(this.me);
    await this.z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: iv_path, iv_val: iv_val});
    return ri_json;
  }
  async z2ui5_if_ajson$set_null(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lv_null_ref = new abap.types.DataReference(new abap.types.Character(4));
    ri_json.set(this.me);
    await this.z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: iv_path, iv_val: lv_null_ref});
    return ri_json;
  }
  async z2ui5_if_ajson$set_string(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_val = INPUT?.iv_val;
    let lv_val = new abap.types.String({qualifiedName: "STRING"});
    ri_json.set(this.me);
    lv_val.set(iv_val);
    await this.z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: iv_path, iv_val: lv_val});
    return ri_json;
  }
  async z2ui5_if_ajson$set_timestamp(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_val = INPUT?.iv_val;
    if (iv_val?.getQualifiedName === undefined || iv_val.getQualifiedName() !== "TIMESTAMP") { iv_val = undefined; }
    if (iv_val === undefined) { iv_val = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}).set(INPUT.iv_val); }
    let lv_timestamp_iso = new abap.types.String({qualifiedName: "STRING"});
    ri_json.set(this.me);
    lv_timestamp_iso.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].format_timestamp({iv_ts: iv_val})));
    await this.z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: iv_path, iv_val: lv_timestamp_iso});
    return ri_json;
  }
  async z2ui5_if_ajson$slice(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lo_section = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let ls_item = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let lv_normalized_path = new abap.types.String({qualifiedName: "STRING"});
    let ls_path_parts = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    let lv_path_len = new abap.types.Integer({qualifiedName: "I"});
    let lv_path_pattern = new abap.types.String({qualifiedName: "STRING"});
    lo_section.set(await (new abap.Classes['Z2UI5_CL_AJSON']()).constructor_());
    lv_normalized_path.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].normalize_path({iv_path: iv_path})));
    lv_path_len.set(abap.builtin.strlen({val: lv_normalized_path}));
    ls_path_parts.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: lv_normalized_path})));
    abap.statements.readTable(this.mt_json_tree,{into: ls_item,
      withKey: (i) => {return abap.compare.eq(i.path, ls_path_parts.get().path) && abap.compare.eq(i.name, ls_path_parts.get().name);},
      withKeyValue: [{key: (i) => {return i.path}, value: ls_path_parts.get().path},{key: (i) => {return i.name}, value: ls_path_parts.get().name}],
      usesTableLine: false,
      withKeySimple: {"path": ls_path_parts.get().path,"name": ls_path_parts.get().name}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      return ri_json;
    }
    abap.statements.clear(ls_item.get().path);
    abap.statements.clear(ls_item.get().name);
    abap.statements.clear(ls_item.get().order);
    abap.statements.insertInternal({data: ls_item, table: lo_section.get().z2ui5_if_ajson$mt_json_tree});
    lv_path_pattern.set(abap.operators.concat(lv_normalized_path,new abap.types.String().set(`*`)));
    for await (const unique26 of abap.statements.loop(this.mt_json_tree,{where: async (I) => {return abap.compare.cp(I.path, lv_path_pattern);}})) {
      ls_item.set(unique26);
      ls_item.get().path.set(abap.builtin.substring({val: ls_item.get().path, off: abap.operators.minus(lv_path_len,abap.IntegerFactory.get(1))}));
      abap.statements.insertInternal({data: ls_item, table: lo_section.get().z2ui5_if_ajson$mt_json_tree});
    }
    ri_json.set(lo_section);
    return ri_json;
  }
  async z2ui5_if_ajson$stringify(INPUT) {
    let rv_json = new abap.types.String({qualifiedName: "STRING"});
    let iv_indent = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_indent) {iv_indent.set(INPUT.iv_indent);}
    if (INPUT === undefined || INPUT.iv_indent === undefined) {iv_indent = abap.IntegerFactory.get(0);}
    rv_json.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].stringify({it_json_tree: this.mt_json_tree, iv_keep_item_order: this.ms_opts.get().keep_item_order, iv_indent: iv_indent})));
    return rv_json;
  }
  async z2ui5_if_ajson$touch_array(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_clear = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_clear) {iv_clear.set(INPUT.iv_clear);}
    if (INPUT === undefined || INPUT.iv_clear === undefined) {iv_clear = abap.builtin.abap_false;}
    let lr_node = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let ls_deleted_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let ls_new_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let ls_split_path = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    let lr_parent = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    await this.read_only_watchdog();
    ls_split_path.set((await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].split_path({iv_path: iv_path})));
    if (abap.compare.initial(ls_split_path)) {
      ls_new_node.get().path.set(ls_split_path.get().path);
      ls_new_node.get().name.set(ls_split_path.get().name);
      ls_new_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array);
      abap.statements.insertInternal({data: ls_new_node, table: this.mt_json_tree});
      return ri_json;
    }
    if (abap.compare.eq(iv_clear, abap.builtin.abap_true)) {
      ls_deleted_node.set((await this.delete_subtree({iv_path: ls_split_path.get().path, iv_name: ls_split_path.get().name})));
    } else {
      lr_node.set((await this.get_item({iv_path: iv_path})));
    }
    if (abap.compare.initial(lr_node)) {
      lr_parent.set((await this.prove_path_exists({iv_path: ls_split_path.get().path})));
      abap.statements.assert(abap.compare.initial(lr_parent) === false);
      lr_parent.get().children.set(abap.operators.add(lr_parent.get().children,abap.IntegerFactory.get(1)));
      ls_new_node.get().path.set(ls_split_path.get().path);
      ls_new_node.get().name.set(ls_split_path.get().name);
      ls_new_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array);
      if (abap.compare.eq(this.ms_opts.get().keep_item_order, abap.builtin.abap_true) && abap.compare.initial(ls_deleted_node) === false) {
        ls_new_node.get().order.set(ls_deleted_node.get().order);
      }
      abap.statements.insertInternal({data: ls_new_node, table: this.mt_json_tree});
    } else if (abap.compare.ne(lr_node.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Path [${abap.templateFormatting(iv_path)}] already used and is not array`)});
    }
    ri_json.set(this.me);
    return ri_json;
  }
  async z2ui5_if_ajson$to_abap(INPUT) {
    let iv_corresponding = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_corresponding) {iv_corresponding.set(INPUT.iv_corresponding);}
    if (INPUT === undefined || INPUT.iv_corresponding === undefined) {iv_corresponding = abap.builtin.abap_false;}
    let ev_container = INPUT?.ev_container || new abap.types.Character(4);
    let lo_to_abap = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_TO_ABAP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_TO_ABAP"});
    abap.statements.clear(ev_container);
    lo_to_abap.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP']()).constructor_({iv_corresponding: abap.builtin.boolc(abap.compare.eq(iv_corresponding, abap.builtin.abap_true) || abap.compare.eq(this.ms_opts.get().to_abap_corresponding_only, abap.builtin.abap_true)), ii_custom_mapping: this.mi_custom_mapping}));
    await lo_to_abap.get().to_abap({it_nodes: this.z2ui5_if_ajson$mt_json_tree, c_container: ev_container});
  }
  async z2ui5_if_ajson$to_abap_corresponding_only(INPUT) {
    let ri_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_enable = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_enable) {iv_enable.set(INPUT.iv_enable);}
    if (INPUT === undefined || INPUT.iv_enable === undefined) {iv_enable = abap.builtin.abap_true;}
    this.ms_opts.get().to_abap_corresponding_only.set(iv_enable);
    ri_json.set(this.me);
    return ri_json;
  }
}
abap.Classes['Z2UI5_CL_AJSON'] = z2ui5_cl_ajson;
z2ui5_cl_ajson.go_float_regex = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REGEX", RTTIName: "\\CLASS=CL_ABAP_REGEX"});
z2ui5_cl_ajson.z2ui5_if_ajson$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_ajson.z2ui5_if_ajson$version.set('v1.1.9');
z2ui5_cl_ajson.z2ui5_if_ajson$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_ajson.z2ui5_if_ajson$origin.set('https://github.com/sbcgua/ajson');
z2ui5_cl_ajson.z2ui5_if_ajson$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_ajson.z2ui5_if_ajson$license.set('MIT');
await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'].class_constructor();
await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'].class_constructor();
export {z2ui5_cl_ajson};
//# sourceMappingURL=z2ui5_cl_ajson.clas.mjs.map