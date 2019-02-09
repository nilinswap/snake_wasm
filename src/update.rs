extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

use pos;

#[wasm_bindgen]
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
    pub new_head_pos_update: PositionUpdate,

    pub old_tail_end_pos: pos::Position,

    pub new_candy_pos_update: PositionUpdate

}

impl Update{
    pub fn new(start_head_pos: pos::Position, start_tail_end_pos: pos::Position, start_candy_pos: pos::Position) -> Self{
        Update{

            new_head_pos_update: PositionUpdate::new(start_head_pos, start_head_pos),
            old_tail_end_pos: start_tail_end_pos,
            new_candy_pos_update: PositionUpdate::new(start_candy_pos, start_candy_pos),
        }
    }

}
