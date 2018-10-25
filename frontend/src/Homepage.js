import React, { Component } from "react";
import "./Homepage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term1: this.props.classes.filter(item => item.term === 1),
      term2: this.props.classes.filter(item => item.term === 2),
      term3: this.props.classes.filter(item => item.term === 3),
      term4: this.props.classes.filter(item => item.term === 4)
    };
  }

  render() {
    let list1 = this.state.term1.map(class1 => {
      return (
        <div key={class1.id}>
          <h1>{class1.title}</h1>
        </div>
      );
    });
    let list2 = this.state.term2.map(class1 => {
      return (
        <div key={class1.id}>
          <h1>{class1.title}</h1>
        </div>
      );
    });
    let list3 = this.state.term3.map(class1 => {
      return (
        <div key={class1.id}>
          <h1>{class1.title}</h1>
        </div>
      );
    });
    let list4 = this.state.term4.map(class1 => {
      return (
        <div key={class1.id}>
          <h1>{class1.title}</h1>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="term">{list1}</div>

        <div className="term">{list2}</div>

        <div className="term">{list3}</div>

        <div className="term">{list4}</div>
      </div>
    );
  }
}

export default Homepage;
