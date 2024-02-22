const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.generate_sec_random.abap
async function generate_sec_random(INPUT) {
  // importing LENGTH I false
  let length = INPUT.exporting?.length;
  // exporting RANDOM XSTRING true
  let random = INPUT.importing?.random;
  if (random === undefined) {
      random = new abap.types.XString({qualifiedName: "XSTRING"});
  }
  abap.statements.assert(abap.compare.gt(length, abap.IntegerFactory.get(0)));
  const crypto = await import("crypto");
  random.set(crypto.randomBytes(length.get()).toString("hex").toUpperCase());
}
abap.FunctionModules['GENERATE_SEC_RANDOM'] = generate_sec_random;
//# sourceMappingURL=openabap.fugr.generate_sec_random.mjs.map