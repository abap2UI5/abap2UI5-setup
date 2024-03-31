CLASS zcl_sicf DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_http_extension.
  PROTECTED SECTION.
ENDCLASS.



CLASS zcl_sicf IMPLEMENTATION.

  METHOD if_http_extension~handle_request.

    DATA lv_requ_body TYPE string.
    DATA lv_method    TYPE string.

    lv_requ_body = server->request->get_cdata( ).
    lv_method = server->request->get_method( ).

    DATA lv_resp TYPE string.
    CASE lv_method.
      WHEN 'GET'.
        lv_resp = z2ui5_cl_http_handler=>http_get( ).
      WHEN 'POST'.
        lv_resp = z2ui5_cl_http_handler=>http_post( lv_requ_body ).
    ENDCASE.

    server->response->set_cdata( lv_resp ).
    server->response->set_status( code = 200 reason = `success` ).

  ENDMETHOD.

ENDCLASS.