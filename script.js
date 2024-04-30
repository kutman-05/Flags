let block = document.querySelector(".block");
let searchinput = document.querySelector(".searchinput");
let searchBtn = document.querySelector(".searchBtn");
let all = document.querySelector(".all");
let optionOne = document.querySelector(".optionOne");
let optionTwo = document.querySelector(".optionTwo");
let population = document.querySelector(".population");
let select = document.querySelector("select");
let API = "https:/restcountries.com/v3.1/all";

getApiData();
function getApiData() {
  fetch(API)
    .then((data) => data.json())
    .then((flags) => {
      flags.sort((a, b) => a.name.common.localeCompare(b.name.common));
      displayCountries(flags);
    });
}

function displayCountries(flags) {
  block.innerHTML = "";
  flags.forEach((el) => {
    let box = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h3");
    let population = document.createElement("p");
    let region = document.createElement("p");
    let subregion = document.createElement("p");
    box.classList.add("box");

    img.src = el.flags.png;
    img.alt = el.flags.alt;
    name.innerText = "Country:" + el.name.common;
    population.innerText = "Population:" + el.population;
    region.innerText = "Region:" + el.region;
    subregion.innerText = "Subregion" + el.subregion;

    box.append(img);
    box.append(name);
    box.append(population);
    box.append(region);
    box.append(subregion);
    block.append(box);
  });
}

select.addEventListener("change", (event) => {
  let selectedValue = event.target.value;

  if (selectedValue === "az") {
    getApiData();
  } else if (selectedValue === "za") {
    getApiNewData();
  } else if (selectedValue === "population") {
    fetch(API)
      .then((data = data.json()))
      .then((flags) => {
        flags.sort((a, b) => b.population - a.population);
        displayCountries(flags);
      });
  }
});
function searchOneFlag() {
  fetch(`https://restcountries.com/v3.1/name/${searchinput.value}`)
    .then((data) => data.json())
    .then((oneFlag) => {
      oneFlag.map((el) => {
        let box = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let population = document.createElement("p");
        let region = document.createElement("p");
        let subregion = document.createElement("p");
        let capital  = document.createElement('p')


        box.classList.add("box");

        img.src = el.flags.png;
        img.alt = el.flags.alt;
        name.innerText = "Country:" + el.name.common;
        population.innerText = "Population:" + el.population;
        region.innerText = "Region:" + el.region;
        subregion.innerText = "Subregion" + el.subregion;
        capital.innerText = el.capital;

        box.append(img);
        box.append(name);
        box.append(population);
        box.append(region);
        box.append(subregion);
        block.append(box);
        block.append

        searchinput.value = "";
      });
    });
}

// searchBtn.addEventListener("click", () => {
//   bllock.innerHTML = "";
//   searchOneFlag();
// });
// all.addEventListener("click", () => {
//   block.innerHTML = "";
//   getApiData();
// });
