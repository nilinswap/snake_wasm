extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;
#[repr(u8)]

#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell{
    Null = 0,
    Head = 1,
    Tail = 2,
    Candy = 3,
}


