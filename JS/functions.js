export function JSfunctions({
    HTMLElements
}){

    async function returnWeather(){
        const key = "801af33ac83f9eb9a23de34d3fd85b4a"
        
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${HTMLElements.inputCidade.value}&appid=${key}&units=metric&lang=pt_br`

        const elemento = await fetch(endpoint)
        .then(data => data.json())
        .then(({ name, main , weather }) => ({
            name,
            main,
            clim : weather[0].main,
            weather : weather[0].description
        }))
        
        //updatePage(elemento)
        HTMLElements.cityName.innerHTML = String(elemento.name)
        HTMLElements.temp.innerHTML = String(elemento.main.feels_like);
        HTMLElements.prevision.innerHTML = String(elemento.weather)

        console.log(elemento.name, elemento.main.feels_like, elemento.clim,elemento.weather)

        


    }

    function updatePage (elemento){
        HTMLElements.cityName.innerHTML = String(elemento.name)
        HTMLElements.temp.textContent = String(elemento.main.feels_like);
        HTMLElements.prevision.innerHTML = String(elemento.weather)
    }
    return {
        returnWeather
    }
}

/**
 *  801af33ac83f9eb9a23de34d3fd85b4a
 */
/**
 *  
 * 
 */