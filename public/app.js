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

  // function akan dijalankan saat dirender
  React.useEffect(function () {
    console.log(document.getElementById('judul'));
  }, [diklik]
  /** spesific state
   * function hanya akan jalan untuk state tertentu
   * [diklik] artinya, funct hanya akan dieksekusi saat ada perubahan pada state diklik
   * namuan, untuk saat data state count berubah, function tidak diekseksi
   * 
   * Lihatlah console browser
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