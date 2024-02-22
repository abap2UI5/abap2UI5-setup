const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_mapping.clas.locals_def.abap// z2ui5_cl_ajson_mapping.clas.locals_imp.abap
class lcl_mapping_fields {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_FIELDS';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
  }
  async constructor_(INPUT) {
    let it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    if (INPUT && INPUT.it_mapping_fields) {it_mapping_fields.set(INPUT.it_mapping_fields);}
    let ls_mapping_field = new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {});
    for await (const unique38 of abap.statements.loop(it_mapping_fields)) {
      ls_mapping_field.set(unique38);
      ls_mapping_field.get().abap.set(abap.builtin.to_upper({val: ls_mapping_field.get().abap}));
      abap.statements.insertInternal({data: ls_mapping_field, table: this.mt_mapping_fields});
    }
    return this;
  }
  async z2ui5_if_ajson_mapping$to_abap(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    let ls_mapping_field = new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {});
    abap.statements.readTable(this.mt_mapping_fields,{keyName: "json",
      into: ls_mapping_field,
      withKey: (i) => {return abap.compare.eq(i.json, iv_name);},
      withKeyValue: [{key: (i) => {return i.json}, value: iv_name}],
      usesTableLine: false,
      withKeySimple: {"json": iv_name}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      rv_result.set(ls_mapping_field.get().abap);
    }
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
    let lv_field = new abap.types.String({qualifiedName: "STRING"});
    let ls_mapping_field = new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {});
    lv_field.set(abap.builtin.to_upper({val: iv_name}));
    abap.statements.readTable(this.mt_mapping_fields,{keyName: "abap",
      into: ls_mapping_field,
      withKey: (i) => {return abap.compare.eq(i.abap, lv_field);},
      withKeyValue: [{key: (i) => {return i.abap}, value: lv_field}],
      usesTableLine: false,
      withKeySimple: {"abap": lv_field}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      rv_result.set(ls_mapping_field.get().json);
    }
    return rv_result;
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_FIELDS'] = lcl_mapping_fields;
class lcl_rename {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_RENAME';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_RENAME_MAP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_RENAME_BY": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_RENAME_MAP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");}, "is_optional": " "}, "IV_RENAME_BY": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_rename_map = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");
    this.mv_rename_by = new abap.types.Integer({qualifiedName: "I"});
  }
  async constructor_(INPUT) {
    let it_rename_map = INPUT?.it_rename_map;
    if (it_rename_map?.getQualifiedName === undefined || it_rename_map.getQualifiedName() !== "Z2UI5_IF_AJSON_MAPPING=>TTY_RENAME_MAP") { it_rename_map = undefined; }
    if (it_rename_map === undefined) { it_rename_map = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map").set(INPUT.it_rename_map); }
    let iv_rename_by = INPUT?.iv_rename_by;
    if (iv_rename_by?.getQualifiedName === undefined || iv_rename_by.getQualifiedName() !== "I") { iv_rename_by = undefined; }
    if (iv_rename_by === undefined) { iv_rename_by = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_rename_by); }
    this.mt_rename_map.set(it_rename_map);
    this.mv_rename_by.set(iv_rename_by);
    return this;
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
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
    let lv_full_path = new abap.types.String({qualifiedName: "STRING"});
    let lv_pair_found = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let fs_r_ = new abap.types.FieldSymbol(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}));
    let unique39 = this.mv_rename_by;
    if (abap.compare.eq(unique39, abap.Classes['Z2UI5_CL_AJSON_MAPPING'].rename_by.get().attr_name)) {
      abap.statements.readTable(this.mt_rename_map,{keyName: "by_name",
        withTableKey: true,
        assigning: fs_r_,
        withKey: (i) => {return abap.compare.eq(i.from, cv_name);},
        withKeyValue: [{key: (i) => {return i.from}, value: cv_name}],
        usesTableLine: false,
        withKeySimple: {"from": cv_name}});
      lv_pair_found.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))));
    } else if (abap.compare.eq(unique39, abap.Classes['Z2UI5_CL_AJSON_MAPPING'].rename_by.get().full_path)) {
      lv_full_path.set(abap.operators.concat(is_node.get().path,cv_name));
      abap.statements.readTable(this.mt_rename_map,{keyName: "by_name",
        withTableKey: true,
        assigning: fs_r_,
        withKey: (i) => {return abap.compare.eq(i.from, lv_full_path);},
        withKeyValue: [{key: (i) => {return i.from}, value: lv_full_path}],
        usesTableLine: false,
        withKeySimple: {"from": lv_full_path}});
      lv_pair_found.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))));
    } else if (abap.compare.eq(unique39, abap.Classes['Z2UI5_CL_AJSON_MAPPING'].rename_by.get().pattern)) {
      lv_full_path.set(abap.operators.concat(is_node.get().path,cv_name));
      for await (const unique40 of abap.statements.loop(this.mt_rename_map)) {
        fs_r_.assign(unique40);
        if (abap.compare.cp(lv_full_path, fs_r_.get().from)) {
          lv_pair_found.set(abap.builtin.abap_true);
          break;
        }
      }
    } else {
      lv_pair_found.set(abap.builtin.abap_false);
    }
    if (abap.compare.eq(lv_pair_found, abap.builtin.abap_true)) {
      cv_name.set(fs_r_.get().to);
    }
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_RENAME'] = lcl_rename;
class lcl_mapping_to_upper {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_TO_UPPER';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MI_MAPPING_FIELDS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mi_mapping_fields = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
  }
  async constructor_(INPUT) {
    let it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    if (INPUT && INPUT.it_mapping_fields) {it_mapping_fields.set(INPUT.it_mapping_fields);}
    this.mi_mapping_fields.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_field_mapping({it_mapping_fields: it_mapping_fields})));
    return this;
  }
  async z2ui5_if_ajson_mapping$to_abap(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    rv_result.set((await this.mi_mapping_fields.get().z2ui5_if_ajson_mapping$to_abap({iv_path: iv_path, iv_name: iv_name})));
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
    rv_result.set((await this.mi_mapping_fields.get().z2ui5_if_ajson_mapping$to_json({iv_path: iv_path, iv_name: iv_name})));
    if (abap.compare.initial(rv_result) === false) {
      return rv_result;
    }
    rv_result.set(abap.builtin.to_upper({val: iv_name}));
    return rv_result;
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
    cv_name.set(abap.builtin.to_upper({val: cv_name}));
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_TO_UPPER'] = lcl_mapping_to_upper;
class lcl_mapping_to_lower {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_TO_LOWER';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MI_MAPPING_FIELDS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mi_mapping_fields = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
  }
  async constructor_(INPUT) {
    let it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    if (INPUT && INPUT.it_mapping_fields) {it_mapping_fields.set(INPUT.it_mapping_fields);}
    this.mi_mapping_fields.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_field_mapping({it_mapping_fields: it_mapping_fields})));
    return this;
  }
  async z2ui5_if_ajson_mapping$to_abap(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    rv_result.set((await this.mi_mapping_fields.get().z2ui5_if_ajson_mapping$to_abap({iv_path: iv_path, iv_name: iv_name})));
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
    rv_result.set((await this.mi_mapping_fields.get().z2ui5_if_ajson_mapping$to_json({iv_path: iv_path, iv_name: iv_name})));
    if (abap.compare.initial(rv_result) === false) {
      return rv_result;
    }
    rv_result.set(abap.builtin.to_lower({val: iv_name}));
    return rv_result;
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
    cv_name.set(abap.builtin.to_lower({val: cv_name}));
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_TO_LOWER'] = lcl_mapping_to_lower;
class lcl_mapping_camel {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_CAMEL';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_FIRST_JSON_UPPER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_MAPPING_FIELDS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}, "IV_FIRST_JSON_UPPER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_first_json_upper = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mi_mapping_fields = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
  }
  async constructor_(INPUT) {
    let it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    if (INPUT && INPUT.it_mapping_fields) {it_mapping_fields.set(INPUT.it_mapping_fields);}
    let iv_first_json_upper = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_first_json_upper) {iv_first_json_upper.set(INPUT.iv_first_json_upper);}
    if (INPUT === undefined || INPUT.iv_first_json_upper === undefined) {iv_first_json_upper = abap.builtin.abap_true;}
    this.mi_mapping_fields.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_field_mapping({it_mapping_fields: it_mapping_fields})));
    this.mv_first_json_upper.set(iv_first_json_upper);
    return this;
  }
  async z2ui5_if_ajson_mapping$to_abap(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    rv_result.set((await this.mi_mapping_fields.get().z2ui5_if_ajson_mapping$to_abap({iv_path: iv_path, iv_name: iv_name})));
    if (abap.compare.initial(rv_result) === false) {
      return rv_result;
    }
    rv_result.set(iv_name);
    abap.statements.replace({target: rv_result, all: true, with: new abap.types.String().set(`$1_$2`), regex: new abap.types.String().set(`([a-z])([A-Z])`)});
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
    
    let lt_tokens = abap.types.TableFactory.construct(new abap.types.Character(255, {"qualifiedName":"ty_token"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_from = new abap.types.Integer({qualifiedName: "I"});
    let fs_token_ = new abap.types.FieldSymbol(new abap.types.Character(255, {"qualifiedName":"ty_token"}));
    rv_result.set((await this.mi_mapping_fields.get().z2ui5_if_ajson_mapping$to_json({iv_path: iv_path, iv_name: iv_name})));
    if (abap.compare.initial(rv_result) === false) {
      return rv_result;
    }
    rv_result.set(iv_name);
    abap.statements.replace({target: rv_result, all: true, with: new abap.types.String().set(`*`), of: new abap.types.String().set(`__`)});
    abap.statements.translate(rv_result, "LOWER");
    abap.statements.translate(rv_result, `/_:_~_`);
    if (abap.compare.eq(this.mv_first_json_upper, abap.builtin.abap_true)) {
      lv_from.set(abap.IntegerFactory.get(1));
    } else {
      lv_from.set(abap.IntegerFactory.get(2));
    }
    abap.statements.split({source: rv_result, at: new abap.types.String().set(`_`), table: lt_tokens});
    for await (const unique41 of abap.statements.loop(lt_tokens,{from: lv_from})) {
      fs_token_.assign(unique41);
      abap.statements.translate(new abap.OffsetLength(fs_token_, {length: 1}), "UPPER");
    }
    abap.statements.concatenate({source: [lt_tokens], target: rv_result, lines: true});
    abap.statements.replace({target: rv_result, all: true, with: new abap.types.String().set(`_`), of: new abap.types.String().set(`*`)});
    return rv_result;
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_CAMEL'] = lcl_mapping_camel;
class lcl_compound_mapper {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_COMPOUND_MAPPER';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_QUEUE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_ajson_mapping=>ty_table_of");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IT_QUEUE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_ajson_mapping=>ty_table_of");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_queue = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_ajson_mapping=>ty_table_of");
  }
  async constructor_(INPUT) {
    let it_queue = INPUT?.it_queue;
    if (it_queue?.getQualifiedName === undefined || it_queue.getQualifiedName() !== "Z2UI5_IF_AJSON_MAPPING=>TY_TABLE_OF") { it_queue = undefined; }
    if (it_queue === undefined) { it_queue = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_ajson_mapping=>ty_table_of").set(INPUT.it_queue); }
    this.mt_queue.set(it_queue);
    return this;
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
    let ls_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let li_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    ls_node.set(is_node);
    for await (const unique42 of abap.statements.loop(this.mt_queue)) {
      li_mapper.set(unique42);
      await li_mapper.get().z2ui5_if_ajson_mapping$rename_node({is_node: ls_node, cv_name: cv_name});
      ls_node.get().name.set(cv_name);
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
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_COMPOUND_MAPPER'] = lcl_compound_mapper;
class lcl_to_snake {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_TO_SNAKE';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {};
  static METHODS = {};
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
    abap.statements.replace({target: cv_name, all: true, with: new abap.types.String().set(`$1_$2`), regex: new abap.types.String().set(`([a-z])([A-Z])`)});
    cv_name.set(abap.builtin.to_lower({val: cv_name}));
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
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_TO_SNAKE'] = lcl_to_snake;
class lcl_to_camel {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_TO_CAMEL';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_MAPPING","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_FIRST_JSON_UPPER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_FIRST_JSON_UPPER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_first_json_upper = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  }
  async constructor_(INPUT) {
    let iv_first_json_upper = INPUT?.iv_first_json_upper;
    if (iv_first_json_upper?.getQualifiedName === undefined || iv_first_json_upper.getQualifiedName() !== "ABAP_BOOL") { iv_first_json_upper = undefined; }
    if (iv_first_json_upper === undefined) { iv_first_json_upper = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_first_json_upper); }
    this.mv_first_json_upper.set(iv_first_json_upper);
    return this;
  }
  async z2ui5_if_ajson_mapping$rename_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let cv_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"});
    if (INPUT && INPUT.cv_name) {cv_name = INPUT.cv_name;}
    
    let lc_forced_underscore_marker = new abap.types.Character(1, {});
    lc_forced_underscore_marker.set(abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab);
    let lt_tokens = abap.types.TableFactory.construct(new abap.types.Character(255, {"qualifiedName":"lty_token"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_from = new abap.types.Integer({qualifiedName: "I"});
    let fs_token_ = new abap.types.FieldSymbol(new abap.types.Character(255, {"qualifiedName":"lty_token"}));
    if (abap.compare.eq(this.mv_first_json_upper, abap.builtin.abap_true)) {
      lv_from.set(abap.IntegerFactory.get(1));
    } else {
      lv_from.set(abap.IntegerFactory.get(2));
    }
    abap.statements.replace({target: cv_name, all: true, with: lc_forced_underscore_marker, of: new abap.types.String().set(`__`)});
    abap.statements.split({source: cv_name, at: new abap.types.String().set(`_`), table: lt_tokens});
    await abap.statements.deleteInternal(lt_tokens,{where: (I) => {return abap.compare.initial(I.table_line);}});
    for await (const unique43 of abap.statements.loop(lt_tokens,{from: lv_from})) {
      fs_token_.assign(unique43);
      abap.statements.translate(new abap.OffsetLength(fs_token_, {offset: 0, length: 1}), "UPPER");
    }
    abap.statements.concatenate({source: [lt_tokens], target: cv_name, lines: true});
    abap.statements.replace({target: cv_name, all: true, with: new abap.types.String().set(`_`), of: lc_forced_underscore_marker});
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
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_TO_CAMEL'] = lcl_to_camel;
export {lcl_mapping_fields, lcl_rename, lcl_mapping_to_upper, lcl_mapping_to_lower, lcl_mapping_camel, lcl_compound_mapper, lcl_to_snake, lcl_to_camel};
//# sourceMappingURL=z2ui5_cl_ajson_mapping.clas.locals.mjs.map