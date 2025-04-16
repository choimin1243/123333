const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function search() {
  var tb = document.getElementById("colors");
  var tbIndex = document.getElementById("colors").options.selectedIndex;
  alert(tb.options[tbIndex].value);
  value=tb.options[tbIndex].value
}

alert(value)

















function onResults(results) {
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});

      prev_draw_x1=landmarks[8].x*1200
      prev_draw_y1=landmarks[8].y*1200







      setTimeout(function () {
        prev_draw_x2=landmarks[8].x*1200
        prev_draw_y2=landmarks[8].y*1200
      },0.5);
      setTimeout(function () {
        prev_draw_x3=landmarks[8].x*1200
        prev_draw_y3=landmarks[8].y*1200
      },0.5);
      setTimeout(function () {
        prev_draw_x4=landmarks[8].x*1200
        prev_draw_y4=landmarks[8].y*1200
      },0.5);
      setTimeout(function () {
        prev_draw_x5=landmarks[8].x*1200
        prev_draw_y5=landmarks[8].y*1200
      },0.5);



 

if(prev_draw_x4<40){
  if(prev_draw_y4<240){
  color="red" 
}

if(prev_draw_y4>240&prev_draw_y4<480){
  color="green"
}

if(prev_draw_y4<720&prev_draw_y4>480){
  color="blue"
}



if(prev_draw_y4>720&prev_draw_y4<960){
  color="black"
}



if(prev_draw_y4>960){
  color="white"
}




}     

if(value=="red"){
  color="red" 

}
if(value=="green"){
  color="green" 

}
if(value=="blue"){
  color="blue" 

}
if(value=="black"){
  color="black" 

}
if(value=="eraser"){
  color="white" 

}
document.getElementById("brother").innerText=color








    }











  }
  output_canvass=canvasCtx
  canvasCtx.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({image: videoElement});
  },
  width:500,
  height:250,
  flip_horiz: true
});

camera.start();



	  document.getElementById('brother').innerHTML=color
