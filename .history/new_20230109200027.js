async function () =>{
    const allfetchingdata = await fetch ('https://pokeapi.co/api/v2/pokemon?limit=5')
    const resp = await allfetchingdata.json()
    console.log(resp)
}