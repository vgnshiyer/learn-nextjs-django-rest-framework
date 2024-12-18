'use client';

import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return <button onClick={() => setLikes(likes + 1)}>Like ( {likes} )</button>
}

export default LikeButton;
