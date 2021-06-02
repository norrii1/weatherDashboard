document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

  
  const firstRequest = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('name').value}&units=imperial&appid=d403e9e2493dde40e019ba65a75eaae8`)
    .then(res => {
      
        
      let weather = res.data
      let lat = res.data.coord.lat
      
      let lon = res.data.coord.lon
      
      console.log(lat)
      console.log(lon)
      console.log(weather)
      document.getElementById('weather').innerHTML = 
      ` <h1>City : ${weather.name}<h1>
            <h2> Temperature : ${weather.main.temp}</h2>
            <h3>Humdity : ${weather.main.humidity}</h3>
            <h4>Wind Speed :  ${weather.wind.speed}</h4>
            <h5>5 Day Forecast : </h5>
            
          `
      
      document.getElementById('name').value = ''

    
    
      return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=d403e9e2493dde40e019ba65a75eaae8&units=imperial`)
  
  })
  .then(res =>{

  
    let forecast = res
    let date = res.data.daily
    let week= forecast.data.daily[0].weather
    
    

    console.log(forecast)
    console.log(date[0].temp.max)


   
   
    
    document.getElementById('date1').innerHTML=`
    ${new Date(forecast.data.daily[0].dt * 1000 - (forecast.data.timezone_offset * 1000)) }
    <div class="row"></div>
    <p>High : ${date[0].temp.max} °F<p>
    <p>Low : ${date[0].temp.min} °F<p>
    <p>Humidity : ${date[0].humidity}%<p>

    `
    document.getElementById('date2').innerHTML = `
    ${new Date(forecast.data.daily[1].dt * 1000 - (forecast.data.timezone_offset * 1000)) }
    <p>High : ${date[1].temp.max} °F<p>
    <p>Low : ${date[1].temp.min} °F<p>
    <p>Humidity : ${date[1].humidity}%<p>

    
    `
    document.getElementById('date3').innerHTML = `
    ${new Date(forecast.data.daily[2].dt * 1000 - (forecast.data.timezone_offset * 1000)) }
    <p>High : ${date[2].temp.max} °F<p>
    <p>Low : ${date[2].temp.min} °F<p>
    <p>Humidity : ${date[2].humidity}%<p>

    `
    document.getElementById('date4').innerHTML = `
    ${new Date(forecast.data.daily[3].dt * 1000 - (forecast.data.timezone_offset * 1000))}
    <p>High : ${date[3].temp.max} °F<p>
    <p>Low : ${date[3].temp.min} °F<p>
    <p>Humidity : ${date[3].humidity}%<p>

    `
    document.getElementById('date5').innerHTML = `
    ${new Date(forecast.data.daily[4].dt * 1000 - (forecast.data.timezone_offset * 1000))}
    <p>High : ${date[4].temp.max} °F<p>
    <p>Low : ${date[4].temp.min} °F<p>
    <p>Humidity : ${date[4].humidity}%<p>

    `

    
    
  
})

  



    .catch(err => console.error(err))
})
