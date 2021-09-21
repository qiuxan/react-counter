import React, { Component } from "react";

class Counter extends React.Component {
  // constructor(){
  //     super();
  //     this.handleIncrement=this.handleIncrement.bind(this);

  //     // console.log(this);
  // }

  // state = {
  //   value: this.props.counter.value,
  //   tags: [],
  // };
  getTags() {
    if (this.state.tags.length === 0) {
      return <p>There is no tag</p>;
    } else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  // handleIncrement = (e) => {
  //   // console.log(e.id);
  //   // this.state.count =this.state.count +1;
  //   this.setState({ value: this.state.value + 1 });
  //   // console.log('increment clicked',this.state.count);
  // };

  render() {
    // console.log(this.props.counter);
    return (
      <React.Fragment>


        <div>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            // onClick={this.handleIncrement}

            // onClick={() => this.handleIncrement({ id: 1 })}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increament
          </button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2 btn-sm">Delete</button>
          {/* {this.state.tags.length===0 &&"please enter a new tage"} */}
        </div>
      </React.Fragment >
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // console.log('formatCount here');
    const { value: count } = this.props.counter;
    // console.log(this.state.count);
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
