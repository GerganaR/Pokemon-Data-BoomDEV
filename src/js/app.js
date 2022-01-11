import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let url = "https://pokeapi.co/api/v2/pokemon?limit=10";
  const ul = document.querySelector("ul");

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function toJSON(response) {
    return response.json();
  }

  fetch(url)
    .then(toJSON)
    .then((data) => {
      const transformedData = data.results.map((pokemonData) => {
        return {
          name: pokemonData.name,
        };
      });

      for (let i = 0; i < transformedData.length; i++) {
        let li = document.createElement("li");
        li.innerText = transformedData[i].name;
        ul.appendChild(li);
      }
    });
});
