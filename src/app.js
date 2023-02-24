const root = document.querySelector('#root');

function App() {
    const [login, setLogin] = React.useState(false);

    if(login) {
        return (
            <>
            <h1>Yea! Bisa login</h1>;
            <button onClick ={function() {setLogin(false)}}>Log Out</button>;
            </>
        );
    }

    return (
        <>
            <h1>Login Dulu, Sayton!</h1>;
            <button onClick ={function() {setLogin(true)}}>Log In</button>;
        </>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);
