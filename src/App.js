import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends React.Component {

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ]
  }
  handleDelete = (counterId) => {

    // const counters = this.state.counters.filter(c => c.id !== counterId);
    const counters = this.state.counters.filter(c => { return c.id !== counterId });

    // console.log('ondelete clicked', counterId);
    this.setState({ counters });
  }
  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    // console.log(index);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });

  }

  handleReset = () => {
    const counters = this.state.counters.map(
      c => {
        c.value = 0;
        return c;
      }
    );
    this.setState({ counters });
  }


  // calNum = () => {
  //   // console.log('hh');
  // }
  render() {

    // console.log(props);
    return <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => { return c.value > 0} ).length} />
      <main className="container">
        <Counters
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          counters={this.state.counters}

        />
      </main>
    </React.Fragment>
  }
}

export default App;
