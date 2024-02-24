const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_call_transformation.clas.locals_imp.abap
class lcl_heap {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-KERNEL_CALL_TRANSFORMATION-LCL_HEAP';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MV_COUNTER": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MV_DATA": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"ADD": {"visibility": "U", "parameters": {"RV_ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_REF": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "SERIALIZE": {"visibility": "U", "parameters": {"RV_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_counter = new abap.types.Integer({qualifiedName: "I"});
    this.mv_data = new abap.types.String({qualifiedName: "STRING"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async serialize() {
    let rv_xml = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(this.mv_counter, abap.IntegerFactory.get(0))) {
      return rv_xml;
    }
    rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<asx:heap xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:abap="http://www.sap.com/abapxml/types/built-in" xmlns:cls="http://www.sap.com/abapxml/classes/global" xmlns:dic="http://www.sap.com/abapxml/types/dictionary">`)));
    rv_xml.set(abap.operators.concat(rv_xml,this.mv_data));
    rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`</asx:heap>`)));
    return rv_xml;
  }
  async add(INPUT) {
    let rv_id = new abap.types.String({qualifiedName: "STRING"});
    let iv_ref = INPUT?.iv_ref;
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let is_serializable = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let lo_descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR", RTTIName: "\\CLASS=CL_ABAP_CLASSDESCR"});
    let ls_interface = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"abap_intfname"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "abap_intfdescr", undefined, {}, {});
    let ls_attribute = new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr", undefined, {}, {});
    let lo_data_to_xml = new abap.types.ABAPObject({qualifiedName: "LCL_DATA_TO_XML", RTTIName: "\\CLASS-POOL=KERNEL_CALL_TRANSFORMATION\\CLASS=LCL_DATA_TO_XML"});
    let lv_ref = new abap.types.DataReference(new abap.types.Character(4));
    let lv_internal = new abap.types.String({qualifiedName: "STRING"});
    let lv_data = new abap.types.String({qualifiedName: "STRING"});
    let lv_counter = new abap.types.Integer({qualifiedName: "I"});
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.DataReference(new abap.types.Character(4)));
    this.mv_counter.set(abap.operators.add(this.mv_counter,abap.IntegerFactory.get(1)));
    lv_counter.set(this.mv_counter);
    await abap.statements.cast(lo_descr, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_object_ref({p_object_ref: iv_ref})));
    lv_name.set(lo_descr.get().relative_name);
    for await (const unique124 of abap.statements.loop(lo_descr.get().interfaces)) {
      ls_interface.set(unique124);
      if (abap.compare.eq(ls_interface.get().name, new abap.types.Character(22).set('IF_SERIALIZABLE_OBJECT'))) {
        is_serializable.set(abap.builtin.abap_true);
      }
    }
    lv_internal.set(iv_ref.get().constructor.INTERNAL_NAME);
    if (abap.compare.eq(is_serializable, abap.builtin.abap_true)) {
      lo_data_to_xml.set(await (new abap.Classes['CLAS-KERNEL_CALL_TRANSFORMATION-LCL_DATA_TO_XML']()).constructor_({io_heap: this.me}));
      lv_data.set(abap.operators.concat(lv_data,abap.operators.concat(new abap.types.String().set(`<prg:${abap.templateFormatting(lv_name)} xmlns:prg="http://www.sap.com/abapxml/classes/class-pool/TODO" id="o${abap.templateFormatting(this.mv_counter)}" internalName="${abap.templateFormatting(lv_internal)}">`),new abap.types.String().set(`<local.${abap.templateFormatting(lv_name)}>`))));
      for await (const unique125 of abap.statements.loop(lo_descr.get().attributes,{where: async (I) => {return abap.compare.eq(I.is_class, abap.builtin.abap_false);},topEquals: {"is_class": abap.builtin.abap_false}})) {
        ls_attribute.set(unique125);
        abap.statements.assign({target: fs_any_, dynamicName: 'iv_ref' + '->' + ls_attribute.get().name.get(), dynamicSource: (() => {
                    try { return iv_ref; } catch {}
                    try { return this.iv_ref; } catch {}
                  })()});
          abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)));
          abap.statements.replace({target: ls_attribute.get().name, all: false, with: new abap.types.Character(1).set('.'), of: new abap.types.Character(1).set('~')});
          lv_ref.assign(fs_any_.getPointer());
          lv_data.set(abap.operators.concat(lv_data,(await lo_data_to_xml.get().run({iv_name: ls_attribute.get().name, iv_ref: lv_ref}))));
        }
        lv_data.set(abap.operators.concat(lv_data,abap.operators.concat(new abap.types.String().set(`</local.${abap.templateFormatting(lv_name)}>`),new abap.types.String().set(`</prg:${abap.templateFormatting(lv_name)}>`))));
      } else {
        lv_data.set(abap.operators.concat(lv_data,new abap.types.String().set(`<prg:${abap.templateFormatting(lv_name)} xmlns:prg="http://www.sap.com/abapxml/classes/class-pool/TODO" id="o${abap.templateFormatting(this.mv_counter)}"/>`)));
      }
      this.mv_data.set(abap.operators.concat(this.mv_data,lv_data));
      rv_id.set(new abap.types.String().set(`${abap.templateFormatting(lv_counter)}`));
      return rv_id;
    }
  }
  abap.Classes['CLAS-KERNEL_CALL_TRANSFORMATION-LCL_HEAP'] = lcl_heap;
  class lcl_data_to_xml {
    static INTERNAL_TYPE = 'CLAS';
    static INTERNAL_NAME = 'CLAS-KERNEL_CALL_TRANSFORMATION-LCL_DATA_TO_XML';
    static IMPLEMENTED_INTERFACES = [];
    static ATTRIBUTES = {"MO_HEAP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_HEAP", RTTIName: "\\CLASS-POOL=KERNEL_CALL_TRANSFORMATION\\CLASS=LCL_HEAP"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
    "MS_OPTIONS": {"type": () => {return new abap.types.Structure({"initial_components": new abap.types.String({qualifiedName: "KERNEL_CALL_TRANSFORMATION=>TY_OPTIONS-INITIAL_COMPONENTS"})}, "kernel_call_transformation=>ty_options", undefined, {}, {});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
    static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"IS_OPTIONS": {"type": () => {return new abap.types.Structure({"initial_components": new abap.types.String({qualifiedName: "KERNEL_CALL_TRANSFORMATION=>TY_OPTIONS-INITIAL_COMPONENTS"})}, "kernel_call_transformation=>ty_options", undefined, {}, {});}, "is_optional": " "}, "IO_HEAP": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LCL_HEAP", RTTIName: "\\CLASS-POOL=KERNEL_CALL_TRANSFORMATION\\CLASS=LCL_HEAP"});}, "is_optional": " "}}},
    "RUN": {"visibility": "U", "parameters": {"RV_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_NAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "IV_REF": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
    "SERIALIZE_HEAP": {"visibility": "U", "parameters": {"RV_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
    constructor() {
      this.me = new abap.types.ABAPObject();
      this.me.set(this);
      this.mo_heap = new abap.types.ABAPObject({qualifiedName: "LCL_HEAP", RTTIName: "\\CLASS-POOL=KERNEL_CALL_TRANSFORMATION\\CLASS=LCL_HEAP"});
      this.ms_options = new abap.types.Structure({"initial_components": new abap.types.String({qualifiedName: "KERNEL_CALL_TRANSFORMATION=>TY_OPTIONS-INITIAL_COMPONENTS"})}, "kernel_call_transformation=>ty_options", undefined, {}, {});
    }
    async constructor_(INPUT) {
      let is_options = new abap.types.Structure({"initial_components": new abap.types.String({qualifiedName: "KERNEL_CALL_TRANSFORMATION=>TY_OPTIONS-INITIAL_COMPONENTS"})}, "kernel_call_transformation=>ty_options", undefined, {}, {});
      if (INPUT && INPUT.is_options) {is_options.set(INPUT.is_options);}
      let io_heap = new abap.types.ABAPObject({qualifiedName: "LCL_HEAP", RTTIName: "\\CLASS-POOL=KERNEL_CALL_TRANSFORMATION\\CLASS=LCL_HEAP"});
      if (INPUT && INPUT.io_heap) {io_heap.set(INPUT.io_heap);}
      if (abap.compare.initial(io_heap)) {
        this.mo_heap.set(await (new abap.Classes['CLAS-KERNEL_CALL_TRANSFORMATION-LCL_HEAP']()).constructor_());
      } else {
        this.mo_heap.set(io_heap);
      }
      this.ms_options.set(is_options);
      return this;
    }
    async serialize_heap() {
      let rv_xml = new abap.types.String({qualifiedName: "STRING"});
      rv_xml.set((await this.mo_heap.get().serialize()));
      return rv_xml;
    }
    async run(INPUT) {
      let rv_xml = new abap.types.String({qualifiedName: "STRING"});
      let iv_name = INPUT?.iv_name;
      let iv_ref = INPUT?.iv_ref;
      if (iv_ref === undefined) { iv_ref = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.iv_ref); }
      let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
      let lo_struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
      let lt_comps = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
      let ls_compo = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
      let lv_ref = new abap.types.DataReference(new abap.types.Character(4));
      let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      let fs_table_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"}));
      let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
      lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).dereference()})));
      let unique126 = lo_type.get().kind;
      if (abap.compare.eq(unique126, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
        await abap.statements.cast(lo_struc, lo_type);
        lt_comps.set((await lo_struc.get().get_components()));
        abap.statements.assign({target: fs_any_, source: (iv_ref).dereference()});
        if (abap.compare.eq(this.ms_options.get().initial_components, abap.Classes['KERNEL_CALL_TRANSFORMATION'].gc_options.get().suppress) && abap.compare.initial(fs_any_)) {
          rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<${abap.templateFormatting(iv_name)}/>`)));
          return rv_xml;
        }
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<${abap.templateFormatting(iv_name)}>`)));
        for await (const unique127 of abap.statements.loop(lt_comps)) {
          ls_compo.set(unique127);
          abap.statements.assign({component: ls_compo.get().name, target: fs_field_, source: fs_any_});
          lv_ref.assign(fs_field_.getPointer());
          rv_xml.set(abap.operators.concat(rv_xml,(await this.run({iv_name: abap.builtin.to_upper({val: ls_compo.get().name}), iv_ref: lv_ref}))));
        }
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`</${abap.templateFormatting(iv_name)}>`)));
      } else if (abap.compare.eq(unique126, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
        if (abap.compare.eq(this.ms_options.get().initial_components, abap.Classes['KERNEL_CALL_TRANSFORMATION'].gc_options.get().suppress) && abap.compare.initial((iv_ref).dereference())) {
          return rv_xml;
        }
        if (abap.compare.eq(lo_type.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string) && abap.compare.initial((iv_ref).dereference())) {
          rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<${abap.templateFormatting(iv_name)}/>`)));
        } else {
          rv_xml.set(abap.operators.concat(rv_xml,abap.operators.concat(new abap.types.String().set(`<${abap.templateFormatting(iv_name)}>`),abap.operators.concat((iv_ref).dereference(),new abap.types.String().set(`</${abap.templateFormatting(iv_name)}>`)))));
        }
      } else if (abap.compare.eq(unique126, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
        abap.statements.assign({target: fs_table_, source: (iv_ref).dereference()});
        if (abap.compare.eq(this.ms_options.get().initial_components, abap.Classes['KERNEL_CALL_TRANSFORMATION'].gc_options.get().suppress) && abap.compare.initial(fs_table_)) {
          rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<${abap.templateFormatting(iv_name)}/>`)));
          return rv_xml;
        }
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`<${abap.templateFormatting(iv_name)}>`)));
        for await (const unique128 of abap.statements.loop(fs_table_)) {
          fs_any_.assign(unique128);
          lv_ref.assign(fs_any_.getPointer());
          rv_xml.set(abap.operators.concat(rv_xml,(await this.run({iv_name: new abap.types.String().set(`item`), iv_ref: lv_ref}))));
        }
        rv_xml.set(abap.operators.concat(rv_xml,new abap.types.String().set(`</${abap.templateFormatting(iv_name)}>`)));
      } else if (abap.compare.eq(unique126, abap.Classes['CL_ABAP_TYPEDESCR'].kind_ref)) {
        let unique129 = lo_type.get().type_kind;
        if (abap.compare.eq(unique129, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_oref)) {
          if (abap.compare.initial((iv_ref).dereference())) {
            rv_xml.set(new abap.types.String().set(`<${abap.templateFormatting(iv_name)}/>`));
            return rv_xml;
          }
          rv_xml.set(new abap.types.String().set(`<${abap.templateFormatting(iv_name)} href="#o${abap.templateFormatting((await this.mo_heap.get().add({iv_ref: (iv_ref).dereference()})))}"/>`));
        } else {
          if (abap.compare.initial((iv_ref).dereference())) {
            rv_xml.set(new abap.types.String().set(`<${abap.templateFormatting(iv_name)}/>`));
            return rv_xml;
          }
          abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(20).set('todo,lcl_data_to_xml')));
        }
      } else {
        abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(20).set('todo,lcl_data_to_xml')));
      }
      return rv_xml;
    }
  }
  abap.Classes['CLAS-KERNEL_CALL_TRANSFORMATION-LCL_DATA_TO_XML'] = lcl_data_to_xml;
export {lcl_heap, lcl_data_to_xml};
//# sourceMappingURL=kernel_call_transformation.clas.locals.mjs.map