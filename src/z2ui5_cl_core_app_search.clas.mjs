await import("./z2ui5_cl_core_app_search.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app_search.clas.abap
class z2ui5_cl_core_app_search {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_APP_SEARCH';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_APPS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_FAVS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_APP_SEL": {"type": () => {return new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SELECTED_KEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_SEARCH": {"type": () => {return new abap.types.Structure({"check_hide_samples": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_hide_system": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "search_field": new abap.types.String({qualifiedName: "STRING"}), "number": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_FAVORITES": {"type": () => {return new abap.types.Structure({"check_cloud_ready": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_premise_ready": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "search_field": new abap.types.String({qualifiedName: "STRING"}), "number": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_GIT_REPOS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_GIT_ADDONS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SEARCH": {"visibility": "O", "parameters": {}},
  "VIEW_DISPLAY": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "VIEW_NEST_DISPLAY": {"visibility": "O", "parameters": {}},
  "VIEW_ACTION_SHEET": {"visibility": "O", "parameters": {"VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_apps = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.mt_favs = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.ms_app_sel = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_selected_key = new abap.types.String({qualifiedName: "STRING"});
    this.ms_search = new abap.types.Structure({"check_hide_samples": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_hide_system": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "search_field": new abap.types.String({qualifiedName: "STRING"}), "number": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.ms_favorites = new abap.types.Structure({"check_cloud_ready": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_premise_ready": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "search_field": new abap.types.String({qualifiedName: "STRING"}), "number": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    this.mt_git_repos = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    this.mt_git_addons = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async search() {
    let lv_counter = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {});
    let lr_app = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}));
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    for await (const unique126 of abap.statements.loop(this.mt_apps)) {
      lr_app.assign(unique126);
      lr_app.get().visible.set(abap.builtin.abap_false);
      if (abap.compare.eq(this.ms_search.get().check_hide_samples, abap.builtin.abap_true) && abap.compare.cs(lr_app.get().name, new abap.types.Character(13).set('Z2UI5_CL_DEMO'))) {
        continue;
      }
      if (abap.compare.eq(this.ms_search.get().check_hide_system, abap.builtin.abap_true) && abap.compare.cs(lr_app.get().name, new abap.types.String().set(`Z2UI5_CL_`)) && abap.compare.ns(lr_app.get().name, new abap.types.String().set(`Z2UI5_CL_DEMO`))) {
        continue;
      }
      if (abap.compare.cs(lr_app.get().name, this.ms_search.get().search_field)) {
        lr_app.get().visible.set(abap.builtin.abap_true);
        lv_counter.set(abap.operators.add(lv_counter,abap.IntegerFactory.get(1)));
      }
    }
    temp2.set(lv_counter);
    this.ms_search.get().number.set(abap.operators.concat(new abap.types.String().set(`Result: `),temp2));
  }
  async view_action_sheet(INPUT) {
    let val = INPUT?.val;
    let action_sheet_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    action_sheet_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    abap.statements.clear(temp3);
    temp3.get().n.set(new abap.types.String().set(`core:require`));
    temp3.get().v.set(new abap.types.String().set(`{ MessageToast: 'sap/m/MessageToast' }`));
    await action_sheet_view.get()._generic_property({val: temp3});
    await (await action_sheet_view.get().action_sheet({placement: new abap.types.String().set(`Botton`), showcancelbutton: abap.builtin.abap_true, title: new abap.types.String().set(`Choose Your Action`)})).get().button({text: new abap.types.String().set(`Add to Favorite`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ADD_TO_FAVS`)}))});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await action_sheet_view.get().stringify()), by_id: val});
  }
  async view_display(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp4 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let pages = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page_all = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp6 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {});
    let lr_app = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}));
    let lv_tabix = new abap.types.Integer({qualifiedName: "I"});
    let temp7 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let page_online = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp9 = new abap.types.ABAPObject({qualifiedName: "LCL_GITHUB", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_APP_SEARCH\\CLASS=LCL_GITHUB"});
    let temp10 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {});
    let lr_repo = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}));
    let item = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let row = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page_addon = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp11 = new abap.types.ABAPObject({qualifiedName: "LCL_GITHUB", RTTIName: "\\CLASS-POOL=Z2UI5_CL_CORE_APP_SEARCH\\CLASS=LCL_GITHUB"});
    page.set((await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().tool_page()).get().header({ns: new abap.types.String().set(`tnt`)})).get().tool_header()).get().title({text: new abap.types.String().set(`abap2UI5 - App Finder`)})).get().get_parent()).get().get_parent()).get().sub_header({ns: new abap.types.String().set(`tnt`)})).get().tool_header()));
    abap.statements.clear(temp4);
    abap.statements.insertInternal({data: new abap.types.String().set(`NavCon`), table: temp4});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/selectedKey}`), table: temp4});
    pages.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().icon_tab_header({selectedkey: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_selected_key})), select: (await client.get().z2ui5_if_client$_event_client({val: client.get().z2ui5_if_client$cs_event.get().nav_container_to, t_arg: temp4})), mode: new abap.types.String().set(`Inline`)})).get().items()).get().icon_tab_filter({key: new abap.types.String().set(`page_favs`), text: new abap.types.String().set(`Favorites`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`page_all`), text: new abap.types.String().set(`Local`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`page_online`), text: new abap.types.String().set(`Apps on GitHub`)})).get().get_parent()).get().icon_tab_filter({key: new abap.types.String().set(`page_addon`), text: new abap.types.String().set(`Addons on GitHub`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().main_contents()).get().nav_container({id: new abap.types.String().set(`NavCon`), initialpage: new abap.types.String().set(`page_favs`), defaulttransitionname: new abap.types.String().set(`flip`)})).get().pages()));
    await (await (await (await pages.get().page({title: abap.operators.concat(new abap.types.String().set(`Result: `),(await client.get().z2ui5_if_client$_bind({val: this.ms_favorites.get().number}))), id: new abap.types.String().set(`page_favs`)})).get().header_content()).get().button({text: new abap.types.String().set(`Clear`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ON_FAVS_CLEAR`)}))})).get().get_parent();
    page_all.set((await (await (await (await (await (await pages.get().page({title: (await client.get().z2ui5_if_client$_bind({val: this.ms_search.get().number})), id: new abap.types.String().set(`page_all`)})).get().header_content()).get().checkbox({text: new abap.types.String().set(`Hide Samples`), selected: (await client.get().z2ui5_if_client$_bind_edit({val: this.ms_search.get().check_hide_samples})), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ON_SEARCH_ALL`)}))})).get().checkbox({text: new abap.types.String().set(`Hide System`), selected: (await client.get().z2ui5_if_client$_bind_edit({val: this.ms_search.get().check_hide_system})), select: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ON_SEARCH_ALL`)}))})).get().search_field({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.ms_search.get().search_field})), search: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('ON_SEARCH_ALL')})), change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('ON_SEARCH_ALL')})), width: new abap.types.String().set(`17.5rem`), id: new abap.types.String().set(`SEARCH`)})).get().get_parent()));
    for await (const unique127 of abap.statements.loop(this.mt_apps)) {
      lr_app.assign(unique127);
      lv_tabix.set(abap.builtin.sy.get().tabix);
      abap.statements.clear(temp7);
      abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/header}`), table: temp7});
      abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/header}`), table: temp7});
      await page_all.get().generic_tile({class_: new abap.types.Character(50).set('sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ON_PRESS`), t_arg: temp7})), header: (await client.get().z2ui5_if_client$_bind({val: lr_app.get().name, tab: this.mt_apps, tab_index: lv_tabix})), visible: (await client.get().z2ui5_if_client$_bind({val: lr_app.get().visible, tab: this.mt_apps, tab_index: lv_tabix}))});
    }
    await this.view_nest_display();
    page_online.set((await (await (await (await (await (await (await (await (await (await (await (await pages.get().page({id: new abap.types.String().set(`page_online`)})).get().header_content()).get().text()).get().link({text: new abap.types.String().set(`Install with abapGit`), href: new abap.types.String().set(`https://abapgit.org/`), target: new abap.types.String().set(`blank`)})).get().toolbar_spacer()).get().link({text: new abap.types.String().set(`More Open Source on dotabap.org...`), href: new abap.types.String().set(`https://dotabap.org/`), target: new abap.types.String().set(`blank`)})).get().toolbar_spacer()).get().text()).get().toolbar_spacer()).get().text()).get().get_parent()).get().content()));
    await (await (await page_online.get().message_strip({type: new abap.types.String().set(`Warning`), text: new abap.types.String().set(`Your open-source app is not listed here? Feel free to send a PR and extend this page`)})).get().get()).get().link({text: new abap.types.String().set(`here`), target: new abap.types.String().set(`blank`), href: new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5/blob/main/src/02/02/z2ui5_cl_app_search_apps.clas.locals_imp.abap`)});
    temp9.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_APP_SEARCH-LCL_GITHUB']()).constructor_());
    this.mt_git_repos.set((await temp9.get().get_repositories()));
    for await (const unique128 of abap.statements.loop(this.mt_git_repos)) {
      lr_repo.assign(unique128);
      lr_repo.get().number_of_app.set(abap.builtin.lines({val: lr_repo.get().t_app}));
      lr_repo.get().author_name.set(abap.builtin.shift_left({val: lr_repo.get().author_link, sub: new abap.types.String().set(`https://github.com/`)}));
    }
    item.set((await (await page_online.get().list({nodata: new abap.types.String().set(`no conditions defined`), items: (await client.get().z2ui5_if_client$_bind({val: this.mt_git_repos})), selectionchange: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().custom_list_item()));
    item.set((await item.get().vbox()));
    await item.get().text();
    row.set((await item.get().grid()));
    await row.get().title({text: new abap.types.String().set(`{NAME}`)});
    await row.get().text({text: new abap.types.String().set(`{DESCR}`)});
    await row.get().checkbox({text: new abap.types.String().set(`ABAP for Cloud`), enabled: abap.builtin.abap_false, selected: new abap.types.String().set(`{CHECK_ABAP_FOR_CLOUD}`)});
    row.set((await item.get().grid()));
    await row.get().link({target: new abap.types.String().set(`_blank`), text: new abap.types.String().set(`{AUTHOR_NAME}`), href: new abap.types.String().set(`{AUTHOR_LINK}`)});
    await row.get().link({target: new abap.types.String().set(`_blank`), text: new abap.types.String().set(`{LINK}`), href: new abap.types.String().set(`{LINK}`)});
    await row.get().checkbox({text: new abap.types.String().set(`Standard ABAP`), selected: new abap.types.String().set(`{CHECK_STANDARD_ABAP}`), enabled: abap.builtin.abap_false});
    page_addon.set((await (await (await (await (await (await (await (await (await (await (await (await pages.get().page({id: new abap.types.String().set(`page_addon`)})).get().header_content()).get().text()).get().link({text: new abap.types.String().set(`Install with abapGit`), href: new abap.types.String().set(`https://abapgit.org/`), target: new abap.types.String().set(`blank`)})).get().toolbar_spacer()).get().link({text: new abap.types.String().set(`More Open Source on dotabap.org...`), href: new abap.types.String().set(`https://dotabap.org/`), target: new abap.types.String().set(`blank`)})).get().toolbar_spacer()).get().text()).get().toolbar_spacer()).get().text()).get().get_parent()).get().content()));
    await (await (await page_addon.get().message_strip({type: new abap.types.String().set(`Warning`), text: new abap.types.String().set(`Your open-source addon is not listed here? Feel free to send a PR and extend this page`)})).get().get()).get().link({text: new abap.types.String().set(`here`), target: new abap.types.String().set(`blank`), href: new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5/blob/main/src/02/02/z2ui5_cl_app_search_apps.clas.locals_imp.abap`)});
    temp11.set(await (new abap.Classes['CLAS-Z2UI5_CL_CORE_APP_SEARCH-LCL_GITHUB']()).constructor_());
    this.mt_git_addons.set((await temp11.get().get_repositories_addons()));
    for await (const unique129 of abap.statements.loop(this.mt_git_addons)) {
      lr_repo.assign(unique129);
      lr_repo.get().number_of_app.set(abap.builtin.lines({val: lr_repo.get().t_app}));
      lr_repo.get().author_name.set(abap.builtin.shift_left({val: lr_repo.get().author_link, sub: new abap.types.String().set(`https://github.com/`)}));
    }
    item.set((await (await page_addon.get().list({nodata: new abap.types.String().set(`no conditions defined`), items: (await client.get().z2ui5_if_client$_bind({val: this.mt_git_addons})), selectionchange: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().custom_list_item()));
    item.set((await item.get().vbox()));
    await item.get().text();
    row.set((await item.get().grid()));
    await row.get().title({text: new abap.types.String().set(`{NAME}`)});
    await row.get().text({text: new abap.types.String().set(`{DESCR}`)});
    await row.get().text();
    row.set((await item.get().grid()));
    await row.get().link({target: new abap.types.String().set(`_blank`), text: new abap.types.String().set(`{LINK}`), href: new abap.types.String().set(`{LINK}`)});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async view_nest_display() {
    let lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp12 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {});
    let lr_app = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}));
    let lv_tabix = new abap.types.Integer({qualifiedName: "I"});
    let temp13 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_view_nested.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    for await (const unique130 of abap.statements.loop(this.mt_favs)) {
      lr_app.assign(unique130);
      lv_tabix.set(abap.builtin.sy.get().tabix);
      abap.statements.clear(temp13);
      abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/header}`), table: temp13});
      await lo_view_nested.get().generic_tile({class_: new abap.types.Character(50).set('sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ON_START`), t_arg: temp13})), header: (await this.client.get().z2ui5_if_client$_bind({val: lr_app.get().name, tab: this.mt_favs, tab_index: lv_tabix}))});
    }
    await this.client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`page_favs`), method_insert: new abap.types.Character(10).set('addContent')});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp15 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let row = new abap.types.String({qualifiedName: "STRING"});
    let temp16 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {});
    let lt_arg2 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lv_app2 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.Integer({qualifiedName: "I"});
    let li_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lv_app = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = new abap.types.Integer({qualifiedName: "I"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      try {
        await abap.Classes['Z2UI5_CL_UTIL'].db_load_by_handle({uname: abap.builtin.sy.get().uname, handle: new abap.types.Character(24).set('z2ui5_cl_app_search_apps'), result: this.mt_favs});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
      abap.statements.clear(temp15);
      temp1.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_classes_impl_intf({val: new abap.types.String().set(`Z2UI5_IF_APP`)})));
      for await (const unique131 of abap.statements.loop(temp1)) {
        row.set(unique131);
        temp16.get().name.set(row);
        abap.statements.insertInternal({data: temp16, table: temp15});
      }
      this.mt_apps.set(temp15);
      await this.search();
      await this.view_display({client: client});
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.view_display({client: client});
    }
    let unique132 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique132, new abap.types.String().set(`ADD_TO_FAVS`))) {
      abap.statements.insertInternal({data: this.ms_app_sel, table: this.mt_favs});
      await abap.Classes['Z2UI5_CL_UTIL'].db_save({uname: abap.builtin.sy.get().uname, handle: new abap.types.Character(24).set('z2ui5_cl_app_search_apps'), data: this.mt_favs});
      await this.view_nest_display();
    } else if (abap.compare.eq(unique132, new abap.types.String().set(`ON_START`))) {
      try {
        lt_arg2.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
        temp3.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(lt_arg2,{index: abap.IntegerFactory.get(1),
          into: temp2});
        abap.builtin.sy.get().tabix.set(temp3);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        lv_app2.set(temp2);
        let unique133 = abap.Classes["CLAS-Z2UI5_CL_CORE_APP_SEARCH-"+lv_app2.get().trimEnd()];
        if (unique133 === undefined) { unique133 = abap.Classes[lv_app2.get().trimEnd()]; }
        if (unique133 === undefined) { throw new abap.Classes['CX_SY_CREATE_OBJECT_ERROR']; }
        li_app.set(await (new unique133()).constructor_());
        await client.get().z2ui5_if_client$nav_app_call({app: li_app});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          x.set(e);
          await client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POPUP_TO_INFORM'].factory({i_text: (await x.get().if_message$get_text())}))});
        } else {
          throw e;
        }
      }
    } else if (abap.compare.eq(unique132, new abap.types.String().set(`ON_PRESS`))) {
      lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp5.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp4});
      abap.builtin.sy.get().tabix.set(temp5);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_app.set(temp4);
      abap.statements.clear(this.ms_app_sel);
      this.ms_app_sel.get().name.set(lv_app);
      await this.view_action_sheet({val: lv_app});
    } else if (abap.compare.eq(unique132, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique132, new abap.types.String().set(`ON_FAVS_CLEAR`))) {
      await abap.Classes['Z2UI5_CL_UTIL'].db_delete_by_handle({uname: abap.builtin.sy.get().uname, handle: new abap.types.Character(24).set('z2ui5_cl_app_search_apps')});
      abap.statements.clear(this.mt_favs);
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`Favorites deleted.`)});
      await this.view_nest_display();
    } else if (abap.compare.eq(unique132, new abap.types.Character(13).set('ON_SEARCH_ALL'))) {
      await this.search();
      await client.get().z2ui5_if_client$view_model_update();
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`backend search done`)});
    } else if (abap.compare.eq(unique132, new abap.types.Character(13).set('ON_SEARCH_GIT'))) {
      await this.search();
      await client.get().z2ui5_if_client$view_model_update();
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`backend search done`)});
    }
  }
}
abap.Classes['Z2UI5_CL_CORE_APP_SEARCH'] = z2ui5_cl_core_app_search;
z2ui5_cl_core_app_search.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_search.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_core_app_search.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_search.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_core_app_search.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_search.z2ui5_if_app$license.set('MIT');
z2ui5_cl_core_app_search.ty_app = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_APP-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_app", undefined, {}, {});
z2ui5_cl_core_app_search.ty_s_app = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {});
z2ui5_cl_core_app_search.ty_t_app = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app");
z2ui5_cl_core_app_search.ty_s_repo = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {});
z2ui5_cl_core_app_search.ty_t_repo = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
export {z2ui5_cl_core_app_search};
//# sourceMappingURL=z2ui5_cl_core_app_search.clas.mjs.map