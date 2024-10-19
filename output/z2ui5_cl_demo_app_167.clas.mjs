const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_167.clas.abap
class z2ui5_cl_demo_app_167 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_167';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_VIEW": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
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
  async set_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp4 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp3 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp7 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp9 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp4.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(47).set('abap2UI5 - Event with add Information and t_arg'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp4})));
    await page.get().link({text: new abap.types.Character(12).set('More Infos..'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://sapui5.hana.ondemand.com/sdk/#/topic/b0fb4de7364f4bcbb053a99aa645affe`)});
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: new abap.types.String().set(`FIX_VAL`), table: temp1});
    await page.get().button({text: new abap.types.String().set(`EVENT_FIX_VAL`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`EVENT_FIX_VAL`), t_arg: temp1}))});
    await page.get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_value}))});
    abap.statements.clear(temp3);
    temp2.set(abap.operators.concat(new abap.types.String().set(`$`),(await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_value}))));
    abap.statements.insertInternal({data: temp2, table: temp3});
    await page.get().button({text: new abap.types.String().set(`EVENT_MODEL_VALUE`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`EVENT_MODEL_VALUE`), t_arg: temp3}))});
    abap.statements.clear(temp5);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/text}`), table: temp5});
    await page.get().button({text: new abap.types.String().set(`SOURCE_PROPERTY_TEXT`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`SOURCE_PROPERTY_TEXT`), t_arg: temp5}))});
    abap.statements.clear(temp7);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$parameters>/value}`), table: temp7});
    await page.get().input({description: new abap.types.String().set(`make an input and press enter - `), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`EVENT_PROPERTY_VALUE`), t_arg: temp7}))});
    abap.statements.clear(temp9);
    abap.statements.insertInternal({data: new abap.types.String().set(`$event.oSource.oParent.sId`), table: temp9});
    await page.get().button({text: new abap.types.String().set(`PARENT_PROPERTY_ID`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`PARENT_PROPERTY_ID`), t_arg: temp9}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let lt_arg = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let temp12 = new abap.types.Integer({qualifiedName: "I"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.mv_value.set(new abap.types.String().set(`my value`));
      await this.set_view();
    }
    lt_arg.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
    let unique424 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique424, new abap.types.String().set(`EVENT_FIX_VAL`)) || abap.compare.eq(unique424, new abap.types.String().set(`EVENT_MODEL_VALUE`)) || abap.compare.eq(unique424, new abap.types.Character(20).set('SOURCE_PROPERTY_TEXT')) || abap.compare.eq(unique424, new abap.types.Character(20).set('EVENT_PROPERTY_VALUE')) || abap.compare.eq(unique424, new abap.types.Character(18).set('PARENT_PROPERTY_ID'))) {
      temp12.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_arg,{index: abap.IntegerFactory.get(1),
        into: temp11});
      abap.builtin.sy.get().tabix.set(temp12);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await client.get().z2ui5_if_client$message_box_display({text: abap.operators.concat(new abap.types.String().set(`backend event :`),temp11)});
    } else if (abap.compare.eq(unique424, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    await client.get().z2ui5_if_client$view_model_update();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_167'] = z2ui5_cl_demo_app_167;
z2ui5_cl_demo_app_167.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_167.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_167.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_167.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_167.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_167.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_167.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_167.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_167};
//# sourceMappingURL=z2ui5_cl_demo_app_167.clas.mjs.map