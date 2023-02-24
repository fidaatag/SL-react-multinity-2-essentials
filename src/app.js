const root = document.querySelector('#root');

function App() {
    const [name, setName] = React.useState('Fidaa');

    function ketikaSubmit(event) {
        event.preventDefault();

        console.log('Name: ', name);
    }

    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama: </label>
                <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={function (event) {
                        setName(event.target.value);
                    }}
                />
            </div>
            <button type="submit">Kirim</button>
        </form>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);
