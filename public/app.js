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
  React.useEffect(function () {
    // contoh penggunaan library dalam useEffect
    // saat menggunakan library yg butuh akses DOM, maka gunakan didalam useEffect
    console.log('init carausel');

    /**clean up
     * benefit ui react JS --- client side routing - 
     * browser tidak realod saat pindah element, tpi hanya update DOM
     * artinya, jika ada carausel terus pindah page dgn componen berbeda terus balik lagi kesini
     * instance carausel ttp ada / masih aktif, karena tidak direload
     * makanya ada yang namanya clean up / metode destroy
     * gunanya saat pindah page, init carausel dihapus dulu
     * lalu saat balik lagi page ini, akan init carausel yang baru
     * manfaatnya adalah hemat memory
    */

    // contoh kode
    // const carausel = new Slick;

    return function () {
      console.log('destroy carausel!');
      // contoh kode
      // carausel.destroy()
    };
  }
  // []
  /** gunakan specifi state empty array biar init library ga ikutan reload / cuma 1x reload saat pertama buka page
   * namun, saat menggunakan clean up, maka tidak usah gunakan state empty
   * 
   * lihat browse! 
   * saat diklik 'tambah', console muncul destroy init
   */);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiklik(true);
    }
  }, "Klik aku dong!"), /*#__PURE__*/React.createElement("h2", null, "Nilai saat ini: ", count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "tambah"));
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);