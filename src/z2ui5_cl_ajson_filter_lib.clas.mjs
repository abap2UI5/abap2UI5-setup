await import("./z2ui5_cl_ajson_filter_lib.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_filter_lib.clas.abap
class z2ui5_cl_ajson_filter_lib {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_AJSON_FILTER_LIB';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"CREATE_EMPTY_FILTER": {"visibility": "U", "parameters": {"RI_FILTER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});}, "is_optional": " "}}},
  "CREATE_PATH_FILTER": {"visibility": "U", "parameters": {"RI_FILTER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});}, "is_optional": " "}, "IT_SKIP_PATHS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "IV_SKIP_PATHS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_PATTERN_SEARCH": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "CREATE_AND_FILTER": {"visibility": "U", "parameters": {"RI_FILTER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});}, "is_optional": " "}, "IT_FILTERS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "z2ui5_if_ajson_filter=>ty_filter_tab");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async create_and_filter(INPUT) {
    return z2ui5_cl_ajson_filter_lib.create_and_filter(INPUT);
  }
  static async create_and_filter(INPUT) {
    let ri_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    let it_filters = INPUT?.it_filters;
    if (it_filters?.getQualifiedName === undefined || it_filters.getQualifiedName() !== "Z2UI5_IF_AJSON_FILTER=>TY_FILTER_TAB") { it_filters = undefined; }
    if (it_filters === undefined) { it_filters = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["TABLE_LINE"]},"secondary":[]}, "z2ui5_if_ajson_filter=>ty_filter_tab").set(INPUT.it_filters); }
    ri_filter.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_AND_FILTER']()).constructor_({it_filters: it_filters}));
    return ri_filter;
  }
  async create_empty_filter() {
    return z2ui5_cl_ajson_filter_lib.create_empty_filter();
  }
  static async create_empty_filter() {
    let ri_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    ri_filter.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_EMPTY_FILTER']()).constructor_());
    return ri_filter;
  }
  async create_path_filter(INPUT) {
    return z2ui5_cl_ajson_filter_lib.create_path_filter(INPUT);
  }
  static async create_path_filter(INPUT) {
    let ri_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    let it_skip_paths = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (INPUT && INPUT.it_skip_paths) {it_skip_paths.set(INPUT.it_skip_paths);}
    let iv_skip_paths = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_skip_paths) {iv_skip_paths.set(INPUT.iv_skip_paths);}
    let iv_pattern_search = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_pattern_search) {iv_pattern_search.set(INPUT.iv_pattern_search);}
    if (INPUT === undefined || INPUT.iv_pattern_search === undefined) {iv_pattern_search = abap.builtin.abap_false;}
    ri_filter.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_FILTER_LIB-LCL_PATHS_FILTER']()).constructor_({iv_pattern_search: iv_pattern_search, it_skip_paths: it_skip_paths, iv_skip_paths: iv_skip_paths}));
    return ri_filter;
  }
}
abap.Classes['Z2UI5_CL_AJSON_FILTER_LIB'] = z2ui5_cl_ajson_filter_lib;
export {z2ui5_cl_ajson_filter_lib};
//# sourceMappingURL=z2ui5_cl_ajson_filter_lib.clas.mjs.map