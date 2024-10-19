const {z2ui5_cl_util} = await import("./z2ui5_cl_util.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_util_srv.clas.abap
class z2ui5_cl_core_util_srv extends z2ui5_cl_util {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_UTIL_SRV';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"APP_GET_URL_SOURCE_CODE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "APP_GET_URL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}, "CLASSNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
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
    return z2ui5_cl_core_util_srv.app_get_url(INPUT);
  }
  static async app_get_url(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let classname = INPUT?.classname || new abap.types.Character();
    let lv_url = new abap.types.String({qualifiedName: "STRING"});
    let lt_param = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util=>ty_t_name_value");
    let temp1 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL=>TY_S_NAME_VALUE-V"})}, "z2ui5_cl_util=>ty_s_name_value", undefined, {}, {});
    if (abap.compare.initial(classname)) {
      classname.set((await this.rtti_get_classname_by_ref({in: (await client.get().z2ui5_if_client$get_app())})));
    }
    lv_url.set(abap.operators.concat(((await client.get().z2ui5_if_client$get())).get().s_config.get().origin,abap.operators.concat(((await client.get().z2ui5_if_client$get())).get().s_config.get().pathname,new abap.types.String().set(`?`))));
    lt_param.set((await this.url_param_get_tab({i_val: ((await client.get().z2ui5_if_client$get())).get().s_config.get().search})));
    await abap.statements.deleteInternal(lt_param,{where: async (I) => {return abap.compare.eq(I.n, new abap.types.String().set(`app_start`));}});
    abap.statements.clear(temp1);
    temp1.get().n.set(new abap.types.String().set(`app_start`));
    temp1.get().v.set(abap.builtin.to_lower({val: classname}));
    abap.statements.insertInternal({data: temp1, table: lt_param});
    result.set(abap.operators.concat(lv_url,abap.operators.concat((await this.url_param_create_url({t_params: lt_param})),((await client.get().z2ui5_if_client$get())).get().s_config.get().hash)));
    return result;
  }
  async app_get_url_source_code(INPUT) {
    return z2ui5_cl_core_util_srv.app_get_url_source_code(INPUT);
  }
  static async app_get_url_source_code(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let ls_config = new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-HASH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_config", undefined, {}, {});
    ls_config.set(((await client.get().z2ui5_if_client$get())).get().s_config);
    result.set(abap.operators.concat(ls_config.get().origin,abap.operators.concat(new abap.types.String().set(`/sap/bc/adt/oo/classes/`),abap.operators.concat((await this.rtti_get_classname_by_ref({in: (await client.get().z2ui5_if_client$get_app())})),new abap.types.String().set(`/source/main`)))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_CORE_UTIL_SRV'] = z2ui5_cl_core_util_srv;
export {z2ui5_cl_core_util_srv};
//# sourceMappingURL=z2ui5_cl_core_util_srv.clas.mjs.map