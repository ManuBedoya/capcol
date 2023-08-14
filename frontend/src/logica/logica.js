export const listItems = [1, 2, 3, 4, 5];

export const products = () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

products();
