import React, { useState, useEffect } from "react";
import architecture from "./assets/architecture.png";

function Upload() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const selected = event.target.files[0];
        setFile(selected);
        setResult(null); // clear old result
        if (selected) {
            setPreview(URL.createObjectURL(selected));
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);

        try {
            const response = await fetch("https://standford-dog-classifier.onrender.com/predict", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult({
                success: false,
                message: "Error connecting to API",
            });
        }

        setLoading(false);
    };

    // Cleanup preview URL
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

return (
    <div className="upload-section">
        <input type="file" onChange={handleFileChange} />

        {preview && <img src={preview} alt="preview" width="300" />}

        <button onClick={handleUpload}>Predict Breed</button>

        {loading && <p>Predicting...</p>}

        {result && (
            <div className="prediction-result">
                {result.success ? (
                    <>
                        <h3>The image shows a {result.breed}</h3>
                        <p>Confidence: {result.confidence}</p>
                    </>
                ) : (
                    <p>{result.message}</p>
                )}
            </div>
        )}


        <div style={{ marginTop: "40px" }}>
            <h2>System Architecture</h2>
            <img
                src={architecture}
                alt="System Architecture Diagram"
                style={{
                    maxWidth: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                }}
            />
        </div>
    </div>
);
}





export default Upload;