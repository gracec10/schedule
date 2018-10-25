import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [{
        id: null,
        title: '',
        subjCode: '',
        crseNum: '',
        order: null,
        prereqs: [],
        term: null
      }]
    }
  }

  componentWillMount() {
    this.getClasses();
  }

  getClasses = () => {
    axios.get("http://localhost:3001/api/classes")
    .then(response => {
      const classes = response.data
      this.setState({
        classes: classes
      })
    })
    .catch(function (error) {
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
                return <Homepage {...props} classes={this.state.classes} />;
              }}
            />
          </Switch>
          <Link to="/homepage" >Go</Link>
        </main>
      </div>
    );
  }
}

export default App;
