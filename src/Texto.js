import React from "react";
import Parrafo from "./Parrafo";

export default function Texto({ text, traduccion }) {
  const random = () => {
    return Math.floor(Math.random() * 100);
  };
  return (
    <div>
      {text.map((e) => {
        return (
          <p
            style={{
              backgroundColor: `rgb(${random()},${random()},${random()})`,
              color: "wheat",
            }}
          >
            {traduccion ? <Parrafo texto={e} /> : e}
          </p>
        );
      })}
    </div>
  );
}
