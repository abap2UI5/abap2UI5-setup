const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_functional_settings.clas.abap
class cl_salv_functional_settings {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_FUNCTIONAL_SETTINGS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_HYPERLINKS": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_HYPERLINKS", RTTIName: "\\CLASS=CL_SALV_HYPERLINKS"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_hyperlinks() {
    let value = new abap.types.ABAPObject({qualifiedName: "CL_SALV_HYPERLINKS", RTTIName: "\\CLASS=CL_SALV_HYPERLINKS"});
    return value;
    return value;
  }
}
abap.Classes['CL_SALV_FUNCTIONAL_SETTINGS'] = cl_salv_functional_settings;
export {cl_salv_functional_settings};
//# sourceMappingURL=cl_salv_functional_settings.clas.mjs.map