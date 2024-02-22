const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_popup_layout.clas.abap
class z2ui5_cl_popup_layout {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_POPUP_LAYOUT';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_RESULT": {"type": () => {return new abap.types.Structure({"t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_result", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_EVENT": {"visibility": "O", "parameters": {}},
  "DISPLAY": {"visibility": "O", "parameters": {}},
  "ON_EVENT_CONFIRM": {"visibility": "O", "parameters": {}},
  "FACTORY": {"visibility": "U", "parameters": {"R_RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_LAYOUT"});}, "is_optional": " "}, "T_LAYOUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout");}, "is_optional": " "}, "I_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}}},
  "RESULT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_result", undefined, {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_result = new abap.types.Structure({"t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_result", undefined, {}, {});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async display() {
    let popup = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let list = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let ls_comp2 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let col = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let ls_comp = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    popup.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), stretch: abap.builtin.abap_true, title: new abap.types.Character(11).set('Layout View')})).get().content()));
    tab.set((await popup.get().table({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_result.get().t_layout}))})));
    lt_comp.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_struc({val: this.ms_result.get().t_layout})));
    list.set((await tab.get().column_list_item({valign: new abap.types.String().set(`Top`)})));
    cells.set((await list.get().cells()));
    columns.set((await tab.get().columns()));
    for await (const unique167 of abap.statements.loop(lt_comp)) {
      ls_comp2.set(unique167);
      col.set((await (await columns.get().column({width: new abap.types.Character(4).set('8rem')})).get().header({ns: new abap.types.String().set(``)})));
      await col.get().text({text: ls_comp2.get().name});
    }
    for await (const unique168 of abap.statements.loop(lt_comp)) {
      ls_comp.set(unique168);
      if (abap.compare.eq(ls_comp.get().name, new abap.types.Character(4).set('NAME'))) {
        await cells.get().text({text: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(ls_comp.get().name,new abap.types.String().set(`}`)))});
      } else {
        await cells.get().checkbox({selected: abap.operators.concat(new abap.types.String().set(`{`),abap.operators.concat(ls_comp.get().name,new abap.types.String().set(`}`)))});
      }
    }
    await (await (await (await (await popup.get().get_parent()).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(2).set('OK'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await popup.get().stringify())});
  }
  async factory(INPUT) {
    return z2ui5_cl_popup_layout.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT", RTTIName: "\\CLASS=Z2UI5_CL_POPUP_LAYOUT"});
    let t_layout = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout");
    if (INPUT && INPUT.t_layout) {t_layout.set(INPUT.t_layout);}
    let i_tab = INPUT?.i_tab || abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});
    let lt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp1 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let lr_comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let temp2 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {});
    r_result.set(await (new abap.Classes['Z2UI5_CL_POPUP_LAYOUT']()).constructor_());
    if (abap.compare.initial(t_layout)) {
      lt_comp.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_t_attri_by_struc({val: i_tab})));
      for await (const unique169 of abap.statements.loop(lt_comp)) {
        lr_comp.assign(unique169);
        abap.statements.clear(temp2);
        temp2.get().name.set(lr_comp.get().name);
        temp2.get().visible.set(abap.builtin.abap_true);
        temp2.get().mergeduplicates.set(abap.builtin.abap_false);
        abap.statements.insertInternal({data: temp2, table: r_result.get().ms_result.get().t_layout});
      }
    } else {
      r_result.get().ms_result.get().t_layout.set(t_layout);
    }
    return r_result;
  }
  async on_event() {
    let unique170 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique170, new abap.types.Character(14).set('BUTTON_CONFIRM'))) {
      this.ms_result.get().check_confirmed.set(abap.builtin.abap_true);
      await this.on_event_confirm();
    } else if (abap.compare.eq(unique170, new abap.types.Character(6).set('CANCEL'))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.client.get().z2ui5_if_client$nav_app_leave({app: (await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
  }
  async on_event_confirm() {
    await this.client.get().z2ui5_if_client$popup_destroy();
    await this.client.get().z2ui5_if_client$nav_app_leave({app: (await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
  }
  async result() {
    let result = new abap.types.Structure({"t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_result", undefined, {}, {});
    result.set(this.ms_result);
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display();
      return;
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_POPUP_LAYOUT'] = z2ui5_cl_popup_layout;
z2ui5_cl_popup_layout.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_layout.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_popup_layout.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_layout.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_popup_layout.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_popup_layout.z2ui5_if_app$license.set('MIT');
z2ui5_cl_popup_layout.ty_s_layout = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {});
z2ui5_cl_popup_layout.ty_t_layout = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout");
z2ui5_cl_popup_layout.ty_s_result = new abap.types.Structure({"t_layout": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-NAME"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "length": new abap.types.String({qualifiedName: "Z2UI5_CL_POPUP_LAYOUT=>TY_S_LAYOUT-LENGTH"}), "mergeduplicates": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_popup_layout=>ty_t_layout"), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_popup_layout=>ty_s_result", undefined, {}, {});
export {z2ui5_cl_popup_layout};
//# sourceMappingURL=z2ui5_cl_popup_layout.clas.mjs.map