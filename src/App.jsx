import { useEffect, useState } from "react";

import "./App.css";

function Example() {
	// useEffect that starts a timer which runs every second
	useEffect(() => {
		const timerId = setInterval(() => {
			console.log("Timer running");
		}, 1000);

		// This is the cleanup function
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return <div>Example is showing</div>;
}

function App() {
	const [showComponent, setShowComponent] = useState(true);

	function onButtonClick() {
		setShowComponent(false);
	}

	return (
		<div>
			{showComponent ? <Example /> : null}
			<button onClick={onButtonClick}>Hide component</button>
		</div>
	);
}

export default App;

// function App() {
// 	const [count, setCount] = useState(0);
// 	const [secondCount, setSecondCount] = useState(0);

// 	useEffect(function () {
// 		// This is the callback that runs inside of the useEffect
// 		console.log("useEffect has run");
// 	}, []); // This is the dependency array

// 	return (
// 		<div>
// 			<p>Count: {count}</p>
// 			<p>secondCount: {secondCount}</p>
// 			<button onClick={() => setCount((count) => count + 1)}>+</button>
// 			<button onClick={() => setSecondCount((count) => count + 1)}>+</button>
// 		</div>
// 	);
// }

// export default App;
