// *** LIGHTBOX ***
// Choisis l'élément avec l'ID "lightbox"
const lightBox = document.querySelector("#lightbox");

// Prend l'image à l'intérieur de "lightbox"
const image = document.querySelector("#lightbox img");


// Surveille les clics sur toute la page
document.addEventListener("click", function (e) {
  // Vérifie si l'élément cliqué a l'attribut "data-full-img" ou si la lightbox est ouverte
  if (e.target.matches("[data-full-img]") || lightBox.open) {
    // Ferme la lightbox si elle est ouverte
    if (lightBox.open) {
      lightBox.close();
    } else {
      // Sinon, ouvre la lightbox
      lightBox.showModal();
    }
    image.src = e.target.dataset.fullImg;
  }
});




