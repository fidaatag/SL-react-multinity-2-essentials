const root = document.querySelector('#root');

// menggunakan function componen
function App() {

    // membuat state
    const [activity, setActivity] = React.useState('');     // mendapatkan inputan activity
    const [todos, setTodos] = React.useState([]);           // menampung activity kedalm array

    // saat buttom disubmit, jalankan function ini
    function addTodoHandler(event) {
        event.preventDefault(); // untuk mencegah form tidak reaload terus
        
        // setTodos([activity])
        // setTodos([data mana yang mau dikumpulkan? data yg diinput]) 
        // jika hanya ([activity]), maka data hanya direplay tapi tidak dipush
        // prinsip dasar .useState : bodoh amat sama data baru, pokoknya datanya baru / ngestate = mengganti data lama

        // menggabungkan data lama dengan data baru / merge menggunakan spread operator
        setTodos([...todos, activity]);

        // setelah input activity, maka valuenya direset lagi biar user ga ribet remove
        // reset input jadi kosong stlh diinput 
        setActivity(''); 

        console.log(activity);
        console.log(todos);
    }

    // ketika state berubah / activity diinput / todos mendapatkan tambahan koleksi isian array
    // maka, return akan dirender ulang
    // yang dirender hanya bagian yg berubah, tidak semuanya
	return (
		<>
			<h1>Simple Todo List</h1>
			<form onSubmit={addTodoHandler}>
				<input 
                    type="text" 
                    placeholder="Nama Aktivitas"

                    // controled componen - ambil value dari state
                    // ini bukan uncontroled comp yg ambil value dari DOM sperti pada vanilaJS
                    // maka dari itu, value={activity} --- valuenya ambil dari state activity
                    value={activity}
                    
                    // function untuk mendapatkan value dari input
                    onChange={function(event) {
                        setActivity(event.target.value);
                    }}
                />
				<button type="submit">Tambah</button>
			</form>
			<ul>
				{todos.map(function(todo) {
                    return <li key={todo}>{todo}</li>;
                })}
			</ul>
		</>
	)
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);