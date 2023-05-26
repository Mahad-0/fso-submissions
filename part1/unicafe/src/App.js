import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const StatisticLine = ({ stat, value }) => {
    return <tr>
        <th>{stat} </th>
        <td>{value}</td>
    </tr>;
};

const Statistics = ({ good, neutral, bad }) => {
    const getTotal = () => good + bad + neutral;

    const getAverage = () => (good - bad) / (good + neutral + bad);

    const getPositive = () => good / (good + neutral + bad) * 100;

    return (
        <div>
            <p>Statistics</p>

            {
                good + neutral + bad > 0 ?
                    <div>
                        <table>
                            <tbody>
                                <StatisticLine stat={"Good:"} value={good}/>
                                <StatisticLine stat={"Neutral:"} value={neutral}/>
                                <StatisticLine stat={"Bad:"} value={bad}/>

                                <StatisticLine stat={"Total:"} value={getTotal()}/>
                                <StatisticLine stat={"Average:"} value={getAverage()}/>
                                <StatisticLine stat={"Positive:"} value={getPositive()}/>
                            </tbody>
                        </table>
                    </div>

                : <p>No feedback given</p>
            }   
        </div>
    );
};

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onClick = (stat, handler) => () => handler(stat + 1);

    return (
        <div>
            <h1>Give Feedback</h1>

            <div>
                <Button handleClick={onClick(good, setGood)} text={"Good"}/>
                <Button handleClick={onClick(neutral, setNeutral)} text={"Neutral"}/>
                <Button handleClick={onClick(bad, setBad)} text={"Bad"}/>
            </div>

            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    );
}

export default App;
