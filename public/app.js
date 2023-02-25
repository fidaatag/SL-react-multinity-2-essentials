const root = document.querySelector('#root');

// menggunakan function componen
function App() {
  // membuat state
  const [activity, setActivity] = React.useState(''); // mendapatkan inputan activity
  const [todos, setTodos] = React.useState([]); // menampung activity kedalm array

  // buat id setiap data yang diinput
  function generateId() {
    return Date.now();
  }

  // saat buttom disubmit, jalankan function ini
  function addTodoHandler(event) {
    event.preventDefault(); // untuk mencegah form tidak reaload terus

    // setTodos([activity])
    // setTodos([data mana yang mau dikumpulkan? data yg diinput]) 
    // jika hanya ([activity]), maka data hanya direplay tapi tidak dipush
    // prinsip dasar .useState : bodoh amat sama data baru, pokoknya datanya baru / ngestate = mengganti data lama

    // menggabungkan data lama dengan data baru / merge menggunakan spread operator
    // setTodos([...todos, activity]);

    // setiap data baru yg ditambah berbentuk objek dgn berisikan id dan activity
    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]);

    // setelah input activity, maka valuenya direset lagi biar user ga ribet remove
    // reset input jadi kosong stlh diinput 
    setActivity('');
  }

  // saat button hapus diklik, maka todonya akan dihapus berdasarkan id
  function removeTodoHandler(todoId) {
    // membuat array yg sudah disucikan dari data yg remove 
    // array baru dgn kondisi tanpa data yg dipilih untuk dihapus
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });

    // memasukan array yg sudah disucikan
    setTodos(filteredTodos);
  }

  // ketika state berubah / activity diinput / todos mendapatkan tambahan koleksi isian array
  // maka, return akan dirender ulang
  // yang dirender hanya bagian yg berubah, tidak semuanya
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktivitas"

    // controled componen - ambil value dari state
    // ini bukan uncontroled comp yg ambil value dari DOM sperti pada vanilaJS
    // maka dari itu, value={activity} --- valuenya ambil dari state activity
    ,
    value: activity

    // function untuk mendapatkan value dari input
    ,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })));
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);