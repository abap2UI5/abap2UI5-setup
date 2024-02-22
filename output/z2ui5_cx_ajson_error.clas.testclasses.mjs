const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {z2ui5_cx_ajson_error} = await import("./z2ui5_cx_ajson_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cx_ajson_error.clas.testclasses.abap
class ltcl_error {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-Z2UI5_CX_AJSON_ERROR-LTCL_ERROR';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"RAISE": {"visibility": "I", "parameters": {}},
  "RAISE_W_LOCATION": {"visibility": "I", "parameters": {}},
  "RAISE_W_NODE": {"visibility": "I", "parameters": {}},
  "SET_LOCATION": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async raise() {
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    let lv_msg = new abap.types.String({qualifiedName: "STRING"});
    lv_msg.set(abap.operators.concat(abap.builtin.repeat({val: new abap.types.Character(1).set('a'), occ: abap.IntegerFactory.get(50)}),abap.operators.concat(abap.builtin.repeat({val: new abap.types.Character(1).set('b'), occ: abap.IntegerFactory.get(50)}),new abap.types.Character(3).set('123'))));
    try {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: lv_msg});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: lv_msg, act: (await lx.get().if_message$get_text())});
      } else {
        throw e;
      }
    }
  }
  async raise_w_location() {
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    try {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(1).set('a'), iv_location: new abap.types.Character(1).set('b')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(4).set('a @b'), act: (await lx.get().if_message$get_text())});
      } else {
        throw e;
      }
    }
  }
  async raise_w_node() {
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    let ls_node = new abap.types.Structure({"path": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-PATH"}), "name": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-NAME"}), "type": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE_TYPE"}), "value": new abap.types.String({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-VALUE"}), "index": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-INDEX"}), "order": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-ORDER"}), "children": new abap.types.Integer({qualifiedName: "Z2UI5_IF_AJSON_TYPES=>TY_NODE-CHILDREN"})}, "z2ui5_if_ajson_types=>ty_node", undefined, {}, {});
    ls_node.get().path.set(new abap.types.Character(3).set('/x/'));
    ls_node.get().name.set(new abap.types.Character(1).set('y'));
    try {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(1).set('a'), is_node: ls_node});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(7).set('a @/x/y'), act: (await lx.get().if_message$get_text())});
      } else {
        throw e;
      }
    }
  }
  async set_location() {
    let lx = new abap.types.ABAPObject({qualifiedName: "Z2UI5_CX_AJSON_ERROR", RTTIName: "\\CLASS=Z2UI5_CX_AJSON_ERROR"});
    try {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(1).set('a'), iv_location: new abap.types.Character(1).set('b')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: lx.get().location, act: new abap.types.Character(1).set('b')});
        await lx.get().set_location({iv_location: new abap.types.Character(1).set('c')});
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: lx.get().location, act: new abap.types.Character(1).set('c')});
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(4).set('a @c'), act: (await lx.get().if_message$get_text())});
      } else {
        throw e;
      }
    }
    try {
      await abap.Classes['Z2UI5_CX_AJSON_ERROR'].raise({iv_msg: new abap.types.Character(1).set('a')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail();
    } catch (e) {
      if ((abap.Classes['Z2UI5_CX_AJSON_ERROR'] && e instanceof abap.Classes['Z2UI5_CX_AJSON_ERROR'])) {
        lx.set(e);
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: lx.get().location, act: new abap.types.Character(1).set('')});
        await lx.get().set_location({iv_location: new abap.types.Character(1).set('c')});
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: lx.get().location, act: new abap.types.Character(1).set('c')});
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(4).set('a @c'), act: (await lx.get().if_message$get_text())});
      } else {
        throw e;
      }
    }
  }
}
abap.Classes['CLAS-Z2UI5_CX_AJSON_ERROR-LTCL_ERROR'] = ltcl_error;
export {ltcl_error};
//# sourceMappingURL=z2ui5_cx_ajson_error.clas.testclasses.mjs.map