const topSideContainer = document.querySelector(".image-container");
const addButton = document.querySelector(".add-button");
const declineButton = document.querySelector(".decline-button");
const detailsButton = document.querySelector(".details-container");
const addAnimationText = document.querySelector(".feedbackClickAdd");
const nextAnimationText = document.querySelector(".feedbackClickNext");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
let decor = document.querySelector(".decor");
let daytrips = document.querySelector(".daytrips");
let recipes = document.querySelector(".recipes");
let restaurants = document.querySelector(".restaurants");
let allCategory = document.querySelector(".allCategory");
let hikes = document.querySelector(".hiking");
let recentlyAddedUL = document.querySelector(".recently-Added-List");
let recentlyAddedImg = document.querySelector(".recently-added-img");
let currentIndex = 0;
let adventuresArray = [];
const yesArray = [
  "Add!",
  "Yup!",
  "Yeah!",
  "Awesome!",
  "cool!",
  "Another!",
  "Nice!",
];
const nextArray = [
  "Nope!",
  "No!",
  "Next!",
  "eh..",
  "Almost!",
  "Never..",
  "Close!",
];

getAdventures().then((data) => {
  adventuresArray = shuffle(data.adventures);
  //console.log(data);

  topSideContainer.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}"> </a>`;
  title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
  >`;
  description.innerHTML = `${adventuresArray[currentIndex].description}`;
  detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
>`;

  document.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
      //right
      addAnimationText.innerHTML = yesArray[getRandomInt(yesArray.length)];

      $(addAnimationText).effect("puff", 1000);
      currentIndex++;
      topSideContainer.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}"> </a>`;

      title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
      >`;
      description.innerHTML = `${adventuresArray[currentIndex].description}`;
      detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;

      $(".card-container").effect("bounce", {
        direction: "right",
        distance: 500,
        times: 1,
      });

      recentlyAddedUL.insertAdjacentHTML(
        "afterbegin",
        `<li class="recently-added-img">
          <a href="${adventuresArray[currentIndex - 1].url}" target="_blank">
            <img
              src="${adventuresArray[currentIndex - 1].image}"
              alt="${adventuresArray[currentIndex - 1].title}"
            />
          </a>
        </li>`
      );
    } else if (e.keyCode == "37") {
      //left
      nextAnimationText.innerHTML = nextArray[getRandomInt(nextArray.length)];
      $(nextAnimationText).effect("puff", 1000);
      currentIndex++;
      topSideContainer.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}"> </a>`;

      title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
      >`;
      description.innerHTML = `${adventuresArray[currentIndex].description}`;
      detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;

      $(".card-container").effect("bounce", {
        direction: "left",
        distance: 500,
        times: 1,
      });
    }
  });

  addButton.addEventListener("click", function () {
    addAnimationText.innerHTML = yesArray[getRandomInt(yesArray.length)];
    $(addAnimationText).effect("puff", 1000);
    currentIndex++;
    topSideContainer.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}"> </a>`;

    title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
    >`;
    description.innerHTML = `${adventuresArray[currentIndex].description}`;
    detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
    >`;

    $(".card-container").effect("bounce", {
      direction: "right",
      distance: 500,
      times: 1,
    });

    recentlyAddedUL.insertAdjacentHTML(
      "afterbegin",
      `<li class="recently-added-img">
        <a href="${adventuresArray[currentIndex - 1].url}" target="_blank">
          <img
            src="${adventuresArray[currentIndex - 1].image}"
            alt="${adventuresArray[currentIndex - 1].title}"
          />
        </a>
      </li>`
    );
  });

  /***********decline********* */
  declineButton.addEventListener("click", function () {
    nextAnimationText.innerHTML = nextArray[getRandomInt(nextArray.length)];
    $(nextAnimationText).effect("puff", 1000);
    currentIndex++;
    topSideContainer.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}"> </a>`;

    title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
    >`;
    description.innerHTML = `${adventuresArray[currentIndex].description}`;
    detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
    >`;

    $(".card-container").effect("bounce", {
      direction: "left",
      distance: 500,
      times: 1,
    });
  });
});

async function getAdventures() {
  const adventuresResponse = await fetch(
    "http://127.0.0.1:3000/api/v1/adventures"
  );
  const adventuresdata = adventuresResponse.json();
  return adventuresdata;
}

async function getAdventuresUrl(url) {
  const adventuresResponse = await fetch(url);
  const adventuresdata = adventuresResponse.json();
  return adventuresdata;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
