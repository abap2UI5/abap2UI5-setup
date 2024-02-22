const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_action.clas.abap
class z2ui5_cl_core_action {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_ACTION';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_HTTP_POST": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_ACTUAL": {"type": () => {return new abap.types.Structure({"event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ACTUAL-EVENT"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "check_on_navigated": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ACTUAL-VIEW"}), "s_draft": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"}), "app": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"})}, "z2ui5_if_core_types=>ty_s_draft", undefined, {}, {}), "s_config": new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_CONFIG-SEARCH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_core_types=>ty_s_config", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_actual", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_NEXT": {"type": () => {return new abap.types.Structure({"o_app_call": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"}), "o_app_leave": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"}), "s_set": new abap.types.Structure({"s_view": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW-XML"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view", undefined, {}, {}), "s_view_nest": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest", undefined, {}, {}), "s_view_nest2": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest2", undefined, {}, {}), "s_popup": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popup", undefined, {}, {}), "s_popover": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-ID"}), "open_by_id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-OPEN_BY_ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popover", undefined, {}, {}), "s_msg_box": new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TYPE"}), "text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_box", undefined, {}, {}), "s_msg_toast": new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_TOAST-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_toast", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next_frontend", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "}};
  static METHODS = {"PREPARE_APP_STACK": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});}, "is_optional": " "}}},
  "FACTORY_SYSTEM_STARTUP": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}}},
  "FACTORY_SYSTEM_ERROR": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}, "IX": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": " "}}},
  "FACTORY_FIRST_START": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}}},
  "FACTORY_BY_FRONTEND": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}}},
  "FACTORY_STACK_LEAVE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}}},
  "FACTORY_STACK_CALL": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_http_post = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});
    this.mo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    this.ms_actual = new abap.types.Structure({"event": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ACTUAL-EVENT"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "check_on_navigated": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_ACTUAL-VIEW"}), "s_draft": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"}), "app": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"})}, "z2ui5_if_core_types=>ty_s_draft", undefined, {}, {}), "s_config": new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_CONFIG-SEARCH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_core_types=>ty_s_config", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_actual", undefined, {}, {});
    this.ms_next = new abap.types.Structure({"o_app_call": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"}), "o_app_leave": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"}), "s_set": new abap.types.Structure({"s_view": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW-XML"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view", undefined, {}, {}), "s_view_nest": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest", undefined, {}, {}), "s_view_nest2": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-ID"}), "method_insert": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_INSERT"}), "method_destroy": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_VIEW_NEST2-METHOD_DESTROY"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_view_nest2", undefined, {}, {}), "s_popup": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPUP-ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popup", undefined, {}, {}), "s_popover": new abap.types.Structure({"xml": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-XML"}), "id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-ID"}), "open_by_id": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_POPOVER-OPEN_BY_ID"}), "check_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_update_model": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_popover", undefined, {}, {}), "s_msg_box": new abap.types.Structure({"type": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TYPE"}), "text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_BOX-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_box", undefined, {}, {}), "s_msg_toast": new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_NEXT_FRONTEND-S_MSG_TOAST-TEXT"})}, "z2ui5_if_core_types=>ty_s_next_frontend-s_msg_toast", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next_frontend", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_next", undefined, {}, {});
  }
  async constructor_(INPUT) {
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_CL_CORE_HTTP_POST") { val = undefined; }
    if (val === undefined) { val = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"}).set(INPUT.val); }
    this.mo_http_post.set(val);
    this.mo_app.set(await (new abap.Classes['Z2UI5_CL_CORE_APP']()).constructor_());
    return this;
  }
  async factory_by_frontend() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    result.set(await (new abap.Classes['Z2UI5_CL_CORE_ACTION']()).constructor_({val: this.mo_http_post}));
    result.get().mo_app.set((await abap.Classes['Z2UI5_CL_CORE_APP'].db_load({id: this.mo_http_post.get().ms_request.get().s_front.get().id})));
    result.get().mo_app.get().ms_draft.get().id.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
    result.get().mo_app.get().ms_draft.get().id_prev.set(this.mo_http_post.get().ms_request.get().s_front.get().id);
    result.get().ms_actual.get().view.set(this.mo_http_post.get().ms_request.get().s_front.get().view);
    await result.get().mo_app.get().model_json_parse({iv_view: this.mo_http_post.get().ms_request.get().s_front.get().view, io_model: this.mo_http_post.get().ms_request.get().o_model});
    result.get().ms_actual.get().event.set(this.mo_http_post.get().ms_request.get().s_front.get().event);
    result.get().ms_actual.get().t_event_arg.set(this.mo_http_post.get().ms_request.get().s_front.get().t_event_arg);
    result.get().ms_actual.get().check_on_navigated.set(abap.builtin.abap_false);
    return result;
  }
  async factory_first_start() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let li_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      result.set(await (new abap.Classes['Z2UI5_CL_CORE_ACTION']()).constructor_({val: this.mo_http_post}));
      result.get().mo_app.get().ms_draft.get().id.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
      let unique120 = abap.Classes["CLAS-Z2UI5_CL_CORE_ACTION-"+this.mo_http_post.get().ms_request.get().s_control.get().app_start.get().trimEnd()];
      if (unique120 === undefined) { unique120 = abap.Classes[this.mo_http_post.get().ms_request.get().s_control.get().app_start.get().trimEnd()]; }
      if (unique120 === undefined) { throw new abap.Classes['CX_SY_CREATE_OBJECT_ERROR']; }
      result.get().mo_app.get().mo_app.set(await (new unique120()).constructor_());
      await abap.statements.cast(temp1, result.get().mo_app.get().mo_app);
      li_app.set(temp1);
      li_app.get().z2ui5_if_app$id_draft.set(result.get().mo_app.get().ms_draft.get().id);
      result.get().ms_actual.get().check_on_navigated.set(abap.builtin.abap_true);
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        const unique119 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: abap.operators.concat(new abap.types.String().set(`App with name `),abap.operators.concat(this.mo_http_post.get().ms_request.get().s_control.get().app_start,new abap.types.String().set(` not found...`))), previous: x});
        unique119.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_action.clas.abap","INTERNAL_LINE": 109};
        throw unique119;
      } else {
        throw e;
      }
    }
    return result;
  }
  async factory_stack_call() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    result.set((await this.prepare_app_stack({val: this.ms_next.get().o_app_call})));
    result.get().mo_app.get().ms_draft.get().id_prev_app_stack.set(this.mo_app.get().ms_draft.get().id);
    return result;
  }
  async factory_stack_leave() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    let lo_draft = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_DRAFT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_DRAFT_SRV"});
    let ls_draft = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {});
    result.set((await this.prepare_app_stack({val: this.ms_next.get().o_app_leave})));
    try {
      lo_draft.set(await (new abap.Classes['Z2UI5_CL_CORE_DRAFT_SRV']()).constructor_());
      ls_draft.set((await lo_draft.get().read_info({id: this.ms_next.get().o_app_leave.get().z2ui5_if_app$id_draft})));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        result.get().mo_app.get().ms_draft.get().id_prev_app_stack.set(this.mo_app.get().ms_draft.get().id_prev_app_stack);
        return result;
      } else {
        throw e;
      }
    }
    if (abap.compare.initial(this.mo_app.get().ms_draft.get().id_prev_app_stack) === false) {
      ls_draft.set((await lo_draft.get().read_info({id: this.mo_app.get().ms_draft.get().id_prev_app_stack})));
      result.get().mo_app.get().ms_draft.get().id_prev_app_stack.set(ls_draft.get().id_prev_app_stack);
    }
    return result;
  }
  async factory_system_error(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    let ix = INPUT?.ix;
    if (ix?.getQualifiedName === undefined || ix.getQualifiedName() !== "CX_ROOT") { ix = undefined; }
    if (ix === undefined) { ix = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.ix); }
    result.set(await (new abap.Classes['Z2UI5_CL_CORE_ACTION']()).constructor_({val: this.mo_http_post}));
    result.get().mo_app.get().ms_draft.get().id.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
    result.get().ms_actual.get().check_on_navigated.set(abap.builtin.abap_true);
    result.get().ms_next.get().o_app_call.set((await abap.Classes['Z2UI5_CL_CORE_APP_ERROR'].factory({error: ix})));
    result.set((await result.get().factory_stack_call()));
    return result;
  }
  async factory_system_startup() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let li_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    result.set(await (new abap.Classes['Z2UI5_CL_CORE_ACTION']()).constructor_({val: this.mo_http_post}));
    result.get().mo_app.get().ms_draft.get().id.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
    result.get().ms_actual.get().check_on_navigated.set(abap.builtin.abap_true);
    result.get().mo_app.get().mo_app.set((await abap.Classes['Z2UI5_CL_CORE_APP_STARTUP'].factory()));
    await abap.statements.cast(temp2, result.get().mo_app.get().mo_app);
    li_app.set(temp2);
    li_app.get().z2ui5_if_app$id_draft.set(result.get().mo_app.get().ms_draft.get().id);
    return result;
  }
  async prepare_app_stack(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_IF_APP") { val = undefined; }
    if (val === undefined) { val = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"}).set(INPUT.val); }
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    await this.mo_app.get().db_save();
    if (abap.compare.initial(val.get().z2ui5_if_app$id_draft)) {
      temp3.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
    } else {
      temp3.set(this.ms_next.get().o_app_leave.get().z2ui5_if_app$id_draft);
    }
    val.get().z2ui5_if_app$id_draft.set(temp3);
    result.set(await (new abap.Classes['Z2UI5_CL_CORE_ACTION']()).constructor_({val: this.mo_http_post}));
    try {
      result.get().mo_app.set((await abap.Classes['Z2UI5_CL_CORE_APP'].db_load_by_app({app: val})));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        result.get().mo_app.get().mo_app.set(val);
      } else {
        throw e;
      }
    }
    result.get().mo_app.get().ms_draft.get().id.set(val.get().z2ui5_if_app$id_draft);
    result.get().mo_app.get().ms_draft.get().id_prev.set(this.mo_app.get().ms_draft.get().id);
    result.get().mo_app.get().ms_draft.get().id_prev_app.set(this.mo_app.get().ms_draft.get().id);
    result.get().ms_actual.get().check_on_navigated.set(abap.builtin.abap_true);
    result.get().ms_next.get().s_set.set(this.ms_next.get().s_set);
    return result;
  }
}
abap.Classes['Z2UI5_CL_CORE_ACTION'] = z2ui5_cl_core_action;
export {z2ui5_cl_core_action};
//# sourceMappingURL=z2ui5_cl_core_action.clas.mjs.map