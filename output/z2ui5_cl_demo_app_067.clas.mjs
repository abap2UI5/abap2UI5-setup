const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_067.clas.abap
class z2ui5_cl_demo_app_067 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_067';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"AMOUNT": {"type": () => {return new abap.types.Packed({length: 14, decimals: 3});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CURRENCY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.amount = new abap.types.Packed({length: 14, decimals: 3});
    this.currency = new abap.types.String({qualifiedName: "STRING"});
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
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.amount.set(new abap.types.Character(13).set('123456789.123'));
      this.currency.set(new abap.types.String().set(`USD`));
    }
    let unique279 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique279, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    }
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(26).set('abap2UI5 - Currency Format'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().simple_form({title: new abap.types.Character(8).set('Currency'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().title({text: new abap.types.Character(5).set('Input')})).get().label({text: new abap.types.Character(13).set('Documentation')})).get().link({text: new abap.types.Character(68).set('https://sapui5.hana.ondemand.com/#/entity/sap.ui.model.type.Currency'), href: new abap.types.Character(68).set('https://sapui5.hana.ondemand.com/#/entity/sap.ui.model.type.Currency')})).get().label({text: new abap.types.Character(9).set('One field')})).get().input({value: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' }`)))))})).get().label({text: new abap.types.Character(9).set('Two field')})).get().input({value: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' , formatOptions: {showMeasure: false}  }`)))))})).get().input({value: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' , formatOptions: {showNumber: false} }`)))))})).get().label({text: new abap.types.Character(7).set('Default')})).get().text({text: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' }`)))))})).get().label({text: new abap.types.Character(22).set('preserveDecimals:false')})).get().text({text: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' , formatOptions: { preserveDecimals : false } }`)))))})).get().label({text: new abap.types.Character(18).set('currencyCode:false')})).get().text({text: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' , formatOptions: { currencyCode : false } }`)))))})).get().label({text: new abap.types.String().set(`style:'short'`)})).get().text({text: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' , formatOptions: { style : 'short' } }`)))))})).get().label({text: new abap.types.String().set(`style:'long'`)})).get().text({text: abap.operators.concat(new abap.types.String().set(`{ parts: [ '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.amount, path: abap.builtin.abap_true})),abap.operators.concat(new abap.types.String().set(`', '`),abap.operators.concat((await client.get().z2ui5_if_client$_bind_edit({val: this.currency, path: abap.builtin.abap_true})),new abap.types.String().set(`'],  type: 'sap.ui.model.type.Currency' , formatOptions: {   style : 'long' } }`)))))})).get().label({text: new abap.types.Character(5).set('event')})).get().button({text: new abap.types.Character(4).set('send'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('BUTTON')}))})).get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_067'] = z2ui5_cl_demo_app_067;
z2ui5_cl_demo_app_067.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_067.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_067.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_067.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_067.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_067.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_067.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_067.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_067};
//# sourceMappingURL=z2ui5_cl_demo_app_067.clas.mjs.map