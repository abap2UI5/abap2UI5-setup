const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson.clas.locals_imp.abap
class lif_kind {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"ANY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "DATE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "TIME": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "PACKED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "TABLE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "STRUCT_FLAT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "STRUCT_DEEP": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "DATA_REF": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "OBJECT_REF": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ENUM": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "NUMERIC": {"type": () => {return new abap.types.Structure({"int1": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "int2": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "int4": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "int8": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "float": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "packed": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "decfloat16": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "decfloat34": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "TEXTS": {"type": () => {return new abap.types.Structure({"char": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "numc": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "string": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "BINARY": {"type": () => {return new abap.types.Structure({"hex": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "xstring": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "DEEP_TARGETS": {"type": () => {return new abap.types.Structure({"table": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "struct_flat": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "struct_deep": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "data_ref": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "object_ref": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'] = lif_kind;
lif_kind.lif_kind$any = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$any.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_any);
lif_kind.lif_kind$date = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$date.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date);
lif_kind.lif_kind$time = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$time.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time);
lif_kind.lif_kind$packed = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$packed.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed);
lif_kind.lif_kind$table = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$table.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_table);
lif_kind.lif_kind$struct_flat = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$struct_flat.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_struct1);
lif_kind.lif_kind$struct_deep = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$struct_deep.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_struct2);
lif_kind.lif_kind$data_ref = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$data_ref.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_dref);
lif_kind.lif_kind$object_ref = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$object_ref.set(abap.Classes['CL_ABAP_TYPEDESCR'].typekind_oref);
lif_kind.lif_kind$enum = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
lif_kind.lif_kind$enum.set('k');
lif_kind.lif_kind$numeric = new abap.types.Structure({"int1": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "int2": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "int4": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "int8": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "float": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "packed": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "decfloat16": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "decfloat34": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});
lif_kind.lif_kind$numeric.get().int1.set('b');
lif_kind.lif_kind$numeric.get().int2.set('s');
lif_kind.lif_kind$numeric.get().int4.set('I');
lif_kind.lif_kind$numeric.get().int8.set('8');
lif_kind.lif_kind$numeric.get().float.set('F');
lif_kind.lif_kind$numeric.get().packed.set('P');
lif_kind.lif_kind$numeric.get().decfloat16.set('a');
lif_kind.lif_kind$numeric.get().decfloat34.set('e');
lif_kind.lif_kind$texts = new abap.types.Structure({"char": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "numc": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "string": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});
lif_kind.lif_kind$texts.get().char.set('C');
lif_kind.lif_kind$texts.get().numc.set('N');
lif_kind.lif_kind$texts.get().string.set('g');
lif_kind.lif_kind$binary = new abap.types.Structure({"hex": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "xstring": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});
lif_kind.lif_kind$binary.get().hex.set('X');
lif_kind.lif_kind$binary.get().xstring.set('y');
lif_kind.lif_kind$deep_targets = new abap.types.Structure({"table": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "struct_flat": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "struct_deep": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "data_ref": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "object_ref": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"})}, undefined, undefined, {}, {});
lif_kind.lif_kind$deep_targets.get().table.set('h');
lif_kind.lif_kind$deep_targets.get().struct_flat.set('u');
lif_kind.lif_kind$deep_targets.get().struct_deep.set('v');
lif_kind.lif_kind$deep_targets.get().data_ref.set('l');
lif_kind.lif_kind$deep_targets.get().object_ref.set('r');
lif_kind.ty_kind = new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"});
class lcl_utils {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_UTILS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"NORMALIZE_PATH": {"visibility": "U", "parameters": {"RV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SPLIT_PATH": {"visibility": "U", "parameters": {"RV_PATH_NAME": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "VALIDATE_ARRAY_INDEX": {"visibility": "U", "parameters": {"RV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "STRING_TO_XSTRING_UTF8": {"visibility": "U", "parameters": {"RV_XSTR": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}, "IV_STR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async string_to_xstring_utf8(INPUT) {
    return lcl_utils.string_to_xstring_utf8(INPUT);
  }
  static async string_to_xstring_utf8(INPUT) {
    let rv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
    let iv_str = INPUT?.iv_str;
    if (iv_str?.getQualifiedName === undefined || iv_str.getQualifiedName() !== "STRING") { iv_str = undefined; }
    if (iv_str === undefined) { iv_str = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_str); }
    let lo_conv = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let lv_out_ce = new abap.types.String({qualifiedName: "STRING"});
    lv_out_ce.set(new abap.types.Character(19).set('CL_ABAP_CONV_OUT_CE'));
    try {
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_out === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_out === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      lo_conv.set(await abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_out());
      if (lo_conv.get().if_abap_conv_out$convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (lo_conv.get().if_abap_conv_out$convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      rv_xstr.set(await lo_conv.get().if_abap_conv_out$convert({source: iv_str}));
    } catch (e) {
      if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
        if (abap.Classes[lv_out_ce.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
        lo_conv.set(await abap.Classes[lv_out_ce.get().trimEnd()].create({encoding: new abap.types.Character(5).set('UTF-8')}));
        if (lo_conv.get().convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (lo_conv.get().convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        await lo_conv.get().convert({data: iv_str,buffer: rv_xstr});
      } else {
        throw e;
      }
    }
    return rv_xstr;
  }
  async validate_array_index(INPUT) {
    return lcl_utils.validate_array_index(INPUT);
  }
  static async validate_array_index(INPUT) {
    let rv_index = new abap.types.Integer({qualifiedName: "I"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let iv_index = INPUT?.iv_index;
    if (iv_index?.getQualifiedName === undefined || iv_index.getQualifiedName() !== "STRING") { iv_index = undefined; }
    if (iv_index === undefined) { iv_index = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_index); }
    if (!abap.compare.co(iv_index, new abap.types.Character(10).set('0123456789'))) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Cannot add non-numeric key [${abap.templateFormatting(iv_index)}] to array [${abap.templateFormatting(iv_path)}]`)});
    }
    rv_index.set(iv_index);
    if (abap.compare.eq(rv_index, abap.IntegerFactory.get(0))) {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Cannot add zero key to array [${abap.templateFormatting(iv_path)}]`)});
    }
    return rv_index;
  }
  async normalize_path(INPUT) {
    return lcl_utils.normalize_path(INPUT);
  }
  static async normalize_path(INPUT) {
    let rv_path = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    rv_path.set(iv_path);
    if (abap.compare.eq(abap.builtin.strlen({val: rv_path}), abap.IntegerFactory.get(0))) {
      rv_path.set(new abap.types.Character(1).set('/'));
    }
    if (abap.compare.ne(rv_path.getOffset({offset: 0, length: 1}), new abap.types.Character(1).set('/'))) {
      rv_path.set(abap.operators.concat(new abap.types.Character(1).set('/'),rv_path));
    }
    if (abap.compare.ne(abap.builtin.substring({val: rv_path, off: abap.operators.minus(abap.builtin.strlen({val: rv_path}),abap.IntegerFactory.get(1))}), new abap.types.Character(1).set('/'))) {
      rv_path.set(abap.operators.concat(rv_path,new abap.types.Character(1).set('/')));
    }
    return rv_path;
  }
  async split_path(INPUT) {
    return lcl_utils.split_path(INPUT);
  }
  static async split_path(INPUT) {
    let rv_path_name = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lv_offs = new abap.types.Integer({qualifiedName: "I"});
    let lv_len = new abap.types.Integer({qualifiedName: "I"});
    let lv_trim_slash = new abap.types.Integer({qualifiedName: "I"});
    lv_len.set(abap.builtin.strlen({val: iv_path}));
    if (abap.compare.eq(lv_len, abap.IntegerFactory.get(0)) || abap.compare.eq(iv_path, new abap.types.Character(1).set('/'))) {
      return rv_path_name;
    }
    if (abap.compare.eq(abap.builtin.substring({val: iv_path, off: abap.operators.minus(lv_len,abap.IntegerFactory.get(1))}), new abap.types.Character(1).set('/'))) {
      lv_trim_slash.set(abap.IntegerFactory.get(1));
    }
    lv_offs.set(abap.builtin.find({val: abap.builtin.reverse({val: iv_path}), sub: new abap.types.Character(1).set('/'), off: lv_trim_slash}));
    if (abap.compare.eq(lv_offs, abap.IntegerFactory.get(-1))) {
      lv_offs.set(lv_len);
    }
    lv_offs.set(abap.operators.minus(lv_len,lv_offs));
    rv_path_name.get().path.set((await this.normalize_path({iv_path: abap.builtin.substring({val: iv_path, len: lv_offs})})));
    rv_path_name.get().name.set(abap.builtin.substring({val: iv_path, off: lv_offs, len: abap.operators.minus(abap.operators.minus(lv_len,lv_offs),lv_trim_slash)}));
    return rv_path_name;
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'] = lcl_utils;
class lcl_json_parser {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_STACK": {"type": () => {return abap.types.TableFactory.construct(new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {})), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_stack_tt");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_STACK_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"RAISE": {"visibility": "I", "parameters": {"IV_ERROR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "_PARSE": {"visibility": "I", "parameters": {"RT_JSON_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "_GET_LOCATION": {"visibility": "I", "parameters": {"RV_LOCATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_OFFSET": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "PARSE": {"visibility": "U", "parameters": {"RT_JSON_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}, "IV_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_stack = abap.types.TableFactory.construct(new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {})), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_stack_tt");
    this.mv_stack_path = new abap.types.String({qualifiedName: "STRING"});
    this.mv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async parse(INPUT) {
    let rt_json_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let iv_json = INPUT?.iv_json;
    if (iv_json?.getQualifiedName === undefined || iv_json.getQualifiedName() !== "STRING") { iv_json = undefined; }
    if (iv_json === undefined) { iv_json = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_json); }
    let iv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_item_order) {iv_keep_item_order.set(INPUT.iv_keep_item_order);}
    if (INPUT === undefined || INPUT.iv_keep_item_order === undefined) {iv_keep_item_order = abap.builtin.abap_false;}
    let lx_sxml_parse = new abap.types.ABAPObject({qualifiedName: "CX_SXML_PARSE_ERROR", RTTIName: "\\CLASS=CX_SXML_PARSE_ERROR"});
    let lx_sxml = new abap.types.ABAPObject({qualifiedName: "CX_DYNAMIC_CHECK", RTTIName: "\\CLASS=CX_DYNAMIC_CHECK"});
    let lv_location = new abap.types.String({qualifiedName: "STRING"});
    this.mv_keep_item_order.set(iv_keep_item_order);
    try {
      rt_json_tree.set((await this._parse({iv_json: iv_json})));
    } catch (e) {
      if ((abap.Classes['CX_SXML_PARSE_ERROR'] && e instanceof abap.Classes['CX_SXML_PARSE_ERROR'])) {
        lx_sxml_parse.set(e);
        lv_location.set((await this._get_location({iv_json: iv_json, iv_offset: lx_sxml_parse.get().xml_offset})));
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Json parsing error (SXML): ${abap.templateFormatting((await lx_sxml_parse.get().if_message$get_text()))}`), iv_location: lv_location});
      } else if ((abap.Classes['CX_DYNAMIC_CHECK'] && e instanceof abap.Classes['CX_DYNAMIC_CHECK'])) {
        lx_sxml.set(e);
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Json parsing error (SXML): ${abap.templateFormatting((await lx_sxml.get().if_message$get_text()))}`), iv_location: new abap.types.Character(7).set('@PARSER')});
      } else {
        throw e;
      }
    }
    return rt_json_tree;
  }
  async _get_location(INPUT) {
    let rv_location = new abap.types.String({qualifiedName: "STRING"});
    let iv_json = INPUT?.iv_json;
    if (iv_json?.getQualifiedName === undefined || iv_json.getQualifiedName() !== "STRING") { iv_json = undefined; }
    if (iv_json === undefined) { iv_json = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_json); }
    let iv_offset = INPUT?.iv_offset;
    if (iv_offset?.getQualifiedName === undefined || iv_offset.getQualifiedName() !== "I") { iv_offset = undefined; }
    if (iv_offset === undefined) { iv_offset = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.iv_offset); }
    let lv_json = new abap.types.String({qualifiedName: "STRING"});
    let lv_offset = new abap.types.Integer({qualifiedName: "I"});
    let lt_text = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_text = new abap.types.String({qualifiedName: "STRING"});
    let lv_line = new abap.types.Integer({qualifiedName: "I"});
    let lv_pos = new abap.types.Integer({qualifiedName: "I"});
    lv_offset.set(iv_offset);
    if (abap.compare.lt(lv_offset, abap.IntegerFactory.get(0))) {
      lv_offset.set(abap.IntegerFactory.get(0));
    }
    if (abap.compare.gt(lv_offset, abap.builtin.strlen({val: iv_json}))) {
      lv_offset.set(abap.builtin.strlen({val: iv_json}));
    }
    lv_json.set(iv_json.getOffset({length: lv_offset}));
    abap.statements.replace({target: lv_json, all: true, with: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, of: abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf});
    abap.statements.split({source: lv_json, at: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, table: lt_text});
    lv_line.set(abap.builtin.lines({val: lt_text}));
    if (abap.compare.eq(lv_line, abap.IntegerFactory.get(0))) {
      lv_line.set(abap.IntegerFactory.get(1));
      lv_pos.set(abap.IntegerFactory.get(1));
    } else {
      abap.statements.readTable(lt_text,{index: lv_line,
        into: lv_text});
      lv_pos.set(abap.operators.add(abap.builtin.strlen({val: lv_text}),abap.IntegerFactory.get(1)));
    }
    rv_location.set(new abap.types.String().set(`Line ${abap.templateFormatting(lv_line)}, Offset ${abap.templateFormatting(lv_pos)}`));
    return rv_location;
  }
  async _parse(INPUT) {
    let rt_json_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
    let iv_json = INPUT?.iv_json;
    if (iv_json?.getQualifiedName === undefined || iv_json.getQualifiedName() !== "STRING") { iv_json = undefined; }
    if (iv_json === undefined) { iv_json = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_json); }
    let lo_reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER", RTTIName: "\\INTERFACE=IF_SXML_READER"});
    let lr_stack_top = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lo_node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE", RTTIName: "\\INTERFACE=IF_SXML_NODE"});
    let fs_item_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let lt_attributes = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
    let lo_attr = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_SXML_ATTRIBUTE"});
    let lo_open = new abap.types.ABAPObject({qualifiedName: "IF_SXML_OPEN_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_OPEN_ELEMENT"});
    let lo_close = new abap.types.ABAPObject({qualifiedName: "IF_SXML_CLOSE_ELEMENT", RTTIName: "\\INTERFACE=IF_SXML_CLOSE_ELEMENT"});
    let lo_value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE_NODE", RTTIName: "\\INTERFACE=IF_SXML_VALUE_NODE"});
    abap.statements.clear(this.mt_stack);
    abap.statements.clear(this.mv_stack_path);
    if (abap.compare.initial(iv_json)) {
      return rt_json_tree;
    }
    lo_reader.set((await abap.Classes['CL_SXML_STRING_READER'].create({input: (await abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_UTILS'].string_to_xstring_utf8({iv_str: iv_json}))})));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique1 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique1++);
      lo_node.set((await lo_reader.get().if_sxml_reader$read_next_node()));
      if (abap.compare.initial(lo_node)) {
        break;
      }
      let unique2 = lo_node.get().if_sxml_node$type;
      if (abap.compare.eq(unique2, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        await abap.statements.cast(lo_open, lo_node);
        fs_item_.assign(rt_json_tree.appendInitial());
        fs_item_.get().type.set(lo_open.get().if_sxml_open_element$qname.get().name);
        abap.statements.readTable(this.mt_stack,{index: abap.IntegerFactory.get(1),
          into: lr_stack_top});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          fs_item_.get().path.set(this.mv_stack_path);
          lr_stack_top.get().children.set(abap.operators.add(lr_stack_top.get().children,abap.IntegerFactory.get(1)));
          if (abap.compare.eq(lr_stack_top.get().type, new abap.types.String().set(`array`))) {
            fs_item_.get().name.set(new abap.types.String().set(`${abap.templateFormatting(lr_stack_top.get().children)}`));
            fs_item_.get().index.set(lr_stack_top.get().children);
          } else {
            lt_attributes.set((await lo_open.get().if_sxml_open_element$get_attributes()));
            for await (const unique3 of abap.statements.loop(lt_attributes)) {
              lo_attr.set(unique3);
              if (abap.compare.eq(lo_attr.get().if_sxml_attribute$qname.get().name, new abap.types.Character(4).set('name')) && abap.compare.eq(lo_attr.get().if_sxml_attribute$value_type, abap.Classes['IF_SXML_VALUE'].if_sxml_value$co_vt_text)) {
                fs_item_.get().name.set((await lo_attr.get().if_sxml_attribute$get_value()));
              }
            }
            if (abap.compare.eq(this.mv_keep_item_order, abap.builtin.abap_true)) {
              fs_item_.get().order.set(lr_stack_top.get().children);
            }
          }
          if (abap.compare.initial(fs_item_.get().name)) {
            await this.raise({iv_error: new abap.types.Character(34).set('Node without name (maybe not JSON)')});
          }
        }
        lr_stack_top.assign(fs_item_.getPointer());
        abap.statements.insertInternal({data: lr_stack_top, index: abap.IntegerFactory.get(1), table: this.mt_stack});
        this.mv_stack_path.set(abap.operators.concat(this.mv_stack_path,abap.operators.concat(fs_item_.get().name,new abap.types.Character(1).set('/'))));
      } else if (abap.compare.eq(unique2, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        await abap.statements.cast(lo_close, lo_node);
        abap.statements.readTable(this.mt_stack,{index: abap.IntegerFactory.get(1),
          into: lr_stack_top});
        await abap.statements.deleteInternal(this.mt_stack,{index: abap.IntegerFactory.get(1)});
        if (abap.compare.ne(lo_close.get().if_sxml_close_element$qname.get().name, lr_stack_top.get().type)) {
          await this.raise({iv_error: new abap.types.Character(28).set('Unexpected closing node type')});
        }
        this.mv_stack_path.set(abap.builtin.substring({val: this.mv_stack_path, len: abap.operators.add(abap.builtin.find({val: this.mv_stack_path, sub: new abap.types.Character(1).set('/'), occ: abap.IntegerFactory.get(-2)}),abap.IntegerFactory.get(1))}));
      } else if (abap.compare.eq(unique2, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        await abap.statements.cast(lo_value, lo_node);
        fs_item_.get().value.set((await lo_value.get().if_sxml_value_node$get_value()));
      } else {
        await this.raise({iv_error: new abap.types.Character(20).set('Unexpected node type')});
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    if (abap.compare.gt(abap.builtin.lines({val: this.mt_stack}), abap.IntegerFactory.get(0))) {
      await this.raise({iv_error: new abap.types.Character(22).set('Unexpected end of data')});
    }
    return rt_json_tree;
  }
  async raise(INPUT) {
    let iv_error = INPUT?.iv_error;
    if (iv_error?.getQualifiedName === undefined || iv_error.getQualifiedName() !== "STRING") { iv_error = undefined; }
    if (iv_error === undefined) { iv_error = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_error); }
    await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_location: this.mv_stack_path, iv_msg: new abap.types.String().set(`JSON PARSER: ${abap.templateFormatting(iv_error)} @ ${abap.templateFormatting(this.mv_stack_path)}`)});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_PARSER'] = lcl_json_parser;
lcl_json_parser.ty_stack_tt = abap.types.TableFactory.construct(new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {})), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_json_parser=>ty_stack_tt");
class lcl_json_serializer {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"GV_COMMA_WITH_LF": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "MT_JSON_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MT_BUFFER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_INDENT_STEP": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_LEVEL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"ESCAPE_STRING": {"visibility": "I", "parameters": {"RV_ESCAPED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_UNESCAPED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "_STRINGIFY": {"visibility": "I", "parameters": {"RV_JSON_STRING": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "STRINGIFY_NODE": {"visibility": "I", "parameters": {"IS_NODE": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});}, "is_optional": " "}}},
  "STRINGIFY_SET": {"visibility": "I", "parameters": {"IV_PARENT_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_ARRAY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "STRINGIFY": {"visibility": "U", "parameters": {"RV_JSON_STRING": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IT_JSON_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "is_optional": " "}, "IV_INDENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "CLASS_CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.gv_comma_with_lf = lcl_json_serializer.gv_comma_with_lf;
    this.mt_json_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
    this.mv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_buffer = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    this.mv_indent_step = new abap.types.Integer({qualifiedName: "I"});
    this.mv_level = new abap.types.Integer({qualifiedName: "I"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async class_constructor() {
    return lcl_json_serializer.class_constructor();
  }
  static async class_constructor() {
    lcl_json_serializer.gv_comma_with_lf.set(abap.operators.concat(new abap.types.Character(1).set(','),abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline));
  }
  async stringify(INPUT) {
    return lcl_json_serializer.stringify(INPUT);
  }
  static async stringify(INPUT) {
    let rv_json_string = new abap.types.String({qualifiedName: "STRING"});
    let it_json_tree = INPUT?.it_json_tree;
    if (it_json_tree?.getQualifiedName === undefined || it_json_tree.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODES_TS") { it_json_tree = undefined; }
    if (it_json_tree === undefined) { it_json_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts").set(INPUT.it_json_tree); }
    let iv_indent = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_indent) {iv_indent.set(INPUT.iv_indent);}
    if (INPUT === undefined || INPUT.iv_indent === undefined) {iv_indent = abap.IntegerFactory.get(0);}
    let iv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_keep_item_order) {iv_keep_item_order.set(INPUT.iv_keep_item_order);}
    if (INPUT === undefined || INPUT.iv_keep_item_order === undefined) {iv_keep_item_order = abap.builtin.abap_false;}
    let lo = new abap.types.ABAPObject({qualifiedName: "LCL_JSON_SERIALIZER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_JSON_SERIALIZER"});
    lo.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER']()).constructor_());
    lo.get().mt_json_tree.set(it_json_tree);
    lo.get().mv_indent_step.set(iv_indent);
    lo.get().mv_keep_item_order.set(iv_keep_item_order);
    rv_json_string.set((await lo.get()._stringify()));
    return rv_json_string;
  }
  async _stringify() {
    let rv_json_string = new abap.types.String({qualifiedName: "STRING"});
    let fs_n_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    abap.statements.readTable(this.mt_json_tree,{assigning: fs_n_,
      withKey: (i) => {return abap.compare.eq(i.path, new abap.types.Character(1).set('')) && abap.compare.eq(i.name, new abap.types.Character(1).set(''));},
      withKeyValue: [{key: (i) => {return i.path}, value: new abap.types.Character(1).set('')},{key: (i) => {return i.name}, value: new abap.types.Character(1).set('')}],
      usesTableLine: false,
      withKeySimple: {"path": new abap.types.Character(1).set(''),"name": new abap.types.Character(1).set('')}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      return rv_json_string;
    }
    await this.stringify_node({is_node: fs_n_});
    rv_json_string.set(abap.builtin.concat_lines_of({table: this.mt_buffer}));
    return rv_json_string;
  }
  async stringify_node(INPUT) {
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let lv_item = new abap.types.String({qualifiedName: "STRING"});
    let lv_indent_prefix = new abap.types.String({qualifiedName: "STRING"});
    let lv_children_path = new abap.types.String({qualifiedName: "STRING"});
    let lv_tail = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.gt(this.mv_indent_step, abap.IntegerFactory.get(0))) {
      lv_indent_prefix.set(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(this.mv_indent_step,this.mv_level)}));
      lv_item.set(lv_indent_prefix);
    }
    if (abap.compare.initial(is_node.get().name) === false && abap.compare.initial(is_node.get().index)) {
      if (abap.compare.gt(this.mv_indent_step, abap.IntegerFactory.get(0))) {
        lv_item.set(abap.operators.concat(lv_item,new abap.types.String().set(`"${abap.templateFormatting(is_node.get().name)}": `)));
      } else {
        lv_item.set(new abap.types.String().set(`"${abap.templateFormatting(is_node.get().name)}":`));
      }
    }
    let unique4 = is_node.get().type;
    if (abap.compare.eq(unique4, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
      lv_item.set(abap.operators.concat(lv_item,new abap.types.Character(1).set('[')));
    } else if (abap.compare.eq(unique4, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
      lv_item.set(abap.operators.concat(lv_item,new abap.types.Character(1).set('{')));
    } else if (abap.compare.eq(unique4, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string)) {
      lv_item.set(abap.operators.concat(lv_item,new abap.types.String().set(`"${abap.templateFormatting((await this.escape_string({iv_unescaped: is_node.get().value})))}"`)));
    } else if (abap.compare.eq(unique4, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean) || abap.compare.eq(unique4, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number)) {
      lv_item.set(abap.operators.concat(lv_item,is_node.get().value));
    } else if (abap.compare.eq(unique4, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null)) {
      lv_item.set(abap.operators.concat(lv_item,new abap.types.Character(4).set('null')));
    } else {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected type [${abap.templateFormatting(is_node.get().type)}]`), iv_location: abap.operators.concat(is_node.get().path,is_node.get().name)});
    }
    if (abap.compare.gt(this.mv_indent_step, abap.IntegerFactory.get(0)) && (abap.compare.eq(is_node.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array) || abap.compare.eq(is_node.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) && abap.compare.gt(is_node.get().children, abap.IntegerFactory.get(0))) {
      this.mv_level.set(abap.operators.add(this.mv_level,abap.IntegerFactory.get(1)));
      lv_item.set(abap.operators.concat(lv_item,abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline));
    }
    abap.statements.append({source: lv_item, target: this.mt_buffer});
    if (abap.compare.eq(is_node.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array) || abap.compare.eq(is_node.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
      lv_children_path.set(abap.operators.concat(is_node.get().path,abap.operators.concat(is_node.get().name,new abap.types.Character(1).set('/'))));
      let unique5 = is_node.get().type;
      if (abap.compare.eq(unique5, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
        if (abap.compare.gt(is_node.get().children, abap.IntegerFactory.get(0))) {
          await this.stringify_set({iv_parent_path: lv_children_path, iv_array: abap.builtin.abap_true});
        }
        lv_tail.set(new abap.types.Character(1).set(']'));
      } else if (abap.compare.eq(unique5, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
        if (abap.compare.gt(is_node.get().children, abap.IntegerFactory.get(0))) {
          await this.stringify_set({iv_parent_path: lv_children_path, iv_array: abap.builtin.abap_false});
        }
        lv_tail.set(new abap.types.Character(1).set('}'));
      }
      if (abap.compare.gt(this.mv_indent_step, abap.IntegerFactory.get(0)) && abap.compare.gt(is_node.get().children, abap.IntegerFactory.get(0))) {
        lv_tail.set(abap.operators.concat(lv_indent_prefix,lv_tail));
        this.mv_level.set(abap.operators.minus(this.mv_level,abap.IntegerFactory.get(1)));
      }
      abap.statements.append({source: lv_tail, target: this.mt_buffer});
    }
  }
  async stringify_set(INPUT) {
    let iv_parent_path = INPUT?.iv_parent_path;
    if (iv_parent_path?.getQualifiedName === undefined || iv_parent_path.getQualifiedName() !== "STRING") { iv_parent_path = undefined; }
    if (iv_parent_path === undefined) { iv_parent_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_parent_path); }
    let iv_array = INPUT?.iv_array;
    if (iv_array?.getQualifiedName === undefined || iv_array.getQualifiedName() !== "ABAP_BOOL") { iv_array = undefined; }
    if (iv_array === undefined) { iv_array = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.iv_array); }
    let lv_tab_key = new abap.types.String({qualifiedName: "STRING"});
    let lv_first_done = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let fs_n_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    if (abap.compare.eq(iv_array, abap.builtin.abap_true)) {
      lv_tab_key.set(new abap.types.Character(11).set('array_index'));
    } else if (abap.compare.eq(this.mv_keep_item_order, abap.builtin.abap_true)) {
      lv_tab_key.set(new abap.types.Character(10).set('item_order'));
    } else {
      lv_tab_key.set(new abap.types.Character(11).set('primary_key'));
    }
    for await (const unique6 of abap.statements.loop(this.mt_json_tree,{usingKey: lv_tab_key.get(),where: async (I) => {return abap.compare.eq(I.path, iv_parent_path);},topEquals: {"path": iv_parent_path}})) {
      fs_n_.assign(unique6);
      if (abap.compare.eq(lv_first_done, abap.builtin.abap_false)) {
        lv_first_done.set(abap.builtin.abap_true);
      } else if (abap.compare.gt(this.mv_indent_step, abap.IntegerFactory.get(0))) {
        abap.statements.append({source: lcl_json_serializer.gv_comma_with_lf, target: this.mt_buffer});
      } else {
        abap.statements.append({source: new abap.types.Character(1).set(','), target: this.mt_buffer});
      }
      await this.stringify_node({is_node: fs_n_});
    }
    if (abap.compare.gt(this.mv_indent_step, abap.IntegerFactory.get(0)) && abap.compare.eq(lv_first_done, abap.builtin.abap_true)) {
      abap.statements.append({source: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, target: this.mt_buffer});
    }
  }
  async escape_string(INPUT) {
    return lcl_json_serializer.escape_string(INPUT);
  }
  static async escape_string(INPUT) {
    let rv_escaped = new abap.types.String({qualifiedName: "STRING"});
    let iv_unescaped = INPUT?.iv_unescaped;
    if (iv_unescaped?.getQualifiedName === undefined || iv_unescaped.getQualifiedName() !== "STRING") { iv_unescaped = undefined; }
    if (iv_unescaped === undefined) { iv_unescaped = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_unescaped); }
    rv_escaped.set(iv_unescaped);
    if (abap.compare.ca(rv_escaped, new abap.types.String().set(`"\\\t\n\r`))) {
      rv_escaped.set(abap.builtin.replace({val: rv_escaped, sub: new abap.types.Character(1).set('\\'), with: new abap.types.Character(2).set('\\\\'), occ: abap.IntegerFactory.get(0)}));
      rv_escaped.set(abap.builtin.replace({val: rv_escaped, sub: new abap.types.String().set(`\n`), with: new abap.types.Character(2).set('\\n'), occ: abap.IntegerFactory.get(0)}));
      rv_escaped.set(abap.builtin.replace({val: rv_escaped, sub: new abap.types.String().set(`\r`), with: new abap.types.Character(2).set('\\r'), occ: abap.IntegerFactory.get(0)}));
      rv_escaped.set(abap.builtin.replace({val: rv_escaped, sub: new abap.types.String().set(`\t`), with: new abap.types.Character(2).set('\\t'), occ: abap.IntegerFactory.get(0)}));
      rv_escaped.set(abap.builtin.replace({val: rv_escaped, sub: new abap.types.Character(1).set('"'), with: new abap.types.Character(2).set('\\"'), occ: abap.IntegerFactory.get(0)}));
    }
    return rv_escaped;
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_SERIALIZER'] = lcl_json_serializer;
lcl_json_serializer.gv_comma_with_lf = new abap.types.String({qualifiedName: "STRING"});
class lcl_json_to_abap {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_NODE_TYPE_CACHE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TYPE_PATH"]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MR_NODES": {"type": () => {return new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MI_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_CORRESPONDING": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"ANY_TO_ABAP": {"visibility": "I", "parameters": {"IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IS_PARENT_TYPE": {"type": () => {return new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});}, "is_optional": " "}, "I_CONTAINER_REF": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "VALUE_TO_ABAP": {"visibility": "I", "parameters": {"IS_NODE": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});}, "is_optional": " "}, "IS_NODE_TYPE": {"type": () => {return new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});}, "is_optional": " "}, "I_CONTAINER_REF": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "GET_NODE_TYPE": {"visibility": "I", "parameters": {"RS_NODE_TYPE": {"type": () => {return new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});}, "is_optional": " "}, "IS_NODE": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});}, "is_optional": " "}, "IS_PARENT_TYPE": {"type": () => {return new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});}, "is_optional": " "}, "I_CONTAINER_REF": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_CORRESPONDING": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "II_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}}},
  "TO_ABAP": {"visibility": "U", "parameters": {"IT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "is_optional": " "}, "C_CONTAINER": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "TO_TIMESTAMP": {"visibility": "U", "parameters": {"RV_RESULT": {"type": () => {return new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});}, "is_optional": " "}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"});}, "is_optional": " "}}},
  "TO_DATE": {"visibility": "U", "parameters": {"RV_RESULT": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "is_optional": " "}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"});}, "is_optional": " "}}},
  "TO_TIME": {"visibility": "U", "parameters": {"RV_RESULT": {"type": () => {return new abap.types.Time({qualifiedName: "T"});}, "is_optional": " "}, "IV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_node_type_cache = abap.types.TableFactory.construct(new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["TYPE_PATH"]},"secondary":[]}, "");
    this.mr_nodes = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
    this.mi_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    this.mv_corresponding = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  }
  async constructor_(INPUT) {
    let iv_corresponding = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_corresponding) {iv_corresponding.set(INPUT.iv_corresponding);}
    if (INPUT === undefined || INPUT.iv_corresponding === undefined) {iv_corresponding = abap.builtin.abap_false;}
    let ii_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.ii_custom_mapping) {ii_custom_mapping.set(INPUT.ii_custom_mapping);}
    this.mi_custom_mapping.set(ii_custom_mapping);
    this.mv_corresponding.set(iv_corresponding);
    return this;
  }
  async to_abap(INPUT) {
    let it_nodes = INPUT?.it_nodes;
    if (it_nodes?.getQualifiedName === undefined || it_nodes.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODES_TS") { it_nodes = undefined; }
    if (it_nodes === undefined) { it_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts").set(INPUT.it_nodes); }
    let c_container = new abap.types.Character(4);
    if (INPUT && INPUT.c_container) {c_container = INPUT.c_container;}
    let lr_ref = new abap.types.DataReference(new abap.types.Character(4));
    abap.statements.clear(c_container);
    abap.statements.clear(this.mt_node_type_cache);
    lr_ref.assign(c_container);
    this.mr_nodes.assign(it_nodes);
    await this.get_node_type({i_container_ref: lr_ref});
    await this.any_to_abap({iv_path: new abap.types.Character(1).set(''), i_container_ref: lr_ref});
  }
  async get_node_type(INPUT) {
    let rs_node_type = new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});
    let is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    if (INPUT && INPUT.is_node) {is_node.set(INPUT.is_node);}
    let is_parent_type = new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});
    if (INPUT && INPUT.is_parent_type) {is_parent_type.set(INPUT.is_parent_type);}
    let i_container_ref = new abap.types.DataReference(new abap.types.Character(4));
    if (INPUT && INPUT.i_container_ref) {i_container_ref.set(INPUT.i_container_ref);}
    let lv_node_type_path = new abap.types.String({qualifiedName: "STRING"});
    let lo_sdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let lo_tdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
    let lo_ddescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
    if (abap.compare.eq(is_parent_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$table)) {
      lv_node_type_path.set(abap.operators.concat(is_parent_type.get().type_path,new abap.types.Character(2).set('/-')));
    } else if (abap.compare.initial(is_parent_type.get().type_kind) === false) {
      lv_node_type_path.set(abap.operators.concat(is_parent_type.get().type_path,abap.operators.concat(new abap.types.Character(1).set('/'),is_node.get().name)));
    }
    abap.statements.readTable(this.mt_node_type_cache,{into: rs_node_type,
      withKey: (i) => {return abap.compare.eq(i.type_path, lv_node_type_path);},
      withKeyValue: [{key: (i) => {return i.type_path}, value: lv_node_type_path}],
      usesTableLine: false,
      withKeySimple: {"type_path": lv_node_type_path}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      rs_node_type.get().type_path.set(lv_node_type_path);
      if (abap.compare.initial(this.mi_custom_mapping) === false) {
        rs_node_type.get().target_field_name.set((abap.builtin.to_upper({val: (await this.mi_custom_mapping.get().z2ui5_if_ajson_mapping$to_abap({iv_path: is_node.get().path, iv_name: is_node.get().name}))})));
        if (abap.compare.initial(rs_node_type.get().target_field_name)) {
          rs_node_type.get().target_field_name.set(abap.builtin.to_upper({val: is_node.get().name}));
        }
      } else {
        rs_node_type.get().target_field_name.set(abap.builtin.to_upper({val: is_node.get().name}));
      }
      let unique7 = is_parent_type.get().type_kind;
      if (abap.compare.eq(unique7, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$table)) {
        await abap.statements.cast(lo_tdescr, is_parent_type.get().dd);
        rs_node_type.get().dd.set((await lo_tdescr.get().get_table_line_type()));
      } else if (abap.compare.eq(unique7, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_flat) || abap.compare.eq(unique7, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_deep)) {
        await abap.statements.cast(lo_sdescr, is_parent_type.get().dd);
        try {
          rs_node_type.get().dd.set(await lo_sdescr.get().get_component_type({p_name: rs_node_type.get().target_field_name}));
          abap.builtin.sy.get().subrc.set(0);
        } catch (e) {
          if (e.classic) {
              switch (e.classic.toUpperCase()) {
              case "COMPONENT_NOT_FOUND": abap.builtin.sy.get().subrc.set(4); break;
                }
            } else {
                throw e;
            }
          }
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            if (abap.compare.eq(this.mv_corresponding, abap.builtin.abap_false)) {
              await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Path not found`)});
            } else {
              abap.statements.clear(rs_node_type);
              return rs_node_type;
            }
          }
        } else if (abap.compare.eq(unique7, new abap.types.Character(1).set(''))) {
          await abap.statements.cast(rs_node_type.get().dd, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data_ref({p_data_ref: i_container_ref})));
        } else {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected parent type`)});
        }
        rs_node_type.get().type_kind.set(rs_node_type.get().dd.get().type_kind);
        if (abap.compare.eq(rs_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$table)) {
          await abap.statements.cast(lo_tdescr, rs_node_type.get().dd);
          if (abap.compare.ne(lo_tdescr.get().table_kind, abap.Classes['CL_ABAP_TABLEDESCR'].tablekind_std)) {
            lo_ddescr.set((await lo_tdescr.get().get_table_line_type()));
            if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
            await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: lo_ddescr, dref: rs_node_type.get().tab_item_buf});
          }
        }
        abap.statements.insertInternal({data: rs_node_type, table: this.mt_node_type_cache});
      }
      return rs_node_type;
    }
    async any_to_abap(INPUT) {
      let iv_path = INPUT?.iv_path;
      if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
      if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
      let is_parent_type = new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});
      if (INPUT && INPUT.is_parent_type) {is_parent_type.set(INPUT.is_parent_type);}
      let i_container_ref = INPUT?.i_container_ref;
      if (i_container_ref === undefined) { i_container_ref = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.i_container_ref); }
      let ls_node_type = new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});
      let lx_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
      let lx_root = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
      let lr_target_field = new abap.types.DataReference(new abap.types.Character(4));
      let fs_n_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
      let fs_parent_stdtab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
      let fs_parent_anytab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
      let fs_parent_struc_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let fs_tab_item_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let unique8 = is_parent_type.get().type_kind;
      if (abap.compare.eq(unique8, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$table)) {
        if (abap.compare.initial(is_parent_type.get().tab_item_buf) === false) {
          abap.statements.assign({target: fs_parent_anytab_, source: i_container_ref.dereference()});
          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
          lr_target_field.set(is_parent_type.get().tab_item_buf);
          abap.statements.assign({target: fs_tab_item_, source: is_parent_type.get().tab_item_buf.dereference()});
          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        } else {
          abap.statements.assign({target: fs_parent_stdtab_, source: i_container_ref.dereference()});
          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        }
      } else if (abap.compare.eq(unique8, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_flat) || abap.compare.eq(unique8, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_deep)) {
        abap.statements.assign({target: fs_parent_struc_, source: i_container_ref.dereference()});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
      }
      try {
        for await (const unique9 of abap.statements.loop(this.mr_nodes.dereference(),{usingKey: "array_index",where: async (I) => {return abap.compare.eq(I.path, iv_path);},topEquals: {"path": iv_path}})) {
          fs_n_.assign(unique9);
          if (abap.compare.ne(is_parent_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$table) || abap.compare.initial(ls_node_type.get().type_kind)) {
            ls_node_type.set((await this.get_node_type({is_node: fs_n_, is_parent_type: is_parent_type})));
            if (abap.compare.eq(this.mv_corresponding, abap.builtin.abap_true) && abap.compare.initial(ls_node_type)) {
              continue;
            }
          }
          if (abap.compare.eq(ls_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$data_ref) || abap.compare.eq(ls_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$object_ref)) {
            await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(20).set('Cannot assign to ref')});
          }
          let unique10 = is_parent_type.get().type_kind;
          if (abap.compare.eq(unique10, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$table)) {
            if (!abap.compare.co(ls_node_type.get().target_field_name, new abap.types.Character(10).set('0123456789'))) {
              await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(27).set('Need index to access tables')});
            }
            if (abap.compare.initial(is_parent_type.get().tab_item_buf)) {
              lr_target_field.assign(fs_parent_stdtab_.appendInitial());
              abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
            } else {
              abap.statements.clear(fs_tab_item_);
            }
          } else if (abap.compare.eq(unique10, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_flat) || abap.compare.eq(unique10, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_deep)) {
            abap.statements.assign({component: ls_node_type.get().target_field_name, target: fs_field_, source: fs_parent_struc_});
            abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
            lr_target_field.assign(fs_field_.getPointer());
          } else if (abap.compare.eq(unique10, new abap.types.Character(1).set(''))) {
            lr_target_field.set(i_container_ref);
          } else {
            await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(22).set('Unexpected parent type')});
          }
          let unique11 = fs_n_.get().type;
          if (abap.compare.eq(unique11, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
            if (abap.compare.ne(ls_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_flat) && abap.compare.ne(ls_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$struct_deep)) {
              await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(18).set('Expected structure')});
            }
            await this.any_to_abap({iv_path: abap.operators.concat(fs_n_.get().path,abap.operators.concat(fs_n_.get().name,new abap.types.Character(1).set('/'))), is_parent_type: ls_node_type, i_container_ref: lr_target_field});
          } else if (abap.compare.eq(unique11, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
            if (!abap.compare.eq(ls_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$table)) {
              await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(14).set('Expected table')});
            }
            await this.any_to_abap({iv_path: abap.operators.concat(fs_n_.get().path,abap.operators.concat(fs_n_.get().name,new abap.types.Character(1).set('/'))), is_parent_type: ls_node_type, i_container_ref: lr_target_field});
          } else {
            await this.value_to_abap({is_node: fs_n_, is_node_type: ls_node_type, i_container_ref: lr_target_field});
          }
          if (abap.compare.initial(is_parent_type.get().tab_item_buf) === false) {
            try {
              abap.statements.insertInternal({data: fs_tab_item_, table: fs_parent_anytab_});
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(19).set('Duplicate insertion')});
              }
            } catch (e) {
              if ((abap.Classes['CX_SY_ITAB_DUPLICATE_KEY'] && e instanceof abap.Classes['CX_SY_ITAB_DUPLICATE_KEY'])) {
                await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(19).set('Duplicate insertion')});
              } else {
                throw e;
              }
            }
          }
        }
      } catch (e) {
        if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
          lx_ajson.set(e);
          if (abap.compare.initial(lx_ajson.get().location)) {
            await lx_ajson.get().set_location({iv_location: abap.operators.concat(fs_n_.get().path,fs_n_.get().name)});
          }
          throw lx_ajson.get();
        } else if ((abap.Classes['CX_SY_CONVERSION_NO_NUMBER'] && e instanceof abap.Classes['CX_SY_CONVERSION_NO_NUMBER'])) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(22).set('Source is not a number'), iv_location: abap.operators.concat(fs_n_.get().path,fs_n_.get().name)});
        } else if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          lx_root.set(e);
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: (await lx_root.get().if_message$get_text()), iv_location: abap.operators.concat(fs_n_.get().path,fs_n_.get().name)});
        } else {
          throw e;
        }
      }
    }
    async value_to_abap(INPUT) {
      let is_node = INPUT?.is_node;
      if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
      if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
      let is_node_type = INPUT?.is_node_type;
      if (is_node_type?.getQualifiedName === undefined || is_node_type.getQualifiedName() !== "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE") { is_node_type = undefined; }
      if (is_node_type === undefined) { is_node_type = new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {}).set(INPUT.is_node_type); }
      let i_container_ref = INPUT?.i_container_ref;
      if (i_container_ref === undefined) { i_container_ref = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.i_container_ref); }
      let fs_container_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      if (abap.compare.ca(is_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$deep_targets)) {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unsupported target for value [${abap.templateFormatting(is_node_type.get().type_kind)}]`)});
      }
      abap.statements.assign({target: fs_container_, source: i_container_ref.dereference()});
      abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
      let unique12 = is_node.get().type;
      if (abap.compare.eq(unique12, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null)) {
      } else if (abap.compare.eq(unique12, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean)) {
        fs_container_.set(abap.builtin.boolc(abap.compare.eq(is_node.get().value, new abap.types.Character(4).set('true'))));
      } else if (abap.compare.eq(unique12, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number)) {
        fs_container_.set(is_node.get().value);
      } else if (abap.compare.eq(unique12, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string)) {
        if (abap.compare.initial(is_node.get().value) === false) {
          if (abap.compare.eq(is_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$date)) {
            fs_container_.set((await this.to_date({iv_value: is_node.get().value})));
          } else if (abap.compare.eq(is_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$time)) {
            fs_container_.set((await this.to_time({iv_value: is_node.get().value})));
          } else if (abap.compare.eq(is_node_type.get().dd.get().absolute_name, new abap.types.Character(15).set('\\TYPE=TIMESTAMP')) || abap.compare.eq(is_node_type.get().dd.get().absolute_name, new abap.types.Character(16).set('\\TYPE=TIMESTAMPL'))) {
            fs_container_.set((await this.to_timestamp({iv_value: is_node.get().value})));
          } else if (abap.compare.eq(is_node_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$packed)) {
            fs_container_.set(is_node.get().value);
          } else {
            fs_container_.set(is_node.get().value);
          }
        } else {
          fs_container_.set(is_node.get().value);
        }
      } else {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected JSON type [${abap.templateFormatting(is_node.get().type)}]`)});
      }
    }
    async to_date(INPUT) {
      let rv_result = new abap.types.Date({qualifiedName: "D"});
      let iv_value = INPUT?.iv_value;
      if (iv_value?.getQualifiedName === undefined || iv_value.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE") { iv_value = undefined; }
      if (iv_value === undefined) { iv_value = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}).set(INPUT.iv_value); }
      let lv_y = new abap.types.Character(4, {});
      let lv_m = new abap.types.Character(2, {});
      let lv_d = new abap.types.Character(2, {});
      abap.statements.find(iv_value, {regex: new abap.types.Character(29).set('^(\\d{4})-(\\d{2})-(\\d{2})(T|$)'), first: true, submatches: [lv_y,lv_m,lv_d]});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(22).set('Unexpected date format')});
      }
      abap.statements.concatenate({source: [lv_y, lv_m, lv_d], target: rv_result});
      return rv_result;
    }
    async to_timestamp(INPUT) {
      let rv_result = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
      let iv_value = INPUT?.iv_value;
      if (iv_value?.getQualifiedName === undefined || iv_value.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE") { iv_value = undefined; }
      if (iv_value === undefined) { iv_value = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}).set(INPUT.iv_value); }
      let lc_utc = new abap.types.Character(6, {});
      lc_utc.set('UTC');
      let lc_regex_ts_with_hour = new abap.types.String({qualifiedName: "STRING"});
      lc_regex_ts_with_hour.set(`^(\\d{4})-(\\d{2})-(\\d{2})(T)(\\d{2}):(\\d{2}):(\\d{2})(\\+)(\\d{2}):(\\d{2})`);
      let lc_regex_ts_utc = new abap.types.String({qualifiedName: "STRING"});
      lc_regex_ts_utc.set(`^(\\d{4})-(\\d{2})-(\\d{2})(T)(\\d{2}):(\\d{2}):(\\d{2})(Z|$)`);
      let ls_timestamp = new abap.types.Structure({"year": new abap.types.Character(4, {}), "month": new abap.types.Character(2, {}), "day": new abap.types.Character(2, {}), "t": new abap.types.Character(1, {}), "hour": new abap.types.Character(2, {}), "minute": new abap.types.Character(2, {}), "second": new abap.types.Character(2, {}), "local_sign": new abap.types.Character(1, {}), "local_hour": new abap.types.Character(2, {}), "local_minute": new abap.types.Character(2, {})}, undefined, undefined, {}, {});
      let lv_date = new abap.types.Date({qualifiedName: "D"});
      let lv_time = new abap.types.Time({qualifiedName: "T"});
      let lv_seconds_conv = new abap.types.Integer({qualifiedName: "I"});
      let lv_timestamp = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
      abap.statements.find(iv_value, {regex: lc_regex_ts_with_hour, first: true, submatches: [ls_timestamp.get().year,ls_timestamp.get().month,ls_timestamp.get().day,ls_timestamp.get().t,ls_timestamp.get().hour,ls_timestamp.get().minute,ls_timestamp.get().second,ls_timestamp.get().local_sign,ls_timestamp.get().local_hour,ls_timestamp.get().local_minute]});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        lv_seconds_conv.set(abap.operators.add(abap.operators.multiply(ls_timestamp.get().local_hour,new abap.types.Integer().set(3600)),abap.operators.multiply(ls_timestamp.get().local_minute,abap.IntegerFactory.get(60))));
      } else {
        abap.statements.find(iv_value, {regex: lc_regex_ts_utc, first: true, submatches: [ls_timestamp.get().year,ls_timestamp.get().month,ls_timestamp.get().day,ls_timestamp.get().t,ls_timestamp.get().hour,ls_timestamp.get().minute,ls_timestamp.get().second]});
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(27).set('Unexpected timestamp format')});
        }
      }
      abap.statements.concatenate({source: [ls_timestamp.get().year, ls_timestamp.get().month, ls_timestamp.get().day], target: lv_date});
      abap.statements.concatenate({source: [ls_timestamp.get().hour, ls_timestamp.get().minute, ls_timestamp.get().second], target: lv_time});
      abap.statements.convert({date: lv_date,time: lv_time,zone: lc_utc}, {stamp: lv_timestamp});
      try {
        let unique13 = ls_timestamp.get().local_sign;
        if (abap.compare.eq(unique13, new abap.types.Character(1).set('-'))) {
          lv_timestamp.set((await abap.Classes['CL_ABAP_TSTMP'].add({tstmp: lv_timestamp, secs: lv_seconds_conv})));
        } else if (abap.compare.eq(unique13, new abap.types.Character(1).set('+'))) {
          lv_timestamp.set((await abap.Classes['CL_ABAP_TSTMP'].subtractsecs({tstmp: lv_timestamp, secs: lv_seconds_conv})));
        }
      } catch (e) {
        if ((abap.Classes['CX_PARAMETER_INVALID_RANGE'] && e instanceof abap.Classes['CX_PARAMETER_INVALID_RANGE']) || (abap.Classes['CX_PARAMETER_INVALID_TYPE'] && e instanceof abap.Classes['CX_PARAMETER_INVALID_TYPE'])) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(38).set('Unexpected error calculating timestamp')});
        } else {
          throw e;
        }
      }
      if (abap.compare.initial(lv_timestamp) === false) {
        await abap.Classes['CL_ABAP_TSTMP'].move({tstmp_src: lv_timestamp, tstmp_tgt: rv_result});
      }
      return rv_result;
    }
    async to_time(INPUT) {
      let rv_result = new abap.types.Time({qualifiedName: "T"});
      let iv_value = INPUT?.iv_value;
      if (iv_value?.getQualifiedName === undefined || iv_value.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE") { iv_value = undefined; }
      if (iv_value === undefined) { iv_value = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}).set(INPUT.iv_value); }
      let lv_h = new abap.types.Character(2, {});
      let lv_m = new abap.types.Character(2, {});
      let lv_s = new abap.types.Character(2, {});
      abap.statements.find(iv_value, {regex: new abap.types.Character(29).set('^(\\d{2}):(\\d{2}):(\\d{2})(T|$)'), first: true, submatches: [lv_h,lv_m,lv_s]});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(22).set('Unexpected time format')});
      }
      abap.statements.concatenate({source: [lv_h, lv_m, lv_s], target: rv_result});
      return rv_result;
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_JSON_TO_ABAP'] = lcl_json_to_abap;
  lcl_json_to_abap.ty_type_cache = new abap.types.Structure({"type_path": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TYPE_PATH"}), "target_field_name": new abap.types.String({qualifiedName: "LCL_JSON_TO_ABAP=>TY_TYPE_CACHE-TARGET_FIELD_NAME"}), "dd": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"lif_kind=>ty_kind"}), "tab_item_buf": new abap.types.DataReference(new abap.types.Character(4))}, "lcl_json_to_abap=>ty_type_cache", undefined, {}, {});
  class lcl_abap_to_json {
    static INTERNAL_TYPE = 'CLAS';
    static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON';
    static IMPLEMENTED_INTERFACES = [];
    static ATTRIBUTES = {"GV_AJSON_ABSOLUTE_TYPE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
    "MI_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
    "MV_KEEP_ITEM_ORDER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
    "MV_FORMAT_DATETIME": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
    static METHODS = {"CONVERT_ANY": {"visibility": "I", "parameters": {"IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IO_TYPE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}}},
    "CONVERT_AJSON": {"visibility": "I", "parameters": {"IO_JSON": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}}},
    "CONVERT_VALUE": {"visibility": "I", "parameters": {"IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IO_TYPE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}}},
    "CONVERT_REF": {"visibility": "I", "parameters": {"IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}}},
    "CONVERT_STRUC": {"visibility": "I", "parameters": {"IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IO_TYPE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}}},
    "CONVERT_TABLE": {"visibility": "I", "parameters": {"IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IO_TYPE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}}},
    "INSERT_VALUE_WITH_TYPE": {"visibility": "I", "parameters": {"IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"});}, "is_optional": " "}, "IO_TYPE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "CT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}}},
    "CONVERT": {"visibility": "U", "parameters": {"RT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}, "IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_ARRAY_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "II_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IS_OPTS": {"type": () => {return new abap.types.Structure({"read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "keep_item_order": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "format_datetime": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "to_abap_corresponding_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_ajson=>ty_opts", undefined, {}, {});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
    "INSERT_WITH_TYPE": {"visibility": "U", "parameters": {"RT_NODES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");}, "is_optional": " "}, "IV_DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "IV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"});}, "is_optional": " "}, "IS_PREFIX": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});}, "is_optional": " "}, "IV_ARRAY_INDEX": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "II_CUSTOM_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IS_OPTS": {"type": () => {return new abap.types.Structure({"read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "keep_item_order": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "format_datetime": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "to_abap_corresponding_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_ajson=>ty_opts", undefined, {}, {});}, "is_optional": " "}, "IV_ITEM_ORDER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
    "FORMAT_DATE": {"visibility": "U", "parameters": {"RV_STR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_DATE": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "is_optional": " "}}},
    "FORMAT_TIME": {"visibility": "U", "parameters": {"RV_STR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_TIME": {"type": () => {return new abap.types.Time({qualifiedName: "T"});}, "is_optional": " "}}},
    "FORMAT_TIMESTAMP": {"visibility": "U", "parameters": {"RV_STR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_TS": {"type": () => {return new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});}, "is_optional": " "}}},
    "CLASS_CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
    constructor() {
      this.me = new abap.types.ABAPObject();
      this.me.set(this);
      this.gv_ajson_absolute_type_name = lcl_abap_to_json.gv_ajson_absolute_type_name;
      this.mi_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
      this.mv_keep_item_order = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      this.mv_format_datetime = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    }
    async constructor_(INPUT) {
      if (super.constructor_) { await super.constructor_(INPUT); }
      return this;
    }
    async class_constructor() {
      return lcl_abap_to_json.class_constructor();
    }
    static async class_constructor() {
      let lo_dummy = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
      let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REFDESCR", RTTIName: "\\CLASS=CL_ABAP_REFDESCR"});
      await abap.statements.cast(lo_type, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: lo_dummy})));
      lcl_abap_to_json.gv_ajson_absolute_type_name.set(((await lo_type.get().get_referenced_type())).get().absolute_name);
    }
    async convert(INPUT) {
      return lcl_abap_to_json.convert(INPUT);
    }
    static async convert(INPUT) {
      let rt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      let iv_data = INPUT?.iv_data;
      let is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
      if (INPUT && INPUT.is_prefix) {is_prefix.set(INPUT.is_prefix);}
      let iv_array_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_array_index) {iv_array_index.set(INPUT.iv_array_index);}
      if (INPUT === undefined || INPUT.iv_array_index === undefined) {iv_array_index = abap.IntegerFactory.get(0);}
      let ii_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
      if (INPUT && INPUT.ii_custom_mapping) {ii_custom_mapping.set(INPUT.ii_custom_mapping);}
      let is_opts = new abap.types.Structure({"read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "keep_item_order": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "format_datetime": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "to_abap_corresponding_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_ajson=>ty_opts", undefined, {}, {});
      if (INPUT && INPUT.is_opts) {is_opts.set(INPUT.is_opts);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
      let lo_converter = new abap.types.ABAPObject({qualifiedName: "LCL_ABAP_TO_JSON", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_ABAP_TO_JSON"});
      lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: iv_data})));
      lo_converter.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON']()).constructor_());
      lo_converter.get().mi_custom_mapping.set(ii_custom_mapping);
      lo_converter.get().mv_keep_item_order.set(is_opts.get().keep_item_order);
      lo_converter.get().mv_format_datetime.set(is_opts.get().format_datetime);
      await lo_converter.get().convert_any({iv_data: iv_data, io_type: lo_type, is_prefix: is_prefix, iv_index: iv_array_index, iv_item_order: iv_item_order, ct_nodes: rt_nodes});
      return rt_nodes;
    }
    async convert_any(INPUT) {
      let iv_data = INPUT?.iv_data;
      let io_type = INPUT?.io_type;
      if (io_type?.getQualifiedName === undefined || io_type.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { io_type = undefined; }
      if (io_type === undefined) { io_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.io_type); }
      let is_prefix = INPUT?.is_prefix;
      if (is_prefix?.getQualifiedName === undefined || is_prefix.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME") { is_prefix = undefined; }
      if (is_prefix === undefined) { is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {}).set(INPUT.is_prefix); }
      let iv_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_index) {iv_index.set(INPUT.iv_index);}
      if (INPUT === undefined || INPUT.iv_index === undefined) {iv_index = abap.IntegerFactory.get(0);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let ct_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
      let unique14 = io_type.get().kind;
      if (abap.compare.eq(unique14, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
        await this.convert_value({iv_data: iv_data, io_type: io_type, is_prefix: is_prefix, iv_index: iv_index, iv_item_order: iv_item_order, ct_nodes: ct_nodes});
      } else if (abap.compare.eq(unique14, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
        await this.convert_struc({iv_data: iv_data, io_type: io_type, is_prefix: is_prefix, iv_index: iv_index, iv_item_order: iv_item_order, ct_nodes: ct_nodes});
      } else if (abap.compare.eq(unique14, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
        await this.convert_table({iv_data: iv_data, io_type: io_type, is_prefix: is_prefix, iv_index: iv_index, iv_item_order: iv_item_order, ct_nodes: ct_nodes});
      } else {
        if (abap.compare.eq(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$data_ref) || abap.compare.initial(iv_data)) {
          await this.convert_ref({iv_data: iv_data, is_prefix: is_prefix, iv_index: iv_index, iv_item_order: iv_item_order, ct_nodes: ct_nodes});
        } else if (abap.compare.eq(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$object_ref) && abap.compare.eq(((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_object_ref({p_object_ref: iv_data}))).get().absolute_name, lcl_abap_to_json.gv_ajson_absolute_type_name)) {
          await this.convert_ajson({io_json: iv_data, is_prefix: is_prefix, iv_index: iv_index, iv_item_order: iv_item_order, ct_nodes: ct_nodes});
        } else {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unsupported type [${abap.templateFormatting(io_type.get().type_kind)}] @${abap.templateFormatting(abap.operators.concat(is_prefix.get().path,is_prefix.get().name))}`)});
        }
      }
    }
    async convert_ajson(INPUT) {
      let io_json = INPUT?.io_json;
      if (io_json?.getQualifiedName === undefined || io_json.getQualifiedName() !== "Z2UI5_IF_AJSON") { io_json = undefined; }
      if (io_json === undefined) { io_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}).set(INPUT.io_json); }
      let is_prefix = INPUT?.is_prefix;
      if (is_prefix?.getQualifiedName === undefined || is_prefix.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME") { is_prefix = undefined; }
      if (is_prefix === undefined) { is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {}).set(INPUT.is_prefix); }
      let iv_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_index) {iv_index.set(INPUT.iv_index);}
      if (INPUT === undefined || INPUT.iv_index === undefined) {iv_index = abap.IntegerFactory.get(0);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let ct_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
      let fs_src_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
      let fs_dst_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
      if (abap.compare.initial(io_json)) {
        return;
      }
      for await (const unique15 of abap.statements.loop(io_json.get().z2ui5_if_ajson$mt_json_tree)) {
        fs_src_.assign(unique15);
        abap.statements.append({source: fs_src_, assigning: fs_dst_, target: ct_nodes});
        if (abap.compare.initial(fs_dst_.get().path) && abap.compare.initial(fs_dst_.get().name)) {
          fs_dst_.get().path.set(is_prefix.get().path);
          fs_dst_.get().name.set(is_prefix.get().name);
          fs_dst_.get().index.set(iv_index);
          fs_dst_.get().order.set(iv_item_order);
        } else {
          fs_dst_.get().path.set(abap.operators.concat(is_prefix.get().path,abap.operators.concat(is_prefix.get().name,fs_dst_.get().path)));
        }
      }
    }
    async format_date(INPUT) {
      return lcl_abap_to_json.format_date(INPUT);
    }
    static async format_date(INPUT) {
      let rv_str = new abap.types.String({qualifiedName: "STRING"});
      let iv_date = INPUT?.iv_date;
      if (iv_date?.getQualifiedName === undefined || iv_date.getQualifiedName() !== "D") { iv_date = undefined; }
      if (iv_date === undefined) { iv_date = new abap.types.Date({qualifiedName: "D"}).set(INPUT.iv_date); }
      if (abap.compare.initial(iv_date) === false) {
        rv_str.set(abap.operators.concat(iv_date.getOffset({offset: 0, length: 4}),abap.operators.concat(new abap.types.Character(1).set('-'),abap.operators.concat(iv_date.getOffset({offset: 4, length: 2}),abap.operators.concat(new abap.types.Character(1).set('-'),iv_date.getOffset({offset: 6, length: 2}))))));
      }
      return rv_str;
    }
    async format_time(INPUT) {
      return lcl_abap_to_json.format_time(INPUT);
    }
    static async format_time(INPUT) {
      let rv_str = new abap.types.String({qualifiedName: "STRING"});
      let iv_time = INPUT?.iv_time;
      if (iv_time?.getQualifiedName === undefined || iv_time.getQualifiedName() !== "T") { iv_time = undefined; }
      if (iv_time === undefined) { iv_time = new abap.types.Time({qualifiedName: "T"}).set(INPUT.iv_time); }
      if (abap.compare.initial(iv_time) === false) {
        rv_str.set(abap.operators.concat(iv_time.getOffset({offset: 0, length: 2}),abap.operators.concat(new abap.types.Character(1).set(':'),abap.operators.concat(iv_time.getOffset({offset: 2, length: 2}),abap.operators.concat(new abap.types.Character(1).set(':'),iv_time.getOffset({offset: 4, length: 2}))))));
      }
      return rv_str;
    }
    async format_timestamp(INPUT) {
      return lcl_abap_to_json.format_timestamp(INPUT);
    }
    static async format_timestamp(INPUT) {
      let rv_str = new abap.types.String({qualifiedName: "STRING"});
      let iv_ts = INPUT?.iv_ts;
      if (iv_ts?.getQualifiedName === undefined || iv_ts.getQualifiedName() !== "TIMESTAMP") { iv_ts = undefined; }
      if (iv_ts === undefined) { iv_ts = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"}).set(INPUT.iv_ts); }
      let lc_utc = new abap.types.Character(6, {});
      lc_utc.set('UTC');
      let lv_date = new abap.types.Date({qualifiedName: "D"});
      let lv_time = new abap.types.Time({qualifiedName: "T"});
      abap.statements.convert({stamp: iv_ts,zone: lc_utc}, {date: lv_date,time: lv_time});
      rv_str.set(abap.operators.concat(lv_date.getOffset({offset: 0, length: 4}),abap.operators.concat(new abap.types.Character(1).set('-'),abap.operators.concat(lv_date.getOffset({offset: 4, length: 2}),abap.operators.concat(new abap.types.Character(1).set('-'),abap.operators.concat(lv_date.getOffset({offset: 6, length: 2}),abap.operators.concat(new abap.types.Character(1).set('T'),abap.operators.concat(lv_time.getOffset({offset: 0, length: 2}),abap.operators.concat(new abap.types.Character(1).set(':'),abap.operators.concat(lv_time.getOffset({offset: 2, length: 2}),abap.operators.concat(new abap.types.Character(1).set(':'),abap.operators.concat(lv_time.getOffset({offset: 4, length: 2}),new abap.types.Character(1).set('Z')))))))))))));
      return rv_str;
    }
    async convert_value(INPUT) {
      let iv_data = INPUT?.iv_data;
      let io_type = INPUT?.io_type;
      if (io_type?.getQualifiedName === undefined || io_type.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { io_type = undefined; }
      if (io_type === undefined) { io_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.io_type); }
      let is_prefix = INPUT?.is_prefix;
      if (is_prefix?.getQualifiedName === undefined || is_prefix.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME") { is_prefix = undefined; }
      if (is_prefix === undefined) { is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {}).set(INPUT.is_prefix); }
      let iv_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_index) {iv_index.set(INPUT.iv_index);}
      if (INPUT === undefined || INPUT.iv_index === undefined) {iv_index = abap.IntegerFactory.get(0);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let ct_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
      let ls_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      ls_node.get().path.set(is_prefix.get().path);
      ls_node.get().name.set(is_prefix.get().name);
      ls_node.get().index.set(iv_index);
      ls_node.get().order.set(iv_item_order);
      if (abap.compare.initial(ls_node.get().name)) {
        ls_node.get().name.set(is_prefix.get().name);
      }
      if (abap.compare.eq(io_type.get().absolute_name, new abap.types.Character(30).set('\\TYPE-POOL=ABAP\\TYPE=ABAP_BOOL')) || abap.compare.eq(io_type.get().absolute_name, new abap.types.Character(18).set('\\TYPE=ABAP_BOOLEAN')) || abap.compare.eq(io_type.get().absolute_name, new abap.types.Character(16).set('\\TYPE=XSDBOOLEAN')) || abap.compare.eq(io_type.get().absolute_name, new abap.types.Character(10).set('\\TYPE=FLAG')) || abap.compare.eq(io_type.get().absolute_name, new abap.types.Character(11).set('\\TYPE=XFELD'))) {
        ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean);
        if (abap.compare.initial(iv_data) === false) {
          ls_node.get().value.set(new abap.types.Character(4).set('true'));
        } else {
          ls_node.get().value.set(new abap.types.Character(5).set('false'));
        }
      } else if (abap.compare.eq(io_type.get().absolute_name, new abap.types.Character(15).set('\\TYPE=TIMESTAMP'))) {
        if (abap.compare.eq(this.mv_format_datetime, abap.builtin.abap_true)) {
          ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string);
          ls_node.get().value.set((await this.format_timestamp({iv_ts: iv_data})));
        } else {
          ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number);
          ls_node.get().value.set(new abap.types.String().set(`${abap.templateFormatting(iv_data)}`));
        }
      } else if (abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$texts) || abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$binary) || abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$enum)) {
        ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string);
        ls_node.get().value.set(new abap.types.String().set(`${abap.templateFormatting(iv_data)}`));
      } else if (abap.compare.eq(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$date)) {
        ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string);
        if (abap.compare.eq(this.mv_format_datetime, abap.builtin.abap_true)) {
          ls_node.get().value.set((await this.format_date({iv_date: iv_data})));
        } else {
          ls_node.get().value.set(new abap.types.String().set(`${abap.templateFormatting(iv_data)}`));
        }
      } else if (abap.compare.eq(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$time)) {
        ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string);
        if (abap.compare.eq(this.mv_format_datetime, abap.builtin.abap_true)) {
          ls_node.get().value.set((await this.format_time({iv_time: iv_data})));
        } else {
          ls_node.get().value.set(new abap.types.String().set(`${abap.templateFormatting(iv_data)}`));
        }
      } else if (abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$numeric)) {
        ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number);
        ls_node.get().value.set(new abap.types.String().set(`${abap.templateFormatting(iv_data)}`));
      } else {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected elementary type [${abap.templateFormatting(io_type.get().type_kind)}] @${abap.templateFormatting(abap.operators.concat(is_prefix.get().path,is_prefix.get().name))}`)});
      }
      abap.statements.append({source: ls_node, target: ct_nodes});
    }
    async convert_ref(INPUT) {
      let iv_data = INPUT?.iv_data;
      let is_prefix = INPUT?.is_prefix;
      if (is_prefix?.getQualifiedName === undefined || is_prefix.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME") { is_prefix = undefined; }
      if (is_prefix === undefined) { is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {}).set(INPUT.is_prefix); }
      let iv_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_index) {iv_index.set(INPUT.iv_index);}
      if (INPUT === undefined || INPUT.iv_index === undefined) {iv_index = abap.IntegerFactory.get(0);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let ct_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
      let ls_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      ls_node.get().path.set(is_prefix.get().path);
      ls_node.get().name.set(is_prefix.get().name);
      ls_node.get().index.set(iv_index);
      ls_node.get().order.set(iv_item_order);
      if (abap.compare.initial(this.mi_custom_mapping) === false) {
        ls_node.get().name.set((await this.mi_custom_mapping.get().z2ui5_if_ajson_mapping$to_json({iv_path: is_prefix.get().path, iv_name: is_prefix.get().name})));
      }
      if (abap.compare.initial(ls_node.get().name)) {
        ls_node.get().name.set(is_prefix.get().name);
      }
      if (abap.compare.initial(iv_data)) {
        ls_node.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null);
        ls_node.get().value.set(new abap.types.Character(4).set('null'));
      } else {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected reference @${abap.templateFormatting(abap.operators.concat(is_prefix.get().path,is_prefix.get().name))}`)});
      }
      abap.statements.append({source: ls_node, target: ct_nodes});
    }
    async convert_struc(INPUT) {
      let iv_data = INPUT?.iv_data;
      let io_type = INPUT?.io_type;
      if (io_type?.getQualifiedName === undefined || io_type.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { io_type = undefined; }
      if (io_type === undefined) { io_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.io_type); }
      let is_prefix = INPUT?.is_prefix;
      if (is_prefix?.getQualifiedName === undefined || is_prefix.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME") { is_prefix = undefined; }
      if (is_prefix === undefined) { is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {}).set(INPUT.is_prefix); }
      let iv_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_index) {iv_index.set(INPUT.iv_index);}
      if (INPUT === undefined || INPUT.iv_index === undefined) {iv_index = abap.IntegerFactory.get(0);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let ct_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
      let lo_struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
      let lt_comps = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"})}, "abap_simple_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_component_view_tab");
      let ls_next_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
      let lv_mapping_prefix_name = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"});
      let lv_item_order = new abap.types.Integer({qualifiedName: "I"});
      let ls_root = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      let fs_root_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
      let fs_c_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"})}, "abap_simple_componentdescr", undefined, {}, {}));
      let fs_val_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      ls_root.get().path.set(is_prefix.get().path);
      ls_root.get().name.set(is_prefix.get().name);
      ls_root.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object);
      ls_root.get().index.set(iv_index);
      if (abap.compare.initial(this.mi_custom_mapping) === false) {
        ls_root.get().name.set((await this.mi_custom_mapping.get().z2ui5_if_ajson_mapping$to_json({iv_path: is_prefix.get().path, iv_name: is_prefix.get().name})));
      }
      if (abap.compare.initial(ls_root.get().name)) {
        ls_root.get().name.set(is_prefix.get().name);
      }
      ls_root.get().order.set(iv_item_order);
      abap.statements.append({source: ls_root, assigning: fs_root_, target: ct_nodes});
      await abap.statements.cast(lo_struc, io_type);
      lt_comps.set((await lo_struc.get().get_included_view()));
      ls_next_prefix.get().path.set(abap.operators.concat(is_prefix.get().path,abap.operators.concat(fs_root_.get().name,new abap.types.Character(1).set('/'))));
      for await (const unique16 of abap.statements.loop(lt_comps)) {
        fs_c_.assign(unique16);
        abap.statements.clear(lv_mapping_prefix_name);
        fs_root_.get().children.set(abap.operators.add(fs_root_.get().children,abap.IntegerFactory.get(1)));
        ls_next_prefix.get().name.set(abap.builtin.to_lower({val: fs_c_.get().name}));
        abap.statements.assign({component: fs_c_.get().name, target: fs_val_, source: iv_data});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        if (abap.compare.initial(this.mi_custom_mapping) === false && abap.compare.eq(fs_c_.get().type.get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
          lv_mapping_prefix_name.set((await this.mi_custom_mapping.get().z2ui5_if_ajson_mapping$to_json({iv_path: ls_next_prefix.get().path, iv_name: ls_next_prefix.get().name})));
        }
        if (abap.compare.initial(lv_mapping_prefix_name) === false) {
          ls_next_prefix.get().name.set(lv_mapping_prefix_name);
        }
        if (abap.compare.eq(this.mv_keep_item_order, abap.builtin.abap_true)) {
          lv_item_order.set(fs_root_.get().children);
        }
        await this.convert_any({iv_data: fs_val_, io_type: fs_c_.get().type, is_prefix: ls_next_prefix, iv_item_order: lv_item_order, ct_nodes: ct_nodes});
      }
    }
    async convert_table(INPUT) {
      let iv_data = INPUT?.iv_data;
      let io_type = INPUT?.io_type;
      if (io_type?.getQualifiedName === undefined || io_type.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { io_type = undefined; }
      if (io_type === undefined) { io_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.io_type); }
      let is_prefix = INPUT?.is_prefix;
      if (is_prefix?.getQualifiedName === undefined || is_prefix.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME") { is_prefix = undefined; }
      if (is_prefix === undefined) { is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {}).set(INPUT.is_prefix); }
      let iv_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_index) {iv_index.set(INPUT.iv_index);}
      if (INPUT === undefined || INPUT.iv_index === undefined) {iv_index = abap.IntegerFactory.get(0);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let ct_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
      let lo_table = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
      let lo_ltype = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
      let ls_next_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
      let lv_tabix = new abap.types.Integer({qualifiedName: "I"});
      let ls_root = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      let fs_root_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
      let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
      let fs_val_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      ls_root.get().path.set(is_prefix.get().path);
      ls_root.get().name.set(is_prefix.get().name);
      ls_root.get().type.set(abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array);
      ls_root.get().index.set(iv_index);
      ls_root.get().order.set(iv_item_order);
      if (abap.compare.initial(this.mi_custom_mapping) === false) {
        ls_root.get().name.set((await this.mi_custom_mapping.get().z2ui5_if_ajson_mapping$to_json({iv_path: is_prefix.get().path, iv_name: is_prefix.get().name})));
      }
      if (abap.compare.initial(ls_root.get().name)) {
        ls_root.get().name.set(is_prefix.get().name);
      }
      abap.statements.append({source: ls_root, assigning: fs_root_, target: ct_nodes});
      await abap.statements.cast(lo_table, io_type);
      lo_ltype.set((await lo_table.get().get_table_line_type()));
      ls_next_prefix.get().path.set(abap.operators.concat(is_prefix.get().path,abap.operators.concat(fs_root_.get().name,new abap.types.Character(1).set('/'))));
      abap.statements.assign({target: fs_tab_, source: iv_data});
      lv_tabix.set(abap.IntegerFactory.get(1));
      for await (const unique17 of abap.statements.loop(fs_tab_)) {
        fs_val_.assign(unique17);
        ls_next_prefix.get().name.set(abap.builtin.to_lower({val: new abap.types.String().set(`${abap.templateFormatting(lv_tabix)}`)}));
        await this.convert_any({iv_data: fs_val_, io_type: lo_ltype, is_prefix: ls_next_prefix, iv_index: abap.operators.add(fs_root_.get().children,abap.IntegerFactory.get(1)), ct_nodes: ct_nodes});
        fs_root_.get().children.set(abap.operators.add(fs_root_.get().children,abap.IntegerFactory.get(1)));
        lv_tabix.set(abap.operators.add(lv_tabix,abap.IntegerFactory.get(1)));
      }
    }
    async insert_with_type(INPUT) {
      return lcl_abap_to_json.insert_with_type(INPUT);
    }
    static async insert_with_type(INPUT) {
      let rt_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      let iv_data = INPUT?.iv_data;
      let iv_type = INPUT?.iv_type;
      if (iv_type?.getQualifiedName === undefined || iv_type.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE") { iv_type = undefined; }
      if (iv_type === undefined) { iv_type = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}).set(INPUT.iv_type); }
      let is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {});
      if (INPUT && INPUT.is_prefix) {is_prefix.set(INPUT.is_prefix);}
      let iv_array_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_array_index) {iv_array_index.set(INPUT.iv_array_index);}
      if (INPUT === undefined || INPUT.iv_array_index === undefined) {iv_array_index = abap.IntegerFactory.get(0);}
      let ii_custom_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
      if (INPUT && INPUT.ii_custom_mapping) {ii_custom_mapping.set(INPUT.ii_custom_mapping);}
      let is_opts = new abap.types.Structure({"read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "keep_item_order": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "format_datetime": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "to_abap_corresponding_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_ajson=>ty_opts", undefined, {}, {});
      if (INPUT && INPUT.is_opts) {is_opts.set(INPUT.is_opts);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
      let lo_converter = new abap.types.ABAPObject({qualifiedName: "LCL_ABAP_TO_JSON", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_ABAP_TO_JSON"});
      lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: iv_data})));
      lo_converter.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON']()).constructor_());
      lo_converter.get().mi_custom_mapping.set(ii_custom_mapping);
      lo_converter.get().mv_keep_item_order.set(is_opts.get().keep_item_order);
      lo_converter.get().mv_format_datetime.set(is_opts.get().format_datetime);
      await lo_converter.get().insert_value_with_type({iv_data: iv_data, iv_type: iv_type, io_type: lo_type, is_prefix: is_prefix, iv_index: iv_array_index, iv_item_order: iv_item_order, ct_nodes: rt_nodes});
      return rt_nodes;
    }
    async insert_value_with_type(INPUT) {
      let iv_data = INPUT?.iv_data;
      let iv_type = INPUT?.iv_type;
      if (iv_type?.getQualifiedName === undefined || iv_type.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE") { iv_type = undefined; }
      if (iv_type === undefined) { iv_type = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}).set(INPUT.iv_type); }
      let io_type = INPUT?.io_type;
      if (io_type?.getQualifiedName === undefined || io_type.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { io_type = undefined; }
      if (io_type === undefined) { io_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.io_type); }
      let is_prefix = INPUT?.is_prefix;
      if (is_prefix?.getQualifiedName === undefined || is_prefix.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME") { is_prefix = undefined; }
      if (is_prefix === undefined) { is_prefix = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_PATH_NAME-NAME"})}, "z2ui5_if_ajson_types=>ty_path_name", undefined, {}, {}).set(INPUT.is_prefix); }
      let iv_index = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_index) {iv_index.set(INPUT.iv_index);}
      if (INPUT === undefined || INPUT.iv_index === undefined) {iv_index = abap.IntegerFactory.get(0);}
      let iv_item_order = new abap.types.Integer({qualifiedName: "I"});
      if (INPUT && INPUT.iv_item_order) {iv_item_order.set(INPUT.iv_item_order);}
      if (INPUT === undefined || INPUT.iv_item_order === undefined) {iv_item_order = abap.IntegerFactory.get(0);}
      let ct_nodes = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["PATH","NAME"]},"secondary":[]}, "z2ui5_if_ajson_types=>ty_nodes_tt");
      if (INPUT && INPUT.ct_nodes) {ct_nodes = INPUT.ct_nodes;}
      let lv_prefix = new abap.types.String({qualifiedName: "STRING"});
      let ls_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      lv_prefix.set(abap.operators.concat(is_prefix.get().path,is_prefix.get().name));
      if (abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$texts) || abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$date) || abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$time)) {
        if (abap.compare.eq(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean) && abap.compare.ne(iv_data, new abap.types.Character(4).set('true')) && abap.compare.ne(iv_data, new abap.types.Character(5).set('false'))) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected boolean value [${abap.templateFormatting(iv_data)}] @${abap.templateFormatting(lv_prefix)}`)});
        } else if (abap.compare.eq(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null) && abap.compare.initial(iv_data) === false) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected null value [${abap.templateFormatting(iv_data)}] @${abap.templateFormatting(lv_prefix)}`)});
        } else if (abap.compare.eq(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number) && abap.compare.cn(iv_data, new abap.types.Character(15).set('0123456789. E+-'))) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected numeric value [${abap.templateFormatting(iv_data)}] @${abap.templateFormatting(lv_prefix)}`)});
        } else if (abap.compare.ne(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string) && abap.compare.ne(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean) && abap.compare.ne(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null) && abap.compare.ne(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number)) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected type for value [${abap.templateFormatting(iv_type)},${abap.templateFormatting(iv_data)}] @${abap.templateFormatting(lv_prefix)}`)});
        }
      } else if (abap.compare.co(io_type.get().type_kind, abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_KIND'].lif_kind$numeric)) {
        if (abap.compare.ne(iv_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number)) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected value for numeric [${abap.templateFormatting(iv_data)}] @${abap.templateFormatting(lv_prefix)}`)});
        }
      } else {
        await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected type [${abap.templateFormatting(io_type.get().type_kind)}] @${abap.templateFormatting(lv_prefix)}`)});
      }
      ls_node.get().path.set(is_prefix.get().path);
      ls_node.get().name.set(is_prefix.get().name);
      ls_node.get().index.set(iv_index);
      ls_node.get().value.set(iv_data);
      ls_node.get().type.set(iv_type);
      ls_node.get().order.set(iv_item_order);
      if (abap.compare.initial(this.mi_custom_mapping) === false) {
        ls_node.get().name.set((await this.mi_custom_mapping.get().z2ui5_if_ajson_mapping$to_json({iv_path: is_prefix.get().path, iv_name: is_prefix.get().name})));
      }
      if (abap.compare.initial(ls_node.get().name)) {
        ls_node.get().name.set(is_prefix.get().name);
      }
      abap.statements.append({source: ls_node, target: ct_nodes});
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_ABAP_TO_JSON'] = lcl_abap_to_json;
  lcl_abap_to_json.gv_ajson_absolute_type_name = new abap.types.String({qualifiedName: "STRING"});
  class lif_mutator_runner {
    static INTERNAL_TYPE = 'INTF';
    static ATTRIBUTES = {};
    static METHODS = {"RUN": {"visibility": "U", "parameters": {"IT_SOURCE_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "is_optional": " "}, "ET_DEST_TREE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");}, "is_optional": " "}}}};
  }
  abap.Classes['CLAS-Z2UI5_CL_AJSON-LIF_MUTATOR_RUNNER'] = lif_mutator_runner;class lcl_filter_runner {
    static INTERNAL_TYPE = 'CLAS';
    static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_FILTER_RUNNER';
    static IMPLEMENTED_INTERFACES = ["LIF_MUTATOR_RUNNER"];
    static ATTRIBUTES = {"MI_FILTER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
    "MR_SOURCE_TREE": {"type": () => {return new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));}, "visibility": "I", "is_constant": " ", "is_class": " "},
    "MR_DEST_TREE": {"type": () => {return new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));}, "visibility": "I", "is_constant": " ", "is_class": " "}};
    static METHODS = {"WALK": {"visibility": "I", "parameters": {"IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CS_PARENT": {"type": () => {return new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});}, "is_optional": " "}}},
    "NEW": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_FILTER_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_FILTER_RUNNER"});}, "is_optional": " "}, "II_FILTER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});}, "is_optional": " "}}},
    "CONSTRUCTOR": {"visibility": "U", "parameters": {"II_FILTER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});}, "is_optional": " "}}}};
    constructor() {
      this.me = new abap.types.ABAPObject();
      this.me.set(this);
      this.mi_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
      this.mr_source_tree = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
      this.mr_dest_tree = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
    }
    async new(INPUT) {
      return lcl_filter_runner.new(INPUT);
    }
    static async new(INPUT) {
      let ro_instance = new abap.types.ABAPObject({qualifiedName: "LCL_FILTER_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_FILTER_RUNNER"});
      let ii_filter = INPUT?.ii_filter;
      if (ii_filter?.getQualifiedName === undefined || ii_filter.getQualifiedName() !== "Z2UI5_IF_AJSON_FILTER") { ii_filter = undefined; }
      if (ii_filter === undefined) { ii_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}).set(INPUT.ii_filter); }
      ro_instance.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_FILTER_RUNNER']()).constructor_({ii_filter: ii_filter}));
      return ro_instance;
    }
    async constructor_(INPUT) {
      let ii_filter = INPUT?.ii_filter;
      if (ii_filter?.getQualifiedName === undefined || ii_filter.getQualifiedName() !== "Z2UI5_IF_AJSON_FILTER") { ii_filter = undefined; }
      if (ii_filter === undefined) { ii_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}).set(INPUT.ii_filter); }
      abap.statements.assert(abap.compare.initial(ii_filter) === false);
      this.mi_filter.set(ii_filter);
      return this;
    }
    async lif_mutator_runner$run(INPUT) {
      let it_source_tree = INPUT?.it_source_tree;
      if (it_source_tree?.getQualifiedName === undefined || it_source_tree.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODES_TS") { it_source_tree = undefined; }
      if (it_source_tree === undefined) { it_source_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts").set(INPUT.it_source_tree); }
      let et_dest_tree = INPUT?.et_dest_tree || abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
      abap.statements.clear(et_dest_tree);
      this.mr_source_tree.assign(it_source_tree);
      this.mr_dest_tree.assign(et_dest_tree);
      await this.walk({iv_path: new abap.types.Character(1).set('')});
    }
    async walk(INPUT) {
      let iv_path = INPUT?.iv_path;
      if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
      if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
      let cs_parent = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      if (INPUT && INPUT.cs_parent) {cs_parent = INPUT.cs_parent;}
      let ls_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      let lv_tab_key = new abap.types.String({qualifiedName: "STRING"});
      if (abap.compare.eq(cs_parent.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
        lv_tab_key.set(new abap.types.Character(11).set('array_index'));
      }
      for await (const unique18 of abap.statements.loop(this.mr_source_tree.dereference(),{usingKey: lv_tab_key.get(),where: async (I) => {return abap.compare.eq(I.path, iv_path);},topEquals: {"path": iv_path}})) {
        ls_node.set(unique18);
        let unique19 = ls_node.get().type;
        if (abap.compare.eq(unique19, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean) || abap.compare.eq(unique19, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().null) || abap.compare.eq(unique19, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number) || abap.compare.eq(unique19, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string)) {
          if (abap.compare.eq((await this.mi_filter.get().z2ui5_if_ajson_filter$keep_node({is_node: ls_node})), abap.builtin.abap_false)) {
            continue;
          }
        } else if (abap.compare.eq(unique19, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array) || abap.compare.eq(unique19, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
          if (abap.compare.eq((await this.mi_filter.get().z2ui5_if_ajson_filter$keep_node({is_node: ls_node, iv_visit: abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().open})), abap.builtin.abap_false)) {
            continue;
          }
          abap.statements.clear(ls_node.get().children);
          await this.walk({iv_path: abap.operators.concat(iv_path,abap.operators.concat(ls_node.get().name,new abap.types.String().set(`/`))), cs_parent: ls_node});
          if (abap.compare.eq((await this.mi_filter.get().z2ui5_if_ajson_filter$keep_node({is_node: ls_node, iv_visit: abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().close})), abap.builtin.abap_false)) {
            continue;
          }
        } else {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.String().set(`Unexpected node type ${abap.templateFormatting(ls_node.get().type)}`)});
        }
        if (INPUT && INPUT.cs_parent) {
          cs_parent.get().children.set(abap.operators.add(cs_parent.get().children,abap.IntegerFactory.get(1)));
          if (abap.compare.eq(cs_parent.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
            ls_node.get().name.set(new abap.types.String().set(`${abap.templateFormatting(cs_parent.get().children)}`));
            ls_node.get().index.set(cs_parent.get().children);
          }
        }
        abap.statements.insertInternal({data: ls_node, table: this.mr_dest_tree.dereference()});
      }
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_FILTER_RUNNER'] = lcl_filter_runner;
  class lcl_mapper_runner {
    static INTERNAL_TYPE = 'CLAS';
    static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_MAPPER_RUNNER';
    static IMPLEMENTED_INTERFACES = ["LIF_MUTATOR_RUNNER"];
    static ATTRIBUTES = {"MI_MAPPER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
    "MR_SOURCE_TREE": {"type": () => {return new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));}, "visibility": "I", "is_constant": " ", "is_class": " "},
    "MR_DEST_TREE": {"type": () => {return new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));}, "visibility": "I", "is_constant": " ", "is_class": " "}};
    static METHODS = {"PROCESS_DEEP_NODE": {"visibility": "I", "parameters": {"IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_RENAMED_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_NODE_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"});}, "is_optional": " "}}},
    "NEW": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_MAPPER_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_MAPPER_RUNNER"});}, "is_optional": " "}, "II_MAPPER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}}},
    "CONSTRUCTOR": {"visibility": "U", "parameters": {"II_MAPPER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}}}};
    constructor() {
      this.me = new abap.types.ABAPObject();
      this.me.set(this);
      this.mi_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
      this.mr_source_tree = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
      this.mr_dest_tree = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
    }
    async new(INPUT) {
      return lcl_mapper_runner.new(INPUT);
    }
    static async new(INPUT) {
      let ro_instance = new abap.types.ABAPObject({qualifiedName: "LCL_MAPPER_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_MAPPER_RUNNER"});
      let ii_mapper = INPUT?.ii_mapper;
      if (ii_mapper?.getQualifiedName === undefined || ii_mapper.getQualifiedName() !== "Z2UI5_IF_AJSON_MAPPING") { ii_mapper = undefined; }
      if (ii_mapper === undefined) { ii_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}).set(INPUT.ii_mapper); }
      ro_instance.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_MAPPER_RUNNER']()).constructor_({ii_mapper: ii_mapper}));
      return ro_instance;
    }
    async constructor_(INPUT) {
      let ii_mapper = INPUT?.ii_mapper;
      if (ii_mapper?.getQualifiedName === undefined || ii_mapper.getQualifiedName() !== "Z2UI5_IF_AJSON_MAPPING") { ii_mapper = undefined; }
      if (ii_mapper === undefined) { ii_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}).set(INPUT.ii_mapper); }
      abap.statements.assert(abap.compare.initial(ii_mapper) === false);
      this.mi_mapper.set(ii_mapper);
      return this;
    }
    async lif_mutator_runner$run(INPUT) {
      let it_source_tree = INPUT?.it_source_tree;
      if (it_source_tree?.getQualifiedName === undefined || it_source_tree.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODES_TS") { it_source_tree = undefined; }
      if (it_source_tree === undefined) { it_source_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts").set(INPUT.it_source_tree); }
      let et_dest_tree = INPUT?.et_dest_tree || abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
      let fs_root_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
      abap.statements.readTable(it_source_tree,{assigning: fs_root_,
        withKey: (i) => {return abap.compare.eq(i.path, new abap.types.String().set(``)) && abap.compare.eq(i.name, new abap.types.String().set(``));},
        withKeyValue: [{key: (i) => {return i.path}, value: new abap.types.String().set(``)},{key: (i) => {return i.name}, value: new abap.types.String().set(``)}],
        usesTableLine: false,
        withKeySimple: {"path": new abap.types.String().set(``),"name": new abap.types.String().set(``)}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) || !(abap.compare.eq(fs_root_.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array) || abap.compare.eq(fs_root_.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object))) {
        et_dest_tree.set(it_source_tree);
        return;
      }
      abap.statements.clear(et_dest_tree);
      this.mr_source_tree.assign(it_source_tree);
      this.mr_dest_tree.assign(et_dest_tree);
      abap.statements.insertInternal({data: fs_root_, table: et_dest_tree});
      await this.process_deep_node({iv_path: new abap.types.String().set(`/`), iv_renamed_path: new abap.types.String().set(`/`), iv_node_type: fs_root_.get().type});
    }
    async process_deep_node(INPUT) {
      let iv_path = INPUT?.iv_path;
      if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
      if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
      let iv_renamed_path = INPUT?.iv_renamed_path;
      if (iv_renamed_path?.getQualifiedName === undefined || iv_renamed_path.getQualifiedName() !== "STRING") { iv_renamed_path = undefined; }
      if (iv_renamed_path === undefined) { iv_renamed_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_renamed_path); }
      let iv_node_type = INPUT?.iv_node_type;
      if (iv_node_type?.getQualifiedName === undefined || iv_node_type.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE") { iv_node_type = undefined; }
      if (iv_node_type === undefined) { iv_node_type = new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}).set(INPUT.iv_node_type); }
      let fs_item_ = new abap.types.FieldSymbol(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
      let ls_renamed_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
      for await (const unique20 of abap.statements.loop(this.mr_source_tree.dereference(),{where: async (I) => {return abap.compare.eq(I.path, iv_path);},topEquals: {"path": iv_path}})) {
        fs_item_.assign(unique20);
        ls_renamed_node.set(fs_item_);
        if (abap.compare.ne(iv_node_type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array)) {
          await this.mi_mapper.get().z2ui5_if_ajson_mapping$rename_node({is_node: fs_item_, cv_name: ls_renamed_node.get().name});
          if (abap.compare.initial(ls_renamed_node.get().name)) {
            await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(33).set('Renamed node name cannot be empty'), is_node: fs_item_});
          }
        }
        ls_renamed_node.get().path.set(iv_renamed_path);
        abap.statements.insertInternal({data: ls_renamed_node, table: this.mr_dest_tree.dereference()});
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(28).set('Renamed node has a duplicate'), is_node: ls_renamed_node});
        }
        if (abap.compare.eq(fs_item_.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().array) || abap.compare.eq(fs_item_.get().type, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().object)) {
          await this.process_deep_node({iv_path: abap.operators.concat(iv_path,abap.operators.concat(fs_item_.get().name,new abap.types.String().set(`/`))), iv_renamed_path: abap.operators.concat(iv_renamed_path,abap.operators.concat(ls_renamed_node.get().name,new abap.types.String().set(`/`))), iv_node_type: fs_item_.get().type});
        }
      }
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_MAPPER_RUNNER'] = lcl_mapper_runner;
  class lcl_mutator_queue {
    static INTERNAL_TYPE = 'CLAS';
    static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON-LCL_MUTATOR_QUEUE';
    static IMPLEMENTED_INTERFACES = ["LIF_MUTATOR_RUNNER"];
    static ATTRIBUTES = {"MT_QUEUE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LIF_MUTATOR_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\INTERFACE=LIF_MUTATOR_RUNNER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
    static METHODS = {"NEW": {"visibility": "U", "parameters": {"RO_INSTANCE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_MUTATOR_QUEUE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_MUTATOR_QUEUE"});}, "is_optional": " "}}},
    "ADD": {"visibility": "U", "parameters": {"RO_SELF": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_MUTATOR_QUEUE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_MUTATOR_QUEUE"});}, "is_optional": " "}, "II_MUTATOR": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LIF_MUTATOR_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\INTERFACE=LIF_MUTATOR_RUNNER"});}, "is_optional": " "}}}};
    constructor() {
      this.me = new abap.types.ABAPObject();
      this.me.set(this);
      this.mt_queue = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "LIF_MUTATOR_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\INTERFACE=LIF_MUTATOR_RUNNER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    }
    async constructor_(INPUT) {
      if (super.constructor_) { await super.constructor_(INPUT); }
      return this;
    }
    async add(INPUT) {
      let ro_self = new abap.types.ABAPObject({qualifiedName: "LCL_MUTATOR_QUEUE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_MUTATOR_QUEUE"});
      let ii_mutator = INPUT?.ii_mutator;
      if (ii_mutator?.getQualifiedName === undefined || ii_mutator.getQualifiedName() !== "LIF_MUTATOR_RUNNER") { ii_mutator = undefined; }
      if (ii_mutator === undefined) { ii_mutator = new abap.types.ABAPObject({qualifiedName: "LIF_MUTATOR_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\INTERFACE=LIF_MUTATOR_RUNNER"}).set(INPUT.ii_mutator); }
      if (abap.compare.initial(ii_mutator) === false) {
        abap.statements.append({source: ii_mutator, target: this.mt_queue});
      }
      ro_self.set(this.me);
      return ro_self;
    }
    async new() {
      return lcl_mutator_queue.new();
    }
    static async new() {
      let ro_instance = new abap.types.ABAPObject({qualifiedName: "LCL_MUTATOR_QUEUE", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\CLASS=LCL_MUTATOR_QUEUE"});
      ro_instance.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_MUTATOR_QUEUE']()).constructor_());
      return ro_instance;
    }
    async lif_mutator_runner$run(INPUT) {
      let it_source_tree = INPUT?.it_source_tree;
      if (it_source_tree?.getQualifiedName === undefined || it_source_tree.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODES_TS") { it_source_tree = undefined; }
      if (it_source_tree === undefined) { it_source_tree = abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts").set(INPUT.it_source_tree); }
      let et_dest_tree = INPUT?.et_dest_tree || abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts");
      let li_mutator = new abap.types.ABAPObject({qualifiedName: "LIF_MUTATOR_RUNNER", RTTIName: "\\CLASS-POOL=Z2UI5_CL_AJSON\\INTERFACE=LIF_MUTATOR_RUNNER"});
      let lv_qsize = new abap.types.Integer({qualifiedName: "I"});
      let fs_from_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
      let fs_to_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
      let lr_buf = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["PATH","NAME"]},"secondary":[{"name":"array_index","type":"SORTED","isUnique":false,"keyFields":["PATH","INDEX"]},{"name":"item_order","type":"SORTED","isUnique":false,"keyFields":["PATH","ORDER"]}]}, "z2ui5_if_ajson_types=>ty_nodes_ts"));
      lv_qsize.set(abap.builtin.lines({val: this.mt_queue}));
      if (abap.compare.eq(lv_qsize, abap.IntegerFactory.get(0))) {
        et_dest_tree.set(it_source_tree);
        return;
      }
      for await (const unique21 of abap.statements.loop(this.mt_queue)) {
        li_mutator.set(unique21);
        if (abap.compare.eq(abap.builtin.sy.get().tabix, abap.IntegerFactory.get(1))) {
          abap.statements.assign({target: fs_from_, source: it_source_tree});
        } else {
          abap.statements.assign({target: fs_from_, source: lr_buf.dereference()});
        }
        if (abap.compare.eq(abap.builtin.sy.get().tabix, lv_qsize)) {
          abap.statements.assign({target: fs_to_, source: et_dest_tree});
        } else {
          abap.statements.createData(lr_buf);
          abap.statements.assign({target: fs_to_, source: lr_buf.dereference()});
        }
        await li_mutator.get().lif_mutator_runner$run({it_source_tree: fs_from_, et_dest_tree: fs_to_});
      }
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_AJSON-LCL_MUTATOR_QUEUE'] = lcl_mutator_queue;
export {lcl_utils, lcl_json_parser, lcl_json_serializer, lcl_json_to_abap, lcl_abap_to_json, lcl_filter_runner, lcl_mapper_runner, lcl_mutator_queue, lif_kind, lif_mutator_runner};
//# sourceMappingURL=z2ui5_cl_ajson.clas.locals.mjs.map