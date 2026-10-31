import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "../components/opportunity/faq";
import { Hero } from "../components/opportunity/hero";
import {
	ClosingCallToAction,
	CommercialLink,
	HowItWorks,
} from "../components/opportunity/how-it-works";
import { RouteOptions } from "../components/opportunity/route-options";
import { publicPages, site } from "../config/site";
import { seo } from "../lib/seo";
export const Route = createFileRoute("/")({
	head: () => seo(publicPages[0].title, site.description, "/"),
	component: Home,
});
function Home() {
	return (
		<>
			<Hero />
			<section className="editorial section">
				<div>
					<p className="badge compact">A NEW DIRECTION</p>
					<h2>An opportunity that starts with a conversation.</h2>
					<p>
						You might be exploring a secondary income, considering a new
						business opportunity or simply curious about what comes next. Start
						by understanding the routes, then review the current opportunity
						details before deciding.
					</p>
				</div>
			</section>
			<RouteOptions />
			<HowItWorks />
			<CommercialLink />
			<Faq />
			<ClosingCallToAction />
		</>
	);
}
