const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_alpha_input.abap
async function conversion_exit_alpha_input(INPUT) {
  // importing INPUT CLIKE false
  let input = INPUT.exporting?.input;
  // exporting OUTPUT CLIKE true
  let output = INPUT.importing?.output;
  if (output === undefined) {
      output = new abap.types.Character();
  }
  let lv_len = new abap.types.Integer({qualifiedName: "I"});
  let lv_type = new abap.types.Character(1, {});
  let lv_tmp = new abap.types.String({qualifiedName: "STRING"});
  lv_tmp.set(input);
  abap.statements.condense(lv_tmp, {nogaps: false});
  abap.statements.describe({field: input, type: lv_type});
  if (abap.compare.eq(lv_type, new abap.types.Character(1).set('g')) || abap.compare.eq(lv_type, new abap.types.Character(1).set('D'))) {
    abap.statements.describe({field: output, type: lv_type});
    if (abap.compare.eq(lv_type, new abap.types.Character(1).set('g')) || abap.compare.eq(lv_type, new abap.types.Character(1).set('D'))) {
      output.set(input);
      return;
    }
    abap.statements.describe({field: output, length: lv_len, mode: 'CHARACTER'});
  } else {
    abap.statements.describe({field: input, length: lv_len, mode: 'CHARACTER'});
  }
  if (abap.compare.initial(lv_tmp)) {
    abap.statements.clear(output);
    return;
  }
  const indexBackup1 = abap.builtin.sy.get().index.get();
  const unique220 = abap.operators.minus(lv_len.get(),abap.builtin.strlen({val: lv_tmp}).get()).get();
  for (let unique221 = 0; unique221 < unique220; unique221++) {
    abap.builtin.sy.get().index.set(unique221 + 1);
    lv_tmp.set(abap.operators.concat(new abap.types.String().set(`0`),lv_tmp));
  }
  abap.builtin.sy.get().index.set(indexBackup1);
  output.set(lv_tmp);
}
abap.FunctionModules['CONVERSION_EXIT_ALPHA_INPUT'] = conversion_exit_alpha_input;
//# sourceMappingURL=openabap.fugr.conversion_exit_alpha_input.mjs.map