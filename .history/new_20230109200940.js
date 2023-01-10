async function firstfetch(){
    const allfetchingdata = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=5')
    const resp = await allfetchingdata.json()
    // for (let i = 0; i <= 5; i++){}
    //     constallurls = resp.results[i].url









    console.log(resp.results())
}
firstfetch()