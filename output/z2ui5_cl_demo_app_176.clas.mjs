const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_176.clas.abap
class z2ui5_cl_demo_app_176 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_176';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_LAYOUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-VISIBLE"}), "binding": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-BINDING"})}, "z2ui5_cl_demo_app_176=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_layout");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_176=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_data");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"MAIN_VIEW": {"visibility": "U", "parameters": {"I_CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "NEST_VIEW": {"visibility": "U", "parameters": {"I_CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_layout = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-VISIBLE"}), "binding": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-BINDING"})}, "z2ui5_cl_demo_app_176=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_layout");
    this.mt_data = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_176=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_data");
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
  async main_view(INPUT) {
    let i_client = INPUT?.i_client;
    if (i_client?.getQualifiedName === undefined || i_client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { i_client = undefined; }
    if (i_client === undefined) { i_client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.i_client); }
    let lo_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    lo_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await i_client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await lo_view.get().shell()).get().page({title: new abap.types.String().set(`Main View`), id: new abap.types.String().set(`test`), navbuttonpress: (await i_client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await i_client.get().z2ui5_if_client$view_display({val: (await lo_view.get().stringify())});
  }
  async nest_view(INPUT) {
    let i_client = INPUT?.i_client;
    if (i_client?.getQualifiedName === undefined || i_client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { i_client = undefined; }
    if (i_client === undefined) { i_client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.i_client); }
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_176=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_data");
    let temp2 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_176=>ty_s_data", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-VISIBLE"}), "binding": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-BINDING"})}, "z2ui5_cl_demo_app_176=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_layout");
    let temp4 = new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-VISIBLE"}), "binding": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-BINDING"})}, "z2ui5_cl_demo_app_176=>ty_s_layout", undefined, {}, {});
    let lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    await i_client.get().z2ui5_if_client$_bind({val: this.mt_layout});
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
    temp4.get().binding.set(new abap.types.Character(6).set('{NAME}'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().fname.set(new abap.types.Character(4).set('DATE'));
    temp4.get().merge.set(new abap.types.Character(5).set('false'));
    temp4.get().visible.set(new abap.types.Character(4).set('true'));
    temp4.get().binding.set(new abap.types.Character(6).set('{DATE}'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().fname.set(new abap.types.Character(3).set('AGE'));
    temp4.get().merge.set(new abap.types.Character(5).set('false'));
    temp4.get().visible.set(new abap.types.Character(5).set('false'));
    temp4.get().binding.set(new abap.types.Character(5).set('{AGE}'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    this.mt_layout.set(temp3);
    lo_view_nested.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await lo_view_nested.get().shell()).get().page({title: new abap.types.String().set(`Nested View`)})).get().table({items: (await i_client.get().z2ui5_if_client$_bind({val: this.mt_data}))})).get().columns()).get().template_repeat({list: new abap.types.String().set(`{template>/MT_LAYOUT}`), var: new abap.types.String().set(`LO`)})).get().column({mergeduplicates: new abap.types.String().set(`{LO>MERGE}`), visible: new abap.types.String().set(`{LO>VISIBLE}`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().items()).get().column_list_item()).get().cells()).get().template_repeat({list: new abap.types.String().set(`{template>/MT_LAYOUT}`), var: new abap.types.String().set(`LO2`)})).get().object_identifier({text: new abap.types.String().set(`{= '{' + \${LO2>FNAME} + '}' }`)});
    await i_client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`test`), method_insert: new abap.types.Character(10).set('addContent')});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique434 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique434, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
      return;
    }
    await this.main_view({i_client: client});
    await this.nest_view({i_client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_176'] = z2ui5_cl_demo_app_176;
z2ui5_cl_demo_app_176.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_176.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_176.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_176.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_176.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_176.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_176.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_176.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_176.ty_s_data = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_176=>ty_s_data", undefined, {}, {});
z2ui5_cl_demo_app_176.ty_t_data = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-NAME"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-DATE"}), "age": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_DATA-AGE"})}, "z2ui5_cl_demo_app_176=>ty_s_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_data");
z2ui5_cl_demo_app_176.ty_s_layout = new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-VISIBLE"}), "binding": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-BINDING"})}, "z2ui5_cl_demo_app_176=>ty_s_layout", undefined, {}, {});
z2ui5_cl_demo_app_176.ty_t_layout = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-FNAME"}), "merge": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-MERGE"}), "visible": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-VISIBLE"}), "binding": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_176=>TY_S_LAYOUT-BINDING"})}, "z2ui5_cl_demo_app_176=>ty_s_layout", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_176=>ty_t_layout");
export {z2ui5_cl_demo_app_176};
//# sourceMappingURL=z2ui5_cl_demo_app_176.clas.mjs.map