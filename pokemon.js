const tablerow = document.getElementById("rows");
const allrows = document.getElementsByTagName('tr')
const table = document.getElementById("tablediv");
const SearchBar = document.getElementById("SearchInput");

const FilterButton = document.getElementById("FilterButton");
const SearchButton = document.getElementById("SearchButton");

var allarray;
var allnames = [];
var allurls = [];
var names = [];

async function fetchAndDisplayData() {
  try {
    SearchBar.addEventListener("input", SearchFunc);
    FilterButton.addEventListener("click", filtering);
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
    const data = await response.json();
    allarray = data.results;
    let b = 0;
    while (b <= allarray.length) {
      names.push(allarray[b].name);
      allurls.push(allarray[b].url);
      const newRow = table.insertRow(-1);
      let newCell1 = newRow.insertCell(-1);
      let newCell2 = newRow.insertCell(0);
      newCell1.innerHTML = allurls.pop();
      newCell2.innerHTML = names.pop();
      b++;
    }
    console.log(allarray)

    function filtering() {
      let sortednames = [];
      for (let c = 0; allarray.length >= c; c++) {
        allnames.push(allarray[c].name);
        allurls.push(allarray[c].url);
        const newRow = table.insertRow(1);
        let newCell1 = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        newCell1.innerHTML = sortednames[c];
        newCell2.innerHTML = allurls[c];
        sortednames = allnames.sort();
        console.log(allnames)
      }

    }
    function SearchFunc() {
      let d = 0;   
      while (allarray.length > d) {
        let allnamecaps = allarray[d].name.toUpperCase();
        let pokeies = allnamecaps.startsWith(SearchBar.value.toUpperCase());
        i=0
        if (pokeies === true) {
          i++
          const newRow = table.insertRow(1);
          let newCell1 = newRow.insertCell(-1);
          let newCell2 = newRow.insertCell(0);
          newCell1.innerHTML = allarray[d].url;
          newCell2.innerHTML = allnamecaps.toLowerCase();
        }
        d++;
        let loop2 = 0
        loop2 = loop2+i
        console.log(loop2.length)
        // while (loop2<=allarray.length){
        // allrows[i].remove()}
      }
    }
  } catch (error) {
    console.error(error);
  }
}
fetchAndDisplayData();
