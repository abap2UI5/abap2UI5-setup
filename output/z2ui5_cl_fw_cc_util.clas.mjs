const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_fw_cc_util.clas.abap
class z2ui5_cl_fw_cc_util {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_FW_CC_UTIL';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_JS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_js() {
    return z2ui5_cl_fw_cc_util.get_js();
  }
  static async get_js() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`sap.ui.define("z2ui5/Util" , ["sap/ui/core/Control"], (Control)=>{`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        "use strict";`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        return {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        DateCreateObject: (s) => new Date(s),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        DateAbapTimestampToDate: (sTimestamp) => new sap.gantt.misc.Format.abapTimestampToDate(sTimestamp),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        DateAbapDateToDateObject: (d) => new Date(d.slice(0, 4), parseInt(d.slice(4, 6)) - 1, d.slice(6, 8)),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        DateAbapDateTimeToDateObject: (d, t = '000000') => new Date(d.slice(0, 4), `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                   parseInt(d.slice(4, 6)) - 1, d.slice(6, 8), t.slice(0, 2), t.slice(2, 4), t.slice(4, 6)),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        };`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`  });`))))))))))))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_FW_CC_UTIL'] = z2ui5_cl_fw_cc_util;
export {z2ui5_cl_fw_cc_util};
//# sourceMappingURL=z2ui5_cl_fw_cc_util.clas.mjs.map