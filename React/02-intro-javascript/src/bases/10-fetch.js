const apiKey = "3MkA2z1D9m0F3Ufae09jpjwYz7coiU4i";
const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);
//peticiones en cadena
peticion
  .then((resp) => resp.json())
  //en ves de poner console.log(data.data) podemos destructurar para poder sacar la data
  .then(({ data }) => {
    //En ves de ponerle nombre a la variable podemos destructurar quitando el ultimo .url o el . lo que sea para mostrarlo
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
