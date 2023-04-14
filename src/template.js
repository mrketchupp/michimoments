// Web components
import "@components/buttons/likeButton.js";
import "@components/img/contraPhoto.js"
import feather from 'feather-icons';



const template = (container, listImages, arrayImg)=> {
  // Contenedor
  const section = document.querySelector(`#${container}`)
  // Crear la plantilla
  listImages.forEach(item => {
    const marco = document.createElement("div");
    const photo = document.createElement("contra-photo");
    const like = document.createElement("like-button");
    const icon = document.createElement("i");

    icon.setAttribute("data-feather", "heart");
    icon.setAttribute("stroke", "#71767B");
    icon.setAttribute("slot", "icon");
    like.append(icon);

    photo.setAttribute("url", item.url);
    photo.setAttribute("alt", "random cute cat");

    marco.className = "image";
    marco.append(photo, like);
    arrayImg.push(marco);
  });
  section.append(...arrayImg);
  feather.replace();
}

export default template;

