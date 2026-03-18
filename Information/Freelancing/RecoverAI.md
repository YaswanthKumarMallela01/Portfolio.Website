# 🔍 RecoverAI — Intelligent Lost & Found Recovery Platform

**RecoverAI** is an AI-powered web application that revolutionizes the way lost and found items are reported, matched, and recovered. It leverages **Natural Language Processing** and **Computer Vision** to intelligently match lost items with found ones — going far beyond manual keyword searching.

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.9+-3776AB?logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Flask-2.x-000000?logo=flask&logoColor=white" />
  <img src="https://img.shields.io/badge/PyTorch-ResNet50-EE4C2C?logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/NLP-Sentence--Transformers-FF6F00" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## ✨ Features

### 🧠 AI-Powered Matching
- **Semantic Text Matching** — Uses Sentence-Transformers (`all-MiniLM-L6-v2`) to understand the *meaning* behind item descriptions, not just keywords
- **Visual Similarity** — Extracts deep features from images using ResNet50 and computes cosine similarity to find visually matching items
- **Hybrid Scoring** — Combines text (40%) and image (60%) similarity for the most accurate match ranking

### 📋 Complete Item Lifecycle
- **Lost & Found Reporting** — Submit detailed reports with descriptions, categories, and image uploads
- **Smart Match Discovery** — One-click AI matching reveals ranked potential matches with confidence scores
- **Claim Workflow** — Users claim matched items → Admin reviews with justification → Approve or reject
- **Status Tracking** — Items flow through `Open → Matched → Claimed → Resolved` states

### 🛡️ Security & Access Control
- **Role-Based Permissions** — User, Staff, and Admin roles with route-level protection
- **Secure Authentication** — Werkzeug password hashing with Flask-Login session management
- **CSRF Protection** — All forms protected via Flask-WTF tokens
- **Safe File Uploads** — UUID-based filenames, extension validation, 10MB size limit

### 📊 Analytics & Notifications
- **Interactive Dashboard** — Chart.js visualizations: category distribution, 7-day activity timeline, resolution rates
- **Real-Time Notifications** — In-app notification bell with unread badges on claim status changes
- **User Profiles** — Personal stats showing report history, claim success rate, and activity

### 🎨 Modern UI/UX
- **Dark Glassmorphism Theme** — Premium dark mode with blur-glass cards, gradient accents, and micro-animations
- **Split-Screen Authentication** — Animated gradient panels on login/register
- **Fully Responsive** — Mobile-friendly layouts across all pages

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend** | Flask (Python) with Blueprints |
| **Database** | SQLite via SQLAlchemy |
| **Authentication** | Flask-Login + Werkzeug |
| **Security** | Flask-WTF (CSRF), Role-Based Access |
| **NLP** | Sentence-Transformers (`all-MiniLM-L6-v2`) |
| **Computer Vision** | PyTorch + Torchvision (ResNet50) |
| **Frontend** | Jinja2, Bootstrap 5, Bootstrap Icons |
| **Charts** | Chart.js 4 |
| **Styling** | Custom CSS (Dark Glassmorphism) |

---

## 🚀 Getting Started

### Prerequisites
- Python 3.9 or higher
- pip (Python package manager)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/RecoverAI.git
cd RecoverAI

# Create a virtual environment
python -m venv .venv

# Activate the virtual environment
.venv\Scripts\activate          # Windows
# source .venv/bin/activate     # macOS / Linux

# Install dependencies
pip install -r requirements.txt
```

> **Note:** On first run, AI models will be automatically downloaded (~200MB total). This is a one-time setup.

### Configuration

Create a `.env` file in the project root for sensitive configuration:

```env
SECRET_KEY=your-secret-key-here
DATABASE_URL=sqlite:///lost_found.db
```

### Running the App

```bash
python run_flask.py
```

Then open your browser at **http://127.0.0.1:5000**

### Default Admin Credentials

An admin account is auto-created on first launch:

| Email | Password |
|-------|----------|
| `admin@system.local` | `admin123` |

> ⚠️ **Important:** Change the default admin password immediately in production.

---

## 📁 Project Structure

```
RecoverAI/
├── app/
│   ├── __init__.py              # Flask app factory & blueprint registration
│   ├── models.py                # SQLAlchemy models (User, LostItem, FoundItem, Claim, Notification)
│   ├── extensions.py            # Flask extensions setup
│   ├── ai_matching.py           # AI score calculation (text + image similarity)
│   ├── utils.py                 # File upload utilities
│   ├── routes/
│   │   ├── auth.py              # Authentication (login, register, logout)
│   │   ├── dashboard.py         # Main dashboard with statistics
│   │   ├── items.py             # Lost/found item CRUD, search, AI matches
│   │   ├── claims.py            # Claim submission and tracking
│   │   ├── admin.py             # Admin panel & claim management
│   │   ├── profile.py           # User profile page
│   │   ├── notifications.py     # In-app notification system
│   │   └── analytics.py         # Analytics dashboard & JSON API
│   ├── templates/               # Jinja2 HTML templates
│   └── static/css/app.css       # Dark glassmorphism design system
├── ai_models/
│   ├── image_similarity.py      # ResNet50 feature extraction & cosine similarity
│   └── text_similarity.py       # Sentence-Transformer encoding & cosine similarity
├── uploads/                     # User-uploaded images (gitignored)
├── requirements.txt             # Python dependencies
├── run_flask.py                 # Application entry point
├── .gitignore
└── README.md
```

---

## 🧠 How AI Matching Works

```
┌──────────────┐     ┌──────────────────────┐     ┌───────────────┐
│  Lost Item   │────▶│  Text Similarity     │────▶│               │
│  Description │     │  (Sentence-BERT)     │     │   Combined    │
└──────────────┘     └──────────────────────┘     │   Score       │
                                                   │               │
┌──────────────┐     ┌──────────────────────┐     │  40% Text     │
│  Lost Item   │────▶│  Image Similarity    │────▶│  60% Image    │
│  Photo       │     │  (ResNet50)          │     │               │
└──────────────┘     └──────────────────────┘     └───────┬───────┘
                                                          │
                                                   ≥ 40% Threshold
                                                          │
                                                   ┌──────▼───────┐
                                                   │  Ranked      │
                                                   │  Matches     │
                                                   └──────────────┘
```

1. **Text Similarity** — Encodes descriptions using `all-MiniLM-L6-v2` Sentence-Transformer, then computes cosine similarity between embeddings
2. **Image Similarity** — Extracts 2048-dim feature vectors via ResNet50 (classification head removed), then computes cosine similarity
3. **Hybrid Score** — Weighted combination: 40% text + 60% image (text-only when no images available)
4. **Threshold** — Only matches with ≥ 40% similarity score are surfaced to users

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<p align="center">
  Built with ❤️ using Flask & PyTorch
</p>
