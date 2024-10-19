const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_231.clas.abap
class z2ui5_cl_demo_app_231 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_231';
  static IMPLEMENTED_INTERFACES = ["IF_SERIALIZABLE_OBJECT","Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"DRS1": {"type": () => {return new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DRS2": {"type": () => {return new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DRS3": {"type": () => {return new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DRS4": {"type": () => {return new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "DRS5": {"type": () => {return new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MINDATE": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MAXDATE": {"type": () => {return new abap.types.Date({qualifiedName: "D"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"DISPLAY_VIEW": {"visibility": "I", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}},
  "INITIALIZE": {"visibility": "I", "parameters": {}},
  "ON_EVENT": {"visibility": "I", "parameters": {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.drs1 = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
    this.drs2 = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
    this.drs3 = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
    this.drs4 = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
    this.drs5 = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
    this.mindate = new abap.types.Date({qualifiedName: "D"});
    this.mindate.set('20160101');
    this.maxdate = new abap.types.Date({qualifiedName: "D"});
    this.maxdate.set('20161231');
    this.text = new abap.types.String({qualifiedName: "STRING"});
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
  async display_view(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let vbox = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp4 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp6 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp8 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp10 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    abap.statements.clear(temp1);
    temp1.get().n.set(new abap.types.String().set(`core:require`));
    temp1.get().v.set(new abap.types.String().set(`{Helper:'z2ui5/Util'}`));
    await view.get()._generic_property({val: temp1});
    temp3.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(39).set('abap2UI5 - Sample: Date Range Selection'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp3})));
    await (await page.get().header_content()).get().link({text: new abap.types.Character(12).set('UI5 Demo Kit'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.Character(109).set('https://sapui5.hana.ondemand.com/sdk/#/entity/sap.m.DateRangeSelection/sample/sap.m.sample.DateRangeSelection')});
    vbox.set((await page.get().vbox()));
    abap.statements.clear(temp2);
    abap.statements.insertInternal({data: new abap.types.String().set(`DRS2`), table: temp2});
    await (await vbox.get().label({text: new abap.types.String().set(`DateRangeSelection displayFormat 'yyyy/MM/dd', set via binding:`), labelfor: new abap.types.String().set(`DRS1`)})).get().date_range_selection({id: new abap.types.Character(4).set('DRS1'), displayformat: new abap.types.Character(10).set('yyyy/MM/dd'), change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('handleChange'), t_arg: temp2})), datevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs1.get().start})),new abap.types.Character(3).set(') }'))), seconddatevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs1.get().end})),new abap.types.Character(3).set(') }')))});
    abap.statements.clear(temp4);
    abap.statements.insertInternal({data: new abap.types.String().set(`DRS2`), table: temp4});
    await (await vbox.get().label({text: new abap.types.String().set(`DateRangeSelection with minDate=2016-01-01 and maxDate=2016-12-31:`), labelfor: new abap.types.String().set(`DRS2`)})).get().date_range_selection({id: new abap.types.Character(4).set('DRS2'), mindate: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.mindate})),new abap.types.Character(3).set(') }'))), maxdate: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.maxdate})),new abap.types.Character(3).set(') }'))), change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('handleChange'), t_arg: temp4})), datevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs2.get().start})),new abap.types.Character(3).set(') }'))), seconddatevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs2.get().end})),new abap.types.Character(3).set(') }')))});
    abap.statements.clear(temp6);
    abap.statements.insertInternal({data: new abap.types.String().set(`DRS3`), table: temp6});
    await (await vbox.get().label({text: new abap.types.String().set(`DateRangeSelection with OK button in the footer and with shortcut for today:"`), labelfor: new abap.types.String().set(`DRS3`)})).get().date_range_selection({id: new abap.types.Character(4).set('DRS3'), showcurrentdatebutton: abap.builtin.abap_true, showfooter: abap.builtin.abap_true, change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('handleChange'), t_arg: temp6})), datevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs3.get().start})),new abap.types.Character(3).set(') }'))), seconddatevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs3.get().end})),new abap.types.Character(3).set(') }')))});
    abap.statements.clear(temp8);
    abap.statements.insertInternal({data: new abap.types.String().set(`DRS4`), table: temp8});
    await (await vbox.get().label({text: new abap.types.String().set(`DateRangeSelection with displayFormat 'MM/yyyy':`), labelfor: new abap.types.String().set(`DRS3`)})).get().date_range_selection({id: new abap.types.Character(4).set('DRS4'), change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('handleChange'), t_arg: temp8})), displayformat: new abap.types.Character(7).set('MM/yyyy'), datevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs4.get().start})),new abap.types.Character(3).set(') }'))), seconddatevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs4.get().end})),new abap.types.Character(3).set(') }')))});
    abap.statements.clear(temp10);
    abap.statements.insertInternal({data: new abap.types.String().set(`DRS5`), table: temp10});
    await (await vbox.get().label({text: new abap.types.String().set(`DateRangeSelection with displayFormat 'MM/yyyy':`), labelfor: new abap.types.String().set(`DRS3`)})).get().date_range_selection({id: new abap.types.Character(4).set('DRS5'), change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(12).set('handleChange'), t_arg: temp10})), displayformat: new abap.types.Character(4).set('yyyy'), datevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs5.get().start})),new abap.types.Character(3).set(') }'))), seconddatevalue: abap.operators.concat(new abap.types.String().set(`{= Helper.DateCreateObject($`),abap.operators.concat((await client.get().z2ui5_if_client$_bind({val: this.drs5.get().end})),new abap.types.Character(3).set(') }')))});
    await vbox.get().label({text: new abap.types.Character(12).set('Change event'), labelfor: new abap.types.Character(9).set('TextEvent')});
    await vbox.get().text({id: new abap.types.Character(9).set('TextEvent'), text: (await client.get().z2ui5_if_client$_bind_edit({val: this.text}))});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
  async initialize() {
    this.drs1.get().start.set(new abap.types.Character(8).set('20140202'));
    this.drs1.get().end.set(new abap.types.Character(8).set('20140217'));
    this.drs2.get().start.set(new abap.types.Character(8).set('20160216'));
    this.drs2.get().end.set(new abap.types.Character(8).set('20160218'));
    this.drs3.get().start.set(new abap.types.Character(8).set('20140202'));
    this.drs3.get().end.set(new abap.types.Character(8).set('20140217'));
    this.drs4.get().start.set(new abap.types.Character(8).set('20190401'));
    this.drs4.get().end.set(new abap.types.Character(8).set('20191001'));
    this.drs5.get().start.set(new abap.types.Character(8).set('20150101'));
    this.drs5.get().end.set(new abap.types.Character(8).set('20191001'));
  }
  async on_event(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let args = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let source = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let fs_drs_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let temp12 = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
    let drs = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
    let unique526 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique526, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique526, new abap.types.Character(12).set('handleChange'))) {
      args.set(((await client.get().z2ui5_if_client$get())).get().t_event_arg);
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(args,{index: abap.IntegerFactory.get(1),
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), abap.IntegerFactory.get(0)));
      }
      source.set(temp1);
      abap.statements.assign({target: fs_drs_, dynamicName: 'me' + '->' + source.get(), dynamicSource: (() => {
                  try { return this.me; } catch {}
                  try { return this.this.me; } catch {}
                })()});
        abap.statements.clear(temp12);
        abap.statements.moveCorresponding(fs_drs_, temp12);
        drs.set(temp12);
        this.text.set(abap.operators.concat(new abap.types.String().set(`Id: ${abap.templateFormatting(source)}\n`),abap.operators.concat(new abap.types.String().set(`From: ${abap.templateFormatting(drs.get().start)}\n`),new abap.types.String().set(`To: ${abap.templateFormatting(drs.get().end)}`))));
      }
    }
    async z2ui5_if_app$main(INPUT) {
      let client = INPUT?.client;
      if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
      if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
      if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
        this.check_initialized.set(abap.builtin.abap_true);
        await this.initialize();
        await this.display_view({client: client});
      } else {
        await client.get().z2ui5_if_client$view_model_update();
      }
      await this.on_event({client: client});
    }
  }
  abap.Classes['Z2UI5_CL_DEMO_APP_231'] = z2ui5_cl_demo_app_231;
  z2ui5_cl_demo_app_231.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_231.z2ui5_if_app$version.set('1.135.0');
  z2ui5_cl_demo_app_231.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_231.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
  z2ui5_cl_demo_app_231.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_231.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
  z2ui5_cl_demo_app_231.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_231.z2ui5_if_app$license.set('MIT');
  z2ui5_cl_demo_app_231.t_drs = new abap.types.Structure({"start": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-START"}), "end": new abap.types.Date({qualifiedName: "Z2UI5_CL_DEMO_APP_231=>T_DRS-END"})}, "z2ui5_cl_demo_app_231=>t_drs", undefined, {}, {});
export {z2ui5_cl_demo_app_231};
//# sourceMappingURL=z2ui5_cl_demo_app_231.clas.mjs.map