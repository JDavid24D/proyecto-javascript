const tarjeta = document.getElementById("tarjeta");

document.getElementById("azul").addEventListener("click", function () {
  tarjeta.style.backgroundColor = "blue";
});

document.getElementById("verde").addEventListener("click", function () {
  tarjeta.style.backgroundColor = "green";
});

document.getElementById("rojo").addEventListener("click", function () {
  tarjeta.style.backgroundColor = "red";
});

document.getElementById("restablecer").addEventListener("click", function () {
  tarjeta.style.backgroundColor = "white";
});