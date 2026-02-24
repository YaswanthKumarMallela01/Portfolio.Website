# 🎯 Yaswanth Kumar Mallela — Portfolio Website

[![Deployed on AWS](https://img.shields.io/badge/Deployed%20on-AWS-orange?style=flat&logo=amazon-aws)](https://aws.amazon.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A premium, dark-themed personal portfolio website for **Yaswanth Kumar Mallela** — 3rd Year B.Tech CSE (Data Science) student at Lovely Professional University. Built with vanilla HTML, CSS, and JavaScript. Designed for AWS deployment.

---

## 📸 Preview

| Section | Description |
|---|---|
| **Hero** | Animated particle canvas, spinning ring photo, typing role carousel |
| **About** | Bio, highlights, animated stat counters |
| **Skills** | 4 category pill grids (AI/ML, Web, DevOps, Data Science) |
| **Intent Block** | "Actively seeking ML / Backend internship" banner |
| **Projects** | 4 cards with live metrics + expandable case study modals |
| **Contact** | Info sidebar + mailto form |

---

## 🗂️ File Structure

```
Portfolio Website/
├── index.html              # Main HTML — all sections + 4 case study modals
├── styles.css              # Premium dark theme, animations, modal, responsive
├── script.js               # Cursor, particles, typing, counters, modal logic
├── assets/
│   ├── liver_arch.png      # Architecture diagram — Liver Cirrhosis project
│   ├── cert_arch.png       # Architecture diagram — AI Certificate Hub
│   ├── llm_arch.png        # Architecture diagram — LLM Code Engine
│   └── surveillance_arch.png # Architecture diagram — Abnormal Event Detector
└── Information/
    ├── Profile Photo.jpg   # Hero profile image
    ├── CVF.pdf             # Downloadable resume
    └── *.md                # Individual project documentation
```

---

## 🚀 Projects Showcased

| # | Project | Status | Tech |
|---|---|---|---|
| 1 | [Liver Cirrhosis Prediction System](https://yashs-liver-cirrhosis-prediction-system-uvwq.onrender.com) | 🟢 Live | Python, Flask, scikit-learn, Random Forest |
| 2 | [AI Certificate Management Hub](https://yaswanthaicertificatemanagementhub.free.nf/) | 🟢 Live | PHP, MySQL, OTP Auth, Prompt Engineering |
| 3 | [LLM-Based Code Synthesis Engine](https://github.com/YaswanthKumarMallela01/LLM-Based-Code-Synthesis-Engine) | 📦 GitHub | Python, Gemini API, Automation |
| 4 | [Abnormal Event Detector](https://abnormal-event-detector.onrender.com/) | 🟢 Live (Freelance) | PyTorch, ConvLSTM, OpenCV, YOLO, Flask |

---

## ⚙️ Features

- **Custom cursor** — dot + ring with lag interpolation and hover state
- **Particle canvas** — connected dot network animated in the hero
- **Typing effect** — rotating role phrases with blinking cursor
- **Scroll animations** — AOS-style fade-in via IntersectionObserver
- **Stat counters** — animated number roll-ups in About section
- **Case study modals** — slide-in panels with architecture diagrams, data flow, model rationale, trade-off grids, and quantified outcomes for all 4 projects
- **Intent block** — visible "seeking internship" intent banner between Skills and Projects
- **Responsive** — fully mobile-ready with hamburger nav

---

## 🛠️ Local Development

No build tools or dependencies needed — just open `index.html` in any browser.

```bash
# Option 1 — Open directly
start index.html

# Option 2 — VS Code Live Server
# Right-click index.html → "Open with Live Server"

# Option 3 — Python simple server
python -m http.server 8080
# Navigate to http://localhost:8080
```

---

## ☁️ AWS Deployment

### Option A — S3 Static Website Hosting (Recommended)

```bash
# 1. Create an S3 bucket (same name as your domain if using Route 53)
aws s3 mb s3://yaswanth-portfolio

# 2. Enable static website hosting
aws s3 website s3://yaswanth-portfolio --index-document index.html

# 3. Set bucket policy for public read (see below)
# 4. Upload all files
aws s3 sync . s3://yaswanth-portfolio --exclude "Information/*.md" --exclude ".git/*"

# 5. (Optional) Add CloudFront CDN for HTTPS + custom domain
```

**Bucket Policy:**
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::yaswanth-portfolio/*"
  }]
}
```

### Option B — EC2 with Nginx

```bash
# After SSHing into your EC2 instance
sudo apt update && sudo apt install nginx -y
sudo cp -r /path/to/portfolio/* /var/www/html/
sudo systemctl restart nginx
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#080b14` | Page background |
| `--bg-secondary` | `#0d1220` | Section alternates |
| `--bg-card` | `#111827` | Cards, modals |
| `--accent` | `#6c63ff` | Primary purple |
| `--accent-2` | `#e84393` | Pink gradient end |
| `--accent-3` | `#00d4ff` | Cyan badges |

---

## 📬 Contact

| Channel | Details |
|---|---|
| Email | [yashwanthkumarmallela@gmail.com](mailto:yashwanthkumarmallela@gmail.com) |
| LinkedIn | [yaswanthkumar1](https://www.linkedin.com/in/yaswanthkumar1/) |
| GitHub | [YaswanthKumarMallela01](https://github.com/YaswanthKumarMallela01) |
| Phone | +91 70133 74194 |

---

> Built with ❤️ · Hosted on AWS · © 2026 Yaswanth Kumar Mallela
