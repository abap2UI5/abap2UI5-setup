const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_exceptional_values.clas.abap
class cl_abap_exceptional_values {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_ABAP_EXCEPTIONAL_VALUES';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_MAX_VALUE": {"visibility": "U", "parameters": {"OUT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "IN_": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "GET_MIN_VALUE": {"visibility": "U", "parameters": {"OUT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}, "IN_": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_max_value(INPUT) {
    return cl_abap_exceptional_values.get_max_value(INPUT);
  }
  static async get_max_value(INPUT) {
    let out = new abap.types.DataReference(new abap.types.Character(4));
    let in_ = INPUT?.in_;
    let lv_type = new abap.types.Character(1, {});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    let lv_decimals = new abap.types.Integer({qualifiedName: "I"});
    let fs_out_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.describe({field: in_, type: lv_type});
    let unique198 = lv_type;
    if (abap.compare.eq(unique198, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int)) {
      out.assign(abap.Classes['CL_ABAP_MATH'].max_int4);
    } else if (abap.compare.eq(unique198, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      abap.statements.describe({field: in_, length: lv_length, decimals: lv_decimals, mode: 'BYTE'});
      abap.statements.createData(out,{"typeName": "P","length": lv_length,"decimals": lv_decimals});
      abap.statements.assign({target: fs_out_, source: (out).dereference()});
      if (abap.compare.eq(lv_length, abap.IntegerFactory.get(3)) && abap.compare.eq(lv_decimals, abap.IntegerFactory.get(1))) {
        fs_out_.set(new abap.types.Character(6).set('9999.9'));
      } else if (abap.compare.eq(lv_length, abap.IntegerFactory.get(4)) && abap.compare.eq(lv_decimals, abap.IntegerFactory.get(1))) {
        fs_out_.set(new abap.types.Character(8).set('999999.9'));
      } else if (abap.compare.eq(lv_length, abap.IntegerFactory.get(7)) && abap.compare.eq(lv_decimals, abap.IntegerFactory.get(3))) {
        fs_out_.set(new abap.types.Character(14).set('9999999999.999'));
      } else {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
      }
    } else {
      console.dir(INPUT);
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    }
    return out;
  }
  async get_min_value(INPUT) {
    return cl_abap_exceptional_values.get_min_value(INPUT);
  }
  static async get_min_value(INPUT) {
    let out = new abap.types.DataReference(new abap.types.Character(4));
    let in_ = INPUT?.in_;
    let lv_type = new abap.types.Character(1, {});
    let fs_out_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.describe({field: in_, type: lv_type});
    let unique199 = lv_type;
    if (abap.compare.eq(unique199, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int)) {
      out.assign(abap.Classes['CL_ABAP_MATH'].min_int4);
    } else if (abap.compare.eq(unique199, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      out.set((await this.get_max_value({in_: in_})));
      abap.statements.assign({target: fs_out_, source: (out).dereference()});
      fs_out_.set(abap.operators.multiply(fs_out_,abap.IntegerFactory.get(-1)));
    } else {
      console.dir(INPUT);
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    }
    return out;
  }
}
abap.Classes['CL_ABAP_EXCEPTIONAL_VALUES'] = cl_abap_exceptional_values;
export {cl_abap_exceptional_values};
//# sourceMappingURL=cl_abap_exceptional_values.clas.mjs.map