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
    this.state = {
      date: new Date()
    };
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
      date: new Date()
    });
  }

  // sama seperti return di function element
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello Hooks!"), /*#__PURE__*/React.createElement("h2", null, "It's ", this.state.date.toLocaleTimeString()));
  }
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(Clock, null), root);