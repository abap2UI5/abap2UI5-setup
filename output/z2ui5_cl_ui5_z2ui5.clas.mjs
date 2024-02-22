const {z2ui5_cl_ui5} = await import("./z2ui5_cl_ui5.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5_z2ui5.clas.abap
class z2ui5_cl_ui5_z2ui5 extends z2ui5_cl_ui5 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5_Z2UI5';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"FILE_UPLOADER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_Z2UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5_Z2UI5"});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "PATH": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "PLACEHOLDER": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "UPLOAD": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ICONONLY": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "BUTTONONLY": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "BUTTONTEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "UPLOADBUTTONTEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECKDIRECTUPLOAD": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "FILETYPE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "TIMER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_Z2UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5_Z2UI5"});}, "is_optional": " "}, "FINISHED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DELAYMS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECKREPEAT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async timer(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_Z2UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5_Z2UI5"});
    let finished = INPUT?.finished || new abap.types.Character();
    let delayms = INPUT?.delayms || new abap.types.Character();
    let checkrepeat = INPUT?.checkrepeat || new abap.types.Character();
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`delayMS`));
    temp2.get().v.set(delayms);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`finished`));
    temp2.get().v.set(finished);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`checkRepeat`));
    temp2.get().v.set((await this._2bool({val: checkrepeat})));
    abap.statements.insertInternal({data: temp2, table: temp1});
    await this._add({n: new abap.types.String().set(`Timer`), ns: new abap.types.String().set(`z2ui5`), t_p: temp1});
    return result;
  }
  async file_uploader(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_Z2UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5_Z2UI5"});
    let value = INPUT?.value || new abap.types.Character();
    let path = INPUT?.path || new abap.types.Character();
    let placeholder = INPUT?.placeholder || new abap.types.Character();
    let upload = INPUT?.upload || new abap.types.Character();
    let icononly = INPUT?.icononly || new abap.types.Character();
    let buttononly = INPUT?.buttononly || new abap.types.Character();
    let buttontext = INPUT?.buttontext || new abap.types.Character();
    let uploadbuttontext = INPUT?.uploadbuttontext || new abap.types.Character();
    let checkdirectupload = INPUT?.checkdirectupload || new abap.types.Character();
    let filetype = INPUT?.filetype || new abap.types.Character();
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`placeholder`));
    temp4.get().v.set(placeholder);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`upload`));
    temp4.get().v.set(upload);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`path`));
    temp4.get().v.set(path);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`value`));
    temp4.get().v.set(value);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`iconOnly`));
    temp4.get().v.set((await this._2bool({val: icononly})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`buttonOnly`));
    temp4.get().v.set((await this._2bool({val: buttononly})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`buttonText`));
    temp4.get().v.set(buttontext);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`uploadButtonText`));
    temp4.get().v.set(uploadbuttontext);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`fileType`));
    temp4.get().v.set(filetype);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`checkDirectUpload`));
    temp4.get().v.set((await this._2bool({val: checkdirectupload})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    await this._add({n: new abap.types.String().set(`FileUploader`), ns: new abap.types.String().set(`z2ui5`), t_p: temp3});
    return result;
  }
}
abap.Classes['Z2UI5_CL_UI5_Z2UI5'] = z2ui5_cl_ui5_z2ui5;
export {z2ui5_cl_ui5_z2ui5};
//# sourceMappingURL=z2ui5_cl_ui5_z2ui5.clas.mjs.map