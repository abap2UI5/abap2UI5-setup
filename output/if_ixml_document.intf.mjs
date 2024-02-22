// if_ixml_document.intf.abap
class if_ixml_document {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"IF_IXML_NODE~CO_NODE_DOCUMENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_ELEMENT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_TEXT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "IF_IXML_NODE~CO_NODE_CDATA_SECTION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"SET_ENCODING": {"visibility": "U", "parameters": {"ENCODING": {"type": () => {return new abap.types.ABAPObject({qualifiedName: undefined, RTTIName: undefined});}, "is_optional": " "}}},
  "SET_STANDALONE": {"visibility": "U", "parameters": {"STANDALONE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "GET_STANDALONE": {"visibility": "U", "parameters": {"RVAL": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}},
  "SET_NAMESPACE_PREFIX": {"visibility": "U", "parameters": {"PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "APPEND_CHILD": {"visibility": "U", "parameters": {"NEW_CHILD": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " "}}},
  "GET_FIRST_CHILD": {"visibility": "U", "parameters": {"CHILD": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " "}}},
  "CREATE_ATTRIBUTE_NS": {"visibility": "U", "parameters": {"ELEMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE", RTTIName: "\\INTERFACE=IF_IXML_ATTRIBUTE"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CREATE_ELEMENT_NS": {"visibility": "U", "parameters": {"ELEMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "URI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CREATE_ELEMENT": {"visibility": "U", "parameters": {"ELEMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CREATE_ITERATOR_FILTERED": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});}, "is_optional": " "}, "FILTER": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "CREATE_FILTER_AND": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});}, "is_optional": " "}, "FILTER1": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "FILTER2": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "CREATE_ITERATOR": {"visibility": "U", "parameters": {"RVAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR", RTTIName: "\\INTERFACE=IF_IXML_NODE_ITERATOR"});}, "is_optional": " "}}},
  "CREATE_FILTER_NODE_TYPE": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});}, "is_optional": " "}, "NODE_TYPES": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "CREATE_SIMPLE_ELEMENT_NS": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PARENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " "}, "PREFIX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CREATE_FILTER_ATTRIBUTE": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_FILTER", RTTIName: "\\INTERFACE=IF_IXML_NODE_FILTER"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CREATE_SIMPLE_ELEMENT": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PARENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FIND_FROM_NAME": {"visibility": "U", "parameters": {"ELEMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAMESPACE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FIND_FROM_NAME_NS": {"visibility": "U", "parameters": {"ELEMENT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}, "DEPTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "URI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "FIND_FROM_PATH": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}, "PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_ELEMENTS_BY_TAG_NAME_NS": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_COLLECTION", RTTIName: "\\INTERFACE=IF_IXML_NODE_COLLECTION"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAMESPACE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "URI": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_ELEMENTS_BY_TAG_NAME": {"visibility": "U", "parameters": {"VAL": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_COLLECTION", RTTIName: "\\INTERFACE=IF_IXML_NODE_COLLECTION"});}, "is_optional": " "}, "DEPTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAMESPACE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_ROOT": {"visibility": "U", "parameters": {"NODE": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE", RTTIName: "\\INTERFACE=IF_IXML_NODE"});}, "is_optional": " "}}},
  "GET_ROOT_ELEMENT": {"visibility": "U", "parameters": {"ROOT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT", RTTIName: "\\INTERFACE=IF_IXML_ELEMENT"});}, "is_optional": " "}}},
  "SET_DECLARATION": {"visibility": "U", "parameters": {"DECLARATION": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
}
abap.Classes['IF_IXML_DOCUMENT'] = if_ixml_document;
export {if_ixml_document};
//# sourceMappingURL=if_ixml_document.intf.mjs.map