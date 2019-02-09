use cell;
use pos;
use snake;
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
use rand::prelude::*;
extern crate web_sys;
use update;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub struct Board{
    width: u32,
    length: u32,
    candy_pos: pos::Position,
    cell_vec: Vec< cell::Cell >,
    snake: snake::Snake,
    score: u64,
}


#[wasm_bindgen]
impl Board{

    pub fn new(width: u32, length: u32) -> Self{
        let mut vector = vec![cell::Cell::Null; (width*length) as usize];
        let snake = snake::Snake::new();
        let candy_pos = pos::Position::new(20, 20);
        let mut flag = true;
        for pos in &snake.body_pos_vec{
            if flag{
                vector[(pos.x*width + pos.y) as usize] = cell::Cell::Head;
                flag = false;
            }
            else{
                vector[(pos.x*width + pos.y) as usize] = cell::Cell::Tail;
            }


        }
        vector[(candy_pos.x*width + candy_pos.y) as usize] = cell::Cell::Candy;
        Board{
            width,
            length,
            candy_pos: candy_pos,
            cell_vec: vector,
            snake: snake,
            score: 0,
        }
    }
    pub fn tick(&mut self) -> update::Update{
        let mut update_instance = update::Update::new();
        //alert("here");
        if self.is_snake_biting_itself(){

            alert(&format!("game over!\nyour score: {}", self.score));
            {
                let width = self.width;
                let length = self.length;
                let mut vector = vec![cell::Cell::Null; (width*length) as usize];
                let snaKe = snake::Snake::new();
                let candy_pos = pos::Position::new(20, 20);
                let mut flag = true;
                for pos in &snaKe.body_pos_vec{
                    if flag{
                        vector[(pos.x*width + pos.y) as usize] = cell::Cell::Head;
                        flag = false;
                    }
                    else{
                        vector[(pos.x*width + pos.y) as usize] = cell::Cell::Tail;
                    }


                }
                vector[(candy_pos.x*width + candy_pos.y) as usize] = cell::Cell::Candy;
                self.candy_pos = candy_pos;
            self.cell_vec = vector;
            self.snake = snaKe;
            self.score= 0;
            }
            return update_instance;

        }



        if !self.is_snake_biting_candy() { // so is snake is eating candy, its size increases
            //get tail end pos and make it null as snake moved one cell
            let last_pos = self.snake.body_pos_vec.last().cloned().unwrap();
            let idx = self.get_index(last_pos);
            self.cell_vec[idx] = cell::Cell::Null;
            match self.snake.body_pos_vec.pop(){
                Some(pos_obj) => {update_instance.old_tail_end_pos =pos_obj; update_instance.is_otep_set = true;},
                None => unimplemented!(),
            };


        }
        else{
         update_instance.is_ncp_set = true;
         update_instance.new_candy_pos = self.generate_new_candy();
         ;
         self.score += 1;
            log!("{}", self.score);


        }

        let new_head_pos = self.snake.move_next(self.width, self.length);

        update_instance.is_nhp_set = true;
        update_instance.new_head_pos = new_head_pos;


        //redraw the snake on cell_vec
        let mut flag = true;
        for pos in &self.snake.body_pos_vec{
            let cloned_pos = pos.clone();
            let idx = self.get_index(cloned_pos);
            if flag{
                self.cell_vec[idx] = cell::Cell::Head;
                flag = false;
            }
            else{
                self.cell_vec[idx] = cell::Cell::Tail;
            }


        }
        //log!("here {:?}", update_instance);
        update_instance

        //log!("{:?}", self.candy_pos);


    }

    pub fn cells(&self) -> *const cell::Cell{
        self.cell_vec.as_ptr()
    }
    pub fn width(&self) -> u32{
        self.width
    }
    pub fn length(&self) -> u32{
        self.length
    }
    pub fn score(&self) -> u32{
        self.score as u32
    }
    pub fn snake_change_dir(&mut self,direction: snake::Direction){
        self.snake.change_dir(direction);
    }


}

impl Board{
    pub fn is_snake_biting_itself(&self)-> bool{
        self.snake.is_biting_itself()
    }
    pub fn get_index(&self, position : pos::Position) -> usize{
        (position.x*self.width + position.y) as usize
    }
	pub fn render(&self) -> String{
		self.to_string()
	}
    pub fn is_snake_biting_candy(&self) -> bool{
        self.snake.is_biting_candy(self.candy_pos)
    }
    pub fn generate_new_candy(&mut self) -> pos::Position{// somehow rand doesn't work all fine with wasm
        //let mut rng = rand::thread_rng();
        let mut x: u32 = (self.snake.head().x * self.snake.tailend().y ) % (self.length - 7);
        let mut y: u32 = (self.snake.head().y * self.snake.tailend().x)  %(self.width - 7);
        let mut position= pos::Position{x, y};
        while self.snake.body_pos_vec.contains(&position) || (position.x == 0 && position.y == 0){
            let mut x: u32 = (self.snake.head().x * self.snake.tailend().y ) % (self.length - 7);
            let mut y: u32 = (self.snake.head().y * self.snake.tailend().x)  %(self.width - 7);
            let mut position= pos::Position{x, y};
        }

        self.candy_pos = position;
        let idx = self.get_index(self.candy_pos);
        self.cell_vec[idx] = cell::Cell::Candy;
        position

    }
}


use std::fmt;
impl fmt::Display for Board{
	fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result{
		let mut st = String::new();

		for row in 0..self.length{
			for col in 0..self.width{
				match self.cell_vec[self.get_index(pos::Position::new(row, col))]{
					cell::Cell::Head => st += "◼",
                    cell::Cell::Tail => st += "-",
                    cell::Cell::Candy => st += "o",
					cell::Cell::Null  => st += "◻",
				}


			}
			st += "\n";

		}
		write!(f, "{}", &st)?;

		Ok(())
	}



}