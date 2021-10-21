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
    private file: File,           // assign file to this
    private Rank: Rank
  ) {}
}

// abstract key word specify that current Class cannot be instantiated,
// we can only instantiate it subclasses
abstract class Piece {
  protected position: Position    // assign position to this
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    // uses file and rank to mark a position
    this.position = new Position(file, rank);

    // this.color = color; // this is not necessary
  }

  getPosition() {
    return this.position;
  }

  getColor() {
    return this.color;
  }
}

class King extends Piece {}
class Queen extends Piece {}
class Biship extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}

// not working
// let piece = new Piece();

// working, we can only instantiate abstract classes's subclass
let king = new King('White', 'C', 4);
console.log(king.getPosition()); // Position { file: 'C', Rank: 4 }
console.log(king.getColor());    // White