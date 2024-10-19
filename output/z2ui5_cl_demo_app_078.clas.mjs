const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_078.clas.abap
class z2ui5_cl_demo_app_078 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_078';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MV_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TOKEN": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp1_b1e501edeb");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TOKENS_ADDED": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp2_b1e501edeb");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_TOKENS_REMOVED": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp3_b1e501edeb");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.mt_token = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp1_b1e501edeb");
    this.mt_tokens_added = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp2_b1e501edeb");
    this.mt_tokens_removed = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp3_b1e501edeb");
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
  async z2ui5_if_app$main(INPUT) {
    let client = INPUT?.client;
    if (client?.getQualifiedName === undefined || client.getQualifiedName() !== "Z2UI5_IF_CLIENT") { client = undefined; }
    if (client === undefined) { client = new abap.types.ABAPObject({qualifiedName: "Z2UI5_IF_CLIENT", RTTIName: "\\INTERFACE=Z2UI5_IF_CLIENT"}).set(INPUT.client); }
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let tab = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let ls_token = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {});
    let temp1 = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      temp2.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
      view.set((await (await view.get().shell()).get().page({id: new abap.types.String().set(`page_main`), title: new abap.types.Character(25).set('abap2UI5 - Select-Options'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp2})));
      await (await view.get()._z2ui5()).get().multiinput_ext({addedtokens: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_tokens_added})), removedtokens: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_tokens_removed})), change: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(14).set('UPDATE_BACKEND')})), multiinputid: new abap.types.String().set(`test`)});
      await (await (await view.get().multi_input({id: new abap.types.String().set(`test`), tokens: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_token})), showclearicon: abap.builtin.abap_true})).get().tokens()).get().token({key: new abap.types.String().set(`{KEY}`), text: new abap.types.String().set(`{TEXT}`), visible: new abap.types.String().set(`{VISIBLE}`), selected: new abap.types.String().set(`{SELKZ}`), editable: new abap.types.String().set(`{EDITABLE}`)});
      tab.set((await view.get().table({items: (await client.get().z2ui5_if_client$_bind_edit({val: this.mt_token})), mode: new abap.types.Character(11).set('MultiSelect')})));
      await (await (await (await (await (await tab.get().columns()).get().column()).get().text({text: new abap.types.Character(3).set('KEY')})).get().get_parent()).get().column()).get().text({text: new abap.types.Character(4).set('TEXT')});
      await (await (await (await (await tab.get().items()).get().column_list_item({selected: new abap.types.Character(7).set('{SELKZ}')})).get().cells()).get().input({value: new abap.types.Character(5).set('{KEY}'), enabled: new abap.types.String().set(`{EDITABLE}`)})).get().input({value: new abap.types.Character(6).set('{TEXT}'), enabled: new abap.types.String().set(`{EDITABLE}`)});
      await client.get().z2ui5_if_client$view_display({val: (await view.get().stringify())});
    }
    let unique301 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique301, new abap.types.Character(14).set('UPDATE_BACKEND'))) {
      for await (const unique302 of abap.statements.loop(this.mt_tokens_removed)) {
        ls_token.set(unique302);
        await abap.statements.deleteInternal(this.mt_token,{where: async (I) => {return abap.compare.eq(I.key, ls_token.get().key);}});
      }
      for await (const unique303 of abap.statements.loop(this.mt_tokens_added)) {
        ls_token.set(unique303);
        abap.statements.clear(temp1);
        temp1.get().key.set(ls_token.get().key);
        temp1.get().text.set(ls_token.get().text);
        temp1.get().visible.set(abap.builtin.abap_true);
        temp1.get().editable.set(abap.builtin.abap_true);
        abap.statements.insertInternal({data: temp1, table: this.mt_token});
      }
      abap.statements.clear(this.mt_tokens_removed);
      abap.statements.clear(this.mt_tokens_added);
      await client.get().z2ui5_if_client$view_model_update();
    } else if (abap.compare.eq(unique301, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave();
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_078'] = z2ui5_cl_demo_app_078;
z2ui5_cl_demo_app_078.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_078.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_078.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_078.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_078.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_078.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_078.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_078.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_078.ty_s_token = new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {});
z2ui5_cl_demo_app_078.temp1_b1e501edeb = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp1_b1e501edeb");
z2ui5_cl_demo_app_078.temp2_b1e501edeb = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp2_b1e501edeb");
z2ui5_cl_demo_app_078.temp3_b1e501edeb = abap.types.TableFactory.construct(new abap.types.Structure({"key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-KEY"}), "text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_078=>TY_S_TOKEN-TEXT"}), "visible": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "selkz": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "editable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "z2ui5_cl_demo_app_078=>ty_s_token", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_078=>temp3_b1e501edeb");
export {z2ui5_cl_demo_app_078};
//# sourceMappingURL=z2ui5_cl_demo_app_078.clas.mjs.map