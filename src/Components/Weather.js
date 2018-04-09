import React from 'react';


class Weather extends React.Component{

render(){

	return(


		<div className="weather_info">


		
        {this.props.temperature && <p className="weather__key">Temperature: <span className="weather__value">{this.props.temperature} K</span></p>}
		{this.props.city && <p className="weather__key">City: <span className="weather__value">{this.props.city}</span></p>}
		{this.props.country && <p className="weather__key">Country:<span className="weather__value"> {this.props.country}</span></p>}
		{this.props.description && <p className="weather__key">Description: <span className="weather__value capital">{this.props.description}</span></p>}
		{this.props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{this.props.humidity}</span></p>}
		{this.props.error &&  <span className="weather__error">{this.props.error}</span>}
		</div>
		);
}

};
 
export default Weather;