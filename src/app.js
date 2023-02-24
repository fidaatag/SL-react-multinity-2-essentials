const root = document.querySelector('#root');

function App() {
    const fruits = ['Apple', 'Orange', 'Grape', 'Banana'];

    console.log(
        fruits.map(function(fruit) {
            return <li>{fruit}</li>
        })
    );

    return (
        <>
            <ul>
                {fruits.map(function(fruit) {
                    return <li key={fruit}>{fruit}</li>
                })}
            </ul>

            <ul>
                <li>Apple</li>
                <li>Orange</li>
                <li>Grape</li>
                <li>Banana</li>
            </ul>
        </>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App />, root);