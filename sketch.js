let mobilenet;

function modelReady(){
	console.log('okey dokey');
}


function setup(){
	createCanvas(640,480);
	joey = createImg ('students/Joey.JPG');
	joey.hide();
	background(0);
	image(joey,0,0);
	mobilenet = ml5.imageClassifier('students', modelReady)
}