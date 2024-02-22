const {cx_root} = await import("./cx_root.clas.mjs");
// cl_gui_cfw.clas.abap
class cl_gui_cfw {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_GUI_CFW';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"COMPUTE_PIXEL_FROM_METRIC": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "X_OR_Y": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "IN_": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "FLUSH": {"visibility": "U", "parameters": {}},
  "SET_NEW_OK_CODE": {"visibility": "U", "parameters": {"NEW_CODE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async compute_pixel_from_metric(INPUT) {
    return cl_gui_cfw.compute_pixel_from_metric(INPUT);
  }
  static async compute_pixel_from_metric(INPUT) {
    let val = new abap.types.Integer({qualifiedName: "I"});
    let x_or_y = INPUT?.x_or_y;
    let in_ = INPUT?.in_;
    if (in_?.getQualifiedName === undefined || in_.getQualifiedName() !== "I") { in_ = undefined; }
    if (in_ === undefined) { in_ = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.in_); }
    val.set(abap.IntegerFactory.get(1));
    return val;
  }
  async flush() {
    return cl_gui_cfw.flush();
  }
  static async flush() {
    return;
  }
  async set_new_ok_code(INPUT) {
    return cl_gui_cfw.set_new_ok_code(INPUT);
  }
  static async set_new_ok_code(INPUT) {
    let new_code = INPUT?.new_code;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(15).set('not implemented')));
  }
}
abap.Classes['CL_GUI_CFW'] = cl_gui_cfw;
export {cl_gui_cfw};
//# sourceMappingURL=cl_gui_cfw.clas.mjs.map