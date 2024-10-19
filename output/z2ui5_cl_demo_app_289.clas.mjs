const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_289.clas.abap
class z2ui5_cl_demo_app_289 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_289';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LT_A_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-PRODUCT"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-TYPE"}), "additionalinfo": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-ADDITIONALINFO"})}, "z2ui5_cl_demo_app_289=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_289=>temp1_97fab6e42f");}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.lt_a_data = abap.types.TableFactory.construct(new abap.types.Structure({"product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-PRODUCT"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-TYPE"}), "additionalinfo": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-ADDITIONALINFO"})}, "z2ui5_cl_demo_app_289=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_289=>temp1_97fab6e42f");
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
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(43).set('abap2UI5 - Sample: Object Marker in a table'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    await (await page.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(97).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.ObjectMarker/sample/sap.m.sample.ObjectMarker')});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${TYPE}`), table: temp1});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().table({id: new abap.types.String().set(`idProductsTable`), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_a_data}))})).get().columns()).get().column()).get().text({text: new abap.types.String().set(`Products`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Status`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Status (active)`)})).get().get_parent()).get().get_parent()).get().column_list_item()).get().object_identifier({text: new abap.types.Character(9).set('{PRODUCT}')})).get().get_parent()).get().object_marker({type: new abap.types.Character(6).set('{TYPE}'), additionalinfo: new abap.types.Character(16).set('{ADDITIONALINFO}')})).get().get_parent()).get().object_marker({type: new abap.types.Character(6).set('{TYPE}'), additionalinfo: new abap.types.Character(16).set('{ADDITIONALINFO}'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`onPress`), t_arg: temp1}))});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique586 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique586, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique586, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    } else if (abap.compare.eq(unique586, new abap.types.Character(7).set('onPress'))) {
      await client.get().z2ui5_if_client$message_toast_display({text: abap.operators.concat((await client.get().z2ui5_if_client$get_event_arg({v: abap.IntegerFactory.get(1)})),new abap.types.String().set(` marker pressed!`))});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`The ObjectMarker is a small building block representing an object by an icon or text and icon. Often it is used in a table.`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-PRODUCT"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-TYPE"}), "additionalinfo": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-ADDITIONALINFO"})}, "z2ui5_cl_demo_app_289=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_289=>temp1_97fab6e42f");
    let temp4 = new abap.types.Structure({"product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-PRODUCT"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-TYPE"}), "additionalinfo": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-ADDITIONALINFO"})}, "z2ui5_cl_demo_app_289=>ty_product", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
      abap.statements.clear(temp3);
      temp4.get().product.set(new abap.types.Character(20).set('Power Projector 4713'));
      temp4.get().type.set(new abap.types.Character(6).set('Locked'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(20).set('Power Projector 4713'));
      temp4.get().type.set(new abap.types.Character(8).set('LockedBy'));
      temp4.get().additionalinfo.set(new abap.types.Character(8).set('John Doe'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(20).set('Power Projector 4713'));
      temp4.get().type.set(new abap.types.Character(8).set('LockedBy'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(12).set('Gladiator MX'));
      temp4.get().type.set(new abap.types.Character(5).set('Draft'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(12).set('Hurricane GX'));
      temp4.get().type.set(new abap.types.Character(7).set('Unsaved'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(12).set('Hurricane GX'));
      temp4.get().type.set(new abap.types.Character(9).set('UnsavedBy'));
      temp4.get().additionalinfo.set(new abap.types.Character(8).set('John Doe'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(12).set('Hurricane GX'));
      temp4.get().type.set(new abap.types.Character(9).set('UnsavedBy'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(12).set('Hurricane GX'));
      temp4.get().type.set(new abap.types.Character(7).set('Unsaved'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(6).set('Webcam'));
      temp4.get().type.set(new abap.types.Character(8).set('Favorite'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().product.set(new abap.types.Character(23).set('Deskjet Super Highspeed'));
      temp4.get().type.set(new abap.types.Character(7).set('Flagged'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.lt_a_data.set(temp3);
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_289'] = z2ui5_cl_demo_app_289;
z2ui5_cl_demo_app_289.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_289.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_289.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_289.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_289.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_289.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_289.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_289.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_289.ty_product = new abap.types.Structure({"product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-PRODUCT"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-TYPE"}), "additionalinfo": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-ADDITIONALINFO"})}, "z2ui5_cl_demo_app_289=>ty_product", undefined, {}, {});
z2ui5_cl_demo_app_289.temp1_97fab6e42f = abap.types.TableFactory.construct(new abap.types.Structure({"product": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-PRODUCT"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-TYPE"}), "additionalinfo": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_289=>TY_PRODUCT-ADDITIONALINFO"})}, "z2ui5_cl_demo_app_289=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_289=>temp1_97fab6e42f");
export {z2ui5_cl_demo_app_289};
//# sourceMappingURL=z2ui5_cl_demo_app_289.clas.mjs.map