import { site } from "../config/site";
export function seo(
	title: string,
	description: string,
	path: string,
	noindex = false,
) {
	const canonical = site.url ? new URL(path, site.url).href : undefined;
	const image = site.url
		? new URL("/images/og-default.png", site.url).href
		: undefined;
	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{
				name: "robots",
				content:
					site.indexable && !noindex ? "index,follow" : "noindex,nofollow",
			},
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: site.name },
			{ property: "og:locale", content: "en_GB" },
			...(canonical ? [{ property: "og:url", content: canonical }] : []),
			...(image
				? [
						{ property: "og:image", content: image },
						{
							property: "og:image:alt",
							content: "REVO Home Save — Explore your next opportunity",
						},
					]
				: []),
			{ name: "twitter:card", content: "summary_large_image" },
		],
		links: canonical ? [{ rel: "canonical", href: canonical }] : [],
	};
}
