function openPopup(event) {
  event.preventDefault();
  var btnInfo = event.target;
  var card = btnInfo.closest('.card');
  var moreInfo = card.querySelector('.more-info').innerHTML;

  var popupContent = document.querySelector('.popup-content');
  popupContent.innerHTML = moreInfo;

  var popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function closePopup(event) {
  event.preventDefault();
  var popup = event.target.closest('.popup');
  popup.style.display = 'none';
}

const darkLightToggle = document.getElementById("darkLight");
const body = document.body;

darkLightToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Obtener el contenedor de todas las tarjetas
const allCardsContainer = document.getElementById('all-cards');

// Obtener el contenedor para las tarjetas actualizadas
const updatedCardsContainer = document.getElementById('updated-cards');

// Obtener todas las tarjetas
const cards = allCardsContainer.getElementsByClassName('card');

// Filtrar las tarjetas actualizadas
const updatedCards = Array.from(cards).filter(card => card.querySelector('.actualizado'));

// Duplicar las tarjetas actualizadas y agregarlas al contenedor "updated-cards"
updatedCards.forEach(card => {
  const clonedCard = card.cloneNode(true);
  updatedCardsContainer.appendChild(clonedCard);
});
