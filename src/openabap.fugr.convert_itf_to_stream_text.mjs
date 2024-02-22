const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.convert_itf_to_stream_text.abap
async function convert_itf_to_stream_text(INPUT) {
  // importing LF undefined false
  let lf = INPUT.exporting?.lf;
  // exporting STREAM_LINES STRING_TABLE true
  let stream_lines = INPUT.importing?.stream_lines;
  if (stream_lines === undefined) {
      stream_lines = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
  }
  // tables ITF_TEXT TLINE false
  let itf_text = INPUT.tables?.itf_text;
  // tables TEXT_STREAM undefined true
  let text_stream = INPUT.tables?.text_stream;
  if (text_stream === undefined) {
      text_stream = abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":true,"keyType":"DEFAULT"});
  }
  abap.statements.clear(stream_lines);
  abap.statements.clear(text_stream);
  if (abap.compare.eq(abap.builtin.lines({val: itf_text}), abap.IntegerFactory.get(0))) {
    return;
  }
  abap.statements.assert(abap.compare.eq(new abap.types.Character(4).set('todo'), abap.IntegerFactory.get(1)));
}
abap.FunctionModules['CONVERT_ITF_TO_STREAM_TEXT'] = convert_itf_to_stream_text;
//# sourceMappingURL=openabap.fugr.convert_itf_to_stream_text.mjs.map