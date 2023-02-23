const root = document.querySelector('#root');

/**
 * State = data yang ada didalam react componen - jalannya di react componen
 * data itu terisolasi
 * data itu hanya bisa diakses componen itu
 * data itu tidak bisa diakses componen lain
 * data itu bisa diubah
 * saat data diubah, componen akan dirender ulang
 * 
 * react componen?
 * sebuah function yang namanya diawali huruf besar
 * returnnya berupa react element
 */

function BuatReactComponen() {
  // cara distructering
  const [count, setCount] = React.useState(0);

  // -- cara readable ---
  // const dataState = React.useState(0);
  // console.log(dataState);
  // const count = dataState[0];
  // const setCount = dataState[1]

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, " - "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, " + "));
}

// render untuk memunculkan element
ReactDOM.render( /*#__PURE__*/React.createElement(BuatReactComponen, null), root);