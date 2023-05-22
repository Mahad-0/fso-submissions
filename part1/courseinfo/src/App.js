function Header(props) {
    return <h1>{props.course}</h1>;
}

function Part(props) {
    return <p>{props.part}, {props.exercises} exercises</p>
}

function Content(props) {
    return props.data.map(([part, exercises]) => {
        return <Part key={part} part={part} exercises={exercises}/>
    });
}

function Total(props) {
    return <p>Number of exercises: {props.exercises}</p>;
}

function App() {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header course={course}/>
            <Content data={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]}/>
            <Total exercises={exercises1 + exercises2 + exercises3}/>
        </div>
    );
}

export default App;