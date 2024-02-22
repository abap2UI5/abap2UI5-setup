const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_salv_error.clas.abap
class cx_salv_error extends cx_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CX_SALV_ERROR';
  static IMPLEMENTED_INTERFACES = ["IF_MESSAGE","IF_MESSAGE"];
  static ATTRIBUTES = {};
  static METHODS = {};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
}
abap.Classes['CX_SALV_ERROR'] = cx_salv_error;
export {cx_salv_error};
//# sourceMappingURL=cx_salv_error.clas.mjs.map