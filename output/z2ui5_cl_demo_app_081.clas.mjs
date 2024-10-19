const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_081.clas.abap
class z2ui5_cl_demo_app_081 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_081';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "QUANTITY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PLACEMENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-NAME"})}, "Z2UI5_CL_DEMO_APP_081=>ty_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_081=>temp1_a4f70f3f7d");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_DISPLAY_VIEW": {"visibility": "O", "parameters": {}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER_LIST": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.product = new abap.types.String({qualifiedName: "STRING"});
    this.quantity = new abap.types.String({qualifiedName: "STRING"});
    this.mv_placement = new abap.types.String({qualifiedName: "STRING"});
    this.mt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-NAME"})}, "Z2UI5_CL_DEMO_APP_081=>ty_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_081=>temp1_a4f70f3f7d");
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
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await (await (await (await (await (await (await (await view.get().popover({title: new abap.types.Character(13).set('Popover Title'), placement: this.mv_placement})).get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('Cancel'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_CANCEL')}))})).get().button({text: new abap.types.Character(7).set('Confirm'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_CONFIRM')})), type: new abap.types.Character(10).set('Emphasized')})).get().get_parent()).get().get_parent()).get().text({text: new abap.types.Character(19).set('make an input here:')})).get().input({value: new abap.types.Character(4).set('abcd')});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_display_popover_list(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await (await view.get().popover({title: new abap.types.Character(13).set('Popover Title'), placement: this.mv_placement})).get().list({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mt_tab})), selectionchange: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('SEL_CHANGE')})), mode: new abap.types.String().set(`SingleSelectMaster`)})).get().standard_list_item({title: new abap.types.String().set(`{ID}`), description: new abap.types.String().set(`{NAME}`), selected: new abap.types.String().set(`{SELECTED}`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_display_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(28).set('abap2UI5 - Popover with List'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().simple_form({title: new abap.types.Character(7).set('Popover')})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(4).set('Link')})).get().link({text: new abap.types.Character(33).set('Documentation UI5 Popover Control'), href: new abap.types.Character(54).set('https://openui5.hana.ondemand.com/entity/sap.m.Popover')})).get().label({text: new abap.types.Character(9).set('placement')})).get().segmented_button({selected_key: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_placement}))})).get().items()).get().segmented_button_item({key: new abap.types.Character(4).set('Left'), icon: new abap.types.Character(23).set('sap-icon://add-favorite'), text: new abap.types.Character(4).set('Left')})).get().segmented_button_item({key: new abap.types.Character(3).set('Top'), icon: new abap.types.Character(17).set('sap-icon://accept'), text: new abap.types.Character(3).set('Top')})).get().segmented_button_item({key: new abap.types.Character(6).set('Bottom'), icon: new abap.types.Character(17).set('sap-icon://accept'), text: new abap.types.Character(6).set('Bottom')})).get().segmented_button_item({key: new abap.types.Character(5).set('Right'), icon: new abap.types.Character(21).set('sap-icon://attachment'), text: new abap.types.Character(5).set('Right')})).get().get_parent()).get().get_parent()).get().label({text: new abap.types.Character(7).set('popover')})).get().button({text: new abap.types.Character(22).set('show popover with list'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('POPOVER_LIST')})), id: new abap.types.Character(4).set('TEST')});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      await this.z2ui5_display_view();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let lt_sel = abap.types.TableFactory.construct(new abap.types.Structure({"selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-NAME"})}, "Z2UI5_CL_DEMO_APP_081=>ty_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_081=>temp1_a4f70f3f7d");
    let unique306 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique306, new abap.types.Character(10).set('SEL_CHANGE'))) {
      lt_sel.set(this.mt_tab);
      await abap.statements.deleteInternal(lt_sel,{where: async (I) => {return abap.compare.initial(I.selected);}});
    } else if (abap.compare.eq(unique306, new abap.types.Character(12).set('POPOVER_LIST'))) {
      await this.z2ui5_display_popover_list({id: new abap.types.String().set(`TEST`)});
    } else if (abap.compare.eq(unique306, new abap.types.Character(7).set('POPOVER'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`TEST`)});
    } else if (abap.compare.eq(unique306, new abap.types.Character(14).set('BUTTON_CONFIRM'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`confirm`)});
      await this.client.get().z2ui5_if_client$popover_destroy();
    } else if (abap.compare.eq(unique306, new abap.types.Character(13).set('BUTTON_CANCEL'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`cancel`)});
      await this.client.get().z2ui5_if_client$popover_destroy();
    } else if (abap.compare.eq(unique306, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-NAME"})}, "Z2UI5_CL_DEMO_APP_081=>ty_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_081=>temp1_a4f70f3f7d");
    let temp2 = new abap.types.Structure({"selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-NAME"})}, "Z2UI5_CL_DEMO_APP_081=>ty_tab", undefined, {}, {});
    this.mv_placement.set(new abap.types.Character(4).set('Left'));
    this.product.set(new abap.types.Character(6).set('tomato'));
    this.quantity.set(new abap.types.Character(3).set('500'));
    abap.statements.clear(temp1);
    temp2.get().id.set(new abap.types.String().set(`1`));
    temp2.get().name.set(new abap.types.String().set(`name1`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`2`));
    temp2.get().name.set(new abap.types.String().set(`name2`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`3`));
    temp2.get().name.set(new abap.types.String().set(`name3`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().id.set(new abap.types.String().set(`4`));
    temp2.get().name.set(new abap.types.String().set(`name4`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_tab.set(temp1);
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_081'] = z2ui5_cl_demo_app_081;
z2ui5_cl_demo_app_081.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_081.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_081.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_081.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_081.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_081.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_081.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_081.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_081.ty_tab = new abap.types.Structure({"selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-NAME"})}, "Z2UI5_CL_DEMO_APP_081=>ty_tab", undefined, {}, {});
z2ui5_cl_demo_app_081.temp1_a4f70f3f7d = abap.types.TableFactory.construct(new abap.types.Structure({"selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-ID"}), "name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_081=>TY_TAB-NAME"})}, "Z2UI5_CL_DEMO_APP_081=>ty_tab", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_081=>temp1_a4f70f3f7d");
export {z2ui5_cl_demo_app_081};
//# sourceMappingURL=z2ui5_cl_demo_app_081.clas.mjs.map