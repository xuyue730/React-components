import React,{ Component } from "react";
import ReactDOM from "react-dom";

export default class BoilingVerdict extends Component {
    constructor(props){
        super(props);
        this.celsius = this.celsius.bind(this);
        console.log(this.props.celsius);
        
    }
    celsius = (celsius)=>{
        this.state.celsius = celsius;
        this.setState({ celsius: this.state.celsius });
    }
    render() {
        let at ;
        if (this.props.celsius >= 0) {
            at = '<p>水会烧开</p>';
        }else{
            at = '<p>水不会烧开</p>';
        }
        return (
            <div>
                <p>{at}</p>
            </div>
        );
    }
}