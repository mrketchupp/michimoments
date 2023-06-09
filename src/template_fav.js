// Web components
import "@components/buttons/likeButton.js";
import "@components/img/contraPhoto.js"
import feather from 'feather-icons';



const templateFav = (container, arrayUrls, arrayElements)=> {
  // Contenedor
  const section = document.querySelector(`#${container}`)
  // Crear la plantilla
  arrayUrls.forEach(item => {
    const marco = document.createElement("div");
    const photo = document.createElement("contra-photo");
    const like = document.createElement("like-button");
    const icon = document.createElement("i");

    icon.setAttribute("data-feather", "heart");
    icon.setAttribute("stroke", "#f91880");
    icon.setAttribute("fill", "#f91880");
    icon.setAttribute("slot", "icon");

    like.classList = "like";
    like.dataset.id = item.gato_id;
    like.append(icon);

    photo.setAttribute("url", item.url);
    photo.setAttribute("alt", "random cute cat");

    marco.className = "image";
    marco.append(photo, like);
    arrayElements.push(marco);
  });
  section.append(...arrayElements);
  feather.replace();
}

export default templateFav;

