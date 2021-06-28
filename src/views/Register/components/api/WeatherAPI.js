import React, { Component } from 'react';
import axios from 'axios';
import "./WeatherAPI.css";

const API_KEY = '722e5a754ab41987e87ad60035c356f2';


class WeatherAPI extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      long: 0,
      temperature: 0,
      name: '',
      icon: '',
    }
  }
  getPosition = () => {

    const options = {
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 0
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("position:");
        // console.log(position);
        this.setState({
          ...this.state,
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
        // console.log("@@@");
        // console.log(this.state);
      }, (error) => {
        console.log(error)
      }, options);
    }
    // console.log("###");
    // console.log(this.state);
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          ...this.state,
          temperature: Math.floor(json.main.temp - 273.15),
          name: json.weather[0].main,
          icon: json.weather[0].icon,
        });
        // console.log("%%%");
        // console.log(this.state);
      });

  }

  componentDidMount() {
    this.getPosition()
  }

  render() {
    const { temperature, name, icon } = this.state;
    const img_url = `http://openweathermap.org/img/w/${icon}.png`;

    return (
      <div className="WeatherAPI_items">
        <div className="WeatherAPI_item">
          <img alt="weather_icon" src={img_url} width="40px"/>
        </div>
        <div className="WeatherAPI_item">
          온도 : {temperature}°C
        </div>
        {/* <div className="WeatherAPI_item">
          <p>날씨 : {name}</p>
        </div> */}
      </div>
    );
  }
}
export default WeatherAPI;