const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_286.clas.abap
class z2ui5_cl_demo_app_286 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_286';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"LT_O_MODEL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-TITLE"}), "desc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-DESC"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-ICON"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-HIGHLIGHT"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-INFO"})}, "z2ui5_cl_demo_app_286=>ty_name", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_286=>temp1_e75f7e15cd");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.lt_o_model = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-TITLE"}), "desc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-DESC"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-ICON"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-HIGHLIGHT"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-INFO"})}, "z2ui5_cl_demo_app_286=>ty_name", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_286=>temp1_e75f7e15cd");
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
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(59).set('abap2UI5 - Sample: Standard List Item - Info State Inverted'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page.get().header_content()).get().button({id: new abap.types.String().set(`button_hint_id`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('CLICK_HINT_ICON')}))});
    await (await page.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(122).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.StandardListItem/sample/sap.m.sample.StandardListItemInfoStateInverted')});
    await (await (await page.get().list({id: new abap.types.String().set(`myList`), mode: new abap.types.String().set(`MultiSelect`), headertext: new abap.types.String().set(`Inverted Info State`), items: (await client.get().z2ui5_if_client$_bind({val: this.lt_o_model}))})).get().items()).get().standard_list_item({title: new abap.types.Character(7).set('{TITLE}'), description: new abap.types.Character(6).set('{DESC}'), icon: new abap.types.Character(6).set('{ICON}'), iconinset: abap.builtin.abap_false, highlight: new abap.types.Character(11).set('{HIGHLIGHT}'), info: new abap.types.Character(6).set('{INFO}'), infostate: new abap.types.Character(11).set('{HIGHLIGHT}'), infostateinverted: abap.builtin.abap_true});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique583 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique583, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique583, new abap.types.Character(15).set('CLICK_HINT_ICON'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`button_hint_id`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`This sample demonstrates the inverted rendering behavior of the info text and the info state of the StandardListItem control.`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-TITLE"}), "desc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-DESC"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-ICON"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-HIGHLIGHT"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-INFO"})}, "z2ui5_cl_demo_app_286=>ty_name", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_286=>temp1_e75f7e15cd");
    let temp2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-TITLE"}), "desc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-DESC"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-ICON"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-HIGHLIGHT"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-INFO"})}, "z2ui5_cl_demo_app_286=>ty_name", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
      abap.statements.clear(temp1);
      temp2.get().title.set(new abap.types.Character(10).set('Title text'));
      temp2.get().desc.set(new abap.types.Character(16).set('Description text'));
      temp2.get().icon.set(new abap.types.Character(19).set('sap-icon://favorite'));
      temp2.get().highlight.set(new abap.types.Character(7).set('Success'));
      temp2.get().info.set(new abap.types.Character(9).set('Completed'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(10).set('Title text'));
      temp2.get().desc.set(new abap.types.Character(16).set('Description text'));
      temp2.get().icon.set(new abap.types.Character(19).set('sap-icon://employee'));
      temp2.get().highlight.set(new abap.types.Character(5).set('Error'));
      temp2.get().info.set(new abap.types.Character(10).set('Incomplete'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(10).set('Title text'));
      temp2.get().icon.set(new abap.types.Character(17).set('sap-icon://accept'));
      temp2.get().highlight.set(new abap.types.Character(11).set('Information'));
      temp2.get().info.set(new abap.types.Character(11).set('Information'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(10).set('Title text'));
      temp2.get().icon.set(new abap.types.Character(21).set('sap-icon://activities'));
      temp2.get().highlight.set(new abap.types.Character(4).set('None'));
      temp2.get().info.set(new abap.types.Character(4).set('None'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(10).set('Title text'));
      temp2.get().desc.set(new abap.types.Character(16).set('Description text'));
      temp2.get().icon.set(new abap.types.Character(16).set('sap-icon://badge'));
      temp2.get().highlight.set(new abap.types.Character(7).set('Warning'));
      temp2.get().info.set(new abap.types.Character(7).set('Warning'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.lt_o_model.set(temp1);
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_286'] = z2ui5_cl_demo_app_286;
z2ui5_cl_demo_app_286.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_286.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_286.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_286.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_286.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_286.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_286.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_286.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_286.ty_name = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-TITLE"}), "desc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-DESC"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-ICON"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-HIGHLIGHT"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-INFO"})}, "z2ui5_cl_demo_app_286=>ty_name", undefined, {}, {});
z2ui5_cl_demo_app_286.temp1_e75f7e15cd = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-TITLE"}), "desc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-DESC"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-ICON"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-HIGHLIGHT"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_286=>TY_NAME-INFO"})}, "z2ui5_cl_demo_app_286=>ty_name", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_286=>temp1_e75f7e15cd");
export {z2ui5_cl_demo_app_286};
//# sourceMappingURL=z2ui5_cl_demo_app_286.clas.mjs.map