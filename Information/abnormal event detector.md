# Abnormal Event Detection in Surveillance Video

Web application for abnormal event detection in surveillance video using a ConvLSTM autoencoder. Supports video upload and live camera feed, with an enhanced frontend and an API endpoint for IP camera middleware integration.

## Overview

This project implements an intelligent surveillance pipeline that flags unusual activity in video streams. The system analyzes spatiotemporal patterns in real time and provides visual alerts when anomalies are detected. It is suitable for security monitoring, safety applications, and automated surveillance demos.

## Key Technologies

- Deep learning: ConvLSTM autoencoder for spatiotemporal feature learning
- Computer vision: OpenCV for frame extraction and preprocessing
- Object detection: YOLO for real-time object recognition
- Face detection: Haar cascades for privacy-aware alerting
- Web stack: Flask backend with a responsive frontend

## Pipeline

```
Video Upload / Live Feed
  -> Frame Extraction (OpenCV)
  -> Preprocessing (resize, normalize)
  -> Feature Learning (ConvLSTM autoencoder)
  -> Anomaly Score (reconstruction error)
  -> Adaptive Thresholding
  -> Alert + Visualization
```

## Features

- Video upload analysis with anomaly score curve and frame gallery
- Live camera feed analysis with adjustable threshold and score overlay
- Accessibility-focused UI: ARIA labels, keyboard navigation, and clear feedback
- IP camera middleware support via a dedicated API endpoint

## Setup

1. Create a virtual environment (recommended)

   ```bash
   python -m venv venv
   venv\Scripts\activate   # Windows
   # source venv/bin/activate   # Linux/Mac
   ```

2. Install dependencies

   ```bash
   pip install -r requirements.txt
   ```

3. Optional: train the model

   Without training, the app runs with random weights (scores will be arbitrary).

   ```bash
   # Synthetic data (quick demo)
   python train.py --epochs 20 --num_samples 500

   # On your own normal video
   python train.py --epochs 30 --video path/to/normal_surveillance.mp4 --save weights/convlstm_ae.pt
   ```

   Weights are saved to `weights/convlstm_ae.pt`.

## Run the App

```bash
python app.py
```

Open `http://localhost:5000` in your browser.

## Live Feed and Camera Compatibility

### Web Camera (Current Implementation)

- Works with built-in webcams and USB cameras
- Requires HTTPS or localhost for browser security
- Fixed resolution: 640x480
- Frame rate: ~10 FPS (100ms intervals)

### IP Cameras

Direct IP camera integration requires middleware because browsers cannot access RTSP/RTMP streams directly.

#### Why direct access is not supported

1. IP cameras use RTSP/RTMP, not WebRTC
2. `getUserMedia()` only accesses local devices
3. Browser security blocks direct IP camera access

#### Recommended middleware approach

```python
import cv2

camera = cv2.VideoCapture("rtsp://camera_ip/stream")
# Convert frames and send to /api/ip-camera-frame
```

#### IP Camera API Endpoint

```
POST /api/ip-camera-frame
{
  "image": "base64_encoded_frame",
  "camera_id": "camera_01",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## Configuration Notes

- Threshold: higher means fewer alerts (stricter)
- Max frames: limits frames per upload to control processing time
- Frame size: fixed at 224x224; sequence length is 10 frames

## Performance Tips

- Use stable lighting and fixed camera angles
- Avoid busy backgrounds where possible
- Start threshold in the 0.05-0.10 range and tune for your data

## Project Structure

```
├── app.py                 # Flask app (upload + live APIs + IP camera endpoint)
├── pipeline.py            # Frame extraction, preprocessing, detector
├── train.py               # Training script for ConvLSTM AE
├── detection_utils.py     # Face/object detection utilities
├── model/
│   └── convlstm_autoencoder.py
├── weights/               # Saved model (created via train.py)
├── templates/
│   └── index.html         # Responsive UI
├── static/
│   ├── style.css          # Styles
│   └── app.js             # Client logic and error handling
└── requirements.txt
```

## License

MIT.
