const {cx_root} = await import("./cx_root.clas.mjs");
// cl_gui_container.clas.abap
class cl_gui_container {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_GUI_CONTAINER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"SCREEN0": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_GUI_CONTAINER", RTTIName: "\\CLASS=CL_GUI_CONTAINER"});}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "DEFAULT_SCREEN": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_GUI_CONTAINER", RTTIName: "\\CLASS=CL_GUI_CONTAINER"});}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "VISIBLE_TRUE": {"type": () => {return new abap.types.Character(1, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "VISIBLE_FALSE": {"type": () => {return new abap.types.Character(1, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"FREE": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.screen0 = cl_gui_container.screen0;
    this.default_screen = cl_gui_container.default_screen;
    this.visible_true = cl_gui_container.visible_true;
    this.visible_false = cl_gui_container.visible_false;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async free() {
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('not supported')));
  }
}
abap.Classes['CL_GUI_CONTAINER'] = cl_gui_container;
cl_gui_container.screen0 = new abap.types.ABAPObject({qualifiedName: "CL_GUI_CONTAINER", RTTIName: "\\CLASS=CL_GUI_CONTAINER"});
cl_gui_container.default_screen = new abap.types.ABAPObject({qualifiedName: "CL_GUI_CONTAINER", RTTIName: "\\CLASS=CL_GUI_CONTAINER"});
cl_gui_container.visible_true = new abap.types.Character(1, {});
cl_gui_container.visible_true.set('1');
cl_gui_container.visible_false = new abap.types.Character(1, {});
cl_gui_container.visible_false.set('0');
export {cl_gui_container};
//# sourceMappingURL=cl_gui_container.clas.mjs.map