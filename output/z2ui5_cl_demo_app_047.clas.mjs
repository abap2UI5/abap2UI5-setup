const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_047.clas.abap
class z2ui5_cl_demo_app_047 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_047';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"INT1": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INT2": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INT_SUM": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEC1": {"type": () => {return new abap.types.Packed({length: 10, decimals: 4});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEC2": {"type": () => {return new abap.types.Packed({length: 10, decimals: 4});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DEC_SUM": {"type": () => {return new abap.types.Packed({length: 10, decimals: 4});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DATE": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "TIME": {"type": () => {return new abap.types.Time({qualifiedName: "T"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"date": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-DATE"}), "time": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-TIME"})}, "z2ui5_cl_demo_app_047=>ty_s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_047=>temp1_244327dede");}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.int1 = new abap.types.Integer({qualifiedName: "I"});
    this.int2 = new abap.types.Integer({qualifiedName: "I"});
    this.int_sum = new abap.types.Integer({qualifiedName: "I"});
    this.dec1 = new abap.types.Packed({length: 10, decimals: 4});
    this.dec2 = new abap.types.Packed({length: 10, decimals: 4});
    this.dec_sum = new abap.types.Packed({length: 10, decimals: 4});
    this.date = new abap.types.Date({qualifiedName: "D"});
    this.time = new abap.types.Time({qualifiedName: "T"});
    this.mt_tab = abap.types.TableFactory.construct(new abap.types.Structure({"date": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-DATE"}), "time": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-TIME"})}, "z2ui5_cl_demo_app_047=>ty_s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_047=>temp1_244327dede");
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
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"date": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-DATE"}), "time": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-TIME"})}, "z2ui5_cl_demo_app_047=>ty_s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_047=>temp1_244327dede");
    let temp2 = new abap.types.Structure({"date": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-DATE"}), "time": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-TIME"})}, "z2ui5_cl_demo_app_047=>ty_s_row", undefined, {}, {});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.date.set(abap.builtin.sy.get().datum);
      this.time.set(abap.builtin.sy.get().uzeit);
      this.dec1.set(abap.operators.divide(abap.IntegerFactory.get(1),abap.IntegerFactory.get(3)));
      this.dec2.set(abap.operators.divide(abap.IntegerFactory.get(2),abap.IntegerFactory.get(3)));
      abap.statements.clear(temp1);
      temp2.get().date.set(abap.builtin.sy.get().datum);
      temp2.get().time.set(abap.builtin.sy.get().uzeit);
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.mt_tab.set(temp1);
      await client.get().z2ui5_if_client$_bind_edit({val: this.mt_tab});
    }
    let unique245 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique245, new abap.types.Character(10).set('BUTTON_INT'))) {
      this.int_sum.set(abap.operators.add(this.int1,this.int2));
    } else if (abap.compare.eq(unique245, new abap.types.Character(10).set('BUTTON_DEC'))) {
      this.dec_sum.set(abap.operators.add(this.dec1,this.dec2));
    } else if (abap.compare.eq(unique245, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
    temp3.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(31).set('abap2UI5 - Integer and Decimals'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp3})));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().simple_form({title: new abap.types.Character(20).set('Integer and Decimals'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(7).set('integer')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.int1}))})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.int2}))})).get().input({enabled: abap.builtin.abap_false, value: (await client.get().z2ui5_if_client$_bind_edit({val: this.int_sum}))})).get().button({text: new abap.types.Character(8).set('calc sum'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BUTTON_INT')}))})).get().label({text: new abap.types.Character(8).set('decimals')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.dec1}))})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.dec2}))})).get().input({enabled: abap.builtin.abap_false, value: (await client.get().z2ui5_if_client$_bind_edit({val: this.dec_sum}))})).get().button({text: new abap.types.Character(8).set('calc sum'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('BUTTON_DEC')}))})).get().label({text: new abap.types.Character(4).set('date')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.date}))})).get().label({text: new abap.types.Character(4).set('time')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.time}))});
    tab.set((await (await page.get().scroll_container({height: new abap.types.Character(3).set('70%'), vertical: abap.builtin.abap_true})).get().table({growing: abap.builtin.abap_true, growingthreshold: new abap.types.Character(2).set('20'), growingscrolltoload: abap.builtin.abap_true, items: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_tab})), sticky: new abap.types.Character(27).set('ColumnHeaders,HeaderToolbar')})));
    await (await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(4).set('Date')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Time')})).get().get_parent();
    await (await (await (await (await tab.get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(6).set('{DATE}')})).get().text({text: new abap.types.Character(6).set('{TIME}')});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_047'] = z2ui5_cl_demo_app_047;
z2ui5_cl_demo_app_047.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_047.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_047.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_047.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_047.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_047.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_047.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_047.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_047.ty_s_row = new abap.types.Structure({"date": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-DATE"}), "time": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-TIME"})}, "z2ui5_cl_demo_app_047=>ty_s_row", undefined, {}, {});
z2ui5_cl_demo_app_047.temp1_244327dede = abap.types.TableFactory.construct(new abap.types.Structure({"date": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-DATE"}), "time": new abap.types.Time({qualifiedName: "Z2UI5_CL_DEMO_APP_047=>TY_S_ROW-TIME"})}, "z2ui5_cl_demo_app_047=>ty_s_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_047=>temp1_244327dede");
export {z2ui5_cl_demo_app_047};
//# sourceMappingURL=z2ui5_cl_demo_app_047.clas.mjs.map