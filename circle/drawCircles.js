const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0F', '#0FF', '#FF0'];

function getRandomColor(){
  return colors[Math.floor(Math.random()*colors.length)];
}
function getRandomSize(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
function getRandomPosition(maxX,maxY,size){
  let x=Math.floor(Math.random()*(maxX-size));
  let y=Math.floor(Math.random()*(maxY-size));
  return {x,y};
}
function createCircle(){
  let color=getRandomColor();
  let size=getRandomSize(50,200);
  let {x,y}=getRandomPosition(1024,768,size);
  const circle=$('<div class="circle"></div>');
  circle.css({
    width: size + 'px',
    height: size + 'px',
    backgroundColor: color,
    position: 'absolute', 
    top: y + 'px',
    left: x + 'px',
  });
  return circle;
}
function drawCircle(count){
  let canvas=$('#canvas');
  for(let i=0;i<count;i++){
    const circle=createCircle();
    canvas.append(circle);
  }
}

$(document).ready(function(){
  drawCircle(20);
});
