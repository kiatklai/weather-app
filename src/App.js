import './App.css';
import {useState,useEffect} from "react"

function App() {
  const name = "Tokyo"
  const APIkey = "c4d552289a18d1dc2a4bb3819313fd72"
  const [city,setCity] = useState({})
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIkey}`
    fetch(url).then(res=>res.json())
    .then(data=>{
      setCity(data);
      setIsLoading(true)
    })
  },[name])

  const convertTemp =(k)=>{
    return (k-273).toFixed()
  }
  return (
    (isLoading && <div className="App">
    <section>
      <div className='location'>
        <h1 className='city'>{city.name}</h1>
        <p className='state'>{city.sys.country}</p>
      </div>
      <div className='card'>
        <div className='weather'>
          <h1>{convertTemp(city.main.temp)}&deg;C</h1>
          <small>max : {convertTemp(city.main.temp_max)}&deg;C , min : {convertTemp(city.main.temp_min)}&deg;C</small>
        </div>
        <div className='info'>
          <div className='status'>天気：{city.weather[0].main}</div>
          <div className='humidity'>湿度：{city.main.humidity}</div>
          <div className='wind'>風：{city.wind.speed}</div>
        </div>
      </div>
    </section>
  </div>)
  );
}

export default App;
