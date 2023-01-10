async function firstfetch(){
    const allfetchingdata = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=5')
    const resp = await allfetchingdata.json()
    constallurls = []
    // for (let i = 0; i <= 5; i++){
    //     constallurls.push(resp.results[i].url)
    // }






    console.log(resp.results)
    console.log(constallurls)

}
firstfetch()