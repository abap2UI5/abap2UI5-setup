CLASS Z2UI5_CL_DEMO_APP_029 DEFINITION PUBLIC.

  PUBLIC SECTION.

    INTERFACES Z2UI5_if_app.

    DATA check_initialized TYPE abap_bool.

    DATA mv_tab_radial_active TYPE abap_bool.

    METHODS render_tab_radial.

    DATA client TYPE REF TO Z2UI5_if_client.

  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS Z2UI5_CL_DEMO_APP_029 IMPLEMENTATION.


  METHOD render_tab_radial.

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

    DATA(grid) = container->tab(
            text     = 'Radial Chart'
            selected = client->_bind( mv_tab_radial_active )
        )->grid( 'XL12 L12 M12 S12' ).

    grid->link(
        text = 'Go to the SAP Demos for Radial Charts here...' target = '_blank'
        href = 'https://sapui5.hana.ondemand.com/#/entity/sap.suite.ui.microchart.RadialMicroChart/sample/sap.suite.ui.microchart.sample.RadialMicroChart' ).

    grid->vertical_layout(
        )->horizontal_layout(
            )->radial_micro_chart(
                size       = 'M'
                percentage = '45'
                press      = client->_event( 'RADIAL_PRESS' )
            )->radial_micro_chart(
                size       = 'S'
                percentage = '45'
                press      = client->_event( 'RADIAL_PRESS' )
        )->get_parent(
        )->horizontal_layout(
            )->radial_micro_chart(
                size       = 'M'
                percentage = '99.9'
                press      = client->_event( 'RADIAL_PRESS' )
                valueColor = 'Good'
            )->radial_micro_chart(
                size       = 'S'
                percentage = '99.9'
                press      = client->_event( 'RADIAL_PRESS' )
                valueColor = 'Good'
        )->get_parent(
        )->horizontal_layout(
            )->radial_micro_chart(
                size       = 'M'
                percentage = '0'
                press      = client->_event( 'RADIAL_PRESS' )
                valueColor = 'Error'
            )->radial_micro_chart(
                size       = 'S'
                percentage = '0'
                press      = client->_event( 'RADIAL_PRESS' )
                valueColor = 'Error'
        )->get_parent(
        )->horizontal_layout(
            )->radial_micro_chart(
                size       = 'M'
                percentage = '0.1'
                press      = client->_event( 'RADIAL_PRESS' )
                valueColor = 'Critical'
            )->radial_micro_chart(
                size       = 'S'
                percentage = '0.1'
                press      = client->_event( 'RADIAL_PRESS' )
                valueColor = 'Critical' ).

    client->view_display( view->stringify( ) ).

  ENDMETHOD.


  METHOD Z2UI5_if_app~main.

    me->client = client.

    IF check_initialized = abap_false.
      check_initialized = abap_true.

*      DATA(lv_version) = to_upper( client->get( )-s_config-version ).
*      IF lv_version CS `OPEN`.
*        client->message_box_display( text = `Charts are not avalaible with OpenUI5, change your UI5 library first` type = `error` ).
*        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).
*      ENDIF.

      render_tab_radial( ).
    ENDIF.

    CASE client->get( )-event.

      WHEN 'BACK'.
        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).
    ENDCASE.

  ENDMETHOD.
ENDCLASS.
