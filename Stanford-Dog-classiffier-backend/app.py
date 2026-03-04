
import json
import numpy as np
from PIL import Image
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, File, UploadFile
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],

    allow_headers=["*"],
)

# Load model once at startup
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "dog_classifier_model.keras")

model = load_model(MODEL_PATH)

# Load class names once at startup
with open(os.path.join(BASE_DIR, "clean_class_names.json")) as f:
    clean_class_names = json.load(f)


def preprocess_image(image):
    image = image.convert("RGB")
    image = image.resize((224, 224))
    array = np.array(image) / 255.0
    array = np.expand_dims(array, axis=0)
    return array


@app.post("/predict")
async def predict_image(file: UploadFile = File(...)):

    # Convert uploaded file to PIL image
    image = Image.open(file.file)

    # Preprocess
    processed = preprocess_image(image)

    # Predict
    preds = model.predict(processed)[0]

    confidence = float(np.max(preds))
    class_idx = int(np.argmax(preds))

    # Reject non-dog images
    if confidence < 0.6:
        return {
            "success": False,
            "message": "No dog detected",
            "confidence": f"{round((confidence/1.00)*100, 2)} %"
        }

    # Return breed name
    return {
        "success": True,
        "breed": clean_class_names[class_idx].title(),
        "confidence": f"{round((confidence/1.00)*100, 2)} %"
    }




# use , python -m uvicorn app:app --reload , in the terminal to run
