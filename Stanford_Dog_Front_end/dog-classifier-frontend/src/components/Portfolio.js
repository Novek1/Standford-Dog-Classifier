import React from "react";

function Portfolio() {
    return (
        <div className="portfolio" style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            <h2>About this Project</h2>

            <p>
                This is an end-to-end Machine Learning project I built to demonstrate production deployment of a deep learning model.

                I fine-tuned <strong> MobileNetV2 </strong> on the Stanford Dogs dataset to classify dog breeds from images. The trained model is deployed through a strong <strong>FastAPI</strong> backend hosted on strong Render, with a responsive <strong>React</strong> frontend deployed on Netlify.

                The application allows users to upload an image and receive real-time breed predictions through a REST API pipeline.


            </p>


            <p>Tech stack:</p>
            <ul>
                <li>TensorFlow / Keras</li>
                <li>Python (model training + API)</li>
                <li>FastAPI (backend inference service)</li>
                <li>React (frontend UI)</li>
                <li>Render (backend hosting)</li>
                <li>Netlify (frontend hosting)</li>
            </ul>
            <p>
                Dataset Used:{" "}
                <a href="http://vision.stanford.edu/aditya86/ImageNetDogs/main.html" target="_blank" rel="noopener noreferrer">
                    Stanford Dogs Dataset
                </a>
            </p>
            <p>
                GitHub and Other Work:{" "}
                <a href="https://github.com/Novek1" target="_blank" rel="noopener noreferrer">
                    Novek1
                </a>
            </p>

            <p>
                LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/kevon-bvunza-567524225/" target="_blank" rel="noopener noreferrer">
                    Kevon Bvunza - Python/ML Engineer
                </a>
            </p>

            <p>
                Upload  a picture of your dog using the "Choose File" button and click "Predict Breed"
            </p>
        </div>
    );
}

export default Portfolio;