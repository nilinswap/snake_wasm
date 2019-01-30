use cell;
use pos;

enum Direction{
    Top = 0,
    Right = 1,
    Down = 2,
    Left = 3,
}

struct Snake{
    direction: Direction,
    body_pos_vec: Vec<pos::Position>,
}

impl Snake{
    pub fn new() -> Self{}
    pub fn change_dir(&mut self, new_dir: Direction){
        if (self.direction + new_dir) % 2 == 1{
            self.direction = new_dir;
        }

    }
    pub fn move(&mut self){}
    fn tail_increase(&mut self){}
    pub fn is_biting_itself( &mut self){}
    pub fn is_biting_candy( &mut self) {}


}











