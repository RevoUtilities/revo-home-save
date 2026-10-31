const configuredUrl = import.meta.env.VITE_SITE_URL?.trim();
function productionOrigin(value: string | undefined) {
	if (!value) return undefined;
	const url = new URL(value);
	if (
		url.protocol !== "https:" ||
		url.pathname !== "/" ||
		url.search ||
		url.hash
	) {
		throw new Error(
			"VITE_SITE_URL must be an HTTPS origin without a path, query or fragment.",
		);
	}
	return url.origin;
}
export const site = {
	name: "REVO Home Save",
	description:
		"Explore the Business Growth Partner and Business Growth Connector routes with REVO Home Save.",
	url: productionOrigin(configuredUrl),
	indexable:
		import.meta.env.VITE_SITE_INDEXABLE === "true" &&
		Boolean(configuredUrl) &&
		(!import.meta.env.VERCEL_ENV ||
			import.meta.env.VERCEL_ENV === "production"),
	links: {
		partner:
			import.meta.env.VITE_UW_PARTNER_URL || "https://uw.co.uk/partner/join/",
		connector: import.meta.env.VITE_UW_CONNECTOR_URL || undefined,
		revo: "https://www.revo-utilities.com/",
		subBroker: "https://www.revo-utilities.com/partners/sub-brokers",
	},
} as const;
export const publicPages = [
	{
		path: "/",
		title: "REVO Home Save | Explore your next opportunity",
		description: site.description,
	},
];
