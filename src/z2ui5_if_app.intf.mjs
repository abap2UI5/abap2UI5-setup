// z2ui5_if_app.intf.abap
class z2ui5_if_app {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"MAIN": {"visibility": "U", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
}
abap.Classes['Z2UI5_IF_APP'] = z2ui5_if_app;
z2ui5_if_app.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_if_app.z2ui5_if_app$version.set('1.120.0');
z2ui5_if_app.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_if_app.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_if_app.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_if_app.z2ui5_if_app$license.set('MIT');
export {z2ui5_if_app};
//# sourceMappingURL=z2ui5_if_app.intf.mjs.map