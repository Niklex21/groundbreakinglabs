import Link from "next/link";

type CustomButtonProps = {
  label: string;
  onClick?: (e?: any) => void;
  link?: string;
  className?: string;
  type?: "button" | "submit";
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  link,
  className,
  type
}) => {
  return (
    <button
      className={`bg-white text-black p-2 rounded-full hover:bg-zinc-100 transition duration-200 ${className}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default CustomButton;
