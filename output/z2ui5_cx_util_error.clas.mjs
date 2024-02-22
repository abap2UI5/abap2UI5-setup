const {cx_no_check} = await import("./cx_no_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cx_util_error.clas.abap
class z2ui5_cx_util_error extends cx_no_check {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CX_UTIL_ERROR';
  static IMPLEMENTED_INTERFACES = ["IF_MESSAGE","IF_MESSAGE"];
  static ATTRIBUTES = {"MS_ERROR": {"type": () => {return new abap.types.Structure({"x_root": new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}), "uuid": new abap.types.String({qualifiedName: "STRING"}), "text": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "PREVIOUS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": " "}}},
  "IF_MESSAGE~GET_TEXT": {"visibility": "U", "parameters": {}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_error = new abap.types.Structure({"x_root": new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}), "uuid": new abap.types.String({qualifiedName: "STRING"}), "text": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
  }
  async constructor_(INPUT) {
    let val = INPUT?.val || new abap.types.Character(4);
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    await super.constructor_({previous: previous});
    abap.statements.clear(this.textid);
    try {
      await abap.statements.cast(this.ms_error.get().x_root, val);
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        this.ms_error.get().text.set(val);
      } else {
        throw e;
      }
    }
    this.ms_error.get().uuid.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
    return this;
  }
  async if_message$get_text() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let error = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.initial(this.ms_error.get().x_root) === false) {
      result.set((await this.ms_error.get().x_root.get().if_message$get_text()));
      error.set(abap.builtin.abap_true);
    } else if (abap.compare.initial(this.ms_error.get().text) === false) {
      result.set(this.ms_error.get().text);
      error.set(abap.builtin.abap_true);
    }
    if (abap.compare.eq(error, abap.builtin.abap_true) && abap.compare.initial(result)) {
      temp1.set(new abap.types.String().set(`unknown error`));
    } else {
      temp1.set(result);
    }
    result.set(temp1);
    return result;
  }
}
abap.Classes['Z2UI5_CX_UTIL_ERROR'] = z2ui5_cx_util_error;
export {z2ui5_cx_util_error};
//# sourceMappingURL=z2ui5_cx_util_error.clas.mjs.map