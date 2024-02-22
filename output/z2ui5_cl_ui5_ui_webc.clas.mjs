const {z2ui5_cl_ui5} = await import("./z2ui5_cl_ui5.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5_ui_webc.clas.abap
class z2ui5_cl_ui5_ui_webc extends z2ui5_cl_ui5 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5_UI_WEBC';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"BUTTON": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ICON": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TOOLTIP": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DESIGN": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CLICK": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "BAR": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DESIGN": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "LABEL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "PANEL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "HEADER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "INPUT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CLICK": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "WIDTH": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "TOAST": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async bar(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    let id = INPUT?.id || new abap.types.Character();
    let design = INPUT?.design || new abap.types.Character();
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`id`));
    temp2.get().v.set(id);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`design`));
    temp2.get().v.set(design);
    abap.statements.insertInternal({data: temp2, table: temp1});
    result.set((await (await this._add({n: new abap.types.String().set(`Bar`), ns: new abap.types.Character(17).set('sap.ui.webc.fiori'), t_p: temp1})).get()._ns_webc()));
    return result;
  }
  async button(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    let id = INPUT?.id || new abap.types.Character();
    let icon = INPUT?.icon || new abap.types.Character();
    let text = INPUT?.text || new abap.types.Character();
    let tooltip = INPUT?.tooltip || new abap.types.Character();
    let design = INPUT?.design || new abap.types.Character();
    let click = INPUT?.click || new abap.types.Character();
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`id`));
    temp4.get().v.set(id);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`icon`));
    temp4.get().v.set(icon);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`tooltip`));
    temp4.get().v.set(tooltip);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`text`));
    temp4.get().v.set(text);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`click`));
    temp4.get().v.set(click);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`design`));
    temp4.get().v.set(design);
    abap.statements.insertInternal({data: temp4, table: temp3});
    await (await this._add({n: new abap.types.String().set(`Button`), ns: new abap.types.Character(16).set('sap.ui.webc.main'), t_p: temp3})).get()._ns_webc();
    return result;
  }
  async header(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    let id = INPUT?.id || new abap.types.Character();
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp5);
    temp6.get().n.set(new abap.types.String().set(`id`));
    temp6.get().v.set(id);
    abap.statements.insertInternal({data: temp6, table: temp5});
    result.set((await (await this._add({n: new abap.types.String().set(`header`), ns: new abap.types.Character(16).set('sap.ui.webc.main'), t_p: temp5})).get()._ns_webc()));
    return result;
  }
  async input(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    let id = INPUT?.id || new abap.types.Character();
    let text = INPUT?.text || new abap.types.Character();
    let click = INPUT?.click || new abap.types.Character();
    let value = INPUT?.value || new abap.types.Character();
    let width = INPUT?.width || new abap.types.Character();
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp8 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp7);
    temp8.get().n.set(new abap.types.String().set(`id`));
    temp8.get().v.set(id);
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`text`));
    temp8.get().v.set(text);
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`click`));
    temp8.get().v.set(click);
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`width`));
    temp8.get().v.set(width);
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`value`));
    temp8.get().v.set(value);
    abap.statements.insertInternal({data: temp8, table: temp7});
    await (await this._add({n: new abap.types.String().set(`Input`), ns: new abap.types.Character(16).set('sap.ui.webc.main'), t_p: temp7})).get()._ns_webc();
    return result;
  }
  async label(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    let id = INPUT?.id || new abap.types.Character();
    let text = INPUT?.text || new abap.types.Character();
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp10 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp9);
    temp10.get().n.set(new abap.types.String().set(`id`));
    temp10.get().v.set(id);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`text`));
    temp10.get().v.set(text);
    abap.statements.insertInternal({data: temp10, table: temp9});
    await (await this._add({n: new abap.types.String().set(`Label`), ns: new abap.types.Character(16).set('sap.ui.webc.main'), t_p: temp9})).get()._ns_webc();
    return result;
  }
  async panel(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    let id = INPUT?.id || new abap.types.Character();
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp12 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp11);
    temp12.get().n.set(new abap.types.String().set(`id`));
    temp12.get().v.set(id);
    abap.statements.insertInternal({data: temp12, table: temp11});
    result.set((await (await this._add({n: new abap.types.String().set(`Panel`), ns: new abap.types.Character(16).set('sap.ui.webc.main'), t_p: temp11})).get()._ns_webc()));
    return result;
  }
  async toast(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    let id = INPUT?.id || new abap.types.Character();
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp14 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp13);
    temp14.get().n.set(new abap.types.String().set(`id`));
    temp14.get().v.set(id);
    abap.statements.insertInternal({data: temp14, table: temp13});
    await (await this._add({n: new abap.types.String().set(`Toast`), ns: new abap.types.Character(16).set('sap.ui.webc.main'), t_p: temp13})).get()._ns_webc();
    return result;
  }
}
abap.Classes['Z2UI5_CL_UI5_UI_WEBC'] = z2ui5_cl_ui5_ui_webc;
export {z2ui5_cl_ui5_ui_webc};
//# sourceMappingURL=z2ui5_cl_ui5_ui_webc.clas.mjs.map