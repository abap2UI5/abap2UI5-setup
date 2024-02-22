const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.function_exists.abap
async function function_exists(INPUT) {
  // importing FUNCNAME CHAR30 false
  let funcname = INPUT.exporting?.funcname;
  let lv_name = new abap.types.String({qualifiedName: "STRING"});
  let lv_exists = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  lv_name.set(funcname);
  abap.statements.condense(lv_name, {nogaps: false});
  lv_exists.set(abap.FunctionModules[lv_name.get()] === undefined ? " " : "X");
  if (abap.compare.eq(lv_exists, abap.builtin.abap_false)) {
    throw new abap.ClassicError({classic: "function_not_exist"});
  }
}
abap.FunctionModules['FUNCTION_EXISTS'] = function_exists;
//# sourceMappingURL=openabap.fugr.function_exists.mjs.map