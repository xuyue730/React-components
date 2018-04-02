import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import TemperatureInput from './TemperatureInput';
export default class Calculator extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { temperature: '' };
	}

	handleChange(e) {
        this.setState({ temperature: e.target.value });
	}

	render() {
		const temperature = this.state.temperature;
		return (
            <div>
				<legend>输入一个摄氏温度</legend>
				<TemperatureInput scale="c" onChange={this.handleChange} />
                <TemperatureInput scale="f" onChange={this.handleChange}/>
            </div>
		);
	}
}
