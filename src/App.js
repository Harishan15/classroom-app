import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navBar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NewCourse from "./pages/newCourse";
import Dashboard from "./pages/dashboard";
import CourseDetails from "./pages/courseDetails";
import "./App.css";

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" render={() => "Home Sweet Home"} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/course-details" component={CourseDetails} />
				<Route path="/create-new-course" component={NewCourse} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
