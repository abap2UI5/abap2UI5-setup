/* eslint-disable curly */
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {initializeABAP} from "./init.mjs";
import runtime from "@abaplint/runtime";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  await initializeABAP();
  const unit = new runtime.UnitTestResult();
  let clas;
  let locl;
  let meth;
  try {
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_UTIL_API");
    {
        const {ltcl_test_app} = await import("./z2ui5_cl_util_api.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_app");
        if (ltcl_test_app.class_setup) await ltcl_test_app.class_setup();
      if (ltcl_test_app.class_teardown) await ltcl_test_app.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_parser_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_parser_test");
        if (ltcl_parser_test.class_setup) await ltcl_parser_test.class_setup();
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse");
        meth = locl.addMethod("parse");
        await test.parse();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_keeping_order");
        meth = locl.addMethod("parse_keeping_order");
        await test.parse_keeping_order();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_string");
        meth = locl.addMethod("parse_string");
        await test.parse_string();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_number");
        meth = locl.addMethod("parse_number");
        await test.parse_number();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_float");
        meth = locl.addMethod("parse_float");
        await test.parse_float();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_boolean");
        meth = locl.addMethod("parse_boolean");
        await test.parse_boolean();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_false");
        meth = locl.addMethod("parse_false");
        await test.parse_false();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_null");
        meth = locl.addMethod("parse_null");
        await test.parse_null();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_date");
        meth = locl.addMethod("parse_date");
        await test.parse_date();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->parse_bare_values");
        meth = locl.addMethod("parse_bare_values");
        await test.parse_bare_values();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
  console.log('Z2UI5_CL_AJSON: running ltcl_parser_test->parse_error, skipped');
  meth = locl.addMethod("parse_error");
  meth.skip();
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->duplicate_key");
        meth = locl.addMethod("duplicate_key");
        await test.duplicate_key();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_parser_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_parser_test->non_json");
        meth = locl.addMethod("non_json");
        await test.non_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_parser_test.class_teardown) await ltcl_parser_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_serializer_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_serializer_test");
        if (ltcl_serializer_test.class_setup) await ltcl_serializer_test.class_setup();
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->stringify_condensed");
        meth = locl.addMethod("stringify_condensed");
        await test.stringify_condensed();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->stringify_indented");
        meth = locl.addMethod("stringify_indented");
        await test.stringify_indented();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->array_index");
        meth = locl.addMethod("array_index");
        await test.array_index();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->item_order");
        meth = locl.addMethod("item_order");
        await test.item_order();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->simple_indented");
        meth = locl.addMethod("simple_indented");
        await test.simple_indented();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->empty_set");
        meth = locl.addMethod("empty_set");
        await test.empty_set();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->escape_string");
        meth = locl.addMethod("escape_string");
        await test.escape_string();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_serializer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_serializer_test->empty");
        meth = locl.addMethod("empty");
        await test.empty();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_serializer_test.class_teardown) await ltcl_serializer_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_utils_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_utils_test");
        if (ltcl_utils_test.class_setup) await ltcl_utils_test.class_setup();
      {
        const test = await (new ltcl_utils_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_utils_test->normalize_path");
        meth = locl.addMethod("normalize_path");
        await test.normalize_path();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_utils_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_utils_test->split_path");
        meth = locl.addMethod("split_path");
        await test.split_path();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_utils_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_utils_test->validate_array_index");
        meth = locl.addMethod("validate_array_index");
        await test.validate_array_index();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_utils_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_utils_test->string_to_xstring_utf8");
        meth = locl.addMethod("string_to_xstring_utf8");
        await test.string_to_xstring_utf8();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_utils_test.class_teardown) await ltcl_utils_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_reader_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_reader_test");
        if (ltcl_reader_test.class_setup) await ltcl_reader_test.class_setup();
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->get_value");
        meth = locl.addMethod("get_value");
        await test.get_value();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->get_node_type");
        meth = locl.addMethod("get_node_type");
        await test.get_node_type();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->exists");
        meth = locl.addMethod("exists");
        await test.exists();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->value_integer");
        meth = locl.addMethod("value_integer");
        await test.value_integer();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->value_number");
        meth = locl.addMethod("value_number");
        await test.value_number();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->value_boolean");
        meth = locl.addMethod("value_boolean");
        await test.value_boolean();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->value_string");
        meth = locl.addMethod("value_string");
        await test.value_string();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->members");
        meth = locl.addMethod("members");
        await test.members();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->slice");
        meth = locl.addMethod("slice");
        await test.slice();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->array_to_string_table");
        meth = locl.addMethod("array_to_string_table");
        await test.array_to_string_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->get_date");
        meth = locl.addMethod("get_date");
        await test.get_date();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_reader_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_reader_test->get_timestamp");
        meth = locl.addMethod("get_timestamp");
        await test.get_timestamp();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_reader_test.class_teardown) await ltcl_reader_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_json_to_abap} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_json_to_abap");
        if (ltcl_json_to_abap.class_setup) await ltcl_json_to_abap.class_setup();
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_struc");
        meth = locl.addMethod("to_abap_struc");
        await test.to_abap_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_timestamp_initial");
        meth = locl.addMethod("to_abap_timestamp_initial");
        await test.to_abap_timestamp_initial();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_value");
        meth = locl.addMethod("to_abap_value");
        await test.to_abap_value();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_array");
        meth = locl.addMethod("to_abap_array");
        await test.to_abap_array();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_array_of_arrays_simple");
        meth = locl.addMethod("to_abap_array_of_arrays_simple");
        await test.to_abap_array_of_arrays_simple();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_array_of_arrays");
        meth = locl.addMethod("to_abap_array_of_arrays");
        await test.to_abap_array_of_arrays();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_w_tab_of_struc");
        meth = locl.addMethod("to_abap_w_tab_of_struc");
        await test.to_abap_w_tab_of_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_w_plain_tab");
        meth = locl.addMethod("to_abap_w_plain_tab");
        await test.to_abap_w_plain_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_hashed_tab");
        meth = locl.addMethod("to_abap_hashed_tab");
        await test.to_abap_hashed_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_sorted_tab");
        meth = locl.addMethod("to_abap_sorted_tab");
        await test.to_abap_sorted_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_hashed_plain_tab");
        meth = locl.addMethod("to_abap_hashed_plain_tab");
        await test.to_abap_hashed_plain_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_negative");
        meth = locl.addMethod("to_abap_negative");
        await test.to_abap_negative();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_corresponding");
        meth = locl.addMethod("to_abap_corresponding");
        await test.to_abap_corresponding();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_corresponding_negative");
        meth = locl.addMethod("to_abap_corresponding_negative");
        await test.to_abap_corresponding_negative();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_corresponding_public");
        meth = locl.addMethod("to_abap_corresponding_public");
        await test.to_abap_corresponding_public();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_corresponding_pub_neg");
        meth = locl.addMethod("to_abap_corresponding_pub_neg");
        await test.to_abap_corresponding_pub_neg();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_to_abap()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_json_to_abap->to_abap_time");
        meth = locl.addMethod("to_abap_time");
        await test.to_abap_time();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_json_to_abap.class_teardown) await ltcl_json_to_abap.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_writer_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_writer_test");
        if (ltcl_writer_test.class_setup) await ltcl_writer_test.class_setup();
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_ajson");
        meth = locl.addMethod("set_ajson");
        await test.set_ajson();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_value");
        meth = locl.addMethod("set_value");
        await test.set_value();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->ignore_empty");
        meth = locl.addMethod("ignore_empty");
        await test.ignore_empty();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_obj");
        meth = locl.addMethod("set_obj");
        await test.set_obj();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_obj_w_date_time");
        meth = locl.addMethod("set_obj_w_date_time");
        await test.set_obj_w_date_time();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_tab");
        meth = locl.addMethod("set_tab");
        await test.set_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_tab_hashed");
        meth = locl.addMethod("set_tab_hashed");
        await test.set_tab_hashed();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_tab_nested_struct");
        meth = locl.addMethod("set_tab_nested_struct");
        await test.set_tab_nested_struct();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->prove_path_exists");
        meth = locl.addMethod("prove_path_exists");
        await test.prove_path_exists();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->delete_subtree");
        meth = locl.addMethod("delete_subtree");
        await test.delete_subtree();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->delete_");
        meth = locl.addMethod("delete_");
        await test.delete_();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->arrays");
        meth = locl.addMethod("arrays");
        await test.arrays();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->arrays_negative");
        meth = locl.addMethod("arrays_negative");
        await test.arrays_negative();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->root_assignment");
        meth = locl.addMethod("root_assignment");
        await test.root_assignment();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_bool_abap_bool");
        meth = locl.addMethod("set_bool_abap_bool");
        await test.set_bool_abap_bool();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_bool_int");
        meth = locl.addMethod("set_bool_int");
        await test.set_bool_int();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_bool_tab");
        meth = locl.addMethod("set_bool_tab");
        await test.set_bool_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_str");
        meth = locl.addMethod("set_str");
        await test.set_str();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_int");
        meth = locl.addMethod("set_int");
        await test.set_int();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_date");
        meth = locl.addMethod("set_date");
        await test.set_date();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_timestamp");
        meth = locl.addMethod("set_timestamp");
        await test.set_timestamp();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->read_only");
        meth = locl.addMethod("read_only");
        await test.read_only();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_array_obj");
        meth = locl.addMethod("set_array_obj");
        await test.set_array_obj();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->set_with_type");
        meth = locl.addMethod("set_with_type");
        await test.set_with_type();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->overwrite_w_keep_order_touch");
        meth = locl.addMethod("overwrite_w_keep_order_touch");
        await test.overwrite_w_keep_order_touch();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->overwrite_w_keep_order_set");
        meth = locl.addMethod("overwrite_w_keep_order_set");
        await test.overwrite_w_keep_order_set();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->setx");
        meth = locl.addMethod("setx");
        await test.setx();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->setx_float");
        meth = locl.addMethod("setx_float");
        await test.setx_float();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->setx_complex");
        meth = locl.addMethod("setx_complex");
        await test.setx_complex();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_writer_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_writer_test->setx_complex_w_keep_order");
        meth = locl.addMethod("setx_complex_w_keep_order");
        await test.setx_complex_w_keep_order();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_writer_test.class_teardown) await ltcl_writer_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_integrated} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_integrated");
        if (ltcl_integrated.class_setup) await ltcl_integrated.class_setup();
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->reader");
        meth = locl.addMethod("reader");
        await test.reader();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->array_index");
        meth = locl.addMethod("array_index");
        await test.array_index();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->array_simple");
        meth = locl.addMethod("array_simple");
        await test.array_simple();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->stringify");
        meth = locl.addMethod("stringify");
        await test.stringify();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->item_order_integrated");
        meth = locl.addMethod("item_order_integrated");
        await test.item_order_integrated();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->chaining");
        meth = locl.addMethod("chaining");
        await test.chaining();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->push_json");
        meth = locl.addMethod("push_json");
        await test.push_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_integrated()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_integrated->is_empty");
        meth = locl.addMethod("is_empty");
        await test.is_empty();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_integrated.class_teardown) await ltcl_integrated.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_abap_to_json} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_abap_to_json");
        if (ltcl_abap_to_json.class_setup) await ltcl_abap_to_json.class_setup();
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_ajson");
        meth = locl.addMethod("set_ajson");
        await test.set_ajson();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_value_number");
        meth = locl.addMethod("set_value_number");
        await test.set_value_number();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_value_string");
        meth = locl.addMethod("set_value_string");
        await test.set_value_string();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_value_true");
        meth = locl.addMethod("set_value_true");
        await test.set_value_true();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_value_false");
        meth = locl.addMethod("set_value_false");
        await test.set_value_false();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_value_xsdboolean");
        meth = locl.addMethod("set_value_xsdboolean");
        await test.set_value_xsdboolean();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_value_timestamp");
        meth = locl.addMethod("set_value_timestamp");
        await test.set_value_timestamp();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_value_timestamp_initial");
        meth = locl.addMethod("set_value_timestamp_initial");
        await test.set_value_timestamp_initial();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_null");
        meth = locl.addMethod("set_null");
        await test.set_null();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_obj");
        meth = locl.addMethod("set_obj");
        await test.set_obj();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_array");
        meth = locl.addMethod("set_array");
        await test.set_array();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_complex_obj");
        meth = locl.addMethod("set_complex_obj");
        await test.set_complex_obj();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->set_include_with_suffix");
        meth = locl.addMethod("set_include_with_suffix");
        await test.set_include_with_suffix();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_to_json()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_abap_to_json->prefix");
        meth = locl.addMethod("prefix");
        await test.prefix();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_abap_to_json.class_teardown) await ltcl_abap_to_json.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_filter_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_filter_test");
        if (ltcl_filter_test.class_setup) await ltcl_filter_test.class_setup();
      {
        const test = await (new ltcl_filter_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_filter_test->simple_test");
        meth = locl.addMethod("simple_test");
        await test.simple_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filter_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_filter_test->array_test");
        meth = locl.addMethod("array_test");
        await test.array_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filter_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_filter_test->visit_types");
        meth = locl.addMethod("visit_types");
        await test.visit_types();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_filter_test.class_teardown) await ltcl_filter_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_mapper_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_mapper_test");
        if (ltcl_mapper_test.class_setup) await ltcl_mapper_test.class_setup();
      {
        const test = await (new ltcl_mapper_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_mapper_test->simple_test");
        meth = locl.addMethod("simple_test");
        await test.simple_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_mapper_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_mapper_test->array_test");
        meth = locl.addMethod("array_test");
        await test.array_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_mapper_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_mapper_test->duplication_test");
        meth = locl.addMethod("duplication_test");
        await test.duplication_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_mapper_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_mapper_test->empty_name_test");
        meth = locl.addMethod("empty_name_test");
        await test.empty_name_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_mapper_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_mapper_test->trivial");
        meth = locl.addMethod("trivial");
        await test.trivial();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_mapper_test.class_teardown) await ltcl_mapper_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON");
    {
        const {ltcl_cloning_test} = await import("./z2ui5_cl_ajson.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_cloning_test");
        if (ltcl_cloning_test.class_setup) await ltcl_cloning_test.class_setup();
      {
        const test = await (new ltcl_cloning_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_cloning_test->clone_test");
        meth = locl.addMethod("clone_test");
        await test.clone_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_cloning_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_cloning_test->filter_test");
        meth = locl.addMethod("filter_test");
        await test.filter_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_cloning_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_cloning_test->mapper_test");
        meth = locl.addMethod("mapper_test");
        await test.mapper_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_cloning_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_cloning_test->mapper_and_filter");
        meth = locl.addMethod("mapper_and_filter");
        await test.mapper_and_filter();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_cloning_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON: running ltcl_cloning_test->opts_copying");
        meth = locl.addMethod("opts_copying");
        await test.opts_copying();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_cloning_test.class_teardown) await ltcl_cloning_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON_FILTER_LIB");
    {
        const {ltcl_filters_test} = await import("./z2ui5_cl_ajson_filter_lib.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_filters_test");
        if (ltcl_filters_test.class_setup) await ltcl_filters_test.class_setup();
      {
        const test = await (new ltcl_filters_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_FILTER_LIB: running ltcl_filters_test->empty_filter_simple");
        meth = locl.addMethod("empty_filter_simple");
        await test.empty_filter_simple();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filters_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_FILTER_LIB: running ltcl_filters_test->empty_filter_deep");
        meth = locl.addMethod("empty_filter_deep");
        await test.empty_filter_deep();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filters_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_FILTER_LIB: running ltcl_filters_test->path_filter");
        meth = locl.addMethod("path_filter");
        await test.path_filter();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filters_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_FILTER_LIB: running ltcl_filters_test->path_filter_string");
        meth = locl.addMethod("path_filter_string");
        await test.path_filter_string();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filters_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_FILTER_LIB: running ltcl_filters_test->path_filter_w_patterns");
        meth = locl.addMethod("path_filter_w_patterns");
        await test.path_filter_w_patterns();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filters_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_FILTER_LIB: running ltcl_filters_test->path_filter_deep");
        meth = locl.addMethod("path_filter_deep");
        await test.path_filter_deep();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_filters_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_FILTER_LIB: running ltcl_filters_test->and_filter");
        meth = locl.addMethod("and_filter");
        await test.and_filter();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_filters_test.class_teardown) await ltcl_filters_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON_MAPPING");
    {
        const {ltcl_test_mappers} = await import("./z2ui5_cl_ajson_mapping.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_mappers");
        if (ltcl_test_mappers.class_setup) await ltcl_test_mappers.class_setup();
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->from_json_to_json");
        meth = locl.addMethod("from_json_to_json");
        await test.from_json_to_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_abap");
        meth = locl.addMethod("to_abap");
        await test.to_abap();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_json");
        meth = locl.addMethod("to_json");
        await test.to_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_json_nested_struc");
        meth = locl.addMethod("to_json_nested_struc");
        await test.to_json_nested_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_json_nested_table");
        meth = locl.addMethod("to_json_nested_table");
        await test.to_json_nested_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_json_first_lower");
        meth = locl.addMethod("to_json_first_lower");
        await test.to_json_first_lower();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_snake");
        meth = locl.addMethod("to_snake");
        await test.to_snake();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_camel");
        meth = locl.addMethod("to_camel");
        await test.to_camel();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->to_camel_1st_upper");
        meth = locl.addMethod("to_camel_1st_upper");
        await test.to_camel_1st_upper();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->rename_by_attr");
        meth = locl.addMethod("rename_by_attr");
        await test.rename_by_attr();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->rename_by_path");
        meth = locl.addMethod("rename_by_path");
        await test.rename_by_path();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->rename_by_pattern");
        meth = locl.addMethod("rename_by_pattern");
        await test.rename_by_pattern();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->compound_mapper");
        meth = locl.addMethod("compound_mapper");
        await test.compound_mapper();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->test_to_upper");
        meth = locl.addMethod("test_to_upper");
        await test.test_to_upper();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_mappers()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_test_mappers->test_to_lower");
        meth = locl.addMethod("test_to_lower");
        await test.test_to_lower();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_mappers.class_teardown) await ltcl_test_mappers.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON_MAPPING");
    {
        const {ltcl_fields} = await import("./z2ui5_cl_ajson_mapping.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_fields");
        if (ltcl_fields.class_setup) await ltcl_fields.class_setup();
      {
        const test = await (new ltcl_fields()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_fields->to_json_without_path");
        meth = locl.addMethod("to_json_without_path");
        await test.to_json_without_path();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_fields()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_fields->to_json_with_path");
        meth = locl.addMethod("to_json_with_path");
        await test.to_json_with_path();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_fields()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_fields->to_abap");
        meth = locl.addMethod("to_abap");
        await test.to_abap();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_fields.class_teardown) await ltcl_fields.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON_MAPPING");
    {
        const {ltcl_to_lower} = await import("./z2ui5_cl_ajson_mapping.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_to_lower");
        if (ltcl_to_lower.class_setup) await ltcl_to_lower.class_setup();
      {
        const test = await (new ltcl_to_lower()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_to_lower->to_json");
        meth = locl.addMethod("to_json");
        await test.to_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_to_lower.class_teardown) await ltcl_to_lower.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON_MAPPING");
    {
        const {ltcl_to_upper} = await import("./z2ui5_cl_ajson_mapping.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_to_upper");
        if (ltcl_to_upper.class_setup) await ltcl_to_upper.class_setup();
      {
        const test = await (new ltcl_to_upper()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_MAPPING: running ltcl_to_upper->to_json");
        meth = locl.addMethod("to_json");
        await test.to_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_to_upper.class_teardown) await ltcl_to_upper.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON_UTILITIES");
    {
        const {ltcl_parser_test} = await import("./z2ui5_cl_ajson_utilities.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_parser_test");
        if (ltcl_parser_test.class_setup) await ltcl_parser_test.class_setup();
      if (ltcl_parser_test.class_teardown) await ltcl_parser_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_AJSON_UTILITIES");
    {
        const {ltcl_json_utils} = await import("./z2ui5_cl_ajson_utilities.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_json_utils");
        if (ltcl_json_utils.class_setup) await ltcl_json_utils.class_setup();
      {
        const test = await (new ltcl_json_utils()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_UTILITIES: running ltcl_json_utils->json_diff");
        meth = locl.addMethod("json_diff");
        await test.json_diff();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_utils()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_UTILITIES: running ltcl_json_utils->json_diff_types");
        meth = locl.addMethod("json_diff_types");
        await test.json_diff_types();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_utils()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_UTILITIES: running ltcl_json_utils->json_diff_arrays");
        meth = locl.addMethod("json_diff_arrays");
        await test.json_diff_arrays();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_utils()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_UTILITIES: running ltcl_json_utils->json_merge");
        meth = locl.addMethod("json_merge");
        await test.json_merge();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_utils()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_UTILITIES: running ltcl_json_utils->json_sort");
        meth = locl.addMethod("json_sort");
        await test.json_sort();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_utils()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_AJSON_UTILITIES: running ltcl_json_utils->is_equal");
        meth = locl.addMethod("is_equal");
        await test.is_equal();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_json_utils.class_teardown) await ltcl_json_utils.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_ACTION");
    {
        const {ltcl_test} = await import("./z2ui5_cl_core_action.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test");
        if (ltcl_test.class_setup) await ltcl_test.class_setup();
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_ACTION: running ltcl_test->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test.class_teardown) await ltcl_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_APP");
    {
        const {ltcl_test} = await import("./z2ui5_cl_core_app.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test");
        if (ltcl_test.class_setup) await ltcl_test.class_setup();
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_APP: running ltcl_test->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test.class_teardown) await ltcl_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_ATTRI_SRV");
    {
        const {ltcl_test_search_attri} = await import("./z2ui5_cl_core_attri_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_search_attri");
        if (ltcl_test_search_attri.class_setup) await ltcl_test_search_attri.class_setup();
      {
        const test = await (new ltcl_test_search_attri()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_ATTRI_SRV: running ltcl_test_search_attri->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_search_attri()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_ATTRI_SRV: running ltcl_test_search_attri->second_test");
        meth = locl.addMethod("second_test");
        await test.second_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_search_attri()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_ATTRI_SRV: running ltcl_test_search_attri->third_test");
        meth = locl.addMethod("third_test");
        await test.third_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_search_attri.class_teardown) await ltcl_test_search_attri.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_DISSOLVE_SRV");
    {
        const {ltcl_test_dissolve} = await import("./z2ui5_cl_core_dissolve_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_dissolve");
        if (ltcl_test_dissolve.class_setup) await ltcl_test_dissolve.class_setup();
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_init");
        meth = locl.addMethod("test_init");
        await test.test_init();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_struc");
        meth = locl.addMethod("test_struc");
        await test.test_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_dref");
        meth = locl.addMethod("test_dref");
        await test.test_dref();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_struc_dref");
        meth = locl.addMethod("test_struc_dref");
        await test.test_struc_dref();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_oref");
        meth = locl.addMethod("test_oref");
        await test.test_oref();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_ref");
        meth = locl.addMethod("test_ref");
        await test.test_ref();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_oref_dref_struc");
        meth = locl.addMethod("test_oref_dref_struc");
        await test.test_oref_dref_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_oref_dref");
        meth = locl.addMethod("test_oref_dref");
        await test.test_oref_dref();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_dissolve()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DISSOLVE_SRV: running ltcl_test_dissolve->test_dref_struc");
        meth = locl.addMethod("test_dref_struc");
        await test.test_dref_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_dissolve.class_teardown) await ltcl_test_dissolve.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_HTTP_POST");
    {
        const {ltcl_test_handler_post} = await import("./z2ui5_cl_core_http_post.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_handler_post");
        if (ltcl_test_handler_post.class_setup) await ltcl_test_handler_post.class_setup();
      {
        const test = await (new ltcl_test_handler_post()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_POST: running ltcl_test_handler_post->load_startup_app");
        meth = locl.addMethod("load_startup_app");
        await test.load_startup_app();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_handler_post.class_teardown) await ltcl_test_handler_post.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_JSON_SRV");
    {
        const {ltcl_test} = await import("./z2ui5_cl_core_json_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test");
        if (ltcl_test.class_setup) await ltcl_test.class_setup();
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_JSON_SRV: running ltcl_test->request_json_to_abap");
        meth = locl.addMethod("request_json_to_abap");
        await test.request_json_to_abap();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test.class_teardown) await ltcl_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_TEST_INTEGRATION_TEST");
    {
        const {ltcl_unit_test} = await import("./z2ui5_cl_test_integration_test.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test");
        if (ltcl_unit_test.class_setup) await ltcl_unit_test.class_setup();
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_TEST_INTEGRATION_TEST: running ltcl_unit_test->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test.class_teardown) await ltcl_unit_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_UI5");
    {
        const {ltcl_unit_test} = await import("./z2ui5_cl_ui5.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test");
        if (ltcl_unit_test.class_setup) await ltcl_unit_test.class_setup();
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UI5: running ltcl_unit_test->test_factory");
        meth = locl.addMethod("test_factory");
        await test.test_factory();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UI5: running ltcl_unit_test->test_factory_popup");
        meth = locl.addMethod("test_factory_popup");
        await test.test_factory_popup();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UI5: running ltcl_unit_test->test_add");
        meth = locl.addMethod("test_add");
        await test.test_add();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UI5: running ltcl_unit_test->test_add_p");
        meth = locl.addMethod("test_add_p");
        await test.test_add_p();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UI5: running ltcl_unit_test->test_ns");
        meth = locl.addMethod("test_ns");
        await test.test_ns();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UI5: running ltcl_unit_test->test_add_add");
        meth = locl.addMethod("test_add_add");
        await test.test_add_add();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test.class_teardown) await ltcl_unit_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_UTIL");
    {
        const {ltcl_test} = await import("./z2ui5_cl_util.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test");
        if (ltcl_test.class_setup) await ltcl_test.class_setup();
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL: running ltcl_test->test_db_handle");
        meth = locl.addMethod("test_db_handle");
        await test.test_db_handle();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL: running ltcl_test->test_db_handle_read_id");
        meth = locl.addMethod("test_db_handle_read_id");
        await test.test_db_handle_read_id();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test.class_teardown) await ltcl_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_UTIL_API");
    {
        const {ltcl_unit_test_abap_api} = await import("./z2ui5_cl_util_api.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test_abap_api");
        if (ltcl_unit_test_abap_api.class_setup) await ltcl_unit_test_abap_api.class_setup();
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_assign");
        meth = locl.addMethod("test_assign");
        await test.test_assign();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_eledescr_rel_name");
        meth = locl.addMethod("test_eledescr_rel_name");
        await test.test_eledescr_rel_name();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_classdescr");
        meth = locl.addMethod("test_classdescr");
        await test.test_classdescr();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_substring_after");
        meth = locl.addMethod("test_substring_after");
        await test.test_substring_after();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_substring_before");
        meth = locl.addMethod("test_substring_before");
        await test.test_substring_before();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_string_shift");
        meth = locl.addMethod("test_string_shift");
        await test.test_string_shift();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_string_replace");
        meth = locl.addMethod("test_string_replace");
        await test.test_string_replace();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_raise_error");
        meth = locl.addMethod("test_raise_error");
        await test.test_raise_error();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_xsdbool");
        meth = locl.addMethod("test_xsdbool");
        await test.test_xsdbool();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test_abap_api()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test_abap_api->test_xsdbool_nested");
        meth = locl.addMethod("test_xsdbool_nested");
        await test.test_xsdbool_nested();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test_abap_api.class_teardown) await ltcl_unit_test_abap_api.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_UTIL_STMPNCFCTN");
    {
        const {ltcl_test} = await import("./z2ui5_cl_util_stmpncfctn.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test");
        if (ltcl_test.class_setup) await ltcl_test.class_setup();
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_STMPNCFCTN: running ltcl_test->test_func_get_uuid_32");
        meth = locl.addMethod("test_func_get_uuid_32");
        await test.test_func_get_uuid_32();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_STMPNCFCTN: running ltcl_test->test_func_get_uuid_22");
        meth = locl.addMethod("test_func_get_uuid_22");
        await test.test_func_get_uuid_22();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_STMPNCFCTN: running ltcl_test->test_encoding");
        meth = locl.addMethod("test_encoding");
        await test.test_encoding();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_STMPNCFCTN: running ltcl_test->test_element_text");
        meth = locl.addMethod("test_element_text");
        await test.test_element_text();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_STMPNCFCTN: running ltcl_test->test_classes_impl_intf");
        meth = locl.addMethod("test_classes_impl_intf");
        await test.test_classes_impl_intf();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test.class_teardown) await ltcl_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CX_AJSON_ERROR");
    {
        const {ltcl_error} = await import("./z2ui5_cx_ajson_error.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_error");
        if (ltcl_error.class_setup) await ltcl_error.class_setup();
      {
        const test = await (new ltcl_error()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CX_AJSON_ERROR: running ltcl_error->raise");
        meth = locl.addMethod("raise");
        await test.raise();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_error()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CX_AJSON_ERROR: running ltcl_error->raise_w_location");
        meth = locl.addMethod("raise_w_location");
        await test.raise_w_location();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_error()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CX_AJSON_ERROR: running ltcl_error->raise_w_node");
        meth = locl.addMethod("raise_w_node");
        await test.raise_w_node();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_error()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CX_AJSON_ERROR: running ltcl_error->set_location");
        meth = locl.addMethod("set_location");
        await test.set_location();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_error.class_teardown) await ltcl_error.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_ATTRI_SRV");
    {
        const {ltcl_test_app2} = await import("./z2ui5_cl_core_attri_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_app2");
        if (ltcl_test_app2.class_setup) await ltcl_test_app2.class_setup();
      if (ltcl_test_app2.class_teardown) await ltcl_test_app2.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_BIND_SRV");
    {
        const {ltcl_test_app} = await import("./z2ui5_cl_core_bind_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_app");
        if (ltcl_test_app.class_setup) await ltcl_test_app.class_setup();
      if (ltcl_test_app.class_teardown) await ltcl_test_app.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_BIND_SRV");
    {
        const {ltcl_test_bind} = await import("./z2ui5_cl_core_bind_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_bind");
        if (ltcl_test_bind.class_setup) await ltcl_test_bind.class_setup();
      {
        const test = await (new ltcl_test_bind()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_bind->test_one_way");
        meth = locl.addMethod("test_one_way");
        await test.test_one_way();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_bind()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_bind->test_one_way_w_x_error");
        meth = locl.addMethod("test_one_way_w_x_error");
        await test.test_one_way_w_x_error();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_bind()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_bind->test_error_diff");
        meth = locl.addMethod("test_error_diff");
        await test.test_error_diff();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_bind()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_bind->test_two_way");
        meth = locl.addMethod("test_two_way");
        await test.test_two_way();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_bind()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_bind->test_local");
        meth = locl.addMethod("test_local");
        await test.test_local();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_bind.class_teardown) await ltcl_test_bind.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_BIND_SRV");
    {
        const {ltcl_test_main_structure} = await import("./z2ui5_cl_core_bind_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_main_structure");
        if (ltcl_test_main_structure.class_setup) await ltcl_test_main_structure.class_setup();
      {
        const test = await (new ltcl_test_main_structure()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_main_structure->test_one_way_lev1");
        meth = locl.addMethod("test_one_way_lev1");
        await test.test_one_way_lev1();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_main_structure()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_main_structure->test_one_way_lev2");
        meth = locl.addMethod("test_one_way_lev2");
        await test.test_one_way_lev2();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_main_structure()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_main_structure->test_one_way_lev3");
        meth = locl.addMethod("test_one_way_lev3");
        await test.test_one_way_lev3();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_main_structure()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_main_structure->test_one_way_lev4_long_name");
        meth = locl.addMethod("test_one_way_lev4_long_name");
        await test.test_one_way_lev4_long_name();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_main_structure.class_teardown) await ltcl_test_main_structure.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_BIND_SRV");
    {
        const {ltcl_test_main_object} = await import("./z2ui5_cl_core_bind_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_main_object");
        if (ltcl_test_main_object.class_setup) await ltcl_test_main_object.class_setup();
      {
        const test = await (new ltcl_test_main_object()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_main_object->test_one_way_value");
        meth = locl.addMethod("test_one_way_value");
        await test.test_one_way_value();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_main_object()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_BIND_SRV: running ltcl_test_main_object->test_one_way_struc");
        meth = locl.addMethod("test_one_way_struc");
        await test.test_one_way_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_main_object.class_teardown) await ltcl_test_main_object.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_HTTP_GET");
    {
        const {ltcl_test_http_get} = await import("./z2ui5_cl_core_http_get.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_http_get");
        if (ltcl_test_http_get.class_setup) await ltcl_test_http_get.class_setup();
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->file_not_initial");
        meth = locl.addMethod("file_not_initial");
        await test.file_not_initial();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->launchpad_compatibility");
        meth = locl.addMethod("launchpad_compatibility");
        await test.launchpad_compatibility();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->path_setup");
        meth = locl.addMethod("path_setup");
        await test.path_setup();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->js_no_debugger");
        meth = locl.addMethod("js_no_debugger");
        await test.js_no_debugger();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->js_no_sap_ui_get_core");
        meth = locl.addMethod("js_no_sap_ui_get_core");
        await test.js_no_sap_ui_get_core();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->js_no_window");
        meth = locl.addMethod("js_no_window");
        await test.js_no_window();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->js_no_document");
        meth = locl.addMethod("js_no_document");
        await test.js_no_document();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->bootstrap_with_open_ui5");
        meth = locl.addMethod("bootstrap_with_open_ui5");
        await test.bootstrap_with_open_ui5();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test_http_get()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_HTTP_GET: running ltcl_test_http_get->js_no_jquery");
        meth = locl.addMethod("js_no_jquery");
        await test.js_no_jquery();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_http_get.class_teardown) await ltcl_test_http_get.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_HTTP_HANDLER");
    {
        const {ltcl_unit_test} = await import("./z2ui5_cl_http_handler.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test");
        if (ltcl_unit_test.class_setup) await ltcl_unit_test.class_setup();
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_HTTP_HANDLER: running ltcl_unit_test->test_get");
        meth = locl.addMethod("test_get");
        await test.test_get();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_HTTP_HANDLER: running ltcl_unit_test->test_post");
        meth = locl.addMethod("test_post");
        await test.test_post();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test.class_teardown) await ltcl_unit_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_UTIL_API");
    {
        const {ltcl_unit_test} = await import("./z2ui5_cl_util_api.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test");
        if (ltcl_unit_test.class_setup) await ltcl_unit_test.class_setup();
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_create");
        meth = locl.addMethod("test_create");
        await test.test_create();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_boolean_abap_2_json");
        meth = locl.addMethod("test_boolean_abap_2_json");
        await test.test_boolean_abap_2_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_boolean_check");
        meth = locl.addMethod("test_boolean_check");
        await test.test_boolean_check();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_c_trim");
        meth = locl.addMethod("test_c_trim");
        await test.test_c_trim();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_c_trim_lower");
        meth = locl.addMethod("test_c_trim_lower");
        await test.test_c_trim_lower();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_c_trim_upper");
        meth = locl.addMethod("test_c_trim_upper");
        await test.test_c_trim_upper();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_c_trim_horizontal_tab");
        meth = locl.addMethod("test_c_trim_horizontal_tab");
        await test.test_c_trim_horizontal_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_time_get_timestampl");
        meth = locl.addMethod("test_time_get_timestampl");
        await test.test_time_get_timestampl();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_time_substract_seconds");
        meth = locl.addMethod("test_time_substract_seconds");
        await test.test_time_substract_seconds();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_func_get_user_tech");
        meth = locl.addMethod("test_func_get_user_tech");
        await test.test_func_get_user_tech();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_rtti_get_classname_by_ref");
        meth = locl.addMethod("test_rtti_get_classname_by_ref");
        await test.test_rtti_get_classname_by_ref();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_rtti_get_type_name");
        meth = locl.addMethod("test_rtti_get_type_name");
        await test.test_rtti_get_type_name();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_rtti_get_type_kind");
        meth = locl.addMethod("test_rtti_get_type_kind");
        await test.test_rtti_get_type_kind();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_rtti_check_type_kind");
        meth = locl.addMethod("test_rtti_check_type_kind");
        await test.test_rtti_check_type_kind();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_rtti_get_t_attri_by_obj");
        meth = locl.addMethod("test_rtti_get_t_attri_by_obj");
        await test.test_rtti_get_t_attri_by_obj();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_rtti_get_t_comp_by_struc");
        meth = locl.addMethod("test_rtti_get_t_comp_by_struc");
        await test.test_rtti_get_t_comp_by_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_trans_json_any_2__w_struc");
        meth = locl.addMethod("test_trans_json_any_2__w_struc");
        await test.test_trans_json_any_2__w_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_trans_xml_any_2__w_obj");
        meth = locl.addMethod("test_trans_xml_any_2__w_obj");
        await test.test_trans_xml_any_2__w_obj();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_trans_xml_any_2__w_data");
        meth = locl.addMethod("test_trans_xml_any_2__w_data");
        await test.test_trans_xml_any_2__w_data();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_trans_xml_2_any__w_obj");
        meth = locl.addMethod("test_trans_xml_2_any__w_obj");
        await test.test_trans_xml_2_any__w_obj();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_trans_xml_2_any__w_data");
        meth = locl.addMethod("test_trans_xml_2_any__w_data");
        await test.test_trans_xml_2_any__w_data();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_url_param_create_url");
        meth = locl.addMethod("test_url_param_create_url");
        await test.test_url_param_create_url();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_url_param_get");
        meth = locl.addMethod("test_url_param_get");
        await test.test_url_param_get();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_url_param_get_tab");
        meth = locl.addMethod("test_url_param_get_tab");
        await test.test_url_param_get_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_url_param_set");
        meth = locl.addMethod("test_url_param_set");
        await test.test_url_param_set();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_x_check_raise");
        meth = locl.addMethod("test_x_check_raise");
        await test.test_x_check_raise();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_x_check_raise_not");
        meth = locl.addMethod("test_x_check_raise_not");
        await test.test_x_check_raise_not();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_x_raise");
        meth = locl.addMethod("test_x_raise");
        await test.test_x_raise();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_check_unassign_inital");
        meth = locl.addMethod("test_check_unassign_inital");
        await test.test_check_unassign_inital();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->conv_copy_ref_data");
        meth = locl.addMethod("conv_copy_ref_data");
        await test.conv_copy_ref_data();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->rtti_check_ref_data");
        meth = locl.addMethod("rtti_check_ref_data");
        await test.rtti_check_ref_data();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_UTIL_API: running ltcl_unit_test->test_check_bound_a_not_inital");
        meth = locl.addMethod("test_check_bound_a_not_inital");
        await test.test_check_bound_a_not_inital();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test.class_teardown) await ltcl_unit_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_APP");
    {
        const {ltcl_test_db} = await import("./z2ui5_cl_core_app.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_db");
        if (ltcl_test_db.class_setup) await ltcl_test_db.class_setup();
      {
        const test = await (new ltcl_test_db()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_APP: running ltcl_test_db->test_db_save");
        meth = locl.addMethod("test_db_save");
        await test.test_db_save();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_db.class_teardown) await ltcl_test_db.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_CLIENT");
    {
        const {ltcl_test_client} = await import("./z2ui5_cl_core_client.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test_client");
        if (ltcl_test_client.class_setup) await ltcl_test_client.class_setup();
      {
        const test = await (new ltcl_test_client()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_CLIENT: running ltcl_test_client->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test_client.class_teardown) await ltcl_test_client.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_DRAFT_SRV");
    {
        const {ltcl_test} = await import("./z2ui5_cl_core_draft_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test");
        if (ltcl_test.class_setup) await ltcl_test.class_setup();
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_DRAFT_SRV: running ltcl_test->test_create");
        meth = locl.addMethod("test_create");
        await test.test_create();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test.class_teardown) await ltcl_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_EVENT_SRV");
    {
        const {ltcl_test} = await import("./z2ui5_cl_core_event_srv.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_test");
        if (ltcl_test.class_setup) await ltcl_test.class_setup();
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_EVENT_SRV: running ltcl_test->event");
        meth = locl.addMethod("event");
        await test.event();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_EVENT_SRV: running ltcl_test->event_backend");
        meth = locl.addMethod("event_backend");
        await test.event_backend();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_test.class_teardown) await ltcl_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_APP_ERROR");
    {
        const {ltcl_app_error_test} = await import("./z2ui5_cl_core_app_error.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_app_error_test");
        if (ltcl_app_error_test.class_setup) await ltcl_app_error_test.class_setup();
      {
        const test = await (new ltcl_app_error_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_APP_ERROR: running ltcl_app_error_test->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_app_error_test.class_teardown) await ltcl_app_error_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_APP_INFO");
    {
        const {ltcl_app_startup_test} = await import("./z2ui5_cl_core_app_info.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_app_startup_test");
        if (ltcl_app_startup_test.class_setup) await ltcl_app_startup_test.class_setup();
      {
        const test = await (new ltcl_app_startup_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_APP_INFO: running ltcl_app_startup_test->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_app_startup_test.class_teardown) await ltcl_app_startup_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_APP_SEARCH");
    {
        const {ltcl_unit_test} = await import("./z2ui5_cl_core_app_search.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test");
        if (ltcl_unit_test.class_setup) await ltcl_unit_test.class_setup();
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_APP_SEARCH: running ltcl_unit_test->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test.class_teardown) await ltcl_unit_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_CORE_APP_STARTUP");
    {
        const {ltcl_app_startup_test} = await import("./z2ui5_cl_core_app_startup.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_app_startup_test");
        if (ltcl_app_startup_test.class_setup) await ltcl_app_startup_test.class_setup();
      {
        const test = await (new ltcl_app_startup_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_CORE_APP_STARTUP: running ltcl_app_startup_test->first_test");
        meth = locl.addMethod("first_test");
        await test.first_test();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_app_startup_test.class_teardown) await ltcl_app_startup_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CX_UTIL_ERROR");
    {
        const {ltcl_unit_test} = await import("./z2ui5_cx_util_error.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test");
        if (ltcl_unit_test.class_setup) await ltcl_unit_test.class_setup();
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CX_UTIL_ERROR: running ltcl_unit_test->test_raise");
        meth = locl.addMethod("test_raise");
        await test.test_raise();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test.class_teardown) await ltcl_unit_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("Z2UI5_CL_XML_VIEW");
    {
        const {ltcl_unit_test} = await import("./z2ui5_cl_xml_view.clas.testclasses.mjs");
        locl = clas.addTestClass("ltcl_unit_test");
        if (ltcl_unit_test.class_setup) await ltcl_unit_test.class_setup();
      {
        const test = await (new ltcl_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("Z2UI5_CL_XML_VIEW: running ltcl_unit_test->test_create");
        meth = locl.addMethod("test_create");
        await test.test_create();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_unit_test.class_teardown) await ltcl_unit_test.class_teardown();
    }
// -------------------END-------------------
    fs.writeFileSync(__dirname + path.sep + "_output.xml", unit.xUnitXML());
  } catch (e) {
    if (meth) {
      meth.fail();
    }
    fs.writeFileSync(__dirname + path.sep + "_output.xml", unit.xUnitXML());
    throw e;
  }
}

run().then(() => {
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
});