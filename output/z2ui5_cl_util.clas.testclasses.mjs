const {z2ui5_cl_util_api} = await import("./z2ui5_cl_util_api.clas.mjs");
const {z2ui5_cl_util} = await import("./z2ui5_cl_util.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_util.clas.testclasses.abap
class ltcl_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UTIL-LTCL_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TEST_DB_HANDLE": {"visibility": "I", "parameters": {}},
  "TEST_DB_HANDLE_READ_ID": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async test_db_handle() {
    let temp5 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
    let ls_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
    let temp6 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
    let ls_row_result = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
    let lv_id = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(abap.builtin.sy.get().sysid, new abap.types.Character(3).set('ABC'))) {
      return;
    }
    abap.statements.clear(temp5);
    temp5.get().title.set(new abap.types.String().set(`test`));
    temp5.get().value.set(new abap.types.String().set(`val`));
    temp5.get().selected.set(abap.builtin.abap_true);
    ls_row.set(temp5);
    abap.statements.clear(temp6);
    ls_row_result.set(temp6);
    lv_id.set((await abap.Classes['Z2UI5_CL_UTIL'].db_save({uname: new abap.types.String().set(`name`), handle: new abap.types.String().set(`handle1`), handle2: new abap.types.String().set(`handle2`), handle3: new abap.types.String().set(`handle3`), data: ls_row})));
    await abap.Classes['Z2UI5_CL_UTIL'].db_load_by_id({id: lv_id, result: ls_row_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_row_result, exp: ls_row});
    abap.statements.clear(ls_row_result);
    await abap.Classes['Z2UI5_CL_UTIL'].db_load_by_handle({uname: new abap.types.String().set(`name`), handle: new abap.types.String().set(`handle1`), handle2: new abap.types.String().set(`handle2`), handle3: new abap.types.String().set(`handle3`), result: ls_row_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_row_result, exp: ls_row});
  }
  async test_db_handle_read_id() {
    let temp7 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
    let ls_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "TY_ROW-VALUE"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "ty_row", undefined, {}, {});
    let lv_id = new abap.types.String({qualifiedName: "STRING"});
    let lv_id2 = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(abap.builtin.sy.get().sysid, new abap.types.Character(3).set('ABC'))) {
      return;
    }
    abap.statements.clear(temp7);
    temp7.get().title.set(new abap.types.String().set(`test`));
    temp7.get().value.set(new abap.types.String().set(`val`));
    temp7.get().selected.set(abap.builtin.abap_true);
    ls_row.set(temp7);
    lv_id.set((await abap.Classes['Z2UI5_CL_UTIL'].db_save({uname: new abap.types.String().set(`name`), handle: new abap.types.String().set(`handle1`), handle2: new abap.types.String().set(`handle2`), handle3: new abap.types.String().set(`handle3`), data: ls_row})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_not_initial({act: lv_id});
    lv_id2.set((await abap.Classes['Z2UI5_CL_UTIL'].db_save({uname: new abap.types.String().set(`name`), handle: new abap.types.String().set(`handle1`), handle2: new abap.types.String().set(`handle2`), handle3: new abap.types.String().set(`handle3`), data: ls_row})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: lv_id, exp: lv_id2});
  }
}
abap.Classes['CLAS-Z2UI5_CL_UTIL-LTCL_TEST'] = ltcl_test;
export {ltcl_test};
//# sourceMappingURL=z2ui5_cl_util.clas.testclasses.mjs.map