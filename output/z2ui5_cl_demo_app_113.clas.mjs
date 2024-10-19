const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_113.clas.abap
class z2ui5_cl_demo_app_113 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_113';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_FEED": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_113=>temp1_4a20fb9fa2");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_FEED": {"type": () => {return new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_SET_DATA": {"visibility": "O", "parameters": {}},
  "Z2UI5_VIEW_DISPLAY": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_feed = abap.types.TableFactory.construct(new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_113=>temp1_4a20fb9fa2");
    this.ms_feed = new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {});
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_set_data();
      await this.z2ui5_view_display();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let unique348 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique348, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_set_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_113=>temp1_4a20fb9fa2");
    let temp2 = new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().author.set(new abap.types.String().set(`Developer9`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.11.2023`));
    temp2.get().text.set(new abap.types.String().set(`newest entry`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer8`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.10.2023`));
    temp2.get().text.set(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer7`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.09.2023`));
    temp2.get().text.set(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer6`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.08.2023`));
    temp2.get().text.set(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer5`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.07.2023`));
    temp2.get().text.set(new abap.types.String().set(`this is a text`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer4`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.06.2023`));
    temp2.get().text.set(new abap.types.String().set(`this is another entry Product D`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer3`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.05.2023`));
    temp2.get().text.set(new abap.types.String().set(`this is another entry Product C`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer2`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.04.2023`));
    temp2.get().text.set(new abap.types.String().set(`this is another entry Product B`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer1`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().datetime.set(new abap.types.String().set(`01.03.2023`));
    temp2.get().text.set(new abap.types.String().set(`this is another entry Product A`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().author.set(new abap.types.String().set(`Developer`));
    temp2.get().title.set(new abap.types.String().set(`this is a title`));
    temp2.get().datetime.set(new abap.types.String().set(`01.02.2023`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Request`));
    temp2.get().date.set(new abap.types.String().set(`August 26 2023`));
    temp2.get().text.set(abap.operators.concat(new abap.types.String().set(`this is a long text Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`),abap.operators.concat(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`),abap.operators.concat(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiamnonumyeirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`),abap.operators.concat(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`),abap.operators.concat(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`),abap.operators.concat(new abap.types.String().set(`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna`),new abap.types.String().set(`aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`))))))));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().title.set(new abap.types.String().set(`first entry`));
    temp2.get().author.set(new abap.types.String().set(`Developer`));
    temp2.get().datetime.set(new abap.types.String().set(`01.01.2023`));
    temp2.get().authorpic.set(new abap.types.String().set(`sap-icon://employee`));
    temp2.get().type.set(new abap.types.String().set(`Reply`));
    temp2.get().date.set(new abap.types.String().set(`August 26 2023`));
    temp2.get().text.set(new abap.types.String().set(`this is the beginning of a timeline`));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_feed.set(temp1);
  }
  async z2ui5_view_display() {
    let lo_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let timeline = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    lo_view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await lo_view.get().shell()).get().page({title: new abap.types.Character(8).set('Timeline'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})));
    timeline.set((await page.get().timeline({content: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_feed}))})));
    await (await timeline.get().content({ns: new abap.types.String().set(`commons`)})).get().timeline_item({datetime: new abap.types.String().set(`{DATETIME}`), title: new abap.types.String().set(`{TITLE}`), userpicture: new abap.types.String().set(`{AUTHORPIC}`), text: new abap.types.String().set(`{TEXT}`), username: new abap.types.String().set(`{AUTHOR}`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await lo_view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_113'] = z2ui5_cl_demo_app_113;
z2ui5_cl_demo_app_113.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_113.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_113.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_113.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_113.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_113.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_113.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_113.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_113.ty_feed = new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {});
z2ui5_cl_demo_app_113.temp1_4a20fb9fa2 = abap.types.TableFactory.construct(new abap.types.Structure({"author": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHOR"}), "title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TITLE"}), "authorpic": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-AUTHORPIC"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TYPE"}), "date": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATE"}), "datetime": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-DATETIME"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_113=>TY_FEED-TEXT"})}, "z2ui5_cl_demo_app_113=>ty_feed", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_113=>temp1_4a20fb9fa2");
export {z2ui5_cl_demo_app_113};
//# sourceMappingURL=z2ui5_cl_demo_app_113.clas.mjs.map