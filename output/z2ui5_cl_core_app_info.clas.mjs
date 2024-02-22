const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app_info.clas.abap
class z2ui5_cl_core_app_info {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_APP_INFO';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_UI5_VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_INFO", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_INFO"});}, "is_optional": " "}}},
  "Z2UI5_ON_EVENT": {"visibility": "U", "parameters": {}},
  "VIEW_DISPLAY_START": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_ui5_version = new abap.types.String({qualifiedName: "STRING"});
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
  async factory() {
    return z2ui5_cl_core_app_info.factory();
  }
  static async factory() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_INFO", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_INFO"});
    result.set(await (new abap.Classes['Z2UI5_CL_CORE_APP_INFO']()).constructor_());
    return result;
  }
  async view_display_start() {
    let page2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let simple_form2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_DRAFT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_DRAFT_SRV"});
    let lv_count = new abap.types.String({qualifiedName: "STRING"});
    page2.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({stretch: abap.builtin.abap_true, title: new abap.types.String().set(`abap2UI5 - System Information`), afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CLOSE`)}))})));
    await (await page2.get()._z2ui5()).get().info_frontend({ui5_version: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_ui5_version}))});
    simple_form2.set((await (await page2.get().simple_form({editable: abap.builtin.abap_true, layout: new abap.types.String().set(`ResponsiveGridLayout`), labelspanxl: new abap.types.String().set(`4`), labelspanl: new abap.types.String().set(`3`), labelspanm: new abap.types.String().set(`4`), labelspans: new abap.types.String().set(`12`), adjustlabelspan: abap.builtin.abap_false, emptyspanxl: new abap.types.String().set(`0`), emptyspanl: new abap.types.String().set(`4`), emptyspanm: new abap.types.String().set(`0`), emptyspans: new abap.types.String().set(`0`), columnsxl: new abap.types.String().set(`1`), columnsl: new abap.types.String().set(`1`), columnsm: new abap.types.String().set(`1`), singlecontainerfullsize: abap.builtin.abap_false})).get().content({ns: new abap.types.String().set(`form`)})));
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`Frontend`)});
    await simple_form2.get().label({text: new abap.types.String().set(`UI5 Version`)});
    await simple_form2.get().text({text: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_ui5_version}))});
    await simple_form2.get().label({text: new abap.types.String().set(`Launchpad active`)});
    await simple_form2.get().checkbox({enabled: abap.builtin.abap_false, selected: ((await this.client.get().z2ui5_if_client$get())).get().check_launchpad_active});
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`Backend`)});
    await simple_form2.get().label({text: new abap.types.String().set(`ABAP for Cloud`)});
    await simple_form2.get().checkbox({enabled: abap.builtin.abap_false, selected: (await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_lang_version_cloud())});
    temp2.set(await (new abap.Classes['Z2UI5_CL_CORE_DRAFT_SRV']()).constructor_());
    temp1.set((await temp2.get().count_entries()));
    lv_count.set(temp1);
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`abap2UI5`)});
    await simple_form2.get().label({text: new abap.types.String().set(`Version `)});
    await simple_form2.get().text({text: abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version});
    await simple_form2.get().label({text: new abap.types.String().set(`Draft Entries `)});
    await simple_form2.get().text({text: lv_count});
    await (await (await (await page2.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(5).set('close'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLOSE')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await page2.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_check_initialized, abap.builtin.abap_false)) {
      this.mv_check_initialized.set(abap.builtin.abap_true);
      await this.view_display_start();
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      await this.view_display_start();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique125 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique125, new abap.types.String().set(`CLOSE`))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
      await this.client.get().z2ui5_if_client$nav_app_leave({app: (await this.client.get().z2ui5_if_client$get_app({id: ((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else {
    }
  }
}
abap.Classes['Z2UI5_CL_CORE_APP_INFO'] = z2ui5_cl_core_app_info;
z2ui5_cl_core_app_info.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_info.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_core_app_info.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_info.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_core_app_info.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_info.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_core_app_info};
//# sourceMappingURL=z2ui5_cl_core_app_info.clas.mjs.map