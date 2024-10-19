const {z2ui5_cl_ajson_filter_lib} = await import("./z2ui5_cl_ajson_filter_lib.clas.mjs");
const {lcl_empty_filter,lcl_paths_filter,lcl_and_filter} = await import("./z2ui5_cl_ajson_filter_lib.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_filter_lib.clas.testclasses.abap
class ltcl_filters_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LTCL_FILTERS_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"EMPTY_FILTER_SIMPLE": {"visibility": "I", "parameters": {}},
  "EMPTY_FILTER_DEEP": {"visibility": "I", "parameters": {}},
  "PATH_FILTER": {"visibility": "I", "parameters": {}},
  "PATH_FILTER_STRING": {"visibility": "I", "parameters": {}},
  "PATH_FILTER_W_PATTERNS": {"visibility": "I", "parameters": {}},
  "PATH_FILTER_DEEP": {"visibility": "I", "parameters": {}},
  "AND_FILTER": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async empty_filter_simple() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(1).set('1')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/b'), iv_val: new abap.types.Character(1).set('')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/c'), iv_val: new abap.types.Character(1).set('3')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/d'), iv_val: abap.IntegerFactory.get(0)});
    li_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_empty_filter())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_filtered.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(17).set('{"a":"1","c":"3"}')});
  }
  async empty_filter_deep() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(1).set('1')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/b/c'), iv_val: new abap.types.Character(1).set('')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/b/d'), iv_val: abap.IntegerFactory.get(0)});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/d/e'), iv_val: abap.IntegerFactory.get(0)});
    li_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_empty_filter())})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_filtered.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(9).set('{"a":"1"}')});
  }
  async path_filter() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lt_paths = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    abap.statements.append({source: new abap.types.Character(4).set('/b/c'), target: lt_paths});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(1).set('1')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/b/c'), iv_val: new abap.types.Character(1).set('2')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/c/d'), iv_val: new abap.types.Character(1).set('3')});
    li_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_path_filter({it_skip_paths: lt_paths}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_filtered.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(30).set('{"a":"1","b":{},"c":{"d":"3"}}')});
  }
  async path_filter_string() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(1).set('1')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/b/c'), iv_val: new abap.types.Character(1).set('2')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/c/d'), iv_val: new abap.types.Character(1).set('3')});
    li_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_path_filter({iv_skip_paths: new abap.types.Character(9).set('/b/c,/c/d')}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_filtered.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(23).set('{"a":"1","b":{},"c":{}}')});
  }
  async path_filter_w_patterns() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(6).set('/@meta'), iv_val: new abap.types.Character(4).set('meta')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(1).set('1')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/b/c'), iv_val: new abap.types.Character(1).set('2')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/c/d'), iv_val: new abap.types.Character(1).set('3')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(9).set('/c/@meta2'), iv_val: new abap.types.Character(5).set('meta2')});
    li_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_path_filter({iv_skip_paths: new abap.types.Character(9).set('/*/c,*/@*'), iv_pattern_search: abap.builtin.abap_true}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_filtered.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(30).set('{"a":"1","b":{},"c":{"d":"3"}}')});
  }
  async path_filter_deep() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lt_paths = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    abap.statements.append({source: new abap.types.Character(2).set('/b'), target: lt_paths});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(1).set('1')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/b/c'), iv_val: new abap.types.Character(1).set('2')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/b/d'), iv_val: new abap.types.Character(1).set('x')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(4).set('/c/d'), iv_val: new abap.types.Character(1).set('3')});
    li_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_path_filter({it_skip_paths: lt_paths}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_filtered.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(23).set('{"a":"1","c":{"d":"3"}}')});
  }
  async and_filter() {
    let li_json = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let li_json_filtered = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lt_filters = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "z2ui5_if_ajson_filter=>ty_filter_tab");
    abap.statements.append({source: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_empty_filter()), target: lt_filters});
    abap.statements.append({source: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_path_filter({iv_skip_paths: new abap.types.Character(2).set('/c')})), target: lt_filters});
    li_json.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/a'), iv_val: new abap.types.Character(1).set('1')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/b'), iv_val: new abap.types.Character(1).set('')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/c'), iv_val: new abap.types.Character(1).set('3')});
    await li_json.get().z2ui5_if_ajson$set({iv_path: new abap.types.Character(2).set('/d'), iv_val: abap.IntegerFactory.get(0)});
    li_json_filtered.set((await abap.Classes['Z2UI5_CL_AJSON'].create_from({ii_source_json: li_json, ii_filter: (await abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'].create_and_filter({it_filters: lt_filters}))})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await li_json_filtered.get().z2ui5_if_ajson$stringify()), exp: new abap.types.Character(9).set('{"a":"1"}')});
  }
}
abap.Classes['CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LTCL_FILTERS_TEST'] = ltcl_filters_test;
export {ltcl_filters_test};
//# sourceMappingURL=z2ui5_cl_ajson_filter_lib.clas.testclasses.mjs.map