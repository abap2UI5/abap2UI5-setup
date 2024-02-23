const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwdata_import.abap
async function wwwdata_import(INPUT) {
  // importing KEY WWWDATATAB false
  let key = INPUT.exporting?.key;
  // tables MIME W3MIME true
  let mime = INPUT.tables?.mime;
  if (mime === undefined) {
      mime = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Hex({length: 255})}, "W3MIME", "W3MIME", {}, {}), {"withHeader":true,"keyType":"DEFAULT"});
  }
  let filename = new abap.types.String({qualifiedName: "STRING"});
  let xstr = new abap.types.XString({qualifiedName: "XSTRING"});
  let row = new abap.types.Structure({"line": new abap.types.Hex({length: 255})}, "W3MIME", "W3MIME", {}, {});
  let len = new abap.types.Integer({qualifiedName: "I"});
  abap.statements.clear(mime);
  filename.set(abap.W3MI[key.get().objid.get().trimEnd()].filename);
  const fs = await import("fs");
  const path = await import("path");
  const url = await import("url");
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  xstr.set(fs.readFileSync(__dirname + path.sep + filename.get()).toString("hex").toUpperCase());
  const indexBackup1 = abap.builtin.sy.get().index.get();
  let unique370 = 1;
  while (abap.compare.gt(abap.builtin.xstrlen({val: xstr}), abap.IntegerFactory.get(0))) {
    abap.builtin.sy.get().index.set(unique370++);
    len.set(new abap.types.Integer().set(255));
    if (abap.compare.lt(abap.builtin.xstrlen({val: xstr}), len)) {
      len.set(abap.builtin.xstrlen({val: xstr}));
    }
    row.get().line.set(xstr.getOffset({length: len}));
    abap.statements.append({source: row, target: mime});
    xstr.set(xstr.getOffset({offset: len}));
  }
  abap.builtin.sy.get().index.set(indexBackup1);
  abap.builtin.sy.get().subrc.set(abap.IntegerFactory.get(0));
}
abap.FunctionModules['WWWDATA_IMPORT'] = wwwdata_import;
//# sourceMappingURL=zw3mi.fugr.wwwdata_import.mjs.map