import projectInfo from "./projectInfo.js";

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
        `
)
.join('');

for (let i = 0; i <= projectInfo.length; i ++) {
    if (i % 2 === 1) {
      document.querySelectorAll('.card')[i].classList.add('order');
    }
  }