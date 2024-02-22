const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.get_system_timezone.abap
async function get_system_timezone(INPUT) {
  // exporting TIMEZONE TIMEZONE true
  let timezone = INPUT.importing?.timezone;
  if (timezone === undefined) {
      timezone = new abap.types.Character(6, {"qualifiedName":"TIMEZONE","ddicName":"TIMEZONE"});
  }
  timezone.set(new abap.types.Character(3).set('UTC'));
}
abap.FunctionModules['GET_SYSTEM_TIMEZONE'] = get_system_timezone;
//# sourceMappingURL=openabap.fugr.get_system_timezone.mjs.map