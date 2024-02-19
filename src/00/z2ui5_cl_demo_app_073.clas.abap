CLASS z2ui5_cl_demo_app_073 DEFINITION PUBLIC.

  PUBLIC SECTION.

    INTERFACES z2ui5_if_app.

    DATA check_initialized TYPE abap_bool.
    DATA mv_url TYPE string.
    DATA mv_check_timer_active TYPE abap_bool.

    METHODS display_view.

    DATA client TYPE REF TO z2ui5_if_client.
  PROTECTED SECTION.
  PRIVATE SECTION.

ENDCLASS.



CLASS z2ui5_cl_demo_app_073 IMPLEMENTATION.


  METHOD display_view.

    DATA(view) = z2ui5_cl_xml_view=>factory( ).

    client->view_display( view->shell(
          )->page(
                  title          = 'abap2UI5 - First Example'
                  navbuttonpress = client->_event( val = 'BACK' check_view_destroy = abap_true )
                  shownavbutton = xsdbool( client->get( )-s_draft-id_prev_app_stack IS NOT INITIAL )
             )->_z2ui5( )->timer(
                  checkactive = client->_bind( mv_check_timer_active )
                  finished    = client->_event_client( val   = client->cs_event-open_new_tab
                                                         t_arg = VALUE #( ( `$` && client->_bind( mv_url ) ) ) )
              )->header_content(
                  )->link(
                      text = 'Source_Code'
                      href = z2ui5_cl_demo_utility=>factory( client )->app_get_url_source_code( )
                      target = '_blank'
              )->get_parent(
              )->simple_form( title = 'Form Title' editable = abap_true
                  )->content( 'form'
                      )->button(
                          text  = 'open new tab'
                          press = client->_event( val = 'BUTTON_OPEN_NEW_TAB' )
           )->stringify( ) ).

  ENDMETHOD.


  METHOD z2ui5_if_app~main.

    me->client = client.

    IF check_initialized = abap_false.
      check_initialized = abap_true.
      mv_check_timer_active = abap_false.
      display_view( ).
    ENDIF.

    CASE client->get( )-event.

      WHEN 'BUTTON_OPEN_NEW_TAB'.
        mv_check_timer_active = abap_true.
        mv_url = `https://www.google.com/search?q=abap2ui5&oq=abap2ui5,123`.
        client->view_model_update( ).

      WHEN 'BACK'.
        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack  ) ).

    ENDCASE.

  ENDMETHOD.
ENDCLASS.
