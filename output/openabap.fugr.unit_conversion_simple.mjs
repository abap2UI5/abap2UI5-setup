const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.unit_conversion_simple.abap
async function unit_conversion_simple(INPUT) {
  // importing INPUT undefined false
  let input = INPUT.exporting?.input;
  // importing UNIT_IN MSEHI true
  let unit_in = INPUT.exporting?.unit_in;
  if (unit_in === undefined) {
      unit_in = new abap.types.Character(3, {"qualifiedName":"MSEHI","ddicName":"MSEHI"});
  }
  // importing UNIT_OUT MSEHI true
  let unit_out = INPUT.exporting?.unit_out;
  if (unit_out === undefined) {
      unit_out = new abap.types.Character(3, {"qualifiedName":"MSEHI","ddicName":"MSEHI"});
  }
  // exporting OUTPUT undefined true
  let output = INPUT.importing?.output;
  if (output === undefined) {
      output = new abap.types.Character(4);
  }
  let lv_float = new abap.types.Float({qualifiedName: "F"});
  if (abap.compare.eq(unit_in, unit_out)) {
    output.set(input);
  } else if (abap.compare.eq(unit_in, new abap.types.Character(1).set('G')) && abap.compare.eq(unit_out, new abap.types.Character(2).set('KG'))) {
    output.set(abap.operators.divide(input,new abap.types.Integer().set(1000)));
  } else if (abap.compare.eq(unit_in, new abap.types.Character(2).set('M3')) && abap.compare.eq(unit_out, new abap.types.Character(3).set('CDM'))) {
    output.set(abap.operators.multiply(input,new abap.types.Integer().set(1000)));
  } else if (abap.compare.eq(unit_in, new abap.types.Character(2).set('LB')) && abap.compare.eq(unit_out, new abap.types.Character(2).set('KG'))) {
    lv_float.set(new abap.types.Character(10).set('0.45359237'));
    output.set(abap.operators.multiply(input,lv_float));
  } else if (abap.compare.eq(unit_in, new abap.types.Character(3).set('CCM')) && abap.compare.eq(unit_out, new abap.types.Character(3).set('CDM'))) {
    output.set(abap.operators.divide(input,new abap.types.Integer().set(1000)));
  } else if (abap.compare.eq(unit_in, new abap.types.Character(3).set('FT3')) && abap.compare.eq(unit_out, new abap.types.Character(3).set('CDM'))) {
    lv_float.set(new abap.types.Character(14).set('28.31684660923'));
    output.set(abap.operators.multiply(input,lv_float));
  } else {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(2)));
  }
}
abap.FunctionModules['UNIT_CONVERSION_SIMPLE'] = unit_conversion_simple;
//# sourceMappingURL=openabap.fugr.unit_conversion_simple.mjs.map