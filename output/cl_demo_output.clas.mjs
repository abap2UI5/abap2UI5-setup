const {cx_root} = await import("./cx_root.clas.mjs");
// cl_demo_output.clas.abap
class cl_demo_output {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_DEMO_OUTPUT';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"WRITE": {"visibility": "U", "parameters": {"DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CLEAR": {"visibility": "U", "parameters": {}},
  "DISPLAY": {"visibility": "U", "parameters": {"DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async write(INPUT) {
    return cl_demo_output.write(INPUT);
  }
  static async write(INPUT) {
    let data = INPUT?.data;
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
  async clear() {
    return cl_demo_output.clear();
  }
  static async clear() {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
  async display(INPUT) {
    return cl_demo_output.display(INPUT);
  }
  static async display(INPUT) {
    let data = INPUT?.data || new abap.types.Character(4);
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
}
abap.Classes['CL_DEMO_OUTPUT'] = cl_demo_output;
export {cl_demo_output};
//# sourceMappingURL=cl_demo_output.clas.mjs.map