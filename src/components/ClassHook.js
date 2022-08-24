import { Component } from "react";

class ClassHook extends Component {
  state = {
    count: 0,
  };
  clickHandler = () => {
    console.log(this.state.count);
    this.setState((e) => {
      return {count:e.count + 5} ;
    });
  };
  render() {
    return (
      <div>
        <h1>count class - {this.state.count}</h1>
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default ClassHook;
