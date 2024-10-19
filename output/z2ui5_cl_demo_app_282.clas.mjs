const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_282.clas.abap
class z2ui5_cl_demo_app_282 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_282';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let page_01 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp13 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp2 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp4 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp5 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp6 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp7 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp8 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp9 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp10 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp11 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp12 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let page_02 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    temp13.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page_01.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Sample: InvisibleText`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp13})));
    await (await page_01.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page_01.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(111).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.ui.core.InvisibleText/sample/sap.ui.core.sample.InvisibleText')});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp1});
    abap.statements.clear(temp2);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp2});
    abap.statements.clear(temp3);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp3});
    abap.statements.clear(temp4);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp4});
    abap.statements.clear(temp5);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp5});
    abap.statements.clear(temp6);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp6});
    abap.statements.clear(temp7);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp7});
    abap.statements.clear(temp8);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp8});
    abap.statements.clear(temp9);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp9});
    abap.statements.clear(temp10);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp10});
    abap.statements.clear(temp11);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp11});
    abap.statements.clear(temp12);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp12});
    page_02.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page_01.get().page({title: new abap.types.String().set(`Page`), class: new abap.types.String().set(`sapUiContentPadding`)})).get().custom_header()).get().toolbar()).get().button({type: new abap.types.String().set(`Back`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp1}))})).get().toolbar_spacer()).get().title({text: new abap.types.String().set(`Title`)})).get().toolbar_spacer()).get().button({icon: new abap.types.String().set(`sap-icon://edit`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp2})), arialabelledby: new abap.types.String().set(`editButtonLabel`)})).get().get_parent()).get().get_parent()).get().sub_header()).get().toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Default`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp3}))})).get().button({type: new abap.types.String().set(`Reject`), text: new abap.types.String().set(`Reject`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp4}))})).get().button({icon: new abap.types.String().set(`sap-icon://action`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp5})), arialabelledby: new abap.types.String().set(`actionButtonLabel`)})).get().toolbar_spacer()).get().get_parent()).get().get_parent()).get().content()).get().hbox()).get().button({text: new abap.types.String().set(`Default`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp6})), ariadescribedby: new abap.types.String().set(`defaultButtonDescription genericButtonDescription`)})).get().get()).get().layout_data()).get().flex_item_data({growfactor: new abap.types.String().set(`1`)})).get().get_parent()).get().get_parent()).get().button({type: new abap.types.String().set(`Accept`), text: new abap.types.String().set(`Accept`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp7})), ariadescribedby: new abap.types.String().set(`acceptButtonDescription genericButtonDescription`)})).get().get()).get().layout_data()).get().flex_item_data({growfactor: new abap.types.String().set(`1`)})).get().get_parent()).get().get_parent()).get().button({type: new abap.types.String().set(`Reject`), text: new abap.types.String().set(`Reject`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp8})), ariadescribedby: new abap.types.String().set(`rejectButtonDescription genericButtonDescription`)})).get().get()).get().layout_data()).get().flex_item_data({growfactor: new abap.types.String().set(`1`)})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.String().set(`Coming Soon`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp9})), ariadescribedby: new abap.types.String().set(`comingSoonButtonDescription genericButtonDescription`), enabled: abap.builtin.abap_false})).get().get()).get().layout_data()).get().flex_item_data({growfactor: new abap.types.String().set(`1`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().label({id: new abap.types.String().set(`genericButtonDescription`), text: new abap.types.String().set(`Note: The buttons in this sample display MessageToast when pressed.`)})).get().invisible_text({ns: new abap.types.String().set(`core`), id: new abap.types.String().set(`defaultButtonDescription`), text: new abap.types.String().set(`Description of default button goes here.`)})).get().get_parent()).get().invisible_text({ns: new abap.types.String().set(`core`), id: new abap.types.String().set(`acceptButtonDescription`), text: new abap.types.String().set(`Description of accept button goes here.`)})).get().get_parent()).get().invisible_text({ns: new abap.types.String().set(`core`), id: new abap.types.String().set(`rejectButtonDescription`), text: new abap.types.String().set(`Description of reject button goes here.`)})).get().get_parent()).get().invisible_text({ns: new abap.types.String().set(`core`), id: new abap.types.String().set(`comingSoonButtonDescription`), text: new abap.types.String().set(`This feature is not active just now.`)})).get().get_parent()).get().invisible_text({ns: new abap.types.String().set(`core`), id: new abap.types.String().set(`editButtonLabel`), text: new abap.types.String().set(`Edit Button Label`)})).get().get_parent()).get().invisible_text({ns: new abap.types.String().set(`core`), id: new abap.types.String().set(`actionButtonLabel`), text: new abap.types.String().set(`Action Button Label`)})).get().get_parent()).get().get_parent()).get().footer()).get().toolbar()).get().toolbar_spacer()).get().button({type: new abap.types.String().set(`Emphasized`), text: new abap.types.String().set(`Emphasized`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp10}))})).get().button({text: new abap.types.String().set(`Default`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp11}))})).get().button({icon: new abap.types.String().set(`sap-icon://action`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp12}))})).get().get_parent()).get().get_parent()));
    await client.get().z2ui5_if_client$view_display({val: (await page_02.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique579 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique579, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique579, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    } else if (abap.compare.eq(unique579, new abap.types.Character(7).set('onPress'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: abap.operators.concat((await client.get().z2ui5_if_client$get_event_arg({v: abap.IntegerFactory.get(1)})),new abap.types.String().set(` Pressed`))});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: abap.operators.concat(new abap.types.String().set(`Many controls provide the associations ariaLabelledBy and ariaDescribedBy for accessibility purposes. `),new abap.types.String().set(`The InvisibleText control can be used by application to provide hidden texts on the UI which can be referenced via these associations.`))});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_282'] = z2ui5_cl_demo_app_282;
z2ui5_cl_demo_app_282.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_282.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_282.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_282.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_282.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_282.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_282.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_282.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_282};
//# sourceMappingURL=z2ui5_cl_demo_app_282.clas.mjs.map