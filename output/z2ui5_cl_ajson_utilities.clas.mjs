const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_utilities.clas.abap
class z2ui5_cl_ajson_utilities {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_AJSON_UTILITIES';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_JSON_A": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_JSON_B": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_INSERT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_DELETE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MO_CHANGE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"NORMALIZE_INPUT": {"visibility": "I", "parameters": {"RO_JSON": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IO_JSON": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}}},
  "DIFF_A_B": {"visibility": "I", "parameters": {"IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DIFF_B_A": {"visibility": "I", "parameters": {"IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_ARRAY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "DELETE_EMPTY_NODES": {"visibility": "I", "parameters": {"IO_JSON": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IV_KEEP_EMPTY_ARRAYS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "NEW": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON_UTILITIES", RTTIName: "\\CLASS=Z2UI5_CL_AJSON_UTILITIES"});}, "is_optional": " "}}},
  "DIFF": {"visibility": "U", "parameters": {"IV_JSON_A": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_JSON_B": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IO_JSON_A": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IO_JSON_B": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IV_KEEP_EMPTY_ARRAYS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "EO_INSERT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "EO_DELETE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "EO_CHANGE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}}},
  "MERGE": {"visibility": "U", "parameters": {"RO_JSON": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IV_JSON_A": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_JSON_B": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IO_JSON_A": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IO_JSON_B": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IV_KEEP_EMPTY_ARRAYS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "SORT": {"visibility": "U", "parameters": {"RV_SORTED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IO_JSON": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}}},
  "IS_EQUAL": {"visibility": "U", "parameters": {"RV_YES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IV_JSON_A": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_JSON_B": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "II_JSON_A": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "II_JSON_B": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_json_a = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    this.mo_json_b = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    this.mo_insert = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    this.mo_delete = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    this.mo_change = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async delete_empty_nodes(INPUT) {
    let io_json = INPUT?.io_json;
    if (io_json?.getQualifiedName === undefined || io_json.getQualifiedName() !== "Z2UI5_IF_AJSON") { io_json = undefined; }
    if (io_json === undefined) { io_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}).set(INPUT.io_json); }
    let iv_keep_empty_arrays = INPUT?.iv_keep_empty_arrays;
    if (iv_keep_empty_arrays?.getQualifiedName === undefined || iv_keep_empty_arrays.getQualifiedName() !== "ABAP_BOOL") { iv_keep_empty_arrays = undefined; }
    if (iv_keep_empty_arrays === undefined) { iv_keep_empty_arrays = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_keep_empty_arrays); }
    let ls_json_tree = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let lv_done = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique44 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique44++);
      lv_done.set(abap.builtin.abap_true);
      if (abap.compare.eq(iv_keep_empty_arrays, abap.builtin.abap_false)) {
        for await (const unique45 of abap.statements.loop(io_json.get().z2ui5_if_ajson$mt_json_tree,{where: async (I) => {return abap.compare.eq(I.type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array) && abap.compare.eq(I.children, abap.IntegerFactory.get(0));},topEquals: {"type": abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array,"children": abap.IntegerFactory.get(0)}})) {
          ls_json_tree.set(unique45);
          await io_json.get().z2ui5_if_ajson$delete({iv_path: abap.operators.concat(ls_json_tree.get().path,ls_json_tree.get().name)});
        }
        if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          lv_done.set(abap.builtin.abap_false);
        }
      }
      for await (const unique46 of abap.statements.loop(io_json.get().z2ui5_if_ajson$mt_json_tree,{where: async (I) => {return abap.compare.eq(I.type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object) && abap.compare.eq(I.children, abap.IntegerFactory.get(0));},topEquals: {"type": abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object,"children": abap.IntegerFactory.get(0)}})) {
        ls_json_tree.set(unique46);
        await io_json.get().z2ui5_if_ajson$delete({iv_path: abap.operators.concat(ls_json_tree.get().path,ls_json_tree.get().name)});
      }
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        lv_done.set(abap.builtin.abap_false);
      }
      if (abap.compare.eq(lv_done, abap.builtin.abap_true)) {
        break;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async diff(INPUT) {
    let iv_json_a = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json_a) {iv_json_a.set(INPUT.iv_json_a);}
    let iv_json_b = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json_b) {iv_json_b.set(INPUT.iv_json_b);}
    let io_json_a = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.io_json_a) {io_json_a.set(INPUT.io_json_a);}
    let io_json_b = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.io_json_b) {io_json_b.set(INPUT.io_json_b);}
    let iv_keep_empty_arrays = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_empty_arrays) {iv_keep_empty_arrays.set(INPUT.iv_keep_empty_arrays);}
    if (INPUT === undefined || INPUT.iv_keep_empty_arrays === undefined) {iv_keep_empty_arrays = abap.builtin.abap_false;}
    let eo_insert = INPUT?.eo_insert || new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let eo_delete = INPUT?.eo_delete || new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let eo_change = INPUT?.eo_change || new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    this.mo_json_a.set((await this.normalize_input({iv_json: iv_json_a, io_json: io_json_a})));
    this.mo_json_b.set((await this.normalize_input({iv_json: iv_json_b, io_json: io_json_b})));
    this.mo_insert.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    this.mo_delete.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    this.mo_change.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await this.diff_a_b({iv_path: new abap.types.Character(1).set('/')});
    await this.diff_b_a({iv_path: new abap.types.Character(1).set('/')});
    await abap.statements.cast(eo_insert, this.mo_insert);
    await abap.statements.cast(eo_delete, this.mo_delete);
    await abap.statements.cast(eo_change, this.mo_change);
    await this.delete_empty_nodes({io_json: eo_insert, iv_keep_empty_arrays: iv_keep_empty_arrays});
    await this.delete_empty_nodes({io_json: eo_delete, iv_keep_empty_arrays: iv_keep_empty_arrays});
    await this.delete_empty_nodes({io_json: eo_change, iv_keep_empty_arrays: iv_keep_empty_arrays});
  }
  async diff_a_b(INPUT) {
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lv_path_a = new abap.types.String({qualifiedName: "STRING"});
    let lv_path_b = new abap.types.String({qualifiedName: "STRING"});
    let fs_node_a_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let fs_node_b_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    for await (const unique47 of abap.statements.loop(this.mo_json_a.get().z2ui5_if_ajson$mt_json_tree,{where: async (I) => {return abap.compare.eq(I.path, iv_path);},topEquals: {"path": iv_path}})) {
      fs_node_a_.assign(unique47);
      lv_path_a.set(abap.operators.concat(fs_node_a_.get().path,abap.operators.concat(fs_node_a_.get().name,new abap.types.Character(1).set('/'))));
      abap.statements.readTable(this.mo_json_b.get().z2ui5_if_ajson$mt_json_tree,{withTableKey: true,
        assigning: fs_node_b_,
        withKey: (i) => {return abap.compare.eq(i.path, fs_node_a_.get().path) && abap.compare.eq(i.name, fs_node_a_.get().name);},
        withKeyValue: [{key: (i) => {return i.path}, value: fs_node_a_.get().path},{key: (i) => {return i.name}, value: fs_node_a_.get().name}],
        usesTableLine: false,
        withKeySimple: {"path": fs_node_a_.get().path,"name": fs_node_a_.get().name}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        lv_path_b.set(abap.operators.concat(fs_node_b_.get().path,abap.operators.concat(fs_node_b_.get().name,new abap.types.Character(1).set('/'))));
        if (abap.compare.eq(fs_node_a_.get().type, fs_node_b_.get().type)) {
          let unique48 = fs_node_a_.get().type;
          if (abap.compare.eq(unique48, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
            await this.mo_insert.get().z2ui5_if_ajson$touch_array({iv_path: lv_path_a});
            await this.mo_change.get().z2ui5_if_ajson$touch_array({iv_path: lv_path_a});
            await this.mo_delete.get().z2ui5_if_ajson$touch_array({iv_path: lv_path_a});
            await this.diff_a_b({iv_path: lv_path_a});
          } else if (abap.compare.eq(unique48, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
            await this.diff_a_b({iv_path: lv_path_a});
          } else {
            if (abap.compare.ne(fs_node_a_.get().value, fs_node_b_.get().value)) {
              await this.mo_change.get().z2ui5_if_ajson$set({iv_path: lv_path_b, iv_val: fs_node_b_.get().value, iv_node_type: fs_node_b_.get().type});
            }
          }
        } else {
          let unique49 = fs_node_a_.get().type;
          if (abap.compare.eq(unique49, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
            await this.mo_delete.get().z2ui5_if_ajson$touch_array({iv_path: lv_path_a});
            await this.diff_a_b({iv_path: lv_path_a});
          } else if (abap.compare.eq(unique49, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
            await this.diff_a_b({iv_path: lv_path_a});
          } else {
            await this.mo_delete.get().z2ui5_if_ajson$set({iv_path: lv_path_a, iv_val: fs_node_a_.get().value, iv_node_type: fs_node_a_.get().type});
          }
          let unique50 = fs_node_b_.get().type;
          if (abap.compare.eq(unique50, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
            await this.mo_insert.get().z2ui5_if_ajson$touch_array({iv_path: lv_path_b});
            await this.diff_b_a({iv_path: lv_path_b});
          } else if (abap.compare.eq(unique50, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
            await this.diff_b_a({iv_path: lv_path_b});
          } else {
            await this.mo_insert.get().z2ui5_if_ajson$set({iv_path: lv_path_b, iv_val: fs_node_b_.get().value, iv_node_type: fs_node_b_.get().type});
          }
        }
      } else {
        let unique51 = fs_node_a_.get().type;
        if (abap.compare.eq(unique51, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
          await this.mo_delete.get().z2ui5_if_ajson$touch_array({iv_path: lv_path_a});
          await this.diff_a_b({iv_path: lv_path_a});
        } else if (abap.compare.eq(unique51, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
          await this.diff_a_b({iv_path: lv_path_a});
        } else {
          await this.mo_delete.get().z2ui5_if_ajson$set({iv_path: lv_path_a, iv_val: fs_node_a_.get().value, iv_node_type: fs_node_a_.get().type});
        }
      }
    }
  }
  async diff_b_a(INPUT) {
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_array = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_array) {iv_array.set(INPUT.iv_array);}
    if (INPUT === undefined || INPUT.iv_array === undefined) {iv_array = abap.builtin.abap_false;}
    let lv_path = new abap.types.String({qualifiedName: "STRING"});
    let fs_node_b_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    for await (const unique52 of abap.statements.loop(this.mo_json_b.get().z2ui5_if_ajson$mt_json_tree,{where: async (I) => {return abap.compare.eq(I.path, iv_path);},topEquals: {"path": iv_path}})) {
      fs_node_b_.assign(unique52);
      lv_path.set(abap.operators.concat(fs_node_b_.get().path,abap.operators.concat(fs_node_b_.get().name,new abap.types.Character(1).set('/'))));
      let unique53 = fs_node_b_.get().type;
      if (abap.compare.eq(unique53, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
        await this.mo_insert.get().z2ui5_if_ajson$touch_array({iv_path: lv_path});
        await this.diff_b_a({iv_path: lv_path, iv_array: abap.builtin.abap_true});
      } else if (abap.compare.eq(unique53, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
        await this.diff_b_a({iv_path: lv_path});
      } else {
        if (abap.compare.eq(iv_array, abap.builtin.abap_false)) {
          abap.statements.readTable(this.mo_json_a.get().z2ui5_if_ajson$mt_json_tree,{withTableKey: true,
            withKey: (i) => {return abap.compare.eq(i.path, fs_node_b_.get().path) && abap.compare.eq(i.name, fs_node_b_.get().name);},
            withKeyValue: [{key: (i) => {return i.path}, value: fs_node_b_.get().path},{key: (i) => {return i.name}, value: fs_node_b_.get().name}],
            usesTableLine: false,
            withKeySimple: {"path": fs_node_b_.get().path,"name": fs_node_b_.get().name}});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            await this.mo_insert.get().z2ui5_if_ajson$set({iv_path: lv_path, iv_val: fs_node_b_.get().value, iv_node_type: fs_node_b_.get().type});
          }
        } else {
          abap.statements.readTable(this.mo_insert.get().z2ui5_if_ajson$mt_json_tree,{withKey: (i) => {return abap.compare.eq(i.path, fs_node_b_.get().path) && abap.compare.eq(i.value, fs_node_b_.get().value);},
            withKeyValue: [{key: (i) => {return i.path}, value: fs_node_b_.get().path},{key: (i) => {return i.value}, value: fs_node_b_.get().value}],
            usesTableLine: false,
            withKeySimple: {"path": fs_node_b_.get().path,"value": fs_node_b_.get().value}});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            await this.mo_insert.get().z2ui5_if_ajson$push({iv_path: iv_path, iv_val: fs_node_b_.get().value});
          }
        }
      }
    }
  }
  async is_equal(INPUT) {
    let rv_yes = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let iv_json_a = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json_a) {iv_json_a.set(INPUT.iv_json_a);}
    let iv_json_b = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json_b) {iv_json_b.set(INPUT.iv_json_b);}
    let ii_json_a = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.ii_json_a) {ii_json_a.set(INPUT.ii_json_a);}
    let ii_json_b = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.ii_json_b) {ii_json_b.set(INPUT.ii_json_b);}
    let li_ins = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_del = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_mod = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    await this.diff({iv_json_a: iv_json_a, iv_json_b: iv_json_b, io_json_a: ii_json_a, io_json_b: ii_json_b, eo_insert: li_ins, eo_delete: li_del, eo_change: li_mod});
    rv_yes.set(abap.builtin.boolc(abap.compare.eq((await li_ins.get().z2ui5_if_ajson$is_empty()), abap.builtin.abap_true) && abap.compare.eq((await li_del.get().z2ui5_if_ajson$is_empty()), abap.builtin.abap_true) && abap.compare.eq((await li_mod.get().z2ui5_if_ajson$is_empty()), abap.builtin.abap_true)));
    return rv_yes;
  }
  async merge(INPUT) {
    let ro_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_json_a = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json_a) {iv_json_a.set(INPUT.iv_json_a);}
    let iv_json_b = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json_b) {iv_json_b.set(INPUT.iv_json_b);}
    let io_json_a = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.io_json_a) {io_json_a.set(INPUT.io_json_a);}
    let io_json_b = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.io_json_b) {io_json_b.set(INPUT.io_json_b);}
    let iv_keep_empty_arrays = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_empty_arrays) {iv_keep_empty_arrays.set(INPUT.iv_keep_empty_arrays);}
    if (INPUT === undefined || INPUT.iv_keep_empty_arrays === undefined) {iv_keep_empty_arrays = abap.builtin.abap_false;}
    this.mo_json_a.set((await this.normalize_input({iv_json: iv_json_a, io_json: io_json_a})));
    this.mo_json_b.set((await this.normalize_input({iv_json: iv_json_b, io_json: io_json_b})));
    this.mo_insert.set(this.mo_json_a);
    await this.diff_b_a({iv_path: new abap.types.Character(1).set('/')});
    await abap.statements.cast(ro_json, this.mo_insert);
    await this.delete_empty_nodes({io_json: ro_json, iv_keep_empty_arrays: iv_keep_empty_arrays});
    return ro_json;
  }
  async new() {
    return z2ui5_cl_ajson_utilities.new();
  }
  static async new() {
    let ro_instance = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON_UTILITIES", RTTIName: "\\CLASS=Z2UI5_CL_AJSON_UTILITIES"});
    ro_instance.set(await (new abap.Classes['Z2UI5_CL_AJSON_UTILITIES']()).constructor_());
    return ro_instance;
  }
  async normalize_input(INPUT) {
    let ro_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let io_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.io_json) {io_json.set(INPUT.io_json);}
    if (abap.compare.eq(abap.builtin.boolc(abap.compare.initial(iv_json)), abap.builtin.boolc(abap.compare.initial(io_json)))) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(51).set('Either supply JSON string or instance, but not both')});
    }
    if (abap.compare.initial(iv_json) === false) {
      ro_json.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: iv_json})));
    } else if (abap.compare.initial(io_json) === false) {
      ro_json.set(io_json);
    } else {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(37).set('Supply either JSON string or instance')});
    }
    return ro_json;
  }
  async sort(INPUT) {
    let rv_sorted = new abap.types.String({qualifiedName: "STRING"});
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let io_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    if (INPUT && INPUT.io_json) {io_json.set(INPUT.io_json);}
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    lo_json.set((await this.normalize_input({iv_json: iv_json, io_json: io_json})));
    rv_sorted.set((await lo_json.get().z2ui5_if_ajson$stringify({iv_indent: abap.IntegerFactory.get(2)})));
    return rv_sorted;
  }
}
abap.Classes['Z2UI5_CL_AJSON_UTILITIES'] = z2ui5_cl_ajson_utilities;
export {z2ui5_cl_ajson_utilities};
//# sourceMappingURL=z2ui5_cl_ajson_utilities.clas.mjs.map