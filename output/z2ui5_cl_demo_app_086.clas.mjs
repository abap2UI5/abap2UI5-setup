const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_086.clas.abap
class z2ui5_cl_demo_app_086 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_086';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"LS_DETAIL_SUPPLIER": {"type": () => {return new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_086=>ty_s_tab_supplier", undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.ls_detail_supplier = new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_086=>ty_s_tab_supplier", undefined, {}, {});
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
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let unique319 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique319, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - Flow Logic - APP 85'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
    await (await (await (await (await (await page.get().grid({default_span: new abap.types.Character(10).set('L6 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})).get().simple_form({title: new abap.types.Character(8).set('Supplier')})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(25).set('Value set by previous app')})).get().input({value: this.ls_detail_supplier.get().suppliername, editable: new abap.types.Character(5).set('false')});
    await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_086'] = z2ui5_cl_demo_app_086;
z2ui5_cl_demo_app_086.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_086.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_086.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_086.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_086.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_086.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_086.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_086.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_086.ty_s_tab_supplier = new abap.types.Structure({"suppliername": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-SUPPLIERNAME"}), "email": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-EMAIL"}), "phone": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-PHONE"}), "zipcode": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-ZIPCODE"}), "city": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-CITY"}), "street": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-STREET"}), "country": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_086=>TY_S_TAB_SUPPLIER-COUNTRY"})}, "Z2UI5_CL_DEMO_APP_086=>ty_s_tab_supplier", undefined, {}, {});
export {z2ui5_cl_demo_app_086};
//# sourceMappingURL=z2ui5_cl_demo_app_086.clas.mjs.map