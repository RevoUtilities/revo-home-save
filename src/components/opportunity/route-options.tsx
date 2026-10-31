import { ArrowUpRight, Check, Footprints, Users } from "lucide-react";
import { site } from "../../config/site";
import { reviewItems, routes } from "../../content/opportunity";
export function RouteOptions() {
	return (
		<section id="routes" className="section" aria-labelledby="routes-title">
			<div className="section-heading ruled">
				<div>
					<p className="eyebrow">DISCOVER THE ROUTES</p>
					<h2 id="routes-title">Which route would you like to explore?</h2>
					<p>
						Start with the route that interests you. Review the
						responsibilities, requirements and current terms before joining.
					</p>
				</div>
				<span className="micro-label outlined">TWO ROUTES TO EXPLORE</span>
			</div>
			<div className="pair">
				{routes.map((route) => {
					const isPartner = route.id === "partner";
					const url = isPartner ? site.links.partner : site.links.connector;
					const Icon = isPartner ? Footprints : Users;
					return (
						<article
							className="tile route-card"
							id={`route-${route.id}`}
							key={route.id}
						>
							<div>
								<div className="route-card-top">
									<span className={`badge square ${isPartner ? "lime" : ""}`}>
										{route.number} / {route.id.toUpperCase()}
									</span>
									<span className="icon-box">
										<Icon size={24} aria-hidden="true" />
									</span>
								</div>
								<h3>{route.title}</h3>
								<p>{route.description}</p>
								<div className="review-box">
									<p className="eyebrow">BEFORE YOU JOIN</p>
									<ul>
										{reviewItems.map((item) => (
											<li key={item}>
												<Check size={16} aria-hidden="true" />
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
							<div>
								{url ? (
									<a
										className={`button full ${isPartner ? "lime" : ""}`}
										href={url}
									>
										{`Explore the ${isPartner ? "Partner" : "Connector"} route`}
										<ArrowUpRight size={18} aria-hidden="true" />
									</a>
								) : null}
								<p className="fine">
									{isPartner
										? "Continue to UW to review the opportunity and registration details."
										: "Review the current Connector details before taking the next step."}
								</p>
							</div>
						</article>
					);
				})}
			</div>
			<Comparison />
		</section>
	);
}
const comparisonRows = [
	[
		"Explore this route",
		"Developing a new business opportunity",
		"Making introductions through your network",
	],
	[
		"What to review",
		"Responsibilities, requirements and current terms",
		"Responsibilities, requirements and current terms",
	],
] as const;
function Comparison() {
	const connectorDestination = site.links.connector ? (
		<a href={site.links.connector}>
			Review Connector details <ArrowUpRight size={14} aria-hidden="true" />
		</a>
	) : (
		<a href="#route-connector">Explore the Connector route above</a>
	);
	return (
		<section
			className="tile comparison"
			id="compare-routes"
			aria-labelledby="comparison-title"
		>
			<div className="tile-heading">
				<div>
					<p className="eyebrow">SIDE BY SIDE</p>
					<h3 id="comparison-title">Compare your options</h3>
				</div>
				<p className="fine">Take time to review both routes.</p>
			</div>
			<table className="comparison-desktop">
				<caption className="sr-only">
					Comparison of the Business Growth Partner and Connector routes
				</caption>
				<thead>
					<tr>
						<th scope="col">What to consider</th>
						<th scope="col">Business Growth Partner</th>
						<th scope="col">Business Growth Connector</th>
					</tr>
				</thead>
				<tbody>
					{comparisonRows.map(([label, partner, connector]) => (
						<tr key={label}>
							<th scope="row">{label}</th>
							<td>{partner}</td>
							<td>{connector}</td>
						</tr>
					))}
					<tr>
						<th scope="row">Where to continue</th>
						<td>
							<a href={site.links.partner}>
								UW registration <ArrowUpRight size={14} aria-hidden="true" />
							</a>
						</td>
						<td>{connectorDestination}</td>
					</tr>
				</tbody>
			</table>
			<div className="comparison-mobile">
				{routes.map((route, index) => (
					<article key={route.id}>
						<h4>{route.title}</h4>
						<dl>
							{comparisonRows.map((row) => (
								<div key={row[0]}>
									<dt>{row[0]}</dt>
									<dd>{row[index + 1]}</dd>
								</div>
							))}
							<div>
								<dt>Where to continue</dt>
								<dd>
									{index === 0 ? (
										<a href={site.links.partner}>UW registration ↗</a>
									) : (
										connectorDestination
									)}
								</dd>
							</div>
						</dl>
					</article>
				))}
			</div>
		</section>
	);
}
