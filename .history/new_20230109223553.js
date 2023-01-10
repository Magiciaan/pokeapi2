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

    const allurlss = constallurls.map(item => {
        const obj = {url : item}
        return obj
    })
    console.log(allurlss[0].url)
    constallurls.forEach(newfetch())

    function newfetch(){
        fetch (constallurls)
    }
    Promise.all([newfetch])
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
