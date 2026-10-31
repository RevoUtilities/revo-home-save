import { ArrowDown, ArrowRight, Info } from "lucide-react";
export function Hero() {
	return (
		<section
			className="hero section"
			id="opportunity"
			aria-labelledby="hero-title"
		>
			<div className="tile lime hero-main">
				<div>
					<p className="badge">
						<span className="dot" />
						REVO HOME SAVE · THE OPPORTUNITY
					</p>
					<h1 id="hero-title">
						Your next opportunity starts with a connection.
					</h1>
					<p className="hero-description">
						Explore the Business Growth Partner and Business Growth Connector
						routes — two options for people considering extra income or a new
						business direction.
					</p>
				</div>
				<div className="hero-bottom">
					<div className="actions">
						<a className="button" href="#route-partner">
							Explore Partner <ArrowDown size={18} aria-hidden="true" />
						</a>
						<a className="button inverted" href="#route-connector">
							Explore Connector <ArrowDown size={18} aria-hidden="true" />
						</a>
					</div>
					<a className="text-link compare-link" href="#compare-routes">
						Help me compare <ArrowRight size={18} aria-hidden="true" />
					</a>
					<p className="fine inline-note">
						<Info size={17} aria-hidden="true" />
						Earnings vary and are not guaranteed.
					</p>
				</div>
			</div>
			<div className="hero-side">
				<div className="tile flow-tile">
					<div className="tile-heading">
						<h2>Two routes to explore</h2>
						<span className="micro-label">AT A GLANCE</span>
					</div>
					<div className="route-flow">
						<div className="flow-label">
							<strong>01 · Partner</strong>
						</div>
						<p>Explore a new business opportunity.</p>
						<div className="flow-path">
							<span>You</span>
							<ArrowRight size={18} aria-hidden="true" />
							<span className="lime">Partner route</span>
						</div>
					</div>
					<div className="route-flow neutral">
						<div className="flow-label">
							<strong>02 · Connector</strong>
						</div>
						<p>Explore making introductions.</p>
						<div className="flow-path">
							<span>You</span>
							<ArrowRight size={18} aria-hidden="true" />
							<span>Connector route</span>
						</div>
					</div>
					<p className="flow-note">
						Review the details for each route before deciding.
					</p>
				</div>
				<div className="tile dark pathfinder">
					<span className="badge lime compact">YOUR NEXT STEP</span>
					<h2>Two routes. One place to start.</h2>
					<p>
						Review the routes, responsibilities and current terms side by side.
					</p>
					<div className="pathfinder-link">
						<a className="text-link" href="#compare-routes">
							Compare the routes <ArrowRight size={18} aria-hidden="true" />
						</a>
					</div>
					<p className="fine">
						Partner registration takes place on UW’s website.
					</p>
				</div>
			</div>
		</section>
	);
}
