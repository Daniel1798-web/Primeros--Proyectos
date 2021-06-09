//Variables
var cuadrito = document.getElementById("area_de_dibujo")

//cuadrito.setAttribute( tamaño.value);
//cuadrito.setAttribute("height", "600");
var tamaño = document.getElementById("tamaño");
var papel = cuadrito.getContext("2d");
var color = document.getElementById("color");
var ancho = document.getElementById("ancho");
var link = document.getElementById("descargar");
var borrador = document.getElementById("borrador")
var x = 150 ;
var y = 150 ;
var xr;
var yr;

 

var estado;


//Objetos

var teclas =
{
    UP:38,
    RIGTH:39,
    LEFT:37,
    DOWN:40


};



//AddEventListeners

cuadrito.addEventListener("mousedown" , apretarRaton);
cuadrito.addEventListener("mousemove", moverRaton2);
cuadrito.addEventListener("mouseup", soltarRaton3);
borrador.addEventListener("click", borrar)
document.addEventListener("keydown" ,dibujarTeclado);




 //Funciones



function dibujarLinea (color, xComienzo, yComienzo, xFinal, yFinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = parseInt(ancho.value);
    lienzo.moveTo(xComienzo, yComienzo);
    lienzo.lineTo(xFinal, yFinal);
    
    lienzo.stroke()
    lienzo.closePath();
};




function dibujarTeclado(evento)
{
    console.log(evento)
    let movimiento = 10;
    let colorcito = color.value;
    switch(evento.keyCode)
    {
        
        case teclas.DOWN:
            dibujarLinea(colorcito, x,y,x,y + movimiento,papel)
            y = y + movimiento;
            console.log("abajo")
            break;
        case teclas.RIGTH:
            dibujarLinea(colorcito, x,y,x + movimiento,y,papel)
            x = x + movimiento;
            console.log("derecha")
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x,y,x - movimiento,y,papel)
            x = x - movimiento;
            console.log("izquierda")
            break;
        case teclas.UP:
            dibujarLinea(colorcito, x,y,x,y - movimiento,papel)
            y = y - movimiento;
            console.log("arriba")
            break;  
    }

};

function borrar (evento)
{
    
    console.log("funcion borrar");
    estado = 2;
}

function apretarRaton (evento)
{
    console.log("estoy apretado")
    estado = 1;
xr = evento.layerX;
yr = evento.layerY;

};

function moverRaton2(evento)
{
 let colorcito = color.value;

    if(estado == 1)
{
    console.log("Estas Dibujando");
dibujarLinea(colorcito, xr,yr, evento.layerX, evento.layerY,papel);

} else if (estado == 2)
{
console.log("estas borrando")
console.log(evento)
dibujarLinea("white", xr,yr, evento.layerX, evento.layerY, papel);
}
else 
{
    xr = evento.layerX;
    yr = evento.layerY;
}

};

function soltarRaton3 (evento)
{
    estado = 0;
};

function descargando ()
{}

