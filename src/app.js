const root = document.querySelector('#root');

function padaSaatDiklik(pesan) {
    alert(pesan);
}
  
const element = 
    <button 
        onClick={padaSaatDiklik.bind(this, 'aku diklik nich!')}>
            Clik Me
    </button> 
;

console.log(padaSaatDiklik.bind(this, 'aku diklik nich!'))
/**
 * Aturan untuk memanggil function saat di clik
 * -gunakan curly brash
 * -jangan gunakan () untuk memanggil function ketika di clik,
 *  karena (), berarti function dijalankan dulu setelah reload page
 *      onClick ={namaFunction()} ---------- salah
 *      onClick ={namaFunction} ------------ benar
 * 
 * 
 * Cara memanggil function yang memiliki argumen
 * 1. ngebungkus function dengan function
 *      onClick ={namaFunc1() {namaFunc2}}
 * 2. gunakan .bind untuk membuat function2 yg berada didalam function1
 *      onClick ={namaFunction.bind(this, "silahkan isi paramater disini")}
 *      --- "hey! tolong dong kasih argumen ini ketika di execute" kata .bind ---
 */

// render untuk memunculkan element
ReactDOM.render(element, root);