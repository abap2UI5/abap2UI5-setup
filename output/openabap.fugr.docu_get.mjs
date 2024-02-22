const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.docu_get.abap
async function docu_get(INPUT) {
  // importing ID undefined false
  let id = INPUT.exporting?.id;
  // importing LANGU undefined false
  let langu = INPUT.exporting?.langu;
  // importing OBJECT undefined false
  let object = INPUT.exporting?.object;
  // importing TYP undefined false
  let typ = INPUT.exporting?.typ;
  // tables LINE TLINE false
  let line = INPUT.tables?.line;
  abap.statements.clear(line);
  if (abap.compare.eq(id, new abap.types.Character(2).set('NA')) && abap.compare.eq(object, new abap.types.Character(5).set('00001'))) {
    return;
  }
  console.dir(INPUT);
  abap.statements.assert(abap.compare.eq(new abap.types.Character(4).set('todo'), abap.IntegerFactory.get(1)));
}
abap.FunctionModules['DOCU_GET'] = docu_get;
//# sourceMappingURL=openabap.fugr.docu_get.mjs.map