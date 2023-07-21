import React, { Component } from "react";
import "./App.css";
import Book from "./Components/Book.js";
class App extends Component {
  //state hocche ekta component er nijer information.
  //props hocche kono component e baire theke ana information.
  state = {
    books: [
      { bookName: "1984", writer: "george orwell" },
      { bookName: "Da Vinci Code", writer: "Dan Brown" },
      {
        bookName: "The alchemist",
        writer: "Paulo Coelho",
      },
    ],
    otherProp: " I am some other prop",
  };
  // constructor() {
  //   super();
  //   this.state = {};
  // }
  changeBookState = (newBookName) => {
    this.setState({
      books: [
        { bookName: newBookName, writer: "george orwell" },
        { bookName: "Da Vinci Code", writer: "Dan Brown" },
        {
          bookName: "The metamorphosis",
          writer: "Franz kafka",
        },
      ],
    });
  };
  changeWithInputState = (e) => {
    this.setState({
      books: [
        { bookName: e.target.value, writer: "george orwell" },
        { bookName: "Da Vinci Code", writer: "Dan Brown" },
        {
          bookName: "The metamorphosis",
          writer: "Franz kafka",
        },
      ],
    });
  };
  render() {
    // let obj = new Component();
    // console.log(obj);
    const style = {
      border: "1px solid red",
      borderRadius: "10px",
      backgroundColor: "black",
      color: "white",
    };
    return (
      <div className="App">
        <h1 style={style}>Book List.</h1>
        <button onClick={() => this.changeBookState("Nineteen Eighty-four")}>
          Change State
        </button>
        <input type="text" onChange={this.changeWithInputState} />
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState}
        />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
        />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
          change={this.changeBookState.bind(this, "Ninteen-84")}
        />
      </div>
    );
  }
}

export default App;
