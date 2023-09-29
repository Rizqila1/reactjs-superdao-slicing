import { Link } from "react-router-dom";

export const Button = ({
  children,
  variant = "yellow",
  className,
  onClick,
  href,
}) => {
  function buttonVariant(payload) {
    switch (payload) {
      case "yellow":
        return "btn bg-customyellow hover:bg-yellow-500";

      case "white":
        return "btn bg-white hover:bg-gray-100";

      case "secondary":
        return "btn bg-[#EFEFEF] hover:bg-gray-100";

      case "dark":
        return "btn bg-darkblue hover:bg-slate-700";

      case "purple":
        return "btn bg-palmpurple hover:bg-purple-400";

      default:
        return "btn bg-customyellow hover:bg-yellow-500";
    }
  }
  return (
    <Link
      className={`${buttonVariant(variant)} ${variant} ${className}`}
      onClick={onClick}
      to={href}
    >
      {children}
    </Link>
  );
};

export default Button;
