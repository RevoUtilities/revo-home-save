import { faqs } from "../../content/opportunity";
export function Faq() {
	return (
		<section id="faqs" className="section" aria-labelledby="faq-title">
			<div className="section-heading">
				<p className="eyebrow">YOUR QUESTIONS</p>
				<h2 id="faq-title">Frequently asked questions</h2>
				<p>A few things to know before taking your next step.</p>
			</div>
			<div className="faq-list">
				{faqs.map(([question, answer], i) => (
					<details className="tile faq-item" key={question} open={i === 0}>
						<summary>
							<span>{question}</span>
							<span className="faq-symbol" aria-hidden="true" />
						</summary>
						<div className="faq-answer">
							<p>{answer}</p>
						</div>
					</details>
				))}
			</div>
		</section>
	);
}
