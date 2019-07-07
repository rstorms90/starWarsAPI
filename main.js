window.addEventListener('DOMContentLoaded', (e) => {

  const API = "https://swapi.co/api";

  // API Call to get characters
  function getCharacters() {
    axios.get(`${API}/people`)
      .then(function(response) {
        showStarWarsData(response.data);
      });
  };
  getCharacters();

  function showStarWarsData(data) {
    const people = document.querySelector("#peopleSection");

    for (i = 0; i < data.results.length; i++) {
      let character = data.results[i];
      let characterHeight = character.height / 30.48;

      // console.log(character);

      let newPerson = document.createElement('div');
      let name = document.createElement('h4');
      let height = document.createElement('h4');
      let gender = document.createElement('h4');
      let skinColor = document.createElement('h4');
      let hairColor = document.createElement('h4');

      people.appendChild(newPerson);
      newPerson.appendChild(name);
      newPerson.appendChild(height);
      newPerson.appendChild(gender);
      newPerson.appendChild(skinColor);
      newPerson.appendChild(hairColor);

      newPerson.classList.add('characterContainer');
      name.innerText = character.name;
      name.classList.add('characterName');
      height.innerText = `Height: ${characterHeight.toFixed(1)}`;
      gender.innerText = `Gender: ${character.gender}`;
      skinColor.innerText = `Skin Color: ${character.skin_color}`;
      hairColor.innerText = `Hair Color: ${character.hair_color}`;
    }
  }



  // API Call to get planets
  function getPlanets() {
    axios.get(`${API}/planets`)
      .then(function(response) {
        showStarWarsPlanets(response.data);
      });
  };
  getPlanets();

  function showStarWarsPlanets(data) {
    const planets = document.querySelector("#planetSection");

    for (i = 0; i < data.results.length; i++) {
      let planet = data.results[i];
      console.log(planet);

      let newPlanet = document.createElement('div');
      let planetName = document.createElement('h4');

      planets.appendChild(newPlanet);
      newPlanet.appendChild(planetName);
      newPlanet.classList.add('planetContainer');

      planetName.innerText = planet.name;
      planetName.classList.add('planetName');
    }
  };


  // UNTAPPED API's
  
  // API Call to get films
  function getFilms() {
    axios.get(`${API}/films`)
      .then(function(response) {
        // console.log(response.data);
      });
  };
  getFilms();

  // API Call to get species
  function getSpecies() {
    axios.get(`${API}/species`)
      .then(function(response) {
        // console.log(response.data);
      });
  };
  getSpecies();

  // API Call to get starships
  function getStarships() {
    axios.get(`${API}/starships`)
      .then(function(response) {
        // console.log(response.data);
      });
  };
  getStarships();

  // API Call to get vehicles
  function getVehicles() {
    axios.get(`${API}/vehicles`)
      .then(function(response) {
        // console.log(response.data);
      });
  };
  getVehicles();
});