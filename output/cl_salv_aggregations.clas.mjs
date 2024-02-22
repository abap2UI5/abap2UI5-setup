const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_aggregations.clas.abap
class cl_salv_aggregations {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_AGGREGATIONS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"ADD_AGGREGATION": {"visibility": "U", "parameters": {"COLUMNNAME": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "AGGREGATION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async add_aggregation(INPUT) {
    let columnname = INPUT?.columnname;
    let aggregation = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.aggregation) {aggregation.set(INPUT.aggregation);}
    if (INPUT === undefined || INPUT.aggregation === undefined) {aggregation = abap.Classes['IF_SALV_C_AGGREGATION'].if_salv_c_aggregation$total;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_SALV_AGGREGATIONS'] = cl_salv_aggregations;
export {cl_salv_aggregations};
//# sourceMappingURL=cl_salv_aggregations.clas.mjs.map