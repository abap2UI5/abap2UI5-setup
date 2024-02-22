// if_salv_c_bool_sap.intf.abap
class if_salv_c_bool_sap {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"TRUE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "FALSE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
}
abap.Classes['IF_SALV_C_BOOL_SAP'] = if_salv_c_bool_sap;
if_salv_c_bool_sap.if_salv_c_bool_sap$true = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
if_salv_c_bool_sap.if_salv_c_bool_sap$true.set(abap.builtin.abap_true);
if_salv_c_bool_sap.if_salv_c_bool_sap$false = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
if_salv_c_bool_sap.if_salv_c_bool_sap$false.set(abap.builtin.abap_false);
export {if_salv_c_bool_sap};
//# sourceMappingURL=if_salv_c_bool_sap.intf.mjs.map