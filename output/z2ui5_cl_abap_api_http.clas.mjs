const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_abap_api_http.clas.abap
class z2ui5_cl_abap_api_http {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_ABAP_API_HTTP';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_SERVER_ONPREM": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_REQUEST_CLOUD": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MO_RESPONSE_CLOUD": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "visibility": "O", "is_constant": " ", "is_class": " "}};
  static METHODS = {"FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_ABAP_API_HTTP", RTTIName: "\\CLASS=Z2UI5_CL_ABAP_API_HTTP"});}, "is_optional": " "}, "SERVER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}}},
  "FACTORY_CLOUD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_ABAP_API_HTTP", RTTIName: "\\CLASS=Z2UI5_CL_ABAP_API_HTTP"});}, "is_optional": " "}, "REQ": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}, "RES": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}}},
  "GET_HEADER_FIELD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "GET_CDATA": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_METHOD": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_CDATA": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "SET_STATUS": {"visibility": "U", "parameters": {"CODE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "REASON": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "SET_SESSION_STATEFUL": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "GET_RESPONSE_COOKIE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "DELETE_RESPONSE_COOKIE": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "SET_HEADER_FIELD": {"visibility": "U", "parameters": {"N": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "V": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_server_onprem = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    this.mo_request_cloud = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    this.mo_response_cloud = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async delete_response_cookie(INPUT) {
    let val = INPUT?.val;
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let lv_val = new abap.types.String({qualifiedName: "STRING"});
    let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    temp1.set(val);
    lv_val.set(temp1);
    if (abap.compare.initial(this.mo_server_onprem) === false) {
      abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'RESPONSE', dynamicSource: (() => {
                  try { return this.mo_server_onprem; } catch {}
                  try { return this.this.mo_server_onprem; } catch {}
                })()});
        object.set(fs_any_);
        if (object.get().delete_cookie === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (object.get().delete_cookie === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        await object.get().delete_cookie({name: lv_val});
      } else {
      }
    }
    async get_response_cookie(INPUT) {
      let result = new abap.types.String({qualifiedName: "STRING"});
      let val = INPUT?.val;
      let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
      let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let temp2 = new abap.types.String({qualifiedName: "STRING"});
      let lv_val = new abap.types.String({qualifiedName: "STRING"});
      temp2.set(val);
      lv_val.set(temp2);
      if (abap.compare.initial(this.mo_server_onprem) === false) {
        abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'RESPONSE', dynamicSource: (() => {
                    try { return this.mo_server_onprem; } catch {}
                    try { return this.this.mo_server_onprem; } catch {}
                  })()});
          object.set(fs_any_);
          if (object.get().get_cookie === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (object.get().get_cookie === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
          await object.get().get_cookie({name: lv_val,value: result});
        } else {
        }
        return result;
      }
      async get_header_field(INPUT) {
        let result = new abap.types.String({qualifiedName: "STRING"});
        let val = INPUT?.val;
        let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
        let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
        let temp3 = new abap.types.String({qualifiedName: "STRING"});
        let lv_val = new abap.types.String({qualifiedName: "STRING"});
        temp3.set(val);
        lv_val.set(temp3);
        if (abap.compare.initial(this.mo_server_onprem) === false) {
          abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'REQUEST', dynamicSource: (() => {
                      try { return this.mo_server_onprem; } catch {}
                      try { return this.this.mo_server_onprem; } catch {}
                    })()});
            object.set(fs_any_);
            if (object.get().get_header_field === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
            if (object.get().get_header_field === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
            result.set(await object.get().get_header_field({name: lv_val}));
          } else {
            if (this.mo_request_cloud.get().if_web_http_request$get_header_field === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
            if (this.mo_request_cloud.get().if_web_http_request$get_header_field === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
            result.set(await this.mo_request_cloud.get().if_web_http_request$get_header_field({i_name: lv_val}));
          }
          return result;
        }
        async set_header_field(INPUT) {
          let n = INPUT?.n;
          let v = INPUT?.v;
          let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
          let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          let temp4 = new abap.types.String({qualifiedName: "STRING"});
          let lv_n = new abap.types.String({qualifiedName: "STRING"});
          let temp5 = new abap.types.String({qualifiedName: "STRING"});
          let lv_v = new abap.types.String({qualifiedName: "STRING"});
          temp4.set(n);
          lv_n.set(temp4);
          temp5.set(v);
          lv_v.set(temp5);
          if (abap.compare.initial(this.mo_server_onprem) === false) {
            abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'RESPONSE', dynamicSource: (() => {
                        try { return this.mo_server_onprem; } catch {}
                        try { return this.this.mo_server_onprem; } catch {}
                      })()});
              object.set(fs_any_);
              if (object.get().set_header_field === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
              if (object.get().set_header_field === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
              await object.get().set_header_field({name: lv_n,value: lv_v});
            } else {
              if (this.mo_response_cloud.get().if_web_http_response$set_header_field === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
              if (this.mo_response_cloud.get().if_web_http_response$set_header_field === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
              await this.mo_response_cloud.get().if_web_http_response$set_header_field({i_name: lv_n,i_value: lv_v});
            }
          }
          async factory(INPUT) {
            return z2ui5_cl_abap_api_http.factory(INPUT);
          }
          static async factory(INPUT) {
            let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_ABAP_API_HTTP", RTTIName: "\\CLASS=Z2UI5_CL_ABAP_API_HTTP"});
            let server = INPUT?.server;
            if (server === undefined) { server = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.server); }
            result.set(await (new abap.Classes['Z2UI5_CL_ABAP_API_HTTP']()).constructor_());
            result.get().mo_server_onprem.set(server);
            return result;
          }
          async factory_cloud(INPUT) {
            return z2ui5_cl_abap_api_http.factory_cloud(INPUT);
          }
          static async factory_cloud(INPUT) {
            let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_ABAP_API_HTTP", RTTIName: "\\CLASS=Z2UI5_CL_ABAP_API_HTTP"});
            let req = INPUT?.req;
            if (req === undefined) { req = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.req); }
            let res = INPUT?.res;
            if (res === undefined) { res = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined}).set(INPUT.res); }
            result.set(await (new abap.Classes['Z2UI5_CL_ABAP_API_HTTP']()).constructor_());
            result.get().mo_request_cloud.set(req);
            result.get().mo_response_cloud.set(res);
            return result;
          }
          async get_cdata() {
            let result = new abap.types.String({qualifiedName: "STRING"});
            let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
            let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
            if (abap.compare.initial(this.mo_server_onprem) === false) {
              abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'REQUEST', dynamicSource: (() => {
                          try { return this.mo_server_onprem; } catch {}
                          try { return this.this.mo_server_onprem; } catch {}
                        })()});
                object.set(fs_any_);
                if (object.get().get_cdata === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                if (object.get().get_cdata === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                result.set(await object.get().get_cdata());
              } else {
                if (this.mo_request_cloud.get().if_web_http_request$get_text === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                if (this.mo_request_cloud.get().if_web_http_request$get_text === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                result.set(await this.mo_request_cloud.get().if_web_http_request$get_text());
              }
              return result;
            }
            async get_method() {
              let result = new abap.types.String({qualifiedName: "STRING"});
              let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
              let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
              if (abap.compare.initial(this.mo_server_onprem) === false) {
                abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'REQUEST', dynamicSource: (() => {
                            try { return this.mo_server_onprem; } catch {}
                            try { return this.this.mo_server_onprem; } catch {}
                          })()});
                  object.set(fs_any_);
                  if (object.get().if_http_request$get_method === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                  if (object.get().if_http_request$get_method === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                  result.set(await object.get().if_http_request$get_method());
                } else {
                  if (this.mo_request_cloud.get().if_web_http_request$get_method === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                  if (this.mo_request_cloud.get().if_web_http_request$get_method === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                  result.set(await this.mo_request_cloud.get().if_web_http_request$get_method());
                }
                return result;
              }
              async set_cdata(INPUT) {
                let val = INPUT?.val;
                let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
                let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
                if (abap.compare.initial(this.mo_server_onprem) === false) {
                  abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'RESPONSE', dynamicSource: (() => {
                              try { return this.mo_server_onprem; } catch {}
                              try { return this.this.mo_server_onprem; } catch {}
                            })()});
                    object.set(fs_any_);
                    if (object.get().set_cdata === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                    if (object.get().set_cdata === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                    await object.get().set_cdata({data: val});
                  } else {
                    if (this.mo_response_cloud.get().if_web_http_response$set_text === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                    if (this.mo_response_cloud.get().if_web_http_response$set_text === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                    await this.mo_response_cloud.get().if_web_http_response$set_text({i_text: val});
                  }
                }
                async set_status(INPUT) {
                  let code = INPUT?.code;
                  if (code?.getQualifiedName === undefined || code.getQualifiedName() !== "I") { code = undefined; }
                  if (code === undefined) { code = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.code); }
                  let reason = INPUT?.reason;
                  let object = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
                  let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
                  let temp6 = new abap.types.String({qualifiedName: "STRING"});
                  let lv_reason = new abap.types.String({qualifiedName: "STRING"});
                  temp6.set(reason);
                  lv_reason.set(temp6);
                  if (abap.compare.initial(this.mo_server_onprem) === false) {
                    abap.statements.assign({target: fs_any_, dynamicName: 'mo_server_onprem' + '->' + 'RESPONSE', dynamicSource: (() => {
                                try { return this.mo_server_onprem; } catch {}
                                try { return this.this.mo_server_onprem; } catch {}
                              })()});
                      object.set(fs_any_);
                      if (object.get().if_http_response$set_status === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (object.get().if_http_response$set_status === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      await object.get().if_http_response$set_status({code: code,reason: lv_reason});
                    } else {
                      if (this.mo_response_cloud.get().if_web_http_response$set_status === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (this.mo_response_cloud.get().if_web_http_response$set_status === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      await this.mo_response_cloud.get().if_web_http_response$set_status({i_code: code,i_reason: lv_reason});
                    }
                  }
                  async set_session_stateful(INPUT) {
                    let val = INPUT?.val;
                    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "I") { val = undefined; }
                    if (val === undefined) { val = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.val); }
                    if (abap.compare.initial(this.mo_server_onprem) === false) {
                      if (this.mo_server_onprem.get().set_session_stateful === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
                      if (this.mo_server_onprem.get().set_session_stateful === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
                      await this.mo_server_onprem.get().set_session_stateful({stateful: val});
                    } else {
                      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(34).set('NO_STATEFUL_FEATURE_IN_CLOUD_ERROR')));
                    }
                  }
                }
                abap.Classes['Z2UI5_CL_ABAP_API_HTTP'] = z2ui5_cl_abap_api_http;
export {z2ui5_cl_abap_api_http};
//# sourceMappingURL=z2ui5_cl_abap_api_http.clas.mjs.map