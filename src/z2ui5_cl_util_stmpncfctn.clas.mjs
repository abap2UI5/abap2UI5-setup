const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_util_stmpncfctn.clas.abap
class z2ui5_cl_util_stmpncfctn {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UTIL_STMPNCFCTN';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"METHOD_GET_SOURCE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "IV_CLASSNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "IV_METHODNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "UUID_GET_C32": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "UUID_GET_C22": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RTTI_GET_DATA_ELEMENT_TEXTS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"header": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-HEADER"}), "short": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-SHORT"}), "medium": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-MEDIUM"}), "long": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-LONG"})}, "z2ui5_cl_util_stmpncfctn=>ty_data_element_texts", undefined, {}, {});}, "is_optional": " "}, "I_DATA_ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CONV_DECODE_X_BASE64": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CONV_ENCODE_X_BASE64": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}}},
  "CONV_GET_STRING_BY_XSTRING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}}},
  "CONV_GET_XSTRING_BY_STRING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RTTI_GET_CLASSES_IMPL_INTF": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async conv_decode_x_base64(INPUT) {
    return z2ui5_cl_util_stmpncfctn.conv_decode_x_base64(INPUT);
  }
  static async conv_decode_x_base64(INPUT) {
    let result = new abap.types.XString({qualifiedName: "XSTRING"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    let classname = new abap.types.Character(15, {});
    try {
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()].decode_x_base64 === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()].decode_x_base64 === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      result.set(await abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()].decode_x_base64({encoded: val}));
    } catch (e) {
      if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
        classname.set(new abap.types.Character(15).set('CL_HTTP_UTILITY'));
        if (abap.Classes[classname.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
        if (abap.Classes[classname.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
        if (abap.Classes[classname.get().trimEnd()].decode_x_base64 === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (abap.Classes[classname.get().trimEnd()].decode_x_base64 === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        result.set(await abap.Classes[classname.get().trimEnd()].decode_x_base64({encoded: val}));
      } else {
        throw e;
      }
    }
    return result;
  }
  async conv_encode_x_base64(INPUT) {
    return z2ui5_cl_util_stmpncfctn.conv_encode_x_base64(INPUT);
  }
  static async conv_encode_x_base64(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "XSTRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.val); }
    let classname = new abap.types.Character(15, {});
    try {
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()].encode_x_base64 === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()].encode_x_base64 === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      result.set(await abap.Classes['CL_WEB_HTTP_UTILITY'.trimEnd()].encode_x_base64({unencoded: val}));
    } catch (e) {
      if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
        classname.set(new abap.types.Character(15).set('CL_HTTP_UTILITY'));
        if (abap.Classes[classname.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
        if (abap.Classes[classname.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
        if (abap.Classes[classname.get().trimEnd()].encode_x_base64 === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (abap.Classes[classname.get().trimEnd()].encode_x_base64 === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        result.set(await abap.Classes[classname.get().trimEnd()].encode_x_base64({unencoded: val}));
      } else {
        throw e;
      }
    }
    return result;
  }
  async conv_get_string_by_xstring(INPUT) {
    return z2ui5_cl_util_stmpncfctn.conv_get_string_by_xstring(INPUT);
  }
  static async conv_get_string_by_xstring(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "XSTRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.val); }
    let conv = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let conv_in_class = new abap.types.Character(18, {});
    try {
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_in === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_in === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      conv.set(await abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_in());
      if (conv.get().if_abap_conv_in$convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (conv.get().if_abap_conv_in$convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      result.set(await conv.get().if_abap_conv_in$convert({source: val}));
    } catch (e) {
      if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
        conv_in_class.set(new abap.types.Character(18).set('CL_ABAP_CONV_IN_CE'));
        if (abap.Classes[conv_in_class.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
        if (abap.Classes[conv_in_class.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
        conv.set(await abap.Classes[conv_in_class.get().trimEnd()].create({encoding: new abap.types.Character(5).set('UTF-8')}));
        if (conv.get().convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (conv.get().convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        await conv.get().convert({input: val,data: result});
      } else {
        throw e;
      }
    }
    return result;
  }
  async conv_get_xstring_by_string(INPUT) {
    return z2ui5_cl_util_stmpncfctn.conv_get_xstring_by_string(INPUT);
  }
  static async conv_get_xstring_by_string(INPUT) {
    let result = new abap.types.XString({qualifiedName: "XSTRING"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    let conv = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let conv_out_class = new abap.types.Character(19, {});
    try {
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_out === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_out === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      conv.set(await abap.Classes['CL_ABAP_CONV_CODEPAGE'.trimEnd()].create_out());
      if (conv.get().if_abap_conv_out$convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (conv.get().if_abap_conv_out$convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      result.set(await conv.get().if_abap_conv_out$convert({source: val}));
    } catch (e) {
      if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
        conv_out_class.set(new abap.types.Character(19).set('CL_ABAP_CONV_OUT_CE'));
        if (abap.Classes[conv_out_class.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
        if (abap.Classes[conv_out_class.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
        conv.set(await abap.Classes[conv_out_class.get().trimEnd()].create({encoding: new abap.types.Character(5).set('UTF-8')}));
        if (conv.get().convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (conv.get().convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        await conv.get().convert({data: val,buffer: result});
      } else {
        throw e;
      }
    }
    return result;
  }
  async method_get_source(INPUT) {
    return z2ui5_cl_util_stmpncfctn.method_get_source(INPUT);
  }
  static async method_get_source(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let iv_classname = INPUT?.iv_classname;
    let iv_methodname = INPUT?.iv_methodname;
    let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let lt_source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lt_string = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lv_class = new abap.types.String({qualifiedName: "STRING"});
    let lv_method = new abap.types.String({qualifiedName: "STRING"});
    let lv_name = new abap.types.Character(13, {});
    let lv_check_method = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lv_source = new abap.types.String({qualifiedName: "STRING"});
    let lv_source_upper = new abap.types.String({qualifiedName: "STRING"});
    try {
      lv_class.set(abap.builtin.to_upper({val: iv_classname}));
      lv_method.set(abap.builtin.to_upper({val: iv_methodname}));
      if (abap.Classes['XCO_CP_ABAP'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
      if (abap.Classes['XCO_CP_ABAP'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
      if (abap.Classes['XCO_CP_ABAP'.trimEnd()].class === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (abap.Classes['XCO_CP_ABAP'.trimEnd()].class === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      object.set(await abap.Classes['XCO_CP_ABAP'.trimEnd()].class({iv_name: lv_class}));
      abap.statements.assign({target: fs_any_, dynamicName: 'OBJECT->IF_XCO_AO_CLASS~IMPLEMENTATION', dynamicSource: (() => {
                    try { return object; } catch {}
                    try { return this.object; } catch {}
                  })()});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
        object.set(fs_any_);
        if (object.get().if_xco_clas_implementation$method === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (object.get().if_xco_clas_implementation$method === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        object.set(await object.get().if_xco_clas_implementation$method({iv_name: lv_method}));
        if (object.get().if_xco_clas_i_method$content === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (object.get().if_xco_clas_i_method$content === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        object.set(await object.get().if_xco_clas_i_method$content());
        if (object.get().if_xco_clas_i_method_content$get_source === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (object.get().if_xco_clas_i_method_content$get_source === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        result.set(await object.get().if_xco_clas_i_method_content$get_source());
      } catch (e) {
        if ((abap.Classes['CX_SY_DYN_CALL_ERROR'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ERROR'])) {
          lv_name.set(new abap.types.Character(13).set('CL_OO_FACTORY'));
          if (abap.Classes[lv_name.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
          if (abap.Classes[lv_name.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
          if (abap.Classes[lv_name.get().trimEnd()].create_instance === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (abap.Classes[lv_name.get().trimEnd()].create_instance === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
          object.set(await abap.Classes[lv_name.get().trimEnd()].create_instance());
          if (object.get().if_oo_clif_source_factory$create_clif_source === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (object.get().if_oo_clif_source_factory$create_clif_source === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
          object.set(await object.get().if_oo_clif_source_factory$create_clif_source({clif_name: lv_class}));
          if (object.get().if_oo_clif_source$get_source === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (object.get().if_oo_clif_source$get_source === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
          await object.get().if_oo_clif_source$get_source({source: lt_source});
          lv_check_method.set(abap.builtin.abap_false);
          for await (const unique81 of abap.statements.loop(lt_source)) {
            lv_source.set(unique81);
            lv_source_upper.set(abap.builtin.to_upper({val: lv_source}));
            if (abap.compare.cs(lv_source_upper, new abap.types.String().set(`ENDMETHOD`))) {
              lv_check_method.set(abap.builtin.abap_false);
            }
            if (abap.compare.cs(lv_source_upper, abap.operators.concat(new abap.types.String().set(`METHOD `),lv_method))) {
              lv_check_method.set(abap.builtin.abap_true);
              continue;
            }
            if (abap.compare.eq(lv_check_method, abap.builtin.abap_true)) {
              abap.statements.insertInternal({data: lv_source, table: lt_string});
            }
          }
        } else {
          throw e;
        }
      }
      result.set(lt_string);
      return result;
    }
    async rtti_get_classes_impl_intf(INPUT) {
      return z2ui5_cl_util_stmpncfctn.rtti_get_classes_impl_intf(INPUT);
    }
    static async rtti_get_classes_impl_intf(INPUT) {
      let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
      let val = INPUT?.val;
      let obj = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
      let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let lt_implementation_names = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
      let lt_impl = abap.types.TableFactory.construct(new abap.types.Structure({"clsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-clsname"}), "refclsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-refclsname"})}, "ty_s_impl", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
      let ls_key = new abap.types.Structure({"intkey": new abap.types.Character(30, {"qualifiedName":"ty_s_key-intkey"})}, "ty_s_key", undefined, {}, {});
      let lv_fm = new abap.types.String({qualifiedName: "STRING"});
      let temp1 = new abap.types.Structure({"clsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-clsname"}), "refclsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-refclsname"})}, "ty_s_impl", undefined, {}, {});
      let lr_impl = new abap.types.DataReference(new abap.types.Structure({"clsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-clsname"}), "refclsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-refclsname"})}, "ty_s_impl", undefined, {}, {}));
      let temp2 = new abap.types.String({qualifiedName: "STRING"});
      try {
        if (abap.Classes['XCO_CP_ABAP'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
        if (abap.Classes['XCO_CP_ABAP'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
        if (abap.Classes['XCO_CP_ABAP'.trimEnd()].interface === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (abap.Classes['XCO_CP_ABAP'.trimEnd()].interface === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        obj.set(await abap.Classes['XCO_CP_ABAP'.trimEnd()].interface({iv_name: val}));
        abap.statements.assign({target: fs_any_, dynamicName: 'obj' + '->' + 'IF_XCO_AO_INTERFACE~IMPLEMENTATIONS', dynamicSource: (() => {
                    try { return obj; } catch {}
                    try { return this.obj; } catch {}
                  })()});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            const unique83 = await (new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS']()).constructor_();
            unique83.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util_stmpncfctn.clas.abap","INTERNAL_LINE": 317};
            throw unique83;
          }
          obj.set(fs_any_);
          abap.statements.assign({target: fs_any_, dynamicName: 'obj' + '->' + 'IF_XCO_INTF_IMPLEMENTATIONS_FC~ALL', dynamicSource: (() => {
                      try { return obj; } catch {}
                      try { return this.obj; } catch {}
                    })()});
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique84 = await (new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS']()).constructor_();
              unique84.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util_stmpncfctn.clas.abap","INTERNAL_LINE": 323};
              throw unique84;
            }
            obj.set(fs_any_);
            if (obj.get().if_xco_intf_implementations$get_names === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
            if (obj.get().if_xco_intf_implementations$get_names === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
            lt_implementation_names.set(await obj.get().if_xco_intf_implementations$get_names());
            result.set(lt_implementation_names);
          } catch (e) {
            if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
              ls_key.get().intkey.set(val);
              lv_fm.set(new abap.types.String().set(`SEO_INTERFACE_IMPLEM_GET_ALL`));
              try {
                if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; }
                if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()](); }
                await abap.FunctionModules[lv_fm.get().trimEnd()]({exporting: {intkey: ls_key}, importing: {impkeys: lt_impl}});
                abap.builtin.sy.get().subrc.set(0);
              } catch (e) {
                if (e.classic) {
                    switch (e.classic.toUpperCase()) {
                    case "NOT_EXISTING": abap.builtin.sy.get().subrc.set(1); break;
                    default: abap.builtin.sy.get().subrc.set(2); break;
                      }
                  } else {
                      throw e;
                  }
                }
                for await (const unique82 of abap.statements.loop(lt_impl)) {
                  lr_impl.assign(unique82);
                  temp2.set(lr_impl.get().clsname);
                  abap.statements.insertInternal({data: temp2, table: result});
                }
              } else {
                throw e;
              }
            }
            return result;
          }
          async rtti_get_data_element_texts(INPUT) {
            return z2ui5_cl_util_stmpncfctn.rtti_get_data_element_texts(INPUT);
          }
          static async rtti_get_data_element_texts(INPUT) {
            let result = new abap.types.Structure({"header": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-HEADER"}), "short": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-SHORT"}), "medium": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-MEDIUM"}), "long": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-LONG"})}, "z2ui5_cl_util_stmpncfctn=>ty_data_element_texts", undefined, {}, {});
            let i_data_element_name = INPUT?.i_data_element_name;
            if (i_data_element_name?.getQualifiedName === undefined || i_data_element_name.getQualifiedName() !== "STRING") { i_data_element_name = undefined; }
            if (i_data_element_name === undefined) { i_data_element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_data_element_name); }
            let ddic_ref = new abap.types.DataReference(new abap.types.Character(4));
            let data_element = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
            let content = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
            let ddic = new abap.types.Structure({"reptext": new abap.types.String({qualifiedName: "STRING"}), "scrtext_s": new abap.types.String({qualifiedName: "STRING"}), "scrtext_m": new abap.types.String({qualifiedName: "STRING"}), "scrtext_l": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
            let exists = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
            let data_element_name = new abap.types.String({qualifiedName: "STRING"});
            let temp3 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
            let struct_desrc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
            let fs_ddic_ = new abap.types.FieldSymbol(new abap.types.Character(4));
            let lo_typedescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
            let temp4 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
            let data_descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
            data_element_name.set(i_data_element_name);
            try {
              await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: new abap.types.Character(4).set('T100')});
              await abap.statements.cast(temp3, (await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_name({p_name: new abap.types.Character(5).set('DFIES')})));
              struct_desrc.set(temp3);
              if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
              await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: struct_desrc, dref: ddic_ref});
              abap.statements.assign({target: fs_ddic_, source: (ddic_ref).dereference()});
              abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
              try {
                lo_typedescr.set(await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_name({p_name: data_element_name}));
                abap.builtin.sy.get().subrc.set(0);
              } catch (e) {
                if (e.classic) {
                    switch (e.classic.toUpperCase()) {
                    default: abap.builtin.sy.get().subrc.set(1); break;
                      }
                  } else {
                      throw e;
                  }
                }
                if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                  return result;
                }
                await abap.statements.cast(temp4, lo_typedescr);
                data_descr.set(temp4);
                if (data_descr.get().get_ddic_field === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                if (data_descr.get().get_ddic_field === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                try {
                  fs_ddic_.set(await data_descr.get().get_ddic_field())
                  abap.builtin.sy.get().subrc.set(0);
                } catch (e) {
                  if (e.classic) {
                      switch (e.classic.toUpperCase()) {
                      case "NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
                      case "NO_DDIC_TYPE": abap.builtin.sy.get().subrc.set(2); break;
                      default: abap.builtin.sy.get().subrc.set(3); break;
                        }
                    } else {
                        throw e;
                    }
                  };
                  if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                    return result;
                  }
                  abap.statements.moveCorresponding(fs_ddic_, ddic);
                  result.get().header.set(ddic.get().reptext);
                  result.get().short.set(ddic.get().scrtext_s);
                  result.get().medium.set(ddic.get().scrtext_m);
                  result.get().long.set(ddic.get().scrtext_l);
                } catch (e) {
                  if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                    try {
                      if (abap.Classes['XCO_CP_ABAP_DICTIONARY'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
                      if (abap.Classes['XCO_CP_ABAP_DICTIONARY'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
                      if (abap.Classes['XCO_CP_ABAP_DICTIONARY'.trimEnd()].data_element === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (abap.Classes['XCO_CP_ABAP_DICTIONARY'.trimEnd()].data_element === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      data_element.set(await abap.Classes['XCO_CP_ABAP_DICTIONARY'.trimEnd()].data_element({iv_name: data_element_name}));
                      if (data_element.get().if_xco_ad_data_element$exists === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (data_element.get().if_xco_ad_data_element$exists === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      exists.set(await data_element.get().if_xco_ad_data_element$exists());
                      if (abap.compare.eq(exists, abap.builtin.abap_false)) {
                        return result;
                      }
                      if (data_element.get().if_xco_ad_data_element$content === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (data_element.get().if_xco_ad_data_element$content === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      content.set(await data_element.get().if_xco_ad_data_element$content());
                      if (content.get().if_xco_dtel_content$get_heading_field_label === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (content.get().if_xco_dtel_content$get_heading_field_label === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      result.get().header.set(await content.get().if_xco_dtel_content$get_heading_field_label());
                      if (content.get().if_xco_dtel_content$get_short_field_label === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (content.get().if_xco_dtel_content$get_short_field_label === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      result.get().short.set(await content.get().if_xco_dtel_content$get_short_field_label());
                      if (content.get().if_xco_dtel_content$get_medium_field_label === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (content.get().if_xco_dtel_content$get_medium_field_label === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      result.get().medium.set(await content.get().if_xco_dtel_content$get_medium_field_label());
                      if (content.get().if_xco_dtel_content$get_long_field_label === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (content.get().if_xco_dtel_content$get_long_field_label === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      result.get().long.set(await content.get().if_xco_dtel_content$get_long_field_label());
                    } catch (e) {
                      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                      } else {
                        throw e;
                      }
                    }
                  } else {
                    throw e;
                  }
                }
                return result;
              }
              async uuid_get_c22() {
                return z2ui5_cl_util_stmpncfctn.uuid_get_c22();
              }
              static async uuid_get_c22() {
                let result = new abap.types.String({qualifiedName: "STRING"});
                let uuid = new abap.types.Character(22, {});
                let lv_classname = new abap.types.String({qualifiedName: "STRING"});
                let lv_fm = new abap.types.String({qualifiedName: "STRING"});
                try {
                  try {
                    lv_classname.set(new abap.types.String().set(`CL_SYSTEM_UUID`));
                    if (abap.Classes[lv_classname.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
                    if (abap.Classes[lv_classname.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
                    uuid.set(await abap.Classes[lv_classname.get().trimEnd()].if_system_uuid_static$create_uuid_c22());
                  } catch (e) {
                    if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
                      lv_fm.set(new abap.types.String().set(`GUID_CREATE`));
                      if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; }
                      if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()](); }
                      await abap.FunctionModules[lv_fm.get().trimEnd()]({importing: {ev_guid_22: uuid}});
                    } else {
                      throw e;
                    }
                  }
                  result.set(uuid);
                } catch (e) {
                  if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
                  } else {
                    throw e;
                  }
                }
                result.set(abap.builtin.replace({val: result, sub: new abap.types.String().set(`}`), with: new abap.types.String().set(`0`), occ: abap.IntegerFactory.get(0)}));
                result.set(abap.builtin.replace({val: result, sub: new abap.types.String().set(`{`), with: new abap.types.String().set(`0`), occ: abap.IntegerFactory.get(0)}));
                result.set(abap.builtin.replace({val: result, sub: new abap.types.String().set(`"`), with: new abap.types.String().set(`0`), occ: abap.IntegerFactory.get(0)}));
                result.set(abap.builtin.replace({val: result, sub: new abap.types.String().set(`'`), with: new abap.types.String().set(`0`), occ: abap.IntegerFactory.get(0)}));
                return result;
              }
              async uuid_get_c32() {
                return z2ui5_cl_util_stmpncfctn.uuid_get_c32();
              }
              static async uuid_get_c32() {
                let result = new abap.types.String({qualifiedName: "STRING"});
                let uuid = new abap.types.Character(32, {});
                let lv_classname = new abap.types.String({qualifiedName: "STRING"});
                let lv_fm = new abap.types.String({qualifiedName: "STRING"});
                try {
                  try {
                    lv_classname.set(new abap.types.String().set(`CL_SYSTEM_UUID`));
                    if (abap.Classes[lv_classname.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
                    if (abap.Classes[lv_classname.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
                    uuid.set(await abap.Classes[lv_classname.get().trimEnd()].if_system_uuid_static$create_uuid_c32());
                  } catch (e) {
                    if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
                      lv_fm.set(new abap.types.String().set(`GUID_CREATE`));
                      if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; }
                      if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()](); }
                      await abap.FunctionModules[lv_fm.get().trimEnd()]({importing: {ev_guid_32: uuid}});
                    } else {
                      throw e;
                    }
                  }
                  result.set(uuid);
                } catch (e) {
                  if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
                  } else {
                    throw e;
                  }
                }
                return result;
              }
            }
            abap.Classes['Z2UI5_CL_UTIL_STMPNCFCTN'] = z2ui5_cl_util_stmpncfctn;
            z2ui5_cl_util_stmpncfctn.ty_data_element_texts = new abap.types.Structure({"header": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-HEADER"}), "short": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-SHORT"}), "medium": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-MEDIUM"}), "long": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_STMPNCFCTN=>TY_DATA_ELEMENT_TEXTS-LONG"})}, "z2ui5_cl_util_stmpncfctn=>ty_data_element_texts", undefined, {}, {});
export {z2ui5_cl_util_stmpncfctn};
//# sourceMappingURL=z2ui5_cl_util_stmpncfctn.clas.mjs.map