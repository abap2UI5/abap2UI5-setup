const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_event_srv.clas.abap
class z2ui5_cl_core_event_srv {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_EVENT_SRV';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_T_ARG": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "GET_EVENT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECK_VIEW_DESTROY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "T_ARG": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "GET_EVENT_CLIENT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "T_ARG": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_event(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val || new abap.types.Character();
    let check_view_destroy = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.check_view_destroy) {check_view_destroy.set(INPUT.check_view_destroy);}
    if (INPUT === undefined || INPUT.check_view_destroy === undefined) {check_view_destroy = abap.builtin.abap_false;}
    let t_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (INPUT && INPUT.t_arg) {t_arg.set(INPUT.t_arg);}
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(check_view_destroy, abap.builtin.abap_true)) {
      temp1.set(new abap.types.String().set(`,true`));
    } else {
      abap.statements.clear(temp1);
    }
    result.set(new abap.types.String().set(`${abap.templateFormatting(abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_ui5.get().event_backend_function)}(['${abap.templateFormatting(val)}'${abap.templateFormatting(temp1)}]`));
    result.set(abap.operators.concat(result,(await this.get_t_arg({val: t_arg}))));
    return result;
  }
  async get_event_client(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let t_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (INPUT && INPUT.t_arg) {t_arg.set(INPUT.t_arg);}
    result.set(new abap.types.String().set(`${abap.templateFormatting(abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_ui5.get().event_frontend_function)}('${abap.templateFormatting(val)}'`));
    result.set(abap.operators.concat(result,(await this.get_t_arg({val: t_arg}))));
    return result;
  }
  async get_t_arg(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING_TABLE") { val = undefined; }
    if (val === undefined) { val = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.val); }
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let lr_arg = new abap.types.DataReference(new abap.types.String({qualifiedName: "STRING"}));
    let lv_new = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.initial(val) === false) {
      for await (const unique112 of abap.statements.loop(val)) {
        lr_arg.assign(unique112);
        lv_new.set((lr_arg).dereference());
        if (abap.compare.initial(lv_new)) {
          continue;
        }
        if (abap.compare.ne(lv_new.getOffset({length: 1}), new abap.types.String().set(`$`)) && abap.compare.ne(lv_new.getOffset({length: 1}), new abap.types.String().set(`{`))) {
          lv_new.set(abap.operators.concat(new abap.types.String().set(`"`),abap.operators.concat(lv_new,new abap.types.String().set(`"`))));
        }
        result.set(abap.operators.concat(result,abap.operators.concat(new abap.types.String().set(`, `),lv_new)));
      }
    }
    result.set(abap.operators.concat(result,new abap.types.String().set(`)`)));
    return result;
  }
}
abap.Classes['Z2UI5_CL_CORE_EVENT_SRV'] = z2ui5_cl_core_event_srv;
export {z2ui5_cl_core_event_srv};
//# sourceMappingURL=z2ui5_cl_core_event_srv.clas.mjs.map