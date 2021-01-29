import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
			<p className="h5 my-0 me-md-auto fw-normal">Classroom</p>
			<nav className="my-2 my-md-0 me-md-3">
				<NavLink className="p-2 text-dark" to="/">
					Home
				</NavLink>
				<NavLink className="p-2 text-dark" to="/dashboard">
					Dashboard
				</NavLink>
				<NavLink className="p-2 text-dark" to="/course-details">
					Course
				</NavLink>
				<NavLink className="p-2 text-dark" to="/create-new-course">
					New
				</NavLink>
			</nav>
			<NavLink to="/login" className="btn btn-outline-primary mx-2">
				Log in
			</NavLink>
			<NavLink to="/signup" className="btn btn-outline-primary">
				Sign up
			</NavLink>
		</header>
	);
};

export default Navbar;
