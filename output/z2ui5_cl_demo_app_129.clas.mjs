const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_129.clas.abap
class z2ui5_cl_demo_app_129 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_129';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"LV_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SCREEN": {"type": () => {return new abap.types.Structure({"check_is_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "colour": new abap.types.String({qualifiedName: "STRING"}), "combo_key": new abap.types.String({qualifiedName: "STRING"}), "combo_key2": new abap.types.String({qualifiedName: "STRING"}), "segment_key": new abap.types.String({qualifiedName: "STRING"}), "date": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"}), "time_start": new abap.types.String({qualifiedName: "STRING"}), "time_end": new abap.types.String({qualifiedName: "STRING"}), "check_switch_01": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_switch_02": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SUGGESTION": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_129=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_RENDERING": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDERING_POPUP": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_ON_RENDERING_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.lv_text = new abap.types.String({qualifiedName: "STRING"});
    this.screen = new abap.types.Structure({"check_is_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "colour": new abap.types.String({qualifiedName: "STRING"}), "combo_key": new abap.types.String({qualifiedName: "STRING"}), "combo_key2": new abap.types.String({qualifiedName: "STRING"}), "segment_key": new abap.types.String({qualifiedName: "STRING"}), "date": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"}), "time_start": new abap.types.String({qualifiedName: "STRING"}), "time_end": new abap.types.String({qualifiedName: "STRING"}), "check_switch_01": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_switch_02": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, undefined, undefined, {}, {});
    this.screen.get().check_switch_01.set(' ');
    this.screen.get().check_switch_02.set(' ');
    this.mt_suggestion = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_129=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
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
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.lv_text.set(abap.IntegerFactory.get(10));
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      await this.z2ui5_on_rendering({client: client});
    }
    await this.z2ui5_on_event({client: client});
  }
  async z2ui5_on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique367 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique367, new abap.types.Character(7).set('REFRESH'))) {
      this.lv_text.set(abap.operators.add(this.lv_text,abap.IntegerFactory.get(10)));
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique367, new abap.types.Character(11).set('BUTTON_SEND'))) {
      await this.z2ui5_on_rendering_popup({client: client});
    } else if (abap.compare.eq(unique367, new abap.types.Character(14).set('BUTTON_POPOVER'))) {
      await this.z2ui5_on_rendering_popover({client: client, id: new abap.types.Character(4).set('ppvr')});
    } else if (abap.compare.eq(unique367, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_129=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp2 = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_129=>s_suggestion_items", undefined, {}, {});
    abap.statements.clear(this.screen);
    this.screen.get().check_is_active.set(abap.builtin.abap_true);
    this.screen.get().colour.set(new abap.types.Character(4).set('BLUE'));
    this.screen.get().combo_key.set(new abap.types.Character(4).set('GRAY'));
    this.screen.get().segment_key.set(new abap.types.Character(5).set('GREEN'));
    this.screen.get().date.set(new abap.types.Character(8).set('07.12.22'));
    this.screen.get().date_time.set(new abap.types.Character(20).set('23.12.2022, 19:27:20'));
    this.screen.get().time_start.set(new abap.types.Character(8).set('05:24:00'));
    this.screen.get().time_end.set(new abap.types.Character(8).set('17:23:57'));
    abap.statements.clear(temp1);
    temp2.get().descr.set(new abap.types.Character(5).set('Green'));
    temp2.get().value.set(new abap.types.Character(5).set('GREEN'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().descr.set(new abap.types.Character(4).set('Blue'));
    temp2.get().value.set(new abap.types.Character(4).set('BLUE'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().descr.set(new abap.types.Character(5).set('Black'));
    temp2.get().value.set(new abap.types.Character(5).set('BLACK'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().descr.set(new abap.types.Character(4).set('Grey'));
    temp2.get().value.set(new abap.types.Character(4).set('GREY'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().descr.set(new abap.types.Character(5).set('Blue2'));
    temp2.get().value.set(new abap.types.Character(5).set('BLUE2'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().descr.set(new abap.types.Character(5).set('Blue3'));
    temp2.get().value.set(new abap.types.Character(5).set('BLUE3'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_suggestion.set(temp1);
  }
  async z2ui5_on_rendering(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    page.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await page.get()._z2ui5()).get().timer({finished: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('REFRESH')})), checkrepeat: abap.builtin.abap_true, delayms: new abap.types.String().set(`3000`)});
    page.set((await (await page.get().shell()).get().page({title: new abap.types.Character(35).set('abap2UI5 - Selection-Screen Example'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    grid.set((await grid.get().text({text: (await client.get().z2ui5_if_client$_bind_edit({val: this.lv_text, view: client.get().z2ui5_if_client$cs_view.get().main}))})));
    abap.statements.clear(temp3);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/sId}`), table: temp3});
    await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({id: new abap.types.String().set(`ppvr`), text: new abap.types.Character(12).set('Open Popover'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_POPOVER'), t_arg: temp3})), type: new abap.types.Character(5).set('Ghost')})).get().button({text: new abap.types.Character(10).set('Open Popup'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SEND')})), type: new abap.types.Character(7).set('Success')});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async z2ui5_on_rendering_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let popover = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    popover.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().popover({placement: new abap.types.String().set(`Top`)})));
    await popover.get().text({text: new abap.types.Character(49).set('this is popover in middle with timer auto refresh')});
    await client.get().z2ui5_if_client$popover_display({xml: (await popover.get().stringify()), by_id: id});
  }
  async z2ui5_on_rendering_popup(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let dialog = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    dialog.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog()));
    await dialog.get().text({text: new abap.types.Character(47).set('this is popup in middle with timer auto refresh')});
    await dialog.get().button({text: new abap.types.Character(5).set('close'), press: (await client.get().z2ui5_if_client$_event_client({val: client.get().z2ui5_if_client$cs_event.get().popup_close}))});
    await client.get().z2ui5_if_client$popup_display({val: (await dialog.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_129'] = z2ui5_cl_demo_app_129;
z2ui5_cl_demo_app_129.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_129.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_129.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_129.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_129.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_129.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_129.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_129.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_129.s_suggestion_items = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_129=>s_suggestion_items", undefined, {}, {});
z2ui5_cl_demo_app_129.s_combobox = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_129=>s_combobox", undefined, {}, {});
z2ui5_cl_demo_app_129.ty_t_combo = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_129=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_129=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_129=>ty_t_combo");
export {z2ui5_cl_demo_app_129};
//# sourceMappingURL=z2ui5_cl_demo_app_129.clas.mjs.map