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
    // const first = await fetch(constallurls[0]);
    // const second = await fetch(constallurls[1]);
    // const third = await fetch(constallurls[2]);
    // const fourth = await fetch(constallurls[3]);
    // const fifth = await fetch(constallurls[4]);
    // Promise.all([first, second, third, fourth, fifth])
    //   .then((response) => {
    //     return Promise.all(response.map((r) => r.json()));
    //   })
    //   .then((data) => {
    //     data.forEach((item) => {
    //       console.log(item.name);
    //     });
    //   });
    Promise.all(constallurls.map(url =>
        fetch(url)
          .then(checkStatus)                 
          .then(parseJSON)
          .catch(logError)
      ))
      .then(data => {
        // do something with the data
      })
  } catch (err) {
    console.error(err);
  }
}
firstfetch();
