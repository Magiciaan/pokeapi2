async function firstfetch() {
  try {
    const allfetchingdata = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=5"
    );
    const resp = await allfetchingdata.json();
    constallurls = [];
    for (let i = 0; i < 5; i++) {
      let urls = resp.results[i].url;
      constallurls.push(urls);
    }

    constallurls.forEach(newfetch())

    function newfetch(){
        fetch (constallurls)
    }


    Promise.all([allfetching])
      .then((response) => {
        return Promise.all(response.map((r) => r.json()));
      })
      .then((data) => {
        data.forEach((item) => {
          console.log(item.name);
        });
      });
  } catch (err) {
    console.error(err);
  }
}
firstfetch();
