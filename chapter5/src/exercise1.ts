export default null;

// 5.1 Class and Interface
// 1 round of chess game
class Game {}

// chess piece
// class Piece {}

// position
// class Position {}

//==========================
// Chess Pieces
//==========================
// class King extends Piece {}
// class Queen extends Piece {}
// class Biship extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}

type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'; // row
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;                 // column

class Position {
  constructor(
    private file: File,
    private Rank: Rank
  ) {}
}

class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    // uses file and rank to mark a position
    this.position = new Position(file, rank);
  }
}

