
const request = (method, url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send();
  });
};


const getGiph = () => {
  const gif = request('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');

  return gif;
};


export default getGiph;
