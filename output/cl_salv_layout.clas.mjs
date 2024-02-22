const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_layout.clas.abap
class cl_salv_layout {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_LAYOUT';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"RESTRICT_NONE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_KEY": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SET_SAVE_RESTRICTION": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SET_DEFAULT": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "HAS_DEFAULT": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "SET_INITIAL_LAYOUT": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.restrict_none = cl_salv_layout.restrict_none;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async set_key(INPUT) {
    let value = INPUT?.value;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
  async set_initial_layout(INPUT) {
    let value = INPUT?.value;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
  async set_save_restriction(INPUT) {
    let value = INPUT?.value || new abap.types.Character(4);
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
  async set_default(INPUT) {
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "ABAP_BOOL") { value = undefined; }
    if (value === undefined) { value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}).set(INPUT.value); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
  async has_default() {
    let value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
    return value;
  }
}
abap.Classes['CL_SALV_LAYOUT'] = cl_salv_layout;
cl_salv_layout.restrict_none = new abap.types.Integer({qualifiedName: "I"});
cl_salv_layout.restrict_none.set(3);
export {cl_salv_layout};
//# sourceMappingURL=cl_salv_layout.clas.mjs.map