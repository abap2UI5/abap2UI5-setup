const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cx_ajson_error.clas.abap
class z2ui5_cx_ajson_error extends cx_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CX_AJSON_ERROR';
  static IMPLEMENTED_INTERFACES = ["IF_T100_MESSAGE","IF_MESSAGE","IF_MESSAGE"];
  static ATTRIBUTES = {"RC": {"type": () => {return new abap.types.Character(4, {"qualifiedName":"z2ui5_cx_ajson_error=>ty_rc"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "MESSAGE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "LOCATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "A1": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "A2": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "A3": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "A4": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "ZCX_AJSON_ERROR": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "msgno": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "attr1": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr2": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr3": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr4": new abap.types.String({qualifiedName: "SCX_ATTRNAME"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_T100_MESSAGE~T100KEY": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_T100_MESSAGE~DEFAULT_TEXTID": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "msgno": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "attr1": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr2": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr3": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr4": new abap.types.String({qualifiedName: "SCX_ATTRNAME"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"TEXTID": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});}, "is_optional": "X"}, "PREVIOUS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": "X"}, "RC": {"type": () => {return new abap.types.Character(4, {"qualifiedName":"z2ui5_cx_ajson_error=>ty_rc"});}, "is_optional": "X"}, "MESSAGE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X"}, "LOCATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X"}, "A1": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": "X"}, "A2": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": "X"}, "A3": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": "X"}, "A4": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": "X"}}},
  "RAISE": {"visibility": "U", "parameters": {"IV_MSG": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_LOCATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X"}, "IS_NODE": {"type": () => {return new abap.types.Character(4);}, "is_optional": "X"}}},
  "SET_LOCATION": {"visibility": "U", "parameters": {"IV_LOCATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": "X"}, "IS_NODE": {"type": () => {return new abap.types.Character(4);}, "is_optional": "X"}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.rc = new abap.types.Character(4, {"qualifiedName":"z2ui5_cx_ajson_error=>ty_rc"});
    this.message = new abap.types.String({qualifiedName: "STRING"});
    this.location = new abap.types.String({qualifiedName: "STRING"});
    this.a1 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    this.a2 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    this.a3 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    this.a4 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    this.if_t100_message$default_textid = abap.Classes['IF_T100_MESSAGE'].if_t100_message$default_textid;
    if (this.if_t100_message$t100key === undefined) this.if_t100_message$t100key = new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});
    this.zcx_ajson_error = z2ui5_cx_ajson_error.zcx_ajson_error;
  }
  async constructor_(INPUT) {
    let textid = new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});
    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    let rc = new abap.types.Character(4, {"qualifiedName":"z2ui5_cx_ajson_error=>ty_rc"});
    if (INPUT && INPUT.rc) {rc.set(INPUT.rc);}
    let message = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.message) {message.set(INPUT.message);}
    let location = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.location) {location.set(INPUT.location);}
    let a1 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.a1) {a1.set(INPUT.a1);}
    let a2 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.a2) {a2.set(INPUT.a2);}
    let a3 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.a3) {a3.set(INPUT.a3);}
    let a4 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.a4) {a4.set(INPUT.a4);}
    await super.constructor_({previous: previous});
    this.me.get().rc.set(rc);
    this.me.get().message.set(message);
    this.me.get().location.set(location);
    this.me.get().a1.set(a1);
    this.me.get().a2.set(a2);
    this.me.get().a3.set(a3);
    this.me.get().a4.set(a4);
    abap.statements.clear(this.me.get().textid);
    if (abap.compare.initial(textid)) {
      this.if_t100_message$t100key.set(z2ui5_cx_ajson_error.zcx_ajson_error);
    } else {
      this.if_t100_message$t100key.set(textid);
    }
    return this;
  }
  async raise(INPUT) {
    return z2ui5_cx_ajson_error.raise(INPUT);
  }
  static async raise(INPUT) {
    let iv_msg = INPUT?.iv_msg;
    if (iv_msg?.getQualifiedName === undefined || iv_msg.getQualifiedName() !== "STRING") { iv_msg = undefined; }
    if (iv_msg === undefined) { iv_msg = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_msg); }
    let iv_location = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_location) {iv_location.set(INPUT.iv_location);}
    let is_node = INPUT?.is_node || new abap.types.Character(4);
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    lx.set(await (new abap.Classes['Z2UI5_CX_AJSON_ERROR']()).constructor_({message: iv_msg}));
    await lx.get().set_location({iv_location: iv_location, is_node: is_node});
    throw lx.get();
  }
  async set_location(INPUT) {
    let iv_location = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_location) {iv_location.set(INPUT.iv_location);}
    let is_node = INPUT?.is_node || new abap.types.Character(4);
    let ls_msg = new abap.types.Structure({"a1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "a2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "a3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "a4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"})}, "z2ui5_cx_ajson_error=>ty_message_parts", undefined, {}, {});
    let lv_location = new abap.types.String({qualifiedName: "STRING"});
    let lv_tmp = new abap.types.String({qualifiedName: "STRING"});
    let fs_path_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let fs_name_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    if (abap.compare.initial(iv_location) === false) {
      lv_location.set(iv_location);
    } else if (abap.compare.initial(is_node) === false) {
      abap.statements.assign({component: new abap.types.Character(4).set('PATH'), target: fs_path_, source: is_node});
      abap.statements.assign({component: new abap.types.Character(4).set('NAME'), target: fs_name_, source: is_node});
      if (abap.compare.assigned(fs_path_) && abap.compare.assigned(fs_name_)) {
        lv_location.set(abap.operators.concat(fs_path_,fs_name_));
      }
    }
    if (abap.compare.initial(lv_location) === false) {
      lv_tmp.set(abap.operators.concat(this.message,new abap.types.String().set(` @${abap.templateFormatting(lv_location)}`)));
    } else {
      lv_tmp.set(this.message);
    }
    ls_msg.set(lv_tmp);
    this.location.set(lv_location);
    this.a1.set(ls_msg.get().a1);
    this.a2.set(ls_msg.get().a2);
    this.a3.set(ls_msg.get().a3);
    this.a4.set(ls_msg.get().a4);
  }
}
abap.Classes['Z2UI5_CX_AJSON_ERROR'] = z2ui5_cx_ajson_error;
z2ui5_cx_ajson_error.zcx_ajson_error = new abap.types.Structure({"msgid": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "msgno": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "attr1": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr2": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr3": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr4": new abap.types.String({qualifiedName: "SCX_ATTRNAME"})}, undefined, undefined, {}, {});
z2ui5_cx_ajson_error.zcx_ajson_error.get().msgid.set('00');
z2ui5_cx_ajson_error.zcx_ajson_error.get().msgno.set('001');
z2ui5_cx_ajson_error.zcx_ajson_error.get().attr1.set('A1');
z2ui5_cx_ajson_error.zcx_ajson_error.get().attr2.set('A2');
z2ui5_cx_ajson_error.zcx_ajson_error.get().attr3.set('A3');
z2ui5_cx_ajson_error.zcx_ajson_error.get().attr4.set('A4');
z2ui5_cx_ajson_error.if_t100_message$default_textid = new abap.types.Structure({"msgid": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "msgno": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "attr1": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr2": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr3": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr4": new abap.types.String({qualifiedName: "SCX_ATTRNAME"})}, undefined, undefined, {}, {});
z2ui5_cx_ajson_error.if_t100_message$default_textid.get().msgid.set('AB');
z2ui5_cx_ajson_error.if_t100_message$default_textid.get().msgno.set('123');
z2ui5_cx_ajson_error.if_t100_message$default_textid.get().attr1.set('');
z2ui5_cx_ajson_error.if_t100_message$default_textid.get().attr2.set('');
z2ui5_cx_ajson_error.if_t100_message$default_textid.get().attr3.set('');
z2ui5_cx_ajson_error.if_t100_message$default_textid.get().attr4.set('');
z2ui5_cx_ajson_error.ty_rc = new abap.types.Character(4, {"qualifiedName":"z2ui5_cx_ajson_error=>ty_rc"});
z2ui5_cx_ajson_error.ty_message_parts = new abap.types.Structure({"a1": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "a2": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "a3": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"}), "a4": new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"})}, "z2ui5_cx_ajson_error=>ty_message_parts", undefined, {}, {});
export {z2ui5_cx_ajson_error};
//# sourceMappingURL=z2ui5_cx_ajson_error.clas.mjs.map