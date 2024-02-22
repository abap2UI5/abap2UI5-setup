const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_filter_lib.clas.locals_imp.abap
class lcl_empty_filter {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_EMPTY_FILTER';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_FILTER"];
  static ATTRIBUTES = {"Z2UI5_IF_AJSON_FILTER~VISIT_TYPE": {"type": () => {return new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
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
    rv_keep.set(abap.builtin.boolc((abap.compare.eq(iv_visit, abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value) && abap.compare.initial(is_node.get().value) === false) || (abap.compare.ne(iv_visit, abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value) && abap.compare.gt(is_node.get().children, abap.IntegerFactory.get(0)))));
    return rv_keep;
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_EMPTY_FILTER'] = lcl_empty_filter;
lcl_empty_filter.z2ui5_if_ajson_filter$visit_type = new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});
lcl_empty_filter.z2ui5_if_ajson_filter$visit_type.get().value.set(0);
lcl_empty_filter.z2ui5_if_ajson_filter$visit_type.get().open.set(1);
lcl_empty_filter.z2ui5_if_ajson_filter$visit_type.get().close.set(2);
class lcl_paths_filter {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_PATHS_FILTER';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_FILTER"];
  static ATTRIBUTES = {"MT_SKIP_PATHS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_PATTERN_SEARCH": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_AJSON_FILTER~VISIT_TYPE": {"type": () => {return new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_SKIP_PATHS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "IV_SKIP_PATHS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_PATTERN_SEARCH": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_skip_paths = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");
    this.mv_pattern_search = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.z2ui5_if_ajson_filter$visit_type = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type;
  }
  async z2ui5_if_ajson_filter$keep_node(INPUT) {
    let rv_keep = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let iv_visit = new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"});
    if (INPUT && INPUT.iv_visit) {iv_visit.set(INPUT.iv_visit);}
    if (INPUT === undefined || INPUT.iv_visit === undefined) {iv_visit = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value;}
    let lv_full_path = new abap.types.String({qualifiedName: "STRING"});
    let fs_p_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    lv_full_path.set(abap.operators.concat(is_node.get().path,is_node.get().name));
    if (abap.compare.eq(this.mv_pattern_search, abap.builtin.abap_true)) {
      rv_keep.set(abap.builtin.abap_true);
      for await (const unique33 of abap.statements.loop(this.mt_skip_paths)) {
        fs_p_.assign(unique33);
        if (abap.compare.cp(lv_full_path, fs_p_)) {
          rv_keep.set(abap.builtin.abap_false);
          break;
        }
      }
    } else {
      abap.statements.readTable(this.mt_skip_paths,{withKey: (i) => {return abap.compare.eq(i.table_line, lv_full_path);},
        withKeyValue: [{key: (i) => {return i.table_line}, value: lv_full_path}],
        usesTableLine: true,
        withKeySimple: {"table_line": lv_full_path}});
      rv_keep.set(abap.builtin.boolc(abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))));
    }
    return rv_keep;
  }
  async constructor_(INPUT) {
    let it_skip_paths = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (INPUT && INPUT.it_skip_paths) {it_skip_paths.set(INPUT.it_skip_paths);}
    let iv_skip_paths = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_skip_paths) {iv_skip_paths.set(INPUT.iv_skip_paths);}
    let iv_pattern_search = INPUT?.iv_pattern_search;
    if (iv_pattern_search?.getQualifiedName === undefined || iv_pattern_search.getQualifiedName() !== "ABAP_BOOL") { iv_pattern_search = undefined; }
    if (iv_pattern_search === undefined) { iv_pattern_search = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_pattern_search); }
    let lv_s = new abap.types.String({qualifiedName: "STRING"});
    let lt_tab = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let fs_s_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    if (abap.compare.eq(abap.builtin.boolc(abap.compare.initial(iv_skip_paths)), abap.builtin.boolc(abap.compare.initial(it_skip_paths)))) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(24).set('no filter path specified')});
    }
    for await (const unique34 of abap.statements.loop(it_skip_paths)) {
      lv_s.set(unique34);
      lv_s.set(abap.builtin.to_lower({val: lv_s}));
      abap.statements.append({source: lv_s, target: lt_tab});
    }
    if (abap.compare.initial(iv_skip_paths) === false) {
      abap.statements.split({source: iv_skip_paths, at: new abap.types.Character(1).set(','), table: lt_tab});
      for await (const unique35 of abap.statements.loop(lt_tab)) {
        fs_s_.assign(unique35);
        if (abap.compare.initial(fs_s_)) {
          await abap.statements.deleteInternal(lt_tab,{index: abap.builtin.sy.get().tabix});
          continue;
        }
        fs_s_.set(abap.builtin.condense({val: abap.builtin.to_lower({val: fs_s_})}));
      }
    }
    abap.statements.sort(lt_tab,{by: [{component: "table_line"}]});
    await abap.statements.deleteInternal(lt_tab,{adjacent: true});
    this.mt_skip_paths.set(lt_tab);
    this.mv_pattern_search.set(iv_pattern_search);
    return this;
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_PATHS_FILTER'] = lcl_paths_filter;
lcl_paths_filter.z2ui5_if_ajson_filter$visit_type = new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});
lcl_paths_filter.z2ui5_if_ajson_filter$visit_type.get().value.set(0);
lcl_paths_filter.z2ui5_if_ajson_filter$visit_type.get().open.set(1);
lcl_paths_filter.z2ui5_if_ajson_filter$visit_type.get().close.set(2);
class lcl_and_filter {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_AND_FILTER';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_FILTER"];
  static ATTRIBUTES = {"MT_FILTERS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "z2ui5_if_ajson_filter=>ty_filter_tab");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_AJSON_FILTER~VISIT_TYPE": {"type": () => {return new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_FILTERS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "z2ui5_if_ajson_filter=>ty_filter_tab");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_filters = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "z2ui5_if_ajson_filter=>ty_filter_tab");
    this.z2ui5_if_ajson_filter$visit_type = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type;
  }
  async z2ui5_if_ajson_filter$keep_node(INPUT) {
    let rv_keep = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let iv_visit = new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"});
    if (INPUT && INPUT.iv_visit) {iv_visit.set(INPUT.iv_visit);}
    if (INPUT === undefined || INPUT.iv_visit === undefined) {iv_visit = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value;}
    let li_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    rv_keep.set(abap.builtin.abap_true);
    for await (const unique36 of abap.statements.loop(this.mt_filters)) {
      li_filter.set(unique36);
      rv_keep.set((await li_filter.get().z2ui5_if_ajson_filter$keep_node({is_node: is_node, iv_visit: iv_visit})));
      if (abap.compare.eq(rv_keep, abap.builtin.abap_false)) {
        return rv_keep;
      }
    }
    return rv_keep;
  }
  async constructor_(INPUT) {
    let it_filters = INPUT?.it_filters;
    if (it_filters?.getQualifiedName === undefined || it_filters.getQualifiedName() !== "Z2UI5_IF_AJSON_FILTER=>TY_FILTER_TAB") { it_filters = undefined; }
    if (it_filters === undefined) { it_filters = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "z2ui5_if_ajson_filter=>ty_filter_tab").set(INPUT.it_filters); }
    let li_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    for await (const unique37 of abap.statements.loop(it_filters,{where: async (I) => {return abap.compare.initial(I.table_line) === false;}})) {
      li_filter.set(unique37);
      abap.statements.append({source: li_filter, target: this.mt_filters});
    }
    return this;
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_AND_FILTER'] = lcl_and_filter;
lcl_and_filter.z2ui5_if_ajson_filter$visit_type = new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});
lcl_and_filter.z2ui5_if_ajson_filter$visit_type.get().value.set(0);
lcl_and_filter.z2ui5_if_ajson_filter$visit_type.get().open.set(1);
lcl_and_filter.z2ui5_if_ajson_filter$visit_type.get().close.set(2);
export {lcl_empty_filter, lcl_paths_filter, lcl_and_filter};
//# sourceMappingURL=z2ui5_cl_ajson_filter_lib.clas.locals.mjs.map