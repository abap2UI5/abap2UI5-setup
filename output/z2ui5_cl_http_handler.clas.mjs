const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_http_handler.clas.abap
class z2ui5_cl_http_handler {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_HTTP_HANDLER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"HTTP_POST": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "HTTP_GET": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Structure({"t_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_REQUEST_GET-CONTENT_SECURITY_POLICY"}), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_REQUEST_GET-CUSTOM_JS"}), "json_model_limit": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_REQUEST_GET-JSON_MODEL_LIMIT"})}, "z2ui5_if_types=>ty_s_http_request_get", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async http_get(INPUT) {
    return z2ui5_cl_http_handler.http_get(INPUT);
  }
  static async http_get(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = new abap.types.Structure({"t_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_REQUEST_GET-CONTENT_SECURITY_POLICY"}), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_REQUEST_GET-CUSTOM_JS"}), "json_model_limit": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_REQUEST_GET-JSON_MODEL_LIMIT"})}, "z2ui5_if_types=>ty_s_http_request_get", undefined, {}, {});
    if (INPUT && INPUT.val) {val.set(INPUT.val);}
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_({val: val}));
    result.set((await lo_get.get().main()));
    return result;
  }
  async http_post(INPUT) {
    return z2ui5_cl_http_handler.http_post(INPUT);
  }
  static async http_post(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    let lo_post = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});
    lo_post.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_POST']()).constructor_({val: val}));
    result.set((await lo_post.get().main()));
    return result;
  }
}
abap.Classes['Z2UI5_CL_HTTP_HANDLER'] = z2ui5_cl_http_handler;
export {z2ui5_cl_http_handler};
//# sourceMappingURL=z2ui5_cl_http_handler.clas.mjs.map