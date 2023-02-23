const root = document.querySelector('#root');

console.log('Automatic compile!')

const cName = 'box2'
const element = (
    <>
	<div className='box'></div>
	<div className={cName}></div>
	</>
);

// render untuk memunculkan element
ReactDOM.render(element, root);