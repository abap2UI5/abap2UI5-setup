const {cx_root} = await import("./cx_root.clas.mjs");
// cl_gui_frontend_services.clas.abap
class cl_gui_frontend_services {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_GUI_FRONTEND_SERVICES';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"FILETYPE_ALL": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "FILETYPE_XML": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "FILETYPE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ACTION_CANCEL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ACTION_OK": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "PLATFORM_NT351": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "PLATFORM_NT40": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "PLATFORM_NT50": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "PLATFORM_WINDOWS95": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "PLATFORM_WINDOWS98": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "PLATFORM_WINDOWSXP": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"GUI_DOWNLOAD": {"visibility": "U", "parameters": {"BIN_FILESIZE": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "FILENAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FILETYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "WRITE_LF": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "WRITE_FIELD_SEPARATOR": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"});}, "is_optional": " "}, "CONFIRM_OVERWRITE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "DATA_TAB": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "FILE_EXIST": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "FILE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DIRECTORY_LIST_FILES": {"visibility": "U", "parameters": {"DIRECTORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FILES_ONLY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "FILE_TABLE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "COUNT": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "GUI_UPLOAD": {"visibility": "U", "parameters": {"FILENAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FILETYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "CODEPAGE": {"type": () => {return new abap.types.Character(20, {"qualifiedName":"abap_encoding"});}, "is_optional": " "}, "READ_BY_LINE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "FILELENGTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "DATA_TAB": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "FILE_OPEN_DIALOG": {"visibility": "U", "parameters": {"WINDOW_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DEFAULT_FILENAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DEFAULT_EXTENSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "MULTISELECTION": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "FILE_FILTER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "INITIAL_DIRECTORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FILE_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"filename": new abap.types.Character(1024, {})}, "FILE_TABLE", "FILE_TABLE", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "FILETABLE");}, "is_optional": " "}, "RC": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "USER_ACTION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "GET_PLATFORM": {"visibility": "U", "parameters": {"PLATFORM": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "FILE_SAVE_DIALOG": {"visibility": "U", "parameters": {"WINDOW_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DEFAULT_EXTENSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DEFAULT_FILE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FILE_FILTER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "INITIAL_DIRECTORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PROMPT_ON_OVERWRITE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "FILENAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FULLPATH": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "USER_ACTION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "DIRECTORY_BROWSE": {"visibility": "U", "parameters": {"WINDOW_TITLE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "INITIAL_FOLDER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "SELECTED_FOLDER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "EXECUTE": {"visibility": "U", "parameters": {"DOCUMENT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "APPLICATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PARAMETER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DEFAULT_DIRECTORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "MAXIMIZED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "MINIMIZED": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "SYNCHRONOUS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "OPERATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_FILE_SEPARATOR": {"visibility": "U", "parameters": {"FILE_SEPARATOR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DIRECTORY_EXIST": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "DIRECTORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DIRECTORY_CREATE": {"visibility": "U", "parameters": {"DIRECTORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "RC": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "CLIPBOARD_EXPORT": {"visibility": "U", "parameters": {"NO_AUTH_CHECK": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}, "RC": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "GET_SYSTEM_DIRECTORY": {"visibility": "U", "parameters": {"SYSTEM_DIRECTORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_GUI_VERSION": {"visibility": "U", "parameters": {"VERSION_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"filename": new abap.types.Character(1024, {})}, "FILE_TABLE", "FILE_TABLE", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "FILETABLE");}, "is_optional": " "}, "RC": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "CLIPBOARD_IMPORT": {"visibility": "U", "parameters": {"DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});}, "is_optional": " "}, "LENGTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "FILE_DELETE": {"visibility": "U", "parameters": {"FILENAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "RC": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "GET_SAPGUI_WORKDIR": {"visibility": "U", "parameters": {"SAPWORKDIR": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.filetype_all = cl_gui_frontend_services.filetype_all;
    this.filetype_xml = cl_gui_frontend_services.filetype_xml;
    this.filetype_text = cl_gui_frontend_services.filetype_text;
    this.action_cancel = cl_gui_frontend_services.action_cancel;
    this.action_ok = cl_gui_frontend_services.action_ok;
    this.platform_nt351 = cl_gui_frontend_services.platform_nt351;
    this.platform_nt40 = cl_gui_frontend_services.platform_nt40;
    this.platform_nt50 = cl_gui_frontend_services.platform_nt50;
    this.platform_windows95 = cl_gui_frontend_services.platform_windows95;
    this.platform_windows98 = cl_gui_frontend_services.platform_windows98;
    this.platform_windowsxp = cl_gui_frontend_services.platform_windowsxp;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async directory_exist(INPUT) {
    return cl_gui_frontend_services.directory_exist(INPUT);
  }
  static async directory_exist(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let directory = INPUT?.directory;
    if (directory?.getQualifiedName === undefined || directory.getQualifiedName() !== "STRING") { directory = undefined; }
    if (directory === undefined) { directory = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.directory); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(29).set('directory_exist not supported')));
    return result;
  }
  async get_sapgui_workdir(INPUT) {
    return cl_gui_frontend_services.get_sapgui_workdir(INPUT);
  }
  static async get_sapgui_workdir(INPUT) {
    let sapworkdir = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.sapworkdir) {sapworkdir = INPUT.sapworkdir;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(32).set('get_sapgui_workdir not supported')));
  }
  async file_exist(INPUT) {
    return cl_gui_frontend_services.file_exist(INPUT);
  }
  static async file_exist(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let file = INPUT?.file;
    if (file?.getQualifiedName === undefined || file.getQualifiedName() !== "STRING") { file = undefined; }
    if (file === undefined) { file = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.file); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(24).set('file_exist not supported')));
    return result;
  }
  async file_delete(INPUT) {
    return cl_gui_frontend_services.file_delete(INPUT);
  }
  static async file_delete(INPUT) {
    let filename = INPUT?.filename;
    if (filename?.getQualifiedName === undefined || filename.getQualifiedName() !== "STRING") { filename = undefined; }
    if (filename === undefined) { filename = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.filename); }
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(25).set('file_delete not supported')));
  }
  async clipboard_import(INPUT) {
    return cl_gui_frontend_services.clipboard_import(INPUT);
  }
  static async clipboard_import(INPUT) {
    let data = INPUT?.data || abap.types.TableFactory.construct(new abap.types.Character(4), {"withHeader":false,"keyType":"DEFAULT"});
    let length = INPUT?.length || new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(30).set('clipboard_import not supported')));
  }
  async directory_list_files(INPUT) {
    return cl_gui_frontend_services.directory_list_files(INPUT);
  }
  static async directory_list_files(INPUT) {
    let directory = INPUT?.directory;
    if (directory?.getQualifiedName === undefined || directory.getQualifiedName() !== "STRING") { directory = undefined; }
    if (directory === undefined) { directory = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.directory); }
    let files_only = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.files_only) {files_only.set(INPUT.files_only);}
    let file_table = new abap.types.Character(4);
    if (INPUT && INPUT.file_table) {file_table = INPUT.file_table;}
    let count = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.count) {count = INPUT.count;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(34).set('directory_list_files not supported')));
  }
  async directory_create(INPUT) {
    return cl_gui_frontend_services.directory_create(INPUT);
  }
  static async directory_create(INPUT) {
    let directory = INPUT?.directory;
    if (directory?.getQualifiedName === undefined || directory.getQualifiedName() !== "STRING") { directory = undefined; }
    if (directory === undefined) { directory = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.directory); }
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(30).set('directory_create not supported')));
  }
  async gui_download(INPUT) {
    return cl_gui_frontend_services.gui_download(INPUT);
  }
  static async gui_download(INPUT) {
    let bin_filesize = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.bin_filesize) {bin_filesize.set(INPUT.bin_filesize);}
    let filename = INPUT?.filename;
    if (filename?.getQualifiedName === undefined || filename.getQualifiedName() !== "STRING") { filename = undefined; }
    if (filename === undefined) { filename = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.filename); }
    let filetype = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filetype) {filetype.set(INPUT.filetype);}
    let write_lf = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.write_lf) {write_lf.set(INPUT.write_lf);}
    let write_field_separator = new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"});
    if (INPUT && INPUT.write_field_separator) {write_field_separator.set(INPUT.write_field_separator);}
    let confirm_overwrite = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.confirm_overwrite) {confirm_overwrite.set(INPUT.confirm_overwrite);}
    let data_tab = new abap.types.Character(4);
    if (INPUT && INPUT.data_tab) {data_tab = INPUT.data_tab;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(26).set('gui_download not supported')));
  }
  async get_file_separator(INPUT) {
    return cl_gui_frontend_services.get_file_separator(INPUT);
  }
  static async get_file_separator(INPUT) {
    let file_separator = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.file_separator) {file_separator = INPUT.file_separator;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(32).set('get_file_separator not supported')));
  }
  async execute(INPUT) {
    return cl_gui_frontend_services.execute(INPUT);
  }
  static async execute(INPUT) {
    let document = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.document) {document.set(INPUT.document);}
    let application = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.application) {application.set(INPUT.application);}
    let parameter = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.parameter) {parameter.set(INPUT.parameter);}
    let default_directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_directory) {default_directory.set(INPUT.default_directory);}
    let maximized = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.maximized) {maximized.set(INPUT.maximized);}
    let minimized = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.minimized) {minimized.set(INPUT.minimized);}
    let synchronous = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.synchronous) {synchronous.set(INPUT.synchronous);}
    let operation = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.operation) {operation.set(INPUT.operation);}
    if (INPUT === undefined || INPUT.operation === undefined) {operation = new abap.types.Character(4).set('OPEN');}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(21).set('execute not supported')));
  }
  async directory_browse(INPUT) {
    return cl_gui_frontend_services.directory_browse(INPUT);
  }
  static async directory_browse(INPUT) {
    let window_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}
    let initial_folder = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.initial_folder) {initial_folder.set(INPUT.initial_folder);}
    let selected_folder = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.selected_folder) {selected_folder = INPUT.selected_folder;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(30).set('directory_browse not supported')));
  }
  async gui_upload(INPUT) {
    return cl_gui_frontend_services.gui_upload(INPUT);
  }
  static async gui_upload(INPUT) {
    let filename = INPUT?.filename;
    if (filename?.getQualifiedName === undefined || filename.getQualifiedName() !== "STRING") { filename = undefined; }
    if (filename === undefined) { filename = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.filename); }
    let filetype = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filetype) {filetype.set(INPUT.filetype);}
    let codepage = new abap.types.Character(20, {"qualifiedName":"abap_encoding"});
    if (INPUT && INPUT.codepage) {codepage.set(INPUT.codepage);}
    if (INPUT === undefined || INPUT.codepage === undefined) {codepage = abap.builtin.space;}
    let read_by_line = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.read_by_line) {read_by_line.set(INPUT.read_by_line);}
    let filelength = INPUT?.filelength || new abap.types.Integer({qualifiedName: "I"});
    let data_tab = new abap.types.Character(4);
    if (INPUT && INPUT.data_tab) {data_tab = INPUT.data_tab;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(24).set('gui_upload not supported')));
  }
  async file_open_dialog(INPUT) {
    return cl_gui_frontend_services.file_open_dialog(INPUT);
  }
  static async file_open_dialog(INPUT) {
    let window_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}
    let default_filename = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_filename) {default_filename.set(INPUT.default_filename);}
    let default_extension = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_extension) {default_extension.set(INPUT.default_extension);}
    let multiselection = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.multiselection) {multiselection.set(INPUT.multiselection);}
    let file_filter = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.file_filter) {file_filter.set(INPUT.file_filter);}
    let initial_directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.initial_directory) {initial_directory.set(INPUT.initial_directory);}
    let file_table = abap.types.TableFactory.construct(new abap.types.Structure({"filename": new abap.types.Character(1024, {})}, "FILE_TABLE", "FILE_TABLE", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "FILETABLE");
    if (INPUT && INPUT.file_table) {file_table = INPUT.file_table;}
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    let user_action = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.user_action) {user_action = INPUT.user_action;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(30).set('file_open_dialog not supported')));
  }
  async file_save_dialog(INPUT) {
    return cl_gui_frontend_services.file_save_dialog(INPUT);
  }
  static async file_save_dialog(INPUT) {
    let window_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}
    let default_extension = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_extension) {default_extension.set(INPUT.default_extension);}
    let default_file_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_file_name) {default_file_name.set(INPUT.default_file_name);}
    let file_filter = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.file_filter) {file_filter.set(INPUT.file_filter);}
    let initial_directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.initial_directory) {initial_directory.set(INPUT.initial_directory);}
    let prompt_on_overwrite = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.prompt_on_overwrite) {prompt_on_overwrite.set(INPUT.prompt_on_overwrite);}
    let filename = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filename) {filename = INPUT.filename;}
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path = INPUT.path;}
    let fullpath = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.fullpath) {fullpath = INPUT.fullpath;}
    let user_action = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.user_action) {user_action = INPUT.user_action;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(30).set('file_save_dialog not supported')));
  }
  async get_platform() {
    return cl_gui_frontend_services.get_platform();
  }
  static async get_platform() {
    let platform = new abap.types.Integer({qualifiedName: "I"});
    platform.set(cl_gui_frontend_services.platform_windowsxp);
    return platform;
  }
  async clipboard_export(INPUT) {
    return cl_gui_frontend_services.clipboard_export(INPUT);
  }
  static async clipboard_export(INPUT) {
    let no_auth_check = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.no_auth_check) {no_auth_check.set(INPUT.no_auth_check);}
    let data = INPUT?.data || new abap.types.Character(4);
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(30).set('clipboard_export not supported')));
  }
  async get_system_directory(INPUT) {
    return cl_gui_frontend_services.get_system_directory(INPUT);
  }
  static async get_system_directory(INPUT) {
    let system_directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.system_directory) {system_directory = INPUT.system_directory;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(34).set('get_system_directory not supported')));
  }
  async get_gui_version(INPUT) {
    return cl_gui_frontend_services.get_gui_version(INPUT);
  }
  static async get_gui_version(INPUT) {
    let version_table = abap.types.TableFactory.construct(new abap.types.Structure({"filename": new abap.types.Character(1024, {})}, "FILE_TABLE", "FILE_TABLE", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "FILETABLE");
    if (INPUT && INPUT.version_table) {version_table = INPUT.version_table;}
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(29).set('get_gui_verison not supported')));
  }
}
abap.Classes['CL_GUI_FRONTEND_SERVICES'] = cl_gui_frontend_services;
cl_gui_frontend_services.filetype_all = new abap.types.String({qualifiedName: "STRING"});
cl_gui_frontend_services.filetype_all.set('abc');
cl_gui_frontend_services.filetype_xml = new abap.types.String({qualifiedName: "STRING"});
cl_gui_frontend_services.filetype_xml.set('xml');
cl_gui_frontend_services.filetype_text = new abap.types.String({qualifiedName: "STRING"});
cl_gui_frontend_services.filetype_text.set('txt');
cl_gui_frontend_services.action_cancel = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.action_cancel.set(1);
cl_gui_frontend_services.action_ok = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.action_ok.set(1);
cl_gui_frontend_services.platform_nt351 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_nt351.set(1);
cl_gui_frontend_services.platform_nt40 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_nt40.set(2);
cl_gui_frontend_services.platform_nt50 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_nt50.set(3);
cl_gui_frontend_services.platform_windows95 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_windows95.set(4);
cl_gui_frontend_services.platform_windows98 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_windows98.set(5);
cl_gui_frontend_services.platform_windowsxp = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_windowsxp.set(6);
export {cl_gui_frontend_services};
//# sourceMappingURL=cl_gui_frontend_services.clas.mjs.map