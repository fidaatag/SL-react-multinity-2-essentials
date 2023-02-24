const root = document.querySelector('#root');

/**Hooks?
 * cara react membawa fitur react sebelumnya seperti state management di class componen
 * dibawa ke function componen
 * jika ingin membut state full / yg ada statenya harus tulis ulang ke class componen
 */

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // this.state untuk membuat state
        this.state = { date: new Date() };
    }

    // untuk lifecycle - di eksekute saat komponen dirender pertamakali
    // sama seperti .useEffect di function
    componentDidMount() {
        this.timeID = setInterval(() => this.tick(), 1000);
    }

    // sama seperti function yang ada di dalam .useEffect
    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    // sama seperti return di function element
    render() {
        return (
            <div>
                <h1>Hello Hooks!</h1>
                <h2>It's {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

// render untuk memunculkan element
ReactDOM.render(<Clock/>, root);
