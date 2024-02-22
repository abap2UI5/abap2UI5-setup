const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_http_post.clas.abap
class z2ui5_cl_core_http_post {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_HTTP_POST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_ACTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_REQUEST_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_REQUEST": {"type": () => {return new abap.types.Structure({"o_model": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "s_front": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ID"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-VIEW"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-APP_START"}), "origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-SEARCH"}), "event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-EVENT"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_core_types=>ty_s_http_request_post-s_front", undefined, {}, {}), "s_control": new abap.types.Structure({"check_launchpad": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_CONTROL-APP_START"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_control", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_request_post", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_RESPONSE": {"type": () => {return new abap.types.Structure({"s_front": new abap.types.Structure({"params": new abap.types.Structure({"s_view": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW-XML"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view", undefined, {}, {}), "s_view_nest": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest", undefined, {}, {}), "s_view_nest2": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest2", undefined, {}, {}), "s_popup": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popup", undefined, {}, {}), "s_popover": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-ID"}), "open_by_id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-OPEN_BY_ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popover", undefined, {}, {}), "s_msg_box": new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TYPE"}), "text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_box", undefined, {}, {}), "s_msg_toast": new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_TOAST-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_toast", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next_frontend", undefined, {}, {}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-ID"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP_START"}), "app": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP"})}, "z2ui5_if_core_types=>ty_s_http_response_post-s_front", undefined, {}, {}), "model": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-MODEL"})}, "z2ui5_if_core_types=>ty_s_http_response_post", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_RESPONSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"MAIN_BEGIN": {"visibility": "O", "parameters": {}},
  "MAIN_PROCESS": {"visibility": "O", "parameters": {"CHECK_GO_CLIENT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "MAIN_END": {"visibility": "O", "parameters": {}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "MAIN": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_action = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    this.mv_request_json = new abap.types.String({qualifiedName: "STRING"});
    this.ms_request = new abap.types.Structure({"o_model": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"}), "s_front": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ID"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-VIEW"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-APP_START"}), "origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-SEARCH"}), "event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_FRONT-EVENT"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_core_types=>ty_s_http_request_post-s_front", undefined, {}, {}), "s_control": new abap.types.Structure({"check_launchpad": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQUEST_POST-S_CONTROL-APP_START"})}, "z2ui5_if_core_types=>ty_s_http_request_post-s_control", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_request_post", undefined, {}, {});
    this.ms_response = new abap.types.Structure({"s_front": new abap.types.Structure({"params": new abap.types.Structure({"s_view": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW-XML"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view", undefined, {}, {}), "s_view_nest": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest", undefined, {}, {}), "s_view_nest2": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest2", undefined, {}, {}), "s_popup": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popup", undefined, {}, {}), "s_popover": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-ID"}), "open_by_id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-OPEN_BY_ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popover", undefined, {}, {}), "s_msg_box": new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TYPE"}), "text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_box", undefined, {}, {}), "s_msg_toast": new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_TOAST-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_toast", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next_frontend", undefined, {}, {}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-ID"}), "app_start": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP_START"}), "app": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-S_FRONT-APP"})}, "z2ui5_if_core_types=>ty_s_http_response_post-s_front", undefined, {}, {}), "model": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RESPONSE_POST-MODEL"})}, "z2ui5_if_core_types=>ty_s_http_response_post", undefined, {}, {});
    this.mv_response = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    this.mv_request_json.set(val);
    this.mo_action.set(await (new abap.Classes['Z2UI5_CL_CORE_ACTION']()).constructor_({val: this.me}));
    return this;
  }
  async main() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    await this.main_begin();
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique123 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique123++);
      if (abap.compare.initial((await this.main_process())) === false) {
        break;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    result.set(this.mv_response);
    return result;
  }
  async main_begin() {
    let lo_json_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_JSON_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_JSON_SRV"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      lo_json_mapper.set(await (new abap.Classes['Z2UI5_CL_CORE_JSON_SRV']()).constructor_());
      this.ms_request.set((await lo_json_mapper.get().request_json_to_abap({val: this.mv_request_json})));
      if (abap.compare.initial(this.ms_request.get().s_front.get().id) === false) {
        this.mo_action.set((await this.mo_action.get().factory_by_frontend()));
      } else if (abap.compare.initial(this.ms_request.get().s_control.get().app_start) === false) {
        this.mo_action.set((await this.mo_action.get().factory_first_start()));
      } else {
        this.mo_action.set((await this.mo_action.get().factory_system_startup()));
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        this.mo_action.set((await this.mo_action.get().factory_system_error({ix: x})));
      } else {
        throw e;
      }
    }
  }
  async main_end() {
    let lo_json_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_JSON_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_JSON_SRV"});
    abap.statements.clear(this.ms_response);
    this.ms_response.get().s_front.get().params.set(this.mo_action.get().ms_next.get().s_set);
    this.ms_response.get().s_front.get().id.set(this.mo_action.get().mo_app.get().ms_draft.get().id);
    this.ms_response.get().s_front.get().app.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_classname_by_ref({in_: this.mo_action.get().mo_app.get().mo_app})));
    this.ms_response.get().s_front.get().app_start.set(this.ms_request.get().s_control.get().app_start);
    this.ms_response.get().model.set((await this.mo_action.get().mo_app.get().model_json_stringify()));
    lo_json_mapper.set(await (new abap.Classes['Z2UI5_CL_CORE_JSON_SRV']()).constructor_());
    this.mv_response.set((await lo_json_mapper.get().response_abap_to_json({val: this.ms_response})));
    abap.statements.clear(this.mo_action.get().ms_next);
    await this.mo_action.get().mo_app.get().db_save();
  }
  async main_process() {
    let check_go_client = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let li_client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_CLIENT", RTTIName: "\\CLASS=Z2UI5_CL_CORE_CLIENT"});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let li_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      li_client.set(await (new abap.Classes['Z2UI5_CL_CORE_CLIENT']()).constructor_({action: this.mo_action}));
      await abap.statements.cast(temp1, this.mo_action.get().mo_app.get().mo_app);
      li_app.set(temp1);
      abap.statements.rollback();
      await li_app.get().z2ui5_if_app$main({client: li_client});
      abap.statements.rollback();
      if (abap.compare.initial(this.mo_action.get().ms_next.get().o_app_leave) === false) {
        this.mo_action.set((await this.mo_action.get().factory_stack_leave()));
      } else if (abap.compare.initial(this.mo_action.get().ms_next.get().o_app_call) === false) {
        this.mo_action.set((await this.mo_action.get().factory_stack_call()));
      } else {
        await this.main_end();
        check_go_client.set(abap.builtin.abap_true);
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        this.mo_action.set((await this.mo_action.get().factory_system_error({ix: x})));
      } else {
        throw e;
      }
    }
    return check_go_client;
  }
}
abap.Classes['Z2UI5_CL_CORE_HTTP_POST'] = z2ui5_cl_core_http_post;
export {z2ui5_cl_core_http_post};
//# sourceMappingURL=z2ui5_cl_core_http_post.clas.mjs.map