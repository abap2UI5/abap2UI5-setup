const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app_search.clas.locals_imp.abap
class lcl_github {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CL_CORE_APP_SEARCH-LCL_GITHUB';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_REPOSITORIES": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");}, "is_optional": " "}}},
  "GET_REPOSITORIES_ADDONS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_repositories() {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp17 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp18 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {});
    abap.statements.clear(temp17);
    temp18.get().name.set(new abap.types.String().set(`The Quest`));
    temp18.get().descr.set(new abap.types.String().set(`A wizard's adventure game based on a fork of the AXAGE game engine (ABAP teXt Adventure Game Engine) and abap2UI5.`));
    temp18.get().check_abap_for_cloud.set(abap.builtin.abap_true);
    temp18.get().check_standard_abap.set(abap.builtin.abap_true);
    temp18.get().link.set(new abap.types.String().set(`https://github.com/nomssi/axage`));
    temp18.get().author_link.set(new abap.types.String().set(`https://github.com/nomssi`));
    temp18.get().author_name.set(new abap.types.String().set(`Nomssi`));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().name.set(new abap.types.String().set(`Advent of Code`));
    temp18.get().descr.set(new abap.types.String().set(`Template for the Advent of Code 2023 in ABAP`));
    temp18.get().author_link.set(new abap.types.String().set(`https://github.com/joltdx`));
    temp18.get().author_name.set(new abap.types.String().set(`joltdx`));
    temp18.get().link.set(new abap.types.String().set(`https://github.com/joltdx/abap-advent-2023-template`));
    temp18.get().check_abap_for_cloud.set(abap.builtin.abap_true);
    temp18.get().check_standard_abap.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().name.set(new abap.types.String().set(`Table Loader`));
    temp18.get().descr.set(new abap.types.String().set(`Upload, Edit & Download Table Content (CSV, JSON)`));
    temp18.get().author_link.set(new abap.types.String().set(`https://github.com/oblomov-dev`));
    temp18.get().author_name.set(new abap.types.String().set(`oblomov`));
    temp18.get().check_standard_abap.set(abap.builtin.abap_true);
    temp18.get().check_abap_for_cloud.set(abap.builtin.abap_false);
    temp18.get().link.set(new abap.types.String().set(`https://github.com/oblomov-dev/a2UI5-db_table_loader`));
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().name.set(new abap.types.String().set(`Generic Search Help`));
    temp18.get().descr.set(new abap.types.String().set(`Popups with Search Helps, dynamically created based on imported values.`));
    temp18.get().author_link.set(new abap.types.String().set(`https://github.com/oblomov-dev`));
    temp18.get().author_name.set(new abap.types.String().set(`oblomov`));
    temp18.get().check_standard_abap.set(abap.builtin.abap_true);
    temp18.get().check_abap_for_cloud.set(abap.builtin.abap_true);
    temp18.get().link.set(new abap.types.String().set(`https://github.com/oblomov-dev/a2UI5-generic_search_help`));
    abap.statements.insertInternal({data: temp18, table: temp17});
    result.set(temp17);
    return result;
  }
  async get_repositories_addons() {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp19 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_repo");
    let temp20 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-DESCR"}), "author_link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_LINK"}), "author_name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-AUTHOR_NAME"}), "check_abap_for_cloud": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_standard_abap": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "link": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-LINK"}), "t_app": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-NAME"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-DESCR"}), "classname": new abap.types.String({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_APP-CLASSNAME"}), "check_hide": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_core_app_search=>ty_s_app", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_core_app_search=>ty_t_app"), "number_of_app": new abap.types.Integer({qualifiedName: "Z2UI5_CL_CORE_APP_SEARCH=>TY_S_REPO-NUMBER_OF_APP"})}, "z2ui5_cl_core_app_search=>ty_s_repo", undefined, {}, {});
    abap.statements.clear(temp19);
    temp20.get().name.set(new abap.types.String().set(`Launchpad Proxy App`));
    temp20.get().descr.set(new abap.types.String().set(`Integrate your apps to the on-premise fiori launchpad`));
    temp20.get().link.set(new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-launchpad_proxy_app`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    temp20.get().name.set(new abap.types.String().set(`BTP Proxy App`));
    temp20.get().descr.set(new abap.types.String().set(`Integrate your apps with Business Technology Platform & SAP Mobile Start`));
    temp20.get().link.set(new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-btp_proxy_app`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    temp20.get().name.set(new abap.types.String().set(`S-RTTI`));
    temp20.get().descr.set(new abap.types.String().set(`Install this repository to use dynamically types variables and tables in your abap2UI5 apps`));
    temp20.get().link.set(new abap.types.String().set(`https://github.com/sandraros/S-RTTI`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    temp20.get().name.set(new abap.types.String().set(`abap2UI5-web`));
    temp20.get().descr.set(new abap.types.String().set(`Run abap2UI5 with open-abap on Node.js`));
    temp20.get().link.set(new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-web`));
    abap.statements.insertInternal({data: temp20, table: temp19});
    result.set(temp19);
    return result;
  }
}
abap.Classes['CLAS-Z2UI5_CL_CORE_APP_SEARCH-LCL_GITHUB'] = lcl_github;
export {lcl_github};
//# sourceMappingURL=z2ui5_cl_core_app_search.clas.locals.mjs.map