const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_172.clas.abap
class z2ui5_cl_demo_app_172 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_172';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "OUTPUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_172=>temp1_80db87fdfc");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"LOAD_OUTPUT_TABLE": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "RENDER_MAIN_SCREEN": {"visibility": "O", "parameters": {}},
  "CALCULATE_SUM": {"visibility": "O", "parameters": {"I_COLUMN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.output = abap.types.TableFactory.construct(new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_172=>temp1_80db87fdfc");
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
  async load_output_table() {
    let ls_output = new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {});
    abap.statements.clear(this.output);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique428 = abap.IntegerFactory.get(11).get();
    for (let unique429 = 0; unique429 < unique428; unique429++) {
      abap.builtin.sy.get().index.set(unique429 + 1);
      ls_output.get().index.set(abap.builtin.sy.get().index);
      ls_output.get().text.set(new abap.types.Character(4).set('Text'));
      ls_output.get().link.set(new abap.types.Character(4).set('Link'));
      ls_output.get().currency.set(new abap.types.Character(6).set('123.45'));
      ls_output.get().waers.set(new abap.types.Character(3).set('EUR'));
      if (abap.compare.eq(abap.builtin.sy.get().index, abap.IntegerFactory.get(1))) {
        ls_output.get().bool.set(abap.builtin.abap_false);
        ls_output.get().percent1.set(new abap.types.Character(6).set('100.00'));
      } else {
        ls_output.get().bool.set(abap.builtin.abap_true);
        ls_output.get().percent1.set(new abap.types.Character(5).set('10.00'));
      }
      abap.statements.append({source: ls_output, target: this.output});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async on_event() {
    let lt_event_arguments = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lv_tab_index = new abap.types.String({qualifiedName: "STRING"});
    let lv_message = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let lv_id_event = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let ls_row_submit = new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {});
    let temp7 = new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {});
    let temp8 = new abap.types.Integer({qualifiedName: "I"});
    let lv_id_parent = new abap.types.String({qualifiedName: "STRING"});
    let temp9 = new abap.types.String({qualifiedName: "STRING"});
    let temp10 = new abap.types.Integer({qualifiedName: "I"});
    let lv_column = new abap.types.String({qualifiedName: "STRING"});
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let temp12 = new abap.types.Integer({qualifiedName: "I"});
    lt_event_arguments.set(((await this.client.get().z2ui5_if_client$get())).get().t_event_arg);
    let unique430 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique430, new abap.types.Character(10).set('LINK_CLICK'))) {
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event_arguments,{index: abap.IntegerFactory.get(1),
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_tab_index.set(temp1);
      abap.statements.concatenate({source: [new abap.types.Character(11).set('Link in row'), lv_tab_index, new abap.types.Character(7).set('clicked')], target: lv_message, separatedBy: abap.builtin.space});
      await this.client.get().z2ui5_if_client$message_toast_display({text: lv_message});
    } else if (abap.compare.eq(unique430, new abap.types.Character(12).set('INPUT_CHANGE'))) {
      temp6.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event_arguments,{index: abap.IntegerFactory.get(1),
        into: temp5});
      abap.builtin.sy.get().tabix.set(temp6);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_id_event.set(temp5);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event_arguments,{index: abap.IntegerFactory.get(2),
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_tab_index.set(temp3);
      temp8.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.output,{index: lv_tab_index,
        into: temp7});
      abap.builtin.sy.get().tabix.set(temp8);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      ls_row_submit.set(temp7);
      temp10.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event_arguments,{index: abap.IntegerFactory.get(3),
        into: temp9});
      abap.builtin.sy.get().tabix.set(temp10);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_id_parent.set(temp9);
      temp12.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(lt_event_arguments,{index: abap.IntegerFactory.get(4),
        into: temp11});
      abap.builtin.sy.get().tabix.set(temp12);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      lv_column.set(temp11);
      await this.me.get().calculate_sum({i_column: lv_column});
    } else if (abap.compare.eq(unique430, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
    await this.client.get().z2ui5_if_client$follow_up_action({val: new abap.types.String().set(`sap.z2ui5.afterBE()`)});
    await this.client.get().z2ui5_if_client$view_model_update();
  }
  async render_main_screen() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let table = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp5 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp7 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp9 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp11 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await (await (await (await view.get().shell()).get().page({id: new abap.types.String().set(`page`), title: new abap.types.Character(24).set('abap2UI5 - Demo ui.table'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1})).get().header_content()).get().link()).get().get_parent()));
    await (await page.get()._generic({name: new abap.types.String().set(`script`), ns: new abap.types.String().set(`html`)})).get()._cc_plain_xml({val: new abap.types.String().set(`sap.z2ui5.afterBE = () => {  setTimeout( () => { let input = document.activeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0]; input.focus( ); input.select(); } , 100 ); }`)});
    table.set((await page.get().ui_table({id: new abap.types.String().set(`tab`), alternaterowcolors: new abap.types.Character(4).set('true'), visiblerowcountmode: new abap.types.Character(4).set('Auto'), fixedrowcount: new abap.types.Character(1).set('1'), selectionmode: new abap.types.Character(4).set('None'), rows: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.output}))})));
    columns.set((await table.get().ui_columns()));
    await (await (await (await columns.get().ui_column({width: new abap.types.Character(4).set('8rem'), sortproperty: new abap.types.Character(4).set('TEXT'), filterproperty: new abap.types.Character(4).set('TEXT')})).get().text({text: new abap.types.Character(11).set('Text Column')})).get().ui_template()).get().text({text: new abap.types.String().set(`{TEXT}`)});
    abap.statements.clear(temp5);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${INDEX}`), table: temp5});
    await (await (await (await columns.get().ui_column({width: new abap.types.Character(4).set('8rem'), sortproperty: new abap.types.Character(4).set('LINK'), filterproperty: new abap.types.Character(4).set('LINK')})).get().text({text: new abap.types.Character(11).set('Link Column')})).get().ui_template()).get().link({text: new abap.types.String().set(`{LINK}`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('LINK_CLICK'), t_arg: temp5}))});
    await (await (await (await columns.get().ui_column({width: new abap.types.Character(4).set('8rem'), sortproperty: new abap.types.Character(8).set('CURRENCY'), filterproperty: new abap.types.Character(8).set('CURRENCY')})).get().text({text: new abap.types.Character(15).set('Currency Column')})).get().ui_template()).get().text({text: new abap.types.String().set(`{ parts: [ 'CURRENCY', 'WAERS'],  type: 'sap.ui.model.type.Currency', formatOptions: { currencyCode: false } }`)});
    await (await (await (await columns.get().ui_column({width: new abap.types.Character(4).set('8rem'), sortproperty: new abap.types.Character(8).set('PERCENT1'), filterproperty: new abap.types.Character(8).set('PERCENT1')})).get().text({text: new abap.types.Character(10).set('Percentage')})).get().ui_template()).get().text({text: new abap.types.String().set(`{PERCENT1} %`)});
    abap.statements.clear(temp7);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${INDEX}`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`$event.oSource.oParent.sId`), table: temp7});
    abap.statements.insertInternal({data: new abap.types.String().set(`INPUT1`), table: temp7});
    await (await (await (await columns.get().ui_column({width: new abap.types.Character(4).set('8rem'), sortproperty: new abap.types.Character(6).set('INPUT1'), filterproperty: new abap.types.Character(6).set('INPUT1')})).get().text({text: new abap.types.Character(12).set('Input Column')})).get().ui_template()).get().input({value: new abap.types.String().set(`{INPUT1}`), enabled: new abap.types.String().set(`{BOOL}`), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('INPUT_CHANGE'), t_arg: temp7})), editable: abap.builtin.abap_true, type: new abap.types.Character(6).set('Number')});
    abap.statements.clear(temp9);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp9});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${INDEX}`), table: temp9});
    abap.statements.insertInternal({data: new abap.types.String().set(`$event.oSource.oParent.sId`), table: temp9});
    abap.statements.insertInternal({data: new abap.types.String().set(`INPUT2`), table: temp9});
    await (await (await (await columns.get().ui_column({width: new abap.types.Character(4).set('8rem'), sortproperty: new abap.types.Character(6).set('INPUT2'), filterproperty: new abap.types.Character(6).set('INPUT2')})).get().text({text: new abap.types.Character(12).set('Input Column')})).get().ui_template()).get().input({value: new abap.types.String().set(`{INPUT2}`), enabled: new abap.types.String().set(`{BOOL}`), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('INPUT_CHANGE'), t_arg: temp9})), submit: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('INPUT_SUBMIT')})), editable: abap.builtin.abap_true, type: new abap.types.Character(6).set('Number')});
    abap.statements.clear(temp11);
    abap.statements.insertInternal({data: new abap.types.String().set(`\${$source>/id}`), table: temp11});
    abap.statements.insertInternal({data: new abap.types.String().set(`\${INDEX}`), table: temp11});
    abap.statements.insertInternal({data: new abap.types.String().set(`$event.oSource.oParent.sId`), table: temp11});
    abap.statements.insertInternal({data: new abap.types.String().set(`INPUT3`), table: temp11});
    await (await (await (await columns.get().ui_column({width: new abap.types.Character(4).set('8rem'), sortproperty: new abap.types.Character(6).set('INPUT3'), filterproperty: new abap.types.Character(6).set('INPUT3')})).get().text({text: new abap.types.Character(12).set('Input Column')})).get().ui_template()).get().input({value: new abap.types.String().set(`{INPUT3}`), enabled: new abap.types.String().set(`{BOOL}`), change: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('INPUT_CHANGE'), t_arg: temp11})), editable: abap.builtin.abap_true, type: new abap.types.Character(6).set('Number')});
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.load_output_table();
      await this.render_main_screen();
      return;
    }
    await this.on_event();
  }
  async calculate_sum(INPUT) {
    let i_column = INPUT?.i_column;
    if (i_column?.getQualifiedName === undefined || i_column.getQualifiedName() !== "STRING") { i_column = undefined; }
    if (i_column === undefined) { i_column = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_column); }
    let lv_sum = new abap.types.Integer({qualifiedName: "I"});
    let fs_f_output_ = new abap.types.FieldSymbol(new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {}));
    let fs_f_input_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    for await (const unique431 of abap.statements.loop(this.output,{where: async (I) => {return abap.compare.gt(I.index, abap.IntegerFactory.get(1));}})) {
      fs_f_output_.assign(unique431);
      abap.statements.assign({component: i_column, target: fs_f_input_, source: fs_f_output_});
      lv_sum.set(abap.operators.add(lv_sum,fs_f_input_));
    }
    abap.statements.readTable(this.output,{index: abap.IntegerFactory.get(1),
      assigning: fs_f_output_});
    abap.statements.assign({component: i_column, target: fs_f_input_, source: fs_f_output_});
    fs_f_input_.set(lv_sum);
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_172'] = z2ui5_cl_demo_app_172;
z2ui5_cl_demo_app_172.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_172.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_172.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_172.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_172.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_172.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_172.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_172.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_172.ty_output = new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {});
z2ui5_cl_demo_app_172.temp1_80db87fdfc = abap.types.TableFactory.construct(new abap.types.Structure({"index": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INDEX"}), "text": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-text"}), "link": new abap.types.Character(30, {"qualifiedName":"z2ui5_cl_demo_app_172=>ty_output-link"}), "currency": new abap.types.Packed({length: 13, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-currency"}), "percent1": new abap.types.Packed({length: 3, decimals: 2, qualifiedName: "z2ui5_cl_demo_app_172=>ty_output-percent1"}), "input1": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT1"}), "input2": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT2"}), "input3": new abap.types.Integer({qualifiedName: "Z2UI5_CL_DEMO_APP_172=>TY_OUTPUT-INPUT3"}), "bool": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "waers": new abap.types.Character(5, {"qualifiedName":"WAERS","ddicName":"WAERS"})}, "z2ui5_cl_demo_app_172=>ty_output", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_172=>temp1_80db87fdfc");
export {z2ui5_cl_demo_app_172};
//# sourceMappingURL=z2ui5_cl_demo_app_172.clas.mjs.map