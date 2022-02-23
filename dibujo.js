/*caja de texto y boton*/
var texbox = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var resetButton = document.getElementById("resetButton");
/*el espacio de dibujo*/
var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");

boton.addEventListener('click',dibujoporClick);
resetButton.addEventListener('click',resetCanvas);

function resetCanvas()
{
  texbox.value = "";
  lienzo.clearRect(0,0,300,300);
}

/*Dibuja una linea desde un punto inicial a un punto final*/
function drawOneLine(color,xinicial,yinicial,xfinal,yfinal)
{
  lienzo.beginPath();
  lienzo.strongStyle=color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

/*Recibe una cantidad de lineas y las dibuja al hacer un click*/
function dibujoporClick()
{
  var lineas=parseInt(texbox.value);
  var l=0;
  var ancho=d.width;
  while (l<lineas)
  {
    drawOneLine('red',0,l*(ancho/lineas), (ancho/lineas)+(l*(ancho/lineas)),ancho);
    l++;
  }
  drawOneLine('red',0,0,0,300);
  drawOneLine('red',0,300,300,300);
}
