const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_140.clas.abap
class z2ui5_cl_demo_app_140 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_140';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "GT_MULTI": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_140=>ty_t_combo");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "GT_SEL_MULTI": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_140=>ty_t_combo");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "GT_SEL_MULTI2": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"UI5_ON_INIT": {"visibility": "U", "parameters": {}},
  "UI5_ON_EVENT": {"visibility": "U", "parameters": {}},
  "UI5_VIEW_MAIN_DISPLAY": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.gt_multi = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_140=>ty_t_combo");
    this.gt_sel_multi = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_140=>ty_t_combo");
    this.gt_sel_multi2 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
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
  async ui5_on_event() {
    let ok_code = new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-EVENT"});
    let x = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      ok_code.set(((await this.client.get().z2ui5_if_client$get())).get().event);
      let unique397 = ok_code;
      if (abap.compare.eq(unique397, new abap.types.Character(9).set('FILTERBAR'))) {
        await this.client.get().z2ui5_if_client$view_model_update();
      }
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        x.set(e);
        await this.client.get().z2ui5_if_client$message_box_display({text: (await x.get().if_message$get_text()), type: new abap.types.String().set(`error`)});
      } else {
        throw e;
      }
    }
  }
  async ui5_on_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_140=>ty_t_combo");
    let temp2 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    abap.statements.clear(temp1);
    temp2.get().key.set(new abap.types.Character(3).set('A01'));
    temp2.get().text.set(new abap.types.Character(2).set('T1'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().key.set(new abap.types.Character(3).set('A02'));
    temp2.get().text.set(new abap.types.Character(2).set('T2'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().key.set(new abap.types.Character(3).set('A03'));
    temp2.get().text.set(new abap.types.Character(2).set('T3'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().key.set(new abap.types.Character(3).set('A04'));
    temp2.get().text.set(new abap.types.Character(2).set('T4'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().key.set(new abap.types.Character(3).set('A05'));
    temp2.get().text.set(new abap.types.Character(2).set('T5'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.gt_multi.set(temp1);
    abap.statements.clear(temp3);
    abap.statements.insertInternal({data: new abap.types.String().set(`A01`), table: temp3});
    this.gt_sel_multi2.set(temp3);
  }
  async ui5_view_main_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(26).set('abap2UI5 - Multi Combo Box'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().simple_form({title: new abap.types.Character(10).set('Form Title'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().multi_combobox({name: new abap.types.Character(13).set('MultiComboBox'), selectedkeys: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.gt_sel_multi2})), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.gt_multi}))})).get().item({key: new abap.types.Character(5).set('{KEY}'), text: new abap.types.Character(6).set('{TEXT}')})).get().get_parent()).get().button({text: new abap.types.Character(4).set('post'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_POST')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.ui5_on_init();
    }
    await this.ui5_view_main_display();
    await this.ui5_on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_140'] = z2ui5_cl_demo_app_140;
z2ui5_cl_demo_app_140.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_140.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_140.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_140.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_140.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_140.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_140.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_140.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_140.s_combobox = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {});
z2ui5_cl_demo_app_140.ty_t_combo = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_140=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_140=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_140=>ty_t_combo");
export {z2ui5_cl_demo_app_140};
//# sourceMappingURL=z2ui5_cl_demo_app_140.clas.mjs.map