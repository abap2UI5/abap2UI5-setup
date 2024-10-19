const {z2ui5_cl_abap_api} = await import("./z2ui5_cl_abap_api.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_util.clas.locals_imp.abap
class lcl_range_to_sql {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_UTIL-LCL_RANGE_TO_SQL';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MV_FIELDNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MR_RANGE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "SIGNS": {"type": () => {return new abap.types.Structure({"including": new abap.types.String({qualifiedName: "STRING"}), "excluding": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "OPTIONS": {"type": () => {return new abap.types.Structure({"equal": new abap.types.String({qualifiedName: "STRING"}), "not_equal": new abap.types.String({qualifiedName: "STRING"}), "between": new abap.types.String({qualifiedName: "STRING"}), "not_between": new abap.types.String({qualifiedName: "STRING"}), "contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "not_contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "greater_than": new abap.types.String({qualifiedName: "STRING"}), "greater_equal": new abap.types.String({qualifiedName: "STRING"}), "less_equal": new abap.types.String({qualifiedName: "STRING"}), "less_than": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"QUOTE": {"visibility": "O", "parameters": {"OUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"IV_FIELDNAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "IR_RANGE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "GET_SQL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_fieldname = new abap.types.String({qualifiedName: "STRING"});
    this.mr_range = new abap.types.DataReference(new abap.types.Character(4));
    this.signs = lcl_range_to_sql.signs;
    this.options = lcl_range_to_sql.options;
  }
  async constructor_(INPUT) {
    let iv_fieldname = INPUT?.iv_fieldname;
    let ir_range = INPUT?.ir_range;
    if (ir_range === undefined) { ir_range = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.ir_range); }
    this.mr_range.set(ir_range);
    this.mv_fieldname.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.to_upper({val: iv_fieldname}))}`));
    return this;
  }
  async get_sql() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let fs_lt_range_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let fs_ls_range_item_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_sign_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_option_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_low_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_lv_high_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.assign({target: fs_lt_range_, source: this.me.get().mr_range.dereference()});
    temp1.set(abap.builtin.boolc(abap.compare.initial(fs_lt_range_)));
    if (abap.compare.eq(temp1, abap.builtin.abap_true)) {
      return result;
    }
    result.set(new abap.types.String().set(`(`));
    for await (const unique64 of abap.statements.loop(fs_lt_range_)) {
      fs_ls_range_item_.assign(unique64);
      abap.statements.assign({component: new abap.types.Character(4).set('SIGN'), target: fs_lv_sign_, source: fs_ls_range_item_});
      abap.statements.assign({component: new abap.types.Character(6).set('OPTION'), target: fs_lv_option_, source: fs_ls_range_item_});
      abap.statements.assign({component: new abap.types.Character(3).set('LOW'), target: fs_lv_low_, source: fs_ls_range_item_});
      abap.statements.assign({component: new abap.types.Character(4).set('HIGH'), target: fs_lv_high_, source: fs_ls_range_item_});
      if (abap.compare.ne(abap.builtin.sy.get().tabix, abap.IntegerFactory.get(1))) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} OR`));
      }
      if (abap.compare.eq(fs_lv_sign_, lcl_range_to_sql.signs.get().excluding)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} NOT`));
      }
      result.set(new abap.types.String().set(`${abap.templateFormatting(result)} ${abap.templateFormatting(this.me.get().mv_fieldname)}`));
      let unique65 = fs_lv_option_;
      if (abap.compare.eq(unique65, lcl_range_to_sql.options.get().equal) || abap.compare.eq(unique65, lcl_range_to_sql.options.get().not_equal) || abap.compare.eq(unique65, lcl_range_to_sql.options.get().greater_than) || abap.compare.eq(unique65, lcl_range_to_sql.options.get().greater_equal) || abap.compare.eq(unique65, lcl_range_to_sql.options.get().less_equal) || abap.compare.eq(unique65, lcl_range_to_sql.options.get().less_than)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} ${abap.templateFormatting(fs_lv_option_)} ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))}`));
      } else if (abap.compare.eq(unique65, lcl_range_to_sql.options.get().between)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} BETWEEN ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))} AND ${abap.templateFormatting((await this.quote({val: fs_lv_high_})))}`));
      } else if (abap.compare.eq(unique65, lcl_range_to_sql.options.get().not_between)) {
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} NOT BETWEEN ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))} AND ${abap.templateFormatting((await this.quote({val: fs_lv_high_})))}`));
      } else if (abap.compare.eq(unique65, lcl_range_to_sql.options.get().contains_pattern)) {
        abap.statements.translate(fs_lv_low_, '*%');
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} LIKE ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))}`));
      } else if (abap.compare.eq(unique65, lcl_range_to_sql.options.get().not_contains_pattern)) {
        abap.statements.translate(fs_lv_low_, '*%');
        result.set(new abap.types.String().set(`${abap.templateFormatting(result)} NOT LIKE ${abap.templateFormatting((await this.quote({val: fs_lv_low_})))}`));
      }
    }
    result.set(new abap.types.String().set(`${abap.templateFormatting(result)} )`));
    return result;
  }
  async quote(INPUT) {
    return lcl_range_to_sql.quote(INPUT);
  }
  static async quote(INPUT) {
    let out = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    out.set(new abap.types.String().set(`'${abap.templateFormatting(abap.builtin.replace({val: val, sub: new abap.types.String().set(`'`), with: new abap.types.String().set(`''`), occ: abap.IntegerFactory.get(0)}))}'`));
    return out;
  }
}
abap.Classes['CLAS-Z2UI5_CL_UTIL-LCL_RANGE_TO_SQL'] = lcl_range_to_sql;
lcl_range_to_sql.signs = new abap.types.Structure({"including": new abap.types.String({qualifiedName: "STRING"}), "excluding": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
lcl_range_to_sql.signs.get().including.set('I');
lcl_range_to_sql.signs.get().excluding.set('E');
lcl_range_to_sql.options = new abap.types.Structure({"equal": new abap.types.String({qualifiedName: "STRING"}), "not_equal": new abap.types.String({qualifiedName: "STRING"}), "between": new abap.types.String({qualifiedName: "STRING"}), "not_between": new abap.types.String({qualifiedName: "STRING"}), "contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "not_contains_pattern": new abap.types.String({qualifiedName: "STRING"}), "greater_than": new abap.types.String({qualifiedName: "STRING"}), "greater_equal": new abap.types.String({qualifiedName: "STRING"}), "less_equal": new abap.types.String({qualifiedName: "STRING"}), "less_than": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
lcl_range_to_sql.options.get().equal.set('EQ');
lcl_range_to_sql.options.get().not_equal.set('NE');
lcl_range_to_sql.options.get().between.set('BT');
lcl_range_to_sql.options.get().not_between.set('NB');
lcl_range_to_sql.options.get().contains_pattern.set('CP');
lcl_range_to_sql.options.get().not_contains_pattern.set('NP');
lcl_range_to_sql.options.get().greater_than.set('GT');
lcl_range_to_sql.options.get().greater_equal.set('GE');
lcl_range_to_sql.options.get().less_equal.set('LE');
lcl_range_to_sql.options.get().less_than.set('LT');
export {lcl_range_to_sql};
//# sourceMappingURL=z2ui5_cl_util.clas.locals.mjs.map