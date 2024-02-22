const {cx_root} = await import("./cx_root.clas.mjs");
// cl_oauth2_client.clas.abap
class cl_oauth2_client {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_OAUTH2_CLIENT';
  static IMPLEMENTED_INTERFACES = ["IF_OAUTH2_CLIENT"];
  static ATTRIBUTES = {};
  static METHODS = {"CREATE": {"visibility": "U", "parameters": {"RO_OAUTH2_CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_OAUTH2_CLIENT", RTTIName: "\\INTERFACE=IF_OAUTH2_CLIENT"});}, "is_optional": " "}, "I_PROFILE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "I_CONFIGURATION": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async create(INPUT) {
    return cl_oauth2_client.create(INPUT);
  }
  static async create(INPUT) {
    let ro_oauth2_client = new abap.types.ABAPObject({qualifiedName: "IF_OAUTH2_CLIENT", RTTIName: "\\INTERFACE=IF_OAUTH2_CLIENT"});
    let i_profile = INPUT?.i_profile;
    let i_configuration = INPUT?.i_configuration || new abap.types.Character();
    abap.statements.write(new abap.types.Character(50).set('todo, cl_oauth2_client in open-abap-core, create()'),{newLine: true});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return ro_oauth2_client;
  }
  async if_oauth2_client$execute_cc_flow() {
    abap.statements.write(new abap.types.Character(59).set('todo, cl_oauth2_client in open-abap-core, execute_cc_flow()'),{newLine: true});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async if_oauth2_client$set_token(INPUT) {
    let ii_http_client = INPUT?.ii_http_client;
    if (ii_http_client?.getQualifiedName === undefined || ii_http_client.getQualifiedName() !== "IF_HTTP_CLIENT") { ii_http_client = undefined; }
    if (ii_http_client === undefined) { ii_http_client = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_CLIENT", RTTIName: "\\INTERFACE=IF_HTTP_CLIENT"}).set(INPUT.ii_http_client); }
    abap.statements.write(new abap.types.Character(53).set('todo, cl_oauth2_client in open-abap-core, set_token()'),{newLine: true});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_OAUTH2_CLIENT'] = cl_oauth2_client;
export {cl_oauth2_client};
//# sourceMappingURL=cl_oauth2_client.clas.mjs.map