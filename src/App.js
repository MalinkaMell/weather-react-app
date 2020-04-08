import React from 'react';
import './App.css';
import weatherData from './data.json';
import Body from './components/body/Body';
import Results from './components/results/Results';
import SearchContainer from './components/search/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FiveDaysResults from './components/results/FiveDays';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: null,
      input: "",
      data: weatherData
    }
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({ input: value })
  }

  handleSubmit = e => {
    e.preventDefault();
    //new object to contain extracted data 
    const displayData = {}

    //shortening state for easier use
    const state = this.state.data.States;

    //find in what state is my searched city
    const findState = Object.keys(state).map(key => {
      const index = []
      state[key].cities.map((city, i) => this.state.input.toLowerCase() === city.name.toLowerCase() && index.push(key));
      return index
    })

    //find city index
    const findCityIndex = Object.keys(state).map(key => {
      const index = []
      state[key].cities.map((city, i) => this.state.input.toLowerCase() === city.name.toLowerCase() && index.push(i));
      return index
    })

    //flat 
    const cityIndex = parseInt(findCityIndex.flat().toString())

    //saving state in diplay object
    displayData.state = findState.flat().toString()

    //search data in saved state object and using cityIndex
    Object.keys(state).filter(key => {
      if (key === displayData.state) {
        displayData.name = state[key].cities[cityIndex].name
        displayData.state = key
        displayData.currentdate = state[key].currentdate
        displayData.time = state[key].time
        displayData.forecast = state[key].cities[cityIndex].forecast
      }
      return false
    })

    console.log(displayData)
    //set new state
    this.setState({ input: "", display: displayData })
  }

  render() {
    return (
      <Router>
        <Body>
          <SearchContainer handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state.input} />
          <Switch>
            <Route exact path="/">
              {this.state.display !== null && <Results city={this.state.display} />}
            </Route>
            <Route path="/fivedays">
              {this.state.display !== null && <FiveDaysResults city={this.state.display} />}
            </Route>
          </Switch>
        </Body>
      </Router>
    )
  }
}

export default App;
