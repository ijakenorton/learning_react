import React, { useState } from "react";
interface Props {
  children: string;
  maxChars: number;
}

const Expand = ({ children, maxChars }: Props) => {
  const [status, setStatus] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const handleClick = () => {
    setStatus(!status);
  };

  let buttonText = "less";
  if (status) {
    buttonText = "more";
    children = children.substring(0, maxChars);
  }
  return (
    <>
      <div>
        <p>
          {children}
          <button onClick={handleClick}>{buttonText}</button>
        </p>
      </div>
    </>
  );
};

export default Expand;
