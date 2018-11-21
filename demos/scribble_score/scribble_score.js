let stage = new createjs.Stage("mainCanvas");

stage.enableMouseOver();

let cw = stage.canvas.width;
let ch = stage.canvas.height;

// Draw staff lines //////////////////////////////////////////////////////
let staff = new createjs.Shape();
let g = staff.graphics;

// The staff fills the top 60% of the screen with 5% padding on each side:
g.beginStroke("#000");
for(let i = 0; i < 5; i++){
	g.moveTo(cw*0.05, ch*(0.05+0.10*i)); g.lineTo(cw*0.95, ch*(0.05+0.10*i));
}

stage.addChild(staff);


// Draw instrument selection UI //////////////////////////////////////////

let divider = new createjs.Shape();
g = divider.graphics;
g.beginStroke("#000");
g.moveTo(0 , ch*0.6); g.lineTo(cw, ch*0.6);
stage.addChild(divider);

let exampleInstrument = new createjs.Shape();
g = exampleInstrument.graphics;
g.beginStroke("#C91");
g.drawPolyStar(0,0, 40, 5, 0.5);
stage.addChild(exampleInstrument);
exampleInstrument.y = ch*0.7;
exampleInstrument.x = cw*0.05 +20;

stage.update();