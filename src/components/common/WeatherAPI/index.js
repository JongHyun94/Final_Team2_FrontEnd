import React, { Component } from 'react';
import style from "./WeatherAPI.module.css";

const API_KEY = '722e5a754ab41987e87ad60035c356f2';

class WeatherAPI extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      long: 0,
      temperature: 0,
      name: '',
      icon: '',
    };
    this.getPosition = this.getPosition.bind(this);
  }
  getPosition = () => {

    const options = {
      timeout: 10000,
      enableHighAccuracy: true,
      maximumAge: 0
    };


    if (this.props.hlat != null) {
      this.setState({
        ...this.state,
        lat: this.props.hlat,
        long: this.props.hlong
      });
    }
    else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({
            ...this.state,
            lat: position.coords.latitude,
            long: position.coords.longitude
          });
        }, (error) => {
          console.log(error)
        }, options);
      }
    }

    // fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&APPID=${API_KEY}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({
    //       ...this.state,
    //       temperature: Math.floor(json.main.temp - 273.15),
    //       name: json.weather[0].main,
    //       icon: json.weather[0].icon,
    //     });
    //   });
  }

  render() {
    const { temperature, icon } = this.state;
    const img_url = `http://openweathermap.org/img/w/${icon}.png`;

    return (
      <div className={style.WeatherAPI_items}>
        <div className={style.WeatherAPI_item}>
          <img alt="weather_icon" src={img_url} width="40px" />
        </div>
        <div className={style.WeatherAPI_item}>
          온도 : {temperature}°C
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getPosition();
  }
}
export default WeatherAPI;