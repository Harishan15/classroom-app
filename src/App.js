import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<h1>Hello World</h1>
			<Login />
			<Signup />
		</React.Fragment>
	);
};

export default App;
