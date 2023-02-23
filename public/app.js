const root = document.querySelector('#root');
console.log('Automatic compile!');
const element = /*#__PURE__*/React.createElement("div", {
  style: {
    width: '200px',
    height: '200px',
    backgroundColor: 'blue'
  }
});

// render untuk memunculkan element
ReactDOM.render(element, root);