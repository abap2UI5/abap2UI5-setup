const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_132.clas.abap
class z2ui5_cl_demo_app_132 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_132';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_VIEW_DISPLAY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_PARENT_VIEW": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_PERC": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"GET_COMP": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "is_optional": " "}}},
  "ON_INIT": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "RENDER_MAIN": {"visibility": "O", "parameters": {}},
  "SET_APP_DATA": {"visibility": "U", "parameters": {"COUNT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TABLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_view_display = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mo_parent_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.mv_perc = new abap.types.String({qualifiedName: "STRING"});
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
  async get_comp() {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let index = new abap.types.Integer({qualifiedName: "INT4"});
    let typedesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let structdesc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let comp = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let com = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let root = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    let temp2 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp3 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
    let temp4 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
    let component = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    try {
      try {
        try {
          typedesc.set(await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: new abap.types.Character(15).set('Z2UI5_T_UTIL_01')}));
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
          await abap.statements.cast(temp1, typedesc);
          structdesc.set(temp1);
          comp.set((await structdesc.get().get_components()));
          for await (const unique382 of abap.statements.loop(comp)) {
            com.set(unique382);
            if (abap.compare.eq(com.get().as_include, abap.builtin.abap_false)) {
              abap.statements.append({source: com, target: result});
            }
          }
        } catch (e) {
          if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
            root.set(e);
          } else {
            throw e;
          }
        }
        abap.statements.clear(temp2);
        temp3.get().name.set(new abap.types.Character(6).set('ROW_ID'));
        await abap.statements.cast(temp4, (await abap.Classes['CL_ABAP_DATADESCR'].describe_by_data({p_data: index})));
        temp3.get().type.set(temp4);
        abap.statements.insertInternal({data: temp3, table: temp2});
        component.set(temp2);
        abap.statements.append({source: component, lines: true, target: result});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
      return result;
    }
    async on_event() {
      let unique383 = ((await this.client.get().z2ui5_if_client$get())).get().event;
      if (abap.compare.eq(unique383, new abap.types.Character(4).set('BACK'))) {
        await this.client.get().z2ui5_if_client$nav_app_leave();
      }
    }
    async on_init() {
      await this.render_main();
    }
    async render_main() {
      let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
      let layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
      if (abap.compare.initial(this.mo_parent_view)) {
        page.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      } else {
        page.set((await this.mo_parent_view.get().get({name: new abap.types.String().set(`Page`)})));
      }
      layout.set((await page.get().vertical_layout({class: new abap.types.String().set(`sapUiContentPadding`), width: new abap.types.String().set(`100%`)})));
      await (await layout.get().label({text: new abap.types.Character(17).set('ProgressIndicator')})).get().progress_indicator({percentvalue: this.mv_perc, displayvalue: new abap.types.Character(19).set('0,44GB of 32GB used'), showvalue: abap.builtin.abap_true, state: new abap.types.Character(7).set('Success')});
      if (abap.compare.initial(this.mo_parent_view)) {
        await this.client.get().z2ui5_if_client$view_display({val: (await (await page.get().get_root()).get().xml_get())});
      } else {
        this.mv_view_display.set(abap.builtin.abap_true);
      }
    }
    async set_app_data(INPUT) {
      let count = INPUT?.count;
      if (count?.getQualifiedName === undefined || count.getQualifiedName() !== "STRING") { count = undefined; }
      if (count === undefined) { count = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.count); }
      let table = INPUT?.table;
      if (table?.getQualifiedName === undefined || table.getQualifiedName() !== "STRING") { table = undefined; }
      if (table === undefined) { table = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table); }
      this.mv_perc.set(count);
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
  }
  abap.Classes['Z2UI5_CL_DEMO_APP_132'] = z2ui5_cl_demo_app_132;
  z2ui5_cl_demo_app_132.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_132.z2ui5_if_app$version.set('1.135.0');
  z2ui5_cl_demo_app_132.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_132.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
  z2ui5_cl_demo_app_132.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_132.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
  z2ui5_cl_demo_app_132.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
  z2ui5_cl_demo_app_132.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_demo_app_132};
//# sourceMappingURL=z2ui5_cl_demo_app_132.clas.mjs.map