use cell;
use pos;
use snake;

pub struct Board{
    width: u32,
    length: u32,
    candy_pos: pos::Position,
    cell_vec: Vec< cell::Cell >,
    snake: snake::Snake,
}



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
            candy_pos: pos::Position{x: 30, y:30,},
            cell_vec: vector,
            snake: snake,
        }
    }
    pub fn tick(){}
    pub fn get_index(&self, position : pos::Position) -> usize{
        (position.x*self.width + position.y) as usize
    }
	pub fn render(&self) -> String{
		self.to_string()
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