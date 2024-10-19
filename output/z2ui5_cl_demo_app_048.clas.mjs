const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_048.clas.abap
class z2ui5_cl_demo_app_048 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_048';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-INFO"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-HIGHLIGHT"}), "wrapcharlimit": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-WRAPCHARLIMIT"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_048=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-INFO"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-HIGHLIGHT"}), "wrapcharlimit": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-WRAPCHARLIMIT"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_048=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
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
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-INFO"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-HIGHLIGHT"}), "wrapcharlimit": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-WRAPCHARLIMIT"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_048=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-INFO"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-HIGHLIGHT"}), "wrapcharlimit": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-WRAPCHARLIMIT"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_048=>ty_row", undefined, {}, {});
    let lv_row_title = new abap.types.String({qualifiedName: "STRING"});
    let lt_sel = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-INFO"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-HIGHLIGHT"}), "wrapcharlimit": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-WRAPCHARLIMIT"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_048=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp3 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-INFO"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-HIGHLIGHT"}), "wrapcharlimit": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-WRAPCHARLIMIT"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_048=>ty_row", undefined, {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp7 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp1);
      temp2.get().title.set(new abap.types.Character(8).set('entry_01'));
      temp2.get().info.set(new abap.types.Character(11).set('Information'));
      temp2.get().descr.set(new abap.types.Character(44).set('this is a description1 1234567890 1234567890'));
      temp2.get().icon.set(new abap.types.Character(16).set('sap-icon://badge'));
      temp2.get().highlight.set(new abap.types.Character(11).set('Information'));
      temp2.get().wrapcharlimit.set(new abap.types.Character(3).set('100'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('entry_02'));
      temp2.get().info.set(new abap.types.Character(7).set('Success'));
      temp2.get().descr.set(new abap.types.Character(44).set('this is a description2 1234567890 1234567890'));
      temp2.get().icon.set(new abap.types.Character(19).set('sap-icon://favorite'));
      temp2.get().highlight.set(new abap.types.Character(7).set('Success'));
      temp2.get().wrapcharlimit.set(new abap.types.Character(2).set('10'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('entry_03'));
      temp2.get().info.set(new abap.types.Character(7).set('Warning'));
      temp2.get().descr.set(new abap.types.Character(44).set('this is a description3 1234567890 1234567890'));
      temp2.get().icon.set(new abap.types.Character(19).set('sap-icon://employee'));
      temp2.get().highlight.set(new abap.types.Character(7).set('Warning'));
      temp2.get().wrapcharlimit.set(new abap.types.Character(3).set('100'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('entry_04'));
      temp2.get().info.set(new abap.types.Character(5).set('Error'));
      temp2.get().descr.set(new abap.types.Character(44).set('this is a description4 1234567890 1234567890'));
      temp2.get().icon.set(new abap.types.Character(17).set('sap-icon://accept'));
      temp2.get().highlight.set(new abap.types.Character(5).set('Error'));
      temp2.get().wrapcharlimit.set(new abap.types.Character(2).set('10'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('entry_05'));
      temp2.get().info.set(new abap.types.Character(4).set('None'));
      temp2.get().descr.set(new abap.types.Character(44).set('this is a description5 1234567890 1234567890'));
      temp2.get().icon.set(new abap.types.Character(21).set('sap-icon://activities'));
      temp2.get().highlight.set(new abap.types.Character(4).set('None'));
      temp2.get().wrapcharlimit.set(new abap.types.Character(2).set('10'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().title.set(new abap.types.Character(8).set('entry_06'));
      temp2.get().info.set(new abap.types.Character(11).set('Information'));
      temp2.get().descr.set(new abap.types.Character(44).set('this is a description6 1234567890 1234567890'));
      temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
      temp2.get().highlight.set(new abap.types.Character(11).set('Information'));
      temp2.get().wrapcharlimit.set(new abap.types.Character(3).set('100'));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.t_tab.set(temp1);
    }
    let unique246 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique246, new abap.types.Character(4).set('EDIT'))) {
      lv_row_title.set((await client.get().z2ui5_if_client$get_event_arg({v: abap.IntegerFactory.get(1)})));
      await client.get().z2ui5_if_client$message_box_display({text: abap.operators.concat(new abap.types.String().set(`EDIT - `),lv_row_title)});
    } else if (abap.compare.eq(unique246, new abap.types.Character(9).set('SELCHANGE'))) {
      lt_sel.set(this.t_tab);
      await abap.statements.deleteInternal(lt_sel,{where: async (I) => {return abap.compare.eq(I.selected, abap.builtin.abap_false);}});
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_sel,{index: abap.IntegerFactory.get(1),
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      await client.get().z2ui5_if_client$message_box_display({text: abap.operators.concat(new abap.types.String().set(`SELECTION_CHANGED -`),temp3.get().title)});
    } else if (abap.compare.eq(unique246, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    page.set((await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.Character(15).set('abap2UI5 - List'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content()).get().link({text: new abap.types.Character(4).set('Demo'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://twitter.com/abap2UI5/status/1657279838586109953`)})).get().link()).get().get_parent()));
    abap.statements.clear(temp5);
    temp6.get().n.set(new abap.types.String().set(`title`));
    temp6.get().v.set(new abap.types.Character(7).set('{TITLE}'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`description`));
    temp6.get().v.set(new abap.types.Character(7).set('{DESCR}'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`icon`));
    temp6.get().v.set(new abap.types.Character(6).set('{ICON}'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`iconInset`));
    temp6.get().v.set(new abap.types.Character(5).set('false'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`highlight`));
    temp6.get().v.set(new abap.types.Character(11).set('{HIGHLIGHT}'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`info`));
    temp6.get().v.set(new abap.types.Character(6).set('{INFO}'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`infoState`));
    temp6.get().v.set(new abap.types.Character(11).set('{HIGHLIGHT}'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`infoStateInverted`));
    temp6.get().v.set(new abap.types.Character(4).set('true'));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.Character(4).set('type'));
    temp6.get().v.set(new abap.types.String().set(`Detail`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.Character(8).set('wrapping'));
    temp6.get().v.set(new abap.types.String().set(`true`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.Character(13).set('wrapCharLimit'));
    temp6.get().v.set(new abap.types.String().set(`{WRAPCHARLIMIT}`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.Character(8).set('selected'));
    temp6.get().v.set(new abap.types.String().set(`{SELECTED}`));
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.Character(11).set('detailPress'));
    abap.statements.clear(temp7);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${TITLE}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${DESCR}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${ICON}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${HIGHLIGHT}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${INFO}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${WRAPCHARLIMIT}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${SELECTED}`), table: temp7});
    temp6.get().v.set((await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('EDIT'), t_arg: temp7})));
    abap.statements.insertInternal({data: temp6, table: temp5});
    await (await page.get().list({headertext: new abap.types.Character(10).set('List Ouput'), items: (await client.get().z2ui5_if_client$_bind_edit({val: this.t_tab})), mode: new abap.types.String().set(`SingleSelectMaster`), selectionchange: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get()._generic({name: new abap.types.String().set(`StandardListItem`), t_prop: temp5});
    await client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_048'] = z2ui5_cl_demo_app_048;
z2ui5_cl_demo_app_048.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_048.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_048.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_048.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_048.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_048.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_048.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_048.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_048.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-INFO"}), "highlight": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-HIGHLIGHT"}), "wrapcharlimit": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_048=>TY_ROW-WRAPCHARLIMIT"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "Z2UI5_CL_DEMO_APP_048=>ty_row", undefined, {}, {});
export {z2ui5_cl_demo_app_048};
//# sourceMappingURL=z2ui5_cl_demo_app_048.clas.mjs.map