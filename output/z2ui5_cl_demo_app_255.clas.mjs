const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_255.clas.abap
class z2ui5_cl_demo_app_255 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_255';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "ON_EVENT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "Z2UI5_DISPLAY_POPOVER": {"visibility": "O", "parameters": {"ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let css = new abap.types.String({qualifiedName: "STRING"});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    css.set(abap.operators.concat(new abap.types.String().set(`.navigationExamples .code {`),abap.operators.concat(new abap.types.String().set(`    margin: 0 5%;`),abap.operators.concat(new abap.types.String().set(`    font-family: Consolas, Courier, monospace;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox1,`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox2 {`),abap.operators.concat(new abap.types.String().set(`    padding: 0;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox1 li {`),abap.operators.concat(new abap.types.String().set(`    margin: 0.4em;`),abap.operators.concat(new abap.types.String().set(`    padding: 0.4em 1.3em;`),abap.operators.concat(new abap.types.String().set(`    list-style-type: none;`),abap.operators.concat(new abap.types.String().set(`    text-align: center;`),abap.operators.concat(new abap.types.String().set(`    background-color: #193441;`),abap.operators.concat(new abap.types.String().set(`    cursor: pointer;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox1 li:hover {`),abap.operators.concat(new abap.types.String().set(`    background-color: orange;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox2 li {`),abap.operators.concat(new abap.types.String().set(`    margin: 0.5em;`),abap.operators.concat(new abap.types.String().set(`    width: 25%;`),abap.operators.concat(new abap.types.String().set(`    min-width: 15%;`),abap.operators.concat(new abap.types.String().set(`    list-style-type: none;`),abap.operators.concat(new abap.types.String().set(`    text-align: center;`),abap.operators.concat(new abap.types.String().set(`    background-color: #193441;`),abap.operators.concat(new abap.types.String().set(`    padding: 0.4em;`),abap.operators.concat(new abap.types.String().set(`    transition: width 0.5s ease-out, background-color 0.5s ease-out, flex-basis 0.5s ease-out;`),abap.operators.concat(new abap.types.String().set(`    cursor: pointer;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox2 li:hover {`),abap.operators.concat(new abap.types.String().set(`    flex-basis: 35% !important;`),abap.operators.concat(new abap.types.String().set(`    background-color: orange;`),abap.operators.concat(new abap.types.String().set(`}`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox1 li a,`),abap.operators.concat(new abap.types.String().set(`.navigationExamples .ne-flexbox2 li a {`),abap.operators.concat(new abap.types.String().set(`    color: #fff;`),abap.operators.concat(new abap.types.String().set(`    text-decoration: none;`),abap.operators.concat(new abap.types.String().set(`    font-size: 0.875rem;`),new abap.types.String().set(`}`)))))))))))))))))))))))))))))))))))))))));
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await (await view.get()._generic({name: new abap.types.String().set(`style`), ns: new abap.types.String().set(`html`)})).get()._cc_plain_xml({val: css})).get().get_parent();
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Flex Box - Navigation Examples`), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    await (await page.get().header_content()).get().button({id: new abap.types.String().set(`hint_icon`), icon: new abap.types.String().set(`sap-icon://hint`), tooltip: new abap.types.String().set(`Sample information`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(7).set('POPOVER')}))});
    await (await page.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(90).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.FlexBox/sample/sap.m.sample.FlexBoxNav')});
    layout.set((await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await page.get().vbox({class: new abap.types.String().set(`navigationExamples`)})).get().panel({headertext: new abap.types.String().set(`Variable width`)})).get().flex_box({class: new abap.types.String().set(`ne-flexbox1`), rendertype: new abap.types.String().set(`List`), justifycontent: new abap.types.String().set(`Center`), alignitems: new abap.types.String().set(`Center`)})).get().html({content: new abap.types.String().set(`<a >Item 1</a>`)})).get().get_parent()).get().html({content: new abap.types.String().set(`<a >Long item 2</a>`)})).get().get_parent()).get().html({content: new abap.types.String().set(`<a >Item 3</a>`)})).get().get_parent()).get().get_parent()).get().panel({headertext: new abap.types.String().set(`Same width, transition effect`)})).get().flex_box({class: new abap.types.String().set(`ne-flexbox2`), rendertype: new abap.types.String().set(`List`), justifycontent: new abap.types.String().set(`SpaceBetween`), alignitems: new abap.types.String().set(`Center`)})).get().html({content: new abap.types.String().set(`<a >Item 1</a>`)})).get().get()).get().layout_data({ns: new abap.types.String().set(`core`)})).get().flex_item_data({growfactor: new abap.types.String().set(`1`), basesize: new abap.types.String().set(`25%`)})).get().get_parent()).get().get_parent()).get().html({content: new abap.types.String().set(`<a >Long item 2</a>`)})).get().get()).get().layout_data({ns: new abap.types.String().set(`core`)})).get().flex_item_data({growfactor: new abap.types.String().set(`1`), basesize: new abap.types.String().set(`25%`)})).get().get_parent()).get().get_parent()).get().html({content: new abap.types.String().set(`<a >Item 3</a>`)})).get().get()).get().layout_data({ns: new abap.types.String().set(`core`)})).get().flex_item_data({growfactor: new abap.types.String().set(`1`), basesize: new abap.types.String().set(`25%`)})).get().get_parent()).get().get_parent()));
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let unique550 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique550, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique550, new abap.types.Character(7).set('POPOVER'))) {
      await this.z2ui5_display_popover({id: new abap.types.String().set(`hint_icon`)});
    }
  }
  async z2ui5_display_popover(INPUT) {
    let id = INPUT?.id;
    if (id?.getQualifiedName === undefined || id.getQualifiedName() !== "STRING") { id = undefined; }
    if (id === undefined) { id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.id); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()));
    await (await view.get().quick_view({placement: new abap.types.String().set(`Bottom`), width: new abap.types.String().set(`auto`)})).get().quick_view_page({pageid: new abap.types.String().set(`sampleInformationId`), header: new abap.types.String().set(`Sample information`), description: new abap.types.String().set(`Here is an example of how you can use navigation items as unordered list items in a Flex Box.`)});
    await this.client.get().z2ui5_if_client$popover_display({xml: (await view.get().stringify()), by_id: id});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.display_view({client: client});
    }
    await this.on_event({client: client});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_255'] = z2ui5_cl_demo_app_255;
z2ui5_cl_demo_app_255.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_255.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_255.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_255.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_255.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_255.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_255.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_255.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_255};
//# sourceMappingURL=z2ui5_cl_demo_app_255.clas.mjs.map