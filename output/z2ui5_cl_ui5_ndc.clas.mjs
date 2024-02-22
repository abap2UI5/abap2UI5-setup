const {z2ui5_cl_ui5} = await import("./z2ui5_cl_ui5.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5_ndc.clas.abap
class z2ui5_cl_ui5_ndc extends z2ui5_cl_ui5 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5_NDC';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"BARCODESCANNERBUTTON": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_NDC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_NDC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SCANSUCCESS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SCANFAIL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "INPUTLIVEUPDATE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DIALOGTITLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async barcodescannerbutton(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_NDC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_NDC"});
    let id = INPUT?.id || new abap.types.Character();
    let scansuccess = INPUT?.scansuccess || new abap.types.Character();
    let scanfail = INPUT?.scanfail || new abap.types.Character();
    let inputliveupdate = INPUT?.inputliveupdate || new abap.types.Character();
    let dialogtitle = INPUT?.dialogtitle || new abap.types.Character();
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`id`));
    temp2.get().v.set(id);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`scanSuccess`));
    temp2.get().v.set(scansuccess);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`scanFail`));
    temp2.get().v.set(scanfail);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`inputLiveUpdate`));
    temp2.get().v.set(inputliveupdate);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`dialogTitle`));
    temp2.get().v.set(dialogtitle);
    abap.statements.insertInternal({data: temp2, table: temp1});
    result.set((await (await this._add({n: new abap.types.String().set(`BarcodeScannerButton`), ns: new abap.types.Character(7).set('sap.ndc'), t_p: temp1})).get()._ns_ndc()));
    return result;
  }
}
abap.Classes['Z2UI5_CL_UI5_NDC'] = z2ui5_cl_ui5_ndc;
export {z2ui5_cl_ui5_ndc};
//# sourceMappingURL=z2ui5_cl_ui5_ndc.clas.mjs.map