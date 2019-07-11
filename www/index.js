import {Board, Cell} from "snake-wasm";
import {memory} from "snake-wasm/snake_wasm_bg";





const CELL_SIZE = 10; // px
const NULL_COLOR  = "#CCCCCC";
const HEAD_COLOR  = "#0000FF";
const TAIL_COLOR  = "#00CCFF";
const CANDY_COLOR = "#FF0000";






const board = Board.new(50, 50);
const width = board.width();
const length = board.length();

//console.log(width, length);



const getIndex = (row, column) => {
  return row * width + column;
};

const canvas = document.getElementById("snake-board-canvas");
canvas.height = (CELL_SIZE + 1) * length + 1;
canvas.width = (CELL_SIZE + 1) * width + 1;

const ctx = canvas.getContext('2d');


const drawCells = () => {


	ctx.beginPath();

	//draw raw cells
	for (let row = 0; row < length; row++){
		for (let col = 0; col < width; col++){
			const idx = getIndex(row, col);
            ctx.fillStyle = NULL_COLOR;
			ctx.fillRect(
				col * (CELL_SIZE + 1) + 1,
				row * (CELL_SIZE + 1) + 1,
				CELL_SIZE,
				CELL_SIZE
			);
		}
	}

	ctx.stroke();
};
//console.log(board.snake);

let animationId = null;



document.addEventListener('keydown', function(event){
        switch (event.key) {
            case "ArrowLeft":
                board.snake_change_dir(1);
                break;
            case "ArrowRight":
                board.snake_change_dir(3);
                break;
            case "ArrowUp":
                board.snake_change_dir(0);
                break;
            case "ArrowDown":
                board.snake_change_dir(2);
                break;
        }
} );



function updateBoard(){


    ctx.beginPath();

    //console.log(board.update_body);
    //remove tail end
    var row = board.update_body().old_tail_end_pos().x();

    var col = board.update_body().old_tail_end_pos().y();

    ctx.fillStyle = NULL_COLOR;
    ctx.fillRect(
				col * (CELL_SIZE + 1) + 1,
				row * (CELL_SIZE + 1) + 1,
				CELL_SIZE,
				CELL_SIZE
			);




    //mark candy
	var old_row = board.update_body().new_candy_pos_update().old_position().x();
    var old_col = board.update_body().new_candy_pos_update().old_position().y();

    ctx.fillStyle = NULL_COLOR;
    ctx.fillRect(
				old_col * (CELL_SIZE + 1) + 1,
				old_row * (CELL_SIZE + 1) + 1,
				CELL_SIZE,
				CELL_SIZE
			);


	var new_row = board.update_body().new_candy_pos_update().new_position().x();
	var new_col = board.update_body().new_candy_pos_update().new_position().y();

    ctx.fillStyle = CANDY_COLOR;
    ctx.fillRect(
				new_col * (CELL_SIZE + 1) + 1,
				new_row * (CELL_SIZE + 1) + 1,
				CELL_SIZE,
				CELL_SIZE
			);


	//mark head
	var old_row = board.update_body().new_head_pos_update().old_position().x();
    var old_col = board.update_body().new_head_pos_update().old_position().y();

    ctx.fillStyle = TAIL_COLOR;
    ctx.fillRect(
				old_col * (CELL_SIZE + 1) + 1,
				old_row * (CELL_SIZE + 1) + 1,
				CELL_SIZE,
				CELL_SIZE
			);


	var new_row = board.update_body().new_head_pos_update().new_position().x();
	var new_col = board.update_body().new_head_pos_update().new_position().y();

    ctx.fillStyle = HEAD_COLOR;
    ctx.fillRect(
				new_col * (CELL_SIZE + 1) + 1,
				new_row * (CELL_SIZE + 1) + 1,
				CELL_SIZE,
				CELL_SIZE
			);



}

drawCells();
var score_element = document.getElementById("score");

var count = 0;

const renderLoop = () => {
  //debugger;

    count += 1;
    if (count < 20) {
        return
    }
    count = 0;

  if(board.tick()){
    drawCells();
  }
  updateBoard();

    score_element.textContent = board.score();

   animationId = requestAnimationFrame(renderLoop);
};

renderLoop();


/*

print("
   |   |
-----------
   | o | x
-----------
   |   |
")

*/
