const root = document.querySelector('#root');

console.log('Automatic compile!')

const element = (
	<div style={{
		width: '200px',
		height: '200px',
		backgroundColor: 'blue',
	}}></div>
);

// render untuk memunculkan element
ReactDOM.render(element, root);
