import React, { Component } from "react";
import axios from "axios";
import Homepage from "./Homepage.js";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          prerequisites: [],
          id: null,
          title: '',
          subjCode: '',
          crseNum: '',
          order: null,
          term: null
        }
      ]
    }
  }

  componentDidMount() {
    this.getClasses();
  }

  getClasses = () => {
    axios
      .get("http://localhost:3001/api/classes")
      .then(response => {
        const classes = response.data;
        this.setState({
          classes: classes
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <main>
          <Switch>
            <Route
              path="/homepage"
              render={props => {
                return <Homepage {...props} classes={this.state.classes}/>;
              }}
            />
          </Switch>
          <Link to='/homepage'>Go</Link>
        </main>
      </div>
    );
  }
}

export default App;
