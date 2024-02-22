const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_sorts.clas.abap
class cl_salv_sorts {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_SORTS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"ADD_SORT": {"visibility": "U", "parameters": {"COLUMNNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SUBTOTAL": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async add_sort(INPUT) {
    let columnname = INPUT?.columnname;
    let subtotal = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.subtotal) {subtotal.set(INPUT.subtotal);}
    if (INPUT === undefined || INPUT.subtotal === undefined) {subtotal = abap.builtin.abap_false;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_SALV_SORTS'] = cl_salv_sorts;
export {cl_salv_sorts};
//# sourceMappingURL=cl_salv_sorts.clas.mjs.map