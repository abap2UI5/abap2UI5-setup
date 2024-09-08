CLASS zcl_sicf DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_http_extension.
  PROTECTED SECTION.
ENDCLASS.



CLASS zcl_sicf IMPLEMENTATION.

  METHOD if_http_extension~handle_request.

    DATA lv_requ_body TYPE string.
    lv_req = server->request->get_cdata( ).

    DATA lv_resp TYPE string.
    lv_resp = z2ui5_cl_http_handler=>main( lv_req ).

    server->response->set_cdata( lv_resp ).
    server->response->set_header_field( name = `cache-control` value = `no-cache` ).
    server->response->set_status( code = 200 reason = `success` ).

  ENDMETHOD.

ENDCLASS.
