import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-black">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">PY Flask Authentication</span>
				</Link>
				<div className="ml-auto">
					<Link to="/profile">
						<button className="btn btn-primary">Profile</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
