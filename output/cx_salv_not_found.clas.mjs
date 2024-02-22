const {cx_salv_access_error} = await import("./cx_salv_access_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_salv_not_found.clas.abap
class cx_salv_not_found extends cx_salv_access_error {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CX_SALV_NOT_FOUND';
  static IMPLEMENTED_INTERFACES = ["IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE"];
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
abap.Classes['CX_SALV_NOT_FOUND'] = cx_salv_not_found;
export {cx_salv_not_found};
//# sourceMappingURL=cx_salv_not_found.clas.mjs.map