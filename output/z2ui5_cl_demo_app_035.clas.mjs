await import("./z2ui5_cl_demo_app_035.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_035.clas.abap
class z2ui5_cl_demo_app_035 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_035';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_EDITOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_EDITABLE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.mv_type = new abap.types.String({qualifiedName: "STRING"});
    this.mv_path = new abap.types.String({qualifiedName: "STRING"});
    this.mv_editor = new abap.types.String({qualifiedName: "STRING"});
    this.mv_check_editable = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async view_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp6 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let lt_types = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp5 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let row = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp3 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp7 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp6.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(22).set('abap2UI5 - File Editor'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp6})));
    temp.set((await (await (await (await (await page.get().simple_form({title: new abap.types.Character(4).set('File'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.String().set(`form`)})).get().label({text: new abap.types.Character(4).set('path')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_path}))})).get().label({text: new abap.types.Character(6).set('Option')})));
    abap.statements.clear(temp1);
    lt_types.set(temp1);
    abap.statements.clear(temp2);
    temp5.set((await abap.Classes['Z2UI5_CL_UTIL'].source_get_file_types()));
    for await (const unique231 of abap.statements.loop(temp5)) {
      row.set(unique231);
      temp4.get().n.set(abap.builtin.shift_right({val: abap.builtin.shift_left({val: row})}));
      temp4.get().v.set(abap.builtin.shift_right({val: abap.builtin.shift_left({val: row})}));
      abap.statements.insertInternal({data: temp4, table: temp2});
    }
    lt_types.set(temp2);
    temp3.set((await (await temp.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_type})), suggestionitems: (await this.client.get().z2ui5_if_client$_bind_local({val: lt_types}))})).get().get()));
    await (await temp3.get().suggestion_items()).get().list_item({text: new abap.types.Character(3).set('{N}'), additionaltext: new abap.types.Character(3).set('{V}')});
    await (await temp.get().label({text: new abap.types.Character(1).set('')})).get().button({text: new abap.types.Character(8).set('Download'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('DB_LOAD')})), icon: new abap.types.Character(30).set('sap-icon://download-from-cloud')});
    await page.get().code_editor({type: this.mv_type, editable: this.mv_check_editable, value: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_editor}))});
    temp7.set(abap.builtin.boolc(abap.compare.initial(this.mv_editor) === false));
    await (await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().button({text: new abap.types.Character(5).set('Clear'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLEAR')})), icon: new abap.types.Character(17).set('sap-icon://delete')})).get().toolbar_spacer()).get().button({text: new abap.types.Character(4).set('Edit'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('EDIT')})), icon: new abap.types.Character(15).set('sap-icon://edit')})).get().button({text: new abap.types.Character(6).set('Upload'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('DB_SAVE')})), type: new abap.types.Character(10).set('Emphasized'), icon: new abap.types.Character(26).set('sap-icon://upload-to-cloud'), enabled: temp7});
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp8 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.mv_path.set(new abap.types.Character(15).set('../../demo/text'));
      this.mv_type.set(new abap.types.Character(10).set('plain_text'));
      await this.view_display();
    }
    let unique232 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique232, new abap.types.Character(7).set('DB_LOAD'))) {
      if (abap.compare.cs(this.mv_path, new abap.types.Character(4).set('abap'))) {
        temp5.set((await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_035-LCL_FILE_API'].read_abap()));
      } else if (abap.compare.cs(this.mv_path, new abap.types.Character(4).set('json'))) {
        temp5.set((await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_035-LCL_FILE_API'].read_json()));
      } else if (abap.compare.cs(this.mv_path, new abap.types.Character(4).set('yaml'))) {
        temp5.set((await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_035-LCL_FILE_API'].read_yaml()));
      } else if (abap.compare.cs(this.mv_path, new abap.types.Character(4).set('text'))) {
        temp5.set((await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_035-LCL_FILE_API'].read_text()));
      } else if (abap.compare.cs(this.mv_path, new abap.types.Character(2).set('js'))) {
        temp5.set((await abap.Classes['CLAS-Z2UI5_CL_DEMO_APP_035-LCL_FILE_API'].read_js()));
      } else {
        abap.statements.clear(temp5);
      }
      this.mv_editor.set(temp5);
      await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(20).set('Download successfull')});
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique232, new abap.types.Character(7).set('DB_SAVE'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(31).set('Upload successfull. File saved!'), type: new abap.types.Character(7).set('success')});
    } else if (abap.compare.eq(unique232, new abap.types.Character(4).set('EDIT'))) {
      temp8.set(abap.builtin.boolc(abap.compare.eq(this.mv_check_editable, abap.builtin.abap_false)));
      this.mv_check_editable.set(temp8);
    } else if (abap.compare.eq(unique232, new abap.types.Character(5).set('CLEAR'))) {
      this.mv_editor.set(new abap.types.String().set(``));
    } else if (abap.compare.eq(unique232, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_035'] = z2ui5_cl_demo_app_035;
z2ui5_cl_demo_app_035.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_035.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_035.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_035.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_035.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_035.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_035.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_035.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_035};
//# sourceMappingURL=z2ui5_cl_demo_app_035.clas.mjs.map