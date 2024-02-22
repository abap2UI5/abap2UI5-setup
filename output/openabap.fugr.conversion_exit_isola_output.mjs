const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_isola_output.abap
async function conversion_exit_isola_output(INPUT) {
  // importing INPUT undefined false
  let input = INPUT.exporting?.input;
  // exporting OUTPUT undefined true
  let output = INPUT.importing?.output;
  if (output === undefined) {
      output = new abap.types.Character(4);
  }
  try {
    output.set(await abap.Classes['CL_I18N_LANGUAGES'].sap1_to_sap2({im_lang_sap1: input}));
    abap.builtin.sy.get().subrc.set(0);
  } catch (e) {
    if (e.classic) {
        switch (e.classic.toUpperCase()) {
        case "NO_ASSIGNMENT": abap.builtin.sy.get().subrc.set(1); break;
        default: abap.builtin.sy.get().subrc.set(2); break;
          }
      } else {
          throw e;
      }
    }
  }
  abap.FunctionModules['CONVERSION_EXIT_ISOLA_OUTPUT'] = conversion_exit_isola_output;
//# sourceMappingURL=openabap.fugr.conversion_exit_isola_output.mjs.map