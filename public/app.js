const root = document.querySelector('#root');
console.log('Automatic compile!');
const cName = 'box2';
const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "box"
}), /*#__PURE__*/React.createElement("div", {
  className: cName
}));

// render untuk memunculkan element
ReactDOM.render(element, root);