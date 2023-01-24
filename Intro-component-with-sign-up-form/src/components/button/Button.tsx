import { useState } from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  isClicked?: boolean;
};
export function Button({
  text,
  onClick = () => {},
  isClicked = false,
}: ButtonProps) {
  const [isClickedButton, setToggleClicked] = useState(isClicked);
  return (
    <button
      onClick={() => {
        onClick();
        setToggleClicked(!isClickedButton);
      }}
    >
      {isClickedButton ? "Clicked" : text}
    </button>
  );
}
