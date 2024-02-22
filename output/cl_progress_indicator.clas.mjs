const {cx_root} = await import("./cx_root.clas.mjs");
// cl_progress_indicator.clas.abap
class cl_progress_indicator {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_PROGRESS_INDICATOR';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"PROGRESS_INDICATE": {"visibility": "U", "parameters": {"I_TEXT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "I_PROCESSED": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "I_TOTAL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "I_OUTPUT_IMMEDIATELY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "E_PROGRESS_SENT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async progress_indicate(INPUT) {
    return cl_progress_indicator.progress_indicate(INPUT);
  }
  static async progress_indicate(INPUT) {
    let i_text = INPUT?.i_text || new abap.types.Character(4);
    let i_processed = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.i_processed) {i_processed.set(INPUT.i_processed);}
    let i_total = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.i_total) {i_total.set(INPUT.i_total);}
    let i_output_immediately = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_output_immediately) {i_output_immediately.set(INPUT.i_output_immediately);}
    let e_progress_sent = INPUT?.e_progress_sent || new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    return;
  }
}
abap.Classes['CL_PROGRESS_INDICATOR'] = cl_progress_indicator;
export {cl_progress_indicator};
//# sourceMappingURL=cl_progress_indicator.clas.mjs.map