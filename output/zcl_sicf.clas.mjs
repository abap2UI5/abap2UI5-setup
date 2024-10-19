const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_sicf.clas.abap
class zcl_sicf {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_SICF';
  static IMPLEMENTED_INTERFACES = ["IF_HTTP_EXTENSION"];
  static ATTRIBUTES = {"IF_HTTP_EXTENSION~FLOW_RC": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_HTTP_EXTENSION~CO_FLOW_OK": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_HTTP_EXTENSION~CO_FLOW_OK_OTHERS_MAND": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.if_http_extension$co_flow_ok = abap.Classes['IF_HTTP_EXTENSION'].if_http_extension$co_flow_ok;
    this.if_http_extension$co_flow_ok_others_mand = abap.Classes['IF_HTTP_EXTENSION'].if_http_extension$co_flow_ok_others_mand;
    if (this.if_http_extension$flow_rc === undefined) this.if_http_extension$flow_rc = new abap.types.Integer({qualifiedName: "I"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async if_http_extension$handle_request(INPUT) {
    let server = INPUT?.server;
    if (server?.getQualifiedName === undefined || server.getQualifiedName() !== "IF_HTTP_SERVER") { server = undefined; }
    if (server === undefined) { server = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_SERVER", RTTIName: "\\INTERFACE=IF_HTTP_SERVER"}).set(INPUT.server); }
    let lo_server = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_HTTP_HANDLER", RTTIName: "\\CLASS=Z2UI5_CL_HTTP_HANDLER"});
    lo_server.set((await abap.Classes['Z2UI5_CL_HTTP_HANDLER'].factory({server: server})));
    await lo_server.get().main();
  }
}
abap.Classes['ZCL_SICF'] = zcl_sicf;
zcl_sicf.if_http_extension$co_flow_ok = new abap.types.Integer({qualifiedName: "I"});
zcl_sicf.if_http_extension$co_flow_ok.set(0);
zcl_sicf.if_http_extension$co_flow_ok_others_mand = new abap.types.Integer({qualifiedName: "I"});
zcl_sicf.if_http_extension$co_flow_ok_others_mand.set(2);
export {zcl_sicf};
//# sourceMappingURL=zcl_sicf.clas.mjs.map