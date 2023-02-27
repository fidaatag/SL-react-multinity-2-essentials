const root = document.querySelector('#root');

// menggunakan function componen
function App() {

    // membuat state
    const [activity, setActivity] = React.useState('');     // mendapatkan inputan activity
    const [todos, setTodos] = React.useState([]);           // menampung activity kedalm array
    const [edit, setEdit] = React.useState({});

    // buat id setiap data yang diinput
    function generateId() {
        return Date.now();
    }

    // saat buttom disubmit, jalankan function ini
    function saveTodoHandler(event) {
        event.preventDefault(); // untuk mencegah form tidak reaload terus

        // up date todo setelah diedit
        if(edit.id) {

            // membuat object baru yaitu hasil editan
            const updatedTodo = {
                id: edit.id,        // id lama
                activity,           // activity yg terbaru
            };

            // mencari tau index todo yg mau diedit 
            const editTodoIndex = todos.findIndex(function(todo) {
                return todo.id == edit.id;
            });

            console.log(editTodoIndex); // cek posisi index mana yg akan diedit
            console.log(updatedTodo);   // cek id dan activity yg sudah diedit

            // setalah tau posisi index yg akan diedit
            // clone / buat array kumpulan todo biar tidak tercampur dgn array lama (blm edit)
            // data array sebenarnya diambil dari data lama, 
            // lalu array baru terbuat dan siap dimasukan data hasil editan
            const updatedesTodos = [...todos];

            // setalah clone selesai, berdasarkan index yg ditemukan, 
            // lanjutnya adalah set dengan data yang baru / ganti data lama jadi beru berdasarkan index yg ditemukan
            updatedesTodos[editTodoIndex] = updatedTodo;

            // kode selesai sampai sini jika mode edit, tidak pakai else, lebih clear ini
            // setelah diset, masukan kedalam array utama yg akan ditampilkan
            setTodos(updatedesTodos);

            // agar setelah batal edit diklik kembali ke mode tambah, maka returnnya adalah cancleedit
            return cancelEditHandler();
        }

        // setTodos([activity])
        // setTodos([data mana yang mau dikumpulkan? data yg diinput]) 
        // jika hanya ([activity]), maka data hanya direplay tapi tidak dipush
        // prinsip dasar .useState : bodoh amat sama data baru, pokoknya datanya baru / ngestate = mengganti data lama

        // menggabungkan data lama dengan data baru / merge menggunakan spread operator
        // setTodos([...todos, activity]);

        // setiap data baru yg ditambah berbentuk objek dgn berisikan id dan activity
        setTodos([
            ...todos, 
            {
                id: generateId(),
                activity, // karena namanya sama bisa tulis satu aja
            }
        ]);

        // setelah input activity, maka valuenya direset lagi biar user ga ribet remove
        // reset input jadi kosong stlh diinput 
        setActivity(''); 
    }

    // saat button hapus diklik, maka todonya akan dihapus berdasarkan id
    function removeTodoHandler(todoId) {

        // membuat array yg sudah disucikan dari data yg remove 
        // array baru dgn kondisi tanpa data yg dipilih untuk dihapus
        const filteredTodos = todos.filter(function(todo) {
            return todo.id !== todoId;
        });

        // memasukan array yg sudah disucikan
        setTodos(filteredTodos);

        // saat di mode edit, dan ingin dihapus
        // maka seharusnya semua data terhapus termasuk dgn yg ada di dalam inputan
        // cancelEditHandler(); ---- kode kurang efisien
        // kode dibawah lebih efisien, function akan dieksekusi bila ada id dalam object edit / dalam mode edit
        // jadi saat tidak dlm mode edit, tidak akan memanggil function canceledit
        if(edit.id) cancelEditHandler();
    }

    function editTodoHandler(todo) {
        
        // cek id dan nama todo yg mau dihapus
        console.log(todo);

        // menampilkan nama todo yg mau dihapus ke kolom inputan
        setActivity(todo.activity);

        // mengatur perubahan button tambah jadi simpan perubahan saat diklik edit
        setEdit(todo);
    }

    function cancelEditHandler() {
        console.log('cancel edit'); // mencari tau, function ke-trigger saat apa saja?
        setEdit({});                // set edit jadi empty object
        setActivity('');            // set activity jadi empty string
    }

    // ketika state berubah / activity diinput / todos mendapatkan tambahan koleksi isian array
    // maka, return akan dirender ulang
    // yang dirender hanya bagian yg berubah, tidak semuanya
	return (
		<>
			<h1>Simple Todo List</h1>
			<form onSubmit={saveTodoHandler}>
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
				<button type="submit">{edit.id ? 'Simpan Perubahan' : 'Tambah'}</button>
                {edit.id && <button onClick={cancelEditHandler}>Batal Edit</button>}
			</form>
			<ul>
				{todos.map(function(todo) {
                    return (
                        <li key={todo.id}>{todo.activity}
                            <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                            <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                        </li>
                        
                        );
                })}
			</ul>
		</>
	)
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);