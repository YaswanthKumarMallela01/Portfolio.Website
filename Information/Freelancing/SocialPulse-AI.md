# SocialPulse AI — Social Media Analytics (Demo)

Flask-based web app for **text sentiment analysis** with a modern dashboard UI. Includes a simple ML pipeline (TF‑IDF + classic classifiers), batch CSV analysis, dataset explorer, model metrics, prediction history, and a small REST API.

> **Note**: This repository is intended for demo/portfolio/learning use. If you plan to publish it publicly, ensure you have rights to share the dataset and any generated documents/screenshots.

---

## Features

- **Analyze text**: sentiment prediction + confidence scores
- **Batch CSV**: upload and analyze multiple rows
- **Dataset explorer**: search/filter + pagination
- **Model metrics**: comparison charts + confusion matrix + classification report
- **REST API**: `POST /api/predict`

---

## Tech stack

- **Backend**: Python, Flask
- **ML/NLP**: scikit-learn, NLTK
- **Data**: pandas, NumPy
- **Frontend**: HTML/CSS/JS, Chart.js

---

## Quickstart (local)

### 1) Setup

```bash
python -m venv .venv
```

Activate:

- **Windows (PowerShell)**:

```bash
.\.venv\Scripts\Activate.ps1
```

- **macOS/Linux**:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 2) Train model

```bash
python train_model.py
```

### 3) Run the app

```bash
python app.py
```

Open `http://127.0.0.1:5000`.

---

## API

### `POST /api/predict`

Example:

```bash
curl -X POST http://127.0.0.1:5000/api/predict ^
  -H "Content-Type: application/json" ^
  -d "{\"text\":\"I love this product!\"}"
```

---

## Security & privacy

- **Do not commit secrets**: keep API keys/tokens in `.env` (or your hosting provider’s secret manager) and load via environment variables.
- **User data**: if you adapt this project for real social media data, review platform ToS and privacy requirements, and avoid storing personal data unless necessary.

---

## Project structure (high level)

```text
.
├─ app.py
├─ preprocess.py
├─ train_model.py
├─ requirements.txt
├─ templates/
├─ static/
├─ dataset/
└─ model/
```

---

## License

If this is client work, keep the repository **private** unless you have explicit permission to open-source it.
