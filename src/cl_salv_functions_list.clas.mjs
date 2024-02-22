const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_functions_list.clas.abap
class cl_salv_functions_list {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_FUNCTIONS_LIST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"SET_ALL": {"visibility": "U", "parameters": {"FLAG": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "GET_FUNCTIONS": {"visibility": "U", "parameters": {"SDF": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_DEFAULT": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "ADD_FUNCTION": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "ICON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TOOLTIP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "POSITION": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async set_all(INPUT) {
    let flag = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.flag) {flag.set(INPUT.flag);}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async get_functions() {
    let sdf = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return sdf;
  }
  async set_default(INPUT) {
    let value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async add_function(INPUT) {
    let name = INPUT?.name;
    let icon = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.icon) {icon.set(INPUT.icon);}
    let text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.text) {text.set(INPUT.text);}
    let tooltip = INPUT?.tooltip;
    if (tooltip?.getQualifiedName === undefined || tooltip.getQualifiedName() !== "STRING") { tooltip = undefined; }
    if (tooltip === undefined) { tooltip = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.tooltip); }
    let position = INPUT?.position;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_SALV_FUNCTIONS_LIST'] = cl_salv_functions_list;
export {cl_salv_functions_list};
//# sourceMappingURL=cl_salv_functions_list.clas.mjs.map