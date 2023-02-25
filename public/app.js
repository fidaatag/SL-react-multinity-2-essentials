const root = document.querySelector('#root');
function App() {
  // membuat state
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  function addTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, activity]); //spred operator
    setActivity(''); // reset input jadi kosong stlh diinput

    console.log(activity);
    console.log(todos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktivitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);