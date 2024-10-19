const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_202.clas.abap
class z2ui5_cl_demo_app_202 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_202';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"AV_NEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "AV_INIT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.av_next = new abap.types.String({qualifiedName: "STRING"});
    this.av_next.set('Step22');
    this.av_init = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let lr_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let lr_wizard = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_wiz_step1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_wiz_step2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_wiz_step22 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_wiz_step23 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lr_wiz_step3 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lr_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await lr_view.get()._generic({name: new abap.types.String().set(`script`), ns: new abap.types.String().set(`html`)})).get()._cc_plain_xml({val: abap.operators.concat(new abap.types.String().set(`sap.z2ui5.decideNextStep = (stepId, nextStepId) => {debugger;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var wiz = sap.z2ui5.oView.byId('wiz');`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` wiz.discardProgress(sap.z2ui5.oView.byId(stepId));`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var step = sap.z2ui5.oView.byId(stepId);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var nextStep = sap.z2ui5.oView.byId(nextStepId);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` step.setNextStep(nextStep);`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`}`)))))))))))))});
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    lr_view.set((await (await lr_view.get().shell()).get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(30).set('abap2UI5 - Demo Wizard Control'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    lr_wizard.set((await lr_view.get().wizard({id: new abap.types.String().set(`wiz`), enablebranching: abap.builtin.abap_true})));
    lr_wiz_step1.set((await lr_wizard.get().wizard_step({title: new abap.types.Character(5).set('STEP1'), validated: abap.builtin.abap_true, nextstep: new abap.types.Character(5).set('STEP2')})));
    await lr_wiz_step1.get().message_strip({text: new abap.types.Character(5).set('STEP1')});
    lr_wiz_step2.set((await lr_wizard.get().wizard_step({id: new abap.types.Character(5).set('STEP2'), title: new abap.types.String().set(`STEP2`), validated: abap.builtin.abap_true, subsequentsteps: new abap.types.Character(14).set('STEP22, STEP23')})));
    await lr_wiz_step2.get().message_strip({text: new abap.types.String().set(`STEP2`)});
    await lr_wiz_step2.get().button({text: new abap.types.String().set(`Press Step 2.2`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('STEP22')}))});
    await lr_wiz_step2.get().button({text: new abap.types.String().set(`Press Step 2.3`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`STEP23`)}))});
    lr_wiz_step22.set((await lr_wizard.get().wizard_step({id: new abap.types.String().set(`STEP22`), title: new abap.types.String().set(`STEP2.2`), validated: abap.builtin.abap_true})));
    await lr_wiz_step22.get().message_strip({text: new abap.types.Character(6).set('STEP22')});
    lr_wiz_step23.set((await lr_wizard.get().wizard_step({id: new abap.types.String().set(`STEP23`), title: new abap.types.String().set(`STEP2.3`), validated: abap.builtin.abap_true})));
    await lr_wiz_step23.get().message_strip({text: new abap.types.Character(6).set('STEP23')});
    lr_wiz_step3.set((await lr_wizard.get().wizard_step({title: new abap.types.String().set(`STEP3`), validated: abap.builtin.abap_true})));
    await lr_wiz_step3.get().message_strip({text: new abap.types.Character(5).set('STEP3')});
    await client.get().z2ui5_if_client$view_display({val: (await lr_view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    if (abap.compare.eq(this.av_init, abap.builtin.abap_false)) {
      await this.display_view({client: client});
      this.av_init.set(new abap.types.Character(1).set('X'));
      return;
    }
    let unique492 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique492, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique492, new abap.types.Character(6).set('STEP22'))) {
      await client.get().z2ui5_if_client$follow_up_action({val: new abap.types.Character(43).set('sap.z2ui5.decideNextStep(`STEP2`,`STEP22`);')});
    } else if (abap.compare.eq(unique492, new abap.types.Character(6).set('STEP23'))) {
      await client.get().z2ui5_if_client$follow_up_action({val: new abap.types.Character(43).set('sap.z2ui5.decideNextStep(`STEP2`,`STEP23`);')});
    }
    await client.get().z2ui5_if_client$view_model_update();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_202'] = z2ui5_cl_demo_app_202;
z2ui5_cl_demo_app_202.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_202.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_202.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_202.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_202.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_202.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_202.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_202.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_202};
//# sourceMappingURL=z2ui5_cl_demo_app_202.clas.mjs.map