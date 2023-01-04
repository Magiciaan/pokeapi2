const SearchBar = document.getElementById("search");
const SearchButton = document
  .getElementById("SearchButton")
  .addEventListener("click", getPokes);
const FilterButton = document.getElementById("FilterButton");
const Table = document
  .getElementById("tableID")
  .getElementsByTagName("tbody")[0];
const SortButton = document.getElementById("sortingbutt");

const fetchAndDisplayData = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
    );
    const data = await response.json();
    const pokemonData = data?.results;
    pokemonData.forEach((item, index) => {
      let newRow = Table.insertRow();

      // Insert a cell at the end of the row
      let newCell = newRow.insertCell();
      let newCell2 = newRow.insertCell();
      newCell2.className = "rownames";
      let newCell3 = newRow.insertCell();
      let newCell4 = newRow.insertCell();
      var img = document.createElement("img");
      img.className = "imgclass";
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${
        index + 1
      }.png`;

      // Append a text node to the cell
      let pokeId = document.createTextNode(`${index + 1}`);
      let pokeName = document.createTextNode(`${item.name}`);
      let pokeUrl = document.createTextNode(`${item.url}`);
      newRow.className = "rowss";
      // add pokemon id
      newCell.appendChild(pokeId);
      newCell2.appendChild(pokeName);
      newCell3.appendChild(img);
      newCell4.appendChild(pokeUrl);
    });
    return pokemonData;
  } catch (error) {
    console.error(error);
  }
};

const myData = fetchAndDisplayData();

// console.log(myData.then((item) => (item[index+1].name)))// myData.then((item) => (item[c].name))
let total = 0;
async function getArray() {
  const array = await myData;
  total = total + array.length;
  return total;
}

function getPokes() {
  fetchAndDisplayData();
}
SearchBar.addEventListener("input", searchPokemons);
async function searchPokemons() {
  const allrows = document.querySelectorAll(".rowss");
  const array = await myData;
  // console.log(array); // Output: Array(50)
  total = 0;
  total = total + array.length;
  const searchdata = SearchBar.value.toLowerCase();
  console.log(array);

  for (let j = 0; total >= j; j++) {
    if (array[j].name.startsWith(searchdata)) {
      allrows[j].style.display = "";
    } else {
      allrows[j].style.display = "none";
    }
  }
}
SortButton.addEventListener("click", () => {
  sorting(1);
});
function sorting(colIndex) {
  let rows = Table.getElementsByTagName("tr");
  let rowArray = [];
  for (let i = 0; i < rows.length; i++) {
    rowArray.push(rows[i]);
  }
  rowArray.sort(function (a, b) {
    let A = a.getElementsByTagName("TD")[colIndex].textContent;
    let B = b.getElementsByTagName("TD")[colIndex].textContent;
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0;
  });
  for (let i = 0; i < rowArray.length; i++) {
    Table.appendChild(rowArray[i]);
  }
}
