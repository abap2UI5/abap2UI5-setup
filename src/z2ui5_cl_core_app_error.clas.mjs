const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app_error.clas.abap
class z2ui5_cl_core_app_error {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_APP_ERROR';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MX_ERROR": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_ERROR", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_ERROR"});}, "is_optional": " "}, "ERROR": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mx_error = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    this.z2ui5_if_app$version = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version;
    this.z2ui5_if_app$origin = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$origin;
    this.z2ui5_if_app$license = abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$license;
    if (this.z2ui5_if_app$id_draft === undefined) this.z2ui5_if_app$id_draft = new abap.types.String({qualifiedName: "STRING"});
    if (this.z2ui5_if_app$id_app === undefined) this.z2ui5_if_app$id_app = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async factory(INPUT) {
    return z2ui5_cl_core_app_error.factory(INPUT);
  }
  static async factory(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_ERROR", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_ERROR"});
    let error = INPUT?.error;
    if (error?.getQualifiedName === undefined || error.getQualifiedName() !== "CX_ROOT") { error = undefined; }
    if (error === undefined) { error = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.error); }
    result.set(await (new abap.Classes['Z2UI5_CL_CORE_APP_ERROR']()).constructor_());
    result.get().mx_error.set(error);
    return result;
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let lv_url = new abap.types.String({qualifiedName: "STRING"});
    let lv_url_app = new abap.types.String({qualifiedName: "STRING"});
    let lv_text = new abap.types.String({qualifiedName: "STRING"});
    let lx_error = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp2 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_UI5_M", RTTIName: "\\CLASS=Z2UI5_CL_UI5_M"});
    lv_url.set((abap.builtin.shift_left({val: abap.operators.concat(((await client.get().z2ui5_if_client$get())).get().s_config.get().origin,((await client.get().z2ui5_if_client$get())).get().s_config.get().pathname), sub: new abap.types.String().set(` `)})));
    lv_url_app.set(abap.operators.concat(lv_url,((await client.get().z2ui5_if_client$get())).get().s_config.get().search));
    lv_text.set(new abap.types.String().set(``));
    lx_error.set(this.mx_error);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique124 = 1;
    while (abap.compare.initial(lx_error) === false) {
      abap.builtin.sy.get().index.set(unique124++);
      lv_text.set(abap.operators.concat(lv_text,abap.operators.concat(new abap.types.String().set(`<p>`),abap.operators.concat((await lx_error.get().if_message$get_text()),new abap.types.String().set(`</p>`)))));
      lx_error.set(lx_error.get().previous);
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    abap.statements.clear(temp1);
    abap.statements.insertInternal({data: lv_url, table: temp1});
    abap.statements.clear(temp2);
    abap.statements.insertInternal({data: lv_url_app, table: temp2});
    view.set((await (await (await (await (await (await (await abap.Classes['Z2UI5_CL_UI5']._factory()).get()._ns_m()).get().shell()).get().illustratedmessage({enableformattedtext: abap.builtin.abap_true, illustrationtype: new abap.types.String().set(`sapIllus-ErrorScreen`), title: new abap.types.String().set(`500 Internal Server Error`), description: lv_text})).get().additionalcontent()).get().button({text: new abap.types.String().set(`Home`), type: new abap.types.String().set(`Emphasized`), press: (await client.get().z2ui5_if_client$_event_client({val: client.get().z2ui5_if_client$cs_event.get().location_reload, t_arg: temp1}))})).get().button({text: new abap.types.String().set(`Restart`), press: (await client.get().z2ui5_if_client$_event_client({val: client.get().z2ui5_if_client$cs_event.get().location_reload, t_arg: temp2}))})));
    await client.get().z2ui5_if_client$view_display({val: (await view.get()._stringify())});
    await client.get().z2ui5_if_client$popup_destroy();
  }
}
abap.Classes['Z2UI5_CL_CORE_APP_ERROR'] = z2ui5_cl_core_app_error;
z2ui5_cl_core_app_error.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_error.z2ui5_if_app$version.set('1.120.0');
z2ui5_cl_core_app_error.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_error.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_core_app_error.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_error.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_core_app_error};
//# sourceMappingURL=z2ui5_cl_core_app_error.clas.mjs.map