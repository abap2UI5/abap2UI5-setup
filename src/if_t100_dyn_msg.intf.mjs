// if_t100_dyn_msg.intf.abap
class if_t100_dyn_msg {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"MSGTY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MSGV1": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MSGV2": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MSGV3": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MSGV4": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {};
}
abap.Classes['IF_T100_DYN_MSG'] = if_t100_dyn_msg;
export {if_t100_dyn_msg};
//# sourceMappingURL=if_t100_dyn_msg.intf.mjs.map