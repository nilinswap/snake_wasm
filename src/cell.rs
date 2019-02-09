#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Cell{
    Null = 0,
    Head = 1,
    Tail = 2,
    Candy = 3,
}


