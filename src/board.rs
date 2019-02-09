
use pos;
use snake;
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
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


//apply this attribute if struct is exported to JS; also if there is a method that is to be exported, it should have that attribute( over impl block) explicitly.
#[wasm_bindgen]
pub struct Board{
    width: u32,
    length: u32,
    candy_pos: pos::Position,
    snake: snake::Snake,
    score: u64,
    update_body: update::Update,
}


#[wasm_bindgen]
impl Board{

    pub fn new(width: u32, length: u32) -> Self{


        let snake = snake::Snake::new();
        let candy_pos = pos::Position::new(20, 20);



        let update_body = update::Update::new(snake.head(), snake.tailend(), candy_pos);
        //log!("{:?}", snake.body_pos_vec.last());
        Board{
            width,
            length,
            candy_pos: candy_pos,
            snake: snake,
            score: 0,
            update_body,
        }
    }
    pub fn tick(&mut self) -> bool{

        if self.is_snake_biting_itself(){

            alert(&format!("game over!\nyour score: {}", self.score));
            {

                let snaKe = snake::Snake::new();
                let candy_pos = pos::Position::new(20, 20);


                self.candy_pos = candy_pos;

            self.snake = snaKe;
            self.score= 0;
            self.update_body = update::Update::new(self.snake.head(), self.snake.tailend(), candy_pos);

            }
            return true;


        }



        if !self.is_snake_biting_candy() { // so if snake is eating candy, its size increases
            //get tail end pos and make it null as snake moved one cell
    
            match self.snake.pop_tailend(){
                //update for tailend fade

                Some(pos_obj) => self.update_body.set_old_tail_end_pos(pos_obj),
                None => unimplemented!(),
            };
            self.update_body.set_new_candy_pos_update( self.candy_pos, self.candy_pos);

        }
        else{
         let new_candy_pos = self.generate_new_candy();
         self.update_body.set_new_candy_pos_update( self.candy_pos, new_candy_pos);

         self.score += 1;
            log!("{}", self.score);


        }

        self.update_body.set_new_head_pos_update( self.snake.head(), self.snake.move_next(self.width, self.length));

        return false



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
    pub fn set_candy_pos(&mut self, position: pos::Position){
        self.candy_pos = position;
    }
    pub fn update_body( &self ) -> update::Update{
        self.update_body
    }

}

impl Board{
    pub fn is_snake_biting_itself(&self)-> bool{
        self.snake.is_biting_itself()
    }
    pub fn get_index(&self, position : pos::Position) -> usize{
        (position.x()*self.width + position.y()) as usize
    }
    /* RIP render
	pub fn render(&self) -> String{
		self.to_string()
	}
    */
    pub fn is_snake_biting_candy(&self) -> bool{
        self.snake.is_biting_candy(self.candy_pos)
    }
    pub fn generate_new_candy(&mut self) -> pos::Position{// somehow rand doesn't work all fine with wasm
        //let mut rng = rand::thread_rng();
        let  x: u32 = (self.snake.head().x() * self.snake.tailend().y() ) % (self.length() - 7);
        let  y: u32 = (self.snake.head().y() * self.snake.tailend().x())  %(self.width() - 7);
        let mut position= pos::Position{x, y};
        while self.snake.contains_in_body(position) || (position.x == 0 && position.y == 0){
            let  x: u32 = (self.snake.head().x() * self.snake.tailend().y() ) % (self.length()- 7);
            let  y: u32 = (self.snake.head().y() * self.snake.tailend().x())  %(self.width() - 7);
            position= pos::Position{x, y};
        }

        self.set_candy_pos(position);

        position

    }
}

/* RIP display
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
*/