// if_salv_c_aggregation.intf.abap
class if_salv_c_aggregation {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"NONE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "TOTAL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "MINIMUM": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "MAXIMUM": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "AVERAGE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
}
abap.Classes['IF_SALV_C_AGGREGATION'] = if_salv_c_aggregation;
if_salv_c_aggregation.if_salv_c_aggregation$none = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_aggregation.if_salv_c_aggregation$none.set(0);
if_salv_c_aggregation.if_salv_c_aggregation$total = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_aggregation.if_salv_c_aggregation$total.set(1);
if_salv_c_aggregation.if_salv_c_aggregation$minimum = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_aggregation.if_salv_c_aggregation$minimum.set(2);
if_salv_c_aggregation.if_salv_c_aggregation$maximum = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_aggregation.if_salv_c_aggregation$maximum.set(3);
if_salv_c_aggregation.if_salv_c_aggregation$average = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_aggregation.if_salv_c_aggregation$average.set(4);
export {if_salv_c_aggregation};
//# sourceMappingURL=if_salv_c_aggregation.intf.mjs.map