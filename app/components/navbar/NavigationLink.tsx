import type { ReactElement } from "react";
import { Link } from "react-router";

interface NavigationLinkProps {
	title: string;
	to: string;
	icon: ReactElement;
}

const NavigationLink = ({ title, to, icon }: NavigationLinkProps) => {
	return (
		<>
			<Link to={to} className="flex justify-center items-center text-shadow-sm text-shadow-black/10 h-full py-1 px-4 rounded-lg gap-2 text-white/95 transition-all ease-linear hover:bg-brown-50/8 active:bg-brown-50/10">
				<div className="drop-shadow-sm drop-shadow-black/10 text-lg">{icon}</div>
				<div>{title}</div>
			</Link>
		</>
	);
};

export default NavigationLink;
