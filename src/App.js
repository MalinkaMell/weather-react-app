import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    display: {},
    input: "",
    data: [{
    "name": "Chicago",
					"forecast": [{
							"Date": "04/05/2019",
							"Time": "2.59pm",
							"temprature": 47,
							"feels": 40
						},
						{
							"Date": "04/06/2019",
							"Time": "2.59pm",
							"temprature": 57,
							"feels": 55
						},
						{
							"Date": "04/07/2019",
							"Time": "2.59pm",
							"temprature": 45,
							"feels": 44
						},
						{
							"Date": "04/08/2019",
							"Time": "2.59pm",
							"temprature": 61,
							"feels": 50
						},
						{
							"Date": "04/09/2019",
							"Time": "2.59pm",
							"temprature": 68,
							"feels": 65
						}
					]
    
    }]
  }
  }
  
  handleChange = e => {
  const { value } = e.target
  	this.setState({input: value})
  }
  
  submitHandle = e => {
  e.preventDefault()
    this.state.data.map(city => {
    this.state.input.toLowerCase() === city.name.toLowerCase() && this.setState({display: city})
    }
    )
  } 
  render() {
    return (
      <div>
        <h2>Weather App</h2>
        <p>{JSON.stringify(this.state.display)}</p>
        
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitHandle}>Submit</button>
        
        <h1>City Name: {this.state.display.name}</h1>
      </div>
    )
  }
}

export default App;
