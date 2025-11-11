import { StarHalfIcon, StarIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import Card from "~/components/ui/Card";

interface ReviewCardProps {
	review: string;
	reviewerName: string;
	reviewerPictureUrl: string;
	tag: ReactNode;
	rating: number;
}

const ReviewCard = ({ review, reviewerName, reviewerPictureUrl, rating, tag }: ReviewCardProps) => {
	const stars = () => {
		switch (rating) {
			case 4:
				return (
					<>
						<div className="flex text-3xl mb-3 gap-1 text-yellow-600">
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="bold" />
						</div>
					</>
				);
				break;
			case 4.5:
				return (
					<>
						<div className="flex text-3xl mb-3 gap-1 text-yellow-600">
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarHalfIcon weight="fill" />
						</div>
					</>
				);
				break;
			case 5:
				return (
					<>
						<div className="flex text-3xl mb-3 gap-1 text-yellow-600">
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
							<StarIcon weight="fill" />
						</div>
					</>
				);
				break;
		}
	};

	return (
		<div className="transition-all h-full ease-linear hover:scale-105 cursor-default">
			<Card className="h-full">
				<div className="flex flex-col h-full">
					<div className="pt-3 px-4">
						<div>{stars()}</div>
						<div className="text-sm mb-4">{review}</div>
					</div>
					<div className="pb-3 px-4 mt-auto">
						<div className="flex items-center gap-2">
							<div className="w-10 shrink-0">
								<img className="rounded-full shadow-sm shadow-brown-900/40" src={reviewerPictureUrl} />
							</div>
							<div className="min-w-0">
								<div className="font-zalando-sans-expanded font-semibold text-sm">{reviewerName}</div>
								{tag}
							</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ReviewCard;
