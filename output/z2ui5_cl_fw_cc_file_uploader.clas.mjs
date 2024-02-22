const {cx_root} = await import("./cx_root.clas.mjs");
// z2ui5_cl_fw_cc_file_uploader.clas.abap
class z2ui5_cl_fw_cc_file_uploader {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'Z2UI5_CL_FW_CC_FILE_UPLOADER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_JS": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_js() {
    return z2ui5_cl_fw_cc_file_uploader.get_js();
  }
  static async get_js() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set(abap.operators.concat(new abap.types.String().set(` sap.ui.define("z2ui5/FileUploader",[`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "sap/ui/core/Control",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "sap/m/Button",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "sap/ui/unified/FileUploader"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`        ], function (Control, Button, FileUploader) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            "use strict";`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            return Control.extend("z2ui5.FileUploader", {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                metadata: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    properties: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        value: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        path: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        tooltip: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        fileType: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        placeholder: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        buttonText: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        style: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: ""`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        uploadButtonText: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: "Upload"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        enabled: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "boolean",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: true`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        icon: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "string",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: "sap-icon://browse-folder"`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        iconOnly: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "boolean",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: false`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        buttonOnly: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "boolean",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: false`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        multiple: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "boolean",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: false`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        visible: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "boolean",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: true`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        checkDirectUpload: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            type: "boolean",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            defaultValue: false`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    aggregations: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    events: {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        "upload": {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            allowPreventDefault: true,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            parameters: {}`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    renderer: null`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                },`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                renderer: function (oRm, oControl) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    if (!oControl.getProperty("checkDirectUpload")) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                     oControl.oUploadButton = new Button({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        text: oControl.getProperty("uploadButtonText"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        enabled: oControl.getProperty("path") !== "",`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        press: function (oEvent) { `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            this.setProperty("path", this.oFileUploader.getProperty("value"));`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            var file = sap.z2ui5.oUpload.oFileUpload.files[0];`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            var reader = new FileReader();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            reader.onload = function (evt) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                var vContent = evt.currentTarget.result;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                this.setProperty("value", vContent);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                this.fireUpload();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                //this.getView().byId('picture' ).getDomRef().src = vContent;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            }.bind(this)`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            reader.readAsDataURL(file);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        }.bind(oControl)`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                     });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    oControl.oFileUploader = new FileUploader({`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        icon: oControl.getProperty("icon"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        iconOnly: oControl.getProperty("iconOnly"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        buttonOnly: oControl.getProperty("buttonOnly"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        buttonText: oControl.getProperty("buttonText"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        style: oControl.getProperty("style"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        fileType: oControl.getProperty("fileType"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        visible: oControl.getProperty("visible"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        uploadOnChange: true,`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        value: oControl.getProperty("path"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        placeholder: oControl.getProperty("placeholder"),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        change: function (oEvent) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                           if (oControl.getProperty("checkDirectUpload")) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             return; `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                           }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            var value = oEvent.getSource().getProperty("value");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            this.setProperty("path", value);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            if (value) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                this.oUploadButton.setEnabled();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            } else {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                this.oUploadButton.setEnabled(false);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            this.oUploadButton.rerender();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            sap.z2ui5.oUpload = oEvent.oSource;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        }.bind(oControl),`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        uploadComplete: function (oEvent) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                           if (!oControl.getProperty("checkDirectUpload")) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                             return; `),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                           }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            var value = oEvent.getSource().getProperty("value");`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            this.setProperty("path", value);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            var file = oEvent.oSource.oFileUpload.files[0];`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            var reader = new FileReader();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            reader.onload = function (evt) {`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                var vContent = evt.currentTarget.result;`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                this.setProperty("value", vContent);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                                this.fireUpload();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            }.bind(this)`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                            reader.readAsDataURL(file);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                        }.bind(oControl)`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    });`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    var hbox = new sap.m.HBox();`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    hbox.addItem(oControl.oFileUploader);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    hbox.addItem(oControl.oUploadButton);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                    oRm.renderControl(hbox);`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`                }`),abap.operators.concat(new abap.types.String().set(`\n`),abap.operators.concat(new abap.types.String().set(`            });`),abap.operators.concat(new abap.types.String().set(`\n`),new abap.types.String().set(`        });`)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
    return result;
  }
}
abap.Classes['Z2UI5_CL_FW_CC_FILE_UPLOADER'] = z2ui5_cl_fw_cc_file_uploader;
export {z2ui5_cl_fw_cc_file_uploader};
//# sourceMappingURL=z2ui5_cl_fw_cc_file_uploader.clas.mjs.map