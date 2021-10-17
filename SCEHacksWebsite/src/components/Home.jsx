import React from "react";

function Home() {
	return (
		<div class="container">
			<div class="align-items-center my-5">
				<div class="col-lg">
					<h1 class="font-weight-light">Welcome!</h1>
					<img
						class="img-fluid rounded mb-4 mb-lg"
						src="https://cdn.discordapp.com/emojis/685697151988400138.gif"
						alt=""
					/>
					<p>
						Chikara Coding would like to welcome you to our project for SCEHacks
						2021 - Code for California! Our goal with this website is to raise
						awareness about traffic congestion issues in the state of
						California, its impacts on society, and suggest ways to commute
						smarter.
						<br></br>
						<br></br>
						Please use the navigation bar above (or the links below) to explore
						the various pages.
					</p>
				</div>
				{/* <div class="col-lg-7">
						<img
							class="img-fluid rounded mb-4 mb-lg-0"
							src="http://placehold.it/900x400"
							alt="text goes here"
						/>
					</div> */}
				<div class="col-lg">
					<h1 class="font-weight-light">Problem</h1>
					<p>
						Traffic jams and congestion are a huge issue in California,
						especially in the Bay Area. According to census transportation data,
						the “mean travel time to work” from 2015 to 2019 was 28.9 minutes
						(United States Census Bureau, n.d.). This translates to an average
						of approximately 7200 minutes a year one way, or 14,400 minutes
						traveling to and from work...
						<br></br>
						<a href="/problem">Click here to read more about the problem!</a>
					</p>
				</div>
				<div class="col-lg">
					<h1 class="font-weight-light">Solution</h1>
					<p>
						An effective solution to solve traffic congestion issues is to
						utilize public transport and carpool. There are many benefits to
						using public transportation and carpooling. “Public transportation
						use saves the U.S. the equivalent of 4.2 billion gallons of gasoline
						annually — and more than 11 million gallons of gasoline per day”...
						<br></br>
						<a href="/solution">Click here to read more about our solution!</a>
					</p>
				</div>
				<div class="col-lg">
					<h1 class="font-weight-light">Game</h1>
					<p>
						Our game is designed to demonstrate the differences between
						commuting by car and public transportation to go to work. By doing
						this, we can show that there are other fast and viable modes of
						transportations that are more eco-friendly to use.
						<br></br>
						<a href="/game">Click here to play our game!</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
