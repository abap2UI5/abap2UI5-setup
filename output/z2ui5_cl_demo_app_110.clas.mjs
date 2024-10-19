const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_110.clas.abap
class z2ui5_cl_demo_app_110 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_110';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"PRODUCT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "QUANTITY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_DISPLAY_VIEW": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.product = new abap.types.String({qualifiedName: "STRING"});
    this.quantity = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
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
  async z2ui5_display_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(28).set('abap2UI5 - Sample: MaskInput'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().simple_form({title: new abap.types.Character(18).set('Generic Mask Input'), layout: new abap.types.Character(12).set('ColumnLayout'), editable: abap.builtin.abap_true})).get().label({text: new abap.types.Character(9).set('Unique ID')})).get().mask_input({mask: new abap.types.String().set(`~~~~~~~~~~`), placeholdersymbol: new abap.types.String().set(`_`), placeholder: new abap.types.Character(22).set('All characters allowed')})).get().get()).get().rules()).get().mask_input_rule({maskformatsymbol: new abap.types.Character(1).set('~'), regex: new abap.types.String().set(`[^_]`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().label({text: new abap.types.String().set(`Promo code`)})).get().mask_input({mask: new abap.types.String().set(`**********`), placeholdersymbol: new abap.types.String().set(`_`), placeholder: new abap.types.String().set(`Latin characters (case insensitive) and numbers`)})).get().get()).get().rules()).get().mask_input_rule()).get().get_parent()).get().get_parent()).get().get_parent()).get().label({text: new abap.types.String().set(`Phone number`)})).get().mask_input({mask: new abap.types.String().set(`(999) 999 999999`), placeholdersymbol: new abap.types.String().set(`_`), placeholder: new abap.types.String().set(`Enter twelve-digit number`), showclearicon: abap.builtin.abap_true})).get().get()).get().rules()).get().mask_input_rule()).get().get_parent()).get().get_parent()).get().get_parent()).get().get_parent()).get().simple_form({title: new abap.types.Character(47).set('Possible usages (may require additional coding)'), layout: new abap.types.Character(12).set('ColumnLayout'), editable: abap.builtin.abap_true})).get().label({text: new abap.types.String().set(`Serial number`)})).get().mask_input({mask: new abap.types.String().set(`CCCC-CCCC-CCCC-CCCC-CCCC`), placeholdersymbol: new abap.types.String().set(`_`), placeholder: new abap.types.String().set(`Enter digits and capital letters`), showclearicon: abap.builtin.abap_true})).get().get()).get().rules()).get().mask_input_rule({maskformatsymbol: new abap.types.String().set(`C`), regex: new abap.types.String().set(`[A-Z0-9]`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().label({text: new abap.types.String().set(`Product activation key`)})).get().mask_input({mask: new abap.types.String().set(`SAP-CCCCC-CCCCC`), placeholdersymbol: new abap.types.String().set(`_`), placeholder: new abap.types.String().set(`Starts with 'SAP' followed by digits and capital letters`), showclearicon: abap.builtin.abap_true})).get().get()).get().rules()).get().mask_input_rule({maskformatsymbol: new abap.types.String().set(`C`), regex: new abap.types.String().set(`[A-Z0-9]`)})).get().get_parent()).get().get_parent()).get().get_parent()).get().label({text: new abap.types.String().set(`ISBN`)})).get().mask_input({mask: new abap.types.String().set(`999-99-999-9999-9`), placeholdersymbol: new abap.types.String().set(`_`), placeholder: new abap.types.String().set(`Enter thirteen-digit number`), showclearicon: abap.builtin.abap_true})).get().get();
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      await this.z2ui5_display_view();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique343 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique343, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_110'] = z2ui5_cl_demo_app_110;
z2ui5_cl_demo_app_110.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_110.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_110.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_110.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_110.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_110.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_110.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_110.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_110};
//# sourceMappingURL=z2ui5_cl_demo_app_110.clas.mjs.map