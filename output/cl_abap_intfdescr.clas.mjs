const {cl_abap_objectdescr} = await import("./cl_abap_objectdescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_intfdescr.clas.abap
class cl_abap_intfdescr extends cl_abap_objectdescr {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_ABAP_INTFDESCR';
  static IMPLEMENTED_INTERFACES = [];
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
abap.Classes['CL_ABAP_INTFDESCR'] = cl_abap_intfdescr;
export {cl_abap_intfdescr};
//# sourceMappingURL=cl_abap_intfdescr.clas.mjs.map