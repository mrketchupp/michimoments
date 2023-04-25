console.log('Mommy Beidou ⚡');

import "@components/buttons/likeButton.js";
import "@components/img/contraPhoto.js";
import "@styles/main.css";
import template from "./template.js";
import templateFav from "./template_fav.js";
import template_Upload from "./template_upload.js";

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
    const data = await fetchData(`${urlAPI}/images/search?limit=10`, {method: 'GET', headers: { 'X-API-KEY': 'live_YdlTv2yFVcGzVVJNJBw0U6pYUbIEnUKgU7AV1I6YE1h838M3EybTMIOQTl5GMpQU' }});
    template("discover", data, discoverElements);
  } catch (error) {
    console.log(error)
  }
}

// Añadir al DOM las fotos favoritas de gatitos
const favUseData = async (urlAPI)=> {
  try {
    const response = await fetchData(`${urlAPI}/favourites`, { method: 'GET', headers: { 'X-API-KEY': 'live_YdlTv2yFVcGzVVJNJBw0U6pYUbIEnUKgU7AV1I6YE1h838M3EybTMIOQTl5GMpQU' } });
    const data = [];
    response.forEach(item => {
      const { id: gato_id, image: { id, url } } = item;
      data.push({ gato_id, id, url });
    });
    templateFav('favorites', data, favoritesElements);
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
  const favorites = nav.querySelector('span:nth-child(3)');
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
      const data = await fetchData(`${urlAPI}/favourites`, {method: 'POST', headers: {'Content-Type': 'application/json', 'X-API-KEY': 'live_YdlTv2yFVcGzVVJNJBw0U6pYUbIEnUKgU7AV1I6YE1h838M3EybTMIOQTl5GMpQU',}, body: JSON.stringify({ image_id: id }),})
      console.log(data);
      if (data.message === 'SUCCESS') {
        const likeHeart = event.target.closest('.like');
        console.log(likeHeart);
        likeHeart.querySelector('svg.feather-heart').style.stroke = '#f91880';
        likeHeart.querySelector('svg.feather-heart').style.fill = '#f91880';
        }
      }
  })
}

// Borrar una foto de favoritos
const delFavImg = (urlAPI)=> {
  const favorites = document.querySelector('#favorites');
  favorites.addEventListener('click', async (event)=> {
    if (event.target.closest('.like')) {
      const id = event.target.closest('.like').dataset.id;
      const data = await fetchData(`${urlAPI}/favourites/${id}?${keyAPI}`, {method: 'DELETE',})
      console.log(data);
      if (data.message === 'SUCCESS') {
        const likeHeart = event.target.closest('.like');
        const imageContainer = likeHeart.closest('.image');
        console.log(likeHeart);
        likeHeart.querySelector('svg.feather-heart').style.stroke = '#71767B';
        likeHeart.querySelector('svg.feather-heart').style.fill = 'none';
        imageContainer.remove();
        }
      }
  })
}

// Cargar menu de subir foto
const publicImg = ()=> {
  const nav = document.querySelector('nav');
  const upload = nav.querySelector('span:nth-child(2)');
  upload.addEventListener('click', async ()=>{
    const catImg = document.querySelectorAll('.image');
    [...catImg].forEach(item =>{
      item.remove();
    })
    await template_Upload();
    previewImg();
    uploadImg(urlAPI);
  });
}

// Previsualiar la foto seleccionada
const previewImg = ()=> {
  const input = document.querySelector('#file');
  const img = document.querySelector('.imgPreview');

  input.addEventListener('change', ()=> {
    const archivos = input.files;
    if (!archivos || !archivos.length) {
      img.src = '';
      return;
    }
    const gatoImg = archivos[0];
    const url = URL.createObjectURL(gatoImg);
    img.src = url;
  })
}

// Subir una foto a la API
const uploadImg = async (urlAPI)=> {
  const upload = document.querySelector('#upload');
  upload.addEventListener('click', async (event)=>{
    if (event.target.closest('.uploadButton')) {
      const form = event.target.closest('form');
      console.log(form);
      const formData = new FormData(form);
      console.log(formData.get('file'));
      const data = await fetchData(`${urlAPI}/images/upload`, { method: 'POST', headers: { 'X-API-KEY': 'live_YdlTv2yFVcGzVVJNJBw0U6pYUbIEnUKgU7AV1I6YE1h838M3EybTMIOQTl5GMpQU', }, body: formData, })
      console.log(data);
      if (data.approved === 1) {
        console.log('Foto de gato Subida :)')
      }
    }
  })
}

useData(urlAPI);
newImg(urlAPI);
addFavImg(urlAPI);
loadFavImg(urlAPI);
delFavImg(urlAPI);
publicImg()