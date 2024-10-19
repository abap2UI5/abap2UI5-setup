const {z2ui5_cl_abap_api} = await import("./z2ui5_cl_abap_api.clas.mjs");
const {z2ui5_cl_util} = await import("./z2ui5_cl_util.clas.mjs");
const {lcl_range_to_sql} = await import("./z2ui5_cl_util.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_util.clas.testclasses.abap
class ltcl_test_app {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"SV_VAR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "SS_TAB": {"type": () => {return new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "ST_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "MV_VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_TAB": {"type": () => {return new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ltcl_test_app=>temp1_f9908b1ee3");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SV_STATUS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CLASS_CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.sv_var = ltcl_test_app.sv_var;
    this.ss_tab = ltcl_test_app.ss_tab;
    this.st_tab = ltcl_test_app.st_tab;
    this.mv_val = new abap.types.String({qualifiedName: "STRING"});
    this.ms_tab = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {});
    this.mt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ltcl_test_app=>temp1_f9908b1ee3");
    this.sv_status = ltcl_test_app.sv_status;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async class_constructor() {
    return ltcl_test_app.class_constructor();
  }
  static async class_constructor() {
    let temp53 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {});
    let temp54 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    ltcl_test_app.sv_var.set(abap.IntegerFactory.get(1));
    abap.statements.clear(temp53);
    ltcl_test_app.ss_tab.set(temp53);
    abap.statements.clear(temp54);
    ltcl_test_app.st_tab.set(temp54);
  }
}
abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP'] = ltcl_test_app;
ltcl_test_app.sv_var = new abap.types.String({qualifiedName: "STRING"});
ltcl_test_app.ss_tab = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {});
ltcl_test_app.st_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
ltcl_test_app.sv_status = new abap.types.String({qualifiedName: "STRING"});
ltcl_test_app.sv_status.set(`test`);
await ltcl_test_app.class_constructor();
ltcl_test_app.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {});
ltcl_test_app.temp1_f9908b1ee3 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "LTCL_TEST_APP=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ltcl_test_app=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ltcl_test_app=>temp1_f9908b1ee3");
class ltcl_unit_test_abap_api {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UTIL-LTCL_UNIT_TEST_ABAP_API';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"CHECK_INPUT": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "TEST_ASSIGN": {"visibility": "I", "parameters": {}},
  "TEST_ELEDESCR_REL_NAME": {"visibility": "I", "parameters": {}},
  "TEST_CLASSDESCR": {"visibility": "I", "parameters": {}},
  "TEST_SUBSTRING_AFTER": {"visibility": "I", "parameters": {}},
  "TEST_SUBSTRING_BEFORE": {"visibility": "I", "parameters": {}},
  "TEST_STRING_SHIFT": {"visibility": "I", "parameters": {}},
  "TEST_STRING_REPLACE": {"visibility": "I", "parameters": {}},
  "TEST_RAISE_ERROR": {"visibility": "I", "parameters": {}},
  "TEST_XSDBOOL": {"visibility": "I", "parameters": {}},
  "TEST_XSDBOOL_NESTED": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_assign() {
    let lo_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_UTIL\\CLASS=LTCL_TEST_APP"});
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let lv_assign = new abap.types.String({qualifiedName: "STRING"});
    lo_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP']()).constructor_());
    lo_app.get().mv_val.set(new abap.types.String().set(`ABC`));
    lv_assign.set(abap.operators.concat(new abap.types.String().set(`LO_APP->`),new abap.types.Character(6).set('MV_VAL')));
    abap.statements.assign({target: fs_any_, dynamicName: lv_assign.get(), dynamicSource: (() => {
                  const name = lv_assign.get().toLowerCase().replace(/[~\/]/g, "$").match(/[\w\$\/]+/)[0];
                  try { return eval(name); } catch {}
                  try { return eval("this." + name); } catch {}
                })()});
      abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: fs_any_, exp: new abap.types.String().set(`ABC`)});
    }
    async test_classdescr() {
      let lo_app = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_UTIL\\CLASS=LTCL_TEST_APP"});
      let temp55 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR", RTTIName: "\\CLASS=CL_ABAP_CLASSDESCR"});
      let lt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_attrdescr_tab");
      let lv_test = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp11 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp12 = new abap.types.Integer({qualifiedName: "I"});
      let temp56 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp57 = new abap.types.Integer({qualifiedName: "I"});
      let temp58 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp59 = new abap.types.Integer({qualifiedName: "I"});
      let temp60 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp61 = new abap.types.Integer({qualifiedName: "I"});
      let temp62 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp63 = new abap.types.Integer({qualifiedName: "I"});
      let temp64 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp65 = new abap.types.Integer({qualifiedName: "I"});
      let temp66 = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
      let temp67 = new abap.types.Integer({qualifiedName: "I"});
      lo_app.set(await (new abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP']()).constructor_());
      await abap.statements.cast(temp55, (await abap.Classes['CL_ABAP_OBJECTDESCR'].describe_by_object_ref({p_object_ref: lo_app})));
      lt_attri.set(temp55.get().attributes);
      temp12.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_attri,{into: temp11,
        withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`MS_TAB`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`MS_TAB`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`MS_TAB`)}});
      abap.builtin.sy.get().tabix.set(temp12);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_test.set(temp11);
      temp57.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_attri,{into: temp56,
        withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`MT_TAB`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`MT_TAB`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`MT_TAB`)}});
      abap.builtin.sy.get().tabix.set(temp57);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_test.set(temp56);
      temp59.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_attri,{into: temp58,
        withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`MV_VAL`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`MV_VAL`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`MV_VAL`)}});
      abap.builtin.sy.get().tabix.set(temp59);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_test.set(temp58);
      temp61.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_attri,{into: temp60,
        withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`SS_TAB`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`SS_TAB`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`SS_TAB`)}});
      abap.builtin.sy.get().tabix.set(temp61);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_test.set(temp60);
      temp63.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_attri,{into: temp62,
        withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`ST_TAB`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`ST_TAB`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`ST_TAB`)}});
      abap.builtin.sy.get().tabix.set(temp63);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_test.set(temp62);
      temp65.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_attri,{into: temp64,
        withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`SV_STATUS`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`SV_STATUS`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`SV_STATUS`)}});
      abap.builtin.sy.get().tabix.set(temp65);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_test.set(temp64);
      temp67.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_attri,{into: temp66,
        withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`SV_VAR`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`SV_VAR`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`SV_VAR`)}});
      abap.builtin.sy.get().tabix.set(temp67);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_test.set(temp66);
    }
    async test_eledescr_rel_name() {
      let temp68 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
      let lo_ele = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
      await abap.statements.cast(temp68, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: abap.builtin.abap_true})));
      lo_ele.set(temp68);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ele.get().get_relative_name()), exp: new abap.types.String().set(`ABAP_BOOL`)});
    }
    async test_substring_after() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.substring_after({val: new abap.types.Character(16).set('this is a string'), sub: new abap.types.Character(1).set('a')}), exp: new abap.types.String().set(` string`)});
    }
    async test_substring_before() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.substring_before({val: new abap.types.Character(16).set('this is a string'), sub: new abap.types.Character(1).set('a')}), exp: new abap.types.String().set(`this is `)});
    }
    async test_string_shift() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.shift_left({val: abap.builtin.shift_right({val: new abap.types.String().set(`   string   `), sub: new abap.types.String().set(` `)})}), exp: new abap.types.String().set(`string`)});
    }
    async test_string_replace() {
      let lv_search = new abap.types.String({qualifiedName: "STRING"});
      lv_search.set(abap.builtin.replace({val: new abap.types.String().set(`one two three`), sub: new abap.types.String().set(`two`), with: new abap.types.Character(3).set('ABC'), occ: abap.IntegerFactory.get(0)}));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.replace({val: new abap.types.String().set(`one two three`), sub: new abap.types.String().set(`two`), with: new abap.types.Character(3).set('ABC'), occ: abap.IntegerFactory.get(0)}), exp: new abap.types.String().set(`one ABC three`)});
    }
    async test_raise_error() {
      let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_UTIL_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_UTIL_ERROR"});
      try {
        if (abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(1))) {
          const unique101 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_();
          unique101.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.testclasses.abap","INTERNAL_LINE": 305};
          throw unique101;
        }
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      } catch (e) {
        if ((abap.Classes['Z2UI5_CX_UTIL_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_UTIL_ERROR'])) {
          lx.set(e);
          await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_bound({act: lx});
        } else {
          throw e;
        }
      }
    }
    async test_xsdbool() {
      let lv_xsdbool = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      temp1.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(1))));
      lv_xsdbool.set(temp1);
      if (abap.compare.eq(lv_xsdbool, abap.builtin.abap_false)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_xsdbool, exp: abap.builtin.abap_false});
      }
      temp2.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(1))));
      if (abap.compare.eq(temp2, abap.builtin.abap_false)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_xsdbool_nested() {
      let lv_xsdbool = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      let temp4 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      temp3.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(1))));
      lv_xsdbool.set((await this.check_input({val: temp3})));
      if (abap.compare.eq(lv_xsdbool, abap.builtin.abap_false)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_xsdbool, exp: abap.builtin.abap_false});
      }
      if (abap.compare.initial((await this.check_input({val: abap.builtin.abap_false}))) === false) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      temp4.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(1))));
      if (abap.compare.eq((await this.check_input({val: temp4})), abap.builtin.abap_false)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async check_input(INPUT) {
      let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      let val = INPUT?.val;
      result.set(val);
      return result;
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_UNIT_TEST_ABAP_API'] = ltcl_unit_test_abap_api;
  class ltcl_unit_test {
    static INTERNAL_TYPE = 'CLAS';
    static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UTIL-LTCL_UNIT_TEST';
    static IMPLEMENTED_INTERFACES = [];
    static ATTRIBUTES = {};
    static METHODS = {"TEST_CREATE": {"visibility": "I", "parameters": {}},
    "TEST_BOOLEAN_ABAP_2_JSON": {"visibility": "I", "parameters": {}},
    "TEST_BOOLEAN_CHECK": {"visibility": "I", "parameters": {}},
    "TEST_C_TRIM": {"visibility": "I", "parameters": {}},
    "TEST_C_TRIM_LOWER": {"visibility": "I", "parameters": {}},
    "TEST_C_TRIM_UPPER": {"visibility": "I", "parameters": {}},
    "TEST_C_TRIM_HORIZONTAL_TAB": {"visibility": "I", "parameters": {}},
    "TEST_TIME_GET_TIMESTAMPL": {"visibility": "I", "parameters": {}},
    "TEST_TIME_SUBSTRACT_SECONDS": {"visibility": "I", "parameters": {}},
    "TEST_FUNC_GET_USER_TECH": {"visibility": "I", "parameters": {}},
    "TEST_RTTI_GET_T_ATTRI_BY_INCL": {"visibility": "I", "parameters": {}},
    "TEST_RTTI_GET_CLASSNAME_BY_REF": {"visibility": "I", "parameters": {}},
    "TEST_RTTI_GET_TYPE_NAME": {"visibility": "I", "parameters": {}},
    "TEST_RTTI_GET_TYPE_KIND": {"visibility": "I", "parameters": {}},
    "TEST_RTTI_CHECK_TYPE_KIND": {"visibility": "I", "parameters": {}},
    "TEST_RTTI_GET_T_ATTRI_BY_OBJ": {"visibility": "I", "parameters": {}},
    "TEST_RTTI_GET_T_COMP_BY_STRUC": {"visibility": "I", "parameters": {}},
    "TEST_TRANS_JSON_ANY_2__W_STRUC": {"visibility": "I", "parameters": {}},
    "TEST_TRANS_XML_ANY_2__W_OBJ": {"visibility": "I", "parameters": {}},
    "TEST_TRANS_XML_ANY_2__W_DATA": {"visibility": "I", "parameters": {}},
    "TEST_TRANS_XML_2_ANY__W_OBJ": {"visibility": "I", "parameters": {}},
    "TEST_TRANS_XML_2_ANY__W_DATA": {"visibility": "I", "parameters": {}},
    "TEST_URL_PARAM_CREATE_URL": {"visibility": "I", "parameters": {}},
    "TEST_URL_PARAM_GET": {"visibility": "I", "parameters": {}},
    "TEST_URL_PARAM_GET_TAB": {"visibility": "I", "parameters": {}},
    "TEST_URL_PARAM_SET": {"visibility": "I", "parameters": {}},
    "TEST_X_CHECK_RAISE": {"visibility": "I", "parameters": {}},
    "TEST_X_CHECK_RAISE_NOT": {"visibility": "I", "parameters": {}},
    "TEST_X_RAISE": {"visibility": "I", "parameters": {}},
    "TEST_CHECK_UNASSIGN_INITAL": {"visibility": "I", "parameters": {}},
    "CONV_COPY_REF_DATA": {"visibility": "I", "parameters": {}},
    "RTTI_CHECK_REF_DATA": {"visibility": "I", "parameters": {}},
    "TEST_CHECK_BOUND_A_NOT_INITAL": {"visibility": "I", "parameters": {}},
    "TEST_SQL_GET_BY_STRING": {"visibility": "I", "parameters": {}},
    "TEST_GET_TOKEN_T_BY_R_T": {"visibility": "I", "parameters": {}}};
    constructor() {
      this.me = new abap.types.ABAPObject();
      this.me.set(this);
    }
    async constructor_(INPUT) {
      if (super.constructor_) { await super.constructor_(INPUT); }
      return this;
    }
    async test_boolean_check() {
      let lv_bool = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      let temp5 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      let temp6 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      temp5.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(1))));
      lv_bool.set(temp5);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].boolean_check_by_data({val: lv_bool})), exp: abap.builtin.abap_true});
      temp6.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(2))));
      lv_bool.set(temp6);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].boolean_check_by_data({val: lv_bool})), exp: abap.builtin.abap_true});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].boolean_check_by_data({val: abap.builtin.abap_true})), exp: abap.builtin.abap_true});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].boolean_check_by_data({val: abap.builtin.abap_false})), exp: abap.builtin.abap_true});
    }
    async test_sql_get_by_string() {
      let lv_test = new abap.types.String({qualifiedName: "STRING"});
      let ls_sql = new abap.types.Structure({"tabname": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-TABNAME"}), "check_autoload": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "layout_id": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-LAYOUT_ID"}), "count": new abap.types.Integer({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-COUNT"}), "t_ref": new abap.types.DataReference(new abap.types.Character(4)), "where": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_SQL-WHERE"}), "t_filter": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_FILTER_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_added": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token"), "t_token_removed": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token")}, "z2ui5_cl_util=>ty_s_filter_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_filter_multi")}, "z2ui5_cl_util=>ty_S_sql", undefined, {}, {});
      lv_test.set(new abap.types.String().set(``));
      ls_sql.set((await abap.Classes['Z2UI5_CL_UTIL'].filter_get_sql_by_sql_string({val: lv_test})));
    }
    async test_create() {
      let lo_test = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UTIL", RTTIName: "\\CLASS=Z2UI5_CL_UTIL"});
      lo_test.set(await (new abap.Classes['Z2UI5_CL_UTIL']()).constructor_());
    }
    async test_rtti_get_classname_by_ref() {
      let lo_test = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UTIL", RTTIName: "\\CLASS=Z2UI5_CL_UTIL"});
      let lv_name = new abap.types.String({qualifiedName: "STRING"});
      let lo_test2 = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_UTIL\\CLASS=LTCL_TEST_APP"});
      let lv_name2 = new abap.types.String({qualifiedName: "STRING"});
      lo_test.set(await (new abap.Classes['Z2UI5_CL_UTIL']()).constructor_());
      lv_name.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_classname_by_ref({in: lo_test})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.String().set(`Z2UI5_CL_UTIL`), act: lv_name});
      lo_test2.set(await (new abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP']()).constructor_());
      lv_name2.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_classname_by_ref({in: lo_test2})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.String().set(`LTCL_TEST_APP`), act: lv_name2});
    }
    async test_check_bound_a_not_inital() {
      let lv_test = new abap.types.String({qualifiedName: "STRING"});
      let lr_test = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
      lv_test.set(new abap.types.String().set(`test`));
      lr_test.assign(lv_test);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_true({act: (await abap.Classes['Z2UI5_CL_UTIL'].check_bound_a_not_inital({val: lr_test}))});
      abap.statements.clear(lv_test);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_false({act: (await abap.Classes['Z2UI5_CL_UTIL'].check_bound_a_not_inital({val: lr_test}))});
      abap.statements.clear(lr_test);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_false({act: (await abap.Classes['Z2UI5_CL_UTIL'].check_bound_a_not_inital({val: lr_test}))});
    }
    async test_check_unassign_inital() {
      let lv_test = new abap.types.String({qualifiedName: "STRING"});
      let lr_test = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
      lv_test.set(new abap.types.String().set(`test`));
      lr_test.assign(lv_test);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_false({act: (await abap.Classes['Z2UI5_CL_UTIL'].check_unassign_inital({val: lr_test}))});
      abap.statements.clear(lv_test);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_true({act: (await abap.Classes['Z2UI5_CL_UTIL'].check_unassign_inital({val: lr_test}))});
    }
    async rtti_check_ref_data() {
      let lv_test = new abap.types.String({qualifiedName: "STRING"});
      let lr_data = new abap.types.DataReference(new abap.types.Character(4));
      lv_test.set(new abap.types.String().set(`test`));
      lr_data.assign(lv_test);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_ref_data({val: lr_data})), exp: abap.builtin.abap_true});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_ref_data({val: lv_test})), exp: abap.builtin.abap_false});
    }
    async conv_copy_ref_data() {
      let lv_test = new abap.types.String({qualifiedName: "STRING"});
      let lr_data = new abap.types.DataReference(new abap.types.Character(4));
      let lr_test2 = new abap.types.DataReference(new abap.types.Character(4));
      let fs_result_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      lv_test.set(new abap.types.String().set(`test`));
      lr_data.assign(lv_test);
      lr_test2.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_copy_ref_data({from: lr_data})));
      abap.statements.assign({target: fs_result_, source: lr_test2.dereference()});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: fs_result_, exp: lv_test});
    }
    async test_boolean_abap_2_json() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: new abap.types.String().set(`{ABCD}`)})), exp: new abap.types.String().set(`{ABCD}`)});
    }
    async test_time_get_timestampl() {
      let lv_time = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
      let lv_time2 = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
      lv_time.set((await abap.Classes['Z2UI5_CL_UTIL'].time_get_timestampl()));
      lv_time2.set((await abap.Classes['Z2UI5_CL_UTIL'].time_substract_seconds({time: lv_time, seconds: abap.operators.multiply(abap.operators.multiply(abap.IntegerFactory.get(60),abap.IntegerFactory.get(60)),abap.IntegerFactory.get(4))})));
      if (abap.compare.initial(lv_time) || abap.compare.initial(lv_time2)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      if (abap.compare.lt(lv_time, lv_time2)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_time_substract_seconds() {
      let lv_time = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
      let lv_time2 = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
      lv_time.set((await abap.Classes['Z2UI5_CL_UTIL'].time_get_timestampl()));
      lv_time2.set((await abap.Classes['Z2UI5_CL_UTIL'].time_get_timestampl()));
      if (abap.compare.initial(lv_time) || abap.compare.initial(lv_time2)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      if (abap.compare.lt(lv_time2, lv_time)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_c_trim() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].c_trim({val: new abap.types.String().set(` JsadfHHs  `)})), exp: new abap.types.String().set(`JsadfHHs`)});
    }
    async test_c_trim_lower() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].c_trim_lower({val: new abap.types.String().set(` JsadfHHs  `)})), exp: new abap.types.String().set(`jsadfhhs`)});
    }
    async test_c_trim_upper() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].c_trim_upper({val: new abap.types.String().set(` JsadfHHs  `)})), exp: new abap.types.String().set(`JSADFHHS`)});
    }
    async test_func_get_user_tech() {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: abap.builtin.sy.get().uname, exp: (await abap.Classes['Z2UI5_CL_UTIL'].context_get_user_tech())});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: (await abap.Classes['Z2UI5_CL_UTIL'].context_get_user_tech())});
    }
    async test_x_raise() {
      try {
        await abap.Classes['Z2UI5_CL_UTIL'].x_raise();
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
    }
    async test_x_check_raise() {
      let temp7 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      let temp8 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      try {
        temp7.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(1))));
        await abap.Classes['Z2UI5_CL_UTIL'].x_check_raise({when: temp7});
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
      try {
        temp8.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(3))));
        await abap.Classes['Z2UI5_CL_UTIL'].x_check_raise({when: temp8});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
        } else {
          throw e;
        }
      }
    }
    async test_trans_json_any_2__w_struc() {
      let temp69 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let ls_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      abap.statements.clear(temp69);
      temp69.get().title.set(new abap.types.String().set(`test`));
      ls_row.set(temp69);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].json_stringify({any: ls_row})), exp: new abap.types.String().set(`{"selected":false,"title":"test","value":""}`)});
    }
    async test_url_param_create_url() {
      let lt_param = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
      let lv_url = new abap.types.String({qualifiedName: "STRING"});
      lt_param.set((await abap.Classes['Z2UI5_CL_UTIL'].url_param_get_tab({i_val: new abap.types.String().set(`https://url.com/rvice_for_ui?sap-client=100&app_start=z2ui5_cl_app_hello_world`)})));
      lv_url.set((await abap.Classes['Z2UI5_CL_UTIL'].url_param_create_url({t_params: lt_param})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_url, exp: new abap.types.String().set(`sap-client=100&app_start=z2ui5_cl_app_hello_world`)});
    }
    async test_url_param_get() {
      let lv_param = new abap.types.String({qualifiedName: "STRING"});
      lv_param.set((await abap.Classes['Z2UI5_CL_UTIL'].url_param_get({val: new abap.types.String().set(`app_start`), url: new abap.types.String().set(`https://url.com/rvice_for_ui?sap-client=100&app_start=z2ui5_cl_app_hello_world`)})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_param, exp: new abap.types.String().set(`z2ui5_cl_app_hello_world`)});
    }
    async test_url_param_get_tab() {
      let lt_param = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
      let temp70 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
      let temp71 = new abap.types.Integer({qualifiedName: "I"});
      let temp72 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
      let temp73 = new abap.types.Integer({qualifiedName: "I"});
      lt_param.set((await abap.Classes['Z2UI5_CL_UTIL'].url_param_get_tab({i_val: new abap.types.String().set(`https://url.com/rvice_for_ui?sap-client=100&app_start=z2ui5_cl_app_hello_world`)})));
      temp71.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_param,{into: temp70,
        withKey: (i) => {return abap.compare.eq(i.n, new abap.types.String().set(`sap-client`));},
        withKeyValue: [{key: (i) => {return i.n}, value: new abap.types.String().set(`sap-client`)}],
        usesTableLine: false,
        withKeySimple: {"n": new abap.types.String().set(`sap-client`)}});
      abap.builtin.sy.get().tabix.set(temp71);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: temp70.get().v, exp: new abap.types.String().set(`100`)});
      temp73.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_param,{into: temp72,
        withKey: (i) => {return abap.compare.eq(i.n, new abap.types.String().set(`app_start`));},
        withKeyValue: [{key: (i) => {return i.n}, value: new abap.types.String().set(`app_start`)}],
        usesTableLine: false,
        withKeySimple: {"n": new abap.types.String().set(`app_start`)}});
      abap.builtin.sy.get().tabix.set(temp73);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: temp72.get().v, exp: new abap.types.String().set(`z2ui5_cl_app_hello_world`)});
    }
    async test_url_param_set() {
      let lv_param = new abap.types.String({qualifiedName: "STRING"});
      lv_param.set((await abap.Classes['Z2UI5_CL_UTIL'].url_param_set({name: new abap.types.String().set(`app_start`), value: new abap.types.String().set(`z2ui5_cl_app_hello_world2`), url: new abap.types.String().set(`https://url.com/rvice_for_ui?sap-client=100&app_start=z2ui5_cl_app_hello_world`)})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_param, exp: new abap.types.String().set(`sap-client=100&app_start=z2ui5_cl_app_hello_world2`)});
    }
    async test_x_check_raise_not() {
      let temp9 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      try {
        temp9.set(abap.builtin.boolc(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(2))));
        await abap.Classes['Z2UI5_CL_UTIL'].x_check_raise({when: temp9});
      } catch (e) {
        if ((abap.Classes['Z2UI5_CX_UTIL_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_UTIL_ERROR'])) {
          await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
        } else {
          throw e;
        }
      }
    }
    async test_rtti_get_type_name() {
      let temp74 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      let lv_xsdbool = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
      let lv_name = new abap.types.String({qualifiedName: "STRING"});
      abap.statements.clear(temp74);
      lv_xsdbool.set(temp74);
      lv_name.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_type_name({val: lv_xsdbool})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_name, exp: new abap.types.String().set(`XSDBOOLEAN`)});
    }
    async test_rtti_get_type_kind() {
      let temp75 = new abap.types.String({qualifiedName: "STRING"});
      let lv_string = new abap.types.String({qualifiedName: "STRING"});
      let lv_type_kind = new abap.types.String({qualifiedName: "STRING"});
      let lr_string = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
      abap.statements.clear(temp75);
      lv_string.set(temp75);
      lv_type_kind.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_type_kind({val: lv_string})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_type_kind, exp: abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string});
      abap.statements.createData(lr_string);
      lv_type_kind.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_type_kind({val: lr_string})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_type_kind, exp: abap.Classes['CL_ABAP_TYPEDESCR'].typekind_dref});
    }
    async test_rtti_check_type_kind() {
      let temp76 = new abap.types.String({qualifiedName: "STRING"});
      let lv_string = new abap.types.String({qualifiedName: "STRING"});
      let lr_string = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
      abap.statements.clear(temp76);
      lv_string.set(temp76);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_type_kind_dref({val: lv_string})), exp: abap.builtin.abap_false});
      abap.statements.createData(lr_string);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_type_kind_dref({val: lr_string})), exp: abap.builtin.abap_true});
    }
    async test_rtti_get_t_attri_by_obj() {
      let lo_obj = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_UTIL\\CLASS=LTCL_TEST_APP"});
      let lt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_attrdescr_tab");
      let temp77 = new abap.types.Integer({qualifiedName: "I"});
      let temp78 = new abap.types.Integer({qualifiedName: "I"});
      let temp79 = new abap.types.Integer({qualifiedName: "I"});
      let temp80 = new abap.types.Integer({qualifiedName: "I"});
      lo_obj.set(await (new abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP']()).constructor_());
      lt_attri.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_oref({val: lo_obj})));
      if (abap.compare.ne(abap.builtin.lines({val: lt_attri}), abap.IntegerFactory.get(7))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_attri,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`MS_TAB`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`MS_TAB`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`MS_TAB`)}});
      temp77.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp77, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_attri,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`SS_TAB`)) && abap.compare.eq(i.type_kind, new abap.types.String().set(`v`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`SS_TAB`)},{key: (i) => {return i.type_kind}, value: new abap.types.String().set(`v`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`SS_TAB`),"type_kind": new abap.types.String().set(`v`)}});
      temp78.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp78, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_attri,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`SV_VAR`)) && abap.compare.eq(i.type_kind, new abap.types.String().set(`g`)) && abap.compare.eq(i.is_class, abap.builtin.abap_true);},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`SV_VAR`)},{key: (i) => {return i.type_kind}, value: new abap.types.String().set(`g`)},{key: (i) => {return i.is_class}, value: abap.builtin.abap_true}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`SV_VAR`),"type_kind": new abap.types.String().set(`g`),"is_class": abap.builtin.abap_true}});
      temp79.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp79, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_attri,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`SV_STATUS`)) && abap.compare.eq(i.type_kind, new abap.types.String().set(`g`)) && abap.compare.eq(i.is_class, abap.builtin.abap_true) && abap.compare.eq(i.is_constant, new abap.types.String().set(`X`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`SV_STATUS`)},{key: (i) => {return i.type_kind}, value: new abap.types.String().set(`g`)},{key: (i) => {return i.is_class}, value: abap.builtin.abap_true},{key: (i) => {return i.is_constant}, value: new abap.types.String().set(`X`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`SV_STATUS`),"type_kind": new abap.types.String().set(`g`),"is_class": abap.builtin.abap_true,"is_constant": new abap.types.String().set(`X`)}});
      temp80.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp80, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_rtti_get_t_comp_by_struc() {
      let temp81 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let ls_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let lt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
      let temp82 = new abap.types.Integer({qualifiedName: "I"});
      let temp83 = new abap.types.Integer({qualifiedName: "I"});
      let temp84 = new abap.types.Integer({qualifiedName: "I"});
      let temp85 = new abap.types.Integer({qualifiedName: "I"});
      let ls_title = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
      let temp13 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
      let temp14 = new abap.types.Integer({qualifiedName: "I"});
      abap.statements.clear(temp81);
      ls_row.set(temp81);
      lt_comp.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_any({val: ls_row})));
      if (abap.compare.ne(abap.builtin.lines({val: lt_comp}), abap.IntegerFactory.get(7))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_comp,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`TITLE`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`TITLE`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`TITLE`)}});
      temp82.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp82, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_comp,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`VALUE`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`VALUE`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`VALUE`)}});
      temp83.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp83, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_comp,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`SELECTED`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`SELECTED`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`SELECTED`)}});
      temp84.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp84, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      abap.statements.readTable(lt_comp,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.String().set(`CHECKBOX`));},
        withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.String().set(`CHECKBOX`)}],
        usesTableLine: false,
        withKeySimple: {"name": new abap.types.String().set(`CHECKBOX`)}});
      temp85.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp85, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
      temp14.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_comp,{index: abap.IntegerFactory.get(1),
        into: temp13});
      abap.builtin.sy.get().tabix.set(temp14);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      ls_title.set(temp13);
      if (abap.compare.ne(ls_title.get().type.get().type_kind, new abap.types.String().set(`g`))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_trans_xml_any_2__w_obj() {
      let lo_obj = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_UTIL\\CLASS=LTCL_TEST_APP"});
      let lv_xml = new abap.types.String({qualifiedName: "STRING"});
      lo_obj.set(await (new abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP']()).constructor_());
      lv_xml.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_stringify({any: lo_obj})));
      if (abap.compare.initial(lv_xml)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_trans_xml_2_any__w_obj() {
      let lo_obj = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_APP", RTTIName: "\\CLASS-POOL=Z2UI5_CL_UTIL\\CLASS=LTCL_TEST_APP"});
      let lv_xml = new abap.types.String({qualifiedName: "STRING"});
      lo_obj.set(await (new abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST_APP']()).constructor_());
      lv_xml.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_stringify({any: lo_obj})));
      abap.statements.clear(lo_obj);
      await abap.Classes['Z2UI5_CL_UTIL'].xml_parse({xml: lv_xml, any: lo_obj});
      if (abap.compare.initial(lo_obj)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_trans_xml_any_2__w_data() {
      let temp86 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let ls_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let lv_xml = new abap.types.String({qualifiedName: "STRING"});
      abap.statements.clear(temp86);
      ls_row.set(temp86);
      ls_row.get().value.set(new abap.types.String().set(`test`));
      lv_xml.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_stringify({any: ls_row})));
      if (abap.compare.initial(lv_xml)) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_trans_xml_2_any__w_data() {
      let temp87 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let ls_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let temp88 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let ls_row2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
      let lv_xml = new abap.types.String({qualifiedName: "STRING"});
      abap.statements.clear(temp87);
      ls_row.set(temp87);
      abap.statements.clear(temp88);
      ls_row2.set(temp88);
      ls_row.get().value.set(new abap.types.String().set(`test`));
      lv_xml.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_stringify({any: ls_row})));
      await abap.Classes['Z2UI5_CL_UTIL'].xml_parse({xml: lv_xml, any: ls_row2});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_row, exp: ls_row2});
    }
    async test_c_trim_horizontal_tab() {
      if (abap.compare.ne((await abap.Classes['Z2UI5_CL_UTIL'].c_trim({val: abap.operators.concat(new abap.types.String().set(`${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab)}`),abap.operators.concat(new abap.types.String().set(`JsadfHHs`),new abap.types.String().set(`${abap.templateFormatting(abap.Classes['CL_ABAP_CHAR_UTILITIES'].horizontal_tab)}`)))})), new abap.types.String().set(`JsadfHHs`))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
    async test_get_token_t_by_r_t() {
      let temp89 = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");
      let temp90 = new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {});
      let lt_range = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-sign"}), "option": new abap.types.Character(2, {"qualifiedName":"z2ui5_cl_util=>ty_s_range-option"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_RANGE-HIGH"})}, "z2ui5_cl_util=>ty_s_range", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_range");
      let lt_result = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");
      let temp91 = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");
      let temp92 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {});
      let lt_exp = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_token");
      abap.statements.clear(temp89);
      temp90.get().sign.set(new abap.types.Character(1).set('I'));
      temp90.get().option.set(new abap.types.Character(2).set('EQ'));
      temp90.get().low.set(new abap.types.String().set(`table`));
      temp90.get().high.set(new abap.types.String().set(``));
      abap.statements.insertInternal({data: temp90, table: temp89});
      lt_range.set(temp89);
      lt_result.set((await abap.Classes['Z2UI5_CL_UTIL'].filter_get_token_t_by_range_t({val: lt_range})));
      abap.statements.clear(temp91);
      temp92.get().key.set(new abap.types.String().set(`=table`));
      temp92.get().text.set(new abap.types.String().set(`=table`));
      temp92.get().visible.set(new abap.types.Character(1).set('X'));
      temp92.get().selkz.set(new abap.types.Character(1).set(''));
      temp92.get().editable.set(new abap.types.Character(1).set('X'));
      abap.statements.insertInternal({data: temp92, table: temp91});
      lt_exp.set(temp91);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lt_result, exp: lt_exp});
    }
    async test_rtti_get_t_attri_by_incl() {
      let ms_struc2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_STRUC-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_STRUC-VALUE"}), "value2": new abap.types.String({qualifiedName: "TY_STRUC-VALUE2"}), "incl_title": new abap.types.String({qualifiedName: "TY_STRUC_INCL-INCL_TITLE"}), "incl_value": new abap.types.String({qualifiedName: "TY_STRUC_INCL-INCL_VALUE"}), "incl_value2": new abap.types.String({qualifiedName: "TY_STRUC_INCL-INCL_VALUE2"})}, undefined, undefined, {}, {});
      let lo_datadescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
      let temp93 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
      let lt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
      if (abap.compare.eq(abap.builtin.sy.get().sysid, new abap.types.Character(3).set('ABC'))) {
        return;
      }
      lo_datadescr.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: ms_struc2})));
      await abap.statements.cast(temp93, lo_datadescr);
      lt_attri.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_include({type: temp93})));
      if (abap.compare.ne(abap.builtin.lines({val: lt_attri}), abap.IntegerFactory.get(6))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
      }
    }
  }
  abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_UNIT_TEST'] = ltcl_unit_test;
export {ltcl_test_app, ltcl_unit_test_abap_api, ltcl_unit_test};
//# sourceMappingURL=z2ui5_cl_util.clas.testclasses.mjs.map