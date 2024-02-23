const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app.clas.abap
class z2ui5_cl_core_app {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_APP';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_ATTRI": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_DRAFT": {"type": () => {return new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"MODEL_JSON_STRINGIFY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "MODEL_JSON_PARSE": {"visibility": "U", "parameters": {"IV_VIEW": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IO_MODEL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}}},
  "ALL_XML_STRINGIFY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ALL_XML_PARSE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});}, "is_optional": " "}, "XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DB_LOAD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DB_LOAD_BY_APP": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});}, "is_optional": " "}, "APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});}, "is_optional": " "}}},
  "DB_SAVE": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_attri = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri");
    this.mo_app = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    this.ms_draft = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async all_xml_parse(INPUT) {
    return z2ui5_cl_core_app.all_xml_parse(INPUT);
  }
  static async all_xml_parse(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let xml = INPUT?.xml;
    if (xml?.getQualifiedName === undefined || xml.getQualifiedName() !== "STRING") { xml = undefined; }
    if (xml === undefined) { xml = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.xml); }
    await abap.Classes['Z2UI5_CL_UTIL'].xml_parse({xml: xml, any: result});
    return result;
  }
  async all_xml_stringify() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));
    let lo_model = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ATTRI_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ATTRI_SRV"});
    let x2 = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    let temp2 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));
    let lo_dissolver = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_DISSOLVE_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_DISSOLVE_SRV"});
    let temp3 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));
    try {
      temp1.assign(this.mt_attri);
      lo_model.set(await (new abap.Classes['Z2UI5_CL_CORE_ATTRI_SRV']()).constructor_({attri: temp1, app: this.mo_app}));
      await lo_model.get().attri_before_save();
      result.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_stringify({any: this.me})));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x2.set(e);
        try {
          temp2.assign(this.mt_attri);
          lo_dissolver.set(await (new abap.Classes['Z2UI5_CL_CORE_DISSOLVE_SRV']()).constructor_({attri: temp2, app: this.mo_app}));
          await lo_dissolver.get().main();
          await lo_dissolver.get().main();
          temp3.assign(this.mt_attri);
          lo_model.set(await (new abap.Classes['Z2UI5_CL_CORE_ATTRI_SRV']()).constructor_({attri: temp3, app: this.mo_app}));
          await lo_model.get().attri_before_save();
          result.set((await abap.Classes['Z2UI5_CL_UTIL'].xml_stringify({any: this.me})));
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            const unique121 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.String().set(`<p>`),abap.operators.concat((await x2.get().if_message$get_text()),new abap.types.String().set(`<p> Please check if all generic data references are public attributes of your class`)))});
            unique121.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_app.clas.abap","INTERNAL_LINE": 103};
            throw unique121;
          } else {
            throw e;
          }
        }
      } else {
        throw e;
      }
    }
    return result;
  }
  async db_load(INPUT) {
    return z2ui5_cl_core_app.db_load(INPUT);
  }
  static async db_load(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let lo_db = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_DRAFT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_DRAFT_SRV"});
    let ls_db = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_CORE_01", "Z2UI5_T_CORE_01", {}, {});
    let temp4 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));
    let lo_model = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ATTRI_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ATTRI_SRV"});
    lo_db.set(await (new abap.Classes['Z2UI5_CL_CORE_DRAFT_SRV']()).constructor_());
    ls_db.set((await lo_db.get().read_draft({id: id})));
    result.set((await this.all_xml_parse({xml: ls_db.get().data})));
    temp4.assign(result.get().mt_attri);
    lo_model.set(await (new abap.Classes['Z2UI5_CL_CORE_ATTRI_SRV']()).constructor_({attri: temp4, app: result.get().mo_app}));
    await lo_model.get().attri_after_load();
    return result;
  }
  async db_load_by_app(INPUT) {
    return z2ui5_cl_core_app.db_load_by_app(INPUT);
  }
  static async db_load_by_app(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let app = INPUT?.app;
    if (app?.getQualifiedName === undefined || app.getQualifiedName() !== "Z2UI5_IF_APP") { app = undefined; }
    if (app === undefined) { app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"}).set(INPUT.app); }
    let lo_db = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_DRAFT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_DRAFT_SRV"});
    let ls_db = new abap.types.Structure({"mandt": new abap.types.Character(3, {"qualifiedName":"MANDT","ddicName":"MANDT"}), "id": new abap.types.Character(32, {}), "id_prev": new abap.types.Character(32, {}), "id_prev_app": new abap.types.Character(32, {}), "id_prev_app_stack": new abap.types.Character(32, {}), "timestampl": new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"}), "uname": new abap.types.Character(20, {}), "data": new abap.types.String({qualifiedName: "STRING"})}, "Z2UI5_T_CORE_01", "Z2UI5_T_CORE_01", {}, {});
    let temp5 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));
    let lo_model = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ATTRI_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ATTRI_SRV"});
    lo_db.set(await (new abap.Classes['Z2UI5_CL_CORE_DRAFT_SRV']()).constructor_());
    ls_db.set((await lo_db.get().read_draft({id: app.get().z2ui5_if_app$id_draft})));
    result.set((await this.all_xml_parse({xml: ls_db.get().data})));
    result.get().mo_app.set(app);
    temp5.assign(result.get().mt_attri);
    lo_model.set(await (new abap.Classes['Z2UI5_CL_CORE_ATTRI_SRV']()).constructor_({attri: temp5, app: result.get().mo_app}));
    await lo_model.get().attri_refs_update();
    return result;
  }
  async db_save() {
    let temp6 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let lo_db = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_DRAFT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_DRAFT_SRV"});
    if (abap.compare.initial(this.mo_app) === false) {
      await abap.statements.cast(temp6, this.mo_app);
      temp6.get().z2ui5_if_app$id_draft.set(this.ms_draft.get().id);
    }
    lo_db.set(await (new abap.Classes['Z2UI5_CL_CORE_DRAFT_SRV']()).constructor_());
    await lo_db.get().create({draft: this.ms_draft, model_xml: (await this.all_xml_stringify())});
  }
  async model_json_parse(INPUT) {
    let iv_view = INPUT?.iv_view;
    if (iv_view?.getQualifiedName === undefined || iv_view.getQualifiedName() !== "STRING") { iv_view = undefined; }
    if (iv_view === undefined) { iv_view = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_view); }
    let io_model = INPUT?.io_model;
    if (io_model?.getQualifiedName === undefined || io_model.getQualifiedName() !== "Z2UI5_IF_AJSON") { io_model = undefined; }
    if (io_model === undefined) { io_model = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}).set(INPUT.io_model); }
    let lo_json_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_JSON_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_JSON_SRV"});
    let temp7 = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));
    lo_json_mapper.set(await (new abap.Classes['Z2UI5_CL_CORE_JSON_SRV']()).constructor_());
    temp7.assign(this.mt_attri);
    await lo_json_mapper.get().model_front_to_back({view: iv_view, t_attri: temp7, model: io_model});
  }
  async model_json_stringify() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let lo_json_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_JSON_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_JSON_SRV"});
    lo_json_mapper.set(await (new abap.Classes['Z2UI5_CL_CORE_JSON_SRV']()).constructor_());
    result.set((await lo_json_mapper.get().model_back_to_front({t_attri: this.mt_attri})));
    return result;
  }
}
abap.Classes['Z2UI5_CL_CORE_APP'] = z2ui5_cl_core_app;
export {z2ui5_cl_core_app};
//# sourceMappingURL=z2ui5_cl_core_app.clas.mjs.map