const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_094.clas.abap
class z2ui5_cl_demo_app_094 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_094';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_SCREEN": {"type": () => {return new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_INPUT": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MR_SCREEN": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_094", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_094"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_VAL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INIT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "PAGE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_INIT": {"visibility": "U", "parameters": {}},
  "VIEW_BUILD": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_screen = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01", undefined, {}, {});
    this.mr_input = new abap.types.DataReference(new abap.types.Character(4));
    this.mr_screen = new abap.types.DataReference(new abap.types.Character(4));
    this.mo_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_094", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_094"});
    this.mv_val = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_init = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
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
  async on_init() {
    let fs_input_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_screen_ = new abap.types.FieldSymbol(new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01", undefined, {}, {}));
    this.ms_screen.get().input.set(new abap.types.String().set(`structure level 01 - working`));
    abap.statements.createData(this.mr_input,{"typeName": "STRING"});
    abap.statements.assign({target: fs_input_, source: this.mr_input.dereference()});
    fs_input_.set(new abap.types.String().set(`ref data - working`));
    abap.statements.createData(this.mr_screen,{"type": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01", undefined, {}, {})});
    abap.statements.assign({target: fs_screen_, source: this.mr_screen.dereference()});
    fs_screen_.get().input.set(new abap.types.String().set(`ref data struc - working`));
    this.ms_screen.get().ty_s_02.get().input.set(new abap.types.String().set(`struc deep dissolve - working`));
    this.ms_screen.get().ty_s_02.get().ty_s_03.get().ty_s_04.get().input.set(new abap.types.String().set(`struc deep switch guid name - working`));
    this.mo_app.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_094']()).constructor_());
    this.mo_app.get().mv_val.set(new abap.types.String().set(`instance attribute val - working`));
    this.mo_app.get().ms_screen.get().input.set(new abap.types.String().set(`instance attribute struc - working`));
  }
  async view_build() {
    let fs_input_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_screen_ = new abap.types.FieldSymbol(new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01", undefined, {}, {}));
    let o_grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    abap.statements.assign({target: fs_input_, source: this.mr_input.dereference()});
    abap.statements.assign({target: fs_screen_, source: this.mr_screen.dereference()});
    this.page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.String().set(`test`)})));
    o_grid.set((await (await this.page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    content.set((await (await o_grid.get().simple_form({title: new abap.types.Character(5).set('Input')})).get().content({ns: new abap.types.Character(4).set('form')})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await content.get().label({text: new abap.types.Character(18).set('structure level 01')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_screen.get().input}))})).get().label({text: new abap.types.Character(8).set('ref data')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: fs_input_}))})).get().label({text: new abap.types.Character(20).set('ref data struc field')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: fs_screen_.get().input}))})).get().label({text: new abap.types.Character(19).set('struc deep dissolve')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_screen.get().ty_s_02.get().input}))})).get().label({text: new abap.types.Character(27).set('struc deep switch guid name')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_screen.get().ty_s_02.get().ty_s_03.get().ty_s_04.get().input}))})).get().label({text: new abap.types.Character(22).set('instance attribute val')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mo_app.get().mv_val}))})).get().label({text: new abap.types.Character(24).set('instance attribute struc')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mo_app.get().ms_screen.get().input}))});
    await (await (await (await (await (await this.page.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(6).set('Delete'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_DELETE')})), type: new abap.types.Character(6).set('Reject'), icon: new abap.types.Character(17).set('sap-icon://delete')})).get().button({text: new abap.types.Character(3).set('Add'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BUTTON_ADD')})), type: new abap.types.Character(7).set('Default'), icon: new abap.types.Character(14).set('sap-icon://add')})).get().button({text: new abap.types.Character(4).set('Save'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SAVE')})), type: new abap.types.Character(7).set('Success')});
    await this.client.get().z2ui5_if_client$view_display({val: (await (await this.page.get().get_root()).get().xml_get())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_init, abap.builtin.abap_false)) {
      this.mv_init.set(abap.builtin.abap_true);
      await this.on_init();
    }
    await this.view_build();
    await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`server roundtrip`)});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_094'] = z2ui5_cl_demo_app_094;
z2ui5_cl_demo_app_094.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_094.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_094.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_094.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_094.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_094.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_094.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_094.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_094.ty_s_01 = new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-INPUT"}), "ty_s_02": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-INPUT"}), "ty_s_03": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-INPUT"}), "ty_s_04": new abap.types.Structure({"input": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_094=>TY_S_01-TY_S_02-TY_S_03-TY_S_04-INPUT"})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03-ty_s_04", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02-ty_s_03", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01-ty_s_02", undefined, {}, {})}, "Z2UI5_CL_DEMO_APP_094=>ty_s_01", undefined, {}, {});
export {z2ui5_cl_demo_app_094};
//# sourceMappingURL=z2ui5_cl_demo_app_094.clas.mjs.map