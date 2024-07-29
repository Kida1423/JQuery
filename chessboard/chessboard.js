function generateChessBoard(size){
  let board=$('<div class="board"></div>');
  for(let row=0;row<size;row++){
    for(let col=0;col<size;col++){
      let cell=$('<div class="cell"></div>');
      if((row+col)%2!=0){
        cell.addClass("white");
      }else{
        cell.addClass("black");
      }
      board.append(cell);
    }
  }
  return board;
}

$(document).ready(function(){
  let chessboard=generateChessBoard(8);
  $('#chessboard').append(chessboard);
});