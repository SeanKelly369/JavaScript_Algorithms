function chessBoardCellColor(cell1, cell2) {
  const chessBoard = {
    'A': 1,
    'B': 2,
    'C': 3,
    'D': 4,
    'E': 5,
    'F': 6,
    'G': 7,
    'H': 8
  };

  const piece1 = (chessBoard[cell1[0]] + parseInt(cell1[1])) % 2;
  console.log(`piece1 is ${piece1}`);
  const piece2 = (chessBoard[cell2[0]] + parseInt(cell1[1])) % 2;
  console.log(`piece2 is ${piece2}`)

  return piece1 === piece2;
}

chessBoardCellColor('A1', 'C3');
//chessBoardCellColor('A1', 'H3');
