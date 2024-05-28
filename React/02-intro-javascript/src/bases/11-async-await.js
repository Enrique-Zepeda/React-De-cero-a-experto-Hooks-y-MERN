// Asi es como se hace un fetch sin async
// const getImagePromesa = () => new Promise (resolve => resolve('https://dasfasf.com'))
// getImagePromesa().then(console.log)

//Async
const getImage = async () => {
  try {
    const apiKey = "3MkA2z1D9m0F3Ufae09jpjwYz7coiU4i";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.warn(error);
  }
};

getImage();
