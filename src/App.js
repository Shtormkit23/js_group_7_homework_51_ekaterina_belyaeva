import React, {Component} from 'react';
import './App.css';
import Lottery from "./Lottery/Lottery";

class App extends Component {
    state = {
        lottery: [
            {number:'─'},
            {number:'─'},
            {number:'─'},
            {number:'─'},
            {number:'─'}
        ]
    };
    randomNumber = function (min, max, array) {
        let currentNumber = 0;

        while (true){
            let number = Math.floor(Math.random() * (max - min) + min);

            if(!array.includes(number)){
                currentNumber = number;
                break;
            }
        }

        return currentNumber;
    }

    changeNumber = () => {
        let lotteryNumber = [];
        const lottery = [...this.state.lottery];

        for (let i = 0; i < lottery.length; i++){
            let number = this.randomNumber(5,37, lotteryNumber);
            lotteryNumber.push(number);
        }

        lotteryNumber.sort(function(a,b){
            return a - b
        });

        for (let i = 0; i < lottery.length; i++){
            let number = {...lottery[i]};
            number.number = lotteryNumber[i];
            lottery[i] = number;
        }

        this.setState({lottery});
    };

    render() {
        return (
            <div className="App">
                <div className="App">
                    <div>
                        <button className='btn' onClick={this.changeNumber}>New numbers</button>
                    </div>
                    {this.state.lottery.map(function(object, i){
                        return <Lottery key={i} number={object.number}></Lottery>;
                    })}
                </div>
            </div>
        );
    }
}


export default App;
