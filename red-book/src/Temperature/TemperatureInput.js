import React,{ Component } from "react";
import ReactDOM from "react-dom";

import BoilingVerdict from './BoilingVerdict';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
export default class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handelChange = this.handelChange.bind(this);
        this.state = {temperature:''};

        this.toCelsius = this.toCelsius.bind(this);
        this.toFahrenheit = this.toFahrenheit.bind(this);
    }
    handelChange=(e)=>{
        this.setState({temperature:e.target.value});
    }
    toCelsius=(fahrenheit)=>{
        return (fahrenheit - 32) * 5 / 9;
    }
    
    toFahrenheit=(celsius)=>{
        return (celsius * 9 / 5) + 32;
    }
    render() {
        let temperature = this.state.temperature;
        const scale = this.props.scale;
        let apt ;
        if (temperature !=='') {
            if (scale == 'c') {
                apt = this.toCelsius(temperature);
            }
            if (scale == 'f') {
                apt = this.toFahrenheit(temperature);
            }
        }
        return (
            <div>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handelChange} />
                <BoilingVerdict celsius={apt} />
            </div>
        );
    }
}