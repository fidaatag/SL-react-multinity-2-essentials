const root = document.querySelector('#root');

function App() {
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(function() {
        // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
        //     .then(function(response) {return response.json()})
        //     .then(function(response) {console.log(response)});
        // console.log(getData);

        async function getData() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json();
            console.log(response);

            setNews(response);
            setLoading(false);
        }
        getData();

    }, []);

    return (
        <>
            <h1>Data Fetch</h1>
            {loading ? (
                <i>Loading data ...</i>
            ) : (
                <ul>
                    {news.map(function(item) {
                        return <li key={item.id}>{item.title}</li>
                    })}
                </ul>
            )}
            
        </>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);