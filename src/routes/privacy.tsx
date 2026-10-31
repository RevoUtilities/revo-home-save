import { createFileRoute } from "@tanstack/react-router";
import { seo } from "../lib/seo";
export const Route = createFileRoute("/privacy")({
	head: () =>
		seo(
			"Privacy | REVO Home Save",
			"Privacy information for REVO Home Save.",
			"/privacy",
			true,
		),
	component: () => (
		<section className="editorial">
			<p className="eyebrow">DRAFT · COMPLETE BEFORE LAUNCH</p>
			<h1>Privacy</h1>
			<p>
				This starter has no registration form, contact form or analytics
				integration. Registration links lead to external websites with their own
				privacy information. Before launch, the operator must complete this page
				with the correct identity, contact details and information about hosting
				logs and any additional services.
			</p>
		</section>
	),
});
