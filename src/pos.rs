extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Position{
    pub x: u32,
    pub y: u32,
}

impl Position{
    pub fn new(x: u32, y: u32) -> Self{
        Position{
            x,
            y,
        }
    }

    pub fn set_x(&mut self, x: u32){
        self.x = x;
    }

    pub fn x(&self) -> u32{
        self.x
    }
    pub fn y(&self) -> u32{
        self.y
    }
    pub fn set_y(&mut self, y: u32){
        self.y = y;
    }

}