use cell;
use pos;

//#[derive(Clone, Copy, Debug, PartialEq, Eq)]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Direction{
    Top = 0,
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
    /*
    pub fn move(&mut self){}
    fn tail_increase(&mut self){}
    pub fn is_biting_itself( &mut self){}
    pub fn is_biting_candy( &mut self) {}
    */


}











