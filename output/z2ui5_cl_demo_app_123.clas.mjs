const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_123.clas.abap
class z2ui5_cl_demo_app_123 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_123';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"MT_SPOT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_123=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp1_d73221ca3a");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_ROUTE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-POSITION"}), "routetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-ROUTETYPE"}), "linedash": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEDASH"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLOR"}), "colorborder": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLORBORDER"}), "linewidth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEWIDTH"})}, "z2ui5_cl_demo_app_123=>ty_ROUTE", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp2_d73221ca3a");}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_LEGEND": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-TEXT"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-COLOR"})}, "z2ui5_cl_demo_app_123=>ty_s_legend", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp3_d73221ca3a");}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.mt_spot = abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_123=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp1_d73221ca3a");
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_route = abap.types.TableFactory.construct(new abap.types.Structure({"position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-POSITION"}), "routetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-ROUTETYPE"}), "linedash": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEDASH"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLOR"}), "colorborder": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLORBORDER"}), "linewidth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEWIDTH"})}, "z2ui5_cl_demo_app_123=>ty_ROUTE", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp2_d73221ca3a");
    this.mt_legend = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-TEXT"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-COLOR"})}, "z2ui5_cl_demo_app_123=>ty_s_legend", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp3_d73221ca3a");
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
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_123=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp1_d73221ca3a");
    let temp2 = new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_123=>ty_spot", undefined, {}, {});
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-POSITION"}), "routetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-ROUTETYPE"}), "linedash": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEDASH"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLOR"}), "colorborder": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLORBORDER"}), "linewidth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEWIDTH"})}, "z2ui5_cl_demo_app_123=>ty_ROUTE", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp2_d73221ca3a");
    let temp4 = new abap.types.Structure({"position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-POSITION"}), "routetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-ROUTETYPE"}), "linedash": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEDASH"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLOR"}), "colorborder": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLORBORDER"}), "linewidth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEWIDTH"})}, "z2ui5_cl_demo_app_123=>ty_ROUTE", undefined, {}, {});
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-TEXT"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-COLOR"})}, "z2ui5_cl_demo_app_123=>ty_s_legend", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp3_d73221ca3a");
    let temp6 = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-TEXT"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-COLOR"})}, "z2ui5_cl_demo_app_123=>ty_s_legend", undefined, {}, {});
    let view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let page = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let temp7 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let map = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      abap.statements.clear(temp1);
      temp2.get().pos.set(new abap.types.String().set(`9.98336;53.55024;0`));
      temp2.get().contentoffset.set(new abap.types.String().set(`0;-6`));
      temp2.get().scale.set(new abap.types.String().set(`1;1;1`));
      temp2.get().key.set(new abap.types.String().set(`Hamburg`));
      temp2.get().tooltip.set(new abap.types.String().set(`Hamburg`));
      temp2.get().type.set(new abap.types.String().set(`Default`));
      temp2.get().icon.set(new abap.types.String().set(`factory`));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().pos.set(new abap.types.String().set(`11.5820;48.1351;0`));
      temp2.get().contentoffset.set(new abap.types.String().set(`0;-5`));
      temp2.get().scale.set(new abap.types.String().set(`1;1;1`));
      temp2.get().key.set(new abap.types.String().set(`Munich`));
      temp2.get().tooltip.set(new abap.types.String().set(`Munich`));
      temp2.get().type.set(new abap.types.String().set(`Default`));
      temp2.get().icon.set(new abap.types.String().set(`factory`));
      abap.statements.insertInternal({data: temp2, table: temp1});
      temp2.get().pos.set(new abap.types.String().set(`8.683340000;50.112000000;0`));
      temp2.get().contentoffset.set(new abap.types.String().set(`0;-6`));
      temp2.get().scale.set(new abap.types.String().set(`1;1;1`));
      temp2.get().key.set(new abap.types.String().set(`Frankfurt`));
      temp2.get().tooltip.set(new abap.types.String().set(`Frankfurt`));
      temp2.get().type.set(new abap.types.String().set(`Default`));
      temp2.get().icon.set(new abap.types.String().set(`factory`));
      abap.statements.insertInternal({data: temp2, table: temp1});
      this.mt_spot.set(temp1);
      abap.statements.clear(temp3);
      temp4.get().position.set(new abap.types.Character(47).set('2.3522219;48.856614;0; -74.0059731;40.7143528;0'));
      temp4.get().routetype.set(new abap.types.Character(8).set('Geodesic'));
      temp4.get().linedash.set(new abap.types.Character(4).set('10;5'));
      temp4.get().color.set(new abap.types.Character(10).set('92,186,230'));
      temp4.get().colorborder.set(new abap.types.Character(16).set('rgb(255,255,255)'));
      temp4.get().linewidth.set(new abap.types.Character(2).set('25'));
      abap.statements.insertInternal({data: temp4, table: temp3});
      this.mt_route.set(temp3);
      abap.statements.clear(temp5);
      temp6.get().text.set(new abap.types.Character(19).set('Dashed flight route'));
      temp6.get().color.set(new abap.types.Character(15).set('rgb(92,186,230)'));
      abap.statements.insertInternal({data: temp6, table: temp5});
      temp6.get().text.set(new abap.types.Character(12).set('Flight route'));
      temp6.get().color.set(new abap.types.Character(14).set('rgb(92,186,35)'));
      abap.statements.insertInternal({data: temp6, table: temp5});
      this.mt_legend.set(temp5);
    }
    let unique362 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique362, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
      return;
    }
    view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
    temp7.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
    page.set((await (await view.get().shell()).get().page({title: new abap.types.Character(24).set('abap2UI5 - Map Container'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp7})));
    map.set((await (await (await (await (await page.get().map_container({autoadjustheight: abap.builtin.abap_true})).get().content({ns: new abap.types.String().set(`vk`)})).get().container_content({title: new abap.types.String().set(`Analytic Map`), icon: new abap.types.String().set(`sap-icon://geographic-bubble-chart`)})).get().content({ns: new abap.types.String().set(`vk`)})).get().analytic_map({initialposition: new abap.types.String().set(`9.933573;50;0`), initialzoom: new abap.types.String().set(`6`)})));
    await (await (await map.get().vos()).get().spots({items: (await client.get().z2ui5_if_client$_bind({val: this.mt_spot}))})).get().spot({position: new abap.types.String().set(`{POS}`), contentoffset: new abap.types.String().set(`{CONTENTOFFSET}`), type: new abap.types.String().set(`{TYPE}`), scale: new abap.types.String().set(`{SCALE}`), tooltip: new abap.types.String().set(`{TOOLTIP}`)});
    await (await map.get().routes({items: (await client.get().z2ui5_if_client$_bind({val: this.mt_route}))})).get().route({position: new abap.types.String().set(`{POSITION}`), routetype: new abap.types.String().set(`{ROUTETYPE}`), linedash: new abap.types.Character(10).set('{LINEDASH}'), color: new abap.types.Character(7).set('{COLOR}'), colorborder: new abap.types.Character(13).set('{COLORBORDER}'), linewidth: new abap.types.Character(11).set('{LINEWIDTH}')});
    await (await (await map.get().legend_area()).get().legend({items: (await client.get().z2ui5_if_client$_bind({val: this.mt_legend})), caption: new abap.types.Character(6).set('Legend')})).get().legenditem({text: new abap.types.Character(6).set('{TEXT}'), color: new abap.types.Character(7).set('{COLOR}')});
    await client.get().z2ui5_if_client$view_display({val: (await page.get().stringify())});
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_123'] = z2ui5_cl_demo_app_123;
z2ui5_cl_demo_app_123.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_123.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_123.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_123.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_123.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_123.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_123.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_123.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_123.ty_spot = new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_123=>ty_spot", undefined, {}, {});
z2ui5_cl_demo_app_123.temp1_d73221ca3a = abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_123=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp1_d73221ca3a");
z2ui5_cl_demo_app_123.ty_route = new abap.types.Structure({"position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-POSITION"}), "routetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-ROUTETYPE"}), "linedash": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEDASH"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLOR"}), "colorborder": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLORBORDER"}), "linewidth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEWIDTH"})}, "z2ui5_cl_demo_app_123=>ty_ROUTE", undefined, {}, {});
z2ui5_cl_demo_app_123.temp2_d73221ca3a = abap.types.TableFactory.construct(new abap.types.Structure({"position": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-POSITION"}), "routetype": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-ROUTETYPE"}), "linedash": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEDASH"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLOR"}), "colorborder": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-COLORBORDER"}), "linewidth": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_ROUTE-LINEWIDTH"})}, "z2ui5_cl_demo_app_123=>ty_ROUTE", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp2_d73221ca3a");
z2ui5_cl_demo_app_123.ty_s_legend = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-TEXT"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-COLOR"})}, "z2ui5_cl_demo_app_123=>ty_s_legend", undefined, {}, {});
z2ui5_cl_demo_app_123.temp3_d73221ca3a = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-TEXT"}), "color": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_123=>TY_S_LEGEND-COLOR"})}, "z2ui5_cl_demo_app_123=>ty_s_legend", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_123=>temp3_d73221ca3a");
export {z2ui5_cl_demo_app_123};
//# sourceMappingURL=z2ui5_cl_demo_app_123.clas.mjs.map