const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_abap_api.clas.abap
class z2ui5_cl_abap_api {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_ABAP_API';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"RTTI_GET_CLASS_DESCR_ON_CLOUD": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_CLASSNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "RTTI_GET_T_ATTRI_ON_PREM": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");}, "is_optional": " "}, "TABNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RTTI_GET_T_ATTRI_ON_CLOUD": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");}, "is_optional": " "}, "TABNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CONTEXT_CHECK_ABAP_CLOUD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "SOURCE_GET_METHOD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "IV_CLASSNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "IV_METHODNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "UUID_GET_C32": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "UUID_GET_C22": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RTTI_GET_DATA_ELEMENT_TEXTS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"header": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-HEADER"}), "short": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-SHORT"}), "medium": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-MEDIUM"}), "long": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-LONG"})}, "z2ui5_cl_abap_api=>ty_s_data_element_text", undefined, {}, {});}, "is_optional": " "}, "I_DATA_ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CONV_DECODE_X_BASE64": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CONV_ENCODE_X_BASE64": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}}},
  "CONV_GET_STRING_BY_XSTRING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}}},
  "CONV_GET_XSTRING_BY_STRING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RTTI_GET_CLASSES_IMPL_INTF": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_classes");}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "RTTI_GET_T_DFIES_BY_TABLE_NAME": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");}, "is_optional": " "}, "TABLE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RTTI_GET_T_FIXVALUES": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-HIGH"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-DESCR"})}, "z2ui5_cl_abap_api=>ty_s_fix_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_fix_val");}, "is_optional": " "}, "ELEMDESCR": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "LANGU": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async context_check_abap_cloud() {
    return z2ui5_cl_abap_api.context_check_abap_cloud();
  }
  static async context_check_abap_cloud() {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    try {
      await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: new abap.types.Character(4).set('T100')});
      result.set(abap.builtin.abap_false);
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        result.set(abap.builtin.abap_true);
      } else {
        throw e;
      }
    }
    return result;
  }
  async rtti_get_t_fixvalues(INPUT) {
    return z2ui5_cl_abap_api.rtti_get_t_fixvalues(INPUT);
  }
  static async rtti_get_t_fixvalues(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-HIGH"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-DESCR"})}, "z2ui5_cl_abap_api=>ty_s_fix_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_fix_val");
    let elemdescr = INPUT?.elemdescr;
    if (elemdescr?.getQualifiedName === undefined || elemdescr.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { elemdescr = undefined; }
    if (elemdescr === undefined) { elemdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.elemdescr); }
    let langu = INPUT?.langu;
    
    let lt_values = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.Character(10, {"qualifiedName":"fixvalue-low"}), "high": new abap.types.Character(10, {"qualifiedName":"fixvalue-high"}), "option": new abap.types.Character(2, {"qualifiedName":"fixvalue-option"}), "ddlanguage": new abap.types.Character(1, {"qualifiedName":"fixvalue-ddlanguage"}), "ddtext": new abap.types.Character(60, {"qualifiedName":"fixvalue-ddtext"})}, "fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "fixvalues");
    let lv_langu = new abap.types.Character(1, {});
    let temp1 = new abap.types.Structure({"low": new abap.types.Character(10, {"qualifiedName":"fixvalue-low"}), "high": new abap.types.Character(10, {"qualifiedName":"fixvalue-high"}), "option": new abap.types.Character(2, {"qualifiedName":"fixvalue-option"}), "ddlanguage": new abap.types.Character(1, {"qualifiedName":"fixvalue-ddlanguage"}), "ddtext": new abap.types.Character(60, {"qualifiedName":"fixvalue-ddtext"})}, "fixvalue", undefined, {}, {});
    let lr_fix = new abap.types.DataReference(new abap.types.Structure({"low": new abap.types.Character(10, {"qualifiedName":"fixvalue-low"}), "high": new abap.types.Character(10, {"qualifiedName":"fixvalue-high"}), "option": new abap.types.Character(2, {"qualifiedName":"fixvalue-option"}), "ddlanguage": new abap.types.Character(1, {"qualifiedName":"fixvalue-ddlanguage"}), "ddtext": new abap.types.Character(60, {"qualifiedName":"fixvalue-ddtext"})}, "fixvalue", undefined, {}, {}));
    let temp2 = new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-HIGH"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-DESCR"})}, "z2ui5_cl_abap_api=>ty_s_fix_val", undefined, {}, {});
    lv_langu.set(new abap.types.Character(1).set(' '));
    lv_langu.set(langu);
    if (elemdescr.get().get_ddic_fixed_values === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
    if (elemdescr.get().get_ddic_fixed_values === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
    try {
      lt_values.set(await elemdescr.get().get_ddic_fixed_values({p_langu: lv_langu}))
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
      for await (const unique54 of abap.statements.loop(lt_values)) {
        lr_fix.assign(unique54);
        abap.statements.clear(temp2);
        temp2.get().low.set(lr_fix.get().low);
        temp2.get().high.set(lr_fix.get().high);
        temp2.get().descr.set(lr_fix.get().ddtext);
        abap.statements.insertInternal({data: temp2, table: result});
      }
      return result;
    }
    async conv_decode_x_base64(INPUT) {
      return z2ui5_cl_abap_api.conv_decode_x_base64(INPUT);
    }
    static async conv_decode_x_base64(INPUT) {
      let result = new abap.types.XString({qualifiedName: "XSTRING"});
      let val = INPUT?.val;
      if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
      if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
      let lv_web_http_name = new abap.types.Character(19, {});
      let classname = new abap.types.Character(15, {});
      try {
        lv_web_http_name.set(new abap.types.Character(19).set('CL_WEB_HTTP_UTILITY'));
        if (abap.Classes[lv_web_http_name.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
        if (abap.Classes[lv_web_http_name.get().trimEnd()].decode_x_base64 === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (abap.Classes[lv_web_http_name.get().trimEnd()].decode_x_base64 === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        result.set(await abap.Classes[lv_web_http_name.get().trimEnd()].decode_x_base64({encoded: val}));
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          classname.set(new abap.types.Character(15).set('CL_HTTP_UTILITY'));
          if (abap.Classes[classname.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
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
      return z2ui5_cl_abap_api.conv_encode_x_base64(INPUT);
    }
    static async conv_encode_x_base64(INPUT) {
      let result = new abap.types.String({qualifiedName: "STRING"});
      let val = INPUT?.val;
      if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "XSTRING") { val = undefined; }
      if (val === undefined) { val = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.val); }
      let lv_web_http_name = new abap.types.Character(19, {});
      let classname = new abap.types.Character(15, {});
      try {
        lv_web_http_name.set(new abap.types.Character(19).set('CL_WEB_HTTP_UTILITY'));
        if (abap.Classes[lv_web_http_name.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
        if (abap.Classes[lv_web_http_name.get().trimEnd()].encode_x_base64 === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (abap.Classes[lv_web_http_name.get().trimEnd()].encode_x_base64 === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        result.set(await abap.Classes[lv_web_http_name.get().trimEnd()].encode_x_base64({unencoded: val}));
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          classname.set(new abap.types.Character(15).set('CL_HTTP_UTILITY'));
          if (abap.Classes[classname.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
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
      return z2ui5_cl_abap_api.conv_get_string_by_xstring(INPUT);
    }
    static async conv_get_string_by_xstring(INPUT) {
      let result = new abap.types.String({qualifiedName: "STRING"});
      let val = INPUT?.val;
      if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "XSTRING") { val = undefined; }
      if (val === undefined) { val = new abap.types.XString({qualifiedName: "XSTRING"}).set(INPUT.val); }
      let conv = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
      let conv_codepage = new abap.types.Character(21, {});
      let conv_in_class = new abap.types.Character(18, {});
      try {
        conv_codepage.set(new abap.types.Character(21).set('CL_ABAP_CONV_CODEPAGE'));
        if (abap.Classes[conv_codepage.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
        conv.set(await abap.Classes[conv_codepage.get().trimEnd()].create_in());
        if (conv.get().if_abap_conv_in$convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (conv.get().if_abap_conv_in$convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        result.set(await conv.get().if_abap_conv_in$convert({source: val}));
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          conv_in_class.set(new abap.types.Character(18).set('CL_ABAP_CONV_IN_CE'));
          if (abap.Classes[conv_in_class.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
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
      return z2ui5_cl_abap_api.conv_get_xstring_by_string(INPUT);
    }
    static async conv_get_xstring_by_string(INPUT) {
      let result = new abap.types.XString({qualifiedName: "XSTRING"});
      let val = INPUT?.val;
      if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
      if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
      let conv = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
      let conv_codepage = new abap.types.Character(21, {});
      let conv_out_class = new abap.types.Character(19, {});
      try {
        conv_codepage.set(new abap.types.Character(21).set('CL_ABAP_CONV_CODEPAGE'));
        if (abap.Classes[conv_codepage.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
        conv.set(await abap.Classes[conv_codepage.get().trimEnd()].create_out());
        if (conv.get().if_abap_conv_out$convert === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (conv.get().if_abap_conv_out$convert === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        result.set(await conv.get().if_abap_conv_out$convert({source: val}));
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          conv_out_class.set(new abap.types.Character(19).set('CL_ABAP_CONV_OUT_CE'));
          if (abap.Classes[conv_out_class.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
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
    async source_get_method(INPUT) {
      return z2ui5_cl_abap_api.source_get_method(INPUT);
    }
    static async source_get_method(INPUT) {
      let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
      let iv_classname = INPUT?.iv_classname;
      let iv_methodname = INPUT?.iv_methodname;
      let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
      let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let lt_source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
      let lt_string = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
      let lv_class = new abap.types.String({qualifiedName: "STRING"});
      let lv_method = new abap.types.String({qualifiedName: "STRING"});
      let xco_cp_abap = new abap.types.Character(11, {});
      let lv_name = new abap.types.Character(13, {});
      let lv_check_method = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      let lv_source = new abap.types.String({qualifiedName: "STRING"});
      let lv_source_upper = new abap.types.String({qualifiedName: "STRING"});
      try {
        lv_class.set(abap.builtin.to_upper({val: iv_classname}));
        lv_method.set(abap.builtin.to_upper({val: iv_methodname}));
        xco_cp_abap.set(new abap.types.Character(11).set('XCO_CP_ABAP'));
        if (abap.Classes[xco_cp_abap.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
        if (abap.Classes[xco_cp_abap.get().trimEnd()].class === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (abap.Classes[xco_cp_abap.get().trimEnd()].class === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        object.set(await abap.Classes[xco_cp_abap.get().trimEnd()].class({iv_name: lv_class}));
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
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            lv_name.set(new abap.types.Character(13).set('CL_OO_FACTORY'));
            if (abap.Classes[lv_name.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
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
            for await (const unique55 of abap.statements.loop(lt_source)) {
              lv_source.set(unique55);
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
        return z2ui5_cl_abap_api.rtti_get_classes_impl_intf(INPUT);
      }
      static async rtti_get_classes_impl_intf(INPUT) {
        let result = abap.types.TableFactory.construct(new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_classes");
        let val = INPUT?.val;
        let obj = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
        let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
        let lt_implementation_names = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
        let lt_impl = abap.types.TableFactory.construct(new abap.types.Structure({"clsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-clsname"}), "refclsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-refclsname"})}, "ty_s_impl", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
        let ls_key = new abap.types.Structure({"intkey": new abap.types.Character(30, {"qualifiedName":"ty_s_key-intkey"})}, "ty_s_key", undefined, {}, {});
        let ls_clskey = new abap.types.Structure({"clsname": new abap.types.Character(30, {})}, undefined, undefined, {}, {});
        let $class = new abap.types.DataReference(new abap.types.Character(4));
        let xco_cp_abap = new abap.types.Character(11, {});
        let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_classes");
        let implementation_name = new abap.types.String({qualifiedName: "STRING"});
        let temp4 = new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {});
        let lv_fm = new abap.types.String({qualifiedName: "STRING"});
        let type = new abap.types.Character(12, {});
        let fs_class_ = new abap.types.FieldSymbol(new abap.types.Character(4));
        let temp5 = new abap.types.Structure({"clsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-clsname"}), "refclsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-refclsname"})}, "ty_s_impl", undefined, {}, {});
        let lr_impl = new abap.types.DataReference(new abap.types.Structure({"clsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-clsname"}), "refclsname": new abap.types.Character(30, {"qualifiedName":"ty_s_impl-refclsname"})}, "ty_s_impl", undefined, {}, {}));
        let fs_description_ = new abap.types.FieldSymbol(new abap.types.Character(4));
        let temp6 = new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {});
        try {
          ls_clskey.get().clsname.set(val);
          xco_cp_abap.set(new abap.types.Character(11).set('XCO_CP_ABAP'));
          if (abap.Classes[xco_cp_abap.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
          obj.set(await abap.Classes[xco_cp_abap.get().trimEnd()].interface({iv_name: ls_clskey.get().clsname}));
          abap.statements.assign({target: fs_any_, dynamicName: 'obj' + '->' + 'IF_XCO_AO_INTERFACE~IMPLEMENTATIONS', dynamicSource: (() => {
                      try { return obj; } catch {}
                      try { return this.obj; } catch {}
                    })()});
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique57 = await (new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS']()).constructor_();
              unique57.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_abap_api.clas.abap","INTERNAL_LINE": 517};
              throw unique57;
            }
            obj.set(fs_any_);
            abap.statements.assign({target: fs_any_, dynamicName: 'obj' + '->' + 'IF_XCO_INTF_IMPLEMENTATIONS_FC~ALL', dynamicSource: (() => {
                        try { return obj; } catch {}
                        try { return this.obj; } catch {}
                      })()});
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique58 = await (new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS']()).constructor_();
                unique58.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_abap_api.clas.abap","INTERNAL_LINE": 523};
                throw unique58;
              }
              obj.set(fs_any_);
              if (obj.get().if_xco_intf_implementations$get_names === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
              if (obj.get().if_xco_intf_implementations$get_names === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
              lt_implementation_names.set(await obj.get().if_xco_intf_implementations$get_names());
              abap.statements.clear(temp3);
              for await (const unique59 of abap.statements.loop(lt_implementation_names)) {
                implementation_name.set(unique59);
                temp4.get().classname.set(implementation_name);
                temp4.get().description.set((await this.rtti_get_class_descr_on_cloud({i_classname: implementation_name})));
                abap.statements.insertInternal({data: temp4, table: temp3});
              }
              result.set(temp3);
            } catch (e) {
              if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
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
                  if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                    return result;
                  }
                  type.set(new abap.types.Character(12).set('SEOC_CLASS_R'));
                  abap.statements.createData($class,{"name": type.get()});
                  abap.statements.assign({target: fs_class_, source: $class.dereference()});
                  for await (const unique56 of abap.statements.loop(lt_impl)) {
                    lr_impl.assign(unique56);
                    abap.statements.clear(fs_class_);
                    ls_clskey.get().clsname.set(lr_impl.get().clsname);
                    lv_fm.set(new abap.types.String().set(`SEO_CLASS_READ`));
                    if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; }
                    if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()](); }
                    await abap.FunctionModules[lv_fm.get().trimEnd()]({exporting: {clskey: ls_clskey}, importing: {class: fs_class_}});
                    abap.statements.assign({component: new abap.types.Character(8).set('DESCRIPT'), target: fs_description_, source: fs_class_});
                    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
                    abap.statements.clear(temp6);
                    temp6.get().classname.set(lr_impl.get().clsname);
                    temp6.get().description.set(fs_description_);
                    abap.statements.insertInternal({data: temp6, table: result});
                  }
                } else {
                  throw e;
                }
              }
              return result;
            }
            async rtti_get_data_element_texts(INPUT) {
              return z2ui5_cl_abap_api.rtti_get_data_element_texts(INPUT);
            }
            static async rtti_get_data_element_texts(INPUT) {
              let result = new abap.types.Structure({"header": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-HEADER"}), "short": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-SHORT"}), "medium": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-MEDIUM"}), "long": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-LONG"})}, "z2ui5_cl_abap_api=>ty_s_data_element_text", undefined, {}, {});
              let i_data_element_name = INPUT?.i_data_element_name;
              if (i_data_element_name?.getQualifiedName === undefined || i_data_element_name.getQualifiedName() !== "STRING") { i_data_element_name = undefined; }
              if (i_data_element_name === undefined) { i_data_element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_data_element_name); }
              let ddic_ref = new abap.types.DataReference(new abap.types.Character(4));
              let data_element = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
              let content = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
              let ddic = new abap.types.Structure({"reptext": new abap.types.String({qualifiedName: "STRING"}), "scrtext_s": new abap.types.String({qualifiedName: "STRING"}), "scrtext_m": new abap.types.String({qualifiedName: "STRING"}), "scrtext_l": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
              let exists = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
              let data_element_name = new abap.types.String({qualifiedName: "STRING"});
              let temp7 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
              let struct_desrc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
              let fs_ddic_ = new abap.types.FieldSymbol(new abap.types.Character(4));
              let lo_typedescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
              let temp8 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
              let data_descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
              let xco_cp_abap_dictionary = new abap.types.Character(22, {});
              data_element_name.set(i_data_element_name);
              try {
                await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: new abap.types.Character(4).set('T100')});
                await abap.statements.cast(temp7, (await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_name({p_name: new abap.types.Character(5).set('DFIES')})));
                struct_desrc.set(temp7);
                if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
                await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: struct_desrc, dref: ddic_ref});
                abap.statements.assign({target: fs_ddic_, source: ddic_ref.dereference()});
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
                  await abap.statements.cast(temp8, lo_typedescr);
                  data_descr.set(temp8);
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
                        xco_cp_abap_dictionary.set(new abap.types.Character(22).set('XCO_CP_ABAP_DICTIONARY'));
                        if (abap.Classes[xco_cp_abap_dictionary.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
                        if (abap.Classes[xco_cp_abap_dictionary.get().trimEnd()].data_element === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                        if (abap.Classes[xco_cp_abap_dictionary.get().trimEnd()].data_element === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                        data_element.set(await abap.Classes[xco_cp_abap_dictionary.get().trimEnd()].data_element({iv_name: data_element_name}));
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
                  return z2ui5_cl_abap_api.uuid_get_c22();
                }
                static async uuid_get_c22() {
                  let result = new abap.types.String({qualifiedName: "STRING"});
                  let lv_uuid = new abap.types.Character(22, {});
                  let lv_classname = new abap.types.String({qualifiedName: "STRING"});
                  let lv_fm = new abap.types.String({qualifiedName: "STRING"});
                  try {
                    try {
                      lv_classname.set(new abap.types.String().set(`CL_SYSTEM_UUID`));
                      if (abap.Classes[lv_classname.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
                      lv_uuid.set(await abap.Classes[lv_classname.get().trimEnd()].if_system_uuid_static$create_uuid_c22());
                    } catch (e) {
                      if ((abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'])) {
                        lv_fm.set(new abap.types.String().set(`GUID_CREATE`));
                        if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; }
                        if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()](); }
                        await abap.FunctionModules[lv_fm.get().trimEnd()]({importing: {ev_guid_22: lv_uuid}});
                      } else {
                        throw e;
                      }
                    }
                    result.set(lv_uuid);
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
                  return z2ui5_cl_abap_api.uuid_get_c32();
                }
                static async uuid_get_c32() {
                  let result = new abap.types.String({qualifiedName: "STRING"});
                  let lv_uuid = new abap.types.Character(32, {});
                  let lv_classname = new abap.types.String({qualifiedName: "STRING"});
                  let lv_fm = new abap.types.String({qualifiedName: "STRING"});
                  try {
                    try {
                      lv_classname.set(new abap.types.String().set(`CL_SYSTEM_UUID`));
                      if (abap.Classes[lv_classname.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
                      lv_uuid.set(await abap.Classes[lv_classname.get().trimEnd()].if_system_uuid_static$create_uuid_c32());
                    } catch (e) {
                      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                        lv_fm.set(new abap.types.String().set(`GUID_CREATE`));
                        if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_FUNC not found"; }
                        if (abap.FunctionModules[lv_fm.get().trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'.trimEnd()](); }
                        await abap.FunctionModules[lv_fm.get().trimEnd()]({importing: {ev_guid_32: lv_uuid}});
                      } else {
                        throw e;
                      }
                    }
                    result.set(lv_uuid);
                  } catch (e) {
                    if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
                    } else {
                      throw e;
                    }
                  }
                  return result;
                }
                async rtti_get_class_descr_on_cloud(INPUT) {
                  return z2ui5_cl_abap_api.rtti_get_class_descr_on_cloud(INPUT);
                }
                static async rtti_get_class_descr_on_cloud(INPUT) {
                  let result = new abap.types.String({qualifiedName: "STRING"});
                  let i_classname = INPUT?.i_classname;
                  let obj = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
                  let content = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
                  let lv_classname = new abap.types.Character(30, {});
                  let xco_cp_abap = new abap.types.Character(11, {});
                  lv_classname.set(i_classname);
                  xco_cp_abap.set(new abap.types.Character(11).set('XCO_CP_ABAP'));
                  if (abap.Classes[xco_cp_abap.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
                  if (abap.Classes[xco_cp_abap.get().trimEnd()].class === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                  if (abap.Classes[xco_cp_abap.get().trimEnd()].class === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                  obj.set(await abap.Classes[xco_cp_abap.get().trimEnd()].class({iv_name: lv_classname}));
                  if (obj.get().if_xco_ao_class$content === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                  if (obj.get().if_xco_ao_class$content === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                  content.set(await obj.get().if_xco_ao_class$content());
                  if (content.get().if_xco_clas_content$get_short_description === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                  if (content.get().if_xco_clas_content$get_short_description === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                  result.set(await content.get().if_xco_clas_content$get_short_description());
                  return result;
                }
                async rtti_get_t_attri_on_prem(INPUT) {
                  return z2ui5_cl_abap_api.rtti_get_t_attri_on_prem(INPUT);
                }
                static async rtti_get_t_attri_on_prem(INPUT) {
                  let result = abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");
                  let tabname = INPUT?.tabname;
                  if (tabname?.getQualifiedName === undefined || tabname.getQualifiedName() !== "STRING") { tabname = undefined; }
                  if (tabname === undefined) { tabname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.tabname); }
                  let structdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
                  let dfies = new abap.types.DataReference(new abap.types.Character(4));
                  let s_dfies = new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {});
                  let fs_dfies_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
                  let fs_line_ = new abap.types.FieldSymbol(new abap.types.Character(4));
                  let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
                  let comps = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
                  let temp10 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
                  let lo_struct = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
                  let new_struct_desc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
                  let new_table_desc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
                  let comp = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
                  let fs_value_ = new abap.types.FieldSymbol(new abap.types.Character(4));
                  let fs_value_dest_ = new abap.types.FieldSymbol(new abap.types.Character(4));
                  abap.statements.clear(temp9);
                  comps.set(temp9);
                  await abap.statements.cast(temp10, (await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_name({p_name: new abap.types.Character(5).set('DFIES')})));
                  lo_struct.set(temp10);
                  comps.set((await lo_struct.get().get_components()));
                  try {
                    new_struct_desc.set((await abap.Classes['CL_ABAP_STRUCTDESCR'].create({p_components: comps})));
                    new_table_desc.set((await abap.Classes['CL_ABAP_TABLEDESCR'].create({p_line_type: new_struct_desc, p_table_kind: abap.Classes['CL_ABAP_TABLEDESCR'].tablekind_std})));
                    if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
                    await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: new_table_desc, dref: dfies});
                    abap.statements.assign({target: fs_dfies_, source: dfies.dereference()});
                    if (abap.compare.assigned(fs_dfies_) === false) {
                      return result;
                    }
                    if (abap.compare.initial(tabname)) {
                      const unique60 = await (new abap.Classes['Z2UI5_CX_ABAP_API']()).constructor_({val: new abap.types.String().set(`RTTI_BY_NAME_TAB_INITIAL`)});
                      unique60.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_abap_api.clas.abap","INTERNAL_LINE": 873};
                      throw unique60;
                    }
                    await abap.statements.cast(structdescr, (await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_name({p_name: tabname})));
                    fs_dfies_.set((await structdescr.get().get_ddic_field_list()));
                    for await (const unique61 of abap.statements.loop(fs_dfies_)) {
                      fs_line_.assign(unique61);
                      for await (const unique62 of abap.statements.loop(comps)) {
                        comp.set(unique62);
                        abap.statements.assign({component: comp.get().name, target: fs_value_, source: fs_line_});
                        if (abap.compare.assigned(fs_value_) === false) {
                          continue;
                        }
                        abap.statements.assign({component: comp.get().name, target: fs_value_dest_, source: s_dfies});
                        if (abap.compare.assigned(fs_value_dest_) === false) {
                          continue;
                        }
                        fs_value_dest_.set(fs_value_);
                        fs_value_.unassign();
                        fs_value_dest_.unassign();
                      }
                      abap.statements.append({source: s_dfies, target: result});
                      abap.statements.clear(s_dfies);
                    }
                  } catch (e) {
                    if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                    } else {
                      throw e;
                    }
                  }
                  return result;
                }
                async rtti_get_t_attri_on_cloud(INPUT) {
                  return z2ui5_cl_abap_api.rtti_get_t_attri_on_cloud(INPUT);
                }
                static async rtti_get_t_attri_on_cloud(INPUT) {
                  let result = abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");
                  let tabname = INPUT?.tabname;
                  if (tabname?.getQualifiedName === undefined || tabname.getQualifiedName() !== "STRING") { tabname = undefined; }
                  if (tabname === undefined) { tabname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.tabname); }
                  return result;
                }
                async rtti_get_t_dfies_by_table_name(INPUT) {
                  return z2ui5_cl_abap_api.rtti_get_t_dfies_by_table_name(INPUT);
                }
                static async rtti_get_t_dfies_by_table_name(INPUT) {
                  let result = abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");
                  let table_name = INPUT?.table_name;
                  if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
                  if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
                  if (abap.compare.initial((await this.context_check_abap_cloud())) === false) {
                    result.set((await this.rtti_get_t_attri_on_cloud({tabname: table_name})));
                  } else {
                    result.set((await this.rtti_get_t_attri_on_prem({tabname: table_name})));
                  }
                  return result;
                }
              }
              abap.Classes['Z2UI5_CL_ABAP_API'] = z2ui5_cl_abap_api;
              z2ui5_cl_abap_api.ty_s_fix_val = new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-HIGH"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-DESCR"})}, "z2ui5_cl_abap_api=>ty_s_fix_val", undefined, {}, {});
              z2ui5_cl_abap_api.ty_t_fix_val = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-HIGH"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_FIX_VAL-DESCR"})}, "z2ui5_cl_abap_api=>ty_s_fix_val", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_fix_val");
              z2ui5_cl_abap_api.ty_s_dfies = new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {});
              z2ui5_cl_abap_api.ty_t_dfies = abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");
              z2ui5_cl_abap_api.ty_s_data_element_text = new abap.types.Structure({"header": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-HEADER"}), "short": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-SHORT"}), "medium": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-MEDIUM"}), "long": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DATA_ELEMENT_TEXT-LONG"})}, "z2ui5_cl_abap_api=>ty_s_data_element_text", undefined, {}, {});
              z2ui5_cl_abap_api.ty_s_class_descr = new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {});
              z2ui5_cl_abap_api.ty_t_classes = abap.types.TableFactory.construct(new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_classes");
export {z2ui5_cl_abap_api};
//# sourceMappingURL=z2ui5_cl_abap_api.clas.mjs.map