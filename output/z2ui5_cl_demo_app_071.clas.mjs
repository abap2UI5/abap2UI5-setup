const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_071.clas.abap
class z2ui5_cl_demo_app_071 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_071';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_SET_SIZE_LIMIT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_COMBO_NUMBER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.mv_set_size_limit = new abap.types.Integer({qualifiedName: "I"});
    this.mv_set_size_limit.set(100);
    this.mv_combo_number = new abap.types.Integer({qualifiedName: "I"});
    this.mv_combo_number.set(105);
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
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_071=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_071=>ty_t_combo");
    let lt_combo = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_071=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_071=>ty_t_combo");
    let temp4 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_071=>s_combobox", undefined, {}, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = new abap.types.Structure({"check_view_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_allow_multi_req": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_types=>ty_s_event_control", undefined, {}, {});
    let temp6 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let unique287 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique287, new abap.types.String().set(`UPDATE`))) {
      abap.statements.clear(temp1);
      temp2.set(this.mv_set_size_limit);
      abap.statements.insertInternal({data: temp2, table: temp1});
      abap.statements.insertInternal({data: client.get().z2ui5_if_client$cs_view.get().main, table: temp1});
      await client.get().z2ui5_if_client$follow_up_action({val: (await client.get().z2ui5_if_client$_event_client({val: new abap.types.String().set(`SET_SIZE_LIMIT`), t_arg: temp1}))});
      await client.get().z2ui5_if_client$view_model_update();
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`SizeLimitUpdated`)});
    } else if (abap.compare.eq(unique287, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
      return;
    }
    abap.statements.clear(temp3);
    lt_combo.set(temp3);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique288 = this.mv_combo_number.get();
    for (let unique289 = 0; unique289 < unique288; unique289++) {
      abap.builtin.sy.get().index.set(unique289 + 1);
      abap.statements.clear(temp4);
      temp4.get().key.set(abap.builtin.sy.get().index);
      temp4.get().text.set(abap.builtin.sy.get().index);
      abap.statements.insertInternal({data: temp4, table: lt_combo});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    abap.statements.clear(temp5);
    temp5.get().check_view_destroy.set(abap.builtin.abap_true);
    temp6.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - First Example'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK'), s_ctrl: temp5})), shownavbutton: temp6})).get().simple_form({title: new abap.types.Character(10).set('Form Title'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(4).set('Link')})).get().label({text: new abap.types.Character(12).set('setSizeLimit')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_set_size_limit}))})).get().label({text: new abap.types.Character(17).set('Number of Entries')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_combo_number}))})).get().label({text: new abap.types.Character(4).set('demo')})).get().combobox({items: (await client.get().z2ui5_if_client$_bind_local({val: lt_combo}))})).get().item({key: new abap.types.Character(5).set('{KEY}'), text: new abap.types.Character(6).set('{TEXT}')})).get().get_parent()).get().get_parent()).get().button({text: new abap.types.Character(15).set('Press 2x update'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('UPDATE')}))})).get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_071'] = z2ui5_cl_demo_app_071;
z2ui5_cl_demo_app_071.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_071.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_071.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_071.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_071.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_071.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_071.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_071.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_071.s_combobox = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_071=>s_combobox", undefined, {}, {});
z2ui5_cl_demo_app_071.ty_t_combo = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_071=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_071=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_071=>ty_t_combo");
export {z2ui5_cl_demo_app_071};
//# sourceMappingURL=z2ui5_cl_demo_app_071.clas.mjs.map