const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_isola_input.abap
async function conversion_exit_isola_input(INPUT) {
  // importing INPUT undefined false
  let input = INPUT.exporting?.input;
  // exporting OUTPUT undefined true
  let output = INPUT.importing?.output;
  if (output === undefined) {
      output = new abap.types.Character(4);
  }
  output.set((await abap.Classes['CL_I18N_LANGUAGES'].sap2_to_sap1({im_lang_sap2: input})));
  if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(1))) {
    throw new abap.ClassicError({classic: "unknown_language"});
  }
}
abap.FunctionModules['CONVERSION_EXIT_ISOLA_INPUT'] = conversion_exit_isola_input;
//# sourceMappingURL=openabap.fugr.conversion_exit_isola_input.mjs.map