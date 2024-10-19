const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_194.clas.abap
class z2ui5_cl_demo_app_194 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_194';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_VIEW_DISPLAY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_PARENT_VIEW": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TABLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TABLE_TMP": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_TABLE_ROW": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_COMP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MS_FIXVAL": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"GET_DATA": {"visibility": "I", "parameters": {}},
  "GET_COMP": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "is_optional": " "}}},
  "GET_FIXVAL": {"visibility": "I", "parameters": {}},
  "ON_INIT": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "RENDER_MAIN": {"visibility": "O", "parameters": {}},
  "SET_APP_DATA": {"visibility": "U", "parameters": {"COUNT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TABLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_view_display = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mo_parent_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.mv_table = new abap.types.String({qualifiedName: "STRING"});
    this.mt_table = new abap.types.DataReference(new abap.types.Character(4));
    this.mt_table_tmp = new abap.types.DataReference(new abap.types.Character(4));
    this.ms_table_row = new abap.types.DataReference(new abap.types.Character(4));
    this.mt_comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    this.ms_fixval = new abap.types.DataReference(new abap.types.Character(4));
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
  async on_event() {
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let temp1 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let comp = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let fs_val_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let unique471 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique471, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    } else if (abap.compare.eq(unique471, new abap.types.Character(6).set('BUTTON'))) {
      for await (const unique472 of abap.statements.loop(this.mt_comp)) {
        comp.assign(unique472);
        abap.statements.assign({target: fs_row_, source: this.ms_table_row.dereference()});
        abap.statements.assign({component: comp.get().name, target: fs_val_, source: fs_row_});
        if (abap.compare.assigned(fs_val_) === false) {
          continue;
        } else {
          await this.client.get().z2ui5_if_client$_bind({val: fs_val_});
        }
      }
    }
  }
  async on_init() {
    await this.get_data();
    await this.render_main();
  }
  async render_main() {
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let fs_tab_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let table = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let columns = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let comp = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let cells = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.initial(this.mo_parent_view)) {
      page.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    } else {
      page.set((await this.mo_parent_view.get().get({name: new abap.types.String().set(`Page`)})));
    }
    abap.statements.assign({target: fs_tab_, source: this.mt_table.dereference()});
    table.set((await page.get().table({growing: new abap.types.Character(4).set('true'), width: new abap.types.Character(4).set('auto'), items: (await this.client.get().z2ui5_if_client$_bind({val: fs_tab_}))})));
    columns.set((await table.get().columns()));
    for await (const unique473 of abap.statements.loop(this.mt_comp)) {
      comp.set(unique473);
      await (await columns.get().column()).get().text({text: comp.get().name});
    }
    cells.set((await (await (await (await columns.get().get_parent()).get().items()).get().column_list_item({valign: new abap.types.Character(6).set('Middle'), type: new abap.types.Character(10).set('Navigation')})).get().cells()));
    for await (const unique474 of abap.statements.loop(this.mt_comp)) {
      comp.set(unique474);
      await cells.get().object_identifier({text: abap.operators.concat(new abap.types.Character(1).set('{'),abap.operators.concat(comp.get().name,new abap.types.Character(1).set('}')))});
    }
    await (await (await (await page.get().footer()).get().overflow_toolbar()).get().toolbar_spacer()).get().button({text: new abap.types.Character(4).set('Save'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(6).set('BUTTON')})), type: new abap.types.Character(7).set('Success')});
    if (abap.compare.initial(this.mo_parent_view)) {
      await this.client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
    } else {
      this.mv_view_display.set(abap.builtin.abap_true);
    }
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.on_init();
    }
    await this.on_event();
  }
  async set_app_data(INPUT) {
    let count = INPUT?.count;
    if (count?.getQualifiedName === undefined || count.getQualifiedName() !== "STRING") { count = undefined; }
    if (count === undefined) { count = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.count); }
    let table = INPUT?.table;
    if (table?.getQualifiedName === undefined || table.getQualifiedName() !== "STRING") { table = undefined; }
    if (table === undefined) { table = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table); }
    this.mv_table.set(table);
  }
  async get_data() {
    let fs_table_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let fs_table_tmp_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let new_struct_desc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let new_table_desc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
    this.mt_comp.set((await this.get_comp()));
    try {
      new_struct_desc.set((await abap.Classes['CL_ABAP_STRUCTDESCR'].create({p_components: this.mt_comp})));
      new_table_desc.set((await abap.Classes['CL_ABAP_TABLEDESCR'].create({p_line_type: new_struct_desc, p_table_kind: abap.Classes['CL_ABAP_TABLEDESCR'].tablekind_std})));
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: new_table_desc, dref: this.mt_table});
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: new_table_desc, dref: this.mt_table_tmp});
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: new_struct_desc, dref: this.ms_table_row});
      abap.statements.assign({target: fs_table_, source: this.mt_table.dereference()});
      await abap.statements.select(fs_table_, {select: "SELECT * FROM " + abap.buildDbTableName(this.mv_table.get().trimEnd().toLowerCase()) + " UP TO " + abap.IntegerFactory.get(100).get() + " ROWS"});
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
      } else {
        throw e;
      }
    }
    abap.statements.assign({target: fs_table_tmp_, source: this.mt_table_tmp.dereference()});
    fs_table_tmp_.set(fs_table_);
    await this.get_fixval();
  }
  async get_fixval() {
    
    let comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let structdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let lt_fixval = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.String({qualifiedName: "FIXVALUE-LOW"}), "high": new abap.types.String({qualifiedName: "FIXVALUE-HIGH"}), "option": new abap.types.String({qualifiedName: "FIXVALUE-OPTION"}), "ddlanguage": new abap.types.String({qualifiedName: "FIXVALUE-DDLANGUAGE"}), "ddtext": new abap.types.String({qualifiedName: "FIXVALUE-DDTEXT"})}, "fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "fixvalues");
    let temp2 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let dfies = new abap.types.DataReference(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp4 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
    for await (const unique475 of abap.statements.loop(this.mt_comp)) {
      dfies.assign(unique475);
      abap.statements.clear(temp3);
      temp3.set(comp);
      temp4.get().name.set(dfies.get().name);
      await abap.statements.cast(temp1, (await abap.Classes['CL_ABAP_DATADESCR'].describe_by_data({p_data: lt_fixval})));
      temp4.get().type.set(temp1);
      abap.statements.insertInternal({data: temp4, table: temp3});
      comp.set(temp3);
    }
    structdescr.set((await abap.Classes['CL_ABAP_STRUCTDESCR'].create({p_components: comp})));
    if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
    await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: structdescr, dref: this.ms_fixval});
  }
  async get_comp() {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let index = new abap.types.Integer({qualifiedName: "INT4"});
    let typedesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
    let temp5 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let structdesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let com = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let temp6 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp7 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
    let component = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    try {
      try {
        try {
          typedesc.set(await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: this.mv_table}));
          abap.builtin.sy.get().subrc.set(0);
        } catch (e) {
          if (e.classic) {
              switch (e.classic.toUpperCase()) {
              case "TYPE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
              default: abap.builtin.sy.get().subrc.set(2); break;
                }
            } else {
                throw e;
            }
          }
          await abap.statements.cast(temp5, typedesc);
          structdesc.set(temp5);
          comp.set((await structdesc.get().get_components()));
          for await (const unique476 of abap.statements.loop(comp)) {
            com.set(unique476);
            if (abap.compare.eq(com.get().as_include, abap.builtin.abap_false)) {
              abap.statements.append({source: com, target: result});
            }
          }
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          } else {
            throw e;
          }
        }
        abap.statements.clear(temp6);
        temp7.get().name.set(new abap.types.Character(6).set('ROW_ID'));
        await abap.statements.cast(temp2, (await abap.Classes['CL_ABAP_DATADESCR'].describe_by_data({p_data: index})));
        temp7.get().type.set(temp2);
        abap.statements.insertInternal({data: temp7, table: temp6});
        component.set(temp6);
        abap.statements.append({source: component, lines: true, target: result});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
      return result;
    }
  }
  abap.Classes['Z2UI5_CL_DEMO_APP_194'] = z2ui5_cl_demo_app_194;
  z2ui5_cl_demo_app_194.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_194.z2ui5_if_app$version.set('1.135.0');
  z2ui5_cl_demo_app_194.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_194.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
  z2ui5_cl_demo_app_194.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_194.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
  z2ui5_cl_demo_app_194.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_194.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_194};
//# sourceMappingURL=z2ui5_cl_demo_app_194.clas.mjs.map