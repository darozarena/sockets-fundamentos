var socket = io();

// Escuchar info
socket.on("connect", () => {
    console.log("Conectado al servidor");
});

socket.on("disconnect", () => {
    console.log("Perdimos la conexión");
});

socket.on("enviarMensaje", message => {
    console.log("Servidor: ", message);
});

// Emitir info
socket.emit(
    "enviarMensaje", {
        usuario: "David",
        mensaje: "Hola Mundo"
    },
    resp => {
        console.log("Respuesta server:", resp);
    }
);