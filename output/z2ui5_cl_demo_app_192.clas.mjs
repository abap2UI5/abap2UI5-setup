await import("./z2ui5_cl_demo_app_192.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_192.clas.abap
class z2ui5_cl_demo_app_192 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_192';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_NEW_DATA2": {"type": () => {return abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_193", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_193"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_OUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"aa": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-AA"}), "bb": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-BB"}), "cc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-CC"})}, "z2ui5_cl_demo_app_192=>ty_s_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_out");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"GET_DATA": {"visibility": "O", "parameters": {}},
  "XML_PARSE": {"visibility": "O", "parameters": {}},
  "XML_STRINGIFY": {"visibility": "O", "parameters": {}},
  "UI5_DISPLAY": {"visibility": "U", "parameters": {}},
  "UI5_EVENT": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mt_new_data2 = abap.types.TableFactory.construct(new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_193", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_193"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.mt_out = abap.types.TableFactory.construct(new abap.types.Structure({"aa": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-AA"}), "bb": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-BB"}), "cc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-CC"})}, "z2ui5_cl_demo_app_192=>ty_s_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_out");
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
  async ui5_event() {
    let unique467 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique467, new abap.types.Character(4).set('BACK'))) {
      await this.client.get().z2ui5_if_client$nav_app_leave();
    }
  }
  async ui5_display() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    await (await (await view.get().shell()).get().page({title: new abap.types.Character(3).set('xxx'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})).get().header_content();
    await this.client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    await this.xml_parse();
    this.me.get().client.set(client);
    await this.get_data();
    await this.ui5_display();
    await this.xml_stringify();
  }
  async get_data() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"aa": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-AA"}), "bb": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-BB"}), "cc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-CC"})}, "z2ui5_cl_demo_app_192=>ty_s_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_out");
    let temp2 = new abap.types.Structure({"aa": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-AA"}), "bb": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-BB"}), "cc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-CC"})}, "z2ui5_cl_demo_app_192=>ty_s_out", undefined, {}, {});
    let kopf = new abap.types.DataReference(abap.types.TableFactory.construct(new abap.types.Structure({"aa": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-AA"}), "bb": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-BB"}), "cc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-CC"})}, "z2ui5_cl_demo_app_192=>ty_s_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_out"));
    let lr_structdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let lr_tabdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
    let fs_fs_s_head_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_fs_t_head_new_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
    let fs_fs_s_head_new_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let lo_new_data = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_193", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_193"});
    abap.statements.clear(temp1);
    temp2.get().aa.set(new abap.types.Character(2).set('aa'));
    temp2.get().bb.set(new abap.types.Character(2).set('bb'));
    temp2.get().cc.set(new abap.types.Character(2).set('cc'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().aa.set(new abap.types.Character(2).set('a1'));
    temp2.get().bb.set(new abap.types.Character(2).set('b1'));
    temp2.get().cc.set(new abap.types.Character(2).set('c1'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_out.set(temp1);
    kopf.assign(this.mt_out);
    for await (const unique468 of abap.statements.loop(kopf.dereference())) {
      fs_fs_s_head_.assign(unique468);
      lo_new_data.set(await (new abap.Classes['Z2UI5_CL_DEMO_APP_193']()).constructor_());
      abap.statements.insertInternal({data: lo_new_data, table: this.mt_new_data2});
      await abap.statements.cast(lr_structdescr, (await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_data({p_data: fs_fs_s_head_})));
      await abap.statements.cast(lr_tabdescr, (await abap.Classes['CL_ABAP_TABLEDESCR'].create({p_line_type: lr_structdescr})));
      if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
      await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: lr_tabdescr, dref: lo_new_data.get().mt_kopf});
      abap.statements.assign({target: fs_fs_t_head_new_, source: lo_new_data.get().mt_kopf.dereference()});
      fs_fs_s_head_new_.assign(fs_fs_t_head_new_.appendInitial());
      abap.statements.moveCorresponding(fs_fs_s_head_, fs_fs_s_head_new_);
    }
  }
  async xml_parse() {
    let lo_data = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_193", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_193"});
    for await (const unique469 of abap.statements.loop(this.mt_new_data2)) {
      lo_data.set(unique469);
      await lo_data.get().xml_parse();
    }
  }
  async xml_stringify() {
    let lo_data = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_DEMO_APP_193", RTTIName: "\\CLASS=Z2UI5_CL_DEMO_APP_193"});
    for await (const unique470 of abap.statements.loop(this.mt_new_data2)) {
      lo_data.set(unique470);
      await lo_data.get().xml_stringify();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_192'] = z2ui5_cl_demo_app_192;
z2ui5_cl_demo_app_192.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_192.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_192.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_192.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_192.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_192.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_192.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_192.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_192.ty_s_key_value = new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_192=>ty_s_key_value", undefined, {}, {});
z2ui5_cl_demo_app_192.ty_t_key_values = abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_192=>ty_s_key_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_key_values");
z2ui5_cl_demo_app_192.ty_s_merged_data = new abap.types.Structure({"t_kopf": new abap.types.DataReference(new abap.types.Character(4)), "t_pos": new abap.types.DataReference(new abap.types.Character(4)), "t_keyva": abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_192=>ty_s_key_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_key_values")}, "z2ui5_cl_demo_app_192=>ty_s_merged_data", undefined, {}, {});
z2ui5_cl_demo_app_192.ty_t_merged_data = abap.types.TableFactory.construct(new abap.types.Structure({"t_kopf": new abap.types.DataReference(new abap.types.Character(4)), "t_pos": new abap.types.DataReference(new abap.types.Character(4)), "t_keyva": abap.types.TableFactory.construct(new abap.types.Structure({"fname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_KEY_VALUE-VALUE"}), "tabname": new abap.types.Character(30, {"qualifiedName":"CHAR30","ddicName":"CHAR30"}), "comp": new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {})}, "z2ui5_cl_demo_app_192=>ty_s_key_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_key_values")}, "z2ui5_cl_demo_app_192=>ty_s_merged_data", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_merged_data");
z2ui5_cl_demo_app_192.ty_s_out = new abap.types.Structure({"aa": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-AA"}), "bb": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-BB"}), "cc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-CC"})}, "z2ui5_cl_demo_app_192=>ty_s_out", undefined, {}, {});
z2ui5_cl_demo_app_192.ty_t_out = abap.types.TableFactory.construct(new abap.types.Structure({"aa": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-AA"}), "bb": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-BB"}), "cc": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_192=>TY_S_OUT-CC"})}, "z2ui5_cl_demo_app_192=>ty_s_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_192=>ty_t_out");
export {z2ui5_cl_demo_app_192};
//# sourceMappingURL=z2ui5_cl_demo_app_192.clas.mjs.map