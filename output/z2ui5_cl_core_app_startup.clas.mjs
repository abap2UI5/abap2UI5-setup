const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_core_app_startup.clas.abap
class z2ui5_cl_core_app_startup {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_CORE_APP_STARTUP';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MS_HOME": {"type": () => {return new abap.types.Structure({"url": new abap.types.String({qualifiedName: "STRING"}), "btn_text": new abap.types.String({qualifiedName: "STRING"}), "btn_event_id": new abap.types.String({qualifiedName: "STRING"}), "btn_icon": new abap.types.String({qualifiedName: "STRING"}), "classname": new abap.types.String({qualifiedName: "STRING"}), "class_value_state": new abap.types.String({qualifiedName: "STRING"}), "class_value_state_text": new abap.types.String({qualifiedName: "STRING"}), "class_editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_UI5_VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CLIENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MV_CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_CLASSES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_classes");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_DRAFT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~ID_APP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~CHECK_STICKY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "Z2UI5_IF_APP~VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~ORIGIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~AUTHOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "Z2UI5_IF_APP~LICENSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"FACTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_STARTUP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_STARTUP"});}, "is_optional": " "}}},
  "Z2UI5_ON_INIT": {"visibility": "U", "parameters": {}},
  "Z2UI5_ON_EVENT": {"visibility": "U", "parameters": {}},
  "VIEW_DISPLAY_START": {"visibility": "U", "parameters": {}},
  "ON_EVENT_CHECK": {"visibility": "U", "parameters": {}},
  "VIEW_DISPLAY_POPUP": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.ms_home = new abap.types.Structure({"url": new abap.types.String({qualifiedName: "STRING"}), "btn_text": new abap.types.String({qualifiedName: "STRING"}), "btn_event_id": new abap.types.String({qualifiedName: "STRING"}), "btn_icon": new abap.types.String({qualifiedName: "STRING"}), "classname": new abap.types.String({qualifiedName: "STRING"}), "class_value_state": new abap.types.String({qualifiedName: "STRING"}), "class_value_state_text": new abap.types.String({qualifiedName: "STRING"}), "class_editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, undefined, undefined, {}, {});
    this.ms_home.get().class_editable.set('X');
    this.mv_ui5_version = new abap.types.String({qualifiedName: "STRING"});
    this.client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"});
    this.mv_check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_classes = abap.types.TableFactory.construct(new abap.types.Structure({"classname": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-CLASSNAME"}), "description": new abap.types.String({qualifiedName: "Z2UI5_CL_ABAP_API=>TY_S_CLASS_DESCR-DESCRIPTION"})}, "z2ui5_cl_abap_api=>ty_s_class_descr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_abap_api=>ty_t_classes");
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
  async factory() {
    return z2ui5_cl_core_app_startup.factory();
  }
  static async factory() {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_APP_STARTUP", RTTIName: "\\CLASS=Z2UI5_CL_CORE_APP_STARTUP"});
    result.set(await (new abap.Classes['Z2UI5_CL_CORE_APP_STARTUP']()).constructor_());
    return result;
  }
  async on_event_check() {
    let li_app_test = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let lx = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    try {
      this.ms_home.get().classname.set((await abap.Classes['Z2UI5_CL_UTIL'].c_trim_upper({val: this.ms_home.get().classname})));
      let unique108 = abap.Classes["CLAS-Z2UI5_CL_CORE_APP_STARTUP-"+this.ms_home.get().classname.get().trimEnd()];
      if (unique108 === undefined) { unique108 = abap.Classes[this.ms_home.get().classname.get().trimEnd()]; }
      if (unique108 === undefined) { throw new abap.Classes['CX_SY_CREATE_OBJECT_ERROR']; }
      li_app_test.set(await (new unique108()).constructor_());
      await this.client.get().z2ui5_if_client$message_toast_display({text: new abap.types.String().set(`App is ready to start!`)});
      this.ms_home.get().btn_text.set(new abap.types.String().set(`edit`));
      this.ms_home.get().btn_event_id.set(new abap.types.String().set(`BUTTON_CHANGE`));
      this.ms_home.get().btn_icon.set(new abap.types.String().set(`sap-icon://edit`));
      this.ms_home.get().class_value_state.set(new abap.types.String().set(`Success`));
      this.ms_home.get().class_editable.set(abap.builtin.abap_false);
      this.ms_home.get().url.set((await abap.Classes['Z2UI5_CL_CORE_UTIL_SRV'].app_get_url({client: this.client, classname: this.ms_home.get().classname})));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        lx.set(e);
        this.ms_home.get().class_value_state_text.set((await lx.get().if_message$get_text()));
        this.ms_home.get().class_value_state.set(new abap.types.String().set(`Warning`));
        await this.client.get().z2ui5_if_client$message_box_display({text: this.ms_home.get().class_value_state_text, type: new abap.types.String().set(`error`)});
      } else {
        throw e;
      }
    }
  }
  async view_display_start() {
    let page2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let simple_form2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let lv_url_samples2 = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    page2.set((await (await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()).get().shell()).get().page({title: new abap.types.String().set(`abap2UI5 - Developing UI5 Apps Purely in ABAP`), shownavbutton: abap.builtin.abap_false})));
    await (await (await (await page2.get().header_content()).get().toolbar_spacer()).get().button({text: new abap.types.String().set(`Debugging Tools`), icon: new abap.types.String().set(`sap-icon://enablement`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`OPEN_DEBUG`)}))})).get().button({text: new abap.types.String().set(`System`), icon: new abap.types.String().set(`sap-icon://information`), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`OPEN_INFO`)}))});
    simple_form2.set((await (await page2.get().simple_form({editable: abap.builtin.abap_true, layout: new abap.types.String().set(`ResponsiveGridLayout`), labelspanxl: new abap.types.String().set(`4`), labelspanl: new abap.types.String().set(`3`), labelspanm: new abap.types.String().set(`4`), labelspans: new abap.types.String().set(`12`), adjustlabelspan: abap.builtin.abap_false, emptyspanxl: new abap.types.String().set(`0`), emptyspanl: new abap.types.String().set(`4`), emptyspanm: new abap.types.String().set(`0`), emptyspans: new abap.types.String().set(`0`), columnsxl: new abap.types.String().set(`1`), columnsl: new abap.types.String().set(`1`), columnsm: new abap.types.String().set(`1`), singlecontainerfullsize: abap.builtin.abap_false})).get().content({ns: new abap.types.String().set(`form`)})));
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`Quickstart`)});
    await (await (await (await (await (await (await (await (await simple_form2.get().label({text: new abap.types.String().set(`Step 1`)})).get().text({text: new abap.types.String().set(`Create a new class in your ABAP system`)})).get().label({text: new abap.types.String().set(`Step 2`)})).get().text({text: new abap.types.String().set(`Add the interface: Z2UI5_IF_APP`)})).get().label({text: new abap.types.String().set(`Step 3`)})).get().text({text: new abap.types.String().set(`Define the view, implement behaviour`)})).get().label()).get().link({text: new abap.types.String().set(`(Example)`), target: new abap.types.String().set(`_blank`), href: new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5/blob/main/src/02/z2ui5_cl_hello_world.clas.abap`)})).get().label({text: new abap.types.String().set(`Step 4`)});
    if (abap.compare.eq(this.ms_home.get().class_editable, abap.builtin.abap_true)) {
      await simple_form2.get().input({placeholder: new abap.types.String().set(`fill in the class name and press 'check'`), enabled: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_home.get().class_editable})), value: (await this.client.get().z2ui5_if_client$_bind_edit({val: this.ms_home.get().classname})), submit: (await this.client.get().z2ui5_if_client$_event({val: this.ms_home.get().btn_event_id})), valuehelprequest: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(10).set('VALUE_HELP')})), showvaluehelp: abap.builtin.abap_true, width: new abap.types.String().set(`70%`)});
    } else {
      await simple_form2.get().text({text: this.ms_home.get().classname});
    }
    await simple_form2.get().label();
    await simple_form2.get().button({press: (await this.client.get().z2ui5_if_client$_event({val: this.ms_home.get().btn_event_id})), text: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_home.get().btn_text})), icon: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_home.get().btn_icon})), width: new abap.types.String().set(`70%`)});
    await (await simple_form2.get().label({text: new abap.types.String().set(`Step 5`)})).get().link({text: new abap.types.String().set(`Link to the Application`), target: new abap.types.String().set(`_blank`), href: (await this.client.get().z2ui5_if_client$_bind({val: this.ms_home.get().url})), enabled: abap.operators.concat(new abap.types.String().set(`{= $`),abap.operators.concat((await this.client.get().z2ui5_if_client$_bind({val: this.ms_home.get().class_editable})),new abap.types.String().set(` === false }`)))});
    lv_url_samples2.set((await abap.Classes['Z2UI5_CL_CORE_UTIL_SRV'].app_get_url({client: this.client, classname: new abap.types.Character(21).set('z2ui5_cl_demo_app_000')})));
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`What's next?`)});
    if (abap.compare.initial((await abap.Classes['Z2UI5_CL_UTIL'].rtti_check_class_exists({val: new abap.types.String().set(`z2ui5_cl_demo_app_000`)}))) === false) {
      await simple_form2.get().label({text: new abap.types.String().set(`Start Developing`)});
      abap.statements.clear(temp1);
      abap.statements.insertInternal({data: lv_url_samples2, table: temp1});
      await simple_form2.get().button({text: new abap.types.String().set(`Explore Code Samples`), press: (await this.client.get().z2ui5_if_client$_event_client({val: this.client.get().z2ui5_if_client$cs_event.get().open_new_tab, t_arg: temp1})), width: new abap.types.String().set(`70%`)});
    } else {
      await simple_form2.get().label({text: new abap.types.String().set(`Install the sample repository`)});
      await simple_form2.get().link({text: new abap.types.String().set(`And explore more than 100 demo apps...`), target: new abap.types.String().set(`_blank`), href: new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5-samples`)});
    }
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`Contribution`)});
    await simple_form2.get().label({text: new abap.types.String().set(`Open an issue`)});
    await simple_form2.get().link({text: new abap.types.String().set(`You have problems, comments or wishes?`), target: new abap.types.String().set(`_blank`), href: new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5/issues`)});
    await simple_form2.get().label({text: new abap.types.String().set(`Open a Pull Request`)});
    await simple_form2.get().link({text: new abap.types.String().set(`You added a new feature or fixed a bug?`), target: new abap.types.String().set(`_blank`), href: new abap.types.String().set(`https://github.com/abap2UI5/abap2UI5/pulls`)});
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`Social Media`)});
    await simple_form2.get().label();
    await simple_form2.get().link({text: new abap.types.String().set(`Follow us on LinkedIn`), target: new abap.types.String().set(`_blank`), href: new abap.types.String().set(`https://www.linkedin.com/company/abap2ui5`)});
    await simple_form2.get().label();
    await simple_form2.get().link({text: new abap.types.String().set(`www.abap2UI5.org`), target: new abap.types.String().set(`_blank`), href: new abap.types.String().set(`http://www.abap2UI5.org`)});
    await this.client.get().z2ui5_if_client$view_display({val: (await page2.get().stringify())});
  }
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let temp3 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_TO_SELECT", RTTIName: "\\CLASS=Z2UI5_CL_POP_TO_SELECT"});
    let lo_f4 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_POP_TO_SELECT", RTTIName: "\\CLASS=Z2UI5_CL_POP_TO_SELECT"});
    let ls_result = new abap.types.Structure({"row": new abap.types.DataReference(new abap.types.Character(4)), "table": new abap.types.DataReference(new abap.types.Character(4)), "check_confirmed": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_pop_to_select=>ty_s_result", undefined, {}, {});
    let fs_class_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    this.me.get().client.set(client);
    if (abap.compare.eq(this.mv_check_initialized, abap.builtin.abap_false)) {
      this.mv_check_initialized.set(abap.builtin.abap_true);
      await this.z2ui5_on_init();
      await this.view_display_start();
      return;
    }
    if (abap.compare.eq(((await client.get().z2ui5_if_client$get())).get().check_on_navigated, abap.builtin.abap_true)) {
      try {
        await abap.statements.cast(temp3, (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app})));
        lo_f4.set(temp3);
        ls_result.set((await lo_f4.get().result()));
        if (abap.compare.eq(ls_result.get().check_confirmed, abap.builtin.abap_true)) {
          abap.statements.assign({target: fs_class_, source: ls_result.get().row.dereference()});
          this.ms_home.set(this.ms_home);
          abap.statements.moveCorresponding(fs_class_, this.ms_home);
          await this.view_display_start();
          return;
        }
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        } else {
          throw e;
        }
      }
    }
    await this.z2ui5_on_event();
  }
  async view_display_popup() {
    let page2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let content = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let simple_form2 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_CORE_DRAFT_SRV", RTTIName: "\\CLASS=Z2UI5_CL_CORE_DRAFT_SRV"});
    let lv_count = new abap.types.String({qualifiedName: "STRING"});
    page2.set((await (await abap.Classes['Z2UI5_CL_XML_VIEW'].factory_popup()).get().dialog({title: new abap.types.String().set(`abap2UI5 - System Information`), afterclose: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`CLOSE`)}))})));
    content.set((await page2.get().content()));
    await (await content.get()._z2ui5()).get().info_frontend({ui5_version: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_ui5_version}))});
    simple_form2.set((await (await content.get().simple_form({editable: abap.builtin.abap_true, layout: new abap.types.String().set(`ResponsiveGridLayout`), labelspanxl: new abap.types.String().set(`4`), labelspanl: new abap.types.String().set(`3`), labelspanm: new abap.types.String().set(`4`), labelspans: new abap.types.String().set(`12`), adjustlabelspan: abap.builtin.abap_false, emptyspanxl: new abap.types.String().set(`0`), emptyspanl: new abap.types.String().set(`4`), emptyspanm: new abap.types.String().set(`0`), emptyspans: new abap.types.String().set(`0`), columnsxl: new abap.types.String().set(`1`), columnsl: new abap.types.String().set(`1`), columnsm: new abap.types.String().set(`1`), singlecontainerfullsize: abap.builtin.abap_false})).get().content({ns: new abap.types.String().set(`form`)})));
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`Frontend`)});
    await simple_form2.get().label({text: new abap.types.String().set(`UI5 Version`)});
    await simple_form2.get().text({text: (await this.client.get().z2ui5_if_client$_bind({val: this.mv_ui5_version}))});
    await simple_form2.get().label({text: new abap.types.String().set(`Launchpad active`)});
    await simple_form2.get().checkbox({enabled: abap.builtin.abap_false, selected: ((await this.client.get().z2ui5_if_client$get())).get().check_launchpad_active});
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`Backend`)});
    await simple_form2.get().label({text: new abap.types.String().set(`ABAP for Cloud`)});
    await simple_form2.get().checkbox({enabled: abap.builtin.abap_false, selected: (await abap.Classes['Z2UI5_CL_UTIL'].context_check_abap_cloud())});
    temp1.set(await (new abap.Classes['Z2UI5_CL_CORE_DRAFT_SRV']()).constructor_());
    temp4.set((await temp1.get().count_entries()));
    lv_count.set(temp4);
    await (await simple_form2.get().toolbar()).get().title({text: new abap.types.String().set(`abap2UI5`)});
    await simple_form2.get().label({text: new abap.types.String().set(`Version `)});
    await simple_form2.get().text({text: abap.Classes['Z2UI5_IF_APP'].z2ui5_if_app$version});
    await simple_form2.get().label({text: new abap.types.String().set(`Draft Entries `)});
    await simple_form2.get().text({text: lv_count});
    await (await page2.get().end_button()).get().button({text: new abap.types.Character(5).set('close'), press: (await this.client.get().z2ui5_if_client$_event({val: new abap.types.Character(5).set('CLOSE')})), type: new abap.types.Character(10).set('Emphasized')});
    await this.client.get().z2ui5_if_client$popup_display({val: (await page2.get().stringify())});
  }
  async z2ui5_on_event() {
    let li_app = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_APP", RTTIName: "\\INTERFACE=Z2UI5_IF_APP"});
    let unique109 = ((await this.client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique109, new abap.types.String().set(`CLOSE`))) {
      await this.client.get().z2ui5_if_client$popup_destroy();
    } else if (abap.compare.eq(unique109, new abap.types.String().set(`OPEN_DEBUG`))) {
      await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`Press CTRL+F12 to open the debugging tools`)});
    } else if (abap.compare.eq(unique109, new abap.types.String().set(`OPEN_INFO`))) {
      await this.view_display_popup();
      return;
    } else if (abap.compare.eq(unique109, new abap.types.String().set(`BUTTON_CHECK`))) {
      if (abap.compare.eq(this.ms_home.get().class_editable, abap.builtin.abap_false)) {
        this.ms_home.get().btn_text.set(new abap.types.String().set(`check`));
        this.ms_home.get().btn_event_id.set(new abap.types.String().set(`BUTTON_CHECK`));
        this.ms_home.get().btn_icon.set(new abap.types.String().set(`sap-icon://validate`));
        this.ms_home.get().class_editable.set(abap.builtin.abap_true);
      } else {
        await this.on_event_check();
      }
      await this.client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique109, new abap.types.Character(10).set('VALUE_HELP'))) {
      try {
        this.mt_classes.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_classes_impl_intf({val: (await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_intfname_by_ref({in: li_app}))})));
      } catch (e) {
        if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
          await this.client.get().z2ui5_if_client$message_box_display({text: new abap.types.String().set(`Unfortunately the value help is not available on your ABAP release!`)});
          return;
        } else {
          throw e;
        }
      }
      await this.client.get().z2ui5_if_client$nav_app_call({app: (await abap.Classes['Z2UI5_CL_POP_TO_SELECT'].factory({i_tab: this.mt_classes}))});
    }
  }
  async z2ui5_on_init() {
    let temp5 = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_HELLO_WORLD", RTTIName: "\\CLASS=Z2UI5_CL_HELLO_WORLD"});
    this.ms_home.get().btn_text.set(new abap.types.String().set(`check`));
    this.ms_home.get().btn_event_id.set(new abap.types.String().set(`BUTTON_CHECK`));
    this.ms_home.get().class_editable.set(abap.builtin.abap_true);
    this.ms_home.get().btn_icon.set(new abap.types.String().set(`sap-icon://validate`));
    temp5.set(await (new abap.Classes['Z2UI5_CL_HELLO_WORLD']()).constructor_());
    this.ms_home.get().classname.set((await abap.Classes['Z2UI5_CL_UTIL'].rtti_get_classname_by_ref({in: temp5})));
  }
}
abap.Classes['Z2UI5_CL_CORE_APP_STARTUP'] = z2ui5_cl_core_app_startup;
z2ui5_cl_core_app_startup.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_startup.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_core_app_startup.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_startup.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_core_app_startup.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_startup.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_core_app_startup.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_core_app_startup.z2ui5_if_app$license.set('MIT');
export {z2ui5_cl_core_app_startup};
//# sourceMappingURL=z2ui5_cl_core_app_startup.clas.mjs.map