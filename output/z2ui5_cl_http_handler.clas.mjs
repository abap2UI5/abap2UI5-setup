const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_http_handler.clas.abap
class z2ui5_cl_http_handler {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_HTTP_HANDLER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"SO_STICKY_HANDLER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});}, "visibility": "O", "is_constant": " ", "is_class": "X"},
  "MO_SERVER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_ABAP_API_HTTP", RTTIName: "\\CLASS=Z2UI5_CL_ABAP_API_HTTP"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MS_REQ": {"type": () => {return new abap.types.Structure({"method": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQ-METHOD"}), "body": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQ-BODY"})}, "z2ui5_if_core_types=>ty_s_http_req", undefined, {}, {});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MS_RES": {"type": () => {return new abap.types.Structure({"body": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-BODY"}), "status_code": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-STATUS_CODE"}), "status_reason": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-STATUS_REASON"}), "t_header": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "s_stateful": new abap.types.Structure({"active": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-S_STATEFUL-ACTIVE"}), "switched": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_http_res-s_stateful", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_res", undefined, {}, {});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MS_CONFIG": {"type": () => {return new abap.types.Structure({"src": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-SRC"}), "theme": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-THEME"}), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CONTENT_SECURITY_POLICY"}), "styles_css": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-STYLES_CSS"}), "title": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-TITLE"}), "t_add_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CUSTOM_JS"})}, "z2ui5_if_types=>ty_s_http_config", undefined, {}, {});}, "visibility": "O", "is_constant": " ", "is_class": " "}};
  static METHODS = {"HTTP_GET": {"visibility": "O", "parameters": {}},
  "HTTP_POST": {"visibility": "O", "parameters": {}},
  "SESSION_HANDLING": {"visibility": "O", "parameters": {}},
  "GET_INDEX_HTML": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_REQUEST": {"visibility": "O", "parameters": {}},
  "SET_RESPONSE": {"visibility": "O", "parameters": {}},
  "RUN": {"visibility": "U", "parameters": {"SERVER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "REQ": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "RES": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "CONFIG": {"type": () => {return new abap.types.Structure({"src": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-SRC"}), "theme": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-THEME"}), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CONTENT_SECURITY_POLICY"}), "styles_css": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-STYLES_CSS"}), "title": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-TITLE"}), "t_add_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CUSTOM_JS"})}, "z2ui5_if_types=>ty_s_http_config", undefined, {}, {});}, "is_optional": " "}}},
  "FACTORY_CLOUD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_HTTP_HANDLER", RTTIName: "\\CLASS=Z2UI5_CL_HTTP_HANDLER"});}, "is_optional": " "}, "REQ": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "RES": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}}},
  "FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_HTTP_HANDLER", RTTIName: "\\CLASS=Z2UI5_CL_HTTP_HANDLER"});}, "is_optional": " "}, "SERVER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "REQ": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "RES": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}}},
  "MAIN": {"visibility": "U", "parameters": {"S_CONFIG": {"type": () => {return new abap.types.Structure({"src": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-SRC"}), "theme": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-THEME"}), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CONTENT_SECURITY_POLICY"}), "styles_css": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-STYLES_CSS"}), "title": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-TITLE"}), "t_add_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CUSTOM_JS"})}, "z2ui5_if_types=>ty_s_http_config", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.so_sticky_handler = z2ui5_cl_http_handler.so_sticky_handler;
    this.mo_server = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_ABAP_API_HTTP", RTTIName: "\\CLASS=Z2UI5_CL_ABAP_API_HTTP"});
    this.ms_req = new abap.types.Structure({"method": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQ-METHOD"}), "body": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_REQ-BODY"})}, "z2ui5_if_core_types=>ty_s_http_req", undefined, {}, {});
    this.ms_res = new abap.types.Structure({"body": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-BODY"}), "status_code": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-STATUS_CODE"}), "status_reason": new abap.types.String({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-STATUS_REASON"}), "t_header": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "s_stateful": new abap.types.Structure({"active": new abap.types.Integer({qualifiedName: "Z2UI5_IF_CORE_TYPES=>TY_S_HTTP_RES-S_STATEFUL-ACTIVE"}), "switched": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_core_types=>ty_s_http_res-s_stateful", undefined, {}, {})}, "z2ui5_if_core_types=>ty_s_http_res", undefined, {}, {});
    this.ms_config = new abap.types.Structure({"src": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-SRC"}), "theme": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-THEME"}), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CONTENT_SECURITY_POLICY"}), "styles_css": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-STYLES_CSS"}), "title": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-TITLE"}), "t_add_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CUSTOM_JS"})}, "z2ui5_if_types=>ty_s_http_config", undefined, {}, {});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async main(INPUT) {
    let s_config = new abap.types.Structure({"src": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-SRC"}), "theme": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-THEME"}), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CONTENT_SECURITY_POLICY"}), "styles_css": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-STYLES_CSS"}), "title": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-TITLE"}), "t_add_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CUSTOM_JS"})}, "z2ui5_if_types=>ty_s_http_config", undefined, {}, {});
    if (INPUT && INPUT.s_config) {s_config.set(INPUT.s_config);}
    this.ms_config.set(s_config);
    await this.set_request();
    let unique175 = this.ms_req.get().method;
    if (abap.compare.eq(unique175, new abap.types.String().set(`GET`))) {
      await this.http_get();
    } else if (abap.compare.eq(unique175, new abap.types.String().set(`POST`))) {
      await this.http_post();
    } else if (abap.compare.eq(unique175, new abap.types.String().set(`HEAD`))) {
      await this.mo_server.get().set_session_stateful({val: abap.IntegerFactory.get(0)});
      return;
    }
    await this.set_response();
    await this.session_handling();
  }
  async factory(INPUT) {
    return z2ui5_cl_http_handler.factory(INPUT);
  }
  static async factory(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_HTTP_HANDLER", RTTIName: "\\CLASS=Z2UI5_CL_HTTP_HANDLER"});
    let server = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    if (INPUT && INPUT.server) {server.set(INPUT.server);}
    let req = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    if (INPUT && INPUT.req) {req.set(INPUT.req);}
    let res = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    if (INPUT && INPUT.res) {res.set(INPUT.res);}
    result.set(await (new abap.Classes['Z2UI5_CL_HTTP_HANDLER']()).constructor_());
    if (abap.compare.initial(server) === false) {
      result.get().mo_server.set((await abap.Classes['Z2UI5_CL_ABAP_API_HTTP'].factory({server: server})));
    } else if (abap.compare.initial(req) === false && abap.compare.initial(res) === false) {
      result.set((await this.factory_cloud({req: req, res: res})));
    } else {
      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.String().set(`EMPTY_HTTP_HANDLER_CALL_ERROR`)));
    }
    return result;
  }
  async factory_cloud(INPUT) {
    return z2ui5_cl_http_handler.factory_cloud(INPUT);
  }
  static async factory_cloud(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_HTTP_HANDLER", RTTIName: "\\CLASS=Z2UI5_CL_HTTP_HANDLER"});
    let req = INPUT?.req;
    if (req === undefined) { req = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.req); }
    let res = INPUT?.res;
    if (res === undefined) { res = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.res); }
    result.set(await (new abap.Classes['Z2UI5_CL_HTTP_HANDLER']()).constructor_());
    result.get().mo_server.set((await abap.Classes['Z2UI5_CL_ABAP_API_HTTP'].factory_cloud({req: req, res: res})));
    return result;
  }
  async http_get() {
    this.ms_res.get().body.set((await this.get_index_html()));
  }
  async http_post() {
    let lo_post = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let li_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    if (abap.compare.initial(z2ui5_cl_http_handler.so_sticky_handler)) {
      lo_post.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_POST']()).constructor_({val: this.ms_req.get().body}));
    } else {
      lo_post.set(z2ui5_cl_http_handler.so_sticky_handler);
      lo_post.get().mv_request_json.set(this.ms_req.get().body);
    }
    this.ms_res.set((await lo_post.get().main()));
    try {
      if (abap.compare.initial(lo_post) === false) {
        await abap.statements.cast(temp1, lo_post.get().mo_action.get().mo_app.get().mo_app);
        li_app.set(temp1);
        if (abap.compare.eq(li_app.get().z2ui5_if_app$check_sticky, abap.builtin.abap_true)) {
          z2ui5_cl_http_handler.so_sticky_handler.set(lo_post);
        } else {
          abap.statements.clear(z2ui5_cl_http_handler.so_sticky_handler);
        }
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
  }
  async session_handling() {
    let lv_contextid = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(this.ms_res.get().s_stateful.get().switched, abap.builtin.abap_true)) {
      await this.mo_server.get().set_session_stateful({val: this.ms_res.get().s_stateful.get().active});
      if (abap.compare.eq((await this.mo_server.get().get_header_field({val: new abap.types.Character(20).set('sap-contextid-accept')})), new abap.types.Character(6).set('header'))) {
        lv_contextid.set((await this.mo_server.get().get_response_cookie({val: new abap.types.Character(13).set('sap-contextid')})));
        if (abap.compare.initial(lv_contextid) === false) {
          await this.mo_server.get().delete_response_cookie({val: new abap.types.Character(13).set('sap-contextid')});
          await this.mo_server.get().set_header_field({n: new abap.types.Character(13).set('sap-contextid'), v: lv_contextid});
        }
      }
    } else {
      lv_contextid.set((await this.mo_server.get().get_header_field({val: new abap.types.Character(13).set('sap-contextid')})));
      if (abap.compare.initial(lv_contextid) === false) {
        await this.mo_server.get().set_header_field({n: new abap.types.Character(13).set('sap-contextid'), v: lv_contextid});
      }
    }
  }
  async get_index_html() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let lv_style_css = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let lr_config = new abap.types.DataReference(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}));
    if (abap.compare.initial(this.ms_config.get().title)) {
      this.ms_config.get().title.set(new abap.types.String().set(`abap2UI5`));
    }
    if (abap.compare.initial(this.ms_config.get().theme)) {
      this.ms_config.get().theme.set(new abap.types.String().set(`sap_horizon`));
    }
    if (abap.compare.initial(this.ms_config.get().src)) {
      this.ms_config.get().src.set(new abap.types.String().set(`https://sdk.openui5.org/resources/sap-ui-cachebuster/sap-ui-core.js`));
    }
    if (abap.compare.initial(this.ms_config.get().content_security_policy)) {
      this.ms_config.get().content_security_policy.set(abap.operators.concat(new abap.types.String().set(`<meta http-equiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' data: `),abap.operators.concat(new abap.types.String().set(`ui5.sap.com *.ui5.sap.com sapui5.hana.ondemand.com *.sapui5.hana.ondemand.com openui5.hana.ondemand.com *.openui5.hana.ondemand.com `),new abap.types.String().set(`sdk.openui5.org *.sdk.openui5.org cdn.jsdelivr.net *.cdn.jsdelivr.net cdnjs.cloudflare.com *.cdnjs.cloudflare.com schemas *.schemas"/>`))));
    }
    if (abap.compare.initial(this.ms_config.get().styles_css)) {
      lv_style_css.set((await abap.Classes['Z2UI5_CL_APP_STYLE_CSS'].get()));
    } else {
      lv_style_css.set(this.ms_config.get().styles_css);
    }
    result.set(abap.operators.concat(new abap.types.String().set(`<!DOCTYPE html>`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`<html lang="en">`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`<head>`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(this.ms_config.get().content_security_policy,abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    <meta charset="UTF-8">`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    <meta name="viewport" content="width=device-width, initial-scale=1.0">`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    <meta http-equiv="X-UA-Compatible" content="IE=edge">`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` <title> ${abap.templateFormatting(this.ms_config.get().title)}</title> \n`),abap.operators.concat(new abap.types.String().set(` <style>        html, body, body > div, #container, #container-uiarea \{\n`),abap.operators.concat(new abap.types.String().set(`            height: 100%;\n`),abap.operators.concat(new abap.types.String().set(`        \}</style> \n`),abap.operators.concat(new abap.types.String().set(`<script>`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  function onInitComponent(){`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    sap.ui.require.preload({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/manifest.json": '`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_MANIFEST_JSON'].get()),abap.operators.concat(new abap.types.String().set(`',`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/Component.js": function(){`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_COMPONENT_JS'].get()),abap.operators.concat(this.ms_config.get().custom_js,abap.operators.concat(new abap.types.String().set(`},`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/css/style.css": '`),abap.operators.concat(lv_style_css,abap.operators.concat(new abap.types.String().set(`',`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/model/models.js": function(){`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_MODELS_JS'].get()),abap.operators.concat(new abap.types.String().set(`},`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/view/App.view.xml": '`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_APP_XML'].get()),abap.operators.concat(new abap.types.String().set(`',`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/controller/App.controller.js": function(){`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_APP_JS'].get()),abap.operators.concat(new abap.types.String().set(`},`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/view/View1.view.xml": '`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_VIEW1_XML'].get()),abap.operators.concat(new abap.types.String().set(`',`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/controller/View1.controller.js": function(){`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_VIEW1_JS'].get()),abap.operators.concat(new abap.types.String().set(`},`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/cc/Server.js": function(){`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_SERVER_JS'].get()),abap.operators.concat(new abap.types.String().set(`},`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/cc/DebugTool.fragment.xml": '`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_DEBUGTOOL_XML'].get()),abap.operators.concat(new abap.types.String().set(`',`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`      "z2ui5/cc/DebugTool.js": function(){`),abap.operators.concat((await abap.Classes['Z2UI5_CL_APP_DEBUGTOOL_JS'].get()),abap.operators.concat(new abap.types.String().set(`},`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    sap.ui.require(["sap/ui/core/ComponentSupport"], function(ComponentSupport){`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     window.z2ui5 = { checkLocal : true }; ComponentSupport.run();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`</script>`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`<script id="sap-ui-bootstrap" data-sap-ui-resourceroots='{ "z2ui5": "./" }' data-sap-ui-oninit="onInitComponent" `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`data-sap-ui-compatVersion="edge" data-sap-ui-async="true" data-sap-ui-frameOptions="trusted" data-sap-ui-bindingSyntax="complex"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`data-sap-ui-theme="`),abap.operators.concat(this.ms_config.get().theme,abap.operators.concat(new abap.types.String().set(`" src=" `),abap.operators.concat(this.ms_config.get().src,new abap.types.String().set(`"   `)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
    for await (const unique176 of abap.statements.loop(this.ms_config.get().t_add_config)) {
      lr_config.assign(unique176);
      result.set(abap.operators.concat(result,new abap.types.String().set(` ${abap.templateFormatting(lr_config.get().n)}='${abap.templateFormatting(lr_config.get().v)}'`)));
    }
    result.set(abap.operators.concat(result,abap.operators.concat(new abap.types.String().set(` ></script></head>`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`<body class="sapUiBody sapUiSizeCompact" id="content">`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    <div data-sap-ui-component data-name="z2ui5" data-id="container" data-settings='{"id" : "z2ui5"}' data-handle-validation="true"></div>`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(` </body></html>`)))))))));
    return result;
  }
  async run(INPUT) {
    return z2ui5_cl_http_handler.run(INPUT);
  }
  static async run(INPUT) {
    let server = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    if (INPUT && INPUT.server) {server.set(INPUT.server);}
    let req = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    if (INPUT && INPUT.req) {req.set(INPUT.req);}
    let res = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    if (INPUT && INPUT.res) {res.set(INPUT.res);}
    let config = new abap.types.Structure({"src": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-SRC"}), "theme": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-THEME"}), "content_security_policy": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CONTENT_SECURITY_POLICY"}), "styles_css": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-STYLES_CSS"}), "title": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-TITLE"}), "t_add_config": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value"), "custom_js": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_HTTP_CONFIG-CUSTOM_JS"})}, "z2ui5_if_types=>ty_s_http_config", undefined, {}, {});
    if (INPUT && INPUT.config) {config.set(INPUT.config);}
    let lo_handler = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_HTTP_HANDLER", RTTIName: "\\CLASS=Z2UI5_CL_HTTP_HANDLER"});
    lo_handler.set((await this.factory({server: server, req: req, res: res})));
    await lo_handler.get().main({s_config: config});
  }
  async set_request() {
    this.ms_req.get().body.set((await this.mo_server.get().get_cdata()));
    this.ms_req.get().method.set((await this.mo_server.get().get_method()));
  }
  async set_response() {
    await this.mo_server.get().set_cdata({val: this.ms_res.get().body});
    await this.mo_server.get().set_header_field({n: new abap.types.String().set(`cache-control`), v: new abap.types.String().set(`no-cache`)});
    await this.mo_server.get().set_status({code: abap.IntegerFactory.get(200), reason: new abap.types.String().set(`success`)});
  }
}
abap.Classes['Z2UI5_CL_HTTP_HANDLER'] = z2ui5_cl_http_handler;
z2ui5_cl_http_handler.so_sticky_handler = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_POST", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_POST"});
export {z2ui5_cl_http_handler};
//# sourceMappingURL=z2ui5_cl_http_handler.clas.mjs.map