import React from "react";

function Overview() {
	return (
		<div className="overview">
			<div class="container">
				<div class="align-items-center my-5">
					{/* <div class="col-lg-7">
						<img
							class="img-fluid rounded mb-4 mb-lg-0"
							src="http://placehold.it/900x400"
							alt="text goes here"
						/>
					</div> */}
					<div class="col-lg-5">
						<h1 class="font-weight-light">Problem</h1>
						<p>
							Insert text about problem here
							<br></br>
							<a href="/problem">Click here to read more about the problem!</a>
						</p>
					</div>
					<div class="col-lg-5">
						<h1 class="font-weight-light">Solution</h1>
						<p>
							Insert text about solution here
							<br></br>
							<a href="/solution">
								Click here to read more about our solution!
							</a>
						</p>
					</div>
					<div class="col-lg-5">
						<h1 class="font-weight-light">Game</h1>
						<p>
							Insert text about game here
							<br></br>
							<a href="/game">Click here to play our game!</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Overview;
