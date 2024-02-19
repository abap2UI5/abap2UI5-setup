CLASS Z2UI5_CL_DEMO_APP_012 DEFINITION PUBLIC.

  PUBLIC SECTION.

    INTERFACES Z2UI5_if_app.

    DATA client TYPE REF TO Z2UI5_if_client.

    DATA mv_check_popup TYPE abap_bool.
    METHODS ui5_popup_decide.
    METHODS ui5_popup_info_frontend_close.
    METHODS ui5_view_display.

  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS Z2UI5_CL_DEMO_APP_012 IMPLEMENTATION.


  METHOD ui5_popup_decide.

    DATA(popup)  = Z2UI5_cl_xml_view=>factory_popup( ).
    popup->dialog( 'Popup - Decide'
            )->vbox(
                )->text( 'this is a popup to decide, you have to make a decision now...'
            )->get_parent(
            )->footer( )->overflow_toolbar(
                )->toolbar_spacer(
                )->button(
                    text  = 'Cancel'
                    press = client->_event( 'POPUP_DECIDE_CANCEL' )
                )->button(
                    text  = 'Continue'
                    press = client->_event( 'POPUP_DECIDE_CONTINUE' )
                    type  = 'Emphasized' ).

    client->popup_display( popup->stringify( ) ).

  ENDMETHOD.


  METHOD ui5_popup_info_frontend_close.

    DATA(popup)  = Z2UI5_cl_xml_view=>factory_popup( ).
    popup->dialog( 'Popup - Info'
            )->vbox(
                )->text( 'this is an information, press close to go back to the main view without a server roundtrip'
            )->get_parent(
            )->footer( )->overflow_toolbar(
                )->toolbar_spacer(
                )->button(
                    text  = 'close'
                    press = client->_event_client( client->cs_event-popup_close )
                    type  = 'Emphasized' ).

    client->popup_display( popup->stringify( ) ).

  ENDMETHOD.


  METHOD ui5_view_display.

    DATA(lo_main) = z2ui5_cl_xml_view=>factory( )->shell( ).
    DATA(page) = lo_main->page(
            title          = 'abap2UI5 - Popups'
            navbuttonpress = client->_event( val = 'BACK' check_view_destroy = abap_true )
            shownavbutton = xsdbool( client->get( )-s_draft-id_prev_app_stack IS NOT INITIAL )
            )->header_content(
                )->link(
                    text = 'Source_Code' target = '_blank'
                    href = z2ui5_cl_demo_utility=>factory( client )->app_get_url_source_code( )
            )->get_parent( ).

    DATA(grid) = page->grid( 'L7 M12 S12' )->content( 'layout'
        )->simple_form( 'Popup in same App' )->content( 'form'
            )->label( 'Demo'
            )->button(
                text  = 'popup rendering, no background rendering'
                press = client->_event( val = 'BUTTON_POPUP_01' check_view_destroy = abap_true )
            )->label( 'Demo'
            )->button(
                text  = 'popup rendering, background destroyed and rerendering'
                press = client->_event( val = 'BUTTON_POPUP_02' check_view_destroy = abap_true )
            )->label( 'Demo'
            )->button(
                text  = 'popup, background unchanged (default) - close (no roundtrip)'
                press = client->_event( 'BUTTON_POPUP_03' )
            )->label( 'Demo'
            )->button(
                text  = 'popup, background unchanged (default) - close with server'
                press = client->_event( val = 'BUTTON_POPUP_04'  )
        )->get_parent( )->get_parent( ).

    grid->simple_form( 'Popup in new App' )->content( 'form'
        )->label( 'Demo'
        )->button(
            text  = 'popup rendering, no background'
            press = client->_event( 'BUTTON_POPUP_05' )
        )->label( 'Demo'
        )->button(
            text  = 'popup rendering, hold previous view'
            press = client->_event( val = 'BUTTON_POPUP_06' ) ).

    client->view_display( lo_main->stringify( ) ).

  ENDMETHOD.


  METHOD Z2UI5_if_app~main.

    me->client = client.

    IF client->get( )-check_on_navigated = abap_true.
      ui5_view_display( ).
    ENDIF.

    IF mv_check_popup = abap_true.
      mv_check_popup = abap_false.
      DATA(app) = CAST Z2UI5_CL_DEMO_APP_020( client->get_app( client->get( )-s_draft-id_prev_app )  ).
      client->message_toast_display( app->mv_event && ` pressed` ).
    ENDIF.

    CASE client->get( )-event.

      WHEN 'BUTTON_POPUP_01'.
        ui5_popup_decide( ).

      WHEN 'POPUP_DECIDE_CONTINUE'.
        client->popup_destroy( ).
        ui5_view_display( ).
        client->message_toast_display( 'continue pressed' ).

      WHEN 'POPUP_DECIDE_CANCEL'.
        client->popup_destroy( ).
        ui5_view_display( ).
        client->message_toast_display( 'cancel pressed' ).

      WHEN 'BUTTON_POPUP_02'.
        ui5_view_display( ).
        ui5_popup_decide( ).

      WHEN 'BUTTON_POPUP_03'.
        ui5_popup_info_frontend_close( ).

      WHEN 'BUTTON_POPUP_04'.
        ui5_popup_decide( ).

      WHEN 'BUTTON_POPUP_05'.
        mv_check_popup = abap_true.
        client->view_destroy( ).
        client->nav_app_call( Z2UI5_CL_DEMO_APP_020=>factory(
          i_text          = '(new app )this is a popup to decide, the text is send from the previous app and the answer will be send back'
          i_cancel_text   = 'Cancel '
          i_cancel_event  = 'POPUP_DECIDE_CANCEL'
          i_confirm_text  = 'Continue'
          i_confirm_event = 'POPUP_DECIDE_CONTINUE'
          ) ).

      WHEN 'BUTTON_POPUP_06'.
        mv_check_popup = abap_true.
        client->nav_app_call( Z2UI5_CL_DEMO_APP_020=>factory(
          i_text          = '(new app )this is a popup to decide, the text is send from the previous app and the answer will be send back'
          i_cancel_text   = 'Cancel'
          i_cancel_event  = 'POPUP_DECIDE_CANCEL'
          i_confirm_text  = 'Continue'
          i_confirm_event = 'POPUP_DECIDE_CONTINUE' ) ).

      WHEN 'BACK'.
        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).

    ENDCASE.

  ENDMETHOD.
ENDCLASS.
