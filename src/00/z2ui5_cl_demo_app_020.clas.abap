CLASS Z2UI5_CL_DEMO_APP_020 DEFINITION PUBLIC.

  PUBLIC SECTION.

    INTERFACES Z2UI5_if_app.

    CLASS-METHODS factory
      IMPORTING
        i_text          TYPE string
        i_cancel_text   TYPE string
        i_cancel_event  TYPE string
        i_confirm_text  TYPE string
        i_confirm_event TYPE string
      RETURNING
        VALUE(result)   TYPE REF TO Z2UI5_CL_DEMO_APP_020.

    DATA check_initialized TYPE abap_bool.

    DATA mv_text TYPE string.
    DATA mv_cancel_text TYPE string.
    DATA mv_cancel_event TYPE string.
    DATA mv_confirm_text TYPE string.
    DATA mv_confirm_event TYPE string.
    DATA mv_event TYPE string.

  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS Z2UI5_CL_DEMO_APP_020 IMPLEMENTATION.


  METHOD factory.

    result = NEW #( ).

    result->mv_text = i_text.
    result->mv_cancel_text = i_cancel_text.
    result->mv_cancel_event = i_cancel_event.
    result->mv_confirm_text = i_confirm_text.
    result->mv_confirm_event = i_confirm_event.

  ENDMETHOD.


  METHOD Z2UI5_if_app~main.

    IF check_initialized = abap_false.
      check_initialized = abap_true.
    ENDIF.

    CASE client->get( )-event.

      WHEN mv_cancel_event OR mv_confirm_event.
        mv_event = client->get( )-event.
        client->popup_destroy( ).
        client->nav_app_leave( client->get_app( client->get( )-s_draft-id_prev_app_stack ) ).
        return.
    ENDCASE.

    client->popup_display(  Z2UI5_cl_xml_view=>factory_popup(
         )->dialog( 'abap2UI5 - Popup to decide'
                )->vbox(
                    )->text( mv_text )->get_parent(
                )->footer(
                    )->overflow_toolbar(
                        )->toolbar_spacer(
                        )->button(
                            text  = mv_cancel_text
                            press = client->_event( mv_cancel_event )
                        )->button(
                            text  = mv_confirm_text
                            press = client->_event( mv_confirm_event )
                            type  = 'Emphasized'
                        )->stringify(  ) ).

  ENDMETHOD.
ENDCLASS.
