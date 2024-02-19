CLASS Z2UI5_CL_DEMO_APP_014 DEFINITION PUBLIC.

  PUBLIC SECTION.

    INTERFACES Z2UI5_if_app.

    DATA check_initialized TYPE abap_bool.

    DATA mv_sel7 TYPE abap_bool.
    DATA mv_sel8 TYPE abap_bool.
    DATA mv_sel9 TYPE abap_bool.
    DATA mv_sel10 TYPE abap_bool.
    DATA mv_sel11 TYPE abap_bool.
    DATA mv_sel12 TYPE abap_bool.

    DATA mv_tab_line_active TYPE abap_bool.
    METHODS render_tab_line.
    DATA client TYPE REF TO Z2UI5_if_client.

  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS Z2UI5_CL_DEMO_APP_014 IMPLEMENTATION.


  METHOD render_tab_line.

    DATA(view) = z2ui5_cl_xml_view=>factory( ).

    DATA(container) = view->shell(
        )->page(
            title = 'abap2UI5 - Visualization'
            navbuttonpress = client->_event( 'BACK' )
            shownavbutton = abap_true
            )->header_content(
                )->link( text = 'Demo'        target = '_blank' href = `https://twitter.com/abap2UI5/status/1639191954285113344`
                )->link( text = 'Source_Code' target = '_blank' href = z2ui5_cl_demo_utility=>factory( client )->app_get_url_source_code( )
        )->get_parent(
        )->tab_container( ).

    DATA(tab) = container->tab( text = 'Line Chart' selected = client->_bind( mv_tab_line_active ) ).
    DATA(grid) = tab->grid( 'XL6 L6 M6 S12' ).

    grid->link(
      text = 'Go to the SAP Demos for Interactive Line Charts here...' target = '_blank'
      href = 'https://sapui5.hana.ondemand.com/#/entity/sap.suite.ui.microchart.InteractiveLineChart/sample/sap.suite.ui.microchart.sample.InteractiveLineChart' ).

    grid->text(
            text  = 'Absolute and Percentage values'
            class = 'sapUiSmallMargin'
        )->get(
            )->layout_data(
                )->grid_data( 'XL12 L12 M12 S12' ).

    DATA(point) = grid->flex_box(
        width      = '22rem'
        height     = '13rem'
        alignitems = 'Center'
        class      = 'sapUiSmallMargin'
     )->items( )->interact_line_chart(
            selectionchanged = client->_event( 'LINE_CHANGED' )
            precedingpoint   = '15'
            succeddingpoint  = '89'
        )->points( ).
    point->interact_line_chart_point( selected = client->_bind( mv_sel7  ) label = 'May'  value = '33.1' secondarylabel = 'Q2' ).
    point->interact_line_chart_point( selected = client->_bind( mv_sel8  ) label = 'June' value = '12'  ).
    point->interact_line_chart_point( selected = client->_bind( mv_sel9  ) label = 'July' value = '51.4' secondarylabel = 'Q3' ).
    point->interact_line_chart_point( selected = client->_bind( mv_sel10 ) label = 'Aug'  value = '52'  ).
    point->interact_line_chart_point( selected = client->_bind( mv_sel11 ) label = 'Sep'  value = '69.9').
    point->interact_line_chart_point( selected = client->_bind( mv_sel12 ) label = 'Oct'  value = '0.9' secondarylabel = 'Q4' ).

    point = grid->flex_box(
            width      = '22rem'
            height     = '13rem'
            alignitems = 'Start'
            class      = 'SpaceBetween'
        )->items(
             )->interact_line_chart(
                    selectionchanged  = client->_event( 'LINE_CHANGED' )
                    press             = client->_event( 'LINE_PRESS' )
                    precedingpoint    = '-20'
             )->points( ).
    point->interact_line_chart_point( label = 'May'  value = '33.1' displayedvalue = '33.1%' secondarylabel = '2015' ).
    point->interact_line_chart_point( label = 'June' value = '2.2'  displayedvalue = '2.2%'  secondarylabel = '2015' ).
    point->interact_line_chart_point( label = 'July' value = '51.4' displayedvalue = '51.4%' secondarylabel = '2015' ).
    point->interact_line_chart_point( label = 'Aug'  value = '19.9' displayedvalue = '19.9%' ).
    point->interact_line_chart_point( label = 'Sep'  value = '69.9' displayedvalue = '69.9%' ).
    point->interact_line_chart_point( label = 'Oct'  value = '0.9'  displayedvalue = '9.9%'  ).

    point = grid->vertical_layout(
        )->layout_data( ns = 'layout'
            )->grid_data( 'XL12 L12 M12 S12'
        )->get_parent(
        )->text(
            text  = 'Preselected values'
            class = 'sapUiSmallMargin'
        )->flex_box(
            width      = '22rem'
            height     = '13rem'
            alignitems = 'Start'
            class      = 'sapUiSmallMargin'
            )->items(
                )->interact_line_chart(
                    selectionchanged  = client->_event( 'LINE_CHANGED' )
                    press             = client->_event( 'LINE_PRESS' )
                )->points( ).
    point->interact_line_chart_point( label = 'May'  value = '33.1'  displayedvalue = '33.1%' selected = abap_true ).
    point->interact_line_chart_point( label = 'June' value = '2.2'   displayedvalue = '2.2%'  ).
    point->interact_line_chart_point( label = 'July' value = '51.4'  displayedvalue = '51.4%' ).
    point->interact_line_chart_point( label = 'Aug'  value = '19.9'  displayedvalue = '19.9%' selected = abap_true ).
    point->interact_line_chart_point( label = 'Sep'  value = '69.9'  displayedvalue = '69.9%' ).
    point->interact_line_chart_point( label = 'Oct'  value = '0.9'   displayedvalue = '9.9%'  ).

    client->view_display( view->stringify( ) ).

  ENDMETHOD.


  METHOD Z2UI5_if_app~main.

    me->client = client.

    IF check_initialized = abap_false.
      check_initialized = abap_true.

*            DATA(lv_version) = to_upper( client->get( )-s_config-version ).
*      IF lv_version CS `OPEN`.
*        client->message_box_display( text = `Charts are not avalaible with OpenUI5, change your UI5 library first` type = `error` ).
*        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).
*      ENDIF.

      render_tab_line( ).
    ENDIF.

    CASE client->get( )-event.

      WHEN 'BACK'.
        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).
    ENDCASE.

  ENDMETHOD.
ENDCLASS.
