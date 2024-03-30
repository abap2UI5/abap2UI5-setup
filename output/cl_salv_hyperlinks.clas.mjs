const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_hyperlinks.clas.abap
class cl_salv_hyperlinks {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_HYPERLINKS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"ADD_HYPERLINK": {"visibility": "U", "parameters": {"HANDLE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "HYPERLINK": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async add_hyperlink(INPUT) {
    let handle = INPUT?.handle;
    let hyperlink = INPUT?.hyperlink || new abap.types.Character(4);
    return;
  }
}
abap.Classes['CL_SALV_HYPERLINKS'] = cl_salv_hyperlinks;
export {cl_salv_hyperlinks};
//# sourceMappingURL=cl_salv_hyperlinks.clas.mjs.map