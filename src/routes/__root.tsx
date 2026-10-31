import {
	createRootRoute,
	HeadContent,
	Link,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteFooter } from "../components/layout/site-footer";
import { SiteHeader } from "../components/layout/site-header";
import appCss from "../styles.css?url";
export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ title: "REVO Home Save" },
			{ name: "robots", content: "noindex,nofollow" },
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg?v=revo-house-3",
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: () => (
		<section className="editorial">
			<h1>Page not found</h1>
			<Link to="/">Return home</Link>
		</section>
	),
	errorComponent: () => (
		<section className="editorial">
			<h1>Something went wrong</h1>
			<p>Please reload the page or return home.</p>
			<a href="/">Return home</a>
		</section>
	),
});
function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en-GB">
			<head>
				<HeadContent />
			</head>
			<body>
				<a className="skip-link" href="#main-content">
					Skip to content
				</a>
				<SiteHeader />
				<main id="main-content">{children}</main>
				<SiteFooter />
				<Scripts />
			</body>
		</html>
	);
}
