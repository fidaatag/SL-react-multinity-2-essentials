const root = document.querySelector('#root');

function App() {
    const nameRef = React.useRef(null);

    function ketikaSubmit(event) {
        event.preventDefault();
        const name = nameRef.current.value;

        console.log('Name: ', name);
    }

    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama: </label>
                <input type="text" name="name" ref={nameRef}/>
            </div>
            <button type="submit">Kirim</button>
        </form>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);
