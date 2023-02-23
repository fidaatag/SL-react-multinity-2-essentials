const root = document.querySelector('#root');

console.log('Automatic compile!')

function tick() {
    /** Render ala react
     *  hanyak akan merender element yg memang butuh berubah seperti jam
     *  lebih efisien dan menghemat memori
     **/
    const element = (
        <div>
            <h1>Sekarang Jam</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );

    // render untuk memunculkan element
    ReactDOM.render(element, root);

    
    /** Template literal - cara vanilla js
     *  semua element yg ada didalam div dirender 
     *  namun, untuk bisa mengatur agar hanya jam saja yang terupdate cukup sulit
     *  cara ini tidak efiesien, 
     *  terutama saat terdapat eventhandler, dan juga
     *  membuat memori lebih banyak digunakan
     * 
     
    const element = `
        <div>
            <h1>Sekarang Jam</h1>
            ${new Date().toLocaleTimeString()}
        </div>
    `;

    // render untuk memunculkan element
    root.innerHTML = element **/
}

tick();
setInterval(function() {
    tick();
}, 1000);