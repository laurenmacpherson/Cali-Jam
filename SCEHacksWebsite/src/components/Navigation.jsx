import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
	return (
		<div className="navigation">
			<nav class="navbar navbar-expand py-4 navbar-dark bg-dark">
				<div class="container">
					<h class="navbar-brand">Cali-Jam</h>
					<div>
						<ul class="navbar-nav ml-auto">
							<li
								class={`nav-item  ${
									props.location.pathname === "/" ? "active" : ""
								}`}
							>
								<Link class="nav-link" to="/">
									Home
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/problem" ? "active" : ""
								}`}
							>
								<Link class="nav-link" to="/problem">
									Problem
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/solution" ? "active" : ""
								}`}
							>
								<Link class="nav-link" to="/solution">
									Solution
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/game" ? "active" : ""
								}`}
							>
								<Link class="nav-link" to="/game">
									Game
								</Link>
							</li>
							<li
								class={`nav-item  ${
									props.location.pathname === "/about" ? "active" : ""
								}`}
							>
								<Link class="nav-link" to="/about">
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default withRouter(Navigation);
