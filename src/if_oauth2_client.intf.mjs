// if_oauth2_client.intf.abap
class if_oauth2_client {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {};
  static METHODS = {"EXECUTE_CC_FLOW": {"visibility": "U", "parameters": {}},
  "SET_TOKEN": {"visibility": "U", "parameters": {"II_HTTP_CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_HTTP_CLIENT", RTTIName: "\\INTERFACE=IF_HTTP_CLIENT"});}, "is_optional": " "}}}};
}
abap.Classes['IF_OAUTH2_CLIENT'] = if_oauth2_client;
export {if_oauth2_client};
//# sourceMappingURL=if_oauth2_client.intf.mjs.map