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
  let d=size*20;
  board.css({
    width: d + 'px',
    height: d + 'px', 
  });
  return board;
}

$(document).ready(function(){
  let chessboard=generateChessBoard(40);
  $('#chessboard').append(chessboard);
});