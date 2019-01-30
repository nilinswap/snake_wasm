import * as wasm from "snake-wasm";

//wasm.greet("hello");
//wasm.make_snake();
//wasm.make_board();


//var canvas_element = document.getElementById("snake-board-canvas");

var body_element = document.getElementsByTagName("body")[0]
body_element.innerText = wasm.make_board();

