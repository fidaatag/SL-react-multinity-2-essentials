const root = document.querySelector('#root');
function App() {
  const fruits = ['Apple', 'Orange', 'Grape', 'Banana'];
  console.log(fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", null, fruit);
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  })), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Apple"), /*#__PURE__*/React.createElement("li", null, "Orange"), /*#__PURE__*/React.createElement("li", null, "Grape"), /*#__PURE__*/React.createElement("li", null, "Banana")));
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);