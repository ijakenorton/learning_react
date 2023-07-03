import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) {
    return <FcLike onClick={toggle}></FcLike>;
  } else {
    return (
      <FcLikePlaceholder onClick={toggle}></FcLikePlaceholder>
    );
  }
};

export default Like;
