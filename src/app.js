const root = document.querySelector('#root');

/** Componen lifecycle? 
 * function akan dieksekusi saat function pembungkusnya dirender
 * jadi, saat componen dirender browser 
 * maka, function bisa digunakan untuk melakukan perintah
 * 
 * bukan untuk render pertama saja, 
 * tetapi jika dirender ulang krn ada perubahan function akan dieksekusi lagi
 */

function App() {
    // dirender = ketika data state berubah function dijalankan lagi
    const [diklik, setDiklik] = React.useState(false);
    const [count, setCount] = React.useState(0);

    /**Istilah lifecycle class component :
     * Component did mount?
     * apakah componen udh dimount? kalo udah, funct bisa dieksekui
     * cirinya adalah dengan menggunakan spesific state
     * 
     * Component did update?
     * apakah ada update? iya! render lagi lagi dan lagi
     * istilah ini digunakan...
     * saat tidak terdapat spesific state /biasa disebut "second argumen empty array"  
     */

    /**Istilah lifecycle function component :
     * jika pada class menggunakan 'component did ...?'
     * maka pada function mengunakan .useEffect 
     * nanti didalamnya bisa diberikan banyak function sesuai dengan kebutuhan
     */

    // function akan dijalankan saat dirender
    React.useEffect(
        function(){
            console.log('execute!')
            },
            []
            /** spesific state kosong ---- 
             * apapun perubahan value state(all), funct tidak akan di eksekusi
             * funct hanya akan dijalankan saat reload page pertama
             * 
             * Lihatlah console browser
             */ 
    );

    return (
        <>
        <h1 id='judul'>Hello ini judul</h1>
        <button onClick ={function() {setDiklik(true)}}>Klik aku dong!</button>
        
        <h2>Nilai saat ini: {count}</h2>
        <button onClick ={function() {setCount(count + 1)}}>tambah</button>
        </>
    )
}

// render untuk memunculkan element
ReactDOM.render(<App/>, root);
