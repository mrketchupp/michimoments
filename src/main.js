console.log('Mommy Beidou ⚡');
import "./components/buttons/largeButton.js";

const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=live_YdlTv2yFVcGzVVJNJBw0U6pYUbIEnUKgU7AV1I6YE1h838M3EybTMIOQTl5GMpQU';
const section = document.querySelector('section');
const images = [];

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
    const data = await fetchData(urlAPI);
    data.forEach(item => {
      const img = document.createElement('img');
      img.className = 'w-3/4 sm:w-2/4 h-fit mx-auto mt-4 border-none rounded-md bg-auto';
      img.src = `${item.url}`;
      images.push(img);
    });

    section.append(...images);

  } catch (error) {
    console.log(error)
  }
}

const newImg = (urlAPI)=> {
  const button = document.querySelector('button');
  button.addEventListener('click', ()=>{
    const catImg = document.querySelectorAll('img');
    [...catImg].forEach(item =>{
      item.remove();
      images.pop();
    })
    useData(urlAPI)
  });
}

useData(urlAPI);
newImg(urlAPI);