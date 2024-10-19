const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_186.clas.abap
class z2ui5_cl_demo_app_186 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_186';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"IS_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "FILE_CONTENT_64": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "FILE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MIME_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"INITIALIZE": {"visibility": "I", "parameters": {}},
  "ON_EVENT": {"visibility": "I", "parameters": {}},
  "RENDER_SCREEN": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.is_initialized = new abap.types.Character(1, {"qualifiedName":"BOOLEAN","ddicName":"BOOLEAN"});
    this.file_content_64 = new abap.types.String({qualifiedName: "STRING"});
    this.file_name = new abap.types.String({qualifiedName: "STRING"});
    this.mime_type = new abap.types.String({qualifiedName: "STRING"});
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
  async initialize() {
    this.file_name.set(new abap.types.Character(21).set('Default_File_Name.jpg'));
    this.mime_type.set(new abap.types.Character(10).set('text/plain'));
    this.file_content_64.set(abap.operators.concat(new abap.types.String().set(`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAA`),abap.operators.concat(new abap.types.String().set(`KYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIp`),abap.operators.concat(new abap.types.String().set(`QBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW`),abap.operators.concat(new abap.types.String().set(`0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpd`),abap.operators.concat(new abap.types.String().set(`mZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoeP`),abap.operators.concat(new abap.types.String().set(`PQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKc`),abap.operators.concat(new abap.types.String().set(`TNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jc`),abap.operators.concat(new abap.types.String().set(`W+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/`),abap.operators.concat(new abap.types.String().set(`JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3`),abap.operators.concat(new abap.types.String().set(`/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQj`),new abap.types.String().set(`LYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=`))))))))))));
  }
  async on_event() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let unique455 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique455, new abap.types.Character(15).set('BUTTON_DOWNLOAD'))) {
      abap.statements.clear(temp1);
      abap.statements.insertInternal({data: this.file_content_64, table: temp1});
      abap.statements.insertInternal({data: this.file_name, table: temp1});
      await this.client.get().z2ui5_if_client$follow_up_action({val: (await this.client.get().z2ui5_if_client$_event_client({val: this.client.get().z2ui5_if_client$cs_event.get().download_b64_file, t_arg: temp1}))});
    } else if (abap.compare.eq(unique455, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async render_screen() {
    let lv_script = new abap.types.String({qualifiedName: "STRING"});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.abap_false, ((await this.client.get().z2ui5_if_client$get())).get().check_launchpad_active)));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({showheader: temp1, title: new abap.types.Character(31).set('abap2UI5 - Download Base64 File'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    await (await (await (await (await (await (await (await (await page.get().flex_box({width: new abap.types.String().set(`100%`), height: new abap.types.String().set(`600px`), alignitems: new abap.types.String().set(`Center`), justifycontent: new abap.types.String().set(`SpaceAround`)})).get().vbox()).get().text({text: new abap.types.String().set(`Base64 String:`)})).get().text_area({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.file_content_64})), rows: new abap.types.String().set(`20`), width: new abap.types.String().set(`800px`), wrapping: abap.builtin.abap_true})).get().get_parent()).get().vbox({justifycontent: new abap.types.String().set(`Center`), alignitems: new abap.types.String().set(`Center`)})).get().text({text: new abap.types.String().set(`fill filename:`)})).get().input({value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.file_name})), class: new abap.types.String().set(`sapUiLargeMarginBottom`), width: new abap.types.String().set(`15rem`)})).get().button({type: new abap.types.Character(10).set('Emphasized'), text: new abap.types.Character(19).set('Open Download Popup'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_DOWNLOAD')}))});
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.is_initialized, abap.builtin.abap_false)) {
      await this.initialize();
      await this.render_screen();
      this.is_initialized.set(abap.builtin.abap_true);
    }
    await this.on_event();
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_186'] = z2ui5_cl_demo_app_186;
z2ui5_cl_demo_app_186.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_186.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_186.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_186.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_186.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_186.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_186.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_186.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_186};
//# sourceMappingURL=z2ui5_cl_demo_app_186.clas.mjs.map