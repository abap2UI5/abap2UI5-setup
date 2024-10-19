const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_212.clas.abap
class z2ui5_cl_demo_app_212 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_212';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_VIEW_DISPLAY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VIEW_MODEL_UPDATE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_PARENT_VIEW": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE_TMP": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_TABLE_ROW": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TABLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MT_COMP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MT_DFIES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"GET_DFIES": {"visibility": "I", "parameters": {}},
  "ON_INIT": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "RENDER_MAIN": {"visibility": "O", "parameters": {}},
  "GET_DATA": {"visibility": "O", "parameters": {}},
  "GET_COMP": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "is_optional": " "}}},
  "INIT_LAYOUT": {"visibility": "O", "parameters": {}},
  "ON_AFTER_NAVIGATION": {"visibility": "O", "parameters": {}},
  "ROW_SELECT": {"visibility": "O", "parameters": {}},
  "PREFILL_POPUP_VALUES": {"visibility": "O", "parameters": {"INDEX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RENDER_POPUP": {"visibility": "O", "parameters": {}},
  "SET_APP_DATA": {"visibility": "U", "parameters": {"TABLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_view_display = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_view_model_update = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mo_parent_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.mt_table = new abap.types.DataReference(new abap.types.Character(4));
    this.mt_table_tmp = new abap.types.DataReference(new abap.types.Character(4));
    this.ms_table_row = new abap.types.DataReference(new abap.types.Character(4));
    this.mv_table = new abap.types.String({qualifiedName: "STRING"});
    this.mt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    this.mt_dfies = abap.types.TableFactory.construct(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_dfies");
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async on_event() {
    let unique504 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique504, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique504, new abap.types.Character(10).set('ROW_SELECT'))) {
      await this.row_select();
    } else {
    }
  }
  async row_select() {
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let ls_arg = new abap.types.String({qualifiedName: "STRING"});
    lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
    abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
      into: ls_arg});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      return;
    }
    await this.prefill_popup_values({index: ls_arg});
    await this.render_popup();
  }
  async prefill_popup_values(INPUT) {
    let index = INPUT?.index;
    if (index?.getQualifiedName === undefined || index.getQualifiedName() !== "STRING") { index = undefined; }
    if (index === undefined) { index = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.index); }
    let fs_tab_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let fs_table_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let dfies = new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {});
    let fs_value_tab_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_value_struc_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.assign({target: fs_tab_, source: this.mt_table.dereference()});
    abap.statements.readTable(fs_tab_,{index: index,
      assigning: fs_row_});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      return;
    }
    for await (const unique505 of abap.statements.loop(this.mt_dfies)) {
      dfies.set(unique505);
      abap.statements.assign({component: dfies.get().fieldname, target: fs_value_tab_, source: fs_row_});
      abap.statements.assign({target: fs_table_row_, source: this.ms_table_row.dereference()});
      abap.statements.assign({component: dfies.get().fieldname, target: fs_value_struc_, source: fs_table_row_});
      if (abap.compare.assigned(fs_value_tab_) && abap.compare.assigned(fs_value_struc_)) {
        fs_value_struc_.set(fs_value_tab_);
      }
    }
  }
  async get_dfies() {
    this.mt_dfies.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_dfies_by_table_name({table_name: this.mv_table})));
  }
  async render_popup() {
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {});
    let dfies = new abap.types.DataReference(new abap.types.Structure({"tabname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-tabname"}), "fieldname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldname"}), "langu": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_DFIES-LANGU"}), "position": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-position"}), "offset": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-offset"}), "domname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-domname"}), "rollname": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-rollname"}), "checktable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-checktable"}), "leng": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-leng"}), "intlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-intlen"}), "outputlen": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputlen"}), "decimals": new abap.types.Numc({length: 6, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-decimals"}), "datatype": new abap.types.Character(4, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-datatype"}), "inttype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-inttype"}), "reftable": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reftable"}), "reffield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reffield"}), "precfield": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-precfield"}), "authorid": new abap.types.Character(3, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-authorid"}), "memoryid": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-memoryid"}), "logflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-logflag"}), "mask": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mask"}), "masklen": new abap.types.Numc({length: 4, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-masklen"}), "convexit": new abap.types.Character(5, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-convexit"}), "headlen": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-headlen"}), "scrlen1": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen1"}), "scrlen2": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen2"}), "scrlen3": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-scrlen3"}), "fieldtext": new abap.types.Character(60, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-fieldtext"}), "reptext": new abap.types.Character(55, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-reptext"}), "scrtext_s": new abap.types.Character(10, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_s"}), "scrtext_m": new abap.types.Character(20, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_m"}), "scrtext_l": new abap.types.Character(40, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-scrtext_l"}), "keyflag": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-keyflag"}), "lowercase": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lowercase"}), "mac": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-mac"}), "genkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-genkey"}), "noforkey": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noforkey"}), "valexi": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-valexi"}), "noauthch": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-noauthch"}), "sign": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-sign"}), "dynpfld": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-dynpfld"}), "f4availabl": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-f4availabl"}), "comptype": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-comptype"}), "lfieldname": new abap.types.Character(132, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-lfieldname"}), "ltrflddis": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ltrflddis"}), "bidictrlc": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-bidictrlc"}), "outputstyle": new abap.types.Numc({length: 2, qualifiedName: "z2ui5_cl_abap_api=>ty_s_dfies-outputstyle"}), "nohistory": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-nohistory"}), "ampmformat": new abap.types.Character(1, {"qualifiedName":"z2ui5_cl_abap_api=>ty_s_dfies-ampmformat"})}, "z2ui5_cl_abap_api=>ty_s_dfies", undefined, {}, {}));
    let fs_val_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    content.set((await (await (await popup.get().dialog({contentwidth: new abap.types.Character(3).set('60%')})).get().simple_form({layout: new abap.types.Character(20).set('ResponsiveGridLayout'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})));
    for await (const unique506 of abap.statements.loop(this.mt_dfies)) {
      dfies.assign(unique506);
      abap.statements.assign({target: fs_row_, source: this.ms_table_row.dereference()});
      abap.statements.assign({component: dfies.get().fieldname, target: fs_val_, source: fs_row_});
      if (abap.compare.assigned(fs_val_) === false) {
        continue;
      }
      await content.get().label({text: new abap.types.String().set(`text`)});
      await content.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: fs_val_})), enabled: abap.builtin.abap_false, showvaluehelp: abap.builtin.abap_false});
    }
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async on_init() {
    await this.get_data();
    await this.get_dfies();
    await this.init_layout();
    await this.render_main();
  }
  async init_layout() {
  }
  async render_main() {
    let fs_tab_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let table = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let headder = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.initial(this.mo_parent_view)) {
      page.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    } else {
      page.set((await this.mo_parent_view.get().get({name: new abap.types.String().set(`Page`)})));
    }
    abap.statements.assign({target: fs_tab_, source: this.mt_table.dereference()});
    table.set((await page.get().table({growing: new abap.types.Character(4).set('true'), width: new abap.types.Character(4).set('auto'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: fs_tab_}))})));
    headder.set((await (await (await table.get().header_toolbar()).get().overflow_toolbar()).get().toolbar_spacer()));
    if (abap.compare.initial(this.mo_parent_view)) {
      await this.client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
    } else {
      this.mv_view_display.set(abap.builtin.abap_true);
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.on_init();
    }
    await this.on_event();
    await this.on_after_navigation();
  }
  async set_app_data(INPUT) {
    let table = INPUT?.table;
    if (table?.getQualifiedName === undefined || table.getQualifiedName() !== "STRING") { table = undefined; }
    if (table === undefined) { table = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table); }
    this.mv_table.set(table);
  }
  async get_data() {
    let fs_table_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let fs_table_tmp_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let new_struct_desc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let new_table_desc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
    this.mt_comp.set((await this.get_comp()));
    try {
      new_struct_desc.set((await abap.Classes['CL_ABAP_STRUCTDESCR'].create({p_components: this.mt_comp})));
      new_table_desc.set((await abap.Classes['CL_ABAP_TABLEDESCR'].create({p_line_type: new_struct_desc, p_table_kind: abap.Classes['CL_ABAP_TABLEDESCR'].tablekind_std})));
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: new_table_desc, dref: this.mt_table});
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: new_table_desc, dref: this.mt_table_tmp});
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: new_struct_desc, dref: this.ms_table_row});
      abap.statements.assign({target: fs_table_, source: this.mt_table.dereference()});
      await abap.statements.select(fs_table_, {select: "SELECT * FROM " + abap.buildDbTableName(this.mv_table.get().trimEnd().toLowerCase()) + " UP TO " + abap.IntegerFactory.get(100).get() + " ROWS"});
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    abap.statements.assign({target: fs_table_tmp_, source: this.mt_table_tmp.dereference()});
    fs_table_tmp_.set(fs_table_);
  }
  async get_comp() {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let index = new abap.types.Integer({qualifiedName: "INT4"});
    let typedesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let structdesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let com = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp4 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
    let component = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    try {
      try {
        try {
          typedesc.set(await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: this.mv_table}));
          abap.builtin.sy.get().subrc.set(0);
        } catch (e) {
          if (e.classic) {
              switch (e.classic.toUpperCase()) {
              case "TYPE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
              default: abap.builtin.sy.get().subrc.set(2); break;
                }
            } else {
                throw e;
            }
          }
          await abap.statements.cast(temp2, typedesc);
          structdesc.set(temp2);
          comp.set((await structdesc.get().get_components()));
          for await (const unique507 of abap.statements.loop(comp)) {
            com.set(unique507);
            if (abap.compare.eq(com.get().as_include, abap.builtin.abap_false)) {
              abap.statements.append({source: com, target: result});
            }
          }
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          } else {
            throw e;
          }
        }
        abap.statements.clear(temp3);
        temp4.get().name.set(new abap.types.Character(6).set('ROW_ID'));
        await abap.statements.cast(temp1, (await abap.Classes['CL_ABAP_DATADESCR'].describe_by_data({p_data: index})));
        temp4.get().type.set(temp1);
        abap.statements.insertInternal({data: temp4, table: temp3});
        component.set(temp3);
        abap.statements.append({source: component, lines: true, target: result});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
      return result;
    }
    async on_after_navigation() {
    }
  }
  abap.Classes['Z2UI5_CL_DEMO_APP_212'] = z2ui5_cl_demo_app_212;
  z2ui5_cl_demo_app_212.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_212.z2ui5_if_app$version.set('1.135.0');
  z2ui5_cl_demo_app_212.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_212.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
  z2ui5_cl_demo_app_212.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_212.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
  z2ui5_cl_demo_app_212.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_212.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_212};
//# sourceMappingURL=z2ui5_cl_demo_app_212.clas.mjs.map