CLASS zcl_sicf DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_http_extension.
  PROTECTED SECTION.
ENDCLASS.



CLASS zcl_sicf IMPLEMENTATION.

  METHOD if_http_extension~handle_request.

    DATA lt_param TYPE tihttpnvp.
    DATA lt_header TYPE tihttpnvp.
    data lv_resp type string.

    server->request->get_header_fields( CHANGING fields = lt_header ).

    server->request->get_form_fields( CHANGING fields = lt_param ).

    z2ui5_cl_http_handler=>client-t_header = lt_header.
    z2ui5_cl_http_handler=>client-t_param  = lt_param.
    z2ui5_cl_http_handler=>client-body     = server->request->get_cdata( ).

    case server->request->get_method( ).
      WHEN 'GET'.
        lv_Resp = z2ui5_cl_http_handler=>main_index_html( ).
      WHEN 'POST'.
        lv_Resp = z2ui5_cl_http_handler=>main_roundtrip( ).
    endcase.

    server->response->set_cdata( lv_resp ).
    server->response->set_status( code = 200 reason = 'success' ).

  ENDMETHOD.

ENDCLASS.