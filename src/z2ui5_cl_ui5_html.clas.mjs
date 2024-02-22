const {z2ui5_cl_ui5} = await import("./z2ui5_cl_ui5.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5_html.clas.abap
class z2ui5_cl_ui5_html extends z2ui5_cl_ui5 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5_HTML';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"SCRIPT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});}, "is_optional": " "}, "SRC": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "STYLE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});}, "is_optional": " "}}},
  "ZZ_PLAIN": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async zz_plain(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`src`));
    temp2.get().v.set(val);
    abap.statements.insertInternal({data: temp2, table: temp1});
    await this._add({n: new abap.types.String().set(`script`), ns: new abap.types.String().set(`http://www.w3.org/1999/xhtml`), t_p: temp1});
    return result;
  }
  async script(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});
    let src = INPUT?.src || new abap.types.Character();
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`src`));
    temp4.get().v.set(src);
    abap.statements.insertInternal({data: temp4, table: temp3});
    result.set((await (await this._add({n: new abap.types.String().set(`script`), ns: new abap.types.String().set(`http://www.w3.org/1999/xhtml`), t_p: temp3})).get()._ns_html()));
    return result;
  }
  async style() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});
    result.set(this.me);
    await this._add({n: new abap.types.String().set(`style`), ns: new abap.types.String().set(`http://www.w3.org/1999/xhtml`)});
    return result;
  }
}
abap.Classes['Z2UI5_CL_UI5_HTML'] = z2ui5_cl_ui5_html;
export {z2ui5_cl_ui5_html};
//# sourceMappingURL=z2ui5_cl_ui5_html.clas.mjs.map