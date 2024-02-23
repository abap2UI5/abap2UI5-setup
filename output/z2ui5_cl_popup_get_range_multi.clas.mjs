const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_popup_get_range_multi.clas.abap
class z2ui5_cl_popup_get_range_multi {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POPUP_GET_RANGE_MULTI';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_RESULT": {"type": () => {return new abap.types.Structure({"t_sql": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_filter_multi"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range_multi=>ty_s_result", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "O_VARIANT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_VARIANT", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_VARIANT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MV_POPUP_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"POPUP_DISPLAY": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE_MULTI", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_RANGE_MULTI"});}, "is_optional": " "}, "VAL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_filter_multi");}, "is_optional": " "}, "O_VARIANT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_VARIANT", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_VARIANT"});}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"t_sql": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_filter_multi"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range_multi=>ty_s_result", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_result = new abap.types.Structure({"t_sql": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_filter_multi"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range_multi=>ty_s_result", undefined, {}, {});
    this.o_variant = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_VARIANT", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_VARIANT"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_popup_name = new abap.types.String({qualifiedName: "STRING"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async factory(INPUT) {
    return z2ui5_cl_popup_get_range_multi.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE_MULTI", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_RANGE_MULTI"});
    let val = INPUT?.val;
    if (val?.getQualifiedName === undefined || val.getQualifiedName() !== "Z2UI5_CL_UTIL_API=>TY_T_FILTER_MULTI") { val = undefined; }
    if (val === undefined) { val = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_filter_multi").set(INPUT.val); }
    let o_variant = INPUT?.o_variant;
    if (o_variant?.getQualifiedName === undefined || o_variant.getQualifiedName() !== "Z2UI5_CL_POPUP_GET_VARIANT") { o_variant = undefined; }
    if (o_variant === undefined) { o_variant = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_VARIANT", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_VARIANT"}).set(INPUT.o_variant); }
    r_result.set(await (new abap.Classes['Z2UI5_CL_POPUP_GET_RANGE_MULTI']()).constructor_());
    r_result.get().ms_result.get().t_sql.set(val);
    r_result.get().o_variant.set(o_variant);
    return r_result;
  }
  async result() {
    let result = new abap.types.Structure({"t_sql": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_filter_multi"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range_multi=>ty_s_result", undefined, {}, {});
    result.set(this.ms_result);
    return result;
  }
  async popup_display() {
    let lo_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let item = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp5 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    lo_popup.set((await lo_popup.get().dialog({afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')})), contentheight: new abap.types.String().set(`50%`), contentwidth: new abap.types.String().set(`50%`), title: new abap.types.Character(23).set('Define Filter Conditons')})));
    vbox.set((await lo_popup.get().vbox({height: new abap.types.String().set(`100%`), justifycontent: new abap.types.Character(12).set('SpaceBetween')})));
    item.set((await (await vbox.get().list({nodata: new abap.types.String().set(`no conditions defined`), items: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_result.get().t_sql})), selectionchange: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().custom_list_item()));
    grid.set((await item.get().grid()));
    await grid.get().label({text: new abap.types.String().set(`{NAME}`)});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${NAME}`), table: temp1});
    await (await (await grid.get().multi_input({tokens: new abap.types.String().set(`{T_TOKEN}`), enabled: abap.builtin.abap_false, valuehelprequest: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`LIST_OPEN`), t_arg: temp1}))})).get().tokens()).get().token({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`), visible: new abap.types.String().set(`{VISIBLE}`), selected: new abap.types.String().set(`{SELKZ}`), editable: new abap.types.String().set(`{EDITABLE}`)});
    abap.statements.clear(temp3);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${NAME}`), table: temp3});
    await grid.get().button({text: new abap.types.String().set(`Select`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`LIST_OPEN`), t_arg: temp3}))});
    abap.statements.clear(temp5);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${NAME}`), table: temp5});
    await grid.get().button({icon: new abap.types.Character(17).set('sap-icon://delete'), type: new abap.types.String().set(`Transparent`), text: new abap.types.String().set(`Clear`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`LIST_DELETE`), t_arg: temp5}))});
    await (await (await (await (await (await lo_popup.get().footer()).get().overflow_toolbar()).get().button({text: new abap.types.String().set(`Clear All`), icon: new abap.types.Character(17).set('sap-icon://delete'), type: new abap.types.String().set(`Transparent`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_DELETE_ALL`)}))})).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('Cancel'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')}))})).get().button({text: new abap.types.Character(2).set('OK'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await lo_popup.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp7 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_RANGE"});
    let lo_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_RANGE"});
    let fs_tab_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}));
    let lt_event = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let temp8 = new abap.types.String({qualifiedName: "STRING"});
    let temp9 = new abap.types.Integer({qualifiedName: "I"});
    let ls_sql = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {});
    let temp3 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp10 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {});
    let lr_sql = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}));
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.popup_display();
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await abap.statements.cast(temp7, (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
      lo_popup.set(temp7);
      if (abap.compare.eq(((await lo_popup.get().result())).get().check_confirmed, abap.builtin.abap_true)) {
        abap.statements.readTable(this.ms_result.get().t_sql,{assigning: fs_tab_,
          withKey: (i) => {return abap.compare.eq(i.name, this.mv_popup_name);},
          withKeyValue: [{key: (i) => {return i.name}, value: this.mv_popup_name}],
          usesTableLine: false,
          withKeySimple: {"name": this.mv_popup_name}});
        fs_tab_.get().t_range.set(((await lo_popup.get().result())).get().t_range);
        fs_tab_.get().t_token.set((await abap.Classes['Z2UI5_CL_UTIL'].filter_get_token_t_by_range_t({val: fs_tab_.get().t_range})));
      }
      await this.popup_display();
    }
    let unique163 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique163, new abap.types.Character(11).set('LIST_DELETE'))) {
      lt_event.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event,{index: abap.IntegerFactory.get(1),
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      abap.statements.readTable(this.ms_result.get().t_sql,{assigning: fs_tab_,
        withKey: (i) => {return abap.compare.eq(i.name, temp1);},
        withKeyValue: [{key: (i) => {return i.name}, value: temp1}],
        usesTableLine: false,
        withKeySimple: {"name": temp1}});
      abap.statements.clear(fs_tab_.get().t_token);
      abap.statements.clear(fs_tab_.get().t_range);
      await client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique163, new abap.types.Character(9).set('LIST_OPEN'))) {
      lt_event.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp9.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event,{index: abap.IntegerFactory.get(1),
        into: temp8});
      abap.builtin.sy.get().tabix.set(temp9);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      this.mv_popup_name.set(temp8);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.ms_result.get().t_sql,{into: temp3,
        withKey: (i) => {return abap.compare.eq(i.name, this.mv_popup_name);},
        withKeyValue: [{key: (i) => {return i.name}, value: this.mv_popup_name}],
        usesTableLine: false,
        withKeySimple: {"name": this.mv_popup_name}});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      ls_sql.set(temp3);
      await client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POPUP_GET_RANGE'].factory({t_range: ls_sql.get().t_range}))});
    } else if (abap.compare.eq(unique163, new abap.types.String().set(`BUTTON_CONFIRM`))) {
      this.ms_result.get().check_confirmed.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique163, new abap.types.String().set(`BUTTON_CANCEL`))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique163, new abap.types.String().set(`POPUP_DELETE_ALL`))) {
      for await (const unique164 of abap.statements.loop(this.ms_result.get().t_sql)) {
        lr_sql.assign(unique164);
        abap.statements.clear(lr_sql.get().t_range);
        abap.statements.clear(lr_sql.get().t_token);
      }
      await client.get().z2ui5_if_client$popup_model_update();
    }
  }
}
abap.Classes['Z2UI5_CL_POPUP_GET_RANGE_MULTI'] = z2ui5_cl_popup_get_range_multi;
z2ui5_cl_popup_get_range_multi.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_get_range_multi.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_popup_get_range_multi.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_get_range_multi.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_popup_get_range_multi.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_get_range_multi.z2ui5_if_app$license.set('MIT');
z2ui5_cl_popup_get_range_multi.ty_s_result = new abap.types.Structure({"t_sql": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_SQL_MULTI-NAME"}), "t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "t_token": abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_UTIL_API=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_util_api=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_token")}, "z2ui5_cl_util_api=>ty_s_sql_multi", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_filter_multi"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range_multi=>ty_s_result", undefined, {}, {});
export {z2ui5_cl_popup_get_range_multi};
//# sourceMappingURL=z2ui5_cl_popup_get_range_multi.clas.mjs.map