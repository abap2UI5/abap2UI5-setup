const {z2ui5_cl_core_http_get} = await import("./z2ui5_cl_core_http_get.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_http_get.clas.testclasses.abap

class ltcl_test_http_get {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_HTTP_GET-LTCL_TEST_HTTP_GET';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"FILE_NOT_INITIAL": {"visibility": "I", "parameters": {}},
  "LAUNCHPAD_COMPATIBILITY": {"visibility": "I", "parameters": {}},
  "PATH_SETUP": {"visibility": "I", "parameters": {}},
  "JS_NO_DEBUGGER": {"visibility": "I", "parameters": {}},
  "JS_NO_SAP_UI_GET_CORE": {"visibility": "I", "parameters": {}},
  "JS_NO_WINDOW": {"visibility": "I", "parameters": {}},
  "JS_NO_DOCUMENT": {"visibility": "I", "parameters": {}},
  "BOOTSTRAP_WITH_OPEN_UI5": {"visibility": "I", "parameters": {}},
  "JS_NO_JQUERY": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async file_not_initial() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((await lo_get.get().main()));
    if (abap.compare.initial(lv_index_html)) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(29).set('HTTP GET - index html initial')});
    }
  }
  async launchpad_compatibility() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((await lo_get.get().main()));
    if (abap.compare.cs(lv_index_html, new abap.types.String().set(`&`))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(65).set('index.html contains the character & -> no launchpad compatibility')});
    }
  }
  async path_setup() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((abap.builtin.to_upper({val: (await lo_get.get().main())})));
    if (abap.compare.cs(lv_index_html, new abap.types.String().set(`SAP.Z2UI5.PATHNAME || '/SAP/TEST';`))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(11).set('path static')});
    }
    if (abap.compare.ns(lv_index_html, new abap.types.String().set(`SAP.Z2UI5.PATHNAME ||  WINDOW.LOCATION.PATHNAME;`))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(11).set('path static')});
    }
  }
  async js_no_debugger() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((abap.builtin.to_upper({val: (await lo_get.get().main())})));
    if (abap.compare.cs(lv_index_html, new abap.types.String().set(`DEBUGGER`))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(28).set('debugger command not allowed')});
    }
  }
  async js_no_sap_ui_get_core() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((abap.builtin.to_upper({val: (await lo_get.get().main())})));
  }
  async js_no_jquery() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((abap.builtin.to_upper({val: (await lo_get.get().main())})));
    if (abap.compare.cs(lv_index_html, new abap.types.String().set(`JQUERY`))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(25).set('use of jquery not allowed')});
    }
  }
  async js_no_window() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((abap.builtin.to_upper({val: (await lo_get.get().main())})));
  }
  async js_no_document() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((abap.builtin.to_upper({val: (await lo_get.get().main())})));
  }
  async bootstrap_with_open_ui5() {
    let lo_get = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_HTTP_GET", RTTIName: "\\CLASS=Z2UI5_CL_CORE_HTTP_GET"});
    let lv_index_html = new abap.types.String({qualifiedName: "STRING"});
    let lv_check = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    lo_get.set(await (new abap.Classes['Z2UI5_CL_CORE_HTTP_GET']()).constructor_());
    lv_index_html.set((abap.builtin.to_upper({val: (await lo_get.get().main())})));
    temp1.set(abap.builtin.boolc(abap.compare.cs(lv_index_html, new abap.types.String().set(`HTTPS://SDK.OPENUI5.ORG/RESOURCES`))));
    lv_check.set(temp1);
    if (abap.compare.eq(lv_check, abap.builtin.abap_false)) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(25).set('no bootstrap with openUI5')});
    }
    temp2.set(abap.builtin.boolc(abap.compare.cs(lv_index_html, new abap.types.String().set(`NIGHTLY`))));
    lv_check.set(temp2);
    if (abap.compare.eq(lv_check, abap.builtin.abap_true)) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(33).set('no bootstrap with nightly version')});
    }
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_HTTP_GET-LTCL_TEST_HTTP_GET'] = ltcl_test_http_get;
export {ltcl_test_http_get};
//# sourceMappingURL=z2ui5_cl_core_http_get.clas.testclasses.mjs.map