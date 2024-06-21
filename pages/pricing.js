import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
import PricingContent from "../components/Pricing/PricingContent";
import FaqWithVideoModal from "../components/faq/FaqWithVideoModal";
export default function Pricing() {
	return (
		<>
			<Head>
				<title>Pricing Page</title>
			</Head>
			<PageBanner
				title="Pricing"
				content="xmoze offers the most affordable planner you can use to improve your business."
			/>
			<PricingContent />
			<FaqWithVideoModal />
		</>
	);
}
