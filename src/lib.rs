extern crate cfg_if;
extern crate wasm_bindgen;
extern crate rand;
mod utils;
pub mod cell;
pub mod pos;
pub mod snake;
pub mod board;
pub mod update;
use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(st: String) {
    alert(st.as_str());
}


#[wasm_bindgen]
pub fn make_snake(){
    let snake_obj = snake::Snake::new();
}

