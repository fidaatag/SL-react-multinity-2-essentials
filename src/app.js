const root = document.querySelector('#root');

function App() {
    const [login, setLogin] = React.useState(false);
    const judulRef = React.useRef(null);

    React.useEffect(function() {
        // dengan id untuk akses DOM
        const judul = document.getElementById('judul');
        setTimeout(function() {
            judul.textContent = 'Iya ini Apps yang pake id';
        }, 1000)

        // dengan .useRef untuk akses DOM
        console.log(judulRef)
        setTimeout(function() {
            judulRef.current.textContent = 'Iya ini Apps yang pake .useRef';
        }, 2000)
        
    }, []
    );

    return (
        <>
            <h1 id='judul'>The Apps</h1>
            <h1 ref={judulRef}>The Apps</h1>
        </>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);
