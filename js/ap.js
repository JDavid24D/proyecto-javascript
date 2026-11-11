//1. Buscar elementos del DOM.
const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");
const error = document.querySelector("#error");

//2. Escuchar el envío del formulario.
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que la página se recargue

  //3. Validar que el campo no esté vacío (ni solo espacios).
  const valor = nombre.value.trim();

  if (valor === "") {
    error.textContent = "El nombre es obligatorio.";
    mensaje.textContent = "¡Bienvenido a la clase!";
    nombre.focus();
    return; // Detiene aquí: no muestra el saludo
  }

  //4. Si es válido, mostrar el mensaje.
  error.textContent = "";
  mensaje.textContent = `¡Bienvenido a la clase, ${valor}!`;
});