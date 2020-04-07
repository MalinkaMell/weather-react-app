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
      data: [{
        "name": "Chicago",
        "forecast": [{
          "Date": "04/05/2020",
          "Time": "2.59pm",
          "temprature": 47,
          "feels": 40
        },
        {
          "Date": "04/06/2020",
          "Time": "2.59pm",
          "temprature": 57,
          "feels": 55
        },
        {
          "Date": "04/07/2020",
          "Time": "2.59pm",
          "temprature": 45,
          "feels": 44
        },
        {
          "Date": "04/08/2020",
          "Time": "2.59pm",
          "temprature": 61,
          "feels": 50
        },
        {
          "Date": "04/09/2020",
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
    this.setState({ input: value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.data.map(city => this.state.input.toLowerCase() === city.name.toLowerCase() && this.setState({ display: city }))
    this.setState({ input: "" })
  }

  render() {
    return (
      <Router>
        <Body>
          <Switch>
            <Route exact path="/">
              <SearchContainer handleChange={this.handleChange} handleSubmit={this.handleSubmit} input={this.state.input} />
              {this.state.display !== null && <Results city={this.state.display} />}
            </Route>
            <Route path="/fivedays">
              <FiveDaysResults city={this.state.display} />
            </Route>
          </Switch>
        </Body>
      </Router>
    )
  }
}

export default App;
