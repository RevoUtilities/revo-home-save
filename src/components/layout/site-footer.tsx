import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { site } from "../../config/site";
import { Brand } from "./brand";
export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-top">
					<div>
						<Link to="/" className="brand" aria-label="REVO Home Save home">
							<Brand />
						</Link>
						<p>
							Explore connections, possibilities
							<br />
							and your next step.
						</p>
					</div>
					<div className="footer-links">
						<nav aria-label="Footer">
							<a href="/#opportunity">The opportunity</a>
							<a href="/#routes">Choose your route</a>
							<a href="/#faqs">FAQs</a>
							<a href={site.links.revo}>
								REVO Utilities <ArrowUpRight size={14} aria-hidden="true" />
							</a>
							<a href={site.links.subBroker}>
								Sub-broker partnerships{" "}
								<ArrowUpRight size={14} aria-hidden="true" />
							</a>
						</nav>
						<nav aria-label="Site information">
							<Link to="/privacy">Privacy</Link>
							<Link to="/accessibility">Accessibility</Link>
						</nav>
					</div>
				</div>
				<div className="footer-bottom">
					<p>
						© {new Date().getFullYear()} {site.name}. All rights reserved.
					</p>
					<p>Earnings vary and are not guaranteed.</p>
				</div>
			</div>
		</footer>
	);
}
