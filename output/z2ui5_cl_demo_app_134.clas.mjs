const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_134.clas.abap
class z2ui5_cl_demo_app_134 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_134';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-DESCR"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-INFO"})}, "z2ui5_cl_demo_app_134=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SCROLLUPDATE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "FIELD_01": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "FIELD_02": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "FOCUS_ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELSTART": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SELEND": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "UPDATE_FOCUS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SCROLL": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "INIT": {"visibility": "O", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-DESCR"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-INFO"})}, "z2ui5_cl_demo_app_134=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.mv_scrollupdate = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.field_01 = new abap.types.String({qualifiedName: "STRING"});
    this.field_02 = new abap.types.String({qualifiedName: "STRING"});
    this.focus_id = new abap.types.String({qualifiedName: "STRING"});
    this.selstart = new abap.types.String({qualifiedName: "STRING"});
    this.selend = new abap.types.String({qualifiedName: "STRING"});
    this.update_focus = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_scroll = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
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
    let temp1 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-DESCR"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-INFO"})}, "z2ui5_cl_demo_app_134=>ty_row", undefined, {}, {});
    let ls_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-DESCR"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-INFO"})}, "z2ui5_cl_demo_app_134=>ty_row", undefined, {}, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    abap.statements.clear(temp1);
    temp1.get().title.set(new abap.types.Character(5).set('Peter'));
    temp1.get().value.set(new abap.types.Character(3).set('red'));
    temp1.get().info.set(new abap.types.Character(9).set('completed'));
    temp1.get().descr.set(new abap.types.Character(21).set('this is a description'));
    ls_row.set(temp1);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique385 = abap.IntegerFactory.get(100).get();
    for (let unique386 = 0; unique386 < unique385; unique386++) {
      abap.builtin.sy.get().index.set(unique386 + 1);
      abap.statements.insertInternal({data: ls_row, table: this.t_tab});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    view.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()));
    page.set((await view.get().page({id: new abap.types.Character(7).set('id_page'), title: new abap.types.Character(60).set('abap2ui5 - Scrolling (use Chrome to avoid incompatibilities)'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    await (await page.get()._z2ui5()).get().scrolling({setupdate: (await client.get().z2ui5_if_client$_bind_edit({val: this.mv_scrollupdate})), items: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_scroll}))});
    tab.set((await page.get().table({sticky: new abap.types.Character(27).set('ColumnHeaders,HeaderToolbar'), headertext: new abap.types.Character(23).set('Table with some entries'), items: (await client.get().z2ui5_if_client$_bind({val: this.t_tab}))})));
    await (await (await (await (await (await (await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(5).set('Title')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(5).set('Color')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('Info')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(11).set('Description')});
    await (await (await (await (await (await (await tab.get().items()).get().column_list_item()).get().cells()).get().text({text: new abap.types.Character(7).set('{TITLE}')})).get().text({text: new abap.types.Character(7).set('{VALUE}')})).get().text({text: new abap.types.Character(6).set('{INFO}')})).get().text({text: new abap.types.Character(7).set('{DESCR}')});
    await (await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().button({text: new abap.types.Character(10).set('Scroll Top'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(17).set('BUTTON_SCROLL_TOP')}))})).get().button({text: new abap.types.Character(13).set('Scroll 500 up'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(16).set('BUTTON_SCROLL_UP')}))})).get().button({text: new abap.types.Character(15).set('Scroll 500 down'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('BUTTON_SCROLL_DOWN')}))})).get().button({text: new abap.types.Character(13).set('Scroll Bottom'), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(20).set('BUTTON_SCROLL_BOTTOM')}))});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async init(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    this.field_01.set(new abap.types.String().set(`this is a text`));
    this.field_02.set(new abap.types.String().set(`this is another text`));
    this.selstart.set(new abap.types.String().set(`3`));
    this.selend.set(new abap.types.String().set(`7`));
    abap.statements.clear(temp2);
    temp2.get().n.set(new abap.types.Character(7).set('id_page'));
    abap.statements.insertInternal({data: temp2, table: this.mt_scroll});
    await this.display_view({client: client});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp3 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let lv_pos = new abap.types.Integer({qualifiedName: "I"});
    let fs_temp5_ = new abap.types.FieldSymbol(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}));
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp7 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let temp8 = new abap.types.Integer({qualifiedName: "I"});
    let fs_temp9_ = new abap.types.FieldSymbol(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}));
    let temp10 = new abap.types.Integer({qualifiedName: "I"});
    let temp9 = new abap.types.String({qualifiedName: "STRING"});
    let temp11 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.init({client: client});
      return;
    }
    await client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(16).set('server roundtrip')});
    let unique387 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique387, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
    } else if (abap.compare.eq(unique387, new abap.types.Character(17).set('BUTTON_SCROLL_TOP'))) {
      abap.statements.clear(this.mt_scroll);
      abap.statements.clear(temp3);
      temp3.get().n.set(new abap.types.Character(7).set('id_page'));
      temp3.get().v.set(new abap.types.Character(1).set('0'));
      abap.statements.insertInternal({data: temp3, table: this.mt_scroll});
      this.mv_scrollupdate.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique387, new abap.types.Character(16).set('BUTTON_SCROLL_UP'))) {
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.mt_scroll,{into: temp1,
        withKey: (i) => {return abap.compare.eq(i.n, new abap.types.Character(7).set('id_page'));},
        withKeyValue: [{key: (i) => {return i.n}, value: new abap.types.Character(7).set('id_page')}],
        usesTableLine: false,
        withKeySimple: {"n": new abap.types.Character(7).set('id_page')}});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      temp4.set(temp1.get().v);
      lv_pos.set(temp4);
      lv_pos.set(abap.operators.minus(lv_pos,new abap.types.Integer().set(500)));
      if (abap.compare.lt(lv_pos, abap.IntegerFactory.get(0))) {
        lv_pos.set(abap.IntegerFactory.get(0));
      }
      temp6.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.mt_scroll,{assigning: fs_temp5_,
        withKey: (i) => {return abap.compare.eq(i.n, new abap.types.Character(7).set('id_page'));},
        withKeyValue: [{key: (i) => {return i.n}, value: new abap.types.Character(7).set('id_page')}],
        usesTableLine: false,
        withKeySimple: {"n": new abap.types.Character(7).set('id_page')}});
      abap.builtin.sy.get().tabix.set(temp6);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      temp5.set(lv_pos);
      fs_temp5_.get().v.set(abap.builtin.shift_left({val: abap.builtin.shift_right({val: temp5})}));
      this.mv_scrollupdate.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique387, new abap.types.Character(18).set('BUTTON_SCROLL_DOWN'))) {
      temp8.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.mt_scroll,{into: temp7,
        withKey: (i) => {return abap.compare.eq(i.n, new abap.types.Character(7).set('id_page'));},
        withKeyValue: [{key: (i) => {return i.n}, value: new abap.types.Character(7).set('id_page')}],
        usesTableLine: false,
        withKeySimple: {"n": new abap.types.Character(7).set('id_page')}});
      abap.builtin.sy.get().tabix.set(temp8);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_pos.set(temp7.get().v);
      lv_pos.set(abap.operators.add(lv_pos,new abap.types.Integer().set(500)));
      if (abap.compare.lt(lv_pos, abap.IntegerFactory.get(0))) {
        lv_pos.set(abap.IntegerFactory.get(0));
      }
      temp10.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.mt_scroll,{assigning: fs_temp9_,
        withKey: (i) => {return abap.compare.eq(i.n, new abap.types.Character(7).set('id_page'));},
        withKeyValue: [{key: (i) => {return i.n}, value: new abap.types.Character(7).set('id_page')}],
        usesTableLine: false,
        withKeySimple: {"n": new abap.types.Character(7).set('id_page')}});
      abap.builtin.sy.get().tabix.set(temp10);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      temp9.set(lv_pos);
      fs_temp9_.get().v.set(abap.builtin.shift_left({val: abap.builtin.shift_right({val: temp9})}));
      this.mv_scrollupdate.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique387, new abap.types.Character(20).set('BUTTON_SCROLL_BOTTOM'))) {
      abap.statements.clear(this.mt_scroll);
      abap.statements.clear(temp11);
      temp11.get().n.set(new abap.types.Character(7).set('id_page'));
      temp11.get().v.set(new abap.types.Character(5).set('99999'));
      abap.statements.insertInternal({data: temp11, table: this.mt_scroll});
      this.mv_scrollupdate.set(abap.builtin.abap_true);
      await client.get().z2ui5_if_client$view_model_update();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_134'] = z2ui5_cl_demo_app_134;
z2ui5_cl_demo_app_134.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_134.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_134.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_134.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_134.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_134.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_134.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_134.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_134.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-DESCR"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_134=>TY_ROW-INFO"})}, "z2ui5_cl_demo_app_134=>ty_row", undefined, {}, {});
export {z2ui5_cl_demo_app_134};
//# sourceMappingURL=z2ui5_cl_demo_app_134.clas.mjs.map