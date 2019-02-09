extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

use pos;
#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Update{
    pub is_nhp_set: bool,
    pub new_head_pos: pos::Position,
    pub is_otep_set: bool,
    pub old_tail_end_pos: pos::Position,
    pub is_ncp_set: bool,
    pub new_candy_pos: pos::Position

}

impl Update{
    pub fn new() -> Self{
        Update{
            is_nhp_set: false,
            new_head_pos: pos::Position{x:0, y:0},
            is_otep_set: false,
            old_tail_end_pos: pos::Position{x:0, y:0},
            is_ncp_set: false,
            new_candy_pos: pos::Position{x:0, y:0},
        }
    }

}
