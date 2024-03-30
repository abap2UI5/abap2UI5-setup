const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_table.clas.abap
class cl_salv_table {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_TABLE';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"C_FUNCTIONS_ALL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"FACTORY": {"visibility": "U", "parameters": {"LIST_DISPLAY": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "R_CONTAINER": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "R_SALV_TABLE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "T_TABLE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "GET_SELECTIONS": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_TABLE", RTTIName: "\\CLASS=CL_SALV_TABLE"});}, "is_optional": " "}}},
  "SET_SELECTED_ROWS": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SET_SELECTION_MODE": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "GET_SELECTED_ROWS": {"visibility": "U", "parameters": {"ROWS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "I"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_salv_table=>ty_rows");}, "is_optional": " "}}},
  "CLOSE_SCREEN": {"visibility": "U", "parameters": {}},
  "REFRESH": {"visibility": "U", "parameters": {"REFRESH_MODE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "DISPLAY": {"visibility": "U", "parameters": {}},
  "IS_OFFLINE": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "GET_METADATA": {"visibility": "U", "parameters": {}},
  "GET_LAYOUT": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_LAYOUT", RTTIName: "\\CLASS=CL_SALV_LAYOUT"});}, "is_optional": " "}}},
  "SET_SCREEN_STATUS": {"visibility": "U", "parameters": {"PFSTATUS": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "SET_FUNCTIONS": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "REPORT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SET_SCREEN_POPUP": {"visibility": "U", "parameters": {"START_COLUMN": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "END_COLUMN": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "START_LINE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "END_LINE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "GET_EVENT": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_EVENTS_TABLE", RTTIName: "\\CLASS=CL_SALV_EVENTS_TABLE"});}, "is_optional": " "}}},
  "GET_DISPLAY_SETTINGS": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_TABLE", RTTIName: "\\CLASS=CL_SALV_TABLE"});}, "is_optional": " "}}},
  "SET_STRIPED_PATTERN": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SET_LIST_HEADER": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SET_TOP_OF_LIST": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "GET_COLUMNS": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_COLUMNS_TABLE", RTTIName: "\\CLASS=CL_SALV_COLUMNS_TABLE"});}, "is_optional": " "}}},
  "GET_FUNCTIONS": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_FUNCTIONS_LIST", RTTIName: "\\CLASS=CL_SALV_FUNCTIONS_LIST"});}, "is_optional": " "}}},
  "GET_AGGREGATIONS": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_AGGREGATIONS", RTTIName: "\\CLASS=CL_SALV_AGGREGATIONS"});}, "is_optional": " "}}},
  "GET_FILTERS": {"visibility": "U", "parameters": {"FOO": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_FILTERS", RTTIName: "\\CLASS=CL_SALV_FILTERS"});}, "is_optional": " "}}},
  "TO_XML": {"visibility": "U", "parameters": {"XML": {"type": () => {return new abap.types.XString({qualifiedName: "XSTRING"});}, "is_optional": " "}, "XML_TYPE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "GET_SORTS": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_SORTS", RTTIName: "\\CLASS=CL_SALV_SORTS"});}, "is_optional": " "}}},
  "GET_FUNCTIONAL_SETTINGS": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_FUNCTIONAL_SETTINGS", RTTIName: "\\CLASS=CL_SALV_FUNCTIONAL_SETTINGS"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.c_functions_all = cl_salv_table.c_functions_all;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_sorts() {
    let value = new abap.types.ABAPObject({qualifiedName: "CL_SALV_SORTS", RTTIName: "\\CLASS=CL_SALV_SORTS"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async get_functional_settings() {
    let value = new abap.types.ABAPObject({qualifiedName: "CL_SALV_FUNCTIONAL_SETTINGS", RTTIName: "\\CLASS=CL_SALV_FUNCTIONAL_SETTINGS"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async set_selected_rows(INPUT) {
    let val = INPUT?.val;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async get_layout() {
    let value = new abap.types.ABAPObject({qualifiedName: "CL_SALV_LAYOUT", RTTIName: "\\CLASS=CL_SALV_LAYOUT"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async to_xml(INPUT) {
    let xml = new abap.types.XString({qualifiedName: "XSTRING"});
    let xml_type = INPUT?.xml_type;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return xml;
  }
  async get_filters() {
    let foo = new abap.types.ABAPObject({qualifiedName: "CL_SALV_FILTERS", RTTIName: "\\CLASS=CL_SALV_FILTERS"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return foo;
  }
  async get_aggregations() {
    let value = new abap.types.ABAPObject({qualifiedName: "CL_SALV_AGGREGATIONS", RTTIName: "\\CLASS=CL_SALV_AGGREGATIONS"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async get_functions() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_FUNCTIONS_LIST", RTTIName: "\\CLASS=CL_SALV_FUNCTIONS_LIST"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async get_selected_rows() {
    let rows = abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "I"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_salv_table=>ty_rows");
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return rows;
  }
  async get_metadata() {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async set_selection_mode(INPUT) {
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "I") { val = undefined; }
    if (val === undefined) { val = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.val); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async set_striped_pattern(INPUT) {
    let val = INPUT?.val;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async set_list_header(INPUT) {
    let val = INPUT?.val;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async factory(INPUT) {
    return cl_salv_table.factory(INPUT);
  }
  static async factory(INPUT) {
    let list_display = INPUT?.list_display || new abap.types.Character(4);
    let r_container = INPUT?.r_container || new abap.types.Character(4);
    let r_salv_table = INPUT?.r_salv_table || new abap.types.Character(4);
    let t_table = new abap.types.Character(4);
    if (INPUT && INPUT.t_table) {t_table = INPUT.t_table;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async is_offline() {
    let value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async get_selections() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_TABLE", RTTIName: "\\CLASS=CL_SALV_TABLE"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async close_screen() {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async refresh(INPUT) {
    let refresh_mode = INPUT?.refresh_mode || new abap.types.Character(4);
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async display() {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async set_screen_status(INPUT) {
    let pfstatus = INPUT?.pfstatus;
    let set_functions = INPUT?.set_functions || new abap.types.Character(4);
    let report = INPUT?.report;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('TODO')));
  }
  async set_screen_popup(INPUT) {
    let start_column = INPUT?.start_column;
    if (start_column?.getQualifiedName === undefined || start_column.getQualifiedName() !== "I") { start_column = undefined; }
    if (start_column === undefined) { start_column = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.start_column); }
    let end_column = INPUT?.end_column;
    if (end_column?.getQualifiedName === undefined || end_column.getQualifiedName() !== "I") { end_column = undefined; }
    if (end_column === undefined) { end_column = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.end_column); }
    let start_line = INPUT?.start_line;
    if (start_line?.getQualifiedName === undefined || start_line.getQualifiedName() !== "I") { start_line = undefined; }
    if (start_line === undefined) { start_line = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.start_line); }
    let end_line = INPUT?.end_line;
    if (end_line?.getQualifiedName === undefined || end_line.getQualifiedName() !== "I") { end_line = undefined; }
    if (end_line === undefined) { end_line = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.end_line); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('TODO')));
  }
  async get_event() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_EVENTS_TABLE", RTTIName: "\\CLASS=CL_SALV_EVENTS_TABLE"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('TODO')));
    return val;
  }
  async get_display_settings() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_TABLE", RTTIName: "\\CLASS=CL_SALV_TABLE"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('TODO')));
    return val;
  }
  async set_top_of_list(INPUT) {
    let val = INPUT?.val;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('TODO')));
  }
  async get_columns() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_COLUMNS_TABLE", RTTIName: "\\CLASS=CL_SALV_COLUMNS_TABLE"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('TODO')));
    return val;
  }
}
abap.Classes['CL_SALV_TABLE'] = cl_salv_table;
cl_salv_table.c_functions_all = new abap.types.Integer({qualifiedName: "I"});
cl_salv_table.c_functions_all.set(1);
cl_salv_table.ty_rows = abap.types.TableFactory.construct(new abap.types.Integer({qualifiedName: "I"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_salv_table=>ty_rows");
export {cl_salv_table};
//# sourceMappingURL=cl_salv_table.clas.mjs.map