
import './App.css';
import {useState} from "react";

function App() {

  const [cities, setCities] = useState('');
	const [tempInfo, settempInfo] = useState(null);

	function getTemp() {
		const api_Key = 'c5f2eea0a7e1f6fa1ab1ddf10974dd7e';
		const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${api_Key}&units=metric`;

		fetch(weatherURL)
			.then((response) => response.json())
			.then((data) => {
				
				let MainTemp = Math.round(data.main.temp);
				let FeelsLike = Math.round(data.main.feels_like);

				const weather = {
					location: `Weather in ${data.name}`,
					temperature: `Temperature: ${MainTemp} C`,
					feelsLike: `Feels Like: ${FeelsLike} C`,
					condition: `Weather Conditions: ${data.weather[0].description}`,
				};

				settempInfo(weather);
			})

			.catch((error) => {
				console.error(error);
			});


  };
  return (

    <div className='container'>
      
      <div className='main'>
    <input
      type='text'
      placeholder='Search'
      value={cities}
      onChange={(e) => setCities(e.target.value)}
    />
    <br/>
    <button class= " btn btn-success"  onClick={getTemp}>Get Weather</button>
    {tempInfo && (
      <div className='content'>
        <h3>{tempInfo.location}</h3>
        <p>{tempInfo.temperature}</p>
        <p>{tempInfo.feelsLike}</p>
        <p>{tempInfo.condition}</p>
      </div>
    )}
  </div>

    </div>
   
  );
}

export default App;
