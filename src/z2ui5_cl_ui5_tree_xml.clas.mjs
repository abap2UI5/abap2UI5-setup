const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_ui5_tree_xml.clas.abap
class z2ui5_cl_ui5_tree_xml {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_UI5_TREE_XML';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MT_PROP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_NS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CONTENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_NS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_ROOT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_PREVIOUS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_PARENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_CHILD": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_prop = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    this.mt_ns = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["TABLE_LINE"]},"secondary":[]}, "");
    this.mv_name = new abap.types.String({qualifiedName: "STRING"});
    this.mv_content = new abap.types.String({qualifiedName: "STRING"});
    this.mv_ns = new abap.types.String({qualifiedName: "STRING"});
    this.mo_root = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});
    this.mo_previous = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});
    this.mo_parent = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"});
    this.mt_child = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_TREE_XML", RTTIName: "\\CLASS=Z2UI5_CL_UI5_TREE_XML"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
}
abap.Classes['Z2UI5_CL_UI5_TREE_XML'] = z2ui5_cl_ui5_tree_xml;
export {z2ui5_cl_ui5_tree_xml};
//# sourceMappingURL=z2ui5_cl_ui5_tree_xml.clas.mjs.map