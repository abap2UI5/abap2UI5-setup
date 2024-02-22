const {z2ui5_cl_ui5} = await import("./z2ui5_cl_ui5.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5_suite.clas.abap
class z2ui5_cl_ui5_suite extends z2ui5_cl_ui5 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5_SUITE';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"INTERACTDONUTCHART": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});}, "is_optional": " "}, "SELECTIONCHANGED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ERRORMESSAGE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ERRORMESSAGETITLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SHOWERROR": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DISPLAYEDSEGMENTS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "PRESS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "SEGMENTS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});}, "is_optional": " "}}},
  "INTERACTDONUTCHARTSEGMENT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});}, "is_optional": " "}, "LABEL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DISPLAYEDVALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SELECTED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async interactdonutchartsegment(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});
    let label = INPUT?.label || new abap.types.Character();
    let value = INPUT?.value || new abap.types.Character();
    let displayedvalue = INPUT?.displayedvalue || new abap.types.Character();
    let selected = INPUT?.selected || new abap.types.Character();
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`label`));
    temp2.get().v.set(label);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`displayedValue`));
    temp2.get().v.set(displayedvalue);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`value`));
    temp2.get().v.set(value);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`selected`));
    temp2.get().v.set(selected);
    abap.statements.insertInternal({data: temp2, table: temp1});
    result.set((await (await this._add({n: new abap.types.String().set(`InteractiveDonutChartSegment`), ns: new abap.types.String().set(`sap.suite.ui.microchart`), t_p: temp1})).get()._ns_suite()));
    return result;
  }
  async segments() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});
    result.set((await (await this._add({n: new abap.types.String().set(`segments`), ns: new abap.types.String().set(`sap.suite.ui.microchart`)})).get()._ns_suite()));
    return result;
  }
  async interactdonutchart(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});
    let selectionchanged = INPUT?.selectionchanged || new abap.types.Character();
    let errormessage = INPUT?.errormessage || new abap.types.Character();
    let errormessagetitle = INPUT?.errormessagetitle || new abap.types.Character();
    let showerror = INPUT?.showerror || new abap.types.Character();
    let displayedsegments = INPUT?.displayedsegments || new abap.types.Character();
    let press = INPUT?.press || new abap.types.Character();
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`selectionChanged`));
    temp4.get().v.set(selectionchanged);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`showError`));
    temp4.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: showerror})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`errorMessageTitle`));
    temp4.get().v.set(errormessagetitle);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`errorMessage`));
    temp4.get().v.set(errormessage);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`displayedSegments`));
    temp4.get().v.set(displayedsegments);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`press`));
    temp4.get().v.set(press);
    abap.statements.insertInternal({data: temp4, table: temp3});
    result.set((await (await this._add({n: new abap.types.String().set(`InteractiveDonutChart`), ns: new abap.types.String().set(`sap.suite.ui.microchart`), t_p: temp3})).get()._ns_suite()));
    return result;
  }
}
abap.Classes['Z2UI5_CL_UI5_SUITE'] = z2ui5_cl_ui5_suite;
export {z2ui5_cl_ui5_suite};
//# sourceMappingURL=z2ui5_cl_ui5_suite.clas.mjs.map