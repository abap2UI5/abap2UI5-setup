const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_065.clas.abap
class z2ui5_cl_demo_app_065 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_065';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_INPUT_MAIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_INPUT_NEST": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.mv_input_main = new abap.types.String({qualifiedName: "STRING"});
    this.mv_input_nest = new abap.types.String({qualifiedName: "STRING"});
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
    let lo_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await (await (await (await lo_view.get().shell()).get().page({title: new abap.types.String().set(`Main View`), id: new abap.types.String().set(`test`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link()).get().get_parent()));
    await (await (await (await (await page.get().content()).get().button({text: new abap.types.Character(12).set('Rerender all'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(3).set('ALL')}))})).get().button({text: new abap.types.Character(26).set('Rerender Main without nest'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('MAIN')}))})).get().button({text: new abap.types.Character(25).set('Rerender only nested view'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('NEST')}))})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_input_main}))});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5/`), table: temp1});
    lo_view_nested.set((await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().page({title: new abap.types.String().set(`Nested View`)})).get().button({text: new abap.types.Character(5).set('event'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('TEST')}))})).get().button({text: new abap.types.String().set(`frontend event`), press: (await client.get().z2ui5_if_client$_event_client({val: client.get().z2ui5_if_client$cs_event.get().open_new_tab, t_arg: temp1}))})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_input_nest}))})));
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$view_display({val: (await lo_view.get().stringify())});
    }
    let unique278 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique278, new abap.types.String().set(`TEST`))) {
      await client.get().z2ui5_if_client$message_box_display({text: abap.operators.concat(new abap.types.String().set(`input `),this.mv_input_nest)});
    } else if (abap.compare.eq(unique278, new abap.types.Character(3).set('ALL'))) {
      await client.get().z2ui5_if_client$view_display({val: (await lo_view.get().stringify())});
      await client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`test`), method_insert: new abap.types.Character(10).set('addContent')});
    } else if (abap.compare.eq(unique278, new abap.types.Character(4).set('MAIN'))) {
      await client.get().z2ui5_if_client$view_display({val: (await lo_view.get().stringify())});
    } else if (abap.compare.eq(unique278, new abap.types.Character(4).set('NEST'))) {
      await client.get().z2ui5_if_client$nest_view_display({val: (await lo_view_nested.get().stringify()), id: new abap.types.String().set(`test`), method_insert: new abap.types.Character(10).set('addContent')});
    } else if (abap.compare.eq(unique278, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_065'] = z2ui5_cl_demo_app_065;
z2ui5_cl_demo_app_065.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_065.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_065.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_065.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_065.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_065.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_065.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_065.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_065};
//# sourceMappingURL=z2ui5_cl_demo_app_065.clas.mjs.map