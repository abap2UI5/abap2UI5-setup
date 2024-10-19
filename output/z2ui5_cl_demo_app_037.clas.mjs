const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_037.clas.abap
class z2ui5_cl_demo_app_037 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_037';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MV_LOAD_CC": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MV_DISPLAY_CC": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"GET_JS_CUSTOM_CONTROL": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "Z2UI5_LOAD_CC": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_RENDER": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_load_cc = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_display_cc = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
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
  async get_js_custom_control() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(`<html:script>jQuery.sap.declare("z2ui5.MyCC");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    sap.ui.require( [`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        "sap/ui/core/Control",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    ], function (Control) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        "use strict";`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        return Control.extend("z2ui5.MyCC", {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            metadata: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                properties: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    value: { type: "string" }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                events: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    "change": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        allowPreventDefault: true,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        parameters: {}`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            renderer: function (oRm, oControl) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                oControl.oInput = new sap.m.Input({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    value: oControl.getProperty("value")`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                oControl.oButton = new sap.m.Button({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    text: 'button text',`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    press: function (oEvent) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        debugger;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        this.setProperty("value",  this.oInput.getProperty( 'value')  )`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        this.fireChange();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    }.bind(oControl)`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                oRm.renderControl(oControl.oInput);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                oRm.renderControl(oControl.oButton);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    });`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`}); jQuery.sap.require("z2ui5.MyCC"); </html:script>`))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_render();
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_load_cc() {
    await this.client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`script`)})).get()._cc_plain_xml({val: (await this.get_js_custom_control())})).get()._z2ui5()).get().timer({finished: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('DISPLAY_VIEW')})), delayms: new abap.types.String().set(`0`)})).get().stringify())});
  }
  async z2ui5_on_event() {
    let unique234 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique234, new abap.types.String().set(`DISPLAY_VIEW`))) {
      await this.z2ui5_on_render();
    } else if (abap.compare.eq(unique234, new abap.types.Character(4).set('POST'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: (await this.client.get().z2ui5_if_client$get_event_arg({v: abap.IntegerFactory.get(1)}))});
    } else if (abap.compare.eq(unique234, new abap.types.Character(7).set('LOAD_CC'))) {
      this.mv_load_cc.set(abap.builtin.abap_true);
      await this.z2ui5_load_cc();
      await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(22).set('Custom Control loaded ')});
    } else if (abap.compare.eq(unique234, new abap.types.Character(10).set('DISPLAY_CC'))) {
      this.mv_display_cc.set(abap.builtin.abap_true);
      await this.z2ui5_on_render();
      await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(25).set('Custom Control displayed ')});
    } else if (abap.compare.eq(unique234, new abap.types.Character(4).set('MYCC'))) {
      await this.client.get().z2ui5_if_client$message_toast_display({text: abap.operators.concat(new abap.types.String().set(`Custom Control input: `),this.mv_value)});
    } else if (abap.compare.eq(unique234, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_render() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lv_xml = new abap.types.String({qualifiedName: "STRING"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    lv_xml.set(abap.operators.concat(new abap.types.String().set(`<mvc:View`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  xmlns:z2ui5="z2ui5"  xmlns:m="sap.m" xmlns="http://www.w3.org/1999/xhtml"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`    ><m:Button `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  text="back" `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  press="`),abap.operators.concat((await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})),abap.operators.concat(new abap.types.String().set(`" `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`  class="sapUiContentPadding sapUiResponsivePadding--content"/> `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`<m:Button text="Load Custom Control"    press="`),abap.operators.concat((await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('LOAD_CC')})),abap.operators.concat(new abap.types.String().set(`" />`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`<m:Button text="Display Custom Control" press="`),abap.operators.concat((await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('DISPLAY_CC')})),abap.operators.concat(new abap.types.String().set(`" />`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`<html><head> `),abap.operators.concat(new abap.types.String().set(`</head>`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`<body>`)))))))))))))))))))))))))))));
    if (abap.compare.eq(this.mv_display_cc, abap.builtin.abap_true)) {
      lv_xml.set(abap.operators.concat(lv_xml,abap.operators.concat(new abap.types.String().set(` <z2ui5:MyCC change=" `),abap.operators.concat((await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('MYCC')})),abap.operators.concat(new abap.types.String().set(`"  value="`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_value})),new abap.types.String().set(`"/>`)))))));
    }
    lv_xml.set(abap.operators.concat(lv_xml,abap.operators.concat(new abap.types.String().set(`</body>`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`</html> `),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`</mvc:View>`)))))));
    await this.client.get().z2ui5_if_client$view_display({val: lv_xml});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_037'] = z2ui5_cl_demo_app_037;
z2ui5_cl_demo_app_037.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_037.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_037.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_037.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_037.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_037.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_037.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_037.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_037};
//# sourceMappingURL=z2ui5_cl_demo_app_037.clas.mjs.map