import { useState } from "react";

export default function FoodPic({ image, color, size = "small", children }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`food-pic ${size}`} style={{ background: color }}>
      {image && !failed && (
        <img src={image} alt="" onError={() => setFailed(true)} />
      )}
      {children && <span className="pic-label">{children}</span>}
    </div>
  );
}
