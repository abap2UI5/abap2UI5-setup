const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_033.clas.abap
class z2ui5_cl_demo_app_033 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_033';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_HTML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_type = new abap.types.String({qualifiedName: "STRING"});
    this.mv_html = new abap.types.String({qualifiedName: "STRING"});
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
  async display_view() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Structure({"check_view_destroy": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_allow_multi_req": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_if_types=>ty_s_event_control", undefined, {}, {});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    abap.statements.clear(temp1);
    temp1.get().check_view_destroy.set(abap.builtin.abap_true);
    page.set((await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(31).set('abap2UI5 - Illustrated Messages'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK'), s_ctrl: temp1})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link({text: new abap.types.Character(4).set('Demo'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://twitter.com/abap2UI5/status/1647175810917318657`)})).get().link()).get().get_parent()));
    await page.get().link({text: new abap.types.Character(13).set('Documentation'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://openui5.hana.ondemand.com/api/sap.m.IllustratedMessageType#properties`)});
    await page.get().button({text: new abap.types.Character(12).set('NoActivities'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(21).set('sapIllus-NoActivities')}))});
    await page.get().button({text: new abap.types.Character(9).set('AddPeople'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('sapIllus-AddPeople')}))});
    await page.get().button({text: new abap.types.Character(10).set('Connection'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(19).set('sapIllus-Connection')}))});
    await page.get().button({text: new abap.types.Character(15).set('NoDimensionsSet'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(24).set('sapIllus-NoDimensionsSet')}))});
    await page.get().button({text: new abap.types.Character(9).set('NoEntries'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('sapIllus-NoEntries')}))});
    await (await (await page.get().illustrated_message({illustrationtype: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_type}))})).get().additional_content()).get().button({text: new abap.types.Character(11).set('information'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('BUTTON_MESSAGE_BOX')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    this.mv_html.set(abap.operators.concat(new abap.types.String().set(`<p>link: <a href="https://www.sap.com" style="color:green; font-weight:600;">link to sap.com</a> - links open in `),abap.operators.concat(new abap.types.String().set(`a new window.</p><p>paragraph: <strong>strong</strong> and <em>emphasized</em>.</p><p>list:</p><ul`),abap.operators.concat(new abap.types.String().set(`><li>list item 1</li><li>list item 2<ul><li>sub item 1</li><li>sub item 2</li></ul></li></ul><p>pre:</p><pre>abc    def    ghi</pre><p>code: <code>var el = document.getElementById("myId");</code></p><p>cite: <cite>a reference to a source</cite></p>`),new abap.types.String().set(`<dl><dt>definition:</dt><dd>definition list of terms and descriptions</dd>`)))));
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      this.mv_type.set(new abap.types.String().set(`sapIllus-NoActivities`));
      await this.display_view();
      return;
    }
    let unique228 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique228, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique228, new abap.types.Character(18).set('BUTTON_MESSAGE_BOX'))) {
      await client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(29).set('Action of illustrated message')});
    } else {
      this.mv_type.set(((await client.get().z2ui5_if_client$get())).get().event);
    }
    await this.display_view();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_033'] = z2ui5_cl_demo_app_033;
z2ui5_cl_demo_app_033.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_033.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_033.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_033.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_033.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_033.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_033.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_033.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_033};
//# sourceMappingURL=z2ui5_cl_demo_app_033.clas.mjs.map