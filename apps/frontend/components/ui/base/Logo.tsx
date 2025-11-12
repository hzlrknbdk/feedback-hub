import React from "react";

type LogoSize = "small" | "default" | "large";

interface LogoProps {
  size?: LogoSize;
  showText?: boolean;
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  size = "default",
  showText = true,
  onClick,
  className = "",
}) => {
  const sizes: Record<LogoSize, string> = {
    small: "w-8 h-8 text-sm",
    default: "w-10 h-10 text-base",
    large: "w-12 h-12 text-lg",
  };

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {showText && (
        <span className="text-xl font-semibold text-gray-900">
          FeedBack Hub
        </span>
      )}
    </div>
  );
};

export default Logo;
