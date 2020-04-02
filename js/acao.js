function slide1(){
	document.getElementById('fotobanner').src="imagens/1.jpg";
	setTimeout("slide2()", 3000);
}
 
function slide2(){
	document.getElementById('fotobanner').src="imagens/2.jpg";
	setTimeout("slide3()", 3000);
}
 
function slide3(){
	document.getElementById('fotobanner').src="imagens/3.jpg";
	setTimeout("slide1()", 3000);
}