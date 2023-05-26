import { useState } from "react";

const anecdotes = [ 
    "Every 60 seconds a minute passes",
    "We might be a simulation",
    "I'm bored",
    "I'm blue",
    "Da ba dee da ba di",
    "Send help",
    "Running out of ideas",
    "Aaaaaaaaaaaaaaaa",
    "Why",
    "Don't"
];

const randIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const Anecdote = ({selected, votes}) => {
    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>{votes[selected]} votes</p>
        </div>
    );
}

function App() {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    const setRandomAnecdote = () => {
        let index = 0;

        do {
            index = randIntInclusive(0, anecdotes.length - 1);
        } while (index === selected);

        setSelected(index);
    }

    const addVoteToSelected = () => {
        const copy = [...votes];
        copy[selected] += 1;
        setVotes(copy);
    };

    const getAnecdoteWithMostVotes = () => votes.reduce((prev, curr, i, arr) => curr > arr[prev] ? i : prev, 0);

    return (
        <div>
            <h1>Anecdote of the day</h1>

            <Anecdote selected={selected} votes={votes}/>

            <div>
                <button onClick={addVoteToSelected}>vote</button>
                <button onClick={setRandomAnecdote}>next anecdote</button>
            </div>

            <h1>Anecdote with most votes</h1>

            <Anecdote selected={getAnecdoteWithMostVotes()} votes={votes}/>
        </div>
    );
};

export default App;
