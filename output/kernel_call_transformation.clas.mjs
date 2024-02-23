await import("./kernel_call_transformation.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_call_transformation.clas.abap
class kernel_call_transformation {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'KERNEL_CALL_TRANSFORMATION';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"MI_DOC": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "MI_WRITER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER", RTTIName: "\\INTERFACE=IF_SXML_WRITER"});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "MS_OPTIONS": {"type": () => {return new abap.types.Structure({"initial_components": new abap.types.String({qualifiedName: "KERNEL_CALL_TRANSFORMATION=>TY_OPTIONS-INITIAL_COMPONENTS"})}, "kernel_call_transformation=>ty_options", undefined, {}, {});}, "visibility": "I", "is_constant": " ", "is_class": "X"},
  "GC_OPTIONS": {"type": () => {return new abap.types.Structure({"suppress": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"PARSE_XML": {"visibility": "I", "parameters": {"IV_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "TRAVERSE_WRITE": {"visibility": "I", "parameters": {"IV_REF": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "TRAVERSE_WRITE_TYPE": {"visibility": "I", "parameters": {"RV_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "IV_REF": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "is_optional": " "}}},
  "PARSE_OPTIONS": {"visibility": "I", "parameters": {"OPTIONS": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "CALL": {"visibility": "U", "parameters": {"NAME": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "OPTIONS": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mi_doc = kernel_call_transformation.mi_doc;
    this.mi_writer = kernel_call_transformation.mi_writer;
    this.ms_options = kernel_call_transformation.ms_options;
    this.gc_options = kernel_call_transformation.gc_options;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async call(INPUT) {
    return kernel_call_transformation.call(INPUT);
  }
  static async call(INPUT) {
    let name = INPUT?.name;
    let options = INPUT?.options;
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_source = new abap.types.String({qualifiedName: "STRING"});
    let lv_result = new abap.types.String({qualifiedName: "STRING"});
    let result = new abap.types.DataReference(new abap.types.Character(4));
    let lt_rtab = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "value": new abap.types.DataReference(new abap.types.Character(4))}, "abap_trans_srcbind", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_trans_srcbind_tab");
    let lo_writer = new abap.types.ABAPObject({qualifiedName: "CL_SXML_STRING_WRITER", RTTIName: "\\CLASS=CL_SXML_STRING_WRITER"});
    let ls_rtab = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "value": new abap.types.DataReference(new abap.types.Character(4))}, "abap_trans_srcbind", undefined, {}, {});
    let lv_type = new abap.types.String({qualifiedName: "STRING"});
    let lo_data_to_xml = new abap.types.ABAPObject({qualifiedName: "LCL_DATA_TO_XML", RTTIName: "\\CLASS-POOL=KERNEL_CALL_TRANSFORMATION\\CLASS=LCL_DATA_TO_XML"});
    abap.statements.clear(kernel_call_transformation.mi_doc);
    abap.statements.clear(kernel_call_transformation.mi_writer);
    lv_name.set(INPUT.name.toUpperCase());
    abap.statements.assert(abap.compare.eq(lv_name, new abap.types.Character(2).set('ID')));
    await this.parse_options({options: options});
    if (INPUT.sourceXML?.constructor.name === "ABAPObject") this.mi_doc.set(INPUT.sourceXML);
    if (INPUT.sourceXML?.constructor.name === "String") lv_source.set(INPUT.sourceXML);
    if (abap.compare.initial(lv_source) === false) {
      if (abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character(1).set('<'))) {
        lv_type.set(new abap.types.Character(3).set('XML'));
        await this.parse_xml({iv_xml: lv_source});
      } else if (abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character(1).set('{')) || abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character(1).set('['))) {
        lv_type.set(new abap.types.Character(4).set('JSON'));
        kernel_call_transformation.mi_doc.set((await abap.Classes['KERNEL_JSON_TO_IXML'].build({iv_json: lv_source})));
      } else {
        const unique270 = await (new abap.Classes['CX_XSLT_FORMAT_ERROR']()).constructor_();
        unique270.EXTRA_CX = {"INTERNAL_FILENAME": "kernel_call_transformation.clas.abap","INTERNAL_LINE": 77};
        throw unique270;
      }
    }
    if (typeof INPUT.source === "object" && INPUT.resultXML?.constructor.name === "ABAPObject") {
        this.mi_writer.set(INPUT.resultXML);
    }
    if (abap.compare.initial(kernel_call_transformation.mi_writer) === false) {
      await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character(6).set('object')});
      for (const name in INPUT.source) {
          lv_name.set(name);
          if (INPUT.source[name].constructor.name === "FieldSymbol") {
              result.assign(INPUT.source[name].getPointer());
            } else {
                result.assign(INPUT.source[name]);
              }
            await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character(3).set('str')});
            await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character(4).set('name'), value: abap.builtin.to_upper({val: lv_name})});
            await this.traverse_write({iv_ref: result});
            await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
          }
          await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
          return;
        }
        if (INPUT.resultXML && INPUT.resultXML.constructor.name === "String") {
            lv_result.set("X");
        }
        if (abap.compare.eq(lv_result, abap.builtin.abap_true)) {
          lv_result.set(new abap.types.Character(114).set('<?xml version="1.0" encoding="utf-16"?><asx:abap xmlns:asx="http://www.sap.com/abapxml" version="1.0"><asx:values>'));
          lo_data_to_xml.set(await (new abap.Classes['CLAS-KERNEL_CALL_TRANSFORMATION-LCL_DATA_TO_XML']()).constructor_({is_options: kernel_call_transformation.ms_options}));
          if (INPUT.source.constructor.name === "Object") {
              for (const name in INPUT.source) {
                  lv_name.set(name);
                  if (INPUT.source[name].constructor.name === "FieldSymbol") {
                      result.assign(INPUT.source[name].getPointer());
                    } else {
                        result.assign(INPUT.source[name]);
                      }
                  lv_result.set(abap.operators.concat(lv_result,(await lo_data_to_xml.get().run({iv_name: abap.builtin.to_upper({val: lv_name}), iv_ref: result}))));
                    }
                } else if (INPUT.source.constructor.name === "Table") {
                    for (const row of INPUT.source.array()) {
                        lv_name.set(row.get().name.get());
                        result.assign(row.get().value.dereference());
                    lv_result.set(abap.operators.concat(lv_result,(await lo_data_to_xml.get().run({iv_name: abap.builtin.to_upper({val: lv_name}), iv_ref: result}))));
                      }
                  } else {
                    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(13).set('invalid input')));
                  }
                  lv_result.set(abap.operators.concat(lv_result,new abap.types.String().set(`</asx:values>${abap.templateFormatting((await lo_data_to_xml.get().serialize_heap()))}</asx:abap>`)));
                    INPUT.resultXML.set(lv_result);
                  return;
                }
                if (abap.compare.initial(lv_source) && abap.compare.initial(kernel_call_transformation.mi_doc)) {
                  const unique271 = await (new abap.Classes['CX_XSLT_RUNTIME_ERROR']()).constructor_();
                  unique271.EXTRA_CX = {"INTERNAL_FILENAME": "kernel_call_transformation.clas.abap","INTERNAL_LINE": 147};
                  throw unique271;
                }
                if (INPUT.result.constructor.name === "Table") {
                  lt_rtab = INPUT.result;
                  for await (const unique272 of abap.statements.loop(lt_rtab)) {
                    ls_rtab.set(unique272);
                    await abap.Classes['KERNEL_IXML_XML_TO_DATA'].build({iv_name: ls_rtab.get().name, iv_ref: ls_rtab.get().value, ii_doc: kernel_call_transformation.mi_doc});
                  }
                } else {
                  for (const name in INPUT.result) {
                      lv_name.set(name.toUpperCase());
                      if (INPUT.result[name].constructor.name === "FieldSymbol") {
                          result.assign(INPUT.result[name].getPointer());
                        } else {
                            result.assign(INPUT.result[name]);
                          }
                        if (abap.compare.eq(lv_type, new abap.types.Character(4).set('JSON'))) {
                          await abap.Classes['KERNEL_IXML_JSON_TO_DATA'].build({iv_name: lv_name, iv_ref: result, ii_doc: kernel_call_transformation.mi_doc});
                        } else {
                          await abap.Classes['KERNEL_IXML_XML_TO_DATA'].build({iv_name: lv_name, iv_ref: result, ii_doc: kernel_call_transformation.mi_doc});
                        }
                      }
                    }
                  }
                  async parse_options(INPUT) {
                    return kernel_call_transformation.parse_options(INPUT);
                  }
                  static async parse_options(INPUT) {
                    let options = INPUT?.options;
                    let lv_name = new abap.types.String({qualifiedName: "STRING"});
                    let lv_value = new abap.types.String({qualifiedName: "STRING"});
                    let fs_lv_field_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
                    for (const name in INPUT.options || {}) {
                        lv_name.set(name);
                        lv_value.set(INPUT.options[name]);
                      abap.statements.assign({component: lv_name, target: fs_lv_field_, source: kernel_call_transformation.ms_options});
                      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                        fs_lv_field_.set(lv_value);
                      }
                    }
                  }
                  async traverse_write_type(INPUT) {
                    return kernel_call_transformation.traverse_write_type(INPUT);
                  }
                  static async traverse_write_type(INPUT) {
                    let rv_type = new abap.types.String({qualifiedName: "STRING"});
                    let iv_ref = INPUT?.iv_ref;
                    if (iv_ref === undefined) { iv_ref = new abap.types.DataReference(new abap.types.Character(4)).set(INPUT.iv_ref); }
                    let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
                    lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).dereference()})));
                    let unique273 = lo_type.get().type_kind;
                    if (abap.compare.eq(unique273, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique273, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique273, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(unique273, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8) || abap.compare.eq(unique273, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat) || abap.compare.eq(unique273, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16) || abap.compare.eq(unique273, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34)) {
                      rv_type.set(new abap.types.Character(3).set('num'));
                    } else {
                      rv_type.set(new abap.types.Character(3).set('str'));
                    }
                    return rv_type;
                  }
                  async traverse_write(INPUT) {
                    return kernel_call_transformation.traverse_write(INPUT);
                  }
                  static async traverse_write(INPUT) {
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
                    let unique274 = lo_type.get().kind;
                    if (abap.compare.eq(unique274, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
                      await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character(6).set('object')});
                      await abap.statements.cast(lo_struc, lo_type);
                      lt_comps.set((await lo_struc.get().get_components()));
                      abap.statements.assign({target: fs_any_, source: (iv_ref).dereference()});
                      for await (const unique275 of abap.statements.loop(lt_comps)) {
                        ls_compo.set(unique275);
                        abap.statements.assign({component: ls_compo.get().name, target: fs_field_, source: fs_any_});
                        lv_ref.assign(fs_field_.getPointer());
                        await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: (await this.traverse_write_type({iv_ref: lv_ref}))});
                        await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character(4).set('name'), value: abap.builtin.to_upper({val: ls_compo.get().name})});
                        await this.traverse_write({iv_ref: lv_ref});
                        await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
                      }
                      await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
                    } else if (abap.compare.eq(unique274, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
                      await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_value({value: (iv_ref).dereference()});
                    } else if (abap.compare.eq(unique274, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
                      await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character(5).set('array')});
                      abap.statements.assign({target: fs_table_, source: (iv_ref).dereference()});
                      for await (const unique276 of abap.statements.loop(fs_table_)) {
                        fs_any_.assign(unique276);
                        lv_ref.assign(fs_any_.getPointer());
                        if (abap.compare.eq(((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (lv_ref).dereference()}))).get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
                          await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: (await this.traverse_write_type({iv_ref: lv_ref}))});
                        }
                        await this.traverse_write({iv_ref: lv_ref});
                        if (abap.compare.eq(((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (lv_ref).dereference()}))).get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
                          await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
                        }
                      }
                      await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
                    } else {
                      abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(19).set('todo_traverse_write')));
                    }
                  }
                  async parse_xml(INPUT) {
                    return kernel_call_transformation.parse_xml(INPUT);
                  }
                  static async parse_xml(INPUT) {
                    let iv_xml = INPUT?.iv_xml;
                    if (iv_xml?.getQualifiedName === undefined || iv_xml.getQualifiedName() !== "STRING") { iv_xml = undefined; }
                    if (iv_xml === undefined) { iv_xml = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.iv_xml); }
                    let li_factory = new abap.types.ABAPObject({qualifiedName: "IF_IXML_STREAM_FACTORY", RTTIName: "\\INTERFACE=IF_IXML_STREAM_FACTORY"});
                    let li_istream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM", RTTIName: "\\INTERFACE=IF_IXML_ISTREAM"});
                    let li_parser = new abap.types.ABAPObject({qualifiedName: "IF_IXML_PARSER", RTTIName: "\\INTERFACE=IF_IXML_PARSER"});
                    let li_ixml = new abap.types.ABAPObject({qualifiedName: "IF_IXML", RTTIName: "\\INTERFACE=IF_IXML"});
                    let lv_subrc = new abap.types.Integer({qualifiedName: "I"});
                    li_ixml.set((await abap.Classes['CL_IXML'].create()));
                    kernel_call_transformation.mi_doc.set((await li_ixml.get().if_ixml$create_document()));
                    li_factory.set((await li_ixml.get().if_ixml$create_stream_factory()));
                    li_istream.set((await li_factory.get().if_ixml_stream_factory$create_istream_string({string: iv_xml})));
                    li_parser.set((await li_ixml.get().if_ixml$create_parser({stream_factory: li_factory, istream: li_istream, document: kernel_call_transformation.mi_doc})));
                    await li_parser.get().if_ixml_parser$add_strip_space_element();
                    lv_subrc.set((await li_parser.get().if_ixml_parser$parse()));
                    await li_istream.get().if_ixml_istream$close();
                    abap.statements.assert(abap.compare.eq(lv_subrc, abap.IntegerFactory.get(0)));
                  }
                }
                abap.Classes['KERNEL_CALL_TRANSFORMATION'] = kernel_call_transformation;
                kernel_call_transformation.mi_doc = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT", RTTIName: "\\INTERFACE=IF_IXML_DOCUMENT"});
                kernel_call_transformation.mi_writer = new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER", RTTIName: "\\INTERFACE=IF_SXML_WRITER"});
                kernel_call_transformation.ms_options = new abap.types.Structure({"initial_components": new abap.types.String({qualifiedName: "KERNEL_CALL_TRANSFORMATION=>TY_OPTIONS-INITIAL_COMPONENTS"})}, "kernel_call_transformation=>ty_options", undefined, {}, {});
                kernel_call_transformation.gc_options = new abap.types.Structure({"suppress": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
                kernel_call_transformation.gc_options.get().suppress.set('suppress');
                kernel_call_transformation.ty_options = new abap.types.Structure({"initial_components": new abap.types.String({qualifiedName: "KERNEL_CALL_TRANSFORMATION=>TY_OPTIONS-INITIAL_COMPONENTS"})}, "kernel_call_transformation=>ty_options", undefined, {}, {});
export {kernel_call_transformation};
//# sourceMappingURL=kernel_call_transformation.clas.mjs.map