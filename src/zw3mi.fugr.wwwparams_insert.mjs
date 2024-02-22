const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwparams_insert.abap
async function wwwparams_insert(INPUT) {
  // importing PARAMS WWWPARAMS false
  let params = INPUT.exporting?.params;
  abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
}
abap.FunctionModules['WWWPARAMS_INSERT'] = wwwparams_insert;
//# sourceMappingURL=zw3mi.fugr.wwwparams_insert.mjs.map