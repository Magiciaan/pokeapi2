async function firstfetch() {
  try {
    const allfetchingdata = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=5"
    );
    const resp = await allfetchingdata.json();
    constallurls = [];
    for (let i = 0; i < 5; i++) {
      let urls = resp.results[i].url;
        constallurls.push(urls)
    }
  } catch (err) {
    console.error(err);
  }
}
firstfetch();
