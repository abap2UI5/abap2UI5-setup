const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_events_table.clas.abap
class cl_salv_events_table {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_EVENTS_TABLE';
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
abap.Classes['CL_SALV_EVENTS_TABLE'] = cl_salv_events_table;
export {cl_salv_events_table};
//# sourceMappingURL=cl_salv_events_table.clas.mjs.map