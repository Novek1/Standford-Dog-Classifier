import React from "react";
import Upload from "./components/Upload.js";
import Portfolio from "./components/Portfolio.js";
import "./App.css";

function App() {
    return (
        <div className="App">

            <h1>Kevon's Dog Breed Classifier</h1>

            <Portfolio />
            <Upload />

        </div>
    );
}

export default App;