// get genres list from API

const getGenresList = async () => {
  try {
    const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/genres`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

const renderGenres = async () => {
  try {
    const data = await getGenresList();
    const ulGenresList = document.getElementById("game-genre");
    ulGenresList.innerHTML = "";
    data.data.forEach((data) => {
      const x = document.createElement("li");
      x.textContent = `${data.name}`;
      ulGenresList.appendChild(x);
    });
  } catch (err) {
    console.log("err", err);
  }
};

renderGenres();

// get all games by Genres from API

const getGamesbyGenres = async (value) => {
  try {
    const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?genres=${value}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

// fetch data to the gallery

const renderGamesbyGenres = async (value) => {
  try {
    const data = await getGamesbyGenres(value);
    const display = document.getElementById("display");
    display.innerHTML = "";
    data.data.forEach((data) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("wrapper");
      newDiv.innerHTML = `<div class="gameinfo">
        <div class="gameicon">
          <img src="${data.header_image}" width="100%" id="${data.appid}" />
        </div>
  <div class="detail">
    <div class="gametitle">${data.name}</div>
    <div class="gameprice">$${data.price}</div>
  </div>`;
      display.appendChild(newDiv);
    });
  } catch (err) {
    console.log("err", err);
  }
};

const genre = document.getElementById("game-genre");
genre.addEventListener("click", async (e) => {
const value = e.target.innerText;
const dataGamesbyGenres = await getGamesbyGenres(value);
renderGamesbyGenres(value);
});

// get all Games from API

const getAllGames = async () => {
  try {
    const limit = 10;
    let page = 0;
    const url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?limit=${limit}?page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

getAllGames();

const renderAllGames = async () => {
  try {
    const data = await getAllGames();
    const display = document.getElementById("display");
    display.innerHTML = "";
    data.data.forEach((data) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("wrapper");
      newDiv.innerHTML = `<div class="gameinfo">
      <div class="gameicon">
      <img src="${data.header_image}" width="100%" id="${data.appid}"/>
      </div>
  <div class="detail">
    <div class="gametitle">${data.name}</div>
    <div class="gameprice">$${data.price}</div>
  </div>`;
      display.appendChild(newDiv);
    });
  } catch (err) {
    console.log("err", err);
  }
};

renderAllGames();

// search for game
let queryString = "";
const keyword = document.getElementById("store-search");
const searchButton = document.querySelector(".search-btn");

const getGamebySearches = async (queryString) => {
  try {
    const url = `https://steam-api-mass.onrender.com/games?q=${queryString}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("err", err);
  }
};

searchButton.addEventListener("click", async () => {
  queryString = keyword.value;
  const dataGamebySearches = await getGamebySearches(queryString);
  renderGamebySearches(queryString);
});

// push Games by searches to banner

const renderGamebySearches = async (queryString) => {
  try {
    const data = await getGamebySearches(queryString);
    const display = document.getElementById("display");
    display.innerHTML = "";
    data.data.forEach((data) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("wrapper");
      newDiv.innerHTML = `<div class="gameinfo">
        <div class="gameicon">
          <img src="${data.header_image}" width="100%" id="${data.appid}" />
        </div>
        <div class="detail">
          <div class="gametitle">${data.name}</div>
          <div class="gameprice">$${data.price}</div>
        </div>`;
      display.appendChild(newDiv);
    });
  } catch (err) {
    console.log("err", err);
  }
};
