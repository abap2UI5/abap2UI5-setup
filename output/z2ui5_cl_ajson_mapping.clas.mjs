await import("./z2ui5_cl_ajson_mapping.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ajson_mapping.clas.abap
class z2ui5_cl_ajson_mapping {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_AJSON_MAPPING';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"RENAME_BY": {"type": () => {return new abap.types.Structure({"attr_name": new abap.types.Integer({qualifiedName: "I"}), "full_path": new abap.types.Integer({qualifiedName: "I"}), "pattern": new abap.types.Integer({qualifiedName: "I"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CREATE_CAMEL_CASE": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}, "IV_FIRST_JSON_UPPER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "CREATE_UPPER_CASE": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}}},
  "CREATE_LOWER_CASE": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}}},
  "CREATE_FIELD_MAPPING": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IT_MAPPING_FIELDS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");}, "is_optional": " "}}},
  "CREATE_RENAME": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IT_RENAME_MAP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map");}, "is_optional": " "}, "IV_RENAME_BY": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "CREATE_COMPOUND_MAPPER": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "II_MAPPER1": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "II_MAPPER2": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "II_MAPPER3": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IT_MORE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_ajson_mapping=>ty_table_of");}, "is_optional": " "}}},
  "CREATE_TO_SNAKE_CASE": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}}},
  "CREATE_TO_CAMEL_CASE": {"visibility": "U", "parameters": {"RI_MAPPING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});}, "is_optional": " "}, "IV_FIRST_JSON_UPPER": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.rename_by = z2ui5_cl_ajson_mapping.rename_by;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async create_camel_case(INPUT) {
    return z2ui5_cl_ajson_mapping.create_camel_case(INPUT);
  }
  static async create_camel_case(INPUT) {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    if (INPUT && INPUT.it_mapping_fields) {it_mapping_fields.set(INPUT.it_mapping_fields);}
    let iv_first_json_upper = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_first_json_upper) {iv_first_json_upper.set(INPUT.iv_first_json_upper);}
    if (INPUT === undefined || INPUT.iv_first_json_upper === undefined) {iv_first_json_upper = abap.builtin.abap_true;}
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_CAMEL']()).constructor_({it_mapping_fields: it_mapping_fields, iv_first_json_upper: iv_first_json_upper}));
    return ri_mapping;
  }
  async create_compound_mapper(INPUT) {
    return z2ui5_cl_ajson_mapping.create_compound_mapper(INPUT);
  }
  static async create_compound_mapper(INPUT) {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let ii_mapper1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.ii_mapper1) {ii_mapper1.set(INPUT.ii_mapper1);}
    let ii_mapper2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.ii_mapper2) {ii_mapper2.set(INPUT.ii_mapper2);}
    let ii_mapper3 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.ii_mapper3) {ii_mapper3.set(INPUT.ii_mapper3);}
    let it_more = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_ajson_mapping=>ty_table_of");
    if (INPUT && INPUT.it_more) {it_more.set(INPUT.it_more);}
    let lt_queue = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_ajson_mapping=>ty_table_of");
    abap.statements.append({source: ii_mapper1, target: lt_queue});
    abap.statements.append({source: ii_mapper2, target: lt_queue});
    abap.statements.append({source: ii_mapper3, target: lt_queue});
    abap.statements.append({source: it_more, lines: true, target: lt_queue});
    await abap.statements.deleteInternal(lt_queue,{where: async (I) => {return abap.compare.initial(I.table_line);}});
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_COMPOUND_MAPPER']()).constructor_({it_queue: lt_queue}));
    return ri_mapping;
  }
  async create_field_mapping(INPUT) {
    return z2ui5_cl_ajson_mapping.create_field_mapping(INPUT);
  }
  static async create_field_mapping(INPUT) {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let it_mapping_fields = INPUT?.it_mapping_fields;
    if (it_mapping_fields?.getQualifiedName === undefined || it_mapping_fields.getQualifiedName() !== "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELDS") { it_mapping_fields = undefined; }
    if (it_mapping_fields === undefined) { it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields").set(INPUT.it_mapping_fields); }
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_FIELDS']()).constructor_({it_mapping_fields: it_mapping_fields}));
    return ri_mapping;
  }
  async create_lower_case(INPUT) {
    return z2ui5_cl_ajson_mapping.create_lower_case(INPUT);
  }
  static async create_lower_case(INPUT) {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    if (INPUT && INPUT.it_mapping_fields) {it_mapping_fields.set(INPUT.it_mapping_fields);}
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_TO_LOWER']()).constructor_({it_mapping_fields: it_mapping_fields}));
    return ri_mapping;
  }
  async create_rename(INPUT) {
    return z2ui5_cl_ajson_mapping.create_rename(INPUT);
  }
  static async create_rename(INPUT) {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let it_rename_map = INPUT?.it_rename_map;
    if (it_rename_map?.getQualifiedName === undefined || it_rename_map.getQualifiedName() !== "Z2UI5_IF_AJSON_MAPPING=>TTY_RENAME_MAP") { it_rename_map = undefined; }
    if (it_rename_map === undefined) { it_rename_map = abap.types.TableFactory.construct(new abap.types.Structure({"from": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-FROM"}), "to": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_RENAME-TO"})}, "z2ui5_if_ajson_mapping=>ty_rename", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"by_name","type":"SORTED","isUnique":true,"keyFields":["FROM"]}]}, "z2ui5_if_ajson_mapping=>tty_rename_map").set(INPUT.it_rename_map); }
    let iv_rename_by = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_rename_by) {iv_rename_by.set(INPUT.iv_rename_by);}
    if (INPUT === undefined || INPUT.iv_rename_by === undefined) {iv_rename_by = this.rename_by.get().attr_name;}
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_RENAME']()).constructor_({it_rename_map: it_rename_map, iv_rename_by: iv_rename_by}));
    return ri_mapping;
  }
  async create_to_camel_case(INPUT) {
    return z2ui5_cl_ajson_mapping.create_to_camel_case(INPUT);
  }
  static async create_to_camel_case(INPUT) {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let iv_first_json_upper = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.iv_first_json_upper) {iv_first_json_upper.set(INPUT.iv_first_json_upper);}
    if (INPUT === undefined || INPUT.iv_first_json_upper === undefined) {iv_first_json_upper = abap.builtin.abap_false;}
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_TO_CAMEL']()).constructor_({iv_first_json_upper: iv_first_json_upper}));
    return ri_mapping;
  }
  async create_to_snake_case() {
    return z2ui5_cl_ajson_mapping.create_to_snake_case();
  }
  static async create_to_snake_case() {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_TO_SNAKE']()).constructor_());
    return ri_mapping;
  }
  async create_upper_case(INPUT) {
    return z2ui5_cl_ajson_mapping.create_upper_case(INPUT);
  }
  static async create_upper_case(INPUT) {
    let ri_mapping = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    let it_mapping_fields = abap.types.TableFactory.construct(new abap.types.Structure({"abap": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-ABAP"}), "json": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_MAPPING=>TY_MAPPING_FIELD-JSON"})}, "z2ui5_if_ajson_mapping=>ty_mapping_field", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[{"name":"abap","type":"SORTED","isUnique":true,"keyFields":["ABAP"]},{"name":"json","type":"SORTED","isUnique":true,"keyFields":["JSON"]}]}, "z2ui5_if_ajson_mapping=>ty_mapping_fields");
    if (INPUT && INPUT.it_mapping_fields) {it_mapping_fields.set(INPUT.it_mapping_fields);}
    ri_mapping.set(await (new abap.Classes['CLAS-Z2UI5_CL_AJSON_MAPPING-LCL_MAPPING_TO_UPPER']()).constructor_({it_mapping_fields: it_mapping_fields}));
    return ri_mapping;
  }
}
abap.Classes['Z2UI5_CL_AJSON_MAPPING'] = z2ui5_cl_ajson_mapping;
z2ui5_cl_ajson_mapping.rename_by = new abap.types.Structure({"attr_name": new abap.types.Integer({qualifiedName: "I"}), "full_path": new abap.types.Integer({qualifiedName: "I"}), "pattern": new abap.types.Integer({qualifiedName: "I"})}, undefined, undefined, {}, {});
z2ui5_cl_ajson_mapping.rename_by.get().attr_name.set(0);
z2ui5_cl_ajson_mapping.rename_by.get().full_path.set(1);
z2ui5_cl_ajson_mapping.rename_by.get().pattern.set(2);
export {z2ui5_cl_ajson_mapping};
//# sourceMappingURL=z2ui5_cl_ajson_mapping.clas.mjs.map