const root = document.querySelector('#root');
function App() {
  const [login, setLogin] = React.useState(false);
  if (login) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Yea! Bisa login"), ";", /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        setLogin(false);
      }
    }, "Log Out"), ";");
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Login Dulu, Sayton!"), ";", /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Log In"), ";");
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);