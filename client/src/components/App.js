import React from 'react';

function getInitialState(){
  return {
    view: 'login'
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    this.loginClick = this.loginClick.bind(this);
  }

  loginC

  render() {
    let jsx;
    if (this.state.view === 'login') {
      jsx = <Login loginClick={}>
    }
    // return (
    //   <Table/>
    // );
  }

}

export default App;
