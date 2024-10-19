const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_301.clas.abap
class z2ui5_cl_demo_app_301 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_301';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LT_O_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-NAME"}), "attribute_1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_1"}), "attribute_2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_2"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-STATUS"}), "overflow_mode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-OVERFLOW_MODE"})}, "z2ui5_cl_demo_app_301=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_301=>temp1_86c020306c");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.lt_o_data = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-NAME"}), "attribute_1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_1"}), "attribute_2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_2"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-STATUS"}), "overflow_mode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-OVERFLOW_MODE"})}, "z2ui5_cl_demo_app_301=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_301=>temp1_86c020306c");
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
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page_01.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Sample: Expandable Text`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page_01.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page_01.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(101).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.ExpandableText/sample/sap.m.sample.ExpandableText')});
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page_01.get().table({mode: new abap.types.String().set(`MultiSelect`), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_o_data})), autopopinmode: abap.builtin.abap_true})).get().columns()).get().column()).get().text({text: new abap.types.String().set(`Product`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Attribute 1`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Attribute 2`)})).get().get_parent()).get().column()).get().text({text: new abap.types.String().set(`Status`)})).get().get_parent()).get().get_parent()).get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.String().set(`{NAME}`)})).get().expandable_text({class: new abap.types.String().set(`sapUiTinyMarginBottom sapUiTinyMarginTop`), text: new abap.types.String().set(`{ATTRIBUTE_1}`), overflowmode: new abap.types.String().set(`{OVERFLOW_MODE}`)})).get().get_parent()).get().text({text: new abap.types.String().set(`{ATTRIBUTE_2}`)})).get().get_parent()).get().text({text: new abap.types.String().set(`{STATUS}`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent();
    await client.get().z2ui5_if_client$view_display({val: (await page_01.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique598 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique598, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique598, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`The ExpandableText control can be used to display a larger texts inside a table, list or form.`)});
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
      await this.z2ui5_set_data();
    }
    await this.on_event({client: client});
  }
  async z2ui5_set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-NAME"}), "attribute_1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_1"}), "attribute_2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_2"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-STATUS"}), "overflow_mode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-OVERFLOW_MODE"})}, "z2ui5_cl_demo_app_301=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_301=>temp1_86c020306c");
    let temp2 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-NAME"}), "attribute_1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_1"}), "attribute_2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_2"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-STATUS"}), "overflow_mode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-OVERFLOW_MODE"})}, "z2ui5_cl_demo_app_301=>ty_product", undefined, {}, {});
    abap.statements.clear(this.lt_o_data);
    abap.statements.clear(temp1);
    temp2.get().name.set(new abap.types.Character(9).set('Product 1'));
    temp2.get().attribute_1.set(abap.operators.concat(new abap.types.String().set(`The full text is displayed in place. Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `),abap.operators.concat(new abap.types.String().set(`At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore `),new abap.types.String().set(`et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr`))));
    temp2.get().attribute_2.set(new abap.types.Character(26).set('Attribute related to label'));
    temp2.get().status.set(new abap.types.Character(11).set('Some status'));
    temp2.get().overflow_mode.set(new abap.types.Character(7).set('InPlace'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().name.set(new abap.types.Character(9).set('Product 2'));
    temp2.get().attribute_1.set(abap.operators.concat(new abap.types.String().set(`The full text is displayed in a popover. Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `),abap.operators.concat(new abap.types.String().set(`At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore `),new abap.types.String().set(`et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr`))));
    temp2.get().attribute_2.set(new abap.types.Character(26).set('Attribute related to label'));
    temp2.get().status.set(new abap.types.Character(11).set('Some status'));
    temp2.get().overflow_mode.set(new abap.types.Character(7).set('Popover'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().name.set(new abap.types.Character(9).set('Product 3'));
    temp2.get().attribute_1.set(abap.operators.concat(new abap.types.String().set(`The full text is displayed in place. Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `),abap.operators.concat(new abap.types.String().set(`At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore `),new abap.types.String().set(`et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr`))));
    temp2.get().attribute_2.set(new abap.types.Character(26).set('Attribute related to label'));
    temp2.get().status.set(new abap.types.Character(11).set('Some status'));
    temp2.get().overflow_mode.set(new abap.types.Character(7).set('InPlace'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().name.set(new abap.types.Character(9).set('Product 4'));
    temp2.get().attribute_1.set(abap.operators.concat(new abap.types.String().set(`The full text is displayed in a popover. Lorem ipsum dolor sit amet, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `),abap.operators.concat(new abap.types.String().set(`At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore `),new abap.types.String().set(`et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr`))));
    temp2.get().attribute_2.set(new abap.types.Character(26).set('Attribute related to label'));
    temp2.get().status.set(new abap.types.Character(11).set('Some status'));
    temp2.get().overflow_mode.set(new abap.types.Character(7).set('Popover'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.lt_o_data.set(temp1);
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_301'] = z2ui5_cl_demo_app_301;
z2ui5_cl_demo_app_301.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_301.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_301.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_301.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_301.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_301.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_301.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_301.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_301.ty_product = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-NAME"}), "attribute_1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_1"}), "attribute_2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_2"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-STATUS"}), "overflow_mode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-OVERFLOW_MODE"})}, "z2ui5_cl_demo_app_301=>ty_product", undefined, {}, {});
z2ui5_cl_demo_app_301.temp1_86c020306c = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-NAME"}), "attribute_1": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_1"}), "attribute_2": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-ATTRIBUTE_2"}), "status": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-STATUS"}), "overflow_mode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_301=>TY_PRODUCT-OVERFLOW_MODE"})}, "z2ui5_cl_demo_app_301=>ty_product", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_301=>temp1_86c020306c");
export {z2ui5_cl_demo_app_301};
//# sourceMappingURL=z2ui5_cl_demo_app_301.clas.mjs.map