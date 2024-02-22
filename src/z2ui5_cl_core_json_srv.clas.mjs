const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_json_srv.clas.abap
class z2ui5_cl_core_json_srv {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_JSON_SRV';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_AJSON_FILTER"];
  static ATTRIBUTES = {"Z2UI5_IF_AJSON_FILTER~VISIT_TYPE": {"type": () => {return new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"REQUEST_JSON_TO_ABAP": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"o_model": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "s_front": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ID"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-VIEW"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-APP_START"}), "origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-SEARCH"}), "event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-EVENT"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_core_types=>ty_s_http_request_post-s_front", undefined, {}, {}), "s_control": new abap.types.Structure({"check_launchpad": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_CONTROL-APP_START"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_control", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_request_post", undefined, {}, {});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RESPONSE_ABAP_TO_JSON": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Structure({"s_front": new abap.types.Structure({"params": new abap.types.Structure({"s_view": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW-XML"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view", undefined, {}, {}), "s_view_nest": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest", undefined, {}, {}), "s_view_nest2": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest2", undefined, {}, {}), "s_popup": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popup", undefined, {}, {}), "s_popover": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-ID"}), "open_by_id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-OPEN_BY_ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popover", undefined, {}, {}), "s_msg_box": new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TYPE"}), "text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_box", undefined, {}, {}), "s_msg_toast": new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_TOAST-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_toast", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next_frontend", undefined, {}, {}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-ID"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP_START"}), "app": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP"})}, "z2ui5_if_core_types=>ty_s_http_response_post-s_front", undefined, {}, {}), "model": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-MODEL"})}, "z2ui5_if_core_types=>ty_s_http_response_post", undefined, {}, {});}, "is_optional": " "}}},
  "MODEL_FRONT_TO_BACK": {"visibility": "U", "parameters": {"VIEW": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "T_ATTRI": {"type": () => {return new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri"));}, "is_optional": " "}, "MODEL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});}, "is_optional": " "}}},
  "MODEL_BACK_TO_FRONT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "T_ATTRI": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.z2ui5_if_ajson_filter$visit_type = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async model_front_to_back(INPUT) {
    let view = INPUT?.view;
    if (view?.getQualifiedName === undefined || view.getQualifiedName() !== "STRING") { view = undefined; }
    if (view === undefined) { view = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.view); }
    let t_attri = INPUT?.t_attri;
    if (t_attri === undefined) { t_attri = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri")).set(INPUT.t_attri); }
    let model = INPUT?.model;
    if (model?.getQualifiedName === undefined || model.getQualifiedName() !== "Z2UI5_IF_AJSON") { model = undefined; }
    if (model === undefined) { model = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}).set(INPUT.model); }
    let temp1 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {});
    let lr_attri = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}));
    let lo_val_front = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let fs_val_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    for await (const unique113 of abap.statements.loop(t_attri.dereference(),{where: async (I) => {return abap.compare.eq(I.bind_type, abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way) && abap.compare.eq(I.view, view);},topEquals: {"bind_type": abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way,"view": view}})) {
      lr_attri.assign(unique113);
      try {
        lo_val_front.set((await model.get().z2ui5_if_ajson$slice({iv_path: lr_attri.get().name_client})));
        if (abap.compare.initial(lo_val_front)) {
          continue;
        }
        if (abap.compare.initial(lr_attri.get().custom_mapper_back) === false) {
          lo_val_front.set((await lo_val_front.get().z2ui5_if_ajson$map({ii_mapper: lr_attri.get().custom_mapper_back})));
        }
        if (abap.compare.initial(lr_attri.get().custom_filter_back) === false) {
          lo_val_front.set((await lo_val_front.get().z2ui5_if_ajson$filter({ii_filter: lr_attri.get().custom_filter_back})));
        }
        abap.statements.assign({target: fs_val_, source: (lr_attri.get().r_ref).dereference()});
        await lo_val_front.get().z2ui5_if_ajson$to_abap({ev_container: fs_val_});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          x.set(e);
          abap.statements.assert(abap.compare.initial(x) === false);
        } else {
          throw e;
        }
      }
    }
  }
  async model_back_to_front(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let t_attri = INPUT?.t_attri;
    if (t_attri?.getQualifiedName === undefined || t_attri.getQualifiedName() !== "Z2UI5_IF_CORE_TYPES=>TY_T_ATTRI") { t_attri = undefined; }
    if (t_attri === undefined) { t_attri = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "z2ui5_if_core_types=>ty_t_attri").set(INPUT.t_attri); }
    let temp2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ajson_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let temp3 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {});
    let lr_attri = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME"}), "name_client": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-NAME_CLIENT"}), "bind_type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-BIND_TYPE"}), "srtti_data": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-SRTTI_DATA"}), "check_dissolved": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ATTRI-VIEW"}), "json_bind_local": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "r_ref": new abap.types.DataReference(new abap.types.Character(4)), "o_typedescr": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"})}, "z2ui5_if_core_types=>ty_s_attri", undefined, {}, {}));
    let temp4 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let temp5 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let fs_attribute_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let temp6 = new abap.types.String({qualifiedName: "STRING"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      await abap.statements.cast(temp2, (await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
      ajson_result.set(temp2);
      for await (const unique114 of abap.statements.loop(t_attri,{where: async (I) => {return abap.compare.ne(I.bind_type, new abap.types.String().set(``));}})) {
        lr_attri.assign(unique114);
        if (abap.compare.initial(lr_attri.get().custom_mapper) === false) {
          await abap.statements.cast(temp4, (await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: lr_attri.get().custom_mapper})));
          ajson.set(temp4);
        } else {
          await abap.statements.cast(temp5, (await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_upper_case())})));
          ajson.set(temp5);
        }
        let unique115 = lr_attri.get().bind_type;
        if (abap.compare.eq(unique115, abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way) || abap.compare.eq(unique115, abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way)) {
          abap.statements.assign({target: fs_attribute_, source: (lr_attri.get().r_ref).dereference()});
          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
          await ajson.get().z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: new abap.types.String().set(`/`), iv_val: fs_attribute_});
        } else if (abap.compare.eq(unique115, abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_time)) {
          await ajson.get().z2ui5_if_ajson$set({iv_ignore_empty: abap.builtin.abap_false, iv_path: new abap.types.String().set(`/`), iv_val: lr_attri.get().json_bind_local});
        } else {
          abap.statements.assert(abap.compare.eq(new abap.types.String().set(``), new abap.types.String().set(`ERROR_UNKNOWN_BIND_MODE`)));
        }
        if (abap.compare.initial(lr_attri.get().custom_filter) === false) {
          ajson.set((await ajson.get().z2ui5_if_ajson$filter({ii_filter: lr_attri.get().custom_filter})));
        }
        await ajson_result.get().z2ui5_if_ajson$set({iv_path: lr_attri.get().name_client, iv_val: ajson});
      }
      result.set((await ajson_result.get().z2ui5_if_ajson$stringify()));
      if (abap.compare.initial(result)) {
        temp6.set(new abap.types.String().set(`{}`));
      } else {
        temp6.set(result);
      }
      result.set(temp6);
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        abap.statements.assert(abap.compare.initial(x));
      } else {
        throw e;
      }
    }
    return result;
  }
  async request_json_to_abap(INPUT) {
    let result = new abap.types.Structure({"o_model": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "s_front": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ID"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-VIEW"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-APP_START"}), "origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-SEARCH"}), "event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-EVENT"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_core_types=>ty_s_http_request_post-s_front", undefined, {}, {}), "s_control": new abap.types.Structure({"check_launchpad": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_CONTROL-APP_START"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_control", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_request_post", undefined, {}, {});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    let temp7 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lo_ajson = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let lv_model_edit_name = new abap.types.String({qualifiedName: "STRING"});
    let lo_model = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      await abap.statements.cast(temp7, (await abap.Classes['Z2UI5_CL_AJSON'].parse({iv_json: val})));
      lo_ajson.set(temp7);
      lv_model_edit_name.set(abap.operators.concat(new abap.types.String().set(`/`),abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_ui5.get().two_way_model));
      result.get().o_model.set((await abap.Classes['Z2UI5_CL_AJSON'].create_empty()));
      lo_model.set((await lo_ajson.get().z2ui5_if_ajson$slice({iv_path: lv_model_edit_name})));
      await result.get().o_model.get().z2ui5_if_ajson$set({iv_path: lv_model_edit_name, iv_val: lo_model});
      await lo_ajson.get().z2ui5_if_ajson$delete_({iv_path: lv_model_edit_name});
      lo_ajson.set((await lo_ajson.get().z2ui5_if_ajson$slice({iv_path: new abap.types.String().set(`/S_FRONT`)})));
      await lo_ajson.get().z2ui5_if_ajson$to_abap({iv_corresponding: abap.builtin.abap_true, ev_container: result.get().s_front});
      temp1.set(abap.builtin.boolc(abap.compare.cs(result.get().s_front.get().search, new abap.types.String().set(`scenario=LAUNCHPAD`))));
      result.get().s_control.get().check_launchpad.set(temp1);
      if (abap.compare.initial(result.get().s_front.get().id) === false) {
        return result;
      }
      result.get().s_control.get().app_start.set((await abap.Classes['Z2UI5_CL_UTIL'].c_trim_upper({val: result.get().s_front.get().app_start})));
      if (abap.compare.initial(result.get().s_control.get().app_start) === false) {
        return result;
      }
      result.get().s_control.get().app_start.set((await abap.Classes['Z2UI5_CL_UTIL'].c_trim_upper({val: (await abap.Classes['Z2UI5_CL_UTIL'].url_param_get({val: new abap.types.String().set(`app_start`), url: result.get().s_front.get().search}))})));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        const unique116 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: x});
        unique116.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_json_srv.clas.abap","INTERNAL_LINE": 201};
        throw unique116;
      } else {
        throw e;
      }
    }
    return result;
  }
  async response_abap_to_json(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST") { val = undefined; }
    if (val === undefined) { val = new abap.types.Structure({"s_front": new abap.types.Structure({"params": new abap.types.Structure({"s_view": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW-XML"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view", undefined, {}, {}), "s_view_nest": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest", undefined, {}, {}), "s_view_nest2": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest2", undefined, {}, {}), "s_popup": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popup", undefined, {}, {}), "s_popover": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-ID"}), "open_by_id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-OPEN_BY_ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popover", undefined, {}, {}), "s_msg_box": new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TYPE"}), "text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_box", undefined, {}, {}), "s_msg_toast": new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_TOAST-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_toast", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next_frontend", undefined, {}, {}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-ID"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP_START"}), "app": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP"})}, "z2ui5_if_core_types=>ty_s_http_response_post-s_front", undefined, {}, {}), "model": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-MODEL"})}, "z2ui5_if_core_types=>ty_s_http_response_post", undefined, {}, {}).set(INPUT.val); }
    let temp8 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let ajson_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let temp9 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_JSON_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_JSON_SRV"});
    let lv_frontend = new abap.types.String({qualifiedName: "STRING"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      await abap.statements.cast(temp8, (await abap.Classes['Z2UI5_CL_AJSON'].create_empty({ii_custom_mapping: (await abap.Classes['Z2UI5_CL_AJSON_MAPPING'].create_upper_case())})));
      ajson_result.set(temp8);
      await ajson_result.get().z2ui5_if_ajson$set({iv_path: new abap.types.String().set(`/`), iv_val: val.get().s_front});
      temp9.set(await (new abap.Classes['Z2UI5_CL_CORE_JSON_SRV']()).constructor_());
      ajson_result.set((await ajson_result.get().z2ui5_if_ajson$filter({ii_filter: temp9})));
      lv_frontend.set((await ajson_result.get().z2ui5_if_ajson$stringify()));
      result.set(abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(new abap.types.String().set(`"S_FRONT":${abap.templateFormatting(lv_frontend)},`),abap.operators.concat(new abap.types.String().set(`"MODEL":${abap.templateFormatting(val.get().model)}`),new abap.types.String().set(`}`)))));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        abap.statements.assert(abap.compare.initial(x));
      } else {
        throw e;
      }
    }
    return result;
  }
  async z2ui5_if_ajson_filter$keep_node(INPUT) {
    let rv_keep = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let is_node = INPUT?.is_node;
    if (is_node?.getQualifiedName === undefined || is_node.getQualifiedName() !== "Z2UI5_IF_AJSON_TYPES=>TY_NODE") { is_node = undefined; }
    if (is_node === undefined) { is_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}).set(INPUT.is_node); }
    let iv_visit = new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"});
    if (INPUT && INPUT.iv_visit) {iv_visit.set(INPUT.iv_visit);}
    if (INPUT === undefined || INPUT.iv_visit === undefined) {iv_visit = abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value;}
    rv_keep.set(abap.builtin.abap_true);
    let unique117 = iv_visit;
    if (abap.compare.eq(unique117, abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().value)) {
      let unique118 = is_node.get().type;
      if (abap.compare.eq(unique118, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().boolean)) {
        if (abap.compare.eq(is_node.get().value, new abap.types.String().set(`false`))) {
          rv_keep.set(abap.builtin.abap_false);
        }
      } else if (abap.compare.eq(unique118, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().number)) {
        if (abap.compare.eq(is_node.get().value, new abap.types.String().set(`0`))) {
          rv_keep.set(abap.builtin.abap_false);
        }
      } else if (abap.compare.eq(unique118, abap.Classes['Z2UI5_IF_AJSON_TYPES'].z2ui5_if_ajson_types$node_type.get().string)) {
        if (abap.compare.eq(is_node.get().value, new abap.types.String().set(``))) {
          rv_keep.set(abap.builtin.abap_false);
        }
      }
    } else if (abap.compare.eq(unique117, abap.Classes['Z2UI5_IF_AJSON_FILTER'].z2ui5_if_ajson_filter$visit_type.get().close)) {
      if (abap.compare.eq(is_node.get().children, abap.IntegerFactory.get(0))) {
        rv_keep.set(abap.builtin.abap_false);
      }
    }
    return rv_keep;
  }
}
abap.Classes['Z2UI5_CL_CORE_JSON_SRV'] = z2ui5_cl_core_json_srv;
z2ui5_cl_core_json_srv.z2ui5_if_ajson_filter$visit_type = new abap.types.Structure({"value": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "open": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"}), "close": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_FILTER=>TY_VISIT_TYPE"})}, undefined, undefined, {}, {});
z2ui5_cl_core_json_srv.z2ui5_if_ajson_filter$visit_type.get().value.set(0);
z2ui5_cl_core_json_srv.z2ui5_if_ajson_filter$visit_type.get().open.set(1);
z2ui5_cl_core_json_srv.z2ui5_if_ajson_filter$visit_type.get().close.set(2);
export {z2ui5_cl_core_json_srv};
//# sourceMappingURL=z2ui5_cl_core_json_srv.clas.mjs.map