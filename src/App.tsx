import { useState } from "react";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        buttonLabel="Hello World"
        onClick={() => console.log("click")}
      ></Button>
    </>
  );
}

export default App;
