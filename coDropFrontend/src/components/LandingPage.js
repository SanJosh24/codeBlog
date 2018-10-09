import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class LandingPage extends Component {
	render() {
		return (
			<div className="LandingPage">
				<div className="part1">
					<div className="CoDropMan">
						<img src="/CoDropManOnDrain.png" />
					</div>
					<div className="topHeader">
						{/* <img src="/waterSplat.png" alt="" className="splat"/> */}
						<h2>
							“when you don't create things, you become defined by your tastes rather than ability. your
							tastes only narrow & exclude people. so create.”
						</h2>
						<h5>― Why The Lucky Stiff</h5>
					</div>
				</div>

				<div className="part2">
					<div className="drinking">
						<img src="/drinkingWater.png" />
					</div>
					<div className="welcome">
						<h1>
							<b>Welcome to CoDrop!</b>
						</h1>
						<br />
						<p>
							CoDrop is a non-profit organization who dedicate ourselves to serve computer programmers
							needs! The goal for this site is to have users feel confortable sharing their daily coding
							blogs. CoDrop can also be used to have users privately track their blogs. Excited yet? Get
							started now!
						</p>
            <Link to ="/signup">
						<button className="buttonz">Signup</button>
            </Link>
					</div>
				</div>

				<div className="part3">
					<h1>
						<b>Benefits of Blogging</b>
					</h1>
					<div className="part3gifs">
						<div className="writer">
							<img src="/becomeBetterWriter.gif" />
							<h3>Become a better writer!</h3>
						</div>
						<div className="network">
							<img src="/buildNetwork.gif" />
							<h3>Build a Network!</h3>
						</div>
						<div className="express">
							<img src="/expressYourself.gif" />
							<h3>Express yourself!</h3>
						</div>
						<div className="control">
							<img src="/takeControlOfOnlineIdentity.gif" />
							<h3>Take control of your online identity!</h3>
						</div>
						<div className="influence">
							<img src="/gainInfluence.gif" />
							<h3>Gain influence!</h3>
						</div>
					</div>
				</div>

				<footer>
					<div className="copyright">
						<p>© 2018 CoDrop, Inc. All Rights Reserved</p>
					</div>
					<div className="terms">
						<p>
							<a href="" className="term">
								Terms of Use
							</a>
							<a href="" className="policy">
								CoDrop Privacy Policy
							</a>
							<a href="" className="act">
								CA Supply Chains Act
							</a>
						</p>
					</div>
				</footer>
			</div>
		);
	}
}
export default LandingPage;
