const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_099.clas.abap
class z2ui5_cl_demo_app_099 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_099';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB_SORT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB_GROUP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB_FILTER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SORTER_GROUP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_FILTER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SORT_DESCENDING": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_GROUP_DESCENDING": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_GROUP_DESC_STR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_SORT_POPUP": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_FILTER_POPUP": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_GROUP_POPUP": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_SETTINGS_POPUP": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.t_tab_sort = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.t_tab_group = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.t_tab_filter = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.mv_sorter_group = new abap.types.String({qualifiedName: "STRING"});
    this.mv_filter = new abap.types.String({qualifiedName: "STRING"});
    this.mv_sort_descending = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_group_descending = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_group_desc_str = new abap.types.String({qualifiedName: "STRING"});
    this.mv_group_desc_str.set(`false`);
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_set_data();
      await this.z2ui5_view_display();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let sort_field = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let filter_string = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let lv_dummy = new abap.types.String({qualifiedName: "STRING"});
    let lv_field = new abap.types.String({qualifiedName: "STRING"});
    let lv_values = new abap.types.String({qualifiedName: "STRING"});
    let lv_values_len = new abap.types.Integer({qualifiedName: "I"});
    let lt_values = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let lv_val = new abap.types.String({qualifiedName: "STRING"});
    let mv_filter_len = new abap.types.Integer({qualifiedName: "I"});
    let group_field = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    let unique331 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique331, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique331, new abap.types.Character(3).set('ALL'))) {
      await this.z2ui5_view_settings_popup();
    } else if (abap.compare.eq(unique331, new abap.types.Character(4).set('SORT'))) {
      await this.z2ui5_view_sort_popup();
    } else if (abap.compare.eq(unique331, new abap.types.Character(6).set('FILTER'))) {
      await this.z2ui5_view_filter_popup();
    } else if (abap.compare.eq(unique331, new abap.types.Character(5).set('GROUP'))) {
      await this.z2ui5_view_group_popup();
    } else if (abap.compare.eq(unique331, new abap.types.Character(12).set('CONFIRM_SORT'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      if (abap.compare.initial(lt_arg) === false) {
        temp2.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
          into: temp1});
        abap.builtin.sy.get().tabix.set(temp2);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        sort_field.set(temp1);
        if (abap.compare.eq(this.mv_sort_descending, abap.builtin.abap_true)) {
          abap.statements.sort(this.t_tab,{});
        } else {
          abap.statements.sort(this.t_tab,{});
        }
        await this.client.get().z2ui5_if_client$view_model_update();
      }
    } else if (abap.compare.eq(unique331, new abap.types.Character(14).set('CONFIRM_FILTER'))) {
      abap.statements.clear(this.mv_filter);
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      if (abap.compare.initial(lt_arg) === false) {
        temp4.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
          into: temp3});
        abap.builtin.sy.get().tabix.set(temp4);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        filter_string.set(temp3);
        abap.statements.split({source: filter_string, at: new abap.types.Character(1).set(':'), targets: [lv_dummy,filter_string]});
        abap.statements.condense(filter_string, {nogaps: true});
        abap.statements.split({source: filter_string, at: new abap.types.String().set(`(`), targets: [lv_field,lv_values]});
        abap.statements.translate(lv_field, "UPPER");
        lv_values_len.set(abap.operators.minus(abap.builtin.strlen({val: lv_values}),abap.IntegerFactory.get(1)));
        lv_values.set(lv_values.getOffset({offset: 0, length: lv_values_len}));
        abap.statements.split({source: lv_values, at: new abap.types.Character(1).set(','), table: lt_values});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          for await (const unique332 of abap.statements.loop(lt_values)) {
            lv_val.set(unique332);
            this.mv_filter.set(abap.operators.concat(this.mv_filter,abap.operators.concat(new abap.types.String().set(`{path:'`),abap.operators.concat(lv_field,abap.operators.concat(new abap.types.String().set(`',operator: 'EQ',value1:'`),abap.operators.concat(lv_val,new abap.types.String().set(`'},`)))))));
          }
        }
        mv_filter_len.set(abap.operators.minus(abap.builtin.strlen({val: this.mv_filter}),abap.IntegerFactory.get(1)));
        this.mv_filter.set(this.mv_filter.getOffset({offset: 0, length: mv_filter_len}));
        await this.z2ui5_view_display();
      }
    } else if (abap.compare.eq(unique331, new abap.types.Character(13).set('CONFIRM_GROUP'))) {
      lt_arg.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
      if (abap.compare.initial(lt_arg) === false) {
        temp6.set(abap.builtin.sy.get().tabix);
        abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
          into: temp5});
        abap.builtin.sy.get().tabix.set(temp6);
        if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
        }
        group_field.set(temp5);
        if (abap.compare.initial(group_field) === false) {
          if (abap.compare.eq(this.mv_group_descending, abap.builtin.abap_true)) {
            abap.statements.sort(this.t_tab,{});
          } else {
            abap.statements.sort(this.t_tab,{});
          }
          this.mv_sorter_group.set(group_field);
          abap.statements.translate(this.mv_sorter_group, "UPPER");
        } else {
          if (abap.compare.eq(this.mv_group_descending, abap.builtin.abap_true)) {
            abap.statements.sort(this.t_tab,{});
          } else {
            abap.statements.sort(this.t_tab,{});
          }
          abap.statements.clear(this.mv_sorter_group);
        }
        await this.z2ui5_view_display();
      }
    } else if (abap.compare.eq(unique331, new abap.types.Character(11).set('RESET_GROUP'))) {
    }
  }
  async z2ui5_set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_row", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp4 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp6 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp8 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().title.set(new abap.types.Character(6).set('row_01'));
    temp2.get().info.set(new abap.types.Character(9).set('completed'));
    temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
    temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().title.set(new abap.types.Character(6).set('row_02'));
    temp2.get().info.set(new abap.types.Character(11).set('incompleted'));
    temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
    temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().title.set(new abap.types.Character(6).set('row_03'));
    temp2.get().info.set(new abap.types.Character(7).set('working'));
    temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
    temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().title.set(new abap.types.Character(6).set('row_04'));
    temp2.get().info.set(new abap.types.Character(7).set('working'));
    temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
    temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().title.set(new abap.types.Character(6).set('row_05'));
    temp2.get().info.set(new abap.types.Character(9).set('completed'));
    temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
    temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().title.set(new abap.types.Character(6).set('row_06'));
    temp2.get().info.set(new abap.types.Character(9).set('completed'));
    temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
    temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.t_tab.set(temp1);
    abap.statements.clear(temp3);
    temp4.get().text.set(new abap.types.String().set(`Title`));
    temp4.get().key.set(new abap.types.String().set(`title`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().text.set(new abap.types.String().set(`Info`));
    temp4.get().key.set(new abap.types.String().set(`info`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().text.set(new abap.types.String().set(`Description`));
    temp4.get().key.set(new abap.types.String().set(`descr`));
    abap.statements.insertInternal({data: temp4, table: temp3});
    this.t_tab_group.set(temp3);
    abap.statements.clear(temp5);
    temp6.get().text.set(new abap.types.String().set(`Title`));
    temp6.get().key.set(new abap.types.String().set(`title`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`Info`));
    temp6.get().key.set(new abap.types.String().set(`info`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().text.set(new abap.types.String().set(`Description`));
    temp6.get().key.set(new abap.types.String().set(`descr`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    this.t_tab_sort.set(temp5);
    abap.statements.clear(temp7);
    temp8.get().text.set(new abap.types.String().set(`Title`));
    temp8.get().key.set(new abap.types.String().set(`Title`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().text.set(new abap.types.String().set(`Descr`));
    temp8.get().key.set(new abap.types.String().set(`Descr`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    temp8.get().text.set(new abap.types.String().set(`Info`));
    temp8.get().key.set(new abap.types.String().set(`Info`));
    abap.statements.insertInternal({data: temp8, table: temp7});
    this.t_tab_filter.set(temp7);
  }
  async z2ui5_view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(15).set('abap2UI5 - List'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link()).get().get_parent()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().table({headertext: new abap.types.Character(12).set('Table Output'), items: abap.operators.concat(new abap.types.String().set(`{path:'`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`',sorter:{path:'`),abap.operators.concat(this.mv_sorter_group,abap.operators.concat(new abap.types.String().set(`',group:`),abap.operators.concat(new abap.types.String().set(`true`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`,filters:[`),abap.operators.concat(this.mv_filter,new abap.types.String().set(`] }`))))))))))})).get().header_toolbar()).get().overflow_toolbar()).get().title({text: new abap.types.String().set(`Table`), level: new abap.types.String().set(`H2`)})).get().toolbar_spacer()).get().button({icon: new abap.types.String().set(`sap-icon://sort`), tooltip: new abap.types.String().set(`Sort`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`SORT`)}))})).get().button({icon: new abap.types.String().set(`sap-icon://filter`), tooltip: new abap.types.String().set(`Filter`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`FILTER`)}))})).get().button({icon: new abap.types.String().set(`sap-icon://group-2`), tooltip: new abap.types.String().set(`Group`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`GROUP`)}))})).get().button({icon: new abap.types.String().set(`sap-icon://action-settings`), tooltip: new abap.types.String().set(`Group`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`ALL`)}))})).get().get_parent()).get().get_parent()).get().columns()).get().column()).get().text({text: new abap.types.String().set(`Title`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Info`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Descr`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Icon`)})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item({valign: new abap.types.String().set(`Middle`)})).get().cells()).get().text({text: new abap.types.String().set(`{TITLE}`)})).get().text({text: new abap.types.String().set(`{INFO}`)})).get().text({text: new abap.types.String().set(`{DESCR}`)})).get().avatar({src: new abap.types.String().set(`{ICON}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_view_filter_popup() {
    let popup_filter = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp9 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let filter_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup_filter.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    abap.statements.clear(temp9);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/filterString}`), table: temp9});
    filter_view.set((await (await (await (await (await (await popup_filter.get().view_settings_dialog({filteritems: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab_filter})), confirm: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CONFIRM_FILTER`), t_arg: temp9}))})).get().filter_items()).get().view_settings_filter_item({multiselect: abap.builtin.abap_true, text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`)})).get().items()).get().view_settings_item({text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`)})).get().get_parent()));
    await this.client.get().z2ui5_if_client$popup_display({val: (await filter_view.get().stringify())});
  }
  async z2ui5_view_group_popup() {
    let popup_group = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp11 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let group_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup_group.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    abap.statements.clear(temp11);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/groupItem/mProperties/key}`), table: temp11});
    group_view.set((await (await (await popup_group.get().view_settings_dialog({confirm: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CONFIRM_GROUP`), t_arg: temp11})), reset: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`RESET_GROUP`)})), groupdescending: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_group_descending})), groupitems: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab_group}))})).get().group_items()).get().view_settings_item({text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`), selected: new abap.types.String().set(`{SELECTED}`)})));
    await this.client.get().z2ui5_if_client$popup_display({val: (await group_view.get().stringify())});
  }
  async z2ui5_view_settings_popup() {
    let popup_settings = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup_settings.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    popup_settings.set((await (await (await (await (await (await (await (await (await (await (await (await (await popup_settings.get().view_settings_dialog({confirm: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('ALL_EVENT')})), sortitems: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab_sort})), groupitems: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab_group})), filteritems: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab_filter}))})).get().sort_items()).get().view_settings_item({text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`), selected: new abap.types.String().set(`{SELECTED}`)})).get().get_parent()).get().get_parent()).get().group_items()).get().view_settings_item({text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`), selected: new abap.types.String().set(`{SELECTED}`)})).get().get_parent()).get().get_parent()).get().filter_items()).get().view_settings_filter_item({text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`), multiselect: abap.builtin.abap_true})).get().items()).get().view_settings_item({text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`)})));
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup_settings.get().stringify())});
  }
  async z2ui5_view_sort_popup() {
    let popup_sort = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp13 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let sort_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popup_sort.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    abap.statements.clear(temp13);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/sortItem/mProperties/key}`), table: temp13});
    sort_view.set((await (await (await popup_sort.get().view_settings_dialog({confirm: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CONFIRM_SORT`), t_arg: temp13})), sortitems: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab_sort})), sortdescending: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_sort_descending}))})).get().sort_items()).get().view_settings_item({text: new abap.types.String().set(`{TEXT}`), key: new abap.types.String().set(`{KEY}`), selected: new abap.types.String().set(`{SELECTED}`)})));
    await this.client.get().z2ui5_if_client$popup_display({val: (await sort_view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_099'] = z2ui5_cl_demo_app_099;
z2ui5_cl_demo_app_099.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_099.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_099.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_099.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_099.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_099.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_099.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_099.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_099.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_099.ty_sort = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-TEXT"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_099=>TY_SORT-KEY"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_099=>ty_sort", undefined, {}, {});
export {z2ui5_cl_demo_app_099};
//# sourceMappingURL=z2ui5_cl_demo_app_099.clas.mjs.map