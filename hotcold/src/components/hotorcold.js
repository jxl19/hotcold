// HOT or COld title 
// inside box a form that holds user input for guess - guess section
// current guess - guesscount
// a box under current guess that holds the guesses made - guesslist

// new game button on top

import React from 'react';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100)
        };
    }

    guess(guess) {
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'Very cold!';
        }
        else if (difference >= 30) {
            feedback = 'Cold';
        }
        else if (difference >= 10) {
            feedback = 'Hot!';
        }
        else {
            feedback = 'Winner!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess] //makes guesses current guess and also the old guesses
        });
    }

    render() {
        return (
            <div>
                <GuessSection feedback={this.state.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
