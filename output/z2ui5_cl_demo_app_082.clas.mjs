const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_082.clas.abap
class z2ui5_cl_demo_app_082 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_082';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_082=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_082=>temp1_c7de35788f");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_COUNTER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
  "Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_082=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_082=>temp1_c7de35788f");
    this.mv_counter = new abap.types.Integer({qualifiedName: "I"});
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      await this.z2ui5_view_display();
    }
    if (abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().event) === false) {
      await this.z2ui5_on_event();
    }
  }
  async z2ui5_on_event() {
    let temp1 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_082=>ty_row", undefined, {}, {});
    let unique307 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique307, new abap.types.Character(14).set('TIMER_FINISHED'))) {
      this.mv_counter.set(abap.operators.add(this.mv_counter,abap.IntegerFactory.get(1)));
      abap.statements.clear(temp1);
      temp1.get().title.set(abap.operators.concat(new abap.types.Character(5).set('entry'),this.mv_counter));
      temp1.get().info.set(new abap.types.Character(9).set('completed'));
      temp1.get().descr.set(new abap.types.Character(21).set('this is a description'));
      temp1.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      abap.statements.insertInternal({data: temp1, table: this.t_tab});
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique307, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    let temp2 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_082=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_082=>temp1_c7de35788f");
    let temp3 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_082=>ty_row", undefined, {}, {});
    this.mv_counter.set(abap.IntegerFactory.get(1));
    abap.statements.clear(temp2);
    temp3.get().title.set(abap.operators.concat(new abap.types.Character(5).set('entry'),this.mv_counter));
    temp3.get().info.set(new abap.types.Character(9).set('completed'));
    temp3.get().descr.set(new abap.types.Character(21).set('this is a description'));
    temp3.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
    abap.statements.insertInternal({data: temp3, table: temp2});
    this.t_tab.set(temp2);
  }
  async z2ui5_view_display() {
    let lo_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    lo_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await lo_view.get()._z2ui5()).get().timer({finished: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`TIMER_FINISHED`)})), delayms: new abap.types.String().set(`2000`), checkrepeat: abap.builtin.abap_true});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await lo_view.get().shell()).get().page({title: new abap.types.Character(31).set('abap2UI5 - Roundtrip Speed Test'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page.get().list({headertext: new abap.types.Character(25).set('Data auto refresh (2 sec)'), items: (await this.client.get().z2ui5_if_client$_bind({val: this.t_tab}))})).get().standard_list_item({title: new abap.types.Character(7).set('{TITLE}'), description: new abap.types.Character(7).set('{DESCR}'), icon: new abap.types.Character(6).set('{ICON}'), info: new abap.types.Character(6).set('{INFO}')});
    await this.client.get().z2ui5_if_client$view_display({val: (await lo_view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_082'] = z2ui5_cl_demo_app_082;
z2ui5_cl_demo_app_082.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_082.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_082.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_082.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_082.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_082.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_082.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_082.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_082.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_082=>ty_row", undefined, {}, {});
z2ui5_cl_demo_app_082.temp1_c7de35788f = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_082=>TY_ROW-INFO"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_082=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "Z2UI5_CL_DEMO_APP_082=>temp1_c7de35788f");
export {z2ui5_cl_demo_app_082};
//# sourceMappingURL=z2ui5_cl_demo_app_082.clas.mjs.map