import React, { Component } from 'react';
import './App.css';
import Question from './components/Question/Question';
import Answer from './components/Answer/Answer';
import UserName1 from './components/UserName/UserName1';
import UserName2 from './components/UserName/UserName2';
import Row1 from './components/Row/Row1';
import Row2 from './components/Row/Row2';

class App extends Component {

  answers() {
    let array = [];

    for (let i = 0; i < 4; i++) {
      array.push(<Answer />);
    }
    return array;
  };

  render() {
    
    return (
      <div>
        <div className="users">
          <Row1 />
          <Row2 />
        </div>
        <div className="users">
          <UserName1 />
          <UserName2 />
        </div>
        <Question />
        {this.answers()}
      </div>
    );
  };
}

export default App;
