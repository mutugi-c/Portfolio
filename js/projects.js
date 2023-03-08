import projectInfo from './projectInfo.js';

document.querySelector('#works').innerHTML = projectInfo.map(
  (info) => `
        <!--card  -->
        <div class="card">
          <img
            class="card__image"
            src=${info.featuredImage}
            alt="Image for the tonic project indicating 'From high school dropout to product developer at Facebook and Lyft: Tanner Christensen'"
          />
          <img
            class="card__image-desktop"
            src="images/project1_desktop.png"
            alt="Desktop version image for Nature project indicating 'Catchy look inspiring bionic forms $35'"
          />
          <div class="card__body">
            <h2 class="card__heading">${info.name}</h2>
            <div class="card__details">
              <h4>${info.author}</h4>
              <div>
                <ul class="card__list">
                  <li class="card__role">${info.stack}</li>
                  <li class="card__year">${info.year}</li>
                </ul>
              </div>
            </div>
            <p class="card__text">
             ${info.description}
            </p>
            <div class="card__languages">
              <button class="btn--primary">${info.technologies[0]}</button>
              <button class="btn--primary">${info.technologies[1]}</button>
              <button class="btn--primary">${info.technologies[2]}</button>
            </div>
            <div class="card__btn-wrapper">
            <button type="button" class="btn--secondary card__btn">See Project</button>
            </div>
          </div>
        </div>
        `,
)
  .join('');

for (let i = 0; i <= projectInfo.length; i += 1) {
  if (i % 2 === 1) {
    document.querySelectorAll('.card')[i].classList.add('order');
  }
}

  //   Popup
document.querySelector('#popups').innerHTML = projectInfo.map(
  (info) => `
    <div class="popup-container">
      <div class="popup">
        <div class="card__body popup--body">
          <div class="popup--header">
            <h2 class="card__heading popup--heading">${info.name}</h2>
            <img class="popup__exit" src="images/x_icon.svg" alt="" />
          </div>

          <div class="card__details">
            <h4>${info.author}</h4>
            <div>
              <ul class="card__list">
                <li class="card__role">${info.stack}</li>
                <li class="card__year">${info.year}</li>
              </ul>
            </div>
          </div>

          <img
            class="card__image popup--img"
            src=${info.featuredImage}
            alt="Tonic project image with the heading 'GYMFIT', and a lady doing yoga stretching"
          />
          <img
            class="card__image-desktop popup--img"
            src=${info.featuredImage}
            alt="Desktop image version for the Tonic project indicating 'From high school dropout to product developer at Facebook and Lyft: Tanner Christensen'"
          />

          <div class="popup--info">
            <p class="card__text">
            ${info.description}
            </p>
            <div class="tags-buttons">
              <div class="card__languages popup--tags">
                <button class="btn--primary">${info.technologies[0]}</button>
                <button class="btn--primary">${info.technologies[1]}</button>
                <button class="btn--primary">${info.technologies[2]}</button>
              </div>
              <div class="card__btn popup--buttons">
                <a href="${info.liveVersion}" class="btn--secondary popup--btn" target="_blank" rel="noopener noreferrer"
                  >See Live <img src="images/live.svg" alt=""
                /></a>
                <a href="${info.source}" class="btn--secondary popup--btn" target="_blank" rel="noopener noreferrer"
                  >See Source <img src="images/github_blue.svg" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
).join('');

// Event listeners for a popup on button click
const projectButtons = Array.from(document.querySelectorAll('.card__btn'));
const popups = Array.from(document.querySelectorAll('.popup-container'));

const popupButtonevent = projectButtons.map((btn, i) => [btn, popups[i]]);
popupButtonevent.forEach((group) => {
  group[0].addEventListener('click', () => {
  group[1].style.display = 'block';
  });
});

// Add an event listener to close a popup
document.querySelectorAll('.popup__exit').forEach((exit) => {
  exit.addEventListener('click', () => {
    document.querySelectorAll('.popup-container').forEach((popup) => {
      popup.style.display = 'none';
    });
  });
});