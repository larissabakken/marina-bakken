import React from "react";
import Hero from "./components/hero";
import Quiz from "./components/quiz/index.jsx";

export default function App() {
  return (
    <>
      <Hero />

      <div className="p-12 flex items-center justify-center">
        <Quiz />
      </div>
    </>
  );
}
