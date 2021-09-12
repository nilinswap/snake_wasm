(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/snake_wasm.js":
/*!****************************!*\
  !*** ../pkg/snake_wasm.js ***!
  \****************************/
/*! exports provided: __wbg_alert_a76e16857ab70f7e, Direction, greet, __widl_f_log_1_, __wbindgen_object_drop_ref, __wbindgen_string_new, Position, Board, Update, PositionUpdate, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_a76e16857ab70f7e\", function() { return __wbg_alert_a76e16857ab70f7e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Direction\", function() { return Direction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_log_1_\", function() { return __widl_f_log_1_; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Board\", function() { return Board; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Update\", function() { return Update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PositionUpdate\", function() { return PositionUpdate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake_wasm_bg */ \"../pkg/snake_wasm_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_alert_a76e16857ab70f7e(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    alert(varg0);\n}\n/**\n*/\nconst Direction = Object.freeze({ Up:0,Right:1,Down:2,Left:3, });\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n/**\n* @param {string} arg0\n* @returns {void}\n*/\nfunction greet(arg0) {\n    const ptr0 = passStringToWasm(arg0);\n    const len0 = WASM_VECTOR_LEN;\n    return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"greet\"](ptr0, len0);\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nfunction __widl_f_log_1_(arg0) {\n    console.log(getObject(arg0));\n}\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction freePosition(ptr) {\n\n    _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_position_free\"](ptr);\n}\n/**\n*/\nclass Position {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Position.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freePosition(ptr);\n    }\n\n    /**\n    * @returns {number}\n    */\n    get x() {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_position_x\"](this.ptr);\n    }\n    set x(arg0) {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_position_x\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_position_y\"](this.ptr);\n    }\n    set y(arg0) {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_position_y\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @returns {Position}\n    */\n    static new(arg0, arg1) {\n        return Position.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"position_new\"](arg0, arg1));\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n    set_x(arg0) {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"position_set_x\"](this.ptr, arg0);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n    set_y(arg0) {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"position_set_y\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    x() {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"position_x\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    y() {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"position_y\"](this.ptr);\n    }\n}\n\nfunction freeBoard(ptr) {\n\n    _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_board_free\"](ptr);\n}\n/**\n*/\nclass Board {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Board.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeBoard(ptr);\n    }\n\n    /**\n    * @param {number} arg0\n    * @param {number} arg1\n    * @returns {Board}\n    */\n    static new(arg0, arg1) {\n        return Board.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_new\"](arg0, arg1));\n    }\n    /**\n    * @returns {boolean}\n    */\n    tick() {\n        return (_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_tick\"](this.ptr)) !== 0;\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_width\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    length() {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_length\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    score() {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_score\"](this.ptr);\n    }\n    /**\n    * @param {number} arg0\n    * @returns {void}\n    */\n    snake_change_dir(arg0) {\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_snake_change_dir\"](this.ptr, arg0);\n    }\n    /**\n    * @param {Position} arg0\n    * @returns {void}\n    */\n    set_candy_pos(arg0) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_set_candy_pos\"](this.ptr, ptr0);\n    }\n    /**\n    * @returns {Update}\n    */\n    update_body() {\n        return Update.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"board_update_body\"](this.ptr));\n    }\n}\n\nfunction freeUpdate(ptr) {\n\n    _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_update_free\"](ptr);\n}\n/**\n*/\nclass Update {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Update.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeUpdate(ptr);\n    }\n\n    /**\n    * @param {Position} arg0\n    * @param {Position} arg1\n    * @param {Position} arg2\n    * @returns {Update}\n    */\n    static new(arg0, arg1, arg2) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        const ptr1 = arg1.ptr;\n        arg1.ptr = 0;\n        const ptr2 = arg2.ptr;\n        arg2.ptr = 0;\n        return Update.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"update_new\"](ptr0, ptr1, ptr2));\n    }\n    /**\n    * @param {Position} arg0\n    * @returns {void}\n    */\n    set_old_tail_end_pos(arg0) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"update_set_old_tail_end_pos\"](this.ptr, ptr0);\n    }\n    /**\n    * @param {Position} arg0\n    * @param {Position} arg1\n    * @returns {void}\n    */\n    set_new_head_pos_update(arg0, arg1) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        const ptr1 = arg1.ptr;\n        arg1.ptr = 0;\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"update_set_new_head_pos_update\"](this.ptr, ptr0, ptr1);\n    }\n    /**\n    * @param {Position} arg0\n    * @param {Position} arg1\n    * @returns {void}\n    */\n    set_new_candy_pos_update(arg0, arg1) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        const ptr1 = arg1.ptr;\n        arg1.ptr = 0;\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"update_set_new_candy_pos_update\"](this.ptr, ptr0, ptr1);\n    }\n    /**\n    * @returns {Position}\n    */\n    old_tail_end_pos() {\n        return Position.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"update_old_tail_end_pos\"](this.ptr));\n    }\n    /**\n    * @returns {PositionUpdate}\n    */\n    new_head_pos_update() {\n        return PositionUpdate.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"update_new_head_pos_update\"](this.ptr));\n    }\n    /**\n    * @returns {PositionUpdate}\n    */\n    new_candy_pos_update() {\n        return PositionUpdate.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"update_new_candy_pos_update\"](this.ptr));\n    }\n}\n\nfunction freePositionUpdate(ptr) {\n\n    _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_positionupdate_free\"](ptr);\n}\n/**\n*/\nclass PositionUpdate {\n\n    static __wrap(ptr) {\n        const obj = Object.create(PositionUpdate.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freePositionUpdate(ptr);\n    }\n\n    /**\n    * @returns {Position}\n    */\n    get old_position() {\n        return Position.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_positionupdate_old_position\"](this.ptr));\n    }\n    set old_position(arg0) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_positionupdate_old_position\"](this.ptr, ptr0);\n    }\n    /**\n    * @returns {Position}\n    */\n    get new_position() {\n        return Position.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_positionupdate_new_position\"](this.ptr));\n    }\n    set new_position(arg0) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        return _snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_positionupdate_new_position\"](this.ptr, ptr0);\n    }\n    /**\n    * @param {Position} arg0\n    * @param {Position} arg1\n    * @returns {PositionUpdate}\n    */\n    static new(arg0, arg1) {\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        const ptr1 = arg1.ptr;\n        arg1.ptr = 0;\n        return PositionUpdate.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"positionupdate_new\"](ptr0, ptr1));\n    }\n    /**\n    * @returns {Position}\n    */\n    old_position() {\n        return Position.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"positionupdate_old_position\"](this.ptr));\n    }\n    /**\n    * @returns {Position}\n    */\n    new_position() {\n        return Position.__wrap(_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"positionupdate_new_position\"](this.ptr));\n    }\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///../pkg/snake_wasm.js?");

/***/ }),

/***/ "../pkg/snake_wasm_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/snake_wasm_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __wbg_positionupdate_free, __wbg_get_positionupdate_old_position, __wbg_set_positionupdate_old_position, __wbg_get_positionupdate_new_position, __wbg_set_positionupdate_new_position, positionupdate_new, positionupdate_old_position, positionupdate_new_position, __wbg_update_free, update_new, update_set_old_tail_end_pos, update_set_new_head_pos_update, update_set_new_candy_pos_update, update_old_tail_end_pos, update_new_head_pos_update, update_new_candy_pos_update, __wbg_board_free, board_new, board_tick, board_width, board_length, board_score, board_snake_change_dir, board_set_candy_pos, board_update_body, __wbg_position_free, __wbg_get_position_x, __wbg_set_position_x, __wbg_get_position_y, __wbg_set_position_y, position_new, position_set_x, position_set_y, position_x, position_y, greet, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./snake_wasm */ \"../pkg/snake_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/snake_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snake-wasm */ \"../pkg/snake_wasm.js\");\n/* harmony import */ var snake_wasm_snake_wasm_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! snake-wasm/snake_wasm_bg */ \"../pkg/snake_wasm_bg.wasm\");\n\n\n\n\n\n\n\nconst CELL_SIZE = 10; // px\nconst NULL_COLOR  = \"#CCCCCC\";\nconst HEAD_COLOR  = \"#0000FF\";\nconst TAIL_COLOR  = \"#00CCFF\";\nconst CANDY_COLOR = \"#FF0000\";\n\n\n\nfunction sleep(delay) {\n        var start = new Date().getTime();\n        while (new Date().getTime() < start + delay);\n      }\n\n\n\nconst board = snake_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Board\"].new(50, 50);\nconst width = board.width();\nconst length = board.length();\n\n//console.log(width, length);\n\n\n\nconst getIndex = (row, column) => {\n  return row * width + column;\n};\n\nconst canvas = document.getElementById(\"snake-board-canvas\");\ncanvas.height = (CELL_SIZE + 1) * length + 1;\ncanvas.width = (CELL_SIZE + 1) * width + 1;\n\nconst ctx = canvas.getContext('2d');\n\n\nconst drawCells = () => {\n\n\n\tctx.beginPath();\n\n\t//draw raw cells\n\tfor (let row = 0; row < length; row++){\n\t\tfor (let col = 0; col < width; col++){\n\t\t\tconst idx = getIndex(row, col);\n            ctx.fillStyle = NULL_COLOR;\n\t\t\tctx.fillRect(\n\t\t\t\tcol * (CELL_SIZE + 1) + 1,\n\t\t\t\trow * (CELL_SIZE + 1) + 1,\n\t\t\t\tCELL_SIZE,\n\t\t\t\tCELL_SIZE\n\t\t\t);\n\t\t}\n\t}\n\n\tctx.stroke();\n};\n//console.log(board.snake);\n\nlet animationId = null;\n\n\n\ndocument.addEventListener('keydown', function(event){\n        switch (event.key) {\n            case \"ArrowLeft\":\n                board.snake_change_dir(1);\n                break;\n            case \"ArrowRight\":\n                board.snake_change_dir(3);\n                break;\n            case \"ArrowUp\":\n                board.snake_change_dir(0);\n                break;\n            case \"ArrowDown\":\n                board.snake_change_dir(2);\n                break;\n        }\n} );\n\n\n\nfunction updateBoard(){\n\n\n    ctx.beginPath();\n\n    //console.log(board.update_body);\n    //remove tail end\n    var row = board.update_body().old_tail_end_pos().x();\n\n    var col = board.update_body().old_tail_end_pos().y();\n\n    ctx.fillStyle = NULL_COLOR;\n    ctx.fillRect(\n\t\t\t\tcol * (CELL_SIZE + 1) + 1,\n\t\t\t\trow * (CELL_SIZE + 1) + 1,\n\t\t\t\tCELL_SIZE,\n\t\t\t\tCELL_SIZE\n\t\t\t);\n\n\n\n\n    //mark candy\n\tvar old_row = board.update_body().new_candy_pos_update().old_position().x();\n    var old_col = board.update_body().new_candy_pos_update().old_position().y();\n\n    ctx.fillStyle = NULL_COLOR;\n    ctx.fillRect(\n\t\t\t\told_col * (CELL_SIZE + 1) + 1,\n\t\t\t\told_row * (CELL_SIZE + 1) + 1,\n\t\t\t\tCELL_SIZE,\n\t\t\t\tCELL_SIZE\n\t\t\t);\n\n\n\tvar new_row = board.update_body().new_candy_pos_update().new_position().x();\n\tvar new_col = board.update_body().new_candy_pos_update().new_position().y();\n\n    ctx.fillStyle = CANDY_COLOR;\n    ctx.fillRect(\n\t\t\t\tnew_col * (CELL_SIZE + 1) + 1,\n\t\t\t\tnew_row * (CELL_SIZE + 1) + 1,\n\t\t\t\tCELL_SIZE,\n\t\t\t\tCELL_SIZE\n\t\t\t);\n\n\n\t//mark head\n\tvar old_row = board.update_body().new_head_pos_update().old_position().x();\n    var old_col = board.update_body().new_head_pos_update().old_position().y();\n\n    ctx.fillStyle = TAIL_COLOR;\n    ctx.fillRect(\n\t\t\t\told_col * (CELL_SIZE + 1) + 1,\n\t\t\t\told_row * (CELL_SIZE + 1) + 1,\n\t\t\t\tCELL_SIZE,\n\t\t\t\tCELL_SIZE\n\t\t\t);\n\n\n\tvar new_row = board.update_body().new_head_pos_update().new_position().x();\n\tvar new_col = board.update_body().new_head_pos_update().new_position().y();\n\n    ctx.fillStyle = HEAD_COLOR;\n    ctx.fillRect(\n\t\t\t\tnew_col * (CELL_SIZE + 1) + 1,\n\t\t\t\tnew_row * (CELL_SIZE + 1) + 1,\n\t\t\t\tCELL_SIZE,\n\t\t\t\tCELL_SIZE\n\t\t\t);\n\n\n\n}\n\ndrawCells();\nvar score_element = document.getElementById(\"score\");\n const renderLoop = () => {\n  //debugger;\n\n\n  sleep(90);\n  if(board.tick()){\n    drawCells();\n  }\n  updateBoard();\n\n    score_element.textContent = board.score();\n\n   animationId = requestAnimationFrame(renderLoop);\n};\n\nrenderLoop();\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);