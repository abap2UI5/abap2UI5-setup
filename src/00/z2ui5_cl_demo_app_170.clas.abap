class Z2UI5_CL_DEMO_APP_170 definition
  public
  create public .

public section.

  interfaces IF_SERIALIZABLE_OBJECT .
  interfaces Z2UI5_IF_APP .

  data CLIENT type ref to Z2UI5_IF_CLIENT .
  data MV_SELECTED_KEY type STRING .

  methods UI5_DISPLAY .
  methods UI5_EVENT .
  methods SIMPLE_POPUP1 .
  methods SIMPLE_POPUP2 .
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS Z2UI5_CL_DEMO_APP_170 IMPLEMENTATION.


  METHOD SIMPLE_POPUP1.

    DATA(popup) = z2ui5_cl_xml_view=>factory_popup( ).

    DATA(dialog) = popup->dialog( stretch = abap_true
            afterclose = client->_event( 'BTN_OK_1ND' )
         )->content( ).

*    DATA(content) = dialog->button( text = `Open 2nd popup` press = client->_event( 'GOTO_2ND' ) ).
    DATA(content) = dialog->Icon_Tab_bar( selectedkey = client->_bind_edit( mv_selected_key )
*                                                  select = client->_event( `OnSelectIconTabBar` )
*                                                  select = client->_event_client( val = 'NAV_CONTAINER_TO' t_arg  = value #( ( `NavCon` ) ( `${$parameters}` ) ) )
                                                  select = client->_event_client( val = `POPUP_NAV_CONTAINER_TO` t_arg  = value #( ( `NavCon` ) ( `${$parameters>/selectedKey}` ) ) )
                                                  headermode = `Inline`
                                                  expanded = abap_true
                                                  expandable = abap_false
                                  )->items(
                                    )->icon_tab_filter( key = `page1` text = `Home` )->get_parent(
                                    )->icon_tab_filter( key = `page2` text = `Applications` )->get_parent(
                                    )->icon_tab_filter( key = `page3` text = `Users and Groups`
                                      )->items(
                                         )->icon_tab_filter( key = `page11` text = `User 1` )->get_parent(
                                         )->icon_tab_filter( key = `page32` text = `User 2` )->get_parent(
                                         )->icon_tab_filter( key = `page33` text = `User 3`

                                      )->get_parent( )->get_parent( )->get_parent( )->get_parent(
                                        )->content( )->vbox( height = `100%`
                                         )->nav_container( id = `NavCon` initialpage = `page1` defaulttransitionname = `flip` height = '400px'
                                           )->pages(
                                            )->page(
                                              title          = 'first page'
                                              id             = `page1`
                                           )->get_parent(
                                            )->page(
                                              title          = 'second page'
                                              id             = `page2`
                                           )->get_parent(
                                            )->page(
                                              title          = 'third page'
                                              id             = `page3`
                                ).

    dialog->get_parent( )->footer( )->overflow_toolbar(
                  )->toolbar_spacer(
                  )->button(
                      text  = 'OK'
                      press = client->_event( 'BTN_OK_1ND' )
                      type  = 'Emphasized' ).

    client->popup_display( popup->stringify( ) ).

  ENDMETHOD.


  METHOD SIMPLE_POPUP2.

    DATA(popup) = z2ui5_cl_xml_view=>factory_popup( ).

    DATA(dialog) = popup->dialog(
        afterclose = client->_event( 'BTN_OK_2ND' )
         )->content( ).

    DATA(content) = dialog->label( text = 'this is a second popup' ).

    dialog->get_parent( )->footer( )->overflow_toolbar(
                  )->toolbar_spacer(
                  )->button(
                      text  = 'GOTO 1ST POPUP'
                      press = client->_event( 'BTN_OK_2ND' )
                      type  = 'Emphasized' ).

    client->popup_display( popup->stringify( ) ).

  ENDMETHOD.


  METHOD UI5_DISPLAY.

    DATA(view) = z2ui5_cl_xml_view=>factory( ).
    view->shell(
        )->page(
                title          = 'abap2UI5 - Popup To Popup'
                navbuttonpress = client->_event( val = 'BACK' check_view_destroy = abap_true )
                shownavbutton = xsdbool( client->get( )-s_draft-id_prev_app_stack IS NOT INITIAL )
            )->header_content(
                )->link(
                    text = 'Source_Code'
                    target = '_blank'
                    href = z2ui5_cl_demo_utility=>factory( client )->app_get_url_source_code( )
                    )->get_parent(
           )->button(
            text  = 'Open Popup...'
            press = client->_event( 'POPUP' ) ).

    client->view_display( view->stringify( ) ).

  ENDMETHOD.


  METHOD UI5_EVENT.

    CASE client->get( )-event.
      WHEN 'GOTO_2ND'.
        simple_popup2( ).

      WHEN 'BTN_OK_2ND'.
        client->popup_destroy(  ).
        simple_popup1( ).

      WHEN 'BTN_OK_1ND'.
        client->popup_destroy(  ).

      WHEN 'POPUP'.
        simple_popup1( ).

      WHEN 'BACK'.
        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).

    ENDCASE.

  ENDMETHOD.


  METHOD Z2UI5_IF_APP~MAIN.

    me->client = client.

    IF client->get( )-check_on_navigated = abap_true.
      ui5_display( ).
      RETURN.
    ENDIF.

    ui5_event( ).

  ENDMETHOD.
ENDCLASS.
