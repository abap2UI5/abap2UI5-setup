const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_alpha_output.abap
async function conversion_exit_alpha_output(INPUT) {
  // importing INPUT CLIKE false
  let input = INPUT.exporting?.input;
  // exporting OUTPUT CLIKE true
  let output = INPUT.importing?.output;
  if (output === undefined) {
      output = new abap.types.Character();
  }
  output.set(input);
  abap.statements.shift(output, {direction: 'LEFT',deletingLeading: new abap.types.Character(1).set('0')});
  const indexBackup1 = abap.builtin.sy.get().index.get();
  const unique171 = abap.operators.minus(abap.builtin.strlen({val: input}),abap.builtin.strlen({val: output}).get()).get();
  for (let unique172 = 0; unique172 < unique171; unique172++) {
    abap.builtin.sy.get().index.set(unique172 + 1);
    output.set(abap.operators.concat(output,new abap.types.String().set(` `)));
  }
  abap.builtin.sy.get().index.set(indexBackup1);
}
abap.FunctionModules['CONVERSION_EXIT_ALPHA_OUTPUT'] = conversion_exit_alpha_output;
//# sourceMappingURL=openabap.fugr.conversion_exit_alpha_output.mjs.map