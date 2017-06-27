import React from 'react';

export default function GuessList(props) {
    //map guess using index
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}> 
            {guess}
        </li>
    ));

    return (
        //list of guesses
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};
