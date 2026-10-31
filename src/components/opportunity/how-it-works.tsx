import {
	ArrowRight,
	ArrowUpRight,
	BookOpen,
	ClipboardCheck,
	ExternalLink,
	LockKeyhole,
} from "lucide-react";
import { site } from "../../config/site";
import { steps } from "../../content/opportunity";

const icons = [BookOpen, ClipboardCheck, ExternalLink];
export function HowItWorks() {
	return (
		<section
			id="how-it-works"
			className="section"
			aria-labelledby="steps-title"
		>
			<div className="section-heading">
				<p className="eyebrow">STEP BY STEP</p>
				<h2 id="steps-title">Your next step, made simple.</h2>
			</div>
			<div className="steps">
				{steps.map(([title, body, note], i) => {
					const Icon = icons[i];
					return (
						<article className="tile step-card" key={title}>
							<div>
								<span className="step-number">0{i + 1}</span>
								<h3>{title}</h3>
								<p>{body}</p>
							</div>
							<p className="step-note">
								<Icon size={16} aria-hidden="true" />
								{note}
							</p>
						</article>
					);
				})}
			</div>
			<div className="info-grid">
				<div className="tile pale registration-note">
					<div>
						<p className="eyebrow">REGISTRATION</p>
						<h3>Your registration stays with UW.</h3>
						<p>
							This website does not collect registration details. Review the
							current information on the relevant external website before
							joining.
						</p>
					</div>
					<span className="icon-box round">
						<LockKeyhole size={24} aria-hidden="true" />
					</span>
				</div>
				<div className="tile backlink-tile">
					<div>
						<span className="micro-label">REVO UTILITIES</span>
						<h3>Explore REVO Utilities</h3>
						<p>
							Discover energy, water and telecoms services for UK businesses.
						</p>
					</div>
					<a className="text-link" href={site.links.revo}>
						Visit REVO Utilities <ArrowUpRight size={18} aria-hidden="true" />
					</a>
				</div>
			</div>
		</section>
	);
}
export function CommercialLink() {
	return (
		<section
			className="tile commercial section"
			aria-labelledby="commercial-title"
		>
			<div>
				<span className="badge lime square compact">REVO UTILITIES</span>
				<h2 id="commercial-title">
					Looking for a business utilities partnership?
				</h2>
				<p>
					Explore REVO Utilities’ separate sub-broker partnership opportunity
					for people who support businesses with utilities and cost reduction.
				</p>
			</div>
			<a className="button" href={site.links.subBroker}>
				Explore sub-broker partnerships{" "}
				<ArrowUpRight size={18} aria-hidden="true" />
			</a>
		</section>
	);
}
export function ClosingCallToAction() {
	return (
		<section className="tile dark closing" aria-labelledby="closing-title">
			<span className="badge dark-badge">
				<span className="dot" />
				YOUR NEXT STEP
			</span>
			<h2 id="closing-title">Ready to explore what comes next?</h2>
			<p>Compare the routes and take your next step when you’re ready.</p>
			<div className="closing-actions">
				<a className="button lime" href="#routes">
					Choose your route <ArrowRight size={18} aria-hidden="true" />
				</a>
				<p className="fine">
					Income is not guaranteed. Review the current opportunity terms before
					joining.
				</p>
			</div>
		</section>
	);
}
