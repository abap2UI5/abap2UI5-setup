const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_118.clas.abap
class z2ui5_cl_demo_app_118 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_118';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"PROBLEMATIC_ROWS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_118=>t_rows");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "THESE_ARE_FINE_ROWS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_118=>t_rows");}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.problematic_rows = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_118=>t_rows");
    this.these_are_fine_rows = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_118=>t_rows");
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
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_118=>t_rows");
    let temp2 = new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_118=>t_rows");
    let temp4 = new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab_ko = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab_ok = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp1);
      temp2.get().id.set(abap.IntegerFactory.get(1));
      temp2.get().descr.set(new abap.types.Character(54).set('filled with the actual date and time in correct format'));
      temp2.get().adate.set(abap.builtin.sy.get().datum);
      temp2.get().atime.set(abap.builtin.sy.get().uzeit);
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().id.set(abap.IntegerFactory.get(2));
      temp2.get().descr.set(new abap.types.Character(19).set('correct init values'));
      temp2.get().adate.set(new abap.types.Character(8).set('00000000'));
      temp2.get().atime.set(new abap.types.Character(6).set('000000'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().id.set(abap.IntegerFactory.get(3));
      temp2.get().descr.set(new abap.types.Character(31).set('correct init values by ignoring'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().id.set(abap.IntegerFactory.get(4));
      temp2.get().descr.set(new abap.types.Character(49).set('filling with a zero leads to a correct init value'));
      temp2.get().adate.set(abap.IntegerFactory.get(0));
      temp2.get().atime.set(abap.IntegerFactory.get(0));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().id.set(abap.IntegerFactory.get(5));
      temp2.get().descr.set(new abap.types.Character(28).set('this raises an exception now'));
      temp2.get().adate.set(new abap.types.Character(1).set(''));
      temp2.get().atime.set(new abap.types.Character(1).set(''));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().id.set(abap.IntegerFactory.get(6));
      temp2.get().descr.set(new abap.types.Character(9).set('Fifth row'));
      temp2.get().adate.set(abap.builtin.sy.get().datum);
      temp2.get().atime.set(abap.builtin.sy.get().uzeit);
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.problematic_rows.set(temp1);
      abap.statements.clear(temp3);
      temp4.get().id.set(abap.IntegerFactory.get(1));
      temp4.get().descr.set(new abap.types.Character(9).set('First row'));
      temp4.get().adate.set(abap.builtin.sy.get().datum);
      temp4.get().atime.set(abap.builtin.sy.get().uzeit);
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().id.set(abap.IntegerFactory.get(2));
      temp4.get().descr.set(new abap.types.Character(10).set('Second row'));
      temp4.get().adate.set(abap.IntegerFactory.get(0));
      temp4.get().atime.set(abap.IntegerFactory.get(0));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().id.set(abap.IntegerFactory.get(3));
      temp4.get().descr.set(new abap.types.Character(9).set('Third row'));
      temp4.get().adate.set(abap.IntegerFactory.get(0));
      temp4.get().atime.set(abap.IntegerFactory.get(0));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().id.set(abap.IntegerFactory.get(4));
      temp4.get().descr.set(new abap.types.Character(10).set('Fourth row'));
      temp4.get().adate.set(abap.IntegerFactory.get(0));
      temp4.get().atime.set(abap.IntegerFactory.get(0));
      abap.statements.insertInternal({data: temp4, table: temp3});
      temp4.get().id.set(abap.IntegerFactory.get(5));
      temp4.get().descr.set(new abap.types.Character(9).set('Fifth row'));
      temp4.get().adate.set(abap.builtin.sy.get().datum);
      temp4.get().atime.set(abap.builtin.sy.get().uzeit);
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.these_are_fine_rows.set(temp3);
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await (await (await view.get()._z2ui5()).get().title({title: new abap.types.Character(32).set('ABAP2UI5 Weird behavior showcase')})).get().shell()).get().page({title: new abap.types.Character(32).set('ABAP2UI5 Weird behavior showcase'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), showheader: abap.builtin.abap_true})));
    tab_ko.set((await page.get().table({mode: new abap.types.Character(11).set('MultiSelect'), items: (await client.get().z2ui5_if_client$_bind_edit({val: this.problematic_rows}))})));
    await (await (await (await (await tab_ko.get().header_toolbar()).get().toolbar()).get().title({text: new abap.types.String().set(`This table has the weird behavior`)})).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Go`), icon: new abap.types.Character(15).set('sap-icon://blur'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('ON_BTN_GO')}))});
    await (await (await (await (await (await (await (await (await (await (await (await tab_ko.get().columns()).get().column()).get().text({text: new abap.types.Character(2).set('ID')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Date ')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Time')});
    await (await (await (await (await (await (await (await tab_ko.get().items()).get().column_list_item()).get().cells()).get().object_identifier({title: new abap.types.Character(4).set('{ID}')})).get().get_parent()).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().text({text: new abap.types.Character(7).set('{ADATE}')})).get().text({text: new abap.types.Character(7).set('{ATIME}')});
    tab_ok.set((await page.get().table({mode: new abap.types.Character(11).set('MultiSelect'), items: (await client.get().z2ui5_if_client$_bind_edit({val: this.these_are_fine_rows}))})));
    await (await (await tab_ok.get().header_toolbar()).get().toolbar()).get().title({text: new abap.types.String().set(`This table is fine`)});
    await (await (await (await (await (await (await (await (await (await (await (await tab_ok.get().columns()).get().column()).get().text({text: new abap.types.Character(2).set('ID')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Date ')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Time')});
    await (await (await (await (await (await (await (await tab_ok.get().items()).get().column_list_item()).get().cells()).get().object_identifier({title: new abap.types.Character(4).set('{ID}')})).get().get_parent()).get().text({text: new abap.types.Character(7).set('{DESCR}')})).get().text({text: new abap.types.Character(7).set('{ADATE}')})).get().text({text: new abap.types.Character(7).set('{ATIME}')});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_118'] = z2ui5_cl_demo_app_118;
z2ui5_cl_demo_app_118.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_118.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_118.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_118.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_118.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_118.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_118.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_118.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_118.s_row = new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {});
z2ui5_cl_demo_app_118.t_rows = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ID"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-DESCR"}), "adate": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ADATE"}), "atime": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_118=>S_ROW-ATIME"})}, "z2ui5_cl_demo_app_118=>s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_118=>t_rows");
export {z2ui5_cl_demo_app_118};
//# sourceMappingURL=z2ui5_cl_demo_app_118.clas.mjs.map