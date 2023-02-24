const root = document.querySelector('#root');

function App() {
    const [login, setLogin] = React.useState(false);

    return (
        <>
            <h1>The Apps</h1>
            <button onClick ={function() {setLogin(true)}}>Log In</button>

            <p>{login ? <b>Berhasil login</b> : ''}</p>
            <p>{login && <b>Berhasil login</b>}</p>
            <p>{login === true && <b>Berhasil login</b>}</p>

            <p>{login ? '' : <i>Belum login</i>}</p>
            <p>{!login && <i>Belum login</i>}</p>
            <p>{login === false && <i>Belum login</i>}</p>
        </>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);
