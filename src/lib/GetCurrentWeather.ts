export async function getWeather() {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rafaela,ar&units=metric&APPID=${
    import.meta.env.WEATHER_API_KEY
  }`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return {
    short_desc: data.weather[0].main,
    long_desc: data.weather[0].description,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    icon: data.weather[0].icon,
  };
}
