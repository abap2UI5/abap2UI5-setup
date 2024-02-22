const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwparams_read.abap
async function wwwparams_read(INPUT) {
  // importing RELID WWWPARAMS-RELID false
  let relid = INPUT.exporting?.relid;
  // importing OBJID WWWPARAMS-OBJID false
  let objid = INPUT.exporting?.objid;
  // importing NAME C false
  let name = INPUT.exporting?.name;
  // exporting VALUE C true
  let value = INPUT.importing?.value;
  if (value === undefined) {
      value = new abap.types.Character(1, {});
  }
  let filename = new abap.types.String({qualifiedName: "STRING"});
  let filesize = new abap.types.Integer({qualifiedName: "I"});
  filename.set(abap.W3MI[objid.get().trimEnd()].filename);
  const fs = await import("fs");
  const path = await import("path");
  const url = await import("url");
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const buf = fs.readFileSync(__dirname + path.sep + filename.get());
  if (abap.compare.eq(name, new abap.types.Character(8).set('filesize'))) {
    filesize.set(buf.length);
    value.set(filesize);
    abap.statements.condense(value, {nogaps: false});
  } else {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
  abap.builtin.sy.get().subrc.set(abap.IntegerFactory.get(0));
}
abap.FunctionModules['WWWPARAMS_READ'] = wwwparams_read;
//# sourceMappingURL=zw3mi.fugr.wwwparams_read.mjs.map