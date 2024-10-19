const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_084.clas.abap
class z2ui5_cl_demo_app_084 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_084';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"SCREEN": {"type": () => {return new abap.types.Structure({"check_is_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "colour": new abap.types.String({qualifiedName: "STRING"}), "combo_key": new abap.types.String({qualifiedName: "STRING"}), "combo_key2": new abap.types.String({qualifiedName: "STRING"}), "segment_key": new abap.types.String({qualifiedName: "STRING"}), "date": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"}), "time_start": new abap.types.String({qualifiedName: "STRING"}), "time_end": new abap.types.String({qualifiedName: "STRING"}), "check_switch_01": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_switch_02": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SUGGESTION": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_084=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_084=>temp1_c1d7389a64");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"Z2UI5_ON_RENDERING": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "O", "parameters": {}},
  "Z2UI5_ON_INIT": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.screen = new abap.types.Structure({"check_is_active": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "colour": new abap.types.String({qualifiedName: "STRING"}), "combo_key": new abap.types.String({qualifiedName: "STRING"}), "combo_key2": new abap.types.String({qualifiedName: "STRING"}), "segment_key": new abap.types.String({qualifiedName: "STRING"}), "date": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"}), "time_start": new abap.types.String({qualifiedName: "STRING"}), "time_end": new abap.types.String({qualifiedName: "STRING"}), "check_switch_01": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "check_switch_02": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, undefined, undefined, {}, {});
    this.screen.get().check_switch_01.set(' ');
    this.screen.get().check_switch_02.set(' ');
    this.mt_suggestion = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_084=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_084=>temp1_c1d7389a64");
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let lv_script = new abap.types.String({qualifiedName: "STRING"});
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      lv_script.set(abap.operators.concat(new abap.types.String().set(``),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`function setInputFIlter(){`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` var inp = sap.z2ui5.oView.byId('suggInput');`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` inp.setFilterFunction(function(sValue, oItem){`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   var aSplit = sValue.split(" ");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   if (aSplit.length > 0) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     var sTermNew = aSplit.slice(-1)[0];`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     sTermNew.trim();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     if (sTermNew) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`       return oItem.getText().match(new RegExp(sTermNew, "i"));`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`     }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`   }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(` });`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`}`))))))))))))))))))))))))))));
      await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get()._z2ui5()).get().timer({finished: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`START`)}))})).get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`script`)})).get()._cc_plain_xml({val: lv_script})).get().stringify())});
      await this.z2ui5_on_init();
      return;
    }
    await this.z2ui5_on_event();
  }
  async z2ui5_on_event() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let unique313 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique313, new abap.types.Character(5).set('START'))) {
      await this.z2ui5_on_rendering();
    } else if (abap.compare.eq(unique313, new abap.types.Character(14).set('BUTTON_MCUSTOM'))) {
      abap.statements.clear(temp1);
      abap.statements.insertInternal({data: new abap.types.String().set(`First Button`), table: temp1});
      abap.statements.insertInternal({data: new abap.types.String().set(`Second Button`), table: temp1});
      await this.client.get().z2ui5_if_client$message_box_display({type: new abap.types.Character(1).set(''), text: new abap.types.Character(17).set('Custom MessageBox'), icon: new abap.types.String().set(`SUCCESS`), title: new abap.types.Character(17).set('Custom MessageBox'), actions: temp1, emphasizedaction: new abap.types.String().set(`First Button`), onclose: new abap.types.String().set(`callMessageToast()`), details: new abap.types.String().set(`<h3>these are details</h3>`)});
    } else if (abap.compare.eq(unique313, new abap.types.Character(15).set('BUTTON_MCONFIRM'))) {
      await this.client.get().z2ui5_if_client$message_box_display({type: new abap.types.Character(7).set('confirm'), text: new abap.types.Character(18).set('Confirm MessageBox')});
    } else if (abap.compare.eq(unique313, new abap.types.Character(13).set('BUTTON_MALERT'))) {
      await this.client.get().z2ui5_if_client$message_box_display({type: new abap.types.Character(5).set('alert'), text: new abap.types.Character(16).set('Alert MessageBox')});
    } else if (abap.compare.eq(unique313, new abap.types.Character(13).set('BUTTON_MERROR'))) {
      await this.client.get().z2ui5_if_client$message_box_display({type: new abap.types.Character(5).set('error'), text: new abap.types.Character(16).set('Error MessageBox')});
    } else if (abap.compare.eq(unique313, new abap.types.Character(12).set('BUTTON_MINFO'))) {
      await this.client.get().z2ui5_if_client$message_box_display({type: new abap.types.Character(11).set('information'), text: new abap.types.Character(22).set('Information MessageBox')});
    } else if (abap.compare.eq(unique313, new abap.types.Character(15).set('BUTTON_MWARNING'))) {
      await this.client.get().z2ui5_if_client$message_box_display({type: new abap.types.Character(7).set('warning'), text: new abap.types.Character(18).set('Warning MessageBox')});
    } else if (abap.compare.eq(unique313, new abap.types.Character(15).set('BUTTON_MSUCCESS'))) {
      await this.client.get().z2ui5_if_client$message_box_display({type: new abap.types.Character(7).set('success'), text: new abap.types.Character(18).set('Success MessageBox'), icon: new abap.types.String().set(`sap-icon://accept`)});
    } else if (abap.compare.eq(unique313, new abap.types.Character(11).set('BUTTON_SEND'))) {
      await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.Character(35).set('success - values send to the server')});
    } else if (abap.compare.eq(unique313, new abap.types.Character(12).set('BUTTON_CLEAR'))) {
      abap.statements.clear(this.screen);
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.Character(16).set('View initialized')});
    } else if (abap.compare.eq(unique313, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async z2ui5_on_init() {
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_084=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_084=>temp1_c1d7389a64");
    let temp4 = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_084=>s_suggestion_items", undefined, {}, {});
    abap.statements.clear(this.screen);
    this.screen.get().check_is_active.set(abap.builtin.abap_true);
    this.screen.get().colour.set(new abap.types.Character(4).set('BLUE'));
    this.screen.get().combo_key.set(new abap.types.Character(4).set('GRAY'));
    this.screen.get().segment_key.set(new abap.types.Character(5).set('GREEN'));
    this.screen.get().date.set(new abap.types.Character(8).set('07.12.22'));
    this.screen.get().date_time.set(new abap.types.Character(20).set('23.12.2022, 19:27:20'));
    this.screen.get().time_start.set(new abap.types.Character(8).set('05:24:00'));
    this.screen.get().time_end.set(new abap.types.Character(8).set('17:23:57'));
    abap.statements.clear(temp3);
    temp4.get().descr.set(new abap.types.Character(5).set('Green'));
    temp4.get().value.set(new abap.types.Character(5).set('GREEN'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().descr.set(new abap.types.Character(4).set('Blue'));
    temp4.get().value.set(new abap.types.Character(4).set('BLUE'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().descr.set(new abap.types.Character(5).set('Black'));
    temp4.get().value.set(new abap.types.Character(5).set('BLACK'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().descr.set(new abap.types.Character(4).set('Gray'));
    temp4.get().value.set(new abap.types.Character(4).set('GRAY'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().descr.set(new abap.types.Character(5).set('Blue2'));
    temp4.get().value.set(new abap.types.Character(5).set('BLUE2'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().descr.set(new abap.types.Character(5).set('Blue3'));
    temp4.get().value.set(new abap.types.Character(5).set('BLUE3'));
    abap.statements.insertInternal({data: temp4, table: temp3});
    this.mt_suggestion.set(temp3);
  }
  async z2ui5_on_rendering() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let grid = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await view.get()._generic({name: new abap.types.String().set(`script`), ns: new abap.types.String().set(`html`)})).get()._cc_plain_xml({val: new abap.types.String().set(`function callMessageToast(sAction) { sap.m.MessageToast.show('Hello there !!'); }`)});
    temp1.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.abap_false, ((await this.client.get().z2ui5_if_client$get())).get().check_launchpad_active)));
    temp2.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({showheader: temp1, title: new abap.types.Character(35).set('abap2UI5 - Selection-Screen Example'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
    grid.set((await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
    await (await (await (await (await (await (await (await grid.get().simple_form({title: new abap.types.Character(5).set('Input'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(27).set('Input with suggestion items')})).get().input({id: new abap.types.String().set(`suggInput`), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.screen.get().colour})), placeholder: new abap.types.Character(27).set('Fill in your favorite color'), suggestionitems: (await this.client.get().z2ui5_if_client$_bind({val: this.mt_suggestion})), showsuggestion: abap.builtin.abap_true})).get().get()).get().suggestion_items()).get().get()).get().list_item({text: new abap.types.Character(7).set('{VALUE}'), additionaltext: new abap.types.Character(7).set('{DESCR}')});
    await (await (await (await (await (await (await (await (await (await (await (await (await page.get().footer()).get().overflow_toolbar()).get().text({text: new abap.types.String().set(`MessageBox Types`)})).get().button({text: new abap.types.Character(7).set('Confirm'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_MCONFIRM')}))})).get().button({text: new abap.types.Character(5).set('Alert'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_MALERT')}))})).get().button({text: new abap.types.Character(5).set('Error'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(13).set('BUTTON_MERROR')}))})).get().button({text: new abap.types.Character(11).set('Information'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('BUTTON_MINFO')}))})).get().button({text: new abap.types.Character(7).set('Warning'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_MWARNING')}))})).get().button({text: new abap.types.Character(7).set('Success'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(15).set('BUTTON_MSUCCESS')}))})).get().button({text: new abap.types.Character(6).set('Custom'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('BUTTON_MCUSTOM')}))})).get().toolbar_spacer()).get().button({text: new abap.types.Character(5).set('Clear'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('BUTTON_CLEAR')})), type: new abap.types.Character(6).set('Reject'), icon: new abap.types.Character(17).set('sap-icon://delete')})).get().button({text: new abap.types.Character(14).set('Send to Server'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(11).set('BUTTON_SEND')})), type: new abap.types.Character(7).set('Success')});
    await (await view.get()._generic({name: new abap.types.String().set(`script`), ns: new abap.types.String().set(`html`)})).get()._cc_plain_xml({val: new abap.types.String().set(`setInputFIlter()`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_084'] = z2ui5_cl_demo_app_084;
z2ui5_cl_demo_app_084.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_084.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_084.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_084.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_084.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_084.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_084.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_084.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_084.s_suggestion_items = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_084=>s_suggestion_items", undefined, {}, {});
z2ui5_cl_demo_app_084.temp1_c1d7389a64 = abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_SUGGESTION_ITEMS-DESCR"})}, "z2ui5_cl_demo_app_084=>s_suggestion_items", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_084=>temp1_c1d7389a64");
z2ui5_cl_demo_app_084.s_combobox = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_084=>s_combobox", undefined, {}, {});
z2ui5_cl_demo_app_084.ty_t_combo = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_COMBOBOX-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_084=>S_COMBOBOX-TEXT"})}, "z2ui5_cl_demo_app_084=>s_combobox", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_084=>ty_t_combo");
export {z2ui5_cl_demo_app_084};
//# sourceMappingURL=z2ui5_cl_demo_app_084.clas.mjs.map