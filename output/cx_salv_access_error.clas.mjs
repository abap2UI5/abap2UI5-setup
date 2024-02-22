const {cx_salv_static_check} = await import("./cx_salv_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_salv_access_error.clas.abap
class cx_salv_access_error extends cx_salv_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CX_SALV_ACCESS_ERROR';
  static IMPLEMENTED_INTERFACES = ["IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE"];
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
abap.Classes['CX_SALV_ACCESS_ERROR'] = cx_salv_access_error;
export {cx_salv_access_error};
//# sourceMappingURL=cx_salv_access_error.clas.mjs.map