/* eslint-disable curly */
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {initializeABAP} from "./init.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  await initializeABAP();
  let lt_input = new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character(30), testclass_name: new abap.types.Character(30), method_name: new abap.types.Character(30)}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]});
  let ls_input = new abap.types.Structure({class_name: new abap.types.Character(30), testclass_name: new abap.types.Character(30), method_name: new abap.types.Character(30)});
  let ls_result = new abap.types.Structure({list: new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character(30), testclass_name: new abap.types.Character(30), method_name: new abap.types.Character(30), expected: new abap.types.String(), actual: new abap.types.String(), status: new abap.types.String(), runtime: new abap.types.Integer(), message: new abap.types.String(), js_location: new abap.types.String(), console: new abap.types.String()}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}), json: new abap.types.String()});
  await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
  await import("./z2ui5_cl_ajson_filter_lib.clas.testclasses.mjs");
  await import("./z2ui5_cl_ajson_mapping.clas.testclasses.mjs");
  await import("./z2ui5_cl_ajson_utilities.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_action.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_app.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_app_error.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_app_info.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_app_search.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_app_startup.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_attri_srv.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_bind_srv.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_client.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_dissolve_srv.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_draft_srv.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_event_srv.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_http_get.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_http_post.clas.testclasses.mjs");
  await import("./z2ui5_cl_core_json_srv.clas.testclasses.mjs");
  await import("./z2ui5_cl_http_handler.clas.testclasses.mjs");
  await import("./z2ui5_cl_test_integration_test.clas.testclasses.mjs");
  await import("./z2ui5_cl_ui5.clas.testclasses.mjs");
  await import("./z2ui5_cl_util.clas.testclasses.mjs");
  await import("./z2ui5_cl_util_api.clas.testclasses.mjs");
  await import("./z2ui5_cl_util_stmpncfctn.clas.testclasses.mjs");
  await import("./z2ui5_cl_xml_view.clas.testclasses.mjs");
  await import("./z2ui5_cx_ajson_error.clas.testclasses.mjs");
  await import("./z2ui5_cx_util_error.clas.testclasses.mjs");


  ls_result.set(await abap.Classes["KERNEL_UNIT_RUNNER"].run({it_input: lt_input}));
  fs.writeFileSync(__dirname + path.sep + "output.json", ls_result.get().json.get());
}

run().then(() => {
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
});