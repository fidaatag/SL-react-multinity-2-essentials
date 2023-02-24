const root = document.querySelector('#root');
function App() {
  const nameRef = React.useRef(null);
  function ketikaSubmit(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    console.log('Name: ', name);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    ref: nameRef
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);