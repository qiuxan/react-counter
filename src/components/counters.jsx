import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {

    // state = {
    //     counters: [
    //         { id: 1, value: 4 },
    //         { id: 2, value: 0 },
    //         { id: 3, value: 0 },
    //         { id: 4, value: 0 },
    //     ]
    // }
    // handleDelete = (counterId) => {

    //     // const counters = this.state.counters.filter(c => c.id !== counterId);
    //     const counters = this.state.counters.filter(c => { return c.id !== counterId });

    //     // console.log('ondelete clicked', counterId);
    //     this.setState({ counters });
    // }
    // handleIncrement = (counter) => {
    //     // console.log(counter);
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     // console.log(index);
    //     counters[index] = { ...counter };
    //     counters[index].value++;
    //     this.setState({ counters });

    // }

    // handleReset = () => {
    //     const counters = this.state.counters.map(
    //         c => {
    //             c.value = 0;
    //             return c;
    //         }
    //     );
    //     this.setState({ counters });
    // }

    render() {

        // console.log(this.props);

        return <div>
            <button
                // onClick={this.handleReset}
                onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>

            {this.props.counters.map(
                counter =>
                    <Counter
                        onDelete={this.props.onDelete}
                        key={counter.id}
                        counter={counter}
                        onIncrement={this.props.onIncrement}
                    />)}
        </div>;
    }
}

export default Counters;