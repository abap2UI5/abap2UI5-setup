const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_107.clas.abap
class z2ui5_cl_demo_app_107 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_107';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_ITEMS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"filename": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-FILENAME"}), "mediatype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-MEDIATYPE"}), "uploadstate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-UPLOADSTATE"}), "url": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-URL"})}, "z2ui5_cl_demo_app_107=>ty_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_107=>temp1_ca2cb7b652");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_FILE_RAW": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_LOAD_CC": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MV_PAGE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "GET_CUSTOM_JS": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_items = abap.types.TableFactory.construct(new abap.types.Structure({"filename": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-FILENAME"}), "mediatype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-MEDIATYPE"}), "uploadstate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-UPLOADSTATE"}), "url": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-URL"})}, "z2ui5_cl_demo_app_107=>ty_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_107=>temp1_ca2cb7b652");
    this.mv_file_raw = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.check_load_cc = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_page = new abap.types.String({qualifiedName: "STRING"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$author = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$author;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$check_sticky === undefined) this.z2ui5_if_app$check_sticky = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_custom_js() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(``),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`sap.z2ui5.fileGet = (oEvent,oController) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oFileUploadComponent = oEvent.getParameters("items").item.getFileObject();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` if (oFileUploadComponent) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   _handleRawFile(oFileUploadComponent,oController);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` console.log(sap.z2ui5.oResponse.OVIEWMODEL.XX.MV_FILE_RAW.data);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`};`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`_handleRawFile = (oFile, oController) => {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var oFileRaw = {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   name: oFile.name,mimetype: oFile.type,size: oFile.size,data: []`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var reader = new FileReader();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` reader.onload = function (e) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   oFileRaw.data = e.target.result;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   sap.z2ui5.oResponse.OVIEWMODEL.XX.MV_FILE_RAW = oFileRaw;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  reader.readAsDataURL(oFile);`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`};`))))))))))))))))))))))))))))))))))))));
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_load_cc, abap.builtin.abap_false)) {
      this.check_load_cc.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POP_JS_LOADER'].factory({i_js: (await this.get_custom_js())}))});
      return;
    } else if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_view_display();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique340 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique340, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_file_raw});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(22).set('abap2UI5 - P13N Dialog'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    page.set((await (await (await (await (await (await (await (await (await (await page.get().upload_set({instantupload: abap.builtin.abap_true, showicons: abap.builtin.abap_true, uploadenabled: abap.builtin.abap_true, terminationenabled: abap.builtin.abap_true, maxfilenamelength: new abap.types.String().set(`30`), maxfilesize: new abap.types.String().set(`200`), mode: new abap.types.String().set(`MultiSelect`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_items})), afteritemadded: new abap.types.String().set(`sap.z2ui5.fileGet($event,$controller)`), uploadcompleted: new abap.types.String().set(`sap.z2ui5.fileGet($event,$controller)`)})).get()._generic({name: new abap.types.String().set(`toolbar`), ns: new abap.types.String().set(`upload`)})).get().overflow_toolbar()).get().toolbar_spacer()).get().upload_set_toolbar_placeholder()).get().get_parent()).get().get_parent()).get().get_parent()).get().items({ns: new abap.types.String().set(`upload`)})).get().upload_set_item({filename: new abap.types.String().set(`{FILENAME}`), url: new abap.types.String().set(`{URL}`), mediatype: new abap.types.String().set(`{MEDIATYPE}`)})));
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_107'] = z2ui5_cl_demo_app_107;
z2ui5_cl_demo_app_107.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_107.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_107.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_107.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_107.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_107.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_107.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_107.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_107.ty_items = new abap.types.Structure({"filename": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-FILENAME"}), "mediatype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-MEDIATYPE"}), "uploadstate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-UPLOADSTATE"}), "url": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-URL"})}, "z2ui5_cl_demo_app_107=>ty_items", undefined, {}, {});
z2ui5_cl_demo_app_107.temp1_ca2cb7b652 = abap.types.TableFactory.construct(new abap.types.Structure({"filename": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-FILENAME"}), "mediatype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-MEDIATYPE"}), "uploadstate": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-UPLOADSTATE"}), "url": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_107=>TY_ITEMS-URL"})}, "z2ui5_cl_demo_app_107=>ty_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_107=>temp1_ca2cb7b652");
export {z2ui5_cl_demo_app_107};
//# sourceMappingURL=z2ui5_cl_demo_app_107.clas.mjs.map