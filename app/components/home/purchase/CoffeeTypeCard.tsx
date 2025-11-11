import { ShoppingCartIcon } from "@phosphor-icons/react";
import Card from "~/components/ui/Card";
import Button from "~/components/ui/form/Button";

interface CoffeeTypeCardProps {
	name: string;
	description: string;
	iconUrl: string;
	origin: string;
	flavor: string;
}

const CoffeeTypeCard = ({ name, description, origin, flavor, iconUrl }: CoffeeTypeCardProps) => {
	return (
		<>
			<Card className="h-full">
				<div className="flex flex-col h-full px-4 py-4">
					<div className="max-w-[120px] mb-4 mx-auto -mt-22">
						<img src={iconUrl} />
					</div>
					<div className="mb-3">
						<div className="font-zalando-sans-expanded font-semibold mb-2">{name}</div>
						<div className="text-sm text-brown-700 mb-2">{description}</div>
						<div className="text-sm mb-2">
							<span className="inline-block text-base text-brown-600 me-2">•</span>
							<span className="inline-block text-base me-1.5 font-zalando-sans-expanded text-brown-600 underline underline-offset-1 decoration-2 decoration-brown-700/35 font-semibold">origin:</span>
							<span>{origin}</span>
						</div>
						<div className="text-sm mb-4">
							<span className="inline-block text-base text-brown-600 me-2">•</span>
							<span className="inline-block text-base me-1.5 font-zalando-sans-expanded text-brown-600 underline underline-offset-1 decoration-2 decoration-brown-700/35 font-semibold">flavor:</span>
							<span>{flavor}</span>
						</div>
					</div>
					<div className="w-max mt-auto mx-auto">
						<Button color="secondary">
							<div className="text-lg me-2 drop-shadow-xxs drop-shadow-black/55">
								<ShoppingCartIcon weight="bold" />
							</div>
							Purchase Now
						</Button>
					</div>
				</div>
			</Card>
		</>
	);
};

export default CoffeeTypeCard;
