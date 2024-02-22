const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_filters.clas.abap
class cl_salv_filters {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_FILTERS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
}
abap.Classes['CL_SALV_FILTERS'] = cl_salv_filters;
export {cl_salv_filters};
//# sourceMappingURL=cl_salv_filters.clas.mjs.map