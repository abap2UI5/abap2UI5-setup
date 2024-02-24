const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_popup_get_range.clas.abap
class z2ui5_cl_popup_get_range {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POPUP_GET_RANGE';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_FILTER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_RESULT": {"type": () => {return new abap.types.Structure({"t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range=>ty_s_result", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_MAPPING": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_RANGE"});}, "is_optional": " "}, "T_RANGE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range");}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range=>ty_s_result", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_filter = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.ms_result = new abap.types.Structure({"t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range=>ty_s_result", undefined, {}, {});
    this.mt_mapping = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
    return z2ui5_cl_popup_get_range.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_GET_RANGE"});
    let t_range = abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range");
    if (INPUT && INPUT.t_range) {t_range.set(INPUT.t_range);}
    let temp1 = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    let temp2 = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    r_result.set(await (new abap.Classes['Z2UI5_CL_POPUP_GET_RANGE']()).constructor_());
    r_result.get().ms_result.get().t_range.set(t_range);
    abap.statements.clear(temp2);
    temp1.set(temp2);
    abap.statements.insertInternal({data: temp1, table: r_result.get().ms_result.get().t_range});
    return r_result;
  }
  async result() {
    let result = new abap.types.Structure({"t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range=>ty_s_result", undefined, {}, {});
    result.set(this.ms_result);
    return result;
  }
  async view_display() {
    let lo_popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let item = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    lo_popup.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    lo_popup.set((await lo_popup.get().dialog({afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')})), contentheight: new abap.types.String().set(`50%`), contentwidth: new abap.types.String().set(`50%`), title: new abap.types.Character(23).set('Define Filter Conditons')})));
    vbox.set((await lo_popup.get().vbox({height: new abap.types.String().set(`100%`), justifycontent: new abap.types.Character(12).set('SpaceBetween')})));
    item.set((await (await vbox.get().list({nodata: new abap.types.String().set(`no conditions defined`), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_filter})), selectionchange: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().custom_list_item()));
    grid.set((await item.get().grid()));
    abap.statements.clear(temp2);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${KEY}`), table: temp2});
    await (await (await (await (await (await grid.get().combobox({selectedkey: new abap.types.String().set(`{OPTION}`), items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_mapping}))})).get().item({key: new abap.types.Character(3).set('{N}'), text: new abap.types.Character(3).set('{N}')})).get().get_parent()).get().input({value: new abap.types.String().set(`{LOW}`), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')}))})).get().input({value: new abap.types.String().set(`{HIGH}`), visible: new abap.types.String().set(`{= \${OPTION} === 'BT' }`), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')}))})).get().button({icon: new abap.types.Character(18).set('sap-icon://decline'), type: new abap.types.String().set(`Transparent`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_DELETE`), t_arg: temp2}))});
    await (await (await (await (await (await (await lo_popup.get().footer()).get().overflow_toolbar()).get().button({text: new abap.types.String().set(`Delete All`), icon: new abap.types.Character(17).set('sap-icon://delete'), type: new abap.types.String().set(`Transparent`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_DELETE_ALL`)}))})).get().button({text: new abap.types.String().set(`Add Item`), icon: new abap.types.String().set(`sap-icon://add`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`POPUP_ADD`)}))})).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('Cancel'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')}))})).get().button({text: new abap.types.Character(2).set('OK'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await lo_popup.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp4 = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    let lr_product = new abap.types.DataReference(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}));
    let temp5 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {});
    let temp6 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {});
    let lr_filter = new abap.types.DataReference(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {}));
    let temp7 = new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
    let temp8 = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {});
    let lt_event = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp9 = new abap.types.String({qualifiedName: "STRING"});
    let temp10 = new abap.types.Integer({qualifiedName: "I"});
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.mt_mapping.set((await abap.Classes['Z2UI5_CL_UTIL'].filter_get_token_range_mapping()));
      abap.statements.clear(this.mt_filter);
      for await (const unique160 of abap.statements.loop(this.ms_result.get().t_range)) {
        lr_product.assign(unique160);
        abap.statements.clear(temp5);
        temp5.get().low.set(lr_product.get().low);
        temp5.get().high.set(lr_product.get().high);
        temp5.get().option.set(lr_product.get().option);
        temp5.get().key.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
        abap.statements.insertInternal({data: temp5, table: this.mt_filter});
      }
      await this.view_display();
      return;
    }
    let unique161 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique161, new abap.types.String().set(`BUTTON_CONFIRM`))) {
      abap.statements.clear(this.ms_result.get().t_range);
      for await (const unique162 of abap.statements.loop(this.mt_filter)) {
        lr_filter.assign(unique162);
        if (abap.compare.initial(lr_filter.get().low) && abap.compare.initial(lr_filter.get().high)) {
          continue;
        }
        abap.statements.clear(temp7);
        temp7.get().sign.set(new abap.types.String().set(`I`));
        temp7.get().option.set(lr_filter.get().option);
        temp7.get().low.set(lr_filter.get().low);
        temp7.get().high.set(lr_filter.get().high);
        abap.statements.insertInternal({data: temp7, table: this.ms_result.get().t_range});
      }
      this.ms_result.get().check_confirmed.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique161, new abap.types.String().set(`BUTTON_CANCEL`))) {
      await client.get().z2ui5_if_client$popup_destroy();
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique161, new abap.types.String().set(`POPUP_ADD`))) {
      abap.statements.clear(temp8);
      temp8.get().key.set((await abap.Classes['Z2UI5_CL_UTIL'].uuid_get_c32()));
      abap.statements.insertInternal({data: temp8, table: this.mt_filter});
      await client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique161, new abap.types.String().set(`POPUP_DELETE`))) {
      lt_event.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp10.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event,{index: abap.IntegerFactory.get(1),
        into: temp9});
      abap.builtin.sy.get().tabix.set(temp10);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await abap.statements.deleteInternal(this.mt_filter,{where: (I) => {return abap.compare.eq(I.key, temp9);}});
      await client.get().z2ui5_if_client$popup_model_update();
    } else if (abap.compare.eq(unique161, new abap.types.String().set(`POPUP_DELETE_ALL`))) {
      abap.statements.clear(temp11);
      this.mt_filter.set(temp11);
      await client.get().z2ui5_if_client$popup_model_update();
    }
  }
}
abap.Classes['Z2UI5_CL_POPUP_GET_RANGE'] = z2ui5_cl_popup_get_range;
z2ui5_cl_popup_get_range.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_get_range.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_popup_get_range.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_get_range.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_popup_get_range.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_get_range.z2ui5_if_app$license.set('MIT');
z2ui5_cl_popup_get_range.ty_s_filter_pop = new abap.types.Structure({"option": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-OPTION"}), "low": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-LOW"}), "high": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-HIGH"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_GET_RANGE=>TY_S_FILTER_POP-KEY"})}, "z2ui5_cl_popup_get_range=>ty_s_filter_pop", undefined, {}, {});
z2ui5_cl_popup_get_range.ty_s_result = new abap.types.Structure({"t_range": abap.types.TableFactory.construct(new abap.types.Structure({"sign": new abap.types.Character(1, undefined), "option": new abap.types.Character(2, undefined), "low": new abap.types.String({qualifiedName: "STRING"}), "high": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_util_api=>ty_t_range"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_get_range=>ty_s_result", undefined, {}, {});
export {z2ui5_cl_popup_get_range};
//# sourceMappingURL=z2ui5_cl_popup_get_range.clas.mjs.map