import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Parrafo({ texto }) {
  const [traduccion, setTraduccion] = useState("");

  const translate = async (text) => {
    const res = await axios.get("https://api.mymemory.translated.net/get", {
      params: { q: text, langpair: "es|en" },
    });

    console.log(res?.data);
    if (res?.data?.matches[0]) setTraduccion(res?.data?.matches[0].translation);
  };

  useEffect(() => {
    translate(texto);
  }, []);

  return (
    <div>
      {" "}
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <p>{texto}</p>
          <p
            style={{
              paddingLeft: "50px ",
            }}
          >
            {traduccion}
          </p>
        </div>
      </div>
    </div>
  );
}
