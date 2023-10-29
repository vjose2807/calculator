import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faEquals,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";

const OperatorButton = ({ operator, onClick }) => {
  let icon;
  switch (operator) {
    case "+":
      icon = faPlus;
      break;
    case "-":
      icon = faMinus;
      break;
    case "*":
      icon = faTimes;
      break;
    case "/":
      icon = faDivide;
      break;
    case "=":
      icon = faEquals;
      break;
    case "⌫":
      icon = faBackspace;
      break;
    default:
      icon = null;
  }

  return (
    <button onClick={() => onClick(operator)}>
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default OperatorButton;
