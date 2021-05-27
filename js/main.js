const topSideContainer = document.querySelector(".image-container");
const addButton = document.querySelector(".add-button");
const declineButton = document.querySelector(".decline-button");
const detailsButton = document.querySelector(".details-container");
const addAnimationText = document.querySelector(".feedbackClickAdd");
const nextAnimationText = document.querySelector(".feedbackClickNext");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
let currentIndex = 0;
const yesArray = ["Add!", "Yup!", "Yeah!", "Awesome!", "cool!", "Another!"];
const nextArray = ["Nope!", "No!", "Next!", "eh..", "Almost!", "Never"];

getAdventures().then((data) => {
  const adventuresArray = shuffle(data.adventures);

  topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}">`;
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
      topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}">`;

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
    } else if (e.keyCode == "37") {
      //left
      nextAnimationText.innerHTML = nextArray[getRandomInt(nextArray.length)];
      $(nextAnimationText).effect("puff", 1000);
      currentIndex++;
      topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}">`;

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
    0;
  });

  addButton.addEventListener("click", function () {
    addAnimationText.innerHTML = yesArray[getRandomInt(yesArray.length)];
    $(addAnimationText).effect("puff", 1000);
    currentIndex++;
    topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}">`;

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
  });

  /***********decline********* */
  declineButton.addEventListener("click", function () {
    nextAnimationText.innerHTML = nextArray[getRandomInt(nextArray.length)];
    $(nextAnimationText).effect("puff", 1000);
    currentIndex++;
    topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[currentIndex].image}" alt="${adventuresArray[currentIndex].title}">`;

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

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
