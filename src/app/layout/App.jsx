// import { sth } - is a member import(named Import) and can be exported with just export sth
// Can have multiple member exports but should have only one default import
import React, { Component } from 'react';

class App extends Component {
  // render() should be pure meaning it should modify component state i.e. it should return the 
  // same state each time it is invoked
  render() {
    return (
      <div>
        <h1>Re-vents</h1>
      </div>
    );
  }
}

export default App;

