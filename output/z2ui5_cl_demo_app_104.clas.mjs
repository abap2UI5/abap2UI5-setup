const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_104.clas.abap
class z2ui5_cl_demo_app_104 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_104';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MO_APP_SUB": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLASSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "T_TAB2": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_LAYOUT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ENABLED_01": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_ENABLED_02": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MO_GRID_SUB": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LO_VIEW_NESTED": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"VIEW_DISPLAY_MASTER": {"visibility": "O", "parameters": {}},
  "VIEW_DISPLAY_DETAIL": {"visibility": "O", "parameters": {}},
  "ON_EVENT_SUB": {"visibility": "O", "parameters": {}},
  "ON_INIT_SUB": {"visibility": "O", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_app_sub = new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});
    this.classname = new abap.types.String({qualifiedName: "STRING"});
    this.t_tab = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.t_tab2 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    this.mv_layout = new abap.types.String({qualifiedName: "STRING"});
    this.mv_title = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_enabled_01 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_check_enabled_01.set('X');
    this.mv_check_enabled_02 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mo_grid_sub = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    this.lo_view_nested = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
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
  async on_event_sub() {
    let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    if (abap.compare.initial(this.mo_app_sub) === false) {
      abap.statements.assign({target: fs_fs_, dynamicName: 'mo_app_sub' + '->' + 'MO_VIEW_PARENT', dynamicSource: (() => {
                  try { return this.mo_app_sub; } catch {}
                  try { return this.this.mo_app_sub; } catch {}
                })()});
        fs_fs_.set(this.mo_grid_sub);
        if (this.mo_app_sub.get().z2ui5_if_app$main === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (this.mo_app_sub.get().z2ui5_if_app$main === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        await this.mo_app_sub.get().z2ui5_if_app$main({client: this.client});
      }
    }
    async on_init_sub() {
      let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      this.classname.set(abap.builtin.to_upper({val: this.classname}));
      let unique336 = abap.Classes["CLAS-Z2UI5_CL_DEMO_APP_104-"+this.classname.get().trimEnd()];
      if (unique336 === undefined) { unique336 = abap.Classes[this.classname.get().trimEnd()]; }
      if (unique336 === undefined) { throw new abap.Classes['CX_SY_CREATE_OBJECT_ERROR']; }
      this.mo_app_sub.set(await (new unique336()).constructor_());
      abap.statements.assign({target: fs_fs_, dynamicName: 'mo_app_sub' + '->' + 'MO_VIEW_PARENT', dynamicSource: (() => {
                  try { return this.mo_app_sub; } catch {}
                  try { return this.this.mo_app_sub; } catch {}
                })()});
        fs_fs_.set(this.mo_grid_sub);
        if (this.mo_app_sub.get().z2ui5_if_app$main === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (this.mo_app_sub.get().z2ui5_if_app$main === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
        await this.mo_app_sub.get().z2ui5_if_app$main({client: this.client});
      }
      async view_display_detail() {
        let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
        this.lo_view_nested.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
        page.set((await this.lo_view_nested.get().page({title: new abap.types.String().set(`Nested View`)})));
        this.mo_grid_sub.set((await (await page.get().grid({default_span: new abap.types.Character(11).set('L12 M12 S12')})).get().content({ns: new abap.types.Character(6).set('layout')})));
      }
      async view_display_master() {
        let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
        let col_layout = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
        let lr_master = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
        let lr_list = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
        page.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().page({title: new abap.types.Character(46).set('abap2UI5 - Master Detail Page with Nested View'), navbuttonpress: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: abap.builtin.abap_true})));
        await (await (await (await page.get().header_content()).get().link({text: new abap.types.Character(4).set('Demo'), target: new abap.types.Character(6).set('_blank'), href: new abap.types.String().set(`https://twitter.com/abap2UI5/status/1628701535222865922`)})).get().link()).get().get_parent();
        col_layout.set((await page.get().flexible_column_layout({layout: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.mv_layout})), id: new abap.types.Character(4).set('test')})));
        lr_master.set((await col_layout.get().begin_column_pages()));
        lr_list.set((await (await lr_master.get().list({headertext: new abap.types.Character(10).set('List Ouput'), items: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.t_tab, view: this.client.get().z2ui5_if_client$cs_view.get().main})), mode: new abap.types.String().set(`SingleSelectMaster`), selectionchange: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(9).set('SELCHANGE')}))})).get().standard_list_item({title: new abap.types.Character(7).set('{TITLE}'), description: new abap.types.Character(7).set('{DESCR}'), icon: new abap.types.Character(6).set('{ICON}'), info: new abap.types.Character(6).set('{INFO}'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('TEST')})), selected: new abap.types.String().set(`{SELECTED}`)})));
        await this.client.get().z2ui5_if_client$view_display({val: (await lr_list.get().stringify())});
      }
      async z2ui5_if_app$main(INPUT) {
        let client = INPUT?.client;
        if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
        if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
        let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
        let temp2 = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {});
        let lt_sel = abap.types.TableFactory.construct(new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
        let ls_sel = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {});
        this.me.get().client.set(client);
        if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
          this.check_initialized.set(abap.builtin.abap_true);
          abap.statements.clear(temp1);
          temp2.get().title.set(new abap.types.Character(7).set('Class 1'));
          temp2.get().info.set(new abap.types.Character(21).set('z2ui5_cl_demo_app_105'));
          temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
          temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
          abap.statements.insertInternal({data: temp2, table: temp1});
          temp2.get().title.set(new abap.types.Character(7).set('Class 2'));
          temp2.get().info.set(new abap.types.Character(21).set('z2ui5_cl_demo_app_112'));
          temp2.get().descr.set(new abap.types.Character(21).set('this is a description'));
          temp2.get().icon.set(new abap.types.Character(18).set('sap-icon://account'));
          abap.statements.insertInternal({data: temp2, table: temp1});
          this.t_tab.set(temp1);
          this.mv_layout.set(new abap.types.String().set(`OneColumn`));
          await this.view_display_master();
          await this.view_display_detail();
        }
        let unique337 = ((await client.get().z2ui5_if_client$get())).get().event;
        if (abap.compare.eq(unique337, new abap.types.String().set(`SELCHANGE`))) {
          lt_sel.set(this.t_tab);
          await abap.statements.deleteInternal(lt_sel,{where: async (I) => {return abap.compare.eq(I.selected, abap.builtin.abap_false);}});
          abap.statements.readTable(lt_sel,{index: abap.IntegerFactory.get(1),
            into: ls_sel});
          abap.statements.append({source: ls_sel, target: this.t_tab2});
          if (abap.compare.initial(this.classname) === false) {
            await this.view_display_master();
          }
          this.classname.set(ls_sel.get().info);
          this.mv_layout.set(new abap.types.String().set(`TwoColumnsMidExpanded`));
          await client.get().z2ui5_if_client$view_model_update();
          await this.view_display_detail();
          await this.on_init_sub();
          await client.get().z2ui5_if_client$nest_view_display({val: (await this.lo_view_nested.get().stringify()), id: new abap.types.String().set(`test`), method_insert: new abap.types.Character(16).set('addMidColumnPage'), method_destroy: new abap.types.Character(23).set('removeAllMidColumnPages')});
        } else if (abap.compare.eq(unique337, new abap.types.Character(4).set('BACK'))) {
          await client.get().z2ui5_if_client$nav_app_leave();
        }
        await this.on_event_sub();
      }
    }
    abap.Classes['Z2UI5_CL_DEMO_APP_104'] = z2ui5_cl_demo_app_104;
    z2ui5_cl_demo_app_104.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_104.z2ui5_if_app$version.set('1.135.0');
    z2ui5_cl_demo_app_104.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_104.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
    z2ui5_cl_demo_app_104.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_104.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
    z2ui5_cl_demo_app_104.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
    z2ui5_cl_demo_app_104.z2ui5_if_app$license.set('MIT');
    z2ui5_cl_demo_app_104.ty_row = new abap.types.Structure({"title": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-TITLE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-VALUE"}), "descr": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-DESCR"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-ICON"}), "info": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_104=>TY_ROW-INFO"}), "selected": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "checkbox": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_104=>ty_row", undefined, {}, {});
export {z2ui5_cl_demo_app_104};
//# sourceMappingURL=z2ui5_cl_demo_app_104.clas.mjs.map