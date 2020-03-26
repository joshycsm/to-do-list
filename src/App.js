import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItems from "./ListItems";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now()
      }
    });
  }

  addItem(event) {
    event.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      // destructuring assignment
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <form action="" id="to-do-form" onSubmit={this.addItem}>
          <input
            type="text"
            placeholder="Enter To Do Task"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add To Do</button>
        </form>

        <ListItems items={this.state.items} />
      </div>
    );
  }
}

export default App;
