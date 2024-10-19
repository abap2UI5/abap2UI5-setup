await import("./z2ui5_cl_demo_app_193.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_193.clas.abap
class z2ui5_cl_demo_app_193 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_193';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_KOPF": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_POS": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_KEYVA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_193=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_193=>ty_s_key_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_193=>ty_t_key_values");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_KOPF_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_POS_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"XML_PARSE": {"visibility": "U", "parameters": {}},
  "XML_STRINGIFY": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_kopf = new abap.types.DataReference(new abap.types.Character(4));
    this.mt_pos = new abap.types.DataReference(new abap.types.Character(4));
    this.mt_keyva = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_193=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_193=>ty_s_key_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_193=>ty_t_key_values");
    this.mt_kopf_xml = new abap.types.String({qualifiedName: "STRING"});
    this.mt_pos_xml = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async xml_parse() {
    if (abap.compare.initial(this.mt_pos_xml) === false) {
      this.mt_kopf.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_srtti_parse({rtti_data: this.mt_kopf_xml})));
      abap.statements.clear(this.mt_kopf_xml);
    }
    if (abap.compare.initial(this.mt_pos_xml) === false) {
      this.mt_pos.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_srtti_parse({rtti_data: this.mt_pos_xml})));
      abap.statements.clear(this.mt_pos_xml);
    }
  }
  async xml_stringify() {
    let fs_head_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_pos_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.assign({target: fs_head_, source: this.mt_kopf.dereference()});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      this.mt_kopf_xml.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_srtti_stringify({data: fs_head_})));
      abap.statements.clear(this.mt_kopf);
    }
    abap.statements.assign({target: fs_pos_, source: this.mt_pos.dereference()});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      this.mt_pos_xml.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_srtti_stringify({data: fs_pos_})));
      abap.statements.clear(this.mt_pos);
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_193'] = z2ui5_cl_demo_app_193;
z2ui5_cl_demo_app_193.ty_s_key_value = new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_193=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_193=>ty_s_key_value", undefined, {}, {});
z2ui5_cl_demo_app_193.ty_t_key_values = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_193=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_193=>ty_s_key_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_193=>ty_t_key_values");
export {z2ui5_cl_demo_app_193};
//# sourceMappingURL=z2ui5_cl_demo_app_193.clas.mjs.map