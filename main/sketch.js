



function setup(){
  createCanvas(1000, 1000);

}


function draw(){


if(color=="red"){
stroke(255,0,0);
strokeWeight(10)
point(1200-prev_draw_x1,prev_draw_y1)
point(1200-prev_draw_x2,prev_draw_y2)
point(1200-prev_draw_x3,prev_draw_y3)
point(1200-prev_draw_x4,prev_draw_y4)
point(1200-prev_draw_x5,prev_draw_y5)

}



if(color=="green"){
stroke(0,255,0);
strokeWeight(10)
point(1200-prev_draw_x1,prev_draw_y1)
point(1200-prev_draw_x2,prev_draw_y2)
point(1200-prev_draw_x3,prev_draw_y3)
point(1200-prev_draw_x4,prev_draw_y4)
point(1200-prev_draw_x5,prev_draw_y5)
}


if(color=="blue"){
stroke(0,0,255);
strokeWeight(10)
point(1200-prev_draw_x1,prev_draw_y1)
point(1200-prev_draw_x2,prev_draw_y2)
point(1200-prev_draw_x3,prev_draw_y3)
point(1200-prev_draw_x4,prev_draw_y4)
point(1200-prev_draw_x5,prev_draw_y5)
}


if(color=="black"){
stroke(0,0,0);
strokeWeight(10)
point(1200-prev_draw_x1,prev_draw_y1)
point(1200-prev_draw_x2,prev_draw_y2)
point(1200-prev_draw_x3,prev_draw_y3)
point(1200-prev_draw_x4,prev_draw_y4)
point(1200-prev_draw_x5,prev_draw_y5)
}



if(color=="white"){
stroke(255,255,255);
strokeWeight(20)
point(1200-prev_draw_x1,prev_draw_y1)
point(1200-prev_draw_x2,prev_draw_y2)
point(1200-prev_draw_x3,prev_draw_y3)
point(1200-prev_draw_x4,prev_draw_y4)
point(1200-prev_draw_x5,prev_draw_y5)
}






}  




