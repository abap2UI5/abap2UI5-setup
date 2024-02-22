const {z2ui5_cl_ui5} = await import("./z2ui5_cl_ui5.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5_ui.clas.abap
class z2ui5_cl_ui5_ui extends z2ui5_cl_ui5 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5_UI';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"SIMPLEFORM": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}, "TITLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "LAYOUT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "EDITABLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "COLUMNSXL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "COLUMNSL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "COLUMNSM": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CONTENT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}, "NS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "TABCONTAINER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}}},
  "TAB": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SELECTED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "GRID": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}, "CLASS_": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DEFAULT_SPAN": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "GRIDDATA": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}, "SPAN": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CODEEDITOR": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HEIGHT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "WIDTH": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "EDITABLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "LISTITEM": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ADDITIONALTEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "KEY": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ICON": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ENABLED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TEXTDIRECTION": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async listitem(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    let text = INPUT?.text || new abap.types.Character();
    let additionaltext = INPUT?.additionaltext || new abap.types.Character();
    let key = INPUT?.key || new abap.types.Character();
    let icon = INPUT?.icon || new abap.types.Character();
    let enabled = INPUT?.enabled || new abap.types.Character();
    let textdirection = INPUT?.textdirection || new abap.types.Character();
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`text`));
    temp2.get().v.set(text);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`icon`));
    temp2.get().v.set(icon);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`key`));
    temp2.get().v.set(key);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`textDirection`));
    temp2.get().v.set(textdirection);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`enabled`));
    temp2.get().v.set((await this._2bool({val: enabled})));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`additionalText`));
    temp2.get().v.set(additionaltext);
    abap.statements.insertInternal({data: temp2, table: temp1});
    await this._add({n: new abap.types.String().set(`ListItem`), ns: new abap.types.String().set(`sap.ui.core`), t_p: temp1});
    return result;
  }
  async codeeditor(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    let value = INPUT?.value || new abap.types.Character();
    let type = INPUT?.type || new abap.types.Character();
    let height = INPUT?.height || new abap.types.Character();
    let width = INPUT?.width || new abap.types.Character();
    let editable = INPUT?.editable || new abap.types.Character();
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`value`));
    temp4.get().v.set(value);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`type`));
    temp4.get().v.set(type);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`editable`));
    temp4.get().v.set((await this._2bool({val: editable})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`height`));
    temp4.get().v.set(height);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`width`));
    temp4.get().v.set(width);
    abap.statements.insertInternal({data: temp4, table: temp3});
    await (await this._add({n: new abap.types.String().set(`CodeEditor`), ns: new abap.types.String().set(`sap.ui.codeeditor`), t_p: temp3})).get()._ns_ui();
    return result;
  }
  async griddata(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    let span = INPUT?.span || new abap.types.Character();
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.me);
    abap.statements.clear(temp5);
    temp6.get().n.set(new abap.types.String().set(`span`));
    temp6.get().v.set(span);
    abap.statements.insertInternal({data: temp6, table: temp5});
    await this._add({n: new abap.types.String().set(`GridData`), ns: new abap.types.String().set(`sap.ui.layout`), t_p: temp5});
    return result;
  }
  async grid(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    let class_ = INPUT?.class_ || new abap.types.Character();
    let default_span = INPUT?.default_span || new abap.types.Character();
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp8 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp7);
    temp8.get().n.set(new abap.types.String().set(`defaultSpan`));
    temp8.get().v.set(default_span);
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().n.set(new abap.types.String().set(`class`));
    temp8.get().v.set(class_);
    abap.statements.insertInternal({data: temp8, table: temp7});
    result.set((await (await this._add({n: new abap.types.String().set(`Grid`), ns: new abap.types.String().set(`sap.ui.layout`), t_p: temp7})).get()._ns_ui()));
    return result;
  }
  async tab(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    let text = INPUT?.text || new abap.types.Character();
    let selected = INPUT?.selected || new abap.types.Character();
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp10 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp9);
    temp10.get().n.set(new abap.types.String().set(`text`));
    temp10.get().v.set(text);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`selected`));
    temp10.get().v.set(selected);
    abap.statements.insertInternal({data: temp10, table: temp9});
    result.set((await (await this._add({n: new abap.types.String().set(`Tab`), ns: new abap.types.String().set(`sap.ui.webc.main`), t_p: temp9})).get()._ns_ui()));
    return result;
  }
  async tabcontainer() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    result.set((await (await this._add({n: new abap.types.String().set(`TabContainer`), ns: new abap.types.String().set(`sap.ui.webc.main`)})).get()._ns_ui()));
    return result;
  }
  async content(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    let ns = INPUT?.ns || new abap.types.Character();
    if (INPUT === undefined || INPUT.ns === undefined) {ns = new abap.types.String().set(`sap.ui.layout.form`);}
    result.set((await (await this._add({ns: ns, n: new abap.types.String().set(`content`)})).get()._ns_ui()));
    return result;
  }
  async simpleform(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    let title = INPUT?.title || new abap.types.Character();
    let layout = INPUT?.layout || new abap.types.Character();
    let editable = INPUT?.editable || new abap.types.Character();
    let columnsxl = INPUT?.columnsxl || new abap.types.Character();
    let columnsl = INPUT?.columnsl || new abap.types.Character();
    let columnsm = INPUT?.columnsm || new abap.types.Character();
    let id = INPUT?.id || new abap.types.Character();
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp12 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp11);
    temp12.get().n.set(new abap.types.String().set(`title`));
    temp12.get().v.set(title);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`layout`));
    temp12.get().v.set(layout);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`id`));
    temp12.get().v.set(id);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`columnsXL`));
    temp12.get().v.set(columnsxl);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`columnsL`));
    temp12.get().v.set(columnsl);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`columnsM`));
    temp12.get().v.set(columnsm);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`editable`));
    temp12.get().v.set((await this._2bool({val: editable})));
    abap.statements.insertInternal({data: temp12, table: temp11});
    result.set((await (await this._add({n: new abap.types.String().set(`SimpleForm`), ns: new abap.types.String().set(`sap.ui.layout.form`), t_p: temp11})).get()._ns_ui()));
    return result;
  }
}
abap.Classes['Z2UI5_CL_UI5_UI'] = z2ui5_cl_ui5_ui;
export {z2ui5_cl_ui5_ui};
//# sourceMappingURL=z2ui5_cl_ui5_ui.clas.mjs.map