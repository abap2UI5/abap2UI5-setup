const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_011.clas.abap
class z2ui5_cl_demo_app_011 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_011';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_EDITABLE_ACTIVE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_VIEW": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.check_editable_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async set_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - Tables and editable'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    let unique202 = this.check_editable_active;
    if (abap.compare.eq(unique202, abap.builtin.abap_true)) {
      temp1.set(new abap.types.String().set(`display`));
    } else {
      temp1.set(new abap.types.String().set(`edit`));
    }
    tab.set((await (await (await (await (await (await (await (await (await (await (await page.get().table({items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab})), mode: new abap.types.Character(11).set('MultiSelect')})).get().header_toolbar()).get().overflow_toolbar()).get().title({text: new abap.types.Character(18).set('title of the table')})).get().button({text: new abap.types.Character(4).set('test'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_TEST')}))})).get().toolbar_spacer()).get().button({icon: new abap.types.Character(17).set('sap-icon://delete'), text: new abap.types.Character(19).set('delete selected row'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_DELETE')}))})).get().button({icon: new abap.types.Character(14).set('sap-icon://add'), text: new abap.types.Character(3).set('add'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BUTTON_ADD')}))})).get().button({icon: new abap.types.Character(15).set('sap-icon://edit'), text: temp1, press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_EDIT')}))})).get().get_parent()).get().get_parent()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Color')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Info')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(8).set('Checkbox')});
    await (await (await (await (await (await (await (await tab.get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().input({value: new abap.types.Character(7).set('{TITLE}'), enabled: new abap.types.String().set(`{EDITABLE}`)})).get().input({value: new abap.types.Character(7).set('{VALUE}'), enabled: new abap.types.String().set(`{EDITABLE}`)})).get().input({value: new abap.types.Character(6).set('{INFO}'), enabled: new abap.types.String().set(`{EDITABLE}`)})).get().input({value: new abap.types.Character(7).set('{DESCR}'), enabled: new abap.types.String().set(`{EDITABLE}`)})).get().checkbox({selected: new abap.types.Character(10).set('{CHECKBOX}'), enabled: new abap.types.String().set(`{EDITABLE}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp2 = abap.types.TableFactory.construct(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp3 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp4 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {});
    let lr_tab = new abap.types.DataReference(new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {}));
    let temp5 = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.check_editable_active.set(abap.builtin.abap_false);
      abap.statements.clear(temp2);
      temp3.get().title.set(new abap.types.Character(8).set('entry 01'));
      temp3.get().value.set(new abap.types.Character(3).set('red'));
      temp3.get().info.set(new abap.types.Character(9).set('completed'));
      temp3.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp3.get().checkbox.set(abap.builtin.abap_true);
      abap.statements.insertInternal({data: temp3, table: temp2});
      temp3.get().title.set(new abap.types.Character(8).set('entry 02'));
      temp3.get().value.set(new abap.types.Character(4).set('blue'));
      temp3.get().info.set(new abap.types.Character(9).set('completed'));
      temp3.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp3.get().checkbox.set(abap.builtin.abap_true);
      abap.statements.insertInternal({data: temp3, table: temp2});
      temp3.get().title.set(new abap.types.Character(8).set('entry 03'));
      temp3.get().value.set(new abap.types.Character(5).set('green'));
      temp3.get().info.set(new abap.types.Character(9).set('completed'));
      temp3.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp3.get().checkbox.set(abap.builtin.abap_true);
      abap.statements.insertInternal({data: temp3, table: temp2});
      temp3.get().title.set(new abap.types.Character(8).set('entry 04'));
      temp3.get().value.set(new abap.types.Character(6).set('orange'));
      temp3.get().info.set(new abap.types.Character(9).set('completed'));
      temp3.get().descr.set(new abap.types.Character(1).set(''));
      temp3.get().checkbox.set(abap.builtin.abap_true);
      abap.statements.insertInternal({data: temp3, table: temp2});
      temp3.get().title.set(new abap.types.Character(8).set('entry 05'));
      temp3.get().value.set(new abap.types.Character(4).set('grey'));
      temp3.get().info.set(new abap.types.Character(9).set('completed'));
      temp3.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp3.get().checkbox.set(abap.builtin.abap_true);
      abap.statements.insertInternal({data: temp3, table: temp2});
      abap.statements.insertInternal({data: temp3, table: temp2});
      this.t_tab.set(temp2);
      await this.set_view();
      return;
    }
    let unique203 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique203, new abap.types.Character(11).set('BUTTON_EDIT'))) {
      temp1.set(abap.builtin.boolc(abap.compare.eq(this.check_editable_active, abap.builtin.abap_false)));
      this.check_editable_active.set(temp1);
      for await (const unique204 of abap.statements.loop(this.t_tab)) {
        lr_tab.assign(unique204);
        lr_tab.get().editable.set(this.check_editable_active);
      }
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique203, new abap.types.Character(13).set('BUTTON_DELETE'))) {
      await abap.statements.deleteInternal(this.t_tab,{where: async (I) => {return abap.compare.eq(I.selkz, abap.builtin.abap_true);}});
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique203, new abap.types.Character(10).set('BUTTON_ADD'))) {
      abap.statements.clear(temp5);
      abap.statements.insertInternal({data: temp5, table: this.t_tab});
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique203, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_011'] = z2ui5_cl_demo_app_011;
z2ui5_cl_demo_app_011.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_011.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_011.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_011.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_011.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_011.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_011.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_011.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_011.ty_row = new abap.types.Structure({"selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_011=>TY_ROW-INFO"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_011=>ty_row", undefined, {}, {});
export {z2ui5_cl_demo_app_011};
//# sourceMappingURL=z2ui5_cl_demo_app_011.clas.mjs.map