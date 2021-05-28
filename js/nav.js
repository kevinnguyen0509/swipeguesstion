decor.addEventListener("click", function () {
  getAdventuresUrl("http://127.0.0.1:3000/api/v1/adventures/homedecor").then(
    (data) => {
      adventuresArray = [];
      currentIndex = 0;
      adventuresArray = shuffle(data.adventures);
      topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}">`;
      title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
        >`;
      description.innerHTML = `${adventuresArray[currentIndex].description}`;
      detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;
    }
  );

  decor.classList.add("active");
  allCategory.classList.remove("active");
  daytrips.classList.remove("active");
  recipes.classList.remove("active");
  restaurants.classList.remove("active");
  hikes.classList.remove("active");
});

allCategory.addEventListener("click", function () {
  getAdventures().then((data) => {
    adventuresArray = [];
    currentIndex = 0;
    adventuresArray = shuffle(data.adventures);
    topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}">`;
    title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
        >`;
    description.innerHTML = `${adventuresArray[currentIndex].description}`;
    detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;
  });

  decor.classList.remove("active");
  allCategory.classList.add("active");
  daytrips.classList.remove("active");
  recipes.classList.remove("active");
  restaurants.classList.remove("active");
  hikes.classList.remove("active");
});

daytrips.addEventListener("click", function () {
  getAdventuresUrl("http://127.0.0.1:3000/api/v1/adventures/daytrips").then(
    (data) => {
      adventuresArray = [];
      currentIndex = 0;
      adventuresArray = shuffle(data.adventures);
      topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}">`;
      title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
        >`;
      description.innerHTML = `${adventuresArray[currentIndex].description}`;
      detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;
    }
  );

  decor.classList.remove("active");
  allCategory.classList.remove("active");
  daytrips.classList.add("active");
  recipes.classList.remove("active");
  restaurants.classList.remove("active");
  hikes.classList.remove("active");
});

recipes.addEventListener("click", function () {
  getAdventuresUrl("http://127.0.0.1:3000/api/v1/adventures/cooking").then(
    (data) => {
      adventuresArray = [];
      currentIndex = 0;
      adventuresArray = shuffle(data.adventures);
      topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}">`;
      title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
        >`;
      description.innerHTML = `${adventuresArray[currentIndex].description}`;
      detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;
    }
  );

  decor.classList.remove("active");
  allCategory.classList.remove("active");
  daytrips.classList.remove("active");
  recipes.classList.add("active");
  restaurants.classList.remove("active");
  hikes.classList.remove("active");
});

restaurants.addEventListener("click", function () {
  getAdventuresUrl("http://127.0.0.1:3000/api/v1/adventures/restaurants").then(
    (data) => {
      adventuresArray = [];
      currentIndex = 0;
      adventuresArray = shuffle(data.adventures);
      topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}">`;
      title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
        >`;
      description.innerHTML = `${adventuresArray[currentIndex].description}`;
      detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;
    }
  );

  decor.classList.remove("active");
  allCategory.classList.remove("active");
  daytrips.classList.remove("active");
  recipes.classList.remove("active");
  restaurants.classList.add("active");
  hikes.classList.remove("active");
});

hikes.addEventListener("click", function () {
  getAdventuresUrl("http://127.0.0.1:3000/api/v1/adventures/hiking").then(
    (data) => {
      adventuresArray = [];
      currentIndex = 0;
      adventuresArray = shuffle(data.adventures);
      topSideContainer.innerHTML = `<img class="card-image" src="${adventuresArray[0].image}" alt="${adventuresArray[0].title}">`;
      title.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank">${adventuresArray[currentIndex].title}</a
        >`;
      description.innerHTML = `${adventuresArray[currentIndex].description}`;
      detailsButton.innerHTML = `<a href="${adventuresArray[currentIndex].url}" target="_blank"><li class="details-button"><i class="flaticon-information"></i></li></a
      >`;
    }
  );

  decor.classList.remove("active");
  allCategory.classList.remove("active");
  daytrips.classList.remove("active");
  recipes.classList.remove("active");
  restaurants.classList.remove("active");
  hikes.classList.add("active");
});
