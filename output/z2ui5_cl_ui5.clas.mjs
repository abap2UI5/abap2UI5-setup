const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5.clas.abap
class z2ui5_cl_ui5 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"_NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});}, "visibility": "O", "is_constant": " ", "is_class": " "}};
  static METHODS = {"_2XML": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "OBJ": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}}},
  "_2BOOL": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "_FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}, "CHECK_POPUP": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "_GO_UP": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}}},
  "_GO_ROOT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}}},
  "_GO_NEW": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}}},
  "_ADD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}, "N": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "NS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "T_P": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "is_optional": " "}}},
  "_ADD_P": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}, "N": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "V": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "_ADD_C": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "_NS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});}, "is_optional": " "}}},
  "_NS_NDC": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_NDC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_NDC"});}, "is_optional": " "}}},
  "_NS_M": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_M", RTTIName: "\\CLASS=Z2UI5_CL_UI5_M"});}, "is_optional": " "}}},
  "_NS_UI": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});}, "is_optional": " "}}},
  "_NS_SUITE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});}, "is_optional": " "}}},
  "_NS_Z2UI5": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_Z2UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5_Z2UI5"});}, "is_optional": " "}}},
  "_NS_HTML": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});}, "is_optional": " "}}},
  "_NS_WEBC": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});}, "is_optional": " "}}},
  "_STRINGIFY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this._node = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});
  }
  async constructor_(INPUT) {
    let node = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});
    if (INPUT && INPUT.node) {node.set(INPUT.node);}
    if (abap.compare.initial(node)) {
      this._node.set(await (new abap.Classes['Z2UI5_CL_UI5_TREE_XML']()).constructor_());
      this._node.get().mo_root.set(this._node);
    } else {
      this._node.set(node);
    }
    return this;
  }
  async _2bool(INPUT) {
    return z2ui5_cl_ui5._2bool(INPUT);
  }
  static async _2bool(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    result.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: val})));
    return result;
  }
  async _2xml(INPUT) {
    return z2ui5_cl_ui5._2xml(INPUT);
  }
  static async _2xml(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let obj = INPUT?.obj;
    if (obj?.getQualifiedName === undefined || obj.getQualifiedName() !== "Z2UI5_CL_UI5") { obj = undefined; }
    if (obj === undefined) { obj = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"}).set(INPUT.obj); }
    let lt_prop = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let lv_ns_tmp = new abap.types.String({qualifiedName: "STRING"});
    let ls_prop = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp7 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp8 = new abap.types.Integer({qualifiedName: "I"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let lv_text = new abap.types.String({qualifiedName: "STRING"});
    let lv_ns = new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"});
    let temp9 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp10 = new abap.types.Integer({qualifiedName: "I"});
    let temp5 = new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"});
    let lv_element = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.String({qualifiedName: "STRING"});
    let val = new abap.types.String({qualifiedName: "STRING"});
    let row = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let lv_prop = new abap.types.String({qualifiedName: "STRING"});
    let lr_child = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});
    let lo_child = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(``));
    temp2.get().v.set(new abap.types.String().set(`sap.m`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`f`));
    temp2.get().v.set(new abap.types.String().set(`sap.f`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`ndc`));
    temp2.get().v.set(new abap.types.String().set(`sap.ndc`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`tnt`));
    temp2.get().v.set(new abap.types.String().set(`sap.tnt`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`mvc`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.core.mvc`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`core`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.core`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`form`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.layout.form`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`l`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.layout`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`t`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.table`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`webc`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.webc.main`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`fl`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.fl`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`vk`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.vk`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`vbm`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.vbm`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`z2ui5`));
    temp2.get().v.set(new abap.types.String().set(`z2ui5`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`mchart`));
    temp2.get().v.set(new abap.types.String().set(`sap.suite.ui.microchart`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`editor`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.codeeditor`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`wf`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.webc.fiori`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`wm`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.webc.main`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`html`));
    temp2.get().v.set(new abap.types.String().set(`http://www.w3.org/1999/xhtml`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:uxap`));
    temp2.get().v.set(new abap.types.String().set(`sap.uxap`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:text`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.richtexteditor`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:fb`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.comp.filterbar`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:u`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.unified`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:gantt`));
    temp2.get().v.set(new abap.types.String().set(`sap.gantt.simple`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:axistime`));
    temp2.get().v.set(new abap.types.String().set(`sap.gantt.axistime`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:config`));
    temp2.get().v.set(new abap.types.String().set(`sap.gantt.config`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:shapes`));
    temp2.get().v.set(new abap.types.String().set(`sap.gantt.simple.shapes`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:commons`));
    temp2.get().v.set(new abap.types.String().set(`sap.suite.ui.commons`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:vm`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.comp.variants`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:viz`));
    temp2.get().v.set(new abap.types.String().set(`sap.viz.ui5.controls`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:svm`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.comp.smartvariants`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:flvm`));
    temp2.get().v.set(new abap.types.String().set(`sap.ui.fl.variants`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:p13n`));
    temp2.get().v.set(new abap.types.String().set(`sap.m.p13n`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`xmlns:upload`));
    temp2.get().v.set(new abap.types.String().set(`sap.m.upload`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    lt_prop.set(temp1);
    if (abap.compare.eq(obj.get()._node, obj.get()._node.get().mo_root)) {
      for await (const unique151 of abap.statements.loop(obj.get()._node.get().mt_ns)) {
        lv_ns_tmp.set(unique151);
        try {
          temp8.set(abap.builtin.sy.get().tabix);
          abap.statements.readTable(lt_prop,{into: temp7,
            withKey: (i) => {return abap.compare.eq(i.v, lv_ns_tmp);},
            withKeyValue: [{key: (i) => {return i.v}, value: lv_ns_tmp}],
            usesTableLine: false,
            withKeySimple: {"v": lv_ns_tmp}});
          abap.builtin.sy.get().tabix.set(temp8);
          if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
            abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
          }
          ls_prop.set(temp7);
          if (abap.compare.initial(ls_prop.get().n) === false) {
            temp3.set(abap.operators.concat(new abap.types.String().set(`:`),ls_prop.get().n));
          } else {
            abap.statements.clear(temp3);
          }
          ls_prop.get().n.set(abap.operators.concat(new abap.types.String().set(`xmlns`),temp3));
          abap.statements.insertInternal({data: ls_prop, table: obj.get()._node.get().mt_prop});
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            if (abap.compare.initial(lv_ns_tmp)) {
              temp4.set(new abap.types.String().set(`XML_VIEW_NOT_VALID_NAMESPACE_EMPTY`));
            } else {
              temp4.set(abap.operators.concat(new abap.types.String().set(`XML_VIEW_NOT_VALID_NAMESPACE_NOT_FOUND failure: `),lv_ns_tmp));
            }
            lv_text.set(temp4);
            const unique152 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: lv_text});
            unique152.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_ui5.clas.abap","INTERNAL_LINE": 258};
            throw unique152;
          } else {
            throw e;
          }
        }
      }
    }
    temp10.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(lt_prop,{into: temp9,
      withKey: (i) => {return abap.compare.eq(i.v, obj.get()._node.get().mv_ns);},
      withKeyValue: [{key: (i) => {return i.v}, value: obj.get()._node.get().mv_ns}],
      usesTableLine: false,
      withKeySimple: {"v": obj.get()._node.get().mv_ns}});
    abap.builtin.sy.get().tabix.set(temp10);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    lv_ns.set(temp9.get().n);
    if (abap.compare.ne(lv_ns, new abap.types.String().set(``))) {
      temp5.set(new abap.types.String().set(`${abap.templateFormatting(lv_ns)}:`));
    } else {
      abap.statements.clear(temp5);
    }
    lv_ns.set(temp5);
    lv_element.set(obj.get()._node.get().mv_name);
    val.set(new abap.types.String().set(``));
    for await (const unique153 of abap.statements.loop(obj.get()._node.get().mt_prop)) {
      row.set(unique153);
      if (abap.compare.eq(row.get().v, abap.builtin.abap_true)) {
        temp11.set(new abap.types.String().set(`true`));
      } else {
        temp11.set(row.get().v);
      }
      val.set(new abap.types.String().set(`${abap.templateFormatting(val)} ${abap.templateFormatting(row.get().n)}="${abap.templateFormatting(abap.builtin.escape({val: temp11, format: abap.Classes['CL_ABAP_FORMAT'].e_xml_attr}))}"`));
    }
    temp6.set(val);
    lv_prop.set(temp6);
    result.set(new abap.types.String().set(`${abap.templateFormatting(result)}<${abap.templateFormatting(lv_ns)}${abap.templateFormatting(lv_element)}${abap.templateFormatting(lv_prop)}`));
    if (abap.compare.initial(obj.get()._node.get().mt_child) && abap.compare.initial(obj.get()._node.get().mv_content)) {
      result.set(new abap.types.String().set(`${abap.templateFormatting(result)}/>`));
      return result;
    }
    result.set(new abap.types.String().set(`${abap.templateFormatting(result)}>`));
    if (abap.compare.initial(obj.get()._node.get().mv_content) === false) {
      result.set(abap.operators.concat(result,obj.get()._node.get().mv_content));
      result.set(new abap.types.String().set(`${abap.templateFormatting(result)}</${abap.templateFormatting(lv_ns)}${abap.templateFormatting(lv_element)}>`));
      return result;
    }
    for await (const unique154 of abap.statements.loop(obj.get()._node.get().mt_child)) {
      lr_child.set(unique154);
      lo_child.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_({node: lr_child}));
      result.set(abap.operators.concat(result,(await this._2xml({obj: lo_child}))));
    }
    result.set(new abap.types.String().set(`${abap.templateFormatting(result)}</${abap.templateFormatting(lv_ns)}${abap.templateFormatting(lv_element)}>`));
    return result;
  }
  async _add(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let n = INPUT?.n;
    let ns = INPUT?.ns;
    let t_p = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    if (INPUT && INPUT.t_p) {t_p.set(INPUT.t_p);}
    let temp7 = new abap.types.String({qualifiedName: "STRING"});
    let lo_node = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});
    let result2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    try {
      temp7.set(ns);
      abap.statements.insertInternal({data: temp7, table: this._node.get().mo_root.get().mt_ns});
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    lo_node.set(await (new abap.Classes['Z2UI5_CL_UI5_TREE_XML']()).constructor_());
    result2.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_({node: lo_node}));
    result2.get()._node.get().mv_name.set(n);
    result2.get()._node.get().mv_ns.set(ns);
    result2.get()._node.get().mt_prop.set(t_p);
    await abap.statements.deleteInternal(result2.get()._node.get().mt_prop,{where: (I) => {return abap.compare.eq(I.v, new abap.types.String().set(``));}});
    result2.get()._node.get().mo_parent.set(this._node);
    result2.get()._node.get().mo_root.set(this._node.get().mo_root);
    abap.statements.insertInternal({data: result2.get()._node, table: this._node.get().mt_child});
    this._node.get().mo_root.get().mo_previous.set(result2.get()._node);
    result.set(result2);
    return result;
  }
  async _add_p(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let n = INPUT?.n;
    let v = INPUT?.v;
    let temp8 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp8);
    temp8.get().n.set(n);
    temp8.get().v.set(v);
    abap.statements.insertInternal({data: temp8, table: this._node.get().mt_prop});
    result.set(this.me);
    return result;
  }
  async _factory(INPUT) {
    return z2ui5_cl_ui5._factory(INPUT);
  }
  static async _factory(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let check_popup = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.check_popup) {check_popup.set(INPUT.check_popup);}
    if (INPUT === undefined || INPUT.check_popup === undefined) {check_popup = abap.builtin.abap_false;}
    let temp9 = new abap.types.String({qualifiedName: "STRING"});
    let lv_n = new abap.types.String({qualifiedName: "STRING"});
    let temp10 = new abap.types.String({qualifiedName: "STRING"});
    let lv_ns = new abap.types.String({qualifiedName: "STRING"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_());
    if (abap.compare.eq(check_popup, abap.builtin.abap_true)) {
      temp9.set(new abap.types.String().set(`FragmentDefinition`));
    } else {
      temp9.set(new abap.types.String().set(`View`));
    }
    lv_n.set(temp9);
    if (abap.compare.eq(check_popup, abap.builtin.abap_true)) {
      temp10.set(new abap.types.String().set(`sap.ui.core`));
    } else {
      temp10.set(new abap.types.String().set(`sap.ui.core.mvc`));
    }
    lv_ns.set(temp10);
    result.get()._node.get().mv_name.set(lv_n);
    result.get()._node.get().mv_ns.set(lv_ns);
    abap.statements.insertInternal({data: lv_ns, table: result.get()._node.get().mo_root.get().mt_ns});
    if (abap.compare.eq(check_popup, abap.builtin.abap_false)) {
      await result.get()._add_p({n: new abap.types.String().set(`displayBlock`), v: new abap.types.String().set(`true`)});
      await result.get()._add_p({n: new abap.types.String().set(`height`), v: new abap.types.String().set(`100%`)});
    }
    result.get()._node.get().mt_ns.set(result.get()._node.get().mo_root.get().mt_ns);
    result.get()._node.get().mo_root.set(result.get()._node);
    return result;
  }
  async _go_new() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_({node: this._node.get().mo_root.get().mo_previous}));
    return result;
  }
  async _go_root() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_({node: this._node.get().mo_root}));
    return result;
  }
  async _go_up() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    if (abap.compare.eq(this._node, this._node.get().mo_root)) {
      const unique155 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`XML_VIEW_PARSER_ERROR - go_up on root element not possible`)});
      unique155.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_ui5.clas.abap","INTERNAL_LINE": 414};
      throw unique155;
    }
    result.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_({node: this._node.get().mo_parent}));
    return result;
  }
  async _ns() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_({node: this._node}));
    return result;
  }
  async _ns_html() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_HTML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_HTML"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5_HTML']()).constructor_({node: this._node}));
    return result;
  }
  async _ns_webc() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI_WEBC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI_WEBC"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5_UI_WEBC']()).constructor_({node: this._node}));
    return result;
  }
  async _ns_ndc() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_NDC", RTTIName: "\\CLASS=Z2UI5_CL_UI5_NDC"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5_NDC']()).constructor_({node: this._node}));
    return result;
  }
  async _ns_m() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_M", RTTIName: "\\CLASS=Z2UI5_CL_UI5_M"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5_M']()).constructor_({node: this._node}));
    return result;
  }
  async _ns_ui() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_UI", RTTIName: "\\CLASS=Z2UI5_CL_UI5_UI"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5_UI']()).constructor_({node: this._node}));
    return result;
  }
  async _ns_z2ui5() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_Z2UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5_Z2UI5"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5_Z2UI5']()).constructor_({node: this._node}));
    return result;
  }
  async _stringify() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let lo_node = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    lo_node.set(await (new abap.Classes['Z2UI5_CL_UI5']()).constructor_({node: this._node.get().mo_root}));
    result.set((await this._2xml({obj: lo_node})));
    return result;
  }
  async _ns_suite() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_SUITE", RTTIName: "\\CLASS=Z2UI5_CL_UI5_SUITE"});
    result.set(await (new abap.Classes['Z2UI5_CL_UI5_SUITE']()).constructor_({node: this._node}));
    return result;
  }
  async _add_c(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5", RTTIName: "\\CLASS=Z2UI5_CL_UI5"});
    let val = INPUT?.val;
    this._node.get().mv_content.set(val);
    result.set(this.me);
    return result;
  }
}
abap.Classes['Z2UI5_CL_UI5'] = z2ui5_cl_ui5;
export {z2ui5_cl_ui5};
//# sourceMappingURL=z2ui5_cl_ui5.clas.mjs.map