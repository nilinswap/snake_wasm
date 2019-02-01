use cell;
use pos;
extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
extern crate web_sys;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}



//#[derive(Clone, Copy, Debug, PartialEq, Eq)]
#[repr(u8)]
#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Direction{
    Up = 0,
    Right = 1,
    Down = 2,
    Left = 3,
}
/*impl Direction {
    fn add(self, other: Direction) -> Direction{

    }
}*/

pub struct Snake{
    pub direction: Direction,
    pub body_pos_vec: Vec<pos::Position>,
}

impl Snake{
    pub fn new() -> Self{
        Snake{
            direction: Direction::Right,
            body_pos_vec: vec![ pos::Position{x: 10, y: 10}, pos::Position{x: 10, y: 11}, pos::Position{x: 10, y: 12}, pos::Position{x: 10, y: 13}],
        }

    }
    pub fn change_dir(&mut self, new_dir: Direction){
        if (self.direction as u8 + new_dir as u8 ) % 2 == 1{
            self.direction = new_dir;
        }

    }

    pub fn move_next(&mut self, width: u32, length: u32){
        let now_head = self.body_pos_vec[0].clone();

        let next_head = match self.direction{
            Direction::Up => pos::Position{ x: (now_head.x + length - 1) % length, y: now_head.y },
            Direction::Right => pos::Position{ x: now_head.x, y: (now_head.y + width - 1) % width },
            Direction::Down => pos::Position{ x: (now_head.x + 1) % length, y: now_head.y },
            Direction::Left => pos::Position{ x: now_head.x, y: (now_head.y +1) % width },
        };
        /*for position in &self.body_pos_vec{
           log!(
                    "{:?} ",
                    position
				 );
       }*/
        self.body_pos_vec.pop();
        self.body_pos_vec.insert(0, next_head);

       /*for position in &self.body_pos_vec{
           log!(
                    "{:?} ",
                    position
				 );
       }*/

    }
    /*
    fn tail_increase(&mut self){}
    pub fn is_biting_itself( &mut self){}
    pub fn is_biting_candy( &mut self) {}
    */


}









