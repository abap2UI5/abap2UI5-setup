const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_draft_srv.clas.abap
class z2ui5_cl_core_draft_srv {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_DRAFT_SRV';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"READ": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECK_LOAD_APP": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "COUNT_ENTRIES": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "CREATE": {"visibility": "U", "parameters": {"DRAFT": {"type": () => {return new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {});}, "is_optional": " "}, "MODEL_XML": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "READ_DRAFT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "READ_INFO": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CLEANUP": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async cleanup() {
    let lv_four_hours_ago = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
    lv_four_hours_ago.set((await abap.Classes['Z2UI5_CL_UTIL'].time_substract_seconds({time: (await abap.Classes['Z2UI5_CL_UTIL'].time_get_timestampl()), seconds: abap.operators.multiply(abap.operators.multiply(abap.IntegerFactory.get(60),abap.IntegerFactory.get(60)),abap.IntegerFactory.get(4))})));
    await abap.statements.deleteDatabase("z2ui5_t_01", {"where": "\"timestampl\" < '" + lv_four_hours_ago.get() + "'"});
    abap.statements.commit();
  }
  async create(INPUT) {
    let draft = INPUT?.draft;
    if (draft?.getQualifiedName === undefined || draft.getQualifiedName() !== "Z2UI5_IF_TYPES=>TY_S_DRAFT") { draft = undefined; }
    if (draft === undefined) { draft = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {}).set(INPUT.draft); }
    let model_xml = INPUT?.model_xml;
    let temp1 = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    let ls_db = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    abap.statements.assert(abap.compare.initial(draft.get().id) === false);
    abap.statements.clear(temp1);
    temp1.get().id.set(draft.get().id);
    temp1.get().id_prev.set(draft.get().id_prev);
    temp1.get().id_prev_app.set(draft.get().id_prev_app);
    temp1.get().id_prev_app_stack.set(draft.get().id_prev_app_stack);
    temp1.get().uname.set((await abap.Classes['Z2UI5_CL_UTIL'].context_get_user_tech()));
    temp1.get().timestampl.set((await abap.Classes['Z2UI5_CL_UTIL'].time_get_timestampl()));
    temp1.get().data.set(model_xml);
    ls_db.set(temp1);
    await abap.statements.modifyDatabase("z2ui5_t_01", {"values": ls_db});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique103 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`CREATE_OF_DRAFT_ENTRY_ON_DATABASE_FAILED`)});
      unique103.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_draft_srv.clas.abap","INTERNAL_LINE": 81};
      throw unique103;
    }
    abap.statements.commit();
  }
  async read(INPUT) {
    let result = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    let id = INPUT?.id;
    let check_load_app = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.check_load_app) {check_load_app.set(INPUT.check_load_app);}
    if (INPUT === undefined || INPUT.check_load_app === undefined) {check_load_app = abap.builtin.abap_true;}
    if (abap.compare.eq(check_load_app, abap.builtin.abap_true)) {
      await abap.statements.select(result, {select: "SELECT * FROM " + abap.buildDbTableName("z2ui5_t_01") + " WHERE \"id\" = '" + id.get() + "' UP TO 1 ROWS", primaryKey: ["mandt","id"]});
    } else {
      await abap.statements.select(result, {select: "SELECT \"id\", \"id_prev\", \"id_prev_app\", \"id_prev_app_stack\" FROM " + abap.buildDbTableName("z2ui5_t_01") + " WHERE \"id\" = '" + id.get() + "' UP TO 1 ROWS", primaryKey: ["mandt","id"]});
    }
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique104 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`NO_DRAFT_ENTRY_OF_PREVIOUS_REQUEST_FOUND`)});
      unique104.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_draft_srv.clas.abap","INTERNAL_LINE": 109};
      throw unique104;
    }
    return result;
  }
  async read_draft(INPUT) {
    let result = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    let id = INPUT?.id;
    result.set((await this.read({id: id})));
    return result;
  }
  async read_info(INPUT) {
    let result = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {});
    let id = INPUT?.id;
    let ls_db = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_01", "Z2UI5_T_01", {}, {});
    ls_db.set((await this.read({id: id, check_load_app: abap.builtin.abap_false})));
    abap.statements.moveCorresponding(ls_db, result);
    return result;
  }
  async count_entries() {
    let result = new abap.types.Integer({qualifiedName: "I"});
    await abap.statements.select(result, {select: "SELECT COUNT( * )  FROM " + abap.buildDbTableName("z2ui5_t_01") + "", primaryKey: ["mandt","id"]});
    return result;
  }
}
abap.Classes['Z2UI5_CL_CORE_DRAFT_SRV'] = z2ui5_cl_core_draft_srv;
export {z2ui5_cl_core_draft_srv};
//# sourceMappingURL=z2ui5_cl_core_draft_srv.clas.mjs.map