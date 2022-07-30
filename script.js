let canva = document.getElementById("canva");
let holst = canva.getContext("2d");
//holst.fillStyle = "red";
//holst.fillStyle = "#FFAA20";
holst.fillStyle = "rgb(255,0,255)";
holst.strokeStyle = "blue";
//holst.fillRect(100,100,100,100);//закрашенный
//holst.strokeRect(200,200,100,100);//незакрашенный

/*holst.beginPath();
holst.moveTo(200,200);
holst.lineTo(100,100);
holst.lineTo(100,300);
holst.lineTo(200,200);

//holst.stroke();
holst.fill();
holst.closePath();

holst.beginPath();
holst.moveTo(400,400);
holst.arc(400,400,50,30,60,true);
holst.fill();
holst.closePath();*/

//let image = new Image(200,200);
//image.onload = function()
//{
//	holst.drawImage(image,200,200,400,300);
//}
//image.src="https://papik.pro/uploads/posts/2021-09/1630499054_4-papik-pro-p-ptichka-risunok-4.png";


let image = new Image();

image.onload = function()
{
	let pattern = holst.createPattern(image,"repeat");
	holst.fillStyle = pattern;
	holst.fillRect(20,20,500,500);
}

image.src="https://papik.pro/uploads/posts/2021-09/1630499054_4-papik-pro-p-ptichka-risunok-4.png";