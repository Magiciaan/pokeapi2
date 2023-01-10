async function firstfetch(){
    const allfetchingdata = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=5')
    const resp = await allfetchingdata.json()
    constallurls = []
    for (let i = 0; i <= 5; i++){
        let url = resp.results[i].url
        console.log(url)
    }
}
firstfetch()