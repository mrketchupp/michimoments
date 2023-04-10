console.log('Mommy Beidou ⚡');

const urlAPI = 'https://api.thecatapi.com/v1/images/search';

const fetchData = async (urlAPI)=> {
  try {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const useData = async (urlAPI)=> {
  try {
    const img = document.querySelector('img');
    const data = await fetchData(urlAPI);
    img.src = `${data[0].url}`;

  } catch (error) {
    console.log(error)
  }
}

const newImg = (urlAPI)=> {
  const button = document.querySelector('button');
  button.addEventListener('click', ()=>{useData(urlAPI)});
}

useData(urlAPI);
newImg(urlAPI);
