import React from "react";

function Portfolio() {
    return (
        <div className="portfolio" style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            <h2>About this Project</h2>

            <p>
                This is an end-to-end Machine Learning project I, Kevon Bvunza, built to demonstrate the deployment of a deep learning model.
                I fine-tuned a MobileNetV2 Convolutional Neural Network on the Stanford Dogs Dataset to accurately classify dog breeds from images.
                The project showcases my skills in model training, deployment with FastAPI, and building a responsive React frontend,
                delivering a full-stack Machine Learning application.


            </p>


            <p>Built using:</p>
            <ul>
                <li>TensorFlow / Keras</li>
                <li>FastAPI backend</li>
                <li>React frontend</li>
                <li>Python & JavaScript</li>
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