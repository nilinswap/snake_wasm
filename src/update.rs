extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

use pos;


#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct PositionUpdate{
    pub old_position: pos::Position,
    pub new_position: pos::Position,
}

impl PositionUpdate{
    pub fn new(old_position: pos::Position, new_position: pos::Position) -> Self{
        PositionUpdate{
            old_position,
            new_position,
        }
    }
}



#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Update{
     new_head_pos_update: PositionUpdate,

     old_tail_end_pos: pos::Position,

     new_candy_pos_update: PositionUpdate

}

impl Update{
    pub fn new(start_head_pos: pos::Position, start_tail_end_pos: pos::Position, start_candy_pos: pos::Position) -> Self{
        Update{

            new_head_pos_update: PositionUpdate::new(start_head_pos, start_head_pos),
            old_tail_end_pos: start_tail_end_pos,
            new_candy_pos_update: PositionUpdate::new(start_candy_pos, start_candy_pos),
        }
    }

    pub fn set_old_tail_end_pos(&mut self, position: pos::Position){
        self.old_tail_end_pos = position;
    }

    pub fn set_new_head_pos_update(&mut self, old_position: pos::Position, new_position: pos::Position){
        self.new_head_pos_update = PositionUpdate::new(old_position, new_position);
    }

    pub fn set_new_candy_pos_update(&mut self, old_position: pos::Position, new_position: pos::Position){
        self.new_candy_pos_update = PositionUpdate::new(old_position, new_position);
    }
    //pub fn set_new_head_pos_update(&mut self, )
    
    pub fn old_tail_end_pos(&mut self, position: pos::Position) -> pos::Position{
        self.old_tail_end_pos
    }

    pub fn new_head_pos_update(&mut self, old_position: pos::Position, new_position: pos::Position) -> PositionUpdate{
        self.new_head_pos_update
    }

    pub fn new_candy_pos_update(&mut self, old_position: pos::Position, new_position: pos::Position) -> PositionUpdate{
        self.new_candy_pos_update
    }

}
