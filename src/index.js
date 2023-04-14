console.log('Mommy Beidou ⚡');

import "@components/buttons/likeButton.js";
import "@components/img/contraPhoto.js";

import "@styles/main.css";

import template from "./template.js";
const urlAPI = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_YdlTv2yFVcGzVVJNJBw0U6pYUbIEnUKgU7AV1I6YE1h838M3EybTMIOQTl5GMpQU';
const images = [];

// Convertir json la consulta a la API
const fetchData = async (urlAPI)=> {
  try {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const useData = async (urlAPI, arrayImg)=> {
  try {
    const data = await fetchData(urlAPI);
    template("discover", data, arrayImg);
  } catch (error) {
    console.log(error)
  }
}

const newImg = (urlAPI)=> {
  const nav = document.querySelector('nav');
  const discover = nav.querySelector('span:first-child');
  discover.addEventListener('click', ()=>{
    const catImg = document.querySelectorAll('.image');
    [...catImg].forEach(item =>{
      item.remove();
    })
    images.splice(0, images.length);
    useData(urlAPI, images);
  });
}

useData(urlAPI, images);
newImg(urlAPI);