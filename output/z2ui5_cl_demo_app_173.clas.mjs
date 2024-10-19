const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_173.clas.abap
class z2ui5_cl_demo_app_173 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_173';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_FLAG": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_LAYOUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-VISIBLE"})}, "z2ui5_cl_demo_app_173=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_layout");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_173=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_data");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_flag = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_layout = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-VISIBLE"})}, "z2ui5_cl_demo_app_173=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_layout");
    this.mt_data = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_173=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_data");
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
  async view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    view.set((await (await view.get().shell()).get().page({id: new abap.types.String().set(`page_main`), class: new abap.types.String().set(`sapUiContentPadding`), title: new abap.types.Character(30).set('abap2UI5 - Sample Templating I'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await (await (await (await (await (await (await (await (await (await (await (await view.get().table({items: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_data}))})).get().columns()).get().template_repeat({list: new abap.types.String().set(`{template>/MT_LAYOUT}`), var: new abap.types.String().set(`L0`)})).get().column({mergeduplicates: new abap.types.String().set(`{L0>MERGE}`), visible: new abap.types.String().set(`{L0>VISIBLE}`)})).get().text({text: new abap.types.String().set(`{L0>FNAME}`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().items()).get().column_list_item()).get().cells()).get().template_repeat({list: new abap.types.String().set(`{template>/MT_LAYOUT}`), var: new abap.types.String().set(`L1`)})).get().object_identifier({text: new abap.types.String().set(`{= '{' + \${L1>FNAME} + '}' }`)});
    await view.get().label({text: new abap.types.String().set(`IF Template (with re-rendering)`)});
    await view.get().switch({state: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_flag})), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CHANGE_FLAG`)}))});
    view.set((await view.get().vbox()));
    await (await (await (await (await (await view.get().template_if({test: new abap.types.String().set(`{template>/XX/MV_FLAG}`)})).get().template_then()).get().icon({src: new abap.types.String().set(`sap-icon://accept`), color: new abap.types.String().set(`green`)})).get().get_parent()).get().template_else()).get().icon({src: new abap.types.String().set(`sap-icon://decline`), color: new abap.types.String().set(`red`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_173=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_data");
    let temp2 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_173=>ty_s_data", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-VISIBLE"})}, "z2ui5_cl_demo_app_173=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_layout");
    let temp4 = new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-VISIBLE"})}, "z2ui5_cl_demo_app_173=>ty_s_layout", undefined, {}, {});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_initialized, abap.builtin.abap_false)) {
      this.mv_initialized.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$_bind({val: this.mt_layout});
      abap.statements.clear(temp1);
      temp2.get().name.set(new abap.types.Character(4).set('Theo'));
      temp2.get().date.set(new abap.types.Character(10).set('01.01.2000'));
      temp2.get().age.set(new abap.types.Character(1).set('5'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().name.set(new abap.types.Character(4).set('Lore'));
      temp2.get().date.set(new abap.types.Character(10).set('01.01.2000'));
      temp2.get().age.set(new abap.types.Character(1).set('1'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.mt_data.set(temp1);
      abap.statements.clear(temp3);
      temp4.get().fname.set(new abap.types.Character(4).set('NAME'));
      temp4.get().merge.set(new abap.types.Character(5).set('false'));
      temp4.get().visible.set(new abap.types.Character(4).set('true'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().fname.set(new abap.types.Character(4).set('DATE'));
      temp4.get().merge.set(new abap.types.Character(5).set('false'));
      temp4.get().visible.set(new abap.types.Character(4).set('true'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().fname.set(new abap.types.Character(3).set('AGE'));
      temp4.get().merge.set(new abap.types.Character(5).set('false'));
      temp4.get().visible.set(new abap.types.Character(5).set('false'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.mt_layout.set(temp3);
      await this.view_display();
    }
    let unique432 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique432, new abap.types.Character(11).set('CHANGE_FLAG'))) {
      await this.view_display();
    } else if (abap.compare.eq(unique432, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
      return;
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_173'] = z2ui5_cl_demo_app_173;
z2ui5_cl_demo_app_173.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_173.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_173.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_173.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_173.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_173.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_173.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_173.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_173.ty_s_data = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_173=>ty_s_data", undefined, {}, {});
z2ui5_cl_demo_app_173.ty_t_data = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_173=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_data");
z2ui5_cl_demo_app_173.ty_s_layout = new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-VISIBLE"})}, "z2ui5_cl_demo_app_173=>ty_s_layout", undefined, {}, {});
z2ui5_cl_demo_app_173.ty_t_layout = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_173=>TY_S_LAYOUT-VISIBLE"})}, "z2ui5_cl_demo_app_173=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_173=>ty_t_layout");
export {z2ui5_cl_demo_app_173};
//# sourceMappingURL=z2ui5_cl_demo_app_173.clas.mjs.map