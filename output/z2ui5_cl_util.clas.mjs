const {z2ui5_cl_abap_api} = await import("./z2ui5_cl_abap_api.clas.mjs");
await import("./z2ui5_cl_util.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_util.clas.abap
class z2ui5_cl_util extends z2ui5_cl_abap_api {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UTIL';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"RTTI_GET_T_ATTRI_BY_INCLUDE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});}, "is_optional": " "}}},
  "RTTI_GET_T_DDIC_FIXED_VALUES": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-HIGH"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-DESCR"})}, "z2ui5_cl_abap_api=>ty_s_fix_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_fix_val");}, "is_optional": " "}, "ROLLNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "LANGU": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "SOURCE_GET_METHOD2": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_CLASSNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "IV_METHODNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CHECK_BOUND_A_NOT_INITAL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "CHECK_UNASSIGN_INITAL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "UNASSIGN_OBJECT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "UNASSIGN_DATA": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "CONV_GET_AS_DATA_REF": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SOURCE_METHOD_TO_FILE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IT_SOURCE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "ITAB_GET_ITAB_BY_CSV": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ITAB_GET_CSV_BY_ITAB": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "FILTER_ITAB": {"visibility": "U", "parameters": {"FILTER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}}},
  "FILTER_GET_MULTI_BY_DATA": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "FILTER_GET_DATA_BY_MULTI": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}}},
  "FILTER_GET_SQL_WHERE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}}},
  "FILTER_GET_SQL_BY_SQL_STRING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"tabname": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-TABNAME"}), "check_autoload": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "layout_id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-LAYOUT_ID"}), "count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-COUNT"}), "t_ref": new abap.types.DataReference(new abap.types.Character(4)), "where": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-WHERE"}), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi")}, "z2ui5_cl_util=>ty_S_sql", undefined, {}, {});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "URL_PARAM_GET": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "URL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "URL_PARAM_CREATE_URL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "T_PARAMS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");}, "is_optional": " "}}},
  "URL_PARAM_SET": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "URL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RTTI_GET_CLASSNAME_BY_REF": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IN": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}}},
  "RTTI_GET_INTFNAME_BY_REF": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IN": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "X_GET_LAST_T100": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": " "}}},
  "X_CHECK_RAISE": {"visibility": "U", "parameters": {"V": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "WHEN": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"});}, "is_optional": " "}}},
  "X_RAISE": {"visibility": "U", "parameters": {"V": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CONTEXT_GET_USER_TECH": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "JSON_STRINGIFY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ANY": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "XML_PARSE": {"visibility": "U", "parameters": {"XML": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ANY": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "XML_STRINGIFY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ANY": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "BOOLEAN_CHECK_BY_DATA": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "BOOLEAN_ABAP_2_JSON": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "JSON_PARSE": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "C_TRIM_UPPER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "XML_SRTTI_STRINGIFY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "XML_SRTTI_PARSE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "RTTI_DATA": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "TIME_GET_TIMESTAMPL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});}, "is_optional": " "}}},
  "TIME_SUBSTRACT_SECONDS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});}, "is_optional": " "}, "TIME": {"type": () => {return new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});}, "is_optional": " "}, "SECONDS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "C_TRIM": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "C_TRIM_LOWER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "URL_PARAM_GET_TAB": {"visibility": "U", "parameters": {"RT_PARAMS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");}, "is_optional": " "}, "I_VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "RTTI_GET_T_ATTRI_BY_OREF": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_attrdescr_tab");}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "RTTI_GET_T_ATTRI_BY_ANY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "RTTI_GET_T_ATTRI_BY_TABLE_NAME": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "is_optional": " "}, "TABLE_NAME": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "RTTI_GET_TYPE_NAME": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "RTTI_CHECK_CLASS_EXISTS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "RTTI_CHECK_TYPE_KIND_DREF": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "RTTI_GET_TYPE_KIND": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "RTTI_CHECK_REF_DATA": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "BOOLEAN_CHECK_BY_NAME": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FILTER_UPDATE_TOKENS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FILTER_GET_RANGE_T_BY_TOKEN_T": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");}, "is_optional": " "}}},
  "FILTER_GET_RANGE_BY_TOKEN": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FILTER_GET_TOKEN_T_BY_RANGE_T": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}}},
  "FILTER_GET_TOKEN_RANGE_MAPPING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");}, "is_optional": " "}}},
  "ITAB_CORRESPONDING": {"visibility": "U", "parameters": {"VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}, "TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}}},
  "ITAB_FILTER_BY_VAL": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}}},
  "ITAB_FILTER_BY_T_RANGE": {"visibility": "U", "parameters": {"VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");}, "is_optional": " "}, "TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}}},
  "TIME_GET_TIME_BY_STAMPL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Time({qualifiedName: "T"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});}, "is_optional": " "}}},
  "TIME_GET_DATE_BY_STAMPL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});}, "is_optional": " "}}},
  "CONV_COPY_REF_DATA": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "FROM": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SOURCE_GET_FILE_TYPES": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "RTTI_TAB_GET_RELATIVE_NAME": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TABLE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "CHECK_RAISE_SRTTI_INSTALLED": {"visibility": "U", "parameters": {}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async boolean_abap_2_json(INPUT) {
    return z2ui5_cl_util.boolean_abap_2_json(INPUT);
  }
  static async boolean_abap_2_json(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.initial((await this.boolean_check_by_data({val: val}))) === false) {
      if (abap.compare.eq(val, abap.builtin.abap_true)) {
        temp1.set(new abap.types.String().set(`true`));
      } else {
        temp1.set(new abap.types.String().set(`false`));
      }
      result.set(temp1);
    } else {
      result.set(val);
    }
    return result;
  }
  async boolean_check_by_data(INPUT) {
    return z2ui5_cl_util.boolean_check_by_data(INPUT);
  }
  static async boolean_check_by_data(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let val = INPUT?.val;
    let lv_type_name = new abap.types.String({qualifiedName: "STRING"});
    try {
      lv_type_name.set((await this.rtti_get_type_name({val: val})));
      result.set((await this.boolean_check_by_name({val: lv_type_name})));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    return result;
  }
  async boolean_check_by_name(INPUT) {
    return z2ui5_cl_util.boolean_check_by_name(INPUT);
  }
  static async boolean_check_by_name(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    let unique66 = val;
    if (abap.compare.eq(unique66, new abap.types.Character(9).set('ABAP_BOOL')) || abap.compare.eq(unique66, new abap.types.Character(10).set('XSDBOOLEAN')) || abap.compare.eq(unique66, new abap.types.Character(4).set('FLAG')) || abap.compare.eq(unique66, new abap.types.Character(5).set('XFLAG')) || abap.compare.eq(unique66, new abap.types.Character(5).set('XFELD')) || abap.compare.eq(unique66, new abap.types.Character(12).set('ABAP_BOOLEAN')) || abap.compare.eq(unique66, new abap.types.Character(11).set('WDY_BOOLEAN')) || abap.compare.eq(unique66, new abap.types.Character(7).set('BOOLE_D')) || abap.compare.eq(unique66, new abap.types.Character(10).set('OS_BOOLEAN'))) {
      result.set(abap.builtin.abap_true);
    }
    return result;
  }
  async check_bound_a_not_inital(INPUT) {
    return z2ui5_cl_util.check_bound_a_not_inital(INPUT);
  }
  static async check_bound_a_not_inital(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let val = INPUT?.val;
    if (val === undefined) { val = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.val); }
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    if (abap.compare.initial(val)) {
      result.set(abap.builtin.abap_false);
      return result;
    }
    temp1.set(abap.builtin.boolc(abap.compare.eq((await this.check_unassign_inital({val: val})), abap.builtin.abap_false)));
    result.set(temp1);
    return result;
  }
  async check_unassign_inital(INPUT) {
    return z2ui5_cl_util.check_unassign_inital(INPUT);
  }
  static async check_unassign_inital(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let val = INPUT?.val;
    if (val === undefined) { val = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.val); }
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    if (abap.compare.initial(val)) {
      result.set(abap.builtin.abap_true);
      return result;
    }
    abap.statements.assign({target: fs_any_, source: val.dereference()});
    temp2.set(abap.builtin.boolc(abap.compare.initial(fs_any_)));
    result.set(temp2);
    return result;
  }
  async conv_copy_ref_data(INPUT) {
    return z2ui5_cl_util.conv_copy_ref_data(INPUT);
  }
  static async conv_copy_ref_data(INPUT) {
    let result = new abap.types.DataReference(new abap.types.Character(4));
    let from = INPUT?.from;
    let fs_from_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_result_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    if (abap.compare.initial((await this.rtti_check_ref_data({val: from}))) === false) {
      abap.statements.assign({target: fs_from_, source: from.dereference()});
    } else {
      abap.statements.assign({target: fs_from_, source: from});
    }
    abap.statements.createData(result,{"like": fs_from_});
    abap.statements.assign({target: fs_result_, source: result.dereference()});
    fs_result_.set(fs_from_);
    return result;
  }
  async conv_get_as_data_ref(INPUT) {
    return z2ui5_cl_util.conv_get_as_data_ref(INPUT);
  }
  static async conv_get_as_data_ref(INPUT) {
    let result = new abap.types.DataReference(new abap.types.Character(4));
    let val = INPUT?.val;
    result.assign(val);
    return result;
  }
  async c_trim(INPUT) {
    return z2ui5_cl_util.c_trim(INPUT);
  }
  static async c_trim(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    temp2.set(val);
    result.set(abap.builtin.shift_left({val: abap.builtin.shift_right({val: temp2})}));
    result.set(abap.builtin.shift_right({val: result, sub: abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab}));
    result.set(abap.builtin.shift_left({val: result, sub: abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab}));
    result.set(abap.builtin.shift_left({val: abap.builtin.shift_right({val: result})}));
    return result;
  }
  async c_trim_lower(INPUT) {
    return z2ui5_cl_util.c_trim_lower(INPUT);
  }
  static async c_trim_lower(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    temp3.set(val);
    result.set((abap.builtin.to_lower({val: (await this.c_trim({val: temp3}))})));
    return result;
  }
  async c_trim_upper(INPUT) {
    return z2ui5_cl_util.c_trim_upper(INPUT);
  }
  static async c_trim_upper(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    temp4.set(val);
    result.set((abap.builtin.to_upper({val: (await this.c_trim({val: temp4}))})));
    return result;
  }
  async filter_itab(INPUT) {
    return z2ui5_cl_util.filter_itab(INPUT);
  }
  static async filter_itab(INPUT) {
    let filter = INPUT?.filter;
    if (filter?.getQualifiedName === undefined || filter.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_T_FILTER_MULTI") { filter = undefined; }
    if (filter === undefined) { filter = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi").set(INPUT.filter); }
    let val = abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});
    if (INPUT && INPUT.val) {val = INPUT.val;}
    let ref = new abap.types.DataReference(new abap.types.Character(4));
    let ls_filter = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {});
    let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    for await (const unique67 of abap.statements.loop(val)) {
      ref.assign(unique67);
      for await (const unique68 of abap.statements.loop(filter)) {
        ls_filter.set(unique68);
        abap.statements.assign({target: fs_field_, dynamicName: 'ref' + '->' + ls_filter.get().name.get(), dynamicSource: (() => {
                    try { return ref; } catch {}
                    try { return this.ref; } catch {}
                  })()});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            continue;
          }
          if (!abap.compare.in(fs_field_, ls_filter.get().t_range)) {
            await abap.statements.deleteInternal(val);
            break;
          }
        }
      }
    }
    async filter_get_multi_by_data(INPUT) {
      return z2ui5_cl_util.filter_get_multi_by_data(INPUT);
    }
    static async filter_get_multi_by_data(INPUT) {
      let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");
      let val = INPUT?.val;
      let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
      let temp1 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
      let lr_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
      let temp6 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {});
      temp5.set((await this.rtti_get_t_attri_by_any({val: val})));
      for await (const unique69 of abap.statements.loop(temp5)) {
        lr_comp.assign(unique69);
        abap.statements.clear(temp6);
        temp6.get().name.set(lr_comp.get().name);
        abap.statements.insertInternal({data: temp6, table: result});
      }
      return result;
    }
    async filter_get_range_by_token(INPUT) {
      return z2ui5_cl_util.filter_get_range_by_token(INPUT);
    }
    static async filter_get_range_by_token(INPUT) {
      let result = new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {});
      let value = new abap.types.String({qualifiedName: "STRING"});
      if (INPUT && INPUT.value) {value.set(INPUT.value);}
      let lv_length = new abap.types.Integer({qualifiedName: "I"});
      lv_length.set(abap.operators.minus(abap.builtin.strlen({val: value}),abap.IntegerFactory.get(1)));
      let unique70 = value.getOffset({length: 1});
      if (abap.compare.eq(unique70, new abap.types.String().set(`=`))) {
        abap.statements.clear(result);
        result.get().sign.set(new abap.types.String().set(`I`));
        result.get().option.set(new abap.types.String().set(`EQ`));
        result.get().low.set(value.getOffset({offset: 1}));
      } else if (abap.compare.eq(unique70, new abap.types.String().set(`<`))) {
        if (abap.compare.eq(value.getOffset({offset: 1, length: 1}), new abap.types.String().set(`=`))) {
          abap.statements.clear(result);
          result.get().sign.set(new abap.types.String().set(`I`));
          result.get().option.set(new abap.types.String().set(`LE`));
          result.get().low.set(value.getOffset({offset: 2}));
        } else {
          abap.statements.clear(result);
          result.get().sign.set(new abap.types.String().set(`I`));
          result.get().option.set(new abap.types.String().set(`LT`));
          result.get().low.set(value.getOffset({offset: 1}));
        }
      } else if (abap.compare.eq(unique70, new abap.types.String().set(`>`))) {
        if (abap.compare.eq(value.getOffset({offset: 1, length: 1}), new abap.types.String().set(`=`))) {
          abap.statements.clear(result);
          result.get().sign.set(new abap.types.String().set(`I`));
          result.get().option.set(new abap.types.String().set(`GE`));
          result.get().low.set(value.getOffset({offset: 2}));
        } else {
          abap.statements.clear(result);
          result.get().sign.set(new abap.types.String().set(`I`));
          result.get().option.set(new abap.types.String().set(`GT`));
          result.get().low.set(value.getOffset({offset: 1}));
        }
      } else if (abap.compare.eq(unique70, new abap.types.String().set(`*`))) {
        if (abap.compare.eq(value.getOffset({offset: lv_length, length: 1}), new abap.types.String().set(`*`))) {
          abap.statements.shift(value, {direction: 'RIGHT',deletingTrailing: new abap.types.String().set(`*`)});
          abap.statements.shift(value, {direction: 'LEFT',deletingLeading: new abap.types.String().set(`*`)});
          abap.statements.clear(result);
          result.get().sign.set(new abap.types.String().set(`I`));
          result.get().option.set(new abap.types.String().set(`CP`));
          result.get().low.set(value);
        }
      } else {
        if (abap.compare.cp(value, new abap.types.String().set(`...`))) {
          abap.statements.split({source: value, at: new abap.types.String().set(`...`), targets: [result.get().low,result.get().high]});
          result.get().option.set(new abap.types.String().set(`BT`));
        } else {
          abap.statements.clear(result);
          result.get().sign.set(new abap.types.String().set(`I`));
          result.get().option.set(new abap.types.String().set(`EQ`));
          result.get().low.set(value);
        }
      }
      return result;
    }
    async filter_update_tokens(INPUT) {
      return z2ui5_cl_util.filter_update_tokens(INPUT);
    }
    static async filter_update_tokens(INPUT) {
      let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");
      let val = INPUT?.val;
      if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_T_FILTER_MULTI") { val = undefined; }
      if (val === undefined) { val = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi").set(INPUT.val); }
      let name = INPUT?.name;
      if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
      if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
      let fs_temp7_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}));
      let lr_filter = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}));
      let ls_token = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {});
      let temp8 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {});
      let lt_token = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");
      let temp2 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {});
      let temp3 = new abap.types.Integer({qualifiedName: "I"});
      let lt_range = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");
      let temp4 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {});
      let temp5 = new abap.types.Integer({qualifiedName: "I"});
      result.set(val);
      abap.statements.readTable(result,{assigning: fs_temp7_,
        withKey: (i) => {return abap.compare.eq(i.name, name);},
        withKeyValue: [{key: (i) => {return i.name}, value: name}],
        usesTableLine: false,
        withKeySimple: {"name": name}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lr_filter.assign(fs_temp7_.getPointer());
      for await (const unique71 of abap.statements.loop(lr_filter.get().t_token_removed)) {
        ls_token.set(unique71);
        await abap.statements.deleteInternal(lr_filter.get().t_token,{where: async (I) => {return abap.compare.eq(I.key, ls_token.get().key);}});
      }
      for await (const unique72 of abap.statements.loop(lr_filter.get().t_token_added)) {
        ls_token.set(unique72);
        abap.statements.clear(temp8);
        temp8.get().key.set(ls_token.get().key);
        temp8.get().text.set(ls_token.get().text);
        temp8.get().visible.set(abap.builtin.abap_true);
        temp8.get().editable.set(abap.builtin.abap_true);
        abap.statements.insertInternal({data: temp8, table: lr_filter.get().t_token});
      }
      abap.statements.clear(lr_filter.get().t_token_removed);
      abap.statements.clear(lr_filter.get().t_token_added);
      temp3.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(result,{into: temp2,
        withKey: (i) => {return abap.compare.eq(i.name, name);},
        withKeyValue: [{key: (i) => {return i.name}, value: name}],
        usesTableLine: false,
        withKeySimple: {"name": name}});
      abap.builtin.sy.get().tabix.set(temp3);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lt_token.set(temp2.get().t_token);
      temp5.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(result,{into: temp4,
        withKey: (i) => {return abap.compare.eq(i.name, name);},
        withKeyValue: [{key: (i) => {return i.name}, value: name}],
        usesTableLine: false,
        withKeySimple: {"name": name}});
      abap.builtin.sy.get().tabix.set(temp5);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lt_range.set((await abap.Classes['Z2UI5_CL_UTIL'].filter_get_range_t_by_token_t({val: temp4.get().t_token})));
      lr_filter.get().t_range.set(lt_range);
      return result;
    }
    async filter_get_range_t_by_token_t(INPUT) {
      return z2ui5_cl_util.filter_get_range_t_by_token_t(INPUT);
    }
    static async filter_get_range_t_by_token_t(INPUT) {
      let result = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");
      let val = INPUT?.val;
      if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_T_TOKEN") { val = undefined; }
      if (val === undefined) { val = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token").set(INPUT.val); }
      let ls_token = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {});
      for await (const unique73 of abap.statements.loop(val)) {
        ls_token.set(unique73);
        abap.statements.insertInternal({data: (await this.filter_get_range_by_token({value: ls_token.get().text})), table: result});
      }
      return result;
    }
    async filter_get_token_range_mapping() {
      return z2ui5_cl_util.filter_get_token_range_mapping();
    }
    static async filter_get_token_range_mapping() {
      let result = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
      let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
      let temp10 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
      abap.statements.clear(temp9);
      temp10.get().n.set(new abap.types.String().set(`EQ`));
      temp10.get().v.set(new abap.types.String().set(`={LOW}`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`LT`));
      temp10.get().v.set(new abap.types.String().set(`<{LOW}`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`LE`));
      temp10.get().v.set(new abap.types.String().set(`<={LOW}`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`GT`));
      temp10.get().v.set(new abap.types.String().set(`>{LOW}`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`GE`));
      temp10.get().v.set(new abap.types.String().set(`>={LOW}`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`CP`));
      temp10.get().v.set(new abap.types.String().set(`*{LOW}*`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`BT`));
      temp10.get().v.set(new abap.types.String().set(`{LOW}...{HIGH}`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`NE`));
      temp10.get().v.set(new abap.types.String().set(`!(={LOW})`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`NE`));
      temp10.get().v.set(new abap.types.String().set(`!(<leer>)`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      temp10.get().n.set(new abap.types.String().set(`<leer>`));
      temp10.get().v.set(new abap.types.String().set(`<leer>`));
      abap.statements.insertInternal({data: temp10, table: temp9});
      result.set(temp9);
      return result;
    }
    async filter_get_token_t_by_range_t(INPUT) {
      return z2ui5_cl_util.filter_get_token_t_by_range_t(INPUT);
    }
    static async filter_get_token_t_by_range_t(INPUT) {
      let result = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");
      let val = INPUT?.val;
      let lt_mapping = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
      let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");
      let lt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");
      let temp12 = new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {});
      let lr_row = new abap.types.DataReference(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}));
      let lv_value = new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"});
      let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
      let temp7 = new abap.types.Integer({qualifiedName: "I"});
      let temp13 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {});
      lt_mapping.set((await this.filter_get_token_range_mapping()));
      abap.statements.clear(temp11);
      lt_tab.set(temp11);
      await this.itab_corresponding({val: val, tab: lt_tab});
      for await (const unique74 of abap.statements.loop(lt_tab)) {
        lr_row.assign(unique74);
        temp7.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(lt_mapping,{into: temp6,
          withKey: (i) => {return abap.compare.eq(i.n, lr_row.get().option);},
          withKeyValue: [{key: (i) => {return i.n}, value: lr_row.get().option}],
          usesTableLine: false,
          withKeySimple: {"n": lr_row.get().option}});
        abap.builtin.sy.get().tabix.set(temp7);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        lv_value.set(temp6.get().v);
        abap.statements.replace({target: lv_value, all: false, with: lr_row.get().low, of: new abap.types.String().set(`{LOW}`)});
        abap.statements.replace({target: lv_value, all: false, with: lr_row.get().high, of: new abap.types.String().set(`{HIGH}`)});
        abap.statements.clear(temp13);
        temp13.get().key.set(lv_value);
        temp13.get().text.set(lv_value);
        temp13.get().visible.set(abap.builtin.abap_true);
        temp13.get().editable.set(abap.builtin.abap_true);
        abap.statements.insertInternal({data: temp13, table: result});
      }
      return result;
    }
    async itab_filter_by_val(INPUT) {
      return z2ui5_cl_util.itab_filter_by_val(INPUT);
    }
    static async itab_filter_by_val(INPUT) {
      let val = INPUT?.val;
      let tab = abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});
      if (INPUT && INPUT.tab) {tab = INPUT.tab;}
      let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let lv_row = new abap.types.String({qualifiedName: "STRING"});
      let lv_index = new abap.types.Integer({qualifiedName: "I"});
      let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      for await (const unique75 of abap.statements.loop(tab)) {
        fs_row_.assign(unique75);
        lv_row.set(new abap.types.String().set(``));
        lv_index.set(abap.IntegerFactory.get(1));
        const indexBackup1 = abap.builtin.sy.get().index.get();
        let unique76 = 1;
        while (true) {
          abap.builtin.sy.get().index.set(unique76++);
          abap.statements.assign({component: lv_index, target: fs_field_, source: fs_row_});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            break;
          }
          lv_row.set(abap.operators.concat(lv_row,fs_field_));
          lv_index.set(abap.operators.add(lv_index,abap.IntegerFactory.get(1)));
        }
        abap.builtin.sy.get().index.set(indexBackup1);
        if (abap.compare.ns(lv_row, val)) {
          await abap.statements.deleteInternal(tab);
        }
      }
    }
    async itab_get_csv_by_itab(INPUT) {
      return z2ui5_cl_util.itab_get_csv_by_itab(INPUT);
    }
    static async itab_get_csv_by_itab(INPUT) {
      let result = new abap.types.String({qualifiedName: "STRING"});
      let val = INPUT?.val;
      let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
      let temp14 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
      let tab = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
      let temp15 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
      let struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
      let temp16 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
      let temp8 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
      let lr_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
      let lr_row = new abap.types.DataReference(new abap.types.Character(4));
      let lv_index = new abap.types.Integer({qualifiedName: "I"});
      let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      abap.statements.assign({target: fs_tab_, source: val});
      await abap.statements.cast(temp14, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: fs_tab_})));
      tab.set(temp14);
      await abap.statements.cast(temp15, (await tab.get().get_table_line_type()));
      struc.set(temp15);
      temp16.set((await struc.get().get_components()));
      for await (const unique77 of abap.statements.loop(temp16)) {
        lr_comp.assign(unique77);
        result.set(abap.operators.concat(result,abap.operators.concat(lr_comp.get().name,new abap.types.Character(1).set(';'))));
      }
      result.set(abap.operators.concat(result,abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf));
      for await (const unique78 of abap.statements.loop(fs_tab_)) {
        lr_row.assign(unique78);
        lv_index.set(abap.IntegerFactory.get(1));
        const indexBackup1 = abap.builtin.sy.get().index.get();
        let unique79 = 1;
        while (true) {
          abap.builtin.sy.get().index.set(unique79++);
          abap.statements.assign({target: fs_row_, source: lr_row.dereference()});
          abap.statements.assign({component: lv_index, target: fs_field_, source: fs_row_});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            break;
          }
          lv_index.set(abap.operators.add(lv_index,abap.IntegerFactory.get(1)));
          result.set(abap.operators.concat(result,abap.operators.concat(fs_field_,new abap.types.Character(1).set(';'))));
        }
        abap.builtin.sy.get().index.set(indexBackup1);
        result.set(abap.operators.concat(result,abap.Classes['CL_ABAP_CHAR_UTILITIES'].cr_lf));
      }
      return result;
    }
    async itab_get_itab_by_csv(INPUT) {
      return z2ui5_cl_util.itab_get_itab_by_csv(INPUT);
    }
    static async itab_get_itab_by_csv(INPUT) {
      let result = new abap.types.DataReference(new abap.types.Character(4));
      let val = INPUT?.val;
      if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
      if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
      let lt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
      let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
      let lr_row = new abap.types.DataReference(new abap.types.Character(4));
      
      let lt_rows = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp1");
      
      let lt_cols = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp2");
      let temp9 = new abap.types.String({qualifiedName: "STRING"});
      let temp10 = new abap.types.Integer({qualifiedName: "I"});
      let temp17 = new abap.types.String({qualifiedName: "STRING"});
      let lr_col = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
      let lv_name = new abap.types.String({qualifiedName: "STRING"});
      let temp18 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
      let struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
      let temp19 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
      let o_table_desc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
      let temp20 = new abap.types.String({qualifiedName: "STRING"});
      let lr_rows = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
      let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      abap.statements.split({source: val, at: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline, table: lt_rows});
      temp10.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_rows,{index: abap.IntegerFactory.get(1),
        into: temp9});
      abap.builtin.sy.get().tabix.set(temp10);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      abap.statements.split({source: temp9, at: new abap.types.Character(1).set(';'), table: lt_cols});
      for await (const unique80 of abap.statements.loop(lt_cols)) {
        lr_col.assign(unique80);
        lv_name.set((await this.c_trim_upper({val: lr_col.dereference()})));
        abap.statements.replace({target: lv_name, all: false, with: new abap.types.String().set(`_`), of: new abap.types.String().set(` `)});
        abap.statements.clear(temp18);
        temp18.get().name.set(lv_name);
        temp18.get().type.set((await abap.Classes['CL_ABAP_ELEMDESCR'].get_c({p_length: abap.IntegerFactory.get(40)})));
        abap.statements.insertInternal({data: temp18, table: lt_comp});
      }
      struc.set((await abap.Classes['CL_ABAP_STRUCTDESCR'].get({p_components: lt_comp})));
      await abap.statements.cast(temp19, struc);
      o_table_desc.set((await abap.Classes['CL_ABAP_TABLEDESCR'].create({p_line_type: temp19, p_table_kind: abap.Classes['CL_ABAP_TABLEDESCR'].tablekind_std, p_unique: abap.builtin.abap_false})));
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: o_table_desc, dref: result});
      abap.statements.assign({target: fs_tab_, source: result.dereference()});
      await abap.statements.deleteInternal(lt_rows,{where: async (I) => {return abap.compare.initial(I.table_line);}});
      for await (const unique81 of abap.statements.loop(lt_rows,{from: abap.IntegerFactory.get(2)})) {
        lr_rows.assign(unique81);
        abap.statements.split({source: lr_rows.dereference(), at: new abap.types.Character(1).set(';'), table: lt_cols});
        if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
        await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: struc, dref: lr_row});
        for await (const unique82 of abap.statements.loop(lt_cols)) {
          lr_col.assign(unique82);
          abap.statements.assign({target: fs_row_, source: lr_row.dereference()});
          abap.statements.assign({component: abap.builtin.sy.get().tabix, target: fs_field_, source: fs_row_});
          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
          fs_field_.set(lr_col.dereference());
        }
        abap.statements.insertInternal({data: fs_row_, table: fs_tab_});
      }
      return result;
    }
    async json_parse(INPUT) {
      return z2ui5_cl_util.json_parse(INPUT);
    }
    static async json_parse(INPUT) {
      let val = INPUT?.val;
      let data = new abap.types.Character(4);
      if (INPUT && INPUT.data) {data = INPUT.data;}
      let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
      try {
        await (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: val})).get().z2ui5_if_ajson$to_abap({iv_corresponding: abap.builtin.abap_true, ev_container: data});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          x.set(e);
          abap.statements.assert(abap.compare.initial(x));
        } else {
          throw e;
        }
      }
    }
    async json_stringify(INPUT) {
      return z2ui5_cl_util.json_stringify(INPUT);
    }
    static async json_stringify(INPUT) {
      let result = new abap.types.String({qualifiedName: "STRING"});
      let any = INPUT?.any;
      let temp21 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
      let li_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
      let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
      try {
        await abap.statements.cast(temp21, (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
        li_ajson.set(temp21);
        result.set((await (await li_ajson.get().z2ui5_if_ajson$set({iv_path: new abap.types.String().set(`/`), iv_val: any})).get().z2ui5_if_ajson$stringify()));
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          x.set(e);
          abap.statements.assert(abap.compare.initial(x));
        } else {
          throw e;
        }
      }
      return result;
    }
    async rtti_check_class_exists(INPUT) {
      return z2ui5_cl_util.rtti_check_class_exists(INPUT);
    }
    static async rtti_check_class_exists(INPUT) {
      let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      let val = INPUT?.val;
      try {
        try {
          await abap.Classes['CL_ABAP_CLASSDESCR'].describe_by_name({p_name: val});
          abap.builtin.sy.get().subrc.set(0);
        } catch (e) {
          if (e.classic) {
              switch (e.classic.toUpperCase()) {
              case "TYPE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
                }
            } else {
                throw e;
            }
          }
          if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            result.set(abap.builtin.abap_true);
          }
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          } else {
            throw e;
          }
        }
        return result;
      }
      async rtti_check_ref_data(INPUT) {
        return z2ui5_cl_util.rtti_check_ref_data(INPUT);
      }
      static async rtti_check_ref_data(INPUT) {
        let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
        let val = INPUT?.val;
        let lo_typdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
        let temp22 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REFDESCR", RTTIName: "\\CLASS=CL_ABAP_REFDESCR"});
        let lo_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REFDESCR", RTTIName: "\\CLASS=CL_ABAP_REFDESCR"});
        try {
          lo_typdescr.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: val})));
          await abap.statements.cast(temp22, lo_typdescr);
          lo_ref.set(temp22);
          result.set(abap.builtin.abap_true);
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          } else {
            throw e;
          }
        }
        return result;
      }
      async rtti_check_type_kind_dref(INPUT) {
        return z2ui5_cl_util.rtti_check_type_kind_dref(INPUT);
      }
      static async rtti_check_type_kind_dref(INPUT) {
        let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
        let val = INPUT?.val;
        let lv_type_kind = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
        let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
        lv_type_kind.set((await abap.Classes['CL_ABAP_DATADESCR'].get_data_type_kind({p_data: val})));
        temp3.set(abap.builtin.boolc(abap.compare.eq(lv_type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_dref)));
        result.set(temp3);
        return result;
      }
      async rtti_get_classname_by_ref(INPUT) {
        return z2ui5_cl_util.rtti_get_classname_by_ref(INPUT);
      }
      static async rtti_get_classname_by_ref(INPUT) {
        let result = new abap.types.String({qualifiedName: "STRING"});
        let $in = INPUT?.in;
        if ($in === undefined) { $in = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.in); }
        let lv_classname = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
        lv_classname.set((await abap.Classes['CL_ABAP_CLASSDESCR'].get_class_name({p_object: $in})));
        result.set(abap.builtin.substring_after({val: lv_classname, sub: new abap.types.String().set(`\\CLASS=`)}));
        return result;
      }
      async rtti_get_intfname_by_ref(INPUT) {
        return z2ui5_cl_util.rtti_get_intfname_by_ref(INPUT);
      }
      static async rtti_get_intfname_by_ref(INPUT) {
        let result = new abap.types.String({qualifiedName: "STRING"});
        let $in = INPUT?.in;
        let rtti = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
        let temp23 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REFDESCR", RTTIName: "\\CLASS=CL_ABAP_REFDESCR"});
        let ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REFDESCR", RTTIName: "\\CLASS=CL_ABAP_REFDESCR"});
        let name = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
        rtti.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: $in})));
        await abap.statements.cast(temp23, rtti);
        ref.set(temp23);
        name.set(((await ref.get().get_referenced_type())).get().absolute_name);
        result.set(abap.builtin.substring_after({val: name, sub: new abap.types.String().set(`\\INTERFACE=`)}));
        return result;
      }
      async rtti_get_type_kind(INPUT) {
        return z2ui5_cl_util.rtti_get_type_kind(INPUT);
      }
      static async rtti_get_type_kind(INPUT) {
        let result = new abap.types.String({qualifiedName: "STRING"});
        let val = INPUT?.val;
        result.set((await abap.Classes['CL_ABAP_DATADESCR'].get_data_type_kind({p_data: val})));
        return result;
      }
      async rtti_get_type_name(INPUT) {
        return z2ui5_cl_util.rtti_get_type_name(INPUT);
      }
      static async rtti_get_type_name(INPUT) {
        let result = new abap.types.String({qualifiedName: "STRING"});
        let val = INPUT?.val;
        let lo_descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
        let temp24 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
        let lo_ele = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
        try {
          lo_descr.set((await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: val})));
          await abap.statements.cast(temp24, lo_descr);
          lo_ele.set(temp24);
          result.set((await lo_ele.get().get_relative_name()));
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          } else {
            throw e;
          }
        }
        return result;
      }
      async rtti_get_t_attri_by_include(INPUT) {
        return z2ui5_cl_util.rtti_get_t_attri_by_include(INPUT);
      }
      static async rtti_get_t_attri_by_include(INPUT) {
        let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
        let type = INPUT?.type;
        if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "CL_ABAP_DATADESCR") { type = undefined; }
        if (type === undefined) { type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}).set(INPUT.type); }
        let temp25 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
        let sdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
        let comps = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
        let temp26 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
        let lr_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
        let incl_comps = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
        let temp27 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
        let lr_incl_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
        await abap.statements.cast(temp25, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: type.get().absolute_name})));
        sdescr.set(temp25);
        comps.set((await sdescr.get().get_components()));
        for await (const unique83 of abap.statements.loop(comps)) {
          lr_comp.assign(unique83);
          if (abap.compare.eq(lr_comp.get().as_include, abap.builtin.abap_true)) {
            incl_comps.set((await this.rtti_get_t_attri_by_include({type: lr_comp.get().type})));
            for await (const unique84 of abap.statements.loop(incl_comps)) {
              lr_incl_comp.assign(unique84);
              lr_incl_comp.get().name.set(lr_incl_comp.get().name);
              abap.statements.append({source: lr_incl_comp.dereference(), target: result});
            }
          } else {
            lr_comp.get().name.set(lr_comp.get().name);
            abap.statements.append({source: lr_comp.dereference(), target: result});
          }
        }
        return result;
      }
      async rtti_get_t_attri_by_oref(INPUT) {
        return z2ui5_cl_util.rtti_get_t_attri_by_oref(INPUT);
      }
      static async rtti_get_t_attri_by_oref(INPUT) {
        let result = abap.types.TableFactory.construct(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_attrdescr_tab");
        let val = INPUT?.val;
        let lo_obj_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
        let temp28 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR", RTTIName: "\\CLASS=CL_ABAP_CLASSDESCR"});
        lo_obj_ref.set((await abap.Classes['CL_ABAP_OBJECTDESCR'].describe_by_object_ref({p_object_ref: val})));
        await abap.statements.cast(temp28, lo_obj_ref);
        result.set(temp28.get().attributes);
        return result;
      }
      async rtti_get_t_attri_by_any(INPUT) {
        return z2ui5_cl_util.rtti_get_t_attri_by_any(INPUT);
      }
      static async rtti_get_t_attri_by_any(INPUT) {
        let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
        let val = INPUT?.val;
        let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
        let temp29 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
        let lo_struct = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
        let temp30 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
        let lo_tab = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
        let temp31 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
        let lo_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
        let temp32 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
        let temp33 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
        let temp34 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
        let temp35 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
        let lr_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
        let lt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
        try {
          lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: val})));
          await abap.statements.cast(temp29, lo_type);
          lo_struct.set(temp29);
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            try {
              await abap.statements.cast(temp30, lo_type);
              lo_tab.set(temp30);
              await abap.statements.cast(temp31, (await lo_tab.get().get_table_line_type()));
              lo_struct.set(temp31);
            } catch (e) {
              if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                try {
                  lo_ref.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data_ref({p_data_ref: val})));
                  await abap.statements.cast(temp32, lo_ref);
                  lo_struct.set(temp32);
                } catch (e) {
                  if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                    await abap.statements.cast(temp33, lo_ref);
                    lo_tab.set(temp33);
                    await abap.statements.cast(temp34, (await lo_tab.get().get_table_line_type()));
                    lo_struct.set(temp34);
                  } else {
                    throw e;
                  }
                }
              } else {
                throw e;
              }
            }
          } else {
            throw e;
          }
        }
        result.set((await lo_struct.get().get_components()));
        for await (const unique85 of abap.statements.loop(result,{where: async (I) => {return abap.compare.eq(I.as_include, abap.builtin.abap_true);},topEquals: {"as_include": abap.builtin.abap_true}})) {
          lr_comp.assign(unique85);
          lt_attri.set((await this.rtti_get_t_attri_by_include({type: lr_comp.get().type})));
          await abap.statements.deleteInternal(result);
          abap.statements.insertInternal({lines: true, data: lt_attri, table: result});
        }
        return result;
      }
      async rtti_get_t_ddic_fixed_values(INPUT) {
        return z2ui5_cl_util.rtti_get_t_ddic_fixed_values(INPUT);
      }
      static async rtti_get_t_ddic_fixed_values(INPUT) {
        let result = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-HIGH"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-DESCR"})}, "z2ui5_cl_abap_api=>ty_s_fix_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_fix_val");
        let rollname = INPUT?.rollname;
        let langu = INPUT?.langu || new abap.types.Character();
        if (INPUT === undefined || INPUT.langu === undefined) {langu = abap.builtin.sy.get().langu;}
        let temp36 = new abap.types.String({qualifiedName: "STRING"});
        let typedescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
        let temp37 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
        let elemdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
        if (abap.compare.initial(rollname)) {
          return result;
        }
        try {
          temp36.set(rollname);
          try {
            typedescr.set(await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: temp36}));
            abap.builtin.sy.get().subrc.set(0);
          } catch (e) {
            if (e.classic) {
                switch (e.classic.toUpperCase()) {
                case "TYPE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
                default: abap.builtin.sy.get().subrc.set(2); break;
                  }
              } else {
                  throw e;
              }
            }
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              return result;
            }
            await abap.statements.cast(temp37, typedescr);
            elemdescr.set(temp37);
            result.set((await this.rtti_get_t_fixvalues({elemdescr: elemdescr, langu: langu})));
          } catch (e) {
            if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            } else {
              throw e;
            }
          }
          return result;
        }
        async rtti_tab_get_relative_name(INPUT) {
          return z2ui5_cl_util.rtti_tab_get_relative_name(INPUT);
        }
        static async rtti_tab_get_relative_name(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let table = INPUT?.table;
          let fs_table_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          let typedesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
          let temp38 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
          let tabledesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
          let temp39 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
          let structdesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
          try {
            typedesc.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: table})));
            let unique86 = typedesc.get().kind;
            if (abap.compare.eq(unique86, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
              await abap.statements.cast(temp38, typedesc);
              tabledesc.set(temp38);
              await abap.statements.cast(temp39, (await tabledesc.get().get_table_line_type()));
              structdesc.set(temp39);
              result.set((await structdesc.get().get_relative_name()));
              return result;
            } else if (abap.compare.eq(unique86, typedesc.get().kind_ref)) {
              abap.statements.assign({target: fs_table_, source: table.dereference()});
              result.set((await this.rtti_tab_get_relative_name({table: fs_table_})));
            }
          } catch (e) {
            if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            } else {
              throw e;
            }
          }
          return result;
        }
        async source_get_file_types() {
          return z2ui5_cl_util.source_get_file_types();
        }
        static async source_get_file_types() {
          let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          let lv_types = new abap.types.String({qualifiedName: "STRING"});
          lv_types.set(abap.operators.concat(new abap.types.String().set(`abap, abc, actionscript, ada, apache_conf, applescript, asciidoc, assembly_x86, autohotkey, batchfile, bro, c9search, c_cpp, cirru, clojure, cobol, coffee, coldfusion, csharp, css, curly, d, dart, diff, django, dockerfile, `),abap.operators.concat(new abap.types.String().set(`dot, drools, eiffel, yaml, ejs, elixir, elm, erlang, forth, fortran, ftl, gcode, gherkin, gitignore, glsl, gobstones, golang, groovy, haml, handlebars, haskell, haskell_cabal, haxe, hjson, html, html_elixir, html_ruby, ini, io, jack, jade, java, ja`),abap.operators.concat(new abap.types.String().set(`vascri`),abap.operators.concat(new abap.types.String().set(`pt, json, jsoniq, jsp, jsx, julia, kotlin, latex, lean, less, liquid, lisp, live_script, livescript, logiql, lsl, lua, luapage, lucene, makefile, markdown, mask, matlab, mavens_mate_log, maze, mel, mips_assembler, mipsassembler, mushcode, mysql, ni`),abap.operators.concat(new abap.types.String().set(`x, nsis, objectivec, ocaml, pascal, perl, pgsql, php, plain_text, powershell, praat, prolog, properties, protobuf, python, r, razor, rdoc, rhtml, rst, ruby, rust, sass, scad, scala, scheme, scss, sh, sjs, smarty, snippets, soy_template, space, sql,`),abap.operators.concat(new abap.types.String().set(` sqlserver, stylus, svg, swift, swig, tcl, tex, text, textile, toml, tsx, twig, typescript, vala, vbscript, velocity, verilog, vhdl, wollok, xml, xquery, terraform, slim, redshift, red, puppet, php_laravel_blade, mixal, jssm, fsharp, edifact,`),new abap.types.String().set(` csp, cssound_score, cssound_orchestra, cssound_document`))))))));
          abap.statements.split({source: lv_types, at: new abap.types.Character(1).set(','), table: result});
          return result;
        }
        async source_get_method2(INPUT) {
          return z2ui5_cl_util.source_get_method2(INPUT);
        }
        static async source_get_method2(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let iv_classname = INPUT?.iv_classname;
          let iv_methodname = INPUT?.iv_methodname;
          let lt_source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          lt_source.set((await this.source_get_method({iv_classname: iv_classname, iv_methodname: iv_methodname})));
          result.set((await this.source_method_to_file({it_source: lt_source})));
          return result;
        }
        async source_method_to_file(INPUT) {
          return z2ui5_cl_util.source_method_to_file(INPUT);
        }
        static async source_method_to_file(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let it_source = INPUT?.it_source;
          if (it_source?.getQualifiedName === undefined || it_source.getQualifiedName() !== "STRING_TABLE") { it_source = undefined; }
          if (it_source === undefined) { it_source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.it_source); }
          let lv_source = new abap.types.String({qualifiedName: "STRING"});
          for await (const unique87 of abap.statements.loop(it_source)) {
            lv_source.set(unique87);
            try {
              result.set(abap.operators.concat(result,abap.operators.concat(lv_source.getOffset({offset: 1}),abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline)));
            } catch (e) {
              if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
              } else {
                throw e;
              }
            }
          }
          return result;
        }
        async filter_get_sql_by_sql_string(INPUT) {
          return z2ui5_cl_util.filter_get_sql_by_sql_string(INPUT);
        }
        static async filter_get_sql_by_sql_string(INPUT) {
          let result = new abap.types.Structure({"tabname": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-TABNAME"}), "check_autoload": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "layout_id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-LAYOUT_ID"}), "count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-COUNT"}), "t_ref": new abap.types.DataReference(new abap.types.Character(4)), "where": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-WHERE"}), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi")}, "z2ui5_cl_util=>ty_S_sql", undefined, {}, {});
          let val = INPUT?.val;
          let temp40 = new abap.types.String({qualifiedName: "STRING"});
          let lv_sql = new abap.types.String({qualifiedName: "STRING"});
          let lv_dummy = new abap.types.String({qualifiedName: "STRING"});
          let lv_tab = new abap.types.String({qualifiedName: "STRING"});
          temp40.set(val);
          lv_sql.set(temp40);
          abap.statements.replace({target: lv_sql, all: true, with: new abap.types.String().set(``), of: new abap.types.String().set(` `)});
          lv_sql.set(abap.builtin.to_upper({val: lv_sql}));
          abap.statements.split({source: lv_sql, at: new abap.types.Character(10).set('SELECTFROM'), targets: [lv_dummy,lv_tab]});
          abap.statements.split({source: lv_tab, at: new abap.types.String().set(`FIELDS`), targets: [lv_tab,lv_dummy]});
          result.get().tabname.set(lv_tab);
          return result;
        }
        async time_get_date_by_stampl(INPUT) {
          return z2ui5_cl_util.time_get_date_by_stampl(INPUT);
        }
        static async time_get_date_by_stampl(INPUT) {
          let result = new abap.types.Date({qualifiedName: "D"});
          let val = INPUT?.val;
          if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "TIMESTAMPL") { val = undefined; }
          if (val === undefined) { val = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}).set(INPUT.val); }
          let lv_dummy = new abap.types.Time({qualifiedName: "T"});
          abap.statements.convert({stamp: val,zone: abap.builtin.sy.get().zonlo}, {date: result,time: lv_dummy});
          return result;
        }
        async time_get_timestampl() {
          return z2ui5_cl_util.time_get_timestampl();
        }
        static async time_get_timestampl() {
          let result = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
          abap.statements.getTime({stamp: result});
          return result;
        }
        async time_get_time_by_stampl(INPUT) {
          return z2ui5_cl_util.time_get_time_by_stampl(INPUT);
        }
        static async time_get_time_by_stampl(INPUT) {
          let result = new abap.types.Time({qualifiedName: "T"});
          let val = INPUT?.val;
          if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "TIMESTAMPL") { val = undefined; }
          if (val === undefined) { val = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}).set(INPUT.val); }
          let lv_dummy = new abap.types.Date({qualifiedName: "D"});
          abap.statements.convert({stamp: val,zone: abap.builtin.sy.get().zonlo}, {date: lv_dummy,time: result});
          return result;
        }
        async time_substract_seconds(INPUT) {
          return z2ui5_cl_util.time_substract_seconds(INPUT);
        }
        static async time_substract_seconds(INPUT) {
          let result = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
          let time = INPUT?.time;
          if (time?.getQualifiedName === undefined || time.getQualifiedName() !== "TIMESTAMPL") { time = undefined; }
          if (time === undefined) { time = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}).set(INPUT.time); }
          let seconds = INPUT?.seconds;
          if (seconds?.getQualifiedName === undefined || seconds.getQualifiedName() !== "I") { seconds = undefined; }
          if (seconds === undefined) { seconds = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.seconds); }
          result.set((await abap.Classes['CL_ABAP_TSTMP'].subtractsecs({tstmp: time, secs: seconds})));
          return result;
        }
        async unassign_data(INPUT) {
          return z2ui5_cl_util.unassign_data(INPUT);
        }
        static async unassign_data(INPUT) {
          let result = new abap.types.DataReference(new abap.types.Character(4));
          let val = INPUT?.val;
          let fs_unassign_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          abap.statements.assign({target: fs_unassign_, source: val.dereference()});
          result.set(fs_unassign_);
          return result;
        }
        async unassign_object(INPUT) {
          return z2ui5_cl_util.unassign_object(INPUT);
        }
        static async unassign_object(INPUT) {
          let result = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
          let val = INPUT?.val;
          let fs_unassign_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          abap.statements.assign({target: fs_unassign_, source: val.dereference()});
          result.set(fs_unassign_);
          return result;
        }
        async url_param_create_url(INPUT) {
          return z2ui5_cl_util.url_param_create_url(INPUT);
        }
        static async url_param_create_url(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let t_params = INPUT?.t_params;
          if (t_params?.getQualifiedName === undefined || t_params.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_T_NAME_VALUE") { t_params = undefined; }
          if (t_params === undefined) { t_params = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value").set(INPUT.t_params); }
          let ls_param = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
          for await (const unique88 of abap.statements.loop(t_params)) {
            ls_param.set(unique88);
            result.set(abap.operators.concat(result,abap.operators.concat(ls_param.get().n,abap.operators.concat(new abap.types.String().set(`=`),abap.operators.concat(ls_param.get().v,new abap.types.String().set(`&`))))));
          }
          result.set(abap.builtin.shift_right({val: result, sub: new abap.types.String().set(`&`)}));
          return result;
        }
        async url_param_get(INPUT) {
          return z2ui5_cl_util.url_param_get(INPUT);
        }
        static async url_param_get(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let val = INPUT?.val;
          if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
          if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
          let url = INPUT?.url;
          if (url?.getQualifiedName === undefined || url.getQualifiedName() !== "STRING") { url = undefined; }
          if (url === undefined) { url = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.url); }
          let lt_params = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
          let lv_val = new abap.types.String({qualifiedName: "STRING"});
          let temp41 = new abap.types.String({qualifiedName: "STRING"});
          let temp42 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
          lt_params.set((await this.url_param_get_tab({i_val: url})));
          lv_val.set((await this.c_trim_lower({val: val})));
          abap.statements.clear(temp41);
          abap.statements.readTable(lt_params,{into: temp42,
            withKey: (i) => {return abap.compare.eq(i.n, lv_val);},
            withKeyValue: [{key: (i) => {return i.n}, value: lv_val}],
            usesTableLine: false,
            withKeySimple: {"n": lv_val}});
          if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            temp41.set(temp42.get().v);
          }
          result.set(temp41);
          return result;
        }
        async url_param_get_tab(INPUT) {
          return z2ui5_cl_util.url_param_get_tab(INPUT);
        }
        static async url_param_get_tab(INPUT) {
          let rt_params = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
          let i_val = INPUT?.i_val;
          let lv_search = new abap.types.String({qualifiedName: "STRING"});
          let lv_search2 = new abap.types.String({qualifiedName: "STRING"});
          let temp43 = new abap.types.String({qualifiedName: "STRING"});
          
          let lt_param = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp3");
          let temp44 = new abap.types.String({qualifiedName: "STRING"});
          let lr_param = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
          let lv_name = new abap.types.String({qualifiedName: "STRING"});
          let lv_value = new abap.types.String({qualifiedName: "STRING"});
          let temp45 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
          lv_search.set(abap.builtin.replace({val: i_val, sub: new abap.types.String().set(`%3D`), with: new abap.types.Character(1).set('='), occ: abap.IntegerFactory.get(0)}));
          lv_search.set(abap.builtin.replace({val: lv_search, sub: new abap.types.String().set(`%26`), with: new abap.types.Character(1).set('&'), occ: abap.IntegerFactory.get(0)}));
          lv_search.set(abap.builtin.shift_left({val: lv_search, sub: new abap.types.String().set(`?`)}));
          lv_search.set((await this.c_trim_lower({val: lv_search})));
          lv_search2.set(abap.builtin.substring_after({val: lv_search, sub: new abap.types.String().set(`&sap-startup-params=`)}));
          if (abap.compare.initial(lv_search2) === false) {
            temp43.set(lv_search2);
          } else {
            temp43.set(lv_search);
          }
          lv_search.set(temp43);
          lv_search2.set((abap.builtin.substring_after({val: (await this.c_trim_lower({val: lv_search})), sub: new abap.types.String().set(`?`)})));
          if (abap.compare.initial(lv_search2) === false) {
            lv_search.set(lv_search2);
          }
          abap.statements.split({source: lv_search, at: new abap.types.String().set(`&`), table: lt_param});
          for await (const unique89 of abap.statements.loop(lt_param)) {
            lr_param.assign(unique89);
            abap.statements.split({source: lr_param.dereference(), at: new abap.types.String().set(`=`), targets: [lv_name,lv_value]});
            abap.statements.clear(temp45);
            temp45.get().n.set((await this.c_trim_lower({val: lv_name})));
            temp45.get().v.set((await this.c_trim_lower({val: lv_value})));
            abap.statements.insertInternal({data: temp45, table: rt_params});
          }
          return rt_params;
        }
        async url_param_set(INPUT) {
          return z2ui5_cl_util.url_param_set(INPUT);
        }
        static async url_param_set(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let url = INPUT?.url;
          if (url?.getQualifiedName === undefined || url.getQualifiedName() !== "STRING") { url = undefined; }
          if (url === undefined) { url = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.url); }
          let name = INPUT?.name;
          if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
          if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
          let value = INPUT?.value;
          if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
          if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
          let lt_params = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
          let lv_n = new abap.types.String({qualifiedName: "STRING"});
          let temp46 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
          let lr_params = new abap.types.DataReference(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}));
          let temp47 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
          lt_params.set((await this.url_param_get_tab({i_val: url})));
          lv_n.set((await this.c_trim_lower({val: name})));
          for await (const unique90 of abap.statements.loop(lt_params,{where: async (I) => {return abap.compare.eq(I.n, lv_n);},topEquals: {"n": lv_n}})) {
            lr_params.assign(unique90);
            lr_params.get().v.set((await this.c_trim_lower({val: value})));
          }
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            abap.statements.clear(temp47);
            temp47.get().n.set(lv_n);
            temp47.get().v.set((await this.c_trim_lower({val: value})));
            abap.statements.insertInternal({data: temp47, table: lt_params});
          }
          result.set((await this.url_param_create_url({t_params: lt_params})));
          return result;
        }
        async context_get_user_tech() {
          return z2ui5_cl_util.context_get_user_tech();
        }
        static async context_get_user_tech() {
          let result = new abap.types.String({qualifiedName: "STRING"});
          result.set(abap.builtin.sy.get().uname);
          return result;
        }
        async xml_parse(INPUT) {
          return z2ui5_cl_util.xml_parse(INPUT);
        }
        static async xml_parse(INPUT) {
          let xml = INPUT?.xml;
          let any = INPUT?.any || new abap.types.Character(4);
          if (abap.Classes['KERNEL_CALL_TRANSFORMATION'] === undefined) throw new Error("CallTransformation, kernel class missing");
          await abap.Classes['KERNEL_CALL_TRANSFORMATION'].call({name: "id",sourceXML: xml,result: {data:any}});
        }
        async xml_srtti_parse(INPUT) {
          return z2ui5_cl_util.xml_srtti_parse(INPUT);
        }
        static async xml_srtti_parse(INPUT) {
          let result = new abap.types.DataReference(new abap.types.Character(4));
          let rtti_data = INPUT?.rtti_data;
          let srtti = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
          let rtti_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
          let lo_datadescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
          let fs_variable_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          await this.check_raise_srtti_installed();
          if (abap.Classes['KERNEL_CALL_TRANSFORMATION'] === undefined) throw new Error("CallTransformation, kernel class missing");
          await abap.Classes['KERNEL_CALL_TRANSFORMATION'].call({name: "id",sourceXML: rtti_data,result: {srtti:srtti}});
          if (srtti.get().get_rtti === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (srtti.get().get_rtti === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
          rtti_type.set(await srtti.get().get_rtti());
          await abap.statements.cast(lo_datadescr, rtti_type);
          if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
          await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: lo_datadescr, dref: result});
          abap.statements.assign({target: fs_variable_, source: result.dereference()});
          if (abap.Classes['KERNEL_CALL_TRANSFORMATION'] === undefined) throw new Error("CallTransformation, kernel class missing");
          await abap.Classes['KERNEL_CALL_TRANSFORMATION'].call({name: "id",sourceXML: rtti_data,result: {dobj:fs_variable_}});
          return result;
        }
        async xml_srtti_stringify(INPUT) {
          return z2ui5_cl_util.xml_srtti_stringify(INPUT);
        }
        static async xml_srtti_stringify(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let data = INPUT?.data;
          let srtti = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
          let lv_classname = new abap.types.Character(19, {});
          await this.check_raise_srtti_installed();
          lv_classname.set(new abap.types.Character(19).set('ZCL_SRTTI_TYPEDESCR'));
          if (abap.Classes[lv_classname.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
          if (abap.Classes[lv_classname.get().trimEnd()].create_by_data_object === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (abap.Classes[lv_classname.get().trimEnd()].create_by_data_object === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
          srtti.set(await abap.Classes[lv_classname.get().trimEnd()].create_by_data_object({data_object: data}));
          if (abap.Classes['KERNEL_CALL_TRANSFORMATION'] === undefined) throw new Error("CallTransformation, kernel class missing");
          await abap.Classes['KERNEL_CALL_TRANSFORMATION'].call({name: "id",resultXML: result,source: {srtti:srtti,dobj:data}});
          return result;
        }
        async xml_stringify(INPUT) {
          return z2ui5_cl_util.xml_stringify(INPUT);
        }
        static async xml_stringify(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let any = INPUT?.any;
          if (abap.Classes['KERNEL_CALL_TRANSFORMATION'] === undefined) throw new Error("CallTransformation, kernel class missing");
          await abap.Classes['KERNEL_CALL_TRANSFORMATION'].call({name: "id",resultXML: result,options: {data_refs:new abap.types.String().set(`heap-or-create`)},source: {data:any}});
          return result;
        }
        async x_check_raise(INPUT) {
          return z2ui5_cl_util.x_check_raise(INPUT);
        }
        static async x_check_raise(INPUT) {
          let v = INPUT?.v || new abap.types.Character();
          if (INPUT === undefined || INPUT.v === undefined) {v = new abap.types.String().set(`CX_SY_SUBRC`);}
          let when = INPUT?.when;
          if (when?.getQualifiedName === undefined || when.getQualifiedName() !== "XFELD") { when = undefined; }
          if (when === undefined) { when = new abap.types.Character(1, {"qualifiedName":"XFELD","ddicName":"XFELD"}).set(INPUT.when); }
          if (abap.compare.eq(when, abap.builtin.abap_true)) {
            const unique91 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: v});
            unique91.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.abap","INTERNAL_LINE": 1670};
            throw unique91;
          }
        }
        async x_get_last_t100(INPUT) {
          return z2ui5_cl_util.x_get_last_t100(INPUT);
        }
        static async x_get_last_t100(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let val = INPUT?.val;
          if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "CX_ROOT") { val = undefined; }
          if (val === undefined) { val = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.val); }
          let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
          x.set(val);
          const indexBackup1 = abap.builtin.sy.get().index.get();
          let unique92 = 1;
          while (true) {
            abap.builtin.sy.get().index.set(unique92++);
            if (abap.compare.initial(x.get().previous) === false) {
              x.set(x.get().previous);
              continue;
            }
            break;
          }
          abap.builtin.sy.get().index.set(indexBackup1);
          result.set((await x.get().if_message$get_text()));
          return result;
        }
        async x_raise(INPUT) {
          return z2ui5_cl_util.x_raise(INPUT);
        }
        static async x_raise(INPUT) {
          let v = INPUT?.v || new abap.types.Character();
          if (INPUT === undefined || INPUT.v === undefined) {v = new abap.types.String().set(`CX_SY_SUBRC`);}
          const unique93 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: v});
          unique93.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.abap","INTERNAL_LINE": 1697};
          throw unique93;
        }
        async check_raise_srtti_installed() {
          return z2ui5_cl_util.check_raise_srtti_installed();
        }
        static async check_raise_srtti_installed() {
          let lv_link = new abap.types.String({qualifiedName: "STRING"});
          let lv_text = new abap.types.String({qualifiedName: "STRING"});
          if (abap.compare.eq((await this.rtti_check_class_exists({val: new abap.types.Character(19).set('ZCL_SRTTI_TYPEDESCR')})), abap.builtin.abap_false)) {
            lv_link.set(new abap.types.String().set(`https://github.com/sandraros/S-RTTI`));
            lv_text.set(abap.operators.concat(new abap.types.String().set(`<p>Please install the open-source project S-RTTI by sandraros and try again: <a href="`),abap.operators.concat(lv_link,new abap.types.String().set(`" style="color:blue; font-weight:600;" target="_blank">(link)</a></p>`))));
            const unique94 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: lv_text});
            unique94.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.abap","INTERNAL_LINE": 1714};
            throw unique94;
          }
        }
        async rtti_get_t_attri_by_table_name(INPUT) {
          return z2ui5_cl_util.rtti_get_t_attri_by_table_name(INPUT);
        }
        static async rtti_get_t_attri_by_table_name(INPUT) {
          let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
          let table_name = INPUT?.table_name;
          let lo_obj = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
          let temp48 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
          let lo_struct = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
          let temp49 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
          let lo_tab = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
          let temp50 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
          let temp51 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
          let lr_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
          let lt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
          if (abap.compare.initial(table_name)) {
            const unique95 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.Character(24).set('TABLE_NAME_INITIAL_ERROR')});
            unique95.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.abap","INTERNAL_LINE": 1735};
            throw unique95;
          }
          try {
            try {
              lo_obj.set(await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_name({p_name: table_name}));
              abap.builtin.sy.get().subrc.set(0);
            } catch (e) {
              if (e.classic) {
                  switch (e.classic.toUpperCase()) {
                  case "TYPE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
                  default: abap.builtin.sy.get().subrc.set(2); break;
                    }
                } else {
                    throw e;
                }
              }
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique97 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.Character(22).set('TABLE_NOT_FOUD_NAME___'),table_name)});
                unique97.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.abap","INTERNAL_LINE": 1753};
                throw unique97;
              }
              await abap.statements.cast(temp48, lo_obj);
              lo_struct.set(temp48);
            } catch (e) {
              if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                try {
                  try {
                    lo_obj.set(await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_name({p_name: table_name}));
                    abap.builtin.sy.get().subrc.set(0);
                  } catch (e) {
                    if (e.classic) {
                        switch (e.classic.toUpperCase()) {
                        case "TYPE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
                        default: abap.builtin.sy.get().subrc.set(2); break;
                          }
                      } else {
                          throw e;
                      }
                    }
                    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                      const unique96 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.Character(22).set('TABLE_NOT_FOUD_NAME___'),table_name)});
                      unique96.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.abap","INTERNAL_LINE": 1775};
                      throw unique96;
                    }
                    await abap.statements.cast(temp49, lo_obj);
                    lo_tab.set(temp49);
                    await abap.statements.cast(temp50, (await lo_tab.get().get_table_line_type()));
                    lo_struct.set(temp50);
                  } catch (e) {
                    if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                      return result;
                    } else {
                      throw e;
                    }
                  }
                } else {
                  throw e;
                }
              }
              result.set((await lo_struct.get().get_components()));
              for await (const unique98 of abap.statements.loop(result,{where: async (I) => {return abap.compare.eq(I.as_include, abap.builtin.abap_true);},topEquals: {"as_include": abap.builtin.abap_true}})) {
                lr_comp.assign(unique98);
                lt_attri.set((await this.rtti_get_t_attri_by_include({type: lr_comp.get().type})));
                await abap.statements.deleteInternal(result);
                abap.statements.insertInternal({lines: true, data: lt_attri, table: result});
              }
              return result;
            }
            async itab_corresponding(INPUT) {
              return z2ui5_cl_util.itab_corresponding(INPUT);
            }
            static async itab_corresponding(INPUT) {
              let val = INPUT?.val;
              let tab = abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});
              if (INPUT && INPUT.tab) {tab = INPUT.tab;}
              let fs_row_in_ = new abap.types.FieldSymbol(new abap.types.Character(4));
              let fs_row_out_ = new abap.types.FieldSymbol(new abap.types.Character(4));
              let lv_lines = new abap.types.Integer({qualifiedName: "I"});
              for await (const unique99 of abap.statements.loop(val)) {
                fs_row_in_.assign(unique99);
                if (abap.compare.eq(abap.builtin.lines({val: tab}), abap.IntegerFactory.get(0))) {
                  lv_lines.set(abap.IntegerFactory.get(1));
                } else {
                  lv_lines.set(abap.builtin.lines({val: tab}));
                }
                abap.statements.insertInternal({initial: true, index: lv_lines, assigning: fs_row_out_, table: tab});
                abap.statements.moveCorresponding(fs_row_in_, fs_row_out_);
              }
            }
            async itab_filter_by_t_range(INPUT) {
              return z2ui5_cl_util.itab_filter_by_t_range(INPUT);
            }
            static async itab_filter_by_t_range(INPUT) {
              let val = INPUT?.val;
              if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_T_FILTER_MULTI") { val = undefined; }
              if (val === undefined) { val = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi").set(INPUT.val); }
              let tab = abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});
              if (INPUT && INPUT.tab) {tab = INPUT.tab;}
            }
            async filter_get_data_by_multi(INPUT) {
              return z2ui5_cl_util.filter_get_data_by_multi(INPUT);
            }
            static async filter_get_data_by_multi(INPUT) {
              let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");
              let val = INPUT?.val;
              if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_T_FILTER_MULTI") { val = undefined; }
              if (val === undefined) { val = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi").set(INPUT.val); }
              return result;
            }
            async filter_get_sql_where(INPUT) {
              return z2ui5_cl_util.filter_get_sql_where(INPUT);
            }
            static async filter_get_sql_where(INPUT) {
              let result = new abap.types.String({qualifiedName: "STRING"});
              let val = INPUT?.val;
              if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_CL_UTIL=>TY_T_FILTER_MULTI") { val = undefined; }
              if (val === undefined) { val = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi").set(INPUT.val); }
              let ls_filter = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {});
              let lo_range = new abap.types.ABAPObject({qualifiedName: "LCL_RANGE_TO_SQL", RTTIName: "\\CLASS-POOL=Z2UI5_CL_UTIL\\CLASS=LCL_RANGE_TO_SQL"});
              let temp52 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"));
              for await (const unique100 of abap.statements.loop(val)) {
                ls_filter.set(unique100);
                temp52.assign(ls_filter.get().t_range);
                lo_range.set(await (new abap.Classes['CLAS-Z2UI5_CL_UTIL-LCL_RANGE_TO_SQL']()).constructor_({iv_fieldname: ls_filter.get().name, ir_range: temp52}));
              }
              return result;
            }
          }
          abap.Classes['Z2UI5_CL_UTIL'] = z2ui5_cl_util;
          z2ui5_cl_util.ty_s_name_value = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
          z2ui5_cl_util.ty_t_name_value = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
          z2ui5_cl_util.ty_s_token = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {});
          z2ui5_cl_util.ty_t_token = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");
          z2ui5_cl_util.ty_s_range = new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {});
          z2ui5_cl_util.ty_t_range = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");
          z2ui5_cl_util.ty_s_filter_multi = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {});
          z2ui5_cl_util.ty_t_filter_multi = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi");
          z2ui5_cl_util.ty_s_sql = new abap.types.Structure({"tabname": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-TABNAME"}), "check_autoload": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "layout_id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-LAYOUT_ID"}), "count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-COUNT"}), "t_ref": new abap.types.DataReference(new abap.types.Character(4)), "where": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-WHERE"}), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi")}, "z2ui5_cl_util=>ty_S_sql", undefined, {}, {});
export {z2ui5_cl_util};
//# sourceMappingURL=z2ui5_cl_util.clas.mjs.map