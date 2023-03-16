import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Parrafo from "./Parrafo";
import Texto from "./Texto";
const axios = require("axios").default;

function App() {
  const [options, setOptions] = useState([]);
  const [click, setClick] = useState(false);
  const [traduccion, setTraduccion] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://libretranslate.com/languages", {
  //       headers: { accept: "application/json" },
  //     })
  //     .then((res) => {
  //       setOptions(res.data);
  //     });
  // }, []);

  //  curl -X GET "https://libretranslate.de/languages" -H  "accept: application/json"
  const transformar = (trad) => {
    let punto = input?.split(".");
    let coma = punto.map((e) => e?.split(","));
    setOutput(coma);
    setClick(true);
    setTraduccion(trad);
  };

  return (
    <>
      <textarea
        style={{ width: "90%", margin: "25px 5%" }}
        name=""
        id=""
        cols="150"
        rows="15"
        onInput={(e) => setInput(e.target.value)}
      ></textarea>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          style={{
            padding: "10px",
            borderRadius: "15%",
            backgroundColor: "green",
            fontWeight: "bold",
          }}
          onClick={() => transformar(false)}
        >
          Solo texto
        </button>
        <button
          style={{
            padding: "10px",
            borderRadius: "15%",
            backgroundColor: "red",
            fontWeight: "bold",
          }}
          onClick={() => transformar(true)}
        >
          Traducir
        </button>
      </div>
      {click &&
        output?.map((e) => {
          return <Texto text={e} traduccion={traduccion} />;
        })}
      {/* <Parrafo texto={"Mostrar respuestas adicionales"} />; */}
    </>
  );
}

export default App;
