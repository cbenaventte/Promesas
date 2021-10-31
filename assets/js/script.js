// funcion asincrona que contiene url
const getTitAlbun = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    //bloque  try/catch
    try {
        const response = await fetch(url);
        const datos = await response.json();
        datos.forEach((elemento) => {
            if (elemento.id <= 20) {
                console.log(elemento.title);
            }
        });
    } catch (err) {
        console.log(err);
    }

}

// funcion que retorna promesa despues de 3 seg
const muestraMensaje = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Información Enviada.')
    }, 3000);
});


//  función asíncrona que permite recibir el mensaje de la promesa y mostrarlo por consola
const recibeMensaje = async () => {
    getTitAlbun();
    const mensaje = await muestraMensaje();
    console.log(mensaje);
}
recibeMensaje();
