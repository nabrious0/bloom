import type { ReactElement } from "react";

interface SubscriptionBenefitProps {
	icon: ReactElement;
	title: string;
	description: string;
}

const SubscriptionBenefit = ({ icon, title, description }: SubscriptionBenefitProps) => {
	return (
		<>
			<div className="backdrop-blur-sm bg-black/40 p-4 rounded-xl h-full flex flex-col [box-shadow:inset_0_1px_3px_rgb(0,0,0,90%)] border-b border-b-brown-50/[10%] text-shadow-sm text-shadow-black/20 cursor-default">
				<div className="text-4xl mb-2 text-brown-50 drop-shadow-sm drop-shadow-black/20">{icon}</div>
				<div className="mt-auto">
					<div className="font-zalando-sans-expanded font-semibold text-brown-50 mb-1">{title}</div>
					<div className="text-sm text-brown-50 opacity-50">{description}</div>
				</div>
			</div>
		</>
	);
};

export default SubscriptionBenefit;
