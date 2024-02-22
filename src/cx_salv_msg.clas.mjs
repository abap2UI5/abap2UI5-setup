const {cx_salv_error} = await import("./cx_salv_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_salv_msg.clas.abap
class cx_salv_msg extends cx_salv_error {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CX_SALV_MSG';
  static IMPLEMENTED_INTERFACES = ["IF_MESSAGE","IF_MESSAGE","IF_MESSAGE","IF_MESSAGE"];
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
abap.Classes['CX_SALV_MSG'] = cx_salv_msg;
export {cx_salv_msg};
//# sourceMappingURL=cx_salv_msg.clas.mjs.map