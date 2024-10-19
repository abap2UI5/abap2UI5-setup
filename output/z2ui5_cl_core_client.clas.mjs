const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_client.clas.abap
class z2ui5_cl_core_client {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_CLIENT';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_CLIENT"];
  static ATTRIBUTES = {"MO_ACTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_CLIENT~CS_EVENT": {"type": () => {return new abap.types.Structure({"popup_close": new abap.types.String({qualifiedName: "STRING"}), "open_new_tab": new abap.types.String({qualifiedName: "STRING"}), "popover_close": new abap.types.String({qualifiedName: "STRING"}), "location_reload": new abap.types.String({qualifiedName: "STRING"}), "nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "nest_nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "nest2_nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "cross_app_nav_to_ext": new abap.types.String({qualifiedName: "STRING"}), "cross_app_nav_to_prev_app": new abap.types.String({qualifiedName: "STRING"}), "popup_nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "download_b64_file": new abap.types.String({qualifiedName: "STRING"}), "set_size_limit": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_CLIENT~CS_VIEW": {"type": () => {return new abap.types.Structure({"main": new abap.types.String({qualifiedName: "STRING"}), "nested": new abap.types.String({qualifiedName: "STRING"}), "nested2": new abap.types.String({qualifiedName: "STRING"}), "popup": new abap.types.String({qualifiedName: "STRING"}), "popover": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"ACTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_action = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"});
    this.z2ui5_if_client$cs_event = abap.Classes['Z2UI5_IF_CLIENT'].z2ui5_if_client$cs_event;
    this.z2ui5_if_client$cs_view = abap.Classes['Z2UI5_IF_CLIENT'].z2ui5_if_client$cs_view;
  }
  async constructor_(INPUT) {
    let action = INPUT?.action;
    if (action?.getQualifiedName === undefined || action.getQualifiedName() !== "Z2UI5_CL_CORE_ACTION") { action = undefined; }
    if (action === undefined) { action = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_ACTION", RTTIName: "\\CLASS=Z2UI5_CL_CORE_ACTION"}).set(INPUT.action); }
    this.mo_action.set(action);
    return this;
  }
  async z2ui5_if_client$follow_up_action(INPUT) {
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "STRING") { val = undefined; }
    if (val === undefined) { val = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.val); }
    this.mo_action.get().ms_next.get().s_set.get().s_follow_up_action.get().custom_js.set(val);
  }
  async z2ui5_if_client$get() {
    let result = new abap.types.Structure({"event": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-EVENT"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "check_launchpad_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_on_navigated": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "viewname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-VIEWNAME"}), "s_draft": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {}), "s_config": new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-HASH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_config", undefined, {}, {}), "t_comp_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_get", undefined, {}, {});
    let lo_params = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON"});
    let temp1 = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    let lr_comp = new abap.types.DataReference(new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {}));
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(result);
    result.get().event.set(this.mo_action.get().ms_actual.get().event);
    result.get().check_launchpad_active.set(this.mo_action.get().mo_http_post.get().ms_request.get().s_control.get().check_launchpad);
    result.get().t_event_arg.set(this.mo_action.get().ms_actual.get().t_event_arg);
    abap.statements.moveCorresponding(this.mo_action.get().mo_app.get().ms_draft, result.get().s_draft);
    result.get().check_on_navigated.set(this.mo_action.get().ms_actual.get().check_on_navigated);
    abap.statements.moveCorresponding(this.mo_action.get().mo_http_post.get().ms_request.get().s_front, result.get().s_config);
    try {
      lo_params.set((await this.mo_action.get().mo_http_post.get().ms_request.get().s_front.get().o_comp_data.get().z2ui5_if_ajson$slice({iv_path: new abap.types.String().set(`/startupParameters/`)})));
      if (abap.compare.initial(lo_params)) {
        return result;
      }
      for await (const unique131 of abap.statements.loop(lo_params.get().z2ui5_if_ajson$mt_json_tree,{where: async (I) => {return abap.compare.eq(I.name, new abap.types.String().set(`1`));},topEquals: {"name": new abap.types.String().set(`1`)}})) {
        lr_comp.assign(unique131);
        abap.statements.clear(temp2);
        temp2.get().n.set(abap.builtin.shift_left({val: abap.builtin.shift_right({val: lr_comp.get().path, sub: new abap.types.String().set(`/`)}), sub: new abap.types.String().set(`/`)}));
        temp2.get().v.set(lr_comp.get().value);
        abap.statements.insertInternal({data: temp2, table: result.get().t_comp_params});
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    return result;
  }
  async z2ui5_if_client$get_event_arg(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let v = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.v) {v.set(INPUT.v);}
    if (INPUT === undefined || INPUT.v === undefined) {v = abap.IntegerFactory.get(1);}
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    try {
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.mo_action.get().ms_actual.get().t_event_arg,{index: v,
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      result.set(temp3);
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    return result;
  }
  async z2ui5_if_client$get_app(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let id = INPUT?.id || new abap.types.Character();
    let lo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP"});
    let temp5 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let temp6 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    if (abap.compare.initial(id) === false) {
      lo_app.set((await abap.Classes['Z2UI5_CL_CORE_APP'].db_load({id: id})));
      await abap.statements.cast(temp5, lo_app.get().mo_app);
      result.set(temp5);
    } else {
      await abap.statements.cast(temp6, this.mo_action.get().mo_app.get().mo_app);
      result.set(temp6);
    }
    return result;
  }
  async z2ui5_if_client$message_box_display(INPUT) {
    let text = INPUT?.text;
    let type = INPUT?.type || new abap.types.Character();
    if (INPUT === undefined || INPUT.type === undefined) {type = new abap.types.String().set(`information`);}
    let title = INPUT?.title || new abap.types.Character();
    let styleclass = INPUT?.styleclass || new abap.types.Character();
    let onclose = INPUT?.onclose || new abap.types.Character();
    let actions = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (INPUT && INPUT.actions) {actions.set(INPUT.actions);}
    let emphasizedaction = INPUT?.emphasizedaction || new abap.types.Character();
    let initialfocus = INPUT?.initialfocus || new abap.types.Character();
    let textdirection = INPUT?.textdirection || new abap.types.Character();
    let icon = INPUT?.icon || new abap.types.Character();
    let details = INPUT?.details || new abap.types.Character();
    let closeonnavigation = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.closeonnavigation) {closeonnavigation.set(INPUT.closeonnavigation);}
    if (INPUT === undefined || INPUT.closeonnavigation === undefined) {closeonnavigation = abap.builtin.abap_true;}
    abap.statements.clear(this.mo_action.get().ms_next.get().s_set.get().s_msg_box);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().text.set(text);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().type.set(type);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().title.set(title);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().styleclass.set(styleclass);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().onclose.set(onclose);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().actions.set(actions);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().emphasizedaction.set(emphasizedaction);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().initialfocus.set(initialfocus);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().textdirection.set(textdirection);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().icon.set(icon);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().details.set(details);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_box.get().closeonnavigation.set(closeonnavigation);
  }
  async z2ui5_if_client$message_toast_display(INPUT) {
    let text = INPUT?.text;
    let duration = INPUT?.duration || new abap.types.Character();
    let width = INPUT?.width || new abap.types.Character();
    let my = INPUT?.my || new abap.types.Character();
    let at = INPUT?.at || new abap.types.Character();
    let of = INPUT?.of || new abap.types.Character();
    let offset = INPUT?.offset || new abap.types.Character();
    let collision = INPUT?.collision || new abap.types.Character();
    let onclose = INPUT?.onclose || new abap.types.Character();
    if (INPUT === undefined || INPUT.onclose === undefined) {onclose = new abap.types.String().set(``);}
    let autoclose = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.autoclose) {autoclose.set(INPUT.autoclose);}
    if (INPUT === undefined || INPUT.autoclose === undefined) {autoclose = abap.builtin.abap_true;}
    let animationtimingfunction = INPUT?.animationtimingfunction || new abap.types.Character();
    let animationduration = INPUT?.animationduration || new abap.types.Character();
    let closeonbrowsernavigation = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.closeonbrowsernavigation) {closeonbrowsernavigation.set(INPUT.closeonbrowsernavigation);}
    if (INPUT === undefined || INPUT.closeonbrowsernavigation === undefined) {closeonbrowsernavigation = abap.builtin.abap_true;}
    let $class = INPUT?.class || new abap.types.Character();
    abap.statements.clear(this.mo_action.get().ms_next.get().s_set.get().s_msg_toast);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().text.set(text);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().duration.set(duration);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().width.set(width);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().my.set(my);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().at.set(at);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().of.set(of);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().offset.set(offset);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().collision.set(collision);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().onclose.set(onclose);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().autoclose.set(autoclose);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().animationtimingfunction.set(animationtimingfunction);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().animationduration.set(animationduration);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().closeonbrowsernavigation.set(closeonbrowsernavigation);
    this.mo_action.get().ms_next.get().s_set.get().s_msg_toast.get().class.set($class);
  }
  async z2ui5_if_client$nav_app_call(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let app = INPUT?.app;
    if (app?.getQualifiedName === undefined || app.getQualifiedName() !== "Z2UI5_IF_APP") { app = undefined; }
    if (app === undefined) { app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"}).set(INPUT.app); }
    if (abap.compare.initial(app)) {
      await abap.Classes['Z2UI5_CL_UTIL'].x_raise({v: new abap.types.String().set(`NAV_APP_LEAVE_TO_INITIAL_APP_ERROR`)});
    }
    this.mo_action.get().ms_next.get().o_app_call.set(app);
    if (abap.compare.initial(app.get().z2ui5_if_app$id_app)) {
      app.get().z2ui5_if_app$id_app.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
    }
    result.set(app.get().z2ui5_if_app$id_app);
    return result;
  }
  async z2ui5_if_client$nav_app_leave(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    if (INPUT && INPUT.app) {app.set(INPUT.app);}
    if (INPUT && INPUT.app === undefined) {
      app.set((await this.z2ui5_if_client$get_app({id: ((await this.z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack})));
    }
    if (abap.compare.initial(app)) {
      await abap.Classes['Z2UI5_CL_UTIL'].x_raise({v: new abap.types.String().set(`NAV_APP_LEAVE_TO_INITIAL_APP_ERROR`)});
    }
    this.mo_action.get().ms_next.get().o_app_leave.set(app);
    if (abap.compare.initial(app.get().z2ui5_if_app$id_app)) {
      app.get().z2ui5_if_app$id_app.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
    }
    result.set(app.get().z2ui5_if_app$id_app);
    return result;
  }
  async z2ui5_if_client$nest2_view_destroy() {
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest2.get().check_update_model.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$nest2_view_display(INPUT) {
    let val = INPUT?.val;
    let id = INPUT?.id;
    let method_insert = INPUT?.method_insert;
    let method_destroy = INPUT?.method_destroy || new abap.types.Character();
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest2.get().xml.set(val);
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest2.get().id.set(id);
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest2.get().method_destroy.set(method_destroy);
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest2.get().method_insert.set(method_insert);
  }
  async z2ui5_if_client$nest2_view_model_update() {
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest2.get().check_update_model.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$nest_view_destroy() {
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest.get().check_update_model.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$nest_view_display(INPUT) {
    let val = INPUT?.val;
    let id = INPUT?.id;
    let method_insert = INPUT?.method_insert;
    let method_destroy = INPUT?.method_destroy || new abap.types.Character();
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest.get().xml.set(val);
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest.get().id.set(id);
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest.get().method_destroy.set(method_destroy);
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest.get().method_insert.set(method_insert);
  }
  async z2ui5_if_client$nest_view_model_update() {
    this.mo_action.get().ms_next.get().s_set.get().s_view_nest.get().check_update_model.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$popover_destroy() {
    this.mo_action.get().ms_next.get().s_set.get().s_popover.get().check_destroy.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$popover_display(INPUT) {
    let xml = INPUT?.xml;
    let by_id = INPUT?.by_id;
    this.mo_action.get().ms_next.get().s_set.get().s_popover.get().check_destroy.set(abap.builtin.abap_false);
    this.mo_action.get().ms_next.get().s_set.get().s_popover.get().xml.set(xml);
    this.mo_action.get().ms_next.get().s_set.get().s_popover.get().open_by_id.set(by_id);
  }
  async z2ui5_if_client$popover_model_update() {
    this.mo_action.get().ms_next.get().s_set.get().s_popover.get().check_update_model.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$popup_destroy() {
    abap.statements.clear(this.mo_action.get().ms_next.get().s_set.get().s_popup);
    this.mo_action.get().ms_next.get().s_set.get().s_popup.get().check_destroy.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$popup_display(INPUT) {
    let val = INPUT?.val;
    this.mo_action.get().ms_next.get().s_set.get().s_popup.get().check_destroy.set(abap.builtin.abap_false);
    this.mo_action.get().ms_next.get().s_set.get().s_popup.get().xml.set(val);
  }
  async z2ui5_if_client$popup_model_update() {
    this.mo_action.get().ms_next.get().s_set.get().s_popup.get().check_update_model.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$view_destroy() {
    this.mo_action.get().ms_next.get().s_set.get().s_view.get().check_destroy.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$view_display(INPUT) {
    let val = INPUT?.val;
    this.mo_action.get().ms_next.get().s_set.get().s_view.get().xml.set(val);
  }
  async z2ui5_if_client$view_model_update() {
    this.mo_action.get().ms_next.get().s_set.get().s_view.get().check_update_model.set(abap.builtin.abap_true);
  }
  async z2ui5_if_client$_bind(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let path = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    if (INPUT === undefined || INPUT.path === undefined) {path = abap.builtin.abap_false;}
    let custom_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.custom_mapper) {custom_mapper.set(INPUT.custom_mapper);}
    let custom_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    if (INPUT && INPUT.custom_filter) {custom_filter.set(INPUT.custom_filter);}
    let tab = INPUT?.tab || new abap.types.Character(4);
    let tab_index = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.tab_index) {tab_index.set(INPUT.tab_index);}
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp7 = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: this.mo_action.get().mo_app}));
    abap.statements.clear(temp7);
    temp7.get().path_only.set(path);
    temp7.get().custom_filter.set(custom_filter);
    temp7.get().custom_mapper.set(custom_mapper);
    temp7.get().tab.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_get_as_data_ref({val: tab})));
    temp7.get().tab_index.set(tab_index);
    result.set((await lo_bind.get().main({val: (await abap.Classes['Z2UI5_CL_UTIL'].conv_get_as_data_ref({val: val})), type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().one_way, config: temp7})));
    return result;
  }
  async z2ui5_if_client$_bind_edit(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let path = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    if (INPUT === undefined || INPUT.path === undefined) {path = abap.builtin.abap_false;}
    let view = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.view) {view.set(INPUT.view);}
    if (INPUT === undefined || INPUT.view === undefined) {view = abap.Classes['Z2UI5_IF_CLIENT'].z2ui5_if_client$cs_view.get().main;}
    let custom_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.custom_mapper) {custom_mapper.set(INPUT.custom_mapper);}
    let custom_mapper_back = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.custom_mapper_back) {custom_mapper_back.set(INPUT.custom_mapper_back);}
    let custom_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    if (INPUT && INPUT.custom_filter) {custom_filter.set(INPUT.custom_filter);}
    let custom_filter_back = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    if (INPUT && INPUT.custom_filter_back) {custom_filter_back.set(INPUT.custom_filter_back);}
    let tab = INPUT?.tab || new abap.types.Character(4);
    let tab_index = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.tab_index) {tab_index.set(INPUT.tab_index);}
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp8 = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: this.mo_action.get().mo_app}));
    abap.statements.clear(temp8);
    temp8.get().path_only.set(path);
    temp8.get().custom_filter.set(custom_filter);
    temp8.get().custom_filter_back.set(custom_filter_back);
    temp8.get().custom_mapper.set(custom_mapper);
    temp8.get().custom_mapper_back.set(custom_mapper_back);
    temp8.get().tab.set((await abap.Classes['Z2UI5_CL_UTIL'].conv_get_as_data_ref({val: tab})));
    temp8.get().tab_index.set(tab_index);
    result.set((await lo_bind.get().main({val: (await abap.Classes['Z2UI5_CL_UTIL'].conv_get_as_data_ref({val: val})), type: abap.Classes['Z2UI5_IF_CORE_TYPES'].z2ui5_if_core_types$cs_bind_type.get().two_way, config: temp8})));
    return result;
  }
  async z2ui5_if_client$_bind_local(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let path = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    if (INPUT === undefined || INPUT.path === undefined) {path = abap.builtin.abap_false;}
    let custom_mapper = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"});
    if (INPUT && INPUT.custom_mapper) {custom_mapper.set(INPUT.custom_mapper);}
    let custom_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"});
    if (INPUT && INPUT.custom_filter) {custom_filter.set(INPUT.custom_filter);}
    let lo_bind = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_BIND_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_BIND_SRV"});
    let temp9 = new abap.types.Structure({"path_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-VIEW"}), "custom_mapper": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_mapper_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_MAPPING", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_MAPPING"}), "custom_filter": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "custom_filter_back": new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_AJSON_FILTER", RTTIName: "\\INTERFACE=Z2UI5_IF_AJSON_FILTER"}), "tab": new abap.types.DataReference(new abap.types.Character(4)), "tab_index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_BIND_CONFIG-TAB_INDEX"})}, "z2ui5_if_core_types=>ty_s_bind_config", undefined, {}, {});
    lo_bind.set(await (new abap.Classes['Z2UI5_CL_CORE_BIND_SRV']()).constructor_({app: this.mo_action.get().mo_app}));
    abap.statements.clear(temp9);
    temp9.get().path_only.set(path);
    temp9.get().custom_mapper.set(custom_mapper);
    temp9.get().custom_filter.set(custom_filter);
    result.set((await lo_bind.get().main_local({val: val, config: temp9})));
    return result;
  }
  async z2ui5_if_client$_event(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val || new abap.types.Character();
    let t_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (INPUT && INPUT.t_arg) {t_arg.set(INPUT.t_arg);}
    let s_ctrl = new abap.types.Structure({"check_view_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_allow_multi_req": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_types=>ty_s_event_control", undefined, {}, {});
    if (INPUT && INPUT.s_ctrl) {s_ctrl.set(INPUT.s_ctrl);}
    let lo_ui5 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_EVENT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_EVENT_SRV"});
    lo_ui5.set(await (new abap.Classes['Z2UI5_CL_CORE_EVENT_SRV']()).constructor_());
    result.set((await lo_ui5.get().get_event({val: val, t_arg: t_arg, s_cnt: s_ctrl})));
    return result;
  }
  async z2ui5_if_client$_event_client(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let val = INPUT?.val;
    let t_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (INPUT && INPUT.t_arg) {t_arg.set(INPUT.t_arg);}
    let lo_ui5 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_EVENT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_EVENT_SRV"});
    lo_ui5.set(await (new abap.Classes['Z2UI5_CL_CORE_EVENT_SRV']()).constructor_());
    result.set((await lo_ui5.get().get_event_client({val: val, t_arg: t_arg})));
    return result;
  }
  async z2ui5_if_client$set_session_stateful(INPUT) {
    let stateful = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.stateful) {stateful.set(INPUT.stateful);}
    if (INPUT === undefined || INPUT.stateful === undefined) {stateful = abap.builtin.abap_true;}
    let temp10 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let lv_check_sticky = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let temp11 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let temp12 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    await abap.statements.cast(temp10, this.mo_action.get().mo_app.get().mo_app);
    lv_check_sticky.set(temp10.get().z2ui5_if_app$check_sticky);
    if (abap.compare.eq(lv_check_sticky, abap.builtin.abap_true) && abap.compare.eq(stateful, abap.builtin.abap_true)) {
      const unique132 = await (new abap.Classes['Z2UI5_CX_UTIL_ERROR']()).constructor_({val: new abap.types.String().set(`STATEFUL_ALREADY_ACTIVATED_ERROR`)});
      unique132.EXTRA_CX = {"INTERNAL_FILENAME": "z2ui5_cl_core_client.clas.abap","INTERNAL_LINE": 396};
      throw unique132;
    }
    if (abap.compare.eq(stateful, abap.builtin.abap_true)) {
      this.mo_action.get().ms_next.get().s_set.get().s_stateful.get().active.set(abap.IntegerFactory.get(1));
      await abap.statements.cast(temp11, this.mo_action.get().mo_app.get().mo_app);
      temp11.get().z2ui5_if_app$check_sticky.set(abap.builtin.abap_true);
    } else {
      this.mo_action.get().ms_next.get().s_set.get().s_stateful.get().active.set(abap.IntegerFactory.get(0));
      await abap.statements.cast(temp12, this.mo_action.get().mo_app.get().mo_app);
      temp12.get().z2ui5_if_app$check_sticky.set(abap.builtin.abap_false);
    }
    this.mo_action.get().ms_next.get().s_set.get().s_stateful.get().switched.set(abap.builtin.abap_true);
  }
}
abap.Classes['Z2UI5_CL_CORE_CLIENT'] = z2ui5_cl_core_client;
z2ui5_cl_core_client.z2ui5_if_client$cs_event = new abap.types.Structure({"popup_close": new abap.types.String({qualifiedName: "STRING"}), "open_new_tab": new abap.types.String({qualifiedName: "STRING"}), "popover_close": new abap.types.String({qualifiedName: "STRING"}), "location_reload": new abap.types.String({qualifiedName: "STRING"}), "nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "nest_nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "nest2_nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "cross_app_nav_to_ext": new abap.types.String({qualifiedName: "STRING"}), "cross_app_nav_to_prev_app": new abap.types.String({qualifiedName: "STRING"}), "popup_nav_container_to": new abap.types.String({qualifiedName: "STRING"}), "download_b64_file": new abap.types.String({qualifiedName: "STRING"}), "set_size_limit": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().popup_close.set(`POPUP_CLOSE`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().open_new_tab.set(`OPEN_NEW_TAB`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().popover_close.set(`POPOVER_CLOSE`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().location_reload.set(`LOCATION_RELOAD`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().nav_container_to.set(`NAV_CONTAINER_TO`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().nest_nav_container_to.set(`NEST_NAV_CONTAINER_TO`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().nest2_nav_container_to.set(`NEST2_NAV_CONTAINER_TO`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().cross_app_nav_to_ext.set(`CROSS_APP_NAV_TO_EXT`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().cross_app_nav_to_prev_app.set(`CROSS_APP_NAV_TO_PREV_APP`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().popup_nav_container_to.set(`POPUP_NAV_CONTAINER_TO`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().download_b64_file.set(`DOWNLOAD_B64_FILE`);
z2ui5_cl_core_client.z2ui5_if_client$cs_event.get().set_size_limit.set(`SET_SIZE_LIMIT`);
z2ui5_cl_core_client.z2ui5_if_client$cs_view = new abap.types.Structure({"main": new abap.types.String({qualifiedName: "STRING"}), "nested": new abap.types.String({qualifiedName: "STRING"}), "nested2": new abap.types.String({qualifiedName: "STRING"}), "popup": new abap.types.String({qualifiedName: "STRING"}), "popover": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
z2ui5_cl_core_client.z2ui5_if_client$cs_view.get().main.set(`MAIN`);
z2ui5_cl_core_client.z2ui5_if_client$cs_view.get().nested.set(`NEST`);
z2ui5_cl_core_client.z2ui5_if_client$cs_view.get().nested2.set(`NEST2`);
z2ui5_cl_core_client.z2ui5_if_client$cs_view.get().popup.set(`POPUP`);
z2ui5_cl_core_client.z2ui5_if_client$cs_view.get().popover.set(`POPOVER`);
export {z2ui5_cl_core_client};
//# sourceMappingURL=z2ui5_cl_core_client.clas.mjs.map