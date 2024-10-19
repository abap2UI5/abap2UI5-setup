const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_124.clas.abap
class z2ui5_cl_demo_app_124 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_124';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_SCAN_INPUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SCAN_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.mv_scan_input = new abap.types.String({qualifiedName: "STRING"});
    this.mv_scan_type = new abap.types.String({qualifiedName: "STRING"});
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
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp5 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp6 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp7 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let unique363 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique363, new abap.types.Character(15).set('ON_SCAN_SUCCESS'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`Scan finished!`)});
      lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      this.mv_scan_input.set(temp1);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(2),
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      this.mv_scan_type.set(temp3);
      await client.get().z2ui5_if_client$view_model_update();
      return;
    } else if (abap.compare.eq(unique363, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
      return;
    }
    abap.statements.clear(temp5);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/text}`), table: temp5});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/format}`), table: temp5});
    temp6.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.abap_false, ((await client.get().z2ui5_if_client$get())).get().check_launchpad_active)));
    temp7.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({showheader: temp6, title: new abap.types.Character(8).set('abap2UI5'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp7})).get().simple_form({title: new abap.types.Character(11).set('Information'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(13).set('mv_scan_input')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_scan_input}))})).get().label({text: new abap.types.String().set(`mv_scan_type`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_scan_type}))})).get().label({text: new abap.types.String().set(`scanner`)})).get().barcode_scanner_button({scansuccess: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('ON_SCAN_SUCCESS'), t_arg: temp5})), dialogtitle: new abap.types.String().set(`Barcode Scanner`)})).get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_124'] = z2ui5_cl_demo_app_124;
z2ui5_cl_demo_app_124.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_124.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_124.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_124.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_124.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_124.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_124.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_124.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_124};
//# sourceMappingURL=z2ui5_cl_demo_app_124.clas.mjs.map