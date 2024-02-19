CLASS z2ui5_cl_demo_app_111 DEFINITION
  PUBLIC
  CREATE PUBLIC .

  PUBLIC SECTION.

    INTERFACES if_serializable_object .
    INTERFACES z2ui5_if_app .

    TYPES:
      BEGIN OF ty_s_tab,
        selkz            TYPE abap_bool,
        product          TYPE string,
        create_date      TYPE string,
        create_by        TYPE string,
        storage_location TYPE string,
        quantity         TYPE i,
      END OF ty_s_tab .
    TYPES:
      ty_t_table TYPE STANDARD TABLE OF ty_s_tab WITH EMPTY KEY .

    DATA mv_search_value TYPE string .
    DATA mt_table TYPE ty_t_table .
    DATA mv_key TYPE string .
    DATA mv_product TYPE string .
    DATA mv_create_date TYPE string .
    DATA mv_create_by TYPE string .
    DATA mv_storage_location TYPE string .
    DATA mv_quantity TYPE string .
  PROTECTED SECTION.

    DATA client TYPE REF TO z2ui5_if_client.
    DATA check_initialized TYPE abap_bool.

    METHODS z2ui5_on_event.
    METHODS z2ui5_set_search.
    METHODS z2ui5_set_data.
    METHODS z2ui5_view_display.
    METHODS get_custom_js
      RETURNING
        VALUE(result) TYPE string.

  PRIVATE SECTION.
ENDCLASS.



CLASS z2ui5_cl_demo_app_111 IMPLEMENTATION.


  METHOD z2ui5_if_app~main.

    me->client     = client.

    IF check_initialized = abap_false.
      check_initialized = abap_true.
      z2ui5_set_data( ).
      client->nav_app_call( z2ui5_cl_popup_js_loader=>factory( get_custom_js( ) ) ).
      RETURN.
    ENDIF.

    IF client->get( )-check_on_navigated = abap_true.
      z2ui5_view_display( ).
      RETURN.
    ENDIF.

    z2ui5_on_event( ).

  ENDMETHOD.


  METHOD z2ui5_on_event.

    CASE client->get( )-event.

      WHEN 'BUTTON_SEARCH' OR 'BUTTON_START'.
        client->view_model_update( ).

      WHEN 'BACK'.
        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).

    ENDCASE.

  ENDMETHOD.


  METHOD z2ui5_set_data.

    mt_table = VALUE #(
        ( product = 'table' create_date = `01.01.2023` create_by = `Peter` storage_location = `AREA_001` quantity = 400 )
        ( product = 'chair' create_date = `01.01.2022` create_by = `James` storage_location = `AREA_001` quantity = 123 )
        ( product = 'sofa' create_date = `01.05.2021` create_by = `Simone` storage_location = `AREA_001` quantity = 700 )
        ( product = 'computer' create_date = `27.01.2023` create_by = `Theo` storage_location = `AREA_001` quantity = 200 )
        ( product = 'printer' create_date = `01.01.2023` create_by = `Hannah` storage_location = `AREA_001` quantity = 90 )
        ( product = 'table2' create_date = `01.01.2023` create_by = `Julia` storage_location = `AREA_001` quantity = 110 )
    ).

  ENDMETHOD.


  METHOD z2ui5_set_search.

    IF mv_search_value IS NOT INITIAL.

      LOOP AT mt_table REFERENCE INTO DATA(lr_row).
        DATA(lv_row) = ``.
        DATA(lv_index) = 1.
        DO.
          ASSIGN COMPONENT lv_index OF STRUCTURE lr_row->* TO FIELD-SYMBOL(<field>).
          IF sy-subrc <> 0.
            EXIT.
          ENDIF.
          lv_row = lv_row && <field>.
          lv_index = lv_index + 1.
        ENDDO.

        IF lv_row NS mv_search_value.
          DELETE mt_table.
        ENDIF.
      ENDLOOP.
    ENDIF.

  ENDMETHOD.


  METHOD z2ui5_view_display.

    DATA(view) = z2ui5_cl_xml_view=>factory( ).

    client->view_display( z2ui5_cl_xml_view=>factory(
*        )->_cc_plain_xml( `<html:script>` && lv_script && `</html:script>`
      )->_generic( ns = `html` name = `script` )->_cc_plain_xml( `sap.z2ui5.InitSvm();`
      )->stringify( ) ).

*    view->_cc_plain_xml( `<html:script> sap.z2ui5.InitSvm(); </html:script>` ).

    DATA(page1) = view->page( id = `page_main`
            title          = 'abap2UI5 - List Report Features'
            navbuttonpress = client->_event( 'BACK' )
            shownavbutton = xsdbool( client->get( )-s_draft-id_prev_app_stack IS NOT INITIAL ) ).

    page1->header_content(
          )->link(
              text = 'Demo' target = '_blank'
              href = 'https://twitter.com/abap2UI5/status/1674437273943937025'
          )->link(
              text = 'Source_Code' target = '_blank' href = z2ui5_cl_demo_utility=>factory( client )->app_get_url_source_code( )
     ).

    DATA(page) = page1->dynamic_page( headerexpanded = abap_true headerpinned = abap_true ).

    DATA(header_title) = page->title( ns = 'f'  )->get( )->dynamic_page_title( ).
    header_title->heading( ns = 'f' )->smart_variant_management( id = `svm` showexecuteonselection = abap_true ).
    header_title->expanded_content( 'f' ).
    header_title->snapped_content( ns = 'f' ).

    DATA(lo_fb) = page->header( )->dynamic_page_header( pinnable = abap_true ).

    lo_fb->filter_bar( id = `fbar` persistencykey = `myPersKey` usetoolbar = abap_false search = `sap.z2ui5.onSearch();`
      )->filter_group_items(
        )->filter_group_item( name = `PRODUCT` label = `Product` groupname = `group1` visibleinfilterbar = abap_true
          )->fb_control(
            )->input( value = client->_bind_edit( mv_product ) suggest = abap_true suggestionitems = `{/EDIT/MT_TABLE}` change = `sap.z2ui5.onChange();`
              )->get( )->suggestion_items( )->item( text = `{PRODUCT}`
            )->get_parent(  )->get_parent( )->get_parent( )->get_parent(
        )->filter_group_item( name = `CREATE_DATE` label = `Create Date` groupname = `group1` visibleinfilterbar = abap_true
          )->fb_control(
            )->input( value = client->_bind_edit( mv_create_date ) change = `sap.z2ui5.onChange();` )->get_parent(  )->get_parent(
        )->filter_group_item( name = `CREATE_BY` label = `Create By` groupname = `group1` visibleinfilterbar = abap_true
          )->fb_control(
            )->input( value = client->_bind_edit( mv_create_by ) change = `sap.z2ui5.onChange();`  )->get_parent(  )->get_parent(
        )->filter_group_item( name = `STORAGE_LOCATION` label = `Storage Location` groupname = `group1` visibleinfilterbar = abap_true
          )->fb_control(
            )->input( value = client->_bind_edit( mv_storage_location ) change = `sap.z2ui5.onChange();` )->get_parent( )->get_parent(
        )->filter_group_item( name = `QUANTITY` label = `Quantity` groupname = `group1` visibleinfilterbar = abap_true
          )->fb_control(
            )->input( suggest = abap_true suggestionitems = `{/EDIT/MT_TABLE}` value = client->_bind_edit( mv_quantity ) change = `sap.z2ui5.onChange($event);`
              )->get( )->suggestion_items( )->item( text = `{QUANTITY}`
            )->get_parent( )->get_parent( )->get_parent( ).

    DATA(cont) = page->content( ns = 'f' ).

    DATA(tab) = cont->table( id = `table1` items = client->_bind_edit( val = mt_table ) ).

    DATA(lo_columns) = tab->columns( ).
    lo_columns->column( )->text( text = `Product` ).
    lo_columns->column( )->text( text = `Date` ).
    lo_columns->column( )->text( text = `Name` ).
    lo_columns->column( )->text( text = `Location` ).
    lo_columns->column( )->text( text = `Quantity` ).

    DATA(lo_cells) = tab->items( )->column_list_item( ).
    lo_cells->text( `{PRODUCT}` ).
    lo_cells->text( `{CREATE_DATE}` ).
    lo_cells->text( `{CREATE_BY}` ).
    lo_cells->text( `{STORAGE_LOCATION}` ).
    lo_cells->text( `{QUANTITY}` ).

    client->view_display( view->stringify( ) ).

  ENDMETHOD.

  METHOD get_custom_js.

    result  = `sap.z2ui5.InitSvm = () => {` && |\n| &&
                 ` var oView = sap.z2ui5.oView` && |\n| &&
                 ` var oSmartVariantManagement = oView.byId("svm");` && |\n| &&
                 ` var oFilterBar = oView.byId("fbar");` && |\n| &&
                 ` var aData = _registerFetchData(oFilterBar);` && |\n| &&
                 ` oFilterBar.registerFetchData( aData );` && |\n| &&
                 ` oFilterBar.registerApplyData( _registerApplyData(oFilterBar, aData));` && |\n| &&
                 ` oFilterBar.registerGetFiltersWithValues( _registerGetFiltersWithValues(oFilterBar));` && |\n| &&
                 ` var oPersInfo = new sap.ui.comp.smartvariants.PersonalizableInfo({` && |\n| &&
                 `   type: "filterBar",` && |\n| &&
                 `   keyName: "persistencyKey",` && |\n| &&
                 `   dataSource: "",` && |\n| &&
                 `   control: oFilterBar` && |\n| &&
                 ` });` && |\n| &&
                 ` oSmartVariantManagement.addPersonalizableControl(oPersInfo);` && |\n| &&
                 ` oSmartVariantManagement.initialise(function () {oSmartVariantManagement.currentVariantSetModified(false);}, oFilterBar);` && |\n| &&
                 `};` && |\n| &&
                 `_registerFetchData = (oFilterBar) => {` && |\n| &&
                 ` var aData = oFilterBar.getAllFilterItems().reduce(function (aResult, oFilterItem) {` && |\n| &&
                 `   aResult.push({` && |\n| &&
                 `     groupName: oFilterItem.getGroupName(),` && |\n| &&
                 `     fieldName: oFilterItem.getName(),` && |\n| &&
                 `     fieldData: oFilterItem.getControl().getValue()` && |\n| &&
                 `   });` && |\n| &&
                 `   return aResult;` && |\n| &&
                 ` }, []);` && |\n| &&
                 ` return aData;` && |\n| &&
                 `};` && |\n| &&
                 `_registerApplyData = (oFilterBar, aData) => {` && |\n| &&
                 ` aData.forEach(function (oDataObject) {` && |\n| &&
                 `   var oControl = oFilterBar.determineControlByName(oDataObject.fieldName, oDataObject.groupName);` && |\n| &&
                 `   oControl.setValue(oDataObject.fieldData);` && |\n| &&
                 ` });` && |\n| &&
                 `};` && |\n| &&
                 `_registerGetFiltersWithValues = (oFilterBar) => {` && |\n| &&
                 ` var aFiltersWithValue = oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {` && |\n| &&
                 `   var oControl = oFilterGroupItem.getControl();` && |\n| &&
                 `   if (oControl &amp;&amp; oControl.getValue &amp;&amp; oControl.getValue().length > 0) {` && |\n| &&
                 `       aResult.push(oFilterGroupItem);` && |\n| &&
                 `   }` && |\n| &&
                 `   return aResult;` && |\n| &&
                 ` }, []);` && |\n| &&
                 ` return aFiltersWithValue;` && |\n| &&
                 `};` && |\n| &&
                 `sap.z2ui5.onSearch = () => {` && |\n| &&
                 ` var oView = sap.z2ui5.oView` && |\n| &&
                 ` var oFilterBar = oView.byId("fbar");` && |\n| &&
                 ` var oTable = oView.byId("table1");` && |\n| &&
                 ` var aTableFilters = oFilterBar.getFilterGroupItems().reduce(function (aResult, oFilterGroupItem) {` && |\n| &&
                 `   var oControl = oFilterGroupItem.getControl(),` && |\n| &&
                 `       aSelectedKey = oControl.getValue(),` && |\n| &&
                 `       aFilters = return new sap.ui.model.Filter({` && |\n| &&
                 `                   path: oFilterGroupItem.getName(),` && |\n| &&
                 `                   operator: "Contains",` && |\n| &&
                 `                   value1: sSelectedKey` && |\n| &&
                 `                });` && |\n| &&
*                        `     });` && |\n| &&
                 ` if (aSelectedKey.length > 0) {` && |\n| &&
                 `     aResult.push(new sap.ui.model.Filter({` && |\n| &&
                 `                   filters: aFilters,` && |\n| &&
                 `                   and: false` && |\n| &&
                 `                 }));` && |\n| &&
                 ` }` && |\n| &&
                 ` return aResult;` && |\n| &&
                 `     }, []);` && |\n| &&
                 `  oTable.getBinding("items").filter(aTableFilters);` && |\n| &&
                 `};` && |\n| &&
                 `sap.z2ui5.onChange = (oEvent) => {` && |\n| &&
                 ` var oView = sap.z2ui5.oView` && |\n| &&
                 ` var oFilterBar = oView.byId("fbar");` && |\n| &&
                 ` var oSmartVariantManagement = oView.byId("svm");` && |\n| &&
                 ` oSmartVariantManagement.currentVariantSetModified(true);` && |\n| &&
                 ` oFilterBar.fireFilterChange(oEvent);` && |\n| &&
                 `}`.

  ENDMETHOD.

ENDCLASS.
