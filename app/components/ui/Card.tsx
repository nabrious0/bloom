import type { ReactNode } from "react";

interface CardProps {
	children: ReactNode;
	className?: string;
}

const Card = ({ children, className: customClasses }: CardProps) => {
	return (
		<>
			<div>wow</div>
			<div className={`bg-gradient-to-t from-brown-50 to-white rounded-xl shadow-sm shadow-brown-500/60 ring ring-brown-800/30 ${customClasses}`}>{children}</div>
		</>
	);
};

export default Card;
