const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.text_split.abap
async function text_split(INPUT) {
  // importing LENGTH undefined false
  let length = INPUT.exporting?.length;
  // importing TEXT undefined false
  let text = INPUT.exporting?.text;
  // exporting LINE undefined true
  let line = INPUT.importing?.line;
  if (line === undefined) {
      line = new abap.types.Character(4);
  }
  // exporting REST undefined true
  let rest = INPUT.importing?.rest;
  if (rest === undefined) {
      rest = new abap.types.Character(4);
  }
  if (abap.compare.lt(abap.builtin.strlen({val: text}), abap.IntegerFactory.get(50))) {
    line.set(text);
    rest.set(new abap.types.Character(1).set(''));
  } else {
    line.set(text.getOffset({length: 50}));
    rest.set(text.getOffset({offset: 50}));
    abap.statements.condense(rest, {nogaps: false});
  }
}
abap.FunctionModules['TEXT_SPLIT'] = text_split;
//# sourceMappingURL=openabap.fugr.text_split.mjs.map