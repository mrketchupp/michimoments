console.log('Mommy Beidou ⚡');

import "@components/buttons/likeButton.js";
import "@components/img/contraPhoto.js";
import "@styles/main.css";
import template from "./template.js";

const urlAPI = 'https://api.thecatapi.com/v1';
const keyAPI = 'api_key=live_YdlTv2yFVcGzVVJNJBw0U6pYUbIEnUKgU7AV1I6YE1h838M3EybTMIOQTl5GMpQU'

const discoverElements = [];
const favoritesElements = [];

// Convertir los datos a json
const fetchData = async (urlAPI, params)=> {
  try {
    const response = await fetch(urlAPI, params);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// Añadir al DOM las fotos random de gatitos
const useData = async (urlAPI)=> {
  try {
    const data = await fetchData(`${urlAPI}/images/search?limit=6&${keyAPI}`);
    template("discover", data, discoverElements);
  } catch (error) {
    console.log(error)
  }
}

// Añadir al DOM las fotos favoritas de gatitos
const favUseData = async (urlAPI)=> {
  try {
    const response = await fetchData(`${urlAPI}/favourites?${keyAPI}`);
    const data = [];
    response.forEach(item => {
      data.push(item.image);
    })
    template('favorites', data, favoritesElements);
    data.length = 0;
  } catch (error) {
    console.log(error);
  }
}

// Cargar las fotos random de gatitos
const newImg = (urlAPI)=> {
  const nav = document.querySelector('nav');
  const discover = nav.querySelector('span:first-child');
  discover.addEventListener('click', ()=>{
    const catImg = document.querySelectorAll('.image');
    [...catImg].forEach(item =>{
      item.remove();
    })
    discoverElements.splice(0, discoverElements.length);
    useData(urlAPI);
  });
}

// Cargar las fotos favoritas de gatitos
const loadFavImg = async (urlAPI)=> {
  const nav = document.querySelector('nav');
  const favorites = nav.querySelector('span:nth-child(2)');
  favorites.addEventListener('click', ()=> {
    const catImg = document.querySelectorAll('.image');
    [...catImg].forEach(item =>{
      item.remove();
    })
    favoritesElements.splice(0, favoritesElements.length);
    favUseData(urlAPI);
  })
}


// Guardar una foto en favoritos
const addFavImg = (urlAPI)=> {
  const discover = document.querySelector('#discover');
  discover.addEventListener('click', async (event)=> {
    if (event.target.closest('.like')) {
      const id = event.target.closest('.like').dataset.id;
      const data = await fetchData(`${urlAPI}/favourites?${keyAPI}`, {method: 'POST', headers: {'Content-Type': 'application/json',}, body: JSON.stringify({ image_id: id }),})
      console.log(data);
      }
  })
}

useData(urlAPI);
newImg(urlAPI);
addFavImg(urlAPI);
loadFavImg(urlAPI);

