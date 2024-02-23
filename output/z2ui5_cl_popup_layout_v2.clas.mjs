const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_popup_layout_v2.clas.abap
class z2ui5_cl_popup_layout_v2 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POPUP_LAYOUT_V2';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_T001": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_layo");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_LAYOUT": {"type": () => {return new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_DESCR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_LAYOUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_DEF": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_USR": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_OPEN": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_DELETE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_EXTENDED_LAYOUT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_HALIGN": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>fixvalues");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_IMPORTANCE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>fixvalues");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_RESULT": {"type": () => {return new abap.types.Structure({"check_cancel": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "s_layout": new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {})}, "z2ui5_cl_popup_layout_v2=>ty_s_result", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MV_INIT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_INIT": {"visibility": "O", "parameters": {}},
  "RENDER_EDIT": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "SELECT_LAYOUTS": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");}, "is_optional": " "}, "CLASSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TAB": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RENDER_SAVE": {"visibility": "O", "parameters": {}},
  "SAVE_LAYOUT": {"visibility": "O", "parameters": {}},
  "RENDER_OPEN": {"visibility": "O", "parameters": {}},
  "GET_SELECTED_LAYOUT": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});}, "is_optional": " "}}},
  "GET_LAYOUTS": {"visibility": "O", "parameters": {}},
  "INIT_EDIT": {"visibility": "O", "parameters": {}},
  "RENDER_DELETE": {"visibility": "O", "parameters": {}},
  "DB_DELETE_LAYOUT": {"visibility": "O", "parameters": {}},
  "DB_READ_HEAD": {"visibility": "O", "parameters": {"R_RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");}, "is_optional": " "}, "I_CLASSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_TAB": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DB_READ_LAYOUT": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});}, "is_optional": " "}, "LAYOUT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TAB": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "DB_READ_LAYOUT_MULTI": {"visibility": "O", "parameters": {"R_T001": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");}, "is_optional": " "}, "I_CLASSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_TAB_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DB_READ_LAYOUT_INFO": {"visibility": "O", "parameters": {"R_T002": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002");}, "is_optional": " "}, "I_DEF": {"type": () => {return new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});}, "is_optional": " "}}},
  "INIT_LAYOUT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});}, "is_optional": " "}, "TAB": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "CLASSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_LAYOUT_V2"});}, "is_optional": " "}, "LAYOUT": {"type": () => {return new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});}, "is_optional": " "}, "OPEN_LAYOUT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "DELETE_LAYOUT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "EXTENDED_LAYOUT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"check_cancel": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "s_layout": new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {})}, "z2ui5_cl_popup_layout_v2=>ty_s_result", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_t001 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_layo");
    this.ms_layout = new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});
    this.mv_descr = new abap.types.String({qualifiedName: "STRING"});
    this.mv_layout = new abap.types.String({qualifiedName: "STRING"});
    this.mv_def = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_usr = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_open = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_delete = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_extended_layout = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_halign = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>fixvalues");
    this.mt_importance = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>fixvalues");
    this.ms_result = new abap.types.Structure({"check_cancel": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "s_layout": new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {})}, "z2ui5_cl_popup_layout_v2=>ty_s_result", undefined, {}, {});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_init = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async db_delete_layout() {
    let layout = new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});
    layout.set((await this.get_selected_layout()));
    await abap.statements.deleteInternal(z2ui5_t001,{from: layout.get().s_head});
    await abap.statements.deleteDatabase("z2ui5_t002", {"table": layout.get().t_layout});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.commit();
    }
  }
  async db_read_head(INPUT) {
    return z2ui5_cl_popup_layout_v2.db_read_head(INPUT);
  }
  static async db_read_head(INPUT) {
    let r_result = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");
    let i_classname = INPUT?.i_classname;
    if (i_classname?.getQualifiedName === undefined || i_classname.getQualifiedName() !== "STRING") { i_classname = undefined; }
    if (i_classname === undefined) { i_classname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_classname); }
    let i_tab = INPUT?.i_tab;
    if (i_tab?.getQualifiedName === undefined || i_tab.getQualifiedName() !== "STRING") { i_tab = undefined; }
    if (i_tab === undefined) { i_tab = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_tab); }
    await abap.statements.select(r_result, {select: "SELECT * FROM " + abap.buildDbTableName("z2ui5_t001") + " WHERE \"classname\" = '" + i_classname.get() + "' AND \"tab\" = '" + i_tab.get() + "'", primaryKey: ["mandt","layout","tab"]});
    return r_result;
  }
  async db_read_layout(INPUT) {
    return z2ui5_cl_popup_layout_v2.db_read_layout(INPUT);
  }
  static async db_read_layout(INPUT) {
    let result = new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});
    let layout = INPUT?.layout;
    let tab = INPUT?.tab;
    await abap.statements.select(result.get().s_head, {select: "SELECT * FROM " + abap.buildDbTableName("z2ui5_t001") + " WHERE \"layout\" = '" + layout.get() + "' AND \"tab\" = '" + tab.get() + "' UP TO 1 ROWS", primaryKey: ["mandt","layout","tab"]});
    await abap.statements.select(result.get().t_layout, {select: "SELECT * FROM " + abap.buildDbTableName("z2ui5_t002") + " WHERE \"layout\" = '" + layout.get() + "' AND \"tab\" = '" + tab.get() + "'", primaryKey: ["mandt","layout","tab","fname"]});
    return result;
  }
  async db_read_layout_info(INPUT) {
    return z2ui5_cl_popup_layout_v2.db_read_layout_info(INPUT);
  }
  static async db_read_layout_info(INPUT) {
    let r_t002 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002");
    let i_def = INPUT?.i_def;
    if (i_def?.getQualifiedName === undefined || i_def.getQualifiedName() !== "Z2UI5_T001") { i_def = undefined; }
    if (i_def === undefined) { i_def = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}).set(INPUT.i_def); }
    await abap.statements.select(r_t002, {select: "SELECT \"layout\", \"tab\", \"fname\", \"rollname\", \"visible\", \"halign\", \"importance\", \"merge\", \"width\", \"text\" FROM " + abap.buildDbTableName("z2ui5_t002") + " WHERE \"layout\" = '" + i_def.get().layout.get() + "' AND \"tab\" = '" + i_def.get().tab.get() + "'", primaryKey: ["mandt","layout","tab","fname"]});
    return r_t002;
  }
  async db_read_layout_multi(INPUT) {
    return z2ui5_cl_popup_layout_v2.db_read_layout_multi(INPUT);
  }
  static async db_read_layout_multi(INPUT) {
    let r_t001 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");
    let i_classname = INPUT?.i_classname;
    if (i_classname?.getQualifiedName === undefined || i_classname.getQualifiedName() !== "STRING") { i_classname = undefined; }
    if (i_classname === undefined) { i_classname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_classname); }
    let i_tab_name = INPUT?.i_tab_name;
    if (i_tab_name?.getQualifiedName === undefined || i_tab_name.getQualifiedName() !== "STRING") { i_tab_name = undefined; }
    if (i_tab_name === undefined) { i_tab_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_tab_name); }
    await abap.statements.select(r_t001, {select: "SELECT \"layout\", \"tab\", \"descr\", \"classname\", \"def\", \"uname\" FROM " + abap.buildDbTableName("z2ui5_t001") + " WHERE \"classname\" = '" + i_classname.get() + "' AND \"tab\" = '" + i_tab_name.get() + "'", primaryKey: ["mandt","layout","tab"]});
    return r_t001;
  }
  async factory(INPUT) {
    return z2ui5_cl_popup_layout_v2.factory(INPUT);
  }
  static async factory(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_LAYOUT_V2"});
    let layout = INPUT?.layout;
    if (layout?.getQualifiedName === undefined || layout.getQualifiedName() !== "Z2UI5_CL_POPUP_LAYOUT_V2=>TY_S_LAYOUT") { layout = undefined; }
    if (layout === undefined) { layout = new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {}).set(INPUT.layout); }
    let open_layout = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.open_layout) {open_layout.set(INPUT.open_layout);}
    let delete_layout = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.delete_layout) {delete_layout.set(INPUT.delete_layout);}
    let extended_layout = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.extended_layout) {extended_layout.set(INPUT.extended_layout);}
    result.set(await (new abap.Classes['Z2UI5_CL_POPUP_LAYOUT_V2']()).constructor_());
    result.get().ms_layout.set(layout);
    result.get().mv_open.set(open_layout);
    result.get().mv_delete.set(delete_layout);
    result.get().mv_extended_layout.set(extended_layout);
    return result;
  }
  async get_layouts() {
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let fs_temp2_ = new abap.types.FieldSymbol(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {}));
    let t001 = new abap.types.DataReference(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {}));
    let fs_temp3_ = new abap.types.FieldSymbol(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {}));
    temp1.set(this.ms_layout.get().s_head.get().classname);
    temp2.set(this.ms_layout.get().s_head.get().tab);
    this.mt_t001.set((await this.select_layouts({classname: temp1, tab: temp2})));
    if (abap.compare.initial(this.mt_t001) === false) {
      abap.statements.readTable(this.mt_t001,{assigning: fs_temp2_,
        withKey: (i) => {return abap.compare.eq(i.layout, this.ms_layout.get().s_head.get().layout);},
        withKeyValue: [{key: (i) => {return i.layout}, value: this.ms_layout.get().s_head.get().layout}],
        usesTableLine: false,
        withKeySimple: {"layout": this.ms_layout.get().s_head.get().layout}});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      t001.assign(fs_temp2_.getPointer());
      if (abap.compare.initial(t001) === false) {
        t001.get().selkz.set(abap.builtin.abap_true);
        return;
      } else {
        abap.statements.readTable(this.mt_t001,{index: abap.IntegerFactory.get(1),
          assigning: fs_temp3_});
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        t001.assign(fs_temp3_.getPointer());
        t001.get().selkz.set(abap.builtin.abap_true);
      }
    }
  }
  async get_selected_layout() {
    let result = new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});
    let temp4 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {});
    let temp5 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {});
    let t001 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {});
    abap.statements.clear(temp4);
    abap.statements.readTable(this.mt_t001,{into: temp5,
      withKey: (i) => {return abap.compare.eq(i.selkz, abap.builtin.abap_true);},
      withKeyValue: [{key: (i) => {return i.selkz}, value: abap.builtin.abap_true}],
      usesTableLine: false,
      withKeySimple: {"selkz": abap.builtin.abap_true}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      temp4.set(temp5);
    }
    t001.set(temp4);
    if (abap.compare.initial(t001) === false) {
      result.set((await this.db_read_layout({layout: t001.get().layout, tab: t001.get().tab})));
    }
    return result;
  }
  async init_edit() {
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    this.mv_layout.set(this.ms_layout.get().s_head.get().layout);
    this.mv_descr.set(this.ms_layout.get().s_head.get().descr);
    this.mv_def.set(this.ms_layout.get().s_head.get().def);
    temp1.set(abap.builtin.boolc(abap.compare.initial(this.ms_layout.get().s_head.get().uname) === false));
    this.mv_usr.set(temp1);
  }
  async init_layout(INPUT) {
    return z2ui5_cl_popup_layout_v2.init_layout(INPUT);
  }
  static async init_layout(INPUT) {
    let result = new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});
    let tab = INPUT?.tab;
    if (tab === undefined) { tab = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.tab); }
    let classname = INPUT?.classname;
    if (classname?.getQualifiedName === undefined || classname.getQualifiedName() !== "STRING") { classname = undefined; }
    if (classname === undefined) { classname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.classname); }
    let t_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let tab_name = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let lr_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let temp7 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {});
    let t_t001 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");
    let temp8 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
    let temp9 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
    let def = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
    let temp10 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
    let temp11 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
    let t_t002 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002");
    let temp12 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {});
    let layout = new abap.types.DataReference(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}));
    let fs_temp13_ = new abap.types.FieldSymbol(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}));
    let t002 = new abap.types.DataReference(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}));
    let index = new abap.types.Integer({qualifiedName: "I"});
    t_comp.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_struc({val: tab})));
    tab_name.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_tab_get_relative_name({table: tab})));
    if (abap.compare.initial(tab_name)) {
      tab_name.set(classname);
    }
    for await (const unique173 of abap.statements.loop(t_comp)) {
      lr_comp.assign(unique173);
      abap.statements.clear(temp7);
      temp7.get().tab.set(tab_name);
      temp7.get().fname.set(lr_comp.get().name);
      temp7.get().rollname.set((await lr_comp.get().type.get().get_relative_name()));
      abap.statements.insertInternal({data: temp7, table: result.get().t_layout});
    }
    t_t001.set((await this.db_read_layout_multi({i_classname: classname, i_tab_name: tab_name})));
    abap.statements.clear(temp8);
    abap.statements.readTable(t_t001,{into: temp9,
      withKey: (i) => {return abap.compare.eq(i.classname, classname) && abap.compare.eq(i.tab, tab_name) && abap.compare.eq(i.def, abap.builtin.abap_true) && abap.compare.eq(i.uname, abap.builtin.sy.get().uname);},
      withKeyValue: [{key: (i) => {return i.classname}, value: classname},{key: (i) => {return i.tab}, value: tab_name},{key: (i) => {return i.def}, value: abap.builtin.abap_true},{key: (i) => {return i.uname}, value: abap.builtin.sy.get().uname}],
      usesTableLine: false,
      withKeySimple: {"classname": classname,"tab": tab_name,"def": abap.builtin.abap_true,"uname": abap.builtin.sy.get().uname}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      temp8.set(temp9);
    }
    def.set(temp8);
    if (abap.compare.initial(def)) {
      abap.statements.clear(temp10);
      abap.statements.readTable(t_t001,{into: temp11,
        withKey: (i) => {return abap.compare.eq(i.classname, classname) && abap.compare.eq(i.tab, tab_name) && abap.compare.eq(i.def, abap.builtin.abap_true);},
        withKeyValue: [{key: (i) => {return i.classname}, value: classname},{key: (i) => {return i.tab}, value: tab_name},{key: (i) => {return i.def}, value: abap.builtin.abap_true}],
        usesTableLine: false,
        withKeySimple: {"classname": classname,"tab": tab_name,"def": abap.builtin.abap_true}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        temp10.set(temp11);
      }
      def.set(temp10);
    }
    if (abap.compare.initial(def.get().layout) === false) {
      t_t002.set((await this.db_read_layout_info({i_def: def})));
      for await (const unique174 of abap.statements.loop(result.get().t_layout)) {
        layout.assign(unique174);
        try {
          abap.statements.readTable(t_t002,{assigning: fs_temp13_,
            withKey: (i) => {return abap.compare.eq(i.fname, layout.get().fname);},
            withKeyValue: [{key: (i) => {return i.fname}, value: layout.get().fname}],
            usesTableLine: false,
            withKeySimple: {"fname": layout.get().fname}});
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
          }
          t002.assign(fs_temp13_.getPointer());
          layout.dereference().set((t002).dereference());
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            layout.get().layout.set(new abap.types.Character(7).set('Default'));
            layout.get().halign.set(new abap.types.Character(7).set('Initial'));
            layout.get().importance.set(new abap.types.Character(4).set('None'));
            layout.get().rollname.set(layout.get().rollname);
            layout.get().fname.set(layout.get().fname);
            layout.get().tab.set(tab_name);
          } else {
            throw e;
          }
        }
      }
      result.get().s_head.set(def);
    } else {
      index.set(abap.IntegerFactory.get(0));
      for await (const unique175 of abap.statements.loop(result.get().t_layout)) {
        layout.assign(unique175);
        index.set(abap.operators.add(index,abap.IntegerFactory.get(1)));
        if (abap.compare.le(index, abap.IntegerFactory.get(10))) {
          layout.get().visible.set(abap.builtin.abap_true);
        }
        if (abap.compare.eq(layout.get().fname, new abap.types.Character(5).set('MANDT')) || abap.compare.eq(layout.get().fname, new abap.types.Character(6).set('ROW_ID'))) {
          layout.get().visible.set(abap.builtin.abap_false);
        }
        layout.get().layout.set(new abap.types.Character(7).set('Default'));
        layout.get().halign.set(new abap.types.Character(7).set('Initial'));
        layout.get().importance.set(new abap.types.Character(4).set('None'));
        layout.get().tab.set(tab_name);
      }
      result.get().s_head.get().layout.set(new abap.types.Character(7).set('Default'));
      result.get().s_head.get().descr.set(new abap.types.Character(23).set('System generated Layout'));
      result.get().s_head.get().def.set(abap.builtin.abap_true);
      result.get().s_head.get().classname.set(classname);
      result.get().s_head.get().tab.set(tab_name);
    }
    return result;
  }
  async on_event() {
    let unique176 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique176, new abap.types.Character(6).set('CANCEL'))) {
      this.ms_result.get().check_cancel.set(abap.builtin.abap_true);
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique176, new abap.types.Character(2).set('OK'))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique176, new abap.types.Character(11).set('LAYOUT_SAVE'))) {
      await this.render_save();
    } else if (abap.compare.eq(unique176, new abap.types.Character(5).set('CLOSE'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique176, new abap.types.Character(10).set('SAVE_CLOSE'))) {
      await this.render_edit();
    } else if (abap.compare.eq(unique176, new abap.types.Character(9).set('SAVE_SAVE'))) {
      await this.save_layout();
      await this.render_edit();
    } else if (abap.compare.eq(unique176, new abap.types.Character(11).set('OPEN_SELECT'))) {
      this.ms_layout.set((await this.get_selected_layout()));
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique176, new abap.types.Character(13).set('DELETE_SELECT'))) {
      await this.db_delete_layout();
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique176, new abap.types.Character(11).set('LAYOUT_LOAD'))) {
      await this.client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POPUP_LAYOUT_V2'].factory({layout: this.ms_layout, open_layout: abap.builtin.abap_true}))});
    } else if (abap.compare.eq(unique176, new abap.types.Character(13).set('LAYOUT_DELETE'))) {
      await this.client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POPUP_LAYOUT_V2'].factory({layout: this.ms_layout, delete_layout: abap.builtin.abap_true}))});
    }
  }
  async on_init() {
    let temp14 = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>fixvalues");
    let temp15 = new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {});
    let temp16 = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>fixvalues");
    let temp17 = new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {});
    abap.statements.clear(temp14);
    temp15.get().low.set(new abap.types.Character(5).set('Begin'));
    temp15.get().ddtext.set(new abap.types.Character(56).set('Locale-specific positioning at the beginning of the line'));
    abap.statements.insertInternal({data: temp15, table: temp14});
    temp15.get().low.set(new abap.types.Character(6).set('Center'));
    temp15.get().ddtext.set(new abap.types.Character(23).set('Centered text alignment'));
    abap.statements.insertInternal({data: temp15, table: temp14});
    temp15.get().low.set(new abap.types.Character(3).set('End'));
    temp15.get().ddtext.set(new abap.types.Character(50).set('Locale-specific positioning at the end of the line'));
    abap.statements.insertInternal({data: temp15, table: temp14});
    temp15.get().low.set(new abap.types.Character(7).set('Initial'));
    temp15.get().ddtext.set(new abap.types.Character(50).set('Sets no text align, so the browser default is used'));
    abap.statements.insertInternal({data: temp15, table: temp14});
    temp15.get().low.set(new abap.types.Character(4).set('Left'));
    temp15.get().ddtext.set(new abap.types.Character(30).set('Hard option for left alignment'));
    abap.statements.insertInternal({data: temp15, table: temp14});
    temp15.get().low.set(new abap.types.Character(5).set('Right'));
    temp15.get().ddtext.set(new abap.types.Character(31).set('Hard option for right alignment'));
    abap.statements.insertInternal({data: temp15, table: temp14});
    this.mt_halign.set(temp14);
    abap.statements.clear(temp16);
    temp17.get().low.set(new abap.types.Character(4).set('High'));
    temp17.get().ddtext.set(new abap.types.Character(13).set('High priority'));
    abap.statements.insertInternal({data: temp17, table: temp16});
    temp17.get().low.set(new abap.types.Character(3).set('Low'));
    temp17.get().ddtext.set(new abap.types.Character(12).set('Low priority'));
    abap.statements.insertInternal({data: temp17, table: temp16});
    temp17.get().low.set(new abap.types.Character(6).set('Medium'));
    temp17.get().ddtext.set(new abap.types.Character(15).set('Medium priority'));
    abap.statements.insertInternal({data: temp17, table: temp16});
    temp17.get().low.set(new abap.types.Character(4).set('None'));
    temp17.get().ddtext.set(new abap.types.Character(22).set('Default, none priority'));
    abap.statements.insertInternal({data: temp17, table: temp16});
    this.mt_importance.set(temp16);
  }
  async render_delete() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    dialog.set((await popup.get().dialog({title: new abap.types.Character(6).set('Layout'), afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLOSE')}))})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await dialog.get().table({headertext: new abap.types.Character(6).set('Layout'), mode: new abap.types.Character(16).set('SingleSelectLeft'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_t001}))})).get().columns()).get().column()).get().text({text: new abap.types.Character(6).set('Layout')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().text({text: new abap.types.Character(8).set('{LAYOUT}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')});
    await (await (await (await (await dialog.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(4).set('Back'), icon: new abap.types.Character(19).set('sap-icon://nav-back'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLOSE')}))})).get().button({text: new abap.types.Character(6).set('Delete'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('DELETE_SELECT')})), type: new abap.types.Character(6).set('Reject'), icon: new abap.types.Character(17).set('sap-icon://delete')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async render_edit() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let list = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp18 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let col = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    dialog.set((await (await popup.get().dialog({title: new abap.types.Character(6).set('Layout'), contentwidth: new abap.types.Character(3).set('50%'), afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('CANCEL')}))})).get().content()));
    tab.set((await dialog.get().table({growing: abap.builtin.abap_true, items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_layout.get().t_layout}))})));
    list.set((await tab.get().column_list_item()));
    cells.set((await list.get().cells()));
    columns.set((await tab.get().columns()));
    lt_comp.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_struc({val: this.ms_layout.get().t_layout})));
    for await (const unique177 of abap.statements.loop(lt_comp)) {
      comp.assign(unique177);
      let unique178 = comp.get().name;
      if (abap.compare.eq(unique178, new abap.types.Character(5).set('FNAME'))) {
        col.set((await (await columns.get().column()).get().header({ns: new abap.types.String().set(``)})));
        await col.get().text({text: new abap.types.Character(3).set('Row')});
      } else if (abap.compare.eq(unique178, new abap.types.Character(7).set('VISIBLE'))) {
        col.set((await (await columns.get().column()).get().header({ns: new abap.types.String().set(``)})));
        await col.get().text({text: new abap.types.Character(7).set('Visible')});
      } else if (abap.compare.eq(unique178, new abap.types.Character(5).set('MERGE'))) {
        if (!(abap.compare.eq(this.mv_extended_layout, abap.builtin.abap_true))) {
          continue;
        }
        col.set((await (await columns.get().column()).get().header({ns: new abap.types.String().set(``)})));
        await col.get().text({text: new abap.types.Character(16).set('Merge duplicates')});
      } else if (abap.compare.eq(unique178, new abap.types.Character(6).set('HALIGN'))) {
        if (!(abap.compare.eq(this.mv_extended_layout, abap.builtin.abap_true))) {
          continue;
        }
        col.set((await (await columns.get().column()).get().header({ns: new abap.types.String().set(``)})));
        await col.get().text({text: new abap.types.Character(5).set('Align')});
      } else if (abap.compare.eq(unique178, new abap.types.Character(10).set('IMPORTANCE'))) {
        if (!(abap.compare.eq(this.mv_extended_layout, abap.builtin.abap_true))) {
          continue;
        }
        col.set((await (await columns.get().column()).get().header({ns: new abap.types.String().set(``)})));
        await col.get().text({text: new abap.types.Character(10).set('Importance')});
      }
    }
    for await (const unique179 of abap.statements.loop(lt_comp)) {
      comp.assign(unique179);
      let unique180 = comp.get().name;
      if (abap.compare.eq(unique180, new abap.types.Character(5).set('FNAME'))) {
        await cells.get().text({text: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(comp.get().name,new abap.types.String().set(`}`)))});
      } else if (abap.compare.eq(unique180, new abap.types.Character(7).set('VISIBLE')) || abap.compare.eq(unique180, new abap.types.Character(5).set('MERGE'))) {
        await cells.get().switch({type: new abap.types.Character(12).set('AcceptReject'), state: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(comp.get().name,new abap.types.String().set(`}`)))});
      } else if (abap.compare.eq(unique180, new abap.types.Character(6).set('HALIGN'))) {
        await (await cells.get().combobox({selectedkey: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(comp.get().name,new abap.types.String().set(`}`))), items: (await this.client.get().z2ui5_if_client$_bind_local({val: this.mt_halign}))})).get().item({key: new abap.types.Character(5).set('{LOW}'), text: new abap.types.Character(16).set('{LOW} - {DDTEXT}')});
      } else if (abap.compare.eq(unique180, new abap.types.Character(10).set('IMPORTANCE'))) {
        await (await cells.get().combobox({selectedkey: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(comp.get().name,new abap.types.String().set(`}`))), items: (await this.client.get().z2ui5_if_client$_bind_local({val: this.mt_importance}))})).get().item({key: new abap.types.Character(5).set('{LOW}'), text: new abap.types.Character(16).set('{LOW} - {DDTEXT}')});
      }
    }
    await (await (await (await (await (await (await (await (await dialog.get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('Cancel'), icon: new abap.types.Character(23).set('sap-icon://sys-cancel-2'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('CANCEL')}))})).get().button({text: new abap.types.Character(9).set('DB Delete'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('LAYOUT_DELETE')})), icon: new abap.types.Character(17).set('sap-icon://delete')})).get().button({text: new abap.types.Character(7).set('DB Read'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('LAYOUT_LOAD')})), icon: new abap.types.Character(30).set('sap-icon://download-from-cloud')})).get().button({text: new abap.types.Character(7).set('DB Save'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('LAYOUT_SAVE')})), icon: new abap.types.Character(15).set('sap-icon://save')})).get().button({text: new abap.types.Character(2).set('OK'), icon: new abap.types.Character(17).set('sap-icon://accept'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(2).set('OK')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await (await popup.get().get_root()).get().xml_get())});
  }
  async render_open() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    dialog.set((await popup.get().dialog({title: new abap.types.Character(6).set('Layout'), afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLOSE')}))})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await dialog.get().table({headertext: new abap.types.Character(6).set('Layout'), mode: new abap.types.Character(16).set('SingleSelectLeft'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_t001}))})).get().columns()).get().column()).get().text({text: new abap.types.Character(6).set('Layout')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(7).set('Default')})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().text({text: new abap.types.Character(8).set('{LAYOUT}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().text({text: new abap.types.Character(5).set('{DEF}')});
    await (await (await (await (await dialog.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(4).set('Back'), icon: new abap.types.Character(19).set('sap-icon://nav-back'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLOSE')}))})).get().button({text: new abap.types.Character(4).set('Open'), icon: new abap.types.Character(17).set('sap-icon://accept'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('OPEN_SELECT')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async render_save() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let form = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    dialog.set((await popup.get().dialog({title: new abap.types.Character(4).set('Save'), afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('SAVE_CLOSE')}))})));
    form.set((await dialog.get().simple_form({title: new abap.types.Character(6).set('Layout'), editable: abap.builtin.abap_true, labelspanxl: new abap.types.String().set(`4`), labelspanl: new abap.types.String().set(`4`), labelspanm: new abap.types.String().set(`4`), labelspans: new abap.types.String().set(`4`), adjustlabelspan: abap.builtin.abap_false})));
    await (await form.get().toolbar()).get().title({text: new abap.types.Character(6).set('Layout')});
    await (await (await (await (await form.get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(6).set('Layout')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_layout}))})).get().label({text: new abap.types.Character(11).set('Description')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_descr}))});
    await (await form.get().toolbar()).get().title({text: new abap.types.String().set(``)});
    await (await (await (await (await form.get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(14).set('Default Layout')})).get().switch({type: new abap.types.Character(12).set('AcceptReject'), state: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_def}))})).get().label({text: new abap.types.Character(13).set('User specific')})).get().switch({type: new abap.types.Character(12).set('AcceptReject'), state: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_usr}))});
    await (await (await (await (await dialog.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(4).set('Back'), icon: new abap.types.Character(19).set('sap-icon://nav-back'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('SAVE_CLOSE')}))})).get().button({text: new abap.types.Character(4).set('Save'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SAVE_SAVE')})), type: new abap.types.Character(7).set('Success'), icon: new abap.types.Character(15).set('sap-icon://save')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await (await popup.get().get_root()).get().xml_get())});
  }
  async result() {
    let result = new abap.types.Structure({"check_cancel": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "s_layout": new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {})}, "z2ui5_cl_popup_layout_v2=>ty_s_result", undefined, {}, {});
    this.ms_result.get().s_layout.set(this.ms_layout);
    result.set(this.ms_result);
    return result;
  }
  async save_layout() {
    
    let t002 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp1");
    let user = new abap.types.Character(12, {"qualifiedName":"sy-uname"});
    let temp19 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
    let t001 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
    let layout = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {});
    let temp20 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {});
    
    let del = abap.types.TableFactory.construct(new abap.types.Structure({"layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"})}, "temp21", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp2");
    if (abap.compare.initial(this.mv_layout)) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(19).set('Layoutname missing.')});
      return;
    }
    if (abap.compare.eq(this.mv_usr, abap.builtin.abap_true)) {
      user.set(abap.builtin.sy.get().uname);
    }
    abap.statements.clear(temp19);
    temp19.get().layout.set(this.mv_layout);
    temp19.get().classname.set(this.ms_layout.get().s_head.get().classname);
    temp19.get().descr.set(this.mv_descr);
    temp19.get().def.set(this.mv_def);
    temp19.get().uname.set(user);
    temp19.get().tab.set(this.ms_layout.get().s_head.get().tab);
    t001.set(temp19);
    for await (const unique181 of abap.statements.loop(this.ms_layout.get().t_layout)) {
      layout.set(unique181);
      abap.statements.clear(temp20);
      temp20.get().layout.set(this.mv_layout);
      temp20.get().tab.set(this.ms_layout.get().s_head.get().tab);
      temp20.get().fname.set(layout.get().fname);
      temp20.get().rollname.set(layout.get().rollname);
      temp20.get().visible.set(layout.get().visible);
      temp20.get().halign.set(layout.get().halign);
      temp20.get().importance.set(layout.get().importance);
      temp20.get().merge.set(layout.get().merge);
      temp20.get().width.set(layout.get().width);
      abap.statements.insertInternal({data: temp20, table: t002});
    }
    await abap.statements.select(t001.get().layout, {select: "SELECT \"layout\" FROM " + abap.buildDbTableName("z2ui5_t001") + " WHERE \"layout\" = '" + t001.get().layout.get() + "' AND \"tab\" = '" + t001.get().tab.get() + "' UP TO 1 ROWS", primaryKey: ["mandt","layout","tab"]});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      await abap.statements.select(del, {select: "SELECT \"layout\", \"tab\", \"fname\", \"rollname\", \"visible\", \"halign\", \"importance\", \"merge\", \"width\" FROM " + abap.buildDbTableName("z2ui5_t002") + " WHERE \"layout\" = '" + t001.get().layout.get() + "' AND \"tab\" = '" + t001.get().tab.get() + "'", primaryKey: ["mandt","layout","tab","fname"]});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        await abap.statements.deleteDatabase("z2ui5_t002", {"table": del});
        abap.statements.commit();
      }
    }
    await abap.statements.modifyDatabase("z2ui5_t001", {"values": t001});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      await abap.statements.modifyDatabase("z2ui5_t002", {"table": t002});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.commit();
        await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(11).set('Data saved.')});
        this.ms_layout.get().s_head.set(t001);
        this.ms_layout.get().t_layout.set(t002);
      }
    }
  }
  async select_layouts(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");
    let classname = INPUT?.classname;
    if (classname?.getQualifiedName === undefined || classname.getQualifiedName() !== "STRING") { classname = undefined; }
    if (classname === undefined) { classname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.classname); }
    let tab = INPUT?.tab;
    if (tab?.getQualifiedName === undefined || tab.getQualifiedName() !== "STRING") { tab = undefined; }
    if (tab === undefined) { tab = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.tab); }
    result.set((await this.db_read_head({i_classname: classname, i_tab: tab})));
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp22 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_LAYOUT_V2"});
    let app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_LAYOUT_V2"});
    let ls_result = new abap.types.Structure({"check_cancel": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "s_layout": new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {})}, "z2ui5_cl_popup_layout_v2=>ty_s_result", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_init, abap.builtin.abap_false)) {
      this.mv_init.set(abap.builtin.abap_true);
      await this.on_init();
      let unique182 = abap.builtin.abap_true;
      if (abap.compare.eq(unique182, this.mv_open)) {
        await this.get_layouts();
        await this.render_open();
      } else if (abap.compare.eq(unique182, this.mv_delete)) {
        await this.get_layouts();
        await this.render_delete();
      } else {
        await this.init_edit();
        await this.render_edit();
      }
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      try {
        await abap.statements.cast(temp22, (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
        app.set(temp22);
        ls_result.set((await app.get().result()));
        if (abap.compare.eq(ls_result.get().check_cancel, abap.builtin.abap_true)) {
          return;
        }
        this.ms_layout.set(app.get().ms_layout);
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
      await this.render_edit();
      return;
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_POPUP_LAYOUT_V2'] = z2ui5_cl_popup_layout_v2;
z2ui5_cl_popup_layout_v2.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_layout_v2.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_popup_layout_v2.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_layout_v2.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_popup_layout_v2.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_layout_v2.z2ui5_if_app$license.set('MIT');
z2ui5_cl_popup_layout_v2.fixvalue = new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {});
z2ui5_cl_popup_layout_v2.fixvalues = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT_V2=>FIXVALUE-DDTEXT"})}, "z2ui5_cl_popup_layout_v2=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>fixvalues");
z2ui5_cl_popup_layout_v2.ty_s_t001 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {});
z2ui5_cl_popup_layout_v2.ty_t_t001 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t001");
z2ui5_cl_popup_layout_v2.ty_s_t002 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {});
z2ui5_cl_popup_layout_v2.ty_t_t002 = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002");
z2ui5_cl_popup_layout_v2.ty_s_layout = new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {});
z2ui5_cl_popup_layout_v2.ty_s_layo = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {});
z2ui5_cl_popup_layout_v2.ty_t_layo = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-layout"}), "tab": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-tab"}), "descr": new abap.types.Character(50, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-descr"}), "classname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-classname"}), "def": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-def"}), "uname": new abap.types.Character(12, {"qualifiedName":"z2ui5_cl_popup_layout_v2=>ty_s_layo-uname"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout_v2=>ty_s_layo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_layo");
z2ui5_cl_popup_layout_v2.ty_s_result = new abap.types.Structure({"check_cancel": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "s_layout": new abap.types.Structure({"s_head": new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "descr": new abap.types.Character(50, {}), "classname": new abap.types.Character(30, {}), "def": new abap.types.Character(1, {}), "uname": new abap.types.Character(12, {})}, "Z2UI5_T001", "Z2UI5_T001", {}, {}), "t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "layout": new abap.types.Character(12, {}), "tab": new abap.types.Character(30, {}), "fname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "visible": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "halign": new abap.types.Character(7, {}), "importance": new abap.types.Character(7, {}), "merge": new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"}), "width": new abap.types.Integer({qualifiedName: "I"}), "text": new abap.types.Character(40, {})}, "Z2UI5_T002", "Z2UI5_T002", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout_v2=>ty_t_t002")}, "z2ui5_cl_popup_layout_v2=>ty_s_layout", undefined, {}, {})}, "z2ui5_cl_popup_layout_v2=>ty_s_result", undefined, {}, {});
export {z2ui5_cl_popup_layout_v2};
//# sourceMappingURL=z2ui5_cl_popup_layout_v2.clas.mjs.map