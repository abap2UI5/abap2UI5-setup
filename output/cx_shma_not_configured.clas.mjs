const {cx_shma_dynamic} = await import("./cx_shma_dynamic.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shma_not_configured.clas.abap
class cx_shma_not_configured extends cx_shma_dynamic {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CX_SHMA_NOT_CONFIGURED';
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
abap.Classes['CX_SHMA_NOT_CONFIGURED'] = cx_shma_not_configured;
export {cx_shma_not_configured};
//# sourceMappingURL=cx_shma_not_configured.clas.mjs.map