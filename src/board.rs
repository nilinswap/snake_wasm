use cell;
use pos;
use snake;

struct Board{
    width: u32,
    length: u32,
    candy_pos: pos::Position,
    cell_vec: Vec< cell::Cell >,
    snake: snake::Snake,
}



impl Board{

    pub fn new() -> Self{}
    pub fn tick(){}
}

