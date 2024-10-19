const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_app_style_css.clas.abap
class z2ui5_cl_app_style_css {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_APP_STYLE_CSS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get() {
    return z2ui5_cl_app_style_css.get();
  }
  static async get() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`/* Enter your custom styles here */`),new abap.types.String().set(``)));
    return result;
  }
}
abap.Classes['Z2UI5_CL_APP_STYLE_CSS'] = z2ui5_cl_app_style_css;
export {z2ui5_cl_app_style_css};
//# sourceMappingURL=z2ui5_cl_app_style_css.clas.mjs.map