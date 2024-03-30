const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_columns_table.clas.abap
class cl_salv_columns_table {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_SALV_COLUMNS_TABLE';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"SET_CELL_TYPE_COLUMN": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_OPTIMIZE": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "SET_COLOR_COLUMN": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_COLUMN": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_SALV_COLUMN", RTTIName: "\\CLASS=CL_SALV_COLUMN"});}, "is_optional": " "}, "COLUMNNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_EXCEPTION_COLUMN": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SET_HYPERLINK_ENTRY_COLUMN": {"visibility": "U", "parameters": {"VALUE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async set_hyperlink_entry_column(INPUT) {
    let value = INPUT?.value;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async get_column(INPUT) {
    let value = new abap.types.ABAPObject({qualifiedName: "CL_SALV_COLUMN", RTTIName: "\\CLASS=CL_SALV_COLUMN"});
    let columnname = INPUT?.columnname;
    if (columnname?.getQualifiedName === undefined || columnname.getQualifiedName() !== "STRING") { columnname = undefined; }
    if (columnname === undefined) { columnname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.columnname); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async set_exception_column(INPUT) {
    let value = INPUT?.value;
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async set_cell_type_column(INPUT) {
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async set_optimize(INPUT) {
    let value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  async get() {
    let value = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async set_color_column(INPUT) {
    let value = INPUT?.value;
    if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
    if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_SALV_COLUMNS_TABLE'] = cl_salv_columns_table;
export {cl_salv_columns_table};
//# sourceMappingURL=cl_salv_columns_table.clas.mjs.map