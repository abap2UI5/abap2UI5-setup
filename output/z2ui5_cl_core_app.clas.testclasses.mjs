const {z2ui5_cl_core_app} = await import("./z2ui5_cl_core_app.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app.clas.testclasses.abap

class ltcl_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_APP-LTCL_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"FIRST_TEST": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async first_test() {
    let lo_action = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    lo_action.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_APP-LTCL_TEST'] = ltcl_test;
class ltcl_test_db {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_APP-LTCL_TEST_DB';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {}},
  "TEST_DB_SAVE": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$author = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$author;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$check_sticky === undefined) this.z2ui5_if_app$check_sticky = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  }
  async constructor_(INPUT) {
    return this;
  }
  async test_db_save() {
    let lo_app_user = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_DB", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_APP\\CLASS=LTCL_TEST_DB"});
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let lo_app_db = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_DB", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_APP\\CLASS=LTCL_TEST_DB"});
    let lo_app_user_db = new abap.types.ABAPObject({qualifiedName: "LTCL_TEST_DB", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_APP\\CLASS=LTCL_TEST_DB"});
    if (abap.compare.eq(abap.builtin.sy.get().sysid, new abap.types.Character(3).set('ABC'))) {
      return;
    }
    lo_app_user.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_APP-LTCL_TEST_DB']()).constructor_());
    lo_app_user.get().mv_value.set(new abap.types.String().set(`my value`));
    lo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    lo_app.get().ms_draft.get().id.set(new abap.types.String().set(`TEST_ID`));
    lo_app.get().mo_app.set(lo_app_user);
    await lo_app.get().db_save();
    lo_app_db.set((await abap.Classes['Z2UI5_CL_CORE_APP'].db_load({id: new abap.types.String().set(`TEST_ID`)})));
    await abap.statements.cast(temp2, lo_app_db.get().mo_app);
    lo_app_user_db.set(temp2);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lo_app_user_db.get().mv_value, exp: lo_app_user.get().mv_value});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_APP-LTCL_TEST_DB'] = ltcl_test_db;
ltcl_test_db.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
ltcl_test_db.z2ui5_if_app$version.set('1.135.0');
ltcl_test_db.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
ltcl_test_db.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
ltcl_test_db.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
ltcl_test_db.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
ltcl_test_db.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
ltcl_test_db.z2ui5_if_app$license.set('MIT');
export {ltcl_test, ltcl_test_db};
//# sourceMappingURL=z2ui5_cl_core_app.clas.testclasses.mjs.map