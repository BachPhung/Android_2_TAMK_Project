import SunnyImg from "../../assets/img-background/sunny.jpeg";
import CloudyImg from "../../assets/img-background/cloudy.jpeg";
import RainnyImg from "../../assets/img-background/rain.jpeg";
export const weatherHourLyTransform = (weatherInput) => {
  const date = new Date(weatherInput.DateTime);
  const hour = date.getHours();
  const minute = String(date.getMinutes()).padStart(2, "0");
  const weatherIconId = String(weatherInput.WeatherIcon).padStart(2, "0");
  const weatherTemp = Math.round(weatherInput.Temperature.Value);
  return {
    time: `${hour}:${minute}`,
    weatherIconId,
    weatherTemp,
  };
};

const DAY_ENUM = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const mapDay = (day) => {
  return DAY_ENUM[day];
};

export const weatherDailyTransform = (weatherInput) => {
  const day = mapDay(new Date(weatherInput.Date).getDay());
  const dayWeather = weatherInput.Day;
  const nightWeather = weatherInput.Night;

  const weatherInfo = {
    temp: {
      min: Math.round(weatherInput.Temperature.Minimum.Value),
      max: Math.round(weatherInput.Temperature.Maximum.Value),
    },
    dayTime: day,
    day: {
      icon: String(dayWeather.Icon).padStart(2, "0"),
      weather: dayWeather.IconPhrase,
      desciptionLong: dayWeather.LongPhrase,
      desciptionShort: dayWeather.ShortPhrase,
      cloudCover: dayWeather.CloudCover / 100,
    },
    night: {
      icon: String(nightWeather.Icon).padStart(2, "0"),
      weather: nightWeather.IconPhrase,
      desciptionLong: nightWeather.LongPhrase,
      desciptionShort: nightWeather.ShortPhrase,
      cloudCover: nightWeather.CloudCover / 100,
    },
  };
  return weatherInfo;
};

export const getBackgroundImg = (weatherDesc) => {
  if (weatherDesc.includes("Sunny") || weatherDesc.includes("Clouds")) {
    return SunnyImg;
  } else if (
    weatherDesc.includes("Showers") ||
    weatherDesc.includes("Rain") ||
    weatherDesc.includes("Storm")
  ) {
    return RainnyImg;
  } else {
    return CloudyImg;
  }
};
