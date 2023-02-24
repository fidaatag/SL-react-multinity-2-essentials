const root = document.querySelector('#root');
function App() {
  const [login, setLogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "The Apps"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Log In"), /*#__PURE__*/React.createElement("p", null, login ? /*#__PURE__*/React.createElement("b", null, "Berhasil login") : ''), /*#__PURE__*/React.createElement("p", null, login && /*#__PURE__*/React.createElement("b", null, "Berhasil login")), /*#__PURE__*/React.createElement("p", null, login === true && /*#__PURE__*/React.createElement("b", null, "Berhasil login")), /*#__PURE__*/React.createElement("p", null, login ? '' : /*#__PURE__*/React.createElement("i", null, "Belum login")), /*#__PURE__*/React.createElement("p", null, !login && /*#__PURE__*/React.createElement("i", null, "Belum login")), /*#__PURE__*/React.createElement("p", null, login === false && /*#__PURE__*/React.createElement("i", null, "Belum login")));
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);