const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_xml_view_cc.clas.abap
class z2ui5_cl_xml_view_cc {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_XML_VIEW_CC';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MO_VIEW": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "visibility": "O", "is_constant": " ", "is_class": " "}};
  static METHODS = {"MULTIINPUT_EXT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "MULTIINPUTID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHANGE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ADDEDTOKENS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "REMOVEDTOKENS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "MULTIINPUT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "SHOWCLEARICON": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SHOWVALUEHELP": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SUGGESTIONITEMS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TOKENUPDATE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "WIDTH": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TOKENS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SUBMIT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "VALUEHELPREQUEST": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ENABLED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CLASS_": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHANGE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ADDEDTOKENS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "REMOVEDTOKENS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "UITABLEEXT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "TABLEID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CAMERA_PICTURE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "PRESS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "AUTOPLAY": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ONPHOTO": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "BWIP_JS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "BCID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SCALE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HEIGHT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "DEMO_OUTPUT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "VAL": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "FOCUS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "FOCUSID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SELECTIONSTART": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SELECTIONEND": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "SETUPDATE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "GEOLOCATION": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "FINISHED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "LONGITUDE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "LATITUDE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "ALTITUDE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "ACCURACY": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "ALTITUDEACCURACY": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "SPEED": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "HEADING": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "ENABLEHIGHACCURACY": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "TIMEOUT": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "INFO_FRONTEND": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "FINISHED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "UI5_VERSION": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "UI5_GAV": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "UI5_THEME": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "DEVICE_OS": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "DEVICE_SYSTEMTYPE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "DEVICE_BROWSER": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SPREADSHEET_EXPORT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "TABLEID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "TEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ICON": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "FILE_UPLOADER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "PATH": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "PLACEHOLDER": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "UPLOAD": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ICONONLY": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "BUTTONONLY": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "BUTTONTEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "UPLOADBUTTONTEXT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECKDIRECTUPLOAD": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "FILETYPE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "MESSAGING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "ITEMS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "MESSAGE_MANAGER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "ITEMS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "TITLE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "TITLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "HISTORY": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "SEARCH": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "SCROLLING": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "SETUPDATE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "ITEMS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "TIMER": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "FINISHED": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "DELAYMS": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECKREPEAT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CHECKACTIVE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CHARTJS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "CANVAS_ID": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "VIEW": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "CONFIG": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "HEIGHT": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "WIDTH": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "STYLE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "FAVICON": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}, "FAVICON": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"VIEW": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mo_view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
  }
  async bwip_js(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let bcid = INPUT?.bcid || new abap.types.Character();
    let text = INPUT?.text || new abap.types.Character();
    let scale = INPUT?.scale || new abap.types.Character();
    let height = INPUT?.height || new abap.types.Character();
    let temp1 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp2 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp1);
    temp2.get().n.set(new abap.types.String().set(`bcid`));
    temp2.get().v.set(bcid);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`text`));
    temp2.get().v.set(text);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`scale`));
    temp2.get().v.set(scale);
    abap.statements.insertInternal({data: temp2, table: temp1});
    temp2.get().n.set(new abap.types.String().set(`height`));
    temp2.get().v.set(height);
    abap.statements.insertInternal({data: temp2, table: temp1});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`bwipjs`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp1});
    return result;
  }
  async camera_picture(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let id = INPUT?.id || new abap.types.Character();
    let value = INPUT?.value || new abap.types.Character();
    let press = INPUT?.press || new abap.types.Character();
    let autoplay = INPUT?.autoplay || new abap.types.Character();
    let onphoto = INPUT?.onphoto || new abap.types.Character();
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp4 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp3);
    temp4.get().n.set(new abap.types.String().set(`id`));
    temp4.get().v.set(id);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`value`));
    temp4.get().v.set(value);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`press`));
    temp4.get().v.set(press);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`OnPhoto`));
    temp4.get().v.set(onphoto);
    abap.statements.insertInternal({data: temp4, table: temp3});
    temp4.get().n.set(new abap.types.String().set(`autoplay`));
    temp4.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: autoplay})));
    abap.statements.insertInternal({data: temp4, table: temp3});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`CameraPicture`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp3});
    return result;
  }
  async chartjs(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let canvas_id = INPUT?.canvas_id || new abap.types.Character();
    let view = INPUT?.view || new abap.types.Character();
    let config = INPUT?.config || new abap.types.Character();
    let height = INPUT?.height || new abap.types.Character();
    let width = INPUT?.width || new abap.types.Character();
    let style = INPUT?.style || new abap.types.Character();
    let temp5 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp6 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp5);
    temp6.get().n.set(new abap.types.String().set(`canvas_id`));
    temp6.get().v.set(canvas_id);
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`view`));
    temp6.get().v.set(view);
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`config`));
    temp6.get().v.set(config);
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`height`));
    temp6.get().v.set(height);
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`width`));
    temp6.get().v.set(width);
    abap.statements.insertInternal({data: temp6, table: temp5});
    temp6.get().n.set(new abap.types.String().set(`style`));
    temp6.get().v.set(style);
    abap.statements.insertInternal({data: temp6, table: temp5});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`chartjs`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp5});
    return result;
  }
  async constructor_(INPUT) {
    let view = INPUT?.view;
    if (view?.getQualifiedName === undefined || view.getQualifiedName() !== "Z2UI5_CL_XML_VIEW") { view = undefined; }
    if (view === undefined) { view = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"}).set(INPUT.view); }
    this.me.get().mo_view.set(view);
    return this;
  }
  async demo_output(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let val = INPUT?.val || new abap.types.Character();
    let lv_style = new abap.types.String({qualifiedName: "STRING"});
    await this.mo_view.get()._generic({ns: new abap.types.String().set(`html`), name: new abap.types.String().set(`style`)});
    if (abap.Classes['Z2UI5_CL_CC_DEMO_OUTPUT'.trimEnd()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; }
    if (abap.Classes['Z2UI5_CL_CC_DEMO_OUTPUT'.trimEnd()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); }
    if (abap.Classes['Z2UI5_CL_CC_DEMO_OUTPUT'.trimEnd()].get_style === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
    if (abap.Classes['Z2UI5_CL_CC_DEMO_OUTPUT'.trimEnd()].get_style === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'.trimEnd()](); }
    lv_style.set(await abap.Classes['Z2UI5_CL_CC_DEMO_OUTPUT'.trimEnd()].get_style());
    result.set((await (await this.mo_view.get()._cc_plain_xml({val: lv_style})).get().html({content: val})));
    return result;
  }
  async favicon(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let favicon = INPUT?.favicon || new abap.types.Character();
    let temp7 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp8 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp7);
    temp8.get().n.set(new abap.types.String().set(`favicon`));
    temp8.get().v.set(favicon);
    abap.statements.insertInternal({data: temp8, table: temp7});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Favicon`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp7});
    return result;
  }
  async file_uploader(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let value = INPUT?.value || new abap.types.Character();
    let path = INPUT?.path || new abap.types.Character();
    let placeholder = INPUT?.placeholder || new abap.types.Character();
    let upload = INPUT?.upload || new abap.types.Character();
    let icononly = INPUT?.icononly || new abap.types.Character();
    let buttononly = INPUT?.buttononly || new abap.types.Character();
    let buttontext = INPUT?.buttontext || new abap.types.Character();
    let uploadbuttontext = INPUT?.uploadbuttontext || new abap.types.Character();
    let checkdirectupload = INPUT?.checkdirectupload || new abap.types.Character();
    let filetype = INPUT?.filetype || new abap.types.Character();
    let temp9 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp10 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp9);
    temp10.get().n.set(new abap.types.String().set(`placeholder`));
    temp10.get().v.set(placeholder);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`upload`));
    temp10.get().v.set(upload);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`path`));
    temp10.get().v.set(path);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`value`));
    temp10.get().v.set(value);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`iconOnly`));
    temp10.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: icononly})));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`buttonOnly`));
    temp10.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: buttononly})));
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`buttonText`));
    temp10.get().v.set(buttontext);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`uploadButtonText`));
    temp10.get().v.set(uploadbuttontext);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`fileType`));
    temp10.get().v.set(filetype);
    abap.statements.insertInternal({data: temp10, table: temp9});
    temp10.get().n.set(new abap.types.String().set(`checkDirectUpload`));
    temp10.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: checkdirectupload})));
    abap.statements.insertInternal({data: temp10, table: temp9});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`FileUploader`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp9});
    return result;
  }
  async focus(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let focusid = INPUT?.focusid || new abap.types.Character();
    let selectionstart = INPUT?.selectionstart || new abap.types.Character();
    let selectionend = INPUT?.selectionend || new abap.types.Character();
    let setupdate = INPUT?.setupdate || new abap.types.Character();
    let temp11 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp12 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp11);
    temp12.get().n.set(new abap.types.String().set(`setUpdate`));
    temp12.get().v.set(setupdate);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`selectionStart`));
    temp12.get().v.set(selectionstart);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`selectionEnd`));
    temp12.get().v.set(selectionend);
    abap.statements.insertInternal({data: temp12, table: temp11});
    temp12.get().n.set(new abap.types.String().set(`focusId`));
    temp12.get().v.set(focusid);
    abap.statements.insertInternal({data: temp12, table: temp11});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Focus`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp11});
    return result;
  }
  async geolocation(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let finished = INPUT?.finished || new abap.types.Character();
    let longitude = INPUT?.longitude || new abap.types.Character(4);
    let latitude = INPUT?.latitude || new abap.types.Character(4);
    let altitude = INPUT?.altitude || new abap.types.Character(4);
    let accuracy = INPUT?.accuracy || new abap.types.Character(4);
    let altitudeaccuracy = INPUT?.altitudeaccuracy || new abap.types.Character(4);
    let speed = INPUT?.speed || new abap.types.Character(4);
    let heading = INPUT?.heading || new abap.types.Character(4);
    let enablehighaccuracy = INPUT?.enablehighaccuracy || new abap.types.Character(4);
    let timeout = INPUT?.timeout || new abap.types.Character(4);
    let temp13 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp14 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp13);
    temp14.get().n.set(new abap.types.String().set(`finished`));
    temp14.get().v.set(finished);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`longitude`));
    temp14.get().v.set(longitude);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`latitude`));
    temp14.get().v.set(latitude);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`altitude`));
    temp14.get().v.set(altitude);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`accuracy`));
    temp14.get().v.set(accuracy);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`altitudeAccuracy`));
    temp14.get().v.set(altitudeaccuracy);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`speed`));
    temp14.get().v.set(speed);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`heading`));
    temp14.get().v.set(heading);
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`enableHighAccuracy`));
    temp14.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: enablehighaccuracy})));
    abap.statements.insertInternal({data: temp14, table: temp13});
    temp14.get().n.set(new abap.types.String().set(`timeout`));
    temp14.get().v.set(timeout);
    abap.statements.insertInternal({data: temp14, table: temp13});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Geolocation`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp13});
    return result;
  }
  async history(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let search = INPUT?.search || new abap.types.Character();
    let temp15 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp16 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp15);
    temp16.get().n.set(new abap.types.String().set(`search`));
    temp16.get().v.set(search);
    abap.statements.insertInternal({data: temp16, table: temp15});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`History`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp15});
    return result;
  }
  async info_frontend(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let finished = INPUT?.finished || new abap.types.Character();
    let ui5_version = INPUT?.ui5_version || new abap.types.Character(4);
    let ui5_gav = INPUT?.ui5_gav || new abap.types.Character(4);
    let ui5_theme = INPUT?.ui5_theme || new abap.types.Character(4);
    let device_os = INPUT?.device_os || new abap.types.Character(4);
    let device_systemtype = INPUT?.device_systemtype || new abap.types.Character(4);
    let device_browser = INPUT?.device_browser || new abap.types.Character(4);
    let temp17 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp18 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp17);
    temp18.get().n.set(new abap.types.String().set(`ui5_version`));
    temp18.get().v.set(ui5_version);
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().n.set(new abap.types.String().set(`ui5_gav`));
    temp18.get().v.set(ui5_gav);
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().n.set(new abap.types.String().set(`finished`));
    temp18.get().v.set(finished);
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().n.set(new abap.types.String().set(`ui5_theme`));
    temp18.get().v.set(ui5_theme);
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().n.set(new abap.types.String().set(`device_os`));
    temp18.get().v.set(device_os);
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().n.set(new abap.types.String().set(`device_systemtype`));
    temp18.get().v.set(device_systemtype);
    abap.statements.insertInternal({data: temp18, table: temp17});
    temp18.get().n.set(new abap.types.String().set(`device_browser`));
    temp18.get().v.set(device_browser);
    abap.statements.insertInternal({data: temp18, table: temp17});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Info`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp17});
    return result;
  }
  async message_manager(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let items = INPUT?.items || new abap.types.Character();
    let temp19 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp20 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp19);
    temp20.get().n.set(new abap.types.String().set(`items`));
    temp20.get().v.set(items);
    abap.statements.insertInternal({data: temp20, table: temp19});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`MessageManager`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp19});
    return result;
  }
  async messaging(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let items = INPUT?.items || new abap.types.Character();
    let temp21 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp22 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp21);
    temp22.get().n.set(new abap.types.String().set(`items`));
    temp22.get().v.set(items);
    abap.statements.insertInternal({data: temp22, table: temp21});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Messaging`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp21});
    return result;
  }
  async multiinput(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let showclearicon = INPUT?.showclearicon || new abap.types.Character();
    let showvaluehelp = INPUT?.showvaluehelp || new abap.types.Character();
    let suggestionitems = INPUT?.suggestionitems || new abap.types.Character();
    let tokenupdate = INPUT?.tokenupdate || new abap.types.Character();
    let width = INPUT?.width || new abap.types.Character();
    let id = INPUT?.id || new abap.types.Character();
    let value = INPUT?.value || new abap.types.Character();
    let tokens = INPUT?.tokens || new abap.types.Character();
    let submit = INPUT?.submit || new abap.types.Character();
    let valuehelprequest = INPUT?.valuehelprequest || new abap.types.Character();
    let enabled = INPUT?.enabled || new abap.types.Character();
    let class_ = INPUT?.class_ || new abap.types.Character();
    let change = INPUT?.change || new abap.types.Character();
    let addedtokens = INPUT?.addedtokens || new abap.types.Character();
    let removedtokens = INPUT?.removedtokens || new abap.types.Character();
    let temp23 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp24 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp23);
    temp24.get().n.set(new abap.types.String().set(`tokens`));
    temp24.get().v.set(tokens);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`showClearIcon`));
    temp24.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: showclearicon})));
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`showValueHelp`));
    temp24.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: showvaluehelp})));
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`enabled`));
    temp24.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: enabled})));
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`suggestionItems`));
    temp24.get().v.set(suggestionitems);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`tokenUpdate`));
    temp24.get().v.set(tokenupdate);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`submit`));
    temp24.get().v.set(submit);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`width`));
    temp24.get().v.set(width);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`value`));
    temp24.get().v.set(value);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`id`));
    temp24.get().v.set(id);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`change`));
    temp24.get().v.set(change);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`valueHelpRequest`));
    temp24.get().v.set(valuehelprequest);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`addedTokens`));
    temp24.get().v.set(addedtokens);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`removedTokens`));
    temp24.get().v.set(removedtokens);
    abap.statements.insertInternal({data: temp24, table: temp23});
    temp24.get().n.set(new abap.types.String().set(`class`));
    temp24.get().v.set(class_);
    abap.statements.insertInternal({data: temp24, table: temp23});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`MultiInput`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp23});
    return result;
  }
  async multiinput_ext(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let multiinputid = INPUT?.multiinputid || new abap.types.Character();
    let change = INPUT?.change || new abap.types.Character();
    let addedtokens = INPUT?.addedtokens || new abap.types.Character();
    let removedtokens = INPUT?.removedtokens || new abap.types.Character();
    let temp25 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp26 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp25);
    temp26.get().n.set(new abap.types.String().set(`MultiInputId`));
    temp26.get().v.set(multiinputid);
    abap.statements.insertInternal({data: temp26, table: temp25});
    temp26.get().n.set(new abap.types.String().set(`change`));
    temp26.get().v.set(change);
    abap.statements.insertInternal({data: temp26, table: temp25});
    temp26.get().n.set(new abap.types.String().set(`addedTokens`));
    temp26.get().v.set(addedtokens);
    abap.statements.insertInternal({data: temp26, table: temp25});
    temp26.get().n.set(new abap.types.String().set(`removedTokens`));
    temp26.get().v.set(removedtokens);
    abap.statements.insertInternal({data: temp26, table: temp25});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`MultiInputExt`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp25});
    return result;
  }
  async scrolling(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let setupdate = INPUT?.setupdate || new abap.types.Character();
    let items = INPUT?.items || new abap.types.Character();
    let temp27 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp28 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp27);
    temp28.get().n.set(new abap.types.String().set(`setUpdate`));
    temp28.get().v.set(setupdate);
    abap.statements.insertInternal({data: temp28, table: temp27});
    temp28.get().n.set(new abap.types.String().set(`items`));
    temp28.get().v.set(items);
    abap.statements.insertInternal({data: temp28, table: temp27});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Scrolling`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp27});
    return result;
  }
  async spreadsheet_export(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tableid = INPUT?.tableid;
    let type = INPUT?.type || new abap.types.Character();
    let text = INPUT?.text || new abap.types.Character();
    let icon = INPUT?.icon || new abap.types.Character();
    let temp29 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp30 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp29);
    temp30.get().n.set(new abap.types.String().set(`tableId`));
    temp30.get().v.set(tableid);
    abap.statements.insertInternal({data: temp30, table: temp29});
    temp30.get().n.set(new abap.types.String().set(`text`));
    temp30.get().v.set(text);
    abap.statements.insertInternal({data: temp30, table: temp29});
    temp30.get().n.set(new abap.types.String().set(`icon`));
    temp30.get().v.set(icon);
    abap.statements.insertInternal({data: temp30, table: temp29});
    temp30.get().n.set(new abap.types.String().set(`type`));
    temp30.get().v.set(type);
    abap.statements.insertInternal({data: temp30, table: temp29});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`ExportSpreadsheet`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp29});
    return result;
  }
  async timer(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let finished = INPUT?.finished || new abap.types.Character();
    let delayms = INPUT?.delayms || new abap.types.Character();
    let checkrepeat = INPUT?.checkrepeat || new abap.types.Character();
    let checkactive = INPUT?.checkactive || new abap.types.Character();
    let temp31 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp32 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp31);
    temp32.get().n.set(new abap.types.String().set(`delayMS`));
    temp32.get().v.set(delayms);
    abap.statements.insertInternal({data: temp32, table: temp31});
    temp32.get().n.set(new abap.types.String().set(`finished`));
    temp32.get().v.set(finished);
    abap.statements.insertInternal({data: temp32, table: temp31});
    temp32.get().n.set(new abap.types.String().set(`checkActive`));
    temp32.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: checkactive})));
    abap.statements.insertInternal({data: temp32, table: temp31});
    temp32.get().n.set(new abap.types.String().set(`checkRepeat`));
    temp32.get().v.set((await abap.Classes['Z2UI5_CL_UTIL'].boolean_abap_2_json({val: checkrepeat})));
    abap.statements.insertInternal({data: temp32, table: temp31});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Timer`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp31});
    return result;
  }
  async title(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let title = INPUT?.title || new abap.types.Character();
    let temp33 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp34 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    result.set(this.mo_view);
    abap.statements.clear(temp33);
    temp34.get().n.set(new abap.types.String().set(`title`));
    temp34.get().v.set(title);
    abap.statements.insertInternal({data: temp34, table: temp33});
    await this.mo_view.get()._generic({name: new abap.types.String().set(`Title`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp33});
    return result;
  }
  async uitableext(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CL_XML_VIEW", RTTIName: "\\CLASS=Z2UI5_CL_XML_VIEW"});
    let tableid = INPUT?.tableid || new abap.types.Character();
    let temp35 = abap.types.TableFactory.construct(new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "z2ui5_if_types=>ty_t_name_value");
    let temp36 = new abap.types.Structure({"n": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-N"}), "v": new abap.types.String({qualifiedName: "Z2UI5_IF_TYPES=>TY_S_NAME_VALUE-V"})}, "z2ui5_if_types=>ty_s_name_value", undefined, {}, {});
    abap.statements.clear(temp35);
    temp36.get().n.set(new abap.types.String().set(`tableId`));
    temp36.get().v.set(tableid);
    abap.statements.insertInternal({data: temp36, table: temp35});
    result.set((await this.mo_view.get()._generic({name: new abap.types.String().set(`UITableExt`), ns: new abap.types.String().set(`z2ui5`), t_prop: temp35})));
    return result;
  }
}
abap.Classes['Z2UI5_CL_XML_VIEW_CC'] = z2ui5_cl_xml_view_cc;
export {z2ui5_cl_xml_view_cc};
//# sourceMappingURL=z2ui5_cl_xml_view_cc.clas.mjs.map