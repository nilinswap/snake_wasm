import {Board, Cell} from "snake-wasm";
import {memory} from "snake-wasm/snake_wasm_bg";





const CELL_SIZE = 10; // px
const NULL_COLOR  = "#CCCCCC";
const HEAD_COLOR  = "#0000FF";
const TAIL_COLOR  = "#00CCFF";
const CANDY_COLOR = "#FF0000";



function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
      }



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
	const cellsPtr = board.cells();
	const cells = new Uint8Array( memory.buffer, cellsPtr, width*length);

	ctx.beginPath();
	for (let row = 0; row < length; row++){
		for (let col = 0; col < width; col++){
			const idx = getIndex(row, col);

            //console.log(cells[idx]);
			switch( cells[idx] ){
			    case 1:{

			        ctx.fillStyle = HEAD_COLOR;
			        break;
			      }
			    case 2:{
			    	ctx.fillStyle = TAIL_COLOR;
			        break;
			      }
			    case 3:{
			       	ctx.fillStyle = CANDY_COLOR;
			        break;
			       }
			    case 0:{
			        ctx.fillStyle = NULL_COLOR;
			        break;
			       }
			    //console.log(ctx.fillStyle);

			};
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


var score_element = document.getElementById("score");
 const renderLoop = () => {
  //debugger;


  board.tick();
  //console.log(board.score());
    score_element.textContent = board.score();
    //sleep(100);
  drawCells();

   animationId = requestAnimationFrame(renderLoop);
};
/*
*/
renderLoop();



