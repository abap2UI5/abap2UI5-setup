const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_demo_app_120.clas.abap
class z2ui5_cl_demo_app_120 {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_DEMO_APP_120';
  static IMPLEMENTED_INTERFACES = ["Z2UI5_IF_APP","IF_SERIALIZABLE_OBJECT"];
  static ATTRIBUTES = {"LONGITUDE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LATITUDE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "ALTITUDE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "SPEED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "ALTITUDEACCURACY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "ACCURACY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "CHECK_INITIALIZED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MT_SPOT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_120=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_120=>temp1_0dabf66d4a");}, "visibility": "U", "is_constant": " ", "is_class": " "},
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
    this.longitude = new abap.types.String({qualifiedName: "STRING"});
    this.latitude = new abap.types.String({qualifiedName: "STRING"});
    this.altitude = new abap.types.String({qualifiedName: "STRING"});
    this.speed = new abap.types.String({qualifiedName: "STRING"});
    this.altitudeaccuracy = new abap.types.String({qualifiedName: "STRING"});
    this.accuracy = new abap.types.String({qualifiedName: "STRING"});
    this.check_initialized = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mt_spot = abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_120=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_120=>temp1_0dabf66d4a");
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
    let temp3 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_120=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_120=>temp1_0dabf66d4a");
    let temp2 = new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_120=>ty_spot", undefined, {}, {});
    let temp4 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    if (abap.compare.eq(this.check_initialized, abap.builtin.abap_false)) {
      this.check_initialized.set(abap.builtin.abap_true);
      view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      temp3.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
      await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - Device Capabilities'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp3})).get()._z2ui5()).get().geolocation({finished: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`GEOLOCATION_LOADED`)})), longitude: (await client.get().z2ui5_if_client$_bind_edit({val: this.longitude})), latitude: (await client.get().z2ui5_if_client$_bind_edit({val: this.latitude})), altitude: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitude})), altitudeaccuracy: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitudeaccuracy})), accuracy: (await client.get().z2ui5_if_client$_bind_edit({val: this.accuracy})), speed: (await client.get().z2ui5_if_client$_bind_edit({val: this.speed}))})).get().simple_form({title: new abap.types.Character(11).set('Geolocation'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(9).set('Longitude')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.longitude}))})).get().label({text: new abap.types.String().set(`Latitude`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.latitude}))})).get().label({text: new abap.types.String().set(`Altitude`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitude}))})).get().label({text: new abap.types.String().set(`Accuracy`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.accuracy}))})).get().label({text: new abap.types.String().set(`AltitudeAccuracy`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitudeaccuracy}))})).get().label({text: new abap.types.String().set(`Speed`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.speed}))})).get().label({text: new abap.types.String().set(`MapContainer`)})).get().button({text: new abap.types.String().set(`Display`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`MAP_CONTAINER_DISPLAY`)}))})).get().stringify())});
      return;
    }
    let unique359 = ((await client.get().z2ui5_if_client$get())).get().event;
    if (abap.compare.eq(unique359, new abap.types.Character(21).set('MAP_CONTAINER_DISPLAY'))) {
      if (abap.compare.initial(this.longitude) === false) {
        abap.statements.clear(temp1);
        temp2.get().pos.set(abap.operators.concat(this.longitude,abap.operators.concat(new abap.types.String().set(`;`),abap.operators.concat(this.latitude,new abap.types.String().set(`;0`)))));
        temp2.get().type.set(new abap.types.String().set(`Default`));
        temp2.get().contentoffset.set(new abap.types.String().set(`0;-6`));
        temp2.get().scale.set(new abap.types.String().set(`1;1;1`));
        temp2.get().key.set(new abap.types.String().set(`Your Position`));
        temp2.get().tooltip.set(new abap.types.String().set(`Your Position`));
        abap.statements.insertInternal({data: temp2, table: temp1});
        this.mt_spot.set(temp1);
      }
      view.set((await abap.Classes['Z2UI5_CL_XML_VIEW'].factory()));
      temp4.set(abap.builtin.boolc(abap.compare.initial(((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack) === false));
      await client.get().z2ui5_if_client$view_display({val: (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await (await view.get().shell()).get().page({title: new abap.types.Character(30).set('abap2UI5 - Device Capabilities'), navbuttonpress: (await client.get().z2ui5_if_client$_event({val: new abap.types.Character(4).set('BACK')})), shownavbutton: temp4})).get()._z2ui5()).get().geolocation({finished: (await client.get().z2ui5_if_client$_event()), longitude: (await client.get().z2ui5_if_client$_bind_edit({val: this.longitude})), latitude: (await client.get().z2ui5_if_client$_bind_edit({val: this.latitude})), altitude: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitude})), altitudeaccuracy: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitudeaccuracy})), accuracy: (await client.get().z2ui5_if_client$_bind_edit({val: this.accuracy})), speed: (await client.get().z2ui5_if_client$_bind_edit({val: this.speed}))})).get().simple_form({title: new abap.types.Character(11).set('Geolocation'), editable: abap.builtin.abap_true})).get().content({ns: new abap.types.Character(4).set('form')})).get().label({text: new abap.types.Character(9).set('Longitude')})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.longitude}))})).get().label({text: new abap.types.String().set(`Latitude`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.latitude}))})).get().label({text: new abap.types.String().set(`Altitude`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitude}))})).get().label({text: new abap.types.String().set(`Accuracy`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.accuracy}))})).get().label({text: new abap.types.String().set(`AltitudeAccuracy`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.altitudeaccuracy}))})).get().label({text: new abap.types.String().set(`Speed`)})).get().input({value: (await client.get().z2ui5_if_client$_bind_edit({val: this.speed}))})).get().label({text: new abap.types.String().set(`MapContainer`)})).get().button({text: new abap.types.String().set(`Display`), press: (await client.get().z2ui5_if_client$_event({val: new abap.types.String().set(`MAP_CONTAINER_DISPLAY`)}))})).get().get_parent()).get().get_parent()).get().map_container({autoadjustheight: abap.builtin.abap_true})).get().content({ns: new abap.types.String().set(`vk`)})).get().container_content({title: new abap.types.String().set(`Analytic Map`), icon: new abap.types.String().set(`sap-icon://geographic-bubble-chart`)})).get().content({ns: new abap.types.String().set(`vk`)})).get().analytic_map({initialposition: new abap.types.String().set(`9.933573;50;0`), initialzoom: new abap.types.String().set(`6`)})).get().vos()).get().spots({items: (await client.get().z2ui5_if_client$_bind({val: this.mt_spot}))})).get().spot({position: new abap.types.String().set(`{POS}`), contentoffset: new abap.types.String().set(`{CONTENTOFFSET}`), type: new abap.types.String().set(`{TYPE}`), scale: new abap.types.String().set(`{SCALE}`), tooltip: new abap.types.String().set(`{TOOLTIP}`)})).get().stringify())});
    } else if (abap.compare.eq(unique359, new abap.types.Character(4).set('BACK'))) {
      await client.get().z2ui5_if_client$nav_app_leave({app: (await client.get().z2ui5_if_client$get_app({id: ((await client.get().z2ui5_if_client$get())).get().s_draft.get().id_prev_app_stack}))});
      return;
    }
  }
}
abap.Classes['Z2UI5_CL_DEMO_APP_120'] = z2ui5_cl_demo_app_120;
z2ui5_cl_demo_app_120.z2ui5_if_app$version = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_120.z2ui5_if_app$version.set('1.135.0');
z2ui5_cl_demo_app_120.z2ui5_if_app$origin = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_120.z2ui5_if_app$origin.set('https://github.com/abap2UI5/abap2UI5');
z2ui5_cl_demo_app_120.z2ui5_if_app$author = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_120.z2ui5_if_app$author.set('https://github.com/oblomov-dev');
z2ui5_cl_demo_app_120.z2ui5_if_app$license = new abap.types.String({qualifiedName: "STRING"});
z2ui5_cl_demo_app_120.z2ui5_if_app$license.set('MIT');
z2ui5_cl_demo_app_120.ty_spot = new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_120=>ty_spot", undefined, {}, {});
z2ui5_cl_demo_app_120.temp1_0dabf66d4a = abap.types.TableFactory.construct(new abap.types.Structure({"tooltip": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TOOLTIP"}), "type": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-TYPE"}), "pos": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-POS"}), "scale": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-SCALE"}), "contentoffset": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-CONTENTOFFSET"}), "key": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-KEY"}), "icon": new abap.types.String({qualifiedName: "Z2UI5_CL_DEMO_APP_120=>TY_SPOT-ICON"})}, "z2ui5_cl_demo_app_120=>ty_spot", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_cl_demo_app_120=>temp1_0dabf66d4a");
export {z2ui5_cl_demo_app_120};
//# sourceMappingURL=z2ui5_cl_demo_app_120.clas.mjs.map