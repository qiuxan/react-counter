import React, { Component } from 'react';

class Counter extends React.Component {
    state={
        count:0,
    };

    // style={
    //     fontSize:50,
    //     fontWeight:'bold',
    // }



    render() { 
        return (
            <React.Fragment>
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increament</button>
        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

     formatCount(){
            // console.log('formatCount here');
            const {count}=this.state;
            // console.log(this.state.count);
            return count===0?'Zero':count;

        }
}
 
export default Counter;