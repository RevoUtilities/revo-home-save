import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "../../config/site";
import { Brand } from "./brand";

const navigation = [
	["The opportunity", "opportunity"],
	["Choose your route", "routes"],
	["How it works", "how-it-works"],
	["FAQs", "faqs"],
] as const;
export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const toggle = useRef<HTMLButtonElement>(null);
	function close() {
		setOpen(false);
	}
	useEffect(() => {
		if (!open) return;
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				toggle.current?.focus();
			}
		};
		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [open]);
	return (
		<header className="site-header">
			<div className="header-inner">
				<Link
					to="/"
					className="brand"
					onClick={close}
					aria-label="REVO Home Save home"
				>
					<Brand />
				</Link>
				<nav aria-label="Main navigation" className="desktop-nav">
					{navigation.map(([label, id]) => (
						<a key={id} href={`/#${id}`}>
							{label}
						</a>
					))}
					<a className="nav-external" href={site.links.revo}>
						REVO Utilities <ArrowUpRight size={15} aria-hidden="true" />
					</a>
				</nav>
				<a className="button lime header-cta" href="/#routes">
					Explore the opportunity
				</a>
				<button
					ref={toggle}
					type="button"
					className="menu-toggle"
					aria-expanded={open}
					aria-controls="mobile-navigation"
					aria-label={open ? "Close navigation" : "Open navigation"}
					onClick={() => setOpen(!open)}
				>
					{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
				</button>
			</div>
			<nav
				id="mobile-navigation"
				aria-label="Mobile navigation"
				className="mobile-nav"
				hidden={!open}
			>
				{navigation.map(([label, id]) => (
					<a key={id} href={`/#${id}`} onClick={close}>
						{label}
					</a>
				))}
				<a href={site.links.revo}>
					REVO Utilities <ArrowUpRight size={16} aria-hidden="true" />
				</a>
				<Link className="button lime" to="/" hash="routes" onClick={close}>
					Explore the opportunity
				</Link>
			</nav>
		</header>
	);
}
