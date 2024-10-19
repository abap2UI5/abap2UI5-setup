const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_046.clas.abap
class z2ui5_cl_demo_app_046 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_046';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_046=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_DISPLAY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_046=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_display = new abap.types.String({qualifiedName: "STRING"});
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
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_046=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_046=>ty_row", undefined, {}, {});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.mv_display.set(new abap.types.Character(4).set('LIST'));
      abap.statements.clear(temp1);
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(11).set('incompleted'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(7).set('working'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(7).set('working'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(5).set('Peter'));
      temp2.get().info.set(new abap.types.Character(9).set('completed'));
      temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.t_tab.set(temp1);
    } else {
      let unique243 = ((await client.get().z2ui5_if_client$get())).get().event;
      if (abap.compare.eq(unique243, new abap.types.Character(4).set('BACK'))) {
        await client.get().z2ui5_if_client$nav_app_leave();
      } else {
        this.mv_display.set(((await client.get().z2ui5_if_client$get())).get().event);
      }
    }
    page.set((await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(73).set('abap2UI5 - Table output in two different Ways - Changing UI without Model'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().button({text: new abap.types.Character(12).set('Display List'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('LIST')}))})).get().button({text: new abap.types.Character(13).set('Display Table'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('TABLE')}))})).get().link()).get().get_parent()));
    let unique244 = this.mv_display;
    if (abap.compare.eq(unique244, new abap.types.Character(4).set('LIST'))) {
      await (await page.get().list({headertext: new abap.types.Character(12).set('List Control'), items: (await client.get().z2ui5_if_client$_bind({val: this.t_tab}))})).get().standard_list_item({title: new abap.types.Character(7).set('{TITLE}'), description: new abap.types.Character(7).set('{DESCR}'), icon: new abap.types.Character(6).set('{ICON}'), info: new abap.types.Character(6).set('{INFO}')});
    } else if (abap.compare.eq(unique244, new abap.types.Character(5).set('TABLE'))) {
      tab.set((await page.get().table({headertext: new abap.types.Character(13).set('Table Control'), items: (await client.get().z2ui5_if_client$_bind({val: this.t_tab}))})));
      await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Descr')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Icon')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Info')});
      await (await (await (await (await (await (await tab.get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(7).set('{TITLE}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().text({text: new abap.types.Character(6).set('{ICON}')})).get().text({text: new abap.types.Character(6).set('{INFO}')});
    }
    await client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_046'] = z2ui5_cl_demo_app_046;
z2ui5_cl_demo_app_046.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_046.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_046.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_046.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_046.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_046.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_046.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_046.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_046.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_046=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_046=>ty_row", undefined, {}, {});
export {z2ui5_cl_demo_app_046};
//# sourceMappingURL=z2ui5_cl_demo_app_046.clas.mjs.map