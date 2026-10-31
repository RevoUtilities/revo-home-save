import { createFileRoute } from "@tanstack/react-router";
import { site } from "../config/site";
export const Route = createFileRoute("/robots.txt")({
	server: {
		handlers: {
			GET: () =>
				new Response(
					site.indexable && site.url
						? `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`
						: "User-agent: *\nDisallow: /\n",
					{ headers: { "Content-Type": "text/plain; charset=utf-8" } },
				),
		},
	},
});
