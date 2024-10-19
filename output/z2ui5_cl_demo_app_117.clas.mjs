const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_117.clas.abap
class z2ui5_cl_demo_app_117 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_117';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_SELECTEDKEY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_SELECTEDKEY_TMP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_T002": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_117=>ty_t_t002");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_APP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "MO_MAIN_PAGE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ON_INIT": {"visibility": "O", "parameters": {}},
  "ON_EVENT": {"visibility": "O", "parameters": {}},
  "RENDER_MAIN": {"visibility": "O", "parameters": {}},
  "RENDER_SUB_APP": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_selectedkey = new abap.types.String({qualifiedName: "STRING"});
    this.mv_selectedkey_tmp = new abap.types.String({qualifiedName: "STRING"});
    this.mt_t002 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_117=>ty_t_t002");
    this.mo_app = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mo_main_page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
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
    let unique354 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique354, new abap.types.Character(18).set('ONSELECTICONTABBAR'))) {
      let unique355 = this.mv_selectedkey;
      if (abap.compare.eq(unique355, abap.builtin.space)) {
      } else {
      }
    } else if (abap.compare.eq(unique354, new abap.types.Character(4).set('BACK'))) {
    }
  }
  async on_init() {
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_117=>ty_t_t002");
    let temp2 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {});
    abap.statements.clear(temp1);
    temp2.get().id.set(new abap.types.Character(1).set('1'));
    temp2.get().class.set(new abap.types.Character(21).set('Z2UI5_CL_DEMO_APP_126'));
    temp2.get().count.set(new abap.types.Character(2).set('12'));
    abap.statements.insertInternal({data: temp2, table: temp1});
    this.mt_t002.set(temp1);
    this.mv_selectedkey.set(new abap.types.Character(1).set('1'));
  }
  async render_main() {
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let lo_items = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp3 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {});
    let line = new abap.types.DataReference(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {}));
    view.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()));
    temp1.set(abap.builtin.boolc(abap.compare.initial(((await this.client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await view.get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(24).set('Main App calling Subapps'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp1, class: new abap.types.Character(19).set('sapUiContentPadding')})));
    lo_items.set((await (await page.get().icon_tab_bar({class: new abap.types.Character(29).set('sapUiResponsiveContentPadding'), selectedkey: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_selectedkey})), select: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(18).set('ONSELECTICONTABBAR')}))})).get().items()));
    for await (const unique356 of abap.statements.loop(this.mt_t002)) {
      line.assign(unique356);
      await lo_items.get().icon_tab_filter({text: line.get().class, count: line.get().count, key: line.get().id});
      await lo_items.get().icon_tab_separator();
    }
    this.mo_main_page.set(lo_items);
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    this.me.get().client.set(client);
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      await this.on_init();
      await this.render_main();
    }
    await this.on_event();
    await this.render_sub_app();
  }
  async render_sub_app() {
    let t002 = new abap.types.DataReference(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {}));
    let fs_view_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_view_display_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.readTable(this.mt_t002,{referenceInto: t002,
      withKey: (i) => {return abap.compare.eq(i.id, this.mv_selectedkey);},
      withKeyValue: [{key: (i) => {return i.id}, value: this.mv_selectedkey}],
      usesTableLine: false,
      withKeySimple: {"id": this.mv_selectedkey}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      return;
    }
    let unique357 = this.mv_selectedkey;
    if (abap.compare.ne(this.mv_selectedkey, this.mv_selectedkey_tmp)) {
      let unique358 = abap.Classes["CLAS-Z2UI5_CL_DEMO_APP_117-"+t002.get().class.get().trimEnd()];
      if (unique358 === undefined) { unique358 = abap.Classes[t002.get().class.get().trimEnd()]; }
      if (unique358 === undefined) { throw new abap.Classes['CX_SY_CREATE_OBJECT_ERROR']; }
      this.mo_app.set(await (new unique358()).constructor_());
    }
    try {
      if (this.mo_app.get().set_app_data === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
      if (this.mo_app.get().set_app_data === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
      await this.mo_app.get().set_app_data({data: t002.get().count});
      await this.render_main();
      abap.statements.assign({target: fs_view_, dynamicName: 'mo_app' + '->' + 'MO_PARENT_VIEW', dynamicSource: (() => {
                  try { return this.mo_app; } catch {}
                  try { return this.this.mo_app; } catch {}
                })()});
        if (abap.compare.assigned(fs_view_)) {
          fs_view_.set(this.mo_main_page);
        }
        if (this.mo_app.get().z2ui5_if_app$main === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (this.mo_app.get().z2ui5_if_app$main === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        await this.mo_app.get().z2ui5_if_app$main({client: this.client});
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          return;
        } else {
          throw e;
        }
      }
      await this.client.get().z2ui5_if_client$view_model_update();
      abap.statements.assign({target: fs_view_display_, dynamicName: 'mo_app' + '->' + 'MV_VIEW_DISPLAY', dynamicSource: (() => {
                  try { return this.mo_app; } catch {}
                  try { return this.this.mo_app; } catch {}
                })()});
        if (abap.compare.eq(fs_view_display_, abap.builtin.abap_true)) {
          fs_view_display_.set(abap.builtin.abap_false);
          await this.client.get().z2ui5_if_client$view_display({val: (await this.mo_main_page.get().stringify())});
        }
        if (abap.compare.ne(this.mv_selectedkey, this.mv_selectedkey_tmp)) {
          await this.client.get().z2ui5_if_client$view_display({val: (await this.mo_main_page.get().stringify())});
          this.mv_selectedkey_tmp.set(this.mv_selectedkey);
        }
      }
    }
    abap.Classes['Z2UI5_CL_DEMO_APP_117'] = z2ui5_cl_demo_app_117;
    z2ui5_cl_demo_app_117.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_117.z2ui5_if_app$version.set('1.135.0');
    z2ui5_cl_demo_app_117.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_117.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
    z2ui5_cl_demo_app_117.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_117.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
    z2ui5_cl_demo_app_117.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_117.z2ui5_if_app$license.set('MIT');
    z2ui5_cl_demo_app_117.ty_s_t002 = new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {});
    z2ui5_cl_demo_app_117.ty_t_t002 = abap.types.TableFactory.construct(new abap.types.Structure({"id": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-ID"}), "count": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-COUNT"}), "class": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_117=>TY_S_T002-CLASS"})}, "z2ui5_cl_demo_app_117=>ty_s_t002", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_117=>ty_t_t002");
export {z2ui5_cl_demo_app_117};
//# sourceMappingURL=z2ui5_cl_demo_app_117.clas.mjs.map