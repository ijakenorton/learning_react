import React, { ReactNode } from "react";
import styles from "./Button.module.css";
interface Props {
  children: ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
