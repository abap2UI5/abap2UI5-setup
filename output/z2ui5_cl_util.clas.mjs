const {z2ui5_cl_util_api} = await import("./z2ui5_cl_util_api.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_util.clas.abap
class z2ui5_cl_util extends z2ui5_cl_util_api {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UTIL';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"APP_GET_URL_SOURCE_CODE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "APP_GET_URL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}, "CLASSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DB_DELETE_BY_HANDLE": {"visibility": "U", "parameters": {"UNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE2": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE3": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECK_COMMIT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "DB_SAVE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "UNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE2": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE3": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "CHECK_COMMIT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "DB_LOAD_BY_ID": {"visibility": "U", "parameters": {"ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "RESULT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "DB_LOAD_BY_HANDLE": {"visibility": "U", "parameters": {"UNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE2": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HANDLE3": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "RESULT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async app_get_url(INPUT) {
    return z2ui5_cl_util.app_get_url(INPUT);
  }
  static async app_get_url(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let classname = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.classname) {classname.set(INPUT.classname);}
    let lv_url = new abap.types.String({qualifiedName: "STRING"});
    let lt_param = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp1 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    if (abap.compare.initial(classname)) {
      classname.set((await this.rtti_get_classname_by_ref({in_: (await client.get().z2ui5_if_client$get_app())})));
    }
    lv_url.set(abap.operators.concat((abap.builtin.to_lower({val: abap.operators.concat(((await client.get().z2ui5_if_client$get())).get().s_config.get().origin,((await client.get().z2ui5_if_client$get())).get().s_config.get().pathname)})),new abap.types.String().set(`?`)));
    lt_param.set((await this.url_param_get_tab({i_val: ((await client.get().z2ui5_if_client$get())).get().s_config.get().search})));
    await abap.statements.deleteInternal(lt_param,{where: (I) => {return abap.compare.eq(I.n, new abap.types.String().set(`app_start`));}});
    abap.statements.clear(temp1);
    temp1.get().n.set(new abap.types.String().set(`app_start`));
    temp1.get().v.set(abap.builtin.to_lower({val: classname}));
    abap.statements.insertInternal({data: temp1, table: lt_param});
    result.set(abap.operators.concat(lv_url,(await this.url_param_create_url({t_params: lt_param}))));
    return result;
  }
  async app_get_url_source_code(INPUT) {
    return z2ui5_cl_util.app_get_url_source_code(INPUT);
  }
  static async app_get_url_source_code(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let ls_config = new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-SEARCH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_config", undefined, {}, {});
    ls_config.set(((await client.get().z2ui5_if_client$get())).get().s_config);
    result.set(abap.operators.concat(ls_config.get().origin,abap.operators.concat(new abap.types.String().set(`/sap/bc/adt/oo/classes/`),abap.operators.concat((await this.rtti_get_classname_by_ref({in_: (await client.get().z2ui5_if_client$get_app())})),new abap.types.String().set(`/source/main`)))));
    return result;
  }
  async db_delete_by_handle(INPUT) {
    return z2ui5_cl_util.db_delete_by_handle(INPUT);
  }
  static async db_delete_by_handle(INPUT) {
    let uname = INPUT?.uname || new abap.types.Character();
    let handle = INPUT?.handle || new abap.types.Character();
    let handle2 = INPUT?.handle2 || new abap.types.Character();
    let handle3 = INPUT?.handle3 || new abap.types.Character();
    let check_commit = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.check_commit) {check_commit.set(INPUT.check_commit);}
    if (INPUT === undefined || INPUT.check_commit === undefined) {check_commit = abap.builtin.abap_true;}
    await abap.statements.deleteDatabase("z2ui5_t_util_01", {"where": "\"uname\" = '" + uname.get() + "' AND \"handle\" = '" + handle.get() + "' AND \"handle2\" = '" + handle2.get() + "' AND \"handle3\" = '" + handle3.get() + "'"});
    if (abap.compare.eq(check_commit, abap.builtin.abap_true)) {
      abap.statements.commit();
    }
  }
  async db_load_by_handle(INPUT) {
    return z2ui5_cl_util.db_load_by_handle(INPUT);
  }
  static async db_load_by_handle(INPUT) {
    let uname = INPUT?.uname || new abap.types.Character();
    let handle = INPUT?.handle || new abap.types.Character();
    let handle2 = INPUT?.handle2 || new abap.types.Character();
    let handle3 = INPUT?.handle3 || new abap.types.Character();
    let result = INPUT?.result || new abap.types.Character(4);
    let lt_db = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let ls_db = new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {});
    let temp1 = new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    await abap.statements.select(lt_db, {select: "SELECT \"data\" FROM " + abap.buildDbTableName("z2ui5_t_util_01") + " WHERE \"uname\" = '" + uname.get() + "' AND \"handle\" = '" + handle.get() + "' AND \"handle2\" = '" + handle2.get() + "' AND \"handle3\" = '" + handle3.get() + "'", primaryKey: ["mandt","id"]});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique54 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`No entry for handle exists`)});
      unique54.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_util.clas.abap","INTERNAL_LINE": 131};
      throw unique54;
    }
    temp2.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(lt_db,{index: abap.IntegerFactory.get(1),
      into: temp1});
    abap.builtin.sy.get().tabix.set(temp2);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    ls_db.set(temp1);
    await this.xml_parse({xml: ls_db.get().data, any: result});
  }
  async db_load_by_id(INPUT) {
    return z2ui5_cl_util.db_load_by_id(INPUT);
  }
  static async db_load_by_id(INPUT) {
    let id = INPUT?.id || new abap.types.Character();
    let result = INPUT?.result || new abap.types.Character(4);
    let lt_db = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let ls_db = new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {});
    let temp3 = new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    await abap.statements.select(lt_db, {select: "SELECT \"data\" FROM " + abap.buildDbTableName("z2ui5_t_util_01") + " WHERE \"id\" = '" + id.get() + "'", primaryKey: ["mandt","id"]});
    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
    temp4.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(lt_db,{index: abap.IntegerFactory.get(1),
      into: temp3});
    abap.builtin.sy.get().tabix.set(temp4);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    ls_db.set(temp3);
    await this.xml_parse({xml: ls_db.get().data, any: result});
  }
  async db_save(INPUT) {
    return z2ui5_cl_util.db_save(INPUT);
  }
  static async db_save(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let uname = INPUT?.uname || new abap.types.Character();
    let handle = INPUT?.handle || new abap.types.Character();
    let handle2 = INPUT?.handle2 || new abap.types.Character();
    let handle3 = INPUT?.handle3 || new abap.types.Character();
    let data = INPUT?.data;
    let check_commit = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.check_commit) {check_commit.set(INPUT.check_commit);}
    if (INPUT === undefined || INPUT.check_commit === undefined) {check_commit = abap.builtin.abap_true;}
    let lt_db = abap.types.TableFactory.construct(new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp2 = new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {});
    let ls_db = new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {});
    let temp3 = new abap.types.Structure({"mandt": new abap.types.Character(3, {}), "id": new abap.types.Character(32, {}), "uname": new abap.types.Character(32, {}), "handle": new abap.types.Character(32, {}), "handle2": new abap.types.Character(32, {}), "handle3": new abap.types.Character(32, {}), "handle4": new abap.types.Character(32, {}), "handle5": new abap.types.Character(32, {}), "data": new abap.types.String({qualifiedName: "STRING"}), "data2": new abap.types.String({qualifiedName: "STRING"}), "data3": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_UTIL_01", "Z2UI5_T_UTIL_01", {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    await abap.statements.select(lt_db, {select: "SELECT \"id\" FROM " + abap.buildDbTableName("z2ui5_t_util_01") + " WHERE \"uname\" = '" + uname.get() + "' AND \"handle\" = '" + handle.get() + "' AND \"handle2\" = '" + handle2.get() + "' AND \"handle3\" = '" + handle3.get() + "'", primaryKey: ["mandt","id"]});
    abap.statements.clear(temp2);
    temp2.get().uname.set(uname);
    temp2.get().handle.set(handle);
    temp2.get().handle2.set(handle2);
    temp2.get().handle3.set(handle3);
    temp2.get().data.set((await this.xml_stringify({any: data})));
    ls_db.set(temp2);
    try {
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_db,{index: abap.IntegerFactory.get(1),
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      ls_db.get().id.set(temp3.get().id);
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        ls_db.get().id.set((await this.uuid_get_c32()));
      } else {
        throw e;
      }
    }
    await abap.statements.modifyDatabase("z2ui5_t_util_01", {"values": ls_db});
    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
    if (abap.compare.eq(check_commit, abap.builtin.abap_true)) {
      abap.statements.commit();
    }
    result.set(ls_db.get().id);
    return result;
  }
}
abap.Classes['Z2UI5_CL_UTIL'] = z2ui5_cl_util;
export {z2ui5_cl_util};
//# sourceMappingURL=z2ui5_cl_util.clas.mjs.map