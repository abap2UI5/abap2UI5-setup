const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_027.clas.abap
class z2ui5_cl_demo_app_027 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_027';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "QUANTITY": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INPUT2": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INPUT31": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INPUT32": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INPUT41": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INPUT51": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "INPUT52": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "APP": {"type": () => {return new abap.types.Structure({"check_initialized": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view_main": new abap.types.String({qualifiedName: "STRING"}), "view_popup": new abap.types.String({qualifiedName: "STRING"}), "s_get": new abap.types.Structure({"event": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-EVENT"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "check_launchpad_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_on_navigated": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "viewname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-VIEWNAME"}), "s_draft": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {}), "s_config": new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-HASH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_config", undefined, {}, {}), "t_comp_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_get", undefined, {}, {})}, undefined, undefined, {}, {});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.product = new abap.types.String({qualifiedName: "STRING"});
    this.quantity = new abap.types.Integer({qualifiedName: "I"});
    this.input2 = new abap.types.String({qualifiedName: "STRING"});
    this.input31 = new abap.types.Integer({qualifiedName: "I"});
    this.input32 = new abap.types.Integer({qualifiedName: "I"});
    this.input41 = new abap.types.String({qualifiedName: "STRING"});
    this.input51 = new abap.types.String({qualifiedName: "STRING"});
    this.input52 = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.app = new abap.types.Structure({"check_initialized": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "view_main": new abap.types.String({qualifiedName: "STRING"}), "view_popup": new abap.types.String({qualifiedName: "STRING"}), "s_get": new abap.types.Structure({"event": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-EVENT"}), "t_event_arg": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "check_launchpad_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_on_navigated": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "viewname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_GET-VIEWNAME"}), "s_draft": new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID"}), "id_prev": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV"}), "id_prev_app": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP"}), "id_prev_app_stack": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_DRAFT-ID_PREV_APP_STACK"})}, "z2ui5_if_types=>ty_s_draft", undefined, {}, {}), "s_config": new abap.types.Structure({"origin": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-ORIGIN"}), "pathname": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-PATHNAME"}), "search": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-SEARCH"}), "hash": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_CONFIG-HASH"}), "t_startup_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_config", undefined, {}, {}), "t_comp_params": abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value")}, "z2ui5_if_types=>ty_s_get", undefined, {}, {})}, undefined, undefined, {}, {});
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
    this.me.get().client.set(client);
    this.app.get().s_get.set((await client.get().z2ui5_if_client$get()));
    this.app.get().view_popup.set(new abap.types.String().set(``));
    if (abap.compare.eq(this.app.get().check_initialized, abap.builtin.abap_false)) {
      this.app.get().check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
    }
    if (abap.compare.initial(this.app.get().s_get.get().event) === false) {
      await this.z2ui5_on_event();
    }
    await this.z2ui5_on_render();
    abap.statements.clear(this.app.get().s_get);
  }
  async z2ui5_on_event() {
    let unique222 = this.app.get().s_get.get().event;
    if (abap.compare.eq(unique222, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave({app: (await this.client.get().z2ui5_if_client$get_app({id: this.app.get().s_get.get().s_draft.get().id_prev_app_stack}))});
    }
  }
  async z2ui5_on_init() {
    this.product.set(new abap.types.Character(6).set('tomato'));
    this.quantity.set(new abap.types.Character(3).set('500'));
    this.app.get().view_main.set(new abap.types.Character(9).set('VIEW_MAIN'));
    this.input41.set(new abap.types.Character(13).set('faasdfdfsaVIp'));
  }
  async z2ui5_on_render() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lv_xml = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    lv_xml.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(25).set('abap2UI5 - Binding Syntax'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().simple_form({title: new abap.types.Character(14).set('Binding Syntax'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(18).set('Expression Binding')})).get().label({text: new abap.types.Character(13).set('Documentation')})).get().link({text: new abap.types.Character(18).set('Expression Binding'), href: new abap.types.Character(77).set('https://sapui5.hana.ondemand.com/sdk/#/topic/daf6852a04b44d118963968a1239d2c0')})).get().label({text: new abap.types.Character(18).set('input in uppercase')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind({val: this.input2}))})).get().input({value: abap.operators.concat(new abap.types.Character(4).set('{= $'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input2})),new abap.types.Character(16).set('.toUpperCase() }'))), enabled: abap.builtin.abap_false})).get().label({text: new abap.types.Character(33).set('max value of the first two inputs')})).get().input({value: abap.operators.concat(new abap.types.Character(37).set('{ type : "sap.ui.model.type.Integer",'),abap.operators.concat(new abap.types.Character(8).set('  path:"'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input31, path: abap.builtin.abap_true})),new abap.types.Character(3).set('" }'))))})).get().input({value: abap.operators.concat(new abap.types.Character(37).set('{ type : "sap.ui.model.type.Integer",'),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.Character(8).set('  path:"'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input32, path: abap.builtin.abap_true})),new abap.types.Character(3).set('" }')))))})).get().input({value: abap.operators.concat(new abap.types.Character(13).set('{= Math.max($'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input31})),abap.operators.concat(new abap.types.Character(3).set(', $'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input32})),new abap.types.Character(3).set(') }'))))), enabled: abap.builtin.abap_false})).get().label({text: new abap.types.Character(41).set('only enabled when the quantity equals 500')})).get().input({value: abap.operators.concat(new abap.types.Character(37).set('{ type : "sap.ui.model.type.Integer",'),abap.operators.concat(new abap.types.Character(8).set('  path:"'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.quantity, path: abap.builtin.abap_true})),new abap.types.String().set(`"  }`))))})).get().input({value: this.product, enabled: abap.operators.concat(new abap.types.Character(10).set('{= 500===$'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.quantity})),new abap.types.Character(2).set(' }')))})).get().label({text: new abap.types.Character(67).set('RegExp Set to enabled if the input contains VIP, ignoring the case.')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind({val: this.input41}))})).get().button({text: new abap.types.Character(3).set('VIP'), enabled: abap.operators.concat(new abap.types.Character(28).set('{= RegExp(\'vip\', \'i\').test($'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input41})),new abap.types.Character(3).set(') }')))})).get().label({text: new abap.types.Character(23).set('concatenate both inputs')})).get().input({value: (await this.client.get().z2ui5_if_client$_bind({val: this.input51}))})).get().input({value: (await this.client.get().z2ui5_if_client$_bind({val: this.input52}))})).get().input({value: abap.operators.concat(new abap.types.Character(10).set('{ parts: ['),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.Character(17).set('                "'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input51, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.Character(2).set('",'),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.Character(17).set('                "'),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.input52, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.Character(1).set('"'),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.Character(19).set('               ]  }'))))))))))), enabled: abap.builtin.abap_false})).get().get_root()).get().xml_get()));
    await this.client.get().z2ui5_if_client$view_display({val: lv_xml});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_027'] = z2ui5_cl_demo_app_027;
z2ui5_cl_demo_app_027.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_027.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_027.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_027.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_027.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_027.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_027.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_027.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_027};
//# sourceMappingURL=z2ui5_cl_demo_app_027.clas.mjs.map