export default null;

// 5.1 Class and Interface
// 1 round of chess game
// class Game {}

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
    private rank: Rank
  ) {}

   // calculate the distance between two pieces
   distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
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

  moveTo(position: Position) {
    this.position = position;
  }

  // if we define an abstract method, we have to implement it in its subclasses
  abstract canMoveTo(position: Position): boolean;
}

class King extends Piece {
  // each piece can only move 1 step at a time
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Queen extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
class Bishop extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.rank < 2 && distance.file < 2;
  }
}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}

// not working
// let piece = new Piece();

// working, we can only instantiate abstract classes's subclass
let king = new King('White', 'C', 4);
console.log(king.getPosition()); // Position { file: 'C', Rank: 4 }
console.log(king.getColor());    // White

// Game class
class Game {
  // class can access static properties and methods
  private pieces = Game.makePieces();

  private static makePieces() {
    return [
      // king
      new King('White', 'E', 1),
      new King('Black', 'E', 8),

      // queen
      new Queen('White', 'D', 1),
      new Queen('Black', 'D', 8),

      // bishop
      new Bishop('White', 'C', 1),
      new Bishop('White', 'F', 1),
      new Bishop('Black', 'C', 8),
      new Bishop('Black', 'F', 8),

      //...
    ];
  }
}
