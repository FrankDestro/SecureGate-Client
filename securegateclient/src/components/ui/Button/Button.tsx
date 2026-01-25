import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Bars, Oval, ThreeDots } from "react-loader-spinner";
import "./Button.css";

type Props = {
  text: string;
  icon?: IconProp;
  background?: string;
  hoverColor?: string;
  size?: "small" | "medium" | "large";
  borderRadius?: string;
  height?: string;
  width?: string;
  fullWidth?: boolean;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loadingText?: string;
  typeSppiner?: string;
    form?: string; // <-- ADICIONADO AGORA

};

function Button({
  text,
   form,
  icon,
  background,
  hoverColor,
  size = "medium",
  borderRadius = "12px",
  height = "auto",
  width = "auto",
  fullWidth = false,
  type = "button",
  isLoading = false,
  onClick,
  disabled = false,
  loadingText = "Buscando...",
  typeSppiner = "Oval",
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const renderSpinner = () => {
    switch (typeSppiner) {
      case "bars":
        return (
          <Bars
            height="30"
            width="30"
            color="white"
            ariaLabel="bars-loading"
            visible={true}
          />
        );
      case "oval":
        return (
          <Oval
            height="30"
            width="30"
            color="white"
            secondaryColor="white"
            ariaLabel="oval-loading"
            visible={true}
          />
        );
      case "three-dots":
      default:
        return (
          <ThreeDots
            height="30"
            width="30"
            color="white"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        );
    }
  };

  return (
    <div>
      <button
        className={`button-container ${size}`}
        type={type}
         form={form} 
        style={{
          background: isHovered && hoverColor ? hoverColor : background,
          borderRadius,
          height,
          width: fullWidth ? "100%" : width,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        disabled={isLoading || disabled}
      >
        {isLoading ? (
          <div className="container-spiner-button-login">
            {renderSpinner()}
            <span>{loadingText}</span>
          </div>
        ) : (
          <>
            {icon && (
              <FontAwesomeIcon icon={icon} style={{ marginRight: "8px" }} />
            )}
            {text}
          </>
        )}
      </button>
    </div>
  );
}

export default Button;
