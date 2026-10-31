import { createFileRoute } from "@tanstack/react-router";
import { seo } from "../lib/seo";
export const Route = createFileRoute("/accessibility")({
	head: () =>
		seo(
			"Accessibility | REVO Home Save",
			"Accessibility information for REVO Home Save.",
			"/accessibility",
			true,
		),
	component: () => (
		<section className="editorial">
			<p className="eyebrow">DRAFT · COMPLETE BEFORE LAUNCH</p>
			<h1>Accessibility</h1>
			<p>
				This starter uses semantic landmarks, keyboard-visible focus states and
				responsive layouts. A full accessibility review is required after the
				final design and content are integrated. The operator must add a contact
				route for reporting accessibility issues before launch.
			</p>
		</section>
	),
});
