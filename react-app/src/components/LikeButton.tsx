import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return (
    <button
      onClick={toggle}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      {status ? (
        <AiFillHeart size={20} color="#ff6b81" />
      ) : (
        <AiOutlineHeart size={20} />
      )}
    </button>
  );
};

export default LikeButton;
