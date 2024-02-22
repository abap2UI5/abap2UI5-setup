const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwdata_export.abap
async function wwwdata_export(INPUT) {
  // importing KEY WWWDATATAB false
  let key = INPUT.exporting?.key;
  // tables MIME W3MIME true
  let mime = INPUT.tables?.mime;
  if (mime === undefined) {
      mime = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Hex({length: 255})}, "W3MIME", "W3MIME", {}, {}), {"withHeader":true,"keyType":"DEFAULT"});
  }
  abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
}
abap.FunctionModules['WWWDATA_EXPORT'] = wwwdata_export;
//# sourceMappingURL=zw3mi.fugr.wwwdata_export.mjs.map