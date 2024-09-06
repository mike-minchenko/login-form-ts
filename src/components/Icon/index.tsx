import { ICONS } from './constants';

interface IconProps {
	icon: keyof typeof ICONS;
	className?: string;
}

const Icon = ({ icon, className = '' }: IconProps) => {
	return <span className={`icon material-symbols-outlined ${className}`}> {icon} </span>;
};

export default Icon;
