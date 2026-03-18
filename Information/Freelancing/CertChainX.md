# 🔗 CertChainX — Blockchain-Powered Certificate Validation

> A decentralized application (dApp) for tamper-proof issuance and verification of academic certificates, powered by Ethereum & IPFS.

---

## ✨ Introduction

**CertChainX** provides a blockchain-based solution for generating and verifying digital certificates. Certificate data (UID, candidate name, course, organization, IPFS hash) is permanently stored on the Ethereum blockchain, ensuring absolute integrity and transparency.

The certificate PDF is first generated and stored onto **IPFS** via the **Pinata** pinning service. The resulting IPFS hash is then recorded on-chain along with all certificate metadata — making it permanently verifiable and tamper-proof.

---

## 👥 System Roles

| Role | Description |
| :--- | :--- |
| **Institute** | Issues and manages certificates. Can generate new certificates and view all previously issued ones. |
| **Verifier** | Validates certificates by uploading a PDF or entering a Certificate ID. |

---

## 🚀 Features

- **Smart Contract (Solidity):** Manages and stores certificate records on the Ethereum blockchain.
- **IPFS Integration (Pinata):** Decentralized, content-addressed storage for certificate PDFs.
- **Firebase Authentication:** Secure role-based login and registration for verifiers.
- **Streamlit UI:** Clean, modern glassmorphism interface for certificate generation and verification.
- **Dual Verification:** Verify by uploading a PDF *or* by entering a Certificate ID.
- **Tamper Detection:** Even a single-byte change in a PDF results in verification failure.
- **Docker Support:** One-command deployment via Docker Compose.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Blockchain** | Ethereum (Solidity 0.8.13) |
| **Dev Framework** | Truffle Suite & Ganache |
| **Decentralized Storage** | IPFS (via Pinata API) |
| **Web Framework** | Streamlit (Python 3.9+) |
| **Authentication** | Firebase Auth |
| **Libraries** | Web3.py, ReportLab, pdfplumber |

---

## 📂 Project Structure

```
CertChainX/
├── contracts/          # Solidity smart contracts
├── migrations/         # Truffle deployment scripts
├── application/
│   ├── app.py          # Main Streamlit app & navigation
│   ├── connection.py   # Web3 blockchain bridge
│   ├── pages/          # Role-specific portals (Institute, Verifier, Login)
│   ├── utils/          # UI styling & PDF utilities
│   └── db/             # Firebase authentication bridge
├── docker-compose.yml  # Docker orchestration
├── truffle-config.js   # Truffle network configuration
├── .env.example        # Template for environment variables
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

| Requirement | Version |
| :--- | :--- |
| **Node.js** | ≥ 16.0 (21.0+ recommended) |
| **Python** | ≥ 3.9.10 |
| **npm** (global) | `truffle`, `ganache-cli` |

### 1. Clone the Repository

```sh
git clone https://github.com/<your-username>/CertChainX.git
cd CertChainX
```

### 2. Install Dependencies

```sh
# Install Truffle & Ganache globally
npm install -g truffle ganache-cli

# Install Python dependencies (use a virtual environment!)
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux
pip install -r application/requirements.txt
```

### 3. Configure Environment Variables

Copy the example environment file and fill in your own keys:

```sh
cp .env.example .env
```

Your `.env` should contain:

```env
PINATA_API_KEY = "<Your Pinata API Key>"
PINATA_API_SECRET = "<Your Pinata Secret Key>"
FIREBASE_API_KEY = "<Your Firebase API Key>"
FIREBASE_AUTH_DOMAIN = "<your-project>.firebaseapp.com"
FIREBASE_DATABASE_URL = ""
FIREBASE_PROJECT_ID = "<your-project-id>"
FIREBASE_STORAGE_BUCKET = "<your-project>.appspot.com"
FIREBASE_MESSAGING_SENDER_ID = "<Your Sender ID>"
FIREBASE_APP_ID = "<Your App ID>"
institute_email = "admin@your-org.com"
institute_password = "your-secure-password"
```

> **How to get these keys:**
> - **Pinata:** Create an account at [pinata.cloud](https://app.pinata.cloud/) → API Keys → Generate New Key.
> - **Firebase:** Create a project at [Firebase Console](https://console.firebase.google.com/) → Enable Email/Password auth → Project Settings → Add Web App → Copy config.

### 4. Start the Blockchain

```sh
ganache-cli -h 127.0.0.1 -p 8545
```

### 5. Deploy Smart Contracts

Open a new terminal in the project root:

```sh
truffle migrate
```

### 6. Launch the App

```sh
cd application
streamlit run app.py
```

Visit [http://localhost:8501](http://localhost:8501) in your browser. 🎉

---

## 🐳 Docker Deployment

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Run

```sh
docker-compose up
```

Visit [http://localhost:8501](http://localhost:8501).

### Stop

```sh
docker-compose down
```

> **Note:** The default institute credentials are set in your `.env` file. Use those to log in as the Institute role for certificate generation.

### Building Custom Images

If you want to build images yourself instead of pulling from Docker Hub:

1. In `application/connection.py` line 6, change the host to:
   ```python
   w3 = Web3(Web3.HTTPProvider('http://ganache:8545'))
   ```
2. In `truffle-config.js` line 4, change the host to:
   ```javascript
   host: "ganache",
   ```
3. Build and run:
   ```sh
   docker-compose build
   docker-compose up
   ```

---

## 🔒 Security Notes

- **Never commit your `.env` file.** It contains API keys and secrets.
- The `.gitignore` is configured to exclude `.env`, virtual environments, and build artifacts.
- Always use a new set of API keys for production deployments.

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

<p align="center">
  Built with ❤️ using Ethereum, IPFS & Streamlit
</p>
