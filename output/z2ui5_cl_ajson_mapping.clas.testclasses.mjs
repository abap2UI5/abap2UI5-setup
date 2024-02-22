const {z2ui5_cl_ajson_mapping} = await import("./z2ui5_cl_ajson_mapping.clas.mjs");
const {lcl_mapping_fields,lcl_rename,lcl_mapping_to_upper,lcl_mapping_to_lower,lcl_mapping_camel,lcl_compound_mapper,lcl_to_snake,lcl_to_camel} = await import("./z2ui5_cl_ajson_mapping.clas.locals.mjs");
await import("./z2ui5_cl_ajson_mapping.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_mapping.clas.testclasses.abap
class ltcl_test_mappers {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_TEST_MAPPERS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"FROM_JSON_TO_JSON": {"visibility": "I", "parameters": {}},
  "TO_ABAP": {"visibility": "I", "parameters": {}},
  "TO_JSON": {"visibility": "I", "parameters": {}},
  "TO_JSON_NESTED_STRUC": {"visibility": "I", "parameters": {}},
  "TO_JSON_NESTED_TABLE": {"visibility": "I", "parameters": {}},
  "TO_JSON_FIRST_LOWER": {"visibility": "I", "parameters": {}},
  "TO_SNAKE": {"visibility": "I", "parameters": {}},
  "TO_CAMEL": {"visibility": "I", "parameters": {}},
  "TO_CAMEL_1ST_UPPER": {"visibility": "I", "parameters": {}},
  "RENAME_BY_ATTR": {"visibility": "I", "parameters": {}},
  "RENAME_BY_PATH": {"visibility": "I", "parameters": {}},
  "RENAME_BY_PATTERN": {"visibility": "I", "parameters": {}},
  "COMPOUND_MAPPER": {"visibility": "I", "parameters": {}},
  "TEST_TO_UPPER": {"visibility": "I", "parameters": {}},
  "TEST_TO_LOWER": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async from_json_to_json() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.String().set(`{"fieldData":"field_value"}`), ii_custom_mapping: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_camel_case({iv_first_json_upper: abap.builtin.abap_false}))})));
    await lo_ajson.get().z2ui5_if_ajson$set_string({iv_path: new abap.types.String().set(`/fieldData`), iv_val: new abap.types.Character(1).set('E')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ajson.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(17).set('{"fieldData":"E"}')});
  }
  async to_abap() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let ls_result = new abap.types.Structure({"field_data": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_camel_case()));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(27).set('{"FieldData":"field_value"}'), ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$to_abap({ev_container: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_result.get().field_data, exp: new abap.types.Character(11).set('field_value')});
  }
  async to_json() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let ls_result = new abap.types.Structure({"field_data": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_camel_case({iv_first_json_upper: abap.builtin.abap_false})));
    ls_result.get().field_data.set(new abap.types.Character(11).set('field_value'));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ajson.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(27).set('{"fieldData":"field_value"}')});
  }
  async to_json_nested_struc() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let ls_result = new abap.types.Structure({"field_data": new abap.types.String({qualifiedName: "STRING"}), "struc_data": new abap.types.Structure({"field_more": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {})}, undefined, undefined, {}, {});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_camel_case({iv_first_json_upper: abap.builtin.abap_false})));
    ls_result.get().field_data.set(new abap.types.Character(11).set('field_value'));
    ls_result.get().struc_data.get().field_more.set(new abap.types.Character(10).set('field_more'));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ajson.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(66).set('{"fieldData":"field_value","strucData":{"fieldMore":"field_more"}}')});
  }
  async to_json_nested_table() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let ls_result = new abap.types.Structure({"field_data": new abap.types.String({qualifiedName: "STRING"}), "struc_data": new abap.types.Structure({"field_more": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, undefined, undefined, {}, {})}, undefined, undefined, {}, {});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_camel_case({iv_first_json_upper: abap.builtin.abap_false})));
    ls_result.get().field_data.set(new abap.types.Character(11).set('field_value'));
    lv_value.set(new abap.types.Character(10).set('field_more'));
    abap.statements.insertInternal({data: lv_value, table: ls_result.get().struc_data.get().field_more});
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ajson.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(68).set('{"fieldData":"field_value","strucData":{"fieldMore":["field_more"]}}')});
  }
  async to_json_first_lower() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let ls_result = new abap.types.Structure({"field_data": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_camel_case()));
    ls_result.get().field_data.set(new abap.types.Character(11).set('field_value'));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ajson.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(27).set('{"FieldData":"field_value"}')});
  }
  async test_to_upper() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(19).set('{"a":1,"b":{"c":2}}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_upper_case())})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(19).set('{"A":1,"B":{"C":2}}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(19).set('{"a":1,"b":{"c":2}}')})).get().z2ui5_if_ajson$map({ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_upper_case())})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(19).set('{"A":1,"B":{"C":2}}')});
  }
  async test_to_lower() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(19).set('{"A":1,"B":{"C":2}}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(19).set('{"a":1,"b":{"c":2}}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(19).set('{"A":1,"B":{"C":2}}')})).get().z2ui5_if_ajson$map({ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case())})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(19).set('{"a":1,"b":{"c":2}}')});
  }
  async rename_by_attr() {
    let lt_map = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");
    let fs_i_ = new abap.types.FieldSymbol(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}));
    fs_i_.assign(lt_map.appendInitial());
    fs_i_.get().from.set(new abap.types.Character(1).set('a'));
    fs_i_.get().to.set(new abap.types.Character(1).set('x'));
    fs_i_.assign(lt_map.appendInitial());
    fs_i_.get().from.set(new abap.types.Character(1).set('c'));
    fs_i_.get().to.set(new abap.types.Character(1).set('y'));
    fs_i_.assign(lt_map.appendInitial());
    fs_i_.get().from.set(new abap.types.Character(1).set('d'));
    fs_i_.get().to.set(new abap.types.Character(1).set('z'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(31).set('{"a":1,"b":{"c":2},"d":{"e":3}}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_rename({it_rename_map: lt_map}))})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(31).set('{"b":{"y":2},"x":1,"z":{"e":3}}')});
  }
  async rename_by_path() {
    let lt_map = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");
    let fs_i_ = new abap.types.FieldSymbol(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}));
    fs_i_.assign(lt_map.appendInitial());
    fs_i_.get().from.set(new abap.types.Character(4).set('/b/a'));
    fs_i_.get().to.set(new abap.types.Character(1).set('x'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(31).set('{"a":1,"b":{"a":2},"c":{"a":3}}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_rename({it_rename_map: lt_map, iv_rename_by: abap.Classes['Z2UI5_CL_AJSON_MAPPING'].rename_by.get().full_path}))})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(31).set('{"a":1,"b":{"x":2},"c":{"a":3}}')});
  }
  async rename_by_pattern() {
    let lt_map = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");
    let fs_i_ = new abap.types.FieldSymbol(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}));
    fs_i_.assign(lt_map.appendInitial());
    fs_i_.get().from.set(new abap.types.Character(8).set('/*/this*'));
    fs_i_.get().to.set(new abap.types.Character(1).set('x'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(46).set('{"andthisnot":1,"b":{"thisone":2},"c":{"a":3}}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_rename({it_rename_map: lt_map, iv_rename_by: abap.Classes['Z2UI5_CL_AJSON_MAPPING'].rename_by.get().pattern}))})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(40).set('{"andthisnot":1,"b":{"x":2},"c":{"a":3}}')});
  }
  async compound_mapper() {
    let lt_map = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");
    let fs_i_ = new abap.types.FieldSymbol(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}));
    fs_i_.assign(lt_map.appendInitial());
    fs_i_.get().from.set(new abap.types.Character(4).set('/b/a'));
    fs_i_.get().to.set(new abap.types.Character(1).set('x'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(31).set('{"a":1,"b":{"a":2},"c":{"a":3}}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_compound_mapper({ii_mapper1: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_rename({it_rename_map: lt_map, iv_rename_by: abap.Classes['Z2UI5_CL_AJSON_MAPPING'].rename_by.get().full_path})), ii_mapper2: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_upper_case())}))})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(31).set('{"A":1,"B":{"X":2},"C":{"A":3}}')});
  }
  async to_snake() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(37).set('{"aB":1,"BbC":2,"cD":{"xY":3},"ZZ":4}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_to_snake_case())})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(41).set('{"a_b":1,"bb_c":2,"c_d":{"x_y":3},"zz":4}')});
  }
  async to_camel() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(41).set('{"a_b":1,"bb_c":2,"c_d":{"x_y":3},"zz":4}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_to_camel_case())})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(37).set('{"aB":1,"bbC":2,"cD":{"xY":3},"zz":4}')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(10).set('{"a__b":1}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_to_camel_case())})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(9).set('{"a_b":1}')});
  }
  async to_camel_1st_upper() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await (await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(45).set('{"aj_bc":1,"bb_c":2,"c_d":{"xq_yq":3},"zz":4}')})), ii_mapper: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_to_camel_case({iv_first_json_upper: abap.builtin.abap_true}))})).get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(41).set('{"AjBc":1,"BbC":2,"CD":{"XqYq":3},"Zz":4}')});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_TEST_MAPPERS'] = ltcl_test_mappers;
class ltcl_fields {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_FIELDS';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TO_JSON_WITHOUT_PATH": {"visibility": "I", "parameters": {}},
  "TO_JSON_WITH_PATH": {"visibility": "I", "parameters": {}},
  "TO_ABAP": {"visibility": "I", "parameters": {}},
  "TO_JSON": {"visibility": "I", "parameters": {"RV_RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async to_abap() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let lt_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    let ls_mapping_field = new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {});
    let ls_result = new abap.types.Structure({"abap_field": new abap.types.String({qualifiedName: "STRING"}), "field": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    abap.statements.clear(ls_mapping_field);
    ls_mapping_field.get().abap.set(new abap.types.Character(10).set('ABAP_FIELD'));
    ls_mapping_field.get().json.set(new abap.types.Character(10).set('json.field'));
    abap.statements.insertInternal({data: ls_mapping_field, table: lt_mapping_fields});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_field_mapping({it_mapping_fields: lt_mapping_fields})));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: new abap.types.Character(44).set('{"field":"value","json.field":"field_value"}'), ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$to_abap({ev_container: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_result.get().abap_field, exp: new abap.types.Character(11).set('field_value')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: ls_result.get().field, exp: new abap.types.Character(5).set('value')});
  }
  async to_json_without_path() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await this.to_json({iv_path: new abap.types.String().set(`/`)})), exp: new abap.types.Character(44).set('{"field":"value","json.field":"field_value"}')});
  }
  async to_json_with_path() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await this.to_json({iv_path: new abap.types.Character(11).set('/samplePath')})), exp: new abap.types.Character(59).set('{"samplePath":{"field":"value","json.field":"field_value"}}')});
  }
  async to_json(INPUT) {
    let rv_result = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = INPUT?.iv_path;
    if (iv_path?.getQualifiedName === undefined || iv_path.getQualifiedName() !== "STRING") { iv_path = undefined; }
    if (iv_path === undefined) { iv_path = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_path); }
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let lt_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    let ls_mapping_field = new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {});
    let ls_result = new abap.types.Structure({"abap_field": new abap.types.String({qualifiedName: "STRING"}), "field": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    abap.statements.clear(ls_mapping_field);
    ls_mapping_field.get().abap.set(new abap.types.Character(10).set('ABAP_FIELD'));
    ls_mapping_field.get().json.set(new abap.types.Character(10).set('json.field'));
    abap.statements.insertInternal({data: ls_mapping_field, table: lt_mapping_fields});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_field_mapping({it_mapping_fields: lt_mapping_fields})));
    ls_result.get().abap_field.set(new abap.types.Character(11).set('field_value'));
    ls_result.get().field.set(new abap.types.Character(5).set('value'));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$set({iv_path: iv_path, iv_val: ls_result});
    rv_result.set((await lo_ajson.get().z2ui5_if_ajson$stringify()));
    return rv_result;
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_FIELDS'] = ltcl_fields;
class ltcl_to_lower {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_TO_LOWER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TO_JSON": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async to_json() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let ls_result = new abap.types.Structure({"field_data": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_lower_case()));
    ls_result.get().field_data.set(new abap.types.Character(11).set('field_value'));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ajson.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(28).set('{"field_data":"field_value"}')});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_TO_LOWER'] = ltcl_to_lower;
class ltcl_to_upper {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_TO_UPPER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"TO_JSON": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async to_json() {
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_AJSON", RTTIName: "\\CLASS=Z2UI5_CL_AJSON"});
    let li_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let ls_result = new abap.types.Structure({"field_data": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    li_mapping.set((await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_upper_case()));
    ls_result.get().field_data.set(new abap.types.Character(11).set('field_value'));
    lo_ajson.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: li_mapping})));
    await lo_ajson.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(1).set('/'), iv_val: ls_result});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await lo_ajson.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(28).set('{"FIELD_DATA":"field_value"}')});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LTCL_TO_UPPER'] = ltcl_to_upper;
export {ltcl_test_mappers, ltcl_fields, ltcl_to_lower, ltcl_to_upper};
//# sourceMappingURL=z2ui5_cl_ajson_mapping.clas.testclasses.mjs.map