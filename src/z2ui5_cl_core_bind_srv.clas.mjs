const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_bind_srv.clas.abap
class z2ui5_cl_core_bind_srv {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_BIND_SRV';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_ATTRI": {"type": () => {return new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_CONFIG": {"type": () => {return new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"GET_CLIENT_NAME": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "UPDATE_MODEL_ATTRI": {"visibility": "O", "parameters": {}},
  "CHECK_RAISE_EXISTING": {"visibility": "O", "parameters": {}},
  "CHECK_RAISE_NEW": {"visibility": "O", "parameters": {}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});}, "is_optional": " "}}},
  "MAIN_LOCAL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "CONFIG": {"type": () => {return new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});}, "is_optional": " "}}},
  "MAIN": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CONFIG": {"type": () => {return new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});}, "is_optional": " "}}},
  "MAIN_CELL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CONFIG": {"type": () => {return new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});}, "is_optional": " "}}},
  "CLEAR": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "BIND_TAB_CELL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    this.mr_attri = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}));
    this.ms_config = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    this.mv_type = new abap.types.String({qualifiedName: "STRING"});
  }
  async bind_tab_cell(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let iv_name = INPUT?.iv_name;
    if (iv_name?.getQualifiedName === undefined || iv_name.getQualifiedName() !== "STRING") { iv_name = undefined; }
    if (iv_name === undefined) { iv_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_name); }
    let i_val = INPUT?.i_val;
    let fs_ele_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let lr_ref_in = new abap.types.DataReference(new abap.types.Character(4));
    let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let lt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let fs_comp_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assign({target: fs_tab_, source: (this.ms_config.get().tab).dereference()});
    abap.statements.readTable(fs_tab_,{index: this.ms_config.get().tab_index,
      assigning: fs_row_});
    lt_attri.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_struc({val: this.ms_config.get().tab})));
    for await (const unique94 of abap.statements.loop(lt_attri)) {
      fs_comp_.assign(unique94);
      abap.statements.assign({component: fs_comp_.get().name, target: fs_ele_, source: fs_row_});
      abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
      lr_ref_in.assign(fs_ele_.getPointer());
      if (abap.compare.eq(i_val, lr_ref_in)) {
        temp1.set(abap.operators.minus(this.ms_config.get().tab_index,abap.IntegerFactory.get(1)));
        result.set(abap.operators.concat(iv_name,abap.operators.concat(new abap.types.Character(1).set('/'),abap.operators.concat(abap.builtin.shift_right({val: temp1}),abap.operators.concat(new abap.types.Character(1).set('/'),fs_comp_.get().name)))));
        return result;
      }
    }
    const unique95 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`BINDING_ERROR_TAB_CELL_LEVEL - No class attribute for binding found - Please check if the binded values are public attributes of your class`)});
    unique95.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 100};
    throw unique95;
    return result;
  }
  async check_raise_existing() {
    if (abap.compare.ne(this.mr_attri.get().bind_type, this.mv_type)) {
      const unique96 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.String().set(`<p>Binding Error - Two different binding types for same attribute used (`),abap.operators.concat(this.mr_attri.get().name,new abap.types.String().set(`).`)))});
      unique96.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 110};
      throw unique96;
    }
    if (abap.compare.initial(this.mr_attri.get().custom_mapper) === false && abap.compare.ne(this.mr_attri.get().custom_mapper, this.ms_config.get().custom_mapper)) {
      const unique97 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.String().set(`<p>Binding Error - Two different mapper for same attribute used (`),abap.operators.concat(this.mr_attri.get().name,new abap.types.String().set(`).`)))});
      unique97.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 116};
      throw unique97;
    }
    if (abap.compare.initial(this.mr_attri.get().custom_mapper_back) === false && abap.compare.ne(this.mr_attri.get().custom_mapper_back, this.ms_config.get().custom_mapper_back)) {
      const unique98 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.String().set(`<p>Binding Error - Two different mapper back for same attribute used (`),abap.operators.concat(this.mr_attri.get().name,new abap.types.String().set(`).`)))});
      unique98.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 122};
      throw unique98;
    }
    if (abap.compare.initial(this.mr_attri.get().custom_filter) === false && abap.compare.ne(this.mr_attri.get().custom_filter, this.ms_config.get().custom_filter)) {
      const unique99 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.String().set(`<p>Binding Error - Two different filter for same attribute used (`),abap.operators.concat(this.mr_attri.get().name,new abap.types.String().set(`).`)))});
      unique99.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 128};
      throw unique99;
    }
  }
  async check_raise_new() {
    let temp2 = new abap.types.ABAPObject({qualifiedName: "IF_SERIALIZABLE_OBJECT", RTTIName: "\\INTERFACE=IF_SERIALIZABLE_OBJECT"});
    let li_serial = new abap.types.ABAPObject({qualifiedName: "IF_SERIALIZABLE_OBJECT", RTTIName: "\\INTERFACE=IF_SERIALIZABLE_OBJECT"});
    let temp3 = new abap.types.ABAPObject({qualifiedName: "IF_SERIALIZABLE_OBJECT", RTTIName: "\\INTERFACE=IF_SERIALIZABLE_OBJECT"});
    let li_serial2 = new abap.types.ABAPObject({qualifiedName: "IF_SERIALIZABLE_OBJECT", RTTIName: "\\INTERFACE=IF_SERIALIZABLE_OBJECT"});
    if (abap.compare.initial(this.mr_attri.get().custom_filter_back) === false) {
      try {
        await abap.statements.cast(temp2, this.mr_attri.get().custom_filter_back);
        li_serial.set(temp2);
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          const unique100 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`<p>custom_filter_back used but it is not serializable, please use if_serializable_object`)});
          unique100.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 149};
          throw unique100;
        } else {
          throw e;
        }
      }
    }
    if (abap.compare.initial(this.mr_attri.get().custom_filter_back) === false) {
      try {
        await abap.statements.cast(temp3, this.mr_attri.get().custom_mapper_back);
        li_serial2.set(temp3);
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          const unique101 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`<p>mo_custom_mapper_back used but it is not serializable, please use if_serializable_object`)});
          unique101.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 163};
          throw unique101;
        } else {
          throw e;
        }
      }
    }
  }
  async clear(INPUT) {
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    let fs_temp4_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}));
    let temp5 = new abap.types.Integer({qualifiedName: "I"});
    let temp6 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {});
    let lr_bind2 = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}));
    temp5.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.mo_app.get().mt_attri,{assigning: fs_temp4_,
      withKey: (i) => {return abap.compare.eq(i.name, val);},
      withKeyValue: [{key: (i) => {return i.name}, value: val}],
      usesTableLine: false,
      withKeySimple: {"name": val}});
    abap.builtin.sy.get().tabix.set(temp5);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
    }
    fs_temp4_.get().check_dissolved.set(abap.builtin.abap_false);
    for await (const unique102 of abap.statements.loop(this.mo_app.get().mt_attri)) {
      lr_bind2.assign(unique102);
      if (abap.compare.cs(lr_bind2.get().name, abap.operators.concat(val,new abap.types.String().set(`-`)))) {
        await abap.statements.deleteInternal(this.mo_app.get().mt_attri);
      }
    }
  }
  async constructor_(INPUT) {
    let app = INPUT?.app;
    if (app?.getQualifiedName === undefined || app.getQualifiedName() !== "Z2UI5_CL_CORE_APP") { app = undefined; }
    if (app === undefined) { app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"}).set(INPUT.app); }
    this.mo_app.set(app);
    return this;
  }
  async get_client_name() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let temp7 = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.builtin.replace({val: this.mr_attri.get().name, sub: new abap.types.String().set(`-`), with: new abap.types.String().set(`/`), occ: abap.IntegerFactory.get(0)}));
    result.set(abap.builtin.replace({val: result, sub: new abap.types.String().set(`>`), with: new abap.types.String().set(``), occ: abap.IntegerFactory.get(0)}));
    if (abap.compare.eq(this.mv_type, abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way)) {
      temp7.set(abap.operators.concat(new abap.types.String().set(`/`),abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_ui5.get().two_way_model));
    } else {
      abap.statements.clear(temp7);
    }
    result.set(abap.operators.concat(temp7,abap.operators.concat(new abap.types.String().set(`/`),result)));
    return result;
  }
  async main(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    if (val === undefined) { val = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.val); }
    let type = INPUT?.type;
    if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "STRING") { type = undefined; }
    if (type === undefined) { type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type); }
    let config = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    if (INPUT && INPUT.config) {config.set(INPUT.config);}
    let temp8 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));
    let lo_model = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ATTRI_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ATTRI_SRV"});
    if (abap.compare.initial((await abap.Classes['Z2UI5_CL_UTIL'].check_bound_a_not_inital({val: config.get().tab}))) === false) {
      result.set((await this.main_cell({val: val, type: type, config: config})));
      return result;
    }
    this.ms_config.set(config);
    this.mv_type.set(type);
    temp8.assign(this.mo_app.get().mt_attri);
    lo_model.set(await (new abap.Classes['Z2UI5_CL_CORE_ATTRI_SRV']()).constructor_({attri: temp8, app: this.mo_app.get().mo_app}));
    this.mr_attri.set((await lo_model.get().attri_search_a_dissolve({val: val})));
    if (abap.compare.initial(this.mr_attri.get().bind_type) === false) {
      await this.check_raise_existing();
    } else {
      await this.check_raise_new();
      await this.update_model_attri();
    }
    result.set(this.mr_attri.get().name_client);
    if (abap.compare.eq(abap.operators.concat(new abap.types.String().set(`/`),abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_ui5.get().two_way_model), result)) {
      const unique103 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`<p>Name of variable not allowed - x is reserved word - use anoter name for your attribute`)});
      unique103.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_bind_srv.clas.abap","INTERNAL_LINE": 255};
      throw unique103;
    }
    if (abap.compare.eq(this.ms_config.get().path_only, abap.builtin.abap_false)) {
      result.set(abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(result,new abap.types.String().set(`}`))));
    }
    return result;
  }
  async main_cell(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let type = INPUT?.type;
    if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "STRING") { type = undefined; }
    if (type === undefined) { type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type); }
    let config = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    if (INPUT && INPUT.config) {config.set(INPUT.config);}
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp9 = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    this.ms_config.set(config);
    this.mv_type.set(type);
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: this.mo_app}));
    abap.statements.clear(temp9);
    temp9.get().path_only.set(abap.builtin.abap_true);
    result.set((await lo_bind.get().main({val: config.get().tab, type: type, config: temp9})));
    result.set((await this.bind_tab_cell({iv_name: result, i_val: val})));
    if (abap.compare.eq(this.ms_config.get().path_only, abap.builtin.abap_false)) {
      result.set(abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(result,new abap.types.String().set(`}`))));
    }
    return result;
  }
  async main_local(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let config = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    if (INPUT && INPUT.config) {config.set(INPUT.config);}
    let temp10 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lv_id = new abap.types.String({qualifiedName: "STRING"});
    let temp11 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      await abap.statements.cast(temp10, (await abap.Classes['Z2UI5_CL_AJSON'].new()));
      lo_json.set(temp10);
      await lo_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.String().set(`/`), iv_val: val});
      if (abap.compare.initial(config.get().custom_mapper) === false) {
        lo_json.set((await lo_json.get().z2ui5_if_ajson$map({ii_mapper: config.get().custom_mapper})));
      } else {
        lo_json.set((await lo_json.get().z2ui5_if_ajson$map({ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_upper_case())})));
      }
      if (abap.compare.initial(config.get().custom_filter) === false) {
        lo_json.set((await lo_json.get().z2ui5_if_ajson$filter({ii_filter: config.get().custom_filter})));
      } else {
        lo_json.set((await lo_json.get().z2ui5_if_ajson$filter({ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_empty_filter())})));
      }
      lv_id.set((abap.builtin.to_upper({val: (await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c22())})));
      abap.statements.clear(temp11);
      temp11.get().name_client.set(new abap.types.String().set(`/${abap.templateFormatting(lv_id)}`));
      temp11.get().name.set(lv_id);
      temp11.get().json_bind_local.set(lo_json);
      temp11.get().bind_type.set(abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_time);
      abap.statements.insertInternal({data: temp11, table: this.mo_app.get().mt_attri});
      result.set(new abap.types.String().set(`/${abap.templateFormatting(lv_id)}`));
      if (abap.compare.eq(this.ms_config.get().path_only, abap.builtin.abap_false)) {
        result.set(abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(result,new abap.types.String().set(`}`))));
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        abap.statements.assert(abap.compare.initial(x));
      } else {
        throw e;
      }
    }
    return result;
  }
  async update_model_attri() {
    let temp12 = new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"});
    this.mr_attri.get().bind_type.set(this.mv_type);
    this.mr_attri.get().view.set(this.ms_config.get().view);
    this.mr_attri.get().custom_filter.set(this.ms_config.get().custom_filter);
    this.mr_attri.get().custom_filter_back.set(this.ms_config.get().custom_filter_back);
    this.mr_attri.get().custom_mapper.set(this.ms_config.get().custom_mapper);
    this.mr_attri.get().custom_mapper_back.set(this.ms_config.get().custom_mapper_back);
    if (abap.compare.initial(this.ms_config.get().view)) {
      temp12.set(abap.Classes['Z2UI5_IF_CLIENT'].z2ui5_if_client$cs_view.get().main);
    } else {
      temp12.set(this.ms_config.get().view);
    }
    this.mr_attri.get().view.set(temp12);
    this.mr_attri.get().name_client.set((await this.get_client_name()));
  }
}
abap.Classes['Z2UI5_CL_CORE_BIND_SRV'] = z2ui5_cl_core_bind_srv;
export {z2ui5_cl_core_bind_srv};
//# sourceMappingURL=z2ui5_cl_core_bind_srv.clas.mjs.map